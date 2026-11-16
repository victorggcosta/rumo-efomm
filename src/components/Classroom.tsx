import { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import type { Didactic } from "../data/aulas/types.ts";
import { bookFor } from "../data/books.ts";
import { lessonFor, levelLabel, levelRank, type QuizQuestion } from "../data/lessons.ts";
import { DIDACTIC_BANKS, QUESTION_BANKS } from "../data/questoes/registry.ts";
import { findTopic } from "../data/topics.ts";
import { useAppState } from "../state.tsx";
import type { SubjectId } from "../types.ts";

const SECTIONS = [
  { id: "teoria", label: "Teoria e fórmulas" },
  { id: "questoes", label: "Resolver questões" },
  { id: "cards", label: "Flashcards" },
  { id: "caderno", label: "Caderno de erros" },
] as const;

type SectionId = (typeof SECTIONS)[number]["id"];

export function Classroom({ topicId, onClose }: { topicId: string; onClose: () => void }) {
  const topic = findTopic(topicId);
  const lesson = lessonFor(topicId);
  const closeRef = useRef<HTMLButtonElement>(null);
  const scrollerRef = useRef<HTMLDivElement>(null);
  const onCloseRef = useRef(onClose);
  useEffect(() => {
    onCloseRef.current = onClose;
  }, [onClose]);

  useEffect(() => {
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") onCloseRef.current();
    };
    document.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = previous;
      document.removeEventListener("keydown", onKey);
    };
  }, []);

  const { data } = useAppState();
  const [section, setSection] = useState<SectionId>("teoria");
  const [didactic, setDidactic] = useState<Didactic | null>(null);
  const [bank, setBank] = useState<QuizQuestion[] | null>(null);
  const [bankError, setBankError] = useState(false);
  const [filter, setFilter] = useState<0 | 1 | 2 | 3>(0);

  useEffect(() => {
    let cancel = false;
    setDidactic(null);
    setBank(null);
    setBankError(false);
    setFilter(0);
    const loadLesson = DIDACTIC_BANKS[topicId];
    const loadQuestions = QUESTION_BANKS[topicId];
    if (loadLesson) {
      loadLesson()
        .then((mod) => {
          if (!cancel) setDidactic(mod.didactic);
        })
        .catch(() => {
          if (!cancel) setBankError(true);
        });
    }
    if (loadQuestions) {
      loadQuestions()
        .then((mod) => {
          if (!cancel) setBank(mod.questions);
        })
        .catch(() => {
          if (!cancel) setBankError(true);
        });
    }
    return () => {
      cancel = true;
    };
  }, [topicId]);

  if (!topic) return null;
  const resolved = data.questions[topic.subjectId];
  const book = bookFor(topic.subjectId, topic.level);
  const hasBank = Boolean(QUESTION_BANKS[topicId]);
  const allQuestions = hasBank ? (bank ?? []) : (lesson?.questions ?? []);
  const visibleQuestions = filter === 0 ? allQuestions : allQuestions.filter((item) => levelRank(item.level) === filter);

  return (
    <div className="fixed inset-0 z-[60] bg-navy/40" role="presentation">
      <div
        ref={scrollerRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="sala-titulo"
        className="h-dvh overflow-y-auto bg-paper"
      >
        <header className="sticky top-0 z-10 border-b border-line bg-navy text-white">
          <div className="mx-auto flex max-w-3xl items-start gap-3 px-4 py-4">
            <button
              ref={closeRef}
              type="button"
              className="flex size-12 shrink-0 items-center justify-center rounded-full border border-white/20"
              onClick={onClose}
              aria-label="Voltar à grade"
            >
              <X className="size-5" />
            </button>
            <div className="min-w-0 pt-1">
              <p className="text-xs font-semibold uppercase tracking-wide text-gold">Sala de aula</p>
              <h2 id="sala-titulo" className="font-serif text-2xl leading-tight">
                {topic.label}
              </h2>
              <p className="mt-1 text-sm text-white/75">
                {topic.subjectLabel} · Nível {topic.level} · Semanas {topic.weeks}
              </p>
            </div>
          </div>
          <nav className="mx-auto grid max-w-3xl grid-cols-2 gap-2 px-4 pb-3 sm:grid-cols-4" aria-label="Partes da sala">
            {SECTIONS.map((item) => (
              <button
                key={item.id}
                type="button"
                aria-pressed={section === item.id}
                className={`min-h-14 rounded-2xl px-2 text-sm font-semibold leading-tight ${section === item.id ? "bg-white text-navy" : "bg-white/10 text-white"}`}
                onClick={() => {
                  setSection(item.id);
                  scrollerRef.current?.scrollTo({ top: 0 });
                }}
              >
                {item.label}
              </button>
            ))}
          </nav>
        </header>

        <div className="mx-auto max-w-3xl space-y-6 px-4 py-6 pb-16">
          {section === "teoria" ? (
          <section className="space-y-4">
            {didactic ? (
              <DidacticView didactic={didactic} />
            ) : DIDACTIC_BANKS[topicId] && !bankError ? (
              <p className="text-base text-muted">Abrindo a aula…</p>
            ) : lesson && lesson.summary.length > 0 ? (
              <>
            <h3 className="font-serif text-2xl text-navy">Resumo teórico do zero</h3>
                {lesson.summary.map((paragraph) => (
                  <p key={paragraph} className="text-base leading-relaxed text-ink">
                    {paragraph}
                  </p>
                ))}
                {lesson.examples.map((example) => (
                  <article key={example.title} className="card">
                    <h4 className="font-semibold text-navy">{example.title}</h4>
                    <ol className="mt-3 list-decimal space-y-2 pl-5 text-base leading-relaxed">
                      {example.steps.map((step) => (
                        <li key={step}>{step}</li>
                      ))}
                    </ol>
                  </article>
                ))}
                <aside className="rounded-2xl border border-gold bg-white px-4 py-4">
                  <h4 className="font-serif text-xl text-navy">Fórmulas e regras de ouro</h4>
                  <ul className="mt-3 space-y-2">
                    {lesson.rules.map((rule) => (
                      <li key={rule} className="text-base leading-relaxed">
                        {rule}
                      </li>
                    ))}
                  </ul>
                </aside>
                <aside className="rounded-2xl border border-line bg-white px-4 py-4">
                  <h4 className="font-serif text-xl text-navy">Livro recomendado neste nível</h4>
                  <p className="mt-2 font-semibold text-ink">{book.title}</p>
                  <p className="mt-2 text-base leading-relaxed text-muted">{book.detail}</p>
                </aside>
              </>
            ) : (
              <p className="text-base leading-relaxed text-muted">
                O resumo deste tópico ainda não entrou na sala. O caderno de erros continua salvo.
              </p>
            )}
          </section>
          ) : null}

          {section === "questoes" ? (
          <section className="space-y-4">
            <h3 className="font-serif text-2xl text-navy">Resolver questões</h3>
            {hasBank && bank === null && !bankError ? (
              <p className="text-base text-muted">Abrindo o banco de questões…</p>
            ) : allQuestions.length > 0 ? (
              <>
                <p className="text-base leading-relaxed text-muted">
                  {allQuestions.length} {allQuestions.length === 1 ? "questão" : "questões"}. A correção vem na hora, com o caminho da conta, e entra no contador de {topic.subjectLabel}. Agora: {resolved}{" "}
                  {resolved === 1 ? "questão" : "questões"}.
                </p>
                <div className="grid gap-2 sm:grid-cols-2" role="group" aria-label="Filtrar por dificuldade">
                  {(
                    [
                      [0, "Todas"],
                      [1, "Nível 1: Fixação conceitual"],
                      [2, "Nível 2: Pré-EFOMM / EsPCEx"],
                      [3, "Nível 3: EFOMM / AFA / Escola Naval"],
                    ] as const
                  ).map(([id, label]) => (
                    <button
                      key={id}
                      type="button"
                      aria-pressed={filter === id}
                      className={`min-h-12 rounded-2xl px-3 text-left text-sm font-semibold ${filter === id ? "bg-navy text-white" : "border border-line bg-white text-navy"}`}
                      onClick={() => setFilter(id)}
                    >
                      {label}
                    </button>
                  ))}
                </div>
                {visibleQuestions.length === 0 ? (
                  <p className="card text-base leading-relaxed text-muted">
                    Este módulo ainda não tem questões neste nível. As aulas novas das semanas 1 a 6 trazem os três níveis.
                  </p>
                ) : (
                  visibleQuestions.map((item, index) => (
                    <QuizCard
                      key={item.id}
                      index={index + 1}
                      question={item}
                      subjectId={topic.subjectId}
                      subjectLabel={topic.subjectLabel}
                      topicId={topicId}
                    />
                  ))
                )}
              </>
            ) : (
              <p className="card text-base leading-relaxed text-muted">
                Ainda não há simulado neste tópico. Quando entrar, cada resposta soma no contador da matéria.
              </p>
            )}
          </section>
          ) : null}

          {section === "cards" ? (
          <section className="space-y-4">
            <h3 className="font-serif text-2xl text-navy">Flashcards</h3>
            <p className="text-base leading-relaxed text-muted">Modo ônibus. Um cartão por vez, para revisar no celular ou antes de dormir.</p>
            {lesson ? <FlashDeck cards={lesson.cards} /> : <p className="card text-base text-muted">Ainda não há cartões neste tópico.</p>}
          </section>
          ) : null}

          {section === "caderno" ? (
          <section className="space-y-4">
            <ErrorList topicId={topicId} />
            <NotePad topicId={topicId} />
          </section>
          ) : null}
        </div>
      </div>
    </div>
  );
}

