import { RIGOR_STUBS } from "./aulas/stubs.ts";
import { RIGOR_TOPICS } from "./questoes/registry.ts";
import { EXTRA_LESSONS } from "./lessons-extra.ts";
import { TRAIL } from "./topics.ts";
import type { ChoiceLetter } from "../types.ts";

export type LessonLevel = "Básico" | "Prova";
export type QuestionLevel = 1 | 2 | 3 | LessonLevel;

export type QuizQuestion = {
  id: string;
  level: QuestionLevel;
  prompt: string;
  choices: { letter: ChoiceLetter; text: string }[];
  answer: ChoiceLetter;
  /** Fecho curto da resolução. */
  explanation: string;
  /** Resolução comentada, na ordem em que o raciocínio deve andar. */
  steps?: string[];
};

export function levelRank(level: QuestionLevel): 1 | 2 | 3 {
  if (level === 1 || level === 2 || level === 3) return level;
  return level === "Prova" ? 2 : 1;
}

export function levelLabel(level: QuestionLevel): string {
  if (level === 1) return "Nível 1 · Fixação conceitual";
  if (level === 2) return "Nível 2 · Pré-EFOMM / EsPCEx";
  if (level === 3) return "Nível 3 · EFOMM / AFA / Escola Naval";
  return level;
}

export type Flashcard = {
  id: string;
  front: string;
  back: string;
};

export type Lesson = {
  topicId: string;
  summary: string[];
  examples: { title: string; steps: string[] }[];
  rules: string[];
  questions: QuizQuestion[];
  cards: Flashcard[];
};

const LETTERS: ChoiceLetter[] = ["A", "B", "C", "D", "E"];

function question(
  id: string,
  level: LessonLevel,
  prompt: string,
  options: [string, string, string, string, string],
  answer: ChoiceLetter,
  explanation: string,
): QuizQuestion {
  return {
    id,
    level,
    prompt,
    choices: LETTERS.map((letter, index) => ({ letter, text: options[index] })),
    answer,
    explanation,
  };
}

function cards(topicId: string, pairs: readonly (readonly [string, string])[]): Flashcard[] {
  return pairs.map(([front, back], index) => ({ id: `${topicId}-c${index + 1}`, front, back }));
}

