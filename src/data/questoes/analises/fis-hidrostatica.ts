import type { AnaliseQuestao } from "../../lessons.ts";

export const ANALISES: Record<string, AnaliseQuestao> = {
  "fis-hd-n1q1": {
    intuicao:
      "A força de 200 N chega perpendicular a uma tampa cuja área mede 0,4 m², menor que um metro quadrado inteiro. A pressão pergunta quantos newtons cabem em cada metro quadrado, então o número em pascal fica maior do que 200. O desenho é a seta da força atravessando o retângulo da área, e essa imagem vem antes da divisão. A unidade que a divisão entrega é o pascal, isto é, o newton por metro quadrado.",
    motivacao:
      "A definição de pressão, p = F/A, vale justamente quando a força é perpendicular à superfície, como o enunciado garante. Dividir pela área responde a pergunta. Multiplicar 200 por 0,4 produz 80, um produto cuja unidade é N·m² e não pascal. Esse produto descreve outra combinação das mesmas grandezas, e por isso não pode ser a pressão pedida.",
    passos: [
      "Definição de pressão, com a força perpendicular à superfície: p = F/A, F = 200 N e A = 0,4 m².",
      "A divisão da definição dá 200 / 0,4. Como 0,4 × 500 = 200, o quociente é 500.",
      "No SI, a definição de pressão entrega N/m², que recebe o nome de pascal, então p = 500 Pa.",
      "Pela mesma definição, 200 × 0,4 = 80 teria unidade N·m², e 0,4 Pa apenas repetiria a área. Nenhum dos dois é p = F/A.",
    ],
    atalho:
      "A área 0,4 m² é 2/5 de metro quadrado, e dividir por 2/5 é multiplicar por 5/2. 200 × 5/2 = 500. A análise dimensional fecha em N/m², que é o pascal, e a ordem de grandeza fica nas centenas, longe de 0,4 Pa.",
  },
  "fis-hd-n1q2": {
    intuicao:
      "Dois pontos estão na mesma profundidade de um líquido parado, como duas marcas na mesma cota de uma coluna de líquido. A coluna que pesa acima de cada marca tem a mesma altura, então o líquido empurra os dois com a mesma intensidade. O copo pode ser largo ou estreito sem mudar essa altura. O desenho da cota horizontal vem antes da fórmula do desnível.",
    motivacao:
      "A lei de Stevin escreve a diferença de pressão só com a densidade, com g e com o desnível vertical. Desnível nulo zera a diferença, mesmo em vasos comunicantes de formatos diferentes. Somar pressões na razão das áreas do fundo trata a pressão como se fosse o peso dividido pela área do recipiente, conta que muda quando o vaso muda de forma. Na lei de Stevin o formato não entra, e esse caminho erra o paradoxo hidrostático.",
    passos: [
      "Lei de Stevin: a diferença de pressão no mesmo líquido em repouso é Δp = ρ g h, em que h é o desnível vertical.",
      "Mesma profundidade significa h = 0 m. Então Δp = ρ g × 0 = 0 Pa, e as pressões são iguais.",
      "O formato do vaso não aparece na lei de Stevin. Um tubo fino e um tanque largo, ligados, compartilham a pressão na mesma cota.",
      "Exemplo na água, ρ = 1,0 × 10³ kg/m³ e g = 10 m/s²: em h = 0 m, Δp = 0 Pa. Uma coluna de 0,5 m, essa sim, daria 5,0 × 10³ Pa de diferença.",
    ],
    atalho:
      "O caso limite h = 0 m da lei de Stevin é Δp = 0 Pa, qualquer que seja ρ. Se o vaso alarga e o nível não muda, h continua o mesmo e a pressão naquela cota não muda. A área do fundo só entraria se a pergunta fosse força, F = p A.",
  },
  "fis-hd-n1q3": {
    intuicao:
      "Um líquido está preso num recipiente, e um êmbolo aplica um acréscimo de pressão numa região. O líquido, quase incompressível e já em equilíbrio, não guarda esse acréscimo só debaixo do êmbolo. O aumento aparece nos manômetros de todos os pontos, somado à pressão que a profundidade já impunha. O desenho é o êmbolo e o líquido confinado, antes da frase de Pascal.",
    motivacao:
      "O princípio de Pascal afirma que o acréscimo de pressão aplicado a um líquido confinado se transmite integralmente a todos os pontos. É o que iguala as pressões dos dois êmbolos de uma prensa, com forças na razão das áreas. Achar que o acréscimo diminui com a profundidade mistura Pascal com Stevin: Stevin descreve a pressão absoluta crescendo com a coluna, e o acréscimo de Pascal entra igual em toda parte. Sem essa separação, a prensa não fecharia a conta.",
    passos: [
      "Princípio de Pascal: um acréscimo Δp aplicado a um líquido confinado chega inteiro a todos os pontos.",
      "Numa prensa, a mesma pressão nos dois êmbolos se escreve F₁/A₁ = F₂/A₂.",
      "Exemplo: Δp = 1,0 × 10⁵ Pa, A₁ = 2,0 × 10⁻⁴ m² e A₂ = 2,0 × 10⁻³ m² dão F₁ = 20 N e F₂ = 200 N, a mesma pressão nas duas faces.",
      "O acréscimo não fica local, não cai com a profundidade e não depende só da massa do êmbolo. A alternativa correta é a transmissão a todo o líquido.",
    ],
    atalho:
      "Se as áreas fossem iguais, Pascal obrigaria forças iguais. Quando uma área é dez vezes a outra, a força também é dez vezes, e a pressão lida nos dois lados continua a mesma. Esse limite mostra a transmissão inteira, sem perda ao longo do líquido.",
  },
  "fis-hd-n1q4": {
    intuicao:
      "Um corpo mergulha e abre espaço dentro do fluido. O volume que sai do lugar era ocupado por fluido, e esse fluido tinha peso. O fluido empurra o corpo para cima com uma força do tamanho desse peso, não do tamanho do peso do corpo. O desenho é o volume deslocado, a porção de fluido que cabia ali, antes da frase de Arquimedes.",
    motivacao:
      "O princípio de Arquimedes iguala o empuxo ao peso do fluido deslocado, E = ρ_fluido V_deslocado g. Igualar o empuxo ao peso do corpo só vale no equilíbrio da flutuação, que é uma condição a mais, não a frase do princípio. Trocar o empuxo pelo volume deixa de ser força, e trocá-lo pela pressão atmosférica esquece que a atmosfera atua em volta e o empuxo líquido vem do fluido deslocado. A densidade do corpo entra na decisão de afundar, não na definição do empuxo.",
    passos: [
      "Princípio de Arquimedes: E = peso do fluido deslocado = ρ_fluido V_deslocado g.",
      "O peso do corpo, m g, só iguala E quando há equilíbrio vertical. Não é a definição do empuxo.",
      "Exemplo: 0,0020 m³ de água, com ρ = 1,0 × 10³ kg/m³ e g = 10 m/s², pesam 20 N. O empuxo sobre quem desloca esse volume é 20 N.",
      "Volume, pressão atmosférica e densidade do corpo não têm, sozinhos, a unidade e o papel dessa força. O empuxo é o peso do fluido deslocado.",
    ],
    atalho:
      "Se o volume deslocado tende a zero, Arquimedes dá E = 0 N, mesmo que o corpo seja pesado. Se o mesmo volume mergulha num fluido mais denso, E cresce na proporção dessa densidade. As duas pontas confirmam que entra o fluido deslocado, e não o peso do corpo.",
  },
  "fis-hd-n1q5": {
    intuicao:
      "O corpo está parado na superfície, sem subir e sem afundar. Na vertical há duas forças: o peso para baixo e o empuxo para cima. Parado, com aceleração nula, essas duas setas têm o mesmo tamanho. O desenho é o corpo em parte para fora do líquido, com as duas setas se cancelando, antes de comparar densidades.",
    motivacao:
      "A primeira lei de Newton, ou o equilíbrio de translação, exige resultante nula. Na vertical isso iguala os módulos do empuxo e do peso. Empuxo maior aceleraria o corpo para cima, e empuxo menor o faria descer: nenhum dos dois é o equilíbrio descrito. Se um corpo maciço e homogêneo tivesse densidade maior que a do líquido, o empuxo na imersão total ainda seria menor que o peso, e ele não ficaria flutuando na superfície.",
    passos: [
      "Equilíbrio de translação, primeira lei de Newton: a resultante é nula e a aceleração vertical é 0 m/s².",
      "Na vertical, o empuxo aponta para cima e o peso para baixo. Módulos iguais: E = P.",
      "Princípio de Arquimedes no equilíbrio: o peso do fluido deslocado iguala o peso do corpo.",
      "Um corpo maciço homogêneo com densidade maior que a do líquido não flutua. A situação do enunciado é E = P.",
    ],
    atalho:
      "No limite em que a densidade do corpo se aproxima da do líquido, a fração submersa se aproxima de 1 e, ainda assim, E = P. Se alguém empurra o corpo para baixo e solta, ele sobe enquanto E > P e para de acelerar quando os dois módulos se igualam.",
  },
  "fis-hd-n2q1": {
    intuicao:
      "Há uma coluna de água de 3 m acima do ponto, parada. A pressão manométrica é só o acréscimo dessa coluna, acima da atmosfera, e não a pressão absoluta lida contra o vácuo. Três metros de água são uma fração de uma atmosfera, dezenas de milhares de pascals, não centenas. O desenho é a coluna de altura h, antes de multiplicar ρ, g e h.",
    motivacao:
      "A lei de Stevin, na forma manométrica, é p = ρ g h, porque a atmosfera já foi escolhida como zero do manômetro. Somar cerca de 10⁵ Pa responderia a pressão absoluta, que o enunciado não pediu. Esquecer g, ou usar h = 1 m, derruba um fator 10 ou 3 e cai nas alternativas menores. A coluna de 3 m, com os dados dados, fixa a conta em ρ g h.",
    passos: [
      "Lei de Stevin para a pressão manométrica: p = ρ g h, com o zero na atmosfera.",
      "Lei de Stevin com os dados do enunciado: ρ = 1,0 × 10³ kg/m³, g = 10 m/s² e h = 3,0 m.",
      "Pela lei de Stevin, p = 1,0 × 10³ × 10 × 3 = 3,0 × 10⁴ Pa, isto é, 30.000 Pa.",
      "A pressão absoluta, pela mesma lei mais a atmosfera, seria cerca de 1,3 × 10⁵ Pa. Não foi o que se pediu. 3,0 × 10³ Pa esqueceria um fator 10.",
    ],
    atalho:
      "Com estes dados, 10 m de água dão ρ g h = 1,0 × 10⁵ Pa, perto de uma atmosfera. Três metros são 0,3 dessa coluna, logo cerca de 3,0 × 10⁴ Pa. A ordem de grandeza separa 30.000 Pa de 300 Pa e de 3 × 10⁵ Pa.",
  },
  "fis-hd-n2q2": {
    intuicao:
      "O cubo tem aresta 0,1 m, um decímetro, e está todo debaixo da água. O volume que ele tira do lugar é o volume do próprio cubo, um litro. Um litro de água, com g = 10 m/s², pesa cerca de 10 N, e o empuxo tem esse tamanho. O desenho é o cubo imerso e o litro deslocado, antes da fórmula.",
    motivacao:
      "O princípio de Arquimedes pede o peso do fluido deslocado, E = ρ V g, e não a área de uma face. Usar 0,1² = 0,01 m² no lugar do volume 0,1³ = 0,001 m³ multiplica o resultado por dez e entrega 100 N. A aresta entra três vezes porque volume é comprimento ao cubo. A densidade que entra é a da água, não a do material do cubo, que o enunciado nem fornece.",
    passos: [
      "Volume do cubo, todo imerso: V = 0,1³ = 0,001 m³. Esse é o volume deslocado.",
      "Princípio de Arquimedes: E = ρ V g, com ρ = 1,0 × 10³ kg/m³ e g = 10 m/s².",
      "Pelo princípio de Arquimedes, E = 1,0 × 10³ × 0,001 × 10 = 10 N sobre o cubo imerso.",
      "A face 0,1 × 0,1 = 0,01 m² não é volume. Arquimedes com 0,01 m³ daria 100 N, dez vezes o empuxo.",
    ],
    atalho:
      "0,1 m de aresta é 1,0 L, e 1,0 L de água são 1,0 kg. Com g = 10 m/s², esse quilograma pesa 10 N. O empuxo sobre o cubo totalmente imerso é 10 N, sem precisar reescrever a potência de dez.",
  },
  "fis-hd-n2q3": {
    intuicao:
      "No ar, o dinamômetro segura o corpo sozinho e marca o peso, 50 N. Dentro da água, o fluido ajuda para cima e o dinamômetro passa a marcar só o que falta, 35 N. A diferença entre as duas leituras é a ajuda do fluido, o empuxo. O desenho é o corpo pendurado, primeiro no ar e depois imerso, com a seta do empuxo para cima.",
    motivacao:
      "No equilíbrio, a primeira lei de Newton diz que o peso é a soma da tração do dinamômetro com o empuxo. Então E = P − P_aparente. Somar 50 N e 35 N conta o peso duas vezes, uma delas já descontada. Tomar 35 N como empuxo confunde a leitura que sobrou com a força que a água faz. A leitura menor é o peso aparente, não o empuxo.",
    passos: [
      "Equilíbrio no ar: o dinamômetro marca o peso, P = 50 N, porque o empuxo do ar é desprezado.",
      "Equilíbrio imerso, primeira lei de Newton: P = P_aparente + E, com a tração para cima e o empuxo para cima.",
      "Princípio de Arquimedes entra como essa força E. Então E = 50 − 35 = 15 N.",
      "A soma 50 + 35 = 85 N não é uma força do problema. A razão 15/50 também não é o empuxo em newtons.",
    ],
    atalho:
      "Se o dinamômetro lesse 0 N, o empuxo igualaria os 50 N e o corpo ficaria suspenso pelo fluido. Aqui a leitura caiu 15 N, de 50 N para 35 N, e essa queda é o empuxo. A conta é uma subtração de duas leituras de equilíbrio.",
  },
  "fis-hd-n2q4": {
    intuicao:
      "O bloco de madeira fica parado, com uma parte para fora da água. A parte que afunda desloca água, e o peso dessa água iguala o peso do bloco inteiro. Como a madeira é menos densa que a água, não é preciso mergulhar o bloco todo. A fração submersa é a razão das duas densidades, e o desenho da linha de água vem antes da conta.",
    motivacao:
      "No equilíbrio, a primeira lei de Newton iguala peso e empuxo, e Arquimedes escreve o empuxo com o volume submerso. Daí ρ_corpo V = ρ_água V_sub, e a fração é 600/1.000. Calcular (1.000 − 600)/1.000 = 0,4 responde a fração que ficou emersa, a parte de fora, que a pergunta não pediu. Inverter as densidades daria um número maior que 1, impossível para uma fração submersa de quem flutua.",
    passos: [
      "Equilíbrio de translação, primeira lei de Newton: o peso do bloco iguala o empuxo.",
      "Princípio de Arquimedes: ρ_corpo V g = ρ_água V_sub g. O fator g se cancela.",
      "Pelo equilíbrio e por Arquimedes, a fração submersa é V_sub / V = 600 / 1.000 = 0,6.",
      "A fração emersa é 1 − 0,6 = 0,4. A pergunta pediu a parte que fica debaixo da água, 0,6.",
    ],
    atalho:
      "Se a densidade do bloco fosse 1.000 kg/m³, a fração submersa seria 1 e ele ficaria rente à superfície. Se fosse quase 0 kg/m³, quase nada mergulharia. 600 kg/m³ está a 0,6 do caminho entre esses limites, e 0,6 é a fração.",
  },
  "fis-hd-n2q5": {
    intuicao:
      "Dois êmbolos fecham o mesmo líquido, e o maior tem área oito vezes a do menor. Empurrar o menor com 50 N cria uma pressão que o líquido leva inteira até o maior. No êmbolo grande, a mesma pressão sobre uma área maior pede uma força maior. O desenho dos dois êmbolos vem antes da proporção.",
    motivacao:
      "O princípio de Pascal iguala as pressões: F₁/A₁ = F₂/A₂. A força cresce na mesma razão da área, então o fator 8 multiplica 50 N. Dividir 50 por 8 produz 6,25 N e inverte a máquina, como se o êmbolo grande fizesse menos força. A área maior sustenta mais força à mesma pressão. O ganho de força não é energia de graça: o êmbolo pequeno anda mais.",
    passos: [
      "Princípio de Pascal na prensa em equilíbrio: a pressão é a mesma, F₁/A₁ = F₂/A₂.",
      "Pelo princípio de Pascal, a razão dada A₂/A₁ = 8 implica F₂/F₁ = 8 no equilíbrio.",
      "Ainda pelo princípio de Pascal, F₂ = 50 × 8 = 400 N no pistão maior da prensa.",
      "O caminho 50 / 8 = 6,25 N troca a razão das áreas. Pela lei de Pascal, a força maior está no êmbolo de área maior.",
    ],
    atalho:
      "No limite de áreas iguais, Pascal devolve forças iguais, 50 N nos dois. Cada vez que a área dobra, a força dobra. Três duplicações fazem o fator 8, e 50 × 8 = 400. A análise dimensional continua em newtons, porque a razão das áreas é um número puro.",
  },
  "fis-hd-n3q1": {
    intuicao:
      "O navio já flutua e recebe 20 toneladas a mais, sem mudar a área da linha de água. Para continuar parado, ele precisa deslocar um peso de água igual ao peso da carga nova. Esse volume extra, espalhado sobre 50 m², afunda o casco um pouco, bem menos que um metro. O desenho é a faixa nova de água entre o calado antigo e o novo.",
    motivacao:
      "O equilíbrio, pela primeira lei de Newton, iguala o peso da carga ao empuxo adicional, e Arquimedes escreve esse empuxo com ρ, o volume novo e g. A área constante transforma volume em altura: Δh = ΔV / A. Esquecer que a densidade da água é 1.000 kg/m³, ou tratar 20 toneladas como 20 m de calado, erra a ordem de grandeza. O g aparece nos dois pesos e se cancela, então não é preciso atribuir um valor a ele.",
    passos: [
      "Uma tonelada são 1.000 kg, então a carga nova tem massa m = 20 × 1.000 = 20.000 kg.",
      "Equilíbrio e Arquimedes: m g = ρ ΔV g. O g se cancela e ΔV = m / ρ = 20.000 / 1.000 = 20 m³.",
      "Com a área da linha de água constante, Arquimedes dá Δh = ΔV / A = 20 / 50 = 0,4 m.",
      "20 m seria usar o volume como se fosse altura. 0,4 m é a subida do calado pedida.",
    ],
    atalho:
      "A água do mar desta conta tem densidade de 1 tonelada por metro cúbico. Vinte toneladas deslocam 20 m³. Espalhados em 50 m², 20/50 = 0,4 m. Um calado extra de 20 m pediria 1.000 m³, isto é, 1.000 toneladas, não 20.",
  },
  "fis-hd-n3q2": {
    intuicao:
      "A antepara é um retângulo vertical molhado desde 1 m até 3 m de profundidade, com 2 m de largura. A pressão não é a mesma em toda a chapa: cresce de cima para baixo, como numa coluna de líquido. Num retângulo, a força total usa a pressão do meio da altura, não a do topo nem a do fundo. O desenho da chapa e da coluna vem antes da multiplicação pela área.",
    motivacao:
      "A lei de Stevin torna a pressão linear com a profundidade, e a força é a pressão média vezes a área. No retângulo vertical a média coincide com o valor no centro, a 2 m. Usar só a profundidade do topo, 1 m, corta a força pela metade e dá 40.000 N. Usar só o fundo, 3 m, dá 120.000 N. Os dois erros esquecem que a chapa vê a coluna inteira, do topo ao fundo, e não uma profundidade única.",
    passos: [
      "Geometria da antepara: altura 3 − 1 = 2 m e largura 2 m, então a área é A = 2 × 2 = 4 m². O meio está a 2 m.",
      "Lei de Stevin no meio: p_média = ρ g h = 1,0 × 10³ × 10 × 2 = 2,0 × 10⁴ Pa.",
      "Força da pressão média sobre a área: F = 2,0 × 10⁴ × 4 = 8,0 × 10⁴ N, isto é, 80.000 N.",
      "Integração da lei de Stevin: F = ρ g L (h²/2) de 1 m a 3 m = 1,0 × 10³ × 10 × 2 × (4,5 − 0,5) = 80.000 N. O topo sozinho daria 40.000 N e o fundo sozinho, 120.000 N.",
    ],
    atalho:
      "A média aritmética de 40.000 N e 120.000 N é 80.000 N, e a linearidade de Stevin autoriza essa média num retângulo. A dimensão pascal vezes metro quadrado é newton. O centro de pressão, onde a resultante se aplica, ficaria abaixo do meio, mas a pergunta pediu o módulo da força.",
  },
  "fis-hd-n3q3": {
    intuicao:
      "A amostra pendurada marca 40 N no ar e 24 N quando fica toda dentro da água do recipiente. A água segura 16 N, e esses 16 N são o peso da água deslocada. Dali saem o volume da amostra e, com a massa tirada dos 40 N, a densidade. O desenho é o corpo no dinamômetro, imerso, antes das divisões.",
    motivacao:
      "O equilíbrio no dinamômetro, pela primeira lei de Newton, separa o empuxo: E = 40 − 24 = 16 N. Arquimedes converte esse empuxo em volume, porque E = ρ_água V g. Dividir o peso total pela leitura de 24 N compara o peso com o que sobrou no aparelho e chega perto de 1.600 kg/m³, que não é a densidade. A densidade compara a massa com o volume deslocado, e o volume vem dos 16 N, não dos 24 N.",
    passos: [
      "Equilíbrio, primeira lei de Newton: E = 40 − 24 = 16 N. Arquimedes diz que esses 16 N são o peso da água deslocada.",
      "Volume, ainda por Arquimedes: V = E / (ρ g) = 16 / (1,0 × 10³ × 10) = 16 / 10.000 = 0,0016 m³.",
      "O peso e g = 10 m/s² dão a massa da amostra: m = P / g = 40 / 10 = 4,0 kg.",
      "Definição de densidade, com o volume de Arquimedes: ρ = m / V = 4,0 / 0,0016 = 2.500 kg/m³.",
    ],
    atalho:
      "Para imersão total, P / E = ρ / ρ_água, porque os dois pesos compartilham V e g. 40 / 16 = 2,5, então ρ = 2,5 × 1.000 = 2.500 kg/m³. O volume 0,0016 m³ é 1,6 L para 4,0 kg, densidade 2,5 kg/L, a mesma conta noutra unidade.",
  },
  "fis-hd-n3q4": {
    intuicao:
      "Um bloco maciço de aço desce na água porque cada pedaço de aço é mais denso que o líquido que desloca. O navio é feito de aço e, mesmo assim, fica na superfície. Por dentro do casco há ar, porões e volume que o bloco maciço não tem. O desenho é o casco oco, com a linha de água cortando um volume grande, antes de falar em densidade média.",
    motivacao:
      "Arquimedes continua valendo para o casco: o empuxo é o peso da água deslocada pelo volume externo submerso. O equilíbrio, pela primeira lei de Newton, acontece quando esse empuxo iguala o peso total, e isso ocorre antes de o casco afundar por completo se a massa dividida pelo volume externo for menor que a densidade da água. Dizer que o aço do casco ficou menos denso que a água contraria o dado do bloco que afunda. Dizer que o empuxo não depende do volume deslocado abandona o próprio Arquimedes.",
    passos: [
      "O aço maciço tem densidade maior que a da água. Pelo princípio de Arquimedes, imerso por completo, o empuxo fica menor que o peso e o bloco afunda.",
      "Densidade média do navio: ρ_média = massa total / volume externo do casco.",
      "Enquanto ρ_média < ρ_água, o equilíbrio E = P é alcançado com apenas uma fração do volume externo submersa. O navio flutua.",
      "A pressão atmosférica atua em todas as faces. A força vertical líquida da água continua sendo o empuxo de Arquimedes, dependente do volume deslocado.",
    ],
    atalho:
      "Se os porões enchem de água, a massa cresce e o volume externo não, então a densidade média sobe. Quando ela ultrapassa a da água, o equilíbrio com E = P deixa de existir antes da imersão total e o navio afunda. O limite recupera o bloco maciço.",
  },
  "fis-hd-n3q5": {
    intuicao:
      "O pistão pequeno desce 10 cm e empurra um volume de líquido para o outro lado. O líquido da prensa ideal não se comprime e não vaza, então o volume que sai de um êmbolo entra no outro. A área grande é dez vezes a pequena, então o pistão grande anda um décimo do caminho. O desenho dos dois êmbolos e do volume transferido vem antes da proporção.",
    motivacao:
      "A incompressibilidade iguala os volumes A₁ d₁ = A₂ d₂. Não é a mesma distância nos dois pistões, porque as áreas são diferentes. Multiplicar o deslocamento por 10, em vez de dividir, faria o pistão grande andar 100 cm e criaria volume do nada. Pascal, na mesma prensa, multiplica a força pelo mesmo fator 10. Os dois efeitos se compensam: no caso ideal o trabalho F d se conserva, e a força maior anda menos.",
    passos: [
      "Líquido incompressível: o volume que deixa o pistão menor entra no maior, A₁ d₁ = A₂ d₂.",
      "Incompressibilidade com os dados do enunciado: A₁ = 4 cm², d₁ = 10 cm e A₂ = 40 cm².",
      "Pela igualdade dos volumes, 4 × 10 = 40 × d₂, então 40 = 40 d₂ e d₂ = 1 cm.",
      "A razão das áreas é 40 / 4 = 10. Pela conservação do volume, o deslocamento do maior é 10 / 10 = 1 cm, não 10 cm.",
    ],
    atalho:
      "No SI, 4,0 × 10⁻⁴ m² × 0,10 m = 4,0 × 10⁻⁵ m³. Dividindo por 4,0 × 10⁻³ m², o deslocamento é 0,010 m, que são 1,0 cm. Se as áreas fossem iguais, os dois pistões andariam 10 cm. A área dez vezes maior anda dez vezes menos.",
  },
};
