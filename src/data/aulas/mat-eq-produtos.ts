import type { Didactic } from "./types.ts";

export const didactic: Didactic = {
  origin: [
    "Equação é uma pergunta disfarçada de balança. No século IX, al-Khwarizmi organizou o que já se fazia no comércio e nas partilhas: achar uma quantidade desconhecida quando se conhece o que ela produz junto com números conhecidos. O nome “álgebra” vem desse gesto de restaurar o equilíbrio, não de um capítulo abstrato.",
    "O produto notável tem desenho. (a + b)² é um quadrado de lado a + b. Dentro dele cabem o quadrado de lado a, o quadrado de lado b e dois retângulos de lados a e b. A área é a² + b² + 2ab. Quem escreve a² + b² esquece os dois retângulos. A identidade não foi inventada para encurtar conta. Ela descreve essa figura.",
    "Inequação aparece quando o problema não pede um número só, e sim uma faixa. Um tanque não pode passar de um volume. Um calado não pode passar de um limite. A solução é um conjunto, e o sinal da desigualdade carrega o sentido dessa faixa. Virar o sinal sem motivo, ou deixar de virar quando se multiplica por negativo, troca a faixa permitida pela faixa proibida.",
  ],
  construction: [
    "Uma equação do 1º grau, ax + b = 0 com a ≠ 0, se resolve porque cada passo produz uma equação equivalente: os mesmos números a satisfazem. Somar o mesmo valor aos dois lados conserva a igualdade. Multiplicar os dois lados por um número diferente de zero também. Multiplicar por zero destruiria a informação.",
    "Na inequação, somar continua seguro. Multiplicar por um positivo também. Multiplicar por um negativo inverte a ordem na reta: se −x > −2, então x < 2. O motivo é o mesmo da multiplicação por −1, que troca os lados da origem. 3 − x > 1 não é x > 2. A conferência com um número de cada lado do candidato pega o sinal trocado.",
    "No 2º grau, ax² + bx + c = 0. O discriminante Δ = b² − 4ac conta quantas raízes reais existem antes de calculá-las: positivo, duas; zero, uma (dupla); negativo, nenhuma no conjunto dos reais. A fórmula x = (−b ± √Δ) / (2a) sai de completar o quadrado, o mesmo gesto do produto notável. Não é um amuleto.",
    "Completar o quadrado em x² − 5x + 6, por exemplo, também pode ser fatoração direta: procurar dois números que multiplicam 6 e somam 5, porque o sinal do meio é negativo na forma (x − p)(x − q). 2 e 3 servem. As raízes são os valores que zeram cada fator.",
    "Produto (x − 2)(x + 5) se expande termo a termo. O meio 3x é a soma 5x + (−2x), não uma média. Diferença de quadrados a² − b² = (a − b)(a + b) é o caso em que os retângulos do meio se cancelam. (a + b)² − (a − b)² deixa 4ab, porque os meios não se cancelam: um é +2ab e, ao subtrair −2ab, o outro também vira +2ab.",
    "Elevar ao quadrado não é equivalência automática. √(x + 2) = x exige x ≥ −2 e x ≥ 0, porque a raiz não é negativa. Depois de elevar, x² − x − 2 = 0 produz x = 2 e x = −1. Só x = 2 volta ao enunciado. A raiz extra nasceu no passo que não era reversível para todo número.",
    "Quando há denominador, o conjunto de partida já perdeu os zeros dele. Em 1/(x − 2) + 1 = 2/(x − 2), x = 2 está fora. Multiplicar por (x − 2) é lícito só nesse domínio, e a solução x = 3 precisa ser conferida. Chamar x = 2 de solução é exatamente cair no ponto que foi excluído para a conta poder acontecer.",
  ],
  examples: [
    {
      title: "De onde vem (a + b)²",
      steps: [
        "Desenhe um quadrado de lado a + b. A área é (a + b)².",
        "Separe um quadrado a × a, um quadrado b × b e dois retângulos a × b.",
        "A soma das áreas é a² + 2ab + b². Não falta termo e não sobra termo.",
        "Se b troca de sinal, (a − b)² = a² − 2ab + b². O retângulo muda de lugar na conta, não some.",
      ],
    },
    {
      title: "(x − 1)(x − 3) > 0",
      steps: [
        "Os fatores zeram em 1 e em 3. Esses pontos partem a reta em três pedaços.",
        "À esquerda de 1, os dois fatores são negativos. Negativo com negativo dá positivo.",
        "Entre 1 e 3, os sinais discordam. O produto é negativo e não serve para a desigualdade estrita.",
        "À direita de 3, os dois são positivos. A solução é x < 1 ou x > 3, sem incluir 1 e 3.",
      ],
    },
  ],
  application: [
    "Equação linear aparece no balanço simples de um tanque: o que entra, o que sai e o que já estava. Se a conta não fecha, a incógnita é o volume que falta ou sobra. Inequação é o limite: o volume tem de ficar abaixo da capacidade, o esforço abaixo do que o equipamento admite.",
    "Produto notável encurta a conta de uma área, de uma seção, de um erro percentual composto. (1 + r)² não é 1 + r². Num acréscimo de 10% seguido de outro, o fator é 1,21, não 1,20. O 0,01 que parece detalhe é o dobro do produto, e em carga ou consumo ele é dinheiro e massa.",
    "A restrição de domínio é procedimento. Uma fórmula de bordo que divide por uma diferença de leituras não se usa quando as leituras coincidem. O certo é parar e medir de novo, não “cancelar” até a expressão ficar bonita.",
  ],
  traps: [
    "Esquecer 2ab em (a + b)², ou o sinal do meio em (a − b)².",
    "Virar o sinal da inequação ao somar, ou não virar ao multiplicar por negativo.",
    "Incluir a raiz numa desigualdade estrita, ou excluir a raiz numa desigualdade que tem igual.",
    "Aceitar a raiz extra depois de elevar ao quadrado. √(x + 2) = x não tem solução x = −1.",
    "Apresentar como solução o valor que zera o denominador.",
    "Resolver x² − 4x + 3 ≤ 0 como “x ≤ 1 ou x ≥ 3”, que é justamente o lado em que a parábola com a > 0 fica positiva.",
  ],
  bibliography: [
    {
      book: "Gelson Iezzi e outros. Fundamentos de Matemática Elementar, vol. 1.",
      place: "Capítulos de produtos notáveis, fatoração, equações e inequações do 1º e do 2º graus.",
      note: "Faça a figura do quadrado antes da lista de identidades. O FME traz a fatoração no mesmo volume dos conjuntos.",
    },
    {
      book: "Matemática: Ciência e Aplicações, vol. 1.",
      place: "Capítulos de álgebra elementar: produtos notáveis, equações e inequações.",
      note: "Use para quantidade de exercício depois que o porquê do FME estiver claro.",
    },
    {
      book: "Elon Lages Lima e outros. A Matemática do Ensino Médio, vol. 1. SBM.",
      place: "Trechos sobre equações polinomiais e a reta real.",
      note: "Aprofunda a ideia de equivalência: quais transformações preservam o conjunto solução e quais não preservam.",
    },
  ],
};
