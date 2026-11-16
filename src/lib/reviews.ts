import type { ReviewItem, ReviewKind, ReviewStage } from "../types.ts";
import { addIsoDays } from "./dates.ts";

const STAGES: ReviewStage[] = [1, 7, 30];

export function scheduleCycle(
  reviews: ReviewItem[],
  spec: { kind: ReviewKind; topicId: string; questionId: string | null },
  todayIso: string,
): ReviewItem[] {
  const exists = reviews.some(
    (item) => item.kind === spec.kind && item.topicId === spec.topicId && item.questionId === spec.questionId,
  );
  if (exists) return reviews;
  const key = spec.questionId ?? spec.topicId;
  return [
    ...reviews,
    ...STAGES.map((stage) => ({
      id: `${spec.kind}:${key}:${stage}`,
      kind: spec.kind,
      topicId: spec.topicId,
      questionId: spec.questionId,
      stage,
      due: addIsoDays(todayIso, stage),
      doneOn: null,
    })),
  ];
}

export function dueReviews(reviews: ReviewItem[], todayIso: string): ReviewItem[] {
  return reviews
    .filter((item) => item.doneOn === null && item.due <= todayIso)
    .sort((a, b) => (a.due < b.due ? -1 : a.due > b.due ? 1 : a.stage - b.stage));
}

export function nextReview(reviews: ReviewItem[], todayIso: string): ReviewItem | null {
  return (
    reviews
      .filter((item) => item.doneOn === null && item.due > todayIso)
      .sort((a, b) => (a.due < b.due ? -1 : a.due > b.due ? 1 : a.stage - b.stage))[0] ?? null
  );
}
