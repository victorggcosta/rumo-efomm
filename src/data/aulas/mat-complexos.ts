import type { Didactic } from "./types.ts";

export const didactic: Didactic = {
  origin: [
    "O número complexo entra porque a equação x² + 1 = 0 não tem raiz real. Cardano e Bombelli, no século XVI, esbarram em raízes de negativos no meio da resolução de cúbicas, mesmo quando o resultado final é real. Durante um tempo isso foi tratado como artifício. Gauss e Argand mostram que a + bi é um ponto do plano, e o artifício vira geometria.",
    "i é o ponto (0, 1), definido por i² = −1. A partir daí, i³ = −i e i⁴ = 1. O ciclo tem período 4. Não há lista para decorar além dessa conta.",
    "Somar complexos é somar vetores. Multiplicar por i gira o ponto 90° no sentido anti-horário, sem mudar a distância até a origem. Um deslocamento 3 milhas leste e 4 norte, escrito 3 + 4i, vira −4 + 3i. O módulo continua 5. É a mesma operação que a prova pede na forma algébrica, lida no plano.",
  ],
  construction: [
    "z = a + bi, com a e b reais. O conjugado troca o sinal de b: 2 − 3i tem conjugado 2 + 3i. O módulo é √(a² + b²), a distância até a origem. |3 + 4i| = 5.",
    "Soma: junta as partes. (4 + 2i) + (1 − 5i) = 5 − 3i. Produto: distribui e usa i² = −1. (1 + i)² = 1 + 2i + i² = 2i. Um número vezes o conjugado dá o quadrado do módulo: (1 + 2i)(1 − 2i) = 5.",
    "Divisão: multiplica-se em cima e embaixo pelo conjugado do denominador. 1/i = −i, porque i × (−i) = 1. (3 + i)/(1 + i) = 2 − i, porque o numerador vira 4 − 2i e o denominador vira 2.",
    "Forma polar: z = r (cos θ + i sen θ), com r = |z| e θ o argumento, medido a partir do eixo real, no sentido anti-horário. 1 + i tem r = √2 e θ = π/4. √3 + i tem r = 2 e θ = π/6, porque a tangente é 1/√3 e o ponto está no primeiro quadrante. Trocar real e imaginária troca π/6 com π/3.",
    "No produto, os módulos se multiplicam e os argumentos se somam. Por isso (1 + i)⁴ tem módulo (√2)⁴ = 4 e argumento 4 × π/4 = π, que é o ponto −4. A conta algébrica confirma: (1 + i)² = 2i e (2i)² = −4.",
    "Equação do segundo grau com discriminante negativo: as raízes são complexas conjugadas, se os coeficientes são reais. z² + 4 = 0 dá z = ±2i. z² − 2z + 2 = 0 tem discriminante −4, e as raízes são 1 ± i. Substituir uma delas de volta pega o erro de sinal.",
    "O conjunto |z − (1 + i)| = √2 é a circunferência de centro 1 + i e raio √2. O módulo de uma diferença é distância. Essa leitura geométrica evita expandir |z|² sem necessidade quando a pergunta é só centro e raio.",
  ],
  examples: [
    {
      title: "(3 + i) / (1 + i)",
      steps: [
        "Conjugado do denominador: 1 − i.",
        "Denominador: (1 + i)(1 − i) = 2.",
        "Numerador: (3 + i)(1 − i) = 3 − 3i + i + 1 = 4 − 2i.",
        "Resultado: (4 − 2i) / 2 = 2 − i.",
      ],
    },
    {
      title: "Girar 3 + 4i por i",
      steps: [
        "i(3 + 4i) = 3i + 4i² = −4 + 3i.",
        "Módulo de 3 + 4i: 5. Módulo de −4 + 3i: 5.",
        "A parte real negativa é oeste. A imaginária positiva é norte, na convenção da aula.",
      ],
    },
  ],
  application: [
    "Um deslocamento leste-norte cabe num complexo, e multiplicar por i descreve um giro de 90° sem desenhar a rosa dos ventos de novo. A convenção precisa ser dita: aqui o leste é a parte real e o norte é a imaginária. Outra convenção troca as duas, e o resultado numérico muda de lugar.",
    "Impedância de circuitos, mais adiante na trilha de eletricidade, usa o mesmo plano: resistência na parte real e reatância na imaginária. O módulo é a impedância total, Pitágoras de novo. Esta aula não resolve circuito. Deixa o módulo e o argumento prontos para quando o assunto chegar.",
    "Raiz de número negativo deixa de ser 'não existe' e passa a ser múltiplo de i. A prova antiga que pedia para descartar a raiz negativa de um discriminante, no contexto real, continua válida quando o enunciado exige solução real. No contexto complexo, ±2i são as duas soluções de z² = −4.",
  ],
  traps: [
    "Tomar i² como 1, ou i³ como i.",
    "Conjugar trocando também o sinal da parte real.",
    "Dividir parte por parte, (3 + i)/(1 + i) como 3/1 + i/i, sem o conjugado.",
    "Esquecer que o argumento de √3 + i é π/6, e o de 1 + i√3 é π/3.",
    "Achar que z² = −4 tem soluções reais 2 e −2. O quadrado delas é 4.",
    "Na forma polar, multiplicar os argumentos ou somar os módulos. É o contrário.",
    "Girar por i e mudar o módulo. Giro preserva a distância até a origem.",
  ],
  bibliography: [
    {
      book: "Gelson Iezzi e outros. Fundamentos de Matemática Elementar, vol. 6.",
      place: "Capítulos de números complexos: forma algébrica, módulo, conjugado e forma polar.",
      note: "Referência desta aula. O volume também traz polinômios, que são o assunto seguinte. Faça o plano de Argand antes da fórmula de De Moivre.",
    },
    {
      book: "Matemática: Ciência e Aplicações, vol. 3.",
      place: "Capítulo de números complexos.",
      note: "Mais equação do segundo grau no conjunto complexo e operação na forma polar.",
    },
    {
      book: "Elon Lages Lima e outros. A Matemática do Ensino Médio, vol. 3. SBM.",
      place: "Capítulo de números complexos.",
      note: "Aprofunda a multiplicação como giro e homotetia, que é a leitura usada no deslocamento 3 + 4i.",
    },
  ],
};
