import type { ChoiceLetter } from "../../types.ts";
import type { AnaliseQuestao, QuizQuestion } from "../lessons.ts";

const LETTERS: ChoiceLetter[] = ["A", "B", "C", "D", "E"];

export function questao(
  id: string,
  level: 1 | 2 | 3,
  prompt: string,
  options: [string, string, string, string, string],
  answer: ChoiceLetter,
  steps: string[],
  explanation: string,
): QuizQuestion {
  return {
    id,
    level,
    prompt,
    choices: LETTERS.map((letter, index) => ({ letter, text: options[index] })),
    answer,
    steps,
    explanation,
  };
}

export function assertBank(topicId: string, questions: QuizQuestion[]) {
  if (questions.length < 15) throw new Error(`${topicId} precisa de 15 questões`);
  for (const level of [1, 2, 3] as const) {
    const count = questions.filter((item) => item.level === level).length;
    if (count < 5) throw new Error(`${topicId} precisa de 5 questões no nível ${level}`);
  }
  const ids = new Set<string>();
  for (const item of questions) {
    if (ids.has(item.id)) throw new Error(`Questão repetida: ${item.id}`);
    ids.add(item.id);
    if (item.choices.length !== 5) throw new Error(`${item.id} sem 5 alternativas`);
    if (!item.steps || item.steps.length < 2) throw new Error(`${item.id} sem resolução comentada`);
    if (!item.choices.some((choice) => choice.letter === item.answer)) throw new Error(`${item.id} sem gabarito`);
  }
}

/** Grava a análise de quatro blocos e exige que nenhuma questão do tópico fique sem ela. */
export function exigirAnalise(topicId: string, questions: QuizQuestion[], mapa: Record<string, AnaliseQuestao>) {
  const usados = new Set<string>();
  for (const item of questions) {
    const analise = mapa[item.id];
    if (!analise) throw new Error(`${topicId}: ${item.id} sem análise completa`);
    if (!analise.intuicao.trim() || !analise.motivacao.trim() || !analise.atalho.trim()) {
      throw new Error(`${item.id} com bloco de análise vazio`);
    }
    if (analise.passos.length < 3 || analise.passos.some((passo) => !passo.trim())) {
      throw new Error(`${item.id} sem passo a passo nomeado`);
    }
    item.analise = analise;
    item.steps = analise.passos;
    usados.add(item.id);
  }
  for (const id of Object.keys(mapa)) {
    if (!usados.has(id)) throw new Error(`${topicId}: análise órfã ${id}`);
  }
}
