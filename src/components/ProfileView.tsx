import { useEffect, useRef, useState } from "react";
import { latestWeight } from "../lib/body.ts";
import { draftFromProfile, parseDraft, type ProfileDraft } from "../lib/profileDraft.ts";
import { readBackup } from "../lib/storage.ts";
import { useAppState } from "../state.tsx";
import { activateDailyReminders, reminderPlan, sendTestNotification } from "../utils/notifications.ts";
import { AlertPermissionBanner } from "./AlertPermissionBanner.tsx";
import { RankCard } from "./RankCard.tsx";
import { WelcomeTour } from "./WelcomeTour.tsx";
import { GoalFields, IdentityFields, MeasureFields, RoutineFields } from "./ProfileFields.tsx";

export function ProfileView() {
  const { data, saveProfile, replaceData, resetAll, setRemindersEnabled } = useAppState();
  const profile = data.profile;
  const fileRef = useRef<HTMLInputElement>(null);
  const [draft, setDraft] = useState<ProfileDraft | null>(() =>
    profile ? draftFromProfile(profile, data.targets, latestWeight(data.weights)?.kg ?? null) : null,
  );
  const [notice, setNotice] = useState("");
  const [error, setError] = useState("");
  const [pending, setPending] = useState<string | null>(null);
  const [resetStep, setResetStep] = useState<0 | 1>(0);
  const [reminderNote, setReminderNote] = useState("");
  const [reminderError, setReminderError] = useState("");
  const [tourOpen, setTourOpen] = useState(false);

  useEffect(() => {
    if (!data.profile) return;
    setDraft(draftFromProfile(data.profile, data.targets, latestWeight(data.weights)?.kg ?? null));
  }, [data.profile, data.targets, data.weights]);

  if (!profile || !draft) return null;
  const alarms = reminderPlan(profile.freeStart, profile.freeEnd);

  function save() {
    const parsed = parseDraft(draft!, { weightRequired: false });
    if (!parsed.ok) {
      setError(parsed.error);
      setNotice("");
      return;
    }
    saveProfile(parsed.value.profile, parsed.value.weightKg);
    setError("");
    setNotice("Perfil salvo neste aparelho.");
  }

  function exportBackup() {
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "rumo-efomm-backup.json";
    link.click();
    URL.revokeObjectURL(url);
    setNotice("Backup baixado. O arquivo leva perfil, peso, questões, caderno de erros, revisões, patente, lembretes e notas.");
    setError("");
  }

  async function onFile(file: File | undefined) {
    if (!file) return;
    try {
      const text = await file.text();
      readBackup(text);
      setPending(text);
      setNotice("Arquivo lido. Confirme para substituir o que está neste aparelho.");
      setError("");
    } catch {
      setPending(null);
      setError("Não consegui ler esse arquivo. Use um backup exportado por este aplicativo.");
      setNotice("");
    }
  }

  async function onReminders() {
    const result = await activateDailyReminders();
    if (!result.ok) {
      setReminderError(result.message);
      setReminderNote("");
      return;
    }
    setRemindersEnabled(true);
    setReminderError("");
    setReminderNote(result.message);
  }

  function offReminders() {
    setRemindersEnabled(false);
    setReminderError("");
    setReminderNote("Lembretes desligados neste aparelho.");
  }

  function confirmImport() {
    if (!pending) return;
    try {
      replaceData(readBackup(pending));
      setPending(null);
      setNotice("Backup restaurado neste aparelho.");
      setError("");
    } catch {
      setError("O arquivo não pôde ser restaurado.");
      setNotice("");
    }
  }

  return (
    <div id="perfil" className="space-y-6">
      <RankCard xp={data.xp} />

      <header>
        <h2 className="font-serif text-3xl text-navy">Perfil e configurações</h2>
        <p className="mt-2 max-w-2xl text-base leading-relaxed text-muted">
          Nome, foto, metas e horários deste aparelho. O progresso de estudo continua no mesmo lugar.
        </p>
      </header>

      <section className="card space-y-6">
        <h3 className="font-serif text-2xl text-navy">Editar perfil</h3>
        <IdentityFields draft={draft} onChange={setDraft} />
        <MeasureFields draft={draft} onChange={setDraft} />
        <RoutineFields draft={draft} onChange={setDraft} />
        <div>
          <h3 className="font-serif text-2xl text-navy">Metas semanais</h3>
          <p className="mt-1 text-sm text-muted">O padrão inicial é 80 questões e 20 pomodoros.</p>
          <div className="mt-3">
            <GoalFields draft={draft} onChange={setDraft} />
          </div>
        </div>
        {error ? (
          <p role="alert" className="text-sm text-clay">
            {error}
          </p>
        ) : null}
        {notice ? <p className="text-sm text-sea">{notice}</p> : null}
        <button type="button" className="btn btn-primary" onClick={save}>
          Salvar perfil
        </button>
      </section>

      <section className="card space-y-3" aria-labelledby="lembretes-titulo">
        <h3 id="lembretes-titulo" className="font-serif text-2xl text-navy">
          Lembretes neste aparelho
        </h3>
        <p className="text-sm leading-relaxed text-muted">
          Os horários seguem o relógio deste aparelho. No Android, o sistema pede permissão ao ativar.
        </p>
        <ul className="space-y-1 text-sm leading-relaxed">
          <li>Revisão espaçada às {alarms.review}, nos dias com tópico ou questão do caderno vencendo.</li>
          <li>
            Treino às {alarms.workout} e estudo às {alarms.study}, na janela livre.
          </li>
          <li>Higiene do sono às {alarms.sleep}.</li>
          <li>Contagem da prova escrita e do TAF, {alarms.weekly}.</li>
        </ul>
        {data.remindersEnabled ? <p className="text-sm text-sea">Lembretes diários ativos.</p> : null}
        {reminderError ? (
          <p role="alert" className="text-sm text-clay">
            {reminderError}
          </p>
        ) : null}
        {reminderNote ? <p className="text-sm text-sea">{reminderNote}</p> : null}
        <AlertPermissionBanner />
        <div className="flex flex-col gap-2">
          <button type="button" id="ativar-lembretes" className="btn btn-primary" onClick={() => void onReminders()}>
            Ativar Lembretes Diários
          </button>
          <button
            type="button"
            id="testar-notificacao"
            className="btn btn-quiet"
            onClick={() => {
              void sendTestNotification().then((result) => {
                if (result.ok) {
                  setReminderNote(result.message);
                  setReminderError("");
                } else {
                  setReminderError(result.message);
                  setReminderNote("");
                }
              });
            }}
          >
            Testar Notificação Agora
          </button>
          {data.remindersEnabled ? (
            <button type="button" className="btn btn-quiet" onClick={offReminders}>
              Desligar lembretes
            </button>
          ) : null}
        </div>
      </section>

      <section className="card space-y-3" aria-labelledby="ajuda-titulo">
        <h3 id="ajuda-titulo" className="font-serif text-2xl text-navy">
          Ajuda
        </h3>
        <p className="text-sm leading-relaxed text-muted">
          O tutorial explica cada aba. Os dados deste aparelho permanecem como estão.
        </p>
        <button type="button" id="rever-tutorial" className="btn btn-primary w-full" onClick={() => setTourOpen(true)}>
          📖 Tutorial: Como Usar o App
        </button>
      </section>

      <section className="card" aria-labelledby="dados-titulo">
        <h3 id="dados-titulo" className="font-serif text-2xl text-navy">
          Dados e portabilidade
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-muted">
          O backup inclui perfil, peso, questões resolvidas, caderno de erros, revisões, patente, lembretes e notas. Tudo fica neste aparelho e abre sem internet.
        </p>
        <div className="mt-4 flex flex-col gap-2">
          <button type="button" id="exportar-backup" className="btn btn-primary" onClick={exportBackup}>
            Exportar backup (.json)
          </button>
          <button type="button" id="importar-backup" className="btn btn-quiet" onClick={() => fileRef.current?.click()}>
            Importar backup (.json)
          </button>
          <input
            ref={fileRef}
            type="file"
            accept="application/json,.json"
            className="sr-only"
            onChange={(event) => {
              void onFile(event.target.files?.[0]);
              event.target.value = "";
            }}
          />
          {pending ? (
            <button type="button" className="btn btn-primary" onClick={confirmImport}>
              Substituir os dados deste aparelho
            </button>
          ) : null}
          {resetStep === 0 ? (
            <button type="button" id="resetar-dados" className="btn btn-quiet" onClick={() => setResetStep(1)}>
              Resetar dados
            </button>
          ) : (
            <div className="rounded-2xl bg-clay-soft p-4">
              <p className="text-sm leading-relaxed text-clay">
                Isto apaga o perfil, o peso, as questões, o caderno de erros, as revisões, a patente e as notas deste aparelho. O arquivo de
                backup que você já baixou não é apagado.
              </p>
              <div className="mt-3 flex flex-wrap gap-2">
                <button type="button" className="btn bg-clay text-white" onClick={resetAll}>
                  Apagar tudo deste aparelho
                </button>
                <button type="button" className="btn btn-quiet" onClick={() => setResetStep(0)}>
                  Cancelar
                </button>
              </div>
            </div>
          )}
        </div>
      </section>
      {tourOpen ? <WelcomeTour mode="rever" onFinish={() => setTourOpen(false)} /> : null}
    </div>
  );
}
