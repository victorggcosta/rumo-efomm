import { useEffect, useState } from "react";
import { ExternalLink } from "lucide-react";
import {
  MURAL_PORTALS,
  loadMuralCache,
  loadReadIds,
  openOfficial,
  refreshMural,
  rememberRead,
  type MuralAviso,
  type MuralCache,
} from "../lib/mural.ts";

const FILTERS = [
  { id: "todos", label: "Todos" },
  { id: "Edital", label: "Editais" },
  { id: "Comunicado", label: "Comunicados" },
  { id: "Resultado/TAF", label: "TAF/Resultados" },
] as const;

type FilterId = (typeof FILTERS)[number]["id"];

export function MuralView() {
  const [cache, setCache] = useState<MuralCache | null>(() => loadMuralCache());
  const [readIds, setReadIds] = useState<string[]>(() => loadReadIds());
  const [filter, setFilter] = useState<FilterId>("todos");
  const [loading, setLoading] = useState(false);
  const [note, setNote] = useState("");

  useEffect(() => {
    void sync(false);
  }, []);

  async function sync(manual: boolean) {
    setLoading(true);
    try {
      const result = await refreshMural();
      setCache(result.cache);
      setNote(result.remoto || !manual ? "" : "Não consegui buscar a lista nova. Mostrando a última versão salva neste aparelho.");
    } catch {
      setNote("Não consegui ler o mural agora.");
    } finally {
      setLoading(false);
    }
  }

  async function openDocument(item: MuralAviso) {
    const next = [...new Set([...readIds, item.id])];
    setReadIds(next);
    rememberRead(item.id);
    await openOfficial(item.linkOficial);
  }

  const avisos = (cache?.feed.avisos ?? []).filter((item) => filter === "todos" || item.categoria === filter);
  const synced = cache ? formatSync(cache.sincronizadoEm) : "";

  return (
    <div id="mural-oficial" className="space-y-4">
      <header>
        <h2 className="font-serif text-3xl text-navy">Mural oficial</h2>
        <p className="mt-2 text-base leading-relaxed text-muted">
          Comunicados, editais e documentos publicados pelo CIAGA e pelo CIABA para o processo seletivo da EFOMM.
        </p>
      </header>

      <div className="sticky top-0 z-10 -mx-4 border-b border-line bg-paper/95 px-4 py-3 backdrop-blur">
        <div className="grid grid-cols-3 gap-2">
          {MURAL_PORTALS.map((portal) => (
            <button
              key={portal.id}
              type="button"
              className="btn btn-quiet min-h-11 px-2 text-sm"
              onClick={() => void openOfficial(portal.url)}
            >
              {portal.label}
            </button>
          ))}
        </div>
      </div>

      <section className="card space-y-3">
        <p className="text-sm text-muted">
          Última sincronização com a Marinha: {synced || "ainda não realizada"}
        </p>
        <button type="button" className="btn btn-primary" onClick={() => void sync(true)} disabled={loading}>
          {loading ? "Atualizando…" : "Atualizar Agora"}
        </button>
        {note ? (
          <p role="status" className="text-sm text-clay">
            {note}
          </p>
        ) : null}
        <div className="flex gap-2 overflow-x-auto pb-1" role="tablist" aria-label="Filtrar avisos">
          {FILTERS.map((item) => (
            <button
              key={item.id}
              type="button"
              role="tab"
              aria-selected={filter === item.id}
              className={`min-h-10 shrink-0 rounded-full px-3 text-sm font-semibold ${filter === item.id ? "bg-navy text-white" : "border border-line bg-white text-navy"}`}
              onClick={() => setFilter(item.id)}
            >
              {item.label}
            </button>
          ))}
        </div>
      </section>

      {avisos.length === 0 ? (
        <p className="card text-sm leading-relaxed text-muted">Nenhum aviso desta categoria na última lista salva neste aparelho.</p>
      ) : (
        <ul className="space-y-3">
          {avisos.map((item) => {
            const unread = !readIds.includes(item.id);
            return (
              <li key={item.id} className="card space-y-3">
                <div className="flex flex-wrap items-center gap-2 text-xs font-semibold">
                  <span className="rounded-full bg-navy px-2 py-1 text-white">{item.orgao}</span>
                  <span className="rounded-full bg-paper px-2 py-1 text-navy">{item.categoria}</span>
                  {unread ? <span className="rounded-full bg-gold px-2 py-1 text-navy">NOVO</span> : null}
                  {item.viaPortal ? (
                    <span className="rounded-full border border-gold bg-paper px-2 py-1 text-navy">Acessar via Portal Oficial</span>
                  ) : null}
                </div>
                <h3 className="font-serif text-xl leading-snug text-navy">{item.titulo}</h3>
                {item.dataPublicacao ? <p className="text-sm text-muted">{formatDay(item.dataPublicacao)}</p> : null}
                <button type="button" className="btn btn-primary w-full" onClick={() => void openDocument(item)}>
                  <ExternalLink className="size-4" aria-hidden="true" />
                  Abrir Documento Oficial
                </button>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}

function formatSync(iso: string): string {
  const date = new Date(iso);
  if (Number.isNaN(date.getTime())) return "";
  return date.toLocaleString("pt-BR", { dateStyle: "short", timeStyle: "short" });
}

function formatDay(iso: string): string {
  const match = /^(\d{4})-(\d{2})-(\d{2})$/.exec(iso);
  if (!match) return iso;
  const date = new Date(Number(match[1]), Number(match[2]) - 1, Number(match[3]));
  return date.toLocaleDateString("pt-BR", { day: "numeric", month: "long", year: "numeric" });
}
