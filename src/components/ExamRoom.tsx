import { useEffect, useState } from "react";
import { EXAM_SUBJECTS, eliminatedSubjects, passingPoints } from "../lib/exam.ts";
import { formatClock } from "../lib/format.ts";
import { useAppState } from "../state.tsx";
import type { ChoiceLetter, ExamSession, ExamSubject } from "../types.ts";

export function ExamRoom({ onClose }: { onClose: () => void }) {
  const { data, markExam, finishExam } = useAppState();
  const exam = data.exam;
  const [index, setIndex] = useState(0);
  const [confirming, setConfirming] = useState(false);
  const remaining = useCountdown(exam && exam.finishedAt === null ? exam.endsAt : null);

  useEffect(() => {
    if (!exam || exam.finishedAt || remaining > 0) return;
    finishExam();
  }, [exam, remaining, finishExam]);

  useEffect(() => {
    document.getElementById("exam-questao")?.scrollIntoView({ block: "start" });
  }, [index]);

  if (!exam) return null;
  if (exam.finishedAt && exam.scores) {
    return <ExamResult exam={exam} onClose={onClose} />;
  }

  const question = exam.questions[index];
  if (!question) return null;
  const blank = exam.questions.filter((item) => !exam.marks[item.id]).length;
  const subjectLabel = EXAM_SUBJECTS.find((item) => item.id === question.subject)?.label ?? question.subject;

  return (
    <div className="fixed inset-0 z-[80] flex flex-col bg-paper text-ink">
      <header className="sticky top-0 z-10 border-b border-white/10 bg-navy px-4 py-3 text-white">
        <div className="mx-auto flex max-w-3xl items-center justify-between gap-3">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wide text-gold">Modo prova</p>
            <p className="text-sm text-white/75">
              {subjectLabel} · {index + 1} de {exam.questions.length}
            </p>
          </div>
          <p
            id="exam-timer"
            className={`font-serif text-3xl tabular-nums ${remaining <= 5 * 60 ? "text-gold" : "text-white"}`}
            aria-label={`Tempo restante ${formatClock(remaining)}`}
          >
            {formatClock(remaining)}
          </p>
        </div>
      </header>

      <main id="exam-questao" className="mx-auto w-full max-w-3xl flex-1 overflow-y-auto px-4 py-5 pb-40">
        <p className="text-xs font-semibold uppercase tracking-wide text-gold-deep">Questão {index + 1}</p>
        <p className="mt-2 text-base leading-relaxed">{question.prompt}</p>
        <div className="mt-4 space-y-2" role="group" aria-label={`Cartão da questão ${index + 1}`}>
          {question.choices.map((choice) => {
            const selected = exam.marks[question.id] === choice.letter;
            return (
              <button
                key={choice.letter}
                type="button"
                aria-pressed={selected}
                className={`flex min-h-12 w-full items-start gap-3 rounded-2xl border px-3 py-3 text-left ${
                  selected ? "border-navy bg-navy text-white" : "border-line bg-white"
                }`}
                onClick={() => markExam(question.id, choice.letter)}
              >
                <Bubble letter={choice.letter} selected={selected} />
                <span className="pt-1">{choice.text}</span>
              </button>
            );
          })}
        </div>
      </main>

      <footer className="fixed inset-x-0 bottom-0 border-t border-line bg-white px-3 py-3" style={{ paddingBottom: "max(0.75rem, env(safe-area-inset-bottom))" }}>
        <div className="mx-auto max-w-3xl">
          <div className="flex items-center justify-between gap-3">
            <p className="text-sm text-muted">
              Cartão-resposta · {blank} em branco
            </p>
            {confirming ? (
              <button type="button" id="exam-finalizar" className="btn bg-clay text-white" onClick={finishExam}>
                Confirmar entrega
              </button>
            ) : (
              <button type="button" id="exam-finalizar" className="btn btn-primary" onClick={() => setConfirming(true)}>
                Finalizar
              </button>
            )}
          </div>
          {confirming ? (
            <p className="mt-2 text-sm text-clay">
              {blank > 0 ? `${blank} questões em branco contam como erro. ` : ""}
              Toque de novo para entregar.
            </p>
          ) : null}
          <div className="mt-2 flex gap-2 overflow-x-auto pb-1" aria-label="Cartão-resposta">
            {exam.questions.map((item, itemIndex) => {
              const mark = exam.marks[item.id];
              const current = itemIndex === index;
              return (
                <button
                  key={item.id}
                  type="button"
                  aria-current={current ? "true" : undefined}
                  aria-label={`Questão ${itemIndex + 1}${mark ? `, marcada ${mark}` : ", em branco"}`}
                  className={`flex size-11 shrink-0 flex-col items-center justify-center rounded-full border text-[11px] font-semibold ${
                    current ? "border-navy bg-navy text-white" : mark ? "border-gold bg-gold text-navy" : "border-line bg-white text-muted"
                  }`}
                  onClick={() => {
                    setIndex(itemIndex);
                    setConfirming(false);
                  }}
                >
                  <span>{itemIndex + 1}</span>
                  <span className="leading-none">{mark ?? "·"}</span>
                </button>
              );
            })}
          </div>
        </div>
      </footer>
    </div>
  );
}

