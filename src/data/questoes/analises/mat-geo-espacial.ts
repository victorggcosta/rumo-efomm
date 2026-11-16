import type { AnaliseQuestao } from "../../lessons.ts";

export const ANALISES: Record<string, AnaliseQuestao> = {
  "mat-ge-n1q1": {
    intuicao:
      "O cubo de aresta 3 é uma caixa em que largura, profundidade e altura medem a mesma coisa. O volume conta quantos cubinhos de aresta 1 cabem dentro: 3 na frente, 3 para o fundo e 3 para cima. A área de uma face é só o chão desse empilhamento, um quadrado, e não o espaço interno. A pergunta pede o miolo, não a tampa.",
    motivacao:
      "O volume do cubo é a aresta multiplicada por ela mesma três vezes, porque cada dimensão entra uma vez. A área de uma face usa só duas dimensões e dá 3² = 9, que está na lista para quem para na tampa. 18 não sai de uma potência da aresta: mistura somas de arestas com área. A fórmula a³ já é o princípio multiplicativo das três direções.",
    passos: [
      "Volume do cubo: as três dimensões são iguais à aresta, então V = a × a × a = a³.",
      "Aresta dada no enunciado: largura, profundidade e altura do cubo valem a = 3.",
      "Potência da aresta no volume do cubo: 3³ = 3 × 3 × 3 = 27, e 27 é o miolo pedido.",
      "9 = 3² é a área de uma face. 6 = 3 + 3 soma duas arestas e não preenche o cubo.",
    ],
    atalho:
      "Três camadas de 3 × 3 cubinhos: 9 em cada camada, e 9 × 3 = 27. A face de área 9 é uma camada só, o chão do cubo. Quem responde 9 contou o chão e esqueceu as duas camadas que ficam por cima.",
  },
  "mat-ge-n1q2": {
    intuicao:
      "A superfície do cubo é a casca: seis quadrados, um em cada face, sem contar o ar de dentro. Com aresta 2, cada quadrado tem lado 2. A área total é a soma dessas seis tampas. O volume 8 mede o miolo e usa a aresta três vezes; aqui a aresta entra só duas vezes, em cada face, e as faces se somam.",
    motivacao:
      "A área de um quadrado é lado ao quadrado, e o cubo tem 6 faces congruentes, então a área total é 6a². Parar em a³ = 8 troca superfície por volume, e essa troca está pronta na primeira alternativa. 4a² = 16 contaria quatro faces, uma faixa lateral incompleta. A pergunta diz área total, então entram frente, fundo, esquerda, direita, topo e base.",
    passos: [
      "Área de uma face quadrada do cubo: a², com a = 2. Então cada face mede 2² = 4.",
      "Contagem das faces: o cubo tem 6 faces quadradas congruentes, uma em cada lado.",
      "Área total da casca: 6 × 4 = 24, que é a fórmula 6a² aplicada à aresta 2.",
      "8 = 2³ é o volume do miolo. 16 = 4 × 4 deixaria duas das seis faces de fora.",
    ],
    atalho:
      "Abra o cubo numa cruz de seis quadrados de área 4. Duas faces na faixa central e quatro nas abas, ou simplesmente 6 × 4. Dá 24. O volume 8 não aparece nessa planificação, porque planificação é casca.",
  },
  "mat-ge-n1q3": {
    intuicao:
      "Um prisma repete a mesma base ao longo da altura, como uma pilha de folhas com o formato da base. Aqui cada folha tem área 6 e a pilha tem altura 5. O volume é a área de uma folha vezes o número de unidades de altura. Não se soma base com altura: soma misturaria área com comprimento.",
    motivacao:
      "A fórmula V = área da base vezes altura é o princípio multiplicativo de um sólido de seção constante. Vale para prisma reto de qualquer base, desde que a altura seja perpendicular às bases. Metade desse produto, 15, seria um fator de pirâmide ou de triângulo aplicado sem motivo. 11 = 6 + 5 é a soma das grandezas, que não enche o sólido.",
    passos: [
      "Volume do prisma: a seção não muda com a altura, então V = B × h, com B a área da base.",
      "Dados do prisma: a área da base é B = 6 e a altura perpendicular é h = 5.",
      "Produto da área da base pela altura: 6 × 5 = 30, e esse é o volume do prisma.",
      "11 = 6 + 5 soma grandezas diferentes. 15 = (1/2) × 6 × 5 usa um meio que o prisma não pede.",
    ],
    atalho:
      "Cinco camadas de área 6 ocupam 30. Se a altura dobrasse para 10, o volume dobraria para 60, o que confere a proporcionalidade. A soma 11 não dobra desse jeito quando a altura dobra.",
  },
  "mat-ge-n1q4": {
    intuicao:
      "O cilindro é um prisma cuja base é um círculo. O raio 2 fixa esse círculo, e a altura 5 empilha essa mesma seção circular. A área do círculo entra primeiro; só depois se multiplica pela altura. O volume sai em função de π porque a base já traz π. Não se pede a área lateral, que desenrolaria o cilindro num retângulo.",
    motivacao:
      "A base circular tem área πr², não 2πr e não πr. Esquecer o quadrado no raio, ou esquecer de multiplicar pela altura, produz os distratores 10π e 4π. 4π é só a tampa. O fator π permanece no resultado porque o enunciado não deu um valor numérico para π, e as alternativas também o conservam.",
    passos: [
      "Área da base circular do cilindro: πr², com r = 2. Então a tampa mede π × 2² = 4π.",
      "Volume do cilindro, prisma de base circular: V = B × h, base vezes a altura 5.",
      "Produto da área da base pela altura do cilindro: 4π × 5 = 20π, que é o volume.",
      "4π é só a base, sem a altura. 10π = π × 2 × 5 esquece o quadrado do raio.",
    ],
    atalho:
      "O círculo de raio 2 tem área 4π, quatro vezes o círculo de raio 1. Cinco dessas camadas de base dão 20π. 40π dobraria a altura ou o quadrado do raio, e o enunciado não pede esse dobro.",
  },
  "mat-ge-n1q5": {
    intuicao:
      "A diagonal do cubo liga um vértice ao vértice oposto, furando o interior, não andando só numa face. O caminho se parte em dois cortes retos. Primeiro a diagonal da face da base, de um canto ao canto oposto do quadrado. Depois o triângulo retângulo formado por essa diagonal de face e pela aresta vertical, cuja hipotenusa é a diagonal do sólido.",
    motivacao:
      "Pitágoras entra duas vezes porque cada corte é um triângulo retângulo, e o cubo não oferece a diagonal espacial numa face só. Parar no primeiro Pitágoras dá a diagonal da face, 3√2, que também se escreve √18. As duas formas estão nas alternativas e medem a mesma coisa errada. A diagonal do cubo é mais comprida, porque ainda sobe uma aresta.",
    passos: [
      "Pitágoras na face: a diagonal da face quadrada de lado 3 cumpre d₁² = 3² + 3² = 18, logo d₁ = √18 = 3√2.",
      "Pitágoras no corte espacial: a diagonal do cubo é a hipotenusa do triângulo retângulo de catetos d₁ e 3.",
      "Pitágoras no corte que sobe a aresta vertical: d² = (3√2)² + 3² = 18 + 9 = 27.",
      "Raiz: d = √27 = √(9 × 3) = 3√3. 3√2 e √18 são a diagonal da face, não a do cubo.",
    ],
    atalho:
      "As três arestas perpendiculares do cubo entram juntas: d = √(3² + 3² + 3²) = √27 = 3√3. Uma aresta a menos debaixo da raiz é a diagonal da face. 9 é a área da face, um número de outra grandeza.",
  },
  "mat-ge-n2q1": {
    intuicao:
      "A caixa 2 por 3 por 6 é um paralelepípedo reto, e a diagonal interna vai de um vértice ao vértice mais distante, atravessando o interior. Dá para ir primeiro pela diagonal do retângulo da base, 2 por 3, e depois subir os 6 num triângulo retângulo. Os três comprimentos são perpendiculares dois a dois. A pergunta pede essa hipotenusa espacial.",
    motivacao:
      "Um Pitágoras só, na base, não chega ao vértice oposto do topo. O segundo Pitágoras, no corte vertical, junta a diagonal da base com a altura. Somar 2 + 3 + 6 = 11 percorre três arestas pela casca, que é um caminho mais longo e diferente da reta interna. √(2 + 3 + 6) = √11 esquece de elevar cada aresta ao quadrado antes de somar.",
    passos: [
      "Pitágoras na base 2 por 3: o quadrado da diagonal da base é 2² + 3² = 4 + 9 = 13.",
      "Pitágoras no corte: a diagonal interna tem catetos iguais a essa diagonal da base e à altura 6, então d² = 13 + 6².",
      "Soma dos três quadrados perpendiculares: d² = 2² + 3² + 6² = 4 + 9 + 36 = 49.",
      "Raiz: d = √49 = 7. √11 esquece os quadrados, e 11 soma as arestas em vez de cruzar o interior.",
    ],
    atalho:
      "4 + 9 + 36 fecha em 49, que é 7². A tripla 2, 3, 6 não parece pitagórica à primeira vista, mas os quadrados sim. √36 = 6 é só a aresta mais longa, deitada numa quina, sem entrar na caixa.",
  },
  "mat-ge-n2q2": {
    intuicao:
      "A pirâmide tem a mesma base e a mesma altura de um prisma, mas as seções encolhem até o vértice. O sólido não repete a base 18 ao longo dos 5 de altura: cada corte paralelo é menor. O volume que cabe é um terço do prisma correspondente. A pergunta pede esse miolo afilado, não o prisma cheio.",
    motivacao:
      "O fator 1/3 é o que separa pirâmide de prisma de mesma base e mesma altura. Sem ele, 18 × 5 = 90 conta o prisma, e 90 está na lista. Metade, 45, seria um chute entre os dois sólidos, sem ser o fator da pirâmide. A área da base já veio pronta, então não se reconstrói a base: só se aplica o terço.",
    passos: [
      "Volume da pirâmide: V = (1/3) × B × h, um terço do prisma de mesma base e mesma altura.",
      "Dados da pirâmide: B = 18 e h = 5. O prisma de mesma base e altura mediria 18 × 5 = 90.",
      "Fator da pirâmide: V = (1/3) × 90 = 30, um terço do prisma correspondente.",
      "90 é o volume do prisma cheio. 45 = 90 / 2 usa metade no lugar do terço da pirâmide.",
    ],
    atalho:
      "O prisma de mesma base mede 18 × 5 = 90, e um terço de 90 é 30. Se a altura fosse 3, o terço comeria a altura e sobraria só a base, 18; com altura 5 o denominador não cancela tudo, e resta 30.",
  },
  "mat-ge-n2q3": {
    intuicao:
      "O cone é uma pirâmide de base circular: o raio 3 desenha o círculo, e a altura 4 vai desse círculo até o vértice. As seções paralelas à base são círculos cada vez menores. O cilindro de mesmo raio e mesma altura repetiria o círculo 9π em toda a altura; o cone fica com um terço desse cilindro. A pergunta pede o cone, não o cilindro.",
    motivacao:
      "O volume do cone usa o mesmo 1/3 da pirâmide, com B = πr². Esquecer o terço responde o cilindro, 36π, que é a alternativa armada. A geratriz não entra no volume: ela serviria à área lateral. Aqui só raio e altura importam, e π permanece porque a base é circular e ninguém substituiu π por um decimal.",
    passos: [
      "Área da base circular do cone: πr² = π × 3² = 9π, a tampa do cilindro associado.",
      "Volume do cone: V = (1/3) × B × h, um terço do cilindro de mesma base e mesma altura.",
      "Volume do cone, um terço do cilindro de mesma base: (1/3) × 9π × 4 = 3π × 4 = 12π.",
      "36π = 9π × 4 é o cilindro de mesmo raio e mesma altura, sem o fator 1/3.",
    ],
    atalho:
      "O fator 9 de π × 3² cancela o 3 de 1/3 e deixa 3π × 4 = 12π. O cilindro de mesmo raio e mesma altura é o triplo desse valor, 36π. A geratriz √(3² + 4²) = 5 mediria a casca lateral, e o volume não a usa.",
  },
  "mat-ge-n2q4": {
    intuicao:
      "A esfera de raio 6 é a bola fechada: todos os pontos até 6 unidades do centro. Não há base para repetir, como no prisma, nem vértice para afilar, como no cone. O volume cresce com o cubo do raio porque as três direções sentem esse raio. A casca, a superfície, cresce só com o quadrado. A pergunta pede o miolo, o volume.",
    motivacao:
      "A fórmula V = (4/3) π r³ junta o fator 4/3, que a compara com outros sólidos de revolução, ao cubo do raio. 4πr² = 144π é a área da superfície e está na lista para a troca casca/miolo. 4πr³ = 864π esquece de dividir por 3. O raio entra ao cubo, não ao quadrado: r² = 36 daria conta de área, e r³ = 216 é o que o volume usa.",
    passos: [
      "Volume da esfera de raio r: a fórmula que mede o miolo é V = (4/3) π r³.",
      "Cubo do raio pedido no volume da esfera: r = 6 e r³ = 6 × 6 × 6 = 216 unidades.",
      "Produto do fator 4/3 pelo cubo do raio da esfera: (4/3) × 216π = 4 × 72π = 288π.",
      "144π = 4π × 36 = 4πr² é a área da superfície. 864π = 4 × 216π esquece o denominador 3.",
    ],
    atalho:
      "216 dividido por 3 dá 72, e 72 × 4 = 288. O π fica de fora dessa aritmética e volta só no fim do cálculo: 288π. 144π é a área da casca, cerca de metade numérica deste volume, e não o enche.",
  },
  "mat-ge-n2q5": {
    intuicao:
      "Multiplicar todas as arestas por 2 é ampliar o sólido numa maquete em que cada comprimento dobra: largura, profundidade e altura. O volume conta o produto dessas três dimensões. Cada uma foi dobrada, então o miolo é dobrado três vezes seguidas. A casca, que só tem duas dimensões, não cresce do mesmo jeito. A pergunta fala do volume.",
    motivacao:
      "Comprimento escala por k, área por k² e volume por k³. Aqui k = 2, e o cubo desse fator é 8, qualquer que seja o sólido, desde que a ampliação seja a mesma nas três direções. Responder 2 repete a escala linear. Responder 4 usa k², o fator da área da superfície, que o enunciado não pediu. 6 = 2 + 2 + 2 soma os três dobramentos em vez de multiplicá-los.",
    passos: [
      "Escala linear da maquete: cada comprimento do sólido fica multiplicado por k = 2.",
      "Volume é produto de três comprimentos, então o fator do volume é k × k × k = k³.",
      "Potência do fator de escala: 2³ = 8. O volume novo é 8 vezes o volume antigo.",
      "4 = 2² multiplicaria áreas. 2 sozinho multiplicaria um comprimento, não o sólido.",
    ],
    atalho:
      "Um cubo de aresta 1 tem volume 1. Com aresta 2, o volume é 8. A razão 8/1 = 8 não depende de ter começado no cubo: o paralelepípedo 1 × 1 × 1 virando 2 × 2 × 2 conta a mesma história.",
  },
  "mat-ge-n3q1": {
    intuicao:
      "A pirâmide regular tem base quadrada de lado 6 e ápice acima do centro, a altura 4. A superfície total é a casca: o quadrado da base mais quatro triângulos iguais. Cada triângulo tem base 6, mas a altura dele não é a altura 4 da pirâmide. Essa altura do triângulo é a apótema, o segmento que desce do ápice até o meio de um lado, deitado na face. O corte que a revela é um triângulo retângulo interno.",
    motivacao:
      "A área lateral pede a apótema da pirâmide, não a aresta lateral e não a altura do sólido. O triângulo retângulo do corte tem cateto 4, a altura, e cateto 3, que é a distância do centro da base até o meio do lado. Pitágoras nesse corte dá a altura útil do triângulo da face. Usar 4 no lugar de 5 achata os triângulos e não fecha 96. A base 36 sozinha é outra armadilha, porque a pergunta diz área total.",
    passos: [
      "Área da base quadrada: 6 × 6 = 36. Do centro da base ao meio de um lado há 6/2 = 3.",
      "Pitágoras no corte: a apótema da pirâmide cumpre m² = 4² + 3² = 16 + 9 = 25, logo m = 5.",
      "Área de uma face lateral triangular: (6 × 5) / 2 = 15. Quatro faces: 4 × 15 = 60.",
      "Área total, base mais laterais: 36 + 60 = 96. 60 sozinha deixa a base de fora.",
    ],
    atalho:
      "O corte 3-4-5 é o triângulo retângulo clássico, então a apótema 5 aparece sem raiz pendurada. Quatro triângulos de área 15 dão 60, e o chão 36 soma 96. 84 esqueceria um dos triângulos ou trocaria uma área.",
  },
  "mat-ge-n3q2": {
    intuicao:
      "A esfera de raio r cabe justa no cilindro: o cilindro tem o mesmo raio, e a altura do cilindro é o diâmetro 2r, de um polo da esfera ao outro. A esfera encosta no meio da lateral e nos centros das duas tampas. A pergunta compara os dois volumes, cilindro dividido pela esfera, e essa razão não depende de r nem de π. Os dois sólidos compartilham o mesmo corte circular máximo.",
    motivacao:
      "Os dois volumes trazem π r³, então a razão cancela forma e tamanho e sobra um número puro. O cilindro é a base πr² vezes a altura 2r. A esfera é (4/3) π r³. Dividir frações é multiplicar pelo inverso de 4/3, que é 3/4. A banca oferece 3, 2 e 4/3, que são pedaços dessa conta antes do fim, e também π, para quem acha que a razão ainda carrega a base circular.",
    passos: [
      "Volume do cilindro circunscrito: altura 2r e base πr², então Vᵤ = πr² × 2r = 2π r³.",
      "Volume da esfera inscrita nesse cilindro de altura 2r: Vₑ = (4/3) π r³.",
      "Razão pedida, cilindro sobre esfera: (2π r³) / ((4/3) π r³) = 2 / (4/3).",
      "Divisão de frações: 2 / (4/3) = 2 × (3/4) = 3/2. O π e o r³ cancelam na razão.",
    ],
    atalho:
      "Com r = 1 a conta numérica é 2π dividido por 4π/3, que dá 3/2. A esfera fica com 2/3 do cilindro que a envolve, então o cilindro tem 3/2 da esfera. O fator π não sobrevive na razão dos dois volumes.",
  },
  "mat-ge-n3q3": {
    intuicao:
      "A esfera maciça de raio 3 é fundida: o metal muda de forma e o volume não muda. O cilindro novo tem o mesmo raio 3, então a base circular já está fixa e a altura é o que a quantidade de metal determina. Não se trata da esfera inscrita num cilindro de altura igual ao diâmetro; aqui a altura é incógnita e o volume é o da esfera. A pergunta pede essa altura.",
    motivacao:
      "Conservação do volume iguala (4/3) π r³ ao volume π r² h do cilindro. Como o raio é o mesmo nos dois, π r² cancela e sobra uma relação direta entre h e r. Chutar a altura 3, igual ao raio, ou 6, igual ao diâmetro, ignora que a esfera não enche o cilindro de altura 6. A conta tem de usar o fator 4/3, não a inscrição.",
    passos: [
      "Volume da esfera, que se conserva: V = (4/3) π × 3³ = (4/3) π × 27 = 36π.",
      "Volume do cilindro obtido na fundição, de raio 3: a base mede π × 3² = 9π, então V = 9π h.",
      "Igualdade dos volumes: 9π h = 36π. Cancele 9π, que é diferente de zero: h = 36/9 = 4.",
      "Atalho da fórmula: (4/3) π r³ = π r² h implica h = (4/3) r = (4/3) × 3 = 4.",
    ],
    atalho:
      "O π e o raio ao quadrado saem dos dois lados, e a altura fica 4/3 do raio. Com raio 3, h = 4. A altura 6 seria o cilindro que apenas guarda a esfera, maior que o metal disponível: aquele cilindro tem volume 54π, e a esfera só tem 36π.",
  },
  "mat-ge-n3q4": {
    intuicao:
      "O modelo é a mesma forma do tanque, com cada comprimento reduzido na escala 1:50. Uma aresta de 50 m no navio vira 1 m na maquete. O volume não encolhe 50 vezes: ele é produto de três comprimentos, e cada um foi dividido por 50. O tanque real tem 125 m³. A pergunta pede o volume da maquete, em metros cúbicos.",
    motivacao:
      "Escala linear k = 1/50 implica escala de volume k³ = 1/50³. Usar k no volume produz 125/50 = 2,5, a primeira alternativa, que trata metro cúbico como se fosse metro. Usar k², o fator de área, produz 125/2.500 = 0,05, também listado. 6.250 multiplica por 50 e amplia o tanque em vez de reduzi-lo. O cubo da escala é o que a dimensão do volume exige.",
    passos: [
      "Escala linear do modelo para o real: cada comprimento é dividido por 50.",
      "Volume, produto de três comprimentos, fica dividido por 50³. Potência: 50² = 2.500 e 50³ = 125.000.",
      "Volume do modelo na escala cúbica da maquete: 125 / 125.000 = 0,001 m³.",
      "2,5 = 125/50 aplica a razão linear ao volume. 0,05 = 125/2.500 aplica a razão das áreas.",
    ],
    atalho:
      "125 m³ é o cubo de lado 5 m, porque 5³ = 125. No modelo o lado vira 5/50 = 0,1 m. O volume da maquete é 0,1³ = 0,001 m³, isto é, um litro. A divisão por 50, uma vez só, deixaria 2,5 m³, grande demais para a maquete.",
  },
  "mat-ge-n3q5": {
    intuicao:
      "O cone está com água até a metade da altura, medida a partir do vértice. A superfície da água é um corte paralelo à base, e o trecho molhado é um cone menor, parecido com o cone inteiro. Na metade da altura, o raio da seção também é a metade do raio da boca, porque o corte acompanha a geratriz. A pergunta pede a fração do volume, não a fração da altura.",
    motivacao:
      "Sólidos semelhantes escalam o volume pelo cubo da razão linear. A razão aqui é 1/2, então o volume vai por (1/2)³, não por 1/2. Responder 1/2 trata o volume como se acompanhasse a altura, o erro que a banca coloca na primeira alternativa. 1/4 = (1/2)² acompanharia a área da seção, não o volume. Se a água fosse a metade de cima, a partir da base, o cone vazio do vértice é que teria 1/8; o enunciado molha a partir do vértice.",
    passos: [
      "Semelhança: o cone de água e o cone do recipiente têm a mesma abertura, e a razão linear é 1/2.",
      "O raio da seção na meia altura também fica multiplicado por 1/2, pelo corte paralelo à base.",
      "Volume de sólidos semelhantes: a fração escala com o cubo da razão, (1/2)³ = 1/8.",
      "1/2 usaria a razão linear no volume. 1/4 = (1/2)² é o fator da área da seção, não do volume.",
    ],
    atalho:
      "Metade da altura, metade do raio, e o terço da fórmula do cone é o mesmo nos dois cones, então ele cancela na fração. Sobra (1/2)² × (1/2) = 1/8. A água encostada no vértice ocupa um oitavo, não a metade do copo.",
  },
};
