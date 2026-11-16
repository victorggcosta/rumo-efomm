import { DATA_VERSION, DEFAULT_TARGETS, STORAGE_KEY } from "../profile.ts";
import { isIsoDate } from "./dates.ts";
import { defaultPomodoro, durationFor } from "./pomodoro.ts";
import type {
  AppData,
  AvatarId,
  ChoiceLetter,
  ErrorEntry,
  ErrorMark,
  ExamMode,
  ExamQuestion,
  ExamSession,
  ExamSubject,
  PomodoroMode,
  PomodoroPhase,
  PomodoroRun,
  PomodoroState,
  QuizAnswer,
  ReviewItem,
  ReviewKind,
  ReviewStage,
  SubjectId,
  TopicStatus,
  UserProfile,
  WeightEntry,
  Workout,
} from "../types.ts";

const SUBJECT_IDS: SubjectId[] = [
  "matematica",
  "fisica",
  "ingles",
  "portugues",
  "redacao",
];

export function loadAppData(): AppData {
  let raw: string | null = null;
  try {
    raw = localStorage.getItem(STORAGE_KEY);
  } catch {
    return createSeed();
  }
  if (!raw) return createSeed();
  try {
    return normalize(JSON.parse(raw));
  } catch {
    try {
      const backupKey = `${STORAGE_KEY}.backup`;
      if (!localStorage.getItem(backupKey)) localStorage.setItem(backupKey, raw);
    } catch {
      /* o backup é só uma rede de segurança */
    }
    return createSeed();
  }
}

export function readBackup(raw: string): AppData {
  return normalize(JSON.parse(raw));
}

export function saveAppData(data: AppData): boolean {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
    return true;
  } catch {
    return false;
  }
}

export function createSeed(): AppData {
  return {
    version: DATA_VERSION,
    profile: null,
    heightM: 1.7,
    targets: { ...DEFAULT_TARGETS },
    weights: [],
    workouts: [],
    dailyChecks: {},
    topicStatus: {},
    questions: {
      matematica: 0,
      fisica: 0,
      ingles: 0,
      portugues: 0,
      redacao: 0,
    },
    topicNotes: {},
    quizAnswers: {},
    questionDays: {},
    pomodoroDays: {},
    sleepDays: {},
    errorBook: {},
    reviews: [],
    xp: 0,
    xpQuestions: [],
    exam: null,
    pomodoro: defaultPomodoro(),
    remindersEnabled: false,
  };
}

function normalize(parsed: unknown): AppData {
  if (!isRecord(parsed)) throw new Error("formato");
  const targets = isRecord(parsed.targets) ? parsed.targets : {};
  const profile = parseProfile(parsed.profile);
  return {
    version: DATA_VERSION,
    profile,
    heightM: profile ? Math.round(profile.heightCm) / 100 : validHeight(parsed.heightM),
    targets: {
      escrita: validTarget(targets.escrita) ?? DEFAULT_TARGETS.escrita,
      taf: validTarget(targets.taf) ?? DEFAULT_TARGETS.taf,
    },
    weights: Array.isArray(parsed.weights) ? parsed.weights.flatMap(toWeight) : [],
    workouts: Array.isArray(parsed.workouts) ? parsed.workouts.flatMap(toWorkout) : [],
    dailyChecks: parseChecks(parsed.dailyChecks),
    topicStatus: parseStatus(parsed.topicStatus),
    questions: parseQuestions(parsed.questions),
    topicNotes: parseNotes(parsed.topicNotes),
    quizAnswers: parseQuizAnswers(parsed.quizAnswers),
    questionDays: parseDayCounts(parsed.questionDays),
    pomodoroDays: parseDayCounts(parsed.pomodoroDays),
    sleepDays: parseSleep(parsed.sleepDays),
    errorBook: parseErrorBook(parsed.errorBook),
    reviews: parseReviews(parsed.reviews),
    xp: parseXp(parsed.xp),
    xpQuestions: parseIdList(parsed.xpQuestions),
    exam: parseExam(parsed.exam),
    pomodoro: parsePomodoro(parsed.pomodoro),
    remindersEnabled: parsed.remindersEnabled === true,
  };
}

