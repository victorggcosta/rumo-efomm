import { useState } from "react";
import { Activity, BookOpen, CalendarDays, Compass, Landmark, Route } from "lucide-react";
import { Emblem } from "./Emblem.tsx";

const SLIDES = [
  {
    title: "Bem-vindo ao Rumo à EFOMM",
    kicker: "Metodologia",
    icon: Compass,
    points: [
      "O aplicativo organiza a preparação para a prova escrita e para o TAF.",
      "O estudo é ativo: teoria, exemplo, exercício e revisão.",
      "O que você estudar volta em 1, 7 e 30 dias, no ritmo da revisão espaçada.",
    ],
  },
  {
    title: "Hoje: rotina e revisões",
    kicker: "Aba Hoje",
    icon: CalendarDays,
    points: [
      "O cronograma do dia se ajusta à janela livre que você informar.",
      "O Pomodoro percorre teoria, exemplos, exercícios e revisão.",
      "Quando uma revisão de 1, 7 ou 30 dias vence, o app avisa neste aparelho.",
    ],
  },
  {
    title: "Estudar agora",
    kicker: "Sala de aula e simulados",
    icon: BookOpen,
    points: [
      "Cada tópico tem didática em 5 blocos e flashcards para o trajeto.",
      "O Caderno de Erros guarda a questão e a sua marcação.",
      "No Modo Dia de Prova há cartão-resposta. Abaixo de 50 pontos em uma matéria, o simulado indica eliminação.",
    ],
  },
  {
    title: "Trilha e livros",
    kicker: "36 semanas",
    icon: Route,
    points: [
      "A trilha cobre 36 semanas em três níveis: Base, Pré-EFOMM e Reta Final.",
      "Cada matéria indica a bibliografia recomendada para aquela etapa.",
    ],
  },
  {
    title: "TAF, saúde e patente",
    kicker: "Aba TAF e saúde",
    icon: Activity,
    points: [
      "O painel acompanha peso e IMC ao longo das semanas.",
      "As metas de corrida e natação seguem o índice do sexo informado no perfil.",
      "Pomodoro, acerto, revisão e treino somam XP e avançam a patente da Marinha Mercante.",
    ],
  },
  {
    title: "Mural oficial",
    kicker: "Aba Oficial",
    icon: Landmark,
    points: [
      "O mural reúne editais, comunicados e provas anteriores do CIAGA e do CIABA.",
      "A lista é buscada de novo sem precisar instalar outra versão do aplicativo.",
    ],
  },
] as const;

export function WelcomeTour({ mode, onFinish }: { mode: "inicio" | "rever"; onFinish: () => void }) {
  const [index, setIndex] = useState(0);
  const slide = SLIDES[index];
  const Icon = slide.icon;
  const last = index === SLIDES.length - 1;

  function next() {
    if (last) {
      onFinish();
      return;
    }
    setIndex(index + 1);
  }

  return (
    <div className="fixed inset-0 z-50 flex flex-col bg-paper text-ink" role="dialog" aria-modal="true" aria-labelledby="tour-titulo">
      <header className="bg-navy px-4 py-5 text-white">
        <div className="mx-auto flex max-w-xl items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <Emblem className="size-11" />
            <p className="font-serif text-2xl leading-none">Rumo à EFOMM</p>
          </div>
          <button type="button" className="min-h-11 rounded-full px-3 text-sm font-semibold text-white/80" onClick={onFinish}>
            Pular
          </button>
        </div>
      </header>
      <div className="mx-auto flex w-full max-w-xl flex-1 flex-col px-4 py-6">
        <div className="flex size-16 items-center justify-center rounded-3xl bg-navy text-gold" aria-hidden="true">
          <Icon className="size-8" />
        </div>
        <p className="mt-5 text-sm font-semibold uppercase tracking-wide text-gold-deep">
          {slide.kicker} · {index + 1} de {SLIDES.length}
        </p>
        <h1 id="tour-titulo" className="mt-1 font-serif text-3xl text-navy">
          {slide.title}
        </h1>
        <ul className="mt-4 space-y-3 text-base leading-relaxed">
          {slide.points.map((point) => (
            <li key={point} className="rounded-2xl border border-line bg-white px-4 py-3">
              {point}
            </li>
          ))}
        </ul>
        <div className="mt-5 flex justify-center gap-2" aria-hidden="true">
          {SLIDES.map((item, dot) => (
            <span key={item.title} className={`h-1.5 rounded-full ${dot === index ? "w-8 bg-navy" : "w-2 bg-line"}`} />
          ))}
        </div>
        <div className="mt-auto flex flex-wrap gap-2 pt-6">
          {index > 0 ? (
            <button type="button" className="btn btn-quiet" onClick={() => setIndex(index - 1)}>
              Anterior
            </button>
          ) : null}
          <button type="button" className="btn btn-primary flex-1" onClick={next}>
            {last ? (mode === "inicio" ? "Começar Configuração" : "Fechar") : "Próximo"}
          </button>
        </div>
      </div>
    </div>
  );
}
