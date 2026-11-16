import type { SubjectId } from "../types.ts";

export type TrailTopic = { id: string; label: string; subjectId: SubjectId };
export type TrailBlock = {
  id: string;
  level: 1 | 2 | 3;
  title: string;
  weeks: string;
  weekStart: number;
  weekEnd: number;
  goal: string;
  blurb: string;
  topics: TrailTopic[];
};

export const SUBJECTS: { id: SubjectId; label: string; hint: string }[] = [
  { id: "matematica", label: "Matemática", hint: "Da conta com inteiros até a reta final." },
  { id: "fisica", label: "Física", hint: "Do sistema internacional ao eletromagnetismo." },
  { id: "ingles", label: "Inglês", hint: "Da frase simples à leitura de prova." },
  { id: "portugues", label: "Português e Redação", hint: "Gramática, interpretação e a dissertação." },
];

const LEVEL = {
  1: "Base do zero",
  2: "Pré-EFOMM",
  3: "Reta final",
} as const;

export const TRAIL: TrailBlock[] = [
  block("s01", 1, "Construção da base", "1–3", 1, 3, "60%", "Inteiros, frações e as unidades da física. As três primeiras aulas descem até o nível de banca.", [
    ["matematica", "mat-conjuntos-alg", "Conjuntos e operações algébricas"],
    ["matematica", "mat-eq-produtos", "Equações, inequações e produtos notáveis"],
    ["fisica", "fis-dim-vetores", "Análise dimensional, SI e vetores"],
    ["matematica", "mat-fracoes", "Operações com inteiros, frações e decimais"],
    ["matematica", "mat-pot-rad", "Potenciação e radiciação"],
    ["matematica", "mat-produtos", "Produtos notáveis e fatoração"],
    ["matematica", "mat-equacoes", "Equações e inequações"],
    ["matematica", "mat-proporcao", "Razão, proporção e porcentagem"],
    ["matematica", "mat-conjuntos", "Conjuntos numéricos"],
    ["fisica", "fis-conversao", "Sistema Internacional e conversão de unidades"],
    ["fisica", "fis-notacao", "Notação científica e ordem de grandeza"],
    ["fisica", "fis-algarismos", "Algarismos significativos"],
    ["fisica", "fis-vetores", "Grandezas escalares e vetoriais"],
  ]),
  block("s04", 1, "Funções e cinemática", "4–6", 4, 6, "60%", "As primeiras funções e o movimento em linha reta. As três primeiras aulas descem até o nível de banca.", [
    ["matematica", "mat-afim-quad", "Função afim e quadrática"],
    ["fisica", "fis-cin-escalar", "Cinemática escalar: MU, MUV e gráficos"],
    ["fisica", "fis-queda-lanc", "Queda livre e lançamentos"],
    ["matematica", "mat-relacoes", "Relações, domínio e imagem"],
    ["matematica", "mat-afim", "Função afim"],
    ["matematica", "mat-quadratica", "Função quadrática"],
    ["matematica", "mat-modular", "Função modular"],
    ["fisica", "fis-velocidade", "Velocidade média"],
    ["fisica", "fis-aceleracao", "Aceleração"],
    ["fisica", "fis-mu", "Movimento uniforme"],
    ["fisica", "fis-muv", "Movimento uniformemente variado"],
    ["fisica", "fis-graficos", "Gráficos da cinemática"],
    ["fisica", "fis-queda", "Queda livre"],
  ]),
  block("s07", 1, "Inglês e português de base", "7–9", 7, 9, "60%", "Exponencial, logaritmo e o ciclo trigonométrico, junto com a frase simples e a dissertação.", [
    ["matematica", "mat-exp", "Função exponencial"],
    ["matematica", "mat-log", "Logaritmos"],
    ["matematica", "mat-trig-ciclo", "Trigonometria no ciclo"],
    ["ingles", "ing-tobe", "Pronomes e verbo to be"],
    ["ingles", "ing-present", "Simple present e continuous"],
    ["ingles", "ing-past", "Simple past"],
    ["ingles", "ing-preposicoes", "Preposições in, on e at"],
    ["ingles", "ing-vocabulario", "Vocabulário de base"],
    ["portugues", "por-acentuacao", "Acentuação e ortografia"],
    ["portugues", "por-gramaticais", "Classes gramaticais"],
    ["portugues", "por-redacao-estrutura", "Estrutura da redação dissertativa"],
  ]),
  block("s10", 1, "Fechamento da base", "10–12", 10, 12, "65%", "Newton, energia e a geometria plana da base.", [
    ["fisica", "fis-newton", "Leis de Newton e atrito"],
    ["fisica", "fis-energia", "Trabalho e energia"],
    ["matematica", "mat-geo-plana", "Geometria plana"],
    ["matematica", "mat-revisao-base", "Revisão da base de matemática"],
    ["fisica", "fis-revisao-base", "Revisão da base de física"],
  ]),
  block("s13", 2, "Trigonometria e contagem", "13–15", 13, 15, "65%", "O meio do ensino médio em matemática.", [
    ["matematica", "mat-trigonometria", "Trigonometria completa"],
    ["matematica", "mat-pa-pg", "PA e PG"],
    ["matematica", "mat-combinatoria", "Análise combinatória e probabilidade"],
  ]),
  block("s16", 2, "Matrizes e espaço", "16–18", 16, 18, "65%", "Sistemas lineares e a geometria do espaço.", [
    ["matematica", "mat-matrizes", "Matrizes e sistemas lineares"],
    ["matematica", "mat-geo-espacial", "Geometria espacial"],
  ]),
  block("s19", 2, "Dinâmica e calor", "19–21", 19, 21, "70%", "Impulso, fluidos e temperatura. Newton e energia já entraram nas semanas 10 a 12.", [
    ["fisica", "fis-impulso", "Impulso e quantidade de movimento"],
    ["fisica", "fis-hidrostatica", "Hidrostática"],
    ["fisica", "fis-termo", "Termodinâmica e máquinas térmicas"],
  ]),
  block("s22", 2, "Inglês de prova", "22–24", 22, 24, "70%", "Textos marítimos, modais, phrasal verbs e os tempos da prova.", [
    ["ingles", "ing-efomm", "Inglês no estilo EFOMM"],
    ["ingles", "ing-perfect", "Present perfect e past perfect"],
    ["ingles", "ing-modais", "Verbos modais"],
    ["ingles", "ing-passiva", "Voz passiva"],
    ["ingles", "ing-condicionais", "Conditionals (if-clauses)"],
    ["ingles", "ing-reported", "Reported speech"],
    ["ingles", "ing-leitura", "Técnicas de leitura"],
  ]),
  block("s25", 2, "Gramática e redação semanal", "25–27", 25, 27, "70%", "Sintaxe, crase, regência, concordância e o texto toda semana.", [
    ["portugues", "por-militar", "Português no estilo militar"],
    ["portugues", "por-sintaxe", "Análise sintática"],
    ["portugues", "por-concordancia", "Concordância verbal e nominal"],
    ["portugues", "por-regencia-crase", "Regência e crase"],
    ["portugues", "por-pontuacao", "Pontuação"],
    ["portugues", "por-redacao-pratica", "Prática semanal de redação"],
  ]),
  block("s28", 3, "Reta final de matemática", "28–30", 28, 30, "75%", "O que a banca cobra no fim do programa.", [
    ["matematica", "mat-complexos", "Números complexos"],
    ["matematica", "mat-polinomios", "Polinômios"],
    ["matematica", "mat-geo-analitica", "Geometria analítica"],
    ["matematica", "mat-limites", "Limites e derivadas básicas"],
  ]),
  block("s31", 3, "Reta final de física", "31–33", 31, 33, "75%", "Óptica, ondas e eletricidade.", [
    ["fisica", "fis-optica", "Óptica geométrica"],
    ["fisica", "fis-ondas", "Ondulatória"],
    ["fisica", "fis-eletrostatica", "Eletrostática"],
    ["fisica", "fis-circuitos", "Eletrodinâmica: circuitos e Kirchhoff"],
    ["fisica", "fis-magnetismo", "Eletromagnetismo"],
  ]),
  block("s34", 3, "Provas anteriores", "34–36", 34, 36, "80%+", "Simulados da banca e a redação no tempo da prova.", [
    ["ingles", "ing-phrasal", "Phrasal verbs e linking words"],
    ["ingles", "ing-falsos", "Falsos cognatos"],
    ["ingles", "ing-interpretacao", "Interpretação avançada"],
    ["portugues", "por-interpretacao", "Interpretação textual avançada"],
    ["portugues", "por-figuras", "Figuras de linguagem"],
    ["matematica", "mat-simulado", "Simulado: prova EFOMM de matemática"],
    ["fisica", "fis-simulado", "Simulado: prova EFOMM de física"],
    ["ingles", "ing-simulado", "Simulado: prova EFOMM de inglês"],
    ["portugues", "por-simulado", "Simulado EFOMM e redação cronometrada"],
  ]),
];