function validHeight(value: unknown): number {
  if (typeof value !== "number" || value < 1.2 || value > 2.2) return 1.7;
  return Math.round(value * 100) / 100;
}

function parseProfile(value: unknown): UserProfile | null {
  if (!isRecord(value)) return null;
  const name = typeof value.name === "string" ? value.name.trim() : "";
  if (name.length < 2 || name.length > 40) return null;
  if (value.sex !== "masculino" && value.sex !== "feminino") return null;
  if (!isFiniteNumber(value.age, 12, 80)) return null;
  if (!isFiniteNumber(value.heightCm, 120, 220)) return null;
  if (!isFiniteNumber(value.goalWeightKg, 30, 250)) return null;
  const escrita = validTarget(value.escrita);
  const taf = validTarget(value.taf);
  const window = validWindow(value.freeStart, value.freeEnd);
  if (!escrita || !taf || !window) return null;
  return {
    name,
    age: Math.round(value.age),
    sex: value.sex,
    photo: validPhoto(value.photo),
    avatar: validAvatar(value.avatar),
    heightCm: Math.round(value.heightCm),
    goalWeightKg: Math.round(value.goalWeightKg * 10) / 10,
    freeStart: window.freeStart,
    freeEnd: window.freeEnd,
    escrita,
    taf,
    weeklyQuestionGoal: isFiniteNumber(value.weeklyQuestionGoal, 10, 400)
      ? Math.round(value.weeklyQuestionGoal)
      : 80,
    weeklyPomodoroGoal: isFiniteNumber(value.weeklyPomodoroGoal, 1, 80)
      ? Math.round(value.weeklyPomodoroGoal)
      : 20,
  };
}

function validWindow(start: unknown, end: unknown): { freeStart: string; freeEnd: string } | null {
  const freeStart = clock(start);
  const freeEnd = clock(end);
  if (!freeStart || !freeEnd) return null;
  const span = clockMinutes(freeEnd) - clockMinutes(freeStart);
  if (span < 120 || span > 18 * 60) return null;
  return { freeStart, freeEnd };
}

function clock(value: unknown): string | null {
  if (typeof value !== "string") return null;
  const match = /^([01]\d|2[0-3]):([0-5]\d)(?::[0-5]\d)?$/.exec(value.trim());
  if (!match) return null;
  return `${match[1]}:${match[2]}`;
}

function clockMinutes(value: string): number {
  const [hour, minute] = value.split(":").map(Number);
  return hour * 60 + minute;
}

function validPhoto(value: unknown): string | null {
  if (typeof value !== "string") return null;
  if (!/^data:image\/(jpeg|png|webp);base64,/.test(value)) return null;
  if (value.length > 140_000) return null;
  return value;
}

function validAvatar(value: unknown): AvatarId {
  if (value === "ancora" || value === "bussola" || value === "leme" || value === "farol" || value === "onda") {
    return value;
  }
  return "ancora";
}

function validTarget(value: unknown): string | null {
  if (typeof value !== "string" || !isIsoDate(value)) return null;
  const year = Number(value.slice(0, 4));
  if (year < 2026 || year > 2036) return null;
  return value;
}

function toWeight(value: unknown): WeightEntry[] {
  if (!isRecord(value)) return [];
  if (typeof value.id !== "string" || value.id.length === 0 || value.id.length > 80) return [];
  if (typeof value.date !== "string" || !isIsoDate(value.date)) return [];
  if (typeof value.kg !== "number" || value.kg < 30 || value.kg > 250) return [];
  if (typeof value.createdAt !== "string" || value.createdAt.length < 8) return [];
  return [
    {
      id: value.id,
      date: value.date,
      kg: Math.round(value.kg * 10) / 10,
      createdAt: value.createdAt,
      initial: value.initial === true,
    },
  ];
}

