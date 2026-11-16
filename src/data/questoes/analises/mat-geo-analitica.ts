import type { AnaliseQuestao } from "../../lessons.ts";

export const ANALISES: Record<string, AnaliseQuestao> = {
  "mat-ga-n1q1": {
    intuicao:
      "Os pontos (0, 0) e (3, 4) formam, com o ponto (3, 0), um triângulo retângulo no plano. O deslocamento horizontal mede 3 e o vertical mede 4. A distância pedida é a hipotenusa, o segmento reto entre os dois pontos, não o caminho que desce os eixos. O triângulo 3-4-5 fecha com um inteiro, e esse inteiro é o comprimento.",
    motivacao:
      "A fórmula da distância é o teorema de Pitágoras: √( (x₂ − x₁)² + (y₂ − y₁)² ). Somar 3 + 4 = 7 mede o perímetro dos catetos, o caminho em L. Elevar ao quadrado e parar em 25 entrega a área do quadrado construído sobre a hipotenusa, não o comprimento. A raiz devolve a unidade do segmento. Sem ela, o número fica numa grandeza ao quadrado.",
    passos: [
      "Distância entre pontos, por Pitágoras: d = √( (3 − 0)² + (4 − 0)² ). Os catetos do triângulo são 3 e 4.",
      "Quadrados dos catetos: 3² = 9 e 4² = 16. Soma dentro da raiz: 9 + 16 = 25.",
      "Raiz quadrada: √25 = 5, porque 5² = 25 e a distância entre pontos é positiva.",
      "7 seria a soma dos catetos. 25 seria d². √7 nasceria de √(3 + 4), sem os quadrados.",
    ],
    atalho:
      "O trio 3, 4, 5 é pitagórico. Reconhecido o trio, a distância é 5 sem extrair a raiz na hora. Qualquer resposta maior que 5 e menor que 7 ainda pode ser um comprimento, mas 7 já é o caminho mais longo, encostado nos eixos.",
  },
  "mat-ga-n1q2": {
    intuicao:
      "O segmento de (0, 0) a (4, 6) é a diagonal de um retângulo de base 4 e altura 6. O ponto médio é o centro desse retângulo, onde as duas metades do segmento se encontram. Cada coordenada anda metade do caminho: no eixo x o meio de 0 e 4 é 2, e no eixo y o meio de 0 e 6 é 3, então o centro é (2, 3).",
    motivacao:
      "A média aritmética de cada coordenada é a definição de ponto médio, porque o parâmetro t = 1/2 na reta que liga os pontos dá (x₁ + x₂)/2 e (y₁ + y₂)/2. Somar sem dividir devolve a outra extremidade, (4, 6), ou um vértice do retângulo como (4, 3). Dividir só uma coordenada produz (2, 6) ou (4, 3), pontos que estão na borda, não no meio do segmento.",
    passos: [
      "Ponto médio, média de cada eixo: xₘ = (x₁ + x₂)/2 e yₘ = (y₁ + y₂)/2. Cada coordenada se mede no seu eixo.",
      "Abscissa, média das horizontais: (0 + 4)/2 = 4/2 = 2. A metade do deslocamento horizontal é 2.",
      "Ordenada, média das verticais: (0 + 6)/2 = 6/2 = 3. A metade do deslocamento vertical é 3.",
      "O ponto é (2, 3). (4, 6) é a extremidade, e (2, 6) só fez a média na horizontal.",
    ],
    atalho:
      "Ande metade de 4 na horizontal e metade de 6 na vertical, saindo da origem: 2 e 3. O vetor metade de (4, 6) é (2, 3). Se uma coordenada da resposta ainda é 4 ou 6, essa coordenada não foi dividida.",
  },
  "mat-ga-n1q3": {
    intuicao:
      "A reta que passa por (0, 0) e (2, 2) é a bissetriz do primeiro quadrante, o lugar em que a altura sobe o mesmo tanto que o x anda. A inclinação é essa razão, o quanto y cresce por unidade de x. No desenho, a cada passo para a direita a reta sobe um passo. A ladeira vale 1, e a reta não é vertical, então a inclinação existe.",
    motivacao:
      "A definição m = (y₂ − y₁)/(x₂ − x₁) compara as duas variações. Dividir as coordenadas sem subtrair a origem daria o mesmo número aqui, só porque o primeiro ponto é a origem, e esse atalho quebra em qualquer outro segmento. Responder 2 usa o deslocamento de um eixo sozinho. Responder que não existe reserva a reta vertical, em que o denominador x₂ − x₁ é zero, o que não acontece entre 0 e 2.",
    passos: [
      "Inclinação, variação vertical sobre a horizontal: m = (2 − 0)/(2 − 0). A fração compara as duas variações.",
      "Variações lidas nos pontos: Δy = 2 e Δx = 2. A razão é 2/2 = 1. Subir e andar para a direita são iguais.",
      "Δx = 2 ≠ 0, então a reta não é vertical e a inclinação existe e vale 1.",
      "Equação reduzida de conferência: a reta pela origem com m = 1 é y = x, e o ponto (2, 2) satisfaz.",
    ],
    atalho:
      "Na reta y = x, subir e andar são iguais, então a taxa é 1. Olhe o triângulo de catetos 2 e 2: a tangente do ângulo com o eixo x é 2/2 = 1, o ângulo de 45° da bissetriz do primeiro quadrante.",
  },
  "mat-ga-n1q4": {
    intuicao:
      "x² + y² = 25 é a circunferência de centro na origem e raio 5, porque 25 é 5². Pertencer à curva é estar exatamente a 5 unidades da origem, nem dentro nem fora. O ponto (3, 4) forma com a origem o triângulo 3-4-5, cuja hipotenusa é 5. Ele está sobre a circunferência. Somar 3 + 4 ou multiplicar 3 × 4 mede outras coisas, não o raio.",
    motivacao:
      "A equação é a condição de distância: √(x² + y²) = 5, elevada ao quadrado para tirar a raiz. Substituir o ponto na equação é o teste direto, e 9 + 16 = 25 fecha. Dizer que o raio é 25 lê r² no lugar de r. Dizer que basta estar no primeiro quadrante é verdade para infinitos pontos, a maioria fora da curva. O teste da equação separa o ponto certo dos vizinhos que só compartilham o quadrante.",
    passos: [
      "Equação da circunferência: o ponto (x, y) pertence a x² + y² = 25 quando a igualdade é verdadeira.",
      "Substituição na equação: 3² + 4² = 9 + 16 = 25. A sentença fecha e o ponto pertence.",
      "Raio: r² = 25, então r = 5, não 25. A distância de (3, 4) à origem é √25 = 5, igual ao raio.",
      "3 + 4 = 7 não é a equação. 3 × 4 = 12 também não. Estar no primeiro quadrante não substitui a conta.",
    ],
    atalho:
      "3-4-5 é pitagórico, e o raio é 5. O ponto do trio está na circunferência de raio 5. Se a soma dos quadrados tivesse dado 26, o ponto estaria fora, a uma distância um pouco maior que 5.",
  },
  "mat-ga-n1q5": {
    intuicao:
      "y = 2x + 1 é uma reta que sobe 2 quando x anda 1, e corta o eixo y em 1. Uma paralela tem a mesma ladeira e outro corte, senão seria a mesma reta. No desenho, y = 2x − 4 sobe do mesmo jeito e fura o eixo y em −4, quatro unidades abaixo. As duas nunca se encontram. As outras opções viram a ladeira ou ficam verticais.",
    motivacao:
      "Na equação reduzida y = mx + n, m é a direção e n é a posição. Paralelas não verticais são exatamente as de mesmo m. Decorar que paralela significa mesmo termo independente conserva n e troca m, e isso produz retas concorrentes no mesmo ponto do eixo y. O produto dos coeficientes angulares igual a −1 é o teste de perpendicular, não de paralela: 2 × (−1/2) = −1 aponta y = −(1/2)x, que cruza a reta dada em ângulo reto.",
    passos: [
      "Equação reduzida: y = 2x + 1 tem inclinação m = 2 e intercepto vertical n = 1.",
      "Paralelismo: mesma inclinação e intercepto diferente. y = 2x − 4 tem m = 2 e n = −4.",
      "y = −2x + 1 tem inclinação −2, o sentido de subida trocado. y = x + 2 tem inclinação 1.",
      "Perpendicular, não paralela: y = −(1/2)x satisfaz 2 × (−1/2) = −1. x = 2 é vertical e corta a reta dada.",
    ],
    atalho:
      "Olhe só o número que multiplica x. A paralela repete o 2 e muda o resto. Entre as opções, a única com 2x na frente é y = 2x − 4. Se o 2 virou −1/2, a relação é de perpendicular, não de paralela.",
  },
  "mat-ga-n2q1": {
    intuicao:
      "Uma reta de inclinação 3 sobe três unidades a cada passo para a direita. Ela precisa passar por (1, 2), então o ponto de partida do desenho já está dado. Um passo à esquerda, até x = 0, desce 3, e a altura cai de 2 para −1. Esse corte com o eixo y é o termo independente da equação reduzida. A reta é y = 3x − 1.",
    motivacao:
      "A forma ponto-inclinação y − y₀ = m(x − x₀) usa as duas informações sem montar sistema. A equação reduzida y = mx + n é o arrumado final, e n sai quando o ponto entra. Escrever y = 3x + 2 cola a ordenada do ponto no lugar do intercepto, como se o ponto fosse (0, 2). Esse é o caminho decorado: n é a altura em x = 0, não a altura em x = 1. A substituição do ponto na reta pronta é a conferência.",
    passos: [
      "Ponto-inclinação: y − 2 = 3(x − 1), com inclinação m = 3 e ponto (1, 2).",
      "Distributiva no segundo membro: y − 2 = 3x − 3. O 3 multiplica o parêntese inteiro.",
      "Equação reduzida, isolando y: y = 3x − 3 + 2 = 3x − 1. O intercepto −1 é a soma −3 + 2.",
      "Conferência do ponto: 3 × 1 − 1 = 2. A reta passa por (1, 2). y = 3x + 2 em x = 1 vale 5, outro ponto.",
    ],
    atalho:
      "De x = 1 até x = 0 a reta desce 3, porque a inclinação é 3. 2 − 3 = −1, que é o intercepto. y = 3x − 1 é a única opção que em x = 1 devolve a ordenada 2 do ponto (1, 2) pedido no enunciado.",
  },
  "mat-ga-n2q2": {
    intuicao:
      "Uma reta de inclinação 2 sobe dois para cada um que anda, um ângulo agudo forte com o eixo x. A perpendicular desce, porque o ângulo reto joga a segunda reta para o outro lado do eixo. A ladeira da segunda não é o oposto  −2, que teria o mesmo ângulo espelhado e não o complemento até 90°. Ela é mais deitada: desce 1 enquanto anda 2. A inclinação é −1/2.",
    motivacao:
      "Duas retas não verticais são perpendiculares quando o produto das inclinações é −1. Essa relação vem do fato de que os vetores direção (1, m₁) e (1, m₂) têm produto interno zero, o que força m₂ = −1/m₁. Trocar só o sinal, de 2 para −2, produz um ângulo que não é reto: o produto seria −4, não −1. Usar 1/2 sem o sinal deixa as duas subindo, agudas uma com a outra. O sinal e o inverso entram juntos.",
    passos: [
      "Condição de perpendicularismo: m₁ × m₂ = −1, com nenhuma das retas vertical.",
      "Aqui a inclinação dada é m₁ = 2. Então 2 × m₂ = −1. Essa é a condição de perpendicularismo.",
      "Divisão pelo coeficiente 2, diferente de zero: m₂ = −1/2. Dividir por 2, positivo, conserva a igualdade.",
      "−2 é o oposto, não o oposto do inverso. 1/2 é o inverso sem o sinal, e 2 × (1/2) = 1, não −1.",
    ],
    atalho:
      "Inverta 2 e troque o sinal: 1/2 vira −1/2. O produto 2 × (−1/2) = −1 confirma o ângulo reto. No vetor, (1, 2) é perpendicular a (2, −1), e a inclinação do segundo vetor é −1/2, a resposta.",
  },
  "mat-ga-n2q3": {
    intuicao:
      "A equação (x − 1)² + (y + 2)² = 9 descreve todos os pontos a uma distância fixa de um centro. O centro é o ponto que zera os dois parênteses, porque ali a distância é zero. x − 1 zera em x = 1. y + 2 zera em y = −2, uma unidade que está abaixo do eixo x. O 9 é o quadrado do raio, então o raio é 3, o comprimento do segmento do centro até a curva.",
    motivacao:
      "A forma (x − a)² + (y − b)² = r² lê centro (a, b) e raio r, não r². O sinal dentro do parêntese é o oposto da coordenada: y + 2 = y − (−2) empurra o centro para y = −2. Ler (1, 2) esquece esse sinal, e ler raio 9 esquece a raiz. São os dois erros de quem decora a fórmula olhando os números escritos, sem traduzir o parêntese nem o quadrado.",
    passos: [
      "Forma padrão da circunferência: (x − a)² + (y − b)² = r² tem centro (a, b) e raio r.",
      "Leitura do centro: x − 1 = x − a dá a = 1. y + 2 = y − (−2) dá b = −2. O centro lido é o ponto (1, −2).",
      "Raio: r² = 9 e r > 0, então r = √9 = 3. O raio não é 9, porque a equação guarda r².",
      "Centro (1, −2) e raio 3. (1, 2) seria o centro de (x − 1)² + (y − 2)² = 9, equação diferente.",
    ],
    atalho:
      "O centro é o número que, com sinal trocado, aparece ao lado de x e de y: 1 e −2. O raio é a raiz de 9, que é 3. Um ponto da curva, por exemplo (1, 1), dista |1 − (−2)| = 3 do centro, e o teste fecha.",
  },
  "mat-ga-n2q4": {
    intuicao:
      "y = x + 1 sobe a 45° e corta o eixo y em 1. y = −x + 5 desce a 45° e corta o eixo y em 5. Uma sobe e a outra desce, então se cruzam uma vez. No cruzamento a altura é a mesma, e esse ponto está no meio do caminho horizontal entre os dois interceptos, porque as ladeiras têm o mesmo módulo. O encontro é (2, 3).",
    motivacao:
      "Igualar as duas equações reduzidas resolve o sistema, porque no ponto comum os dois y coincidem. Somar as equações cancela x de uma vez, já que os coeficientes são opostos. Chutar o intercepto de uma delas, como (0, 1) ou (0, 5), dá um ponto de uma reta só. A conferência nas duas equações é o que impede esse chute: o ponto tem de satisfazer as duas alturas ao mesmo tempo.",
    passos: [
      "No cruzamento as ordenadas coincidem: x + 1 = −x + 5. Igualar as reduzidas monta o sistema.",
      "Some x aos dois lados: 2x + 1 = 5. Subtraia 1: 2x = 4. Divisão por 2: x = 2.",
      "Volte na primeira equação reduzida: y = 2 + 1 = 3. O ponto do cruzamento é (2, 3).",
      "Conferência na segunda reta: y = −2 + 5 = 3. As duas alturas coincidem no ponto.",
    ],
    atalho:
      "Some as equações: 2y = 6, então y = 3, e o x cancela. Com y = 3 na primeira, 3 = x + 1 e x = 2. (2, 5) acerta o x e cola o intercepto 5 no lugar da altura do cruzamento, que vale 3 e não o intercepto 5.",
  },
  "mat-ga-n2q5": {
    intuicao:
      "Os vértices (0, 0), (4, 0) e (0, 3) formam um triângulo retângulo encostado nos eixos. A base sobre o eixo x mede 4 e a altura sobre o eixo y mede 3, e os catetos são perpendiculares. A área do triângulo é metade do retângulo 4 por 3 que completa a figura. O retângulo teria área 12, e o triângulo fica com a metade.",
    motivacao:
      "A fórmula (base × altura)/2 vale porque a diagonal parte o retângulo em dois triângulos de mesma área. Esquecer a divisão por 2 responde a área do retângulo, 12. Usar Pitágoras na hipotenusa 5 responde um comprimento, não uma área. A base e a altura precisam ser perpendiculares: aqui os eixos garantem o ângulo reto, então 4 e 3 entram direto, sem projeção.",
    passos: [
      "Base no eixo x, entre os vértices: de (0, 0) a (4, 0), comprimento 4. Essa base fica sobre o eixo horizontal.",
      "Altura perpendicular à base, no eixo y: de (0, 0) a (0, 3), comprimento 3.",
      "Área do triângulo, metade do retângulo: (base × altura)/2 = (4 × 3)/2 = 12/2 = 6.",
      "12 seria o retângulo inteiro. 5 seria a hipotenusa √(16 + 9). 7 seria a soma dos catetos.",
    ],
    atalho:
      "Metade de 4 × 3 é 6. O determinante com a origem dá o mesmo valor: o valor absoluto de (4 × 3 − 0 × 0)/2 = 6. Se a conta não dividiu por 2, o número é a área do retângulo, não a do triângulo.",
  },
  "mat-ga-n3q1": {
    intuicao:
      "A reta 3x + 4y − 10 = 0 corta os eixos e deixa a origem de um lado. A distância pedida é o comprimento do perpendicular baixado da origem até a reta, não a distância ao longo de um eixo até o intercepto. O intercepto x é 10/3 e o intercepto y é 10/4 = 2,5, ambos maiores que o atalho perpendicular. A fórmula comprime os coeficientes 3 e 4, que formam um cateto de hipotenusa 5, e a distância sai 2.",
    motivacao:
      "A distância do ponto (x₀, y₀) à reta ax + by + c = 0 é |ax₀ + by₀ + c| / √(a² + b²). O numerador mede o quanto a origem falha a equação, e o denominador normaliza o vetor (a, b), que é perpendicular à reta. Dividir só por a, ou só por 5 sem o módulo organizado, troca a escala. Usar 10/3 lê o intercepto horizontal. O valor absoluto garante distância positiva dos dois lados da reta.",
    passos: [
      "Distância ponto-reta: de (x₀, y₀) a ax + by + c = 0 vale |ax₀ + by₀ + c| / √(a² + b²).",
      "Coeficientes da reta: a = 3, b = 4, c = −10, e o ponto é a origem (0, 0).",
      "Numerador: |3 × 0 + 4 × 0 − 10| = 10. Denominador: √(9 + 16) = √25 = 5.",
      "Divisão pelo módulo do normal: 10/5 = 2. A distância da origem à reta é 2.",
    ],
    atalho:
      "O vetor normal (3, 4) tem comprimento 5, e a reta escrita como 3x + 4y = 10 fica, dividida por 5, a uma constante 2 da origem. Essa constante, na equação normal, é a distância. 10/3 ≈ 3,3 é onde a reta fura o eixo x, um caminho oblíquo maior que 2.",
  },
  "mat-ga-n3q2": {
    intuicao:
      "A derrota de (0, 0) a (6, 8) é uma reta no mapa, com o leste em x e o norte em y, na direção do triângulo 6-8-10, que reduz a 3-4-5. O escolho em (3, 0) está sobre o eixo leste, fora dessa reta. A distância pedida é a perpendicular do escolho até a derrota, mais curta do que as 3 milhas que o separam da origem ao longo do eixo. Essa perpendicular mede 12/5, isto é, 2,4.",
    motivacao:
      "Primeiro sai a equação da reta, reduzida ou na forma geral, e só depois a distância ponto-reta. A inclinação 8/6 = 4/3 dá y = (4/3)x, ou 4x − 3y = 0, que passa na origem e em (6, 8). Responder 3 mede a distância do escolho à origem, outro segmento. A fórmula divide pelo comprimento do normal (4, −3), que é 5, e por isso 12 vira 12/5, não 12 nem 3.",
    passos: [
      "Inclinação da derrota: m = (8 − 0)/(6 − 0) = 8/6 = 4/3. Equação pela origem: y = (4/3)x, ou 4x − 3y = 0.",
      "Conferência do segundo ponto: 4 × 6 − 3 × 8 = 24 − 24 = 0. A reta está certa.",
      "Distância ponto-reta de (3, 0) a 4x − 3y + 0 = 0: |4 × 3 − 3 × 0| / √(16 + 9) = 12/√25.",
      "12/5 é a distância. 3 é a distância do escolho à origem, ao longo do eixo, não até a derrota.",
    ],
    atalho:
      "A área do triângulo (0, 0), (6, 8) e (3, 0), pelo determinante, vale 12. A base da derrota mede 10, então a altura relativa ao escolho é 2 × 12 / 10 = 2,4, que é 12/5, menor que as 3 milhas do escolho até a origem.",
  },
  "mat-ga-n3q3": {
    intuicao:
      "x² + y² − 4x + 6y − 12 = 0 é uma circunferência escrita expandida, com o centro escondido nos termos lineares. Completar o quadrado junta x² − 4x num quadrado e y² + 6y noutro, e o que sobra no lado direito é r². O centro aparece com o sinal oposto à metade do coeficiente linear: x vai para 2 e y vai para baixo, porque o termo em y é positivo. O raio que fecha a conta é 5.",
    motivacao:
      "A forma geral x² + y² + Dx + Ey + F = 0 vira (x + D/2)² + (y + E/2)² = r² depois de completar quadrados. Ler o centro como (4, −6), os coeficientes crus, esquece de dividir por 2 e de trocar o papel do sinal. Ler o raio como 25 esquece a raiz de r². O sinal de 6y é o detalhe que empurra o centro para y = −3 e não para y = 3. Completar o quadrado torna esse sinal visível.",
    passos: [
      "Separe os quadrados e passe a constante: (x² − 4x) + (y² + 6y) = 12. O termo −12 trocou de lado com sinal positivo.",
      "Quadrados: (x − 2)² − 4 + (y + 3)² − 9 = 12. Metade de −4 é −2, metade de 6 é 3.",
      "Passe as constantes para o segundo membro: (x − 2)² + (y + 3)² = 12 + 4 + 9 = 25.",
      "Centro (2, −3) e raio √25 = 5. y + 3 = y − (−3) fixa a ordenada negativa.",
    ],
    atalho:
      "Metade dos coeficientes lineares, com sinal trocado: −(−4)/2 = 2 e −6/2 = −3. O centro é (2, −3). O raio é √(2² + (−3)² − (−12)) = √(4 + 9 + 12) = √25 = 5, a fórmula r = √(a² + b² − F) na equação x² + y² − 2ax − 2by + F = 0.",
  },
  "mat-ga-n3q4": {
    intuicao:
      "As duas retas se cruzam em algum ponto do plano e formam um ângulo. Para saber se esse ângulo é reto, leem-se as ladeiras na equação reduzida. A primeira sobe 2 para cada 1 e a segunda desce 1 para cada 2, uma íngreme e a outra deitada no sentido oposto, o desenho típico do ângulo reto. O produto das ladeiras fecha em −1.",
    motivacao:
      "Paralelas teriam a mesma inclinação, e coincidentes teriam a mesma equação. Aqui os coeficientes (2, −1) e (1, 2) não são proporcionais, então as retas se cruzam e não são a mesma. O teste de perpendicular é o produto das inclinações igual a −1, equivalente ao produto interno dos normais: (2, −1) · (1, 2) = 0. Decorar que coeficientes trocados sempre geram paralelas erra o sinal. A troca com o sinal certo é justamente a perpendicular.",
    passos: [
      "Equação reduzida da primeira reta: y = 2x + 1, então a inclinação é m₁ = 2.",
      "Equação reduzida da segunda: x + 2y − 3 = 0 dá 2y = −x + 3 e y = −(1/2)x + 3/2, então m₂ = −1/2.",
      "Produto das inclinações: 2 × (−1/2) = −1. As retas são perpendiculares.",
      "Não são paralelas, porque 2 ≠ −1/2. Não são verticais, porque ambas têm coeficiente de y diferente de zero.",
    ],
    atalho:
      "Os normais (2, −1) e (1, 2) têm produto interno 2 × 1 + (−1) × 2 = 0, então os normais são perpendiculares e as retas também são. O cruzamento existe e o ângulo é reto, sem achar o ponto.",
  },
  "mat-ga-n3q5": {
    intuicao:
      "A reta y = x + 1 corta o eixo y em (0, 1) e não passa pela origem. O ponto da reta mais perto da origem é o pé da perpendicular baixada da origem até a reta. Essa perpendicular desce a 45°, porque a reta sobe a 45°, e o lugar dos pontos a 45° da origem no sentido oposto é y = −x. O encontro das duas retas é o pé, no segundo quadrante, em (−1/2, 1/2), ou (−0,5, 0,5).",
    motivacao:
      "A menor distância é o segmento perpendicular, então a equação reduzida da perpendicular, y = −x, entra no sistema com y = x + 1. Escolher o intercepto (0, 1) pega um ponto da reta, mas a origem enxerga esse ponto numa diagonal, não em ângulo reto. A distância da origem a (0, 1) é 1, enquanto a distância ao pé é √(1/4 + 1/4) = √(1/2), menor que 1. O ponto (0, 0) nem pertence à reta, porque 0 ≠ 1.",
    passos: [
      "Equação reduzida: y = x + 1 tem inclinação 1. A perpendicular tem inclinação −1.",
      "Perpendicular pela origem, na forma ponto-inclinação: y − 0 = −1(x − 0), isto é, y = −x.",
      "Pé da perpendicular: −x = x + 1, então 2x = −1 e x = −1/2. Daí y = −(−1/2) = 1/2.",
      "O ponto é (−1/2, 1/2). (0, 1) está na reta, pois 1 = 0 + 1, mas o vetor da origem até ele é (0, 1), cujo produto interno com a direção (1, 1) da reta é 1, não zero.",
    ],
    atalho:
      "Distância ponto-reta da origem a x − y + 1 = 0: |1| / √(1 + 1) = 1/√2. O ponto (−1/2, 1/2) dista √(1/4 + 1/4) = √(1/2) = 1/√2, a mesma distância, então é o pé. (0, 1) dista 1, que é maior.",
  },
};
