import type { Didactic } from "./types.ts";

export const didactic: Didactic = {
  origin: [
    "Função afim é a matemática de uma taxa que não muda. Preço com uma taxa fixa por quilômetro, nível de um tanque que desce a vazão constante, posição de quem anda sem acelerar. O gráfico é uma reta porque incrementos iguais de x produzem incrementos iguais de y. O número a é esse incremento. O número b é o valor quando x ainda é zero.",
    "A parábola entra quando a taxa deixa de ser constante. Galileu, estudando a queda e o lançamento, achou que a trajetória de um projétil, sem resistência do ar, é uma parábola. A função quadrática é o modelo algébrico dessa curva: um termo em x², que entorta a reta, mais os termos que a reta já tinha.",
    "Máximo e mínimo não são enfeite de vértice. São a pergunta prática: qual a maior altura, qual o menor custo, em que instante a velocidade se anula. O vértice é o ponto em que a taxa, que vinha diminuindo ou aumentando, passa por zero. A fórmula −b/(2a) marca esse instante. Ela se deduz. Não se decora como senha.",
  ],
  construction: [
    "f(x) = ax + b, com a ≠ 0. A diferença f(x₂) − f(x₁) = a(x₂ − x₁). Por isso a é a taxa. Se a > 0, x maior produz f maior: a função cresce. Se a < 0, crescer x faz f cair. A raiz é o x em que ax + b = 0, logo x = −b/a, desde que a ≠ 0. f(0) = b é o corte com o eixo vertical.",
    "Dois pontos determinam a taxa. Entre (0, 1) e (2, 5), a = (5 − 1)/(2 − 0) = 2, e b = 1 porque o primeiro ponto já está no eixo y. f(x) = 2x + 1. Qualquer outro ponto da reta, como f(3) = 7, é consequência, não um terceiro dado livre.",
    "f(x) = ax² + bx + c, a ≠ 0. Para achar o vértice, complete o quadrado. Escreva ax² + bx = a(x² + (b/a)x). Some e subtraia o quadrado da metade de b/a: a[(x + b/(2a))² − (b/(2a))²] + c. O termo (x + b/(2a))² é sempre ≥ 0. Ele vale zero quando x = −b/(2a). Esse é o x do vértice.",
    "Se a > 0, o quadrado empurrado por a só aumenta a função quando saímos do vértice. O vértice é mínimo. Se a < 0, o mesmo quadrado, multiplicado por negativo, só diminui a função ao nos afastarmos. O vértice é máximo. O sinal de a é a concavidade. Não é um detalhe estético do desenho.",
    "O y do vértice é f calculado nesse x. Em f(x) = −x² + 4x, x = 2 e f(2) = 4. Em y = −2x² + 8x + 10, x = 2 e y = 18. O valor 10, nesse segundo caso, é só f(0). O máximo não tem obrigação de estar no eixo y.",
    "Quando as raízes são conhecidas, f(x) = a(x − r)(x − s). O vértice fica no meio, x = (r + s)/2, porque a parábola é simétrica em relação a esse eixo. Se f(2) = 4, as raízes são 1 e 3 e a é negativo, então a = −4 e o máximo é o próprio 4. A simetria também explica por que um ponto e o seu reflexo têm o mesmo y.",
    "Δ = 0 é o caso de uma raiz só: o vértice encosta no eixo x. Em x² − 2x + k = 0, Δ = 4 − 4k. Zerar dá k = 1, e a equação vira (x − 1)² = 0. “Exatamente uma raiz” no 2º grau significa raiz dupla, não uma raiz simples de 1º grau.",
  ],
  examples: [
    {
      title: "Vértice (2, −1) passando por (0, 3)",
      steps: [
        "A forma com o vértice pronto é f(x) = a(x − 2)² − 1.",
        "f(0) = 4a − 1 = 3, então 4a = 4 e a = 1.",
        "f(x) = (x − 2)² − 1. f(4) = 4 − 1 = 3.",
        "4 está à mesma distância de 2 que 0 está. A simetria já anunciava o mesmo y, e a conta confirma.",
      ],
    },
    {
      title: "Onde f(x) = 2x + 1 é positiva",
      steps: [
        "2x + 1 > 0 dá 2x > −1 e x > −1/2. A divisão é por positivo, o sinal fica.",
        "A raiz é −1/2. A taxa é positiva, então à direita da raiz a reta está acima do eixo x.",
        "À esquerda, a função é negativa. Incluir o igual responderia ≥, que o enunciado não pediu.",
      ],
    },
  ],
  application: [
    "Uma estimativa linear de consumo, de distância ou de custo é uma função afim enquanto a taxa puder ser tratada como constante. Assim que a taxa muda — o navio consome mais por milha quando a velocidade sobe —, o modelo linear deixa de bastar e entra um termo de grau maior. Saber onde o modelo quebra faz parte de usá-lo.",
    "Máximo e mínimo aparecem em carga e em geometria simples: a área de uma seção retangular com perímetro fixo é uma quadrática, e o máximo fica no quadrado. A altura de um jato d’água ou de um lançamento, no modelo sem ar, é o y do vértice. Ler o gráfico é ler essa altura sem refazer a conta, desde que os eixos estejam nas unidades certas.",
    "Na análise de um gráfico de bordo ou de um ensaio, a inclinação de um trecho reto é uma taxa. Um joelho na curva avisa que a taxa mudou. Confundir o valor da função com a inclinação é trocar “quanto tem agora” por “quão rápido está mudando”.",
  ],
  traps: [
    "Trocar o sinal de −b/(2a), ou usar b/(2a) sem o menos. Em x² − 6x + 5, b já é negativo, e −b é positivo.",
    "Decidir máximo ou mínimo pelo sinal de b ou de c. Quem decide é a, o coeficiente de x².",
    "Achar que o máximo é f(0), ou que o vértice está numa raiz. A raiz é corte no eixo x. O vértice pode estar longe dele.",
    "Ler um gráfico sem olhar a escala. Um passo de 1 cm no papel não é 1 unidade se o eixo está marcado de 10 em 10.",
    "Esquecer o domínio. Uma função afim de tempo de viagem não aceita tempo negativo se o problema começa em t = 0, mesmo que a reta matemática continue.",
    "Dizer que Δ = 0 significa “não tem raiz”. Significa uma raiz real dupla. Sem raiz real é Δ < 0.",
  ],
  bibliography: [
    {
      book: "Gelson Iezzi e outros. Fundamentos de Matemática Elementar, vol. 1.",
      place: "Capítulos de função afim e função quadrática, incluindo vértice, máximo e mínimo e o estudo do sinal.",
      note: "Referência principal desta aula. Vale refazer a dedução do vértice por completamento de quadrado, que o livro desenvolve.",
    },
    {
      book: "Matemática: Ciência e Aplicações, vol. 1.",
      place: "Capítulos de funções do 1º e do 2º graus, com leitura de gráfico.",
      note: "Use para treinar gráfico depois da dedução no FME. Não comece pelo gráfico sem saber o que a inclinação significa.",
    },
    {
      book: "Hamilton Guidorizzi. Um Curso de Cálculo, vol. 1.",
      place: "Capítulo inicial de funções, como ponte. O miolo do livro já é limite e derivada.",
      note: "Não é o livro da primeira leitura da função afim. Serve quando você quiser ver a taxa a virar derivada, e o vértice virar o ponto em que a derivada zera. Elon Lages Lima, A Matemática do Ensino Médio, vol. 1, cobre o mesmo assunto no nível do ensino médio com mais rigor que o FME.",
    },
  ],
};
