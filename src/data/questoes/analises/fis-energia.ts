import type { AnaliseQuestao } from "../../lessons.ts";

export const ANALISES: Record<string, AnaliseQuestao> = {
  "fis-en-n1q1": {
    intuicao:
      "A força de 10 N empurra o ponto de aplicação, e o deslocamento de 3 m segue a mesma reta e o mesmo sentido. Não há componente da força perdida de lado. Cada newton, ao longo de cada metro alinhado, entrega 1 J. Dez newtons ao longo de três metros entregam trinta desses joules. O desenho é uma seta só: força e caminho por cima um do outro.",
    motivacao:
      "O trabalho é W = F d cos θ, e o cosseno vale 1 quando o ângulo é zero. Multiplicar é o que a definição pede, porque trabalho é a força vezes o deslocamento na direção dela. A alternativa 13 J soma 10 e 3, mistura de newton com metro. A alternativa 3,3 J divide um dado pelo outro e produz uma razão, não um trabalho. A unidade N·m é o joule e confirma o produto.",
    passos: [
      "Definição: W = F d cos θ, com θ o ângulo entre a força e o deslocamento do ponto de aplicação.",
      "Força e deslocamento no mesmo sentido: θ = 0° e cos 0° = 1, então o cosseno não reduz o produto.",
      "Com cos 0° = 1, a definição de trabalho se reduz a W = F d = 10 × 3 = 30 J.",
      "Produto da definição W = F d: 10 × 3 = 30. A unidade N·m é o joule. 13 J seria a soma 10 + 3, e 3,3 J seria a divisão 10/3.",
    ],
    atalho:
      "1 N em 1 m, alinhados, fazem 1 J. Aqui são 10 N em 3 m, no mesmo sentido, então 30 J. Se a alternativa soma os dados ou divide um pelo outro, a unidade não fecha em joule. O produto é a única combinação que dá N·m.",
  },
  "fis-en-n1q2": {
    intuicao:
      "A força é perpendicular ao caminho do ponto de aplicação. Ela empurra de lado, não para a frente e não para trás. A sombra dessa força sobre a reta do deslocamento tem comprimento zero. A normal de um bloco que desliza na horizontal e a força centrípeta de um movimento circular uniforme estão nesse desenho: mudam o equilíbrio ou a direção, e não acompanham o deslocamento.",
    motivacao:
      "W = F d cos θ coloca o ângulo no cosseno. Em 90° o cosseno é zero, e o produto inteiro zera, qualquer que seja o tamanho da força ou do deslocamento. A alternativa F d esquece o cosseno e trata a força como se fosse paralela ao caminho. A alternativa −F d usa o cosseno de 180°, que é a força contrária ao deslocamento, não a perpendicular. Trabalho nulo não quer dizer que a força não existe.",
    passos: [
      "Definição: W = F d cos θ, com θ o ângulo entre a força e o deslocamento do ponto de aplicação.",
      "Força perpendicular ao deslocamento do ponto de aplicação: o ângulo da definição é θ = 90°.",
      "Valor notável cos 90° = 0, então W = F d × 0 = 0, qualquer que seja o tamanho de F e de d.",
      "O trabalho é nulo. F d seria o caso θ = 0°. −F d seria θ = 180°, força oposta ao caminho.",
    ],
    atalho:
      "Projete a força no caminho. A sombra de uma seta perpendicular sobre a reta do deslocamento tem comprimento zero, e trabalho é essa sombra vezes a distância. Sombra nula, trabalho nulo. A normal no deslizamento horizontal é o caso cotidiano dessa sombra.",
  },
  "fis-en-n1q3": {
    intuicao:
      "O corpo de 2 kg já está a 3 m/s. A energia cinética mede quanto trabalho a resultante precisou entregar, a partir do repouso, para chegar nessa velocidade. A velocidade entra ao quadrado: dobrar v quadruplicaria a cinética. O 2 da massa e o 2 do denominador vão se encontrar na conta. O desenho não é o de uma força vezes um caminho, porque o caminho não foi dado.",
    motivacao:
      "K = m v² / 2 é a definição de energia cinética no referencial em que se mede v. A alternativa 6 J faz m v, sem o quadrado e sem o meio, e a unidade kg·m/s é quantidade de movimento, não joule. A alternativa 18 J faz m v² e esquece o denominador 2. Esse 2 vem de integrar a segunda lei ao longo do caminho, com a velocidade crescendo desde zero. A raiz da conta certa é o 9, não o 6 nem o 18.",
    passos: [
      "Definição de energia cinética: K = m v² / 2, com v medido no referencial do problema.",
      "Quadrado da velocidade: v = 3 m/s, então v² = 9, em m²/s², e esse 9 entra no numerador da cinética.",
      "Produto pela massa, antes da divisão por 2 da definição: m v² = 2 × 9 = 18.",
      "Divisão por 2: K = 18/2 = 9 J. 6 J seria m v. 18 J esquece o denominador da definição.",
    ],
    atalho:
      "Quando a massa é 2 kg, o 2 do numerador cancela o 2 do denominador e K = v². Aqui v² = 9, então a cinética é 9 J. 6 J é o produto m v, que tem unidade de momento. A coincidência K = v² só vale para esta massa.",
  },
  "fis-en-n1q4": {
    intuicao:
      "O corpo de 2 kg está 4 m acima do chão, e o zero da potencial foi colocado no chão. A altura que importa é a vertical, não o comprimento de uma rampa que eventualmente tenha levado o corpo até lá. Com g = 10 m/s², o peso é 20 N. Cada metro de altura, a partir do zero, guarda o trabalho desse peso ao longo de um metro. Quatro metros guardam quatro vezes isso.",
    motivacao:
      "Perto da Terra, U = m g h mede a potencial gravitacional a partir do zero escolhido. Multiplicar os três dados é a definição. A alternativa 8 J faz m h e esquece o g, então a unidade não fecha em joule. A alternativa 40 J fica a meio caminho, como um peso vezes uma altura pela metade. O enunciado deu g = 10 justamente para entrar no produto, não para ser ignorado.",
    passos: [
      "Potencial gravitacional perto da Terra, com o zero escolhido no chão: U = m g h.",
      "O enunciado dá os três fatores da definição: m = 2 kg, g = 10 m/s² e h = 4 m.",
      "O peso é m g = 2 × 10 = 20 N. A energia é esse peso vezes a altura: U = 20 × 4 = 80 J.",
      "Produto: U = 80 J. 8 J seria 2 × 4, sem o g. 40 J seria o peso vezes 2 m, não vezes 4 m.",
    ],
    atalho:
      "O peso é 20 N, e cada metro de altura guarda 20 J quando o zero está no chão. Quatro metros guardam 80 J. É a leitura U = P h. Se a alternativa não tem o fator 10 do g, ela deixou a gravidade fora da energia.",
  },
  "fis-en-n1q5": {
    intuicao:
      "Alguém entrega 200 J de trabalho e gasta 10 s para isso, num ritmo constante. A potência média é esse trabalho espalhado pelo tempo: quantos joules saem em cada segundo. Duzentos joules em dez segundos são vinte joules por segundo. No gráfico do trabalho contra o tempo, a potência é a inclinação da reta, não a altura do ponto final.",
    motivacao:
      "Potência média é W/Δt por definição. Dividir, e não multiplicar, é o que transforma joule em watt, porque watt é joule por segundo. A alternativa 2000 W faz o produto 200 × 10, cuja unidade seria J·s, não potência. A alternativa 2 W desloca um zero, e a alternativa 10 W usa só o tempo. A unidade denuncia a operação: joule dividido por segundo.",
    passos: [
      "Definição: a potência média é o trabalho dividido pelo tempo em que ele foi feito, P = W/Δt.",
      "Dados da definição: o trabalho é 200 J e o intervalo é 10 s, com o ritmo constante do enunciado.",
      "Divisão da definição: 200/10 = 20. A unidade J/s é o watt, então a potência média é 20 W.",
      "A potência média é 20 W. 2000 W seria o produto 200 × 10, que não é joule por segundo.",
    ],
    atalho:
      "200 J em 10 s são 20 J em cada segundo. Essa frase já é 20 W. Multiplicar os dados produz 2000, que está na lista e não tem unidade de potência. A inclinação de uma reta que sobe 200 J em 10 s é 20 W.",
  },
  "fis-en-n2q1": {
    intuicao:
      "Uma força resultante de 10 N empurra o corpo de 2 kg por 5 m, a partir do repouso, na direção da força. Todo esse trabalho vira energia cinética, porque o teorema liga o trabalho da resultante à variação da cinética. O corpo não tinha cinética no começo, então os joules do trabalho são a cinética no fim. A velocidade é a que, ao quadrado e com essa massa, devolve essa cinética.",
    motivacao:
      "O teorema da energia cinética, W da resultante igual a ΔK, evita achar o tempo. A cinemática, com a = F/m e Torricelli, dá o mesmo número e serve de conferência, não de caminho obrigatório. Esquecer a raiz deixaria v² no lugar de v. A alternativa 5 m/s seria a raiz de 25, como se o trabalho fosse a metade. A alternativa 10 m/s trata 100 como se fosse o v² desta conta.",
    passos: [
      "Trabalho da resultante, paralela ao deslocamento: W = F d cos 0° = 10 × 5 = 50 J.",
      "Teorema da energia cinética: o trabalho da força em jogo é W = ΔK = K final − K inicial.",
      "Parte do repouso, então K inicial = 0 e o teorema deixa K final igual ao trabalho, 50 J.",
      "Definição de cinética K = m v² / 2: (1/2) × 2 × v² = 50. A massa 2 cancela o denominador e v² = 50.",
      "Raiz quadrada: v = √50 = √(25 × 2) = 5√2 m/s, a raiz positiva no sentido da força.",
    ],
    atalho:
      "Pela cinemática: a = F/m = 10/2 = 5 m/s². Torricelli, a partir do repouso: v² = 2 a d = 2 × 5 × 5 = 50, então v = √50 = 5√2 m/s. Trabalho-energia e Torricelli fecham no mesmo radical. 5 m/s seria √25, a raiz de outra conta.",
  },
  "fis-en-n2q2": {
    intuicao:
      "A força de 20 N não acompanha o deslocamento de 4 m por inteiro. O ângulo de 60° deixa só a componente F cos 60° na direção do caminho. cos 60° vale 1/2, então a força útil é a metade de 20 N, isto é, 10 N ao longo dos 4 m. A componente perpendicular, 20 sen 60°, não trabalha. O desenho é a sombra da força sobre a reta do deslocamento.",
    motivacao:
      "W = F d cos θ usa o cosseno, não o seno, porque a componente paralela ao deslocamento é F cos θ quando θ é o ângulo entre os dois vetores. A alternativa 80 J esquece o cosseno e calcula o trabalho que a força faria se estivesse alinhada. A alternativa 40√3 J troca cos 60° por sen 60° = √3/2, que é a componente que não acompanha o caminho. Zero seria o caso de 90°.",
    passos: [
      "Definição de trabalho: W = F d cos θ, com θ = 60° entre a força de 20 N e o deslocamento de 4 m.",
      "cos 60° = 1/2. A componente da força ao longo do caminho é 20 × 1/2 = 10 N.",
      "Trabalho dessa componente: W = 10 × 4 = 40 J. Na forma direta, 20 × 4 × 1/2 = 40.",
      "80 J esquece o cosseno e trata a força como paralela. 40√3 J usa sen 60° no lugar de cos 60°.",
    ],
    atalho:
      "60° corta a força ao meio na direção do movimento, porque cos 60° = 1/2. Metade de 20 N vezes 4 m é 40 J. Se o ângulo fosse 0°, o trabalho seria 80 J, e essa alternativa está na lista para quem não projeta a força.",
  },
  "fis-en-n2q3": {
    intuicao:
      "O corpo cai 5 m a partir do repouso, sem atrito. A altura que ele perde é energia potencial que a gravidade transforma em cinética. A massa aparece dos dois lados e sai da conta: um corpo mais pesado guarda mais potencial, e também precisa de mais energia para a mesma velocidade. Por isso a velocidade no fim não depende da massa. O desenho é uma queda vertical de 5 m, com o zero de velocidade no alto.",
    motivacao:
      "Conservar a energia mecânica é legítimo porque a única força que trabalha é a gravidade, que é conservativa. De m g h = m v² / 2 sai v² = 2 g h, sem precisar do tempo. A alternativa 50 m/s usa g h ou 2 g h sem a raiz, e o número nem tem cara de velocidade desta queda. A alternativa 5 m/s é a metade de 10, sem motivo na fórmula. A massa cancela e não precisa ser dada.",
    passos: [
      "Sem atrito, só a gravidade trabalha, e ela é conservativa. A energia mecânica se conserva na queda.",
      "Perda de potencial igual ao ganho de cinética, a partir do repouso: m g h = m v² / 2.",
      "Conservação da energia, depois de cancelar a massa: v² = 2 g h = 2 × 10 × 5 = 100, com g = 10 m/s².",
      "Raiz quadrada: v = √100 = 10 m/s, a raiz positiva no sentido da queda, qualquer que seja a massa.",
      "50 m/s seria 2 g h ou g h sem a raiz. A massa não aparece na resposta, porque cancelou.",
    ],
    atalho:
      "Pelo tempo: h = g t² / 2 dá 5 = 10 t² / 2, então t² = 1 e t = 1 s. v = g t = 10 × 1 = 10 m/s. A via da energia e a via do tempo concordam. Qualquer massa cairia com essa mesma velocidade.",
  },
  "fis-en-n2q4": {
    intuicao:
      "O corpo chega com 200 J de cinética na horizontal, e só o atrito de 50 N atua, contra o movimento. Cada metro percorrido custa 50 J, porque a força contrária faz trabalho negativo. A cinética acaba quando esses 200 J foram gastos. A distância é o número de metros de 50 J que cabem em 200 J. Não há subida nem descida, então a potencial não muda.",
    motivacao:
      "O teorema da energia cinética iguala o trabalho do atrito à variação da cinética. O trabalho é −F d porque o atrito aponta contra o deslocamento e cos 180° = −1. Dividir 200 por 50 é a conta. A alternativa 250 m multiplica os dados, e a alternativa 10 m divide 200 por um 20 que não está na força. O sinal negativo precisa aparecer e depois sair ao isolar a distância, que é um comprimento positivo.",
    passos: [
      "Trabalho de uma força oposta ao deslocamento: W = F d cos 180° = −50 d, em joules se d está em metros.",
      "Teorema da energia cinética: o trabalho da força em jogo é W = ΔK = K final − K inicial.",
      "O corpo para, K final = 0, e K inicial = 200 J. O teorema da energia cinética fica −50 d = −200.",
      "Multiplicar por −1 conserva a igualdade ao trocar os dois sinais: 50 d = 200, e d = 200/50 = 4 m.",
    ],
    atalho:
      "O atrito come 50 J por metro, porque joule por metro é newton. 200 J duram 200/50 = 4 m. A divisão da energia pela força dá o caminho. 250 m seria o produto 5 × 50, que mistura os números sem essa leitura.",
  },
  "fis-en-n2q5": {
    intuicao:
      "O bloco desliza na horizontal e o atrito cinético aponta para trás, contra o deslocamento. Essa força faz trabalho negativo o tempo todo em que há movimento. A energia mecânica no fim do trecho é a do começo mais esse trabalho, então ela desce. Ela não desaparece num instante: vai caindo aos poucos, joule por metro, até o bloco parar, se o trecho for longo o bastante.",
    motivacao:
      "A variação da energia mecânica é o trabalho das forças não conservativas. O atrito cinético é não conservativo, e o trabalho dele é negativo porque o ângulo com o deslocamento é 180°. A alternativa que conserva a mecânica vale para o trecho sem atrito, ou para o estático que não desliza e não trabalha. A alternativa que zera a energia na hora confunde o fim da frenagem com o meio do caminho.",
    passos: [
      "Atrito cinético oposto ao deslocamento: θ = 180° e cos 180° = −1. O trabalho num trecho d é −μ N d, negativo.",
      "Balanço: a energia mecânica final é a inicial mais o trabalho das forças não conservativas.",
      "Esse trabalho é negativo enquanto há deslizamento, então a mecânica final é menor que a inicial.",
      "A queda é gradual, proporcional à distância. A energia só chega a zerar a cinética se o trecho for exatamente o da parada.",
    ],
    atalho:
      "Cada metro de raspa tira μ N joules da mecânica. Enquanto o bloco anda, a conta só desce. Sem atrito a linha da energia ficaria reta. Com atrito, ela tomba, e não cai a zero no primeiro instante.",
  },
  "fis-en-n3q1": {
    intuicao:
      "O guincho sobe a carga de 4 kg por 2 m sem acelerar. A velocidade é constante, então a cinética não muda e a resultante é nula. A força do guincho aponta para cima, junto com o deslocamento, e o peso aponta para baixo, contra o deslocamento. As duas forças têm o mesmo módulo: uma entrega energia e a outra retira a mesma quantidade. O saldo é zero, como a cinética pede, mas o trabalho do guincho, sozinho, não é zero.",
    motivacao:
      "Pedir o trabalho de uma força não é pedir o trabalho da resultante. Com velocidade constante, o trabalho da resultante é zero porque ΔK = 0, e esse zero é a soma do trabalho do guincho com o trabalho do peso. O guincho equilibra o peso, módulo m g, no mesmo sentido do deslocamento, então o trabalho dele é positivo. A alternativa 0 troca a força pedida pela resultante. A alternativa −80 J é o trabalho do peso.",
    passos: [
      "Velocidade constante: a resultante é nula e, pelo teorema da energia cinética, o trabalho da resultante é zero.",
      "Equilíbrio vertical: a força do guincho tem módulo igual ao peso, m g = 4 × 10 = 40 N, com g = 10 m/s².",
      "O deslocamento de 2 m é para cima, no sentido da força do guincho. cos 0° = 1.",
      "Trabalho do guincho, força paralela ao deslocamento: W = 40 × 2 = 80 J.",
      "Trabalho do peso: 40 × 2 × cos 180° = −80 J. A soma é zero. Marcar 0 no guincho troca uma força pela resultante.",
    ],
    atalho:
      "A carga sobe 2 m e o peso é 40 N. Guardar potencial custa m g h = 80 J, e com velocidade constante quem fornece esses 80 J é o guincho. O peso contribui com −80 J. Os dois trabalhos não se confundem, e a soma é que vale zero.",
  },
  "fis-en-n3q2": {
    intuicao:
      "O bloco parte do repouso e desce uma rampa sem atrito. O que importa para a velocidade lá embaixo é a altura vertical de 3 m, não o comprimento da ladeira nem a inclinação. Toda a potencial perdida vira cinética. Uma rampa mais deitada alonga o caminho e aumenta o tempo, mas a altura perdida é a mesma. A normal da rampa é perpendicular ao deslocamento local, então não trabalha.",
    motivacao:
      "Conservar a energia mecânica vale porque a normal não trabalha e não há atrito. De m g h = m v² / 2 sai v² = 2 g h. A inclinação não entra nessa fórmula, por isso a alternativa que diz que a velocidade depende da inclinação descreve o tempo ou a aceleração, não esta velocidade. A alternativa √30 m/s esquece o fator 2 dentro da raiz. A alternativa 30 m/s esquece a raiz.",
    passos: [
      "Sem atrito, a normal é perpendicular ao deslocamento e o trabalho dela é zero. A mecânica se conserva.",
      "Queda de potencial igual à cinética ganha, a partir do repouso: m g h = m v² / 2.",
      "Conservação da energia, depois de cancelar a massa: v² = 2 g h = 2 × 10 × 3 = 60, com g = 10 m/s².",
      "Raiz da conservação: v = √60 m/s. A inclinação não aparece, porque h é a altura vertical, não o comprimento da rampa.",
      "√30 m/s seria √(g h), sem o fator 2. A alternativa da inclinação responde a aceleração g sen θ, outra pergunta.",
    ],
    atalho:
      "Troque a rampa por uma queda vertical de 3 m. Sem atrito, v = √(2 g h) = √(2 × 10 × 3) = √60 m/s nos dois desenhos. A inclinação muda a aceleração, que é g sen θ, e muda o tempo. Esta velocidade só enxerga a altura.",
  },
  "fis-en-n3q3": {
    intuicao:
      "O bloco de 2 kg chega na horizontal a 6 m/s, com 36 J de cinética. No trecho de atrito, uma força de 5 N aponta contra o movimento por 4 m e retira 20 J. Não há mudança de altura, então a potencial fica de fora. Sobram 16 J, e para uma massa de 2 kg esses 16 J correspondem a 4 m/s. O bloco não para: os 20 J gastos não dão conta dos 36 J que ele trazia.",
    motivacao:
      "O teorema da energia cinética desconta o trabalho do atrito da cinética inicial. A alternativa 6 m/s conserva a mecânica e esquece o atrito, que é a pegadinha clássica deste trecho. A alternativa 0 responderia a parada, e a distância de parada seria maior que os 4 m dados. A conta certa para no meio do caminho, com cinética ainda positiva, e só então extrai a velocidade.",
    passos: [
      "Cinética inicial, definição K = m v² / 2: (1/2) × 2 × 6² = 36 J no começo do trecho.",
      "Trabalho do atrito, oposto ao deslocamento: W = −5 × 4 = −20 J. Na horizontal a potencial não muda.",
      "Teorema da energia cinética: K final = 36 + (−20) = 16 J, e essa sobra ainda é positiva.",
      "Com m = 2 kg, K = v². Então v² = 16 e v = 4 m/s, a raiz positiva no sentido do movimento.",
      "6 m/s conservaria a energia e ignoraria o atrito. 0 seria a parada, que pediria mais do que 4 m.",
    ],
    atalho:
      "36 J menos 20 J deixam 16 J. Para 2 kg, a cinética em joules coincide com o quadrado da velocidade, então v = √16 = 4 m/s. A parada consumiria 36 J, isto é, 36/5 = 7,2 m, e o trecho só tem 4 m. O bloco ainda está andando.",
  },
  "fis-en-n3q4": {
    intuicao:
      "O guincho sobe 200 kg a meio metro por segundo, sem acelerar. A força que ele faz é o próprio peso, para cima, porque a velocidade é constante. Potência, nesse alinhamento, é essa força vezes a velocidade: quantos joules sobem por segundo. O peso sozinho está em newtons. A potência pede mais um fator, a velocidade de 0,5 m/s, e o enunciado fixa g = 10 m/s² para achar o peso.",
    motivacao:
      "Com velocidade constante a cinética não muda, então a força do guincho equilibra o peso, e a potência é F v porque força e velocidade são paralelas. A alternativa 2.000 W lê o peso em newtons como se já fosse potência. A alternativa 100 W faz 200 × 0,5 e esquece o g. A alternativa 10.000 W trata 0,5 como se fosse 5. A unidade N·m/s é o watt e confirma o produto F v.",
    passos: [
      "Velocidade constante: a força do guincho equilibra o peso. Módulo F = m g = 200 × 10 = 2.000 N, com g = 10 m/s².",
      "Potência instantânea com força paralela à velocidade: P = F v, em watt quando F está em newton e v em m/s.",
      "Substituição na definição P = F v: a força de 2.000 N vezes 0,5 m/s dá P = 2.000 × 0,5.",
      "Produto: 2.000 × 0,5 = 1.000. A unidade N·m/s é o watt, então a potência é 1.000 W.",
      "2.000 W é o peso em newtons lido como potência. 100 W esquece o fator 10 do g na conta 200 × 0,5.",
    ],
    atalho:
      "Em um segundo o guincho sobe 0,5 m. O trabalho nesse segundo é 2.000 N × 0,5 m = 1.000 J. Joule por segundo é watt, então a potência é 1.000 W. O número 2.000, sozinho, ainda está em newtons.",
  },
  "fis-en-n3q5": {
    intuicao:
      "O corpo de 2 kg entra no trecho horizontal a 10 m/s, e o atrito cinético freia até parar. A cinética inicial é 100 J, a normal vale o peso, e o atrito é 0,2 desse peso, apontando contra o movimento. Cada metro consome o valor dessa força em joules. A distância é o quanto esses joules por metro levam para gastar os 100 J. Não há rampa: a potencial não entra.",
    motivacao:
      "O teorema da energia cinética iguala o trabalho negativo do atrito à perda de cinética. A força de atrito é μc m g, com o g = 10 do enunciado. A massa está na cinética e no atrito, e nesta horizontal ela cancela, deixando d = v² / (2 μc g). A alternativa 50 m esquece o 2 da cinética, e a alternativa 5 m esquece o μc e freia como se o atrito fosse o peso inteiro. A queda livre cancela a massa por outro caminho, v² = 2 g h.",
    passos: [
      "Cinética inicial: K = m v² / 2 = (1/2) × 2 × 10² = 100 J. Na parada, a cinética final é zero.",
      "Na horizontal, N = m g = 2 × 10 = 20 N, com g = 10 m/s². Atrito: f = μc N = 0,2 × 20 = 4 N.",
      "Trabalho do atrito até parar: W = −f d = −4 d. Teorema da energia cinética: −4 d = 0 − 100.",
      "Teorema da energia cinética, isolando a distância: de −4 d = −100 segue 4 d = 100 e d = 25 m.",
      "Fórmula da frenagem, com a massa cancelada: d = v² / (2 μc g) = 100 / (2 × 0,2 × 10) = 25 m. 50 m esquece o 2.",
    ],
    atalho:
      "d = v² / (2 μ g) = 100 / 4 = 25 m, porque 2 × 0,2 × 10 = 4. A massa não muda a distância nesta horizontal: um corpo mais pesado traz mais cinética e sofre mais atrito, na mesma proporção. 5 m seria o caso μ = 1, um freio do tamanho do peso.",
  },
};
