import { useEffect, useRef, useState } from "react";
import { App as CapApp } from "@capacitor/app";
import { Capacitor } from "@capacitor/core";
import { consumeAndroidBack } from "./lib/androidBack.ts";
import { refreshMural } from "./lib/mural.ts";
import { AppStateProvider } from "./state.tsx";
import { Shell } from "./components/Shell.tsx";
import { requestNotificationPermission } from "./utils/notifications.ts";

export default function App() {
  const [exitHint, setExitHint] = useState(false);
  const lastBackTimeRef = useRef(0);
  const closeOverlayRef = useRef(consumeAndroidBack);
  const hintTimerRef = useRef(0);
  closeOverlayRef.current = consumeAndroidBack;

  useEffect(() => {
    void requestNotificationPermission();
    void refreshMural().catch(() => undefined);
  }, []);

  useEffect(() => {
    if (!Capacitor.isNativePlatform()) return;
    let alive = true;
    const pending = CapApp.addListener("backButton", () => {
      if (closeOverlayRef.current()) return;
      const now = Date.now();
      if (now - lastBackTimeRef.current < 2500) {
        void CapApp.exitApp();
        return;
      }
      lastBackTimeRef.current = now;
      setExitHint(true);
      window.clearTimeout(hintTimerRef.current);
      hintTimerRef.current = window.setTimeout(() => setExitHint(false), 2500);
    });
    return () => {
      alive = false;
      window.clearTimeout(hintTimerRef.current);
      void pending.then((listener) => {
        if (!alive) void listener.remove();
      });
    };
  }, []);

  return (
    <AppStateProvider>
      <Shell />
      {exitHint ? (
        <p
          role="status"
          className="fixed inset-x-4 z-[90] rounded-2xl bg-navy px-4 py-3 text-center text-sm text-white shadow-lg"
          style={{ bottom: "calc(5.5rem + env(safe-area-inset-bottom, 0px))" }}
        >
          Pressione Voltar novamente para sair do aplicativo
        </p>
      ) : null}
    </AppStateProvider>
  );
}
