import type { Didactic } from "./types.ts";

export const didactic: Didactic = {
  origin: [
    "Sadi Carnot publica, em 1824, as Reflexões sobre a potência motriz do fogo. A pergunta é prática: quanto trabalho uma máquina a vapor pode tirar do calor. Carnot ainda fala em calórico, uma substância que se conservaria. A conclusão que sobreviveu não depende dessa imagem. Entre duas temperaturas, há um teto para o rendimento, e esse teto só depende das temperaturas.",
    "Joule mostra que trabalho vira calor numa taxa fixa. Clausius e Kelvin reescrevem o ciclo com a energia e com a segunda lei. A primeira lei faz a contabilidade: energia não se cria. A segunda diz que essa contabilidade não basta. Nem todo calor vira trabalho num ciclo.",
    "A convenção desta aula: Q é o calor recebido pelo sistema e W é o trabalho feito pelo sistema. A primeira lei fica ΔU = Q − W. Se o sistema cede calor, Q é negativo. Se a vizinhança faz trabalho sobre o sistema, W é negativo.",
  ],
  construction: [
    "Energia interna U é função de estado. Depende do estado, não do caminho. Num ciclo, o estado inicial volta, então ΔU = 0. Para um gás ideal, U depende só da temperatura. Numa isotérmica, ΔU = 0. Numa adiabática, Q = 0, e ΔU = −W. Numa isocórica, o volume não muda, o trabalho de expansão é zero e ΔU = Q.",
    "Um gás que recebe 200 J e realiza 50 J fica com ΔU = 150 J. Somar 250 J trata o trabalho como se entrasse no sistema. Na expansão isotérmica do gás ideal, ΔU = 0 e W = Q: o calor absorvido sai como trabalho. Isso é um trecho, não uma máquina. A máquina precisa fechar o ciclo e devolver o gás ao estado inicial.",
    "No ciclo, W = Qq − Qf. Qq é o calor absorvido da fonte quente. Qf é o calor rejeitado para a fonte fria, escrito aqui como número positivo. Se a máquina absorve 800 J e rejeita 500 J, o trabalho é 300 J. O rendimento é η = W / Qq = 300/800 = 3/8. Qf/Qq = 5/8 é a fração rejeitada, não o rendimento.",
    "Kelvin e Planck: nenhum ciclo transforma em trabalho todo o calor absorvido de uma única fonte. Há sempre rejeição para uma fonte mais fria, se a máquina volta ao estado inicial e produz trabalho. Rendimento 1 não é um projeto à espera de um isolante melhor.",
    "O ciclo de Carnot usa duas isotérmicas e duas adiabáticas, todas reversíveis. Entre as temperaturas absolutas Tq e Tf, o rendimento é η = 1 − Tf/Tq. As temperaturas entram em kelvin. Entre 400 K e 300 K, η = 1 − 300/400 = 1/4. A fração 300/400 = 3/4 é Tf/Tq, que no ciclo de Carnot também é Qf/Qq.",
    "Celsius não entra na razão. 27 °C e 227 °C são 300 K e 500 K. η = 1 − 300/500 = 0,4. A conta 1 − 27/227 usa um zero arbitrário da escala e não é temperatura termodinâmica.",
    "Entre 600 K e 300 K, η = 1/2. Se a fonte quente entrega 2.000 J, o trabalho é 1.000 J e a fonte fria recebe 1.000 J. Com 4.000 J na caldeira de uma máquina ideal entre essas temperaturas, o trabalho máximo do ciclo é 2.000 J. O resto vai para a água de refrigeração.",
    "Nenhuma máquina entre as mesmas duas temperaturas supera Carnot. A real, com atrito e com troca de calor através de uma diferença finita, fica abaixo. Igualar Carnot exigiria um ciclo reversível, que não é o regime de uma instalação de bordo.",
    "O refrigerador de Carnot inverte o uso. Retira Qf da fonte fria e rejeita Qq na quente, consumindo W = Qq − Qf. O coeficiente de desempenho, para o frio, é Qf/W = Tf/(Tq − Tf). Entre 270 K e 300 K, esse coeficiente é 270/30 = 9. A razão 270/300 não é o coeficiente.",
  ],
  examples: [
    {
      title: "Carnot entre 27 °C e 227 °C",
      steps: [
        "27 °C = 300 K. 227 °C = 500 K.",
        "η = 1 − 300/500 = 0,4.",
        "1 − 27/227 usa celsius e não é o rendimento.",
      ],
    },
    {
      title: "2.000 J entre 600 K e 300 K",
      steps: [
        "η = 1 − 300/600 = 1/2.",
        "W = 1.000 J.",
        "Qf = 1.000 J. No Carnot, Qf/Qq = Tf/Tq confirma a mesma conta.",
      ],
    },
  ],
  application: [
    "A instalação a vapor do navio é uma máquina térmica. A caldeira é a fonte quente. O condensador, refrigerado pela água do mar, é a fonte fria. Se o vapor está a 600 K e a água a 300 K, o teto de Carnot é 1/2. Uma instalação real fica abaixo disso. Prometer que todo o calor da caldeira vira trabalho no eixo ignora o calor que o condensador devolve ao mar.",
    "O número interessa na comparação, não como rendimento medido. Se alguém anuncia 70% entre 600 K e 300 K, a segunda lei já recusou a conta, antes de olhar o fabricante. O teto é 50%.",
    "Um refrigerador de câmara frigorífica também tem teto. Entre 270 K e 300 K, o Carnot entrega no máximo 9 joules de calor retirado da câmara por joule de trabalho. Menos que isso é o regime real. Mais que isso não fecha a primeira lei com a razão das temperaturas.",
  ],
  traps: [
    "Usar ΔU = Q + W com a convenção em que W já é o trabalho do sistema.",
    "No ciclo, somar Qq e Qf para achar o trabalho. O trabalho é a diferença.",
    "Chamar Qf/Qq de rendimento.",
    "Colocar celsius na fórmula de Carnot.",
    "Inverter a razão e escrever 1 − Tq/Tf, que pode passar de 1 ou ficar negativa.",
    "Achar que uma máquina real bem isolada ultrapassa Carnot.",
    "Tratar a expansão isotérmica, em que W = Q, como se fosse um ciclo de rendimento 1.",
    "No refrigerador, usar Tf/Tq no lugar de Tf/(Tq − Tf).",
  ],
  bibliography: [
    {
      book: "Helou, Gualter e Newton. Tópicos de Física, vol. 2.",
      place: "Capítulos de termodinâmica: primeira lei, transformações gasosas e máquinas térmicas.",
      note: "Livro desta aula. Confira a convenção de sinal do trabalho no capítulo, e mantenha a desta aula, ΔU = Q − W, ao longo das contas.",
    },
    {
      book: "Ramalho, Nicolau e Toledo. Os Fundamentos da Física, vol. 2.",
      place: "Capítulos de calor, gases e rendimento de máquinas.",
      note: "Segunda bateria, em especial ciclo e a diferença entre rendimento e coeficiente de desempenho.",
    },
    {
      book: "Halliday, Resnick e Walker. Fundamentos de Física.",
      place: "Capítulos da primeira lei e da segunda lei, no trecho das máquinas térmicas e do ciclo de Carnot.",
      note: "Aprofundamento. O texto separa o teto de Carnot da máquina real e mostra por que a temperatura da fórmula é a absoluta.",
    },
  ],
};
