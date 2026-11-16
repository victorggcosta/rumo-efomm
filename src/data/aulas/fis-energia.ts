import type { Didactic } from "./types.ts";

export const didactic: Didactic = {
  origin: [
    "Trabalho, neste sentido, não é esforço vago. É o quanto uma força acompanha um deslocamento. Uma força perpendicular ao deslocamento muda a direção ou equilibra outro eixo, mas não transfere essa conta. O cosseno do ângulo entre força e deslocamento mede essa concordância: 1 quando estão juntos, 0 quando estão a 90°, negativo quando a força aponta contra o movimento.",
    "A energia cinética mede o movimento já adquirido, (1/2) m v². A ligação com o trabalho não é um segundo assunto. Ela sai da segunda lei. Com força constante, v² = v₀² + 2 a Δs e F = m a. Multiplique a primeira por m/2: (1/2) m v² − (1/2) m v₀² = F Δs. O lado direito é o trabalho da resultante. O teorema é essa conta, não um slogan.",
    "A energia potencial gravitacional, mgh perto da Terra, existe porque o trabalho da gravidade entre dois pontos depende só da altura, não do caminho. Força com essa propriedade é conservativa. O atrito cinético não é: o trabalho dele depende do caminho e sai da energia mecânica. Conservar energia num trecho com atrito é fingir que esse trabalho não aconteceu.",
  ],
  construction: [
    "W = F d cos θ, para força constante. θ é o ângulo entre a força e o deslocamento do ponto de aplicação. Força de 20 N a 60° de um deslocamento de 4 m faz 20 × 4 × 1/2 = 40 J. Sem o cosseno, o trabalho dobra à toa.",
    "O trabalho da resultante é ΔK. Se várias forças atuam, a soma dos trabalhos de cada uma também é ΔK, porque a soma das forças é a resultante e o deslocamento é o mesmo. Num guincho que sobe carga com velocidade constante, ΔK = 0. O trabalho do guincho é positivo e igual a mgh. O trabalho do peso é −mgh. A soma é zero. Zerar o trabalho do guincho é confundir uma força com a resultante.",
    "Potencial gravitacional: escolha o zero. U = m g h com esse zero. A diferença entre dois níveis é m g Δh, e o zero cancela. Sem atrito, a queda de potencial vira cinética. m g h = m v² / 2, a massa cancela, v = √(2 g h). A inclinação da rampa não entra, porque a altura é que entra. O caminho mais longo demora mais e não muda a velocidade lá embaixo, se o atrito continuar nulo.",
    "Atrito cinético horizontal de módulo f, ao longo de d, faz trabalho −f d. A cinética final é a inicial menos f d, se a potencial não muda. Um bloco de 2 kg a 6 m/s tem 36 J. Em 4 m com atrito de 5 N, perde 20 J e fica com 16 J, velocidade 4 m/s. Conservar a mecânica manteria 6 m/s, e estaria errado.",
    "Para parar, a cinética inteira é consumida: f d = K. Com μc = 0,2, m = 2 kg, g = 10 m/s² e v = 10 m/s, f = 4 N e K = 100 J, então d = 25 m. A massa não cancela como na queda livre, porque o atrito também depende dela. A conta tem de ser feita, não chutada pelo cancelamento da outra fórmula.",
    "Potência é a rapidez do trabalho, P = W/Δt na média. Se a força acompanha a velocidade, P = F v. No guincho a velocidade constante, F = m g e P = m g v. Duzentos quilogramas a 0,5 m/s, com g = 10, pedem 1.000 W. O número 2.000 é o peso em newtons, não a potência.",
  ],
  examples: [
    {
      title: "Guincho, 4 kg, 2 m, velocidade constante",
      steps: [
        "ΔK = 0, então o trabalho da resultante é zero.",
        "A força do guincho iguala o peso: 40 N para cima. Em 2 m, o trabalho dela é 80 J.",
        "O peso desce em relação ao deslocamento: trabalho −80 J.",
        "80 + (−80) = 0, de acordo com ΔK. O trabalho do guincho não é zero.",
      ],
    },
    {
      title: "Rampa de 3 m de altura, sem atrito",
      steps: [
        "Escolha o zero embaixo. No alto, U = m g × 3 e K = 0.",
        "Embaixo, U = 0 e K = m v² / 2.",
        "m × 10 × 3 = m v² / 2, então v² = 60 e v = √60 m/s.",
        "O ângulo da rampa não aparece. Entraria se houvesse atrito, porque o caminho ao longo do plano mudaria o trabalho dissipado.",
      ],
    },
  ],
  application: [
    "Guincho e pau de carga erguem massa a velocidade quase constante num trecho. A potência que o motor precisa entregar, desprezando perda, é peso vezes velocidade de subida. Se a velocidade dobra, a potência dobra, mesmo que a força continue igual ao peso. Confundir força com potência escolhe o motor errado.",
    "A distância para parar uma carga que desliza no convés, enquanto o atrito puder ser tratado como constante, sai de f d = K. Não é a distância do MUV com outra cara: é a mesma física, lida pela energia. Se o convés molhado diminui μ, d aumenta na mesma proporção.",
    "Uma carga que desce uma rampa sem freio chega embaixo com velocidade fixada pela altura, não pela ladeira. Com freio ou atrito, parte da energia sai no calor dos cabos e das sapatas. Conservar a mecânica nesse caso superestima a velocidade e erra o calço.",
  ],
  traps: [
    "Esquecer cos θ, ou usar sen θ no trabalho.",
    "Dizer que o trabalho do guincho é zero porque a velocidade é constante. Zero é o trabalho da resultante.",
    "Conservar energia mecânica com atrito cinético no trecho.",
    "Achar que a velocidade no pé da rampa sem atrito depende do ângulo.",
    "Trocar potência com trabalho, ou com força. P = F v só quando a força acompanha a velocidade.",
    "Cancelar a massa na frenagem como se cancela na queda livre. No atrito, a massa está dos dois lados de jeitos diferentes.",
    "Trabalho de força perpendicular não é F d. É zero.",
  ],
  bibliography: [
    {
      book: "Helou, Gualter e Newton. Tópicos de Física, vol. 1.",
      place: "Capítulos de trabalho, potência, energia cinética, energia potencial e o teorema da energia cinética.",
      note: "Livro desta aula. Vale refazer, uma vez, a passagem de F = m a até W = ΔK, em vez de só aplicar a fórmula.",
    },
    {
      book: "Ramalho, Nicolau e Toledo. Os Fundamentos da Física, vol. 1.",
      place: "Capítulos de trabalho e energia.",
      note: "Mais problemas de atrito dissipando cinética e de potência em subida a velocidade constante.",
    },
    {
      book: "Halliday, Resnick e Walker. Fundamentos de Física, vol. 1.",
      place: "Capítulo 7, energia cinética e trabalho, e capítulo 8, energia potencial e conservação.",
      note: "Aprofundamento. O capítulo 8 deixa explícito quando a mecânica se conserva e quando o trabalho do atrito entra como energia que sai do sistema.",
    },
  ],
};