function Block({ title, paragraphs }: { title: string; paragraphs: string[] }) {
  return (
    <article className="card">
      <h3 className="font-serif text-2xl text-navy">{title}</h3>
      <div className="mt-3 space-y-3">
        {paragraphs.map((paragraph) => (
          <p key={paragraph} className="text-base leading-relaxed text-ink">
            {paragraph}
          </p>
        ))}
      </div>
    </article>
  );
}

function DidacticView({ didactic }: { didactic: Didactic }) {
  return (
    <div className="space-y-4">
      <Block title="Origem e por que isso existe" paragraphs={didactic.origin} />
      <Block title="Construção lógica" paragraphs={didactic.construction} />
      {didactic.examples.map((example) => (
        <article key={example.title} className="card">
          <h3 className="font-serif text-xl text-navy">{example.title}</h3>
          <ol className="mt-3 list-decimal space-y-2 pl-5 text-base leading-relaxed">
            {example.steps.map((step) => (
              <li key={step}>{step}</li>
            ))}
          </ol>
        </article>
      ))}
      <Block title="Aplicação real e na Marinha Mercante" paragraphs={didactic.application} />
      <Block title="Pegadinhas clássicas de banca militar" paragraphs={didactic.traps} />
      <article className="rounded-2xl border border-gold bg-white px-4 py-4">
        <h3 className="font-serif text-2xl text-navy">Onde aprofundar</h3>
        <ul className="mt-3 space-y-4">
          {didactic.bibliography.map((item) => (
            <li key={item.book}>
              <p className="font-semibold text-ink">{item.book}</p>
              <p className="mt-1 text-base leading-relaxed text-navy">{item.place}</p>
              <p className="mt-1 text-base leading-relaxed text-muted">{item.note}</p>
            </li>
          ))}
        </ul>
      </article>
    </div>
  );
}

