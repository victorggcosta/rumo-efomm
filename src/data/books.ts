import type { SubjectId } from "../types.ts";

export function bookFor(subjectId: SubjectId, level: 1 | 2 | 3): { title: string; detail: string } {
  if (subjectId === "matematica") {
    if (level === 1) {
      return {
        title: "Ciência e Aplicações, vol. 1, e FME, vol. 1",
        detail: "Apoio deste nível: Matemática: Ciência e Aplicações, volume 1, e Fundamentos da Matemática Elementar, volume 1. O caminho da trilha segue Ciência e Aplicações, depois o FME, e no fim o Stewart.",
      };
    }
    if (level === 2) {
      return {
        title: "Fundamentos da Matemática Elementar",
        detail: "Apoio deste nível: o volume do FME do assunto (funções, trigonometria, geometria ou contagem). Use Ciência e Aplicações quando o capítulo do FME ficar seco.",
      };
    }
    return {
      title: "Stewart, Cálculo",
      detail: "Apoio da reta final: Stewart, Cálculo, para limites e derivadas. Nos outros tópicos, volte ao FME do tema e feche com prova antiga.",
    };
  }
  if (subjectId === "fisica") {
    if (level === 1) {
      return {
        title: "Os Fundamentos da Física, vol. 1, e Tópicos de Física, vol. 1",
        detail: "Apoio deste nível: Ramalho, Nicolau e Toledo, Os Fundamentos da Física, volume 1, e Helou, Gualter e Newton, Tópicos de Física, volume 1. O caminho segue esses dois e chega ao Halliday na reta final.",
      };
    }
    if (level === 2) {
      return {
        title: "Tópicos de Física",
        detail: "Apoio deste nível: Tópicos de Física, no volume do assunto (mecânica, termologia ou eletricidade). Os Fundamentos da Física cobre o mesmo chão com outra voz.",
      };
    }
    return {
      title: "Halliday, Fundamentos de Física",
      detail: "Apoio da reta final: Halliday, Resnick e Walker. Use o volume do tema e confronte com uma prova anterior da EFOMM.",
    };
  }
  if (subjectId === "ingles") {
    return {
      title: "Gramática de base e texto curto",
      detail: "Apoio: uma gramática escolar de inglês, no capítulo do tempo verbal da aula, e um texto curto para ler em voz baixa. A prova cobra a frase certa e o sentido do parágrafo.",
    };
  }
  return {
    title: "Gramática escolar e modelo de dissertação",
    detail: "Apoio: a gramática que você usa na escola, no capítulo da aula, e um modelo de dissertação com tese, dois parágrafos e conclusão. A redação pede ideia defendida, não frase bonita solta.",
  };
}