const CORE_LESSONS: Record<string, Lesson> = {
  "mat-fracoes": {
    topicId: "mat-fracoes",
    summary: [
      "Os inteiros são os números de contagem, o zero e os negativos: …, −2, −1, 0, 1, 2, …. A ordem das operações é parênteses, potências, multiplicação e divisão, e por último soma e subtração. −4 + 7 × 2 não é (−4 + 7) × 2. Primeiro vem 7 × 2 = 14, depois −4 + 14 = 10.",
      "Uma fração indica partes de um inteiro dividido em pedaços iguais. Em 3/4, o 3 é o numerador (quantas partes você toma) e o 4 é o denominador (em quantas partes o inteiro foi cortado). O denominador nunca pode ser zero.",
      "Frações equivalentes valem a mesma quantidade. 1/2, 2/4 e 50/100 são a mesma porção. Para obter uma equivalente, multiplique ou divida o numerador e o denominador pelo mesmo número.",
      "Somar ou subtrair só é direto quando o denominador é o mesmo. Se forem diferentes, reescreva com um denominador comum e some os numeradores. Multiplicar é direto: numerador com numerador, denominador com denominador. Dividir é multiplicar pelo inverso.",
      "O número decimal é outra escrita da mesma ideia. A vírgula separa a parte inteira da parte menor que 1. 0,5 é 5/10, ou seja, 1/2. 0,75 é 75/100, ou seja, 3/4. Para passar de fração a decimal, divida o numerador pelo denominador.",
    ],
    examples: [
      {
        title: "Somar 3/4 + 1/6",
        steps: [
          "Os denominadores são 4 e 6. O menor múltiplo comum é 12.",
          "3/4 = 9/12, porque 4 × 3 = 12 e 3 × 3 = 9.",
          "1/6 = 2/12, porque 6 × 2 = 12 e 1 × 2 = 2.",
          "9/12 + 2/12 = 11/12. Não dá para simplificar.",
        ],
      },
      {
        title: "Ligar fração e decimal",
        steps: [
          "3/4: divida 3 por 4. O resultado é 0,75.",
          "No caminho inverso, 0,75 = 75/100. Divida os dois por 25: 3/4.",
          "Uma conta com vírgula: 1,2 × 0,5. Primeiro, 12 × 5 = 60.",
          "Há uma casa em 1,2 e uma casa em 0,5, duas no total. 60 vira 0,60, que é 0,6.",
        ],
      },
    ],
    rules: [
      "Denominador nunca é zero.",
      "Equivalente: multiplique ou divida cima e baixo pelo mesmo número.",
      "Soma e subtração: iguale os denominadores e opere os numeradores.",
      "Multiplicação: a/b × c/d = (a×c)/(b×d). Divisão: a/b ÷ c/d = a/b × d/c.",
      "A palavra “de”, em problema, costuma ser multiplicação: 2/5 de 40 = 16.",
      "Fração para decimal: divida o numerador pelo denominador.",
      "Na soma de decimais, alinhe as vírgulas. Na multiplicação, conte as casas decimais dos dois fatores.",
    ],
    questions: [
      question(
        "mat-fracoes-n1q1",
        "Básico",
        "Quanto é 1/2 + 1/4?",
        ["1/6", "2/6", "3/4", "2/4", "1/8"],
        "C",
        "O denominador comum é 4. 1/2 = 2/4. Então 2/4 + 1/4 = 3/4.",
      ),
      question(
        "mat-fracoes-n1q2",
        "Básico",
        "Quanto é 0,5 + 0,25?",
        ["0,30", "0,75", "0,55", "0,7", "1,25"],
        "B",
        "0,5 é o mesmo que 0,50. 0,50 + 0,25 = 0,75. Em fração, isso é 1/2 + 1/4 = 3/4.",
      ),
      question(
        "mat-fracoes-n1q3",
        "Básico",
        "Quanto é 2/5 de 40?",
        ["16", "8", "20", "10", "4"],
        "A",
        "“De” pede multiplicação: 2/5 × 40 = 80/5 = 16.",
      ),
      question(
        "mat-fracoes-n1q4",
        "Prova",
        "O valor de (1/2 + 1/3) ÷ (1/4) é",
        ["5/24", "5/6", "5/8", "10/3", "3/10"],
        "D",
        "1/2 + 1/3 = 3/6 + 2/6 = 5/6. Dividir por 1/4 é multiplicar por 4: 5/6 × 4 = 20/6 = 10/3.",
      ),
      question(
        "mat-fracoes-n1q5",
        "Prova",
        "O resultado de −4 + 7 × 2 é",
        ["6", "10", "−22", "3", "−6"],
        "B",
        "Multiplicação antes da soma: 7 × 2 = 14. Depois −4 + 14 = 10. O parênteses (−4 + 7) × 2 daria 6, e não é o que está escrito.",
      ),
    ],
    cards: cards("mat-fracoes", [
      ["O que o denominador indica?", "Em quantas partes iguais o inteiro foi dividido. Nunca pode ser zero."],
      ["Como somar frações com denominadores diferentes?", "Reescreva com um denominador comum e some os numeradores."],
      ["a/b ÷ c/d", "a/b × d/c. Dividir é multiplicar pelo inverso."],
      ["3/4 em decimal", "0,75. Divida 3 por 4."],
      ["1,2 × 0,5", "0,6. Multiplique 12 × 5 e reponha as duas casas decimais."],
    ]),
  },
  "mat-pot-rad": {
    topicId: "mat-pot-rad",
    summary: [
      "Potência é multiplicação repetida. 2³ significa 2 × 2 × 2 = 8. O 2 é a base e o 3 é o expoente. A base fica escrita uma vez; o expoente diz quantas vezes ela entra na multiplicação.",
      "Expoente zero, com base diferente de zero, dá 1: 5⁰ = 1. Expoente negativo inverte a base: 2⁻³ = 1/2³ = 1/8. Não é um número negativo.",
      "Na mesma base, multiplicar potências soma os expoentes e dividir subtrai. (aᵐ)ⁿ = aᵐⁿ. A potência de um produto é o produto das potências.",
      "Radiciação desfaz a potência. √49 = 7 porque 7² = 49. A raiz quadrada principal, nos reais, não é negativa. Para simplificar, separe quadrados perfeitos: √18 = √(9 × 2) = 3√2.",
    ],
    examples: [
      {
        title: "Calcular 2³ × 2² e 2⁻³",
        steps: [
          "Mesma base na multiplicação: some os expoentes. 2³ × 2² = 2⁵.",
          "2⁵ = 2 × 2 × 2 × 2 × 2 = 32.",
          "Agora o expoente negativo: 2⁻³ = 1/2³.",
          "2³ = 8, então 2⁻³ = 1/8.",
        ],
      },
      {
        title: "Simplificar √18",
        steps: [
          "Procure um quadrado perfeito dentro do 18. 18 = 9 × 2, e 9 = 3².",
          "√18 = √9 × √2.",
          "√9 = 3. Então √18 = 3√2.",
          "Confira: 3√2 × 3√2 = 9 × 2 = 18. Fechou.",
        ],
      },
    ],
    rules: [
      "aᵐ × aⁿ = aᵐ⁺ⁿ. aᵐ ÷ aⁿ = aᵐ⁻ⁿ. (aᵐ)ⁿ = aᵐⁿ.",
      "a⁰ = 1, se a é diferente de zero.",
      "a⁻ⁿ = 1/aⁿ. Expoente negativo não torna o número negativo.",
      "(a × b)ⁿ = aⁿ × bⁿ. Isso não vale para soma: (a + b)ⁿ não é aⁿ + bⁿ.",
      "√(a × b) = √a × √b. √(a + b) não é √a + √b.",
      "√(a²) = |a|. Nos exercícios deste nível, as bases são positivas.",
    ],
    questions: [
      question(
        "mat-pot-rad-n1q1",
        "Básico",
        "O valor de 2³ × 2² é",
        ["2⁶", "32", "16", "10", "64"],
        "B",
        "Some os expoentes: 3 + 2 = 5. 2⁵ = 32. 2⁶ seria 64, que é outra conta.",
      ),
      question(
        "mat-pot-rad-n1q2",
        "Básico",
        "O valor de 5⁰ é",
        ["1", "0", "5", "10", "50"],
        "A",
        "Toda base não nula elevada a zero vale 1. 5⁰ = 1.",
      ),
      question(
        "mat-pot-rad-n1q3",
        "Básico",
        "O valor de 2⁻³ é",
        ["−8", "−6", "1/8", "8", "6"],
        "C",
        "Expoente negativo inverte: 2⁻³ = 1/2³ = 1/8. O resultado é positivo e menor que 1.",
      ),
      question(
        "mat-pot-rad-n1q4",
        "Prova",
        "A forma simplificada de √18 é",
        ["9√2", "6√3", "2√9", "√9 × 2", "3√2"],
        "E",
        "18 = 9 × 2. √18 = √9 × √2 = 3√2. Não se pode tirar a raiz só de um fator e deixar o outro somado.",
      ),
      question(
        "mat-pot-rad-n1q5",
        "Prova",
        "O valor de √(4/9) é",
        ["4/9", "2/3", "16/81", "4/3", "2/9"],
        "B",
        "A raiz de uma fração é a raiz de cada parte: √4 / √9 = 2/3. Conferência: (2/3)² = 4/9.",
      ),
    ],
    cards: cards("mat-pot-rad", [
      ["aᵐ × aⁿ", "aᵐ⁺ⁿ. Na mesma base, multiplica e soma os expoentes."],
      ["a⁰", "1, se a é diferente de zero."],
      ["a⁻ⁿ", "1/aⁿ. Inverte a base; não muda o sinal."],
      ["√(a + b) é √a + √b?", "Não. A raiz não separa soma. √(9 + 16) = 5, e não 3 + 4."],
      ["√18", "3√2. Porque 18 = 9 × 2."],
    ]),
  },
  "mat-produtos": {
    topicId: "mat-produtos",
    summary: [
      "Produto notável é uma multiplicação que aparece tanto que vale memorizar o resultado. O quadrado da soma e o quadrado da diferença são os dois primeiros. A diferença de quadrados é o terceiro.",
      "(a + b)² não é a² + b². Falta o termo do meio, 2ab. O quadrado usa cada parte duas vezes e ainda o produto cruzado. (a − b)² troca o sinal desse meio.",
      "Fatorar é o caminho de volta: escrever uma expressão como multiplicação. Primeiro procure um fator comum. Depois, veja se sobrou um produto notável.",
    ],
    examples: [
      {
        title: "Desenvolver (2x − 1)²",
        steps: [
          "Aqui a = 2x e b = 1, no modelo (a − b)² = a² − 2ab + b².",
          "a² = (2x)² = 4x².",
          "2ab = 2 × 2x × 1 = 4x.",
          "(2x − 1)² = 4x² − 4x + 1.",
        ],
      },
      {
        title: "Fatorar x² − 16 e 2x² + 4x",
        steps: [
          "x² − 16 é diferença de quadrados: x² − 4².",
          "x² − 16 = (x − 4)(x + 4).",
          "Em 2x² + 4x, o fator comum é 2x.",
          "2x² + 4x = 2x(x + 2).",
        ],
      },
    ],
    rules: [
      "(a + b)² = a² + 2ab + b².",
      "(a − b)² = a² − 2ab + b².",
      "(a + b)(a − b) = a² − b².",
      "Fator comum primeiro: ax + ay = a(x + y).",
      "x² − k² = (x − k)(x + k), quando k² é um quadrado perfeito.",
      "Conferir: desenvolva de novo o que você fatorou. Tem de voltar ao começo.",
    ],
    questions: [
      question(
        "mat-produtos-n1q1",
        "Básico",
        "O desenvolvimento de (x + 2)² é",
        ["x² + 4", "x² + 2x + 4", "x² + 4x + 4", "x² + 4x + 2", "2x + 4"],
        "C",
        "(x + 2)² = x² + 2·x·2 + 2² = x² + 4x + 4. O termo do meio não pode faltar.",
      ),
      question(
        "mat-produtos-n1q2",
        "Básico",
        "O produto (a − b)(a + b) é igual a",
        ["a² + b²", "a² − b²", "a² − 2ab + b²", "a² + 2ab + b²", "2a − 2b"],
        "B",
        "É a diferença de quadrados. Os termos com ab se cancelam: a² − ab + ab − b² = a² − b².",
      ),
      question(
        "mat-produtos-n1q3",
        "Básico",
        "A fatoração de x² − 16 é",
        ["(x − 16)(x + 1)", "(x − 4)²", "(x − 4)(x + 4)", "(x − 8)(x + 2)", "x(x − 16)"],
        "C",
        "16 = 4². Diferença de quadrados: (x − 4)(x + 4). (x − 4)² seria x² − 8x + 16, que tem o termo do meio.",
      ),
      question(
        "mat-produtos-n1q4",
        "Prova",
        "O desenvolvimento de (2x − 1)² é",
        ["4x² − 1", "4x² − 2x + 1", "4x² − 4x + 1", "2x² − 4x + 1", "4x² + 4x + 1"],
        "C",
        "a = 2x e b = 1. a² = 4x², 2ab = 4x e b² = 1. Como é diferença, o meio fica negativo: 4x² − 4x + 1.",
      ),
      question(
        "mat-produtos-n1q5",
        "Prova",
        "A forma fatorada de x² + 6x + 9 é",
        ["(x + 9)²", "(x + 3)²", "(x + 6)²", "(x − 3)²", "x(x + 9)"],
        "B",
        "x² + 6x + 9 é um quadrado perfeito: (x + 3)² = x² + 6x + 9. O termo do meio 6x é 2 · x · 3.",
      ),
    ],
    cards: cards("mat-produtos", [
      ["(a + b)²", "a² + 2ab + b². Não esqueça o 2ab."],
      ["(a − b)²", "a² − 2ab + b²."],
      ["(a + b)(a − b)", "a² − b²."],
      ["x² − 16", "(x − 4)(x + 4)."],
      ["Por onde começar a fatorar?", "Pelo fator comum. Depois, procure um produto notável."],
    ]),
  },
  "mat-equacoes": {
    topicId: "mat-equacoes",
    summary: [
      "Equação é uma igualdade com um valor desconhecido. Resolver é achar o número que torna a igualdade verdadeira. O que você faz de um lado, faz do outro.",
      "No 1º grau a incógnita aparece elevada a 1. Isole o x: some ou subtraia para juntar os termos, e divida pelo número que multiplica o x. Na inequação o sinal > ou < se mantém quando você soma ou multiplica por um número positivo. Se multiplicar ou dividir por um negativo, o sinal vira.",
      "No 2º grau a incógnita aparece ao quadrado: ax² + bx + c = 0, com a diferente de zero. Calcule o discriminante Δ = b² − 4ac. As raízes são x = (−b ± √Δ) / (2a).",
      "O sinal de Δ conta a história. Δ positivo: duas raízes reais diferentes. Δ zero: uma raiz real, repetida. Δ negativo: nenhuma raiz real.",
    ],
    examples: [
      {
        title: "Resolver 3x − 6 = 9",
        steps: [
          "Some 6 dos dois lados: 3x = 15.",
          "Divida os dois lados por 3: x = 5.",
          "Confira na equação original: 3 × 5 − 6 = 15 − 6 = 9. Fechou.",
        ],
      },
      {
        title: "Resolver x² − 5x + 6 = 0",
        steps: [
          "a = 1, b = −5, c = 6.",
          "Δ = (−5)² − 4·1·6 = 25 − 24 = 1.",
          "x = (5 ± √1) / 2.",
          "x₁ = (5 + 1) / 2 = 3. x₂ = (5 − 1) / 2 = 2.",
          "Confira pela fatoração: (x − 2)(x − 3) = x² − 5x + 6.",
        ],
      },
    ],
    rules: [
      "Os dois lados da igualdade recebem a mesma operação.",
      "1º grau, ax + b = 0: x = −b/a. Inequação: multiplique por positivo e o sinal fica; por negativo, o sinal vira.",
      "2º grau: Δ = b² − 4ac e x = (−b ± √Δ) / (2a).",
      "Δ > 0: duas raízes reais. Δ = 0: uma raiz real. Δ < 0: nenhuma raiz real.",
      "O coeficiente a do 2º grau não pode ser zero. Se for, a equação não é de 2º grau.",
      "No fim, substitua cada raiz na equação. Uma raiz errada não volta na igualdade.",
    ],
    questions: [
      question(
        "mat-equacoes-n1q1",
        "Básico",
        "A solução de 2x + 4 = 10 é",
        ["7", "2", "4", "3", "6"],
        "D",
        "Subtraia 4: 2x = 6. Divida por 2: x = 3. Confira: 2 × 3 + 4 = 10.",
      ),
      question(
        "mat-equacoes-n1q2",
        "Básico",
        "A solução de x/2 = 6 é",
        ["3", "12", "8", "4", "6"],
        "B",
        "Multiplique os dois lados por 2: x = 12. Metade de 12 é 6.",
      ),
      question(
        "mat-equacoes-n1q3",
        "Básico",
        "As raízes de x² − 5x + 6 = 0 são",
        ["1 e 6", "−2 e −3", "2 e 3", "5 e 6", "−1 e −6"],
        "C",
        "Δ = 25 − 24 = 1. x = (5 ± 1) / 2, logo 3 e 2. Os dois números somam 5 e multiplicam 6.",
      ),
      question(
        "mat-equacoes-n1q4",
        "Prova",
        "A equação x² + 2x + 1 = 0",
        ["tem duas raízes reais distintas", "não tem raiz real", "tem uma raiz real dupla, igual a −1", "tem raiz igual a 1", "tem Δ = 4"],
        "C",
        "a = 1, b = 2, c = 1. Δ = 4 − 4 = 0. Há uma raiz: x = −2/2 = −1. A forma fatorada é (x + 1)².",
      ),
      question(
        "mat-equacoes-n1q5",
        "Prova",
        "A solução de 2x − 4 > 0 é",
        ["x > 2", "x < 2", "x > 4", "x < 4", "x = 2"],
        "A",
        "Some 4: 2x > 4. Divida por 2, que é positivo, e o sinal permanece: x > 2. O valor 2 torna a expressão zero, então não entra no >.",
      ),
    ],
    cards: cards("mat-equacoes", [
      ["O que os dois lados recebem?", "A mesma operação. A igualdade se mantém."],
      ["Δ", "b² − 4ac."],
      ["Fórmula das raízes", "x = (−b ± √Δ) / (2a)."],
      ["Δ = 0", "Uma raiz real, repetida."],
      ["Δ < 0", "Nenhuma raiz real."],
    ]),
  },
  "mat-proporcao": {
    topicId: "mat-proporcao",
    summary: [
      "Razão é uma comparação por divisão. Se 2 professores atendem 5 turmas, a razão é 2/5. Proporção é a igualdade de duas razões. Nela, o produto dos extremos é igual ao produto dos meios.",
      "Na regra de três direta, as grandezas crescem juntas: mais cadernos, mais dinheiro. Na inversa, uma cresce e a outra diminui: mais pessoas no mesmo serviço, menos tempo. Decida isso antes de calcular.",
      "Porcentagem é uma razão com denominador 100. 20% de um valor é 20/100 desse valor. Aumento de p% multiplica por (1 + p/100). Desconto de p% multiplica por (1 − p/100).",
    ],
    examples: [
      {
        title: "Direta: 3 cadernos custam R$ 15. Quanto custam 5?",
        steps: [
          "Mais cadernos custam mais. A relação é direta.",
          "Monte 3/15 = 5/x, ou simplesmente ache o preço de um: 15/3 = 5.",
          "Cinco cadernos: 5 × 5 = 25.",
          "Pelos extremos e meios: 3x = 15 × 5 = 75, então x = 25.",
        ],
      },
      {
        title: "Porcentagem e regra inversa",
        steps: [
          "20% de 80: 20/100 × 80 = 16.",
          "Uma camisa de R$ 80 com 15% de desconto: 15% de 80 é 12. Paga-se 80 − 12 = 68.",
          "Inversa: 4 pintores levam 6 dias. Oito pintores, no mesmo muro, levam menos tempo.",
          "4 × 6 = 24 dias de pintor. Com 8 pessoas: 24/8 = 3 dias.",
        ],
      },
    ],
    rules: [
      "Direta: as grandezas crescem ou diminuem juntas. Cruze os números.",
      "Inversa: multiplique as duas grandezas da situação conhecida e divida pela nova.",
      "p% de N = (p/100) × N.",
      "Aumento de p%: multiplique por (100 + p)/100.",
      "Desconto de p%: multiplique por (100 − p)/100.",
      "10% é a vírgula uma casa para a esquerda. 50% é a metade. 25% é a quarta parte.",
    ],
    questions: [
      question(
        "mat-proporcao-n1q1",
        "Básico",
        "Se 3 cadernos custam R$ 15, quanto custam 5 cadernos?",
        ["R$ 18", "R$ 20", "R$ 25", "R$ 45", "R$ 9"],
        "C",
        "Cada caderno custa 15/3 = R$ 5. Cinco custam 5 × 5 = R$ 25. A relação é direta.",
      ),
      question(
        "mat-proporcao-n1q2",
        "Básico",
        "30% de 200 é igual a",
        ["30", "50", "60", "70", "90"],
        "C",
        "30/100 × 200 = 0,3 × 200 = 60.",
      ),
      question(
        "mat-proporcao-n1q3",
        "Básico",
        "Quatro pintores fazem um muro em 6 dias. Oito pintores, no mesmo ritmo, levam",
        ["12 dias", "8 dias", "3 dias", "2 dias", "10 dias"],
        "C",
        "É inversa. 4 × 6 = 24. Com 8 pintores: 24/8 = 3 dias.",
      ),
      question(
        "mat-proporcao-n1q4",
        "Prova",
        "Uma camisa de R$ 80 recebe 15% de desconto. O valor pago é",
        ["R$ 65", "R$ 68", "R$ 70", "R$ 12", "R$ 95"],
        "B",
        "15% de 80 = 12. Desconto tira esse valor: 80 − 12 = 68. Também: 80 × 0,85 = 68.",
      ),
      question(
        "mat-proporcao-n1q5",
        "Prova",
        "Um valor passa de 50 para 60. O aumento percentual é",
        ["10%", "20%", "16%", "60%", "6%"],
        "B",
        "O aumento é 10. A porcentagem usa o valor inicial: 10/50 = 0,20 = 20%. 10% seria só metade desse aumento.",
      ),
    ],
    cards: cards("mat-proporcao", [
      ["Quando a regra de três é direta?", "Quando as grandezas crescem ou diminuem juntas."],
      ["Quando é inversa?", "Quando uma aumenta e a outra diminui."],
      ["p% de N", "(p/100) × N."],
      ["Desconto de 15% em R$ 80", "R$ 68. Tira-se 12."],
      ["10% de um número", "Ande uma casa com a vírgula. 10% de 250 é 25."],
    ]),
  },
  "mat-geo-plana": {
    topicId: "mat-geo-plana",
    summary: [
      "Perímetro é a volta da figura, a soma dos lados. Área é a medida da região de dentro. As duas usam unidades diferentes: perímetro em metros, área em metros quadrados.",
      "No retângulo, a área é base vezes altura e o perímetro é a soma dos quatro lados. No quadrado, base e altura são o mesmo lado. No triângulo, a área é base vezes altura, dividido por 2.",
      "No triângulo retângulo vale o teorema de Pitágoras: o quadrado da hipotenusa é a soma dos quadrados dos catetos. A soma dos ângulos internos de qualquer triângulo é 180°.",
      "No círculo, o raio vai do centro até a borda. A área é πr² e o comprimento da volta é 2πr. π é cerca de 3,14; nas respostas exatas, deixe o π escrito.",
    ],
    examples: [
      {
        title: "Retângulo de 5 m por 3 m",
        steps: [
          "Área: 5 × 3 = 15 m².",
          "Perímetro: 5 + 3 + 5 + 3 = 16 m. Também 2 × (5 + 3) = 16.",
          "A diagonal fecha um triângulo retângulo de catetos 5 e 3.",
          "Diagonal² = 25 + 9 = 34. A diagonal mede √34 m.",
        ],
      },
      {
        title: "Triângulo retângulo de catetos 6 e 8",
        steps: [
          "Hipotenusa² = 6² + 8² = 36 + 64 = 100.",
          "Hipotenusa = √100 = 10.",
          "A área usa os catetos como base e altura: (6 × 8) / 2 = 24.",
        ],
      },
    ],
    rules: [
      "Retângulo: área = base × altura. Perímetro = 2 × (base + altura).",
      "Quadrado de lado L: área = L². Perímetro = 4L.",
      "Triângulo: área = (base × altura) / 2. A altura é perpendicular à base.",
      "Triângulo retângulo: hipotenusa² = cateto² + cateto².",
      "Círculo: área = πr². Comprimento = 2πr.",
      "A soma dos ângulos internos de um triângulo é 180°.",
    ],
    questions: [
      question(
        "mat-geo-plana-n1q1",
        "Básico",
        "A área de um retângulo de 6 m por 4 m é",
        ["10 m²", "20 m²", "24 m²", "12 m²", "48 m²"],
        "C",
        "Área do retângulo: base × altura = 6 × 4 = 24 m². O perímetro seria 20 m, que é outra medida.",
      ),
      question(
        "mat-geo-plana-n1q2",
        "Básico",
        "A área de um triângulo de base 10 e altura 4 é",
        ["40", "14", "20", "28", "8"],
        "C",
        "Área = (base × altura) / 2 = (10 × 4) / 2 = 20. Sem o dividido por 2, o resultado seria o do retângulo.",
      ),
      question(
        "mat-geo-plana-n1q3",
        "Básico",
        "Um triângulo retângulo tem catetos 6 e 8. A hipotenusa mede",
        ["14", "12", "10", "9", "48"],
        "C",
        "6² + 8² = 36 + 64 = 100. A hipotenusa é √100 = 10. É o triângulo 6-8-10.",
      ),
      question(
        "mat-geo-plana-n1q4",
        "Prova",
        "Um terreno retangular mede 12 m por 5 m. A diagonal desse terreno mede",
        ["17 m", "7 m", "13 m", "60 m", "√17 m"],
        "C",
        "A diagonal é a hipotenusa: 12² + 5² = 144 + 25 = 169. √169 = 13. É o triângulo 5-12-13.",
      ),
    ],
    cards: cards("mat-geo-plana", [
      ["Área do retângulo", "base × altura."],
      ["Área do triângulo", "(base × altura) / 2."],
      ["Pitágoras", "hipotenusa² = cateto² + cateto²."],
      ["Área do círculo", "πr². O comprimento da volta é 2πr."],
      ["5-12-13", "Triângulo retângulo. 25 + 144 = 169."],
    ]),
  },
  "fis-conversao": {
    topicId: "fis-conversao",
    summary: [
      "Medir é comparar com um padrão. No Sistema Internacional, o comprimento usa o metro (m), a massa usa o quilograma (kg) e o tempo usa o segundo (s). A velocidade, nesse sistema, fica em metros por segundo (m/s).",
      "Os prefixos andam de mil em mil no comprimento e na massa que mais aparecem na prova: 1 km = 1.000 m, 1 m = 100 cm, 1 kg = 1.000 g. No tempo, 1 min = 60 s e 1 h = 3.600 s.",
      "O atalho da velocidade: para passar de km/h para m/s, divida por 3,6. Para voltar de m/s para km/h, multiplique por 3,6. O 3,6 não é mágica: 1 km = 1.000 m e 1 h = 3.600 s, e 3.600/1.000 = 3,6.",
    ],
    examples: [
      {
        title: "Passar 72 km/h para m/s",
        steps: [
          "Pelo caminho longo: 72 km/h = 72 × 1.000 m / 3.600 s.",
          "72.000 / 3.600 = 20. Então 72 km/h = 20 m/s.",
          "Pelo atalho: 72 ÷ 3,6 = 20. O mesmo resultado.",
        ],
      },
      {
        title: "Converter 2,5 km e 3 minutos",
        steps: [
          "Quilômetro para metro multiplica por 1.000: 2,5 × 1.000 = 2.500 m.",
          "Minuto para segundo multiplica por 60: 3 × 60 = 180 s.",
          "Não misture: 2,5 km não são 2,5 × 60. O 60 é só do tempo.",
        ],
      },
    ],
    rules: [
      "Comprimento no SI: metro. Massa: quilograma. Tempo: segundo.",
      "1 km = 1.000 m. 1 m = 100 cm. 1 kg = 1.000 g.",
      "1 min = 60 s. 1 h = 60 min = 3.600 s.",
      "km/h para m/s: divida por 3,6.",
      "m/s para km/h: multiplique por 3,6.",
      "Converta cada grandeza antes de usar numa fórmula. Metro com quilômetro, na mesma conta, dá resposta errada.",
    ],
    questions: [
      question(
        "fis-conversao-n1q1",
        "Básico",
        "90 km/h equivalem a quantos m/s?",
        ["324", "32,4", "25", "9", "250"],
        "C",
        "90 ÷ 3,6 = 25. Também: 90 × 1.000 / 3.600 = 25 m/s.",
      ),
      question(
        "fis-conversao-n1q2",
        "Básico",
        "3 minutos equivalem a",
        ["30 s", "90 s", "180 s", "120 s", "3.600 s"],
        "C",
        "Cada minuto tem 60 segundos. 3 × 60 = 180 s.",
      ),
      question(
        "fis-conversao-n1q3",
        "Básico",
        "2,5 km equivalem a",
        ["25 m", "250 m", "2.500 m", "25.000 m", "0,25 m"],
        "C",
        "1 km = 1.000 m. 2,5 × 1.000 = 2.500 m.",
      ),
      question(
        "fis-conversao-n1q4",
        "Prova",
        "20 m/s equivalem a",
        ["5,6 km/h", "72 km/h", "20 km/h", "36 km/h", "200 km/h"],
        "B",
        "De m/s para km/h, multiplique por 3,6: 20 × 3,6 = 72 km/h.",
      ),
      question(
        "fis-conversao-n1q5",
        "Prova",
        "250 g equivalem a",
        ["25 kg", "2,5 kg", "0,25 kg", "2.500 kg", "0,025 kg"],
        "C",
        "1 kg = 1.000 g. 250/1.000 = 0,25 kg. Um quarto de quilograma.",
      ),
    ],
    cards: cards("fis-conversao", [
      ["km/h → m/s", "Divida por 3,6."],
      ["m/s → km/h", "Multiplique por 3,6."],
      ["De onde vem o 3,6?", "3.600 segundos divididos por 1.000 metros."],
      ["1 km", "1.000 m."],
      ["1 h", "3.600 s."],
    ]),
  },
  "fis-notacao": {
    topicId: "fis-notacao",
    summary: [
      "Notação científica escreve um número como um coeficiente vezes uma potência de 10. O coeficiente tem um único algarismo diferente de zero antes da vírgula: fica entre 1 e 10, sem chegar em 10. O expoente diz quantas casas a vírgula andou.",
      "Número grande: a vírgula anda para a esquerda e o expoente fica positivo. 5.300 = 5,3 × 10³, porque a vírgula andou três casas. Número pequeno, menor que 1: a vírgula anda para a direita e o expoente fica negativo. 0,0072 = 7,2 × 10⁻³.",
      "Para multiplicar, multiplique os coeficientes e some os expoentes. Para dividir, divida os coeficientes e subtraia os expoentes. Se o coeficiente sair de 10 ou mais, normalize: 12 × 10⁹ = 1,2 × 10¹⁰. A ordem de grandeza é a potência de 10 mais próxima. Se o coeficiente passa de √10, cerca de 3,16, suba o expoente: 4,7 × 10³ tem ordem 10⁴.",
    ],
    examples: [
      {
        title: "Escrever 45.000 e 0,0045",
        steps: [
          "45.000: a vírgula imaginária está no fim. Ande até sobrar 4,5. Foram quatro casas.",
          "45.000 = 4,5 × 10⁴.",
          "0,0045: ande a vírgula três casas para a direita até 4,5.",
          "0,0045 = 4,5 × 10⁻³.",
        ],
      },
      {
        title: "Multiplicar (2 × 10³) × (4 × 10²)",
        steps: [
          "Coeficientes: 2 × 4 = 8.",
          "Expoentes: 3 + 2 = 5.",
          "O produto é 8 × 10⁵.",
          "O 8 já está entre 1 e 10. Não precisa normalizar.",
        ],
      },
    ],
    rules: [
      "Forma: a × 10ⁿ, com 1 ≤ a < 10.",
      "Vírgula para a esquerda: expoente positivo. Vírgula para a direita: expoente negativo.",
      "Multiplicar: multiplica os coeficientes e soma os expoentes.",
      "Dividir: divide os coeficientes e subtrai os expoentes.",
      "Se o coeficiente passar de 10, ande a vírgula e ajuste o expoente. 12 × 10⁹ = 1,2 × 10¹⁰.",
      "53 × 10² vale 5.300, mas não é notação científica. A forma pedida é 5,3 × 10³.",
      "Ordem de grandeza: se o coeficiente passa de cerca de 3,16, suba o expoente.",
    ],
    questions: [
      question(
        "fis-notacao-n1q1",
        "Básico",
        "A notação científica de 5.300 é",
        ["53 × 10²", "5,3 × 10³", "5,3 × 10⁴", "0,53 × 10⁴", "530 × 10¹"],
        "B",
        "A vírgula anda três casas até 5,3. O coeficiente precisa ficar entre 1 e 10, então 53 × 10² não serve.",
      ),
      question(
        "fis-notacao-n1q2",
        "Básico",
        "A notação científica de 0,0072 é",
        ["7,2 × 10³", "7,2 × 10⁻²", "7,2 × 10⁻³", "72 × 10⁻⁴", "0,72 × 10⁻²"],
        "C",
        "Três casas para a direita: 7,2 × 10⁻³. O expoente é negativo porque o número é menor que 1.",
      ),
      question(
        "fis-notacao-n1q3",
        "Básico",
        "O produto (3 × 10⁴) × (2 × 10³) é",
        ["6 × 10⁷", "6 × 10¹²", "5 × 10⁷", "6 × 10¹", "1,5 × 10⁷"],
        "A",
        "3 × 2 = 6 e 4 + 3 = 7. O produto é 6 × 10⁷. Conferência: 30.000 × 2.000 = 60.000.000.",
      ),
      question(
        "fis-notacao-n1q4",
        "Prova",
        "O quociente (8 × 10⁶) ÷ (2 × 10⁴) é",
        ["4 × 10²", "4 × 10¹⁰", "6 × 10²", "4 × 10⁻²", "16 × 10²"],
        "A",
        "8 ÷ 2 = 4 e 6 − 4 = 2. O resultado é 4 × 10², que é 400. Na divisão, os expoentes se subtraem.",
      ),
      question(
        "fis-notacao-n1q5",
        "Prova",
        "A ordem de grandeza de 4,7 × 10³ é",
        ["10³", "10⁴", "10²", "10⁵", "10¹"],
        "B",
        "Compare o coeficiente com √10, cerca de 3,16. 4,7 é maior, então a ordem sobe um expoente: 10⁴. Se o coeficiente fosse 2, a ordem ficaria 10³.",
      ),
    ],
    cards: cards("fis-notacao", [
      ["Forma da notação científica", "a × 10ⁿ, com o coeficiente entre 1 e 10."],
      ["5.300", "5,3 × 10³."],
      ["0,0072", "7,2 × 10⁻³."],
      ["Multiplicar potências de 10", "Soma os expoentes."],
      ["Dividir potências de 10", "Subtrai os expoentes."],
    ]),
  },
  "fis-vetores": {
    topicId: "fis-vetores",
    summary: [
      "Grandeza escalar fica completa com um número e uma unidade: temperatura, massa, tempo e energia. Grandeza vetorial pede também direção e sentido: força, deslocamento, velocidade e aceleração. Um deslocamento de 10 m para o norte não é o mesmo que 10 m para o leste.",
      "Um vetor no plano se decompõe em duas partes perpendiculares. Se o ângulo é medido com a horizontal, a parte horizontal é V × cos θ e a parte vertical é V × sen θ. Os valores deste nível: sen 30° = 1/2, cos 30° = √3/2, sen 45° = cos 45° = √2/2, sen 60° = √3/2, cos 60° = 1/2.",
      "Quando dois vetores são perpendiculares, o módulo da resultante é a hipotenusa: R = √(Rx² + Ry²). Somar módulos sem olhar o ângulo é o erro mais comum. 3 m para leste mais 4 m para norte não dão 7 m.",
    ],
    examples: [
      {
        title: "Decompor 10 m a 30° com a horizontal",
        steps: [
          "Horizontal: 10 × cos 30° = 10 × √3/2 = 5√3 m.",
          "Vertical: 10 × sen 30° = 10 × 1/2 = 5 m.",
          "O ângulo foi medido a partir do chão. Por isso o cosseno ficou na horizontal e o seno na vertical.",
        ],
      },
      {
        title: "Resultante de 6 m leste e 8 m norte",
        steps: [
          "Os deslocamentos são perpendiculares. Não se somam 6 + 8.",
          "R² = 6² + 8² = 36 + 64 = 100.",
          "R = √100 = 10 m.",
          "É o mesmo triângulo 6-8-10 da geometria.",
        ],
      },
    ],
    rules: [
      "Escalar: número e unidade. Vetor: módulo, direção e sentido.",
      "Com θ a partir da horizontal: Vx = V cos θ e Vy = V sen θ.",
      "sen 30° = 1/2. cos 30° = √3/2. sen 60° = √3/2. cos 60° = 1/2.",
      "sen 45° = cos 45° = √2/2.",
      "Vetores perpendiculares: R = √(Rx² + Ry²).",
      "Módulos só se somam direto quando os vetores têm a mesma direção e o mesmo sentido.",
    ],
    questions: [
      question(
        "fis-vetores-n1q1",
        "Básico",
        "Um deslocamento de 10 m faz 30° com a horizontal. A componente vertical mede",
        ["10 m", "5√3 m", "5 m", "8 m", "0 m"],
        "C",
        "A componente vertical é 10 × sen 30°. sen 30° = 1/2, então 10 × 1/2 = 5 m.",
      ),
      question(
        "fis-vetores-n1q2",
        "Básico",
        "No mesmo deslocamento de 10 m a 30°, a componente horizontal mede",
        ["5 m", "5√3 m", "10 m", "√3 m", "8 m"],
        "B",
        "A componente horizontal é 10 × cos 30° = 10 × √3/2 = 5√3 m.",
      ),
      question(
        "fis-vetores-n1q3",
        "Básico",
        "A resultante de 6 m para leste e 8 m para norte mede",
        ["14 m", "2 m", "48 m", "10 m", "7 m"],
        "D",
        "São perpendiculares: √(6² + 8²) = √(36 + 64) = √100 = 10 m. Somar 14 esqueceria o ângulo reto.",
      ),
      question(
        "fis-vetores-n1q4",
        "Prova",
        "O valor de sen 60° é",
        ["1/2", "√2/2", "√3/2", "1", "√3"],
        "C",
        "sen 60° = √3/2. O valor 1/2 é sen 30° e também cos 60°. √2/2 é sen 45°.",
      ),
      question(
        "fis-vetores-n1q5",
        "Prova",
        "Qual destas grandezas é vetorial?",
        ["Temperatura", "Massa", "Tempo", "Força", "Energia"],
        "D",
        "Força pede intensidade, direção e sentido. Temperatura, massa, tempo e energia ficam completas com número e unidade: são escalares.",
      ),
    ],
    cards: cards("fis-vetores", [
      ["Vx e Vy, com θ na horizontal", "Vx = V cos θ. Vy = V sen θ."],
      ["sen 30° e cos 30°", "1/2 e √3/2."],
      ["sen 60° e cos 60°", "√3/2 e 1/2."],
      ["sen 45°", "√2/2. O cosseno de 45° é o mesmo."],
      ["Resultante perpendicular", "√(Rx² + Ry²). 3-4-5 e 6-8-10 são os triângulos úteis."],
    ]),
  },
  "ing-tobe": {
    topicId: "ing-tobe",
    summary: [
      "O pronome sujeito troca o nome de quem faz a ação: I (eu), you (você), he (ele), she (ela), it (isso, para coisa ou animal quando não se diz o nome), we (nós), they (eles, elas). O pronome possessivo vem antes do substantivo: my, your, his, her, its, our, their. Her book é o livro dela.",
      "O verbo to be indica estado, identidade ou lugar: ser ou estar. No presente, I vai com am. He, she e it vão com is. You, we e they vão com are.",
      "No passado, I, he, she e it usam was. You, we e they usam were. A negativa coloca not depois do verbo: she is not late, ou she isn't late. A pergunta inverte a ordem: Is she ready?",
    ],
    examples: [
      {
        title: "Presente, com pronome",
        steps: [
          "I am a student. She is at home. They are tired.",
          "This is her book. Her acompanha o substantivo book.",
          "Negativa: They are not tired.",
          "Pergunta: Are they tired? Yes, they are. / No, they aren't.",
        ],
      },
      {
        title: "Passado",
        steps: [
          "I was at work yesterday.",
          "The ships were in port.",
          "Was she late? No, she wasn't.",
          "Were you ready? Yes, I was.",
        ],
      },
    ],
    rules: [
      "I → am. He/she/it → is. You/we/they → are.",
      "Passado: I/he/she/it → was. You/we/they → were.",
      "Possessivo antes do nome: my, your, his, her, its, our, their.",
      "Her book. His book. Their books. Hers, sozinho, substitui o nome: the book is hers.",
      "Pergunta: o verbo to be vem antes do sujeito.",
      "Não use do/does com o to be. Is she a cadet? está certo. Does she is a cadet? está errado.",
    ],
    questions: [
      question(
        "ing-tobe-n1q1",
        "Básico",
        "She ___ a doctor.",
        ["are", "is", "am", "be", "were"],
        "B",
        "She, no presente, pede is. She is a doctor.",
      ),
      question(
        "ing-tobe-n1q2",
        "Básico",
        "___ they at the port yesterday?",
        ["Was", "Is", "Are", "Were", "Did"],
        "D",
        "Yesterday pede o passado. They, no passado, pede were: Were they at the port yesterday?",
      ),
      question(
        "ing-tobe-n1q3",
        "Básico",
        "This is ___ book. (o livro dela)",
        ["she", "her", "hers", "him", "they"],
        "B",
        "Antes do substantivo book, o possessivo de she é her. Hers entraria sem o substantivo: This book is hers.",
      ),
      question(
        "ing-tobe-n1q4",
        "Prova",
        "Assinale a pergunta correta.",
        ["She is a cadet?", "Does she is a cadet?", "Is she a cadet?", "Are she a cadet?", "Does she be a cadet?"],
        "C",
        "A pergunta com to be inverte verbo e sujeito: Is she a cadet? Não se usa does junto com is, e she não combina com are.",
      ),
    ],
    cards: cards("ing-tobe", [
      ["I / you / he / she / it / we / they", "eu / você / ele / ela / isso / nós / eles."],
      ["am, is, are", "I am. He/she/it is. You/we/they are."],
      ["was, were", "I/he/she/it was. You/we/they were."],
      ["her book", "O livro dela. Her vem antes do substantivo."],
      ["Is she a cadet?", "Pergunta certa. Não use does com o to be."],
    ]),
  },
  "ing-present": {
    topicId: "ing-present",
    summary: [
      "O simple present fala de hábito, rotina e fato. I, you, we e they ficam com o verbo na forma básica: I study. He, she e it ganham -s ou -es: she studies, he watches, it goes.",
      "Na negativa e na pergunta do simple present, o -s sai do verbo principal. Does she study? She does not study. They do not work. O verbo principal volta para a forma básica.",
      "O present continuous fala do que acontece agora ou de um período temporário. A forma é am/is/are + verbo com -ing. She is studying now. They are writing a test. Sinais úteis: now, right now, at the moment, look.",
    ],
    examples: [
      {
        title: "Hábito e agora",
        steps: [
          "Hábito: She studies English every day.",
          "Agora: She is studying English at the moment.",
          "Pergunta do hábito: Does she study at night? O study fica sem -s.",
          "Pergunta do agora: Is she studying now?",
        ],
      },
      {
        title: "O -ing",
        steps: [
          "work → working. study → studying.",
          "make → making. O e mudo cai.",
          "run → running. A consoante dobra quando o verbo é curto e a sílaba tônica termina em consoante-vogal-consoante.",
        ],
      },
    ],
    rules: [
      "Simple present: rotina e fato. He/she/it recebem -s.",
      "Pergunta e negativa do simple present: do ou does + verbo sem -s.",
      "Present continuous: am/is/are + verbo-ing. Vale para agora.",
      "Look, now e right now costumam pedir o continuous.",
      "Every day, always e usually costumam pedir o simple present.",
      "Does she work? nunca Does she works? She is working, nunca She is work.",
    ],
    questions: [
      question(
        "ing-present-n1q1",
        "Básico",
        "She ___ English every day.",
        ["study", "studies", "is study", "studying", "studyes"],
        "B",
        "Every day marca hábito. She pede simple present com -s: studies. A forma studyes não existe.",
      ),
      question(
        "ing-present-n1q2",
        "Básico",
        "They ___ a test right now.",
        ["writes", "is writing", "are writing", "writing", "wrote"],
        "C",
        "Right now pede continuous. They pede are: They are writing a test.",
      ),
      question(
        "ing-present-n1q3",
        "Básico",
        "___ he work on Sundays?",
        ["Do", "Does", "Is", "Are", "Did"],
        "B",
        "On Sundays é rotina, no presente. He pede does, e work fica sem -s: Does he work on Sundays?",
      ),
      question(
        "ing-present-n1q4",
        "Prova",
        "Look! The ship ___ the port.",
        ["leave", "leaves", "is leaving", "left", "are leaving"],
        "C",
        "Look aponta para agora. The ship é singular, então are não serve. A forma é is leaving.",
      ),
    ],
    cards: cards("ing-present", [
      ["She studies every day.", "Hábito: simple present, com -s."],
      ["Does she study?", "O does já marca he/she/it. O verbo fica sem -s."],
      ["She is studying now.", "Agora: am/is/are + -ing."],
      ["now, right now, look", "Sinais de present continuous."],
      ["every day, always", "Sinais de simple present."],
    ]),
  },
  "ing-past": {
    topicId: "ing-past",
    summary: [
      "O simple past localiza a ação num tempo que já acabou. Os sinais mais úteis são yesterday, last night, last week, ago e in 2020. O passado regular ganha -ed: work → worked, finish → finished.",
      "Vários verbos do dia a dia são irregulares e não levam -ed. Os primeiros: go → went, see → saw, have → had, do → did, come → came, take → took, make → made. O to be, que você já viu, fica was ou were.",
      "Na pergunta e na negativa, use did e o verbo volta à forma básica. Did you see the ship? She didn't go. Não se diz didn't went e não se diz didn't saw. O did já marca o passado.",
    ],
    examples: [
      {
        title: "Regular e irregular",
        steps: [
          "She worked yesterday. Work é regular: worked.",
          "They went to the port last night. Go é irregular: went.",
          "I saw the ship two hours ago. See vira saw.",
          "O sinal de tempo (yesterday, last night, ago) confirma o simple past.",
        ],
      },
      {
        title: "Pergunta e negativa",
        steps: [
          "Did they go to the port? Yes, they did.",
          "Go volta à forma básica porque did já está no passado.",
          "He didn't see the signal.",
          "Errado: He didn't saw. Certo: He didn't see.",
        ],
      },
    ],
    rules: [
      "Passado regular: verbo + ed. work → worked.",
      "go/went, see/saw, have/had, do/did, come/came, take/took, make/made.",
      "Pergunta: Did + sujeito + verbo básico.",
      "Negativa: didn't + verbo básico. Nunca didn't went.",
      "Yesterday, last, ago: simple past.",
      "A resposta curta repete o did: Yes, she did. No, she didn't.",
    ],
    questions: [
      question(
        "ing-past-n1q1",
        "Básico",
        "I ___ to school yesterday.",
        ["go", "goed", "went", "gone", "going"],
        "C",
        "Yesterday pede simple past. Go é irregular: went. Goed não existe.",
      ),
      question(
        "ing-past-n1q2",
        "Básico",
        "She didn't ___ the book.",
        ["read", "reads", "readed", "reading", "saw"],
        "A",
        "Depois de didn't, o verbo volta à forma básica. A forma básica de read é read. Readed não existe, e saw já é passado.",
      ),
      question(
        "ing-past-n1q3",
        "Básico",
        "___ you see the ship last night?",
        ["Do", "Did", "Were", "Are", "Was"],
        "B",
        "Last night é passado, e a pergunta com see usa did: Did you see the ship last night?",
      ),
      question(
        "ing-past-n1q4",
        "Prova",
        "They ___ the exercise two hours ago.",
        ["finish", "finished", "finishing", "finishes", "are finish"],
        "B",
        "Ago marca o tempo encerrado. Finish é regular: finished. They finished the exercise two hours ago.",
      ),
    ],
    cards: cards("ing-past", [
      ["work no passado", "worked. Regular: recebe -ed."],
      ["go / see / have", "went / saw / had."],
      ["Did she go?", "Did + verbo básico. Não diga Did she went?"],
      ["didn't see", "Certo. Didn't saw está errado."],
      ["yesterday, last, ago", "Sinais de simple past."],
    ]),
  },
  "ing-preposicoes": {
    topicId: "ing-preposicoes",
    summary: [
      "In, on e at são preposições pequenas e muito cobradas. A escolha depende de tempo ou de lugar. No tempo, at é o ponto mais fechado, on é o dia, in é o período maior.",
      "Tempo: at 8 a.m., at night. On Monday, on July 4. In the morning, in July, in 2027, in the summer. A exceção útil: night usa at, não in.",
      "Lugar: at é um ponto, como at the port, at home, at school. On é superfície ou linha: on the table, on the wall. Também se diz on the bus, on the plane e on the ship. In é espaço fechado ou área: in the room, in the bag, in Rio, in Brazil.",
    ],
    examples: [
      {
        title: "Tempo",
        steps: [
          "The exam starts at 8 a.m. Hora pede at.",
          "The meeting is on Monday. Dia da semana pede on.",
          "She studies in the morning. Parte do dia, fora night, pede in.",
          "She was born in 2006. Ano pede in.",
        ],
      },
      {
        title: "Lugar",
        steps: [
          "The book is on the table. Superfície pede on.",
          "The pen is in the bag. Dentro de um volume pede in.",
          "He is at the port. Ponto específico pede at.",
          "The sailors sleep on the ship. Embarcação pede on, no mesmo grupo de bus e plane.",
        ],
      },
    ],
    rules: [
      "Hora: at. Dia e data: on. Mês, ano, estação e período: in.",
      "At night. In the morning, in the afternoon.",
      "Ponto: at the port, at home, at school.",
      "Superfície: on the table. Embarcação e transporte: on the ship, on the bus, on the plane.",
      "Dentro ou área: in the bag, in the room, in Rio.",
      "Não traduza pelo português palavra por palavra. “Em casa” é at home, não in home.",
    ],
    questions: [
      question(
        "ing-preposicoes-n1q1",
        "Básico",
        "The exam starts ___ 8 a.m.",
        ["in", "on", "at", "to", "by"],
        "C",
        "Hora exata pede at: at 8 a.m.",
      ),
      question(
        "ing-preposicoes-n1q2",
        "Básico",
        "She studies ___ the morning.",
        ["at", "on", "in", "to", "of"],
        "C",
        "Parte do dia, neste caso morning, pede in. A exceção é at night.",
      ),
      question(
        "ing-preposicoes-n1q3",
        "Básico",
        "The meeting is ___ Monday.",
        ["in", "on", "at", "into", "of"],
        "B",
        "Dia da semana pede on: on Monday.",
      ),
      question(
        "ing-preposicoes-n1q4",
        "Prova",
        "The sailors sleep ___ the ship.",
        ["at", "on", "in", "to", "of"],
        "B",
        "Ship entra no grupo de bus e plane. A preposição é on: on the ship.",
      ),
    ],
    cards: cards("ing-preposicoes", [
      ["at 8 / on Monday / in July", "Hora, dia, período."],
      ["at night", "Night é a exceção. Não se diz in the night neste uso."],
      ["at home, at the port", "Ponto específico."],
      ["on the ship", "Também on the bus e on the plane."],
      ["in the bag, in Rio", "Dentro de um volume ou dentro de uma área."],
    ]),
  },
  "ing-vocabulario": {
    topicId: "ing-vocabulario",
    summary: [
      "Vocabulário de base é um conjunto pequeno, revisto várias vezes. Neste começo, separe as palavras em três grupos: estudo, tempo e o cenário da prova, que fala de mar.",
      "Estudo: book (livro), notebook (caderno), test (prova), question (questão), answer (resposta), to study (estudar), to learn (aprender), to read (ler), to write (escrever). Tempo: today (hoje), yesterday (ontem), tomorrow (amanhã), always (sempre), never (nunca), sometimes (às vezes).",
      "Mar e oposição: ship (navio), sea (mar), port (porto), sailor (marinheiro), map (mapa), weather (tempo atmosférico), wind (vento), tide (maré). Opostos úteis: early/late (cedo/tarde), easy/hard (fácil/difícil), right/wrong (certo/errado), big/small (grande/pequeno).",
    ],
    examples: [
      {
        title: "Uma frase com o grupo do mar",
        steps: [
          "The ship left the port in the morning.",
          "Ship é o navio. Port é o porto. Morning é a manhã.",
          "The tide is high. Tide é a maré. High, aqui, é alta.",
          "Não troque tide com wind. Wind é o vento.",
        ],
      },
      {
        title: "Opostos numa frase de rotina",
        steps: [
          "She arrived early. The opposite of early is late.",
          "The test was hard. The opposite of hard, neste sentido, is easy.",
          "Yesterday foi ontem. Tomorrow é amanhã. Today é hoje.",
        ],
      },
    ],
    rules: [
      "Ship = navio. Port = porto. Sea = mar. Tide = maré. Wind = vento.",
      "Today, yesterday, tomorrow = hoje, ontem, amanhã.",
      "Always, never, sometimes = sempre, nunca, às vezes.",
      "Early/late, easy/hard, right/wrong, big/small.",
      "Weather é o tempo do clima, não o tempo do relógio. O tempo do relógio, em frase, costuma ser time.",
      "Aprenda a palavra dentro de uma frase curta, não só a tradução solta.",
    ],
    questions: [
      question(
        "ing-vocabulario-n1q1",
        "Básico",
        "A palavra ship significa",
        ["loja", "navio", "mapa", "porto", "tempo"],
        "B",
        "Ship é navio. Porto é port. Mapa é map. Loja seria shop, que parece, mas não é a mesma palavra.",
      ),
      question(
        "ing-vocabulario-n1q2",
        "Básico",
        "A palavra yesterday significa",
        ["hoje", "amanhã", "ontem", "sempre", "nunca"],
        "C",
        "Yesterday = ontem. Today = hoje. Tomorrow = amanhã.",
      ),
      question(
        "ing-vocabulario-n1q3",
        "Básico",
        "The opposite of early is",
        ["late", "soon", "now", "easy", "big"],
        "A",
        "Early significa cedo. O oposto é late, tarde. Soon significa logo, em breve.",
      ),
      question(
        "ing-vocabulario-n1q4",
        "Prova",
        "Em “The tide is high”, a palavra tide significa",
        ["maré", "vento", "porto", "mapa", "navio"],
        "A",
        "Tide é maré. Vento é wind, porto é port, mapa é map e navio é ship.",
      ),
    ],
    cards: cards("ing-vocabulario", [
      ["ship / port / sea", "navio / porto / mar."],
      ["tide / wind / weather", "maré / vento / tempo atmosférico."],
      ["today / yesterday / tomorrow", "hoje / ontem / amanhã."],
      ["early / late", "cedo / tarde."],
      ["easy / hard", "fácil / difícil."],
    ]),
  },
  "por-acentuacao": {
    topicId: "por-acentuacao",
    summary: [
      "A sílaba tônica é a que se pronuncia com mais força. Se ela é a última, a palavra é oxítona: café, jacaré. Se é a penúltima, é paroxítona: mesa, fácil. Se é a antepenúltima, é proparoxítona: matemática, lâmpada.",
      "Oxítona leva acento quando termina em a, e, o, em ou ens, e também nos ditongos abertos tônicos: café, avó, também, parabéns, herói, anéis. Paroxítona é o contrário: a maioria não leva acento, e leva quando a terminação é menos comum, como l, r, n, x, i, us, ã, ão: fácil, caráter, hífen, tórax, júri, vírus, órfã.",
      "Proparoxítona leva acento sempre: física, público, lâmpada. No hiato, o i ou o u tônico, sozinho na sílaba ou seguido de s, leva acento se não vier nh depois: saída, país, baú. Rainha não leva, por causa do nh.",
      "Pelo acordo ortográfico, não se acentua a vogal dobrada nem o ditongo aberto ei/oi das paroxítonas. Escreve-se voo, leem, ideia, jiboia, assembleia. Herói e anéis continuam com acento, porque a sílaba tônica é a última.",
    ],
    examples: [
      {
        title: "Classificar três palavras",
        steps: [
          "Café: a força está em fé, a última sílaba. Oxítona terminada em e, com acento.",
          "Fácil: a força está em fá, a penúltima. Paroxítona terminada em l, com acento.",
          "Matemática: a força está em má, a antepenúltima. Proparoxítona, acento obrigatório.",
        ],
      },
      {
        title: "Saída, ideia e herói",
        steps: [
          "Saída se divide sa-í-da. O i tônico está sozinho na sílaba, em hiato. Leva acento.",
          "Ideia é paroxítona com ditongo ei. Não leva acento: ideia, não idéia.",
          "Herói tem a força na última sílaba. Oxítona com ditongo aberto: o acento fica.",
        ],
      },
    ],
    rules: [
      "Oxítona: acento nas terminações a, e, o, em, ens e nos ditongos abertos tônicos.",
      "Paroxítona: acento nas terminações l, n, r, x, i, is, us, ã, ão, um, ps.",
      "Proparoxítona: todas levam acento.",
      "Hiato: i ou u tônico, sozinho na sílaba ou com s, leva acento. Não leva se houver nh.",
      "Sem acento: voo, leem, ideia, jiboia, assembleia.",
      "Com acento: herói, anéis, papéis, constrói.",
    ],
    questions: [
      question(
        "por-acentuacao-n1q1",
        "Básico",
        "Qual palavra está acentuada corretamente e é oxítona?",
        ["cafe", "café", "fácil", "mesa", "ideia"],
        "B",
        "Café é oxítona terminada em e e leva acento. Fácil é paroxítona. Cafe, sem acento, está incompleto.",
      ),
      question(
        "por-acentuacao-n1q2",
        "Básico",
        "Sobre as proparoxítonas, é correto afirmar que",
        ["todas levam acento", "nenhuma leva acento", "só as terminadas em a levam acento", "seguem a regra das oxítonas", "só levam acento no hiato"],
        "A",
        "Toda proparoxítona é acentuada: matemática, lâmpada, físico, público.",
      ),
      question(
        "por-acentuacao-n1q3",
        "Básico",
        "A grafia correta, pelo acordo atual, é",
        ["idéia", "heroi", "voô", "ideia", "assembléia"],
        "D",
        "Ideia não leva acento. Heroi precisa de acento: herói. Voô e assembléia são grafias antigas. O certo é voo e assembleia.",
      ),
      question(
        "por-acentuacao-n1q4",
        "Prova",
        "A palavra saída leva acento porque",
        ["é proparoxítona", "o i tônico forma hiato e fica sozinho na sílaba", "é oxítona terminada em a", "todo ditongo leva acento", "é paroxítona terminada em a, e todas levam acento"],
        "B",
        "Sa-í-da: o i é tônico e forma hiato com a vogal anterior. Paroxítona terminada em a, sozinha, não levaria acento, como mesa. O acento vem da regra do hiato.",
      ),
    ],
    cards: cards("por-acentuacao", [
      ["Oxítona", "Força na última sílaba. Acento em a, e, o, em, ens: café, também."],
      ["Paroxítona", "Força na penúltima. Acento em l, r, x, i, us: fácil, júri."],
      ["Proparoxítona", "Força na antepenúltima. Todas levam acento."],
      ["ideia ou idéia?", "ideia, sem acento. Herói continua com acento."],
      ["saída", "Acento pelo hiato: o i tônico está sozinho na sílaba."],
    ]),
  },
  "por-gramaticais": {
    topicId: "por-gramaticais",
    summary: [
      "Classe gramatical é o papel da palavra na frase. A mesma palavra pode mudar de classe conforme o uso. O primeiro passo é olhar para o que ela faz, não só para a forma.",
      "Substantivo nomeia: mar, prova, Marina. Artigo acompanha o substantivo: o, a, os, as, um, uma. Adjetivo dá característica: mar calmo, prova longa. Numeral indica quantidade ou ordem: duas alunas, primeiro lugar. Pronome fica no lugar do nome ou o determina: ela, este, meu.",
      "Verbo indica ação, estado ou fenômeno: estudar, estar, chover. Advérbio modifica o verbo, o adjetivo ou outro advérbio: estudou bastante, muito calmo, cedo. Preposição liga termos: de, em, para, com. Conjunção liga orações ou termos semelhantes: e, mas, porque, embora. Interjeição expressa reação: oxalá, psiu.",
    ],
    examples: [
      {
        title: "Classificar “A aluna estudou bastante.”",
        steps: [
          "A: artigo. Aluna: substantivo.",
          "Estudou: verbo.",
          "Bastante modifica o verbo estudou: advérbio.",
          "Se a frase fosse “aluna bastante dedicada”, o bastante modificaria o adjetivo e continuaria advérbio.",
        ],
      },
      {
        title: "Classificar “Li dois capítulos, mas parei cedo.”",
        steps: [
          "Li: verbo. Dois: numeral. Capítulos: substantivo.",
          "Mas liga duas orações com ideia de oposição: conjunção.",
          "Parei: verbo. Cedo modifica o verbo: advérbio.",
        ],
      },
    ],
    rules: [
      "Substantivo nomeia. Adjetivo caracteriza o substantivo.",
      "Verbo situa a ação ou o estado no tempo.",
      "Advérbio modifica verbo, adjetivo ou outro advérbio. Não modifica substantivo.",
      "Numeral quantifica ou ordena: dois, três, primeiro.",
      "Preposição liga um termo a outro. Conjunção liga orações ou termos do mesmo tipo.",
      "Artigo e pronome acompanham ou substituem o substantivo. Olhe a frase inteira antes de cravar a classe.",
    ],
    questions: [
      question(
        "por-gramaticais-n1q1",
        "Básico",
        "Em “O mar estava calmo”, a palavra calmo é",
        ["substantivo", "verbo", "adjetivo", "advérbio", "preposição"],
        "C",
        "Calmo caracteriza o substantivo mar. Palavra que atribui qualidade ao substantivo é adjetivo.",
      ),
      question(
        "por-gramaticais-n1q2",
        "Básico",
        "Em “Ela estudou bastante”, a palavra bastante é",
        ["adjetivo", "advérbio", "substantivo", "conjunção", "artigo"],
        "B",
        "Bastante modifica o verbo estudou, dizendo o modo ou a intensidade. Esse papel é de advérbio.",
      ),
      question(
        "por-gramaticais-n1q3",
        "Básico",
        "Em “Quero estudar, mas estou cansada”, a palavra mas é",
        ["preposição", "advérbio", "substantivo", "conjunção", "verbo"],
        "D",
        "Mas liga duas orações e marca oposição. Palavra que liga orações é conjunção.",
      ),
      question(
        "por-gramaticais-n1q4",
        "Prova",
        "Em “As três alunas chegaram cedo”, a palavra três é",
        ["artigo", "numeral", "advérbio", "conjunção", "interjeição"],
        "B",
        "Três indica quantidade exata do substantivo alunas. Esse papel é de numeral. Cedo, na mesma frase, seria advérbio.",
      ),
    ],
    cards: cards("por-gramaticais", [
      ["Substantivo", "Nomeia: mar, prova, Marina."],
      ["Adjetivo", "Caracteriza o substantivo: mar calmo."],
      ["Advérbio", "Modifica verbo, adjetivo ou advérbio: estudou bastante, chegou cedo."],
      ["Conjunção", "Liga orações: e, mas, porque."],
      ["Numeral", "Quantidade ou ordem: duas, três, primeiro."],
    ]),
  },
  "por-redacao-estrutura": {
    topicId: "por-redacao-estrutura",
    summary: [
      "A dissertação da prova defende uma ideia. Ela não conta o seu dia e não descreve um lugar por descrever. O leitor precisa encontrar uma tese, argumentos e um fechamento.",
      "A introdução, em um parágrafo, apresenta o tema e a tese. A tese é uma frase que dá para defender. “A leitura frequente amplia o repertório de quem estuda” é uma tese. “A leitura é muito importante” é vaga demais para sustentar dois parágrafos.",
      "O desenvolvimento traz dois parágrafos, em geral. Cada um começa pelo tópico frasal, a frase que anuncia o argumento. Depois vem a explicação e um exemplo concreto. A conclusão retoma a tese com outras palavras e fecha. Não abre assunto novo e não copia o enunciado.",
    ],
    examples: [
      {
        title: "Do tema ao esquema",
        steps: [
          "Tema: a leitura na formação de quem estuda para um concurso.",
          "Tese: a leitura frequente amplia o repertório e a clareza de quem estuda.",
          "Argumento 1: ler textos variados dá exemplos para usar na própria prova.",
          "Argumento 2: a leitura longa treina a atenção que a prova exige.",
          "Conclusão: retomar a tese e indicar a leitura como hábito, sem inventar um tema novo.",
        ],
      },
      {
        title: "Um parágrafo de desenvolvimento",
        steps: [
          "Tópico frasal: ler textos de áreas diferentes fornece exemplos que o candidato consegue usar.",
          "Explicação: um exemplo só funciona se estiver a serviço da tese, não como enfeite.",
          "Fecho do parágrafo: por isso a leitura entra no texto como prova do argumento, não como lista solta.",
        ],
      },
    ],
    rules: [
      "Antes de escrever: uma tese, dois argumentos, a conclusão.",
      "Introdução: tema + tese em uma frase defensável.",
      "Cada parágrafo de desenvolvimento começa com tópico frasal.",
      "Exemplo serve ao argumento. Argumento serve à tese.",
      "Conclusão retoma a tese. Não abre assunto novo.",
      "Não copie o texto motivador e não responda com frase de efeito vazia.",
    ],
    questions: [
      question(
        "por-redacao-estrutura-n1q1",
        "Básico",
        "A tese, numa dissertação, deve aparecer de forma clara",
        ["somente na conclusão", "na introdução, como uma frase que se pode defender", "apenas no título", "em cada exemplo, com palavras diferentes", "depois de uma proposta solta"],
        "B",
        "A introdução apresenta o tema e a tese. A conclusão retoma essa tese; não é o primeiro lugar em que ela aparece.",
      ),
      question(
        "por-redacao-estrutura-n1q2",
        "Básico",
        "O parágrafo de desenvolvimento costuma começar com",
        ["uma pergunta sem resposta", "o tópico frasal", "a cópia do enunciado", "uma interjeição", "a data da prova"],
        "B",
        "O tópico frasal anuncia o argumento daquele parágrafo. Explicação e exemplo vêm depois.",
      ),
      question(
        "por-redacao-estrutura-n1q3",
        "Básico",
        "A conclusão deve",
        ["abrir um assunto novo", "retomar a tese e fechar o texto", "repetir a introdução com as mesmas palavras", "listar conectivos", "apresentar dados que não têm relação com a tese"],
        "B",
        "A conclusão fecha. Retomar a tese não é copiá-la, e assunto novo nesse ponto deixa o texto sem fim.",
      ),
      question(
        "por-redacao-estrutura-n1q4",
        "Prova",
        "Qual planejamento é o mais adequado antes de começar o texto?",
        [
          "Escrever direto e decidir o tema no último parágrafo.",
          "Montar um esquema com a tese, dois argumentos e a conclusão.",
          "Escrever três introduções e escolher uma no fim.",
          "Começar pela proposta, sem tese.",
          "Copiar o texto motivador e trocar algumas palavras.",
        ],
        "B",
        "O esquema evita o texto que muda de ideia no meio. Tese, dois argumentos e conclusão já orientam a hora de escrever.",
      ),
    ],
    cards: cards("por-redacao-estrutura", [
      ["O que é a tese?", "A frase que o texto vai defender."],
      ["Onde a tese aparece primeiro?", "Na introdução."],
      ["Tópico frasal", "A frase que abre o parágrafo e anuncia o argumento."],
      ["O que a conclusão não faz?", "Não abre assunto novo."],
      ["Esquema mínimo", "Tese, dois argumentos, conclusão."],
    ]),
  },
};