function QuizCard({
  index,
  question,
  subjectId,
  subjectLabel,
  topicId,
}: {
  index: number;
  question: QuizQuestion;
  subjectId: SubjectId;
  subjectLabel: string;
  topicId: string;
}) {
  const { data, answerQuiz, sendToErrorBook } = useAppState();
  const chosen = data.quizAnswers[question.id]?.choice;
  const revealed = Boolean(chosen);
  const correct = chosen === question.answer;
  const saved = Boolean(data.errorBook[question.id]);

  return (
    <article className="card">
      <p className="text-xs font-semibold uppercase tracking-wide text-gold-deep">
        Questão {index} · {levelLabel(question.level)}
      </p>
      <p className="mt-2 text-base leading-relaxed text-ink">{question.prompt}</p>
      <div className="mt-4 space-y-2" role="group" aria-label={`Questão ${index}`}>
        {question.choices.map((choice) => {
          const selected = chosen === choice.letter;
          const isAnswer = choice.letter === question.answer;
          let tone = "border-line bg-white";
          if (revealed && isAnswer) tone = "border-sea bg-sea-soft";
          else if (revealed && selected) tone = "border-clay bg-clay-soft";
          return (
            <button
              key={choice.letter}
              type="button"
              disabled={revealed}
              className={`flex min-h-12 w-full items-start gap-3 rounded-xl border px-3 py-3 text-left disabled:cursor-default ${tone}`}
              onClick={() => answerQuiz(subjectId, question.id, choice.letter, choice.letter === question.answer)}
            >
              <span className="font-semibold text-navy">{choice.letter}</span>
              <span>{choice.text}</span>
            </button>
          );
        })}
      </div>
      {revealed ? (
        <div className={`mt-4 rounded-xl px-3 py-3 ${correct ? "bg-sea-soft text-sea" : "bg-clay-soft text-clay"}`} role="status">
          <p className="font-semibold">{correct ? "Acertou." : `Errou. O gabarito é ${question.answer}.`}</p>
          {question.steps && question.steps.length > 0 ? (
            <ol className="mt-3 list-decimal space-y-2 pl-5 text-sm leading-relaxed text-ink">
              {question.steps.map((step) => (
                <li key={step}>{step}</li>
              ))}
            </ol>
          ) : null}
          <p className="mt-2 text-sm leading-relaxed text-ink">{question.explanation}</p>
          <p className="mt-2 text-sm text-navy">Esta questão entrou no contador de {subjectLabel}.</p>
          {!correct ? (
            <button
              type="button"
              className="btn btn-quiet mt-3 w-full"
              disabled={saved}
              onClick={() => {
                if (chosen) sendToErrorBook(question.id, topicId, chosen);
              }}
            >
              {saved ? "No caderno de erros" : "Enviar para o caderno de erros"}
            </button>
          ) : null}
        </div>
      ) : null}
    </article>
  );
}

