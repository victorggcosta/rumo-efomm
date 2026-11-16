import type { AnaliseQuestao } from "../../lessons.ts";

export const ANALISES: Record<string, AnaliseQuestao> = {
  "mat-po-n1q1": {
    intuicao:
      "O gráfico de 4x³ − x + 7, para x grande, acompanha o termo 4x³: os dois braços seguem o cubo, um para cima e outro para baixo. O expoente desse termo dominante é o grau. O 4 estica o gráfico na vertical e não conta quantas vezes o x se multiplica. O 7 levanta a curva e também não muda o grau. A pergunta olha para o maior expoente vivo, que é 3.",
    motivacao:
      "O grau é definido como o maior expoente com coeficiente diferente de zero. Confundi-lo com o coeficiente líder, com o termo independente ou com o número de termos é ler a posição errada da expressão. Se o coeficiente de x³ fosse zero, o termo sumiria e o grau cairia, mas 4 não é zero. Por isso o caminho de apontar o primeiro número escrito erra: esse número é escala, e o expoente é a informação.",
    passos: [
      "Definição de grau: o maior expoente de x cujo coeficiente não é zero no polinômio escrito.",
      "Termos presentes: 4x³ tem expoente 3, −x tem expoente 1 e 7 tem expoente 0.",
      "O maior desses expoentes é 3, e o coeficiente 4 é diferente de zero. O grau é 3.",
      "4 seria o coeficiente líder, a escala vertical. 7 é p(0). Nenhum dos dois é expoente.",
    ],
    atalho:
      "Cubra os coeficientes e leia só as potências: x³, x¹ e a constante. A maior potência é x³. O grau é 3, e um polinômio de grau 3 pode ter no máximo três raízes reais ou complexas, contadas com multiplicidade.",
  },
  "mat-po-n1q2": {
    intuicao:
      "O gráfico de p(x) = x² − 4 é uma parábola que corta o eixo x onde o valor da função é zero. Substituir x por 2 pergunta a altura da curva nesse ponto, não pede para montar outra equação. Em x = 2 a altura é 4 − 4, que encosta no eixo. O ponto (2, 0) está no gráfico, e por isso 2 é raiz.",
    motivacao:
      "Avaliar um polinômio é a definição de p(a): cada potência de x vira a mesma potência de a. Não há incógnita depois da substituição, só aritmética. Procurar a raiz pela fórmula, neste item, resolve outra pergunta e ainda assim cairia em ±2, sem dizer quanto vale p(2). O teorema do resto aparece como leitura extra: resto da divisão por x − 2 é p(2), que deu zero, então a divisão é exata.",
    passos: [
      "Substituição na lei: p(2) = 2² − 4. A incógnita saiu da expressão e resta só aritmética.",
      "Potência: 2² = 4. Subtração do termo independente: 4 − 4 = 0. A altura da parábola em x = 2 é zero.",
      "Valor obtido: p(2) = 0. Geometricamente, a parábola corta o eixo x em x = 2.",
      "Teorema do fator: como p(2) = 0, x − 2 divide x² − 4. De fato x² − 4 = (x − 2)(x + 2).",
    ],
    atalho:
      "x² − 4 é diferença de quadrados, zero quando x² = 4. x = 2 satisfaz, e o valor da função ali é 0. 4 seria o quadrado sozinho, antes de subtrair, e −4 seria p(0), a altura na origem.",
  },
  "mat-po-n1q3": {
    intuicao:
      "A parábola x² − 5x + 6 abre para cima e cruza o eixo x em dois pontos. A soma desses cruzamentos é o lugar do eixo de simetria contado em dobro, porque o vértice fica no meio das raízes. O coeficiente do meio, com o sinal, guarda essa soma. O 6 guarda o produto, outra informação. A pergunta pede só a soma.",
    motivacao:
      "Nas relações de Girard, ou de Viète, para x² − s x + p = 0 a soma das raízes é s e o produto é p. O sinal de −5x já traz a soma positiva 5, pronta, sem extrair as raízes. Quem decora soma igual ao termo independente responde 6, que é o produto. Quem conserva o sinal escrito de −5 responde −5 e esquece que a fórmula é −b/a, e o menos da fórmula troca o sinal do coeficiente.",
    passos: [
      "Relações de Girard no 2º grau mônico: em x² − (soma) x + (produto) = 0.",
      "Compare com x² − 5x + 6. A soma das raízes é 5 e o produto é 6, lidos nos coeficientes.",
      "Forma geral: soma = −b/a = −(−5)/1 = 5. O coeficiente a = 1 não muda a fração.",
      "Conferência pelas raízes: 2 e 3, porque 2 + 3 = 5 e 2 × 3 = 6. A soma 2 + 3 = 5 fecha.",
    ],
    atalho:
      "O eixo de simetria é x = 5/2, média das raízes. O dobro dessa média é a soma, 5. O 6 só entraria se a pergunta fosse o produto ou se fosse preciso achar cada raiz separada, uma de cada vez.",
  },
  "mat-po-n1q4": {
    intuicao:
      "O gráfico de (x − 3)(x + 1) é uma parábola que corta o eixo x em 3 e em −1. Expandir o produto escreve a mesma curva na forma x² + bx + c, em que o meio guarda a soma das raízes com sinal trocado e o fim guarda o produto. Entre os dois cortes o gráfico fica abaixo do eixo, porque o coeficiente de x² é positivo e as raízes são reais. A forma expandida tem de continuar zerando nesses dois pontos.",
    motivacao:
      "A distributiva é o motivo da expansão, e as relações de Girard conferem o resultado sem refazer todos os produtos. Raízes 3 e −1 somam 2, então o coeficiente de x no mônico é −2. O produto 3 × (−1) = −3 é o termo independente. Esquecer um dos quatro produtos da distributiva troca esse meio. x² − 3x + 1, por exemplo, não zera em x = −1.",
    passos: [
      "Distributiva, os quatro produtos: (x − 3)(x + 1) = x × x + x × 1 + (−3) × x + (−3) × 1.",
      "Produtos obtidos: x² + x − 3x − 3, ainda com dois termos lineares separados.",
      "Termos semelhantes: x − 3x = −2x. O polinômio expandido é x² − 2x − 3, o produto expandido.",
      "Girard de conferência: soma das raízes 3 + (−1) = 2, coeficiente de x igual a −2. Produto 3 × (−1) = −3.",
    ],
    atalho:
      "Teste x = 0 nos dois lados. O produto (0 − 3)(0 + 1) = −3, então o termo independente é −3. Isso elimina x² − 2x + 3. Teste x = 3: o fator (x − 3) zera, e x² − 2x − 3 = 9 − 6 − 3 = 0.",
  },
  "mat-po-n1q5": {
    intuicao:
      "p(0) é a altura do gráfico quando x ainda está na origem. Todo termo que carrega x encosta no eixo e morre, porque qualquer potência positiva de zero é zero e não sobra resíduo. Sobra o termo que não depende de x, a constante 5. No desenho, 5 é exatamente o corte da parábola com o eixo vertical.",
    motivacao:
      "Substituir x = 0 é a definição de valor da função, e o elemento neutro da multiplicação faz o resto desaparecer: 3 × 0² = 0 e −2 × 0 = 0. Não há razão para usar vértice, grau ou discriminante. O coeficiente 3 é a escala de x², e −2 é a escala de x. Quem aponta um desses lê o termo errado do gráfico. O corte vertical de um polinômio é sempre o termo independente.",
    passos: [
      "Substituição da origem: p(0) = 3 × 0² − 2 × 0 + 5, com cada potência de zero.",
      "Potências de zero: 0² = 0 e 0¹ = 0. Os dois primeiros termos se anulam.",
      "Sobra o termo independente, que não leva x: p(0) = 5. Os coeficientes de x não entram na origem.",
      "Leitura dos coeficientes: 3 é o de x², −2 é o de x, e 5 é p(0), o corte vertical.",
    ],
    atalho:
      "Apague com o dedo cada termo que mostra x. Resta 5 escrito. Esse número é a ordenada do ponto em que a parábola fura o eixo y. O corte vertical é a altura da curva quando x vale 0 nesse ponto.",
  },
  "mat-po-n2q1": {
    intuicao:
      "Dividir o gráfico de p(x) = x³ + x + 1 por x − 1 é perguntar o que sobra quando o fator (x − 1) é retirado. O resto de uma divisão por polinômio de grau 1 é uma constante, uma altura fixa, não uma nova reta. Essa altura é o valor da função no ponto em que o divisor zera, x = 1. A curva em x = 1 está na altura 3, e 3 é o resto.",
    motivacao:
      "O teorema do resto diz que p(x) = (x − a) q(x) + p(a), então o resto da divisão por x − a é o número p(a). Briot-Ruffini calcula esse número sem escrever a divisão longa. Responder 0 seria afirmar que 1 é raiz, e a conta mostra que não é. Responder x + 1 trata o resto como se pudesse ter grau igual ao do divisor, o que a divisão euclidiana proíbe: o grau do resto fica estritamente menor que 1.",
    passos: [
      "Teorema do resto: o resto da divisão de p por x − 1 é o número p(1), uma constante.",
      "Substituição no teorema: p(1) = 1³ + 1 + 1 = 1 + 1 + 1 = 3. Esse valor é o resto da divisão.",
      "Briot-Ruffini com raiz candidata 1, coeficientes 1, 0, 1, 1: desce 1, soma 0 + 1 = 1, soma 1 + 1 = 2, soma 2 + 1 = 3. O último número é o resto 3.",
      "O resto tem grau menor que 1, logo é a constante 3, não um polinômio como x + 1.",
    ],
    atalho:
      "Se o resto fosse 0, x − 1 dividiria p e p(1) seria 0. Mas 1 + 1 + 1 = 3, que não é zero. O resto é esse 3, lido direto no teorema, sem precisar escrever o quociente da divisão polinomial.",
  },
  "mat-po-n2q2": {
    intuicao:
      "Um polinômio mônico de raízes 2 e −3 corta o eixo x exatamente nesses dois pontos e o coeficiente de x² é 1. O gráfico abre para cima, fica negativo entre as raízes e positivo fora. A forma fatorada (x − 2)(x + 3) já descreve esses cortes. Expandir escreve a parábola na base usual, e o termo independente é o produto das raízes com sinal, aqui negativo porque as raízes têm sinais opostos.",
    motivacao:
      "Pelas relações de Girard, a soma 2 + (−3) = −1 entra com sinal trocado no coeficiente de x, e o produto 2 × (−3) = −6 é o termo independente. Montar x² − (soma) x + produto evita perder o sinal de uma raiz negativa na distributiva. O erro comum é escrever (x − 2)(x − 3) mesmo com a segunda raiz negativa, o que produz x² − 5x + 6 e troca os dois cortes de lugar.",
    passos: [
      "Forma fatorada mônica: (x − 2)(x − (−3)) = (x − 2)(x + 3), um fator por raiz.",
      "Distributiva: x² + 3x − 2x − 6 = x² + x − 6, já na forma pedida, com coeficiente de x igual a +1.",
      "Relações de Girard: soma das raízes = −1, então o coeficiente de x é −(−1) = 1. Produto = −6.",
      "x² − x − 6 teria soma de raízes +1, o par 3 e −2, que não é o par pedido.",
    ],
    atalho:
      "Some as raízes: 2 − 3 = −1. O coeficiente de x no mônico é o oposto dessa soma, +1, e o termo independente é 2 × (−3) = −6. A escrita x² + x − 6 sai sem expandir os quatro produtos.",
  },
  "mat-po-n2q3": {
    intuicao:
      "O gráfico de x³ − 1 corta o eixo x em x = 1, porque 1³ − 1 = 0, e para x grande sobe como o cubo. Esse corte garante um fator linear x − 1. O que sobra da divisão é uma parábola que não corta mais o eixo real, x² + x + 1, sempre positiva. A fatoração é o produto dessa reta pelo trinômio, não um cubo de binômio, cujo gráfico teria uma raiz tripla achatada.",
    motivacao:
      "O teorema do fator autoriza tirar x − 1 assim que p(1) = 0. Briot-Ruffini faz a divisão e entrega o quociente sem tentativa. (x − 1)³ = x³ − 3x² + 3x − 1 traz termos que o enunciado não tem. A identidade da soma de cubos, ou da diferença de potências, x³ − 1 = (x − 1)(x² + x + 1), é o caso geral de razão 1, e a multiplicação de volta é a prova de que o sinal do meio do trinômio é mais, não menos.",
    passos: [
      "Teorema do fator: p(1) = 1³ − 1 = 0, então x − 1 divide x³ − 1 e a divisão será exata.",
      "Briot-Ruffini pela raiz 1, coeficientes 1, 0, 0, −1: desce 1, soma 1, soma 1, soma 0. Quociente x² + x + 1 e resto 0.",
      "Fatoração obtida: x³ − 1 = (x − 1)(x² + x + 1), com resto zero. O trinômio não se fatora mais sobre os reais.",
      "Conferência pela distributiva: x³ + x² + x − x² − x − 1 = x³ − 1. Os termos do meio se cancelam.",
    ],
    atalho:
      "Some a progressão 1 + x + x² e multiplique por x − 1: os termos intermediários se telescopam e sobra x³ − 1. (x − 1)³ em x = 0 vale −1, igual ao enunciado, mas em x = 2 vale 1, enquanto 8 − 1 = 7. O cubo perfeito não serve.",
  },
  "mat-po-n2q4": {
    intuicao:
      "A parábola 2x² − 5x + 2 abre para cima e corta o eixo x duas vezes. O produto desses cortes não é o termo independente sozinho, porque a parábola está esticada pelo coeficiente 2. Girard divide o termo independente por esse coeficiente. A soma, outra leitura do mesmo gráfico, usa o coeficiente do meio. A pergunta fica só no produto, que vale 1.",
    motivacao:
      "Em ax² + bx + c = 0, as relações de Girard dizem que o produto das raízes é c/a e a soma é −b/a. Esquecer o a e responder 2, ou responder a soma 5/2, é trocar a fórmula decorada. O coeficiente líder diferente de 1 é exatamente o caso em que a fração importa. Achar as raízes 2 e 1/2 confirma o produto, mas não é necessário para a pergunta.",
    passos: [
      "Relações de Girard: o produto das raízes de ax² + bx + c = 0 é c/a, não c sozinho.",
      "Aqui a = 2, b = −5 e c = 2. Produto das raízes = c/a = 2/2 = 1. A divisão por a é o que a fórmula pede.",
      "A soma, para contraste de fórmula, seria −b/a = 5/2. Não é o que se pede.",
      "Raízes de conferência: (5 ± √(25 − 16))/4 = (5 ± 3)/4, logo 2 e 1/2. O produto 2 × 1/2 = 1.",
    ],
    atalho:
      "Divida o termo independente pelo coeficiente de x²: 2/2 = 1. Se a resposta deu 5/2, a conta foi a da soma. Se deu 2, o a do denominador foi esquecido e sobrou só o termo independente.",
  },
  "mat-po-n2q5": {
    intuicao:
      "A parábola x² − 3x − 10 corta o eixo x em dois pontos de sinais opostos, porque o termo independente é negativo e a concavidade é para cima: ela sai negativa em x = 0 e as raízes ficam uma de cada lado da origem. A da direita está mais longe, já que a soma é positiva. O par que soma 3 e multiplica −10 é 5 e −2.",
    motivacao:
      "Procurar dois números pela soma e pelo produto é Girard usado ao contrário, e é mais curto do que Bhaskara quando o par é inteiro. A fatoração (x − 5)(x + 2) devolve o polinômio e prova o par. O erro de marcar 5 e 2 acerta a soma absoluta e erra o produto, que seria +10, sinal do termo independente trocado. −5 e 2 somam −3, o oposto do coeficiente pedido.",
    passos: [
      "Relações de Girard: soma das raízes = −b/a = 3 e produto = c/a = −10. Desses dois números sai o par de raízes.",
      "Par inteiro que fecha as duas relações: 5 + (−2) = 3 e 5 × (−2) = −10. As raízes são 5 e −2.",
      "Fatoração de conferência: (x − 5)(x + 2) = x² + 2x − 5x − 10 = x² − 3x − 10.",
      "Conferência nas duas raízes: p(5) = 25 − 15 − 10 = 0 e p(−2) = 4 + 6 − 10 = 0.",
    ],
    atalho:
      "O produto negativo obriga sinais opostos, então 5 e 2 saem. Entre os pares de sinais opostos, a soma positiva escolhe o positivo com módulo maior: 5 e −2. Bhaskara daria (3 ± √49)/2 = (3 ± 7)/2, os mesmos números.",
  },
  "mat-po-n3q1": {
    intuicao:
      "O gráfico de x³ − 6x² + 11x − 6 é um cubo que, para x grande e positivo, sobe, e cruza o eixo x três vezes. A soma desses três cruzamentos está escrita no coeficiente de x², com o sinal trocado, no polinômio mônico. Não é preciso localizar cada raiz para somar. O desenho só confirma que há três cortes reais, em 1, em 2 e em 3, cuja soma é 6.",
    motivacao:
      "As relações de Girard para x³ + a x² + b x + c = 0 dizem que a soma das raízes é −a. Aqui a = −6, então a soma é 6. Decorar que a soma é o coeficiente de x, o 11, mistura a soma dois a dois com a soma simples. O termo −6 é o produto com sinal, outra relação. Briot-Ruffini pode achar as raízes depois, como conferência, mas a soma já estava no coeficiente.",
    passos: [
      "Relações de Girard no cúbico mônico: a soma das raízes é o oposto do coeficiente de x².",
      "O coeficiente de x² é −6. A soma das raízes é −(−6) = 6. Girard troca o sinal do coeficiente de x².",
      "O 11 é a soma dos produtos dois a dois, e −6 é o oposto do produto das três. Nenhum dos dois é a soma simples.",
      "Conferência: p(1) = 1 − 6 + 11 − 6 = 0. Briot-Ruffini por 1 desce ao quociente x² − 5x + 6 = (x − 2)(x − 3). Raízes 1, 2 e 3, e 1 + 2 + 3 = 6.",
    ],
    atalho:
      "No mônico, leia o coeficiente de x², troque o sinal e pare. −6 vira 6. Se a conta começou achando as três raízes, o resultado tem de bater com esse 6, senão a fatoração falhou em alguma raiz.",
  },
  "mat-po-n3q2": {
    intuicao:
      "O gráfico de p(x) = x³ − 3x + 2 encosta no eixo x em x = 1 e ainda corta em outro lugar, à esquerda. Encostar e não atravessar na hora, ou atravessar achatado, é o desenho de uma raiz que se repete. A reta tangente horizontal nesse contato é a derivada zerada no mesmo ponto. A fatoração mostra o fator (x − 1) duas vezes e um terceiro corte em −2.",
    motivacao:
      "Uma raiz simples zera o polinômio e não zera a derivada. Se p(1) = 0 e p'(1) = 0, a multiplicidade é pelo menos 2. Parar em p(1) = 0 e dizer multiplicidade 1 ignora o contato da tangente. Briot-Ruffini aplicado duas vezes separa (x − 1)² do fator restante e mostra que a outra raiz é −2, não 2. O sinal do fator linear que sobra é o detalhe que as alternativas trocam.",
    passos: [
      "Substituição: p(1) = 1 − 3 + 2 = 0. Então 1 é raiz e, pelo teorema do fator, x − 1 divide p.",
      "Derivada como taxa: p'(x) = 3x² − 3 e p'(1) = 3 − 3 = 0. A tangente é horizontal, então a multiplicidade passa de 1.",
      "Briot-Ruffini por 1, coeficientes 1, 0, −3, 2: quociente x² + x − 2 e resto 0. Nova divisão de x² + x − 2 por x − 1 dá x + 2.",
      "Fatoração: (x − 1)² (x + 2) = x³ − 3x + 2. A raiz 1 tem multiplicidade 2, e a outra raiz é −2.",
    ],
    atalho:
      "Se (x − 1)² (x + 2) expande para x³ + 2x² − 2x² − 4x + x + 2 = x³ − 3x + 2, o polinômio está reconstituído. A raiz que zera x + 2 é −2, e o quadrado no primeiro fator é a multiplicidade 2.",
  },
  "mat-po-n3q3": {
    intuicao:
      "As raízes r e s são os dois cortes da parábola x² − 4x + 1 com o eixo x. Elas não são inteiras, porque o discriminante 16 − 4 = 12 não é quadrado perfeito, mas a soma e o produto são inteiros visíveis nos coeficientes. r² + s² mede a soma dos quadrados das distâncias desses cortes até a origem. Dá para obter esse número a partir da soma e do produto, sem marcar cada corte no eixo.",
    motivacao:
      "A identidade r² + s² = (r + s)² − 2rs rearruma o quadrado da soma e tira o dobro do produto, que foi contado duas vezes. As relações de Girard entregam r + s = 4 e rs = 1 direto da equação. Extrair r = 2 + √3 e s = 2 − √3 e quadrar é o caminho longo, e o √3 acaba cancelando para o mesmo 14. Quem faz (r + s)² = 16 esquece de remover 2rs e responde a soma ao quadrado, não a soma dos quadrados.",
    passos: [
      "Relações de Girard: r + s = −b/a = 4 e rs = c/a = 1, lidos na equação mônica.",
      "Identidade da soma dos quadrados: r² + s² = (r + s)² − 2rs. O dobro do produto corrige o quadrado da soma.",
      "Substituição na identidade: 4² − 2 × 1 = 16 − 2 = 14. Portanto r² + s² vale 14.",
      "As raízes explícitas 2 ± √3 não são necessárias. O discriminante 12 só confirmaria que elas são reais e distintas.",
    ],
    atalho:
      "Some e multiplique: 4 e 1. O quadrado da soma é 16 e o dobro do produto é 2. 16 − 2 = 14. Se a resposta deu 16, o termo −2rs ficou de fora da identidade, e r² + s² = (r + s)² − 2rs fecha em 14.",
  },
  "mat-po-n3q4": {
    intuicao:
      "Um polinômio de coeficientes inteiros, visto como gráfico, corta o eixo x num inteiro k só se a altura em todos os outros termos também fecha múltiplo de k. O termo independente é a altura na origem, aqui 6. Se k é raiz, esse 6 tem de ser múltiplo de k, porque cada parcela com x carrega um fator k. No desenho dos candidatos, 4 não cabe em 6 como divisor inteiro.",
    motivacao:
      "O teorema das raízes racionais, no caso inteiro, diz que toda raiz inteira divide o termo independente. A prova é p(k) = aₙ kⁿ + … + a₁ k + a₀ = 0, então a₀ = −k × (um inteiro). 4 não divide 6, logo está eliminado. 1, 2, 3 e 6 dividem 6 e continuam apenas candidatos: o teorema não garante que sejam raízes, só corta quem é impossível. Tratar todo divisor como raiz certa é o uso decorado que passa do que o teorema afirma.",
    passos: [
      "Teorema da raiz inteira: se os coeficientes são inteiros e p(k) = 0 com k inteiro, então k divide o termo independente.",
      "O termo independente dado é 6. Os divisores inteiros positivos de 6 são 1, 2, 3 e 6.",
      "4 não divide 6, porque 6 = 4 × 1 + 2, resto 2. Portanto 4 não pode ser raiz inteira.",
      "1, 2, 3 e 6 continuam possíveis. Ser divisor é necessário, não suficiente, e a questão pede quem está fora.",
    ],
    atalho:
      "Experimente um polinômio qualquer com termo 6, por exemplo x − 6, ou 2x − 6. Nenhum zera em 4. Já p(x) = x − 4 tem termo independente −4, não 6. O resto de 6 por 4 não é zero, e isso basta para eliminar 4.",
  },
  "mat-po-n3q5": {
    intuicao:
      "x² − 1 é uma parábola que corta o eixo em −1 e em 1. O cúbico p(x) = x³ + 2x² − x − 2 passa por esses mesmos dois pontos, porque p(1) e p(−1) dão zero. Os dois gráficos compartilham esses cortes, então a parábola divide o cúbico. O quociente é uma reta, grau 3 menos grau 2, e essa reta é y = x + 2.",
    motivacao:
      "Como x² − 1 = (x − 1)(x + 1), o teorema do fator reduz a divisão a duas avaliações. Se as duas zerarem, o quociente é único e mônico de grau 1, da forma x + c. Briot-Ruffini sucessivo, ou a comparação de coeficientes, acha c sem divisão polinomial longa. Chutar x² + 2 lê o pedaço inicial do dividendo e esquece que o quociente tem de ter grau 1. A multiplicação de volta é a prova, e ela falha para qualquer outro candidato.",
    passos: [
      "Fatoração do divisor em diferença de quadrados: x² − 1 = (x − 1)(x + 1).",
      "Teorema do fator: p(1) = 1 + 2 − 1 − 2 = 0 e p(−1) = −1 + 2 + 1 − 2 = 0. Os dois fatores dividem p.",
      "Grau do quociente: 3 − 2 = 1. Briot-Ruffini por 1, coeficientes 1, 2, −1, −2, dá x² + 3x + 2, e este se fatora como (x + 1)(x + 2).",
      "Produto de conferência: (x + 2)(x² − 1) = x³ − x + 2x² − 2 = x³ + 2x² − x − 2. Quociente x + 2 e resto 0.",
    ],
    atalho:
      "Multiplique as opções por x² − 1. (x + 2)(x² − 1) = x³ + 2x² − x − 2, que é o dividendo inteiro. (x − 2)(x² − 1) troca o sinal de 2x². Uma multiplicação separa o quociente x + 2, e as outras opções não reproduzem o cúbico.",
  },
};
