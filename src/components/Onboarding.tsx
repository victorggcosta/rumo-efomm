import { useState } from "react";
import { Anchor } from "lucide-react";
import { blankDraft, parseDraft, validateStep, type ProfileDraft } from "../lib/profileDraft.ts";
import { useAppState } from "../state.tsx";
import { GoalFields, IdentityFields, MeasureFields, RoutineFields } from "./ProfileFields.tsx";
import { WelcomeTour } from "./WelcomeTour.tsx";

const STEPS = ["Dados pessoais", "Medidas e saúde", "Rotina e prova"];

export function Onboarding() {
  const { saveProfile } = useAppState();
  const [tourOpen, setTourOpen] = useState(true);
  const [step, setStep] = useState(0);
  const [draft, setDraft] = useState<ProfileDraft>(blankDraft);
  const [error, setError] = useState("");

  function update(next: ProfileDraft) {
    setDraft(next);
    setError("");
  }

  function finish() {
    const problem = validateStep(step, draft);
    if (problem) {
      setError(problem);
      return;
    }
    if (step < STEPS.length - 1) {
      setStep(step + 1);
      setError("");
      return;
    }
    const parsed = parseDraft(draft, { weightRequired: true });
    if (!parsed.ok) {
      setError(parsed.error);
      return;
    }
    saveProfile(parsed.value.profile, parsed.value.weightKg);
  }

  return (
    <div id="boas-vindas" className="min-h-dvh bg-paper text-ink">
      {tourOpen ? <WelcomeTour mode="inicio" onFinish={() => setTourOpen(false)} /> : null}
      <header className="bg-navy px-4 py-6 text-white">
        <div className="mx-auto flex max-w-xl items-center gap-3">
          <span className="flex size-11 items-center justify-center rounded-full border border-gold/70 text-gold">
            <Anchor className="size-5" aria-hidden="true" />
          </span>
          <div>
            <p className="font-serif text-2xl leading-none">Rumo à EFOMM</p>
            <p className="mt-1 text-sm text-white/75">Configure o seu painel</p>
          </div>
        </div>
      </header>
      <main className="mx-auto max-w-xl px-4 py-6">
        <p className="text-sm font-semibold uppercase tracking-wide text-gold-deep">
          Passo {step + 1} de {STEPS.length}
        </p>
        <h1 className="mt-1 font-serif text-3xl text-navy">{STEPS[step]}</h1>
        <div className="mt-4 flex gap-2" aria-hidden="true">
          {STEPS.map((label, index) => (
            <span key={label} className={`h-1.5 flex-1 rounded-full ${index <= step ? "bg-navy" : "bg-line"}`} />
          ))}
        </div>
        <section className="card mt-6">
          {step === 0 ? <IdentityFields draft={draft} onChange={update} /> : null}
          {step === 1 ? <MeasureFields draft={draft} onChange={update} /> : null}
          {step === 2 ? (
            <div className="space-y-6">
              <RoutineFields draft={draft} onChange={update} />
              <div>
                <h2 className="font-serif text-2xl text-navy">Metas da semana</h2>
                <p className="mt-1 text-sm text-muted">O padrão é 80 questões e 20 pomodoros. Dá para mudar agora ou depois.</p>
                <div className="mt-3">
                  <GoalFields draft={draft} onChange={update} />
                </div>
              </div>
            </div>
          ) : null}
          {error ? (
            <p role="alert" className="mt-4 text-sm text-clay">
              {error}
            </p>
          ) : null}
          <div className="mt-6 flex flex-wrap gap-2">
            {step > 0 ? (
              <button
                type="button"
                className="btn btn-quiet"
                onClick={() => {
                  setStep(step - 1);
                  setError("");
                }}
              >
                Voltar
              </button>
            ) : null}
            <button type="button" className="btn btn-primary" onClick={finish}>
              {step === STEPS.length - 1 ? "Entrar no painel" : "Continuar"}
            </button>
          </div>
        </section>
      </main>
    </div>
  );
}
