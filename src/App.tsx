import { useEffect, useState } from "react";
import { App as CapApp } from "@capacitor/app";
import { Capacitor } from "@capacitor/core";
import { consumeAndroidBack } from "./lib/androidBack.ts";
import { refreshMural } from "./lib/mural.ts";
import { AppStateProvider } from "./state.tsx";
import { Shell } from "./components/Shell.tsx";
import { requestNotificationPermission } from "./utils/notifications.ts";

export default function App() {
  const [exitHint, setExitHint] = useState(false);

  useEffect(() => {
    void requestNotificationPermission();
    void refreshMural().catch(() => undefined);
  }, []);

  useEffect(() => {
    if (!Capacitor.isNativePlatform()) return;
    let armedAt = 0;
    let timer = 0;
    const pending = CapApp.addListener("backButton", () => {
      if (consumeAndroidBack()) return;
      const now = Date.now();
      if (armedAt !== 0 && now - armedAt < 2500) {
        void CapApp.exitApp();
        return;
      }
      armedAt = now;
      setExitHint(true);
      window.clearTimeout(timer);
      timer = window.setTimeout(() => {
        armedAt = 0;
        setExitHint(false);
      }, 2500);
    });
    return () => {
      window.clearTimeout(timer);
      void pending.then((listener) => listener.remove());
    };
  }, []);

  return (
    <AppStateProvider>
      <Shell />
      {exitHint ? (
        <p
          role="status"
          className="fixed inset-x-4 bottom-28 z-[90] rounded-2xl bg-navy px-4 py-3 text-center text-sm text-white shadow-lg"
        >
          Pressione Voltar novamente para sair do Rumo à EFOMM
        </p>
      ) : null}
    </AppStateProvider>
  );
}
