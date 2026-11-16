import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { saoPauloNow } from "./lib/dates.ts";
import { clearReminders, syncReminders } from "./utils/notifications.ts";
import { breakSeconds, durationFor, focusSeconds } from "./lib/pomodoro.ts";
import { latestWeight } from "./lib/body.ts";
import { XP } from "./lib/career.ts";
import { EXAM_PLAN, scoreExam } from "./lib/exam.ts";
import { scheduleCycle } from "./lib/reviews.ts";
import { loadAppData, createSeed, saveAppData } from "./lib/storage.ts";
import { DEFAULT_TARGETS, EXAMPLE_PROFILE, EXAMPLE_WEIGHT_KG } from "./profile.ts";
import type {
  AppData,
  ChoiceLetter,
  ErrorMark,
  ExamMode,
  ExamQuestion,
  PomodoroState,
  SubjectId,
  TargetKey,
  TopicStatus,
  UserProfile,
  Workout,
} from "./types.ts";

type DistributiveOmit<T, K extends PropertyKey> = T extends unknown ? Omit<T, K> : never;
type NewWorkout = DistributiveOmit<Workout, "id" | "createdAt">;

type AppState = {
  data: AppData;
  saveError: boolean;
  toggleCheck: (itemId: string, dayIso: string) => void;
  setTarget: (key: TargetKey, iso: string) => void;
  resetTarget: (key: TargetKey) => void;
  addWeight: (entry: { date: string; kg: number }) => void;
  removeWeight: (id: string) => void;
  addWorkout: (entry: NewWorkout) => void;
  removeWorkout: (id: string) => void;
  setTopicStatus: (topicId: string, status: TopicStatus) => void;
  setQuestions: (subject: SubjectId, value: number) => void;
  setTopicNote: (topicId: string, note: string) => void;
  answerQuiz: (subject: SubjectId, questionId: string, choice: ChoiceLetter, correct: boolean) => void;
  toggleSleep: (dayIso: string) => void;
  addPomodoro: (dayIso: string) => void;
  setPomodoro: (pomodoro: PomodoroState) => void;
  settlePomodoro: (dayIso: string) => void;
  sendToErrorBook: (questionId: string, topicId: string, choice: ErrorMark) => void;
  setErrorNote: (questionId: string, note: string) => void;
  replaceData: (data: AppData) => void;
  saveProfile: (profile: UserProfile, currentWeightKg: number | null) => void;
  loadExample: () => void;
  resetAll: () => void;
  beginExam: (mode: ExamMode, questions: ExamQuestion[]) => void;
  markExam: (questionId: string, choice: ChoiceLetter) => void;
  finishExam: () => void;
  completeReview: (reviewId: string) => void;
  setRemindersEnabled: (enabled: boolean) => void;
};

const AppStateContext = createContext<AppState | null>(null);

