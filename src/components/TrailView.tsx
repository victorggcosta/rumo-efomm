import { TopicCard } from "./TopicCard.tsx";
import { TRAIL } from "../data/topics.ts";

const BOOKS = [
  { subject: "Matemática", path: "Ciência e Aplicações → FME → Stewart" },
  { subject: "Física", path: "Os Fundamentos da Física → Tópicos de Física → Halliday" },
];

const GOALS = [
  { when: "Semanas 1–9", goal: "60% de acerto" },
  { when: "Semanas 10–18", goal: "65% de acerto" },
  { when: "Semanas 19–27", goal: "70% de acerto" },
  { when: "Semanas 28–33", goal: "75% de acerto" },
  { when: "Semanas 34–36", goal: "80% ou mais" },
];

export function TrailView({ onOpen }: { onOpen: (topicId: string) => void }) {
  return (
    <div className="space-y-6">
      <header>
        <h2 className="font-serif text-3xl text-navy">Trilha de 36 semanas</h2>
        <p className="mt-2 text-base leading-relaxed text-muted">
          Doze blocos de três semanas. O Nível 1 é a base, o Nível 2 é o pré-EFOMM e o Nível 3 é a reta final com as provas anteriores.
        </p>
      </header>

      <section className="card">
        <h3 className="font-serif text-2xl text-navy">Livros por nível</h3>
        <ul className="mt-3 space-y-3">
          {BOOKS.map((item) => (
            <li key={item.subject}>
              <p className="text-sm font-semibold text-gold-deep">{item.subject}</p>
              <p className="text-base text-ink">{item.path}</p>
            </li>
          ))}
        </ul>
        <h3 className="mt-5 font-serif text-xl text-navy">Meta de acerto</h3>
        <ul className="mt-3 space-y-2">
          {GOALS.map((item) => (
            <li key={item.when} className="flex items-baseline justify-between gap-3 text-base">
              <span>{item.when}</span>
              <span className="font-semibold text-navy">{item.goal}</span>
            </li>
          ))}
        </ul>
      </section>

      {TRAIL.map((block) => (
        <section key={block.id} className="space-y-3">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wide text-gold-deep">
              Nível {block.level} · Semanas {block.weeks} · meta {block.goal}
            </p>
            <h3 className="mt-1 font-serif text-2xl text-navy">{block.title}</h3>
            <p className="mt-1 text-sm leading-relaxed text-muted">{block.blurb}</p>
          </div>
          <ul className="space-y-3">
            {block.topics.map((topic) => (
              <TopicCard key={topic.id} id={topic.id} label={topic.label} onOpen={onOpen} />
            ))}
          </ul>
        </section>
      ))}
    </div>
  );
}
