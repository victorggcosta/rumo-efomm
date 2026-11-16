import { Capacitor } from "@capacitor/core";
import { LocalNotifications } from "@capacitor/local-notifications";
import type { LocalNotificationSchema } from "@capacitor/local-notifications";
import { dayPlan } from "../data/schedule.ts";
import { addIsoDays, calendarDaysBetween, deviceNow } from "../lib/dates.ts";
import type { AppData, ReviewItem } from "../types.ts";

const CHANNEL = "rumo-efomm";
const REVIEW_HOUR = 18;
const REVIEW_MINUTE = 25;
const SLEEP_HOUR = 21;
const SLEEP_MINUTE = 45;
const WEEKLY_HOUR = 9;
const HORIZON_DAYS = 21;
const WEEKLY_COUNT = 8;

export type ReminderPlan = {
  review: string;
  workout: string;
  study: string;
  sleep: string;
  weekly: string;
};

export function reminderPlan(freeStart: string, freeEnd: string): ReminderPlan {
  const plan = dayPlan(freeStart, freeEnd);
  const startOf = (id: string) => plan.blocks.find((block) => block.id === id)?.time.split("–")[0] ?? "";
  return {
    review: clockLabel(REVIEW_HOUR, REVIEW_MINUTE),
    workout: startOf("treino"),
    study: startOf("exatas"),
    sleep: clockLabel(SLEEP_HOUR, SLEEP_MINUTE),
    weekly: "domingo às 9h",
  };
}

export async function activateDailyReminders(): Promise<{ ok: boolean; message: string }> {
  if (!Capacitor.isNativePlatform()) {
    return {
      ok: true,
      message:
        "A preferência ficou salva neste aparelho. No Android, toque de novo para o sistema pedir a permissão de notificações.",
    };
  }
  try {
    const perm = await LocalNotifications.requestPermissions();
    if (perm.display !== "granted") {
      return {
        ok: false,
        message: "O Android não autorizou as notificações. Você pode permitir nas configurações do sistema.",
      };
    }
    await ensureChannel();
    return { ok: true, message: "Lembretes diários ativados neste aparelho." };
  } catch {
    return { ok: false, message: "Não consegui pedir a permissão de notificações neste aparelho." };
  }
}

export async function syncReminders(data: AppData): Promise<void> {
  if (!data.remindersEnabled || !data.profile || !Capacitor.isNativePlatform()) return;
  try {
    const perm = await LocalNotifications.checkPermissions();
    if (perm.display !== "granted") return;
    await ensureChannel();
    await LocalNotifications.cancelAll();
    const notifications = buildNotifications(data);
    if (notifications.length > 0) {
      await LocalNotifications.schedule({ notifications });
    }
  } catch {
    /* o plugin nativo não está disponível neste modo */
  }
}

export type NotificationPermission = "granted" | "denied" | "prompt";

export async function notificationPermission(): Promise<NotificationPermission | "hidden"> {
  if (!Capacitor.isNativePlatform() || Capacitor.getPlatform() !== "android") return "hidden";
  try {
    const perm = await LocalNotifications.checkPermissions();
    if (perm.display === "granted") return "granted";
    if (perm.display === "denied") return "denied";
    return "prompt";
  } catch {
    return "hidden";
  }
}

export async function requestNotificationPermission(): Promise<NotificationPermission | "hidden"> {
  const current = await notificationPermission();
  if (current !== "prompt" && current !== "denied") return current;
  try {
    const perm = await LocalNotifications.requestPermissions();
    if (perm.display === "granted") {
      await ensureExactAlarms();
      return "granted";
    }
    return perm.display === "denied" ? "denied" : "prompt";
  } catch {
    return "denied";
  }
}

export async function announceOfficialAvisos(avisos: { id: string; titulo: string }[]): Promise<boolean> {
  if (!Capacitor.isNativePlatform() || avisos.length === 0) return true;
  const perm = await notificationPermission();
  if (perm !== "granted") return false;
  try {
    await ensureChannel();
    const now = Date.now();
    await LocalNotifications.schedule({
      notifications: avisos.slice(0, 5).map((item, index) => ({
        id: 7000 + (hashId(item.id) % 2000),
        title: "⚓ Nova Atualização Oficial EFOMM!",
        body: item.titulo,
        channelId: CHANNEL,
        schedule: { at: new Date(now + 1000 + index * 1000), allowWhileIdle: true },
      })),
    });
    return true;
  } catch {
    return false;
  }
}

export async function sendTestNotification(): Promise<{ ok: boolean; message: string }> {
  if (!Capacitor.isNativePlatform()) {
    return { ok: false, message: "O teste de notificação vale no aplicativo Android." };
  }
  const perm = await requestNotificationPermission();
  if (perm !== "granted") {
    return { ok: false, message: "O Android ainda não autorizou as notificações." };
  }
  try {
    await ensureChannel();
    await LocalNotifications.schedule({
      notifications: [
        {
          id: 9001,
          title: "⚓ Nova Atualização Oficial EFOMM!",
          body: "Alerta de teste do Rumo à EFOMM.",
          channelId: CHANNEL,
          schedule: { at: new Date(Date.now() + 1000), allowWhileIdle: true },
        },
      ],
    });
    return { ok: true, message: "O alerta de teste chega em cerca de um segundo." };
  } catch {
    return { ok: false, message: "Não consegui enviar o alerta de teste neste aparelho." };
  }
}

async function ensureExactAlarms(): Promise<void> {
  if (Capacitor.getPlatform() !== "android") return;
  try {
    const exact = await LocalNotifications.checkExactNotificationSetting();
    if (exact.exact_alarm !== "granted") await LocalNotifications.changeExactNotificationSetting();
  } catch {
    /* alarmes exatos só existem no Android 12 ou mais novo */
  }
}

