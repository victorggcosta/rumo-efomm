import { findTopic } from "../data/topics.ts";
import { formatLongDate } from "../lib/dates.ts";
import { dueReviews, nextReview } from "../lib/reviews.ts";
import { useAppState } from "../state.tsx";

export function DueReviews({ todayIso }: { todayIso: string }) {
  const { data, completeReview } = useAppState();
  const due = dueReviews(data.reviews, todayIso);
  const upcoming = due.length === 0 ? nextReview(data.reviews, todayIso) : null;

  return (
    <section id="revisoes-hoje" className="rounded-2xl bg-navy px-4 py-5 text-white" aria-labelledby="revisoes-titulo">
      <h2 id="revisoes-titulo" className="font-serif text-2xl">
        Revisões vencendo hoje
      </h2>
      <p className="mt-2 text-sm leading-relaxed text-white/75">
        Um tópico marcado como Revisado, e cada questão nova no caderno de erros, ganham três datas: 1, 7 e 30 dias.
      </p>
      {due.length === 0 ? (
        <p className="mt-4 text-sm leading-relaxed text-white/85">
          {upcoming
            ? `Nada vence hoje. A próxima é ${reviewLabel(upcoming.topicId, upcoming.kind)} em ${formatLongDate(upcoming.due)}, ciclo de ${upcoming.stage} ${upcoming.stage === 1 ? "dia" : "dias"}.`
            : "Nada vence hoje. Quando você concluir um tópico, o ciclo aparece aqui."}
        </p>
      ) : (
        <ul className="mt-4 space-y-2">
          {due.map((item) => {
            const late = item.due < todayIso;
            return (
              <li key={item.id} className="rounded-2xl bg-white/10 px-3 py-3">
                <p className="font-semibold leading-snug">{reviewLabel(item.topicId, item.kind)}</p>
                <p className="mt-1 text-sm text-gold">
                  Ciclo de {item.stage} {item.stage === 1 ? "dia" : "dias"}
                  {late ? ` · desde ${formatLongDate(item.due)}` : ""}
                </p>
                <button type="button" className="btn mt-3 w-full bg-white text-navy" onClick={() => completeReview(item.id)}>
                  Revisado
                </button>
              </li>
            );
          })}
        </ul>
      )}
    </section>
  );
}

function reviewLabel(topicId: string, kind: "topico" | "erro"): string {
  const topic = findTopic(topicId)?.label ?? "Tópico";
  return kind === "erro" ? `Caderno de erros · ${topic}` : topic;
}
