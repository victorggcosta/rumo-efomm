import type { PomodoroMode, PomodoroPhase, PomodoroRun, PomodoroState } from "../types.ts";

export const POMODORO_PHASES: { phase: PomodoroPhase; title: string; detail: string }[] = [
  { phase: 1, title: "Teoria", detail: "Leia o resumo do zero e a caixa de regras." },
  { phase: 2, title: "Exemplos", detail: "Refaça os exemplos resolvidos, sem olhar o passo." },
  { phase: 3, title: "Exercícios básicos", detail: "Responda as questões marcadas como Básico." },
  { phase: 4, title: "Questões EFOMM", detail: "Responda as questões marcadas como Prova." },
  { phase: 5, title: "Revisão", detail: "30 minutos no caderno de erros e nos flashcards." },
];

export function focusSeconds(mode: PomodoroMode): number {
  return mode === "50" ? 50 * 60 : 25 * 60;
}

export function breakSeconds(mode: PomodoroMode): number {
  return mode === "50" ? 10 * 60 : 5 * 60;
}

export function durationFor(mode: PomodoroMode, run: PomodoroRun): number {
  if (run === "review") return 30 * 60;
  if (run === "break") return breakSeconds(mode);
  return focusSeconds(mode);
}

export function defaultPomodoro(mode: PomodoroMode = "25"): PomodoroState {
  return {
    mode,
    phase: 1,
    run: "focus",
    running: false,
    endsAt: null,
    remainingSec: focusSeconds(mode),
  };
}
