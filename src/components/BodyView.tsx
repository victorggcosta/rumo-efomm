import { useState, type FormEvent } from "react";
import { Dumbbell, Footprints, WavesHorizontal } from "lucide-react";
import { ConfirmDelete } from "./ConfirmDelete.tsx";
import { Stopwatch, WeeklyGoals } from "./WeeklyBoard.tsx";
import { WeightChart } from "./WeightChart.tsx";
import {
  bmi,
  bmiCategory,
  bmr,
  compareRun,
  compareSwim,
  latestWeight,
  requiredPace,
  sortWeights,
  tafTargets,
  type RunComparison,
  type SwimComparison,
  type TafTargets,
} from "../lib/body.ts";
import { formatLongDate, formatShortDate, isIsoDate } from "../lib/dates.ts";
import {
  formatBmi,
  formatClock,
  formatDurationPhrase,
  formatKg,
  formatKm,
  formatMeters,
  formatPace,
  formatSeconds,
  parseDecimal,
} from "../lib/format.ts";
import { useAppState } from "../state.tsx";
import type { RunWorkout, SwimWorkout, Workout } from "../types.ts";

const KINDS = [
  { id: "corrida", label: "Corrida", icon: Footprints },
  { id: "caminhada", label: "Caminhada", icon: Footprints },
  { id: "musculacao", label: "Musculação", icon: Dumbbell },
  { id: "natacao", label: "Natação", icon: WavesHorizontal },
] as const;

type Kind = (typeof KINDS)[number]["id"];

export function BodyView({ todayIso }: { todayIso: string }) {
  const { data } = useAppState();
  const targets = tafTargets(data.profile?.sex ?? "feminino");
  const pace = formatPace(requiredPace(targets));

  return (
    <div className="space-y-6">
      <header>
        <h2 className="font-serif text-3xl text-navy">TAF e saúde</h2>
        <p className="mt-2 max-w-2xl text-base leading-relaxed text-muted">
          Peso, cronômetro e a meta da semana: questões, pomodoros e sono.
        </p>
      </header>

      <section className="card" aria-label="Alvos oficiais do TAF">
        <p className="text-sm font-semibold uppercase tracking-wide text-gold-deep">Alvos do TAF</p>
        <div className="mt-4 grid gap-4 sm:grid-cols-2">
          <div>
            <p className="text-sm text-muted">Corrida</p>
            <p className="font-serif text-2xl text-navy sm:text-3xl">{formatRunMeters(targets.runMeters)} m em até 12:00</p>
            <p className="mt-1 text-sm text-muted">cerca de {pace} min/km</p>
          </div>
          <div>
            <p className="text-sm text-muted">Natação</p>
            <p className="font-serif text-2xl text-navy sm:text-3xl">50 m em até {formatClock(targets.swimLimitSec)}</p>
          </div>
        </div>
      </section>

      <WeeklyGoals todayIso={todayIso} />
      <Stopwatch todayIso={todayIso} />

      <div className="grid items-start gap-6 lg:grid-cols-2">
        <WeightPanel todayIso={todayIso} />
        <section className="card" aria-labelledby="grafico-peso">
          <h3 id="grafico-peso" className="font-serif text-2xl text-navy">
            Peso ao longo do tempo
          </h3>
          <div className="mt-4">
            <WeightChart entries={data.weights} />
          </div>
        </section>
      </div>

      <WorkoutPanel todayIso={todayIso} />
    </div>
  );
}

