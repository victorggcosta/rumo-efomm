import type { AnaliseQuestao } from "../../lessons.ts";

export const ANALISES: Record<string, AnaliseQuestao> = {
  "mat-ca-n1q1": {
    intuicao:
      "A expressão −4 + 7 × 2 parece uma conta da esquerda para a direita, mas a escrita sem parênteses já traz uma ordem. O olho quer juntar −4 com 7 primeiro e obter 3, e só então multiplicar. Essa leitura transforma a conta em (−4 + 7) × 2, que não está no enunciado. O que se pede é o valor da expressão exatamente como foi escrita.",
    motivacao:
      "Isolar a multiplicação antes da soma é a regra, e não um capricho de notação. Multiplicar é uma soma repetida: 7 × 2 já é o bloco 14. Somar −4 a esse bloco é o que a expressão descreve. Fazer a soma primeiro exigiria parênteses, que funcionam justamente como um pedido para furar a ordem padrão.",
    passos: [
      "Precedência: na ausência de parênteses e potências, multiplicação e divisão precedem adição e subtração. O único produto é 7 × 2.",
      "Multiplicação: 7 × 2 = 14. A expressão se reduz a −4 + 14.",
      "Adição de inteiros com sinais diferentes: conserva-se o sinal do número de maior módulo e subtraem-se os módulos. 14 − 4 = 10, com sinal positivo.",
      "O resultado é 10. A alternativa 6 é (−4 + 7) × 2 = 3 × 2, outra expressão.",
    ],
    atalho:
      "Teste o parêntese que a alternativa 6 esconde. Se o enunciado tivesse (−4 + 7) × 2, o 7 estaria preso ao −4. Como não está, descarte 6 na hora. −22 seria −(4 + 7 × 2) ou 4 × (−7) + algo vizinho: o sinal de fora não existe. A conta curta 14 − 4 = 10 fecha.",
  },
  "mat-ca-n1q2": {
    intuicao:
      "3/4 e 1/6 são pedaços de tamanhos diferentes. Somar os numeradores e os denominadores, 4/10, mistura a contagem das partes com o tamanho da parte. Antes de somar, as duas frações precisam falar do mesmo inteiro cortado do mesmo jeito. A pergunta é quanto vale essa soma já simplificada.",
    motivacao:
      "A soma de frações só é a soma dos numeradores quando o denominador é comum, porque aí cada unidade do numerador representa o mesmo pedaço. O menor denominador comum é o menor múltiplo comum dos denominadores. 12 é o primeiro número que é múltiplo de 4 e de 6 ao mesmo tempo, então reescrever as duas frações em doze avos é o caminho mais curto, sem inflar a conta com 24 ou 48.",
    passos: [
      "Menor múltiplo comum: mmc(4, 6). 4 = 2² e 6 = 2 × 3, então mmc = 2² × 3 = 12.",
      "Fração equivalente de 3/4: multiplica-se numerador e denominador pelo mesmo inteiro 3, porque 4 × 3 = 12. Propriedade: a/b = (a k)/(b k) para k ≠ 0. 3/4 = 9/12.",
      "Fração equivalente de 1/6: o fator é 2, porque 6 × 2 = 12. 1/6 = 2/12.",
      "Soma de mesmo denominador: (9 + 2)/12 = 11/12. Não se somam denominadores.",
      "Simplificação: mdc(11, 12) = 1, pois 11 é primo e não divide 12. A fração já é irredutível.",
    ],
    atalho:
      "Em decimal, 3/4 = 0,75 e 1/6 ≈ 0,1667. A soma fica perto de 0,92. 11/12 ≈ 0,9167. 4/10 = 0,4 é pequeno demais, 4/12 = 0,33 também, e 5/6 ≈ 0,83 fica aquém. A estimativa aponta para 11/12 antes de terminar a simplificação.",
  },
  "mat-ca-n1q3": {
    intuicao:
      "Racional, aqui, não quer dizer “faz sentido”. Quer dizer “é razão de dois inteiros”. Dá para desenhar 0,75 como três quartos de uma barra. √2 é o comprimento da diagonal do quadrado de lado 1, e essa diagonal não cabe numa fração de inteiros. A pergunta é só classificar, sem calcular uma raiz.",
    motivacao:
      "A definição decide o item sem aproximação decimal. Um número é racional quando existem inteiros p e q, com q ≠ 0, tais que o número seja p/q. Procurar essa fração no 0,75 é imediato. Para as raízes e para π, basta lembrar quais desta lista são os irracionais clássicos, em vez de tentar “arredondar até parecer fração”.",
    passos: [
      "Definição: x ∈ ℚ se, e somente se, x = p/q com p, q ∈ ℤ e q ≠ 0.",
      "Escrita decimal finita: 0,75 = 75/100. O denominador é uma potência de 10, que é inteiro e não nulo.",
      "Simplificação por 25: 75/100 = 3/4. Continua razão de inteiros, logo é racional.",
      "√2 e √3 são raízes de inteiros que não são quadrados perfeitos. √8 = √(4 × 2) = 2√2, e o fator √2 impede a forma p/q. π também não é razão de inteiros.",
    ],
    atalho:
      "Todo decimal finito é racional: conte as casas e ponha 10, 100 ou 1.000 no denominador. 0,75 tem duas casas, então o denominador 100 aparece sozinho. As alternativas com √ ou π não oferecem esse denominador. A escolha é 0,75.",
  },
  "mat-ca-n1q4": {
    intuicao:
      "A e B são duas listas. A interseção é a lista do que aparece nas duas ao mesmo tempo, como a região comum de dois círculos. A união seria juntar tudo, sem repetir o 3. O símbolo ∩ pede só o miolo comum, não o conjunto maior.",
    motivacao:
      "A definição operacional é mais segura do que desenhar o diagrama e chutar. Um elemento entra em A ∩ B exatamente quando passa nos dois testes de pertinência. Conferir 1, 2, 3 e 4 um a um evita trocar ∩ por ∪, que é a troca que produz {1, 2, 3, 4}.",
    passos: [
      "Definição: x ∈ A ∩ B se, e somente se, x ∈ A e x ∈ B.",
      "1 ∈ A e 1 ∉ B, então 1 fica de fora. O mesmo vale para 2.",
      "3 ∈ A e 3 ∈ B, então 3 entra.",
      "4 ∈ B e 4 ∉ A, então 4 fica de fora.",
      "A ∩ B = {3}. A união, que não foi pedida, seria {1, 2, 3, 4}.",
    ],
    atalho:
      "O conjunto menor, B, só tem dois candidatos: 3 e 4. Desses, só o 3 está em A. A interseção não pode ser maior do que B, então {1, 2, 3, 4} e {1, 2} morrem na hora. Sobra {3}.",
  },
  "mat-ca-n1q5": {
    intuicao:
      "Multiplicar por um negativo é virar para o lado oposto da reta. (−3) × 4 já estaria três passos de 4 unidades à esquerda, em −12. Multiplicar por −4, em vez de 4, vira esse resultado mais uma vez. Duas viradas devolvem o lado positivo. A pergunta é o produto, não a soma −3 + (−4).",
    motivacao:
      "A regra dos sinais da multiplicação sai dessa ideia de oposto, e não de uma tabela decorada. O oposto de um número y é −y, e −(−y) = y. Escrever (−3) × (−4) como o oposto de (−3) × 4 usa só essa propriedade. Contar os sinais também funciona, mas a conta do oposto mostra de onde a regra vem.",
    passos: [
      "Definição de oposto: (−3) × (−4) = −[ (−3) × 4 ].",
      "Produto por positivo: (−3) × 4 = −12.",
      "Oposto do oposto: −(−12) = 12. Dois sinais negativos na multiplicação produzem positivo.",
      "−12 seria o produto de sinais diferentes, (−3) × 4. −7 seria a soma (−3) + (−4), outra operação.",
    ],
    atalho:
      "Ignore os sinais e multiplique os módulos: 3 × 4 = 12. Conte os fatores negativos: dois, número par, então o produto é positivo. Um fator negativo só já deixaria −12. A resposta é 12.",
  },
  "mat-ca-n2q1": {
    intuicao:
      "Há um parêntese e, fora dele, uma divisão. O parêntese é uma conta pequena que precisa virar um único número antes de participar da divisão. Dentro dele há uma subtração de frações; fora, dividir por 5/6 é o mesmo que multiplicar pelo inverso. O desenho é: primeiro iguale os pedaços, depois vire a divisão.",
    motivacao:
      "A ordem é parênteses, depois a divisão. Dentro do parêntese a subtração pede denominador comum, pelo mesmo motivo da soma. A divisão por uma fração usa o inverso porque (a/b) ÷ (c/d) = (a/b) × (d/c), com c e d diferentes de zero. Esse inverso é a operação que desfaz a multiplicação por 5/6.",
    passos: [
      "Parêntese primeiro. mmc(3, 4) = 12. 2/3 = 8/12 e 1/4 = 3/12, multiplicando numerador e denominador pelo fator que completa 12.",
      "Subtração de mesmo denominador: (8 − 3)/12 = 5/12.",
      "Divisão por fração: dividir por 5/6 é multiplicar pelo inverso multiplicativo 6/5. Vale porque (5/6) × (6/5) = 1.",
      "Produto de frações: numerador com numerador e denominador com denominador. (5/12) × (6/5) = 30/60.",
      "Simplificação por 30: 30/60 = 1/2. O 5 do numerador cancela o 5 do segundo fator, e sobra 6/12 = 1/2.",
    ],
    atalho:
      "Depois de ver 5/12 dividido por 5/6, cancele o 5 e calcule (1/12) × 6 = 6/12 = 1/2. Em decimal, 2/3 − 1/4 ≈ 0,666 − 0,25 = 0,416, e 0,416 ÷ 0,833 ≈ 0,5. A estimativa confirma 1/2 e afasta 5/12, que é só o resultado do parêntese, antes da divisão.",
  },
  "mat-ca-n2q2": {
    intuicao:
      "Um subconjunto é uma escolha, para cada elemento, de levá-lo ou deixá-lo. Com {1, 2, 3} há três decisões independentes de sim ou não. O conjunto vazio é a escolha “não, não, não”, e o próprio A é “sim, sim, sim”. Os dois contam. A pergunta é quantas escolhas existem, não quantos elementos A tem.",
    motivacao:
      "Contar pela regra do produto evita listar e esquecer o vazio. Cada elemento tem 2 estados, e as escolhas se multiplicam porque são independentes. A fórmula 2ⁿ é esse produto escrito de uma vez. A lista serve depois, como conferência, e não como ponto de partida.",
    passos: [
      "Regra do produto: se a primeira decisão tem 2 resultados e cada decisão seguinte também, o total é o produto.",
      "Três elementos, duas escolhas cada: 2 × 2 × 2 = 2³ = 8.",
      "A lista fecha a conta: ∅, {1}, {2}, {3}, {1, 2}, {1, 3}, {2, 3} e {1, 2, 3}.",
      "Esquecer ∅ produz 7. Esquecer ∅ e o próprio A produz 6. Nenhum dos dois é o conjunto de todos os subconjuntos.",
    ],
    atalho:
      "Para n pequeno, escreva a linha do triângulo de Pascal: 1 + 3 + 3 + 1 = 8, que são os subconjuntos de 0, 1, 2 e 3 elementos. A soma é 2³. Com três elementos na cabeça, 8 aparece antes de montar a lista.",
  },
  "mat-ca-n2q3": {
    intuicao:
      "2³ × 2⁻¹ é a mesma base repetida. 2³ são três fatores 2. 2⁻¹ é o inverso de 2, isto é, “desfazer” um fator 2. Sobram dois fatores: 2². Não é preciso calcular 8 e 1/2 em separado para ver isso, embora essa conta também sirva de conferência.",
    motivacao:
      "A propriedade aᵐ × aⁿ = aᵐ⁺ⁿ existe porque multiplicar potências da mesma base é juntar os fatores, e juntar fatores é somar expoentes. Bases iguais são a condição. Se as bases fossem diferentes, somar expoentes não teria o que juntar. Aqui a base é 2 nos dois fatores, então a propriedade se aplica.",
    passos: [
      "Mesma base na multiplicação: somam-se os expoentes. 2³ × 2⁻¹ = 2³⁺⁽⁻¹⁾.",
      "Soma de inteiros com sinais diferentes: 3 + (−1) = 2.",
      "Definição de potência de expoente natural: 2² = 2 × 2 = 4.",
      "Conferência pelo inverso: 2⁻¹ = 1/2 e 8 × 1/2 = 4. 2⁻³ seria o inverso de 2³, que é outra expressão.",
    ],
    atalho:
      "Cancele um 2 de 2 × 2 × 2 com o denominador de 1/2. Sobram 2 × 2 = 4. Quem subtrai os expoentes e ainda inverte chega em 1/4 = 2⁻², que seria uma divisão, não este produto.",
  },
  "mat-ca-n2q4": {
    intuicao:
      "√(49/16) pergunta o número positivo que, elevado ao quadrado, devolve 49/16. 7/4 é um candidato natural porque 7² = 49 e 4² = 16. A raiz de um quociente, com tudo positivo, se separa na raiz de cima e na raiz de baixo. Não se extrai a raiz só do numerador.",
    motivacao:
      "A propriedade √(a/b) = √a / √b, para a ≥ 0 e b > 0, vale porque (√a / √b)² = a/b. Ela transforma uma raiz de fração em duas raízes de quadrados perfeitos, que são inteiros. Sem a propriedade, ainda daria para testar o quadrado de cada alternativa, mas a separação é o caminho direto.",
    passos: [
      "Condição: 49 ≥ 0 e 16 > 0, então a raiz real principal está definida e é não negativa.",
      "Raiz de quociente: √(49/16) = √49 / √16.",
      "Quadrados perfeitos: √49 = 7 e √16 = 4, as raízes não negativas.",
      "O quociente é 7/4. Conferência pela potência: (7/4)² = 49/16.",
      "4/7 é o inverso. √49 / 16 = 7/16 esquece a raiz do denominador.",
    ],
    atalho:
      "Eleve as alternativas ao quadrado até bater em 49/16. (7/4)² fecha na primeira tentativa. (4/7)² = 16/49, que é o inverso da fração pedida. A dimensão da resposta tem de ser um número puro, e 7/4 já é.",
  },
  "mat-ca-n2q5": {
    intuicao:
      "A expressão mistura uma soma com um produto, e o produto está escrito por último. O produto (3/4) × (−2/3) é um bloco só. Enquanto ele não virar um número, não há o que somar a −1/2. Visualmente, calcule a “caixinha” da multiplicação e só então caminhe para a esquerda.",
    motivacao:
      "A precedência manda multiplicar antes de somar, pelo mesmo motivo de −4 + 7 × 2. Aqui o produto é de frações com sinal. Fazer −1/2 + 3/4 primeiro criaria um parêntese que o enunciado não tem. A motivação de respeitar a ordem é não resolver uma expressão diferente.",
    passos: [
      "Precedência: calcule (3/4) × (−2/3) antes da soma.",
      "Produto de frações: (3 × −2)/(4 × 3) = −6/12. O sinal negativo vem do único fator negativo.",
      "Simplificação por 6: −6/12 = −1/2.",
      "A expressão fica −1/2 + (−1/2). Soma de mesmo sinal: somam-se os módulos e conserva-se o sinal. −1.",
    ],
    atalho:
      "Cancele o 3 de 3/4 com o 3 do denominador de −2/3. Sobra (1/4) × (−2) = −1/2. A expressão é −1/2 − 1/2. Duas metades negativas formam −1. 0 seria o caso de sinais opostos se cancelando, e aqui os dois termos têm o mesmo sinal.",
  },
  "mat-ca-n3q1": {
    intuicao:
      "A e B não vêm listados. Cada um é um filtro sobre os inteiros. A deixa passar quem está no intervalo −2 ≤ x < 3. B deixa passar quem, ao quadrado, ainda não chegou em 4. A interseção é quem passa nos dois filtros. O desenho na reta mostra um intervalo fechado à esquerda e aberto à direita, furado pelos inteiros cujo quadrado é grande.",
    motivacao:
      "Listar os inteiros de cada conjunto é melhor do que manipular desigualdades ao mesmo tempo. A tem um extremo inclusivo e outro estrito, então o 3 sai e o −2 fica. B tem desigualdade estrita no quadrado, então x² = 4 não entra. Resolver cada filtro sozinho e só depois cruzar evita perder o sinal de <.",
    passos: [
      "A = {x ∈ ℤ | −2 ≤ x < 3} = {−2, −1, 0, 1, 2}. O extremo −2 entra por causa do ≤. O 3 não entra por causa do <.",
      "B pede x² < 4. (±2)² = 4, que não é menor que 4. (±3)² = 9 também não. Os inteiros que sobram são −1, 0 e 1.",
      "Interseção: elementos que estão nas duas listas. −2 e 2 estão só em A. {−1, 0, 1} está nas duas.",
      "A ∩ B = {−1, 0, 1}.",
    ],
    atalho:
      "B é o conjunto menor: só três inteiros. Desses, −1, 0 e 1 cabem em −2 ≤ x < 3. Não é preciso reabrir A. O erro clássico é incluir ±2 em B, trocando x² < 4 por x² ≤ 4.",
  },
  "mat-ca-n3q2": {
    intuicao:
      "Subconjunto com exatamente dois elementos é um par, e a ordem de escrita não cria outro par. {a, b} e {b, a} são o mesmo conjunto. A pergunta não é “de quantas maneiras dá para enfileirar dois elementos”, que seria um arranjo. É “quantos pares diferentes cabem em quatro letras”.",
    motivacao:
      "Combinação é a contagem certa porque o conjunto não guarda ordem. C(4, 2) divide o arranjo A(4, 2) pelas 2! ordens de cada par. Sem essa divisão, 12 conta cada subconjunto duas vezes. 16 = 2⁴ conta subconjuntos de todos os tamanhos, não só os de dois elementos.",
    passos: [
      "A ordem não importa: {a, b} = {b, a}. A contagem é uma combinação.",
      "C(n, k) = n! / (k! (n − k)!). Aqui C(4, 2) = 24 / (2 × 2) = 6. O 4! = 24, o 2! = 2 e o outro 2! também é 2.",
      "Pelo produto: 4 escolhas para o primeiro e 3 para o segundo dão 12 filas; divida por 2!, as ordens de cada par. 12 / 2 = 6.",
      "Lista: {a, b}, {a, c}, {a, d}, {b, c}, {b, d}, {c, d}.",
    ],
    atalho:
      "Fixe a primeira letra em ordem alfabética para não repetir par. a forma três pares, b forma mais dois que ainda não apareceram, c forma mais um. 3 + 2 + 1 = 6. Essa soma é a mesma C(4, 2).",
  },
  "mat-ca-n3q3": {
    intuicao:
      "√8 e √2 são comprimentos do mesmo tipo: √8 é o dobro de √2, porque 8 = 4 × 2 e a raiz do 4 sai inteira. Dentro do parêntese, 2√2 − √2 é uma subtração de termos semelhantes, como 2x − x. Sobra um único radical, e o quadrado dele é imediato. Expandir o quadrado da diferença também funciona, mas só depois de tratar o termo do meio com cuidado.",
    motivacao:
      "Simplificar o radical antes de elevar ao quadrado encolhe a conta. A fatoração √(a b) = √a √b, com a e b positivos, tira o quadrado perfeito de dentro da raiz. Sem isso, o quadrado da diferença produz 2√8√2, e o erro comum é trocar esse produto por 2√10, somando os radicandos em vez de multiplicá-los.",
    passos: [
      "Fatoração do radicando: 8 = 4 × 2 e 4 é quadrado perfeito. √8 = √4 × √2 = 2√2.",
      "Termos semelhantes: 2√2 − √2 = (2 − 1)√2 = √2. A distributiva ao contrário é a fatoração do radical comum.",
      "Potência: (√2)² = 2, porque a raiz quadrada principal e o quadrado se desfazem em um número não negativo.",
      "Caminho longo, para conferir: (√8 − √2)² = 8 − 2√8√2 + 2. E √8√2 = √16 = 4, então o meio é 8. 8 − 8 + 2 = 2.",
    ],
    atalho:
      "√8 ≈ 2,828 e √2 ≈ 1,414. A diferença é cerca de 1,414, e o quadrado é cerca de 2. 6 e 10 são grandes demais para o quadrado de um número perto de 1,4. 4√2 ≈ 5,6 também não. A estimativa deixa 2 sozinho.",
  },
  "mat-ca-n3q4": {
    intuicao:
      "0,999… com infinitos noves não é “quase 1” no sentido de faltar um pouquinho. Cada nova casa de nove come um pedaço da distância até 1, e não sobra um número real no meio. 0,99 com dois noves ainda é 99/100, menor que 1. Os infinitos noves fecham essa folga. A pergunta é se esse objeto é 1, um irracional, ou apenas a escrita de dois noves.",
    motivacao:
      "A álgebra do período infinito usa uma equação, porque multiplicar por 10 desloca a vírgula sem acabar com os noves. Esse deslocamento é legítimo para uma dízima periódica, que é uma série geométrica convergente. Subtrair as duas escritas cancela a cauda infinita. Chamar o número de irracional estaria errado: toda dízima periódica é racional.",
    passos: [
      "Seja x = 0,999…, uma dízima de período 9.",
      "Multiplicação por 10 desloca a vírgula uma casa: 10x = 9,999….",
      "Subtração: 10x − x = 9,999… − 0,999…. A cauda infinita se cancela e sobra 9. Então 9x = 9.",
      "Divisão por 9, que é diferente de zero: x = 1.",
      "0,99 finito é 99/100 ≠ 1. O infinito dos noves é o que fecha a igualdade.",
    ],
    atalho:
      "1/3 = 0,333… e 3 × (1/3) = 1. Mas 3 × 0,333… = 0,999…. As duas escritas nomeiam o mesmo real. Também dá para somar a série 9/10 + 9/100 + 9/1000 + …, uma geométrica de razão 1/10, cuja soma é (9/10) / (1 − 1/10) = 1.",
  },
  "mat-ca-n3q5": {
    intuicao:
      "O lado esquerdo é uma fração. O lado direito é a reta x + 1. Elas coincidem em quase todo desenho, com um furo exatamente onde o denominador zera. Em x = 1 a fração não existe, então não há igualdade para afirmar. Fora desse ponto, o numerador é o denominador vezes (x + 1), e o fator comum sai.",
    motivacao:
      "Fatorar o numerador como diferença de quadrados mostra o fator que pode ser cancelado. O cancelamento é uma divisão, e divisão por zero não está definida. Por isso a condição x ≠ 1 tem de ser escrita junto com a forma simplificada. Dizer “para todo real” apaga o único ponto em que a expressão original quebra.",
    passos: [
      "Diferença de quadrados: x² − 1 = (x − 1)(x + 1).",
      "A fração fica (x − 1)(x + 1) / (x − 1), definida somente quando o denominador é diferente de zero, isto é, x ≠ 1.",
      "Para x ≠ 1, cancele o fator comum, que é uma divisão legítima por um número não nulo. Sobra x + 1.",
      "Em x = 1 o denominador original é 0. A expressão da esquerda não existe, e a igualdade não vale nesse ponto.",
      "O domínio da igualdade é ℝ menos {1}.",
    ],
    atalho:
      "Teste x = 0: (0 − 1)/(0 − 1) = 1 e 0 + 1 = 1. Teste x = 2: (4 − 1)/(2 − 1) = 3 e 2 + 1 = 3. Teste x = 1: o lado esquerdo pede divisão por zero. Dois pontos confirmam a reta, e o ponto proibido confirma o furo.",
  },
};
