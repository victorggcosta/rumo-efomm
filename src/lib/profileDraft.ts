import type { AvatarId, Sex, UserProfile } from "../types.ts";
import { isIsoDate } from "./dates.ts";
import { parseDecimal } from "./format.ts";

export type ProfileDraft = {
  name: string;
  age: string;
  sex: Sex | "";
  photo: string | null;
  avatar: AvatarId;
  heightCm: string;
  weightKg: string;
  goalKg: string;
  escrita: string;
  taf: string;
  freeStart: string;
  freeEnd: string;
  weeklyQuestions: string;
  weeklyPomodoros: string;
};

export function blankDraft(): ProfileDraft {
  return {
    name: "",
    age: "",
    sex: "",
    photo: null,
    avatar: "ancora",
    heightCm: "",
    weightKg: "",
    goalKg: "",
    escrita: "",
    taf: "",
    freeStart: "15:30",
    freeEnd: "22:00",
    weeklyQuestions: "80",
    weeklyPomodoros: "20",
  };
}

export function draftFromProfile(
  profile: UserProfile,
  targets: { escrita: string; taf: string },
  weightKg: number | null,
): ProfileDraft {
  return {
    name: profile.name,
    age: String(profile.age),
    sex: profile.sex,
    photo: profile.photo,
    avatar: profile.avatar,
    heightCm: String(profile.heightCm),
    weightKg: weightKg === null ? "" : String(weightKg).replace(".", ","),
    goalKg: String(profile.goalWeightKg).replace(".", ","),
    escrita: targets.escrita,
    taf: targets.taf,
    freeStart: profile.freeStart,
    freeEnd: profile.freeEnd,
    weeklyQuestions: String(profile.weeklyQuestionGoal),
    weeklyPomodoros: String(profile.weeklyPomodoroGoal),
  };
}

export type ParsedProfile = {
  profile: UserProfile;
  weightKg: number | null;
};

export function parseDraft(
  draft: ProfileDraft,
  options: { weightRequired: boolean },
): { ok: true; value: ParsedProfile } | { ok: false; error: string } {
  const name = draft.name.trim();
  if (name.length < 2 || name.length > 40) return fail("Escreva seu nome, com 2 a 40 caracteres.");
  if (!/^\d+$/.test(draft.age.trim())) return fail("Informe a idade entre 12 e 80 anos.");
  const age = Number(draft.age.trim());
  if (age < 12 || age > 80) return fail("Informe a idade entre 12 e 80 anos.");
  if (draft.sex !== "masculino" && draft.sex !== "feminino") return fail("Escolha o sexo para definir os índices do TAF.");
  const height = parseDecimal(draft.heightCm);
  if (height === null || height < 120 || height > 220) return fail("Informe a altura em centímetros, entre 120 e 220.");
  const goal = parseDecimal(draft.goalKg);
  if (goal === null || goal < 30 || goal > 250) return fail("Informe o peso meta em quilos, entre 30 e 250.");
  const weightText = draft.weightKg.trim();
  let weightKg: number | null = null;
  if (weightText) {
    const weight = parseDecimal(weightText);
    if (weight === null || weight < 30 || weight > 250) return fail("Informe o peso atual em quilos, entre 30 e 250.");
    weightKg = Math.round(weight * 10) / 10;
  } else if (options.weightRequired) {
    return fail("Informe o peso atual em quilos, entre 30 e 250.");
  }
  if (draft.photo && draft.photo.length > 140_000) {
    return fail("A foto ficou grande demais. Escolha outra ou use um avatar.");
  }
  if (!validDate(draft.escrita)) return fail("Escolha a data da prova escrita, entre 2026 e 2036.");
  if (!validDate(draft.taf)) return fail("Escolha a data do TAF, entre 2026 e 2036.");
  const window = validWindow(draft.freeStart, draft.freeEnd);
  if (!window) return fail("A janela livre precisa de pelo menos 2 horas e no máximo 18.");
  if (!/^\d+$/.test(draft.weeklyQuestions.trim())) return fail("A meta de questões fica entre 10 e 400 por semana.");
  const questions = Number(draft.weeklyQuestions.trim());
  if (questions < 10 || questions > 400) return fail("A meta de questões fica entre 10 e 400 por semana.");
  if (!/^\d+$/.test(draft.weeklyPomodoros.trim())) return fail("A meta de pomodoros fica entre 1 e 80 por semana.");
  const pomodoros = Number(draft.weeklyPomodoros.trim());
  if (pomodoros < 1 || pomodoros > 80) return fail("A meta de pomodoros fica entre 1 e 80 por semana.");
  return {
    ok: true,
    value: {
      weightKg,
      profile: {
        name,
        age,
        sex: draft.sex,
        photo: draft.photo,
        avatar: draft.avatar,
        heightCm: Math.round(height),
        goalWeightKg: Math.round(goal * 10) / 10,
        freeStart: window.freeStart,
        freeEnd: window.freeEnd,
        escrita: draft.escrita,
        taf: draft.taf,
        weeklyQuestionGoal: questions,
        weeklyPomodoroGoal: pomodoros,
      },
    },
  };
}

export function validateStep(step: number, draft: ProfileDraft): string | null {
  if (step === 0) {
    const name = draft.name.trim();
    if (name.length < 2 || name.length > 40) return "Escreva seu nome, com 2 a 40 caracteres.";
    if (!/^\d+$/.test(draft.age.trim()) || Number(draft.age) < 12 || Number(draft.age) > 80) {
      return "Informe a idade entre 12 e 80 anos.";
    }
    if (draft.sex !== "masculino" && draft.sex !== "feminino") return "Escolha o sexo para definir os índices do TAF.";
    return null;
  }
  if (step === 1) {
    const height = parseDecimal(draft.heightCm);
    if (height === null || height < 120 || height > 220) return "Informe a altura em centímetros, entre 120 e 220.";
    const weight = parseDecimal(draft.weightKg);
    if (weight === null || weight < 30 || weight > 250) return "Informe o peso atual em quilos, entre 30 e 250.";
    const goal = parseDecimal(draft.goalKg);
    if (goal === null || goal < 30 || goal > 250) return "Informe o peso meta em quilos, entre 30 e 250.";
    return null;
  }
  const parsed = parseDraft(draft, { weightRequired: true });
  return parsed.ok ? null : parsed.error;
}

function fail(error: string): { ok: false; error: string } {
  return { ok: false, error };
}

function validDate(value: string): boolean {
  if (!isIsoDate(value)) return false;
  const year = Number(value.slice(0, 4));
  return year >= 2026 && year <= 2036;
}

function validWindow(start: string, end: string): { freeStart: string; freeEnd: string } | null {
  const freeStart = clock(start);
  const freeEnd = clock(end);
  if (!freeStart || !freeEnd) return null;
  const span = clockMinutes(freeEnd) - clockMinutes(freeStart);
  if (span < 120 || span > 18 * 60) return null;
  return { freeStart, freeEnd };
}

function clock(value: string): string | null {
  const match = /^([01]\d|2[0-3]):([0-5]\d)(?::[0-5]\d)?$/.exec(value.trim());
  if (!match) return null;
  return `${match[1]}:${match[2]}`;
}

function clockMinutes(value: string): number {
  const [hour, minute] = value.split(":").map(Number);
  return hour * 60 + minute;
}