function ExamResult({ exam, onClose }: { exam: ExamSession; onClose: () => void }) {
  const scores = exam.scores;
  if (!scores) return null;
  const failed = eliminatedSubjects(scores);
  const passed = failed.length === 0;
  const wrong = exam.questions.filter((item) => exam.marks[item.id] !== item.answer).length;

  return (
    <div className="fixed inset-0 z-[80] overflow-y-auto bg-paper text-ink">
      <main id="exam-resultado" className="mx-auto max-w-3xl px-4 py-6 pb-28">
        <p className="text-xs font-semibold uppercase tracking-wide text-gold-deep">Resultado</p>
        <h2 className="mt-1 font-serif text-3xl text-navy">
          {passed ? "Corte atingido em todas" : "Reprovou em alguma disciplina"}
        </h2>
        <p className={`mt-3 rounded-2xl px-4 py-3 text-sm leading-relaxed ${passed ? "bg-sea-soft text-sea" : "bg-clay-soft text-clay"}`}>
          {passed
            ? `Você atingiu os ${passingPoints()} pontos mínimos em Matemática, Física, Inglês e Português.`
            : `A regra eliminatória pede ${passingPoints()} pontos em cada disciplina. Abaixo do corte: ${failed
                .map((id) => subjectName(id))
                .join(", ")}.`}
        </p>
        <div className="mt-4 grid gap-3 sm:grid-cols-2">
          {EXAM_SUBJECTS.map((subject) => {
            const score = scores[subject.id];
            const ok = score.points >= passingPoints();
            return (
              <article key={subject.id} className="card">
                <p className="text-sm text-muted">{subject.label}</p>
                <p className="font-serif text-4xl tabular-nums text-navy">{score.points}</p>
                <p className="text-sm text-muted">
                  {score.correct} de {score.total} · {ok ? "no corte" : "elimina"}
                </p>
                <div className="mt-3 h-2 overflow-hidden rounded-full bg-paper">
                  <div className={`h-full ${ok ? "bg-sea" : "bg-clay"}`} style={{ width: `${score.points}%` }} />
                </div>
              </article>
            );
          })}
        </div>
        <p className="mt-4 text-sm leading-relaxed text-muted">
          {wrong === 0
            ? "Nenhuma questão foi para o caderno de erros."
            : `${wrong} ${wrong === 1 ? "questão errada foi" : "questões erradas foram"} para o caderno de erros, com revisão em 1, 7 e 30 dias.`}
        </p>
        <button type="button" className="btn btn-primary mt-5 w-full" onClick={onClose}>
          Voltar aos estudos
        </button>
      </main>
    </div>
  );
}

function Bubble({ letter, selected }: { letter: ChoiceLetter; selected: boolean }) {
  return (
    <span
      className={`flex size-9 shrink-0 items-center justify-center rounded-full border text-sm font-semibold ${
        selected ? "border-gold bg-gold text-navy" : "border-line bg-white text-navy"
      }`}
    >
      {letter}
    </span>
  );
}

function subjectName(id: ExamSubject): string {
  return EXAM_SUBJECTS.find((item) => item.id === id)?.label ?? id;
}

function useCountdown(endsAt: number | null): number {
  const [now, setNow] = useState(() => Date.now());
  useEffect(() => {
    if (endsAt === null) return;
    const id = window.setInterval(() => setNow(Date.now()), 250);
    return () => window.clearInterval(id);
  }, [endsAt]);
  if (endsAt === null) return 0;
  return Math.max(0, Math.ceil((endsAt - now) / 1000));
}