function WeightPanel({ todayIso }: { todayIso: string }) {
  const { data, addWeight, removeWeight } = useAppState();
  const current = latestWeight(data.weights);
  const ordered = sortWeights(data.weights);
  const newestFirst = [...ordered].reverse();
  const [date, setDate] = useState(todayIso);
  const [weight, setWeight] = useState("");
  const [error, setError] = useState("");
  const [notice, setNotice] = useState("");

  const profile = data.profile;
  const index = current ? bmi(current.kg, data.heightM) : null;
  const metabolism =
    profile && current ? bmr(profile.sex, profile.age, profile.heightCm, current.kg) : null;
  const first = ordered[0];
  const delta = current && first && ordered.length > 1 ? current.kg - first.kg : null;

  function onSubmit(event: FormEvent) {
    event.preventDefault();
    const dateProblem = pastDateError(date, todayIso);
    if (dateProblem) {
      setError(dateProblem);
      setNotice("");
      return;
    }
    const kg = parseDecimal(weight);
    if (kg === null || kg < 30 || kg > 250) {
      setError("Informe o peso em quilos, por exemplo 97,5.");
      setNotice("");
      return;
    }
    addWeight({ date, kg });
    setWeight("");
    setError("");
    setNotice("Pesagem salva.");
  }

  return (
    <section className="card" aria-labelledby="peso-titulo">
      <h3 id="peso-titulo" className="font-serif text-2xl text-navy">
        Peso e IMC
      </h3>
      {current && index !== null ? (
        <div className="mt-4 grid grid-cols-2 gap-4">
          <div>
            <p className="text-sm text-muted">Peso atual</p>
            <p className="font-serif text-4xl text-navy tabular-nums">{formatKg(current.kg)}</p>
            <p className="text-sm text-muted">kg · {formatShortDate(current.date)}</p>
          </div>
          <div>
            <p className="text-sm text-muted">IMC</p>
            <p className="font-serif text-4xl text-navy tabular-nums">{formatBmi(index)}</p>
            <p className="text-sm text-ink">{bmiCategory(index)}</p>
          </div>
        </div>
      ) : (
        <p className="mt-4 text-base text-muted">Sem pesagem salva. Adicione o peso para calcular o IMC.</p>
      )}
      <p className="mt-3 text-sm leading-relaxed text-muted">
        Altura {formatMeters(data.heightM)}.
        {profile ? ` Meta de peso: ${formatKg(profile.goalWeightKg)} kg.` : ""}
        {delta === null
          ? " A próxima pesagem mostra a tendência."
          : Math.abs(delta) < 0.05
            ? " Mesmo peso da primeira pesagem."
            : delta < 0
              ? ` ${formatKg(Math.abs(delta))} kg a menos desde ${formatShortDate(first.date)}.`
              : ` ${formatKg(delta)} kg a mais desde ${formatShortDate(first.date)}.`}
        {metabolism !== null
          ? ` Taxa metabólica basal estimada: ${metabolism.toLocaleString("pt-BR")} kcal/dia, pela equação de Mifflin–St Jeor.`
          : ""}
      </p>

      <form className="mt-5 space-y-3" onSubmit={onSubmit}>
        <div className="grid gap-3 sm:grid-cols-2">
          <label className="block text-sm font-semibold text-navy" htmlFor="peso-data">
            Data
            <input
              id="peso-data"
              className="field mt-1"
              type="date"
              value={date}
              min="2020-01-01"
              max={todayIso}
              onChange={(event) => setDate(event.target.value)}
            />
          </label>
          <label className="block text-sm font-semibold text-navy" htmlFor="peso-kg">
            Peso (kg)
            <input
              id="peso-kg"
              className="field mt-1"
              inputMode="decimal"
              autoComplete="off"
              placeholder="97,5"
              value={weight}
              onChange={(event) => setWeight(event.target.value)}
            />
          </label>
        </div>
        {error ? (
          <p role="alert" className="text-sm text-clay">
            {error}
          </p>
        ) : null}
        {notice ? (
          <p role="status" className="text-sm text-sea">
            {notice}
          </p>
        ) : null}
        <button type="submit" className="btn btn-primary w-full">
          Adicionar pesagem
        </button>
      </form>

      {newestFirst.length > 0 ? (
        <ul className="mt-5 max-h-64 space-y-2 overflow-auto">
          {newestFirst.map((entry) => (
            <li key={entry.id} className="flex items-center justify-between gap-3 rounded-xl bg-paper px-3 py-2">
              <div>
                <p className="font-semibold tabular-nums text-navy">{formatKg(entry.kg)} kg</p>
                <p className="text-sm text-muted">
                  {formatLongDate(entry.date)}
                  {entry.initial ? " · Ponto de partida" : ""}
                </p>
              </div>
              <ConfirmDelete onConfirm={() => removeWeight(entry.id)} />
            </li>
          ))}
        </ul>
      ) : null}
    </section>
  );
}