function toWorkout(value: unknown): Workout[] {
  if (!isRecord(value)) return [];
  if (typeof value.id !== "string" || typeof value.createdAt !== "string") return [];
  if (typeof value.date !== "string" || !isIsoDate(value.date)) return [];
  if (value.kind === "corrida" || value.kind === "caminhada") {
    if (!isFiniteNumber(value.distanceKm, 0.1, 80)) return [];
    if (!isFiniteNumber(value.durationSec, 1, 8 * 3600)) return [];
    return [
      {
        id: value.id,
        kind: value.kind,
        date: value.date,
        distanceKm: value.distanceKm,
        durationSec: Math.round(value.durationSec),
        createdAt: value.createdAt,
      },
    ];
  }
  if (value.kind === "musculacao") {
    if (!isFiniteNumber(value.durationMin, 1, 240)) return [];
    if (typeof value.note !== "string" || value.note.trim().length === 0) return [];
    return [
      {
        id: value.id,
        kind: "musculacao",
        date: value.date,
        durationMin: Math.round(value.durationMin),
        note: value.note.trim().slice(0, 400),
        createdAt: value.createdAt,
      },
    ];
  }
  if (value.kind === "natacao") {
    if (!isFiniteNumber(value.durationSec, 1, 30 * 60)) return [];
    return [
      {
        id: value.id,
        kind: "natacao",
        date: value.date,
        durationSec: Math.round(value.durationSec),
        createdAt: value.createdAt,
      },
    ];
  }
  return [];
}

function parseChecks(value: unknown): Record<string, string[]> {
  if (!isRecord(value)) return {};
  const checks: Record<string, string[]> = {};
  for (const [day, items] of Object.entries(value)) {
    if (!isIsoDate(day) || !Array.isArray(items)) continue;
    const ids = items.filter((item): item is string => typeof item === "string" && item.length < 80);
    checks[day] = [...new Set(ids)];
  }
  return checks;
}

function parseStatus(value: unknown): Record<string, TopicStatus> {
  if (!isRecord(value)) return {};
  const status: Record<string, TopicStatus> = {};
  for (const [id, item] of Object.entries(value)) {
    if (item === "estudando" || item === "revisado") status[id] = item;
  }
  return status;
}

function parseQuestions(value: unknown): Record<SubjectId, number> {
  const questions = {
    matematica: 0,
    fisica: 0,
    ingles: 0,
    portugues: 0,
    redacao: 0,
  } satisfies Record<SubjectId, number>;
  if (!isRecord(value)) return questions;
  for (const id of SUBJECT_IDS) {
    const count = value[id];
    if (typeof count === "number" && Number.isFinite(count) && count >= 0) {
      questions[id] = Math.min(1_000_000, Math.floor(count));
    }
  }
  return questions;
}

function parseNotes(value: unknown): Record<string, string> {
  if (!isRecord(value)) return {};
  const notes: Record<string, string> = {};
  for (const [id, note] of Object.entries(value)) {
    if (id.length === 0 || id.length > 80 || typeof note !== "string") continue;
    const text = note.slice(0, 5000);
    if (text.trim()) notes[id] = text;
  }
  return notes;
}

function parseQuizAnswers(value: unknown): Record<string, QuizAnswer> {
  if (!isRecord(value)) return {};
  const answers: Record<string, QuizAnswer> = {};
  for (const [id, answer] of Object.entries(value)) {
    if (id.length === 0 || id.length > 80 || !isRecord(answer)) continue;
    if (!isChoice(answer.choice)) continue;
    answers[id] = { choice: answer.choice };
  }
  return answers;
}

function parseDayCounts(value: unknown): Record<string, number> {
  if (!isRecord(value)) return {};
  const counts: Record<string, number> = {};
  for (const [day, count] of Object.entries(value)) {
    if (!isIsoDate(day) || typeof count !== "number" || !Number.isFinite(count) || count <= 0) continue;
    counts[day] = Math.min(1_000_000, Math.floor(count));
  }
  return counts;
}

