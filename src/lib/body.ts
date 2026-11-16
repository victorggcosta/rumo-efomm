import { formatPace } from "./format.ts";
import type { Sex, WeightEntry } from "../types.ts";

export type TafTargets = {
  runMeters: number;
  runLimitSec: number;
  swimMeters: number;
  swimLimitSec: number;
};

/** Índices oficiais do TAF: corrida em 12 min e 50 m de natação. */
export function tafTargets(sex: Sex): TafTargets {
  const runLimitSec = 12 * 60;
  const swimMeters = 50;
  if (sex === "masculino") {
    return { runMeters: 2300, runLimitSec, swimMeters, swimLimitSec: 90 };
  }
  return { runMeters: 1900, runLimitSec, swimMeters, swimLimitSec: 105 };
}

export function requiredPace(targets: TafTargets): number {
  return targets.runLimitSec / (targets.runMeters / 1000);
}

/** Estimativa de Mifflin–St Jeor, em kcal/dia. */
export function bmr(sex: Sex, age: number, heightCm: number, kg: number): number {
  const base = 10 * kg + 6.25 * heightCm - 5 * age;
  return Math.round(sex === "masculino" ? base + 5 : base - 161);
}

export type RunComparison = {
  paceLabel: string;
  requiredPaceLabel: string;
  projectedLabel: string;
  /** Positivo: mais lento que o limite. Zero: no limite. Negativo: folga. */
  gapSec: number;
  meets: boolean;
  paceGapSec: number;
};

export type SwimComparison = {
  timeLabel: string;
  limitLabel: string;
  gapSec: number;
  meets: boolean;
};

export function bmi(kg: number, heightM: number): number {
  return kg / (heightM * heightM);
}

export function bmiCategory(value: number): string {
  if (value < 18.5) return "Abaixo do peso";
  if (value < 25) return "Peso adequado";
  if (value < 30) return "Sobrepeso";
  if (value < 35) return "Obesidade grau 1";
  if (value < 40) return "Obesidade grau 2";
  return "Obesidade grau 3";
}

export function sortWeights(entries: WeightEntry[]): WeightEntry[] {
  return [...entries].sort((a, b) => {
    if (a.date !== b.date) return a.date < b.date ? -1 : 1;
    return a.createdAt < b.createdAt ? -1 : 1;
  });
}

export function latestWeight(entries: WeightEntry[]): WeightEntry | null {
  const sorted = sortWeights(entries);
  return sorted.at(-1) ?? null;
}

export function compareRun(distanceKm: number, durationSec: number, targets: TafTargets): RunComparison {
  const paceSec = durationSec / distanceKm;
  const runKm = targets.runMeters / 1000;
  const pace = requiredPace(targets);
  const projectedSec = Math.round(paceSec * runKm);
  const gapSec = projectedSec - targets.runLimitSec;
  return {
    paceLabel: formatPace(paceSec),
    requiredPaceLabel: formatPace(pace),
    projectedLabel: formatClockSafe(projectedSec),
    gapSec,
    meets: gapSec <= 0,
    paceGapSec: Math.round(paceSec) - Math.round(pace),
  };
}

export function compareSwim(durationSec: number, targets: TafTargets): SwimComparison {
  const gapSec = Math.round(durationSec) - targets.swimLimitSec;
  return {
    timeLabel: formatClockSafe(durationSec),
    limitLabel: formatClockSafe(targets.swimLimitSec),
    gapSec,
    meets: gapSec <= 0,
  };
}

function formatClockSafe(totalSec: number): string {
  const seconds = Math.max(0, Math.round(totalSec));
  const minutes = Math.floor(seconds / 60);
  const rest = seconds % 60;
  return `${minutes}:${String(rest).padStart(2, "0")}`;
}
