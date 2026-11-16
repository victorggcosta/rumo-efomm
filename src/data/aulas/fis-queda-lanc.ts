import type { Didactic } from "./types.ts";

export const didactic: Didactic = {
  origin: [
    "Aristóteles achava que o corpo mais pesado caía mais depressa, como quem vê uma pena e uma pedra no ar. Galileu separou o efeito do ar do movimento que resta quando o ar pesa pouco. Perto da Terra, e sem resistência relevante, corpos largados juntos chegam juntos. A aceleração desse movimento é g, cerca de 9,8 m/s², e neste curso usamos 10 m/s² quando o enunciado não pedir outro valor.",
    "O lançamento é a queda com uma velocidade inicial que não aponta só para baixo. Um projétil, uma linha lançada entre duas embarcações, um objeto que escapa de uma altura com velocidade horizontal: o movimento se parte em dois. Na horizontal, se o ar não empurra, não há aceleração, e a velocidade fica a que era. Na vertical, a aceleração é g o tempo todo. Essa separação é de Galileu, e é o motivo de a trajetória ser uma parábola.",
    "O sinal de g não é uma propriedade da gravidade que muda de exercício para exercício. É a escolha do eixo. Se o eixo aponta para cima, a aceleração é −g, porque a gravidade aponta contra o eixo. Se o eixo aponta para baixo, a aceleração é +g. Trocar no meio da conta é o erro que produz altura negativa onde havia subida, ou tempo absurdo.",
  ],
  construction: [
    "Queda a partir do repouso, eixo para baixo: v₀ = 0 e a = g. Então v = g t e h = g t² / 2. Em 2 s, v = 20 m/s e h = 20 m. Em 3 s, h = 45 m, enquanto g t = 30 m/s é a velocidade, não a altura. A banca coloca as duas na mesma lista.",
    "Se a altura é dada e o tempo não, v² = 2 g h. Cair 20 m a partir do repouso produz v = 20 m/s, porque v² = 400. Cair 80 m pede 80 = 5 t², então t = 4 s. A raiz negativa da equação do segundo grau não é um instante anterior ao abandono se o cronômetro começa no zero.",
    "Lançamento vertical para cima, eixo para cima: v = v₀ − g t e y = v₀ t − g t² / 2. No topo, v = 0. Com v₀ = 20 m/s, o topo chega em 2 s e a 20 m. A volta ao mesmo nível leva mais 2 s, porque a descida repete a subida quando o ar não entra. A equação y = 0 devolve t = 0 e t = 4 s.",
    "No lançamento horizontal, v₀ᵧ = 0 e v₀ₓ fica constante. O tempo de voo é o tempo de queda da altura, como se o corpo tivesse sido largado. De 45 m, t = 3 s. Com v₀ₓ = 10 m/s, o alcance é 30 m. Depois de 2 s, a velocidade vertical já é 20 m/s para baixo, e a horizontal continua 10 m/s. Elas não se misturam.",
    "No lançamento oblíquo, separe antes de calcular. v₀ₓ = v₀ cos θ e v₀ᵧ = v₀ sen θ. O tempo de voo em terreno plano é 2 v₀ᵧ / g. O alcance é v₀ₓ vezes esse tempo, ou v₀² sen(2θ) / g. Com 20 m/s a 30°, v₀ᵧ = 10 m/s, o tempo é 2 s, v₀ₓ = 10√3 m/s e o alcance é 20√3 m. A altura máxima usa só v₀ᵧ: h = v₀ᵧ² / (2g) = 5 m.",
    "Ângulos complementares trocam seno e cosseno. 30° e 60° têm o mesmo sen(2θ), porque 60° e 120° têm o mesmo seno. O alcance é o mesmo. A altura não é: quem sai mais em pé sobe mais e fica menos tempo “aproveitando” a horizontal, e os produtos se compensam no alcance. O máximo, em terreno plano e sem ar, é 45°, porque sen(2θ) vale no máximo 1. Isso deixa de valer se o chão de chegada não está na altura de saída, ou se o ar empurra.",
    "Referencial muda a frase, não a física. Um pacote abandonado de um navio que anda a 5 m/s já tem essa velocidade horizontal. Sem ar, ele a conserva. De 80 m, cai em 4 s e, em relação à água, avança 20 m. Em relação ao navio, se o navio não muda de velocidade, o pacote não se afasta na horizontal. “Cai reto” é verdade num referencial e falsa no outro. A pergunta tem de dizer qual.",
    "Quando o lançamento é para cima e a água está abaixo, o eixo precisa de uma origem. Origem no lançamento, eixo para cima, água em y = −45 m, v₀ = 10 m/s: 10 t − 5 t² = −45. A equação t² − 2t − 9 = 0 tem raiz positiva 1 + √10. A outra raiz é negativa e se descarta. √10 sozinho seria a queda sem a velocidade inicial para cima.",
  ],
  examples: [
    {
      title: "20 m/s a 30°, terreno plano, g = 10",
      steps: [
        "v₀ₓ = 20 cos 30° = 10√3 m/s. v₀ᵧ = 20 sen 30° = 10 m/s.",
        "Tempo de voo = 2 × 10 / 10 = 2 s.",
        "Alcance = 10√3 × 2 = 20√3 m. A fórmula do seno duplo dá o mesmo número.",
        "Altura máxima = 10² / (2 × 10) = 5 m. Use v₀ᵧ, não o módulo 20.",
      ],
    },
    {
      title: "Pacote abandonado de um navio a 5 m/s, de 80 m",
      steps: [
        "Na saída, a velocidade horizontal do pacote é a do navio. Sem ar, ela permanece.",
        "80 = 5 t², t = 4 s.",
        "Em relação à água: 5 × 4 = 20 m.",
        "Em relação ao navio, com velocidade constante: distância horizontal nula. Leia o referencial do enunciado antes de marcar zero.",
      ],
    },
  ],
  application: [
    "Um objeto que cai do mastro, uma ferramenta que escorrega de uma altura, uma amarra lançada de um convés para outro: no primeiro modelo, sem ar, o tempo depende da altura e da velocidade vertical inicial, e o alcance horizontal é essa velocidade vezes o tempo. O ar real encurta o alcance e alonga um pouco a queda. O modelo sem ar é o limite, e a banca cobra o limite. Saber que o ar existe evita usar o mesmo número num vento forte como se fosse exato.",
    "Dois tripulantes na mesma altura, um largando um objeto e outro lançando outro para o lado no mesmo instante, veem os dois passarem pela mesma altura juntos. A componente vertical é a mesma. Isso organiza o raciocínio antes da conta do alcance.",
    "Um sinalizador ou um jato lançado de um convés em movimento já nasce com a velocidade do navio. Esquecer essa componente é calcular a queda como se o navio estivesse parado em relação à água.",
  ],
  traps: [
    "Trocar o sinal de g no meio do exercício, ou misturar eixo para cima com fórmula de eixo para baixo.",
    "Usar g t como altura. g t é velocidade na queda a partir do repouso.",
    "Achar que a velocidade horizontal altera o tempo de queda. Sem ar, não altera.",
    "Calcular a altura máxima com o módulo da velocidade em vez da componente vertical.",
    "Marcar 45° como único ângulo de alcance máximo e, na pergunta seguinte, negar que 30° e 60° têm o mesmo alcance. As duas frases são verdadeiras, e tratam de coisas diferentes.",
    "Responder o alcance no referencial errado. O pacote do navio cai “reto” para quem está no navio e avança em relação à água.",
    "Aceitar a raiz negativa do tempo. Tempo de voo, neste curso, conta a partir do lançamento.",
  ],
  bibliography: [
    {
      book: "Helou, Gualter e Newton. Tópicos de Física, vol. 1.",
      place: "Capítulos de queda livre e de cinemática vetorial, no lançamento horizontal e no lançamento oblíquo.",
      note: "Livro desta aula. Faça a separação das componentes no papel, em todo exercício, antes de usar a fórmula do alcance.",
    },
    {
      book: "Ramalho, Nicolau e Toledo. Os Fundamentos da Física, vol. 1.",
      place: "Capítulos de queda dos corpos e lançamento de projéteis.",
      note: "Segunda bateria de problemas no mesmo modelo, com g = 10 m/s² na maior parte dos exercícios.",
    },
    {
      book: "Halliday, Resnick e Walker. Fundamentos de Física, vol. 1.",
      place: "Capítulo 2, na queda livre, e capítulo 4, movimento em duas e três dimensões.",
      note: "Aprofundamento. O capítulo 4 deduz a parábola a partir da independência dos eixos. Leia depois de acertar o sinal de g sem hesitar.",
    },
  ],
};
