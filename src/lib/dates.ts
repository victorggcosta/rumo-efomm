export type SPNow = {
  iso: string;
  hour: number;
  minute: number;
  minutesOfDay: number;
};

/** Data e hora locais do aparelho. O argumento padrão é `new Date()`. */
export function deviceNow(date = new Date()): SPNow {
  const hour = date.getHours();
  const minute = date.getMinutes();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return {
    iso: `${date.getFullYear()}-${month}-${day}`,
    hour,
    minute,
    minutesOfDay: hour * 60 + minute,
  };
}

export function saoPauloNow(date = new Date()): SPNow {
  return deviceNow(date);
}

/** Segunda a domingo da semana que contém a data, em calendário (sem fuso). */
export function weekDates(iso: string): string[] {
  const [year, month, day] = iso.split("-").map(Number);
  const date = new Date(Date.UTC(year, month - 1, day));
  const weekday = date.getUTCDay();
  const mondayOffset = weekday === 0 ? -6 : 1 - weekday;
  const monday = new Date(date);
  monday.setUTCDate(date.getUTCDate() + mondayOffset);
  return Array.from({ length: 7 }, (_, index) => {
    const item = new Date(monday);
    item.setUTCDate(monday.getUTCDate() + index);
    const y = item.getUTCFullYear();
    const m = String(item.getUTCMonth() + 1).padStart(2, "0");
    const d = String(item.getUTCDate()).padStart(2, "0");
    return `${y}-${m}-${d}`;
  });
}

export function isIsoDate(value: string): boolean {
  if (!/^\d{4}-\d{2}-\d{2}$/.test(value)) return false;
  const [year, month, day] = value.split("-").map(Number);
  const date = new Date(Date.UTC(year, month - 1, day));
  return (
    date.getUTCFullYear() === year &&
    date.getUTCMonth() === month - 1 &&
    date.getUTCDate() === day
  );
}

export function addIsoDays(iso: string, days: number): string {
  const [year, month, day] = iso.split("-").map(Number);
  const date = new Date(Date.UTC(year, month - 1, day));
  date.setUTCDate(date.getUTCDate() + days);
  const y = date.getUTCFullYear();
  const m = String(date.getUTCMonth() + 1).padStart(2, "0");
  const d = String(date.getUTCDate()).padStart(2, "0");
  return `${y}-${m}-${d}`;
}

export function calendarDaysBetween(fromIso: string, toIso: string): number {
  const [fy, fm, fd] = fromIso.split("-").map(Number);
  const [ty, tm, td] = toIso.split("-").map(Number);
  const from = Date.UTC(fy, fm - 1, fd);
  const to = Date.UTC(ty, tm - 1, td);
  return Math.round((to - from) / 86_400_000);
}

export function formatLongDate(iso: string, withWeekday = false): string {
  const [year, month, day] = iso.split("-").map(Number);
  const date = new Date(Date.UTC(year, month - 1, day));
  const options: Intl.DateTimeFormatOptions = {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  };
  if (withWeekday) options.weekday = "long";
  return new Intl.DateTimeFormat("pt-BR", options).format(date);
}

export function formatShortDate(iso: string): string {
  const [year, month, day] = iso.split("-").map(Number);
  const date = new Date(Date.UTC(year, month - 1, day));
  const monthName = new Intl.DateTimeFormat("pt-BR", {
    month: "short",
    timeZone: "UTC",
  })
    .format(date)
    .replace(".", "");
  return `${day} ${monthName}`;
}

export function greetingForHour(hour: number): string {
  if (hour < 12) return "Bom dia";
  if (hour < 18) return "Boa tarde";
  return "Boa noite";
}

export function countdownParts(days: number): { big: string; unit: string } {
  if (days > 1) return { big: String(days), unit: "dias" };
  if (days === 1) return { big: "1", unit: "dia" };
  if (days === 0) return { big: "Hoje", unit: "é o dia" };
  if (days === -1) return { big: "1", unit: "dia atrás" };
  return { big: String(Math.abs(days)), unit: "dias atrás" };
}

export function freeWindowMessage(
  minutes: number,
  start: number,
  end: number,
  startLabel: string,
  endLabel: string,
): string {
  if (minutes < start) {
    return `A janela livre começa às ${startLabel}. Dá para deixar o dia pronto antes.`;
  }
  if (minutes < end) {
    return `Janela livre aberta, até as ${endLabel}. Um bloco de cada vez.`;
  }
  return "A janela de hoje fechou. Descansar também faz parte do plano.";
}
