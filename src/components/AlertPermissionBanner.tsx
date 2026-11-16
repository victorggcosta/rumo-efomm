import { useEffect, useState } from "react";
import { notificationPermission, requestNotificationPermission, type NotificationPermission } from "../utils/notifications.ts";

export function AlertPermissionBanner() {
  const [status, setStatus] = useState<NotificationPermission | "hidden">("hidden");

  useEffect(() => {
    void notificationPermission().then(setStatus);
  }, []);

  if (status !== "prompt" && status !== "denied") return null;

  return (
    <div className="rounded-2xl border border-gold bg-white p-4" role="status">
      <p className="text-sm leading-relaxed text-ink">
        Os alertas de estudo, treino, revisão e editais ainda não estão autorizados neste Android.
      </p>
      <button
        type="button"
        className="btn btn-primary mt-3 w-full"
        onClick={() => {
          void requestNotificationPermission().then(setStatus);
        }}
      >
        Permitir notificações
      </button>
    </div>
  );
}
