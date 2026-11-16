import type { Didactic } from "./types.ts";

export const didactic: Didactic = {
  origin: [
    "Juro composto é uma multiplicação que se repete. Se um valor cresce 10% ao ano, cada ano multiplica por 1,1, e não soma 10% do valor inicial. Depois de n anos o fator é (1,1)ⁿ. A mesma estrutura aparece quando uma colônia dobra a cada intervalo fixo, ou quando uma substância cai à metade a cada meia-vida. A função exponencial é o nome dessa repetição.",
    "A potência com expoente inteiro positivo é só uma multiplicação abreviada. O resto da definição existe para que a regra aˣ aʸ = aˣ⁺ʸ continue valendo quando o expoente deixa de ser inteiro positivo. a⁰ = 1 porque aⁿ / aⁿ = a⁰ e também vale 1. a⁻ⁿ = 1/aⁿ porque aⁿ a⁻ⁿ tem de dar a⁰. A fração no expoente pede a raiz, porque (a^(1/n))ⁿ = a.",
    "A base precisa ser positiva e diferente de 1 para que aˣ fique definida em todo real e seja uma função injetiva. Base negativa quebra em expoentes como 1/2. Base 1 é constante e não distingue expoentes. O número e entra depois, como a base em que a taxa de crescimento instantâneo coincide com o próprio valor da função. Não é obrigatório para esta aula.",
  ],
  construction: [
    "Para a > 0 e a ≠ 1, f(x) = aˣ tem domínio ℝ e imagem (0, +∞). A exponencial nunca zera e nunca fica negativa. O gráfico corta o eixo y em (0, 1), porque a⁰ = 1.",
    "Se a > 1, aumentar o expoente multiplica por um número maior que 1. A função cresce. Se 0 < a < 1, aumentar o expoente multiplica por um número menor que 1. A função decresce. Por isso, em aˣ > aʸ, o sinal entre x e y é o mesmo de a > 1 e o oposto quando a base está entre 0 e 1.",
    "As regras saem da contagem de fatores, e depois se estendem. aˣ aʸ = aˣ⁺ʸ. (aˣ)ʸ = aˣʸ. (ab)ˣ = aˣ bˣ. Nada disso autoriza (a + b)ˣ = aˣ + bˣ. A soma dentro da base não se separa.",
    "Equação exponencial: escreva os dois lados com a mesma base. 4ˣ = 8 vira 2^(2x) = 2³, e os expoentes se igualam porque a função de base 2 é injetiva. 2x = 3 e x = 3/2.",
    "Quando a equação mistura 9ˣ e 3ˣ, use que 9ˣ = (3ˣ)². A troca y = 3ˣ transforma a equação numa quadrática, com y > 0. Cada y positivo devolve um único x, porque a exponencial é injetiva.",
    "Num crescimento que dobra a cada T horas, o número de dobras em um tempo t é t/T, e o fator é 2^(t/T). Não é 2 × (t/T). Doze horas com dobra a cada três horas são quatro multiplicações por 2, fator 16.",
  ],
  examples: [
    {
      title: "(1/2)ˣ > 4",
      steps: [
        "4 = 2² = (1/2)⁻².",
        "A desigualdade fica (1/2)ˣ > (1/2)⁻².",
        "A base está entre 0 e 1, então a função decresce e a desigualdade entre os expoentes vira: x < −2.",
        "x = −3 dá 8 > 4. x = −1 dá 2, que não passa de 4.",
      ],
    },
    {
      title: "9ˣ − 4 · 3ˣ + 3 = 0",
      steps: [
        "9ˣ = (3ˣ)². Chame y = 3ˣ, com y > 0.",
        "y² − 4y + 3 = 0, então (y − 1)(y − 3) = 0.",
        "y = 1 dá 3ˣ = 1 e x = 0. y = 3 dá 3ˣ = 3 e x = 1.",
        "As duas estão no domínio. A soma das soluções é 1.",
      ],
    },
  ],
  application: [
    "Num tanque de água de lastro ou de consumo, uma contagem de bactérias que dobra em intervalo fixo segue 2^(t/T) enquanto houver alimento e espaço. O modelo para quando o meio satura. Saber o fator em 12 h é 16, e não 8, muda a decisão de tratar a água.",
    "Resfriamento de uma máquina e descarga de um capacitor, mais adiante, aproximam-se do equilíbrio por uma exponencial. A temperatura não cai em parcelas iguais de grau a cada minuto. Cai uma fração do que ainda falta. É o mesmo desenho da meia-vida, com outra grandeza.",
    "Custo composto de um estoque ou de um atraso também é exponencial. Somar a taxa várias vezes, em vez de multiplicar o fator, subestima o valor. (1 + r)ⁿ não é 1 + n r, salvo no primeiro instante.",
  ],
  traps: [
    "Tomar a⁰ = 0, ou a⁻ⁿ como um número negativo.",
    "Distribuir o expoente sobre uma soma: (a + b)ˣ não é aˣ + bˣ.",
    "Esquecer de inverter a desigualdade quando a base está entre 0 e 1.",
    "Aceitar base negativa numa função aˣ pedida para todo real.",
    "Contar dobras como produto da taxa pelo tempo, em vez de potência de 2.",
    "Na troca y = 3ˣ, aceitar uma raiz y negativa da quadrática. Exponencial real não devolve negativo.",
  ],
  bibliography: [
    {
      book: "Gelson Iezzi e outros. Fundamentos de Matemática Elementar, vol. 2.",
      place: "Capítulo inicial da função exponencial, antes dos logaritmos.",
      note: "O volume se chama Logaritmos, mas a exponencial vem primeiro, porque o logaritmo é o expoente. Leia essa ordem.",
    },
    {
      book: "Matemática: Ciência e Aplicações, vol. 1.",
      place: "Capítulo de função exponencial.",
      note: "Use para mais equação e inequação depois que as regras do FME estiverem deduzidas.",
    },
    {
      book: "Elon Lages Lima e outros. A Matemática do Ensino Médio, vol. 1. SBM.",
      place: "Capítulo de função exponencial.",
      note: "Aprofunda por que a base tem de ser positiva e como a função se estende dos racionais aos reais, sem ficar na lista de propriedades.",
    },
  ],
};
