import type { Didactic } from "./types.ts";

export const didactic: Didactic = {
  origin: [
    "Polinômio é uma soma de potências inteiras de x, com coeficientes fixos. Al-Khwarizmi organiza a equação do segundo grau. Viète, no fim do século XVI, lê os coeficientes como funções das raízes: a soma e o produto aparecem na própria escrita, sem resolver a equação. O grau é o maior expoente com coeficiente diferente de zero. Em 4x³ − x + 7, o grau é 3. O 4 é coeficiente.",
    "Há duas leituras, e as duas servem. Como expressão, o polinômio se soma e se multiplica pelas regras da álgebra. Como função, p(a) é o número que se obtém trocando x por a. O teorema do resto liga as duas: dividir por x − a deixa resto p(a).",
    "A curva de um casco ou a tabela de um tanque não são, em geral, um polinômio que se decora. O que a prova cobra, e o que esta aula entrega, é ler raiz, fator, soma e produto sem resolver tudo por fórmula.",
  ],
  construction: [
    "p(0) é o termo independente. Em 3x² − 2x + 5, p(0) = 5. Se p(a) = 0, a é raiz.",
    "Divisão por x − a: p(x) = (x − a) q(x) + r, e r é constante porque o divisor tem grau 1. Troque x por a: p(a) = r. O resto da divisão de x³ + x + 1 por x − 1 é p(1) = 3. Se o resto é zero, x − a divide p(x). É o teorema do fator. p(x) = x² − 4 tem p(2) = 0, então x − 2 é fator.",
    "Viète no segundo grau. Em ax² + bx + c = 0, a soma das raízes é −b/a e o produto é c/a. Em x² − 5x + 6 = 0, a soma é 5 e o produto é 6: raízes 2 e 3. Em 2x² − 5x + 2 = 0, o produto é 2/2 = 1 e a soma é 5/2: raízes 2 e 1/2. O polinômio mônico com raízes 2 e −3 é (x − 2)(x + 3) = x² + x − 6.",
    "Identidade útil: r² + s² = (r + s)² − 2rs. Nas raízes de x² − 4x + 1 = 0, a soma é 4 e o produto é 1, então r² + s² = 16 − 2 = 14. Não é preciso escrever 2 ± √3.",
    "Fatoração conhecida: x³ − 1 = (x − 1)(x² + x + 1). A segunda parcela não tem raiz real, porque o discriminante é 1 − 4 = −3. Confira sempre o produto de volta.",
    "No cúbico mônico x³ + ax² + bx + c, a soma das raízes é −a. Em x³ − 6x² + 11x − 6, a soma é 6. As raízes são 1, 2 e 3, e o produto é 6, que aparece no termo independente com o sinal de (−1)³.",
    "Raiz múltipla. Se (x − a)² divide p, então p(a) = 0 e a derivada também zera, porque a fatoração p(x) = (x − a)² q(x) deriva em dois fatores (x − a). Em x³ − 3x + 2, p(1) = 0 e p'(x) = 3x² − 3, p'(1) = 0. A fatoração é (x − 1)² (x + 2). A raiz 1 tem multiplicidade 2, e a outra raiz é −2.",
    "Raiz inteira. Se os coeficientes são inteiros e k inteiro é raiz, k divide o termo independente. A conta: p(k) = 0 põe o termo independente sozinho de um lado, e todos os outros termos têm k em fator. 4 não divide 6, então 4 não é raiz inteira de um polinômio de coeficientes inteiros com termo independente 6. 1, 2, 3 e 6 continuam possíveis. Dividir não garante que seja raiz. Só elimina quem não divide.",
  ],
  examples: [
    {
      title: "x³ + 2x² − x − 2 dividido por x² − 1",
      steps: [
        "x² − 1 = (x − 1)(x + 1).",
        "p(1) = 1 + 2 − 1 − 2 = 0 e p(−1) = −1 + 2 + 1 − 2 = 0.",
        "Os dois fatores dividem. O quociente tem grau 1.",
        "(x + 2)(x² − 1) = x³ + 2x² − x − 2. Quociente x + 2, resto zero.",
      ],
    },
    {
      title: "r² + s² sem achar as raízes",
      steps: [
        "Em x² − 4x + 1 = 0, r + s = 4 e rs = 1.",
        "r² + s² = (r + s)² − 2rs.",
        "16 − 2 × 1 = 14.",
      ],
    },
  ],
  application: [
    "Uma tabela de calado e volume do casco é discreta. Interpolar com um polinômio é um modelo, e o resto da divisão avisa o erro quando se força o gráfico a passar por um ponto que não é raiz. A bordo, a tabela oficial manda. Na prova, o resto p(a) é a resposta.",
    "Soma e produto permitem cobrar uma expressão simétrica, r² + s² ou 1/r + 1/s, sem resolver a equação. 1/r + 1/s = (r + s)/rs. É o mesmo gesto de Viète, e é o que separa quem resolveu as raízes por fórmula de quem leu os coeficientes.",
    "Raiz dupla aparece quando o gráfico encosta no eixo e volta. Derivar não é um capítulo à parte aqui: é o teste de que o fator se repete. Se p(a) = 0 e p'(a) ≠ 0, a raiz é simples.",
  ],
  traps: [
    "Tomar o coeficiente líder como grau.",
    "Achar o resto da divisão por x − a fazendo a divisão longa inteira, e errar a conta, em vez de calcular p(a).",
    "Inverter soma e produto: em x² − 5x + 6, a soma é 5, não 6.",
    "Esquecer o sinal de Viète. Em x² + x − 6 = 0, a soma das raízes é −1.",
    "Tratar todo divisor do termo independente como raiz. É só candidato.",
    "Ver p(1) = 0 e concluir multiplicidade 1, sem olhar p'(1), quando a raiz é dupla.",
    "Na identidade r² + s², esquecer o −2rs e marcar (r + s)².",
  ],
  bibliography: [
    {
      book: "Gelson Iezzi e outros. Fundamentos de Matemática Elementar, vol. 6.",
      place: "Capítulos de polinômios, divisão, teorema do resto e equações algébricas.",
      note: "Referência desta aula. Faça o teorema do resto antes das relações de Girard, que são o Viète no grau que for.",
    },
    {
      book: "Matemática: Ciência e Aplicações, vol. 3.",
      place: "Capítulo de polinômios.",
      note: "Mais exercício de raiz racional e de expressão simétrica nas raízes.",
    },
    {
      book: "Elon Lages Lima e outros. A Matemática do Ensino Médio, vol. 3. SBM.",
      place: "Capítulo de equações algébricas: divisão por x − a e relações entre coeficientes e raízes.",
      note: "O estudo começa no volume 1 e este capítulo retoma com o resto da divisão e as relações de Girard. É a demonstração de por que a raiz inteira divide o termo independente.",
    },
  ],
};
