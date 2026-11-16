import type { Didactic } from "./types.ts";

export const didactic: Didactic = {
  origin: [
    "Volta empilha discos de metal e produz uma corrente contínua. Ohm, em 1827, relaciona a tensão num condutor metálico com a corrente: para muitos materiais, a razão é constante. Essa constante é a resistência. Não é a tensão, e não é a corrente.",
    "Kirchhoff, em 1845, escreve duas leis que não são regras novas da natureza. A dos nós é a conservação da carga: num fio em regime permanente, a carga não se acumula num ponto. A das malhas é o fato de o campo eletrostático ser conservativo: dar uma volta e voltar ao mesmo ponto não muda o potencial.",
    "A bordo, a rede de 24 V de uma embarcação pequena é o mesmo circuito. Duas lâmpadas em paralelo veem a mesma tensão e puxam correntes diferentes se as resistências forem diferentes. A corrente do gerador é a soma, porque o nó não guarda carga.",
  ],
  construction: [
    "Corrente é carga por tempo. O sentido convencional, fora da fonte, vai do polo positivo para o negativo. Num resistor ôhmico, V = R I. A potência dissipada é P = V I. Com Ohm, isso também é R I² ou V²/R.",
    "Série: um só caminho, a mesma corrente. As resistências se somam e as tensões se somam. Uma fonte de 12 V com 2 Ω e 4 Ω em série tem Req = 6 Ω e I = 2 A. A tensão no de 4 Ω é 8 V. No de 2 Ω, 4 V. A malha fecha: 8 + 4 = 12. A potência no de 4 Ω é 4 × 2² = 16 W. A potência total da fonte é 12 × 2 = 24 W.",
    "Paralelo: os dois resistores ligam os mesmos nós, então a tensão é a mesma. As correntes se somam. 1/Req = 1/R₁ + 1/R₂. Para 6 Ω e 3 Ω, Req = 2 Ω. A fórmula curta, só para dois, é o produto sobre a soma: 18/9 = 2. Somar 6 + 3 é a conta da série.",
    "Na rede de 24 V, lâmpadas de 12 Ω e de 6 Ω em paralelo: a de 6 Ω puxa 24/6 = 4 A, a de 12 Ω puxa 2 A. O nó devolve 6 A à fonte. Três resistores iguais de 6 Ω em paralelo dariam 6/3 = 2 Ω. Em série, 18 Ω.",
    "Nó: a soma das correntes que entram é a soma das que saem. Entram 5 A e um ramo leva 2 A. O outro ramo leva 3 A.",
    "Malha: escolha um sentido de percurso. Ao atravessar um resistor no sentido da corrente, o potencial cai R I. Ao atravessar um gerador do negativo para o positivo, o potencial sobe a fem. A soma em torno da malha é zero. Dois geradores em oposição, 12 V e 6 V, com resistores de 3 Ω e 1 Ω, deixam uma fem líquida de 6 V e uma resistência de 4 Ω. A corrente é 1,5 A, no sentido do gerador de 12 V. Somar as fems daria 4,5 A e descreveria geradores empurrando juntos, que não é o circuito.",
    "Gerador real: a fem ε fica em série com a resistência interna r. A corrente é ε / (r + R). A tensão nos terminais, com a corrente saindo pelo positivo, é ε − r I. Para 12 V, r = 1 Ω e R = 5 Ω, I = 2 A e a tensão terminal é 10 V. Os 12 V apareceriam com o circuito aberto, corrente nula.",
    "Série seguida de paralelo. Fonte de 12 V, resistor de 2 Ω e, adiante, 6 Ω em paralelo com 3 Ω. O paralelo equivale a 2 Ω. O total é 4 Ω e a corrente da fonte é 3 A. A queda nos 2 Ω de série é 6 V, então o paralelo recebe 6 V. A corrente no de 3 Ω é 2 A. No de 6 Ω, 1 A. O nó confirma: 1 + 2 = 3.",
    "Duas malhas compartilhando um resistor. Malha esquerda: gerador de 10 V e resistor de 1 Ω, mais o central de 2 Ω. Malha direita: gerador de 4 V e resistor de 2 Ω, mais o mesmo central. O sentido horário atravessa cada gerador do negativo para o positivo. Com I₁ e I₂ horárias, a corrente no central no sentido de I₁ é I₁ − I₂. As malhas dão 3 I₁ − 2 I₂ = 10 e I₁ − 2 I₂ = −2. Daí I₂ = 4 A e I₁ = 6 A. O resistor de 1 Ω conduz I₁, porque só a malha esquerda passa por ele. O central conduz 2 A.",
  ],
  examples: [
    {
      title: "12 V, 2 Ω e 4 Ω em série",
      steps: [
        "Req = 6 Ω. I = 12/6 = 2 A.",
        "Tensão no de 4 Ω: 8 V. No de 2 Ω: 4 V.",
        "Potência no de 4 Ω: 16 W. A malha soma 12 V.",
      ],
    },
    {
      title: "Malhas de 10 V e de 4 V com resistor central de 2 Ω",
      steps: [
        "3 I₁ − 2 I₂ = 10 e I₁ = 2 I₂ − 2.",
        "3(2 I₂ − 2) − 2 I₂ = 10 dá I₂ = 4 A e I₁ = 6 A.",
        "No resistor de 1 Ω, a corrente é 6 A. No central, 2 A.",
      ],
    },
  ],
  application: [
    "Duas lâmpadas na rede de 24 V não ficam em série se cada uma precisa dos 24 V. Em série, cada uma veria só uma parte da tensão e a corrente seria única. Em paralelo, uma lâmpada queimada, circuito aberto, não apaga a outra. O nó continua mandando a corrente da que sobrou.",
    "A queda num cabo longo é a lei de Ohm no fio, tratado como resistor em série com a carga. A tensão que chega ao equipamento é a da fonte menos R_cabo I. É o mesmo desenho da resistência interna: fem no papel, tensão menor nos terminais quando há corrente.",
    "Dois geradores na mesma barra, um empurrando contra o outro por diferença de tensão, são a malha com fems em oposição. A corrente de circulação não é a soma das duas fems dividida pela resistência. É a diferença.",
  ],
  traps: [
    "Somar resistores em paralelo, ou tirar o produto sobre a soma de resistores em série.",
    "Achar que, em paralelo, as correntes são iguais mesmo com resistências diferentes.",
    "Na malha, somar fems que estão em oposição.",
    "Esquecer a resistência interna e usar a fem como tensão terminal com o circuito carregado.",
    "No resistor compartilhado por duas malhas, usar só I₁ ou só I₂. A corrente do ramo é a diferença, com o sinal do sentido escolhido.",
    "Calcular potência com a tensão da fonte inteira em cima de um resistor que só vê parte dela.",
    "No nó, somar a corrente de entrada com a de uma saída em vez de subtrair.",
  ],
  bibliography: [
    {
      book: "Helou, Gualter e Newton. Tópicos de Física, vol. 3.",
      place: "Capítulos de corrente elétrica, resistores e circuitos: leis de Ohm e de Kirchhoff.",
      note: "Livro desta aula. Desenhe o sentido da corrente antes de escrever a malha. O sinal de cada termo depende desse sentido.",
    },
    {
      book: "Ramalho, Nicolau e Toledo. Os Fundamentos da Física, vol. 3.",
      place: "Capítulos de circuitos elétricos.",
      note: "Segunda bateria, em especial gerador com resistência interna e associação mista.",
    },
    {
      book: "Halliday, Resnick e Walker. Fundamentos de Física.",
      place: "Capítulos de corrente, resistência e circuitos de corrente contínua.",
      note: "Aprofundamento. Vale refazer uma malha com dois geradores a partir da soma das variações de potencial, sem memorizar o formato da equação.",
    },
  ],
};
