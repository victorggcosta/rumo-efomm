import { useState } from "react";
import { bmi, bmiCategory, bmr, tafTargets } from "../lib/body.ts";
import { dayPlan } from "../data/schedule.ts";
import { parseDecimal } from "../lib/format.ts";
import { compressPhoto } from "../lib/photo.ts";
import type { ProfileDraft } from "../lib/profileDraft.ts";
import type { Sex } from "../types.ts";
import { UserMark, avatarChoices } from "./UserMark.tsx";

export function IdentityFields({
  draft,
  onChange,
}: {
  draft: ProfileDraft;
  onChange: (draft: ProfileDraft) => void;
}) {
  const [photoError, setPhotoError] = useState("");
  const targets = draft.sex ? tafTargets(draft.sex) : null;

  async function onPhoto(file: File | undefined) {
    if (!file) return;
    try {
      const photo = await compressPhoto(file);
      if (!photo || photo.length > 140_000) {
        setPhotoError("Não consegui reduzir essa imagem. Escolha outra ou use um avatar.");
        return;
      }
      setPhotoError("");
      onChange({ ...draft, photo });
    } catch {
      setPhotoError("Use uma imagem do aparelho, em JPG, PNG ou WebP.");
    }
  }

  return (
    <div className="space-y-4">
      <div className="flex flex-col items-center gap-3 sm:flex-row sm:items-start">
        <UserMark profile={{ photo: draft.photo, avatar: draft.avatar }} className="size-24" />
        <div className="w-full">
          <p className="text-sm font-semibold text-navy">Foto ou avatar</p>
          <p className="mt-1 text-sm leading-relaxed text-muted">
            A foto é reduzida antes de ficar salva neste aparelho.
          </p>
          <div className="mt-3 flex flex-wrap gap-2">
            <label className="btn btn-quiet cursor-pointer">
              Enviar foto
              <input
                className="sr-only"
                type="file"
                accept="image/*"
                onChange={(event) => {
                  void onPhoto(event.target.files?.[0]);
                  event.target.value = "";
                }}
              />
            </label>
            {draft.photo ? (
              <button type="button" className="btn btn-quiet" onClick={() => onChange({ ...draft, photo: null })}>
                Usar avatar
              </button>
            ) : null}
          </div>
          {photoError ? (
            <p role="alert" className="mt-2 text-sm text-clay">
              {photoError}
            </p>
          ) : null}
        </div>
      </div>
      <div className="flex flex-wrap gap-2" role="group" aria-label="Avatares náuticos">
        {avatarChoices().map((item) => {
          const selected = !draft.photo && draft.avatar === item.id;
          return (
            <button
              key={item.id}
              type="button"
              aria-pressed={selected}
              aria-label={item.label}
              className={`rounded-full p-0.5 ${selected ? "ring-2 ring-gold" : ""}`}
              onClick={() => onChange({ ...draft, avatar: item.id, photo: null })}
            >
              <UserMark profile={{ photo: null, avatar: item.id }} className="size-11" />
            </button>
          );
        })}
      </div>
      <label className="block text-sm font-semibold text-navy" htmlFor="perfil-nome">
        Nome
        <input
          id="perfil-nome"
          className="field mt-1"
          autoComplete="name"
          maxLength={40}
          value={draft.name}
          onChange={(event) => onChange({ ...draft, name: event.target.value })}
        />
      </label>
      <label className="block text-sm font-semibold text-navy" htmlFor="perfil-idade">
        Idade
        <input
          id="perfil-idade"
          className="field mt-1"
          inputMode="numeric"
          autoComplete="bday"
          value={draft.age}
          onChange={(event) => onChange({ ...draft, age: event.target.value })}
        />
      </label>
      <div>
        <p className="text-sm font-semibold text-navy">Sexo</p>
        <div className="mt-2 grid grid-cols-2 gap-2" role="group" aria-label="Sexo">
          {(["feminino", "masculino"] as Sex[]).map((sex) => (
            <button
              key={sex}
              type="button"
              aria-pressed={draft.sex === sex}
              className={`min-h-12 rounded-full text-sm font-semibold ${
                draft.sex === sex ? "bg-navy text-white" : "border border-line bg-white text-navy"
              }`}
              onClick={() => onChange({ ...draft, sex })}
            >
              {sex === "feminino" ? "Feminino" : "Masculino"}
            </button>
          ))}
        </div>
        {targets ? (
          <p className="mt-3 text-sm leading-relaxed text-muted">
            TAF deste perfil: {formatMeters(targets.runMeters)} m em 12 min e 50 m de natação em{" "}
            {formatSwim(targets.swimLimitSec)}.
          </p>
        ) : (
          <p className="mt-3 text-sm leading-relaxed text-muted">
            O sexo ajusta a corrida (2.300 m ou 1.900 m em 12 min) e a natação (1:30 ou 1:45).
          </p>
        )}
      </div>
    </div>
  );
}

