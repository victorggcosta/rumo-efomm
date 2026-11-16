export type ScheduleMode = "all" | "choice";

export type ScheduleItem = {
  id: string;
  label: string;
};

export type ScheduleBlock = {
  id: string;
  title: string;
  time: string;
  mode: ScheduleMode;
  hint?: string;
  items: ScheduleItem[];
};

export type RoutineRow = {
  id: string;
  time: string;
  label: string;
  start: number;
  end: number;
};

type BlockTemplate = {
  id: string;
  title: string;
  minutes: number;
  mode: ScheduleMode;
  hint?: string;
  items: ScheduleItem[];
};

const BLOCK_TEMPLATE: BlockTemplate[] = [
  {
    id: "pre",
    title: "Pré-treino",
    minutes: 30,
    mode: "all",
    items: [
      { id: "pre-lanche", label: "Lanche leve" },
      { id: "pre-roupa", label: "Trocar de roupa" },
      { id: "pre-alongar", label: "Alongar" },
    ],
  },
  {
    id: "treino",
    title: "Treino físico",
    minutes: 60,
    mode: "all",
    items: [
      {
        id: "treino-sessao",
        label: "Sessão do dia: corrida, caminhada, musculação ou natação",
      },
    ],
  },
  {
    id: "jantar",
    title: "Jantar",
    minutes: 40,
    mode: "all",
    items: [
      { id: "jantar-refeicao", label: "Jantar" },
      { id: "jantar-agua", label: "Água" },
    ],
  },
  {
    id: "exatas",
    title: "Bloco 1 · Exatas",
    minutes: 90,
    mode: "choice",
    hint: "Matemática ou Física. Marcar um já completa o bloco.",
    items: [
      { id: "exatas-mat", label: "Matemática" },
      { id: "exatas-fis", label: "Física" },
    ],
  },
  {
    id: "pausa",
    title: "Pausa",
    minutes: 15,
    mode: "all",
    items: [
      { id: "pausa-levantar", label: "Levantar" },
      { id: "pausa-agua", label: "Água" },
      { id: "pausa-alongar", label: "Alongar" },
    ],
  },
  {
    id: "linguagens",
    title: "Bloco 2 · Linguagens e revisão",
    minutes: 95,
    mode: "choice",
    hint: "Inglês, Português, Redação ou revisão. Marcar um já completa o bloco.",
    items: [
      { id: "ling-ing", label: "Inglês" },
      { id: "ling-port", label: "Português" },
      { id: "ling-red", label: "Redação" },
      { id: "ling-rev", label: "Revisão" },
    ],
  },
  {
    id: "sono",
    title: "Higiene do sono",
    minutes: 60,
    mode: "all",
    items: [
      { id: "sono-banho", label: "Banho" },
      { id: "sono-mochila", label: "Preparar roupa e mochila" },
      { id: "sono-telas", label: "Telas off" },
      { id: "sono-deitar", label: "Deitar" },
    ],
  },
];

export type DayPlan = {
  label: string;
  start: number;
  end: number;
  blocks: ScheduleBlock[];
  routine: RoutineRow[];
  review: ScheduleBlock | null;
};

export function dayPlan(freeStart: string, freeEnd: string): DayPlan {
  const parsed = parseWindow(freeStart, freeEnd) ?? parseWindow("15:30", "22:00");
  if (!parsed) throw new Error("Janela livre inválida.");
  const { start, end } = parsed;
  const span = end - start;
  const minutes = allocate(
    span,
    BLOCK_TEMPLATE.map((block) => block.minutes),
  );
  let cursor = start;
  const endLabel = minutesToClock(end);
  const blocks = BLOCK_TEMPLATE.map((block, index) => {
    const blockStart = cursor;
    const blockEnd = cursor + minutes[index];
    cursor = blockEnd;
    const items =
      block.id === "sono"
        ? block.items.map((item) =>
            item.id === "sono-deitar" ? { ...item, label: `Deitar às ${endLabel}` } : item,
          )
        : block.items;
    return {
      id: block.id,
      title: block.title,
      time: `${minutesToClock(blockStart)}–${minutesToClock(blockEnd)}`,
      mode: block.mode,
      hint: block.hint,
      items,
    };
  });
  const routine: RoutineRow[] = [];
  if (start > 0) {
    routine.push({
      id: "antes",
      time: `até ${minutesToClock(start)}`,
      label: "Antes da janela",
      start: 0,
      end: start,
    });
  }
  routine.push({
    id: "livre",
    time: `${minutesToClock(start)}–${endLabel}`,
    label: "Janela livre",
    start,
    end,
  });
  if (end < 24 * 60) {
    routine.push({
      id: "depois",
      time: `depois das ${endLabel}`,
      label: "Descanso",
      start: end,
      end: 24 * 60,
    });
  }
  return {
    label: `${minutesToClock(start)}–${endLabel}`,
    start,
    end,
    blocks,
    routine,
    review: reviewBlock(start),
  };
}