export function AppStateProvider({ children }: { children: ReactNode }) {
  const [data, setData] = useState<AppData>(() => loadAppData());
  const [saveError, setSaveError] = useState(false);

  useEffect(() => {
    setSaveError(!saveAppData(data));
  }, [data]);

  useEffect(() => {
    if (!data.remindersEnabled) {
      void clearReminders();
      return;
    }
    const run = () => void syncReminders(data);
    run();
    const onWake = () => {
      if (document.visibilityState === "visible") run();
    };
    document.addEventListener("visibilitychange", onWake);
    window.addEventListener("focus", onWake);
    window.addEventListener("pageshow", onWake);
    return () => {
      document.removeEventListener("visibilitychange", onWake);
      window.removeEventListener("focus", onWake);
      window.removeEventListener("pageshow", onWake);
    };
  }, [data]);

  const api = useMemo<AppState>(() => {
    const update = (recipe: (current: AppData) => AppData) => {
      setData((current) => recipe(current));
    };

    return {
      data,
      saveError,
      toggleCheck(itemId, dayIso) {
        update((current) => {
          const marked = current.dailyChecks[dayIso] ?? [];
          const next = marked.includes(itemId)
            ? marked.filter((id) => id !== itemId)
            : [...marked, itemId];
          return {
            ...current,
            dailyChecks: { ...current.dailyChecks, [dayIso]: next },
          };
        });
      },
      setTarget(key, iso) {
        update((current) => ({
          ...current,
          targets: { ...current.targets, [key]: iso },
        }));
      },
      resetTarget(key) {
        update((current) => ({
          ...current,
          targets: {
            ...current.targets,
            [key]: current.profile?.[key] ?? DEFAULT_TARGETS[key],
          },
        }));
      },
      addWeight(entry) {
        const weight = {
          id: crypto.randomUUID(),
          date: entry.date,
          kg: Math.round(entry.kg * 10) / 10,
          createdAt: new Date().toISOString(),
        };
        update((current) => ({ ...current, weights: [...current.weights, weight] }));
      },
      removeWeight(id) {
        update((current) => ({
          ...current,
          weights: current.weights.filter((item) => item.id !== id),
        }));
      },
      addWorkout(entry) {
        const workout = {
          ...entry,
          id: crypto.randomUUID(),
          createdAt: new Date().toISOString(),
        } as Workout;
        update((current) => ({
          ...current,
          workouts: [...current.workouts, workout],
          xp: addXp(current.xp, XP.workout),
        }));
      },
      removeWorkout(id) {
        update((current) => ({
          ...current,
          workouts: current.workouts.filter((item) => item.id !== id),
        }));
      },
      setTopicStatus(topicId, status) {
        const today = saoPauloNow().iso;
        update((current) => {
          const was = current.topicStatus[topicId] ?? "nao_iniciado";
          const topicStatus = { ...current.topicStatus };
          if (status === "nao_iniciado") delete topicStatus[topicId];
          else topicStatus[topicId] = status;
          const reviews =
            status === "revisado" && was !== "revisado"
              ? scheduleCycle(current.reviews, { kind: "topico", topicId, questionId: null }, today)
              : current.reviews;
          return { ...current, topicStatus, reviews };
        });
      },
      setQuestions(subject, value) {
        const count = Math.max(0, Math.min(1_000_000, Math.floor(value)));
        const day = saoPauloNow().iso;
        update((current) => {
          const delta = count - current.questions[subject];
          const questionDays = { ...current.questionDays };
          if (delta > 0) questionDays[day] = (questionDays[day] ?? 0) + delta;
          return {
            ...current,
            questions: { ...current.questions, [subject]: count },
            questionDays,
          };
        });
      },
      setTopicNote(topicId, note) {
        const text = note.slice(0, 5000);
        update((current) => {
          const topicNotes = { ...current.topicNotes };
          if (text.trim() === "") delete topicNotes[topicId];
          else topicNotes[topicId] = text;
          return { ...current, topicNotes };
        });
      },
      answerQuiz(subject, questionId, choice, correct) {
        const day = saoPauloNow().iso;
        update((current) => {
          if (current.quizAnswers[questionId]) return current;
          const already = current.xpQuestions.includes(questionId);
          const grant = correct && !already;
          return {
            ...current,
            quizAnswers: { ...current.quizAnswers, [questionId]: { choice } },
            questions: {
              ...current.questions,
              [subject]: Math.min(1_000_000, current.questions[subject] + 1),
            },
            questionDays: {
              ...current.questionDays,
              [day]: (current.questionDays[day] ?? 0) + 1,
            },
            xp: grant ? addXp(current.xp, XP.question) : current.xp,
            xpQuestions: grant ? [...current.xpQuestions, questionId] : current.xpQuestions,
          };
        });
      },
      toggleSleep(dayIso) {
        update((current) => ({
          ...current,
          sleepDays: { ...current.sleepDays, [dayIso]: !current.sleepDays[dayIso] },
        }));
      },
      addPomodoro(dayIso) {
        update((current) => ({
          ...current,
          pomodoroDays: {
            ...current.pomodoroDays,
            [dayIso]: Math.min(1_000_000, (current.pomodoroDays[dayIso] ?? 0) + 1),
          },
        }));
      },
      setPomodoro(pomodoro) {
        update((current) => ({ ...current, pomodoro }));
      },
      settlePomodoro(dayIso) {
        update((current) => {
          const timer = current.pomodoro;
          if (!timer.running || timer.endsAt === null || timer.endsAt > Date.now()) return current;
          const countThis = timer.run === "focus" || timer.run === "review";
          let next = { ...timer, running: false, endsAt: null, remainingSec: 0 };
          if (timer.run === "focus" && timer.phase < 5) {
            next = { ...timer, run: "break", running: false, endsAt: null, remainingSec: breakSeconds(timer.mode) };
          } else if (timer.run === "break") {
            const phase = (timer.phase === 4 ? 5 : timer.phase + 1) as PomodoroState["phase"];
            const run = phase === 5 ? "review" : "focus";
            next = { ...timer, phase, run, running: false, endsAt: null, remainingSec: durationFor(timer.mode, run) };
          } else {
            next = {
              mode: timer.mode,
              phase: 1,
              run: "focus",
              running: false,
              endsAt: null,
              remainingSec: focusSeconds(timer.mode),
            };
          }
          return {
            ...current,
            pomodoro: next,
            pomodoroDays: countThis
              ? { ...current.pomodoroDays, [dayIso]: Math.min(1_000_000, (current.pomodoroDays[dayIso] ?? 0) + 1) }
              : current.pomodoroDays,
            xp: countThis ? addXp(current.xp, XP.pomodoro) : current.xp,
          };
        });
      },
      sendToErrorBook(questionId, topicId, choice) {
        const today = saoPauloNow().iso;
        update((current) => {
          if (current.errorBook[questionId]) return current;
          return {
            ...current,
            errorBook: {
              ...current.errorBook,
              [questionId]: {
                topicId,
                choice,
                note: choice === "branco" ? "Em branco no simulado." : "",
              },
            },
            reviews: scheduleCycle(current.reviews, { kind: "erro", topicId, questionId }, today),
          };
        });
      },
      setErrorNote(questionId, note) {
        const text = note.slice(0, 2000);
        update((current) => {
          const entry = current.errorBook[questionId];
          if (!entry) return current;
          return {
            ...current,
            errorBook: { ...current.errorBook, [questionId]: { ...entry, note: text } },
          };
        });
      },
      replaceData(next) {
        setData(next);
      },
      saveProfile(profile, currentWeightKg) {
        const today = saoPauloNow().iso;
        update((current) => {
          let weights = current.weights;
          if (currentWeightKg !== null) {
            const kg = Math.round(currentWeightKg * 10) / 10;
            const latest = latestWeight(weights);
            if (!latest || Math.abs(latest.kg - kg) >= 0.05) {
              weights = [
                ...weights,
                {
                  id: crypto.randomUUID(),
                  date: today,
                  kg,
                  createdAt: new Date().toISOString(),
                },
              ];
            }
          }
          return {
            ...current,
            profile,
            heightM: Math.round(profile.heightCm) / 100,
            targets: { escrita: profile.escrita, taf: profile.taf },
            weights,
          };
        });
      },
      loadExample() {
        const today = saoPauloNow().iso;
        update((current) => ({
          ...current,
          profile: EXAMPLE_PROFILE,
          heightM: EXAMPLE_PROFILE.heightCm / 100,
          targets: { escrita: EXAMPLE_PROFILE.escrita, taf: EXAMPLE_PROFILE.taf },
          weights: current.weights.length
            ? current.weights
            : [
                {
                  id: "peso-inicial",
                  date: today,
                  kg: EXAMPLE_WEIGHT_KG,
                  createdAt: new Date().toISOString(),
                  initial: true,
                },
              ],
        }));
      },
      resetAll() {
        setData(createSeed());
      },
      beginExam(mode, questions) {
        if (questions.length === 0) return;
        const started = Date.now();
        update((current) => {
          if (current.exam && current.exam.finishedAt === null) return current;
          return {
            ...current,
            exam: {
              id: crypto.randomUUID(),
              mode,
              startedAt: new Date(started).toISOString(),
              endsAt: started + EXAM_PLAN[mode].seconds * 1000,
              questions,
              marks: {},
              finishedAt: null,
              scores: null,
            },
          };
        });
      },
      markExam(questionId, choice) {
        update((current) => {
          const exam = current.exam;
          if (!exam || exam.finishedAt) return current;
          if (!exam.questions.some((item) => item.id === questionId)) return current;
          const marks = { ...exam.marks };
          if (marks[questionId] === choice) delete marks[questionId];
          else marks[questionId] = choice;
          return { ...current, exam: { ...exam, marks } };
        });
      },
      finishExam() {
        const today = saoPauloNow().iso;
        update((current) => {
          const exam = current.exam;
          if (!exam || exam.finishedAt) return current;
          const scores = scoreExam(exam);
          let errorBook = current.errorBook;
          let reviews = current.reviews;
          let xp = current.xp;
          let xpQuestions = current.xpQuestions;
          const questions = { ...current.questions };
          let answered = 0;
          for (const item of exam.questions) {
            const marked = item.id in exam.marks ? exam.marks[item.id] : undefined;
            const correct = marked === item.answer;
            if (correct && !xpQuestions.includes(item.id)) {
              xp = addXp(xp, XP.question);
              xpQuestions = [...xpQuestions, item.id];
            }
            if (!correct && !errorBook[item.id]) {
              const choice: ErrorMark = marked ?? "branco";
              errorBook = {
                ...errorBook,
                [item.id]: {
                  topicId: item.topicId,
                  choice,
                  note: marked ? "" : "Em branco no simulado.",
                },
              };
              reviews = scheduleCycle(reviews, { kind: "erro", topicId: item.topicId, questionId: item.id }, today);
            }
            questions[item.subject] = Math.min(1_000_000, questions[item.subject] + 1);
            answered += 1;
          }
          return {
            ...current,
            exam: { ...exam, finishedAt: new Date().toISOString(), scores },
            errorBook,
            reviews,
            xp,
            xpQuestions,
            questions,
            questionDays: {
              ...current.questionDays,
              [today]: (current.questionDays[today] ?? 0) + answered,
            },
          };
        });
      },
      completeReview(reviewId) {
        const today = saoPauloNow().iso;
        update((current) => {
          const item = current.reviews.find((review) => review.id === reviewId);
          if (!item || item.doneOn) return current;
          return {
            ...current,
            xp: addXp(current.xp, XP.review),
            reviews: current.reviews.map((review) => (review.id === reviewId ? { ...review, doneOn: today } : review)),
          };
        });
      },
      setRemindersEnabled(enabled) {
        update((current) => ({ ...current, remindersEnabled: enabled }));
      },
    };
  }, [data, saveError]);

  return <AppStateContext.Provider value={api}>{children}</AppStateContext.Provider>;
}

export function useAppState(): AppState {
  const state = useContext(AppStateContext);
  if (!state) throw new Error("O painel precisa do estado.");
  return state;
}

function addXp(xp: number, amount: number): number {
  return Math.min(1_000_000, xp + amount);
}
