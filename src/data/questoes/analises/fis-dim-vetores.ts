import type { AnaliseQuestao } from "../../lessons.ts";

export const ANALISES: Record<string, AnaliseQuestao> = {
  "fis-dv-n1q1": {
    intuicao:
      "250 g é uma massa pequena perto de um quilograma. O prefixo quilo significa mil, então um quilograma é uma pilha de mil gramas. 250 é um quarto dessa pilha. A pergunta troca a unidade e conserva a massa, sem inventar outro número físico.",
    motivacao:
      "Converter é multiplicar por uma fração que vale 1, escrita com unidades diferentes. 1 kg = 1.000 g, então dividir por 1.000 troca g por kg. Multiplicar por 1.000 faria o caminho inverso e produziria os milhares que aparecem nas alternativas erradas. A fração unitária é o motivo de a conta ser uma divisão, e não uma nova medida.",
    passos: [
      "Definição do prefixo: 1 kg = 10³ g = 1.000 g.",
      "Fração de conversão que vale 1: (1 kg)/(1.000 g). Multiplicar por ela não muda a massa.",
      "250 g × (1 kg / 1.000 g) = 250/1.000 kg = 0,25 kg. As gramas se cancelam.",
      "0,25 é 1/4, porque 250/1.000 = 1/4. 2,5 kg seria 2.500 g, dez vezes maior.",
    ],
    atalho:
      "Ande a vírgula três casas porque o quilo puxa três zeros. 250 g vira 0,250 kg, que é 0,25 kg. Três casas para o lado errado dariam 250.000 g escritos como se fossem quilogramas. A vírgula anda na direção da unidade maior.",
  },
  "fis-dv-n1q2": {
    intuicao:
      "72 km/h é uma velocidade de estrada. Em um segundo, o carro não anda 72 metros: anda um pedaço pequeno dessa hora. A hora tem 3.600 segundos e o quilômetro tem 1.000 metros, então a mesma velocidade, escrita em m/s, fica menor que 72. A pergunta troca as duas unidades ao mesmo tempo.",
    motivacao:
      "O fator 3,6 não é mágica. Ele é 3.600/1.000, o quociente entre os segundos de uma hora e os metros de um quilômetro. Dividir km/h por 3,6 leva a m/s porque o número de metros é mil vezes o de quilômetros, e o intervalo de um segundo é 3.600 vezes menor que uma hora. Multiplicar por 3,6 faz a volta, de m/s para km/h.",
    passos: [
      "1 km = 1.000 m e 1 h = 3.600 s.",
      "72 km/h = 72 × (1.000 m) / (3.600 s) = 72.000/3.600 m/s.",
      "Simplifique 72/3,6, porque 72.000/3.600 = 72/3,6. 3,6 × 20 = 72, logo o quociente é 20.",
      "72 km/h = 20 m/s. 72 × 3,6 ≈ 259 faria o sentido contrário da conversão.",
    ],
    atalho:
      "Decorar o sentido com um marco: 36 km/h = 10 m/s. 72 é o dobro de 36, então são 20 m/s. Se a conta passar de 72, o fator foi aplicado no sentido errado.",
  },
  "fis-dv-n1q3": {
    intuicao:
      "0,045 é quatro centésimos e cinco milésimos. Os zeros à esquerda do 4 só empurram a vírgula para mostrar que o número é menor que 1. Eles não vieram de uma medição. Os algarismos que a medida realmente cravou são o 4 e o 5. A pergunta conta esses algarismos, não todas as teclas escritas.",
    motivacao:
      "A regra dos significativos separa zero que localiza a vírgula de zero que foi medido. Sem essa separação, 0,045 e 45 × 10⁻³ pareceriam ter precisões diferentes, embora sejam o mesmo número. Contar só 4 e 5 torna a precisão independente da unidade escolhida.",
    passos: [
      "Zeros à esquerda da primeira cifra não nula não são significativos. Em 0,045, os dois zeros estão nesse papel.",
      "A primeira cifra não nula é 4. A partir dela, contam-se todas as cifras até o fim: 4 e 5.",
      "São dois algarismos significativos.",
      "Em notação científica o mesmo número é 4,5 × 10⁻², e 4,5 mostra os dois significativos sem os zeros de posição.",
    ],
    atalho:
      "Escreva 4,5 × 10⁻². O que fica antes da potência de 10 é a parte significativa. Dois dígitos, dois significativos. 0,0450, com um zero à direita, já teria três, porque esse zero estaria depois do 5 e seria medido.",
  },
  "fis-dv-n1q4": {
    intuicao:
      "Temperatura, massa, tempo e energia ficam descritas por um número e uma unidade. Uma força de 10 N para a esquerda não é a mesma situação física que 10 N para a direita: o navio vai para lados opostos. Força pede intensidade, direção e sentido. Essa é a cara de grandeza vetorial.",
    motivacao:
      "A classificação não depende da unidade, e sim de a soma fazer sentido como soma de números ou como soma de setas. Duas massas de 2 kg sempre dão 4 kg. Duas forças de 2 N podem dar 4 N, zero ou qualquer valor no meio, conforme o ângulo. Por isso força não cabe na lista das escalares, e as outras quatro cabem.",
    passos: [
      "Escalar: fica determinada por um número real e uma unidade. Temperatura, massa, tempo e energia, nesta lista, são escalares.",
      "Vetorial: exige módulo, direção e sentido. A força é o exemplo clássico, junto com velocidade, aceleração e quantidade de movimento.",
      "Teste da soma: 10 N para leste mais 10 N para oeste dá o vetor nulo, não 20 N. A soma dos módulos perderia a física.",
      "A grandeza vetorial da lista é a força.",
    ],
    atalho:
      "Pergunte se faz sentido dizer “no sentido norte”. Temperatura norte, massa norte e energia norte não existem. Força para o norte existe. A única alternativa que aceita um sentido é a força.",
  },
  "fis-dv-n1q5": {
    intuicao:
      "Ordem de grandeza é a potência de 10 mais próxima, uma etiqueta grosseira do tamanho do número. 4,7 × 10³ = 4.700 está entre 1.000 e 10.000. A pergunta é de qual dessas duas potências ele está mais perto, em escala multiplicativa, não se o coeficiente escrito é 4,7.",
    motivacao:
      "“Mais perto” em escala de potências de 10 se decide no meio geométrico, não na média aritmética. O meio entre 10ⁿ e 10ⁿ⁺¹ é 10ⁿ × √10. √10 ≈ 3,16. Se o coeficiente, já escrito entre 1 e 10, passa de 3,16, a potência de cima representa melhor o tamanho. Essa é a razão de não deixar a ordem em 10³ só porque o expoente escrito é 3.",
    passos: [
      "Escreva o número com coeficiente entre 1 e 10: 4,7 × 10³ já está nessa forma.",
      "Compare o coeficiente com √10 ≈ 3,16, o meio geométrico entre 1 e 10.",
      "4,7 > 3,16, então 4,7 × 10³ está mais perto de 10 × 10³ = 10⁴ do que de 10³.",
      "A ordem de grandeza é 10⁴. 4.700 contra 1.000 é um fator 4,7; contra 10.000 é um fator de cerca de 2,1. O segundo fator é menor.",
    ],
    atalho:
      "Se a primeira cifra significativa, com a vírgula depois dela, for maior que 3,16, suba um expoente. 4,7 sobe. 2,2 × 10³ ficaria em 10³. A regra evita recalcular √10 a cada questão.",
  },
  "fis-dv-n2q1": {
    intuicao:
      "Velocidade mede quanto o espaço muda por unidade de tempo. Aceleração mede quanto a velocidade muda por unidade de tempo. Multiplicar aceleração por tempo devolve uma variação de velocidade. Dividir aceleração por tempo desce mais um degrau e não chega em velocidade. A pergunta é qual combinação tem a mesma “cara” dimensional da velocidade.",
    motivacao:
      "Análise dimensional compara a fórmula com a grandeza pedida antes de usar números. Se as dimensões não fecham, a expressão não pode ser uma velocidade, qualquer que seja o valor. Velocidade é L/T e aceleração é L/T². Procurar a combinação que cancela um T do denominador é o motivo de testar o produto at, que é exatamente o termo da equação v = v₀ + at.",
    passos: [
      "Dimensão de velocidade: [v] = L/T. Dimensão de aceleração: [a] = L/T². Tempo: [t] = T.",
      "Produto at: (L/T²) × T = L/T. A multiplicação soma os expoentes de cada grandeza de base. Um T cancela.",
      "a/t: (L/T²)/T = L/T³, que é taxa de variação da aceleração, não velocidade.",
      "a t²: (L/T²) × T² = L, um comprimento. t/a tem dimensão T²/L. a² t também não é L/T.",
      "A única expressão com dimensão de velocidade é at.",
    ],
    atalho:
      "Na fórmula v = v₀ + at, o termo at é somado a uma velocidade. Só se soma o que tem a mesma dimensão. at já é velocidade por construção. Os outros termos da lista não apareceriam nesse lugar da fórmula.",
  },
  "fis-dv-n2q2": {
    intuicao:
      "O nó é a velocidade de uma milha náutica por hora, a unidade do navio. 10 nós não são 10 m/s nem 10 km/h. Primeiro traduza a milha para metro e a hora para segundo. 1.852 m em uma hora é um passo modesto por segundo, perto de 0,5 m/s. Dez vezes isso fica em torno de 5 m/s, não de 18 m/s.",
    motivacao:
      "A definição 1 nó = 1 milha náutica por hora evita tratar o nó como distância. A milha dada, 1.852 m, entra como fator de conversão. Dividir por 3.600 troca a hora por segundo. 18,5 m/s seria o erro de transformar 18.520 m/h em 18,5 m/s, pulando o fator mil dos metros ou o 3.600 dos segundos.",
    passos: [
      "Definição: 1 nó = 1.852 m/h. Então 10 nós = 18.520 m/h.",
      "1 h = 3.600 s, então divida por 3.600 para obter m/s.",
      "18.520 / 3.600 = 5,144… m/s, que se aproxima de 5,1 m/s.",
      "Conferência: 1.852 / 3.600 ≈ 0,514 m/s por nó. 10 × 0,514 = 5,14 m/s.",
    ],
    atalho:
      "Um nó é praticamente meio metro por segundo. Dez nós são praticamente 5 m/s. Entre as alternativas, 5,1 m/s é a única nessa vizinhança. 18,5 m/s seria dez nós confundidos com 18,5 km/h convertidos no sentido errado.",
  },
  "fis-dv-n2q3": {
    intuicao:
      "O navio anda 3 km para leste e 4 km para o norte. O caminho percorrido é 7 km, a soma dos trechos. O deslocamento é a seta única que liga a saída à chegada, a hipotenusa de um triângulo retângulo. Essa seta é mais curta que o caminho, porque o segundo trecho não continua na mesma direção.",
    motivacao:
      "Deslocamentos perpendiculares não se somam como números. A regra do paralelogramo, num ângulo de 90°, vira Pitágoras, porque as componentes ortogonais não compartilham direção. Somar 3 + 4 responderia a distância percorrida, que o enunciado não pediu. O módulo do vetor resultante é a grandeza pedida.",
    passos: [
      "Os trechos são perpendiculares: leste e norte formam 90°.",
      "Módulo da soma de vetores perpendiculares: √(3² + 4²), pelo teorema de Pitágoras.",
      "3² = 9 e 4² = 16. A soma é 25, e √25 = 5, a raiz não negativa de um quadrado perfeito.",
      "O deslocamento mede 5 km. 7 km é a distância escalar percorrida, 3 + 4.",
    ],
    atalho:
      "3-4-5 é o triângulo retângulo inteiro mais famoso. Viu 3 e 4 perpendiculares, o módulo é 5, sem extrair a raiz na hora da prova. 1 km seria uma diferença, válida só para sentidos opostos.",
  },
  "fis-dv-n2q4": {
    intuicao:
      "Duas forças perpendiculares puxam um corpo para lados que formam um canto reto. A resultante não é 14 N, que seria as duas no mesmo sentido, nem 2 N, que seria uma contra a outra. Ela é a diagonal do retângulo de lados 6 N e 8 N. O desenho é o mesmo do deslocamento 3-4-5, só que em newtons e com os catetos dobrados.",
    motivacao:
      "A soma vetorial depende do ângulo. Em 90°, o termo 2 F₁ F₂ cos θ da lei dos cossenos zera, porque cos 90° = 0, e sobra Pitágoras. Esse é o motivo de não usar a soma nem a diferença dos módulos. A lei dos cossenos explica por que o ângulo reto é o caso simples.",
    passos: [
      "Ângulo de 90°: R² = 6² + 8² + 2 × 6 × 8 × cos 90°. E cos 90° = 0, então o termo cruzado some.",
      "R² = 36 + 64 = 100.",
      "R = √100 = 10 N, o módulo não negativo.",
      "14 N seria θ = 0°, sentidos iguais. 2 N seria θ = 180°, sentidos opostos.",
    ],
    atalho:
      "6-8-10 é o triângulo 3-4-5 multiplicado por 2. A resultante mede 10 N. Reconhecer o múltiplo dispensa a soma dos quadrados.",
  },
  "fis-dv-n2q5": {
    intuicao:
      "O corpo sai do repouso, então a velocidade inicial é zero. Durante 4 s uma aceleração constante de 2,5 m/s² acrescenta 2,5 metros por segundo a cada segundo. Quatro desses acréscimos dão a velocidade final. A pergunta é essa velocidade, não a distância percorrida.",
    motivacao:
      "v = v₀ + at é a definição de aceleração constante integrada no tempo: a variação da velocidade é a taxa vezes o tempo. Com v₀ = 0, sobra v = at. A análise dimensional confirma a multiplicação: (m/s²) × s = m/s. Dividir a por t produziria m/s³ e não seria uma velocidade.",
    passos: [
      "Repouso: v₀ = 0. Aceleração constante: v = v₀ + a t.",
      "Substituição: v = 0 + 2,5 × 4.",
      "Produto: 2,5 × 4 = 10. A unidade é (m/s²) × s = m/s.",
      "v = 10 m/s. 40 m seria (1/2) a t², uma distância, grandeza diferente.",
    ],
    atalho:
      "2,5 m/s a cada segundo, quatro segundos: conte 2,5; 5; 7,5; 10. A velocidade final é 10 m/s. A dimensão m/s na alternativa já separa essa resposta de uma distância em metros.",
  },
  "fis-dv-n3q1": {
    intuicao:
      "O navio anda para o norte em relação à água, e a água anda para o leste em relação à terra. Quem está na margem vê as duas setas ao mesmo tempo. A seta da margem é a diagonal, não a soma 14 nem a diferença 2. Norte e leste formam um canto reto no mapa.",
    motivacao:
      "A composição de velocidades de Galileu soma vetores: velocidade do navio em relação à terra é igual à velocidade do navio em relação à água mais a velocidade da água em relação à terra. O motivo da soma vetorial, e não numérica, é que as direções são diferentes. Com 90° entre elas, o módulo volta a ser Pitágoras.",
    passos: [
      "Referenciais: v_terra = v_água + v_correnteza, soma vetorial.",
      "Norte e leste são perpendiculares. Módulo: √(8² + 6²).",
      "8² = 64 e 6² = 36. A soma é 100, e √100 = 10.",
      "A velocidade em relação à terra tem módulo 10 m/s. 14 m/s somaria módulos como se as setas fossem paralelas.",
    ],
    atalho:
      "6-8-10 de novo, agora com os catetos trocados em relação à força de 6 N e 8 N. Perpendiculares famosos: o módulo é 10. A direção fica a arco tangente de 6/8 a leste do norte, mas a pergunta só pediu o módulo.",
  },
  "fis-dv-n3q2": {
    intuicao:
      "Uma distância é um comprimento. Cada expressão mistura aceleração, velocidade, tempo e, numa delas, uma distância que já é comprimento. A pergunta pede a intrusa, a combinação que não tem dimensão de comprimento. Dá para descobrir isso sem saber qual fórmula cinemática cada item imita.",
    motivacao:
      "Homogeneidade dimensional é um filtro: os dois lados de uma fórmula física, e cada alternativa que pretende ser distância, precisam ter dimensão L. Testar uma a uma é mais seguro do que reconhecer v t, a t² e v²/a como fórmulas decoradas. O item que sobrar com dimensão de velocidade é o que não pode ser distância.",
    passos: [
      "Comprimento tem dimensão L. [v] = L/T, [a] = L/T², [t] = T e [s] = L. O fator 1/2 é número puro, dimensão 1.",
      "v t: (L/T) × T = L. Pode ser distância.",
      "a t²: (L/T²) × T² = L. Pode ser distância. (1/2) a t² tem a mesma dimensão, porque 1/2 não altera.",
      "v²/a: (L²/T²) / (L/T²) = L. A divisão subtrai expoentes. Pode ser distância.",
      "a t: (L/T²) × T = L/T, que é velocidade. Esta expressão não pode representar uma distância.",
    ],
    atalho:
      "at é o termo que se soma a uma velocidade em v = v₀ + at. Se ele já é velocidade, não é distância. As outras quatro são os termos clássicos de Δs no MU e no MUV, todas com unidade de metro quando os dados estão no SI.",
  },
  "fis-dv-n3q3": {
    intuicao:
      "2,50 sugere uma medida cravada até o centésimo. 3,2 só foi cravada até o décimo. O produto não pode ficar mais preciso do que a pior das duas medidas. A conta crua dá 8,00, mas escrever três significativos inventaria uma precisão que o 3,2 não tem. A resposta acompanha o fator mais pobre.",
    motivacao:
      "Na multiplicação e na divisão, o número de significativos do resultado é o menor número de significativos dos fatores. A regra existe porque o erro relativo se propaga, e o fator com menos cifras domina a incerteza. 2,50 tem três significativos, pois o zero à direita da vírgula conta. 3,2 tem dois. O produto fica com dois.",
    passos: [
      "Conte os significativos: 2,50 tem três, porque zeros à direita depois da vírgula são significativos. 3,2 tem dois.",
      "Regra do produto: o resultado fica com a menor dessas contagens, dois significativos.",
      "Conta crua: 2,50 × 3,2 = 8,00.",
      "Com dois significativos, 8,00 se escreve 8,0. O zero de 8,0 é o segundo significativo e marca a casa do décimo.",
      "Escrever 8 deixaria a precisão ambígua. 8,00 afirmaria três significativos que 3,2 não sustenta.",
    ],
    atalho:
      "O fator 3,2 tem dois dígitos úteis. A resposta também tem dois: 8,0. Multiplique só 2,5 × 3,2 = 8,0 e não acrescente zeros além da casa que 3,2 enxerga.",
  },
  "fis-dv-n3q4": {
    intuicao:
      "Um vetor de módulo 10 inclinado a 60° com o eixo x é a hipotenusa de um triângulo. A sombra dele sobre o eixo x é o cateto adjacente. A sombra sobre o eixo y é o cateto oposto. A pergunta pede a sombra horizontal, não a vertical e não o módulo inteiro.",
    motivacao:
      "A decomposição usa cosseno no cateto adjacente e seno no oposto porque essa é a definição no triângulo retângulo: cos θ = adjacente/hipotenusa. O ângulo dado é com o eixo x, então o adjacente é x e o fator é cos 60°, não sen 60°. Trocar seno e cosseno entrega a componente y, que está entre as alternativas de propósito.",
    passos: [
      "Componente adjacente: vₓ = v cos θ, com θ medido a partir do eixo x positivo.",
      "vₓ = 10 × cos 60°.",
      "Valor notável: cos 60° = 1/2. Então vₓ = 10 × 1/2 = 5.",
      "A componente oposta seria vᵧ = 10 × sen 60° = 10 × √3/2 = 5√3, que não foi pedida.",
    ],
    atalho:
      "60° está mais perto do eixo y do que do eixo x? Não: 60° com o eixo x deixa a seta mais em pé do que deitada, então a componente x é a menor, 5, e a y é a maior, 5√3 ≈ 8,66. Se a alternativa grande apareceu, ela é a vertical. A horizontal é 5.",
  },
  "fis-dv-n3q5": {
    intuicao:
      "90 km/h é a velocidade de uma via rápida. Em metros por segundo ela fica bem menor que 90, porque a hora esconde 3.600 segundos. O número esperado está na casa das dezenas baixas de m/s. 324 m/s seria supersônico e absurdo para 90 km/h.",
    motivacao:
      "O mesmo fator 3,6 da conversão anterior continua valendo, porque ele vem das definições de hora e de quilômetro, não do número 72. Dividir por 3,6 é o sentido km/h → m/s. A estimativa “um quarto, mais ou menos” evita aplicar o fator ao contrário: 90/4 = 22,5 já fica perto de 25, enquanto 90 × 3,6 dispara para centenas.",
    passos: [
      "Fator: 1 km/h = (1.000/3.600) m/s = (1/3,6) m/s.",
      "Divisão: 90 / 3,6. 3,6 × 25 = 90, então o quociente é 25.",
      "90 km/h = 25 m/s.",
      "90 × 3,6 = 324 seria a conversão no sentido m/s → km/h, aplicada a um número que já estava em km/h.",
    ],
    atalho:
      "36 km/h = 10 m/s, então 90 km/h = 2,5 × 36 km/h = 25 m/s. Ou ainda: 25 m em um segundo são 90.000 m em 3.600 s, isto é, 90 km em uma hora. A ordem de grandeza fecha nos dois sentidos.",
  },
};
