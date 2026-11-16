import { RANKS, XP, rankFor, type RankId } from "../lib/career.ts";

export function RankStrip({ xp }: { xp: number }) {
  const rank = rankFor(xp);
  return (
    <span className="mt-1 block min-w-0">
      <span className="flex items-center gap-2 text-xs text-white/80">
        <RankMark id={rank.current.id} className="size-5" />
        <span className="truncate">{rank.current.title}</span>
        <span className="shrink-0 tabular-nums text-gold">{rank.xp.toLocaleString("pt-BR")} XP</span>
      </span>
      <span className="mt-1 block h-1 overflow-hidden rounded-full bg-white/15" aria-hidden="true">
        <span className="block h-full bg-gold" style={{ width: `${rank.progress * 100}%` }} />
      </span>
    </span>
  );
}

export function RankCard({ xp }: { xp: number }) {
  const rank = rankFor(xp);
  const remaining = rank.next ? rank.next.xp - rank.xp : 0;
  return (
    <section id="rank-card" className="card" aria-labelledby="patente-titulo">
      <div className="flex items-start gap-4">
        <RankMark id={rank.current.id} className="size-16" />
        <div className="min-w-0 flex-1">
          <p className="text-sm font-semibold uppercase tracking-wide text-gold-deep">Marinha Mercante</p>
          <h3 id="patente-titulo" className="mt-1 font-serif text-2xl leading-tight text-navy">
            {rank.current.title}
          </h3>
          <p className="mt-1 text-sm tabular-nums text-muted">{rank.xp.toLocaleString("pt-BR")} XP</p>
        </div>
      </div>
      <div
        className="mt-4 h-2 overflow-hidden rounded-full bg-paper"
        role="progressbar"
        aria-valuemin={rank.current.xp}
        aria-valuemax={rank.next?.xp ?? rank.current.xp}
        aria-valuenow={rank.xp}
        aria-label="Progresso até a próxima patente"
      >
        <div className="h-full bg-navy" style={{ width: `${rank.progress * 100}%` }} />
      </div>
      <p className="mt-2 text-sm leading-relaxed text-muted">
        {rank.next
          ? `Faltam ${remaining.toLocaleString("pt-BR")} XP para ${rank.next.title}.`
          : "Patente máxima desta carreira."}
      </p>
      <ul className="mt-4 grid grid-cols-2 gap-2 text-sm">
        <li className="rounded-xl bg-paper px-3 py-2">Pomodoro concluído · {XP.pomodoro} XP</li>
        <li className="rounded-xl bg-paper px-3 py-2">Questão certa · {XP.question} XP</li>
        <li className="rounded-xl bg-paper px-3 py-2">Revisão feita · {XP.review} XP</li>
        <li className="rounded-xl bg-paper px-3 py-2">Treino registrado · {XP.workout} XP</li>
      </ul>
      <ol className="mt-4 space-y-1 text-sm text-muted">
        {RANKS.map((item) => (
          <li key={item.id} className={item.id === rank.current.id ? "font-semibold text-navy" : ""}>
            {item.xp.toLocaleString("pt-BR")} XP · {item.title}
          </li>
        ))}
      </ol>
    </section>
  );
}

function RankMark({ id, className }: { id: RankId; className?: string }) {
  return (
    <span className={`${className ?? "size-8"} flex shrink-0 items-center justify-center rounded-full border border-gold bg-navy text-gold`} aria-hidden="true">
      <svg viewBox="0 0 24 24" className="size-2/3" fill="none" stroke="currentColor" strokeWidth="1.6">
        {id === "candidato" ? <path d="M12 4v8M8 20l4-6 4 6M9 12h6" /> : null}
        {id === "aluno" ? (
          <>
            <path d="M12 3v7M8.5 18.5 12 14l3.5 4.5M9.5 10h5" />
            <path d="M5 21h14" />
          </>
        ) : null}
        {id === "praticante" ? (
          <>
            <circle cx="12" cy="12" r="7" />
            <path d="m14.5 9.5-1 4-4 1 1-4z" fill="currentColor" stroke="none" />
          </>
        ) : null}
        {id === "oficial2" ? (
          <>
            <Star x={8} y={12} />
            <Star x={16} y={12} />
          </>
        ) : null}
        {id === "oficial1" ? (
          <>
            <Star x={6.5} y={13} />
            <Star x={12} y={9} />
            <Star x={17.5} y={13} />
          </>
        ) : null}
        {id === "capitao" ? (
          <>
            <circle cx="12" cy="12" r="8" />
            <Star x={12} y={12} />
          </>
        ) : null}
      </svg>
    </span>
  );
}

function Star({ x, y }: { x: number; y: number }) {
  return <path d={`M${x} ${y - 3.2}l.8 1.8 2 .2-1.5 1.3.5 1.9L${x} ${y + .8}l-1.8 1.2.5-1.9-1.5-1.3 2-.2z`} fill="currentColor" stroke="none" />;
}
