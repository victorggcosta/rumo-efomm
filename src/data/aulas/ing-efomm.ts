import type { Didactic } from "./types.ts";

export const didactic: Didactic = {
  origin: [
    "O inglês de prova da EFOMM não pede literatura. Pede leitura curta, quase sempre técnica, e uma decisão gramatical em cima dela. O texto fala de quarto de serviço, visibilidade, máquina, prático ou segurança. A pergunta esconde tempo verbal, modal ou phrasal verb.",
    "Os tempos existem para localizar a ação. Present simple é o que se repete ou é fato. Present continuous é o que está em curso agora. Past simple é o que acabou num tempo fechado, como yesterday. Present perfect liga um passado ao agora, e os advérbios already, yet e just são o sinal mais comum. Past continuous é o cenário que já estava acontecendo quando outra ação, no past simple, ocorreu.",
    "Modal não é verbo comum. Must, should, can e may não levam -s, não levam to e não vão direto para o passado com -ed no verbo principal. A diferença entre eles é o grau: must é obrigação ou conclusão forte, should é conselho, can é capacidade, may é possibilidade.",
  ],
  construction: [
    "Present simple de rotina: the officer checks the charts every watch. Terceira pessoa singular ganha -s. Every, always e usually puxam esse tempo. Now, look e at the moment puxam o continuous: the boat is crossing the channel now.",
    "Past simple com tempo fechado: the engineer repaired the pump yesterday. Yesterday, ago, last night e in 2019 não combinam com present perfect. Present perfect: the master has signed the log already. A ação interessa agora. O particípio entra depois de have ou has.",
    "Duas ações no passado: a longa no continuous, a curta no simple. The ship was leaving the berth when the fog came down. Was/were + -ing é o pano de fundo.",
    "Modal + infinitivo sem to. Must wear, should reduce, can measure, may be caused. Must to wear e should reducing estão errados. Must não recebe -s.",
    "Must not é proibição. Don't have to é falta de obrigação: não é preciso, mas não está proibido. A prova troca os dois. Had to é a obrigação no passado, porque must não tem passado próprio. Must have + particípio é dedução sobre o passado: the generator is cold, so it must have tripped.",
    "Condicional real: if + present simple, will na outra oração. If visibility falls, the ship will sound the signals. Will dentro do if é o erro clássico. If + past simple e would na outra oração é a hipótese, não o caso real.",
    "Phrasal verb é verbo mais partícula, com sentido próprio. Look after é cuidar. Break down, para máquina, é ter pane. Carry out é executar. Stand by é ficar de prontidão. Write up é registrar por escrito. A partícula não se traduz sozinha.",
    "Leitura: a ideia principal é o que o parágrafo faz, não uma palavra isolada. Ordem de preparar escada, boia e espera do barco do prático é uma ordem de transferência segura. Detalhe verdadeiro nem sempre é a resposta, se a pergunta pede o propósito.",
  ],
  examples: [
    {
      title: "Quarto com visibilidade em queda",
      steps: [
        "Stand by on the bridge: o lookout fica pronto no passadiço. Stand by the main engine: a máquina fica pronta para manobra.",
        "Had to alter course: obrigação no passado, forçada pelo pesqueiro que cruzou pela proa.",
        "Must not rely on radar alone: proibição. Não é don't have to, que só dispensaria a obrigação.",
        "Wrote the incident up: lançou o ocorrido no livro de quarto, por completo.",
      ],
    },
    {
      title: "If visibility falls",
      steps: [
        "A condição é real e possível. O if fica no presente: falls.",
        "A consequência fica com will: the ship will sound the signals.",
        "If visibility will fall repete o will e sai do padrão.",
      ],
    },
  ],
  application: [
    "No passadiço, stand by, keep clear, alongside e lookout aparecem em ordem curta. O sentido operacional importa tanto quanto a gramática. Stand by não é sair, e alongside é ao lado, não atrás.",
    "Um aviso antes de receber o prático junta imperativo e sequência: check, do not start until. Until marca o limite. A leitura certa é a preparação segura, não um adiamento da chegada do prático.",
    "Pane de gerador usa break down. Inspeção marcada usa carry out. Passagem de serviço usa take over. São os três que mais se confundem com partículas vizinhas: break out é irromper, carry on é continuar, take up é ocupar ou começar um assunto.",
  ],
  traps: [
    "Pôr present perfect com yesterday, ou past simple com already sem tempo fechado.",
    "Will dentro da oração do if na condicional real.",
    "Must to, should to, can to. Modal rejeita o to.",
    "Trocar must not com don't have to.",
    "Traduzir a partícula do phrasal verb ao pé da letra. Up em write up não é para cima.",
    "Responder o detalhe verdadeiro quando a pergunta pede a ideia principal do parágrafo.",
    "Esquecer o -s da terceira pessoa no present simple, ou pôr -s no modal.",
  ],
  bibliography: [
    {
      book: "Raymond Murphy. English Grammar in Use.",
      place: "Unidades de present, past, present perfect, modals e conditionals.",
      note: "A gramática de uso que sustenta esta aula. Faça a unidade do tempo e, em seguida, os exercícios de contraste, em especial past simple contra present perfect.",
    },
    {
      book: "IMO. Standard Marine Communication Phrases.",
      place: "Frases de passadiço, máquina e segurança.",
      note: "Não é gramática. É o vocabulário operacional que a prova imita: stand by, alongside, restricted visibility, pilot ladder. Leia a frase e diga qual tempo ou modal ela usa.",
    },
    {
      book: "Michael McCarthy e Felicity O'Dell. English Phrasal Verbs in Use.",
      place: "Unidades de break, carry, look, take e call.",
      note: "Lista curta, relida em frase. Break down, carry out e call off precisam aparecer dentro de um período, não numa coluna solta.",
    },
  ],
};