export function MeasureFields({
  draft,
  onChange,
}: {
  draft: ProfileDraft;
  onChange: (draft: ProfileDraft) => void;
}) {
  const height = parseDecimal(draft.heightCm);
  const weight = parseDecimal(draft.weightKg);
  const age = Number(draft.age);
  const heightM = height !== null && height >= 120 && height <= 220 ? height / 100 : null;
  const index = heightM && weight !== null && weight >= 30 ? bmi(weight, heightM) : null;
  const metabolism =
    draft.sex && height !== null && weight !== null && Number.isInteger(age) && age >= 12
      ? bmr(draft.sex, age, height, weight)
      : null;

  return (
    <div className="space-y-4">
      <label className="block text-sm font-semibold text-navy" htmlFor="perfil-altura">
        Altura (cm)
        <input
          id="perfil-altura"
          className="field mt-1"
          inputMode="decimal"
          value={draft.heightCm}
          onChange={(event) => onChange({ ...draft, heightCm: event.target.value })}
        />
      </label>
      <div className="grid gap-3 sm:grid-cols-2">
        <label className="block text-sm font-semibold text-navy" htmlFor="perfil-peso">
          Peso atual (kg)
          <input
            id="perfil-peso"
            className="field mt-1"
            inputMode="decimal"
            value={draft.weightKg}
            onChange={(event) => onChange({ ...draft, weightKg: event.target.value })}
          />
        </label>
        <label className="block text-sm font-semibold text-navy" htmlFor="perfil-meta">
          Peso meta (kg)
          <input
            id="perfil-meta"
            className="field mt-1"
            inputMode="decimal"
            value={draft.goalKg}
            onChange={(event) => onChange({ ...draft, goalKg: event.target.value })}
          />
        </label>
      </div>
      {index !== null ? (
        <div className="rounded-2xl bg-paper px-4 py-3">
          <p className="text-sm text-muted">IMC atual</p>
          <p className="font-serif text-3xl text-navy tabular-nums">
            {index.toLocaleString("pt-BR", { minimumFractionDigits: 1, maximumFractionDigits: 1 })}
          </p>
          <p className="text-sm text-ink">{bmiCategory(index)}</p>
          {metabolism !== null ? (
            <p className="mt-2 text-sm leading-relaxed text-muted">
              Taxa metabólica basal estimada: {metabolism.toLocaleString("pt-BR")} kcal/dia, pela equação de
              Mifflin–St Jeor.
            </p>
          ) : null}
        </div>
      ) : (
        <p className="text-sm leading-relaxed text-muted">
          O IMC e a taxa metabólica basal aparecem assim que altura, peso e idade estiverem preenchidos.
        </p>
      )}
    </div>
  );
}

export function RoutineFields({
  draft,
  onChange,
}: {
  draft: ProfileDraft;
  onChange: (draft: ProfileDraft) => void;
}) {
  const plan = dayPlan(draft.freeStart, draft.freeEnd);
  const windowMatches = plan.label === `${draft.freeStart}–${draft.freeEnd}`;

  return (
    <div className="space-y-4">
      <div className="grid gap-3 sm:grid-cols-2">
        <label className="block text-sm font-semibold text-navy" htmlFor="perfil-escrita">
          Prova escrita
          <input
            id="perfil-escrita"
            className="field mt-1"
            type="date"
            min="2026-01-01"
            max="2036-12-31"
            value={draft.escrita}
            onChange={(event) => onChange({ ...draft, escrita: event.target.value })}
          />
        </label>
        <label className="block text-sm font-semibold text-navy" htmlFor="perfil-taf">
          TAF
          <input
            id="perfil-taf"
            className="field mt-1"
            type="date"
            min="2026-01-01"
            max="2036-12-31"
            value={draft.taf}
            onChange={(event) => onChange({ ...draft, taf: event.target.value })}
          />
        </label>
      </div>
      <div className="grid gap-3 sm:grid-cols-2">
        <label className="block text-sm font-semibold text-navy" htmlFor="perfil-inicio">
          Janela livre, início
          <input
            id="perfil-inicio"
            className="field mt-1"
            type="time"
            value={draft.freeStart}
            onChange={(event) => onChange({ ...draft, freeStart: event.target.value })}
          />
        </label>
        <label className="block text-sm font-semibold text-navy" htmlFor="perfil-fim">
          Janela livre, fim
          <input
            id="perfil-fim"
            className="field mt-1"
            type="time"
            value={draft.freeEnd}
            onChange={(event) => onChange({ ...draft, freeEnd: event.target.value })}
          />
        </label>
      </div>
      <p className="text-sm leading-relaxed text-muted">
        O cronograma do dia cabe nessa janela: treino, exatas, linguagens e o preparo do sono.
      </p>
      {windowMatches ? (
        <ol className="space-y-1 text-sm">
          {plan.blocks.map((block) => (
            <li key={block.id} className="flex justify-between gap-3 rounded-xl bg-paper px-3 py-2">
              <span className="font-semibold text-navy">{block.title}</span>
              <span className="tabular-nums text-gold-deep">{block.time}</span>
            </li>
          ))}
        </ol>
      ) : (
        <p className="text-sm text-clay">Use uma janela de 2 a 18 horas para montar o dia.</p>
      )}
    </div>
  );
}

export function GoalFields({
  draft,
  onChange,
}: {
  draft: ProfileDraft;
  onChange: (draft: ProfileDraft) => void;
}) {
  return (
    <div className="grid gap-3 sm:grid-cols-2">
      <label className="block text-sm font-semibold text-navy" htmlFor="perfil-questoes">
        Questões por semana
        <input
          id="perfil-questoes"
          className="field mt-1"
          inputMode="numeric"
          value={draft.weeklyQuestions}
          onChange={(event) => onChange({ ...draft, weeklyQuestions: event.target.value })}
        />
      </label>
      <label className="block text-sm font-semibold text-navy" htmlFor="perfil-pomodoros">
        Pomodoros por semana
        <input
          id="perfil-pomodoros"
          className="field mt-1"
          inputMode="numeric"
          value={draft.weeklyPomodoros}
          onChange={(event) => onChange({ ...draft, weeklyPomodoros: event.target.value })}
        />
      </label>
    </div>
  );
}

function formatMeters(meters: number): string {
  return new Intl.NumberFormat("pt-BR").format(meters);
}

function formatSwim(seconds: number): string {
  const minutes = Math.floor(seconds / 60);
  const rest = seconds % 60;
  return `${minutes}:${String(rest).padStart(2, "0")}`;
}
