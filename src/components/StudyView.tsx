import { useEffect, useState } from "react";
import { Minus, Plus } from "lucide-react";
import { ExamLauncher } from "./ExamLauncher.tsx";
import { TopicCard } from "./TopicCard.tsx";
import { lessonFor } from "../data/lessons.ts";
import { SUBJECTS, blocksFor } from "../data/topics.ts";
import { countLabel } from "../lib/format.ts";
import { useAppState } from "../state.tsx";
import type { SubjectId } from "../types.ts";

export function StudyView({ onOpen }: { onOpen: (topicId: string) => void }) {
  const { data, setQuestions } = useAppState();
  const [subject, setSubject] = useState<SubjectId>("matematica");
  const meta = SUBJECTS.find((item) => item.id === subject) ?? SUBJECTS[0];
  const blocks = blocksFor(subject);
  const topics = blocks.flatMap((block) => block.topics);
  const counts = { nao_iniciado: 0, estudando: 0, revisado: 0 };
  for (const topic of topics) counts[data.topicStatus[topic.id] ?? "nao_iniciado"] += 1;
  const next = topics.find((topic) => lessonFor(topic.id) && data.topicStatus[topic.id] !== "revisado") ?? topics.find((topic) => lessonFor(topic.id));

  return (
    <div className="space-y-6">
      <header>
        <h2 className="font-serif text-3xl text-navy">Estudar agora</h2>
        <p className="mt-2 text-base leading-relaxed text-muted">
          Um toque abre a aula: teoria, questões, flashcards e o caderno de erros. O botão grande é o caminho. Os três de baixo só marcam o progresso.
        </p>
      </header>

      <ExamLauncher />

      {next ? (
        <section className="rounded-2xl bg-navy px-4 py-5 text-white">
          <p className="text-xs font-semibold uppercase tracking-wide text-gold">Continuar</p>
          <p className="mt-2 font-serif text-2xl leading-tight">{next.label}</p>
          <button type="button" className="btn mt-4 w-full bg-white text-navy" onClick={() => onOpen(next.id)}>
            Abrir aula e questões
          </button>
        </section>
      ) : null}

      <div className="flex flex-wrap gap-2" role="tablist" aria-label="Matérias">
        {SUBJECTS.map((item) => {
          const selected = item.id === subject;
          return (
            <button
              key={item.id}
              type="button"
              role="tab"
              aria-selected={selected}
              className={`min-h-12 rounded-full px-4 text-base font-semibold ${selected ? "bg-navy text-white" : "border border-line bg-white text-navy"}`}
              onClick={() => setSubject(item.id)}
            >
              {item.label}
            </button>
          );
        })}
      </div>

      <section className="card">
        <p className="text-sm font-semibold uppercase tracking-wide text-gold-deep">{meta.label}</p>
        <p className="mt-1 text-base text-muted">{meta.hint}</p>
        <div className="mt-4 flex h-2 overflow-hidden rounded-full bg-paper" role="img" aria-label={`${counts.revisado} revisados de ${topics.length}`}>
          <div className="bg-navy" style={{ width: `${topics.length ? (counts.revisado / topics.length) * 100 : 0}%` }} />
          <div className="bg-gold" style={{ width: `${topics.length ? (counts.estudando / topics.length) * 100 : 0}%` }} />
        </div>
        <p className="mt-3 text-sm text-muted">
          {countLabel(counts.revisado, "revisado", "revisados")}
          {" · "}
          {countLabel(counts.estudando, "estudando", "estudando")}
          {" · "}
          {countLabel(counts.nao_iniciado, "não iniciado", "não iniciados")}
        </p>
        <QuestionCounter value={data.questions[subject]} onChange={(value) => setQuestions(subject, value)} />
        {subject === "portugues" && data.questions.redacao > 0 ? (
          <p className="mt-3 text-sm text-muted">O contador antigo de Redação continua salvo: {data.questions.redacao}.</p>
        ) : null}
      </section>

      {blocks.map((block) => (
        <section key={block.id} className="space-y-3">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wide text-gold-deep">
              Nível {block.level} · Semanas {block.weeks}
            </p>
            <h3 className="mt-1 font-serif text-2xl text-navy">{block.title}</h3>
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

function QuestionCounter({ value, onChange }: { value: number; onChange: (value: number) => void }) {
  const [text, setText] = useState(String(value));
  useEffect(() => {
    setText(String(value));
  }, [value]);
  return (
    <div className="mt-5 border-t border-line pt-4">
      <p className="text-sm font-semibold text-navy">Questões resolvidas</p>
      <div className="mt-3 flex items-center gap-3">
        <button type="button" className="flex size-12 items-center justify-center rounded-full border border-line text-navy disabled:opacity-40" aria-label="Tirar uma questão" disabled={value <= 0} onClick={() => onChange(value - 1)}>
          <Minus className="size-5" />
        </button>
        <input
          aria-label="Quantidade de questões"
          inputMode="numeric"
          className="w-24 bg-transparent text-center font-serif text-4xl text-navy tabular-nums outline-none"
          value={text}
          onChange={(event) => {
            const next = event.target.value;
            if (next !== "" && !/^\d+$/.test(next)) return;
            setText(next);
            if (next === "") return;
            const count = Number(next);
            if (count !== value) onChange(count);
          }}
          onBlur={() => {
            if (text.trim() === "") onChange(0);
          }}
        />
        <button type="button" className="flex size-12 items-center justify-center rounded-full bg-navy text-white" aria-label="Mais uma questão" onClick={() => onChange(value + 1)}>
          <Plus className="size-5" />
        </button>
      </div>
      <p className="mt-2 text-sm text-muted">
        {value === 0 ? "Nenhuma questão ainda. Some 1 ou edite o número." : countLabel(value, "questão nesta matéria", "questões nesta matéria")}
      </p>
    </div>
  );
}
