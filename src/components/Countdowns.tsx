import { useState } from "react";
import { DEFAULT_TARGETS } from "../profile.ts";
import { calendarDaysBetween, countdownParts, formatLongDate, isIsoDate } from "../lib/dates.ts";
import { useAppState } from "../state.tsx";
import type { TargetKey } from "../types.ts";

const CARDS: { targetKey: TargetKey; label: string; noun: string }[] = [
  { targetKey: "escrita", label: "Prova escrita", noun: "da prova" },
  { targetKey: "taf", label: "TAF", noun: "do TAF" },
];

export function Countdowns({ todayIso }: { todayIso: string }) {
  return (
    <div className="grid grid-cols-2 gap-2 sm:gap-3">
      {CARDS.map((card) => (
        <CountdownCard key={card.targetKey} todayIso={todayIso} {...card} />
      ))}
    </div>
  );
}

function CountdownCard({
  todayIso,
  targetKey,
  label,
  noun,
}: {
  todayIso: string;
  targetKey: TargetKey;
  label: string;
  noun: string;
}) {
  const { data, setTarget, resetTarget } = useAppState();
  const iso = data.targets[targetKey];
  const fallback = data.profile?.[targetKey] ?? DEFAULT_TARGETS[targetKey];
  const adjusted = iso !== fallback;
  const [editing, setEditing] = useState(false);
  const [draft, setDraft] = useState(iso);
  const [error, setError] = useState("");
  const days = calendarDaysBetween(todayIso, iso);
  const parts = countdownParts(days);

  function open() {
    setDraft(iso);
    setError("");
    setEditing(true);
  }

  function save() {
    if (!isIsoDate(draft)) {
      setError("Escolha uma data válida.");
      return;
    }
    const year = Number(draft.slice(0, 4));
    if (year < 2026 || year > 2036) {
      setError("Use um ano entre 2026 e 2036.");
      return;
    }
    setTarget(targetKey, draft);
    setEditing(false);
  }

  return (
    <article className="rounded-2xl border border-white/10 bg-white/10 px-3 py-3 sm:px-4">
      <div className="flex items-start justify-between gap-2">
        <h2 className="text-[11px] font-semibold uppercase tracking-wide text-gold sm:text-xs">{label}</h2>
        {adjusted ? <span className="text-[11px] font-semibold text-gold">Ajustada</span> : null}
      </div>
      <p className="mt-2 flex items-baseline gap-2">
        <span className="font-serif text-4xl leading-none text-gold tabular-nums sm:text-5xl">{parts.big}</span>
        {parts.unit ? <span className="text-sm text-white/80">{parts.unit}</span> : null}
      </p>
      <p className="mt-2 text-sm leading-snug text-white/75">{formatLongDate(iso)}</p>
      {editing ? (
        <div className="mt-3 rounded-xl bg-white p-3 text-navy">
          <label className="block text-sm font-semibold" htmlFor={`data-${targetKey}`}>
            Nova data {noun}
            <input
              id={`data-${targetKey}`}
              className="field mt-1"
              type="date"
              value={draft}
              min="2026-01-01"
              max="2036-12-31"
              onChange={(event) => setDraft(event.target.value)}
            />
          </label>
          {error ? (
            <p role="alert" className="mt-2 text-sm text-clay">
              {error}
            </p>
          ) : null}
          <div className="mt-3 flex flex-wrap gap-2">
            <button type="button" className="btn btn-primary" onClick={save}>
              Salvar
            </button>
            <button type="button" className="btn btn-quiet" onClick={() => setEditing(false)}>
              Cancelar
            </button>
            {adjusted ? (
              <button
                type="button"
                className="btn btn-quiet"
                onClick={() => {
                  resetTarget(targetKey);
                  setEditing(false);
                }}
              >
                Data prevista
              </button>
            ) : null}
          </div>
        </div>
      ) : (
        <button
          type="button"
          className="mt-2 min-h-11 text-sm text-white/85 underline decoration-white/30 underline-offset-4"
          onClick={open}
        >
          Alterar data
        </button>
      )}
    </article>
  );
}
