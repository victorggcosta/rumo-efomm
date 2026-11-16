import { QUESTION_BANKS } from "../data/questoes/registry.ts";
import { TRAIL } from "../data/topics.ts";
import type { ChoiceLetter, ExamMode, ExamQuestion, ExamScores, ExamSession, ExamSubject } from "../types.ts";

export const EXAM_SUBJECTS: { id: ExamSubject; label: string }[] = [
  { id: "matematica", label: "Matemática" },
  { id: "fisica", label: "Física" },
  { id: "ingles", label: "Inglês" },
  { id: "portugues", label: "Português" },
];

export const EXAM_PLAN: Record<ExamMode, { perSubject: number; seconds: number; label: string; timeLabel: string }> = {
  mini: { perSubject: 10, seconds: 90 * 60, label: "Mini-simulado", timeLabel: "1h30" },
  completo: { perSubject: 20, seconds: 4 * 60 * 60, label: "Simulado completo", timeLabel: "4h00" },
};

const PASSING_POINTS = 50;

export function passingPoints(): number {
  return PASSING_POINTS;
}

export async function drawExam(mode: ExamMode): Promise<ExamQuestion[]> {
  const plan = EXAM_PLAN[mode];
  const questions: ExamQuestion[] = [];
  for (const subject of EXAM_SUBJECTS) {
    const topicIds = TRAIL.flatMap((block) => block.topics)
      .filter((topic) => topic.subjectId === subject.id && QUESTION_BANKS[topic.id])
      .map((topic) => topic.id);
    const pool: ExamQuestion[] = [];
    for (const topicId of topicIds) {
      const bank = await QUESTION_BANKS[topicId]();
      for (const item of bank.questions) {
        pool.push({
          id: item.id,
          topicId,
          subject: subject.id,
          prompt: item.prompt,
          choices: item.choices.map((choice) => ({ letter: choice.letter, text: choice.text })),
          answer: item.answer,
        });
      }
    }
    if (pool.length < plan.perSubject) {
      throw new Error(`${subject.label} tem ${pool.length} questões no banco.`);
    }
    questions.push(...sampleSpread(pool, plan.perSubject));
  }
  return questions;
}

export function scoreExam(exam: Pick<ExamSession, "questions" | "marks">): ExamScores {
  const scores = {} as ExamScores;
  for (const subject of EXAM_SUBJECTS) {
    const items = exam.questions.filter((item) => item.subject === subject.id);
    const correct = items.filter((item) => exam.marks[item.id] === item.answer).length;
    const total = items.length;
    scores[subject.id] = {
      correct,
      total,
      points: total === 0 ? 0 : Math.round((correct / total) * 100),
    };
  }
  return scores;
}

export function eliminatedSubjects(scores: ExamScores): ExamSubject[] {
  return EXAM_SUBJECTS.filter((subject) => scores[subject.id].points < PASSING_POINTS).map((subject) => subject.id);
}

function sampleSpread(pool: ExamQuestion[], count: number): ExamQuestion[] {
  const groups = new Map<string, ExamQuestion[]>();
  for (const item of pool) {
    const list = groups.get(item.topicId) ?? [];
    list.push(item);
    groups.set(item.topicId, list);
  }
  const buckets = [...groups.values()].map((items) => shuffle(items));
  const picked: ExamQuestion[] = [];
  while (picked.length < count && buckets.some((bucket) => bucket.length > 0)) {
    for (const bucket of buckets) {
      const next = bucket.pop();
      if (!next) continue;
      picked.push(next);
      if (picked.length === count) break;
    }
  }
  return shuffle(picked);
}

function shuffle<T>(items: T[]): T[] {
  const copy = [...items];
  for (let index = copy.length - 1; index > 0; index -= 1) {
    const swap = Math.floor(Math.random() * (index + 1));
    const current = copy[index];
    copy[index] = copy[swap] as T;
    copy[swap] = current as T;
  }
  return copy;
}

export function isChoiceLetter(value: unknown): value is ChoiceLetter {
  return value === "A" || value === "B" || value === "C" || value === "D" || value === "E";
}
