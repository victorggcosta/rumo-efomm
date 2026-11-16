import { useEffect, useState } from "react";
import { deviceNow, type SPNow } from "./dates.ts";

/** Relê `new Date()` ao abrir o app, ao voltar para a tela e na virada do dia. */
export function useDeviceClock(): SPNow {
  const [now, setNow] = useState(() => deviceNow(new Date()));

  useEffect(() => {
    const tick = () => setNow(deviceNow(new Date()));
    const interval = window.setInterval(tick, 30_000);
    let midnight = 0;
    const armMidnight = () => {
      window.clearTimeout(midnight);
      const next = new Date();
      next.setHours(24, 0, 0, 0);
      midnight = window.setTimeout(
        () => {
          tick();
          armMidnight();
        },
        Math.max(1_000, next.getTime() - Date.now()),
      );
    };
    armMidnight();
    const onWake = () => tick();
    document.addEventListener("visibilitychange", onWake);
    window.addEventListener("focus", onWake);
    window.addEventListener("pageshow", onWake);
    return () => {
      window.clearInterval(interval);
      window.clearTimeout(midnight);
      document.removeEventListener("visibilitychange", onWake);
      window.removeEventListener("focus", onWake);
      window.removeEventListener("pageshow", onWake);
    };
  }, []);

  return now;
}