export const LESSONS: Record<string, Lesson> = { ...CORE_LESSONS, ...EXTRA_LESSONS, ...RIGOR_STUBS };

export function lessonFor(topicId: string): Lesson | undefined {
  return LESSONS[topicId];
}

const lessonIds = Object.values(LESSONS).flatMap((lesson) => [
  lesson.topicId,
  ...lesson.questions.map((item) => item.id),
  ...lesson.cards.map((item) => item.id),
]);
const seenLessons = new Set<string>();
for (const id of lessonIds) {
  if (seenLessons.has(id)) throw new Error(`Id repetido na sala: ${id}`);
  seenLessons.add(id);
}

for (const item of TRAIL) {
  for (const topic of item.topics) {
    const lesson = LESSONS[topic.id];
    const early = item.weekEnd <= 6 && (topic.subjectId === "matematica" || topic.subjectId === "fisica");
    const rigor = RIGOR_TOPICS.has(topic.id);
    if (early && !rigor && (!lesson || lesson.questions.length !== 5)) {
      throw new Error(`${topic.id} deveria ter 5 questões`);
    }
    if (!lesson) continue;
    if (lesson.topicId !== topic.id) throw new Error(`Tópico divergente: ${topic.id}`);
    if (!rigor && lesson.questions.length < 4) throw new Error(`${topic.id} com poucas questões`);
    if (lesson.cards.length < 4) throw new Error(`${topic.id} deveria ter flashcards`);
  }
}
