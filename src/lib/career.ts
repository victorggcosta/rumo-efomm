export const XP = {
  pomodoro: 10,
  question: 5,
  review: 20,
  workout: 15,
} as const;

export const RANKS = [
  { id: "candidato", title: "Candidato(a)", xp: 0 },
  { id: "aluno", title: "Aluno(a) EFOMM - 1º Ano", xp: 500 },
  { id: "praticante", title: "Praticante de Náutica / Máquinas", xp: 1_500 },
  { id: "oficial2", title: "2º Oficial de Náutica / Máquinas", xp: 3_500 },
  { id: "oficial1", title: "1º Oficial de Náutica / Máquinas", xp: 7_000 },
  { id: "capitao", title: "Capitão de Longo Curso / Chefe de Máquinas", xp: 12_000 },
] as const;

export type RankId = (typeof RANKS)[number]["id"];

export function rankFor(xp: number) {
  const safe = Number.isFinite(xp) ? Math.max(0, Math.floor(xp)) : 0;
  let index = 0;
  for (let i = 0; i < RANKS.length; i += 1) {
    if (safe >= RANKS[i].xp) index = i;
  }
  const current = RANKS[index];
  const next = RANKS[index + 1] ?? null;
  const span = next ? next.xp - current.xp : 1;
  const progress = next ? Math.min(1, Math.max(0, (safe - current.xp) / span)) : 1;
  return { xp: safe, current, next, progress };
}
