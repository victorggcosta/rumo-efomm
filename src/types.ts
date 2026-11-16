export type SubjectId =
  | "matematica"
  | "fisica"
  | "ingles"
  | "portugues"
  | "redacao";

export type TopicStatus = "nao_iniciado" | "estudando" | "revisado";

export type TargetKey = "escrita" | "taf";

export type Sex = "masculino" | "feminino";

export type AvatarId = "ancora" | "bussola" | "leme" | "farol" | "onda";

export type UserProfile = {
  name: string;
  age: number;
  sex: Sex;
  photo: string | null;
  avatar: AvatarId;
  heightCm: number;
  goalWeightKg: number;
  freeStart: string;
  freeEnd: string;
  escrita: string;
  taf: string;
  weeklyQuestionGoal: number;
  weeklyPomodoroGoal: number;
};

export type WeightEntry = {
  id: string;
  date: string;
  kg: number;
  createdAt: string;
  initial?: boolean;
};

export type RunWorkout = {
  id: string;
  kind: "corrida" | "caminhada";
  date: string;
  distanceKm: number;
  durationSec: number;
  createdAt: string;
};

export type StrengthWorkout = {
  id: string;
  kind: "musculacao";
  date: string;
  durationMin: number;
  note: string;
  createdAt: string;
};

export type SwimWorkout = {
  id: string;
  kind: "natacao";
  date: string;
  durationSec: number;
  createdAt: string;
};

export type Workout = RunWorkout | StrengthWorkout | SwimWorkout;

export type ChoiceLetter = "A" | "B" | "C" | "D" | "E";

export type QuizAnswer = {
  choice: ChoiceLetter;
};

export type PomodoroMode = "25" | "50";
export type PomodoroPhase = 1 | 2 | 3 | 4 | 5;
export type PomodoroRun = "focus" | "break" | "review";

export type PomodoroState = {
  mode: PomodoroMode;
  phase: PomodoroPhase;
  run: PomodoroRun;
  running: boolean;
  /** Epoch ms. Vale quando o timer está correndo. */
  endsAt: number | null;
  remainingSec: number;
};

export type ErrorMark = ChoiceLetter | "branco";

export type ErrorEntry = {
  topicId: string;
  choice: ErrorMark;
  note: string;
};

export type ReviewKind = "topico" | "erro";
export type ReviewStage = 1 | 7 | 30;

export type ReviewItem = {
  id: string;
  kind: ReviewKind;
  topicId: string;
  questionId: string | null;
  stage: ReviewStage;
  due: string;
  doneOn: string | null;
};

export type ExamMode = "mini" | "completo";
export type ExamSubject = "matematica" | "fisica" | "ingles" | "portugues";

export type ExamQuestion = {
  id: string;
  topicId: string;
  subject: ExamSubject;
  prompt: string;
  choices: { letter: ChoiceLetter; text: string }[];
  answer: ChoiceLetter;
};

export type ExamScores = Record<ExamSubject, { correct: number; total: number; points: number }>;

export type ExamSession = {
  id: string;
  mode: ExamMode;
  startedAt: string;
  endsAt: number;
  questions: ExamQuestion[];
  marks: Record<string, ChoiceLetter>;
  finishedAt: string | null;
  scores: ExamScores | null;
};

export type AppData = {
  version: 5;
  profile: UserProfile | null;
  heightM: number;
  targets: Record<TargetKey, string>;
  weights: WeightEntry[];
  workouts: Workout[];
  /** Dia local do aparelho → ids marcados naquele dia. */
  dailyChecks: Record<string, string[]>;
  topicStatus: Record<string, TopicStatus>;
  questions: Record<SubjectId, number>;
  /** Anotações da sala de aula, por tópico. */
  topicNotes: Record<string, string>;
  /** Questão do simulado já respondida. A chave é o id da questão. */
  quizAnswers: Record<string, QuizAnswer>;
  /** Dia → questões contadas naquele dia, para a meta semanal. */
  questionDays: Record<string, number>;
  /** Dia → pomodoros concluídos. */
  pomodoroDays: Record<string, number>;
  /** Dia → dormiu cerca de 8 horas. */
  sleepDays: Record<string, boolean>;
  /** Questões enviadas ao caderno de erros. */
  errorBook: Record<string, ErrorEntry>;
  /** Revisões de 1, 7 e 30 dias. */
  reviews: ReviewItem[];
  /** Experiência acumulada na carreira. */
  xp: number;
  /** Questões que já renderam XP por acerto. */
  xpQuestions: string[];
  /** Simulado em andamento ou o último encerrado. */
  exam: ExamSession | null;
  pomodoro: PomodoroState;
  /** Lembretes locais pedidos na aba de configurações. */
  remindersEnabled: boolean;
};
