import type { AnaliseQuestao } from "../../lessons.ts";

export const ANALISES: Record<string, AnaliseQuestao> = {
  "mat-exp-n1q1": {
    intuicao:
      "O número pequeno escrito acima do 2 não é um vizinho para ser multiplicado ao lado. Ele conta quantas vezes o próprio 2 entra como fator. Três fatores enfileirados formam o cubo de aresta 2: os dois primeiros fecham um quadrado e o terceiro dá o volume. A pergunta pede esse volume, e não a conta que junta a base com o expoente.",
    motivacao:
      "Multiplicar a base pelo expoente produz 6, e a banca deixa esse atalho entre as alternativas. Esse produto não descreve a potência. O motivo por que a definição pede fatores repetidos é que a potência abrevia 2 × 2 × 2, e o expoente só conta essas repetições. Trocar base e expoente cai em 3², que é outra potência e vale 9.",
    passos: [
      "Definição de potência de expoente natural: o expoente 3 pede três fatores iguais à base, então 2³ = 2 × 2 × 2.",
      "Primeiro produto parcial: 2 × 2 = 4. Esse 4 é a área do quadrado de lado 2, ainda sem o terceiro fator.",
      "Produto pelo terceiro fator: 4 × 2 = 8. O cubo de aresta 2 tem volume 8.",
      "O valor é 8. A alternativa 6 é 2 × 3, produto da base pelo expoente. A alternativa 9 é 3², com base e expoente trocados.",
    ],
    atalho:
      "Os dois primeiros fatores já dão 4, e ainda falta multiplicar por 2, então o resultado é par e maior que 4. A alternativa 6 fica abaixo desse quadrado. 9 e 5 são ímpares, e 12 pediria um fator 3 no lugar de um 2. Sobra 8.",
  },
  "mat-exp-n1q2": {
    intuicao:
      "Expoente zero pede uma contagem estranha: nenhum fator 5 foi colocado na conta. Não é uma soma vazia, que daria zero. Na multiplicação, o ponto de partida de uma pilha vazia de fatores é o 1, o número que não muda ninguém quando multiplica. A pergunta é qual valor faz a base 5, diferente de zero, concordar com essa pilha vazia.",
    motivacao:
      "Dizer que 5⁰ vale 0 trata o expoente como se fosse uma soma, e a banca oferece esse zero de propósito. A potência conversa com o produto. O motivo por que o resultado é 1 é que 5ⁿ dividido por 5ⁿ continua sendo uma potência de base 5, de expoente zero, e ao mesmo tempo é um número dividido por ele mesmo. As duas leituras têm de coincidir.",
    passos: [
      "Quociente de potências de mesma base: aᵐ / aⁿ = aᵐ⁻ⁿ, com a diferente de zero. Em particular, 5ⁿ / 5ⁿ = 5⁰.",
      "Quociente de um número não nulo por ele mesmo: 5ⁿ / 5ⁿ = 1, qualquer que seja o expoente natural n.",
      "Igualdade das duas escritas do mesmo quociente: 5⁰ = 1. A base 5 é diferente de zero, então o caso está definido.",
      "O valor é 1. Zero seria 0 × 5, uma multiplicação. 5 seria 5¹. A potência com expoente zero existe para essa base.",
    ],
    atalho:
      "A regra aᵐ × a⁰ = aᵐ só fecha se a⁰ for 1, porque 1 é o neutro da multiplicação. Teste a base 5 com expoente 1: 5¹ × 5⁰ tem de continuar 5, e isso obriga 5⁰ = 1. O zero quebraria essa conta.",
  },
  "mat-exp-n1q3": {
    intuicao:
      "O sinal de menos está no expoente, não na base e não na frente do número. Ele pede para desfazer a potência, isto é, passar ao inverso. 2² é um quadrado de lado 2, área 4, todo no lado positivo da reta. Inverter esse quadrado coloca o resultado entre 0 e 1, ainda positivo. A pergunta é esse inverso, não um número negativo.",
    motivacao:
      "Negativar o 4 produz −4, e essa alternativa existe para quem lê o menos do expoente como sinal do resultado. O motivo por que o sinal do expoente não é o sinal do número é que expoente negativo nomeia o inverso multiplicativo, e o inverso de um positivo continua positivo. A base 2 é diferente de zero, então o inverso existe.",
    passos: [
      "Definição de expoente inteiro negativo: a⁻ⁿ = 1/aⁿ, com a diferente de zero. Aqui a = 2 e n = 2.",
      "Potência de expoente natural no denominador: 2² = 2 × 2 = 4. Esse quadrado é o número que o expoente negativo inverte.",
      "Inverso multiplicativo: 2⁻² = 1/4. O 4 não muda de sinal ao ir para o denominador.",
      "O valor é 1/4. −4 tornaria o resultado negativo. 4 esquece o inverso. 1/2 é 2⁻¹, com o módulo do expoente trocado.",
    ],
    atalho:
      "2⁻¹ já é 1/2. Mais um expoente negativo multiplica por outro 1/2, porque a⁻ⁿ × a⁻¹ = a⁻⁽ⁿ⁺¹⁾. Então 2⁻² = (1/2) × (1/2) = 1/4. Qualquer alternativa negativa morre: potência de base positiva não sai do lado positivo.",
  },
  "mat-exp-n1q4": {
    intuicao:
      "O gráfico de aˣ, com a maior que 1, é uma curva que sobe o tempo todo, achatada perto do eixo horizontal à esquerda e íngreme à direita. Andar para a direita no expoente multiplica o valor por a, e multiplicar por um número maior que 1 aumenta. Não é uma reta de inclinação fixa e não é uma parábola. A pergunta é só o sentido desse crescimento.",
    motivacao:
      "Chamar toda exponencial de decrescente ignora a hipótese a > 1, que é o dado que decide o sentido. O motivo por que a curva sobe é que o acréscimo de 1 no expoente multiplica o valor por a, e a é maior que 1. Base entre 0 e 1 faria o contrário, mas essa base não é a do enunciado. Parábola é gráfico de polinômio do segundo grau.",
    passos: [
      "Passo de uma unidade no expoente: aˣ⁺¹ = aˣ × a. A propriedade é a potência de mesma base na multiplicação, somando os expoentes x e 1.",
      "Comparação com 1: se a > 1, então aˣ × a > aˣ × 1. Multiplicar por um número maior que 1 aumenta o valor.",
      "Definição de função crescente: x₂ > x₁ implica aˣ₂ > aˣ₁. A função do enunciado é crescente.",
      "Base entre 0 e 1 inverteria a desigualdade e a função seria decrescente. Parábola não é a forma do gráfico de aˣ.",
    ],
    atalho:
      "Teste a base 2, que é maior que 1. 2¹ = 2, 2² = 4 e 2³ = 8, uma sequência que só sobe. Uma parábola de coeficiente positivo cairia de um dos lados, e aqui os dois lados do teste sobem. O comportamento é crescente.",
  },
  "mat-exp-n1q5": {
    intuicao:
      "3² são dois fatores 3, e 3³ são mais três fatores 3. O produto junta as duas filas numa fila só, sem mudar a base. Contar os fatores é somar quantos 3 aparecem: dois mais três. A pergunta pede essa potência única, ainda escrita como potência de 3, e não o produto numérico expandido.",
    motivacao:
      "Multiplicar os expoentes produziria 3⁶, que é a regra da potência de potência, outra operação. O motivo por que aqui se somam os expoentes é que o sinal entre as potências é uma multiplicação, e multiplicar potências de mesma base é concatenar os fatores. Bases diferentes não autorizariam essa soma. A base é 3 nos dois fatores.",
    passos: [
      "Produto de potências de mesma base: aᵐ × aⁿ = aᵐ⁺ⁿ. As duas bases são 3, então a propriedade se aplica.",
      "Soma dos expoentes: 2 + 3 = 5. O produto das duas potências de base 3 é 3⁵.",
      "Potência de potência, que não é o caso, multiplicaria os expoentes: (3²)³ = 3⁶. O enunciado não tem esse parêntese.",
      "O resultado na forma pedida é 3⁵. 9⁵ troca a conta para a base. 6⁵ soma as bases e guarda um expoente.",
    ],
    atalho:
      "3² = 9 e 3³ = 27, e o produto 9 × 27 = 243. Como 3⁵ = 243, a alternativa 3⁵ fecha. 3⁶ = 729, que é o triplo e seria (3²)³. A conta curta dos fatores, 3 × 3 × 3 × 3 × 3, tem cinco fatores e confirma 3⁵.",
  },
  "mat-exp-n2q1": {
    intuicao:
      "A base é uma fração menor que 1, e o expoente negativo pede o inverso dela, elevado ao cubo. Inverter 1/2 devolve 2, um inteiro. Elevar esse inteiro ao cubo empilha três fatores 2. O sinal do expoente não empurra o resultado para o lado negativo da reta, porque a base é positiva. A pergunta pede esse inteiro.",
    motivacao:
      "Parar em 1/8 calcula (1/2)³ e esquece de inverter, que é justamente o que o expoente negativo pede. O motivo por que inverter a base e trocar o sinal do expoente é legítimo é que (a/b)⁻ⁿ = (b/a)ⁿ, com a e b diferentes de zero. É a mesma definição do inverso, escrita de uma vez só. O menos na frente do 8 seria outro engano de sinal.",
    passos: [
      "Expoente negativo na fração: (a/b)⁻ⁿ = (b/a)ⁿ. Com a = 1, b = 2 e n = 3, (1/2)⁻³ = 2³.",
      "Potência de expoente natural: 2³ = 2 × 2 × 2 = 8. Três fatores iguais a 2 completam o cubo.",
      "Conferência pelo inverso: (1/2)³ = 1/8 e 1 dividido por 1/8 é 8, porque dividir por uma fração multiplica pelo inverso.",
      "O valor é 8. 1/8 esquece a inversão. −1/8 acrescenta um sinal que a base positiva não produz.",
    ],
    atalho:
      "Cada unidade negativa no expoente troca 1/2 por 2. Três unidades dão 2 × 2 × 2 = 8. Se o resultado desse uma fração, a inversão teria sido pulada. As alternativas negativas saem na hora, e 1/6 não é potência de 2.",
  },
  "mat-exp-n2q2": {
    intuicao:
      "2ˣ = 16 pergunta qual expoente faz a base 2 alcançar 16. Não é dividir 16 por 2, o que responderia a uma equação linear. 16 é uma pilha de fatores 2: 2, 4, 8 e então 16. A pergunta é a altura dessa pilha, o número de vezes que o 2 foi multiplicado. Cada patamar é o dobro do anterior, e a contagem desses patamares é o expoente.",
    motivacao:
      "A alternativa x = 8 trata a equação como 2x = 16. O motivo por que esse caminho não serve é que o x está no expoente, então a operação que liga o 2 ao 16 é uma potência, não um produto. Bases iguais e diferentes de 1 deixam os expoentes iguais, e esse é o passo que evita a conta linear.",
    passos: [
      "Decomposição em potência de 2: 16 = 2 × 2 × 2 × 2 = 2⁴. A base do enunciado já é 2.",
      "Igualdade de potências de mesma base, com base diferente de 1: 2ˣ = 2⁴ implica x = 4.",
      "Conferência por substituição: 2⁴ = 16. O expoente encontrado reproduz o enunciado.",
      "x = 8 seria a solução de 2x = 16. x = 2 dá 2² = 4, que não alcança 16. x = 16 repete o resultado no lugar do expoente.",
    ],
    atalho:
      "Dobre a partir de 2⁰ = 1 e conte os passos até 16: 2, 4, 8, 16. São quatro dobras, então o expoente é 4. Oito já passou de 16 na lista das potências de 2, e 32 é o dobro de 16, não o expoente.",
  },
  "mat-exp-n2q3": {
    intuicao:
      "O expoente 3/2 mistura duas ordens. O 2 do denominador pede uma raiz quadrada, e o 3 do numerador pede um cubo. 4 é um quadrado perfeito, lado 2, então a raiz aparece inteira antes mesmo do cubo. A pergunta é o número que sai dessa raiz seguida do cubo, ou do cubo seguido da raiz.",
    motivacao:
      "Multiplicar 4 por 3/2 produz 6, e essa conta trata o expoente como um coeficiente. O motivo por que o expoente fracionário não multiplica a base é que a/b no expoente nomeia raiz e potência, não um produto. Escrever 4 como 2² deixa a potência de potência fazer o cancelamento do 2, que é o caminho curto e seguro.",
    passos: [
      "Reescrita da base: 4 = 2². Então 4^(3/2) = (2²)^(3/2), agora com a potência escrita na base 2.",
      "Potência de potência: multiplicam-se os expoentes. 2 × 3/2 = 3, logo (2²)^(3/2) = 2³.",
      "Potência de expoente natural: 2³ = 2 × 2 × 2 = 8. Três fatores iguais a 2 completam o cubo.",
      "O valor é 8. Pela raiz primeiro: (√4)³ = 2³ = 8. A alternativa 6 é 4 × 3/2, e √4 = 2 esquece o cubo.",
    ],
    atalho:
      "Separe o expoente: 4^(3/2) = 4^(1 + 1/2) = 4¹ × 4^(1/2) = 4 × √4. Como √4 = 2, o produto é 4 × 2 = 8. O resultado tem de ficar entre 4¹ = 4 e 4² = 16, e 8 está nesse intervalo. 16 já é o quadrado inteiro.",
  },
  "mat-exp-n2q4": {
    intuicao:
      "2ˣ > 8 compara uma curva crescente com a altura 8. A curva de base 2 passa exatamente pela altura 8 num único expoente, e à direita desse ponto ela está mais alta. O enunciado pede estritamente maior, então o próprio ponto de encontro fica de fora. Não é a desigualdade linear x > 8.",
    motivacao:
      "A base maior que 1 é o dado que impede virar o sinal. O motivo por que a desigualdade entre os expoentes conserva o sentido é que a função aˣ, com a > 1, é crescente: expoente maior dá valor maior. Se a base estivesse entre 0 e 1, o sinal viraria. Incluir o igual responderia a uma desigualdade que o enunciado não escreveu.",
    passos: [
      "Reescrita da altura: 8 = 2³. A desigualdade fica 2ˣ > 2³, com a mesma base dos dois lados.",
      "Função crescente: a base 2 é maior que 1, então 2ˣ > 2³ conserva o sentido e dá x > 3.",
      "Desigualdade estrita: em x = 3 vale 2³ = 8, que não é maior que 8. O extremo 3 fica de fora.",
      "A solução é x > 3. x ≥ 3 inclui a igualdade. x < 3 seria o sentido de uma base decrescente. x > 4 exige 2ˣ > 16.",
    ],
    atalho:
      "Teste vizinhos de 3. Em x = 3 a potência vale 8, empatada, e o enunciado pede maior. Em x = 4 vale 16, que passa. Em x = 2 vale 4, que não passa, e o corte fica logo depois de 3, sem incluir o 3.",
  },
  "mat-exp-n2q5": {
    intuicao:
      "f(x) = 3 · 2ˣ é uma exponencial de base 2 esticada na vertical pelo fator 3. O 3 não é base e não é expoente. f(2) pede a altura quando o expoente é 2: primeiro a potência vira um número, e só então o 3 multiplica esse número. A ordem está desenhada na própria fórmula, e a pergunta pede só essa altura.",
    motivacao:
      "Elevar o 3 ao quadrado produz 36 se alguém também eleva o 2, e a banca deixa 36 entre as opções. O motivo por que o 3 não entra na potência é que ele está multiplicando 2ˣ, do lado de fora. Precedência manda resolver o expoente antes do produto. Tratar f(2) como 3 × 2 esquece que o 2 é expoente, não fator solto.",
    passos: [
      "Substituição na definição: f(2) = 3 · 2². O expoente recebe o 2, e o coeficiente 3 permanece.",
      "Potência antes do produto, pela precedência das operações: 2² = 2 × 2 = 4. O expoente se resolve primeiro.",
      "Multiplicação pelo coeficiente: 3 × 4 = 12. O fator 3 só entra depois que a potência já virou número.",
      "O valor é 12. 36 seria 3² × 2², promovendo o coeficiente a base. 6 seria 3 × 2, sem calcular a potência.",
    ],
    atalho:
      "f(0) = 3 · 1 = 3, e cada unidade a mais no expoente dobra o valor, porque a base é 2. De 0 até 2 são duas dobras: 3 vira 6 e 6 vira 12. 18 seria três vezes 6, uma dobra a mais do que o expoente 2 autoriza.",
  },
  "mat-exp-n3q1": {
    intuicao:
      "4ˣ e 8 não estão escritos na mesma base, mas os dois são potências de 2. 4 é um quadrado de lado 2, e 8 é o cubo de lado 2. Igualar as alturas só fica transparente depois de falar a mesma língua. A pergunta é o expoente x que faz o quadrado repetido alcançar o cubo. Sem a base comum, os dois lados não se comparam.",
    motivacao:
      "Chutar x = 2 calcula 4² = 16, que já passou de 8, e x = 1/2 calcula só a raiz de 4, que é 2. O motivo por que a mudança para a base 2 é o caminho é que a igualdade de potências só compara expoentes quando as bases coincidem e são diferentes de 1. Sem essa troca, 4 e 8 não entregam o expoente.",
    passos: [
      "Potência de potência na base 4: 4ˣ = (2²)ˣ = 2^(2x). O expoente externo multiplica o interno.",
      "Decomposição do outro lado na base 2: 8 = 2³. A equação fica 2^(2x) = 2³, com as bases já iguais.",
      "Igualdade de potências de mesma base, base diferente de 1: 2x = 3, logo x = 3/2.",
      "Conferência: 4^(3/2) = (√4)³ = 2³ = 8. x = 2 daria 16, e x = 1/2 daria 2.",
    ],
    atalho:
      "4^(3/2) já vale 8, pela conta da raiz seguida do cubo. Então x = 3/2 é candidato imediato e a substituição confirma. x = 3 daria 4³ = 64, longe de 8. x = 4 é maior ainda, e o expoente tem de ser uma fração entre 1 e 2.",
  },
  "mat-exp-n3q2": {
    intuicao:
      "A base 1/2 é menor que 1, então a curva desce quando o expoente cresce: expoente grande dá fração pequena, expoente muito negativo dá número grande. 4 está alto nessa curva. Quem está acima de 4 está à esquerda do expoente que produz 4, não à direita. A figura já indica que a desigualdade vai virar.",
    motivacao:
      "Conservar o sinal, como se a base fosse maior que 1, produz x > −2, e a banca oferece exatamente essa leitura. O motivo por que o sinal vira é que a função (1/2)ˣ é decrescente: o valor maior corresponde ao expoente menor. Sem lembrar o sentido da base, a desigualdade fica espelhada e inclui pontos que não passam de 4.",
    passos: [
      "Reescrita de 4 na mesma base: (1/2)⁻² = 2² = 4. A desigualdade fica (1/2)ˣ > (1/2)⁻².",
      "Função decrescente: a base está entre 0 e 1, então a desigualdade entre os valores inverte a dos expoentes.",
      "Comparação dos expoentes: x < −2. O caso x = −2 dá igualdade, e o enunciado pede estrito.",
      "A solução é x < −2. Confira x = −3: (1/2)⁻³ = 8 > 4. Confira x = −1: (1/2)⁻¹ = 2, que não é maior que 4.",
    ],
    atalho:
      "Passe tudo para a base 2: (1/2)ˣ = 2⁻ˣ e 4 = 2². A desigualdade 2⁻ˣ > 2², com base maior que 1, dá −x > 2 e, ao multiplicar por −1, x < −2. x = 0 produz 1, que não supera 4, então x > −2 está errado.",
  },
  "mat-exp-n3q3": {
    intuicao:
      "9ˣ é um quadrado disfarçado: 9 é 3², então 9ˣ é o quadrado de 3ˣ. A expressão do meio, 4 · 3ˣ, é linear nesse mesmo bloco. O desenho é uma equação do segundo grau em que a incógnita não é x, e sim a potência 3ˣ. A pergunta final não pede as raízes uma a uma: pede a soma delas. As duas raízes reais é que entram nessa soma.",
    motivacao:
      "Somar os valores de y, 1 e 3, produz 4, que está entre as alternativas e não é a soma pedida. O motivo por que a substituição y = 3ˣ vem antes é que ela transforma a equação exponencial numa quadrática fatorável, e só depois cada y positivo vira um x. Sem essa troca, 9ˣ e 3ˣ parecem potências sem parentesco.",
    passos: [
      "Potência de potência: 9ˣ = (3²)ˣ = (3ˣ)². A substituição y = 3ˣ exige y > 0, porque potência de base positiva nunca zera nem fica negativa.",
      "Equação do segundo grau: y² − 4y + 3 = 0. Fatoração: (y − 1)(y − 3) = 0, então y = 1 ou y = 3.",
      "Volta à exponencial. 3ˣ = 1 = 3⁰ dá x = 0. 3ˣ = 3 = 3¹ dá x = 1. As duas são positivas e as duas servem.",
      "Soma das soluções reais: 0 + 1 = 1. Somar os y daria 4, que não é a soma dos x.",
    ],
    atalho:
      "Teste os inteiros vizinhos. Em x = 0: 9⁰ − 4 · 3⁰ + 3 = 1 − 4 + 3 = 0. Em x = 1: 9 − 4 · 3 + 3 = 9 − 12 + 3 = 0. As duas raízes já aparecem e a soma é 1, enquanto x = 2 dá 81 − 36 + 3, longe de zero.",
  },
  "mat-exp-n3q4": {
    intuicao:
      "A colônia não ganha um punhado fixo de bactérias a cada hora. A cada 3 h a quantidade inteira dobra, como uma pilha que duplica o próprio tamanho. Em 12 h cabem várias dessas duplicações, uma depois da outra. A pergunta é por quanto a quantidade inicial foi multiplicada, não quantas horas se passaram.",
    motivacao:
      "Multiplicar 12 por 2 produz 24 e trata a dobra como se fosse um acréscimo linear de duas unidades por hora, ou um produto do tempo pela taxa. O motivo por que o modelo é uma potência de 2 é que cada intervalo multiplica de novo pelo mesmo fator, e multiplicações repetidas são uma potência. O expoente é o número de intervalos, não o número de horas.",
    passos: [
      "Contagem dos intervalos: em 12 h, com uma dobra a cada 3 h, cabem 12/3 = 4 duplicações.",
      "Crescimento geométrico: cada duplicação multiplica a quantidade por 2. Quatro duplicações dão o fator 2⁴.",
      "Potência de expoente natural: 2⁴ = 2 × 2 × 2 × 2 = 16. Quatro duplicações produzem o fator 16.",
      "O fator é 16. 8 seria 2³, só três dobras, o que corresponde a 9 h. 4 conta os intervalos e esquece de elevar o 2.",
    ],
    atalho:
      "Acompanhe uma unidade inicial. Depois de 3 h há 2, depois de 6 h há 4, depois de 9 h há 8 e depois de 12 h há 16. A lista é a tabuada das potências de 2. 24 não aparece nela, e 6 seria uma soma de horas com outra conta.",
  },
  "mat-exp-n3q5": {
    intuicao:
      "Uma função exponencial real, desenhada para todo x real, precisa de uma base que aceite qualquer expoente e devolva um número real. Bases positivas fazem isso: dá para marcar 2ˣ, 10ˣ, (1/2)ˣ e eˣ em toda a reta. Uma base negativa quebra em expoentes como 1/2, porque a raiz quadrada de um negativo não é real. A pergunta é qual valor da lista não serve de base.",
    motivacao:
      "1/2 parece suspeito porque é menor que 1, mas menor que 1 não é o obstáculo: o obstáculo é ser negativo ou ser igual a 1. O motivo por que a base tem de ser positiva é que aˣ nos reais se apoia em potências e raízes que, para expoente racional qualquer, só ficam definidas em toda a reta quando a > 0. A condição a ≠ 1 evita a função constante, que não é exponencial.",
    passos: [
      "Condição de definição: f(x) = aˣ, para todo x real, pede a > 0 e a ≠ 1. Só assim a imagem é real e a função não é constante.",
      "Base negativa: (−2)^(1/2) não é real. O expoente 1/2 já tira −2 do domínio real completo.",
      "Base entre 0 e 1: 1/2 > 0 e 1/2 ≠ 1, então (1/2)ˣ está definida em ℝ e é decrescente. Ela serve.",
      "2, 10 e e são maiores que 1, logo também servem. O valor que não pode ser a base é −2.",
    ],
    atalho:
      "Olhe só o sinal das opções. 2, 1/2, 10 e e são positivos e diferentes de 1. −2 é o único negativo. Qualquer base negativa falha num expoente fracionário de denominador par, então a escolha é −2, sem precisar calcular uma potência.",
  },
};