function WorkoutPanel({ todayIso }: { todayIso: string }) {
  const { data, addWorkout, removeWorkout } = useAppState();
  const targets = tafTargets(data.profile?.sex ?? "feminino");
  const [kind, setKind] = useState<Kind>("corrida");
  const [date, setDate] = useState(todayIso);
  const [distance, setDistance] = useState("");
  const [minutes, setMinutes] = useState("");
  const [seconds, setSeconds] = useState("");
  const [note, setNote] = useState("");
  const [error, setError] = useState("");
  const [notice, setNotice] = useState("");
  const workouts = [...data.workouts].sort((a, b) => {
    if (a.date !== b.date) return a.date < b.date ? 1 : -1;
    return a.createdAt < b.createdAt ? 1 : -1;
  });

  function onSubmit(event: FormEvent) {
    event.preventDefault();
    const dateProblem = pastDateError(date, todayIso);
    if (dateProblem) {
      setError(dateProblem);
      setNotice("");
      return;
    }

    if (kind === "corrida" || kind === "caminhada") {
      const km = parseDecimal(distance);
      const clock = readClock(minutes, seconds);
      if (km === null || km < 0.1 || km > 80) {
        setError(`Informe a distância em quilômetros, por exemplo ${suggestedKm(targets)}.`);
        setNotice("");
        return;
      }
      if (!clock.ok) {
        setError(clock.error);
        setNotice("");
        return;
      }
      if (clock.sec > 6 * 3600) {
        setError("Esse tempo está longo demais para uma sessão.");
        setNotice("");
        return;
      }
      addWorkout({
        kind,
        date,
        distanceKm: Math.round(km * 100) / 100,
        durationSec: clock.sec,
      });
    } else if (kind === "musculacao") {
      const duration = Number(minutes.trim());
      if (!/^\d+$/.test(minutes.trim()) || duration < 1 || duration > 240) {
        setError("Informe a duração em minutos, de 1 a 240.");
        setNotice("");
        return;
      }
      if (note.trim().length === 0) {
        setError("Escreva uma nota curta da sessão.");
        setNotice("");
        return;
      }
      addWorkout({ kind, date, durationMin: duration, note: note.trim().slice(0, 400) });
    } else {
      const clock = readClock(minutes, seconds);
      if (!clock.ok) {
        setError(clock.error === "Informe o tempo." ? "Informe o tempo dos 50 m." : clock.error);
        setNotice("");
        return;
      }
      if (clock.sec > 30 * 60) {
        setError("Para a natação, registre o tempo dos 50 m.");
        setNotice("");
        return;
      }
      addWorkout({ kind: "natacao", date, durationSec: clock.sec });
    }

    setDistance("");
    setMinutes("");
    setSeconds("");
    setNote("");
    setError("");
    setNotice("Treino salvo.");
  }

  return (
    <section className="space-y-4" aria-labelledby="treinos-titulo">
      <h3 id="treinos-titulo" className="font-serif text-2xl text-navy">
        Treinos
      </h3>
      <form className="card space-y-4" onSubmit={onSubmit}>
        <div className="grid grid-cols-2 gap-2 sm:grid-cols-4" role="group" aria-label="Tipo de treino">
          {KINDS.map((item) => {
            const Icon = item.icon;
            const selected = kind === item.id;
            return (
              <button
                key={item.id}
                type="button"
                aria-pressed={selected}
                className={`flex min-h-12 items-center justify-center gap-2 rounded-xl px-2 text-sm font-semibold sm:text-base ${
                  selected ? "bg-navy text-white" : "bg-paper text-navy"
                }`}
                onClick={() => {
                  setKind(item.id);
                  setError("");
                }}
              >
                <Icon className="size-4 shrink-0" aria-hidden="true" />
                {item.label}
              </button>
            );
          })}
        </div>

        <label className="block text-sm font-semibold text-navy" htmlFor="treino-data">
          Data
          <input
            id="treino-data"
            className="field mt-1"
            type="date"
            value={date}
            min="2020-01-01"
            max={todayIso}
            onChange={(event) => setDate(event.target.value)}
          />
        </label>

        {kind === "corrida" || kind === "caminhada" ? (
          <div className="grid gap-3 sm:grid-cols-3">
            <Field
              id="treino-km"
              label="Distância (km)"
              value={distance}
              onChange={setDistance}
              placeholder={suggestedKm(targets)}
              decimal
            />
            <Field id="treino-min" label="Minutos" value={minutes} onChange={setMinutes} placeholder="12" />
            <Field id="treino-seg" label="Segundos" value={seconds} onChange={setSeconds} placeholder="0" />
          </div>
        ) : null}

        {kind === "musculacao" ? (
          <div className="space-y-3">
            <Field id="treino-duracao" label="Duração (minutos)" value={minutes} onChange={setMinutes} placeholder="45" />
            <label className="block text-sm font-semibold text-navy" htmlFor="treino-nota">
              Nota da sessão
              <textarea
                id="treino-nota"
                className="field mt-1 min-h-24"
                value={note}
                maxLength={400}
                placeholder="Ex.: agachamento, remada e prancha"
                onChange={(event) => setNote(event.target.value)}
              />
            </label>
          </div>
        ) : null}

        {kind === "natacao" ? (
          <div className="space-y-3">
            <p className="text-sm text-muted">
              Tempo dos 50 metros. O limite do TAF é {formatClock(targets.swimLimitSec)}.
            </p>
            <div className="grid gap-3 sm:grid-cols-2">
              <Field id="nata-min" label="Minutos" value={minutes} onChange={setMinutes} placeholder="1" />
              <Field id="nata-seg" label="Segundos" value={seconds} onChange={setSeconds} placeholder="45" />
            </div>
          </div>
        ) : null}

        {kind === "corrida" || kind === "caminhada" ? (
          <p className="text-sm text-muted">
            O TAF pede {formatRunMeters(targets.runMeters)} m em até 12:00, cerca de {formatPace(requiredPace(targets))} min/km.
          </p>
        ) : null}

        {error ? (
          <p role="alert" className="text-sm text-clay">
            {error}
          </p>
        ) : null}
        {notice ? (
          <p role="status" className="text-sm text-sea">
            {notice}
          </p>
        ) : null}
        <button type="submit" className="btn btn-primary w-full">
          Registrar treino
        </button>
      </form>

      {workouts.length === 0 ? (
        <div className="rounded-2xl border border-dashed border-line bg-white px-5 py-10 text-center">
          <WavesHorizontal className="mx-auto size-8 text-gold-deep" aria-hidden="true" />
          <p className="mt-3 font-serif text-2xl text-navy">Nenhum treino ainda</p>
          <p className="mx-auto mt-2 max-w-md text-base leading-relaxed text-muted">
            Quando você caminhar, correr, malhar ou nadar, o registro aparece aqui.
          </p>
        </div>
      ) : (
        <ul className="space-y-3">
          {workouts.map((workout) => (
            <li key={workout.id}>
              <WorkoutCard workout={workout} onDelete={() => removeWorkout(workout.id)} />
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}

function WorkoutCard({ workout, onDelete }: { workout: Workout; onDelete: () => void }) {
  const kindLabel = KINDS.find((item) => item.id === workout.kind)?.label ?? workout.kind;
  return (
    <article className="card">
      <div className="flex items-start justify-between gap-3">
        <div>
          <p className="text-sm font-semibold uppercase tracking-wide text-gold-deep">{kindLabel}</p>
          <p className="text-sm text-muted">{formatLongDate(workout.date)}</p>
        </div>
        <ConfirmDelete onConfirm={onDelete} />
      </div>
      {workout.kind === "corrida" || workout.kind === "caminhada" ? <RunDetails workout={workout} /> : null}
      {workout.kind === "natacao" ? <SwimDetails workout={workout} /> : null}
      {workout.kind === "musculacao" ? (
        <div className="mt-3">
          <p className="font-serif text-3xl text-navy">{workout.durationMin} min</p>
          <p className="mt-2 whitespace-pre-wrap text-base leading-relaxed">{workout.note}</p>
        </div>
      ) : null}
    </article>
  );
}

function RunDetails({ workout }: { workout: RunWorkout }) {
  const targets = useTaf();
  const cmp = compareRun(workout.distanceKm, workout.durationSec, targets);
  const copy = runCopy(workout.kind, cmp, targets.runMeters);
  return (
    <div className="mt-3">
      <p className="text-base text-ink">
        {formatKm(workout.distanceKm)} km em {formatClock(workout.durationSec)}
      </p>
      <p className="mt-1 font-serif text-4xl text-navy tabular-nums">
        {cmp.paceLabel}
        <span className="ml-2 font-sans text-lg font-semibold text-muted">min/km</span>
      </p>
      <div className={`mt-3 rounded-xl px-3 py-3 ${tone(cmp.gapSec)}`}>
        <p className="font-semibold">{copy.title}</p>
        <p className="mt-1 text-sm leading-relaxed">{copy.detail}</p>
        <p className="mt-1 text-sm leading-relaxed">{copy.pace}</p>
      </div>
    </div>
  );
}

function SwimDetails({ workout }: { workout: SwimWorkout }) {
  const cmp = compareSwim(workout.durationSec, useTaf());
  const copy = swimCopy(cmp);
  return (
    <div className="mt-3">
      <p className="font-serif text-4xl text-navy tabular-nums">{cmp.timeLabel}</p>
      <p className="text-sm text-muted">nos 50 m · limite {cmp.limitLabel}</p>
      <div className={`mt-3 rounded-xl px-3 py-3 ${tone(cmp.gapSec)}`}>
        <p className="font-semibold">{copy.title}</p>
        <p className="mt-1 text-sm leading-relaxed">{copy.detail}</p>
      </div>
    </div>
  );
}

function Field({
  id,
  label,
  value,
  onChange,
  placeholder,
  decimal = false,
}: {
  id: string;
  label: string;
  value: string;
  onChange: (value: string) => void;
  placeholder: string;
  decimal?: boolean;
}) {
  return (
    <label className="block text-sm font-semibold text-navy" htmlFor={id}>
      {label}
      <input
        id={id}
        className="field mt-1"
        inputMode={decimal ? "decimal" : "numeric"}
        autoComplete="off"
        placeholder={placeholder}
        value={value}
        onChange={(event) => onChange(event.target.value)}
      />
    </label>
  );
}

function tone(gapSec: number): string {
  if (gapSec < 0) return "bg-sea-soft text-sea";
  if (gapSec > 0) return "bg-clay-soft text-clay";
  return "bg-paper text-navy";
}

function runCopy(kind: "corrida" | "caminhada", cmp: RunComparison, meters: number) {
  const distance = formatRunMeters(meters);
  const projection =
    kind === "caminhada"
      ? `Se a corrida saísse neste ritmo, ${distance} m levariam ${cmp.projectedLabel}.`
      : `Nesse ritmo, ${distance} m levariam ${cmp.projectedLabel}.`;
  let title = "No limite";
  let gap = "Empata com o limite de 12:00.";
  if (cmp.gapSec < 0) {
    title = "Dentro do limite";
    gap = `Folga de ${formatDurationPhrase(cmp.gapSec)}.`;
  } else if (cmp.gapSec > 0) {
    title = "Ainda não chega";
    gap = `${formatDurationPhrase(cmp.gapSec)} acima de 12:00.`;
  }
  const pace =
    cmp.paceGapSec === 0
      ? `Ritmo ${cmp.paceLabel} min/km, igual à referência do TAF (${cmp.requiredPaceLabel} min/km).`
      : cmp.paceGapSec > 0
        ? `Ritmo ${cmp.paceLabel} min/km, ${formatSeconds(cmp.paceGapSec)} por km mais lento que os ${cmp.requiredPaceLabel} min/km.`
        : `Ritmo ${cmp.paceLabel} min/km, ${formatSeconds(cmp.paceGapSec)} por km mais rápido que os ${cmp.requiredPaceLabel} min/km.`;
  return { title, detail: `${projection} ${gap}`, pace };
}

function swimCopy(cmp: SwimComparison) {
  if (cmp.gapSec < 0) {
    return {
      title: "Dentro do limite",
      detail: `Folga de ${formatSeconds(cmp.gapSec)} em relação a ${cmp.limitLabel}.`,
    };
  }
  if (cmp.gapSec > 0) {
    return {
      title: "Ainda não",
      detail: `${formatSeconds(cmp.gapSec)} acima de ${cmp.limitLabel}.`,
    };
  }
  return { title: "No limite", detail: `${cmp.limitLabel} cravados.` };
}

function useTaf(): TafTargets {
  const { data } = useAppState();
  return tafTargets(data.profile?.sex ?? "feminino");
}

function suggestedKm(targets: TafTargets): string {
  return (targets.runMeters / 1000).toFixed(1).replace(".", ",");
}

function formatRunMeters(meters: number): string {
  return new Intl.NumberFormat("pt-BR").format(meters);
}

function pastDateError(date: string, todayIso: string): string | null {
  if (!isIsoDate(date)) return "Escolha uma data.";
  if (date > todayIso) return "Use hoje ou um dia que já passou.";
  if (date < "2020-01-01") return "Escolha uma data mais recente.";
  return null;
}

function readClock(minutesRaw: string, secondsRaw: string): { ok: true; sec: number } | { ok: false; error: string } {
  const minutes = minutesRaw.trim();
  const seconds = secondsRaw.trim();
  if (minutes === "" && seconds === "") return { ok: false, error: "Informe o tempo." };
  if ((minutes !== "" && !/^\d+$/.test(minutes)) || (seconds !== "" && !/^\d+$/.test(seconds))) {
    return { ok: false, error: "Use números inteiros no tempo." };
  }
  const min = minutes === "" ? 0 : Number(minutes);
  const sec = seconds === "" ? 0 : Number(seconds);
  if (sec > 59) return { ok: false, error: "Segundos vão de 0 a 59." };
  const total = min * 60 + sec;
  if (total <= 0) return { ok: false, error: "Informe um tempo maior que zero." };
  return { ok: true, sec: total };
}
