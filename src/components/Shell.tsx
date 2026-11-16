import { useEffect, useState } from "react";
import { Activity, BookOpen, CalendarDays, Route, UserRound } from "lucide-react";
import { BodyView } from "./BodyView.tsx";
import { Classroom } from "./Classroom.tsx";
import { Countdowns } from "./Countdowns.tsx";
import { Onboarding } from "./Onboarding.tsx";
import { ProfileView } from "./ProfileView.tsx";
import { StudyView } from "./StudyView.tsx";
import { TodayView } from "./TodayView.tsx";
import { TrailView } from "./TrailView.tsx";
import { ExamRoom } from "./ExamRoom.tsx";
import { RankStrip } from "./RankCard.tsx";
import { UserMark } from "./UserMark.tsx";
import { dayPlan, dayScore } from "../data/schedule.ts";
import { formatLongDate } from "../lib/dates.ts";
import { useDeviceClock } from "../lib/useDeviceClock.ts";
import { useAppState } from "../state.tsx";

type Tab = "hoje" | "estudar" | "trilha" | "taf" | "perfil";

const TABS: { id: Tab; label: string; short: string; icon: typeof CalendarDays }[] = [
  { id: "hoje", label: "Hoje", short: "Hoje", icon: CalendarDays },
  { id: "estudar", label: "Estudar agora", short: "Estudar", icon: BookOpen },
  { id: "trilha", label: "Trilha 36 semanas", short: "Trilha", icon: Route },
  { id: "taf", label: "TAF e saúde", short: "TAF", icon: Activity },
  { id: "perfil", label: "Perfil e configurações", short: "Perfil", icon: UserRound },
];

