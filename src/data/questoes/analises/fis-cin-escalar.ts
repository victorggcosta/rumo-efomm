import type { AnaliseQuestao } from "../../lessons.ts";

export const ANALISES: Record<string, AnaliseQuestao> = {
  "fis-ci-n1q1": {
    intuicao:
      "O móvel anda 100 m em linha reta, sempre no mesmo sentido, e gasta 20 s. A velocidade escalar média é o quanto a posição mudou dividido pelo tempo que essa mudança levou. Não é a velocidade de cada instante, que o enunciado nem deu. É a taxa média do percurso inteiro.",
    motivacao:
      "A definição vₘ = Δs/Δt vem de querer uma velocidade constante que, no mesmo tempo, produzisse o mesmo deslocamento. Dividir, e não somar, é o que transforma espaço e tempo numa velocidade. Somar 100 e 20 misturaria metro com segundo. A unidade m/s já denuncia a divisão.",
    passos: [
      "Definição: velocidade escalar média é Δs/Δt, a variação do espaço sobre a variação do tempo.",
      "Δs = 100 m e Δt = 20 s, no mesmo sentido, então o deslocamento escalar coincide com a distância.",
      "Divisão: 100/20 = 5. A unidade é m/s.",
      "vₘ = 5 m/s. 2.000 seria o produto 100 × 20, que nem está nas alternativas; 0,2 m/s inverteria a fração.",
    ],
    atalho:
      "100 metros em 20 segundos é 5 metros em cada segundo. A frase “por segundo” já é a divisão. 5 m/s é a leitura direta.",
  },
  "fis-ci-n1q2": {
    intuicao:
      "Movimento uniforme quer dizer velocidade que não muda. Se a posição inicial é zero e a velocidade é 5 m/s, cada segundo empurra a posição mais 5 m. Em 8 s são oito desses passos. A posição é o produto, não a soma de 5 com 8.",
    motivacao:
      "s = s₀ + v t é a definição de velocidade constante integrada: o deslocamento é a taxa vezes o tempo. Com s₀ = 0, a reta do gráfico s × t passa pela origem e a inclinação é v. Somar v e t quebraria a homogeneidade dimensional, porque metro por segundo não se soma com segundo.",
    passos: [
      "MU com origem na posição zero: s = v t. A velocidade entra multiplicando porque Δs = v Δt.",
      "Substituição: s = 5 × 8.",
      "Produto: 40. A unidade (m/s) × s = m.",
      "A posição é 40 m. 13 m seria 5 + 8, soma de grandezas incompatíveis.",
    ],
    atalho:
      "Conte de 8 em 8? Melhor: 5 m a cada segundo, oito vezes, 40 m. Se a alternativa não está em metros, ou se soma os dados, ela mistura unidades.",
  },
  "fis-ci-n1q3": {
    intuicao:
      "A velocidade era 10 m/s e passou a ser 30 m/s. A mudança foi de 20 m/s, espalhada por 4 s. A aceleração média é essa mudança de velocidade por segundo. O desenho no gráfico v × t é a inclinação da reta que liga os dois pontos, não a altura da reta.",
    motivacao:
      "a = Δv/Δt é a definição de aceleração escalar média. Usa-se a variação, 30 − 10, e não a velocidade final sozinha, porque aceleração mede mudança. Dividir 30 por 4 responderia outra pergunta. A unidade (m/s)/s = m/s² confirma que a conta produz aceleração.",
    passos: [
      "Variação da velocidade: Δv = 30 − 10 = 20 m/s. A subtração é o quanto a velocidade mudou.",
      "Definição: a = Δv/Δt = 20/4.",
      "Divisão: 20/4 = 5. Unidade m/s².",
      "A aceleração é 5 m/s². 20 m/s² seria esquecer a divisão pelo tempo, ou dividir 20 por 1.",
    ],
    atalho:
      "A velocidade ganhou 20 m/s em 4 s, isto é, 5 m/s em cada segundo. Essa frase é a definição falada de 5 m/s².",
  },
  "fis-ci-n1q4": {
    intuicao:
      "No gráfico v × t, a altura é a velocidade e a inclinação é a aceleração. Uma reta horizontal tem altura constante e inclinação zero. A velocidade não muda, e a aceleração é nula. Estar acima do eixo só diz que o sentido escolhido como positivo é o sentido do movimento. Não diz que a posição é zero nem que há queda livre.",
    motivacao:
      "Ler o gráfico pela grandeza que cada elemento representa evita decorar uma lista de formatos. Inclinação zero significa taxa de variação zero. Taxa de variação da velocidade é aceleração. Logo horizontal significa aceleração nula e, como a altura não muda, velocidade constante. Isso é a definição de movimento uniforme.",
    passos: [
      "No gráfico v × t, a ordenada é v e o coeficiente angular é a = Δv/Δt.",
      "Reta horizontal: Δv = 0 em qualquer intervalo. A inclinação é zero, então a = 0.",
      "Altura constante e diferente de zero: a velocidade escalar é constante e não nula.",
      "Aceleração nula e velocidade constante caracterizam o movimento uniforme, não o MUV.",
    ],
    atalho:
      "Horizontal em v × t é MU. Inclinada e reta é MUV. Horizontal em s × t é repouso. Trocar o eixo vertical muda a leitura inteira. Aqui o eixo é velocidade, então horizontal é velocidade firme.",
  },
  "fis-ci-n1q5": {
    intuicao:
      "Um retângulo no gráfico v × t tem base em segundos e altura em m/s. A área desse retângulo não é um número solto: segundo vezes metro por segundo dá metro. A área é um deslocamento. A figura de 4 s por 5 m/s representa o quanto a posição andou enquanto a velocidade ficou constante.",
    motivacao:
      "A área sob v × t é o deslocamento porque Δs = ∫ v dt, e num retângulo a integral é base vezes altura. Dividir altura por base daria a aceleração, que numa horizontal é zero, não 5/4. A pergunta nomeia deslocamento, então a operação é a área, não a inclinação.",
    passos: [
      "Propriedade do gráfico: a área algébrica entre a curva de v × t e o eixo do tempo é o deslocamento.",
      "Retângulo acima do eixo: área = base × altura = 4 s × 5 m/s.",
      "Produto: 20, com unidade m. O sinal é positivo porque a área está acima do eixo.",
      "O deslocamento é 20 m. 1,25 m/s² seria 5/4, uma divisão que não é a área.",
    ],
    atalho:
      "5 m/s durante 4 s, no MU, dão s = v t = 20 m. A área do retângulo é essa fórmula desenhada. Não divida os lados.",
  },
  "fis-ci-n2q1": {
    intuicao:
      "Os dois trechos têm 20 km, mas não duram o mesmo tempo. A 40 km/h, 20 km levam meia hora. A 60 km/h, os mesmos 20 km levam vinte minutos. Quem anda devagar ocupa mais tempo, então puxa a média para baixo de 50 km/h. A média aritmética das velocidades só funcionaria se os tempos fossem iguais.",
    motivacao:
      "Velocidade escalar média é distância total sobre tempo total, pela definição, não a média dos valores de v. Os tempos são diferentes justamente porque as velocidades são diferentes em trechos de mesma distância. Calcular cada Δt = Δs/v e só então dividir o espaço total pelo tempo total respeita a definição. A média harmônica é o atalho dessa mesma conta quando as distâncias coincidem.",
    passos: [
      "Tempo do primeiro trecho: Δt₁ = 20/40 = 0,5 h = 1/2 h.",
      "Tempo do segundo: Δt₂ = 20/60 = 1/3 h.",
      "Tempo total: 1/2 + 1/3 = 3/6 + 2/6 = 5/6 h. Distância total: 40 km.",
      "Definição: vₘ = 40 / (5/6) = 40 × 6/5 = 48 km/h.",
      "50 km/h seria (40 + 60)/2, média aritmética, válida para tempos iguais, que não é o caso.",
    ],
    atalho:
      "Para distâncias iguais, a média é a harmônica: 2 / (1/40 + 1/60) = 2 / (3/120 + 2/120) = 2 / (5/120) = 2 × 24 = 48 km/h. Ela dá menos que a aritmética porque o trecho lento pesa mais no tempo.",
  },
  "fis-ci-n2q2": {
    intuicao:
      "O móvel sai do repouso na origem e acelera 2 m/s², sem mudar essa aceleração. A velocidade cresce, então ele não anda a distância que andaria se já tivesse a velocidade final o tempo todo. A posição fica na metade do produto a t². Em 4 s a velocidade final seria 8 m/s, mas a velocidade média durante a arrancada é 4 m/s.",
    motivacao:
      "s = s₀ + v₀ t + a t²/2 é a equação do MUV. O termo a t²/2 aparece porque a velocidade média, entre v₀ e v₀ + a t, é v₀ + a t/2, e o deslocamento é essa média vezes o tempo. Com v₀ = 0 e s₀ = 0, sobra a t²/2. Esquecer o 2 no denominador dobra a distância e corresponde a usar a velocidade final como se fosse a média.",
    passos: [
      "Repouso e origem: v₀ = 0 e s₀ = 0. MUV: s = a t² / 2.",
      "t² = 16. Então s = 2 × 16 / 2.",
      "O 2 do numerador e o 2 do denominador se cancelam: s = 16 m.",
      "Sem o denominador 2, a t² = 32 m seria o dobro, que é v_final × t, não a distância real.",
    ],
    atalho:
      "v = a t = 8 m/s no fim. A velocidade média entre 0 e 8 é 4 m/s. Em 4 s, 4 × 4 = 16 m. A média aritmética das velocidades vale no MUV porque v cresce em linha reta.",
  },
  "fis-ci-n2q3": {
    intuicao:
      "O móvel sai do zero, acelera 2 m/s² e, em algum momento, já andou 9 m. O tempo não foi dado, então a equação que ainda tem t no meio não é a primeira escolha. A equação de Torricelli liga velocidade, aceleração e distância sem pedir o relógio. A velocidade procurada é a do fim desses 9 m.",
    motivacao:
      "v² = v₀² + 2 a Δs elimina o tempo porque ela nasce de substituir t = (v − v₀)/a na equação da posição. Use-a quando o enunciado dá espaço e aceleração e esconde o tempo. Isolar v, e não v², pede a raiz no fim. O sinal da raiz segue o sentido do movimento: partiu do repouso no sentido positivo, então v ≥ 0.",
    passos: [
      "Torricelli, aceleração constante: v² = v₀² + 2 a Δs.",
      "v₀ = 0, a = 2 m/s² e Δs = 9 m. v² = 0 + 2 × 2 × 9 = 36.",
      "v = √36 = 6, a raiz não negativa, porque o móvel partiu do repouso no sentido positivo.",
      "A velocidade é 6 m/s. 36 m/s seria esquecer a raiz e tratar v² como v.",
    ],
    atalho:
      "Pelo tempo: 9 = a t²/2 = t², então t = 3 s. v = a t = 2 × 3 = 6 m/s. As duas fórmulas concordam, e a concordância é a conferência.",
  },
  "fis-ci-n2q4": {
    intuicao:
      "O gráfico s × t é uma reta que passa pela origem e pelo ponto (4 s, 20 m). Em s × t, subir 20 m em 4 s é a velocidade. A reta não entorta, então essa velocidade não muda. A pergunta pede a inclinação, não a área e não a altura final sozinha.",
    motivacao:
      "A inclinação de s × t é Δs/Δt, que é a definição de velocidade escalar. Numa reta, a inclinação é constante, e o movimento é uniforme. Calcular a razão entre os dois pontos dados basta porque a reta passa pela origem: não há um segundo trecho com outra taxa. A área desse gráfico não é o deslocamento; esse papel pertence ao gráfico v × t.",
    passos: [
      "No gráfico s × t, a velocidade escalar é o coeficiente angular Δs/Δt.",
      "Δs = 20 − 0 = 20 m e Δt = 4 − 0 = 4 s.",
      "Divisão: 20/4 = 5 m/s.",
      "A reta pela origem é s = 5 t. Velocidade constante: movimento uniforme.",
    ],
    atalho:
      "20 m em 4 s são 5 m a cada segundo. 5 m/s. 80 m seria o produto dos dois números do ponto, sem significado de velocidade.",
  },
  "fis-ci-n2q5": {
    intuicao:
      "O carro chega a 20 m/s e freia até parar, perdendo 5 m/s a cada segundo. Ele não para no mesmo instante em que o freio é acionado: ainda anda enquanto a velocidade cai. A distância de frenagem é esse resto de caminho, positivo, mesmo com a aceleração negativa. Parar significa velocidade final zero, não posição zero.",
    motivacao:
      "Torricelli liga v, v₀, a e Δs sem obrigar a achar o tempo primeiro. A aceleração entra negativa porque o sentido positivo foi o do movimento e a freada aponta contra ele. A distância Δs continua positiva: o sinal negativo de a, multiplicado na equação, é o que reduz v² até zero. A via do tempo, com velocidade média, serve de segunda conta.",
    passos: [
      "Parada: v = 0. Torricelli: 0 = v₀² + 2 a Δs.",
      "Substituição: 0 = 20² + 2(−5) Δs = 400 − 10 Δs.",
      "10 Δs = 400, então Δs = 40 m. A divisão por 10 conserva a igualdade.",
      "Pelo tempo: 0 = 20 − 5 t dá t = 4 s. A velocidade média entre 20 e 0 é 10 m/s. Δs = 10 × 4 = 40 m.",
      "As duas contas concordam. A distância de frenagem é 40 m.",
    ],
    atalho:
      "Perde 5 m/s por segundo e precisa perder 20 m/s: são 4 s. Na metade da velocidade, 10 m/s, vezes 4 s, são 40 m. A regra “velocidade média vezes tempo” vale porque a freada é MUV.",
  },
  "fis-ci-n3q1": {
    intuicao:
      "O gráfico sobe como uma rampa nos primeiros 4 s e depois vira um platô de 10 m/s por mais 6 s. O deslocamento é a área debaixo dessa linha, não a altura 10 e não a soma dos tempos. A rampa é um triângulo. O platô é um retângulo. Somar as duas áreas dá o quanto a posição andou nos 10 s.",
    motivacao:
      "A área sob v × t é o deslocamento em qualquer movimento, porque cada retângulo fino v × dt é um pedacinho de espaço. Separar triângulo e retângulo usa só áreas de figuras conhecidas. A inclinação da rampa é a aceleração, 2,5 m/s², e a inclinação do platô é zero. Nenhuma das duas inclinações é o deslocamento pedido.",
    passos: [
      "Primeiro trecho: triângulo de base 4 s e altura 10 m/s. Área = base × altura / 2 = 4 × 10 / 2 = 20 m.",
      "Segundo trecho: retângulo de base 6 s e altura 10 m/s. Área = 6 × 10 = 60 m.",
      "Áreas acima do eixo se somam com sinal positivo. Deslocamento total: 20 + 60 = 80 m.",
      "A aceleração do primeiro trecho é 10/4 = 2,5 m/s² e não entra na soma das áreas.",
    ],
    atalho:
      "O triângulo é metade de um retângulo 4 × 10, isto é, 20 m. O retângulo seguinte é 60 m. 20 + 60 = 80 m. 100 m seria 10 m/s × 10 s, como se a velocidade já tivesse nascido em 10 m/s.",
  },
  "fis-ci-n3q2": {
    intuicao:
      "s(t) = t² − 4t é uma parábola do espaço. A velocidade escalar é a inclinação dessa curva, que muda com o tempo. Ela se anula no fundo do vale, onde a curva para de descer e começa a subir. Voltar a s = 0 é cruzar a origem de novo, o que pode acontecer com velocidade diferente de zero. Parar e passar pela origem não são o mesmo instante.",
    motivacao:
      "Se o espaço é um polinômio do segundo grau, a velocidade é a taxa de variação, o polinômio do primeiro grau obtido pela regra da potência: a derivada de tⁿ é n tⁿ⁻¹. Igualar essa taxa a zero acha o instante da parada. Igualar s(t) a zero acha as passagens pela origem. Separar as duas equações é o motivo de não responder t = 4 s, que é uma raiz de s, não de v.",
    passos: [
      "Taxa de variação: se s = t² − 4t, então v = 2t − 4. A potência t² desce para 2t, e a derivada de −4t é −4.",
      "Velocidade nula: 2t − 4 = 0. Some 4 e divida por 2: t = 2 s.",
      "Nesse instante, s(2) = 4 − 8 = −4 m. O móvel parou fora da origem.",
      "s(4) = 16 − 16 = 0, mas v(4) = 8 − 4 = 4 m/s. Ele cruza a origem sem parar.",
    ],
    atalho:
      "s = t(t − 4) zera em 0 e em 4. O vértice da parábola, onde a inclinação é zero, fica no meio: t = 2 s. A média das raízes do espaço é o instante de velocidade nula, porque s é do segundo grau com coeficiente positivo.",
  },
  "fis-ci-n3q3": {
    intuicao:
      "O móvel vai e volta pelo mesmo caminho. No fim, está no ponto de onde saiu. A seta deslocamento, do início ao fim, tem comprimento zero, mesmo que os pés tenham andado 200 m. A velocidade vetorial média usa essa seta, não a soma dos trechos. Por isso ela pode ser zero numa viagem que não ficou parada.",
    motivacao:
      "A definição de velocidade vetorial média é deslocamento vetorial sobre o tempo total. O deslocamento é a diferença entre a posição final e a inicial. Se elas coincidem, o numerador é o vetor nulo, e o quociente também é. A velocidade escalar média usaria a distância percorrida, 200 m em 30 s, e daria cerca de 6,7 m/s. A pergunta nomeia a vetorial para barrar essa conta.",
    passos: [
      "Deslocamento vetorial: posição final menos posição inicial. Ele voltou ao ponto de partida, então Δr = 0.",
      "Tempo total: 10 s + 20 s = 30 s. O tempo não é zero.",
      "Velocidade vetorial média: Δr/Δt = 0/30 = 0.",
      "A velocidade escalar média seria 200/30 ≈ 6,7 m/s. É outra grandeza, a da distância percorrida.",
    ],
    atalho:
      "Ida e volta ao mesmo ponto: deslocamento nulo, velocidade vetorial média nula, qualquer que seja o tempo gasto, desde que o tempo não seja zero. 6,7 m/s está na lista para quem leu “escalar”. A palavra vetorial muda o numerador.",
  },
  "fis-ci-n3q4": {
    intuicao:
      "A velocidade cai em linha reta de 10 m/s até zero em 5 s. A figura é um triângulo encostado no eixo. A área desse triângulo é o deslocamento. A inclinação, negativa, é a aceleração, e uma das alternativas oferece esse número com a unidade errada de propósito. A pergunta pede o quanto a posição andou, não a taxa da freada.",
    motivacao:
      "De novo a área, porque o deslocamento é a integral de v. Num triângulo, base vezes altura sobre dois. A divisão por dois é a mesma ideia da velocidade média: a média entre 10 e 0 é 5 m/s, vezes 5 s dá 25 m. Usar a área evita confundir o resultado com a aceleração (0 − 10)/5 = −2 m/s².",
    passos: [
      "A região é um triângulo de base 5 s e altura 10 m/s, acima do eixo.",
      "Área = base × altura / 2 = 5 × 10 / 2 = 25 m.",
      "Sinal positivo: a velocidade desenha área acima do eixo, no sentido positivo.",
      "A inclinação (0 − 10)/5 = −2 m/s² é a aceleração. A alternativa “2 m/s²” não é deslocamento.",
    ],
    atalho:
      "Velocidade média da freada: (10 + 0)/2 = 5 m/s. Em 5 s, o deslocamento é 25 m. Metade do retângulo 5 × 10 é o mesmo triângulo.",
  },
  "fis-ci-n3q5": {
    intuicao:
      "O móvel ainda vai para a frente a 4 m/s, mas a aceleração de −2 m/s² está comendo 2 m/s a cada segundo. Ele para quando a velocidade chega a zero, daqui a 2 s, e a pergunta corta a história nesse instante. Se a aceleração continuasse, ele voltaria, e a distância percorrida deixaria de coincidir com o deslocamento líquido. Até a parada, os dois coincidem.",
    motivacao:
      "Há duas equações independentes que não usam dados diferentes: a do tempo até v = 0 e a de Torricelli. Usar as duas é a conferência. O sinal de a fica negativo no sentido escolhido, e Δs sai positivo. Parar em t = 2 s também limita a integral: não se integra além da parada se a pergunta diz “até a parada”.",
    passos: [
      "Parada: v = 0 = 4 + (−2) t. Então 2t = 4 e t = 2 s.",
      "Posição no MUV, com s₀ = 0: s = v₀ t + a t²/2 = 4 × 2 + (−2) × 4 / 2 = 8 − 4 = 4 m.",
      "Torricelli: 0 = 4² + 2(−2) Δs = 16 − 4 Δs. Então 4 Δs = 16 e Δs = 4 m.",
      "Até a parada, a distância percorrida no sentido inicial é 4 m. As duas fórmulas concordam.",
    ],
    atalho:
      "Perde 2 m/s por segundo e tem 4 m/s: para em 2 s. Velocidade média 2 m/s vezes 2 s dá 4 m. 8 m seria v₀ t sem descontar a freada, isto é, sem o termo a t²/2.",
  },
};
