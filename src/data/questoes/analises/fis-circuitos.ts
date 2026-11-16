import type { AnaliseQuestao } from "../../lessons.ts";

export const ANALISES: Record<string, AnaliseQuestao> = {
  "fis-ck-n1q1": {
    intuicao:
      "Num resistor ôhmico, a corrente e a tensão andam juntas: dobrar a corrente dobra a tensão, e o gráfico passa pela origem. A resistência é a constante dessa reta, em ohm. A frase da lei é a tensão igual ao produto da resistência pela corrente. O desenho do resistor com a seta de corrente vem antes de rearrumar a fórmula.",
    motivacao:
      "A lei de Ohm para o resistor ôhmico é V = R I. Ela também se escreve R = V/I, que é a mesma frase. R = V × I tem unidade de watt e calcula uma potência, não uma resistência. V = R/I e V = I/R não fecham a unidade volt, porque ohm já é volt por ampere. Multiplicar corrente por resistência no lugar errado da equação produz I = V × R, que cresce quando a resistência cresce, o contrário do que um resistor faz com a corrente.",
    passos: [
      "Lei de Ohm no resistor ôhmico: a tensão é o produto V = R I, medida em volts.",
      "A forma equivalente é R = V/I. Para V = 12 V e I = 2,0 A, R = 12 / 2,0 = 6,0 Ω, e a volta é V = 6,0 × 2,0 = 12 V.",
      "O produto R × I tem unidade Ω · A = V. O produto V × I tem unidade W e não é resistência.",
      "A forma V = R/I não é a lei de Ohm. A relação do resistor ôhmico é V = R I.",
    ],
    atalho:
      "Análise dimensional: ohm vezes ampere é volt, porque a definição do ohm é V/A. Ohm dividido por ampere dá V/A², que não é tensão. Se I tende a 0 A, V tende a 0 V no resistor ôhmico, como o produto R I exige.",
  },
  "fis-ck-n1q2": {
    intuicao:
      "Dois resistores em série formam um único corredor. A carga que atravessa o primeiro não tem outro lugar para ir e atravessa o segundo. A corrente é a mesma nos dois, tenham eles resistências iguais ou diferentes. As tensões, essas sim, se repartem. O desenho é um fio só, sem bifurcação, antes de falar em tensão.",
    motivacao:
      "A lei dos nós, aplicada a um trecho sem derivação, obriga a corrente que entra a ser a corrente que sai. Por isso a série tem uma corrente única. A lei das malhas reparte a tensão da fonte na proporção das resistências, e as tensões só coincidem se as resistências coincidirem. Tratar a série como se tivesse a mesma tensão descreve o paralelo, o desenho com dois caminhos. Corrente nula seria um circuito aberto, não uma série alimentada.",
    passos: [
      "Lei dos nós num caminho único: a corrente que entra no primeiro resistor sai para o segundo. I₁ = I₂.",
      "Exemplo: fonte de 12 V, resistores de 2,0 Ω e 4,0 Ω. A equivalente da série é 6,0 Ω e I = 12 / 6,0 = 2,0 A nos dois.",
      "Lei de Ohm em cada um: 2,0 × 2,0 = 4,0 V e 4,0 × 2,0 = 8,0 V. As tensões diferem.",
      "Lei das malhas: 4,0 + 8,0 = 12 V. A grandeza comum é a corrente, não a tensão.",
    ],
    atalho:
      "Se um dos resistores fosse substituído por outro valor, a corrente dos dois mudaria junta, porque não há nó que desvie carga. Só a partilha das tensões mudaria de proporção. Esse limite separa série de paralelo.",
  },
  "fis-ck-n1q3": {
    intuicao:
      "Dois resistores em paralelo estão soldados nos mesmos dois nós, lado a lado. Entre esses nós há uma única diferença de potencial, e os dois resistores a sentem por inteiro. As correntes se separam, cada uma segundo a sua resistência. O desenho da bifurcação vem antes de somar correntes ou resistências.",
    motivacao:
      "A tensão é a mesma porque os terminais coincidem: é a definição de paralelo lida na malha. As correntes seguem a lei de Ohm, I = V/R, e por isso diferem se as resistências diferem. Somar os resistores como na série somaria quedas de tensão que, no paralelo, não existem em sequência. A equivalente do paralelo é menor que cada ramo, porque as condutâncias se somam. A corrente não é a mesma, salvo no caso particular de resistências iguais.",
    passos: [
      "Paralelo: os dois resistores ligam o mesmo par de nós, então a tensão é a mesma. Para uma fonte de 12 V, cada um fica com 12 V.",
      "Lei de Ohm em cada ramo: um resistor de 6,0 Ω conduz 12 / 6,0 = 2,0 A, e um de 3,0 Ω conduz 12 / 3,0 = 4,0 A.",
      "Lei dos nós: a fonte fornece 2,0 + 4,0 = 6,0 A. As correntes não são iguais.",
      "A soma 6,0 + 3,0 = 9,0 Ω vale para série. No paralelo, 1/R = 1/6,0 + 1/3,0 e R = 2,0 Ω, menor que cada ramo.",
    ],
    atalho:
      "A equivalente em paralelo tem de ser menor que o menor ramo. Isso já elimina qualquer conta que dê soma ou média acima de 3 Ω neste exemplo. Se um ramo abre, a corrente dele vai a 0 A e o outro continua com a mesma tensão.",
  },
  "fis-ck-n1q4": {
    intuicao:
      "Num nó de circuito em regime permanente, fios chegam e fios saem. A carga não se acumula na solda: o que chega num segundo tem de ir embora nesse segundo. A lei dos nós é esse balanço de correntes. O desenho do nó, com setas entrando e saindo, vem antes de escolher um ramo preferido.",
    motivacao:
      "A lei dos nós de Kirchhoff é a conservação da carga no regime estacionário: a soma das correntes que entram iguala a soma das que saem. A corrente não escolhe só o resistor menor e abandona o outro. Os dois ramos conduzem, e a partilha segue a lei de Ohm sob a mesma tensão. Somar uma corrente de saída com a de entrada, como se as duas entrassem, cria carga no nó. Dois fios do mesmo nó não se anulam só por estarem no mesmo ponto.",
    passos: [
      "Lei dos nós de Kirchhoff: num nó em regime permanente, a soma das correntes que entram é igual à soma das que saem.",
      "Exemplo: entram 5,0 A e um ramo de saída leva 2,0 A. O outro ramo de saída leva 5,0 − 2,0 = 3,0 A.",
      "Lei dos nós na conferência: 2,0 + 3,0 = 5,0 A, e a carga no nó não aumenta.",
      "Se os dois ramos de saída tivessem a mesma resistência, cada um levaria 2,5 A, e nenhum ficaria com 0 A. O resistor maior também conduz.",
    ],
    atalho:
      "Se todas as saídas forem bloqueadas, a lei dos nós só fecha com corrente de entrada nula. Qualquer corrente que chega precisa de uma saída de mesmo módulo total. A ordem de grandeza do ramo que falta é a diferença, não a soma, das correntes já desenhadas.",
  },
  "fis-ck-n1q5": {
    intuicao:
      "Uma malha é um caminho que volta ao ponto de partida. O potencial elétrico, no regime eletrostático dos circuitos, depende do ponto e não do trajeto. Ao retornar, a soma das subidas e das quedas tem de dar zero. O desenho da malha fechada vem antes de atribuir a tensão da fonte a cada resistor.",
    motivacao:
      "A lei das malhas de Kirchhoff existe porque o campo eletrostático é conservativo: a circulação de E é nula e a soma algébrica das variações de potencial é zero. A corrente não é a mesma em todos os ramos, salvo se a malha for um único caminho em série. Cada resistor não fica com a tensão da fonte quando há outros elementos em série. Somar tensões e chamar o resultado de potência mistura volt com watt. Resistência infinita seria um circuito aberto, não o conteúdo da lei.",
    passos: [
      "Lei das malhas de Kirchhoff: ao longo de um caminho fechado, a soma das variações de potencial é zero.",
      "Exemplo em série: fonte de 12 V, quedas de 4,0 V e de 8,0 V. Então 12 − 4,0 − 8,0 = 0 V.",
      "O campo eletrostático conservativo é a razão dessa soma nula. Voltar ao mesmo nó não muda o potencial.",
      "Num paralelo, os ramos podem ter correntes diferentes, 2,0 A e 4,0 A, e a malha de tensão continua fechando. A lei não exige corrente única.",
    ],
    atalho:
      "Dimensão: a soma é de volts com volts e o resultado é 0 V, não uma potência em watts. Se a fonte fosse 0 V e não houvesse outra fem, todas as quedas seriam 0 V e a corrente seria 0 A. A malha vazia de fem não sustenta corrente em resistores.",
  },
  "fis-ck-n2q1": {
    intuicao:
      "O gerador de 12 V empurra carga por um corredor só, onde estão o resistor de 2 Ω e o de 4 Ω, um depois do outro. A carga vê a soma das duas dificuldades. A corrente é a tensão dividida por essa soma, e vale o mesmo nos dois resistores. O desenho da série vem antes de dividir 12 por um resistor isolado.",
    motivacao:
      "Em série, a lei das malhas soma as quedas R I com a mesma corrente, e a resistência equivalente é a soma, 2 + 4 = 6 Ω. A lei de Ohm no conjunto dá I = V/Req. Usar só 4 Ω produz 3 A e esquece a queda no resistor de 2 Ω. Usar só 2 Ω produz 6 A e esquece o de 4 Ω. Somar as tensões como se cada resistor visse os 12 V inteiros descreveria um paralelo, que não é o desenho.",
    passos: [
      "Associação em série: Req = 2 + 4 = 6 Ω. A lei dos nós num caminho único garante a mesma corrente nos dois.",
      "Lei de Ohm no conjunto em série: I = V / Req = 12 / 6 = 2 A em cada resistor.",
      "Lei das malhas, para conferir: 12 − 2 I − 4 I = 0, então 6 I = 12 e I = 2 A.",
      "A corrente no circuito é 2 A. 12/4 = 3 A e 12/2 = 6 A ignoram um dos resistores.",
    ],
    atalho:
      "Volt dividido por ohm é ampere. 12 V sobre poucos ohms fica na casa de poucos amperes, e 2 A está nessa casa. Se o resistor de 4 Ω fosse retirado e substituído por fio, a corrente subiria para 12/2 = 6 A. Com ele no caminho, a corrente é menor.",
  },
  "fis-ck-n2q2": {
    intuicao:
      "É o mesmo corredor de 12 V, com 2 Ω e depois 4 Ω, percorrido por 2 A. O resistor maior segura a maior parte da tensão, porque a corrente é a mesma e a queda é proporcional à resistência. Quatro ohms são o dobro de dois, então a queda também é o dobro. O desenho da malha, com as duas quedas somando 12 V, vem antes de atribuir os 12 V a um resistor só.",
    motivacao:
      "A lei de Ohm no resistor de 4 Ω, com a corrente da série, é V = R I. A lei das malhas exige que essa queda mais a queda no resistor de 2 Ω feche os 12 V. Dar os 12 V inteiros ao resistor de 4 Ω só seria válido se o outro fosse um fio, de resistência nula. A queda de 4 V pertence ao resistor de 2 Ω. Repartir meio a meio daria 6 V e ignoraria que as resistências são diferentes.",
    passos: [
      "Da série anterior, lei de Ohm no conjunto: I = 12 / (2 + 4) = 2 A, a mesma nos dois resistores.",
      "Lei de Ohm no resistor de 4 Ω, com a corrente da série: V = R I = 4 × 2 = 8 V.",
      "Lei de Ohm no resistor de 2 Ω, com a mesma corrente da série: V = 2 × 2 = 4 V.",
      "Lei das malhas: 8 + 4 = 12 V, fechando a fonte. A tensão no resistor de 4 Ω é 8 V.",
    ],
    atalho:
      "O resistor de 4 Ω é 4/6 da resistência total. Pela malha, ele fica com 4/6 de 12 V, isto é, 8 V. Se os dois resistores fossem iguais, cada um ficaria com 6 V. Aqui o maior fica com o dobro do menor.",
  },
  "fis-ck-n2q3": {
    intuicao:
      "Os resistores de 6 Ω e de 3 Ω estão lado a lado, nos mesmos nós. A corrente se reparte, e o conjunto oferece um caminho mais fácil que qualquer ramo sozinho. A equivalente tem de ser menor que 3 Ω, o menor dos dois. O desenho do paralelo, com a bifurcação da corrente, vem antes de somar 6 com 3.",
    motivacao:
      "No paralelo a tensão é a mesma e as correntes se somam. Pela lei de Ohm, I = V/R₁ + V/R₂, então as condutâncias 1/R se somam. Somar 6 + 3 = 9 Ω é a regra da série, na qual as quedas se sucedem, e não há essa sucessão no desenho. A média 4,5 Ω também fica acima do menor ramo, o que um paralelo não pode fazer. O produto sobre a soma, para dois resistores, é o atalho da mesma soma de condutâncias.",
    passos: [
      "Lei do paralelo, pela soma das condutâncias dos ramos: 1/Req = 1/6 + 1/3.",
      "A soma das condutâncias, com o mesmo denominador, dá 1/6 + 2/6 = 3/6 = 1/2, então Req = 2 Ω.",
      "Fórmula dos dois resistores, equivalente: Req = (6 × 3) / (6 + 3) = 18/9 = 2 Ω.",
      "A soma 6 + 3 = 9 Ω seria a série. A equivalente do paralelo é 2 Ω, menor que 3 Ω.",
    ],
    atalho:
      "A equivalente em paralelo é menor que o menor ramo. Só 2 Ω, entre as alternativas, é menor que 3 Ω. Se o ramo de 6 Ω fosse retirado, sobrariam 3 Ω. Com ele em paralelo, o conjunto só pode ficar mais fácil, abaixo de 3 Ω.",
  },
  "fis-ck-n2q4": {
    intuicao:
      "A rede de 24 V da embarcação alimenta duas lâmpadas presas nos mesmos bornes, uma de 12 Ω e outra de 6 Ω. Cada lâmpada vê os 24 V inteiros, porque o paralelo não reparte tensão. A lâmpada de menor resistência puxa mais corrente. O desenho das duas lâmpadas lado a lado vem antes de usar a soma das resistências.",
    motivacao:
      "No paralelo, a tensão de cada ramo é a da rede, e a lei de Ohm dá a corrente da lâmpada pedida sem precisar da vizinha. A lâmpada de 6 Ω conduz o dobro da de 12 Ω, porque a resistência é a metade. Tratar as duas como série usaria 18 Ω e uma corrente única de 24/18 A, que não é a corrente de nenhuma das lâmpadas no desenho real. A corrente total do gerador é a soma no nó, não a corrente de um ramo.",
    passos: [
      "No paralelo, cada lâmpada fica com a tensão inteira da rede da embarcação, 24 V.",
      "Lei de Ohm na lâmpada de 6 Ω, sob os 24 V do paralelo: I = V/R = 24/6 = 4 A.",
      "Lei de Ohm na lâmpada de 12 Ω, sob a mesma tensão do paralelo: I = 24/12 = 2 A.",
      "Lei dos nós: o gerador fornece 4 + 2 = 6 A. A corrente pedida, na lâmpada de 6 Ω, é 4 A.",
    ],
    atalho:
      "A equivalente do paralelo é (12 × 6) / (12 + 6) = 4 Ω, e a corrente total é 24/4 = 6 A. O ramo de 6 Ω leva dois terços, porque sua condutância é o dobro da outra: 4 A. A ordem, 24 V sobre 6 Ω, já é um punhado de amperes, não 24 A.",
  },
  "fis-ck-n2q5": {
    intuicao:
      "Chegam 5 A a um nó e já se sabe que um fio de saída leva 2 A. O que não saiu por esse fio tem de sair pelo outro, porque o nó não guarda carga. A segunda saída é a diferença, menor que os 5 A que chegaram. O desenho do nó com uma entrada e duas saídas vem antes de somar as correntes.",
    motivacao:
      "A lei dos nós iguala entrada e saídas: 5 = 2 + I. Somar 5 + 2 = 7 A conta a primeira saída como se fosse outra entrada e fabrica corrente. Dividir por dois, achando 2,5 A, reparte em partes iguais e ignora o dado de que um ramo já conduz 2 A. O produto 10 A não é um balanço de carga. A corrente que falta é o que resta para a soma das saídas fechar a entrada.",
    passos: [
      "Lei dos nós de Kirchhoff no regime permanente: a corrente que entra é a soma das que saem.",
      "Lei dos nós no balanço deste nó: a entrada fecha com 5,0 A = 2,0 A + I.",
      "Pela lei dos nós, I = 5 − 2 = 3 A no outro ramo de saída deste mesmo nó.",
      "Conferência: 2 + 3 = 5 A. A soma 5 + 2 = 7 A não conserva a carga no nó.",
    ],
    atalho:
      "Se o primeiro ramo de saída levasse 0 A, o segundo levaria os 5 A inteiros. Se levasse os 5 A, o segundo levaria 0 A. Com 2 A já comprometidos, sobram 3 A. A resposta fica entre 0 A e 5 A, e 7 A fica fora desse intervalo.",
  },
  "fis-ck-n3q1": {
    intuicao:
      "O gerador tem fem de 12 V e, por dentro, uma resistência de 1 Ω em série com o resistor externo de 5 Ω. Quando a corrente circula, parte da fem se perde dentro do gerador. A tensão nos terminais, a que o resistor externo enxerga, é menor que 12 V. O desenho da fem seguida da resistência interna vem antes de ler 12 V na carga.",
    motivacao:
      "A lei de Ohm na malha única usa a resistência total, r + R, porque a interna e a externa estão em série. A equação do gerador, U = ε − r I, tira da fem a queda interna. Ler 12 V nos terminais vale para o circuito aberto, quando I = 0 A. A queda r I = 2 V é o que se perde por dentro, não a tensão entregue à carga. Esquecer r na conta da corrente aumenta a corrente e erra as duas tensões.",
    passos: [
      "Lei de Ohm na malha, com r e R em série: I = ε / (r + R) = 12 / (1 + 5) = 12/6 = 2 A.",
      "Equação do gerador: a tensão terminal é U = ε − r I = 12 − 1 × 2 = 10 V.",
      "Lei de Ohm no resistor externo: U = R I = 5 × 2 = 10 V. As duas contas fecham.",
      "Com a chave aberta, I = 0 A e U = 12 V. Com a carga de 5 Ω, a tensão nos terminais é 10 V.",
    ],
    atalho:
      "Potência: a fem entrega ε I = 12 × 2 = 24 W. O resistor externo dissipa 5 × 2² = 20 W e a resistência interna dissipa 1 × 2² = 4 W. A soma 20 + 4 = 24 W confere a conservação. Os 2 V internos não são a tensão da carga.",
  },
  "fis-ck-n3q2": {
    intuicao:
      "A corrente sai da fonte de 12 V, atravessa primeiro o resistor de 2 Ω e só então chega a uma bifurcação de 6 Ω com 3 Ω. O trecho em série é um corredor único. O paralelo reparte a corrente, e o ramo de menor resistência fica com a maior parte. O desenho, série na frente e malha paralela atrás, vem antes de dividir 12 V por 3 Ω.",
    motivacao:
      "A equivalente do paralelo soma condutâncias, e essa equivalente fica em série com os 2 Ω. Tratar 2 Ω, 6 Ω e 3 Ω como uma série só somaria 11 Ω e daria uma corrente única, apagando a bifurcação. Na bifurcação, a lei de Ohm com a tensão comum manda mais corrente para 3 Ω do que para 6 Ω. Usar a corrente total da fonte como se fosse a corrente do resistor de 3 Ω ignora o ramo vizinho, que também conduz.",
    passos: [
      "Equivalente do paralelo de 6 Ω e 3 Ω: Req = (6 × 3) / (6 + 3) = 18/9 = 2 Ω.",
      "Série com o resistor de 2 Ω: total 2 + 2 = 4 Ω. Lei de Ohm na fonte: I = 12/4 = 3 A.",
      "Lei das malhas: a queda nos 2 Ω de série é 3 × 2 = 6 V, então o paralelo fica com 12 − 6 = 6 V.",
      "Lei de Ohm no resistor de 3 Ω: I = 6/3 = 2 A. No de 6 Ω, 6/6 = 1 A. A lei dos nós fecha: 1 + 2 = 3 A.",
    ],
    atalho:
      "Os dois blocos, a série de 2 Ω e o paralelo equivalente de 2 Ω, são iguais, então cada um fica com metade de 12 V, isto é, 6 V. Sobre 3 Ω, 6 V dão 2 A. Se o ramo de 6 Ω abrisse, o paralelo deixaria de valer 2 Ω e essa corrente mudaria.",
  },
  "fis-ck-n3q3": {
    intuicao:
      "Há duas malhas coladas por um resistor central de 2 Ω. A da esquerda tem gerador de 10 V e resistor de 1 Ω, e a da direita tem gerador de 4 V e resistor de 2 Ω. O sentido horário sobe em cada gerador, do polo negativo para o positivo. A corrente no resistor de 1 Ω é a da malha esquerda, porque esse resistor não é compartilhado, e o desenho das duas malhas vem antes do sistema.",
    motivacao:
      "A lei das malhas escreve uma equação por laço, com a queda no resistor central proporcional à corrente líquida dos dois sentidos. A lei dos nós aparece aí: no ramo comum a corrente é I₁ − I₂, não a soma, se os horários discordam nesse ramo. Tratar os três resistores como uma série única apagaria o nó e misturaria as duas fems num corredor só. O resistor de 1 Ω não vê a corrente da malha direita, só I₁.",
    passos: [
      "Lei das malhas na malha esquerda, horário, fem de 10 V como subida: 10 − 1 I₁ − 2 (I₁ − I₂) = 0, ou seja, 3 I₁ − 2 I₂ = 10.",
      "Lei das malhas na malha direita, horário, fem de 4 V como subida: 4 − 2 I₂ − 2 (I₂ − I₁) = 0, ou seja, I₁ − 2 I₂ = −2. Daí I₁ = 2 I₂ − 2.",
      "Substituição na malha esquerda: 3 (2 I₂ − 2) − 2 I₂ = 10. Então 6 I₂ − 6 − 2 I₂ = 10, logo 4 I₂ = 16, I₂ = 4 A e I₁ = 6 A.",
      "O resistor de 1 Ω está só na malha esquerda, então a corrente nele é I₁ = 6 A. No central, a corrente líquida é I₁ − I₂ = 2 A.",
    ],
    atalho:
      "Conferência pela lei das malhas: à esquerda, 10 − 1 × 6 − 2 × 2 = 0. À direita, 4 − 2 × 4 − 2 × (4 − 6) = 0. As potências também fecham: as fems entregam 10 × 6 + 4 × 4 = 76 W, e os resistores dissipam 1 × 6² + 2 × 2² + 2 × 4² = 36 + 8 + 32 = 76 W.",
  },
  "fis-ck-n3q4": {
    intuicao:
      "Volta o corredor de 12 V com 2 Ω e 4 Ω em série, já percorrido por 2 A. A potência no resistor de 4 Ω é a energia por segundo que a corrente transforma em calor ali. Com 2 A e 8 V naquele resistor, o produto fica na casa das dezenas de watts, não na potência da fonte inteira. O desenho do resistor aquecendo, com sua corrente e sua queda, vem antes das três fórmulas de Joule.",
    motivacao:
      "A potência dissipada num resistor segue o efeito Joule, P = R I², que equivale a P = V I e a P = V²/R quando V e I são os daquele resistor. Usar os 12 V da fonte no resistor de 4 Ω atribui a ele uma tensão que a malha não lhe deu. A potência 24 W é a da fonte inteira, 12 × 2, soma dos dois resistores. A de 8 W é a do resistor de 2 Ω, que tem a mesma corrente e metade da resistência. Cada fórmula precisa dos dados do resistor pedido.",
    passos: [
      "Série de 2 Ω e 4 Ω em 12 V: Req = 6 Ω e, pela lei de Ohm, I = 12/6 = 2 A.",
      "Lei de Ohm no resistor de 4 Ω, com a corrente de 2 A: a tensão nele é V = 4 × 2 = 8 V.",
      "Efeito Joule: P = R I² = 4 × 2² = 4 × 4 = 16 W. Também P = V I = 8 × 2 = 16 W.",
      "No resistor de 2 Ω, P = 2 × 2² = 8 W. A fonte entrega 12 × 2 = 24 W, e 16 + 8 = 24 W fecha a malha.",
    ],
    atalho:
      "As resistências estão na razão 1 para 2 e a corrente é a mesma, então as potências também estão na razão 1 para 2. Com 24 W no total, o resistor de 4 Ω fica com 16 W e o de 2 Ω com 8 W. P = V²/R = 8² / 4 = 16 W confirma pela terceira fórmula.",
  },
  "fis-ck-n3q5": {
    intuicao:
      "Na mesma malha há dois geradores empurrando em sentidos opostos: 12 V num sentido e 6 V no outro. Quem sobe no de 12 V desce no de 6 V. O gerador maior vence, mas só com a diferença, 6 V, não com a soma. Os resistores de 3 Ω e de 1 Ω formam o único corredor dessa malha. O desenho das duas fems opostas vem antes de dividir pela resistência.",
    motivacao:
      "A lei das malhas soma as fems com sinal e, em oposição, a resultante é 12 − 6 = 6 V, no sentido do gerador maior. Somar 12 + 6 trataria os dois como se empurrassem juntos e daria 4,5 A, a corrente de outro circuito. Em série, as resistências se somam, 3 + 1 = 4 Ω, e usar só um resistor, 6/3 ou 6/1, apaga uma queda que a malha ainda tem. A lei de Ohm fecha com a fem líquida sobre a resistência total.",
    passos: [
      "Lei das malhas com fems em oposição: a soma algébrica é 12 − 6 = 6 V, no sentido do gerador de 12 V.",
      "Associação em série dos resistores da malha única: Req = 3 + 1 = 4 Ω no total.",
      "Lei de Ohm na malha, com a fem líquida de 6 V: I = 6 / 4 = 1,5 A no circuito.",
      "A conta (12 + 6) / 4 = 4,5 A somaria geradores que o enunciado colocou em oposição. A corrente é 1,5 A, no sentido do gerador de 12 V.",
    ],
    atalho:
      "Se o gerador de 6 V também fosse de 12 V e continuasse em oposição, a fem líquida seria 0 V e a corrente seria 0 A. A diferença de 6 V sobre 4 Ω fica na casa de 1 A, e 1,5 A é esse quociente. 18 A seria a soma das fems dividida por 1 Ω, dois erros juntos.",
  },
};