export function Shell() {
  const [tab, setTab] = useState<Tab>("hoje");
  const [topicId, setTopicId] = useState<string | null>(null);
  const [examOpen, setExamOpen] = useState(false);
  const now = useDeviceClock();
  const { data, saveError } = useAppState();
  const profile = data.profile;

  useEffect(() => {
    document.title = profile ? `Rumo à EFOMM · ${profile.name}` : "Rumo à EFOMM";
  }, [profile]);

  useEffect(() => {
    if (data.exam && data.exam.finishedAt === null) setExamOpen(true);
  }, [data.exam]);

  if (!profile) return <Onboarding />;

  const plan = dayPlan(profile.freeStart, profile.freeEnd);
  const score = dayScore(new Set(data.dailyChecks[now.iso] ?? []), plan.blocks);
  const complete = score.done === score.total;

  function openTab(next: Tab) {
    setTab(next);
    window.scrollTo(0, 0);
  }

  function openTopic(id: string) {
    setTopicId(id);
  }

  return (
    <div className="min-h-dvh bg-paper text-ink lg:grid lg:grid-cols-[15.5rem_minmax(0,1fr)]">
      <a
        href="#conteudo"
        className="absolute left-4 top-0 z-50 -translate-y-full rounded-b-xl bg-white px-4 py-3 font-semibold text-navy focus:translate-y-0"
      >
        Ir para o conteúdo
      </a>

      <aside className="hidden lg:flex lg:sticky lg:top-0 lg:h-dvh lg:flex-col lg:border-r lg:border-line lg:bg-navy lg:px-3 lg:py-5 lg:text-white">
        <button type="button" className="flex items-center gap-3 rounded-2xl px-2 py-2 text-left" onClick={() => openTab("perfil")}>
          <UserMark profile={profile} className="size-11" />
          <div>
            <p className="font-serif text-xl leading-none">{profile.name}</p>
            <RankStrip xp={data.xp} />
            <p className="mt-1 text-xs text-white/70">Rumo à EFOMM</p>
          </div>
        </button>
        <nav className="mt-8 flex flex-1 flex-col gap-2" aria-label="Seções">
          {TABS.map((item) => (
            <SideButton key={item.id} item={item} current={tab} onSelect={openTab} />
          ))}
        </nav>
      </aside>

      <div className="min-w-0">
        <header className="bg-navy text-white">
          <div className="mx-auto flex max-w-3xl items-center gap-3 px-4 py-4">
            <button
              type="button"
              className="flex min-w-0 flex-1 items-center gap-3 text-left"
              onClick={() => openTab("perfil")}
              aria-label={`Abrir perfil de ${profile.name}`}
            >
              <UserMark profile={profile} className="size-11" />
              <span className="min-w-0">
                <h1 className="font-serif text-2xl leading-none">Rumo à EFOMM</h1>
                <span className="mt-1 block truncate text-sm text-white/75">
                  {profile.name} · {formatLongDate(now.iso, true)}
                </span>
                <RankStrip xp={data.xp} />
              </span>
            </button>
          </div>
          <div className="mx-auto max-w-3xl px-4 pb-4">
            <Countdowns todayIso={now.iso} />
            <div className="mt-3">
              <div className="flex items-baseline justify-between gap-3 text-sm">
                <p>{complete ? "Dia completo" : "Feito hoje"}</p>
                <p className="font-semibold text-gold tabular-nums">
                  {score.done} de {score.total}
                </p>
              </div>
              <div
                className="mt-2 h-1.5 overflow-hidden rounded-full bg-white/15"
                role="progressbar"
                aria-valuenow={score.done}
                aria-valuemin={0}
                aria-valuemax={score.total}
                aria-label="Itens feitos hoje na janela livre"
              >
                <div className="h-full bg-gold" style={{ width: `${(score.done / score.total) * 100}%` }} />
              </div>
            </div>
          </div>
        </header>

        {saveError ? (
          <p role="alert" className="bg-clay-soft px-4 py-3 text-center text-sm text-clay">
            Não consegui salvar neste aparelho. O progresso pode se perder ao fechar a página.
          </p>
        ) : null}

        <main id="conteudo" tabIndex={-1} className="mx-auto max-w-3xl px-4 py-6 pb-28 outline-none lg:pb-12">
          {tab === "hoje" ? <TodayView now={now} /> : null}
          {tab === "estudar" ? <StudyView onOpen={openTopic} /> : null}
          {tab === "trilha" ? <TrailView onOpen={openTopic} /> : null}
          {tab === "taf" ? <BodyView todayIso={now.iso} /> : null}
          {tab === "perfil" ? <ProfileView /> : null}
          <p className="mx-auto mt-10 max-w-xl text-center text-sm leading-relaxed text-muted">
            Tudo fica salvo neste aparelho. Em Perfil você exporta um arquivo para levar ao celular.
          </p>
        </main>
      </div>

      <nav
        className="fixed inset-x-0 bottom-0 z-40 border-t border-line bg-white lg:hidden"
        style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
        aria-label="Seções"
      >
        <div className="mx-auto grid grid-cols-5">
          {TABS.map((item) => {
            const selected = tab === item.id;
            const Icon = item.icon;
            return (
              <button
                key={item.id}
                type="button"
                aria-current={selected ? "page" : undefined}
                className={`flex min-h-16 flex-col items-center justify-center gap-1 text-[11px] font-semibold ${selected ? "text-navy" : "text-muted"}`}
                onClick={() => openTab(item.id)}
              >
                <Icon className="size-5" aria-hidden="true" />
                {item.short}
                <span className={`h-0.5 w-8 rounded-full ${selected ? "bg-gold" : "bg-transparent"}`} />
              </button>
            );
          })}
        </div>
      </nav>

      {topicId ? (
        <Classroom
          topicId={topicId}
          onClose={() => {
            const id = topicId;
            setTopicId(null);
            requestAnimationFrame(() => document.getElementById(`abrir-${id}`)?.focus());
          }}
        />
      ) : null}
      {examOpen && data.exam ? <ExamRoom onClose={() => setExamOpen(false)} /> : null}
    </div>
  );
}

function SideButton({
  item,
  current,
  onSelect,
}: {
  item: (typeof TABS)[number];
  current: Tab;
  onSelect: (tab: Tab) => void;
}) {
  const selected = current === item.id;
  const Icon = item.icon;
  return (
    <button
      type="button"
      aria-current={selected ? "page" : undefined}
      className={`flex min-h-14 items-center gap-3 rounded-2xl px-3 text-left text-base font-semibold ${selected ? "bg-white text-navy" : "text-white/80"}`}
      onClick={() => onSelect(item.id)}
    >
      <Icon className="size-5 shrink-0" aria-hidden="true" />
      {item.label}
    </button>
  );
}
