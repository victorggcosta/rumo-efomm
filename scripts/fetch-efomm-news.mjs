import { createHash } from "node:crypto";
import { mkdir, readFile, writeFile } from "node:fs/promises";
import { dirname } from "node:path";
import * as cheerio from "cheerio";

const OUT = new URL("../public/data/avisos-efomm.json", import.meta.url);
const LIVE = [
  { orgao: "CIAGA", url: "https://www.marinha.mil.br/ciaga/" },
  { orgao: "CIAGA", url: "https://www.marinha.mil.br/ciaga/efommadmissao" },
  { orgao: "CIAGA", url: "https://www.marinha.mil.br/ciaga/noticiasdociaga" },
  { orgao: "CIABA", url: "https://www.marinha.mil.br/ciaba/" },
];
const LIMIT = 15;
const USER_AGENT = "RumoAEfomm/1.0 (mural oficial; +https://github.com/victorggcosta/rumo-efomm)";

const emptyFeed = () => ({ ultimaAtualizacao: new Date().toISOString(), avisos: [] });

async function main() {
  const previous = await readPrevious();
  try {
    const found = [];
    const seenPages = new Set();
    for (const source of LIVE) {
      const page = await fetchPage(source.url);
      if (!page) continue;
      found.push(...parsePage(page.html, source.orgao));
      for (const item of found) {
        if (seenPages.has(item.linkOficial) || seenPages.size > 4) continue;
        if (!/processo seletivo efomm/i.test(item.titulo) || /\.pdf($|\?)/i.test(item.linkOficial)) continue;
        seenPages.add(item.linkOficial);
        const nested = await fetchPage(item.linkOficial);
        if (nested) found.push(...parsePage(nested.html, source.orgao));
      }
    }
    const ranked = rank(found);
    const avisos = balanceOrgans(ranked).slice(0, LIMIT);
    console.log(`Encontrados ${ranked.filter((item) => item.orgao === "CIAGA").length} no CIAGA e ${ranked.filter((item) => item.orgao === "CIABA").length} no CIABA.`);
    if (avisos.length === 0) {
      console.log("Nenhum aviso novo. A lista anterior foi mantida.");
      if (!previous) await writeFeed(emptyFeed());
      return;
    }
    if (previous && sameAvisos(previous.avisos, avisos)) {
      console.log("Os avisos oficiais não mudaram.");
      return;
    }
    const feed = { ultimaAtualizacao: new Date().toISOString(), avisos };
    await writeFeed(feed);
    console.log(`Salvos ${avisos.length} avisos em public/data/avisos-efomm.json`);
  } catch (error) {
    console.log(`Falha ao ler a Marinha (${error instanceof Error ? error.message : "erro"}). A lista anterior foi mantida.`);
    if (!previous) await writeFeed(emptyFeed());
  }
}

async function readPrevious() {
  try {
    const parsed = JSON.parse(await readFile(OUT, "utf8"));
    return parsed && Array.isArray(parsed.avisos) ? parsed : null;
  } catch {
    return null;
  }
}

async function writeFeed(feed) {
  await mkdir(dirname(OUT.pathname), { recursive: true });
  await writeFile(OUT, `${JSON.stringify(feed, null, 2)}\n`);
}

async function fetchPage(url) {
  const live = await fetchHtml(url);
  if (live && !isChallenge(live)) return { html: live, url };
  const archived = await fetchArchive(url);
  return archived ? { html: archived, url } : null;
}

async function fetchHtml(url) {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), 20_000);
  try {
    const response = await fetch(url, {
      signal: controller.signal,
      redirect: "follow",
      headers: { "user-agent": USER_AGENT, accept: "text/html" },
    });
    if (!response.ok) return null;
    return await response.text();
  } catch {
    return null;
  } finally {
    clearTimeout(timer);
  }
}

function isChallenge(html) {
  return /just a moment|cf-mitigated|challenge-platform/i.test(html.slice(0, 4_000));
}

