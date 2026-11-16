import type { Didactic } from "./types.ts";

export const didactic: Didactic = {
  origin: [
    "Antes de explicar por que um corpo muda de velocidade, é preciso saber descrever o movimento. A cinemática é essa descrição: posição, instante, velocidade, aceleração, sem ainda pedir a força. Galileu, no plano inclinado, precisava de uma linguagem em que “mais depressa” virasse número. Sem isso, a dinâmica de Newton não teria o que explicar.",
    "O gráfico entrou porque a tabela não mostra a taxa. Uma reta no plano s × t diz, de uma vez, que espaços iguais acontecem em tempos iguais. A área sob v × t nasceu da soma de muitos retângulos finos: em cada instantinho a velocidade é quase constante, e o pedacinho de deslocamento é velocidade vezes tempinho. Somar os pedacinhos é a área. Não é uma regra paralela à fórmula. É a fórmula desenhada.",
    "Movimento uniforme e movimento uniformemente variado são os dois modelos em que a conta fecha com álgebra do ensino médio. No primeiro a velocidade não muda. No segundo a velocidade muda sempre da mesma quantidade a cada segundo. Quase todo movimento real só se parece com um deles por um intervalo. Saber o intervalo em que o modelo vale faz parte do modelo.",
  ],
  construction: [
    "Posição s é a marca na trajetória, com uma origem e um sentido escolhidos. Deslocamento Δs é a diferença s_final − s_inicial. Caminho percorrido é a soma dos trechos, sempre positiva. Se o móvel vai e volta, o caminho cresce e o deslocamento pode voltar a zero. Velocidade escalar média é Δs/Δt. Velocidade vetorial média usa o vetor deslocamento. Na ida e volta ao mesmo ponto, a vetorial média é zero e a escalar média não é.",
    "No movimento uniforme a velocidade escalar v é constante e a aceleração é zero. Em cada segundo o espaço anda v. Em t segundos anda v t. Se não se parte da origem, s = s₀ + v t. O gráfico s × t é uma reta, e a inclinação dessa reta é v. O gráfico v × t é uma reta horizontal. A área desse retângulo é v × t, que é de novo o deslocamento. As duas leituras têm de concordar.",
    "Aceleração escalar média é Δv/Δt. Unidade m/s². Aceleração negativa não significa “andar para trás”. Significa que a velocidade no sentido escolhido está diminuindo. Um carro a 20 m/s que freia com −5 m/s² ainda avança, até a velocidade chegar a zero. A distância dessa freada sai de Torricelli ou de s = v₀ t + a t²/2, e dá 40 m. Parar não apaga o espaço já andado.",
    "No MUV a aceleração é constante. A velocidade cresce em linha reta: v = v₀ + a t. A posição não cresce em linha reta, porque a velocidade do fim do segundo não é a do começo. A velocidade média no intervalo é o meio entre v₀ e v, e o espaço é essa média vezes o tempo. Desenvolvendo, s = s₀ + v₀ t + a t²/2. O termo a t²/2 é o pedaço extra em relação ao uniforme.",
    "Se o tempo não aparece, elimine-o. De v = v₀ + a t tira-se t e substitui-se na posição. O resultado é v² = v₀² + 2 a Δs. Para um móvel que parte do repouso, v² = 2 a Δs. Com a = 2 m/s² e Δs = 9 m, v = 6 m/s. Usar v = a t sem ter o tempo é inventar dado.",
    "No gráfico v × t do MUV a figura é um trapézio ou um triângulo. A inclinação é a aceleração. A área é o deslocamento. Uma subida de 0 a 10 m/s em 4 s seguida de 6 s a 10 m/s tem área 20 m + 60 m = 80 m. A aceleração 2,5 m/s² só existe no primeiro trecho e não substitui a área.",
    "Se a posição é dada por uma fórmula, a velocidade é a taxa. Em s = t² − 4t, a taxa é v = 2t − 4. Ela zera em t = 2 s. Em t = 4 s a posição volta a zero, mas a velocidade vale 4 m/s. Cruzar a origem não é parar. A banca troca esses dois instantes de propósito.",
  ],
  examples: [
    {
      title: "20 km a 40 km/h e 20 km a 60 km/h",
      steps: [
        "A distância total é 40 km. Os tempos não são iguais.",
        "Primeiro trecho: 20/40 = 1/2 h. Segundo: 20/60 = 1/3 h. Soma: 5/6 h.",
        "vm = 40 / (5/6) = 48 km/h.",
        "50 km/h seria a média dos números 40 e 60, que ignora que se fica mais tempo no trecho lento.",
      ],
    },
    {
      title: "Freada de 20 m/s com a = −5 m/s²",
      steps: [
        "A parada: 0 = 20 − 5 t, então t = 4 s.",
        "s = 20 × 4 + (−5) × 16 / 2 = 80 − 40 = 40 m.",
        "Torricelli: 0 = 400 + 2(−5)Δs, então Δs = 40 m.",
        "A aceleração é negativa e o deslocamento é positivo. Os dois sinais convivem.",
      ],
    },
  ],
  application: [
    "Estimar um ETA com velocidade constante é usar o MU: tempo = distância / velocidade, depois de converter nós e milhas para a mesma unidade. Se a velocidade muda de trecho, a média honesta soma os tempos. A média aritmética das velocidades atrasa ou adianta a chegada.",
    "Uma freada, um navio que reduz de máquina, um carro de terminal que para antes do batente: enquanto a desaceleração puder ser tratada como constante, a distância sai do MUV. O sinal negativo da aceleração não muda o fato de que o veículo ainda come espaço até parar.",
    "Um registrador desenha v × t ou s × t. Ler a inclinação como velocidade no gráfico de posição, e a área como deslocamento no gráfico de velocidade, é o ofício. Trocar as duas leituras produz um número com a unidade errada e uma decisão errada.",
  ],
  traps: [
    "Trocar velocidade escalar média pela média aritmética das velocidades em trechos de mesma distância.",
    "Chamar de velocidade vetorial média o caminho dividido pelo tempo. Na ida e volta, a vetorial média é zero.",
    "Ler inclinação de v × t como deslocamento, ou área de s × t como velocidade.",
    "Achar que aceleração negativa significa deslocamento negativo. Durante a freada o móvel ainda avança.",
    "Usar s = a t² sem o denominador 2, ou usar s = v t num trecho em que a velocidade mudou.",
    "Confundir o instante em que s = 0 com o instante em que v = 0. Em s = t² − 4t, são t = 0 ou 4 s para a posição, e t = 2 s para a velocidade.",
  ],
  bibliography: [
    {
      book: "Helou, Gualter e Newton. Tópicos de Física, vol. 1.",
      place: "Capítulos de cinemática escalar: movimento uniforme, movimento uniformemente variado e gráficos.",
      note: "Livro desta aula. Faça os gráficos junto com as fórmulas, não depois.",
    },
    {
      book: "Ramalho, Nicolau e Toledo. Os Fundamentos da Física, vol. 1.",
      place: "Capítulos de cinemática escalar.",
      note: "Mesmo conteúdo, outra ordem de exercícios. Bom para a freada e para a velocidade média em dois trechos.",
    },
    {
      book: "Halliday, Resnick e Walker. Fundamentos de Física, vol. 1.",
      place: "Capítulo 2, Movimento retilíneo.",
      note: "Aprofundamento. O Halliday insiste na leitura de gráfico e no significado de velocidade instantânea. Deixe para depois que as contas do Tópicos estiverem estáveis.",
    },
  ],
};
