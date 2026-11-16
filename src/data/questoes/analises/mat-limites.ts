import type { AnaliseQuestao } from "../../lessons.ts";

export const ANALISES: Record<string, AnaliseQuestao> = {
  "mat-ld-n1q1": {
    intuicao:
      "O gráfico de 3x + 1 é uma reta, sem buraco e sem salto. O limite quando x se aproxima de 2 é a altura de que a reta se aproxima nesse lugar. Numa reta, essa altura é o valor da função no próprio ponto, porque não há indeterminação para desfazer. Substituir x por 2 lê a ordenada do ponto (2, 7). O 2 da seta é a abscissa, não a resposta.",
    motivacao:
      "Polinômios são contínuos em todo real, então o limite no ponto coincide com a imagem. A definição por aproximação, com x = 2 + h e h tendendo a 0, dá 3(2 + h) + 1 = 7 + 3h, que se aproxima de 7. Responder 3 lê o coeficiente angular, a taxa, que seria a derivada. Responder 6 faz 3 × 2 e esquece de somar 1. A substituição só é legítima porque a expressão já está definida e contínua em x = 2.",
    passos: [
      "Continuidade do polinômio: lim x→2 (3x + 1) = 3 × 2 + 1, o valor da função no ponto.",
      "Produto, feito antes da soma: 3 × 2 = 6, a parte que depende de x. A ordem das operações pede o produto antes da soma.",
      "Soma do termo independente: 6 + 1 = 7. O limite, igual ao valor da função, é 7. A reta passa pelo ponto (2, 7).",
      "Aproximação de conferência: se x = 2,01, 3 × 2,01 + 1 = 7,03, vizinho de 7, não de 6 nem de 3.",
    ],
    atalho:
      "Para uma reta, o limite é a altura. f(2) = 7. Se a resposta foi 2, leu-se o ponto de chegada de x. Se foi 3, leu-se a inclinação da reta, que é outra pergunta, a da taxa de variação.",
  },
  "mat-ld-n1q2": {
    intuicao:
      "O gráfico da função constante 4 é uma reta horizontal na altura 4. Quando x caminha para 5, a altura não se mexe: todo vizinho de 5, e o próprio 5, está na mesma prateleira. O limite é essa prateleira. O número 5 só diz onde estamos olhando no eixo x, e uma função constante ignora o eixo x.",
    motivacao:
      "O limite de uma constante é a própria constante, porque |f(x) − 4| = 0 para todo x, menor que qualquer tolerância. Multiplicar 4 por 5, ou dizer que o limite não existe, trata a seta x→5 como se fosse uma conta a fazer com o 5. A seta indica o lugar da aproximação, e aqui a função nem usa o valor de x. O caminho decorado de substituir e operar os números escritos junta 4 e 5 numa multiplicação que a expressão não pede.",
    passos: [
      "Função constante: f(x) = 4 para todo x, inclusive em qualquer vizinho de 5.",
      "Definição de limite: a diferença |4 − 4| = 0 em todo vizinho, então o limite é 4.",
      "O ponto de chegada 5 não entra na expressão. 4 × 5 = 20 não é a função.",
      "O limite existe. Uma reta horizontal não tem salto, e a altura única é 4.",
    ],
    atalho:
      "Tape o 5. A expressão que sobra é o número 4, e o limite de um número parado é ele mesmo. 0 seria a variação da constante, que é a derivada, não o limite da função no ponto para onde x caminha.",
  },
  "mat-ld-n1q3": {
    intuicao:
      "O gráfico de f(x) = 4 é uma reta horizontal. A derivada é a inclinação da reta tangente, e a tangente a uma horizontal é a própria horizontal. Subir zero enquanto x anda qualquer coisa é taxa zero. Não importa em que ponto se olha: a ladeira não muda e vale 0. A altura 4 é o valor da função, não a taxa.",
    motivacao:
      "Pela definição, a taxa média [f(x + h) − f(x)] / h = (4 − 4)/h = 0 para todo h diferente de zero. O limite dessa taxa, quando h tende a 0, continua 0. Decorar que a derivada de um número é o próprio número confunde f com f'. A constante não cresce nem decresce, então a taxa não pode ser 4 nem 1. Dizer que não existe esquece que o quociente já está simplificado antes do limite, e não há divisão por zero de verdade.",
    passos: [
      "Definição de derivada como taxa: f'(x) = lim h→0 [f(x + h) − f(x)] / h.",
      "Função constante, mesma altura nos dois instantes: f(x + h) − f(x) = 4 − 4 = 0.",
      "Quociente de Newton: 0/h = 0 para todo h ≠ 0. O limite quando h tende a 0 continua 0.",
      "Regra pronta, como leitura da mesma conta: a derivada de uma constante é 0. 4 é f(x), não f'(x).",
    ],
    atalho:
      "Uma reta horizontal tem inclinação 0 em qualquer ponto. Compare f(1) = 4 e f(2) = 4: a variação é 0 em um passo, taxa 0. A resposta 4 descreve a altura da prateleira, não a ladeira.",
  },
  "mat-ld-n1q4": {
    intuicao:
      "O gráfico de y = x² é uma parábola. Em x = 3 a curva já está na altura 9, mas a pergunta não pede a altura: pede a ladeira da reta tangente naquele ponto. Perto de x = 3 a parábola sobe, e sobe mais íngreme do que em x = 1. A taxa instantânea nesse ponto é 6, a inclinação da tangente, não o valor 9 da função.",
    motivacao:
      "A derivada como taxa sai do limite [ (x + h)² − x² ] / h: o numerador expande para 2xh + h², o h cancela para h ≠ 0, e sobra 2x + h, que tende a 2x. Essa é a regra (x²)' = 2x, e aplicar em 3 dá 6. Responder 9 calcula f(3), a altura, responder 2 deixa a regra pela metade e responder 3 lê a abscissa. A potência desce e multiplica, e o ponto entra depois.",
    passos: [
      "Definição: [ (x + h)² − x² ] / h = (x² + 2xh + h² − x²) / h = 2x + h, para h ≠ 0.",
      "Limite h→0 da taxa simplificada: 2x + h tende a 2x. Então f'(x) = 2x. O acréscimo h desaparece no limite.",
      "Substituição do ponto na taxa: f'(3) = 2 × 3 = 6. A inclinação da tangente em x = 3 é 6.",
      "f(3) = 9 é a altura da parábola. 9 não é a inclinação. A reta tangente em x = 3 tem coeficiente angular 6.",
    ],
    atalho:
      "A regra da potência para x² é 2x. No ponto 3, multiplique por 2 e pare: 6. Se a conta deu 9, foi f(3) = 3², o valor da função, não a taxa da reta tangente à parábola no ponto de abscissa 3.",
  },
  "mat-ld-n1q5": {
    intuicao:
      "s(t) marca a posição da lancha, ou do ponto, em cada instante, um gráfico de lugar contra tempo. A derivada compara o quanto o lugar mudou com o quanto o tempo passou, num intervalo cada vez mais curto. Essa razão é uma velocidade. No limite, o intervalo some e a velocidade deixa de ser média para ser a do instante. Não é a posição, nem o espaço acumulado, nem a aceleração.",
    motivacao:
      "A velocidade média em [t, t + h] é [s(t + h) − s(t)] / h. A definição de derivada é exatamente o limite dessa razão quando h tende a 0, e esse limite se chama velocidade instantânea. Chamar o resultado de aceleração antecipa uma derivada a mais: aceleração é a derivada da velocidade, a segunda derivada de s. Chamar de posição média esquece a divisão pelo tempo. A unidade já denuncia: derivada de metro por segundo de tempo é metro por segundo.",
    passos: [
      "Taxa média: [s(t + h) − s(t)] / h é a velocidade média no intervalo de duração h.",
      "Derivada como taxa: o limite quando h tende a 0 é s'(t), a taxa instantânea de variação da posição.",
      "Essa taxa instantânea, no limite do intervalo, é a velocidade no instante t.",
      "A aceleração seria s''(t), a derivada da velocidade. A posição média não divide pelo tempo.",
    ],
    atalho:
      "Unidade: se s está em metros e t em segundos, s' está em metros por segundo, a unidade de velocidade. Aceleração pediria metro por segundo ao quadrado, uma derivada a mais. A resposta que casa com a unidade é a velocidade instantânea.",
  },
  "mat-ld-n2q1": {
    intuicao:
      "O gráfico de (x² − 1)/(x − 1) coincide com a reta y = x + 1 em todo ponto, menos em x = 1, onde o denominador zera e nasce um buraco. O limite pergunta a altura de que a curva se aproxima ao redor do buraco, não pede para preencher o buraco com a função original. Dos dois lados o gráfico chega na altura 2. O buraco não impede o limite.",
    motivacao:
      "Substituir x = 1 dá 0/0, uma indeterminação, não uma resposta. Dizer que o limite não existe, ou que é zero, trata o símbolo 0/0 como se fosse um número. A fatoração para levantar a indeterminação escreve x² − 1 = (x − 1)(x + 1) e cancela o fator comum para x ≠ 1, que é justamente a região em que o limite olha. Sobra x + 1, contínua, e o valor em 1 é 2. O cancelamento é legítimo porque o limite não usa o ponto, só a vizinhança.",
    passos: [
      "Substituição direta: (1² − 1)/(1 − 1) = 0/0, indeterminação. A conta ainda não terminou.",
      "Fatoração para levantar a indeterminação 0/0: x² − 1 = (x − 1)(x + 1), a diferença de quadrados.",
      "Cancelamento do fator comum para x ≠ 1: (x − 1)(x + 1)/(x − 1) = x + 1.",
      "Limite da expressão reduzida: lim x→1 (x + 1) = 2. A função original não precisa estar definida em x = 1.",
    ],
    atalho:
      "Teste x = 1,001. O numerador é quase 0,002 e o denominador é 0,001, e a razão fica perto de 2. Pelo outro lado, x = 0,999 dá a mesma vizinhança de 2. Os dois lados concordam, então o limite existe e vale 2.",
  },
  "mat-ld-n2q2": {
    intuicao:
      "O gráfico de y = x³ passa pela origem e, em x = 2, já está na altura 8, mas a derivada pede a ladeira da tangente, não essa altura. No cubo, a ladeira cresce com o quadrado de x, então em x = 2 ela é bem mais forte do que em x = 1. A taxa nesse ponto é 12, e a reta tangente sobe 12 quando x anda 1, encostada na curva na altura 8.",
    motivacao:
      "A regra da potência, (xⁿ)' = n xⁿ⁻¹, nasce do binômio no limite da definição, o mesmo caminho que deu 2x para x², e para n = 3 a derivada é 3x². Avaliar em 2 é uma substituição depois da derivada, não antes. Responder 8 calcula f(2), a posição da curva, e responder 6 é a derivada de x² em x = 3, outra função e outro ponto. A ordem é derivar primeiro, substituir o ponto em seguida.",
    passos: [
      "Regra da potência: a derivada de x³ é 3x². O expoente desce e a potência cai 1.",
      "Derivada como taxa: f'(x) = 3x² é a inclinação da reta tangente em cada abscissa x.",
      "Substituição do ponto na derivada: f'(2) = 3 × 2² = 3 × 4 = 12. A taxa instantânea nesse ponto é 12.",
      "f(2) = 8 é o valor da função. 6 seria 2 × 3, a derivada de x² no ponto 3.",
    ],
    atalho:
      "Derive e só então troque x por 2: 3 × 4 = 12. Se o 2 foi elevado ao cubo, a conta foi da função. A taxa 12 significa que, perto de x = 2, o cubo sobe cerca de 12 unidades por unidade de x.",
  },
  "mat-ld-n2q3": {
    intuicao:
      "f(x) = 5x² − 3x + 1 é uma parábola. A derivada em x = 1 é a inclinação da tangente nesse ponto, a taxa com que a curva sobe ou desce ali. Cada termo tem a sua taxa, e as taxas se somam. O 5x² contribui uma ladeira que depende de x, o −3x contribui uma ladeira constante −3, e o +1, horizontal, contribui zero. Em x = 1 a soma dessas ladeiras é 7.",
    motivacao:
      "A derivada é linear: (u + v)' = u' + v', e a constante some porque a taxa de uma horizontal é zero. A potência dá (5x²)' = 10x e (−3x)' = −3. Esquecer o 2 da potência e escrever 5x deixa a taxa pela metade. Derivar e continuar com o +1 trata a constante como se tivesse inclinação. A substituição x = 1 vem depois da expressão de f', senão se deriva um número já calculado, f(1) = 3, cuja derivada seria zero e não é a pergunta.",
    passos: [
      "Derivada termo a termo: (5x²)' = 10x, (−3x)' = −3 e a constante 1 tem derivada 0.",
      "Expressão da taxa, já derivada: f'(x) = 10x − 3. A constante 1 já sumiu ao derivar.",
      "Substituição do ponto: f'(1) = 10 × 1 − 3 = 7. Dez menos três é a inclinação pedida.",
      "f(1) = 5 − 3 + 1 = 3 é a altura da parábola, não a inclinação. 10 seria a taxa sem subtrair 3.",
    ],
    atalho:
      "A regra pronta 10x − 3 em x = 1 vale 7. Perto de x = 1, um passo de 0,01 em x muda f em cerca de 0,07, taxa vizinha de 7. Se a resposta foi 3, saiu f(1), a altura, e não a ladeira da reta tangente.",
  },
  "mat-ld-n2q4": {
    intuicao:
      "A parábola y = x² no ponto de abscissa 1 está na altura 1, o ponto (1, 1). A reta tangente encosta na curva ali e segue com a inclinação da derivada, sem fazer a curva. Essa inclinação, em x = 1, vale 2, e a reta de ladeira 2 que passa por (1, 1) corta o eixo y em −1, com equação y = 2x − 1. A reta y = 2x tem a mesma ladeira e passa na origem, longe do ponto de tangência.",
    motivacao:
      "A equação reduzida da tangente usa o ponto e a inclinação juntos: y − y₀ = m(x − x₀), com m = f'(x₀). Ter só a derivada 2x e escrever y = 2x esquece de obrigar a reta a passar por (1, 1). Ter só o ponto e escrever y = x usa uma ladeira 1, que não é a da curva nesse lugar. Os dois dados são independentes: a função dá o ponto, a derivada dá a ladeira.",
    passos: [
      "Ponto de tangência, valor da função: x = 1 e y = 1² = 1. O ponto é (1, 1).",
      "Derivada como taxa: y' = 2x, então a inclinação da tangente em x = 1 é 2 × 1 = 2.",
      "Ponto-inclinação da tangente: y − 1 = 2(x − 1) = 2x − 2. Falta somar 1 para chegar à equação reduzida.",
      "Equação reduzida: y = 2x − 1. Em x = 1, 2 − 1 = 1, então a reta passa pelo ponto. y = 2x em x = 1 vale 2, acima do ponto.",
    ],
    atalho:
      "Ladeira 2 e passagem por (1, 1) obrigam o intercepto: de x = 1 até x = 0 a reta desce 2, e 1 − 2 = −1. y = 2x − 1 é a única opção que vale 1 quando x = 1 e tem a inclinação 2 da derivada.",
  },
  "mat-ld-n2q5": {
    intuicao:
      "s(t) = t² + 4t é a posição da lancha, em metros, crescendo com o tempo. O gráfico é uma parábola de posição contra tempo. A velocidade é a ladeira desse gráfico, não a altura. Em t = 3 s a lancha já andou bastante, s(3) = 21 m, mas a pergunta pede o quanto a posição está mudando naquele segundo. A taxa 2t + 4, em t = 3, vale 10 metros por segundo.",
    motivacao:
      "A derivada da posição é a velocidade instantânea. Derivar termo a termo dá v(t) = 2t + 4, e só então entra t = 3. Substituir t = 3 em s antes de derivar produz um número, 21, cuja taxa é zero, e isso responde a posição. Esquecer o 4 que veio de 4t deixa a velocidade pela metade da parte linear, 6 m/s, que é só 2 × 3. A unidade m/s denuncia a derivada: metro dividido por segundo.",
    passos: [
      "Derivada como taxa: v(t) = s'(t). A posição derivada é a velocidade instantânea.",
      "Termo a termo, pela regra da potência: (t²)' = 2t e (4t)' = 4. Então v(t) = 2t + 4.",
      "Substituição do instante: v(3) = 2 × 3 + 4 = 6 + 4 = 10. A velocidade é 10 m/s.",
      "s(3) = 9 + 12 = 21 m é a posição, grandeza em metros, não em metros por segundo.",
    ],
    atalho:
      "A velocidade média entre 3 e 3,01 já fica perto de 10. s(3) = 21 e s(3,01) ≈ 3,01² + 4 × 3,01 ≈ 9,0601 + 12,04 = 21,1001. A razão 0,1001/0,01 = 10,01 m/s, vizinha de 10. A posição 21 m não é velocidade.",
  },
  "mat-ld-n3q1": {
    intuicao:
      "O quociente [√(1 + x) − 1] / x compara o quanto a raiz cresce, a partir de 1, com o passo x. Quando x tende a 0, numerador e denominador tendem a 0, e o gráfico tem um buraco na origem. A altura de que os dois lados se aproximam é a inclinação da curva y = √(1 + x) no ponto em que ela vale 1. Essa ladeira é 1/2, mais deitada que a identidade.",
    motivacao:
      "0/0 não é resposta: racionalizar multiplica pelo conjugado √(1 + x) + 1 e transforma o numerador numa diferença de quadrados, (1 + x) − 1 = x, que cancela o x de baixo. A fatoração, aqui disfarçada de conjugado, levanta a indeterminação. Sobra uma função contínua, e substituir x = 0 passa a ser legítimo. Dizer que o limite é 0 lê o numerador isolado, e dizer que é 1 esquece o conjugado somado no denominador, que vale 2 no limite.",
    passos: [
      "Substituição direta em x = 0: (√1 − 1)/0 = 0/0, a indeterminação que o limite ainda não resolveu.",
      "Conjugado: multiplique numerador e denominador por √(1 + x) + 1. O numerador vira (1 + x) − 1 = x.",
      "Cancelamento para x ≠ 0: x / { x [√(1 + x) + 1] } = 1 / [√(1 + x) + 1].",
      "Limite da expressão reduzida, agora contínua: 1 / (√1 + 1) = 1/(1 + 1) = 1/2.",
    ],
    atalho:
      "O limite é a derivada de √(1 + x) em x = 0. A derivada de (1 + x) elevado a 1/2 é (1/2)(1 + x) elevado a −1/2, que em 0 vale 1/2. Um teste: para x = 0,0001, √1,0001 − 1 ≈ 0,00005, e a razão ≈ 0,5.",
  },
  "mat-ld-n3q2": {
    intuicao:
      "s(t) = t³ − 6t² é a posição. A velocidade é a ladeira desse gráfico, positiva quando a curva sobe e negativa quando desce. Anular a velocidade é achar o instante em que a tangente fica horizontal, uma crista ou um vale do gráfico de s. Há um instante trivial t = 0, a partida, e outro mais tarde. O enunciado pede t > 0, e nesse instante a lancha para de mudar de posição por um momento.",
    motivacao:
      "A derivada como taxa é v(t) = s'(t). Zerar a posição, s(t) = 0, acharia quando a lancha volta à origem, não quando a velocidade é zero. Zerar só o termo −6t² e responder t = 6 lê o coeficiente. A fatoração de v mostra os dois zeros com clareza, e a condição t > 0 descarta a origem. Em t = 2 a velocidade ainda é negativa, então a lancha está voltando, não parada.",
    passos: [
      "Derivada como taxa da posição: v(t) = s'(t) = 3t² − 12t. Cada termo da posição foi derivado uma vez.",
      "Fatoração: 3t² − 12t = 3t(t − 4). O produto é zero quando um fator é zero.",
      "Soluções da equação fatorada: t = 0 ou t = 4. O enunciado pede t > 0, então o instante é t = 4.",
      "Conferência em t = 2: v(2) = 3 × 4 − 12 × 2 = 12 − 24 = −12, que não é zero. Em t = 4, 3 × 16 − 48 = 0.",
    ],
    atalho:
      "v(t) = 3t(t − 4) troca de sinal em 0 e em 4. O único positivo é 4. s(4) = 64 − 6 × 16 = 64 − 96 = −32 m, a posição na parada, diferente de zero: parar não é voltar à origem do trajeto.",
  },
  "mat-ld-n3q3": {
    intuicao:
      "O gráfico de f(x) = 1/x no primeiro quadrante é uma hipérbole que desce enquanto x cresce. Em x = 2 a altura é 1/2 = 0,5, mas a pergunta pede a ladeira. Como a curva desce, a inclinação é negativa. Ela desce mais devagar à medida que se afasta da origem, e em x = 2 a taxa é −1/4 = −0,25. A tangente cai um quarto de unidade quando x anda uma.",
    motivacao:
      "A definição tira a taxa do quociente [1/(x + h) − 1/x] / h. O conjugado dos denominadores, ou o denominador comum, produz −h no numerador, e o h cancela, deixando −1/[x(x + h)], que tende a −1/x². O sinal menos é o fato de a hipérbole decrescer para x > 0. Responder 1/4 perde o sinal e descreve o módulo da ladeira. Responder −1/2 confunde a taxa com o valor da função, que é positivo e vale 0,5.",
    passos: [
      "Definição da derivada: [1/(x + h) − 1/x] / h = [ (x − (x + h)) / (x(x + h)) ] / h.",
      "Numerador da diferença: x − x − h = −h. O quociente fica −h / [ h x (x + h) ], para h ≠ 0.",
      "Cancelamento de h, com h ≠ 0: sobra −1 / [x(x + h)]. Limite h→0: f'(x) = −1/x².",
      "Substituição do ponto na taxa: f'(2) = −1/2² = −1/4. O quadrado de 2 no denominador produz 4, com o sinal menos da hipérbole.",
    ],
    atalho:
      "A regra (x⁻¹)' = −1 x⁻² dá −1/x². Em x = 2, −1/4. A função em 2 vale +1/2, sinal oposto ao da taxa, porque a curva está acima do eixo e mesmo assim desce no primeiro quadrante, afastada da assíntota vertical.",
  },
  "mat-ld-n3q4": {
    intuicao:
      "O gráfico de |x| / x vale 1 em toda a semirreta x > 0 e vale −1 em toda a semirreta x < 0, com um buraco na origem, onde o denominador zera. À direita, a função senta na prateleira 1. À esquerda, senta na prateleira −1. As duas aproximações chegam em alturas diferentes. Um limite único exigiria a mesma altura dos dois lados, e aqui o desenho tem um degrau.",
    motivacao:
      "O limite existe só quando os limites laterais existem e coincidem. Calcular um lado só e responder 1 é ler a expressão como se o módulo não fizesse nada, o hábito de escrever |x| = x sem olhar o sinal. Para x negativo, a definição |x| = −x troca o quociente para −1. Não é infinito, porque a função fica presa entre −1 e 1, e não é zero, porque ela nunca se aproxima de zero. A discordância dos lados é o motivo de o limite não existir.",
    passos: [
      "Lado direito, definição do módulo: se x > 0, |x| = x, então |x| / x = 1. O limite x→0⁺ é 1.",
      "Lado esquerdo: se x < 0, |x| = −x, então |x| / x = −x/x = −1. O limite x→0⁻ é −1.",
      "Os laterais existem e são diferentes: 1 ≠ −1. O limite bilateral não existe.",
      "A função é limitada, então o limite não é infinito. Ela não se aproxima de 0.",
    ],
    atalho:
      "Teste 0,01 e −0,01. |0,01|/0,01 = 1 e |−0,01|/(−0,01) = 1/(−1) = −1. Dois vizinhos igualmente perto da origem dão valores a distância 2 um do outro. Não há um único número de que a função se aproxime.",
  },
  "mat-ld-n3q5": {
    intuicao:
      "f(x) = 4x − x² é uma parábola de concavidade para baixo, um morro. O valor máximo é a altura do topo, não a abscissa do topo. A derivada é a ladeira: positiva na subida, zero no cume, negativa na descida. O cume está em x = 2, e a altura ali é 4. O ponto mais alto do gráfico é (2, 4), e a resposta pedida é o 4.",
    motivacao:
      "Zerar a derivada acha o candidato, porque no extremo interior a tangente é horizontal. O teste de sinal, ou a segunda derivada −2 < 0, confirma que é máximo e não mínimo. Substituir esse x na função é obrigatório: responder 2 entrega a abscissa. Completar o quadrado, 4x − x² = 4 − (x − 2)², mostra o mesmo teto sem cálculo, porque um quadrado subtraído nunca passa de zero. Quem eleva 4 ao quadrado e responde 16 troca o vértice por outra conta.",
    passos: [
      "Derivada como taxa: f'(x) = 4 − 2x. A ladeira é zero quando 4 − 2x = 0, logo x = 2.",
      "Sinal: para x < 2, f' > 0, a função sobe. Para x > 2, f' < 0, a função desce. x = 2 é máximo.",
      "Altura do topo, valor da função: f(2) = 4 × 2 − 2² = 8 − 4 = 4. O máximo é essa altura, não a abscissa 2.",
      "2 é a abscissa do máximo. f(0) = 0 e f(4) = 0 são as raízes, abaixo do topo.",
    ],
    atalho:
      "Complete o quadrado: 4x − x² = −(x² − 4x) = −[(x − 2)² − 4] = 4 − (x − 2)². O termo subtraído é no mínimo zero, então f(x) ≤ 4, e o valor 4 é atingido quando x = 2, no cume do morro.",
  },
};
