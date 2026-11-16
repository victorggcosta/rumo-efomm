import type { AnaliseQuestao } from "../../lessons.ts";

export const ANALISES: Record<string, AnaliseQuestao> = {
  "mat-ms-n1q1": {
    intuicao:
      "Uma matriz é uma tabela com endereço de linha e de coluna. Esta tem duas fileiras horizontais e três casas em cada fileira. A ordem é o tamanho dessa tabela, escrito primeiro o número de linhas e depois o de colunas. Não é a soma das casas, nem a tabela virada de lado. A pergunta pede só essa etiqueta de formato.",
    motivacao:
      "A convenção linhas por colunas é a mesma dos índices aᵢⱼ, em que i é a linha e j é a coluna. Escrever 3 × 2 descreve outra tabela, com três linhas e duas colunas, que não é a do enunciado. O 6 conta as casas, que é o produto das dimensões, não a ordem. A banca planta a leitura invertida logo na primeira alternativa.",
    passos: [
      "Convenção de ordem: o primeiro número é a quantidade de linhas e o segundo é a quantidade de colunas.",
      "Leitura da tabela dada: há 2 linhas horizontais e 3 colunas em cada linha.",
      "Ordem, na convenção linhas por colunas: a tabela é 2 × 3, e não o total de casas.",
      "3 × 2 troca linha com coluna. 6 = 2 × 3 é o número de elementos, não a ordem.",
    ],
    atalho:
      "Duas fileiras, três números em cada uma: a etiqueta é 2 × 3. Se a tabela fosse transposta, as fileiras virariam colunas e a ordem passaria a 3 × 2. O enunciado não transpôs a tabela.",
  },
  "mat-ms-n1q2": {
    intuicao:
      "Somar matrizes é sobrepor duas tabelas do mesmo formato e juntar o que está na mesma casa. As duas são 2 × 2, então cada casa tem par. O 1 encontra o 4, o 2 encontra o 0, o 3 encontra o 1 e o 0 encontra o 5. A matriz soma é essa nova tabela de quatro somas. Não se multiplica linha por coluna neste item.",
    motivacao:
      "A soma só existe quando as ordens coincidem, porque casa sem par não tem com quem somar. Aqui as duas ordens são iguais, então a objeção não existe fica descartada. A conta é entrada a entrada, sem misturar a casa de cima com a de baixo. A alternativa que mostra [5 2; 3 5] esquece de somar o 1 que está debaixo do 4.",
    passos: [
      "Condição da soma: as duas matrizes são 2 × 2, então a soma está definida e também é 2 × 2.",
      "Soma casa a casa na primeira linha: a entrada 1 + 4 vale 5, e a entrada 2 + 0 vale 2.",
      "Soma casa a casa na segunda linha: a entrada 3 + 1 vale 4, e a entrada 0 + 5 vale 5.",
      "A soma é [5 2; 4 5]. A matriz [5 2; 3 5] deixa o 3 sem o acréscimo de 1.",
    ],
    atalho:
      "Confira a diagonal principal, 1 + 4 e 0 + 5, que dá 5 e 5, e a outra diagonal, 2 + 0 e 3 + 1, que dá 2 e 4. Lidas na ordem das casas, as quatro somas são 5, 2, 4 e 5. A ordem das casas é linha, depois coluna.",
  },
  "mat-ms-n1q3": {
    intuicao:
      "Multiplicar a matriz pelo número 3 é ampliar cada casa na mesma escala, como se a tabela inteira fosse esticada por 3. O 1 vira 3, o −1 vira −3, o 0 continua 0 e o 2 vira 6. Nenhuma casa é escolhida para ficar de fora, e casas de linhas diferentes não se misturam. O resultado ainda é 2 × 2.",
    motivacao:
      "O produto por escalar age em toda entrada, pela definição (kA)ᵢⱼ = k aᵢⱼ. Multiplicar só a primeira casa, e deixar o resto igual, produz [3 −1; 0 2], que está na lista para esse descuido. Somar 3 a cada casa seria outra operação e daria [4 2; 3 5]. O zero multiplicado por 3 continua zero: não vira 3.",
    passos: [
      "Produto por escalar: multiplica-se cada entrada pelo número 3, e a ordem 2 × 2 se conserva.",
      "Produto por escalar na primeira linha: 3 × 1 = 3 e 3 × (−1) = −3, com o sinal conservado.",
      "Produto por escalar na segunda linha: 3 × 0 = 0 e 3 × 2 = 6, e o zero permanece zero.",
      "O produto é [3 −3; 0 6]. [3 −1; 0 2] escala só uma casa. [4 2; 3 5] soma 3 em vez de multiplicar.",
    ],
    atalho:
      "O sinal negativo sobrevive na casa −1, porque 3 é positivo: a casa fica −3, não 3. A casa 0 é o teste rápido: se alguma alternativa põe 3 no lugar do zero, ela somou ou multiplicou a casa errada.",
  },
  "mat-ms-n1q4": {
    intuicao:
      "O símbolo a₂₁ é um endereço, não uma conta. O primeiro índice desce até a linha 2 e o segundo anda até a coluna 1. Na tabela [1 2 3; 4 5 6], a segunda linha é 4, 5, 6, e a primeira casa dessa linha é 4. A pergunta pede essa casa. Trocar a ordem dos índices vai parar no 2, que mora em outro endereço.",
    motivacao:
      "A convenção é linha e depois coluna, a mesma da ordem m × n. a₁₂ seria linha 1 e coluna 2, o número 2, e a banca conta com essa troca. a₂₂ seria 5 e a₂₃ seria 6, leituras que andam demais na segunda linha. Não há fórmula de produto aqui: o trabalho é ler o par de índices na ordem certa.",
    passos: [
      "Leitura do índice: em aᵢⱼ, i é a linha e j é a coluna. Para a₂₁, i = 2 e j = 1.",
      "Segunda linha da matriz [1 2 3; 4 5 6]: as três entradas, da esquerda para a direita, são 4, 5 e 6.",
      "Primeira coluna dessa segunda linha: o elemento pedido a₂₁ é o número 4.",
      "a₁₂ = 2 troca a ordem dos índices. a₂₂ = 5 anda uma coluna além da pedida.",
    ],
    atalho:
      "A primeira coluna da matriz, lida de cima para baixo, é 1 e depois 4. O segundo número dessa coluna é a₂₁. Quem procura o 2 está na primeira linha e na segunda coluna, no endereço a₁₂.",
  },
  "mat-ms-n1q5": {
    intuicao:
      "A identidade 2 × 2 é a tabela que deixa cada vetor no lugar: 1 na diagonal e 0 fora dela, isto é, [1 0; 0 1]. O determinante mede a área do quadrado unitário depois da transformação. A identidade não mexe nesse quadrado, então a área continua 1. A pergunta pede esse número, não o traço e não a ordem.",
    motivacao:
      "Para uma matriz [a b; c d], o determinante é ad − bc. Na identidade, a e d são 1 e b e c são 0, então a conta é curta e não pede inversa nem produto. O resultado 0 significaria uma transformação que amassa o plano, e a identidade não amassa. 2 seria a soma da diagonal, o traço, que é outra função.",
    passos: [
      "Identidade de ordem 2 × 2: I = [1 0; 0 1], com uns na diagonal e zeros fora dela.",
      "Determinante 2 × 2: det = ad − bc, com a = 1, b = 0, c = 0 e d = 1 na identidade.",
      "Conta explícita do determinante da identidade 2 × 2: 1 × 1 − 0 × 0 = 1 − 0 = 1.",
      "0 seria uma matriz singular. 2 = 1 + 1 é o traço da diagonal, que não é o determinante.",
    ],
    atalho:
      "Qualquer identidade tem determinante 1, em qualquer ordem, porque a transformação não altera volume. No caso 2 × 2 a conta ad − bc reduz a 1 − 0. O sinal não vira, pois não há troca de linhas.",
  },
  "mat-ms-n2q1": {
    intuicao:
      "A matriz [3 1; 2 4] manda o quadrado unitário para o paralelogramo gerado pelas colunas (3, 2) e (1, 4). O determinante é a área orientada desse paralelogramo. A receita de 2 × 2 multiplica a diagonal principal e tira o produto da outra diagonal. A pergunta pede essa área com sinal, que aqui fica positiva.",
    motivacao:
      "A fórmula ad − bc é a expansão do determinante, não a soma de tudo. Parar em 3 × 4 = 12 esquece de descontar 1 × 2. Somar os dois produtos, 12 + 2 = 14, troca o sinal do segundo termo e descreve outra expressão. O sinal de ad − bc importa: bc − ad daria −10, que está na lista para a subtração invertida.",
    passos: [
      "Determinante 2 × 2: para [a b; c d], det = ad − bc. Aqui a = 3, b = 1, c = 2 e d = 4.",
      "Diagonal principal do determinante 2 × 2: o produto a × d vale 3 × 4 = 12.",
      "Produto da outra diagonal do determinante: b × c = 1 × 2 = 2, o termo que se subtrai.",
      "Subtração: 12 − 2 = 10. O valor 14 soma em vez de subtrair, e −10 inverte a ordem.",
    ],
    atalho:
      "12 é o retângulo 3 por 4. O desconto 2 é o produto dos cantos fora da diagonal. 12 − 2 = 10. Se as colunas fossem paralelas o desconto comeria o 12 inteiro e o determinante seria 0; aqui sobra área 10.",
  },
  "mat-ms-n2q2": {
    intuicao:
      "O produto de duas matrizes 2 × 2 compõe duas transformações: primeiro a da direita, depois a da esquerda. Cada casa do resultado é uma linha da primeira matriz encontrada com uma coluna da segunda, somando os produtos termo a termo. Não é a soma das matrizes, nem o produto casa a casa. A tabela final ainda é 2 × 2.",
    motivacao:
      "A definição do produto pede esse casamento linha-coluna porque é o que faz a composição de sistemas lineares funcionar. Multiplicar só as diagonais, ou copiar a segunda matriz, deixa a primeira transformação de fora. A ordem importa, mas aqui o enunciado já fixou qual matriz vem na frente. Cada uma das quatro casas precisa da sua própria soma de dois produtos.",
    passos: [
      "Produto de matrizes: a casa da linha i e coluna j é o produto escalar da linha i da primeira pela coluna j da segunda.",
      "Primeira linha com as duas colunas: 1 × 3 + 2 × 1 = 5 e 1 × 0 + 2 × 4 = 8.",
      "Segunda linha com as duas colunas: 0 × 3 + 1 × 1 = 1 e 0 × 0 + 1 × 4 = 4.",
      "O produto é [5 8; 1 4]. Copiar [3 0; 1 4] esquece a matriz da esquerda.",
    ],
    atalho:
      "A segunda linha da primeira matriz é [0 1], que apenas copia a segunda linha da matriz da direita: [1 4]. A primeira linha [1 2] mistura as duas linhas da direita com pesos 1 e 2, e dá [5 8]. Juntas: [5 8; 1 4].",
  },
  "mat-ms-n2q3": {
    intuicao:
      "As duas equações são duas retas no plano, x + y = 7 e x − y = 3. A solução é o cruzamento delas, um ponto (x, y). Os coeficientes de y são +1 e −1, então somar as retas apaga y e deixa uma equação só em x. Não é preciso montar a inversa completa da matriz para um sistema tão bem alinhado.",
    motivacao:
      "A soma é a eliminação, e ela cabe porque os coeficientes de y já são opostos: nenhum multiplicador extra é necessário. Cramer também resolveria, com determinante 1 × (−1) − 1 × 1 = −2, mas a eliminação é mais curta e chega no mesmo ponto. A banca oferece o par trocado, x = 2 e y = 5, para quem acha os números e inverte os papéis.",
    passos: [
      "Eliminação por soma: (x + y) + (x − y) = 7 + 3. Os termos y e −y se cancelam.",
      "Equação reduzida em x: 2x = 10, logo x = 5, depois de dividir os dois lados por 2.",
      "Volta à primeira equação do sistema: 5 + y = 7, então a segunda incógnita é y = 2.",
      "Conferência na segunda: 5 − 2 = 3. O par é x = 5 e y = 2. O par x = 2 e y = 5 troca as incógnitas.",
    ],
    atalho:
      "Some e divida por 2: x é a média de 7 e 3, isto é, (7 + 3) / 2 = 5. Subtraia e divida por 2: y = (7 − 3) / 2 = 2. As duas médias leem o ponto (5, 2) sem montar o determinante do sistema.",
  },
  "mat-ms-n2q4": {
    intuicao:
      "As colunas da matriz [2 4; 1 2] apontam na mesma direção: a segunda é o dobro da primeira, (4, 2) = 2 × (2, 1). A transformação amassa o plano numa reta só, e o paralelogramo das colunas não tem área. Determinante zero é essa área nula. Sem área, não há como desfazer a transformação, e a inversa não existe.",
    motivacao:
      "A inversa de uma matriz 2 × 2 existe exatamente quando o determinante é diferente de zero. Calcular ad − bc decide os dois fatos de uma vez: o valor e a existência. A segunda linha é a metade da primeira, o que já anuncia a dependência antes da conta. A alternativa que diz determinante 0 e possui inversa separa duas coisas que andam juntas. Identidade ela não é, porque a diagonal não é 1 e 1 com zeros fora.",
    passos: [
      "Determinante 2 × 2: det = 2 × 2 − 4 × 1 = 4 − 4 = 0, área nula do paralelogramo.",
      "Critério da inversa: existe A⁻¹ se, e somente se, det A ≠ 0. Aqui o determinante é zero, então a inversa não existe.",
      "Dependência das linhas: a segunda linha [1 2] é a primeira [2 4] dividida por 2. As duas equações diriam a mesma coisa.",
      "A matriz não é a identidade [1 0; 0 1]. O produto com outras matrizes de ordem compatível continua definido; o que falta é a inversa.",
    ],
    atalho:
      "Basta ver a proporção 2 / 1 = 4 / 2 nas duas linhas. As linhas são proporcionais, o determinante é zero e a inversa morre junto. Não é preciso procurar um produto que dê a identidade: ele não existe.",
  },
  "mat-ms-n2q5": {
    intuicao:
      "De novo duas retas, 3x − y = 5 e x + y = 3, e a solução é o ponto em que elas se cruzam. O y aparece com sinais opostos, −1 e +1, então a soma apaga y e deixa x sozinho. O desenho é o mesmo da eliminação anterior, com coeficientes diferentes. A pergunta pede o par completo, não só um dos números.",
    motivacao:
      "Somar é legítimo porque combina equações verdadeiras e cancela a incógnita de coeficientes opostos. Multiplicar a segunda equação por 3 e comparar também funcionaria, mas gasta uma conta a mais. A banca espalha pares vizinhos, como x = 1 e y = 2, que troca os valores, e x = 4 e y = −1, que pode sair de um sinal trocado na volta. A conferência nas duas equações separa o par certo.",
    passos: [
      "Eliminação por soma: (3x − y) + (x + y) = 5 + 3. Os termos −y e y se cancelam.",
      "Equação reduzida em x: 4x = 8, logo x = 2, dividindo os dois lados por 4.",
      "Volta à segunda equação do sistema: 2 + y = 3, então a segunda incógnita é y = 1.",
      "Conferência na primeira equação: 3 × 2 − 1 = 5. O par solução é x = 2 e y = 1.",
    ],
    atalho:
      "Some as duas equações e divida por 4: x = 8 / 4 = 2. Então a outra incógnita cumpre y = 3 − x = 1. O par (2, 1) também satisfaz 3x − y = 6 − 1 = 5. Um par que só fecha uma reta não é solução do sistema.",
  },
  "mat-ms-n3q1": {
    intuicao:
      "A inversa é a matriz que desfaz a transformação de [3 1; 5 2] e devolve a identidade. Antes de procurá-la, a área do paralelogramo das colunas precisa ser diferente de zero; senão não há o que desfazer. Aqui as colunas (3, 5) e (1, 2) fecham área 1, pequena mas não nula. Com determinante 1, a inversa só rearruma as entradas, sem dividir por outro número.",
    motivacao:
      "A fórmula da inversa 2 × 2 é (1 / det) vezes [d −b; −c a]: troca-se a diagonal principal e trocam-se os sinais da outra. Ela sai da condição A A⁻¹ = I, não de um chute de sinais. Esquecer os sinais produz [2 1; 5 3], que está na lista. Como o determinante deu 1, o fator 1/det não altera as casas, e o produto pela original tem de voltar [1 0; 0 1].",
    passos: [
      "Determinante 2 × 2: det = 3 × 2 − 1 × 5 = 6 − 5 = 1. Como det ≠ 0, a inversa existe.",
      "Fórmula, com det = 1: a inversa de [a b; c d] é [d −b; −c a] = [2 −1; −5 3].",
      "Conferência do produto: [3 1; 5 2] [2 −1; −5 3] tem primeira linha 3 × 2 + 1 × (−5) = 1 e 3 × (−1) + 1 × 3 = 0.",
      "Segunda linha do produto: 5 × 2 + 2 × (−5) = 0 e 5 × (−1) + 2 × 3 = 1. O produto é [1 0; 0 1], a identidade.",
    ],
    atalho:
      "Det = 1 avisa que não há divisão para fazer: as casas da inversa são 2, −1, −5 e 3, isto é, a diagonal trocada e a outra com sinal oposto. Se o produto não der a identidade, o sinal de alguma casa foi esquecido.",
  },
  "mat-ms-n3q2": {
    intuicao:
      "O sistema 2x + y = 8 e x + 3y = 9 é a matriz dos coeficientes [2 1; 1 3] aplicada ao par (x, y). Cramer troca, na coluna do x, os coeficientes pelos termos 8 e 9, e compara a área dessa nova matriz com a área da matriz original. A razão das áreas é o x. A pergunta pede só x, embora y apareça na conferência.",
    motivacao:
      "O determinante entra porque as duas equações se misturam: o y não tem coeficientes opostos, e somar direto não o apaga. Cramer organiza essa mistura sem isolamentos sucessivos. Dá para eliminar também, multiplicando a segunda equação por 2, mas a razão de determinantes é o caminho que a matriz sugere. Esquecer de dividir por 5 deixa o 15, que não está entre as alternativas, e marcar o próprio 5 confunde determinante com incógnita.",
    passos: [
      "Determinante do sistema: D = 2 × 3 − 1 × 1 = 6 − 1 = 5. Como D ≠ 0, há uma única solução.",
      "Coluna do x pelos termos independentes: Dₓ = det [8 1; 9 3] = 8 × 3 − 1 × 9 = 24 − 9 = 15.",
      "Regra de Cramer para a incógnita x: x = Dₓ / D = 15 / 5 = 3, a razão das duas áreas.",
      "Conferência: da primeira equação, y = 8 − 2 × 3 = 2. Na segunda, 3 + 3 × 2 = 9. O valor pedido é x = 3.",
    ],
    atalho:
      "Multiplique a segunda equação por 2: 2x + 6y = 18. Tire a primeira: (2x + 6y) − (2x + y) = 18 − 8, logo 5y = 10 e y = 2. Então 2x + 2 = 8, x = 3. A eliminação confirma a razão 15/5.",
  },
  "mat-ms-n3q3": {
    intuicao:
      "Cada equação é uma reta. A segunda, 2x + 4y = 7, tem coeficientes que são o dobro dos coeficientes da primeira, x + 2y = 4. As direções são as mesmas, então as retas são paralelas. Falta ver se são a mesma reta ou duas retas distintas. O termo 7 não é o dobro de 4, então elas não coincidem e não se cruzam.",
    motivacao:
      "Determinante zero só diz que não há uma única solução: pode haver infinitas, se as equações forem a mesma, ou nenhuma, se forem contraditórias. A banca separa essas duas possibilidades em alternativas diferentes. A proporção dos coeficientes decide o paralelismo, e a proporção dos termos independentes decide se há coincidência. Aqui a segunda quebra, porque 2 × 4 = 8, e o enunciado escreveu 7.",
    passos: [
      "Determinante 2 × 2 dos coeficientes: 1 × 4 − 2 × 2 = 4 − 4 = 0. Não há solução única.",
      "Proporção das linhas: a segunda linha de coeficientes é o dobro da primeira, pois 2 × [1 2] = [2 4].",
      "O termo independente não acompanha: 2 × 4 = 8, e a segunda equação exige 7, não 8.",
      "Retas paralelas e distintas não se encontram. O sistema não tem solução. O ponto x = 4, y = 0 cumpre a primeira e falha na segunda, pois 8 ≠ 7.",
    ],
    atalho:
      "Se a segunda equação fosse 2x + 4y = 8, seria a mesma reta duas vezes e haveria infinitas soluções. O 7 no lugar do 8 abre um vão entre as paralelas. Determinante zero com constantes fora da proporção é sistema impossível.",
  },
  "mat-ms-n3q4": {
    intuicao:
      "A e B são dois cisalhamentos simples: A empurra a primeira coordenada usando a segunda, e B faz o inverso. O produto AB aplica B primeiro e A depois, e o resultado não é a soma das duas tabelas. Cada casa nasce do encontro de uma linha de A com uma coluna de B. A pergunta pede AB, com A na frente, não BA.",
    motivacao:
      "O produto de matrizes não é comutativo: AB e BA podem diferir, e neste par eles diferem. BA dá [1 1; 1 2], que está entre as alternativas de propósito. Calcular as quatro casas de AB, em vez de reconhecer a letra B, é o que separa as duas. A identidade também aparece na lista, para quem imagina que essas duas matrizes se desfazem.",
    passos: [
      "Produto de matrizes AB: linha de A com coluna de B. Primeira linha de A é [1 1] e as colunas de B são [1 1] e [0 1].",
      "Primeira linha do produto de matrizes AB: 1 × 1 + 1 × 1 = 2 e 1 × 0 + 1 × 1 = 1.",
      "Segunda linha de A é [0 1]: 0 × 1 + 1 × 1 = 1 e 0 × 0 + 1 × 1 = 1. Então AB = [2 1; 1 1].",
      "BA = [1 1; 1 2], porque a ordem troca os pesos. Não é o produto pedido.",
    ],
    atalho:
      "A segunda linha de A é [0 1], então a segunda linha de AB copia a segunda linha de B, que é [1 1]. A primeira linha de AB soma as duas linhas de B: [1 0] + [1 1] = [2 1]. Resultado: [2 1; 1 1]. A matriz [1 1; 1 2] é o produto escrito ao contrário.",
  },
  "mat-ms-n3q5": {
    intuicao:
      "As caixas entram em duas contagens de bordo. Duas vezes as caixas X mais as Y dá 11, e as caixas X mais duas vezes as Y dá 10. Isso é o sistema 2x + y = 11 e x + 2y = 10. A matriz dos coeficientes mistura as duas contagens, e o número de caixas X é a primeira incógnita. Não se pede o total de caixas, que seria x + y.",
    motivacao:
      "Os coeficientes de y são 1 e 2, não opostos, então somar as equações não isola x. Cramer compara determinantes e isola x numa divisão só. Dá igualmente para multiplicar a primeira equação por 2 e subtrair a segunda. A banca oferece vizinhos de 4, como 3 e 5, que saem de um sinal trocado ou de marcar y no lugar de x.",
    passos: [
      "Sistema: 2x + y = 11 e x + 2y = 10. Determinante D = 2 × 2 − 1 × 1 = 4 − 1 = 3.",
      "Coluna do x trocada pelos termos independentes: Dₓ = det [11 1; 10 2] = 11 × 2 − 1 × 10 = 22 − 10 = 12.",
      "Regra de Cramer para o número de caixas do tipo X: x = Dₓ / D = 12 / 3 = 4.",
      "Conferência: y = 11 − 2 × 4 = 3, e x + 2y = 4 + 6 = 10. Há 4 caixas do tipo X.",
    ],
    atalho:
      "Multiplique a primeira equação por 2: 4x + 2y = 22. Tire a segunda: 3x = 12, logo x = 4. O 3 do determinante reaparece como coeficiente dessa eliminação, e 12 / 3 é o mesmo quociente de Cramer.",
  },
};