function parseSleep(value: unknown): Record<string, boolean> {
  if (!isRecord(value)) return {};
  const days: Record<string, boolean> = {};
  for (const [day, marked] of Object.entries(value)) {
    if (isIsoDate(day) && marked === true) days[day] = true;
  }
  return days;
}

function parseErrorBook(value: unknown): Record<string, ErrorEntry> {
  if (!isRecord(value)) return {};
  const book: Record<string, ErrorEntry> = {};
  for (const [id, entry] of Object.entries(value)) {
    if (id.length === 0 || id.length > 80 || !isRecord(entry)) continue;
    if (typeof entry.topicId !== "string" || entry.topicId.length === 0 || entry.topicId.length > 80) continue;
    if (!isErrorMark(entry.choice)) continue;
    const note = typeof entry.note === "string" ? entry.note.slice(0, 2000) : "";
    book[id] = { topicId: entry.topicId, choice: entry.choice, note };
  }
  return book;
}

function parsePomodoro(value: unknown): PomodoroState {
  const fallback = defaultPomodoro();
  if (!isRecord(value)) return fallback;
  const mode: PomodoroMode = value.mode === "50" ? "50" : "25";
  const phase: PomodoroPhase =
    value.phase === 2 || value.phase === 3 || value.phase === 4 || value.phase === 5 ? value.phase : 1;
  const run: PomodoroRun = value.run === "break" || value.run === "review" ? value.run : "focus";
  const endsAt = typeof value.endsAt === "number" ? value.endsAt : null;
  const running = value.running === true && endsAt !== null;
  const max = durationFor(mode, run);
  const remaining = isFiniteNumber(value.remainingSec, 0, max) ? Math.round(value.remainingSec) : max;
  return {
    mode,
    phase,
    run,
    running,
    endsAt: running ? endsAt : null,
    remainingSec: running ? remaining : Math.max(0, remaining),
  };
}

function isChoice(value: unknown): value is ChoiceLetter {
  return value === "A" || value === "B" || value === "C" || value === "D" || value === "E";
}

function isErrorMark(value: unknown): value is ErrorMark {
  return isChoice(value) || value === "branco";
}

function parseXp(value: unknown): number {
  if (typeof value !== "number" || !Number.isFinite(value) || value < 0) return 0;
  return Math.min(1_000_000, Math.floor(value));
}

function parseIdList(value: unknown): string[] {
  if (!Array.isArray(value)) return [];
  const ids = value.filter((item): item is string => typeof item === "string" && item.length > 0 && item.length < 80);
  return [...new Set(ids)].slice(0, 5000);
}

function parseReviews(value: unknown): ReviewItem[] {
  if (!Array.isArray(value)) return [];
  const reviews: ReviewItem[] = [];
  const seen = new Set<string>();
  for (const item of value) {
    if (!isRecord(item)) continue;
    if (typeof item.id !== "string" || item.id.length === 0 || item.id.length > 120 || seen.has(item.id)) continue;
    if (item.kind !== "topico" && item.kind !== "erro") continue;
    if (typeof item.topicId !== "string" || item.topicId.length === 0 || item.topicId.length > 80) continue;
    const questionId = item.questionId === null ? null : typeof item.questionId === "string" ? item.questionId : undefined;
    if (questionId === undefined || (questionId !== null && (questionId.length === 0 || questionId.length > 80))) continue;
    if (item.kind === "topico" && questionId !== null) continue;
    if (item.kind === "erro" && questionId === null) continue;
    if (item.stage !== 1 && item.stage !== 7 && item.stage !== 30) continue;
    if (typeof item.due !== "string" || !isIsoDate(item.due)) continue;
    const doneOn = item.doneOn === null ? null : typeof item.doneOn === "string" && isIsoDate(item.doneOn) ? item.doneOn : undefined;
    if (doneOn === undefined) continue;
    seen.add(item.id);
    const review: ReviewItem = {
      id: item.id,
      kind: item.kind as ReviewKind,
      topicId: item.topicId,
      questionId,
      stage: item.stage as ReviewStage,
      due: item.due,
      doneOn,
    };
    reviews.push(review);
    if (reviews.length >= 4000) break;
  }
  return reviews;
}

