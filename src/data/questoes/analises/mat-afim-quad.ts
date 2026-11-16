import type { AnaliseQuestao } from "../../lessons.ts";

export const ANALISES: Record<string, AnaliseQuestao> = {
  "mat-af-n1q1": {
    intuicao:
      "f(x) = 3x − 1 é uma máquina: entra x, sai o triplo menos um. f(2) pede a saída quando a entrada é 2. Não é a raiz, não é o coeficiente. É só substituir o 2 no lugar de cada x e fazer a conta que sobrar.",
    motivacao:
      "A definição de função afim já é a regra de cálculo. Substituir é o caminho porque o enunciado deu a lei e o ponto. Isolar x seria resolver f(x) = 2, que é outra pergunta. A ordem das operações continua valendo depois da substituição: multiplica antes de subtrair.",
    passos: [
      "Definição: f(2) é o valor da expressão com x trocado por 2. f(2) = 3 × 2 − 1.",
      "Multiplicação antes da subtração: 3 × 2 = 6.",
      "Subtração: 6 − 1 = 5.",
      "7 seria 3 × 2 + 1, com o sinal do termo independente trocado.",
    ],
    atalho:
      "A reta sobe 3 quando x sobe 1, e f(0) = −1. De 0 até 2 são dois degraus: −1 + 3 + 3 = 5. A leitura da taxa evita até escrever a substituição, e dá o mesmo 5.",
  },
  "mat-af-n1q2": {
    intuicao:
      "A raiz é o lugar em que o gráfico corta o eixo horizontal, isto é, onde a altura da função é zero. A reta 2x − 6 desce ou sobe até cruzar esse eixo uma única vez. Achar a raiz é achar esse cruzamento, não o valor f(2).",
    motivacao:
      "Pôr f(x) = 0 traduz o corte com o eixo x para uma equação. Na forma ax + b, a raiz −b/a é o mesmo isolamento, já resolvido: o termo b é o corte com o eixo y, e dividir por a converte essa altura em deslocamento horizontal. Usar a fórmula curta ou isolar x são a mesma ideia.",
    passos: [
      "Definição de raiz: f(x) = 0. Então 2x − 6 = 0.",
      "Some 6: 2x = 6. Divida por 2, positivo e não nulo: x = 3.",
      "Fórmula da reta: a raiz de ax + b é −b/a. Aqui −(−6)/2 = 3.",
      "Conferência: f(3) = 6 − 6 = 0.",
    ],
    atalho:
      "f(0) = −6 e a função sobe 2 a cada unidade de x. Para recuperar 6 unidades de altura e chegar em zero, são 6/2 = 3 unidades à direita. O gráfico cruza em 3.",
  },
  "mat-af-n1q3": {
    intuicao:
      "O sinal de a, o número que multiplica x², decide se a parábola é um vale ou um morro. a positivo é um vale: os braços sobem e o fundo é o menor valor. a negativo é um morro, com um topo. A pergunta não pede a conta do vértice, só essa leitura do desenho.",
    motivacao:
      "Para x grande, ax² domina bx e c. Se a > 0, ax² vai para +∞ dos dois lados, então a curva abre para cima e o vértice, sendo o ponto mais baixo desse vale, é um mínimo. Essa é a razão de olhar só para a, sem calcular −b/(2a). O corte com o eixo y é c, quando x = 0, e não a.",
    passos: [
      "Termo dominante: para |x| grande, o sinal de f(x) acompanha o sinal de a.",
      "a > 0 implica f(x) → +∞ quando x → ±∞. A concavidade é para cima.",
      "Uma curva que vai para +∞ dos dois lados tem um ponto mais baixo. Esse ponto é o vértice, um mínimo.",
      "f(0) = c, não a. a é o coeficiente de x², não o intercepto vertical.",
    ],
    atalho:
      "Pense em y = x², o caso a = 1 > 0. O gráfico é um vale com mínimo em zero. Multiplicar por um a positivo não vira o vale de cabeça para baixo. A frase “abre para cima e tem mínimo” é esse desenho.",
  },
  "mat-af-n1q4": {
    intuicao:
      "O x do vértice é a abscissa do fundo do vale, o eixo de simetria da parábola. Em x² − 6x + 5 os braços sobem, e o fundo fica no meio do caminho, não no termo 5. O 5 é a altura em que a curva corta o eixo y. A pergunta pede só a coordenada horizontal do fundo.",
    motivacao:
      "A fórmula xᵥ = −b/(2a) sai de completar o quadrado ou de derivar e igualar a zero. Completar o quadrado escreve f(x) = a(x − xᵥ)² + k, e o quadrado é mínimo quando o parêntese é zero. Por isso o x do vértice depende de a e b, e c só entra na altura. Usar a fórmula é aplicar esse fato pronto.",
    passos: [
      "Identifique a = 1 e b = −6. O termo independente c = 5 não entra no x do vértice.",
      "Fórmula do eixo de simetria: xᵥ = −b/(2a) = −(−6)/(2 × 1).",
      "−(−6) = 6 e 2a = 2. Então xᵥ = 6/2 = 3.",
      "As raízes de x² − 6x + 5 = 0 são 1 e 5, porque 1 + 5 = 6 e 1 × 5 = 5. A média (1 + 5)/2 = 3 confirma o eixo.",
    ],
    atalho:
      "Quando as raízes são visíveis, o vértice está no meio delas. Some as raízes e divida por 2: (1 + 5)/2 = 3. Não calcule −b/(2a) se o par de raízes já está na cabeça.",
  },
  "mat-af-n1q5": {
    intuicao:
      "f(0) é a altura da parábola quando x ainda não saiu da origem. Todo termo que tem x morre, porque qualquer coisa vezes zero é zero. Sobra o termo que não depende de x, o c. No gráfico, esse número é exatamente onde a curva fura o eixo vertical.",
    motivacao:
      "Substituir x = 0 é a definição de imagem de zero, e também a leitura do coeficiente independente. As duas descrições coincidem por causa do elemento neutro da multiplicação: 2 × 0² = 0 e −1 × 0 = 0. Não há por que usar vértice nem discriminante para um valor de função já dado.",
    passos: [
      "Substituição: f(0) = 2(0)² − (0) + 7.",
      "Potência e produto com zero: 0² = 0 e 2 × 0 = 0. O termo −x também é zero.",
      "Sobra o termo independente: f(0) = 7.",
      "Em ax² + bx + c, f(0) = c. Aqui c = 7, o corte com o eixo y.",
    ],
    atalho:
      "Cubra com o dedo todos os termos que mostram x. O que resta escrito é 7. 2 é o a, −1 é o b, e nenhum dos dois é a altura na origem.",
  },
  "mat-af-n2q1": {
    intuicao:
      "Dois pontos determinam uma reta. (0, 1) já entrega o corte com o eixo y, porque x é zero. De (0, 1) até (2, 5) a altura sobe 4 enquanto x anda 2, então sobe 2 a cada passo. f(3) é mais um passo dessa mesma ladeira, a partir de f(2), ou três passos a partir da origem.",
    motivacao:
      "A taxa de variação (y₂ − y₁)/(x₂ − x₁) é o coeficiente a da função afim, porque numa reta essa razão é constante. O ponto com x = 0 entrega b sem sistema. Montar f(x) = ax + b e só então substituir 3 organiza a conta. Um sistema 2×2 também acharia a e b, com mais álgebra e o mesmo resultado.",
    passos: [
      "Taxa de variação: a = (5 − 1)/(2 − 0) = 4/2 = 2. A subtração é a variação, e a divisão compara as duas variações.",
      "Intercepto: f(0) = 1, logo b = 1. A lei é f(x) = 2x + 1.",
      "Substituição: f(3) = 2 × 3 + 1 = 7.",
      "Conferência dos pontos dados: f(2) = 4 + 1 = 5 e f(0) = 1.",
    ],
    atalho:
      "De x = 2 até x = 3 há um passo de taxa 2. f(3) = 5 + 2 = 7. Não é preciso reescrever a lei inteira se a taxa já foi lida no gráfico.",
  },
  "mat-af-n2q2": {
    intuicao:
      "y = −x² + 4x é um morro, porque o x² tem coeficiente negativo. O maior valor é a altura do topo, não o maior x e não o corte com o eixo y, que aqui é zero. O topo fica no eixo de simetria, bem no meio das duas raízes 0 e 4.",
    motivacao:
      "Com a < 0 o vértice é máximo, então calcular (xᵥ, f(xᵥ)) responde “valor máximo” de uma vez. A fórmula xᵥ = −b/(2a) localiza o eixo. Substituir esse x na função entrega a altura. Completar o quadrado escreveria y = −(x − 2)² + 4, e o 4 apareceria como o valor que não se pode ultrapassar, porque um quadrado é no mínimo zero e entra com sinal menos.",
    passos: [
      "a = −1 < 0. A concavidade é para baixo e o vértice é um ponto de máximo.",
      "xᵥ = −b/(2a) = −4 / (2 × −1) = −4/−2 = 2.",
      "Substituição: f(2) = −(2)² + 4 × 2 = −4 + 8 = 4.",
      "As raízes são 0 e 4, pois y = x(4 − x). A média (0 + 4)/2 = 2 confirma o eixo, e a altura 4 é o máximo.",
    ],
    atalho:
      "Complete o quadrado: −x² + 4x = −(x² − 4x) = −[(x − 2)² − 4] = 4 − (x − 2)². Um quadrado subtraído nunca passa de zero, então y nunca passa de 4. O máximo é 4, atingido quando x = 2.",
  },
  "mat-af-n2q3": {
    intuicao:
      "O vértice é um ponto, com duas coordenadas. O x é o eixo de simetria; o y é a altura da função nesse eixo. A parábola x² − 4x + 3 abre para cima, corta o eixo x em 1 e em 3, e o fundo fica no meio, um pouco abaixo do eixo. A pergunta pede o ponto, não só o x.",
    motivacao:
      "Separar as coordenadas evita entregar (2, 3), que mistura o x certo com o termo independente. Primeiro −b/(2a) acha o x. Depois a substituição acha o y. A média das raízes confirma o x sem a fórmula, e o sinal de f(2) diz se o vale está abaixo ou acima do eixo.",
    passos: [
      "a = 1 e b = −4. xᵥ = −(−4)/(2 × 1) = 4/2 = 2.",
      "Altura: f(2) = 4 − 8 + 3 = −1.",
      "O ponto é (2, −1). Como a > 0, esse ponto é um mínimo.",
      "Raízes 1 e 3, média 2. f(1) = 0 e f(3) = 0, e o meio vale −1, abaixo do eixo.",
    ],
    atalho:
      "Complete: x² − 4x + 3 = (x − 2)² − 4 + 3 = (x − 2)² − 1. A forma a(x − xᵥ)² + k mostra o vértice (2, −1) sem substituição extra. (2, 3) seria confundir k com c.",
  },
  "mat-af-n2q4": {
    intuicao:
      "f(x) = 2x + 1 é uma reta que sobe e corta o eixo x à esquerda da origem. “Positiva” pede o trecho em que a reta está acima do eixo. Como ela sobe, isso acontece à direita do corte. O corte é o zero da função, x = −1/2.",
    motivacao:
      "Resolver 2x + 1 > 0 é a tradução algébrica de “acima do eixo”. O coeficiente angular positivo é o motivo de a solução ser uma semirreta para a direita, e não para a esquerda. Se a taxa fosse negativa, o sentido do intervalo inverteria mesmo com a mesma raiz.",
    passos: [
      "Desigualdade: 2x + 1 > 0.",
      "Subtraia 1, conservando o sentido: 2x > −1.",
      "Divida por 2, que é positivo, e conserve o sentido: x > −1/2.",
      "A raiz é −b/a = −1/2. Taxa a = 2 > 0, então o positivo fica à direita da raiz, em intervalo aberto.",
    ],
    atalho:
      "Teste x = 0: f(0) = 1 > 0, então a origem está na região boa. A raiz −1/2 está à esquerda da origem. A região boa é tudo à direita dessa raiz. x > −1/2 é a única alternativa que contém 0 e exclui, por exemplo, −1.",
  },
  "mat-af-n2q5": {
    intuicao:
      "f(x) = −2x + 5 é uma reta, não uma parábola: não há x². O número que multiplica x é −2. Quando x anda para a direita, −2x puxa o valor para baixo. A reta desce. Ela cruza o eixo x, então tem raiz. “Crescente”, “constante” e “parábola” descrevem outros gráficos.",
    motivacao:
      "O sinal do coeficiente angular é a definição prática de crescimento para uma função afim. a > 0 cresce, a < 0 decresce, a = 0 é constante. Justificar com a diferença f(x₂) − f(x₁) = a(x₂ − x₁) mostra o motivo: se a é negativo e x₂ > x₁, a diferença é negativa, e a função caiu. Não é preciso desenhar a raiz para classificar o crescimento.",
    passos: [
      "Forma afim: f(x) = ax + b com a = −2 e b = 5. Não há termo x², então não é parábola.",
      "Para x₂ > x₁, f(x₂) − f(x₁) = −2(x₂ − x₁) < 0, porque −2 é negativo e o incremento de x é positivo.",
      "Diferença negativa significa f(x₂) < f(x₁). A função é decrescente.",
      "A raiz existe: −2x + 5 = 0 dá x = 5/2. “Sem raiz” é falso.",
    ],
    atalho:
      "Compare dois valores vizinhos. f(0) = 5 e f(1) = 3. De 5 para 3 a função desceu. Uma reta que desce num trecho desce em toda a reta. A classificação é decrescente.",
  },
  "mat-af-n3q1": {
    intuicao:
      "O vértice (2, −1) é o fundo, ou o topo, e o eixo de simetria é a reta vertical x = 2. O ponto (0, 3) está duas unidades à esquerda desse eixo. O ponto simétrico está duas unidades à direita, em x = 4, e tem a mesma altura. A parábola trata os dois lados do eixo como espelho. f(4) pode ser lido nesse espelho, desde que a concavidade seja compatível com o ponto dado.",
    motivacao:
      "A forma f(x) = a(x − xᵥ)² + yᵥ já guarda o vértice, e só falta a, um número. Um ponto fora do vértice determina a, porque sobra uma equação do primeiro grau. Escrever nessa forma é melhor do que ax² + bx + c com três incógnitas: o vértice já consumiu duas informações. A simetria explica, depois, por que f(4) repetiu f(0).",
    passos: [
      "Forma do vértice: f(x) = a(x − 2)² − 1. O quadrado zera em x = 2 e a altura ali é −1.",
      "O ponto (0, 3) entra na lei: a(0 − 2)² − 1 = 3.",
      "Potência: (−2)² = 4, então 4a − 1 = 3. Some 1: 4a = 4. Divida por 4: a = 1.",
      "Lei pronta: f(x) = (x − 2)² − 1. f(4) = (4 − 2)² − 1 = 4 − 1 = 3.",
      "Simetria: 0 e 4 estão à mesma distância de x = 2. Por isso f(0) = f(4).",
    ],
    atalho:
      "Sem achar a: a distância de 0 até o eixo é 2, e a distância de 4 até o eixo também é 2. Numa parábola, mesma distância ao eixo significa mesma ordenada. f(4) = f(0) = 3. O cálculo de a só confirma que existe uma parábola com esse vértice passando pelo ponto.",
  },
  "mat-af-n3q2": {
    intuicao:
      "y = −2x² + 8x + 10 é um morro, porque −2x² domina e é negativo. O 10 é a altura na origem, não necessariamente o pico. O pico está mais à direita, onde a subida do 8x ainda compensa a queda do −2x². A pergunta pede a altura desse pico.",
    motivacao:
      "Máximo de quadrática com a < 0 é a ordenada do vértice. Primeiro localiza-se xᵥ = −b/(2a), depois substitui-se. Completar o quadrado mostraria o máximo como o termo que sobra quando o quadrado se anula. Os dois caminhos se justificam pelo mesmo fato: −(x − xᵥ)² nunca é positivo, então empurra a função para baixo do valor do vértice.",
    passos: [
      "a = −2 < 0. Há máximo, não mínimo.",
      "xᵥ = −b/(2a) = −8 / (2 × −2) = −8/−4 = 2.",
      "Substituição: y(2) = −2 × (2)² + 8 × 2 + 10 = −2 × 4 + 16 + 10.",
      "−8 + 16 + 10 = 18. O valor máximo é 18.",
      "y(0) = 10 é só o intercepto. 10 < 18, então o máximo não está na origem.",
    ],
    atalho:
      "Complete o quadrado: −2(x² − 4x) + 10 = −2[(x − 2)² − 4] + 10 = −2(x − 2)² + 8 + 10 = 18 − 2(x − 2)². O termo −2(x − 2)² é ≤ 0, então y ≤ 18. A cota 18 é o máximo.",
  },
  "mat-af-n3q3": {
    intuicao:
      "Uma equação do segundo grau pode cortar o eixo x duas vezes, encostar uma vez, ou não cortar. “Exatamente uma raiz real” é o encoste: o vértice está sobre o eixo e os dois encontros coincidem. Isso não é k = 0, que ainda pode cortar duas vezes. É a condição geométrica do discriminante nulo.",
    motivacao:
      "O discriminante Δ = b² − 4ac conta as raízes reais: positivo duas, zero uma raiz dupla, negativo nenhuma no conjunto real. A frase “exatamente uma” da prova corresponde a Δ = 0, não a “uma das raízes é zero”. Igualar Δ a zero produz uma equação em k. Conferir o k achado, reescrevendo a equação como quadrado perfeito, mostra que a raiz é de fato única.",
    passos: [
      "Aqui a = 1, b = −2 e c = k. Δ = b² − 4ac = (−2)² − 4(1)(k) = 4 − 4k.",
      "Raiz real única, no segundo grau, equivale a Δ = 0. Então 4 − 4k = 0.",
      "4 = 4k e k = 1. A divisão por 4 é legítima porque 4 ≠ 0.",
      "Para k = 1, a equação é x² − 2x + 1 = (x − 1)² = 0. A única solução é x = 1, com multiplicidade dois.",
      "k = 0 daria x(x − 2) = 0, duas raízes. k = 2 daria Δ = 4 − 8 < 0, nenhuma raiz real.",
    ],
    atalho:
      "O vértice tem x = −b/(2a) = 1. A altura é f(1) = 1 − 2 + k = k − 1. O gráfico encosta no eixo quando essa altura é zero: k − 1 = 0. De novo k = 1, sem escrever o símbolo Δ.",
  },
  "mat-af-n3q4": {
    intuicao:
      "A reta fura o eixo vertical em −2 e o eixo horizontal em 4. São dois pontos conhecidos: (0, −2) e (4, 0). f(2) é a altura no meio do caminho horizontal entre eles. Como a reta não faz curva, a altura no meio não é a média simétrica de um jeito complicado: dá para achar a taxa e andar dois passos, ou notar que do corte vertical até a raiz a altura sobe de −2 até 0.",
    motivacao:
      "Dois pontos determinam a e b. f(0) = −2 entrega b na hora. f(4) = 0 entrega uma equação para a. A forma f(x) = ax + b é a tradução de “reta”. Interpolar pela taxa é o mesmo cálculo, e explica por que f(2) fica na metade da variação de y.",
    passos: [
      "Corte vertical: f(0) = −2, então f(x) = ax − 2.",
      "Corte horizontal: f(4) = 0. Então 4a − 2 = 0, 4a = 2 e a = 1/2.",
      "Lei: f(x) = x/2 − 2.",
      "Substituição: f(2) = 2/2 − 2 = 1 − 2 = −1.",
      "A raiz é 4, não 2. f(2) = 0 seria o erro de achar que o meio do intervalo já é o zero.",
    ],
    atalho:
      "De x = 0 até x = 4, y vai de −2 até 0, uma subida de 2 em quatro unidades, taxa 1/2. Em dois unidades, sobe 1. −2 + 1 = −1. A média aritmética das ordenadas dos extremos, (−2 + 0)/2 = −1, coincide porque a taxa é constante.",
  },
  "mat-af-n3q5": {
    intuicao:
      "As raízes 1 e 3 são os dois cortes com o eixo x. O vértice de uma parábola fica no meio, em x = 2. O enunciado já dá f(2) = 4 e avisa que o coeficiente de x² é negativo, então o gráfico é um morro e o meio é o topo. O valor máximo é a altura desse topo, que foi entregue pronta.",
    motivacao:
      "A forma fatorada f(x) = a(x − 1)(x − 3) guarda as raízes e deixa a como incógnita. f(2) = 4 determina a e, de quebra, confirma o sinal negativo exigido. O máximo não precisa de outra substituição: numa parábola com a < 0, o máximo é f do ponto médio das raízes. Calcular a serve para verificar a concavidade, não para achar outro y.",
    passos: [
      "Raízes 1 e 3: f(x) = a(x − 1)(x − 3), com a ≠ 0.",
      "Ponto médio: xᵥ = (1 + 3)/2 = 2. É o eixo de simetria.",
      "f(2) = a(2 − 1)(2 − 3) = a(1)(−1) = −a. O enunciado diz que isso vale 4, então −a = 4 e a = −4.",
      "a < 0 confirma máximo no vértice. O valor máximo é f(2) = 4.",
      "A lei completa seria f(x) = −4(x − 1)(x − 3), e o topo continua 4.",
    ],
    atalho:
      "Se a concavidade é para baixo e 2 está no meio das raízes, nenhum outro ponto passa de f(2). O enunciado já disse f(2) = 4. A resposta é 4, e a conta de a só impede a pegadinha de achar outro vértice.",
  },
};
