import type { AnaliseQuestao } from "../../lessons.ts";

export const ANALISES: Record<string, AnaliseQuestao> = {
  "fis-ql-n1q1": {
    intuicao:
      "O corpo é abandonado: a velocidade inicial, para baixo, é zero. A gravidade, no modelo sem ar e com g = 10 m/s², acrescenta 10 m/s a cada segundo de queda. Em dois segundos ela acrescenta isso duas vezes. A pergunta pede a velocidade, uma seta para baixo, não a altura.",
    motivacao:
      "Na queda livre a aceleração é constante e vale g. A equação v = v₀ + g t é o MUV com a = g e o sentido positivo para baixo. v₀ = 0 porque “do repouso” significa isso. Multiplicar g por t, em vez de por t², é o que produz velocidade. g t²/2 seria altura, a grandeza vizinha que costuma trocar de lugar com esta.",
    passos: [
      "Escolha o sentido positivo para baixo. Então a = g = 10 m/s² e v₀ = 0.",
      "MUV: v = v₀ + a t = 0 + 10 × 2.",
      "Produto: v = 20 m/s, para baixo.",
      "Unidade: (m/s²) × s = m/s. 20 m seria uma distância, não o que a equação da velocidade entrega.",
    ],
    atalho:
      "10 m/s por segundo, durante 2 s, a partir do zero: 20 m/s. Se a alternativa vier em metros, ela respondeu a altura. Aqui a unidade pedida é m/s.",
  },
  "fis-ql-n1q2": {
    intuicao:
      "É a mesma queda de 2 s, agora perguntando a altura. O corpo não desce 20 m/s vezes 2 s, porque ele não tinha 20 m/s o tempo todo. Começou do zero e só terminou a 20 m/s. A velocidade média é a metade, 10 m/s, e 10 m/s vezes 2 s dão 20 m. A altura é menor do que o produto da velocidade final pelo tempo.",
    motivacao:
      "h = g t²/2 é o MUV com v₀ = 0 e s₀ = 0. O 2 no denominador é a média entre a velocidade inicial nula e a final g t. Sem esse 2, g t² = 40 m usaria a velocidade final como se ela tivesse valido desde o primeiro instante. A média justifica o denominador, em vez de decorá-lo.",
    passos: [
      "Queda do repouso, sentido positivo para baixo: h = g t² / 2.",
      "t² = 4. Então h = 10 × 4 / 2.",
      "10 × 4 = 40, e 40/2 = 20. A altura descida é 20 m.",
      "40 m seria g t², o dobro, esquecendo que a velocidade média é metade da final.",
    ],
    atalho:
      "A velocidade final é 20 m/s e a média é 10 m/s. Em 2 s, 10 × 2 = 20 m. A conta da média dispensa a fórmula pronta e explica o fator 1/2.",
  },
  "fis-ql-n1q3": {
    intuicao:
      "O corpo precisa descer 80 m a partir do repouso, com a gravidade puxando a 10 m/s². O tempo é a incógnita. A altura cresce com o quadrado do tempo, então o tempo cresce com a raiz da altura. 80 m não levam 8 s nem 16 s: a queda acelera e os metros finais passam mais rápido que os primeiros.",
    motivacao:
      "Isolar t em h = g t²/2 é melhor do que chutar tempos, porque a equação já é o modelo. Ao extrair a raiz, as duas raízes matemáticas ± aparecem, e só a positiva descreve um instante depois do abandono. A negativa voltaria no tempo. Descartá-la é parte da física do problema, não um detalhe de álgebra.",
    passos: [
      "h = g t² / 2, com h = 80 m, g = 10 m/s² e v₀ = 0.",
      "80 = 10 t² / 2 = 5 t². A divisão por 2 aconteceu antes de isolar t².",
      "t² = 80/5 = 16. Então t = ±√16 = ±4.",
      "O tempo de queda, contado a partir do abandono, é positivo: t = 4 s. A raiz negativa não é um instante posterior.",
    ],
    atalho:
      "5 t² = 80 e t² = 16. A tabuada do 4 fecha. Confira: em 4 s, h = 10 × 16 / 2 = 80 m. Bateu exato, então não é 5 s nem 2 s.",
  },
  "fis-ql-n1q4": {
    intuicao:
      "Um corpo cai reto. O outro recebe um empurrão de lado e descreve uma curva. Os dois saem da mesma altura, no mesmo instante, com velocidade vertical zero. Sem ar, o movimento de lado não empurra nem segura a queda. O relógio vertical dos dois é o mesmo. Eles chegam juntos, em lugares diferentes do chão.",
    motivacao:
      "O princípio da independência dos movimentos, no modelo sem resistência do ar, separa as equações: a horizontal é MU e a vertical é MUV com aceleração g. A massa não entra porque g é a mesma para os corpos em queda livre. A velocidade horizontal muda o alcance, que é x = vₓ t, e não muda a equação y = g t²/2 que determina t.",
    passos: [
      "Sem ar, aₓ = 0 e aᵧ = g. As equações não se misturam.",
      "Os dois corpos têm v₀ᵧ = 0 e a mesma altura inicial. A equação da queda é h = g t²/2 para os dois.",
      "O tempo de queda é o mesmo. A massa não aparece nessa equação.",
      "A velocidade horizontal altera x = vₓ t, o ponto de chegada, e não o instante.",
    ],
    atalho:
      "Imagine uma filmagem só do movimento vertical: os dois quadros são idênticos. O que muda é o cenário andando para o lado no corpo lançado. O chão chega no mesmo frame. Massas diferentes não mudam esse frame no modelo sem ar.",
  },
  "fis-ql-n1q5": {
    intuicao:
      "Três segundos de queda livre, saindo do repouso. A velocidade no fim é g t = 30 m/s, mas essa não é a altura. A altura usa a velocidade média, 15 m/s, vezes 3 s, e dá 45 m. A alternativa 30 m é a velocidade escrita com a unidade errada. A pergunta pede metros descidos.",
    motivacao:
      "h = g t²/2 de novo, porque v₀ = 0. Separar o que é velocidade do que é posição é o cuidado desta questão: as duas grandezas usam g e t, com potências diferentes. g t tem dimensão de velocidade; g t²/2 tem dimensão de comprimento. A unidade da alternativa, se viesse escrita, já decidiria. Aqui os números 30 e 45 competem, e a fórmula corta a dúvida.",
    passos: [
      "Queda do repouso: h = g t² / 2, com g = 10 m/s² e t = 3 s.",
      "t² = 9. h = 10 × 9 / 2 = 90/2 = 45 m.",
      "A velocidade nesse instante é v = g t = 30 m/s, outro cálculo.",
      "30 m seria usar v no lugar de h. 90 m seria g t² sem o denominador 2.",
    ],
    atalho:
      "Velocidade final 30 m/s, média 15 m/s, tempo 3 s: 15 × 3 = 45 m. O número 30 que aparece na conta é velocidade, e a pergunta não pediu velocidade.",
  },
  "fis-ql-n2q1": {
    intuicao:
      "O corpo sobe a 20 m/s e a gravidade vai tirando 10 m/s de velocidade a cada segundo. No ponto mais alto ele para no ar, por um instante, antes de cair. A altura máxima é o caminho até esse instante de velocidade vertical zero. Não é 20 m/s vezes 2 s, porque a velocidade não ficou em 20 o tempo todo.",
    motivacao:
      "Com o eixo para cima, a aceleração é −g, porque a gravidade aponta contra o eixo. v = v₀ − g t igualada a zero acha o tempo de subida. A posição y = v₀ t − g t²/2 nesse instante é a altura. Torricelli, v² = v₀² − 2 g h, pula o tempo e liga a altura direto ao fato de v = 0. Os dois caminhos se conferem.",
    passos: [
      "Eixo para cima: a = −10 m/s² e v₀ = 20 m/s. No topo, v = 0.",
      "0 = 20 − 10 t, então t = 2 s. A divisão por 10 isola o tempo de subida.",
      "y = 20 t − 5 t², porque g/2 = 5. y(2) = 40 − 5 × 4 = 40 − 20 = 20 m.",
      "Torricelli: 0 = 20² − 2 × 10 × h = 400 − 20 h. Então h = 400/20 = 20 m.",
      "As duas contas dão 20 m. 40 m seria v₀²/(2g) com um 2 esquecido no denominador, ou v₀ t sem a freada da gravidade.",
    ],
    atalho:
      "h = v₀² / (2g) = 400 / 20 = 20 m. A fórmula já embute v = 0. Metade de 20 m/s é 10 m/s de velocidade média na subida, vezes 2 s, também 20 m.",
  },
  "fis-ql-n2q2": {
    intuicao:
      "O corpo subiu 2 s até parar. Sem ar, a descida desde a mesma altura, de volta à mão, repete o filme ao contrário e dura outros 2 s. O tempo total de voo é o dobro do tempo de subida. A mão está no nível de lançamento, que é a condição para essa simetria.",
    motivacao:
      "A simetria vale porque a aceleração é constante e a posição final coincide com a inicial: a equação y = 0 tem duas raízes, t = 0 e t = 2 v₀/g. A distância entre elas é o tempo de voo. Resolver a equação mostra de onde vem o fator 2, em vez de apenas dobrar o tempo de subida por hábito. Se a chegada fosse mais baixa que a saída, a simetria quebraria.",
    passos: [
      "Eixo para cima e retorno ao mesmo nível: y = 20 t − 5 t² = 0.",
      "Fatore t: t (20 − 5 t) = 0. Um produto é zero quando algum fator é zero.",
      "t = 0 é o lançamento. 20 − 5 t = 0 dá t = 4 s, a volta à mão.",
      "A subida durou 2 s e a descida outros 2 s. O total é 4 s, que é 2 v₀/g = 40/10.",
    ],
    atalho:
      "Tempo de subida 2 s, mesmo nível, sem ar: dobre. 4 s. 2 s seria só a ida até o topo, e a pergunta pede a volta.",
  },
  "fis-ql-n2q3": {
    intuicao:
      "O corpo sai de lado, a 10 m/s, de um penhasco de 45 m. A velocidade horizontal não segura a queda. O tempo no ar é o tempo de cair 45 m a partir do repouso vertical. Enquanto cai, ele continua andando 10 m a cada segundo, para a frente. O alcance é essa velocidade vezes o tempo de queda.",
    motivacao:
      "Independência dos movimentos: a vertical determina t por h = g t²/2, porque v₀ᵧ = 0. A horizontal é MU, x = vₓ t, porque sem ar não há aceleração horizontal. Multiplicar 10 por 45, ou usar 45 como se fosse tempo, misturaria as direções. Separar as equações é o motivo do método.",
    passos: [
      "Vertical, queda do repouso: 45 = g t² / 2 = 5 t². Então t² = 9 e t = 3 s. O tempo negativo se descarta.",
      "Horizontal, sem ar: vₓ permanece 10 m/s. Não há aₓ.",
      "Alcance: x = vₓ t = 10 × 3 = 30 m.",
      "45 m é a altura, não o alcance. 10 m seria um segundo de voo, e a queda dura três.",
    ],
    atalho:
      "45 m de queda livre levam 3 s, porque 5 × 9 = 45. Três segundos a 10 m/s são 30 m. A conta de cabeça usa a tabuada do tempo de queda.",
  },
  "fis-ql-n2q4": {
    intuicao:
      "Dois segundos depois do lançamento horizontal, a componente de lado continua 10 m/s, porque nada a freia. A componente para baixo nasceu em zero e cresceu com a gravidade, como numa queda livre comum. A pergunta pede só essa componente vertical, não a velocidade resultante e não a horizontal.",
    motivacao:
      "vᵧ = v₀ᵧ + g t, com v₀ᵧ = 0 no lançamento horizontal. A horizontal não entra nessa equação por causa da independência dos eixos. Somar os 10 m/s do lançamento à componente vertical produziria o módulo da velocidade total, √(10² + 20²), que não foi pedido. Ler o que a pergunta nomeia, “velocidade vertical”, escolhe a equação certa.",
    passos: [
      "Lançamento horizontal: v₀ᵧ = 0 e aᵧ = g = 10 m/s², sentido positivo para baixo.",
      "vᵧ = g t = 10 × 2 = 20 m/s, para baixo.",
      "vₓ = 10 m/s permanece, e não é a resposta desta pergunta.",
      "30 m/s seria 10 + 20, uma soma de componentes perpendiculares como se fossem paralelas.",
    ],
    atalho:
      "Na vertical, o lançamento horizontal é uma queda do repouso. Em 2 s, v = g t = 20 m/s para baixo. Os 10 m/s ficam no outro eixo.",
  },
  "fis-ql-n2q5": {
    intuicao:
      "O corpo cai 20 m a partir do repouso e o tempo não aparece. A velocidade no fim desses 20 m depende da altura e de g, não de um relógio que o enunciado escondeu. Quanto mais alto, mais tempo a gravidade tem para acelerar, e a relação que liga isso sem o tempo é a de Torricelli.",
    motivacao:
      "v² = v₀² + 2 g h elimina t. Ela é a mesma Torricelli do MUV, com a = g e o sentido positivo para baixo. Com v₀ = 0, v = √(2 g h). Esquecer o 2, ou esquecer a raiz, produz os distratores 200 e algum valor intermediário. A raiz é obrigatória porque a equação entrega v².",
    passos: [
      "Sentido positivo para baixo, v₀ = 0: v² = 2 g h.",
      "v² = 2 × 10 × 20 = 400.",
      "v = √400 = 20 m/s, raiz não negativa no sentido da queda.",
      "200 m/s seria 10 × 20, um produto g h sem o 2 e sem a raiz. Não é velocidade de queda.",
    ],
    atalho:
      "h = 20 m e g = 10 m/s²: 2 g h = 400, um quadrado perfeito. A velocidade é 20 m/s. Confira pelo tempo: 20 = 5 t², t² = 4, t = 2 s, v = g t = 20 m/s. Fecha.",
  },
  "fis-ql-n3q1": {
    intuicao:
      "O projétil sai do chão a 30° com 20 m/s e volta ao mesmo chão plano. A componente horizontal empurra o alcance o tempo todo. A componente vertical decide quanto tempo ele fica no ar: sobe e desce. 30° deixa a componente vertical menor que a horizontal. O alcance é o produto da horizontal pelo tempo de voo.",
    motivacao:
      "Decompor é obrigatório porque as acelerações são diferentes: zero na horizontal, −g na vertical. v₀ₓ = v₀ cos θ e v₀ᵧ = v₀ sen θ saem das definições de cosseno e seno no triângulo do vetor. O tempo de voo, no retorno ao mesmo nível, é 2 v₀ᵧ/g. A fórmula pronta R = v₀² sen 2θ / g é a segunda via, e só vale nesse terreno plano sem ar.",
    passos: [
      "Decomposição: v₀ₓ = 20 cos 30° = 20 × √3/2 = 10√3 m/s. v₀ᵧ = 20 sen 30° = 20 × 1/2 = 10 m/s.",
      "Tempo de voo até o mesmo nível: t = 2 v₀ᵧ / g = 2 × 10 / 10 = 2 s.",
      "Alcance: R = v₀ₓ t = 10√3 × 2 = 20√3 m. A horizontal não muda sem ar.",
      "Fórmula pronta: R = v₀² sen 2θ / g = 400 × sen 60° / 10. sen 60° = √3/2, então 40 × √3/2 = 20√3 m.",
    ],
    atalho:
      "sen(2 × 30°) = sen 60° = √3/2. R = 400 × (√3/2) / 10 = 20√3 m. Uma linha, desde que o chão seja plano e o ar seja desprezível. 10√3 m seria metade, o erro de usar só o tempo de subida.",
  },
  "fis-ql-n3q2": {
    intuicao:
      "A altura máxima é um assunto só da componente vertical. No topo, a velocidade para cima zera, enquanto a de lado continua. Os 10 m/s verticais do lançamento anterior sobem contra g = 10 m/s² e param em um segundo. A altura é modesta, 5 m, porque a componente vertical é só metade dos 20 m/s.",
    motivacao:
      "h = v₀ᵧ² / (2g) vem de Torricelli com velocidade final vertical nula. Usar os 20 m/s inteiros no lugar de v₀ᵧ inflaria a altura, porque a parte horizontal não ajuda a subir. O motivo de descartar v₀ é a decomposição: só a projeção no eixo da gravidade entra na equação vertical.",
    passos: [
      "Do item anterior, v₀ᵧ = 10 m/s. No topo, vᵧ = 0.",
      "Torricelli vertical, eixo para cima: 0 = v₀ᵧ² − 2 g h.",
      "0 = 100 − 20 h, então 20 h = 100 e h = 5 m.",
      "Pelo tempo: t_subida = v₀ᵧ/g = 1 s. y = 10 × 1 − 5 × 1² = 5 m. As contas concordam.",
    ],
    atalho:
      "h = v₀ᵧ² / (2g) = 100/20 = 5 m. Se alguém usar 20 no lugar de 10, obtém 20 m, que está na lista e está errado. A altura não vê a componente horizontal.",
  },
  "fis-ql-n3q3": {
    intuicao:
      "O pacote, antes de ser solto, já viaja com o navio a 5 m/s. Soltá-lo não apaga essa velocidade de lado. Sem ar, ele conserva os 5 m/s enquanto cai. Em relação ao navio, que segue em frente na mesma velocidade, o pacote cai “no pé”. Em relação à água, os dois andam 5 m por segundo durante a queda. A pergunta nomeia a água, então a resposta não é zero.",
    motivacao:
      "O referencial muda o deslocamento horizontal. No referencial do navio, vₓ inicial do pacote é zero e o alcance é zero. No referencial da terra, vₓ = 5 m/s e x = vₓ t. O tempo de queda é o mesmo nos dois referenciais inerciais, porque a vertical não depende dessa velocidade constante. Calcular t pela altura e multiplicar por 5 m/s responde o que foi pedido, a água.",
    passos: [
      "No abandono, o pacote tem a velocidade horizontal do navio: vₓ = 5 m/s em relação à água. Sem ar, vₓ permanece.",
      "Queda da altura de 80 m, com v₀ᵧ = 0: 80 = g t² / 2 = 5 t². t² = 16 e t = 4 s.",
      "Em relação à água: x = 5 × 4 = 20 m.",
      "Em relação ao navio, se a velocidade dele não muda, x' = 0. Zero responde o referencial errado.",
    ],
    atalho:
      "80 m de queda livre levam 4 s, porque 5 × 16 = 80. Quatro segundos a 5 m/s são 20 m em relação à água. Zero só valeria se a pergunta fosse “em relação ao navio”.",
  },
  "fis-ql-n3q4": {
    intuicao:
      "O corpo é lançado para cima, a 10 m/s, e a água está 45 m abaixo do ponto de lançamento. Ele sobe um pouco, para, e depois desce os 45 m e mais o que subiu. O tempo é maior do que o de uma queda simples de 45 m. O eixo para cima coloca a água na coordenada negativa, y = −45 m, e a aceleração também negativa.",
    motivacao:
      "A equação y = v₀ t − g t²/2 com y final negativo produz uma equação do segundo grau. As duas raízes matemáticas aparecem, e só a positiva é um instante depois do lançamento. Completar essa filtragem é obrigatório: a raiz negativa não é “o tempo de subida”. Largar do repouso daria só √(2h/g) = 3 s, menor, porque faltaria a subida inicial.",
    passos: [
      "Origem no lançamento, eixo para cima: y = 10 t − 5 t², e a água está em y = −45.",
      "10 t − 5 t² = −45. Passe tudo para um lado: 5 t² − 10 t − 45 = 0.",
      "Divida por 5, que é diferente de zero: t² − 2 t − 9 = 0.",
      "Bhaskara: t = [2 ± √(4 + 36)] / 2 = [2 ± √40] / 2. √40 = √(4 × 10) = 2√10.",
      "t = [2 ± 2√10] / 2 = 1 ± √10. O tempo físico é o positivo: t = 1 + √10 s. A raiz 1 − √10 é negativa e se descarta.",
    ],
    atalho:
      "√10 ≈ 3,16, então t ≈ 4,16 s. A queda pura de 45 m levaria 3 s, e o lançamento para cima acrescenta pouco mais de um segundo, o tempo de subir e desfazer os 10 m/s. 4,16 s é compatível. √10 sozinho, cerca de 3,16 s, esquece esse extra e fica perto demais da queda pura.",
  },
  "fis-ql-n3q5": {
    intuicao:
      "No terreno plano, sem ar, o alcance depende de quanto tempo o projétil fica no ar e de quão rápido anda para a frente. Um ângulo baixo fica pouco tempo no ar e anda rápido na horizontal. O ângulo complementar fica muito tempo no ar e anda devagar na horizontal. Os dois efeitos se compensam. 30° e 60° formam esse par. 45° é o caso em que o alcance é o maior de todos, sozinho, sem par.",
    motivacao:
      "R = v₀² sen(2θ) / g. O seno repete valores em ângulos suplementares: sen α = sen(180° − α). Então sen 2θ = sen(180° − 2θ) quando 2θ e 180° − 2θ correspondem a dois lançamentos. Isso acontece para θ e 90° − θ, os complementares. A identidade sen(180° − α) = sen α é o motivo algébrico da simetria, e a troca entre v₀ₓ e v₀ᵧ é o motivo físico.",
    passos: [
      "Alcance em terreno plano e sem ar: R = v₀² sen(2θ) / g. A velocidade inicial é a mesma, então R acompanha sen(2θ).",
      "Para 30°: 2θ = 60° e sen 60° = √3/2.",
      "Para 60°: 2θ = 120° e sen 120° = sen(180° − 60°) = sen 60° = √3/2.",
      "Os senos coincidem, logo os alcances coincidem. 30° e 60° são complementares: um tem a componente horizontal que o outro tem na vertical.",
      "45° dá 2θ = 90° e sen 90° = 1, o máximo. 90° dá alcance zero, porque não há componente horizontal. 45° e 90° não formam par de alcances iguais.",
    ],
    atalho:
      "Some os ângulos da alternativa. O par que soma 90°, com a mesma velocidade e chão plano, tem o mesmo alcance. 30° + 60° = 90°. 20° + 40° = 60°, 15° + 30° = 45° e 10° + 70° = 80° não fecham o complemento. 45° + 90° também não é o par simétrico de 45°, que seria o próprio 45°.",
  },
};
