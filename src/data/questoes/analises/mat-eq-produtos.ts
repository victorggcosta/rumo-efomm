import type { AnaliseQuestao } from "../../lessons.ts";

export const ANALISES: Record<string, AnaliseQuestao> = {
  "mat-eq-n1q1": {
    intuicao:
      "2x − 6 = 0 diz que o dobro de um número, depois de tirar 6, cai em zero. Esse número é o ponto em que a reta y = 2x − 6 corta o eixo x. A balança está equilibrada: o que se faz de um lado tem de ser feito do outro, senão a igualdade deixa de valer.",
    motivacao:
      "Isolar x é desfazer as operações na ordem inversa da que foi aplicada a ele. Em 2x − 6, o 6 foi subtraído por último, então ele volta primeiro, por uma soma. O 2 multiplica, então sai por uma divisão. Somar aos dois lados conserva a igualdade porque se acrescenta o mesmo peso nos dois pratos.",
    passos: [
      "Adição do mesmo número aos dois lados: de 2x − 6 = 0 segue 2x − 6 + 6 = 0 + 6, logo 2x = 6.",
      "Divisão pelo coeficiente 2, que é diferente de zero: x = 6/2 = 3. Dividir os dois lados por um não nulo conserva a igualdade.",
      "Conferência por substituição: 2 × 3 − 6 = 0. A sentença fecha.",
      "x = 6 seria o caso de esquecer a divisão por 2. x = −3 mudaria o sinal ao passar o 6.",
    ],
    atalho:
      "Na forma ax + b = 0, a raiz é x = −b/a. Aqui a = 2 e b = −6, então x = 6/2 = 3. Substituir 3 no enunciado é a prova dos nove e leva um segundo.",
  },
  "mat-eq-n1q2": {
    intuicao:
      "(x + 3)² é um quadrado de lado x + 3. A área não é só x² mais o quadradinho 3 × 3. Há duas faixas retangulares, cada uma de área 3x, uma de cada lado do quadrado interno. Essas faixas são o termo que x² + 9 esquece. A pergunta pede a área inteira escrita como polinômio.",
    motivacao:
      "O produto notável (a + b)² = a² + 2ab + b² é a distributiva aplicada duas vezes, com nome curto. Usá-lo é legítimo porque ele já foi demonstrado: (a + b)(a + b) = a² + ab + ba + b² e ab = ba nos reais. O termo 2ab é exatamente as duas faixas. Expandir o produto do zero também serve, e mostra de onde o 6x nasce.",
    passos: [
      "Definição de quadrado: (x + 3)² = (x + 3)(x + 3).",
      "Distributiva: x(x + 3) + 3(x + 3) = x² + 3x + 3x + 9.",
      "Redução de termos semelhantes: 3x + 3x = 6x. O coeficiente 6 é 2 × 3, o dobro do produto.",
      "O polinômio é x² + 6x + 9. x² + 9 esquece 2ab. x² − 9 é uma diferença de quadrados, outro produto.",
    ],
    atalho:
      "Teste x = 1. (1 + 3)² = 16. x² + 9 = 10, que já morre. x² + 6x + 9 = 1 + 6 + 9 = 16. x² + 3x + 9 = 13, também morre. Um valor numérico separa o termo do meio certo.",
  },
  "mat-eq-n1q3": {
    intuicao:
      "x² − 9 é um quadrado grande menos um quadrado de lado 3. Não há termo em x no meio, o que é a cara da diferença de quadrados, não de um quadrado de soma. A forma fatorada pede dois fatores do primeiro grau cujo produto devolva exatamente x² − 9.",
    motivacao:
      "a² − b² = (a − b)(a + b) porque a distributiva faz os termos do meio se cancelarem: −ab + ab = 0. Reconhecer 9 como 3² evita procurar raízes pela fórmula de Bhaskara, que daria o mesmo par, só que com mais conta. O cancelamento do meio é o motivo de não existir termo em x.",
    passos: [
      "Reescreva 9 como quadrado: 9 = 3². A expressão é x² − 3².",
      "Diferença de quadrados, com a = x e b = 3: (x − 3)(x + 3).",
      "Conferência pela distributiva: x² + 3x − 3x − 9 = x² − 9. Os termos lineares se cancelam.",
      "(x − 3)² = x² − 6x + 9 traz um meio que o enunciado não tem.",
    ],
    atalho:
      "As raízes de x² − 9 = 0 são x = 3 e x = −3, porque x² = 9. Um polinômio mônico com essas raízes fatora como (x − 3)(x + 3). Substituir x = 3 em qualquer outra alternativa não zera, ou zera pelo motivo errado.",
  },
  "mat-eq-n1q4": {
    intuicao:
      "2x − 4 > 0 pede onde a reta y = 2x − 4 está acima do eixo x. Ela corta o eixo em x = 2 e sobe, porque o coeficiente de x é positivo. À direita desse corte a reta é positiva. O próprio x = 2 dá zero, e zero não é maior que zero, então o extremo fica de fora.",
    motivacao:
      "Tratar a inequação como uma equação, e no fim decidir se o sinal inclui o igual, organiza o trabalho. Somar 4 não vira o sinal: a desigualdade compara duas quantidades, e somar o mesmo número às duas conserva quem é maior. Dividir por um positivo também conserva. O sinal só vira quando se multiplica ou divide por um negativo, o que não acontece aqui.",
    passos: [
      "Adição de 4 aos dois lados, operação que conserva o sentido: 2x > 4.",
      "Divisão por 2, que é positivo: o sentido permanece e x > 2.",
      "Teste do extremo: se x = 2, 2 × 2 − 4 = 0, e 0 > 0 é falso. O igual fica de fora.",
      "Teste de um ponto à direita, x = 3: 6 − 4 = 2 > 0, verdadeiro. À esquerda, x = 0: −4 > 0 é falso.",
    ],
    atalho:
      "A raiz de 2x − 4 é 2 e a taxa de crescimento é positiva. Função afim crescente é positiva à direita da raiz, em intervalo aberto quando a desigualdade é estrita. A leitura do gráfico substitui a álgebra.",
  },
  "mat-eq-n1q5": {
    intuicao:
      "(2x − 1)² é o quadrado de uma diferença. Há o quadrado do primeiro termo, o quadrado do segundo, e duas faixas que saem com sinal negativo porque o segundo termo já é negativo. 4x² + 1 esquece as faixas. 4x² − 1 é uma diferença de quadrados, sem o termo linear. A figura pede as três partes.",
    motivacao:
      "(a − b)² = a² − 2ab + b² é o mesmo quadrado da soma, com b trocado por −b. O sinal do meio nasce de 2 × a × (−b). Usar a fórmula com a = 2x e b = 1 evita distribuir quatro produtos e perder o coeficiente de x. O quadrado de 2x não é 2x²: a potência vale para o produto inteiro, (2x)² = 4x².",
    passos: [
      "Produto notável, com a = 2x e b = 1: (2x − 1)² = (2x)² − 2(2x)(1) + 1².",
      "Potência de produto: (2x)² = 2² x² = 4x².",
      "Dobro do produto: 2 × 2x × 1 = 4x. O sinal do notável de diferença deixa esse termo negativo.",
      "Quadrado do segundo: 1² = 1. O polinômio é 4x² − 4x + 1.",
    ],
    atalho:
      "Para x = 1, (2 − 1)² = 1. 4x² + 1 = 5, fora. 4x² − 1 = 3, fora. 4x² − 2x + 1 = 3, fora. 4 − 4 + 1 = 1, único que fecha. Um número separa o coeficiente do meio.",
  },
  "mat-eq-n2q1": {
    intuicao:
      "x² − 5x + 6 = 0 pede os valores que anulam a parábola. Ela abre para cima e cruza o eixo x duas vezes. Fatorar é escrever a parábola como produto de duas retas, (x − 2) e (x − 3). O produto é zero quando alguma das retas é zero. Os dois números procurados multiplicam 6 e somam 5.",
    motivacao:
      "Se (x − p)(x − q) = x² − (p + q)x + pq, então p e q são dois números cuja soma é o coeficiente do meio com sinal trocado e cujo produto é o termo independente. Procurar esse par é mais curto do que Bhaskara quando os inteiros aparecem depressa. Bhaskara fica de reserva para confirmar que não há outra raiz.",
    passos: [
      "Procure p e q com p + q = 5 e p q = 6. O par 2 e 3 serve: 2 + 3 = 5 e 2 × 3 = 6.",
      "Fatoração: x² − 5x + 6 = (x − 2)(x − 3).",
      "Produto nulo: um produto é zero se, e somente se, algum fator é zero. x − 2 = 0 ou x − 3 = 0.",
      "As soluções são x = 2 e x = 3.",
      "Discriminante de conferência: Δ = 25 − 24 = 1. x = (5 ± 1)/2, logo 3 e 2.",
    ],
    atalho:
      "Substitua as alternativas. Em x = 2: 4 − 10 + 6 = 0. Em x = 3: 9 − 15 + 6 = 0. O par 1 e 6 dá produto 6, mas soma 7, e não anula o polinômio. Soma e produto filtram sem a fórmula.",
  },
  "mat-eq-n2q2": {
    intuicao:
      "3 − x > 1 compara um número que diminui quando x cresce com a altura 1. A reta y = 3 − x desce. Ela vale mais que 1 enquanto x ainda é pequeno. O corte acontece em x = 2, porque 3 − 2 = 1. À esquerda desse corte a sentença é verdadeira.",
    motivacao:
      "O x está subtraindo. Para isolá-lo, em algum momento se multiplica por −1, e essa é a operação que inverte o sentido da desigualdade. O motivo é concreto: se −x > −2, os opostos invertem a ordem, porque a função “tomar o oposto” é decrescente. Esquecer a inversão produz x > 2, que é o conjunto complementar do certo.",
    passos: [
      "Subtraia 3 dos dois lados, conservando o sentido: −x > −2.",
      "Multiplique por −1. Como o fator é negativo, o sentido inverte: x < 2.",
      "Teste dentro da região, x = 0: 3 − 0 = 3 > 1, verdadeiro.",
      "Teste fora, x = 3: 3 − 3 = 0 > 1 é falso. O extremo x = 2 dá igualdade, e a desigualdade é estrita, então 2 fica de fora.",
    ],
    atalho:
      "Passe o −x para o outro lado somando x, e passe o 1 subtraindo: 3 − 1 > x, logo 2 > x. Essa leitura evita multiplicar por negativo. É a mesma sentença x < 2, escrita ao contrário.",
  },
  "mat-eq-n2q3": {
    intuicao:
      "(x − 2)(x + 5) é a área de um retângulo de lados x − 2 e x + 5, no trecho em que os lados são positivos. A área total tem o quadrado x², duas faixas de larguras diferentes e um retângulo fixo de lados 2 e 5, com sinal negativo porque um dos fatores traz menos. O termo do meio é a soma algébrica 5x e −2x.",
    motivacao:
      "Distribuir é a definição de produto de binômios. Cada termo do primeiro fator multiplica cada termo do segundo. Não há simetria de quadrado perfeito, então a fórmula (a + b)² não cabe: os dois números, −2 e 5, não são iguais. A distributiva direta é o caminho honesto, e a redução dos termos semelhantes é o único passo de simplificação.",
    passos: [
      "Distributiva: (x − 2)(x + 5) = x(x + 5) − 2(x + 5).",
      "x(x + 5) = x² + 5x e −2(x + 5) = −2x − 10.",
      "Junte: x² + 5x − 2x − 10.",
      "Termos semelhantes: 5x − 2x = 3x. O produto é x² + 3x − 10.",
      "O termo constante é (−2) × 5 = −10, o produto dos termos fixos. A soma deles, −2 + 5 = 3, é o coeficiente de x.",
    ],
    atalho:
      "Regra mental de (x + p)(x + q) = x² + (p + q)x + pq, com p = −2 e q = 5. Soma −2 + 5 = 3, produto −10. Para x = 0 o produto vale −10, e só as alternativas com termo independente −10 sobrevivem. Para x = 2 o produto é zero, e x² + 3x − 10 = 4 + 6 − 10 = 0.",
  },
  "mat-eq-n2q4": {
    intuicao:
      "x² + 5x + 6 quer virar um produto (x + p)(x + q). Os dois números escondidos somam 5 e multiplicam 6. O desenho é o contrário do exercício anterior: em vez de abrir o retângulo, estamos procurando os lados. Os sinais são os dois positivos, porque a soma e o produto são positivos.",
    motivacao:
      "A fatoração por soma e produto é a distributiva lida de trás para a frente. Ela é rápida quando o par inteiro existe. Se não existisse, o discriminante revelaria raízes não inteiras e a fatoração em inteiros falharia. Aqui 2 e 3 aparecem na tabuada de 6, então vale a pena procurá-los antes de Bhaskara.",
    passos: [
      "Procure inteiros de soma 5 e produto 6. Os divisores positivos de 6 são 1 e 6, ou 2 e 3.",
      "1 + 6 = 7, que não serve. 2 + 3 = 5, que serve.",
      "Logo x² + 5x + 6 = (x + 2)(x + 3).",
      "Conferência: (x + 2)(x + 3) = x² + 3x + 2x + 6 = x² + 5x + 6.",
    ],
    atalho:
      "As raízes de x² + 5x + 6 = 0 são −2 e −3, porque a soma das raízes é −5 e o produto é 6. O polinômio mônico com essas raízes é (x + 2)(x + 3). (x − 2)(x − 3) teria o meio negativo, e o enunciado tem +5x.",
  },
  "mat-eq-n2q5": {
    intuicao:
      "x/2 + 1 = 5 diz que a metade de x, acrescida de 1, chega em 5. Tire o 1 e a metade sozinha vale 4. O número cuja metade é 4 é o dobro de 4. A equação é de primeiro grau, uma balança com um coeficiente fracionário.",
    motivacao:
      "Desfazer na ordem inversa continua sendo o motivo: o +1 entrou por último na formação da expressão, então sai primeiro. O que sobra é uma divisão por 2, desfeita por uma multiplicação por 2. Multiplicar a equação inteira por 2 logo no início também funciona e elimina o denominador de uma vez. Os dois caminhos são a mesma equivalência, porque 2 ≠ 0.",
    passos: [
      "Subtraia 1 dos dois lados: x/2 = 4. A igualdade se conserva.",
      "Multiplique os dois lados por 2: x = 8.",
      "Substituição: 8/2 + 1 = 4 + 1 = 5. A sentença original fecha.",
      "x = 10 seria 5 × 2, pulando a subtração do 1. x = 3 seria uma conta com os números soltos do enunciado.",
    ],
    atalho:
      "Multiplique a equação original por 2 de saída: x + 2 = 10, logo x = 8. É uma linha só. A prova dos nove é 4 + 1 = 5.",
  },
  "mat-eq-n3q1": {
    intuicao:
      "(x − 1)(x − 3) > 0 é um produto de duas retas pedindo resultado positivo. Cada fator troca de sinal na sua raiz. A reta real fica cortada em três faixas: antes de 1, entre 1 e 3, e depois de 3. Dentro de cada faixa o sinal do produto não muda. O desenho do sinal é positivo, negativo, positivo, porque a parábola x² − 4x + 3 abre para cima.",
    motivacao:
      "Estudar o sinal por intervalos é o método certo para um produto, porque a regra “positivo com positivo ou negativo com negativo” decide cada faixa com um teste só. Resolver como equação acharia só as raízes, que neste caso nem entram, já que a desigualdade é estrita. O estudo de sinal responde a desigualdade, não apenas os zeros.",
    passos: [
      "Zeros dos fatores: x − 1 = 0 dá x = 1, e x − 3 = 0 dá x = 3. Eles partem ℝ em x < 1, 1 < x < 3 e x > 3.",
      "Para x < 1, os dois fatores são negativos. Negativo vezes negativo é positivo, pela regra dos sinais.",
      "Para 1 < x < 3, x − 1 > 0 e x − 3 < 0. O produto é negativo.",
      "Para x > 3, os dois fatores são positivos e o produto é positivo.",
      "A desigualdade é estrita, então os zeros ficam de fora. A solução é x < 1 ou x > 3.",
    ],
    atalho:
      "O coeficiente de x² no produto expandido é positivo, então a parábola fica positiva fora das raízes. Essa leitura de concavidade substitui a tabela de sinais quando o produto já está fatorado em dois termos do primeiro grau. Entre as raízes o gráfico fica abaixo do eixo, e a pergunta pede acima.",
  },
  "mat-eq-n3q2": {
    intuicao:
      "√(x + 2) = x diz que uma raiz quadrada, que nunca é negativa, coincide com x. Isso já exige x ≥ 0, senão um número não negativo estaria igual a um negativo. Também exige x + 2 ≥ 0 para a raiz existir. Elevar ao quadrado transforma a equação em uma do segundo grau, mas pode criar uma raiz extra, porque quadrados iguais não devolvem, sozinhos, a informação do sinal.",
    motivacao:
      "Elevar ao quadrado é útil porque remove o radical, e é perigoso pelo mesmo motivo: a função quadrado não é injetiva. A condição de existência e a substituição de cada candidato de volta no enunciado são parte da resolução, não um enfeite. Sem essa volta, x = −1 parece solução da equação quadrática e não é solução da equação original.",
    passos: [
      "Condição de existência: x + 2 ≥ 0, logo x ≥ −2. Condição de sinal: o resultado de uma raiz quadrada principal é ≥ 0, então x ≥ 0.",
      "Com x ≥ 0, eleve os dois lados ao quadrado. A função x ↦ x² é crescente em [0, ∞), então a equivalência vale nesse domínio: x + 2 = x².",
      "Forma canônica: x² − x − 2 = 0. Procure dois números de soma 1 e produto −2: 2 e −1.",
      "Fatoração: (x − 2)(x + 1) = 0. Candidatos: x = 2 e x = −1.",
      "Conferência: √(2 + 2) = √4 = 2, que é igual a 2. √(−1 + 2) = 1, que não é igual a −1. Além disso −1 não cumpre x ≥ 0. Descarte.",
      "A única solução real é x = 2.",
    ],
    atalho:
      "O gráfico de √(x + 2) começa em x = −2, no valor 0, e sobe devagar. A reta y = x só pode encontrá-lo no primeiro quadrante. x = −1 está abaixo do eixo x, onde a raiz nunca chega. Testar x = 2 no enunciado é suficiente para cravar a alternativa “somente x = 2”.",
  },
  "mat-eq-n3q3": {
    intuicao:
      "(a + b)² e (a − b)² são dois quadrados quase iguais. Os dois têm a² e b². A diferença está nas faixas do meio: um tem +2ab e o outro tem −2ab. Ao subtrair, a² e b² se cancelam, e os dois meios, em vez de se cancelarem, apontam para o mesmo lado. O que sobra é um retângulo puro em a e b, sem quadrados.",
    motivacao:
      "Expandir os dois notáveis é direto e nomeia cada termo. Há um atalho com diferença de quadrados, tratando (a + b) e (a − b) como os próprios A e B de A² − B². Os dois caminhos merecem existir: o primeiro mostra o sinal do parêntese, que é onde o erro de conta mora; o segundo explica por que o resultado fatorado é 4ab e não 2ab.",
    passos: [
      "Quadrado da soma: (a + b)² = a² + 2ab + b².",
      "Quadrado da diferença: (a − b)² = a² − 2ab + b².",
      "Subtração de polinômios: distribua o sinal menos, que troca o sinal de cada termo do segundo parêntese. −(a² − 2ab + b²) = −a² + 2ab − b².",
      "Some: a² + 2ab + b² − a² + 2ab − b² = 4ab. Os quadrados se cancelam e 2ab + 2ab = 4ab.",
    ],
    atalho:
      "Diferença de quadrados: (a + b)² − (a − b)² = [(a + b) − (a − b)][(a + b) + (a − b)] = (a + b − a + b)(a + b + a − b) = (2b)(2a) = 4ab. Com números, a = 3 e b = 1: 16 − 4 = 12 e 4 × 3 × 1 = 12. 2ab daria 6, a metade.",
  },
  "mat-eq-n3q4": {
    intuicao:
      "Os dois lados têm o denominador x − 2. Esse denominador é uma parede: em x = 2 a expressão original não existe, então 2 não pode ser resposta, mesmo que alguma conta descuidada o produza. Fora dessa parede, multiplicar pelo denominador limpa as frações e sobra uma equação do primeiro grau. A figura é uma igualdade de duas frações com um inteiro no meio.",
    motivacao:
      "Multiplicar os dois lados pelo denominador é legítimo só quando esse denominador não é zero, porque é isso que torna a multiplicação uma equivalência. A restrição se anota antes da conta, não depois de encontrar um valor e “ver se cola”. Sem ela, x = 2 poderia ser confundido com solução. Com ela, o único candidato que resta é testado na equação original.",
    passos: [
      "Restrição de domínio: x − 2 ≠ 0, logo x ≠ 2. A alternativa x = 2 está fora antes de qualquer álgebra.",
      "Para x ≠ 2, multiplique os dois lados por x − 2: 1 + 1(x − 2) = 2.",
      "Distributiva: 1 + x − 2 = 2, isto é, x − 1 = 2.",
      "Some 1: x = 3. Esse valor respeita x ≠ 2.",
      "Conferência: 1/(3 − 2) + 1 = 2 e 2/(3 − 2) = 2. Os dois lados coincidem.",
    ],
    atalho:
      "Passe o 1 para o outro lado: 1/(x − 2) − 2/(x − 2) = −1. Fica −1/(x − 2) = −1, logo 1/(x − 2) = 1 e x − 2 = 1. De novo x = 3. A conta curta usa a soma de frações de mesmo denominador.",
  },
  "mat-eq-n3q5": {
    intuicao:
      "x² − 4x + 3 ≤ 0 pede onde a parábola está sobre o eixo ou abaixo dele. As raízes são 1 e 3, e o coeficiente de x² é positivo, então os braços sobem. O trecho não positivo é o vale entre as raízes, incluindo os dois pontos em que o gráfico toca o eixo, porque a desigualdade aceita o zero.",
    motivacao:
      "Fatorar transforma a desigualdade num produto (x − 1)(x − 3) ≤ 0. Um produto é negativo quando os fatores têm sinais opostos, e é zero nas raízes. O intervalo entre raízes de uma parábola com a > 0 é exatamente essa região. Incluir ou não as pontas depende só do símbolo ≤ ou <. Aqui o igual entra.",
    passos: [
      "Fatoração por soma e produto: 1 + 3 = 4 e 1 × 3 = 3. x² − 4x + 3 = (x − 1)(x − 3).",
      "O produto é zero em x = 1 e em x = 3. Esses pontos satisfazem ≤ 0.",
      "Entre as raízes, 1 < x < 3, os fatores têm sinais opostos e o produto é negativo, o que também satisfaz.",
      "Fora, x < 1 ou x > 3, o produto é positivo, e positivo não satisfaz ≤ 0.",
      "A solução, com as pontas, é 1 ≤ x ≤ 3.",
    ],
    atalho:
      "O vértice está no meio das raízes, x = 2, e f(2) = 4 − 8 + 3 = −1 < 0. Um ponto negativo no meio e a concavidade para cima bastam para concluir que o trecho ≤ 0 é o intervalo fechado entre as raízes. x = 0 dá f(0) = 3 > 0 e fica de fora.",
  },
};