async function fetchArchive(url) {
  const target = url.replace(/^https?:\/\//, "");
  const cdx = `https://web.archive.org/cdx/search/cdx?url=${encodeURIComponent(target)}&output=json&fl=timestamp&filter=statuscode:200&limit=-1`;
  const listing = await fetchHtml(cdx);
  if (!listing) return null;
  let timestamp = "";
  try {
    const rows = JSON.parse(listing);
    timestamp = rows.at(-1)?.[0] ?? "";
  } catch {
    return null;
  }
  if (!/^\d{14}$/.test(timestamp)) return null;
  return fetchHtml(`https://web.archive.org/web/${timestamp}/${url}`);
}

function parsePage(html, orgao) {
  const $ = cheerio.load(html);
  const items = [];
  $("a[href]").each((_, element) => {
    const linkOficial = officialUrl($(element).attr("href") ?? "");
    if (!linkOficial) return;
    const parent = collapse($(element).parent().text());
    const cycle = parent.match(/processo seletivo\s+((?:20\d{2}\s*[-–]\s*)?20\d{2})/i)?.[1]?.replace(/\s+/g, "") ?? "";
    const rawTitle = collapse($(element).text());
    const titulo = titleFor(rawTitle, cycle, linkOficial);
    if (!titulo || !relevant(titulo, linkOficial)) return;
    const published = parent.match(/publicado em\s+(\d{2})\/(\d{2})\/(\d{4})/i);
    items.push({
      id: createHash("sha1").update(linkOficial).digest("hex").slice(0, 12),
      titulo,
      dataPublicacao: published ? `${published[3]}-${published[2]}-${published[1]}` : "",
      orgao,
      categoria: categoryFor(`${titulo} ${linkOficial}`),
      linkOficial,
    });
  });
  return items;
}

function titleFor(rawTitle, cycle, url) {
  if (/^dia\s*1$/i.test(rawTitle) && cycle) return `Prova do 1º dia — Processo Seletivo EFOMM ${cycle}`;
  if (/^dia\s*2$/i.test(rawTitle) && cycle) return `Prova do 2º dia — Processo Seletivo EFOMM ${cycle}`;
  if (rawTitle.length < 8) return "";
  if (/^(a efomm|admissão|adaptação|rotina|estrutura|atividades|história|mais notícias)$/i.test(rawTitle)) return "";
  if (/efomm|edital|prova|resultado|gabarito|retifica|processo seletivo/i.test(`${rawTitle} ${url}`)) return rawTitle;
  return "";
}

function relevant(titulo, url) {
  if (!/marinha\.mil\.br/i.test(url) || /\/web\/\d|\*/.test(url)) return false;
  if (/captures$/i.test(titulo)) return false;
  let decoded = url;
  try {
    decoded = decodeURIComponent(url);
  } catch {
    decoded = url;
  }
  return /efomm/i.test(`${titulo} ${decoded}`);
}

function categoryFor(value) {
  const text = value.toLowerCase();
  if (/taf|resultado|gabarito|classifica/.test(text)) return "Resultado/TAF";
  if (/edital|retifica|prova|processo seletivo/.test(text)) return "Edital";
  return "Comunicado";
}

function officialUrl(href) {
  const cleaned = href
    .replace(/&amp;/g, "&")
    .replace(/^https?:\/\/web\.archive\.org\/web\/\d+(?:id_|im_|js_|cs_)?\//, "")
    .replace(/^\/web\/\d+\//, "");
  if (!cleaned || cleaned.startsWith("#") || cleaned.startsWith("mailto:")) return "";
  try {
    const url = new URL(cleaned, "https://www.marinha.mil.br");
    if (!/(\.|^)marinha\.mil\.br$/i.test(url.hostname)) return "";
    if (url.href.includes("*") || /\/web\/\d/.test(url.pathname)) return "";
    url.hash = "";
    return url.href;
  } catch {
    return "";
  }
}

function rank(items) {
  const unique = new Map();
  for (const item of items) unique.set(item.linkOficial, item);
  return [...unique.values()].sort((a, b) => yearOf(b) - yearOf(a) || a.titulo.localeCompare(b.titulo, "pt-BR"));
}

function balanceOrgans(items) {
  const picked = items.slice(0, LIMIT);
  for (const orgao of ["CIAGA", "CIABA"]) {
    if (picked.some((item) => item.orgao === orgao)) continue;
    const extra = items.find((item) => item.orgao === orgao);
    if (!extra || picked.length === 0) continue;
    picked[picked.length - 1] = extra;
  }
  return picked;
}

function yearOf(item) {
  const years = [...`${item.titulo} ${item.linkOficial}`.matchAll(/20\d{2}/g)].map((match) => Number(match[0]));
  return years.length ? Math.max(...years) : 0;
}

function sameAvisos(previous, next) {
  const sign = (list) => list.map((item) => [item.id, item.titulo, item.linkOficial, item.categoria, item.orgao, item.dataPublicacao].join("|")).join("\n");
  return sign(previous) === sign(next);
}

function collapse(value) {
  return value.replace(/\s+/g, " ").trim();
}

await main();