function FlashDeck({ cards }: { cards: { id: string; front: string; back: string }[] }) {
  const [index, setIndex] = useState(0);
  const [flipped, setFlipped] = useState(false);
  const card = cards[index];
  if (!card) return null;

  function go(next: number) {
    setIndex(next);
    setFlipped(false);
  }

  return (
    <div className="card">
      <p className="text-sm font-semibold text-navy tabular-nums">
        {index + 1} de {cards.length}
      </p>
      <button
        type="button"
        className="mt-3 flex min-h-64 w-full flex-col items-start justify-center rounded-2xl border border-gold bg-paper px-4 py-8 text-left"
        aria-pressed={flipped}
        onClick={() => setFlipped((value) => !value)}
      >
        <span className="text-xs font-semibold uppercase tracking-wide text-gold-deep">{flipped ? "Verso" : "Frente"}</span>
        <span className="mt-3 font-serif text-2xl leading-snug text-navy">{flipped ? card.back : card.front}</span>
        <span className="mt-4 text-sm text-muted">Toque para virar</span>
      </button>
      <div className="mt-4 flex gap-2">
        <button
          type="button"
          className="btn btn-quiet flex-1"
          disabled={index === 0}
          onClick={() => go(index - 1)}
        >
          <ChevronLeft className="size-4" aria-hidden="true" />
          Anterior
        </button>
        <button
          type="button"
          className="btn btn-primary flex-1"
          disabled={index === cards.length - 1}
          onClick={() => go(index + 1)}
        >
          Próximo
          <ChevronRight className="size-4" aria-hidden="true" />
        </button>
      </div>
    </div>
  );
}

function ErrorList({ topicId }: { topicId: string }) {
  const { data, setErrorNote } = useAppState();
  const entries = Object.entries(data.errorBook).filter(([, entry]) => entry.topicId === topicId);

  return (
    <div className="card">
      <h3 className="font-serif text-2xl text-navy">Erros deste tópico</h3>
      {entries.length === 0 ? (
        <p className="mt-2 text-base leading-relaxed text-muted">
          Quando errar uma questão, use “Enviar para o caderno de erros”. O motivo fica salvo aqui.
        </p>
      ) : (
        <ul className="mt-4 space-y-4">
          {entries.map(([id, entry]) => (
            <li key={id}>
              <p className="text-sm font-semibold text-navy">
                {entry.choice === "branco" ? "Em branco no simulado." : `Você marcou ${entry.choice}`}
              </p>
              <label className="mt-2 block text-sm font-semibold text-navy" htmlFor={`erro-${id}`}>
                Por que errei
                <textarea
                  id={`erro-${id}`}
                  className="field mt-1 min-h-24"
                  value={entry.note}
                  maxLength={2000}
                  placeholder="O passo que eu pulei, a regra que eu troquei."
                  onChange={(event) => setErrorNote(id, event.target.value)}
                />
              </label>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

function NotePad({ topicId }: { topicId: string }) {
  const { data, setTopicNote } = useAppState();
  const value = data.topicNotes[topicId] ?? "";

  return (
    <div className="card">
      <h3 className="font-serif text-2xl text-navy">Notas deste tópico</h3>
      <p className="mt-2 text-base leading-relaxed text-muted">
        Dúvidas e observações deste tópico. O texto fica salvo neste aparelho.
      </p>
      <label className="mt-4 block text-sm font-semibold text-navy" htmlFor={`nota-${topicId}`}>
        Suas anotações
        <textarea
          id={`nota-${topicId}`}
          className="field mt-1 min-h-40"
          value={value}
          maxLength={5000}
          placeholder="O que ainda confunde, um macete, um exemplo seu."
          onChange={(event) => setTopicNote(topicId, event.target.value)}
        />
      </label>
      <p className="mt-2 text-sm text-sea">{value.trim() ? "Anotação salva neste aparelho." : "Nada anotado ainda."}</p>
    </div>
  );
}