function hashId(value: string): number {
  let hash = 0;
  for (const char of value) hash = (hash * 33 + char.charCodeAt(0)) >>> 0;
  return hash;
}

export async function clearReminders(): Promise<void> {
  if (!Capacitor.isNativePlatform()) return;
  try {
    await LocalNotifications.cancelAll();
  } catch {
    /* nada pendente para cancelar */
  }
}

function buildNotifications(data: AppData): LocalNotificationSchema[] {
  const profile = data.profile;
  if (!profile) return [];
  const plan = reminderPlan(profile.freeStart, profile.freeEnd);
  const now = Date.now();
  const notifications: LocalNotificationSchema[] = [
    daily("treino", 1, "Hora do treino", "O treino físico da sua rotina começa agora.", plan.workout, now),
    daily("estudo", 2, "Hora do estudo", "O bloco de exatas da sua janela livre começa agora.", plan.study, now),
    daily(
      "sono",
      3,
      "Higiene do sono",
      "Vale desligar as telas e preparar o descanso.",
      plan.sleep,
      now,
    ),
    ...reviewAlerts(data.reviews, now),
    ...weeklyCountdowns(data.targets.escrita, data.targets.taf, now),
  ];
  return notifications.filter((item) => item.id > 0);
}

function daily(
  extra: string,
  id: number,
  title: string,
  body: string,
  clock: string,
  now: number,
): LocalNotificationSchema {
  const [hour, minute] = clock.split(":").map(Number);
  if (!Number.isInteger(hour) || !Number.isInteger(minute)) {
    return { id: 0, title, body };
  }
  const at = new Date();
  at.setHours(hour, minute, 0, 0);
  if (at.getTime() <= now) at.setDate(at.getDate() + 1);
  return {
    id,
    title,
    body,
    channelId: CHANNEL,
    extra: { kind: extra },
    isExactNotification: true,
    isExactMandatory: false,
    schedule: { at, repeats: true, allowWhileIdle: true },
  };
}

function reviewAlerts(reviews: ReviewItem[], now: number): LocalNotificationSchema[] {
  const today = deviceNow(new Date(now)).iso;
  const alerts: LocalNotificationSchema[] = [];
  for (let offset = 0; offset < HORIZON_DAYS; offset += 1) {
    const iso = addIsoDays(today, offset);
    const due = reviews.filter((item) => item.doneOn === null && item.due <= iso);
    if (due.length === 0) continue;
    const at = atLocal(iso, REVIEW_HOUR, REVIEW_MINUTE);
    if (at.getTime() <= now) continue;
    const topics = due.filter((item) => item.kind === "topico").length;
    const errors = due.length - topics;
    alerts.push({
      id: 1800 + offset,
      title: "Revisão espaçada",
      body: reviewBody(topics, errors),
      channelId: CHANNEL,
      extra: { kind: "revisao", iso },
      isExactNotification: true,
      isExactMandatory: false,
      schedule: { at, allowWhileIdle: true },
    });
  }
  return alerts;
}

function weeklyCountdowns(escrita: string, taf: string, now: number): LocalNotificationSchema[] {
  return upcomingSundays(now).map((date, index) => {
    const iso = deviceNow(date).iso;
    return {
      id: 400 + index,
      title: "Rumo à EFOMM",
      body: `${examClause("A prova escrita", calendarDaysBetween(iso, escrita))} ${examClause("O TAF", calendarDaysBetween(iso, taf))}`,
      channelId: CHANNEL,
      extra: { kind: "contagem", iso },
      isExactNotification: true,
      isExactMandatory: false,
      schedule: { at: date, allowWhileIdle: true },
    };
  });
}

function reviewBody(topics: number, errors: number): string {
  const parts: string[] = [];
  if (topics > 0) parts.push(topics === 1 ? "1 tópico" : `${topics} tópicos`);
  if (errors > 0) parts.push(errors === 1 ? "1 questão do caderno de erros" : `${errors} questões do caderno de erros`);
  return `Vence hoje: ${parts.join(" e ")}.`;
}

function examClause(label: string, days: number): string {
  if (days > 1) return `${label}: faltam ${days} dias.`;
  if (days === 1) return `${label}: falta 1 dia.`;
  if (days === 0) return `${label} é hoje.`;
  if (days === -1) return `${label} foi ontem.`;
  return `${label} foi há ${Math.abs(days)} dias.`;
}

function upcomingSundays(now: number): Date[] {
  const first = new Date(now);
  first.setHours(WEEKLY_HOUR, 0, 0, 0);
  const weekday = first.getDay();
  let delta = (7 - weekday) % 7;
  if (delta === 0 && first.getTime() <= now) delta = 7;
  first.setDate(first.getDate() + delta);
  return Array.from({ length: WEEKLY_COUNT }, (_, index) => {
    const date = new Date(first);
    date.setDate(first.getDate() + index * 7);
    return date;
  });
}

function atLocal(iso: string, hour: number, minute: number): Date {
  const [year, month, day] = iso.split("-").map(Number);
  return new Date(year, month - 1, day, hour, minute, 0, 0);
}

function clockLabel(hour: number, minute: number): string {
  return `${String(hour).padStart(2, "0")}:${String(minute).padStart(2, "0")}`;
}

async function ensureChannel(): Promise<void> {
  await LocalNotifications.createChannel({
    id: CHANNEL,
    name: "Lembretes",
    description: "Revisão, treino, estudo, sono e contagem da prova.",
    importance: 4,
    visibility: 1,
  });
}
