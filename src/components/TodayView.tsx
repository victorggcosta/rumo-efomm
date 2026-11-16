import { Check } from "lucide-react";
import { AlertPermissionBanner } from "./AlertPermissionBanner.tsx";
import { DueReviews } from "./DueReviews.tsx";
import { PomodoroCard } from "./PomodoroCard.tsx";
import {
  currentRoutineId,
  dayPlan,
  isCurrentRange,
  reviewCheckedCount,
  type ScheduleBlock,
} from "../data/schedule.ts";
import { formatLongDate, freeWindowMessage, greetingForHour, type SPNow } from "../lib/dates.ts";
import { useAppState } from "../state.tsx";

export function TodayView({ now }: { now: SPNow }) {
  const { data, toggleCheck } = useAppState();
  const profile = data.profile;
  if (!profile) return null;
  const plan = dayPlan(profile.freeStart, profile.freeEnd);
  const checked = new Set(data.dailyChecks[now.iso] ?? []);
  const beforeWindow = now.minutesOfDay < plan.start;
  const onToggle = (itemId: string) => toggleCheck(itemId, now.iso);

  return (
    <div className="space-y-6">
    <AlertPermissionBanner />
    <DueReviews todayIso={now.iso} />
    <div className={`day-grid ${beforeWindow ? "day-morning" : "day-window"}`}>
      <div className="area-pomodoro">
        <PomodoroCard />
      </div>

      <section className="area-greeting">
        <h2 className="font-serif text-3xl text-navy sm:text-4xl">
          {greetingForHour(now.hour)}, {profile.name}.
        </h2>
        <p className="mt-2 text-lg text-ink">{formatLongDate(now.iso, true)}</p>
        <p className="mt-3 max-w-xl text-base leading-relaxed text-muted">
          {freeWindowMessage(now.minutesOfDay, plan.start, plan.end, profile.freeStart, profile.freeEnd)}
        </p>
      </section>

      <div className="area-side">
        <RoutineCard activeId={currentRoutineId(now.minutesOfDay, plan.routine)} routine={plan.routine} label={plan.label} />
        {plan.review ? <ReviewCard now={now} review={plan.review} checked={checked} onToggle={onToggle} /> : null}
      </div>

      <ScheduleCard now={now} planLabel={plan.label} blocks={plan.blocks} checked={checked} onToggle={onToggle} />
    </div>
    </div>
  );
}

function ScheduleCard({
  now,
  planLabel,
  blocks,
  checked,
  onToggle,
}: {
  now: SPNow;
  planLabel: string;
  blocks: ScheduleBlock[];
  checked: Set<string>;
  onToggle: (id: string) => void;
}) {
  return (
    <section className="area-schedule min-w-0" aria-labelledby="cronograma-titulo">
      <div className="mb-4">
        <h2 id="cronograma-titulo" className="font-serif text-2xl text-navy">
          Cronograma da janela livre
        </h2>
        <p className="mt-1 text-sm text-gold-deep">{planLabel}</p>
        <p className="mt-2 max-w-xl text-sm leading-relaxed text-muted">
            As marcações são só de hoje e recomeçam à meia-noite neste aparelho.
        </p>
      </div>
      <div className="space-y-3">
        {blocks.map((block) => (
          <BlockCard
            key={block.id}
            block={block}
            current={isCurrentRange(block.time, now.minutesOfDay)}
            checked={checked}
            onToggle={onToggle}
          />
        ))}
      </div>
    </section>
  );
}

