import { Browser } from "@capacitor/browser";
import { Capacitor } from "@capacitor/core";

export const MURAL_RAW_URL =
  "https://raw.githubusercontent.com/victorggcosta/rumo-efomm/main/public/data/avisos-efomm.json";

const CACHE_KEY = "rumo-efomm.mural";
const READ_KEY = "rumo-efomm.mural-lidos";

export const MURAL_PORTALS = [
  { id: "ciaga", label: "CIAGA", url: "https://www.marinha.mil.br/ciaga/" },
  { id: "ciaba", label: "CIABA", url: "https://www.marinha.mil.br/ciaba/" },
  { id: "provas", label: "Provas anteriores", url: "https://www.marinha.mil.br/ciaga/efommadmissao" },
] as const;

export type MuralCategoria = "Edital" | "Comunicado" | "Resultado/TAF";
export type MuralOrgao = "CIAGA" | "CIABA";

export type MuralAviso = {
  id: string;
  titulo: string;
  dataPublicacao: string;
  orgao: MuralOrgao;
  categoria: MuralCategoria;
  linkOficial: string;
  viaPortal?: boolean;
};

export type MuralFeed = {
  ultimaAtualizacao: string;
  avisos: MuralAviso[];
};

export type MuralCache = {
  feed: MuralFeed;
  sincronizadoEm: string;
};

const CATEGORIAS = new Set<MuralCategoria>(["Edital", "Comunicado", "Resultado/TAF"]);
const ORGAOS = new Set<MuralOrgao>(["CIAGA", "CIABA"]);

export function loadMuralCache(): MuralCache | null {
  try {
    const raw = localStorage.getItem(CACHE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as MuralCache;
    const feed = sanitizeFeed(parsed.feed);
    if (!feed || typeof parsed.sincronizadoEm !== "string") return null;
    return { feed, sincronizadoEm: parsed.sincronizadoEm };
  } catch {
    return null;
  }
}

export function loadReadIds(): string[] {
  try {
    const raw = localStorage.getItem(READ_KEY);
    const parsed = raw ? (JSON.parse(raw) as unknown) : [];
    return Array.isArray(parsed) ? parsed.filter((item) => typeof item === "string") : [];
  } catch {
    return [];
  }
}

export function rememberRead(id: string) {
  const next = [...new Set([...loadReadIds(), id])].slice(-400);
  localStorage.setItem(READ_KEY, JSON.stringify(next));
}

export async function refreshMural(): Promise<{ cache: MuralCache; remoto: boolean }> {
  const remote = await fetchFeed(MURAL_RAW_URL);
  if (remote) {
    const cache = { feed: remote, sincronizadoEm: new Date().toISOString() };
    localStorage.setItem(CACHE_KEY, JSON.stringify(cache));
    return { cache, remoto: true };
  }
  const bundled = await fetchFeed(`${import.meta.env.BASE_URL}data/avisos-efomm.json`);
  const saved = loadMuralCache();
  if (saved) return { cache: saved, remoto: false };
  if (bundled) {
    const cache = { feed: bundled, sincronizadoEm: bundled.ultimaAtualizacao || new Date().toISOString() };
    localStorage.setItem(CACHE_KEY, JSON.stringify(cache));
    return { cache, remoto: false };
  }
  throw new Error("sem mural");
}

export async function openOfficial(url: string) {
  if (Capacitor.isNativePlatform()) {
    await Browser.open({ url });
    return;
  }
  window.open(url, "_blank", "noopener,noreferrer");
}

async function fetchFeed(url: string): Promise<MuralFeed | null> {
  try {
    const response = await fetch(url, { cache: "no-store" });
    if (!response.ok) return null;
    return sanitizeFeed(await response.json());
  } catch {
    return null;
  }
}

function sanitizeFeed(value: unknown): MuralFeed | null {
  if (!value || typeof value !== "object") return null;
  const record = value as { ultimaAtualizacao?: unknown; avisos?: unknown };
  if (!Array.isArray(record.avisos)) return null;
  const avisos = record.avisos.flatMap((item) => {
    if (!item || typeof item !== "object") return [];
    const aviso = item as Partial<MuralAviso>;
    if (typeof aviso.id !== "string" || typeof aviso.titulo !== "string" || typeof aviso.linkOficial !== "string") return [];
    if (!ORGAOS.has(aviso.orgao as MuralOrgao) || !CATEGORIAS.has(aviso.categoria as MuralCategoria)) return [];
    if (!/^https:\/\//.test(aviso.linkOficial)) return [];
    return [
      {
        id: aviso.id,
        titulo: aviso.titulo,
        dataPublicacao: typeof aviso.dataPublicacao === "string" ? aviso.dataPublicacao : "",
        orgao: aviso.orgao as MuralOrgao,
        categoria: aviso.categoria as MuralCategoria,
        linkOficial: aviso.linkOficial,
        ...(aviso.viaPortal === true ? { viaPortal: true as const } : {}),
      },
    ];
  });
  return {
    ultimaAtualizacao: typeof record.ultimaAtualizacao === "string" ? record.ultimaAtualizacao : "",
    avisos,
  };
}
