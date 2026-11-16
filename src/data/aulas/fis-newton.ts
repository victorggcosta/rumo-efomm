import type { Didactic } from "./types.ts";

export const didactic: Didactic = {
  origin: [
    "Aristóteles lia o movimento como algo que pede força o tempo todo: sem empurrão, o corpo para. A experiência do chão, com atrito, parece confirmar. Galileu separou o atrito do movimento. Num plano cada vez mais liso, o corpo vai cada vez mais longe. No limite sem resistência, a velocidade não precisa de força para se manter. Precisa de força para mudar.",
    "Newton escreveu isso em três leis. A primeira é o princípio da inércia: resultante nula, velocidade constante. A segunda mede a mudança: a resultante é massa vezes aceleração, quando a massa não varia. A terceira diz que força é interação. Se A empurra B, B empurra A, com o mesmo módulo e sentido oposto, em corpos diferentes.",
    "O atrito é a força da superfície que se opõe ao deslizamento ou à tendência de deslizar. Não é um número único μN para todo instante. O estático ajusta o módulo até um máximo. O cinético, quando já há deslizamento, fica perto de μc N e aponta contra o movimento relativo. Sem essa distinção, a caixa no convés ou anda quando não devia, ou fica presa quando já escorregou.",
  ],
  construction: [
    "Diagrama primeiro, conta depois. Cada força que entra tem um agente: Terra, cabo, convés, mão. Força sem agente não existe. A resultante é a soma vetorial, não a soma dos módulos.",
    "F = m a usa a resultante e a aceleração do mesmo corpo, no mesmo eixo. Se a resultante é zero, a = 0 e a velocidade não muda. Um navio em velocidade constante não está sem forças. O empuxo das máquinas equilibra o arrasto. A resultante é que é nula.",
    "Peso é P = m g, uma força, em newtons. Massa é a inércia, em quilogramas. Com g = 10 m/s², 5 kg pesam 50 N. A normal é a compressão da superfície, perpendicular a ela. No plano horizontal e sem aceleração vertical, a normal iguala o peso. No plano inclinado, a normal iguala a componente perpendicular do peso, mg cos θ, se nada mais empurra o corpo contra o plano.",
    "Ação e reação não se cancelam no diagrama de um corpo só, porque não estão nesse diagrama. O peso do livro e a normal da mesa atuam os dois no livro e podem se equilibrar. O par do peso é a atração do livro sobre a Terra. O par da normal é a força do livro sobre a mesa.",
    "Atrito estático: 0 ≤ fₑ ≤ μe N. Se a força paralela aplicada fica abaixo do máximo, o corpo não anda e o estático iguala essa força. Uma caixa de 20 kg com μe = 0,4 tem máximo 80 N. Uma puxada de 50 N não vence. O atrito é 50 N, não 80 N e não μc N.",
    "Atrito cinético: módulo μc N, sentido oposto ao deslizamento. No plano de 30°, a componente do peso ao longo do plano é mg sen 30°. A normal é mg cos 30°. Se o bloco desce, a = g sen θ − μc g cos θ. Com g = 10 e μc = 0,2, a = 5 − √3 m/s². Antes, confira se sen θ > μc cos θ. Se não for, o bloco nem desce sozinho.",
    "Eixo e sinal. Num elevador que sobe com aceleração a, a normal aponta para cima e o peso para baixo: N − mg = m a, então N = m(g + a). Maior que o peso. Se a aceleração é para baixo, a normal fica menor que o peso. O sinal não é gosto. É o sentido escolhido no eixo.",
  ],
  examples: [
    {
      title: "Caixa de 20 kg e puxada de 50 N",
      steps: [
        "N = mg = 200 N no convés horizontal.",
        "Máximo estático: 0,4 × 200 = 80 N. Cinético, se houvesse deslizamento: 0,3 × 200 = 60 N.",
        "50 N < 80 N. Não há deslizamento. O estático vale 50 N, contrário à puxada.",
        "Marcar 80 N usa o teto no lugar da força real. Marcar 60 N usa o cinético antes de o corpo andar.",
      ],
    },
    {
      title: "Elevador subindo a 2 m/s², massa de 10 kg",
      steps: [
        "Eixo para cima. N − mg = m a.",
        "N = m(g + a) = 10(10 + 2) = 120 N.",
        "100 N seria o peso, com velocidade vertical constante. Aqui a velocidade está mudando.",
      ],
    },
  ],
  application: [
    "Um navio em cruzeiro estável tem resultante nula e velocidade constante. Isso não significa que o cabo de reboque esteja sem tração. No rebocador, máquinas e arrasto e cabo se equilibram. Na barcaça, cabo e arrasto se equilibram. As forças nas duas pontas do cabo continuam um par de mesmo módulo. Dizer que, se fossem iguais, nada se moveria, confunde par da terceira lei com resultante de um corpo.",
    "Carga no convés fica no lugar pelo atrito estático e pela peação, até o limite. Numa guinada ou num balanço, a componente horizontal do peso efetivo cresce. Se ela passa de μe N, a carga entra em cinético e o atrito cai para μc N, em geral menor. O cálculo do repouso usa o máximo estático. O cálculo depois que escorregou usa o cinético.",
    "Plano inclinado é rampa de porão, rampa de carro e qualquer superfície que não seja horizontal. A normal não é o peso. É mg cos θ. Usar mg no lugar de N erra o atrito e a aceleração juntos.",
  ],
  traps: [
    "Tomar velocidade constante como ausência de forças, em vez de resultante nula.",
    "Cancelar ação e reação no mesmo diagrama. Peso e normal não são esse par.",
    "Pôr o atrito estático sempre igual a μe N, mesmo quando a força aplicada é menor.",
    "Usar atrito cinético num corpo que ainda está em repouso.",
    "Igualar a normal ao peso num plano inclinado ou num elevador acelerado.",
    "Trocar sen θ com cos θ na rampa. Ao longo do plano vai o seno. Na normal vai o cosseno.",
    "Esquecer de conferir se o bloco realmente desce antes de usar a fórmula com atrito plano abaixo.",
  ],
  bibliography: [
    {
      book: "Helou, Gualter e Newton. Tópicos de Física, vol. 1.",
      place: "Capítulos de dinâmica: leis de Newton, forças no plano e atrito.",
      note: "Livro desta aula. Faça o diagrama de cada problema antes da segunda lei. O livro separa estático e cinético com o cuidado que a banca cobra.",
    },
    {
      book: "Ramalho, Nicolau e Toledo. Os Fundamentos da Física, vol. 1.",
      place: "Capítulos de forças e de atrito.",
      note: "Segunda bateria, em especial plano inclinado com e sem atrito.",
    },
    {
      book: "Halliday, Resnick e Walker. Fundamentos de Física, vol. 1.",
      place: "Capítulo 5, força e movimento, e capítulo 6, atrito.",
      note: "Aprofundamento. O capítulo 6 trata o atrito estático como desigualdade, que é o ponto da caixa de 50 N. Leia depois que o diagrama já sair sem hesitação.",
    },
  ],
};
