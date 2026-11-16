import type { UserProfile } from "./types.ts";

export const DEFAULT_TARGETS = {
  escrita: "2027-07-04",
  taf: "2027-11-14",
} as const;

export const STORAGE_KEY = "rumo-efomm.painel-lorena";
export const DATA_VERSION = 5;

export const EXAMPLE_WEIGHT_KG = 98;

/** Dados de demonstração. A idade e a meta de peso são só um ponto de partida editável. */
export const EXAMPLE_PROFILE: UserProfile = {
  name: "Lorena",
  age: 18,
  sex: "feminino",
  photo: null,
  avatar: "ancora",
  heightCm: 164,
  goalWeightKg: 75,
  freeStart: "15:30",
  freeEnd: "22:00",
  escrita: DEFAULT_TARGETS.escrita,
  taf: DEFAULT_TARGETS.taf,
  weeklyQuestionGoal: 80,
  weeklyPomodoroGoal: 20,
};
