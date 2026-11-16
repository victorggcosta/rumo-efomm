import type { Didactic } from "./types.ts";

export const didactic: Didactic = {
  origin: [
    "Descartes e Fermat, no século XVII, colocam a geometria num plano com eixos. Um ponto vira um par de números, uma reta vira uma equação, e uma distância vira Pitágoras. A geometria analítica não substitui o desenho. Ela permite calcular o que o desenho só sugere.",
    "A inclinação mede quanto a reta sobe quando anda 1 na horizontal. Entre (0, 0) e (2, 2), m = 1. Retas com a mesma inclinação são paralelas. Se o produto das inclinações é −1, as retas são perpendiculares: subir 2 e andar 1, na perpendicular, é descer 1/2 ao andar 1.",
    "O rumo náutico não é essa inclinação. O rumo parte do norte. Nesta aula, o eixo x é o leste e o eixo y é o norte, quando o problema é uma derrota. O ângulo com o eixo x e o rumo a partir do norte são complementares. Trocar os dois gira a reta.",
  ],
  construction: [
    "Distância entre (x₁, y₁) e (x₂, y₂): √[(x₂ − x₁)² + (y₂ − y₁)²]. De (0, 0) a (3, 4) são 5. O ponto médio faz a média de cada coordenada: de (0, 0) a (4, 6), o meio é (2, 3).",
    "Reta por um ponto, com inclinação m: y − y₀ = m(x − x₀). Por (1, 2) com m = 3: y − 2 = 3(x − 1), ou y = 3x − 1. Duas retas se cruzam quando o par (x, y) serve nas duas. y = x + 1 e y = −x + 5 cruzam em (2, 3).",
    "Paralelas: mesmo m. y = 2x + 1 e y = 2x − 4 são paralelas. Perpendicular a m = 2 tem inclinação −1/2. Na forma ax + by + c = 0, as inclinações saem isolando y. 2x − y + 1 = 0 dá m = 2. x + 2y − 3 = 0 dá m = −1/2. O produto é −1: as retas são perpendiculares.",
    "Distância de um ponto a uma reta. Para ax + by + c = 0 e o ponto (x₀, y₀), a distância é |ax₀ + by₀ + c| / √(a² + b²). Da origem a 3x + 4y − 10 = 0: |−10| / 5 = 2. O denominador é o módulo do vetor (a, b), que é normal à reta.",
    "Uma derrota por (0, 0) e (6, 8) tem equação 4x − 3y = 0. Um escolho em (3, 0) dista |12| / 5 = 12/5 da reta. A distância 3, até a origem, é outro segmento.",
    "Circunferência de centro (a, b) e raio r: (x − a)² + (y − b)² = r². Em (x − 1)² + (y + 2)² = 9, o centro é (1, −2) e o raio é 3, não 9. Na equação geral, complete os quadrados. x² + y² − 4x + 6y − 12 = 0 vira (x − 2)² + (y + 3)² = 25. Centro (2, −3), raio 5. O termo +6y empurra o centro para y = −3.",
    "O ponto da reta mais próximo de um ponto externo é o pé da perpendicular. A reta y = x + 1 tem inclinação 1. A perpendicular pela origem é y = −x. Elas se encontram em (−1/2, 1/2). A origem não está na reta, e (0, 1), embora esteja, não é o pé.",
    "Área de um triângulo com um vértice na origem e os catetos sobre os eixos: metade do produto dos catetos. Vértices (0, 0), (4, 0) e (0, 3) dão área 6.",
  ],
  examples: [
    {
      title: "x² + y² − 4x + 6y − 12 = 0",
      steps: [
        "Passe o 12: x² − 4x + y² + 6y = 12.",
        "Complete: (x − 2)² − 4 + (y + 3)² − 9 = 12.",
        "(x − 2)² + (y + 3)² = 25.",
        "Centro (2, −3) e raio 5.",
      ],
    },
    {
      title: "Escolho em (3, 0) e derrota por (0, 0) e (6, 8)",
      steps: [
        "A reta é 4x − 3y = 0.",
        "Distância: |4 × 3 − 3 × 0| / 5 = 12/5.",
        "3 seria a distância do escolho à origem, ao longo do eixo leste.",
      ],
    },
  ],
  application: [
    "A distância de um perigo à derrota é a distância do ponto à reta, não a distância do perigo ao navio num instante qualquer. Se a derrota é uma reta e o escolho está fora dela, o pé da perpendicular é o ponto de maior aproximação.",
    "Dois trechos de rumo se cruzam como duas retas. Resolver o sistema dá o waypoint. Inclinações cujo produto é −1 descrevem trechos perpendiculares, o que numa carta de eixos leste-norte é um canto reto.",
    "Uma zona de exclusão circular em torno de um ponto é uma circunferência. O raio é a raiz de r². Guardar 9 como se fosse o raio, quando a equação traz 9 do lado direito, erra a zona por um fator 3.",
  ],
  traps: [
    "Trocar o raio com r².",
    "Ler o centro (1, −2) como (1, 2), esquecendo que y + 2 = y − (−2).",
    "Somar coordenadas para achar o ponto médio, em vez de tirar a média.",
    "Usar a distância até a origem no lugar da distância até a reta.",
    "Achar que paralelas têm inclinações de produto −1. Esse produto é o das perpendiculares.",
    "Na equação geral, errar o sinal ao completar o quadrado e inverter o centro.",
    "Medir o ângulo da reta a partir do norte quando os eixos da questão são os eixos cartesianos.",
  ],
  bibliography: [
    {
      book: "Gelson Iezzi e outros. Fundamentos de Matemática Elementar, vol. 7.",
      place: "Capítulos de ponto, reta e circunferência.",
      note: "Referência desta aula. Faça a distância e a inclinação antes da fórmula do ponto à reta. Essa fórmula é Pitágoras aplicado à normal.",
    },
    {
      book: "Matemática: Ciência e Aplicações, vol. 3.",
      place: "Capítulo de geometria analítica.",
      note: "Mais exercício de completar quadrados e de interseção de retas.",
    },
    {
      book: "Elon Lages Lima e outros. A Matemática do Ensino Médio, vol. 3. SBM.",
      place: "Capítulo de geometria analítica plana: distância, equação da reta e circunferência.",
      note: "Aprofunda a leitura geométrica dos coeficientes, em especial a distância de um ponto a uma reta.",
    },
  ],
};
