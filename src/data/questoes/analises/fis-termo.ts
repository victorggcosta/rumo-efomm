import type { AnaliseQuestao } from "../../lessons.ts";

export const ANALISES: Record<string, AnaliseQuestao> = {
  "fis-tm-n1q1": {
    intuicao:
      "O gás está num pistão. Calor pode entrar ou sair pelas paredes, e o pistão pode subir e empurrar o exterior. Nesta aula a primeira lei separa essas duas trocas com os símbolos Q e W. W é a energia que sai quando o gás empurra o pistão, isto é, o trabalho feito pelo sistema. O desenho do pistão vem antes de discutir o sinal.",
    motivacao:
      "A convenção adotada escreve ΔU = Q − W, com Q positivo quando o sistema recebe calor e W positivo quando o sistema realiza trabalho. Essa escolha faz a expansão gastar energia interna. A convenção vizinha, ΔU = Q + W, chama de W o trabalho feito sobre o sistema. Misturar as duas troca o sinal e, numa conta numérica, soma o que deveria ser subtraído. W não é calor rejeitado, nem temperatura, nem a própria energia interna.",
    passos: [
      "Primeira lei nesta aula, com o sinal adotado: ΔU = Q − W, com as três grandezas em joules.",
      "Q é o calor recebido pelo sistema. Calor cedido entra com sinal negativo, por exemplo Q = −20 J se o sistema perde 20 J.",
      "W é o trabalho feito pelo sistema. Numa expansão, o pistão entrega energia para fora e W é positivo.",
      "Com Q = 100 J e W = 40 J, a primeira lei dá ΔU = 100 − 40 = 60 J. O símbolo W, na fórmula usada aqui, é o trabalho feito pelo sistema.",
    ],
    atalho:
      "Unidade: Q, W e ΔU são energias, em joules. Temperatura, em kelvin ou em grau celsius, não cabe no lugar de W. Se o pistão travar, W = 0 J e todo o calor vira variação de energia interna, o que confirma o papel de cada símbolo.",
  },
  "fis-tm-n1q2": {
    intuicao:
      "O sistema percorre um ciclo e volta ao mesmo estado: mesma pressão, mesmo volume, mesma temperatura do gás no pistão. A energia interna depende só do estado, não do caminho desenhado no diagrama. Ao fechar a curva, a variação líquida é zero, ainda que calor e trabalho tenham passado pelo pistão. O desenho é a curva fechada, antes da conta.",
    motivacao:
      "Energia interna é função de estado. O ciclo devolve cada variável de estado ao valor inicial, então ΔU = 0. Igualar ΔU ao calor absorvido esqueceria o trabalho que o ciclo entrega, e igualar ΔU ao trabalho esqueceria o calor. Dizer que ΔU é sempre positiva faria a energia crescer a cada volta, e U deixaria de ser função do estado. No ciclo, o trabalho líquido sai de Q_absorvido − Q_rejeitado.",
    passos: [
      "Energia interna como função de estado: U depende do estado do sistema, não do caminho.",
      "Num ciclo o estado final coincide com o inicial, então a função de estado dá ΔU = 0 J.",
      "Primeira lei no ciclo, com ΔU = 0: a conta 0 = Q_líquido − W implica W = Q_líquido.",
      "Exemplo: entram 100 J e saem 40 J. Então W = 60 J e, mesmo assim, ΔU = 0 J. A variação não é o calor nem o trabalho.",
    ],
    atalho:
      "Duas voltas no mesmo ciclo dariam 2 × 0 J = 0 J de variação de energia interna. Se ΔU fosse igual ao calor de cada volta, a energia cresceria sem parar com o estado repetido, o que uma função de estado não faz.",
  },
  "fis-tm-n1q3": {
    intuicao:
      "A máquina absorve calor da fonte quente, devolve uma parte à fonte fria e entrega trabalho no eixo. O rendimento pergunta que fração do calor pago na fonte quente virou trabalho. Não pergunta quanto foi jogado fora, nem inverte a razão. O desenho é a fonte quente, a máquina e a fonte fria, com as setas de calor e de trabalho, antes da razão.",
    motivacao:
      "O rendimento compara o que se obtém, o trabalho W, com o que se pagou, o calor Qq absorvido da fonte quente. Por isso η = W / Qq. A razão Qf / Qq é a fração rejeitada, grande justamente quando a máquina aproveita pouco. Inverter para Qq / W produz um número que pode passar de 1 e deixa de ser um rendimento de máquina térmica. Qq + Qf ainda tem unidade de energia, e rendimento é um número puro.",
    passos: [
      "Definição de rendimento da máquina térmica, efeito útil sobre calor pago: η = W / Qq.",
      "No ciclo, a primeira lei com ΔU = 0 dá W = Qq − Qf, então η = 1 − Qf / Qq.",
      "Exemplo: Qq = 800 J e W = 300 J dão η = 300 / 800 = 0,375. A fração rejeitada seria outra conta.",
      "Qf / Qq mede o descarte. Qq + Qf não é adimensional. O rendimento é W / Qq.",
    ],
    atalho:
      "Análise dimensional: joule dividido por joule é número puro, como convém a um rendimento. Qq + Qf continua em joules e sai da lista. Se Qf tende a zero, η tende a 1. Se quase todo o calor é rejeitado, η tende a 0.",
  },
  "fis-tm-n1q4": {
    intuicao:
      "O gás está num pistão com paredes que não deixam calor passar. O pistão ainda pode se mover, então o gás pode empurrar o exterior ou ser comprimido. O que está proibido é a seta de calor através da parede. Adiabática, neste desenho, significa Q = 0, antes de concluir qualquer coisa sobre temperatura ou volume.",
    motivacao:
      "O nome adiabática fixa a troca de calor em zero, não o trabalho e não a energia interna. Com Q = 0, a primeira lei fica ΔU = −W: se o sistema realiza trabalho, a energia interna desce. Volume constante seria a transformação isocórica, na qual W = 0. Temperatura constante, num gás ideal, seria a isotérmica, na qual ΔU = 0. Trocar esses três nomes troca a grandeza que se anula.",
    passos: [
      "Definição de transformação adiabática no gás do pistão: não há troca de calor, então Q = 0 J.",
      "Primeira lei ΔU = Q − W, com o calor adiabático Q = 0, fica ΔU = −W no pistão.",
      "Exemplo: o gás realiza W = 80 J sem receber calor. Então ΔU = −80 J. A energia interna diminui.",
      "Isocórica teria W = 0 J. Isotérmica de gás ideal teria ΔU = 0 J. Na adiabática, o que se anula é Q.",
    ],
    atalho:
      "Caso limite: pistão travado e parede isolante, então Q = 0 J e W = 0 J ao mesmo tempo, e ΔU = 0 J. Se o pistão sobe com a parede ainda isolante, W fica positivo e a energia interna cai. O isolamento sozinho não segura a temperatura.",
  },
  "fis-tm-n1q5": {
    intuicao:
      "A máquina de bordo trabalha em ciclo entre uma caldeira quente e um sumidouro frio. Parte do calor da caldeira vira trabalho no eixo, e outra parte precisa ir para a fonte fria. Sem essa rejeição, o ciclo não fecha dentro da segunda lei. O desenho tem duas fontes e duas setas de calor, antes de comparar com Carnot.",
    motivacao:
      "O enunciado de Kelvin e Planck diz que um ciclo não transforma em trabalho todo o calor absorvido de uma única fonte. Por isso a máquina rejeita calor para a fonte fria e o rendimento fica abaixo de 1. Achar que um isolante permite superar Carnot entre as mesmas temperaturas inverte o teto: Carnot já é o limite reversível, e irreversibilidade só reduz o rendimento. No fim de cada ciclo ΔU = 0, porque a energia interna é função de estado.",
    passos: [
      "Enunciado de Kelvin e Planck: um ciclo não converte integralmente calor em trabalho com uma única fonte.",
      "Há rejeição de calor para a fonte fria. Com Qq = 100 J e Qf = 40 J, o trabalho do ciclo é 60 J, não 100 J.",
      "Definição de rendimento nesse exemplo: η = W / Qq = 60 / 100 = 0,6, menor que 1.",
      "Função de estado no ciclo: ΔU = 0 J ao fim de cada volta. Nenhuma máquina real supera o rendimento de Carnot entre as mesmas temperaturas.",
    ],
    atalho:
      "Se Qf fosse 0 J, o rendimento do ciclo seria 1, e o único efeito seria transformar calor de uma fonte em trabalho. Kelvin e Planck barram esse caso. A fonte fria é parte do desenho, não um detalhe opcional.",
  },
  "fis-tm-n2q1": {
    intuicao:
      "O gás no pistão recebe 200 J de calor e, ao expandir, realiza 50 J de trabalho sobre o exterior. Dos 200 J que entraram, 50 J saíram como trabalho. A energia interna fica com a diferença, e sobe. O desenho é a seta de calor entrando e a seta de trabalho saindo, antes da soma com sinal.",
    motivacao:
      "A primeira lei na convenção desta aula é ΔU = Q − W, com W feito pelo sistema. Os dois números já estão com o sinal da frase: calor recebido e trabalho realizado. Somar 200 + 50 trata o trabalho como se fosse feito sobre o sistema, a convenção oposta, e produz 250 J. Trocar a ordem, 50 − 200, dá −150 J e inverte quem ganhou energia. O caminho certo é a subtração escrita na lei.",
    passos: [
      "Primeira lei na convenção da aula: ΔU = Q − W, com Q recebido e W realizado pelo sistema.",
      "Primeira lei com os dados do enunciado: o gás recebe Q = 200 J e realiza W = 50 J.",
      "Pela primeira lei, ΔU = 200 − 50 = 150 J, e a energia interna do gás aumenta.",
      "A soma 200 + 50 = 250 J inverteria o sinal de W. A energia interna aumenta 150 J.",
    ],
    atalho:
      "Dimensão: joule menos joule continua joule, como ΔU exige. Se o trabalho realizado fosse 0 J, os 200 J inteiros ficariam na energia interna. Se o trabalho subisse até 200 J, ΔU cairia a 0 J. O valor 50 J está entre esses limites, e 150 J também.",
  },
  "fis-tm-n2q2": {
    intuicao:
      "A máquina dá uma volta completa. Entram 800 J da fonte quente e saem 500 J para a fonte fria. Como o estado volta ao início, a energia interna não fica com saldo. A diferença entre o que entrou e o que saiu é o trabalho líquido no eixo. O desenho do ciclo, com as duas setas de calor, vem antes da subtração.",
    motivacao:
      "No ciclo a energia interna é função de estado e ΔU = 0. A primeira lei reduz a W = Qq − Qf. Somar 800 + 500 trata o calor rejeitado como se também entrasse no sistema, e a seta da fonte fria aponta para fora. Igualar o trabalho a zero porque ΔU é zero confunde as duas grandezas: ΔU nulo não apaga Q nem W, só os iguala em módulo líquido. O calor rejeitado não vira trabalho.",
    passos: [
      "Ciclo completo e energia interna como função de estado: a variação fecha em ΔU = 0 J.",
      "Primeira lei no ciclo, com ΔU = 0 J: o trabalho líquido do eixo é W = Qq − Qf.",
      "Pela primeira lei, W = 800 − 500 = 300 J de trabalho líquido neste ciclo.",
      "A soma 800 + 500 = 1.300 J junta calor que entra com calor que sai. O trabalho líquido é 300 J.",
    ],
    atalho:
      "Dos 800 J absorvidos, 500 J voltam para a fonte fria e 300 J ficam como trabalho. A soma 500 + 300 = 800 confere a primeira lei. Se a rejeição fosse igual à absorção, o trabalho do ciclo seria 0 J.",
  },
  "fis-tm-n2q3": {
    intuicao:
      "É a mesma máquina: paga 800 J na fonte quente, devolve 500 J à fonte fria e fica com 300 J de trabalho. O rendimento é a fração dos 800 J que virou trabalho, não a fração que foi descartada. Trezentos joules em 800 é menos da metade do calor pago. A razão vem depois de separar as duas setas de calor.",
    motivacao:
      "A definição η = W / Qq divide o efeito útil pelo calor pago. Qf / Qq = 500 / 800 = 5/8 é a fração rejeitada, o complemento do rendimento, e não o rendimento. W / Qf = 300 / 500 = 3/5 compara o trabalho com o calor jogado fora, que não é o custo cobrado na definição. No ciclo, as duas frações W/Qq e Qf/Qq somam 1, e essa soma é a conferência, não uma razão substituta.",
    passos: [
      "Do ciclo anterior e da primeira lei, W = 800 − 500 = 300 J, com Qq = 800 J.",
      "Definição de rendimento da máquina: η = W / Qq = 300 / 800, joule sobre joule.",
      "Definição de rendimento, simplificando a fração por 100: η = 300/800 = 3/8.",
      "A fração rejeitada é Qf / Qq = 500 / 800 = 5/8. Ela não é o rendimento. 3/8 + 5/8 = 1 confere o balanço.",
    ],
    atalho:
      "3/8 = 0,375 e 5/8 = 0,625. Os dois somam 1,000, como a primeira lei exige no ciclo: cada joule absorvido ou vira trabalho ou é rejeitado. Um rendimento de 1 só apareceria se Qf fosse 0 J.",
  },
  "fis-tm-n2q4": {
    intuicao:
      "O gás ideal expande dentro do pistão enquanto a temperatura fica travada no mesmo valor. Para um gás ideal, a energia interna só olha a temperatura, então ela não muda. O calor que entra durante a expansão sai inteiro como trabalho do pistão. O desenho é a isotérmica, uma hipérbole no diagrama, antes de igualar Q e W.",
    motivacao:
      "No gás ideal, U é função apenas de T, então a isotérmica, com ΔT = 0, tem ΔU = 0. A primeira lei vira 0 = Q − W, logo W = Q neste trecho do pistão. Esse trecho não é uma máquina de uma fonte só: para fechar um ciclo é preciso outro processo, e nele há rejeição de calor. Q = 0 seria a adiabática e W = 0 seria a isocórica, enquanto dizer que a energia interna aumenta contradiz ΔT = 0.",
    passos: [
      "Gás ideal: a energia interna depende só da temperatura, na forma U = U(T), sem depender do volume.",
      "Expansão isotérmica do gás ideal: ΔT = 0 K, então a energia interna não muda e ΔU = 0 J.",
      "Primeira lei na isotérmica: ΔU = Q − W = 0, logo o trabalho iguala o calor, W = Q.",
      "O calor absorvido nesse trecho sai como trabalho. Isso não autoriza um ciclo com uma única fonte, porque o retorno do pistão exige outro processo.",
    ],
    atalho:
      "Se a temperatura subisse 10 K, a energia interna do gás ideal aumentaria e W deixaria de igualar Q. Na isotérmica esse acréscimo é 0 K, e a igualdade W = Q permanece. Na adiabática vizinha, Q = 0 J e ΔU = −W, o oposto deste balanço.",
  },
  "fis-tm-n2q5": {
    intuicao:
      "A máquina de Carnot trabalha entre uma fonte a 400 K e outra a 300 K. A fonte fria não está muito abaixo da quente: 300 é três quartos de 400. O rendimento reversível fica com o quarto que sobra, não com os três quartos. As temperaturas já estão em kelvin, e o desenho das duas fontes vem antes da fórmula.",
    motivacao:
      "O rendimento de Carnot é η = 1 − Tf / Tq, com as temperaturas na escala absoluta. Tf / Tq = 300 / 400 = 3/4 é a fração de calor rejeitado no ciclo reversível, Qf / Qq, e não o rendimento. Usar 3/4 como rendimento troca o que se perde com o que se aproveita. Inverter as temperaturas produz 4/3, maior que 1, impossível para um rendimento. O 1 na frente da fórmula é o calor absorvido inteiro, do qual se tira a fração rejeitada.",
    passos: [
      "Rendimento de Carnot entre as duas fontes: η = 1 − Tf / Tq, com temperaturas em kelvin.",
      "Na fórmula de Carnot, Tf / Tq = 300 / 400 = 0,75, que é a fração rejeitada 3/4.",
      "Rendimento de Carnot: η = 1 − 0,75 = 0,25, isto é, a fração 1/4 do calor absorvido.",
      "3/4 é Qf / Qq nesse ciclo, a fração rejeitada. 4/3 inverteria Tf e Tq e passaria de 1.",
    ],
    atalho:
      "Se Tf fosse igual a Tq, η seria 0. Se Tf tendesse a 0 K, η tenderia a 1. Aqui a fria vale 0,75 da quente, então se rejeitam 0,75 e se aproveitam 0,25. A ordem de grandeza é um quarto, não três quartos.",
  },
  "fis-tm-n3q1": {
    intuicao:
      "As duas fontes estão anunciadas em grau celsius, 27 °C e 227 °C. A mais quente é a fonte quente da máquina, e a mais fria é o sumidouro. A fórmula de Carnot divide temperaturas contadas desde o zero absoluto, não desde o gelo fundente. Primeiro desloca-se a escala para kelvin, e só então se faz a razão. O desenho das duas temperaturas vem antes da subtração.",
    motivacao:
      "O rendimento de Carnot, η = 1 − Tf / Tq, usa temperatura termodinâmica. Somar 273 leva 27 °C a 300 K e 227 °C a 500 K. A razão 27/227 usa o zero arbitrário da escala celsius: 0 °C não é ausência de agitação. No limite de uma máquina entre 0 °C e 100 °C, essa razão errada daria rendimento 1, o que é absurdo, enquanto a conta em kelvin fica perto de 0,27. Por isso 1 − 27/227 não é o rendimento.",
    passos: [
      "Conversão para a escala absoluta usada no problema: T = θ + 273. Então 27 °C = 300 K e 227 °C = 500 K.",
      "A fonte quente é a maior temperatura, Tq = 500 K, e a fria é Tf = 300 K.",
      "Rendimento de Carnot em kelvin: η = 1 − Tf / Tq = 1 − 300 / 500 = 1 − 0,6 = 0,4.",
      "A expressão 1 − 27/227 mistura a escala celsius na razão. 200/227 usa o intervalo em celsius sobre a temperatura quente ainda em celsius. O valor do rendimento é 0,4.",
    ],
    atalho:
      "300/500 = 3/5 = 0,6, e o complemento para 1 é 0,4. Entre 0 °C e 100 °C, o erro de usar celsius daria η = 1, enquanto 1 − 273/373 fica longe de 1. A escala absoluta é o que impede esse rendimento cheio.",
  },
  "fis-tm-n3q2": {
    intuicao:
      "A máquina de Carnot fica entre 600 K e 300 K, e a fonte quente entrega 2.000 J por ciclo. A fria está na metade da temperatura absoluta da quente, então metade do calor volta para a fonte fria. Os outros 1.000 J saem como trabalho. O desenho das duas fontes, com a seta de 2.000 J entrando, vem antes da proporção.",
    motivacao:
      "No ciclo de Carnot, Qf / Qq = Tf / Tq, e a primeira lei com ΔU = 0 dá W = Qq − Qf. As duas relações contam a mesma rejeição. Dizer que o calor rejeitado é zero faria rendimento 1 entre temperaturas finitas, o que Carnot não permite. Dizer que se rejeitam os 2.000 J inteiros anularia o trabalho. Somar 2.000 + 1.000 mistura calor de entrada com calor de saída.",
    passos: [
      "Rendimento de Carnot entre as fontes: η = 1 − Tf / Tq = 1 − 300 / 600 = 1 − 0,5 = 0,5.",
      "Definição de rendimento no ciclo de Carnot: W = η Qq = 0,5 × 2.000 = 1.000 J.",
      "Primeira lei no ciclo, com ΔU = 0: Qf = Qq − W = 2.000 − 1.000 = 1.000 J rejeitados.",
      "Pela razão de Carnot, Qf / Qq = Tf / Tq = 300 / 600 = 0,5, então Qf = 0,5 × 2.000 = 1.000 J. As duas leis concordam.",
    ],
    atalho:
      "Temperaturas na razão 1 para 2 implicam calores na razão 1 para 2. De cada 2.000 J absorvidos, 1.000 J são rejeitados. Se Tq e Tf fossem iguais, os 2.000 J seriam rejeitados e o trabalho seria 0 J.",
  },
  "fis-tm-n3q3": {
    intuicao:
      "Duas máquinas trabalham entre as mesmas duas temperaturas. Uma é reversível, a de Carnot. A outra é real: tem atrito, vazamento e troca de calor com diferença finita de temperatura. O teto de aproveitamento é o da máquina reversível. A real fica abaixo, e o desenho do ciclo com perdas vem antes de comparar os números.",
    motivacao:
      "O teorema de Carnot, consequência da segunda lei, diz que nenhuma máquina entre duas fontes supera o rendimento reversível entre essas temperaturas. Isolante melhor reduz uma perda, mas não cria um ciclo acima do reversível: Carnot já não tem atrito nem calor escapando fora das duas fontes. Igualar todo rendimento real ao de Carnot exigiria um ciclo reversível, que não é o regime de uma máquina de bordo. Fechar o ciclo zera ΔU e não faz o rendimento valer 1.",
    passos: [
      "Teorema de Carnot: entre duas temperaturas, o rendimento máximo é η_C = 1 − Tf / Tq.",
      "Qualquer irreversibilidade produz menos trabalho para o mesmo Qq, então η_real < η_C.",
      "Exemplo: entre 600 K e 300 K, η_C = 0,5. Uma máquina real pode ter η = 0,4, e não 0,6.",
      "A frase que cabe é que o rendimento real não supera o de Carnot. Ele não é sempre igual ao de Carnot, nem vale 1 só porque o ciclo fecha.",
    ],
    atalho:
      "O caso limite sem atrito e com trocas reversíveis recupera η = η_C, e ainda assim não ultrapassa. Baixar Tf ou subir Tq mexe no teto, logo o rendimento depende das temperaturas. Um isolante não empurra o resultado para o outro lado desse teto.",
  },
  "fis-tm-n3q4": {
    intuicao:
      "O refrigerador de Carnot tira calor de um ambiente a 270 K e o joga, com ajuda de trabalho, para um ambiente a 300 K. O coeficiente pedido compara o calor retirado da fonte fria com o trabalho que se paga. A diferença de temperatura é pequena, 30 K, então cada joule de trabalho retira vários joules de calor. O desenho das duas fontes e da seta de trabalho entrando na máquina vem antes da razão.",
    motivacao:
      "No refrigerador de Carnot, as trocas obedecem Qf / Qq = Tf / Tq, e a primeira lei no ciclo dá Qq = Qf + W. O coeficiente Qf / W vira Tf / (Tq − Tf). Usar só Tf / Tq = 270/300 dá a razão dos calores, não o calor retirado por unidade de trabalho. Usar Tq / (Tq − Tf) = 10 seria o coeficiente de aquecimento, Qq / W, que conta o calor entregue à sala quente. O pedido é o efeito frio dividido pelo trabalho.",
    passos: [
      "Ciclo de Carnot no refrigerador: Qf / Qq = Tf / Tq = 270 / 300 = 0,9 em módulo.",
      "Primeira lei no ciclo: o calor rejeitado à fonte quente é Qq = Qf + W, então W = Qq − Qf.",
      "Coeficiente de desempenho: Qf / W = Tf / (Tq − Tf) = 270 / (300 − 270) = 270 / 30.",
      "O coeficiente de Carnot vale 270 / 30 = 9. Cada 1,0 J de trabalho retira 9 J da fonte fria.",
    ],
    atalho:
      "Se Qf = 9 J, o trabalho é 1 J e o calor jogado na fonte quente é 10 J. A razão 9/10 = 0,9 coincide com 270/300. O número 10 seria Qq / W, o desempenho como aquecedor. O número 9 é o desempenho como refrigerador.",
  },
  "fis-tm-n3q5": {
    intuicao:
      "A instalação usa vapor a 600 K e água do mar a 300 K. Entre essas temperaturas o rendimento de Carnot é 1/2, já conferido pela razão das temperaturas absolutas. A caldeira fornece 4.000 J por ciclo à máquina ideal. Metade vira trabalho e a outra metade volta para o mar. O desenho da caldeira, da turbina e do condensador com água do mar vem antes da multiplicação.",
    motivacao:
      "O rendimento é W / Qq, então o trabalho máximo é η vezes o calor pago. Com η = 1/2 e Qq = 4.000 J, o eixo recebe 2.000 J. Entregar os 4.000 J em trabalho seria rendimento 1, proibido pelo teorema de Carnot entre temperaturas finitas. Produzir 6.000 J criaria energia, contra a primeira lei no ciclo. Os 2.000 J que não viram trabalho são rejeitados para a água do mar, a fonte fria obrigatória.",
    passos: [
      "Rendimento de Carnot entre 600 K e 300 K: η = 1 − 300/600 = 1/2, como o enunciado afirma.",
      "Definição de rendimento da máquina de Carnot: η = W / Qq, então W = η Qq.",
      "Pela definição de rendimento, W = 0,5 × 4.000 = 2.000 J de trabalho máximo.",
      "Primeira lei no ciclo: Qf = Qq − W = 4.000 − 2.000 = 2.000 J vão para o mar. Não há ciclo, entre essas temperaturas, que transforme os 4.000 J inteiros em trabalho.",
    ],
    atalho:
      "Qf / Qq = Tf / Tq = 300/600 = 0,5, então a rejeição também é 0,5 × 4.000 = 2.000 J. Trabalho e rejeição batem. Se o mar estivesse a 600 K, o rendimento cairia a zero e os 4.000 J seriam devolvidos sem trabalho útil.",
  },
};
