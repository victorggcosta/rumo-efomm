export function formatKg(kg: number): string {
  return new Intl.NumberFormat("pt-BR", {
    minimumFractionDigits: 1,
    maximumFractionDigits: 1,
  }).format(kg);
}

export function formatMeters(meters: number): string {
  return `${new Intl.NumberFormat("pt-BR", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(meters)} m`;
}

export function formatBmi(value: number): string {
  return new Intl.NumberFormat("pt-BR", {
    minimumFractionDigits: 1,
    maximumFractionDigits: 1,
  }).format(value);
}

export function formatKm(km: number): string {
  return new Intl.NumberFormat("pt-BR", {
    minimumFractionDigits: 0,
    maximumFractionDigits: 2,
  }).format(km);
}

export function formatClock(totalSec: number): string {
  const seconds = Math.max(0, Math.round(totalSec));
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  const rest = seconds % 60;
  if (hours > 0) {
    return `${hours}:${String(minutes).padStart(2, "0")}:${String(rest).padStart(2, "0")}`;
  }
  return `${minutes}:${String(rest).padStart(2, "0")}`;
}

export function formatPace(secPerKm: number): string {
  const total = Math.max(0, Math.round(secPerKm));
  const minutes = Math.floor(total / 60);
  const seconds = total % 60;
  return `${minutes}:${String(seconds).padStart(2, "0")}`;
}

export function formatSeconds(total: number): string {
  const abs = Math.abs(Math.round(total));
  return abs === 1 ? "1 segundo" : `${abs} segundos`;
}

export function formatDurationPhrase(totalSec: number): string {
  const abs = Math.abs(Math.round(totalSec));
  if (abs < 60) return formatSeconds(abs);
  const minutes = Math.floor(abs / 60);
  const seconds = abs % 60;
  const minuteLabel = minutes === 1 ? "1 minuto" : `${minutes} minutos`;
  if (seconds === 0) return minuteLabel;
  const secondLabel = seconds === 1 ? "1 segundo" : `${seconds} segundos`;
  return `${minuteLabel} e ${secondLabel}`;
}

export function parseDecimal(raw: string): number | null {
  const text = raw.trim().replace(/\s/g, "").replace(",", ".");
  if (!/^\d*\.?\d+$/.test(text) && !/^\d+\.$/.test(text)) return null;
  const value = Number(text);
  return Number.isFinite(value) ? value : null;
}

export function countLabel(count: number, singular: string, plural: string): string {
  return `${count} ${count === 1 ? singular : plural}`;
}