export function blockBounds(time: string): { start: number; end: number } {
  const [start, end] = time.split(/[–-]/).map((part) => part.trim());
  return { start: clockToMinutes(start), end: clockToMinutes(end) };
}

export function isCurrentRange(time: string, minutesOfDay: number): boolean {
  const bounds = blockBounds(time);
  return minutesOfDay >= bounds.start && minutesOfDay < bounds.end;
}

export function currentRoutineId(minutesOfDay: number, routine: RoutineRow[]): string {
  return routine.find((row) => minutesOfDay >= row.start && minutesOfDay < row.end)?.id ?? routine.at(-1)?.id ?? "";
}

export function dayScore(checked: ReadonlySet<string>, blocks: ScheduleBlock[]): { done: number; total: number } {
  let done = 0;
  let total = 0;
  for (const block of blocks) {
    if (block.mode === "all") {
      total += block.items.length;
      done += block.items.filter((item) => checked.has(item.id)).length;
    } else {
      total += 1;
      if (block.items.some((item) => checked.has(item.id))) done += 1;
    }
  }
  return { done, total };
}

export function reviewCheckedCount(checked: ReadonlySet<string>, review: ScheduleBlock | null): number {
  if (!review) return 0;
  return review.items.filter((item) => checked.has(item.id)).length;
}

function reviewBlock(start: number): ScheduleBlock | null {
  if (start < 6 * 60) return null;
  const reviewStart = Math.max(5 * 60, start - 45);
  if (start - reviewStart < 20) return null;
  return {
    id: "bus-ida",
    title: "Revisão antes da janela",
    time: `${minutesToClock(reviewStart)}–${minutesToClock(start)}`,
    mode: "all",
    items: [
      { id: "bus-ida-revisao", label: "Revisão rápida" },
      { id: "bus-ida-flash", label: "Flashcards" },
      { id: "bus-ida-questoes", label: "Questões" },
    ],
  };
}

function parseWindow(freeStart: string, freeEnd: string): { start: number; end: number } | null {
  if (!/^([01]\d|2[0-3]):[0-5]\d$/.test(freeStart) || !/^([01]\d|2[0-3]):[0-5]\d$/.test(freeEnd)) return null;
  const start = clockToMinutes(freeStart);
  const end = clockToMinutes(freeEnd);
  if (end - start < 120 || end - start > 18 * 60) return null;
  return { start, end };
}

function allocate(span: number, weights: number[]): number[] {
  const total = weights.reduce((sum, minutes) => sum + minutes, 0);
  const raw = weights.map((minutes) => Math.max(8, Math.round((minutes * span) / total)));
  let drift = span - raw.reduce((sum, minutes) => sum + minutes, 0);
  let guard = 0;
  while (drift !== 0 && guard < 2000) {
    const index = drift > 0 ? raw.indexOf(Math.max(...raw)) : raw.findIndex((minutes) => minutes > 8);
    if (index < 0) break;
    raw[index] += drift > 0 ? 1 : -1;
    drift += drift > 0 ? -1 : 1;
    guard += 1;
  }
  return raw;
}

function minutesToClock(total: number): string {
  const hour = Math.floor(total / 60);
  const minute = total % 60;
  return `${String(hour).padStart(2, "0")}:${String(minute).padStart(2, "0")}`;
}

function clockToMinutes(clock: string): number {
  const [hour, minute] = clock.split(":").map(Number);
  return hour * 60 + minute;
}

const samplePlan = dayPlan("15:30", "22:00");
const scheduleIds = [
  ...samplePlan.blocks.flatMap((block) => [block.id, ...block.items.map((item) => item.id)]),
  ...(samplePlan.review ? [samplePlan.review.id, ...samplePlan.review.items.map((item) => item.id)] : []),
  ...samplePlan.routine.map((row) => row.id),
];
assertUnique(scheduleIds, "cronograma");

function assertUnique(ids: string[], scope: string) {
  const seen = new Set<string>();
  for (const id of ids) {
    if (seen.has(id)) throw new Error(`Id repetido em ${scope}: ${id}`);
    seen.add(id);
  }
}
