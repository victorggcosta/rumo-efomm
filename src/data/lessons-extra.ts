import type { ChoiceLetter } from "../types.ts";

const LETTERS: ChoiceLetter[] = ["A", "B", "C", "D", "E"];

function question(
  id: string,
  level: "Básico" | "Prova",
  prompt: string,
  options: [string, string, string, string, string],
  answer: ChoiceLetter,
  explanation: string,
) {
  return {
    id,
    level,
    prompt,
    choices: LETTERS.map((letter, index) => ({ letter, text: options[index] })),
    answer,
    explanation,
  };
}

function cards(topicId: string, pairs: readonly (readonly [string, string])[]) {
  return pairs.map(([front, back], index) => ({ id: `${topicId}-c${index + 1}`, front, back }));
}

export const EXTRA_LESSONS = {
  "mat-conjuntos": {
    topicId: "mat-conjuntos",
    summary: [
      "Um conjunto é uma coleção bem definida. Os numéricos que a prova usa o tempo todo são: naturais (0, 1, 2, 3, …), inteiros (naturais e os negativos), racionais (frações de inteiros, como 1/2 e 0,75), irracionais (não viram fração, como √2 e π) e reais (racionais e irracionais juntos).",
      "Pertinência diz se um elemento está dentro: 2 ∈ {1, 2, 3}. Subconjunto diz se um conjunto inteiro cabe no outro: {1, 2} ⊂ {1, 2, 3}. A união junta, a interseção fica só com o que é comum.",
      "Todo natural é inteiro, todo inteiro é racional, todo racional é real. O caminho inverso não vale: −3 é inteiro e não é natural. √2 é real e não é racional.",
    ],
    examples: [
      {
        title: "União e interseção",
        steps: [
          "A = {1, 2, 3} e B = {3, 4}.",
          "A ∪ B = {1, 2, 3, 4}. O 3 não se repete.",
          "A ∩ B = {3}. Só o elemento que está nos dois.",
          "{1, 2} ⊂ A, porque os dois elementos de {1, 2} estão em A.",
        ],
      },
      {
        title: "Classificar 0,75 e √2",
        steps: [
          "0,75 = 75/100 = 3/4. É fração de inteiros, então é racional.",
          "√2 não é fração de inteiros. É irracional e, portanto, real.",
          "0 é inteiro. Não é positivo, e entra nos naturais quando a lista começa no zero.",
        ],
      },
    ],
    rules: [
      "Naturais ⊂ inteiros ⊂ racionais ⊂ reais. Irracionais são reais fora dos racionais.",
      "União: junta. Interseção: o que é comum.",
      "Subconjunto: todo elemento do primeiro está no segundo.",
      "0,75 e −2/3 são racionais. √2 e π são irracionais.",
      "0 é inteiro. Número negativo não é natural.",
    ],
    questions: [
      question("mat-conjuntos-q1", "Básico", "O número −3 pertence aos", ["naturais", "inteiros", "irracionais apenas", "números que não são reais", "naturais negativos"], "B", "−3 é inteiro. Não é natural, porque os naturais não têm sinal negativo."),
      question("mat-conjuntos-q2", "Básico", "0,75 é um número", ["irracional", "racional", "que não é real", "natural", "igual a √2"], "B", "0,75 = 3/4. Toda fração de inteiros, com denominador diferente de zero, é racional."),
      question("mat-conjuntos-q3", "Básico", "Se A = {1, 2, 3} e B = {3, 4}, a interseção A ∩ B é", ["{1, 2, 3, 4}", "{3}", "{1, 2}", "{4}", "vazia"], "B", "A interseção fica só com quem está nos dois conjuntos. O único elemento comum é 3."),
      question("mat-conjuntos-q4", "Básico", "Qual conjunto está contido em {1, 2, 3}?", ["{1, 4}", "{2}", "{3, 4}", "{0, 1}", "{4}"], "B", "{2} é subconjunto porque 2 está em {1, 2, 3}. Qualquer conjunto com 4 ou 0 já escapa."),
      question("mat-conjuntos-q5", "Prova", "√2 é", ["racional", "inteiro", "irracional", "natural", "igual a 1,5"], "C", "√2 não pode ser escrito como fração de inteiros. É irracional e real. 1,5 seria 3/2, que é racional."),
    ],
    cards: cards("mat-conjuntos", [
      ["Naturais, inteiros, racionais", "0, 1, 2, … depois os negativos, depois as frações."],
      ["Irracional", "Real que não é fração. √2 e π."],
      ["União", "Junta os elementos, sem repetir."],
      ["Interseção", "Só o que está nos dois conjuntos."],
      ["0,75", "Racional, porque é 3/4."],
    ]),
  },
  "fis-algarismos": {
    topicId: "fis-algarismos",
    summary: [
      "Algarismo significativo é o dígito que a medida realmente informa. Zeros à esquerda, só para marcar a vírgula, não contam: 0,045 tem dois significativos, o 4 e o 5. Zeros à direita, depois da vírgula, contam: 3,20 tem três, porque o zero diz a precisão.",
      "Na soma e na subtração, o resultado acompanha a parcela com menos casas decimais. 12,5 + 0,04 dá 12,5, não 12,54, porque 12,5 só conhece a casa dos décimos.",
      "Na multiplicação e na divisão, o resultado fica com a quantidade de significativos do fator mais pobre. 2,5 × 3,0 tem dois significativos em cada fator, então o produto 7,5 fica com dois.",
    ],
    examples: [
      {
        title: "Contar em 0,00340",
        steps: [
          "Os zeros antes do 3 só posicionam a vírgula. Não contam.",
          "Contam o 3, o 4 e o zero final.",
          "0,00340 tem três algarismos significativos.",
        ],
      },
      {
        title: "Somar e multiplicar",
        steps: [
          "12,5 + 0,04 = 12,54 na calculadora. A parcela 12,5 só tem uma casa decimal.",
          "O resultado honesto da soma é 12,5.",
          "2,5 × 3,0 = 7,5. Os dois fatores têm dois significativos, e 7,5 também.",
        ],
      },
    ],
    rules: [
      "Zeros à esquerda não contam. Zeros à direita, depois da vírgula, contam.",
      "Soma e subtração: obedeça a parcela com menos casas decimais.",
      "Multiplicação e divisão: obedeça o fator com menos significativos.",
      "Não encha a resposta com casas que a medida não tinha.",
    ],
    questions: [
      question("fis-algarismos-q1", "Básico", "O número 0,045 tem quantos algarismos significativos?", ["1", "2", "3", "4", "5"], "B", "Os zeros à esquerda não contam. Sobram 4 e 5: dois significativos."),
      question("fis-algarismos-q2", "Básico", "O número 3,20 tem quantos algarismos significativos?", ["1", "2", "3", "4", "0"], "C", "O zero depois da vírgula é medido. 3, 2 e 0: três significativos."),
      question("fis-algarismos-q3", "Básico", "A soma 12,5 + 0,04, com o número certo de casas, é", ["12,54", "12,5", "13", "12,54 0", "0,04"], "B", "12,5 só tem uma casa decimal. A soma se escreve 12,5, não 12,54."),
      question("fis-algarismos-q4", "Básico", "O produto 2,5 × 3,0, com os significativos certos, é", ["7,50", "7,5", "8", "7", "7,500"], "B", "Cada fator tem dois significativos. 2,5 × 3,0 = 7,5, também com dois."),
      question("fis-algarismos-q5", "Prova", "O número 0,00340 tem quantos algarismos significativos?", ["2", "3", "4", "5", "6"], "B", "Ignoram-se os três zeros iniciais. Contam 3, 4 e o zero final: três significativos."),
    ],
    cards: cards("fis-algarismos", [
      ["0,045", "Dois significativos. Zero à esquerda não conta."],
      ["3,20", "Três significativos. O zero final conta."],
      ["Soma", "Siga a parcela com menos casas decimais."],
      ["Multiplicação", "Siga o fator com menos significativos."],
      ["0,00340", "Três significativos: 3, 4 e o zero final."],
    ]),
  },
  "mat-relacoes": {
    topicId: "mat-relacoes",
    summary: [
      "Uma relação junta pares. Em cada par, o primeiro número é a entrada e o segundo é a saída. Função é a relação em que cada entrada tem exatamente uma saída. Se o mesmo x aponta para dois y, não é função.",
      "O domínio é o conjunto dos x que a função aceita. A imagem é o conjunto dos y que realmente saem. Não confunda imagem com o conjunto de todos os números: f(x) = x², nos reais, só produz y maior ou igual a zero.",
      "Para achar f(a), troque x por a e calcule. Se a expressão tem divisão, o denominador não pode ser zero: esse x fica fora do domínio.",
    ],
    examples: [
      {
        title: "f(x) = 2x + 1",
        steps: [
          "Cada x produz um único y. É função.",
          "Domínio: todos os reais. Não há divisão nem raiz que barre um número.",
          "f(2) = 2 × 2 + 1 = 5. A imagem inclui o 5.",
        ],
      },
      {
        title: "O que não é função",
        steps: [
          "Os pares (1, 2) e (1, 5) repetem a entrada 1 com duas saídas.",
          "Isso é relação, e não é função.",
          "f(x) = 1/x aceita todo real, menos o zero. O domínio é ℝ sem o 0.",
        ],
      },
    ],
    rules: [
      "Função: cada x tem um único y.",
      "Domínio: os x permitidos. Imagem: os y que acontecem.",
      "Denominador zero tira o x do domínio.",
      "f(x) = x², nos reais, tem imagem y ≥ 0.",
      "Calcular f(a) é substituir x por a.",
    ],
    questions: [
      question("mat-relacoes-q1", "Básico", "Os pares (1, 2) e (1, 5) formam", ["uma função", "uma relação que não é função", "um domínio vazio", "uma imagem só com o 1", "uma equação do 2º grau"], "B", "A entrada 1 tem duas saídas, 2 e 5. Relação sim, função não."),
      question("mat-relacoes-q2", "Básico", "O domínio de f(x) = 1/x, nos reais, é", ["todos os reais", "só os positivos", "todos os reais, menos o zero", "só o zero", "os inteiros"], "C", "A divisão por zero não existe. Todo real diferente de zero pode entrar."),
      question("mat-relacoes-q3", "Básico", "A imagem de f(x) = x², com x real, é", ["todos os reais", "y ≥ 0", "y ≤ 0", "só o zero", "os ímpares"], "B", "Quadrado de real não fica negativo. A imagem é y maior ou igual a zero."),
      question("mat-relacoes-q4", "Básico", "Se f(x) = x − 4, então f(3) é", ["−1", "1", "7", "12", "−7"], "A", "f(3) = 3 − 4 = −1."),
      question("mat-relacoes-q5", "Prova", "Uma função do 1º grau passa por (0, 1) e (2, 5). O valor f(3) é", ["6", "7", "8", "4", "3"], "B", "A taxa é (5 − 1)/(2 − 0) = 2. Como f(0) = 1, f(x) = 2x + 1. f(3) = 6 + 1 = 7."),
    ],
    cards: cards("mat-relacoes", [
      ["Função", "Cada x tem um único y."],
      ["Domínio", "Os x que a função aceita."],
      ["Imagem", "Os y que realmente saem."],
      ["1/x", "Domínio: todos os reais, menos o zero."],
      ["x²", "Imagem, nos reais: y ≥ 0."],
    ]),
  },
  "mat-afim": {
    topicId: "mat-afim",
    summary: [
      "Função afim tem a forma f(x) = ax + b, com a diferente de zero. O gráfico é uma reta. O a é a taxa: quanto y sobe quando x anda 1. O b é o valor em que a reta corta o eixo y, porque f(0) = b.",
      "Se a é positivo, a reta sobe. Se a é negativo, a reta desce. A raiz é o x que torna f(x) = 0: x = −b/a. É onde a reta corta o eixo x.",
      "Dois pontos determinam a reta. A taxa é a diferença dos y dividida pela diferença dos x.",
    ],
    examples: [
      {
        title: "f(x) = 2x − 4",
        steps: [
          "a = 2, positivo: a reta sobe. b = −4, então f(0) = −4.",
          "Raiz: 2x − 4 = 0, 2x = 4, x = 2.",
          "f(3) = 6 − 4 = 2.",
        ],
      },
      {
        title: "Reta por (0, 1) e (2, 5)",
        steps: [
          "Taxa: (5 − 1)/(2 − 0) = 2.",
          "O ponto (0, 1) entrega b = 1.",
          "f(x) = 2x + 1. f(3) = 7.",
        ],
      },
    ],
    rules: [
      "f(x) = ax + b. a é a taxa, b é o corte no eixo y.",
      "a > 0: crescente. a < 0: decrescente.",
      "Raiz: x = −b/a.",
      "f(0) = b.",
      "Entre dois pontos, a taxa é Δy/Δx.",
    ],
    questions: [
      question("mat-afim-q1", "Básico", "Se f(x) = 3x − 1, então f(2) é", ["3", "5", "7", "4", "2"], "B", "f(2) = 3 × 2 − 1 = 5."),
      question("mat-afim-q2", "Básico", "A função f(x) = −2x + 5 é", ["crescente", "decrescente", "constante", "uma parábola", "sem raiz"], "B", "O coeficiente de x é −2, negativo. A reta desce. A raiz existe: x = 5/2."),
      question("mat-afim-q3", "Básico", "A raiz de f(x) = 2x − 6 é", ["6", "2", "3", "−3", "12"], "C", "2x − 6 = 0, x = 3. Também x = −b/a = 6/2 = 3."),
      question("mat-afim-q4", "Básico", "Em f(x) = −x + 5, o corte com o eixo y é", ["−1", "5", "0", "−5", "1"], "B", "f(0) = 5. O b da forma ax + b é o corte no eixo y."),
      question("mat-afim-q5", "Prova", "A reta passa por (0, 1) e (2, 5). f(3) vale", ["6", "7", "8", "4", "9"], "B", "Taxa (5 − 1)/2 = 2 e b = 1. f(x) = 2x + 1. f(3) = 7."),
    ],
    cards: cards("mat-afim", [
      ["f(x) = ax + b", "Reta. a é a taxa, b é o corte no eixo y."],
      ["a > 0", "A reta sobe."],
      ["a < 0", "A reta desce."],
      ["Raiz", "x = −b/a."],
      ["Dois pontos", "Taxa = Δy/Δx."],
    ]),
  },
  "mat-quadratica": {
    topicId: "mat-quadratica",
    summary: [
      "Função quadrática tem a forma f(x) = ax² + bx + c, com a diferente de zero. O gráfico é uma parábola. Se a é positivo, a parábola abre para cima e tem um ponto de mínimo. Se a é negativo, abre para baixo e tem um ponto de máximo.",
      "O x do vértice é −b/(2a). O y do vértice é f nesse x: é o máximo ou o mínimo. O c é o corte no eixo y, porque f(0) = c. As raízes, quando existem, são as mesmas da equação ax² + bx + c = 0.",
    ],
    examples: [
      {
        title: "f(x) = x² − 4x + 3",
        steps: [
          "a = 1, positivo: mínimo. x do vértice = 4/(2 × 1) = 2.",
          "f(2) = 4 − 8 + 3 = −1. O mínimo é −1.",
          "Raízes: (x − 1)(x − 3) = 0, então x = 1 ou x = 3.",
          "f(0) = 3. A parábola corta o eixo y em 3.",
        ],
      },
      {
        title: "Máximo de f(x) = −x² + 4x",
        steps: [
          "a = −1, então há máximo. x do vértice = −4/(2 × −1) = 2.",
          "f(2) = −4 + 8 = 4.",
          "O valor máximo é 4.",
        ],
      },
    ],
    rules: [
      "a > 0: parábola para cima, mínimo. a < 0: para baixo, máximo.",
      "x do vértice = −b/(2a).",
      "y do vértice = f(−b/(2a)). É o máximo ou o mínimo.",
      "f(0) = c. É o corte no eixo y.",
      "Raiz da função é raiz da equação ax² + bx + c = 0.",
    ],
    questions: [
      question("mat-quadratica-q1", "Básico", "Se a > 0 em f(x) = ax² + bx + c, a parábola", ["abre para baixo", "abre para cima", "é uma reta", "não tem vértice", "corta o eixo y em a"], "B", "Coeficiente do x² positivo: a parábola abre para cima e o vértice é um mínimo."),
      question("mat-quadratica-q2", "Básico", "O x do vértice de f(x) = x² − 6x + 5 é", ["6", "3", "−3", "5", "1"], "B", "x = −b/(2a) = 6/(2 × 1) = 3."),
      question("mat-quadratica-q3", "Básico", "As raízes de f(x) = x² − 5x + 6 são", ["1 e 6", "−2 e −3", "2 e 3", "5 e 6", "0 e 6"], "C", "Δ = 25 − 24 = 1. x = (5 ± 1)/2, logo 3 e 2."),
      question("mat-quadratica-q4", "Prova", "O valor máximo de f(x) = −x² + 4x é", ["2", "4", "0", "−4", "8"], "B", "a é negativo, há máximo. x = 4/2 = 2. f(2) = −4 + 8 = 4."),
      question("mat-quadratica-q5", "Prova", "Em f(x) = 2x² − x + 7, o corte com o eixo y é", ["2", "−1", "7", "0", "14"], "C", "f(0) = c = 7. O corte no eixo y é o termo independente."),
    ],
    cards: cards("mat-quadratica", [
      ["a > 0", "Parábola para cima. O vértice é mínimo."],
      ["a < 0", "Parábola para baixo. O vértice é máximo."],
      ["x do vértice", "−b/(2a)."],
      ["f(0)", "Igual a c. Corte no eixo y."],
      ["−x² + 4x", "Máximo 4, no x = 2."],
    ]),
  },
  "mat-modular": {
    topicId: "mat-modular",
    summary: [
      "O módulo de um número é a distância dele até o zero. É sempre zero ou positivo. |5| = 5 e |−5| = 5. Se o número já é positivo ou zero, o módulo não muda. Se é negativo, o módulo troca o sinal.",
      "A equação |x| = a, com a positivo, tem duas soluções: x = a e x = −a. Se a é zero, só x = 0. Se a é negativo, não há solução, porque distância não é negativa.",
      "|x − 1| = 4 significa que x − 1 vale 4 ou −4. |x| < 2 significa que x está entre −2 e 2, sem incluir os extremos quando o sinal é só <.",
    ],
    examples: [
      {
        title: "Resolver |x − 1| = 4",
        steps: [
          "O que está dentro do módulo vale 4 ou −4.",
          "x − 1 = 4 dá x = 5.",
          "x − 1 = −4 dá x = −3.",
          "Confira: |5 − 1| = 4 e |−3 − 1| = 4.",
        ],
      },
      {
        title: "Ler |x| ≤ 3",
        steps: [
          "A distância até zero é no máximo 3.",
          "x vai de −3 até 3, incluindo as pontas.",
          "Se fosse |x| < 3, as pontas −3 e 3 ficariam de fora.",
        ],
      },
    ],
    rules: [
      "|x| é a distância de x até zero. Nunca é negativo.",
      "|x| = a, com a > 0: x = a ou x = −a.",
      "|x| = 0: só x = 0. |x| = negativo: sem solução.",
      "|x| ≤ a: −a ≤ x ≤ a.",
      "|x − k| = a: x − k = a ou x − k = −a.",
    ],
    questions: [
      question("mat-modular-q1", "Básico", "O valor de |−5| é", ["−5", "5", "0", "10", "1/5"], "B", "Módulo é distância até zero. |−5| = 5."),
      question("mat-modular-q2", "Básico", "As soluções de |x| = 4 são", ["só 4", "4 e −4", "só −4", "0 e 4", "16"], "B", "Os dois números a distância 4 do zero são 4 e −4."),
      question("mat-modular-q3", "Básico", "As soluções de |x − 2| = 5 são", ["7 e −3", "5 e 2", "3 e −7", "7 e 3", "2 e 5"], "A", "x − 2 = 5 dá x = 7. x − 2 = −5 dá x = −3."),
      question("mat-modular-q4", "Básico", "A inequação |x| ≤ 3 descreve", ["x ≥ 3", "x ≤ −3", "−3 ≤ x ≤ 3", "x > 3 ou x < −3", "só x = 3"], "C", "Distância até zero no máximo 3: de −3 até 3, com as pontas."),
      question("mat-modular-q5", "Prova", "A solução de |x| + 1 = 1 é", ["x = 1 ou x = −1", "x = 0", "não existe", "x = 2", "x = −2"], "B", "|x| + 1 = 1 implica |x| = 0. A única solução é x = 0."),
    ],
    cards: cards("mat-modular", [
      ["|−5|", "5. Distância até zero."],
      ["|x| = 4", "x = 4 ou x = −4."],
      ["|x| = negativo", "Sem solução."],
      ["|x| ≤ 3", "−3 ≤ x ≤ 3."],
      ["|x − 2| = 5", "x = 7 ou x = −3."],
    ]),
  },
  "fis-velocidade": {
    topicId: "fis-velocidade",
    summary: [
      "Velocidade média é a variação de posição dividida pelo tempo gasto: vm = Δs/Δt. Não é a velocidade de um instante só. Se o móvel vai e volta, o deslocamento pode ser menor do que o caminho percorrido.",
      "A unidade no SI é m/s. Em km/h, divida por 3,6 para chegar em m/s. Não faça a média aritmética de duas velocidades quando os trechos têm o mesmo comprimento e tempos diferentes: some os deslocamentos e divida pelo tempo total.",
    ],
    examples: [
      {
        title: "100 m em 20 s",
        steps: [
          "Δs = 100 m e Δt = 20 s.",
          "vm = 100/20 = 5 m/s.",
          "Em km/h: 5 × 3,6 = 18 km/h.",
        ],
      },
      {
        title: "20 km a 40 km/h e 20 km a 60 km/h",
        steps: [
          "Deslocamento total: 40 km.",
          "Tempo do primeiro trecho: 20/40 = 0,5 h. Do segundo: 20/60 = 1/3 h.",
          "Tempo total: 0,5 + 0,333… = 5/6 h.",
          "vm = 40 / (5/6) = 48 km/h. Não é 50.",
        ],
      },
    ],
    rules: [
      "vm = Δs/Δt.",
      "SI: m/s. km/h para m/s: divida por 3,6.",
      "Trechos iguais em distância: some os tempos, não faça a média das velocidades.",
      "Deslocamento e caminho só coincidem quando não há volta nem desvio.",
    ],
    questions: [
      question("fis-velocidade-q1", "Básico", "Um móvel percorre 100 m em 20 s. A velocidade média é", ["2 m/s", "5 m/s", "20 m/s", "50 m/s", "0,2 m/s"], "B", "vm = 100/20 = 5 m/s."),
      question("fis-velocidade-q2", "Básico", "120 km em 2 h correspondem a", ["60 km/h", "240 km/h", "30 km/h", "12 km/h", "90 km/h"], "A", "vm = 120/2 = 60 km/h."),
      question("fis-velocidade-q3", "Prova", "20 km a 40 km/h e mais 20 km a 60 km/h. A velocidade média é", ["50 km/h", "48 km/h", "100 km/h", "45 km/h", "36 km/h"], "B", "São 40 km no total. Os tempos são 0,5 h e 1/3 h, soma 5/6 h. 40 / (5/6) = 48 km/h."),
      question("fis-velocidade-q4", "Básico", "15 m/s equivalem a", ["4,2 km/h", "54 km/h", "15 km/h", "36 km/h", "150 km/h"], "B", "De m/s para km/h, multiplique por 3,6: 15 × 3,6 = 54 km/h."),
      question("fis-velocidade-q5", "Prova", "Um carro anda 18 km em 20 min. A velocidade média é", ["18 km/h", "36 km/h", "54 km/h", "90 km/h", "20 km/h"], "C", "20 min = 1/3 h. vm = 18 / (1/3) = 54 km/h."),
    ],
    cards: cards("fis-velocidade", [
      ["vm", "Δs/Δt."],
      ["km/h → m/s", "Divida por 3,6."],
      ["Dois trechos iguais", "Some os tempos. Não tire a média das velocidades."],
      ["20 km a 40 e 20 km a 60", "A média é 48 km/h, não 50."],
      ["18 km em 20 min", "54 km/h."],
    ]),
  },
  "fis-aceleracao": {
    topicId: "fis-aceleracao",
    summary: [
      "Aceleração mede a rapidez com que a velocidade muda: a = Δv/Δt. No SI a unidade é m/s². Aceleração positiva, no eixo que você escolheu, aumenta a velocidade nesse sentido. Aceleração negativa diminui essa velocidade, ou aponta para o outro lado.",
      "Se a aceleração é zero, a velocidade não muda. É o movimento uniforme. Não confunda aceleração com velocidade: um corpo pode estar rápido e, ainda assim, com aceleração zero.",
    ],
    examples: [
      {
        title: "De 0 a 20 m/s em 5 s",
        steps: [
          "Δv = 20 − 0 = 20 m/s. Δt = 5 s.",
          "a = 20/5 = 4 m/s².",
        ],
      },
      {
        title: "De 72 km/h até o repouso? Não: de 0 a 72 km/h em 10 s",
        steps: [
          "72 km/h = 72/3,6 = 20 m/s.",
          "Parte do repouso: Δv = 20 m/s em 10 s.",
          "a = 20/10 = 2 m/s².",
        ],
      },
    ],
    rules: [
      "a = Δv/Δt. Unidade no SI: m/s².",
      "a = 0: a velocidade fica constante.",
      "Frear é aceleração com sinal oposto ao da velocidade.",
      "Converta km/h para m/s antes de dividir por segundos.",
    ],
    questions: [
      question("fis-aceleracao-q1", "Básico", "A velocidade passa de 10 m/s para 30 m/s em 4 s. A aceleração é", ["5 m/s²", "4 m/s²", "20 m/s²", "8 m/s²", "2 m/s²"], "A", "Δv = 20 m/s. a = 20/4 = 5 m/s²."),
      question("fis-aceleracao-q2", "Básico", "A unidade de aceleração no SI é", ["m/s", "km/h", "m/s²", "s", "N"], "C", "Velocidade por tempo: metro por segundo, por segundo. m/s²."),
      question("fis-aceleracao-q3", "Básico", "Um móvel vai de 20 m/s a 0 em 4 s. A aceleração é", ["5 m/s²", "−5 m/s²", "80 m/s²", "0", "4 m/s²"], "B", "Δv = 0 − 20 = −20. a = −20/4 = −5 m/s². O sinal mostra a freada."),
      question("fis-aceleracao-q4", "Básico", "Se a aceleração é zero, a velocidade", ["é zero", "permanece constante", "dobra a cada segundo", "é sempre 10 m/s", "não existe"], "B", "Sem mudança de velocidade, o valor que ela já tem continua igual."),
      question("fis-aceleracao-q5", "Prova", "Um carro parte do repouso e chega a 72 km/h em 10 s. A aceleração é", ["7,2 m/s²", "2 m/s²", "3,6 m/s²", "20 m/s²", "72 m/s²"], "B", "72 km/h = 20 m/s. a = 20/10 = 2 m/s²."),
    ],
    cards: cards("fis-aceleracao", [
      ["a", "Δv/Δt."],
      ["Unidade", "m/s²."],
      ["a = 0", "Velocidade constante."],
      ["72 km/h", "20 m/s. Divida por 3,6."],
      ["De 0 a 20 m/s em 10 s", "Aceleração de 2 m/s²."],
    ]),
  },
  "fis-mu": {
    topicId: "fis-mu",
    summary: [
      "No movimento uniforme a velocidade é constante e a aceleração é zero. A posição cresce em linha reta no gráfico e obedece s = s₀ + vt. Se a contagem começa na origem e s₀ = 0, fica s = vt.",
      "O tempo para um percurso é t = Δs/v. O gráfico de s por t é uma reta, e a inclinação dessa reta é a velocidade. O gráfico de v por t é uma reta horizontal.",
    ],
    examples: [
      {
        title: "s₀ = 10 m, v = 2 m/s, t = 5 s",
        steps: [
          "s = 10 + 2 × 5.",
          "s = 20 m.",
        ],
      },
      {
        title: "100 m a 25 m/s",
        steps: [
          "Parte da origem: t = Δs/v = 100/25.",
          "t = 4 s.",
        ],
      },
    ],
    rules: [
      "MU: velocidade constante, aceleração zero.",
      "s = s₀ + vt.",
      "t = Δs/v, se v não é zero.",
      "Gráfico s × t: reta. A inclinação é v.",
      "Gráfico v × t: reta horizontal.",
    ],
    questions: [
      question("fis-mu-q1", "Básico", "Com s₀ = 0 e v = 5 m/s, a posição em t = 8 s é", ["13 m", "40 m", "1,6 m", "5 m", "8 m"], "B", "s = vt = 5 × 8 = 40 m."),
      question("fis-mu-q2", "Básico", "O tempo para percorrer 100 m a 25 m/s, partindo da origem, é", ["4 s", "2,5 s", "125 s", "75 s", "10 s"], "A", "t = 100/25 = 4 s."),
      question("fis-mu-q3", "Básico", "No MU, o gráfico de s por t é", ["uma parábola", "uma reta", "uma reta horizontal só se v = 0", "um ponto", "sempre vertical"], "B", "Posição proporcional ao tempo desenha uma reta. A reta é horizontal apenas se a velocidade for zero."),
      question("fis-mu-q4", "Prova", "A posição é 20 m em t = 2 s e 50 m em t = 8 s. A velocidade constante é", ["5 m/s", "6 m/s", "3,75 m/s", "30 m/s", "10 m/s"], "A", "Δs = 30 m e Δt = 6 s. v = 30/6 = 5 m/s."),
      question("fis-mu-q5", "Prova", "Um carro a 20 m/s, em movimento uniforme, percorre em 30 s", ["50 m", "600 m", "1,5 m", "150 m", "6000 m"], "B", "s = vt = 20 × 30 = 600 m."),
    ],
    cards: cards("fis-mu", [
      ["MU", "Velocidade constante. Aceleração zero."],
      ["s", "s₀ + vt."],
      ["t", "Δs/v."],
      ["Gráfico s × t", "Reta. A inclinação é a velocidade."],
      ["20 m/s por 30 s", "600 m."],
    ]),
  },
  "fis-muv": {
    topicId: "fis-muv",
    summary: [
      "No movimento uniformemente variado a aceleração é constante e diferente de zero. A velocidade muda em parcelas iguais a cada segundo: v = v₀ + at. A posição, partindo de s₀, é s = s₀ + v₀t + at²/2.",
      "Quando o tempo não aparece, use Torricelli: v² = v₀² + 2aΔs. Serve para achar a velocidade depois de um percurso, ou o percurso até uma velocidade, sem precisar do relógio.",
    ],
    examples: [
      {
        title: "Parte do repouso com a = 2 m/s², durante 3 s",
        steps: [
          "v = 0 + 2 × 3 = 6 m/s.",
          "s = 0 + 0 + (2 × 9)/2 = 9 m.",
          "Confira com Torricelli: v² = 0 + 2 × 2 × 9 = 36, e v = 6 m/s.",
        ],
      },
      {
        title: "v₀ = 10 m/s e a = −2 m/s², durante 3 s",
        steps: [
          "v = 10 + (−2) × 3 = 4 m/s.",
          "A velocidade diminuiu, mas o móvel ainda segue em frente.",
        ],
      },
    ],
    rules: [
      "v = v₀ + at.",
      "s = s₀ + v₀t + at²/2.",
      "v² = v₀² + 2aΔs.",
      "a constante e diferente de zero: isso é o MUV.",
      "Partindo do repouso, v₀ = 0 e as fórmulas encolhem.",
    ],
    questions: [
      question("fis-muv-q1", "Básico", "Parte do repouso com a = 4 m/s². A velocidade em t = 5 s é", ["9 m/s", "20 m/s", "4 m/s", "1,25 m/s", "80 m/s"], "B", "v = at = 4 × 5 = 20 m/s."),
      question("fis-muv-q2", "Básico", "Parte do repouso com a = 2 m/s². A posição em t = 4 s é", ["8 m", "16 m", "32 m", "4 m", "2 m"], "B", "s = at²/2 = (2 × 16)/2 = 16 m."),
      question("fis-muv-q3", "Prova", "v₀ = 0, a = 2 m/s² e Δs = 9 m. A velocidade ao fim do percurso é", ["3 m/s", "6 m/s", "9 m/s", "18 m/s", "36 m/s"], "B", "v² = 2aΔs = 2 × 2 × 9 = 36. v = 6 m/s."),
      question("fis-muv-q4", "Básico", "v₀ = 10 m/s e a = −2 m/s². A velocidade em t = 3 s é", ["16 m/s", "4 m/s", "−6 m/s", "10 m/s", "8 m/s"], "B", "v = 10 − 2 × 3 = 4 m/s."),
      question("fis-muv-q5", "Prova", "A equação v = v₀ + at descreve", ["só o movimento uniforme", "a velocidade no MUV", "a posição no MU", "a massa", "o gráfico de s por t, sempre"], "B", "Com aceleração constante, a velocidade muda em linha reta com o tempo: v = v₀ + at."),
    ],
    cards: cards("fis-muv", [
      ["v", "v₀ + at."],
      ["s", "s₀ + v₀t + at²/2."],
      ["Torricelli", "v² = v₀² + 2aΔs."],
      ["Repouso e a = 2, t = 3", "v = 6 m/s e s = 9 m."],
      ["MUV", "Aceleração constante e diferente de zero."],
    ]),
  },
  "fis-graficos": {
    topicId: "fis-graficos",
    summary: [
      "No gráfico de posição por tempo, a inclinação é a velocidade. Reta inclinada: velocidade constante. Reta horizontal: parado. Curva: a velocidade está mudando.",
      "No gráfico de velocidade por tempo, a inclinação é a aceleração. Reta horizontal: aceleração zero, movimento uniforme. Reta inclinada: MUV. A área entre a linha e o eixo do tempo é o deslocamento.",
    ],
    examples: [
      {
        title: "Reta de s × t de (0, 0) a (4 s, 20 m)",
        steps: [
          "A inclinação é Δs/Δt = 20/4.",
          "v = 5 m/s. É um MU.",
        ],
      },
      {
        title: "Retângulo no gráfico v × t",
        steps: [
          "Velocidade constante de 5 m/s durante 4 s.",
          "A área do retângulo é 5 × 4 = 20.",
          "O deslocamento é 20 m.",
        ],
      },
    ],
    rules: [
      "Inclinação de s × t = velocidade.",
      "Inclinação de v × t = aceleração.",
      "Área de v × t = deslocamento.",
      "v × t horizontal: aceleração zero.",
      "Triângulo sob uma reta que sai de zero: área = base × altura / 2.",
    ],
    questions: [
      question("fis-graficos-q1", "Básico", "Um gráfico de v por t horizontal significa", ["aceleração constante e diferente de zero", "velocidade constante e aceleração zero", "queda livre", "posição zero", "tempo parado"], "B", "A velocidade não muda. A inclinação é zero, então a aceleração é zero."),
      question("fis-graficos-q2", "Básico", "No gráfico v × t, um retângulo de 5 m/s por 4 s tem área", ["9 m", "20 m", "1,25 m", "80 m", "5 m"], "B", "A área é o deslocamento: 5 × 4 = 20 m."),
      question("fis-graficos-q3", "Básico", "A reta de s × t vai de (0, 0) a (4 s, 20 m). A velocidade é", ["4 m/s", "5 m/s", "20 m/s", "80 m/s", "0,2 m/s"], "B", "Inclinação = 20/4 = 5 m/s."),
      question("fis-graficos-q4", "Prova", "A velocidade sobe de 0 a 10 m/s em 5 s, em linha reta no gráfico v × t. A aceleração é", ["2 m/s²", "10 m/s²", "50 m/s²", "0,5 m/s²", "15 m/s²"], "A", "Inclinação = Δv/Δt = 10/5 = 2 m/s²."),
      question("fis-graficos-q5", "Prova", "Um triângulo no gráfico v × t sobe de 0 a 10 m/s em 4 s. O deslocamento é", ["40 m", "20 m", "10 m", "14 m", "2,5 m"], "B", "Área do triângulo = base × altura / 2 = 4 × 10 / 2 = 20 m."),
    ],
    cards: cards("fis-graficos", [
      ["Inclinação de s × t", "Velocidade."],
      ["Inclinação de v × t", "Aceleração."],
      ["Área de v × t", "Deslocamento."],
      ["v × t horizontal", "Aceleração zero."],
      ["Triângulo 0 a 10 m/s em 4 s", "Deslocamento de 20 m."],
    ]),
  },
  "fis-queda": {
    topicId: "fis-queda",
    summary: [
      "Na queda livre deste nível, o corpo parte do repouso e a aceleração é a da gravidade, para baixo. Use g = 10 m/s² nas contas, a menos que o enunciado peça 9,8. A resistência do ar fica de fora.",
      "As fórmulas são as do MUV com v₀ = 0 e a = g. A velocidade depois de um tempo t é v = gt. A altura descida é h = gt²/2. Para achar o tempo de uma altura, isole t: t = √(2h/g).",
    ],
    examples: [
      {
        title: "Queda de 2 s, com g = 10 m/s²",
        steps: [
          "v = 10 × 2 = 20 m/s.",
          "h = 10 × 4 / 2 = 20 m.",
        ],
      },
      {
        title: "Cair 80 m",
        steps: [
          "80 = 10 t² / 2, então 80 = 5 t².",
          "t² = 16 e t = 4 s. O tempo negativo não serve.",
          "A velocidade ao chegar: v = 10 × 4 = 40 m/s.",
        ],
      },
    ],
    rules: [
      "Neste nível, g = 10 m/s², para baixo, a partir do repouso.",
      "v = gt.",
      "h = gt²/2.",
      "t = √(2h/g).",
      "A aceleração não muda durante a queda. A velocidade muda.",
    ],
    questions: [
      question("fis-queda-q1", "Básico", "Um corpo cai do repouso durante 2 s, com g = 10 m/s². A velocidade é", ["10 m/s", "20 m/s", "5 m/s", "40 m/s", "2 m/s"], "B", "v = gt = 10 × 2 = 20 m/s."),
      question("fis-queda-q2", "Básico", "Na mesma queda de 2 s, a altura descida é", ["10 m", "20 m", "40 m", "5 m", "2 m"], "B", "h = gt²/2 = 10 × 4 / 2 = 20 m."),
      question("fis-queda-q3", "Prova", "O tempo para cair 80 m, do repouso e com g = 10 m/s², é", ["2 s", "4 s", "8 s", "16 s", "5 s"], "B", "80 = 5 t², t² = 16, t = 4 s."),
      question("fis-queda-q4", "Básico", "Durante a queda livre, a aceleração", ["é zero", "aumenta junto com a velocidade", "permanece igual a g", "aponta para cima", "depende da massa, neste modelo"], "C", "No modelo sem ar, a aceleração é g o tempo todo. A velocidade é que aumenta."),
      question("fis-queda-q5", "Prova", "Depois de 3 s de queda, a partir do repouso e com g = 10 m/s², a altura descida é", ["30 m", "45 m", "15 m", "90 m", "3 m"], "B", "h = gt²/2 = 10 × 9 / 2 = 45 m. A velocidade nesse instante seria 30 m/s, que é outra conta."),
    ],
    cards: cards("fis-queda", [
      ["g neste nível", "10 m/s², para baixo."],
      ["v", "gt, partindo do repouso."],
      ["h", "gt²/2."],
      ["80 m", "4 s de queda."],
      ["3 s de queda", "45 m e 30 m/s."],
    ]),
  },
};
