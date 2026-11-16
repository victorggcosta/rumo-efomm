import type { Didactic } from "../aulas/types.ts";
import type { QuizQuestion } from "../lessons.ts";

export const RIGOR_TOPICS = new Set([
  "mat-conjuntos-alg",
  "mat-eq-produtos",
  "mat-afim-quad",
  "fis-dim-vetores",
  "fis-cin-escalar",
  "fis-queda-lanc",
  "mat-exp",
  "mat-log",
  "mat-trig-ciclo",
  "fis-newton",
  "fis-energia",
  "mat-geo-plana",
  "mat-geo-espacial",
  "mat-matrizes",
  "mat-complexos",
  "mat-polinomios",
  "fis-hidrostatica",
  "mat-combinatoria",
  "mat-geo-analitica",
  "mat-limites",
  "fis-termo",
  "fis-circuitos",
  "ing-efomm",
  "por-militar",
]);

export const QUESTION_BANKS: Record<string, () => Promise<{ questions: QuizQuestion[] }>> = {
  "mat-conjuntos-alg": () => import("./mat-conjuntos-alg.ts"),
  "mat-eq-produtos": () => import("./mat-eq-produtos.ts"),
  "mat-afim-quad": () => import("./mat-afim-quad.ts"),
  "fis-dim-vetores": () => import("./fis-dim-vetores.ts"),
  "fis-cin-escalar": () => import("./fis-cin-escalar.ts"),
  "fis-queda-lanc": () => import("./fis-queda-lanc.ts"),
  "mat-exp": () => import("./mat-exp.ts"),
  "mat-log": () => import("./mat-log.ts"),
  "mat-trig-ciclo": () => import("./mat-trig-ciclo.ts"),
  "fis-newton": () => import("./fis-newton.ts"),
  "fis-energia": () => import("./fis-energia.ts"),
  "mat-geo-plana": () => import("./mat-geo-plana.ts"),
  "mat-geo-espacial": () => import("./mat-geo-espacial.ts"),
  "mat-matrizes": () => import("./mat-matrizes.ts"),
  "mat-complexos": () => import("./mat-complexos.ts"),
  "mat-polinomios": () => import("./mat-polinomios.ts"),
  "fis-hidrostatica": () => import("./fis-hidrostatica.ts"),
  "mat-combinatoria": () => import("./mat-combinatoria.ts"),
  "mat-geo-analitica": () => import("./mat-geo-analitica.ts"),
  "mat-limites": () => import("./mat-limites.ts"),
  "fis-termo": () => import("./fis-termo.ts"),
  "fis-circuitos": () => import("./fis-circuitos.ts"),
  "ing-efomm": () => import("./ing-efomm.ts"),
  "por-militar": () => import("./por-militar.ts"),
};

export const DIDACTIC_BANKS: Record<string, () => Promise<{ didactic: Didactic }>> = {
  "mat-conjuntos-alg": () => import("../aulas/mat-conjuntos-alg.ts"),
  "mat-eq-produtos": () => import("../aulas/mat-eq-produtos.ts"),
  "mat-afim-quad": () => import("../aulas/mat-afim-quad.ts"),
  "fis-dim-vetores": () => import("../aulas/fis-dim-vetores.ts"),
  "fis-cin-escalar": () => import("../aulas/fis-cin-escalar.ts"),
  "fis-queda-lanc": () => import("../aulas/fis-queda-lanc.ts"),
  "mat-exp": () => import("../aulas/mat-exp.ts"),
  "mat-log": () => import("../aulas/mat-log.ts"),
  "mat-trig-ciclo": () => import("../aulas/mat-trig-ciclo.ts"),
  "fis-newton": () => import("../aulas/fis-newton.ts"),
  "fis-energia": () => import("../aulas/fis-energia.ts"),
  "mat-geo-plana": () => import("../aulas/mat-geo-plana.ts"),
  "mat-geo-espacial": () => import("../aulas/mat-geo-espacial.ts"),
  "mat-matrizes": () => import("../aulas/mat-matrizes.ts"),
  "mat-complexos": () => import("../aulas/mat-complexos.ts"),
  "mat-polinomios": () => import("../aulas/mat-polinomios.ts"),
  "fis-hidrostatica": () => import("../aulas/fis-hidrostatica.ts"),
  "mat-combinatoria": () => import("../aulas/mat-combinatoria.ts"),
  "mat-geo-analitica": () => import("../aulas/mat-geo-analitica.ts"),
  "mat-limites": () => import("../aulas/mat-limites.ts"),
  "fis-termo": () => import("../aulas/fis-termo.ts"),
  "fis-circuitos": () => import("../aulas/fis-circuitos.ts"),
  "ing-efomm": () => import("../aulas/ing-efomm.ts"),
  "por-militar": () => import("../aulas/por-militar.ts"),
};

export function rigorBadge(topicId: string): string | null {
  if (!RIGOR_TOPICS.has(topicId)) return null;
  const count = topicId === "ing-efomm" || topicId === "por-militar" ? 20 : 15;
  return `${count} questões · 3 níveis`;
}
