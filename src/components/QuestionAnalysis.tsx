import { useState, type ReactNode } from "react";
import type { QuizQuestion } from "../data/lessons.ts";

export function QuestionAnalysis({ question }: { question: QuizQuestion }) {
  const analise = question.analise;
  if (!analise) {
    return (
      <>
        {question.steps && question.steps.length > 0 ? (
          <ol className="mt-3 list-decimal space-y-2 pl-5 text-sm leading-relaxed text-ink">
            {question.steps.map((step, index) => (
              <li key={`${question.id}-passo-${index}`}>{step}</li>
            ))}
          </ol>
        ) : null}
        <p className="mt-2 text-sm leading-relaxed text-ink">{question.explanation}</p>
      </>
    );
  }

  return (
    <div className="mt-3" id={`analise-${question.id}`}>
      <p className="text-sm font-semibold text-navy">Análise Completa da Questão</p>
      <div className="mt-2 space-y-2">
        <Bloco titulo="💡 Intuição e Visão Geral" aberto>
          <p>{analise.intuicao}</p>
        </Bloco>
        <Bloco titulo="🔍 Por Que Este Caminho? (A Motivação)">
          <p>{analise.motivacao}</p>
        </Bloco>
        <Bloco titulo="📐 Passo a Passo e Regras Algébricas">
          <ol className="list-decimal space-y-2 pl-5">
            {analise.passos.map((passo, index) => (
              <li key={`${question.id}-regra-${index}`}>{passo}</li>
            ))}
          </ol>
        </Bloco>
        <Bloco titulo="🔄 Modo Alternativo / Atalho de Prova">
          <p>{analise.atalho}</p>
        </Bloco>
      </div>
      <p className="mt-2 text-sm leading-relaxed text-ink">{question.explanation}</p>
    </div>
  );
}

function Bloco({ titulo, aberto = false, children }: { titulo: string; aberto?: boolean; children: ReactNode }) {
  const [open, setOpen] = useState(aberto);
  return (
    <details
      className="rounded-xl border border-line bg-white px-3 py-2 text-ink"
      open={open}
      onToggle={(event) => setOpen(event.currentTarget.open)}
    >
      <summary className="cursor-pointer text-sm font-semibold text-navy">{titulo}</summary>
      <div className="mt-2 text-sm leading-relaxed">{children}</div>
    </details>
  );
}
