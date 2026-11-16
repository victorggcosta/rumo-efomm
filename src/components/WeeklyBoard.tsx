import { useEffect, useState } from "react";
import { Pause, Play, RotateCcw } from "lucide-react";
import { tafTargets } from "../lib/body.ts";
import { weekDates } from "../lib/dates.ts";
import { formatClock } from "../lib/format.ts";
import { useAppState } from "../state.tsx";

export function WeeklyGoals({ todayIso }: { todayIso: string }) {
  const { data, toggleSleep } = useAppState();
  const questionGoal = data.profile?.weeklyQuestionGoal ?? 80;
  const pomodoroGoal = data.profile?.weeklyPomodoroGoal ?? 20;
  const days = weekDates(todayIso);
  const questions = days.reduce((sum, day) => sum + (data.questionDays[day] ?? 0), 0);
  const pomodoros = days.reduce((sum, day) => sum + (data.pomodoroDays[day] ?? 0), 0);
  const nights = days.filter((day) => data.sleepDays[day]).length;

  return (
    <section className="card">
      <h3 className="font-serif text-2xl text-navy">Meta da semana</h3>
      <p className="mt-1 text-sm text-muted">Segunda a domingo. As questões contam a partir de agora, quando você responde ou soma no contador.</p>
      <GoalRow label="Questões" done={questions} goal={questionGoal} />
      <GoalRow label="Pomodoros" done={pomodoros} goal={pomodoroGoal} />
      <GoalRow label="Noites com cerca de 8h de sono" done={nights} goal={7} />
      <button type="button" className="btn btn-primary mt-4 w-full" aria-pressed={Boolean(data.sleepDays[todayIso])} onClick={() => toggleSleep(todayIso)}>
        {data.sleepDays[todayIso] ? "Sono de hoje marcado" : "Dormi cerca de 8h hoje"}
      </button>
    </section>
  );
}

function GoalRow({ label, done, goal }: { label: string; done: number; goal: number }) {
  const width = Math.min(100, (done / goal) * 100);
  return (
    <div className="mt-4">
      <div className="flex items-baseline justify-between gap-3 text-sm">
        <p className="font-semibold text-navy">{label}</p>
        <p className="tabular-nums text-muted">
          {done} de {goal}
        </p>
      </div>
      <div className="mt-2 h-2 overflow-hidden rounded-full bg-paper">
        <div className="h-full bg-navy" style={{ width: `${width}%` }} />
      </div>
    </div>
  );
}

export function Stopwatch({ todayIso }: { todayIso: string }) {
  const { data, addWorkout } = useAppState();
  const targets = tafTargets(data.profile?.sex ?? "feminino");
  const suggested = (targets.runMeters / 1000).toFixed(1).replace(".", ",");
  const [kind, setKind] = useState<"corrida" | "natacao">("corrida");
  const [running, setRunning] = useState(false);
  const [elapsed, setElapsed] = useState(0);
  const [startedAt, setStartedAt] = useState<number | null>(null);
  const [distance, setDistance] = useState(suggested);
  const [saved, setSaved] = useState("");

  useEffect(() => {
    if (!running || startedAt === null) return;
    const id = window.setInterval(() => setElapsed(Math.floor((Date.now() - startedAt) / 1000)), 250);
    return () => window.clearInterval(id);
  }, [running, startedAt]);

  function start() {
    setSaved("");
    setStartedAt(Date.now() - elapsed * 1000);
    setRunning(true);
  }

  function pause() {
    if (startedAt !== null) setElapsed(Math.floor((Date.now() - startedAt) / 1000));
    setRunning(false);
  }

  function reset() {
    setRunning(false);
    setElapsed(0);
    setStartedAt(null);
    setSaved("");
  }

  function save() {
    if (elapsed < 1) return;
    if (kind === "natacao") {
      if (elapsed > 30 * 60) {
        setSaved("A natação salva aqui vai até 30 minutos.");
        return;
      }
      addWorkout({ kind: "natacao", date: todayIso, durationSec: elapsed });
      setSaved("Natação salva no diário.");
    } else {
      const km = Number(distance.replace(",", "."));
      if (!Number.isFinite(km) || km < 0.1 || km > 80) {
        setSaved("Use uma distância entre 0,1 e 80 km.");
        return;
      }
      if (elapsed > 8 * 3600) {
        setSaved("A corrida salva aqui vai até 8 horas.");
        return;
      }
      addWorkout({ kind: "corrida", date: todayIso, distanceKm: km, durationSec: elapsed });
      setSaved("Corrida salva no diário.");
    }
    setRunning(false);
  }

  return (
    <section className="card">
      <h3 className="font-serif text-2xl text-navy">Cronômetro</h3>
      <div className="mt-3 grid grid-cols-2 gap-2">
        <button type="button" className={`min-h-12 rounded-full text-sm font-semibold ${kind === "corrida" ? "bg-navy text-white" : "border border-line bg-white text-navy"}`} onClick={() => setKind("corrida")}>
          Corrida
        </button>
        <button type="button" className={`min-h-12 rounded-full text-sm font-semibold ${kind === "natacao" ? "bg-navy text-white" : "border border-line bg-white text-navy"}`} onClick={() => setKind("natacao")}>
          Natação
        </button>
      </div>
      <p className="mt-4 font-serif text-6xl tabular-nums text-navy">{formatClock(elapsed)}</p>
      {kind === "corrida" ? (
        <label className="mt-4 block text-sm font-semibold text-navy">
          Distância (km)
          <input className="field mt-1" inputMode="decimal" value={distance} onChange={(event) => setDistance(event.target.value)} />
        </label>
      ) : (
        <p className="mt-3 text-sm text-muted">O alvo do TAF é 50 m em até {formatClock(targets.swimLimitSec)}.</p>
      )}
      <div className="mt-4 flex gap-2">
        {running ? (
          <button type="button" className="btn btn-primary flex-1" onClick={pause}>
            <Pause className="size-4" aria-hidden="true" />
            Pausar
          </button>
        ) : (
          <button type="button" className="btn btn-primary flex-1" onClick={start}>
            <Play className="size-4" aria-hidden="true" />
            Iniciar
          </button>
        )}
        <button type="button" className="btn btn-quiet" onClick={reset} aria-label="Zerar cronômetro">
          <RotateCcw className="size-4" />
        </button>
      </div>
      <button type="button" className="btn btn-quiet mt-2 w-full" onClick={save} disabled={elapsed < 1 || running}>
        Salvar no diário
      </button>
      {saved ? <p className="mt-2 text-sm text-navy">{saved}</p> : null}
    </section>
  );
}