function parseExam(value: unknown): ExamSession | null {
  if (!isRecord(value)) return null;
  if (typeof value.id !== "string" || value.id.length === 0 || value.id.length > 80) return null;
  if (value.mode !== "mini" && value.mode !== "completo") return null;
  if (typeof value.startedAt !== "string" || value.startedAt.length < 8) return null;
  if (typeof value.endsAt !== "number" || !Number.isFinite(value.endsAt)) return null;
  if (!Array.isArray(value.questions) || value.questions.length === 0 || value.questions.length > 80) return null;
  const questions = value.questions.flatMap(parseExamQuestion);
  if (questions.length !== value.questions.length) return null;
  const ids = new Set(questions.map((item) => item.id));
  if (ids.size !== questions.length) return null;
  const marks: Record<string, ChoiceLetter> = {};
  if (isRecord(value.marks)) {
    for (const [id, choice] of Object.entries(value.marks)) {
      if (ids.has(id) && isChoice(choice)) marks[id] = choice;
    }
  }
  const finishedAt = value.finishedAt === null ? null : typeof value.finishedAt === "string" ? value.finishedAt.slice(0, 40) : null;
  return {
    id: value.id,
    mode: value.mode as ExamMode,
    startedAt: value.startedAt.slice(0, 40),
    endsAt: value.endsAt,
    questions,
    marks,
    finishedAt,
    scores: finishedAt ? scoreStored(questions, marks) : null,
  };
}

function parseExamQuestion(value: unknown): ExamQuestion[] {
  if (!isRecord(value)) return [];
  if (typeof value.id !== "string" || value.id.length === 0 || value.id.length > 80) return [];
  if (typeof value.topicId !== "string" || value.topicId.length === 0 || value.topicId.length > 80) return [];
  if (!isExamSubject(value.subject)) return [];
  if (typeof value.prompt !== "string" || value.prompt.trim().length === 0) return [];
  if (!Array.isArray(value.choices) || value.choices.length !== 5) return [];
  const choices: ExamQuestion["choices"] = [];
  for (const choice of value.choices) {
    if (!isRecord(choice) || !isChoice(choice.letter) || typeof choice.text !== "string") return [];
    choices.push({ letter: choice.letter, text: choice.text.slice(0, 800) });
  }
  if (!isChoice(value.answer)) return [];
  return [
    {
      id: value.id,
      topicId: value.topicId,
      subject: value.subject,
      prompt: value.prompt.slice(0, 6000),
      choices,
      answer: value.answer,
    },
  ];
}

function isExamSubject(value: unknown): value is ExamSubject {
  return value === "matematica" || value === "fisica" || value === "ingles" || value === "portugues";
}

function scoreStored(questions: ExamQuestion[], marks: Record<string, ChoiceLetter>): ExamSession["scores"] {
  const subjects: ExamSubject[] = ["matematica", "fisica", "ingles", "portugues"];
  const scores = {} as NonNullable<ExamSession["scores"]>;
  for (const subject of subjects) {
    const items = questions.filter((item) => item.subject === subject);
    const correct = items.filter((item) => marks[item.id] === item.answer).length;
    scores[subject] = {
      correct,
      total: items.length,
      points: items.length === 0 ? 0 : Math.round((correct / items.length) * 100),
    };
  }
  return scores;
}

function isFiniteNumber(value: unknown, min: number, max: number): value is number {
  return typeof value === "number" && Number.isFinite(value) && value >= min && value <= max;
}

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}