export const STATUS_OPTIONS = [
  { id: "nao_iniciado", label: "Não iniciado" },
  { id: "estudando", label: "Estudando" },
  { id: "revisado", label: "Revisado" },
] as const;

export function findTopic(topicId: string): {
  subjectId: SubjectId;
  subjectLabel: string;
  label: string;
  level: 1 | 2 | 3;
  levelTitle: string;
  weeks: string;
  blockTitle: string;
} | null {
  for (const item of TRAIL) {
    const topic = item.topics.find((entry) => entry.id === topicId);
    if (!topic) continue;
    const subject = SUBJECTS.find((entry) => entry.id === topic.subjectId);
    return {
      subjectId: topic.subjectId,
      subjectLabel: subject?.label ?? topic.subjectId,
      label: topic.label,
      level: item.level,
      levelTitle: LEVEL[item.level],
      weeks: item.weeks,
      blockTitle: item.title,
    };
  }
  return null;
}

export function blocksFor(subjectId: SubjectId): TrailBlock[] {
  return TRAIL.map((item) => ({
    ...item,
    topics: item.topics.filter((topic) => topic.subjectId === subjectId),
  })).filter((item) => item.topics.length > 0);
}

function block(
  id: string,
  level: 1 | 2 | 3,
  title: string,
  weeks: string,
  weekStart: number,
  weekEnd: number,
  goal: string,
  blurb: string,
  topics: readonly (readonly [SubjectId, string, string])[],
): TrailBlock {
  return {
    id,
    level,
    title,
    weeks,
    weekStart,
    weekEnd,
    goal,
    blurb,
    topics: topics.map(([subjectId, topicId, label]) => ({ id: topicId, label, subjectId })),
  };
}

const ids = TRAIL.flatMap((item) => [item.id, ...item.topics.map((topic) => topic.id)]);
const seen = new Set<string>();
for (const id of ids) {
  if (seen.has(id)) throw new Error(`Id repetido na trilha: ${id}`);
  seen.add(id);
}
