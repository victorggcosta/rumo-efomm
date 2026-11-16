import type { AnaliseQuestao } from "../../lessons.ts";

export const ANALISES: Record<string, AnaliseQuestao> = {
  "mat-tr-n1q1": {
    intuicao:
      "30° é o menor ângulo do triângulo 30-60-90. O lado oposto a ele é o menor cateto, e nesse triângulo o menor cateto é metade da hipotenusa. No ciclo de raio 1 a hipotenusa é o próprio raio, então a altura do ponto, que é o seno, fica na metade. A pergunta pede essa altura, não o cateto encostado no ângulo.",
    motivacao:
      "√3/2 é a altura do ângulo de 60°, e a banca a coloca ao lado para quem troca seno de 30° com seno de 60°. O motivo por que 30° fica com a metade é a construção do triângulo: ele nasce da metade de um equilátero, e a metade do lado é o cateto oposto a 30°. Sem essa figura, os dois valores notáveis se misturam.",
    passos: [
      "Triângulo retângulo 30-60-90: o cateto oposto a 30° mede metade da hipotenusa. É a propriedade que sai ao cortar um equilátero ao meio.",
      "Ciclo de raio 1: a hipotenusa é o raio 1, então o cateto oposto a 30° mede 1/2.",
      "Definição de seno no ciclo: sen θ é a ordenada do ponto. Portanto sen 30° = 1/2.",
      "O valor é 1/2. √3/2 é sen 60° e também cos 30°. √2/2 é sen 45°. 1 é sen 90°.",
    ],
    atalho:
      "O seno cresce de 0° até 90°. sen 0° = 0 e sen 90° = 1, então sen 30° tem de ser um valor pequeno e positivo. 1/2 é o menor positivo da lista de notáveis. √3/2 já está perto de 1 e pertence a 60°.",
  },
  "mat-tr-n1q2": {
    intuicao:
      "cos 60° lê a sombra horizontal do ponto que está a 60° no ciclo, não a altura. Nesse ponto o raio está mais em pé do que deitado, então a projeção no eixo horizontal é o pedaço curto. O mesmo triângulo 30-60-90 põe a metade da hipotenusa encostada no ângulo de 60°. A pergunta pede esse pedaço deitado.",
    motivacao:
      "√3/2 é sen 60° e também cos 30°, a troca clássica entre seno e cosseno. O motivo por que 60° fica com 1/2 no cosseno é que cosseno é o cateto adjacente, e o adjacente a 60° é o menor cateto. Cofunção confirma: cos 60° = sen 30°, e sen 30° já é a metade. Sem separar adjacente de oposto, os dois valores notáveis trocam de lugar.",
    passos: [
      "Definição no ciclo: cos θ é a abscissa do ponto. No triângulo, é o cateto adjacente dividido pela hipotenusa.",
      "Triângulo 30-60-90: o cateto adjacente a 60° é a metade da hipotenusa, o lado menor.",
      "Hipotenusa 1 no ciclo unitário: o adjacente mede 1/2. Logo cos 60° = 1/2.",
      "Cofunção: cos 60° = sen (90° − 60°) = sen 30° = 1/2. √3/2 seria sen 60° ou cos 30°.",
    ],
    atalho:
      "cos 60° e sen 30° são o mesmo número, porque 60° e 30° somam 90°. Quem já sabe que sen 30° = 1/2 não recalcula o triângulo. √3/2 é maior e corresponde ao cateto longo, que não é o adjacente de 60°.",
  },
  "mat-tr-n1q3": {
    intuicao:
      "90° coloca o raio em pé, no ponto mais alto do ciclo. Não sobra deslocamento para a direita nem para a esquerda: a abscissa é 0. Toda a medida do raio, que vale 1, está na vertical. Seno lê essa altura. A pergunta pede a ordenada do topo, não a abscissa e não uma raiz notável do meio do caminho.",
    motivacao:
      "Responder 0 troca seno com cosseno, porque cos 90° é que se anula. O motivo por que o seno vale 1 é que, no topo, a ordenada coincide com o raio inteiro do ciclo unitário. Dizer que não existe confundiria sen 90° com tg 90°, que realmente divide por um cosseno nulo. Aqui não há divisão.",
    passos: [
      "Ponto do ciclo em 90°: (cos 90°, sen 90°) = (0, 1). A abscissa zera e a ordenada vale o raio.",
      "Definição de seno no ciclo: sen θ é a ordenada do ponto. Portanto sen 90° = 1.",
      "Identidade de conferência: sen² 90° + cos² 90° = 1² + 0² = 1, que fecha com o raio.",
      "O valor é 1. 0 é cos 90°. 1/2 é sen 30°. √2/2 é sen 45°. O valor existe e é real.",
    ],
    atalho:
      "De 0° a 90° o seno sobe de 0 até o máximo do ciclo, que é 1. 90° é exatamente esse topo. Qualquer raiz da lista, 1/2 ou √2/2, é altura de um ângulo menor. O máximo só é atingido em 90°.",
  },
  "mat-tr-n1q4": {
    intuicao:
      "45° corta o canto de um quadrado ao meio. Os dois catetos do triângulo que se forma são lados do quadrado, logo são iguais. Tangente compara o cateto oposto com o adjacente. Se os dois medem a mesma coisa, a comparação dá um para um. A pergunta pede essa razão, não o comprimento de um dos lados.",
    motivacao:
      "√2 é a hipotenusa quando os catetos valem 1, e a banca a oferece para quem responde com o lado em vez da razão. O motivo por que a tangente vale 1 é que ela é oposto dividido por adjacente, e esses dois catetos são iguais em 45°. A hipotenusa √2 aparece nos seno e cosseno, e no quociente ela cancela.",
    passos: [
      "Definição: tg θ = sen θ / cos θ, desde que cos θ seja diferente de zero. Em 45° o cosseno não é zero.",
      "Valores notáveis: sen 45° = √2/2 e cos 45° = √2/2. Os dois catetos do triângulo isósceles são iguais.",
      "Quociente de valores iguais: (√2/2) / (√2/2) = 1. O fator √2/2 cancela e sobra 1.",
      "O valor é 1. √2 seria a hipotenusa de catetos 1. √3 é tg 60°. 0 é tg 0°.",
    ],
    atalho:
      "No ciclo, o ponto de 45° está sobre a reta y = x. Ordenada e abscissa coincidem, então o quociente y/x vale 1. Não é preciso extrair a raiz. √2 e √3 são comprimentos, não a razão entre catetos iguais.",
  },
  "mat-tr-n1q5": {
    intuicao:
      "O segundo quadrante é o quarto de ciclo que fica à esquerda e acima da origem, entre 90° e 180°. Subir deixa a altura positiva. Ir para a esquerda deixa a coordenada horizontal negativa. Seno lê a altura e cosseno lê essa coordenada horizontal. Os dois sinais não andam juntos nesse quarto.",
    motivacao:
      "Dizer que os dois são positivos descreve o primeiro quadrante, entre 0° e 90°. O motivo por que no segundo quadrante só o seno fica positivo é a posição do ponto: y > 0 e x < 0. Cosseno é x, então fica negativo. A frase pronta vale porque nasce dessa geometria, não como tabela solta.",
    passos: [
      "Coordenadas no ciclo: o ponto é (cos θ, sen θ). O sinal do cosseno é o sinal de x, e o sinal do seno é o sinal de y.",
      "Segundo quadrante: 90° < θ < 180°, a região em que x < 0 e y > 0 ao mesmo tempo.",
      "Leitura dos sinais no ciclo: sen θ > 0, porque y é positivo, e cos θ < 0, porque x é negativo.",
      "A descrição correta é seno positivo e cosseno negativo. Os dois positivos seriam o primeiro quadrante. Os dois negativos seriam o terceiro.",
    ],
    atalho:
      "150° está no segundo quadrante e sen 150° = 1/2, positivo, enquanto cos 150° = −√3/2, negativo. Um único ponto de teste separa as cinco frases. Seno nulo só acontece em 0° e 180°, na fronteira, não no interior do quadrante.",
  },
  "mat-tr-n2q1": {
    intuicao:
      "150° passou de 90° e ainda não chegou a 180°. O ponto está no segundo quadrante, acima do eixo e à esquerda. A altura dele é a mesma do ponto de 30°, porque 150° e 30° são simétricos em relação ao eixo vertical. Seno lê altura, então o sinal continua positivo e o módulo é o de 30°.",
    motivacao:
      "Colocar o sinal negativo produz −1/2, que é seno de 210° ou de 330°, não deste ponto. O motivo por que o seno permanece positivo é que o segundo quadrante está acima do eixo horizontal. A redução ao primeiro quadrante usa o ângulo de referência 180° − 150°, e a simetria sen (180° − θ) = sen θ guarda o valor sem inverter o sinal.",
    passos: [
      "Localização: 150° está no segundo quadrante. O ângulo de referência é 180° − 150° = 30°.",
      "Redução ao primeiro quadrante: sen (180° − θ) = sen θ. Com θ = 30°, sen 150° = sen 30°.",
      "Valor notável: sen 30° = 1/2. No segundo quadrante o seno não troca de sinal.",
      "O valor é 1/2. −1/2 seria o seno no terceiro ou no quarto quadrante, para o mesmo referência. √3/2 seria referência 60°.",
    ],
    atalho:
      "180° − 150° = 30°, e o seno não distingue esses dois ângulos simétricos. sen 30° = 1/2, então sen 150° = 1/2. Se a pergunta fosse o cosseno, o sinal viraria e o resultado seria negativo. Para o seno, a altura dos dois pontos é a mesma.",
  },
  "mat-tr-n2q2": {
    intuicao:
      "180° é exatamente meia volta no ciclo unitário. O ponto que saiu de (1, 0) chega a (−1, 0), do outro lado do ciclo, ainda sobre o eixo horizontal. Não há altura: a ordenada é 0. Toda a medida do raio está apontando para a esquerda. Cosseno lê essa coordenada horizontal, que vale o raio com sinal negativo.",
    motivacao:
      "Responder 1 descreve cos 0°, o ponto de partida, não o de meia volta. O motivo por que o valor é −1 é que meia volta inverte o sentido do raio no eixo x, e no ciclo unitário essa inversão cai exatamente em x = −1. Dizer que não existe confundiria cos 180° com tg 90°. O cosseno está definido em todo ângulo.",
    passos: [
      "Ponto do ciclo em 180°: uma meia volta a partir de (1, 0) chega a (−1, 0).",
      "Definição de cosseno no ciclo: cos θ é a abscissa do ponto. Portanto cos 180° = −1.",
      "Conferência pelo seno: sen 180° = 0, e (−1)² + 0² = 1, que é a identidade fundamental no ponto.",
      "O valor é −1. 1 seria cos 0°. 0 seria sen 180° ou cos 90°. O valor existe.",
    ],
    atalho:
      "cos 0° = 1 e cada meia volta troca o sinal do cosseno. 180° é a primeira troca, então o 1 vira −1. 360° devolveria o 1. 1/2 é cosseno de 60°, longe do eixo, e a leitura do ponto (−1, 0) basta.",
  },
  "mat-tr-n2q3": {
    intuicao:
      "O ponto de 30° no ciclo de raio 1 tem coordenadas (cos 30°, sen 30°). Qualquer ponto desse ciclo obedece x² + y² = 1, porque é a equação da circunferência de raio 1. Somar o quadrado da altura com o quadrado da abscissa reconstrói o raio ao quadrado. O ângulo 30° não muda essa geometria.",
    motivacao:
      "Calcular (1/2)² + (√3/2)² também chega em 1, mas é a conta longa, e a banca espalha os pedaços 1/2, 3/4 e √3/2 para quem para no meio. O motivo por que a identidade dispensa os valores notáveis é que sen² θ + cos² θ = 1 vale para todo θ, por ser o teorema de Pitágoras no raio. 30° é só um caso.",
    passos: [
      "Equação do ciclo unitário: x² + y² = 1 para qualquer ponto da circunferência de raio 1.",
      "Identidade fundamental: x = cos θ e y = sen θ, então sen² θ + cos² θ = 1. Vale em particular para θ = 30°.",
      "Conferência numérica: sen 30° = 1/2 e cos 30° = √3/2. (1/2)² + (√3/2)² = 1/4 + 3/4 = 1.",
      "O valor é 1. 1/4 seria só o quadrado do seno. 3/4 seria só o quadrado do cosseno. A soma é que completa o raio.",
    ],
    atalho:
      "Não calcule 30°. Em qualquer ângulo do ciclo de raio 1 a soma dos quadrados das coordenadas é 1. Trocar 30° por 45° ou por 90° daria a mesma soma. As alternativas menores que 1 são pedaços de um dos quadrados, não a soma.",
  },
  "mat-tr-n2q4": {
    intuicao:
      "Um radiano é o arco cujo comprimento é igual ao raio. No ciclo de raio 1, a volta inteira tem comprimento 2π, a circunferência. Meia volta é a metade desse comprimento, π. Em graus, a volta inteira é 360° e a meia volta é 180°. A pergunta pede essa correspondência de meia volta, não uma mistura das duas unidades.",
    motivacao:
      "90° é um quarto de volta, que em radianos é π/2, não π. O motivo por que π rad equivale a 180° é que π é metade de 2π, e 180° é metade de 360°. Escrever π° deixaria o número na unidade grau, cerca de três graus, que não é meia volta. A conversão divide o ciclo nas duas linguagens ao mesmo tempo.",
    passos: [
      "Volta completa: 2π rad = 360°. O comprimento da circunferência unitária é 2π, e o ângulo giro é 360°.",
      "Metade da volta: dividem-se os dois lados por 2. O resultado é π rad = 180°.",
      "Quarto de volta, só para contraste: π/2 rad = 90°. Não é o arco de meia volta pedido.",
      "A correspondência é 180°. 360° seria 2π rad. 60° seria π/3 rad. π° não converte a unidade.",
    ],
    atalho:
      "Meia volta na bússola é 180°. Meia volta no ciclo unitário percorre metade de 2π, isto é, π. As duas descrições são o mesmo giro. 90° percorreria só π/2, um quarto da circunferência, e a resposta de meia volta é 180°.",
  },
  "mat-tr-n2q5": {
    intuicao:
      "Tangente compara a altura do ponto com a sombra horizontal dele. Em 90° o ponto está no topo: a altura é 1 e a sombra horizontal é 0. Dividir pela sombra zero não produz um número real. Na figura da tangente, o raio vertical fica paralelo à reta onde a tangente seria lida, e retas paralelas não se encontram. A pergunta é o que acontece com esse quociente.",
    motivacao:
      "Responder 1 repete sen 90° e esquece de dividir pelo cosseno. O motivo por que tg 90° não existe é que tg θ = sen θ / cos θ só está definida quando o cosseno é diferente de zero, e cos 90° = 0. Não é um valor infinito que se possa marcar entre as alternativas: no conjunto dos reais a expressão não tem imagem.",
    passos: [
      "Definição de tangente: tg θ = sen θ / cos θ, com a condição de que cos θ seja diferente de zero.",
      "Valores no topo do ciclo: sen 90° = 1 e cos 90° = 0. A sombra horizontal desaparece.",
      "Divisão por zero: 1/0 não é um número real. A condição da definição falha.",
      "tg 90° não existe. 0 seria sen 180° ou tg 0°. 1 é sen 90°. √3 é tg 60°, onde o cosseno não é zero.",
    ],
    atalho:
      "O cosseno é a sombra horizontal. Sem sombra, não há o que comparar com a altura. 90° e 270° são exatamente os pontos em que essa sombra some. Qualquer alternativa numérica, 0, 1, −1 ou √3, exigiria um cosseno diferente de zero.",
  },
  "mat-tr-n3q1": {
    intuicao:
      "210° passou de 180° por mais 30°. O ponto está no terceiro quadrante, abaixo do eixo e à esquerda. A altura, que o seno lê, aponta para baixo, então o sinal é negativo. A distância até o eixo horizontal é a mesma de um ângulo de 30°, porque 210° é 180° mais esse referência. O módulo é o seno de 30°, com o sinal do quadrante.",
    motivacao:
      "Responder 1/2 acerta o módulo e esquece que o terceiro quadrante fica abaixo do eixo. O motivo por que o sinal é negativo é a redução sen (180° + θ) = −sen θ: somar 180° inverte a ordenada. Sem esse sinal, o valor cairia no primeiro ou no segundo quadrante, onde a altura de 30° é positiva.",
    passos: [
      "Localização: 210° = 180° + 30°. O ponto está no terceiro quadrante, onde seno e cosseno são negativos.",
      "Redução ao primeiro quadrante: sen (180° + θ) = −sen θ. Com θ = 30°, sen 210° = −sen 30°.",
      "Valor notável no referência de 30°: sen 30° = 1/2. Portanto sen 210° = −1/2.",
      "O valor é −1/2. 1/2 seria sen 30° ou sen 150°. −√3/2 seria referência 60°, como em 240°.",
    ],
    atalho:
      "sen 180° = 0 e, logo depois, o seno entra nos negativos. 210° está 30° adiante de 180°, então o módulo é sen 30° = 1/2 e o sinal é o do terceiro quadrante. √3/2 seria um afastamento de 60°, maior do que estes 30°.",
  },
  "mat-tr-n3q2": {
    intuicao:
      "300° está no quarto quadrante, entre 270° e 360°. O ponto já voltou para a direita do eixo vertical e ainda está abaixo do eixo horizontal. Cosseno lê a coordenada horizontal, que nesse quarto é positiva. A distância até 360° é 60°, então o módulo é o cosseno de 60°, o pedaço curto e positivo.",
    motivacao:
      "−1/2 aplica ao cosseno o sinal do seno, e no quarto quadrante quem é negativo é o seno. O motivo por que o cosseno fica positivo é que x > 0 à direita do eixo. A redução cos (360° − θ) = cos θ usa a simetria com o eixo horizontal, que não inverte abscissas. √3/2 seria o cosseno do referência 30°, se a conta 360° − 300° fosse trocada.",
    passos: [
      "Localização: 300° está no quarto quadrante. O ângulo de referência é 360° − 300° = 60°.",
      "Redução: cos (360° − θ) = cos θ. O cosseno no quarto quadrante conserva o sinal positivo.",
      "Valor notável do referência: cos 60° = 1/2. Portanto cos 300° = 1/2, positivo.",
      "O valor é 1/2. −1/2 seria cos 120° ou cos 240°. √3/2 seria cos 30°, referência trocado.",
    ],
    atalho:
      "300° é o mesmo ponto que −60° no ciclo. cos (−60°) = cos 60° = 1/2, porque o cosseno é par e o sinal não vira. sen 300° é que seria −√3/2. Para o cosseno, a simetria horizontal deixa o valor de 60° intacto.",
  },
  "mat-tr-n3q3": {
    intuicao:
      "sen θ = 3/5 desenha um triângulo de cateto oposto 3 e hipotenusa 5. O cateto que falta é o clássico 4, porque 3, 4 e 5 fecham Pitágoras. Cosseno é esse cateto adjacente dividido pela hipotenusa, então o módulo é 4/5. O segundo quadrante põe o ponto à esquerda da origem, e a coordenada horizontal de um ponto à esquerda é negativa.",
    motivacao:
      "4/5 acerta o módulo e esquece o quadrante, o que responderia ao primeiro quadrante. O motivo por que o sinal é negativo é que, no segundo quadrante, x < 0 e cosseno é x. A identidade fundamental só devolve o quadrado do cosseno, e quadrado não guarda sinal: o quadrante é que escolhe entre 4/5 e −4/5.",
    passos: [
      "Identidade fundamental: sen² θ + cos² θ = 1. Com sen θ = 3/5, (3/5)² + cos² θ = 1.",
      "Quadrado do seno conhecido: 9/25 + cos² θ = 1, então cos² θ = 1 − 9/25 = 16/25.",
      "Raiz quadrada: cos θ = 4/5 ou cos θ = −4/5. As duas realizam o mesmo quadrado.",
      "Sinal do segundo quadrante: a abscissa é negativa, logo cos θ = −4/5. 3/4 seria a tangente, oposto sobre adjacente.",
    ],
    atalho:
      "O triângulo 3-4-5 dá adjacente 4 e hipotenusa 5, módulo 4/5. Cosseno não pode valer 5/4, porque passaria de 1. No segundo quadrante o cosseno é o único dos dois que fica negativo, então o par de sen 3/5 é cos −4/5.",
  },
  "mat-tr-n3q4": {
    intuicao:
      "sen x = 1/2 pede os pontos do ciclo cuja altura é 1/2. Entre 0 e uma volta completa, isso acontece duas vezes: uma na subida, no primeiro quadrante, e outra na descida, no segundo, simétricas em relação ao eixo vertical. Abaixo do eixo a altura é negativa, então o terceiro quadrante não entra. O intervalo [0, 2π) pega uma volta e deixa de fora a repetição seguinte.",
    motivacao:
      "Ficar só com π/6 ignora a simetria do seno no segundo quadrante. O motivo por que 5π/6 também serve é que sen (π − x) = sen x, e π − π/6 continua dentro do intervalo. 7π/6 tem o mesmo referência, mas está abaixo do eixo, onde o seno vale −1/2. π/3 é 60°, cuja altura é √3/2, maior do que a pedida.",
    passos: [
      "Valor notável no primeiro quadrante: sen (π/6) = sen 30° = 1/2. π/6 está em [0, 2π).",
      "Seno no segundo quadrante: sen (π − π/6) = sen (5π/6) = 1/2. 5π/6 também está no intervalo.",
      "Terceiro quadrante: 7π/6 = π + π/6 e sen (7π/6) = −1/2, que não satisfaz a equação.",
      "As soluções no intervalo são π/6 e 5π/6. π/3 e 2π/3 teriam seno √3/2, o valor de 60°.",
    ],
    atalho:
      "O seno é simétrico em torno de 90°, ou π/2. A partir de π/6, o espelho é π − π/6 = 5π/6. Os dois têm a mesma altura 1/2. Qualquer ângulo com 60° no referência produz √3/2, e qualquer ângulo abaixo do eixo produz seno negativo.",
  },
  "mat-tr-n3q5": {
    intuicao:
      "O rumo 030 sai do norte e abre 30° na direção do leste. O navio não anda 30° a partir do leste. A trajetória de 10 milhas é a hipotenusa de um triângulo retângulo cujo ângulo de 30° está entre o norte e o caminho. O deslocamento para o norte é o cateto encostado nesse ângulo, o lado maior, porque 30° é um afastamento pequeno.",
    motivacao:
      "5 milhas é o cateto oposto, 10 sen 30°, e essa conta manda para o leste o que a pergunta pede para o norte. O motivo por que o norte recebe o cosseno é que o ângulo foi medido a partir do norte: o lado adjacente a 30° é a componente norte. Trocar seno e cosseno troca norte com leste. 10√3 seria maior que a própria viagem, e um cateto não pode passar da hipotenusa.",
    passos: [
      "Leitura do rumo: 030 abre 30° a partir do norte, no sentido do leste. O ângulo entre o deslocamento e o eixo norte é 30°.",
      "Componente adjacente: o norte recebe 10 cos 30°. Seno ficaria com o cateto oposto, que é o leste.",
      "Valor notável: cos 30° = √3/2. Então o norte recebe 10 × √3/2 = 5√3 milhas.",
      "A componente leste, que não foi pedida, é 10 sen 30° = 5 milhas. Trocar seno e cosseno troca as duas respostas.",
    ],
    atalho:
      "Feche Pitágoras com as duas peças: (5√3)² + 5² = 75 + 25 = 100 = 10². Os catetos batem com a hipotenusa de 10. 10√3 ao quadrado já passa de 100, então não cabe como componente. 5 milhas é a perna leste, a menor, e o norte é a maior: 5√3.",
  },
};
