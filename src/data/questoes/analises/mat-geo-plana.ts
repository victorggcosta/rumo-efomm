import type { AnaliseQuestao } from "../../lessons.ts";

export const ANALISES: Record<string, AnaliseQuestao> = {
  "mat-gp-n1q1": {
    intuicao:
      "O retângulo tem 6 m de base e 4 m de altura, e os lados se encontram em ângulo reto. A área é o tanto de piso que ele cobre. Cada uma das quatro faixas de 1 m de altura tem 6 m², ou cada uma das seis colunas de 1 m de largura tem 4 m². A cerca em volta é outra pergunta: seria a soma dos lados, duas vezes 6 mais 4, e daria um comprimento, não um piso.",
    motivacao:
      "A área do retângulo é base vezes altura porque ele é o produto dos dois lados perpendiculares. Somar os lados responde o perímetro. A alternativa 20 m² usa o número 2 × (6 + 4) = 20 e cola a unidade de área em cima de um comprimento. A alternativa 12 m² toma a metade, como se o retângulo fosse um triângulo. A alternativa 48 m² dobra um dos lados, e a unidade m² denuncia a multiplicação.",
    passos: [
      "Área do retângulo: base vezes altura, A = b h, com os lados perpendiculares.",
      "Substituição na área do retângulo: a base é b = 6 m e a altura é h = 4 m.",
      "Produto da base pela altura: 6 × 4 = 24. A unidade m × m é m², então a área é 24 m².",
      "A área é 24 m². 20 m² usa o perímetro 2 × (6 + 4) = 20 com a unidade de área no lugar da de comprimento.",
    ],
    atalho:
      "Quatro fileiras de 6 m² dão 24 m². Se a conta deu 20, ela somou os lados e calculou a cerca, não o piso. Perímetro sai em metros. Área sai em metros quadrados, e aqui o produto é 24.",
  },
  "mat-gp-n1q2": {
    intuicao:
      "O triângulo tem base 10 e altura 4, a perpendicular baixada do vértice oposto até a reta da base. Ele ocupa metade do retângulo que teria essa mesma base e essa mesma altura. Esse retângulo teria área 40. A diagonal, ou a altura interna, reparte o retângulo em duas regiões de mesma área quando a altura do triângulo é o lado do retângulo. O triângulo fica com uma dessas metades.",
    motivacao:
      "A fórmula (base × altura) / 2 é essa metade do retângulo. A alternativa 40 esquece a divisão por 2 e marca a área do retângulo, não a do triângulo. A alternativa 14 soma base e altura, uma conta que não produz área. A altura tem de ser perpendicular à base. Usar um lado inclinado no lugar da altura aumentaria o produto e estragaria a medida do piso.",
    passos: [
      "Área do triângulo: metade do produto da base pela altura correspondente, A = b h / 2.",
      "O retângulo de mesma base e mesma altura teria área 10 × 4 = 40, o dobro do triângulo.",
      "Área do triângulo, que é a metade desse retângulo de base 10 e altura 4: 40 / 2 = 20.",
      "40 seria o retângulo, sem a divisão por 2. 14 seria a soma 10 + 4, que não é área.",
    ],
    atalho:
      "Metade de 10 × 4. Metade de 40 é 20. Se a alternativa é o dobro da sua conta, ela esqueceu que o triângulo é meio retângulo de mesma base e mesma altura. A soma 14 nem tem cara de produto.",
  },
  "mat-gp-n1q3": {
    intuicao:
      "O triângulo tem um ângulo reto. Os lados que formam esse ângulo, os catetos, medem 5 e 12. A hipotenusa é o lado de frente para o reto, o mais comprido, e fecha o triângulo. Ela não é a soma 5 + 12, porque o caminho em diagonal é mais curto do que descer um cateto e depois o outro. O desenho é o trio 5-12-13, em que o quadrado maior é a soma dos dois quadrados menores.",
    motivacao:
      "O teorema de Pitágoras vale no triângulo retângulo: o quadrado da hipotenusa é a soma dos quadrados dos catetos. A alternativa 17 soma os catetos e mede uma poligonal, não o lado que corta o ângulo reto. A alternativa 60 é o produto 5 × 12, ligado à área de um retângulo, não ao lado. A alternativa √17 tira a raiz da soma sem elevar ao quadrado. A conta pede os quadrados primeiro e a raiz só no fim.",
    passos: [
      "Teorema de Pitágoras, no triângulo retângulo: c² = a² + b², com c a hipotenusa.",
      "Quadrados dos catetos, para o teorema de Pitágoras: 5² = 25 e 12² = 144.",
      "Soma dos quadrados, teorema de Pitágoras: c² = 25 + 144 = 169, o quadrado da hipotenusa.",
      "Raiz quadrada: c = √169 = 13, porque 13² = 169 e o comprimento da hipotenusa é positivo.",
      "17 seria 5 + 12, a soma dos catetos. 60 seria o produto 5 × 12, sem a geometria do ângulo reto.",
    ],
    atalho:
      "O trio 5-12-13 é pitagórico: 25 + 144 = 169 = 13². Reconhecer o trio evita uma raiz longa. Se a alternativa é 17, ela somou os lados em vez de somar os quadrados. A hipotenusa tem de ser maior que cada cateto e menor que a soma deles, e 13 cabe nesse intervalo.",
  },
  "mat-gp-n1q4": {
    intuicao:
      "O triângulo é uma figura fechada de três lados. Os ângulos internos têm de completar uma meia-volta para fechar a figura, e essa meia-volta é 180°. Dois deles já usam 50° e 60°, isto é, 110° dessa meia-volta. O terceiro ocupa o que falta até 180°. Não é o suplemento de um só deles, nem a soma dos dois dados, nem um ângulo externo colado do lado de fora.",
    motivacao:
      "A soma dos ângulos internos de qualquer triângulo plano é 180°. Isolar o terceiro é subtrair os dois conhecidos dessa soma. A alternativa 110° é a soma dos dois dados, o que já foi gasto, não o que falta. A alternativa 90° seria um triângulo retângulo, e 50° + 60° não deixam 90°. A alternativa 250° passa de 180° e não cabe como ângulo interno, e a alternativa 10° é só a diferença 60 − 50.",
    passos: [
      "Teorema do triângulo: a soma dos ângulos internos é 180°, em qualquer triângulo plano.",
      "Soma dos ângulos dados: 50° + 60° = 110°, e esse valor já foi gasto dos 180°.",
      "O terceiro ângulo é o que falta para fechar a soma de 180°: 180° − 110° = 70°.",
      "Na forma direta: 180 − 50 − 60 = 70. 110° é a soma dos dados, não o ângulo que falta.",
    ],
    atalho:
      "50 e 60 já fazem 110. De 180 até 110 faltam 70. Se a conta passou de 180° somando os três, ela não é um ângulo interno de triângulo. Um reto pediria que os outros dois somassem 90°, e 50 + 60 não somam 90.",
  },
  "mat-gp-n1q5": {
    intuicao:
      "O quadrado tem quatro lados iguais a 6 e quatro ângulos retos. A diagonal liga dois vértices opostos e corta o quadrado em dois triângulos retângulos. Em cada um, os catetos são os lados, os dois de medida 6, e a hipotenusa é a diagonal. Ela é maior que o lado, e o fator do isósceles retângulo é √2. √3 seria a altura de um equilátero, outro polígono.",
    motivacao:
      "Pitágoras no triângulo formado pela diagonal é o caminho, porque o ângulo do quadrado é reto. d² = 6² + 6² junta dois quadrados iguais, e a raiz de 72 separa o quadrado 36. A alternativa 6√3 usa o ângulo de 60° de um equilátero de lado 6. A alternativa 12 soma os catetos, o caminho que desce um lado e depois o outro, não a diagonal. A alternativa 36 é a área do quadrado, não o comprimento pedido.",
    passos: [
      "A diagonal do quadrado é a hipotenusa de um triângulo retângulo de catetos iguais ao lado.",
      "Teorema de Pitágoras na diagonal do quadrado: d² = 6² + 6² = 36 + 36 = 72.",
      "Raiz: d = √72. Fatoração 72 = 36 × 2 e √36 = 6, então a diagonal mede d = 6√2.",
      "6√3 seria a altura de um triângulo equilátero de lado 6. 12 seria 6 + 6, sem Pitágoras.",
    ],
    atalho:
      "A diagonal do quadrado vale lado × √2, numa linha: 6√2. Como √2 ≈ 1,41, a diagonal fica perto de 8,5, maior que 6 e menor que 12. 6√3 ≈ 10,4 é comprida demais para o isósceles reto deste quadrado.",
  },
  "mat-gp-n2q1": {
    intuicao:
      "O círculo de raio 5 tem todos os pontos da borda a 5 do centro. A área é o disco inteiro, não a cerca. A cerca, o comprimento da circunferência, usa o raio uma vez. A área usa o raio ao quadrado, porque o disco cresce nas duas direções do plano. Com raio 5, o quadrado do raio é 25, e π multiplica essa medida: o desenho é o disco cheio, não o risco da borda.",
    motivacao:
      "A área do círculo é π r², e o comprimento é 2πr. A alternativa 10π é exatamente 2 × 5 × π, a circunferência, e está na lista para quem troca as duas fórmulas. A alternativa 5π esquece de elevar o raio ao quadrado. A alternativa 50π dobra 25π sem motivo geométrico. A unidade, se o raio está em comprimento, só sai em área quando o raio entra ao quadrado.",
    passos: [
      "Área do círculo: A = π r². O raio entra ao quadrado, não uma vez só como no comprimento da volta.",
      "Quadrado do raio na fórmula da área: r = 5, então r² = 25, e esse 25 multiplica π.",
      "Produto da fórmula da área: A = π × 25 = 25π, que é a área do disco de raio 5.",
      "10π seria o comprimento 2πr = 2 × π × 5, a circunferência, não a área do disco.",
    ],
    atalho:
      "Raio 5, quadrado 25, vezes π. Se a alternativa é 10π, ela mediu a volta, não o disco. A volta cresce com r, e a área cresce com r². Dobrar o raio quadruplicaria a área, e essa é a razão do quadrado.",
  },
  "mat-gp-n2q2": {
    intuicao:
      "O trapézio tem duas bases paralelas, 10 e 6, e a altura 4 é a distância perpendicular entre elas. A faixa do meio tem largura média entre 10 e 6, isto é, 8. Um retângulo de base 8 e altura 4 cobre a mesma área: o que o trapézio perde de um lado, ganha do outro. A área é essa média das bases vezes a altura. A altura não é um dos lados inclinados.",
    motivacao:
      "(B + b) h / 2 é a média das bases vezes a altura. A alternativa 64 esquece a divisão por 2 e trata o trapézio como um retângulo da soma das bases. A alternativa 40 usa só a base maior, 10 × 4, e ignora que a base de cima é mais curta. A divisão por 2 é o que transforma a soma das bases na média. Sem ela, a figura contada é maior que o trapézio.",
    passos: [
      "Área do trapézio: a média das bases paralelas vezes a altura, A = (B + b) h / 2.",
      "Soma das bases paralelas: 10 + 6 = 16. A média que entra na área é 16/2 = 8.",
      "Produto da média das bases pela altura: 8 × 4 = 32, que é a área do trapézio.",
      "Na forma direta da fórmula do trapézio: (10 + 6) × 4 / 2 = 64/2 = 32, a área.",
      "Conferência da fórmula do trapézio: 64 esquece a divisão por 2. 40 usa só a base maior, 10 × 4, e deixa a base menor de fora.",
    ],
    atalho:
      "A média de 10 e 6 é 8. Vezes a altura 4 dá 32. O trapézio vira um retângulo de 8 por 4, porque a sobra de um lado compensa a falta do outro. Se a conta deu 64, usou a soma das bases no lugar da média.",
  },
  "mat-gp-n2q3": {
    intuicao:
      "O ângulo inscrito tem o vértice sobre a circunferência, e os lados são cordas. Ele enxerga um arco de 100°, o arco que fica entre os dois pontos em que as cordas encontram a circunferência. O ângulo central do mesmo arco teria o vértice no centro e mediria os 100° inteiros. Da borda, o mesmo arco é visto pela metade. A posição do vértice, desde que ele continue enxergando esse arco, não muda a abertura.",
    motivacao:
      "O teorema do ângulo inscrito diz que ele mede metade do arco correspondente. O central mede o arco inteiro. A alternativa 100° troca o inscrito pelo central. A alternativa 200° dobra o arco, como se a relação fosse invertida. A alternativa 25° seria a metade da metade, mas a relação é uma divisão por 2, uma vez só, porque o vértice saiu do centro e foi para a circunferência.",
    passos: [
      "Teorema do ângulo inscrito: a medida do inscrito é metade da medida do arco que ele enxerga.",
      "O arco enxergado pelo ângulo inscrito mede 100°, que é o dado do enunciado.",
      "Metade do arco, pelo teorema do ângulo inscrito: 100° / 2 = 50°, a medida do ângulo.",
      "O ângulo central do mesmo arco é que mede 100°. 200° inverteria a relação e dobraria o arco.",
    ],
    atalho:
      "Inscrito é metade do arco. Metade de 100° é 50°. Se a alternativa repete 100°, ela descreve o ângulo central, com vértice no centro, não na circunferência. Mover o vértice ao longo do arco que não é o enxergado não muda essa metade.",
  },
  "mat-gp-n2q4": {
    intuicao:
      "O losango tem os quatro lados iguais, e as diagonais se cortam no meio e em ângulo reto. Cada diagonal fica partida ao meio: 6 vira 3 e 3, 8 vira 4 e 4. Em cada quadrante há um triângulo retângulo de catetos 3 e 4, e a hipotenusa é o lado do losango. O desenho é quatro triângulos 3-4-5 colados pelas diagonais. A área seria outra conta, o produto das diagonais dividido por 2.",
    motivacao:
      "Pitágoras em um desses quatro triângulos retângulos dá o lado, porque as diagonais do losango são perpendiculares e se bissectam. 3² + 4² = 25, e a hipotenusa é 5. A alternativa 24 é a área (6 × 8)/2, que responde outra pergunta. A alternativa 10 soma as metades 6 e 4 sem os quadrados. A alternativa 14 soma as diagonais inteiras, mas o lado é a hipotenusa, não uma soma.",
    passos: [
      "Propriedade do losango: as diagonais se cortam no ponto médio e formam ângulo reto.",
      "Metades: 6/2 = 3 e 8/2 = 4. São os catetos do triângulo retângulo formado com o lado.",
      "Teorema de Pitágoras no triângulo das metades: lado² = 3² + 4² = 9 + 16 = 25.",
      "Raiz quadrada: o lado do losango é √25 = 5, e o comprimento fica positivo.",
      "24 seria a área (6 × 8)/2. 10 seria 6 + 4, a soma das metades sem Pitágoras.",
    ],
    atalho:
      "3-4-5 é o trio pitagórico mais curto. As metades das diagonais são 3 e 4, então o lado é 5. A área 24 está na lista para quem multiplica as diagonais e divide por 2. Essa conta mede o piso do losango, não o lado.",
  },
  "mat-gp-n2q5": {
    intuicao:
      "Os dois triângulos têm a mesma forma e tamanhos diferentes. Cada lado do menor é 2/3 do lado correspondente do maior. Área não escala como lado: ela escala como o quadrado da razão, porque há duas dimensões. O fator linear 2/3 vira (2/3)² = 4/9 na área. O menor tem área 16, então o maior, que é o de área maior, recebe 16 dividido por essa fração 4/9.",
    motivacao:
      "A razão das áreas de figuras semelhantes é o quadrado da razão de semelhança. A alternativa 24 faz 16 × 3/2 e aplica a razão linear direto na área, como se área fosse comprimento. Cada lado foi multiplicado por 3/2 ao passar do menor para o maior, e a área é produto de duas medidas, então o fator entra duas vezes. 32 dobraria 16, e 48 faria 16 × 3. Falta o quadrado.",
    passos: [
      "Razão de semelhança do menor para o maior: k = 2/3, razão dos comprimentos correspondentes.",
      "Áreas de figuras semelhantes ficam na razão k². Aqui k² = (2/3)² = 4/9.",
      "Então área do menor / área do maior = 4/9. Com a área do menor igual a 16: 16 / A = 4/9.",
      "Isolando a área maior: A = 16 × 9/4. Primeiro 16/4 = 4, depois 4 × 9 = 36.",
      "24 seria 16 × 3/2, a razão linear aplicada à área. Falta elevar a razão ao quadrado.",
    ],
    atalho:
      "Lados na razão 2 para 3, áreas na razão 4 para 9. 16 está para a área maior como 4 está para 9. 16 é quatro grupos de 4, então a maior é nove grupos de 4, isto é, 36. O pulo de 16 para 24 esquece que a segunda dimensão também cresce.",
  },
  "mat-gp-n3q1": {
    intuicao:
      "O triângulo equilátero tem os três lados iguais a 4 e os três ângulos de 60°. A altura desce de um vértice até o meio da base e corta o triângulo em dois retângulos de 30°, 60° e 90°. A base fica partida em 2 e 2. A hipotenusa de cada um é o lado 4, o cateto junto da base é 2, e a altura é o outro cateto. A área do equilátero é a base vezes essa altura, dividida por 2.",
    motivacao:
      "Pitágoras no meio-equilátero dá a altura, e a área do triângulo usa essa altura. A fórmula pronta a² √3 / 4 é o mesmo cálculo já simplificado e serve de conferência. A alternativa 8√3 esquece a divisão por 2 depois de achar a altura 2√3. A alternativa 2√3 é só a altura, um comprimento, não a área. A alternativa 16√3 esquece o denominador 4 da fórmula pronta, e a alternativa 4 é o lado.",
    passos: [
      "Propriedade do equilátero: a altura cai no ponto médio da base. O cateto da base mede 4/2 = 2, e a hipotenusa mede 4.",
      "Teorema de Pitágoras: h² = 4² − 2² = 16 − 4 = 12. Então h = √12 = 2√3, a altura positiva.",
      "Área do triângulo, metade do produto da base pela altura: A = (4 × 2√3) / 2.",
      "Simplificação da área: 4 × 2√3 = 8√3, e 8√3 / 2 = 4√3, a área do equilátero.",
      "Fórmula do equilátero: A = a² √3 / 4 = 16√3 / 4 = 4√3. 8√3 seria a base vezes a altura, sem dividir por 2.",
    ],
    atalho:
      "O equilátero de lado 2 tem área √3. O de lado 4 dobra a medida linear, então a área quadruplica: 4√3. A fórmula a² √3 / 4 dá 16√3 / 4 = 4√3 e confirma. 2√3 é a altura do triângulo, não o piso.",
  },
  "mat-gp-n3q2": {
    intuicao:
      "O quadrado está dentro da circunferência e os quatro vértices tocam a borda. A diagonal do quadrado é um diâmetro, porque os vértices opostos abrem a circunferência ao meio. O raio é 5, então o diâmetro, e a diagonal, medem 10. O lado é menor que essa diagonal, e a área pedida é a do quadrado, não a do disco. O disco de raio 5 tem área 25π, maior que o quadrado que cabe dentro dele.",
    motivacao:
      "A diagonal do quadrado vale lado × √2. Igualar isso ao diâmetro dá o lado, e a área é o lado ao quadrado. O atalho d² / 2 evita carregar o √2 até o fim, porque (d/√2)² = d²/2. A alternativa 100 é o quadrado do diâmetro, sem a divisão por 2, e nem caberia dentro do círculo. A alternativa 25 é o quadrado do raio, e a alternativa 25π é a área do círculo, outra figura.",
    passos: [
      "O quadrado inscrito tem a diagonal por diâmetro. Diâmetro = 2 × 5 = 10.",
      "Diagonal do quadrado, lado vezes √2: L √2 = 10, então L = 10/√2 = 5√2, o lado inscrito.",
      "Área do quadrado, lado ao quadrado: L² = (5√2)² = 25 × 2 = 50, menor que a do disco.",
      "Atalho equivalente, pela relação área = diagonal² / 2: 10² / 2 = 100/2 = 50.",
      "100 seria o quadrado do diâmetro. 25 seria o quadrado do raio. 25π é a área do círculo, não a do quadrado.",
    ],
    atalho:
      "A área do círculo é 25π ≈ 78,5. O quadrado inscrito cabe dentro, então a área dele é menor que isso. 100 já passa do disco e está fora, enquanto 50 fica abaixo de 78,5 e é d²/2 com d = 10. Dois triângulos de cateto implícito na diagonal fecham a mesma conta.",
  },
  "mat-gp-n3q3": {
    intuicao:
      "O triângulo tem lados 13, 14 e 15. Nenhum ângulo foi dado, então a altura ainda não está à vista e base vezes altura não sai de imediato. O contorno mede 13 + 14 + 15 = 42, e o semiperímetro é a metade, 21. A fórmula de Heron monta a área com esse 21 e com as três sobras de tirar cada lado. O triângulo existe: cada lado é menor que a soma dos outros dois.",
    motivacao:
      "Heron é o caminho quando se têm os três lados e não se tem a altura. Ela evita, no meio da resolução, um sistema para achar onde a altura cai. A alternativa 42 é o perímetro, um comprimento, não a área. A alternativa 91 faz 13 × 14 / 2, como se esses dois lados fossem catetos perpendiculares, e o ângulo entre eles não é reto. A alternativa 168 é o dobro de 84, como se faltasse a raiz ou a metade.",
    passos: [
      "Semiperímetro: s = (13 + 14 + 15) / 2 = 42/2 = 21. Heron usa s e as diferenças s − lado.",
      "Diferenças: 21 − 15 = 6, 21 − 14 = 7 e 21 − 13 = 8. A área é √(21 × 6 × 7 × 8).",
      "Fatoração: 21 = 3 × 7, 6 = 2 × 3, 7 = 7 e 8 = 2³. O produto é 2⁴ × 3² × 7².",
      "Raiz quadrada de Heron: √(2⁴ × 3² × 7²) = 2² × 3 × 7 = 4 × 3 × 7 = 84, a área.",
      "Conferência de Heron pelo quadrado: 84² = (80 + 4)² = 6400 + 640 + 16 = 7056, e 21 × 6 × 7 × 8 = 7056.",
    ],
    atalho:
      "A altura relativa ao lado 14 cai a 5 de um extremo e a 9 do outro. 13² − 5² = 169 − 25 = 144, e 15² − 9² = 225 − 81 = 144. A altura é 12 e a área é 14 × 12 / 2 = 84, em acordo com Heron. 91 seria 13 × 14 / 2, o retângulo dos lados que não são perpendiculares.",
  },
  "mat-gp-n3q4": {
    intuicao:
      "De um ponto fora da circunferência saem uma tangente e uma secante. A tangente toca a circunferência num único ponto e mede 6, e a secante corta a circunferência em dois pontos. O pedaço que fica fora, do ponto externo até o primeiro corte, mede 4. O comprimento total vai até o segundo corte. A tangente e as cordas da secante formam triângulos semelhantes, e dessa semelhança sai uma relação só entre os comprimentos.",
    motivacao:
      "A potência do ponto é o atalho da semelhança: o quadrado da tangente iguala o produto do trecho externo da secante pelo comprimento total. Os triângulos têm um ângulo em comum no ponto externo e um par de ângulos iguais pelo teorema da tangente e da corda, o ângulo no arco alterno. A alternativa 8 dobra o trecho externo. A alternativa √24 faz √(6 × 4), uma média geométrica que não é a potência. A alternativa 10 soma 6 e 4.",
    passos: [
      "Semelhança: a tangente e a secante formam triângulos com um ângulo comum e com ângulos iguais pelo teorema do ângulo entre tangente e corda, igual ao inscrito no arco alterno.",
      "Lados proporcionais nessa semelhança: tangente / trecho externo = secante total / tangente.",
      "Potência do ponto, o produto cruzado da semelhança: t² = e × s, o quadrado da tangente.",
      "Substituição na potência do ponto: 6² = 4 × s, isto é, 36 = 4s. Divisão por 4: s = 9.",
      "Diferença na secante, depois da potência do ponto: o trecho interno mede 9 − 4 = 5. 8 seria 4 + 4, sem usar a tangente.",
    ],
    atalho:
      "6² = 36, e 36 dividido pelo trecho externo 4 dá 9. A secante total é 9, dos quais 4 ficam fora e 5 ficam dentro. A prova dos nove é 4 × 9 = 36 = 6². √24 ≈ 4,9 seria √(6 × 4), uma conta que não é a potência.",
  },
  "mat-gp-n3q5": {
    intuicao:
      "AB corta a circunferência ao meio, porque é diâmetro, e o arco AB mede 180°, uma semicircunferência. O ponto C está na circunferência, diferente de A e de B, e as cordas CA e CB formam o ângulo no ponto C. Esse ângulo está inscrito e enxerga o arco AB. Qualquer que seja o lugar de C nesse contorno, o arco visto continua sendo a semicircunferência. A abertura em C não muda quando se empurra C para um lado ou para o outro.",
    motivacao:
      "O teorema do ângulo inscrito reduz a conta à metade do arco, e metade de 180° é 90°. A alternativa que diz que o ângulo depende de onde C está trata o arco AB como variável, e o diâmetro deixa esse arco fixo. A alternativa 180° marca o próprio arco, ou o ângulo central, não o inscrito. 45° e 60° são ângulos notáveis sem relação com este arco. O caso da semicircunferência é o inscrito que enxerga 180°.",
    passos: [
      "Definição de diâmetro: AB é diâmetro, então o arco AB mede metade da circunferência inteira: 180°.",
      "O ângulo ACB é inscrito, com vértice na circunferência, e enxerga o arco AB.",
      "Teorema do ângulo inscrito: a medida é metade do arco correspondente. 180° / 2 = 90°.",
      "C pode percorrer a circunferência, desde que não coincida com A nem com B. O arco AB continua 180°, então o ângulo continua reto.",
      "180° seria marcar o arco, não o inscrito. A posição de C não entra na conta.",
    ],
    atalho:
      "O ângulo inscrito na semicircunferência é reto. Metade de 180° é 90°, e mover C não muda o diâmetro que ele enxerga. Dois lugares diferentes de C, um com CA = CB e outro bem de lado, continuam enxergando o mesmo arco de 180°. A alternativa que diz que depende trata esse arco como se ele mudasse.",
  },
};
