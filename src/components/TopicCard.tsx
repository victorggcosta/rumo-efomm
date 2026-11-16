import { lessonFor } from "../data/lessons.ts";
import { rigorBadge } from "../data/questoes/registry.ts";
import { STATUS_OPTIONS } from "../data/topics.ts";
import { useAppState } from "../state.tsx";
import type { TopicStatus } from "../types.ts";

export function TopicCard({
  id,
  label,
  onOpen,
}: {
  id: string;
  label: string;
  onOpen: (topicId: string) => void;
}) {
  const { data, setTopicStatus } = useAppState();
  const status: TopicStatus = data.topicStatus[id] ?? "nao_iniciado";
  const ready = Boolean(lessonFor(id));
  const badge = rigorBadge(id);

  return (
    <li className="rounded-2xl border border-line bg-white px-4 py-4">
      <div className="flex flex-wrap items-center gap-2">
        <p className="font-semibold leading-snug text-ink">{label}</p>
        {badge ? (
          <span className="rounded-full bg-navy px-2 py-1 text-xs font-semibold text-white">{badge}</span>
        ) : ready ? (
          <span className="rounded-full bg-gold px-2 py-1 text-xs font-semibold text-navy">Aula pronta</span>
        ) : (
          <span className="rounded-full bg-paper px-2 py-1 text-xs font-semibold text-muted">Aula em seguida</span>
        )}
      </div>
      <button
        id={`abrir-${id}`}
        type="button"
        className="btn btn-primary mt-3 w-full"
        onClick={() => onOpen(id)}
      >
        Abrir aula e questões
      </button>
      <div className="mt-3 grid grid-cols-3 gap-1 rounded-xl bg-paper p-1" role="group" aria-label={`Status de ${label}`}>
        {STATUS_OPTIONS.map((option) => {
          const active = status === option.id;
          return (
            <button
              key={option.id}
              type="button"
              aria-pressed={active}
              className={`min-h-11 rounded-lg px-1 py-2 text-center text-[12px] font-semibold leading-tight sm:text-sm ${
                active
                  ? option.id === "revisado"
                    ? "bg-navy text-white"
                    : option.id === "estudando"
                      ? "bg-gold text-navy"
                      : "bg-white text-navy"
                  : "text-muted"
              }`}
              onClick={() => setTopicStatus(id, option.id)}
            >
              {option.label}
            </button>
          );
        })}
      </div>
    </li>
  );
}
