import type { Didactic } from "./types.ts";

export const didactic: Didactic = {
  origin: [
    "A trigonometria começa na corda de um círculo, não no triângulo retângulo isolado. Astrônomos gregos precisavam prever a posição de um astro. A corda correspondente a um ângulo central era a medida útil. Seno, mais tarde, é metade dessa corda no círculo de raio 1. Medir a Terra, achar latitude e reduzir um rumo a componentes norte e leste são o mesmo desenho.",
    "O ciclo unitário organiza o que o triângulo retângulo não alcança. O triângulo só enxerga ângulos entre 0° e 90°. O navio guina, o ângulo passa de 90°, o cosseno fica negativo e a componente leste ou norte troca de sentido. Sem o ciclo, o sinal vira decoração. Com o ciclo, o sinal é a coordenada.",
    "O radiano existe porque o comprimento do arco, num círculo de raio 1, é o próprio ângulo. A volta inteira mede 2π, metade mede π, que é 180°. Fórmulas de arco e, mais adiante, derivadas, pedem radiano. A banca mistura os dois sistemas de propósito.",
  ],
  construction: [
    "No ciclo de raio 1, um ângulo θ marcado a partir do eixo x positivo, no sentido anti-horário, cai num ponto (x, y). Define-se cos θ = x e sen θ = y. Como x² + y² = 1, segue sen² θ + cos² θ = 1 para todo θ. Não é uma identidade só dos ângulos notáveis.",
    "A tangente é sen θ / cos θ, desde que cos θ ≠ 0. Em 90° e 270° o ponto está sobre o eixo y, a abscissa é zero e a tangente não existe. tg 45° = 1 porque seno e cosseno são iguais.",
    "Os ângulos notáveis saem de triângulos equilátero e isósceles, colocados no ciclo. sen 30° = 1/2, cos 30° = √3/2, sen 45° = cos 45° = √2/2, sen 60° = √3/2, cos 60° = 1/2. Cosseno de 60° não é √3/2. Quem troca seno e cosseno troca cateto oposto com adjacente.",
    "O sinal vem do quadrante. I: os dois positivos. II: seno positivo, cosseno negativo. III: os dois negativos. IV: seno negativo, cosseno positivo. O ângulo de referência é o agudo entre o lado do ângulo e o eixo x. sen 150° = sen 30° = 1/2. sen 210° = −sen 30° = −1/2. cos 300° = cos 60° = 1/2.",
    "Se só o seno é dado, o cosseno tem dois sinais possíveis, porque cos² θ = 1 − sen² θ. O quadrante escolhe. sen θ = 3/5 no segundo quadrante dá cos θ = −4/5, não +4/5. A tangente, sendo quociente, herda o sinal.",
    "A equação sen x = 1/2, em [0, 2π), tem duas soluções: π/6 no primeiro quadrante e 5π/6 no segundo, onde o seno ainda é positivo. O terceiro quadrante já torna o seno negativo e não serve.",
    "Rumo de navegação não parte do eixo x. O rumo 030 parte do norte e abre 30° para o leste. A componente norte é adjacente a esse ângulo,  d cos 30°. A leste é d sen 30°. Usar o seno na componente norte trata o rumo como se fosse marcado a partir do leste, que é outra convenção.",
  ],
  examples: [
    {
      title: "sen θ = 3/5 no segundo quadrante",
      steps: [
        "cos² θ = 1 − 9/25 = 16/25. Então cos θ = ±4/5.",
        "Segundo quadrante: a abscissa é negativa. cos θ = −4/5.",
        "tg θ = sen/cos = (3/5)/(−4/5) = −3/4.",
        "O módulo 4/5 sem o sinal está errado, mesmo que a identidade tenha sido usada.",
      ],
    },
    {
      title: "10 milhas no rumo 030",
      steps: [
        "030 abre 30° a partir do norte, no sentido do leste.",
        "Norte: 10 cos 30° = 10 × √3/2 = 5√3 milhas.",
        "Leste: 10 sen 30° = 5 milhas.",
        "A hipotenusa continua 10. Pitágoras: (5√3)² + 5² = 75 + 25 = 100.",
      ],
    },
  ],
  application: [
    "Deslocamento, corrente e vento se decompõem em norte e leste o tempo todo. O rumo diz qual ângulo usar e de qual eixo ele parte. Errar seno com cosseno não dá um erro pequeno: troca a componente maior com a menor sempre que o ângulo não é 45°.",
    "Uma força ou uma velocidade já decomposta no ciclo usa a mesma definição. O cosseno negativo num quadrante significa componente contra o eixo escolhido, não um módulo negativo solto. O desenho manda no sinal.",
    "Latitude por observação de astro, no modelo mais simples, também lê um ângulo no ciclo da esfera. Esta aula não faz a redução completa. Faz o pré-requisito: saber em que quadrante o seno ainda é positivo e quando a tangente quebra.",
  ],
  traps: [
    "Trocar sen 60° com cos 60°, ou sen 30° com cos 30°.",
    "Levar o sinal do primeiro quadrante para os outros. sen 210° não é 1/2.",
    "Marcar tg 90° como 1, ou como 0. Não existe.",
    "Resolver sen x = 1/2 com uma solução só, ou incluir o quadrante em que o seno é negativo.",
    "Achar cos θ positivo no segundo quadrante depois de tirar a raiz de cos² θ.",
    "Medir o rumo a partir do leste quando o enunciado diz a partir do norte. As componentes trocam.",
    "Misturar π rad com π graus. π rad é 180°.",
  ],
  bibliography: [
    {
      book: "Gelson Iezzi e outros. Fundamentos de Matemática Elementar, vol. 3.",
      place: "Capítulos do ciclo trigonométrico, redução ao primeiro quadrante e relações fundamentais.",
      note: "Referência desta aula. O volume é o de trigonometria. Faça o ciclo desenhado, com os sinais, antes das equações.",
    },
    {
      book: "Matemática: Ciência e Aplicações, vol. 2.",
      place: "Capítulo de trigonometria no ciclo.",
      note: "Mais exercício de redução de quadrante. A trigonometria completa, com identidades e equações longas, continua na trilha das semanas 13 a 15.",
    },
    {
      book: "Elon Lages Lima e outros. A Matemática do Ensino Médio, vol. 1. SBM.",
      place: "Capítulo de trigonometria, na parte do círculo e das funções seno e cosseno.",
      note: "Aprofunda a definição por coordenada, que é a usada aqui, em vez de decorar a tabela dos notáveis isolada.",
    },
  ],
};
