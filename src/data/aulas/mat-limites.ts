import type { Didactic } from "./types.ts";

export const didactic: Didactic = {
  origin: [
    "A derivada nasce de duas perguntas que são a mesma. Newton quer a velocidade num instante, não a média de uma viagem. Leibniz quer a inclinação da reta que toca uma curva num ponto. As duas pedem um quociente de acréscimos quando o acréscimo do tempo, ou de x, fica arbitrariamente pequeno. O limite é o nome desse valor.",
    "O limite de f(x) quando x tende a a é o número de que f se aproxima, com x perto de a e x diferente de a. A função pode nem existir em a. (x² − 1)/(x − 1) não está definida em x = 1, e ainda assim o limite é 2, porque para x ≠ 1 a expressão é x + 1.",
    "Polinômio e constante não pedem artifício. lim x→2 (3x + 1) = 7. lim x→5 4 = 4. A constante não olha para onde x caminha.",
  ],
  construction: [
    "Quando a substituição dá 0/0, a expressão ainda não está simplificada. Fatore. (x² − 1)/(x − 1) = x + 1 para x ≠ 1, e o limite em 1 é 2. O cancelamento não define a função no ponto. Define o limite, que não precisa do ponto.",
    "Raiz no numerador, o mesmo 0/0, pede o conjugado. [√(1 + x) − 1] / x, multiplicado por √(1 + x) + 1 no numerador e no denominador, vira 1 / [√(1 + x) + 1] para x ≠ 0. O limite em 0 é 1/2.",
    "Limites laterais. |x| / x vale 1 para x positivo e −1 para x negativo. Os lados de 0 discordam, então lim x→0 |x| / x não existe. Não é 0, nem infinito.",
    "A derivada de f em a é lim h→0 [f(a + h) − f(a)] / h, se esse limite existe. É a inclinação da tangente e, se f é a posição, é a velocidade instantânea. A velocidade média num intervalo longo não é essa derivada.",
    "Para f(x) = x², o quociente é [2xh + h²] / h = 2x + h, com h ≠ 0. O limite é 2x. Em x = 3, a derivada vale 6. O valor f(3) = 9 é outra coisa: é a altura do ponto, não a inclinação.",
    "O mesmo cálculo em x³ dá 3x². Em x = 2, f'(2) = 12. Uma constante tem derivada 0, porque o numerador da definição é zero. Soma e produto por constante passam para a derivada: a derivada de 5x² − 3x + 1 é 10x − 3, que em x = 1 vale 7.",
    "Para f(x) = 1/x, o quociente da definição simplifica para −1 / [x(x + h)]. O limite é −1/x². Em x = 2, a derivada é −1/4. A inclinação é negativa: a hipérbole desce enquanto x cresce, no ramo positivo.",
    "A reta tangente no ponto de abscissa a usa o ponto (a, f(a)) e a inclinação f'(a). Em y = x², no x = 1, o ponto é (1, 1) e a inclinação é 2. A tangente é y − 1 = 2(x − 1), ou y = 2x − 1.",
    "Onde a derivada troca de positiva para negativa, há um máximo local, numa função derivável. f(x) = 4x − x² tem f'(x) = 4 − 2x, zero em x = 2. f(2) = 4. O número 2 é a abscissa. O máximo é o valor 4.",
    "Se s(t) = t² + 4t, com s em metros e t em segundos, v(t) = 2t + 4. Em t = 3 s, a velocidade é 10 m/s. Se s(t) = t³ − 6t², v(t) = 3t(t − 4), e a velocidade se anula em t = 0 e em t = 4.",
  ],
  examples: [
    {
      title: "lim x→0 [√(1 + x) − 1] / x",
      steps: [
        "A substituição direta dá 0/0.",
        "Multiplique pelo conjugado. O numerador vira x.",
        "Para x ≠ 0, resta 1 / [√(1 + x) + 1].",
        "O limite é 1/2.",
      ],
    },
    {
      title: "Tangente a y = x² em x = 1",
      steps: [
        "Ponto: (1, 1). Derivada: 2x, que vale 2.",
        "y − 1 = 2(x − 1).",
        "y = 2x − 1.",
      ],
    },
  ],
  application: [
    "A velocidade de uma lancha num instante é a derivada da posição, não o quociente entre a distância do cais e o tempo desde a saída, se a velocidade mudou no caminho. s(t) = t² + 4t dá 10 m/s em t = 3 s. A posição nesse instante é outra leitura do mesmo s.",
    "Um máximo de uma função quadrática, como o alcance de uma grandeza que sobe e desce, aparece onde a derivada se anula e troca de sinal. Marcar a abscissa no lugar do valor da função troca o instante, ou a posição, pela altura do máximo.",
    "Limite e valor da função se separam de propósito na prova. Uma expressão indefinida no ponto pode ter limite. Calcular f(a) quando a expressão não existe em a, e concluir que o limite não existe, é o erro simétrico de cancelar e achar que a função ficou definida.",
  ],
  traps: [
    "Substituir num 0/0 e concluir que o limite é zero, ou que não existe, sem fatorar.",
    "Confundir f(a) com f'(a). Em x², no ponto 3, um vale 9 e o outro vale 6.",
    "Tratar |x| / x como se os dois lados concordassem.",
    "Na tangente, usar a inclinação certa e esquecer de passar pelo ponto, escrevendo y = 2x em vez de y = 2x − 1.",
    "Derivar 1/x como se a potência não tivesse o sinal. A derivada é −1/x².",
    "No máximo, responder a abscissa em que a derivada zera, quando a pergunta pede o valor da função.",
    "Chamar de velocidade instantânea a velocidade média de um intervalo grande.",
  ],
  bibliography: [
    {
      book: "Gelson Iezzi e outros. Fundamentos de Matemática Elementar, vol. 8.",
      place: "Capítulos de limite, continuidade e derivada.",
      note: "Referência desta aula. Faça a definição pelo quociente antes da tabela de derivadas. A tabela é o resumo dessa conta, não o ponto de partida.",
    },
    {
      book: "Matemática: Ciência e Aplicações, vol. 3, nas edições que incluem noções de limite e derivada.",
      place: "Capítulo correspondente a limites e derivadas de polinômios.",
      note: "Mais exercício de limite indeterminado e de reta tangente, quando a edição traz o assunto.",
    },
    {
      book: "Hamilton Luiz Guidorizzi. Um Curso de Cálculo, vol. 1.",
      place: "Capítulos iniciais de limite e de derivada.",
      note: "O passo seguinte, já em nível universitário. Serve para ver a definição com mais calma depois que os limites desta aula estiverem seguros. Não é o livro da prova da EFOMM.",
    },
  ],
};