function ReviewCard({
  now,
  review,
  checked,
  onToggle,
}: {
  now: SPNow;
  review: ScheduleBlock;
  checked: Set<string>;
  onToggle: (id: string) => void;
}) {
  const done = reviewCheckedCount(checked, review);
  return (
    <section className="area-bus card" aria-labelledby="revisao-titulo">
      <h2 id="revisao-titulo" className="font-serif text-2xl text-navy">
        Revisão curta
      </h2>
      <p className="mt-2 text-sm leading-relaxed text-muted">
        Um bloco antes da janela livre. Marque só o que couber.
      </p>
      <p className="mt-3 text-sm font-semibold text-navy">
        Feitos hoje: <span className="tabular-nums">{done}</span>
      </p>
      <div className="mt-4">
        <div className="mb-1 flex flex-wrap items-center gap-2">
          <h3 className="font-semibold text-navy">{review.title}</h3>
          <span className="text-sm tabular-nums text-gold-deep">{review.time}</span>
          {isCurrentRange(review.time, now.minutesOfDay) ? <NowPill /> : null}
        </div>
        <ul>
          {review.items.map((item) => (
            <CheckRow
              key={item.id}
              label={item.label}
              checked={checked.has(item.id)}
              onToggle={() => onToggle(item.id)}
            />
          ))}
        </ul>
      </div>
    </section>
  );
}

function RoutineCard({
  activeId,
  routine,
  label,
}: {
  activeId: string;
  routine: { id: string; time: string; label: string }[];
  label: string;
}) {
  return (
    <section className="area-routine card" aria-labelledby="rotina-titulo">
      <h2 id="rotina-titulo" className="font-serif text-2xl text-navy">
        O dia
      </h2>
      <p className="mt-2 text-sm leading-relaxed text-muted">
        Isto não é checklist. Serve para situar o dia. O que você marca é a janela livre, das {label.replace("–", " às ")}.
      </p>
      <ol className="mt-4 space-y-1.5">
        {routine.map((row) => {
          const active = row.id === activeId;
          return (
            <li
              key={row.id}
              className={`flex items-center gap-3 rounded-xl px-3 py-2 ${active ? "bg-navy text-white" : ""}`}
            >
              <span className={`w-36 shrink-0 text-sm tabular-nums ${active ? "text-gold" : "text-gold-deep"}`}>
                {row.time}
              </span>
              <span className="font-semibold">{row.label}</span>
              {active ? <span className="ml-auto text-xs font-semibold uppercase tracking-wide text-gold">Agora</span> : null}
            </li>
          );
        })}
      </ol>
    </section>
  );
}

function BlockCard({
  block,
  current,
  checked,
  onToggle,
}: {
  block: ScheduleBlock;
  current: boolean;
  checked: Set<string>;
  onToggle: (id: string) => void;
}) {
  return (
    <article className={`rounded-2xl border bg-white p-4 ${current ? "border-gold" : "border-line"}`}>
      <header className="mb-1 flex items-start justify-between gap-3">
        <div>
          <h3 className="text-lg font-semibold text-navy">{block.title}</h3>
          <p className="text-sm tabular-nums text-gold-deep">{block.time}</p>
        </div>
        {current ? <NowPill /> : null}
      </header>
      {block.hint ? <p className="mb-1 text-sm leading-relaxed text-muted">{block.hint}</p> : null}
      <ul>
        {block.items.map((item) => (
          <CheckRow
            key={item.id}
            label={item.label}
            checked={checked.has(item.id)}
            onToggle={() => onToggle(item.id)}
          />
        ))}
      </ul>
    </article>
  );
}

function CheckRow({
  label,
  checked,
  onToggle,
}: {
  label: string;
  checked: boolean;
  onToggle: () => void;
}) {
  return (
    <li>
      <button
        type="button"
        role="checkbox"
        aria-checked={checked}
        onClick={onToggle}
        className="flex min-h-12 w-full items-center gap-3 rounded-xl px-1 py-1.5 text-left hover:bg-paper"
      >
        <span
          aria-hidden="true"
          className={`flex size-7 shrink-0 items-center justify-center rounded-lg border ${
            checked ? "border-navy bg-navy text-gold" : "border-line bg-white"
          }`}
        >
          {checked ? <Check className="size-4" strokeWidth={2.6} /> : null}
        </span>
        <span className={checked ? "text-muted line-through decoration-line" : "text-ink"}>{label}</span>
      </button>
    </li>
  );
}

function NowPill() {
  return (
    <span className="rounded-full bg-gold px-2.5 py-1 text-xs font-semibold uppercase tracking-wide text-navy">
      Agora
    </span>
  );
}
