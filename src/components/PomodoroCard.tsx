import { useEffect, useState } from "react";
import { Pause, Play, RotateCcw } from "lucide-react";
import { deviceNow } from "../lib/dates.ts";
import { useDeviceClock } from "../lib/useDeviceClock.ts";
import { POMODORO_PHASES, durationFor, focusSeconds } from "../lib/pomodoro.ts";
import { formatClock } from "../lib/format.ts";
import { useAppState } from "../state.tsx";
import type { PomodoroMode, PomodoroState } from "../types.ts";

export function PomodoroCard() {
  const { data, setPomodoro, settlePomodoro } = useAppState();
  const [nowMs, setNowMs] = useState(() => Date.now());
  const timer = data.pomodoro;
  const remaining = timer.running && timer.endsAt ? Math.max(0, Math.ceil((timer.endsAt - nowMs) / 1000)) : timer.remainingSec;
  const phase = POMODORO_PHASES.find((item) => item.phase === timer.phase) ?? POMODORO_PHASES[0];
  const total = durationFor(timer.mode, timer.run);
  const todayIso = useDeviceClock().iso;
  const doneToday = data.pomodoroDays[todayIso] ?? 0;

  useEffect(() => {
    if (!timer.running) return;
    const id = window.setInterval(() => setNowMs(Date.now()), 250);
    return () => window.clearInterval(id);
  }, [timer.running]);

  useEffect(() => {
    if (!timer.running || !timer.endsAt || timer.endsAt > Date.now()) return;
    settlePomodoro(deviceNow(new Date()).iso);
  }, [nowMs, timer.running, timer.endsAt, settlePomodoro]);

  function commit(next: PomodoroState) {
    setPomodoro(next);
  }

  function start() {
    commit({ ...timer, running: true, endsAt: Date.now() + remaining * 1000 });
  }

  function pause() {
    commit({ ...timer, running: false, endsAt: null, remainingSec: remaining });
  }

  function chooseMode(mode: PomodoroMode) {
    if (timer.running) return;
    commit({
      mode,
      phase: 1,
      run: "focus",
      running: false,
      endsAt: null,
      remainingSec: focusSeconds(mode),
    });
  }

  function reset() {
    commit({
      ...timer,
      running: false,
      endsAt: null,
      remainingSec: durationFor(timer.mode, timer.run),
    });
  }

  const runLabel = timer.run === "break" ? "Pausa" : timer.run === "review" ? "Revisão de 30 min" : `Pomodoro ${timer.phase}`;

  return (
    <section className="card" aria-labelledby="pomodoro-titulo">
      <p className="text-sm font-semibold uppercase tracking-wide text-gold-deep">Timer</p>
      <h3 id="pomodoro-titulo" className="mt-1 font-serif text-2xl text-navy">
        {phase.title}
      </h3>
      <p className="mt-1 text-base text-muted">{phase.detail}</p>
      <p className="mt-3 text-sm font-semibold text-navy">{runLabel}</p>
      <p className="mt-2 font-serif text-6xl tabular-nums text-navy">{formatClock(remaining)}</p>
      <div className="mt-3 h-2 overflow-hidden rounded-full bg-paper" aria-hidden="true">
        <div className="h-full bg-gold" style={{ width: `${total === 0 ? 0 : ((total - remaining) / total) * 100}%` }} />
      </div>
      <div className="mt-4 grid grid-cols-2 gap-2">
        <button type="button" className={`min-h-12 rounded-full px-3 text-sm font-semibold ${timer.mode === "25" ? "bg-navy text-white" : "border border-line bg-white text-navy"}`} onClick={() => chooseMode("25")} disabled={timer.running}>
          25 / 5 min
        </button>
        <button type="button" className={`min-h-12 rounded-full px-3 text-sm font-semibold ${timer.mode === "50" ? "bg-navy text-white" : "border border-line bg-white text-navy"}`} onClick={() => chooseMode("50")} disabled={timer.running}>
          50 / 10 min
        </button>
      </div>
      <p className="mt-2 text-sm text-muted">25/5 para adaptar. 50/10 no ritmo normal. Depois do quarto pomodoro, a revisão dura 30 minutos.</p>
      <div className="mt-4 flex gap-2">
        {timer.running ? (
          <button type="button" className="btn btn-primary flex-1" onClick={pause}>
            <Pause className="size-4" aria-hidden="true" />
            Pausar
          </button>
        ) : (
          <button type="button" className="btn btn-primary flex-1" onClick={start} disabled={remaining === 0}>
            <Play className="size-4" aria-hidden="true" />
            {timer.run === "break" ? "Iniciar pausa" : "Iniciar"}
          </button>
        )}
        <button type="button" className="btn btn-quiet" onClick={reset} aria-label="Reiniciar este tempo">
          <RotateCcw className="size-4" aria-hidden="true" />
        </button>
      </div>
      <p className="mt-3 text-sm text-navy">Hoje: {doneToday} {doneToday === 1 ? "pomodoro concluído" : "pomodoros concluídos"}.</p>
    </section>
  );
}
