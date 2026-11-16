import type { AnaliseQuestao } from "../../lessons.ts";

export const ANALISES: Record<string, AnaliseQuestao> = {
  "fis-nw-n1q1": {
    intuicao:
      "A soma de todas as forças desenhadas no corpo fecha um polígono, e a seta que sobra tem comprimento zero. Sem essa sobra, nada aumenta a velocidade, nada a diminui e nada entorta a trajetória. Quem já andava em linha reta segue com o mesmo módulo e o mesmo sentido. Quem estava parado continua parado. O repouso é só o caso particular da velocidade constante igual a zero.",
    motivacao:
      "A primeira lei de Newton lê a resultante nula como conservação do estado de movimento. A segunda lei, F = m a, conta a mesma história: com resultante zero e massa não nula, a aceleração é zero, e aceleração zero é velocidade constante. A alternativa da velocidade necessariamente zero troca equilíbrio por repouso. Um navio em linha reta, com o empuxo das máquinas igualando o arrasto, tem resultante nula e não está parado.",
    passos: [
      "Primeira lei de Newton: resultante nula mantém a velocidade vetorial constante em módulo, direção e sentido.",
      "Segunda lei, F = m a: com a resultante F = 0 e a massa diferente de zero, segue a = 0.",
      "Definição de aceleração: aceleração nula significa Δv = 0 em qualquer intervalo. A velocidade não cresce, não cai e não muda de direção.",
      "Primeira lei, no caso particular: velocidade constante inclui o repouso, v = 0, e o movimento retilíneo uniforme. O zero obrigatório esquece o segundo caso.",
    ],
    atalho:
      "No gelo, um disco que já desliza não tem força horizontal. A resultante é nula e a velocidade fica a que ele já tinha. Se a lei exigisse o zero, o disco pararia sozinho. O que se vê é o contrário: ele segue, e o zero só aparece quando ele começou parado.",
  },
  "fis-nw-n1q2": {
    intuicao:
      "O corpo de 2 kg ganha 3 m/s de velocidade a cada segundo, e essa aceleração aponta na direção da força resultante. A pergunta pede o tamanho dessa força, não uma componente solta. Massa maior pede mais força para a mesma aceleração. Aceleração maior pede mais força para a mesma massa. Os dois números se encontram num produto, e a seta da força tem o mesmo desenho da seta da aceleração.",
    motivacao:
      "A segunda lei, com massa constante, escreve a resultante como o produto da massa pela aceleração. Dividir 3 por 2 responderia quantos metros por segundo ao quadrado cabem em cada quilograma, e isso não é força. A unidade newton é quilograma vezes metro por segundo ao quadrado, e essa multiplicação é a definição operacional. A alternativa 1,5 N inverte a fração. A alternativa 5 N soma grandezas que não se somam.",
    passos: [
      "Segunda lei de Newton, massa constante: o módulo da resultante é F = m a, na direção da aceleração.",
      "Substituição na segunda lei: a massa é m = 2 kg e a aceleração é a = 3 m/s², na direção da resultante.",
      "Produto da segunda lei: F = 2 × 3 = 6. A unidade (kg)(m/s²) é o newton, então a resultante mede 6 N.",
      "A resultante mede 6 N. 1,5 N seria a divisão 3/2, que troca o papel da massa na segunda lei.",
    ],
    atalho:
      "1 kg acelerado a 1 m/s² pede 1 N. Aqui há o dobro da massa e o triplo dessa aceleração de referência, então 2 × 3 = 6 N. A conta de cabeça é a própria definição do newton. Se a alternativa sai menor que 3, ela dividiu em vez de multiplicar.",
  },
  "fis-nw-n1q3": {
    intuicao:
      "A Terra puxa o corpo de 5 kg para baixo. Essa puxada é o peso, uma força, e a massa é outra grandeza. Perto da superfície, com o g do enunciado, cada quilograma é puxado por 10 N. Cinco quilogramas são cinco dessas puxadas somadas. O desenho é uma seta vertical para baixo, de comprimento m g, saindo do centro do corpo.",
    motivacao:
      "P = m g é a força gravitacional no modelo de g constante. A massa fica em quilogramas e o peso sai em newtons. A alternativa 5 N lê o número da massa e cola a unidade de força, que é o erro de chamar peso de massa. A alternativa 500 N usaria g = 100, dez vezes o valor dado. A conta certa multiplica pelo g = 10 m/s² que o enunciado fixou.",
    passos: [
      "Definição de peso, com g constante: P = m g, força vertical para baixo.",
      "O enunciado fixa g = 10 m/s² e dá m = 5 kg. Os dois entram juntos no produto do peso.",
      "Produto P = m g: 5 × 10 = 50. A unidade newton sai de quilograma vezes metro por segundo ao quadrado.",
      "O peso é 50 N. 5 N confundiria a massa em quilogramas com o peso. 500 N trocaria o g dado por 100.",
    ],
    atalho:
      "Com g = 10, a regra prática é multiplicar a massa por 10. Um corpo de 1 kg pesa 10 N, e 5 kg pesam cinco vezes isso, 50 N. A alternativa que repete o 5 mudou a unidade e esqueceu a puxada da Terra.",
  },
  "fis-nw-n1q4": {
    intuicao:
      "Quando a mão empurra a parede, a parede empurra a mão de volta. São duas setas do mesmo tamanho e de sentidos opostos, desenhadas em corpos diferentes. Uma entra no diagrama da mão. A outra entra no diagrama da parede. Por isso elas não se cancelam dentro de um único corpo e não explicam, sozinhas, por que a mão fica parada.",
    motivacao:
      "A terceira lei nomeia esse par: forças de mesma natureza, mesmo módulo, sentidos opostos, em corpos distintos. Colocar as duas no mesmo corpo é o erro de somá-las como se fossem peso e normal num diagrama só. Atrito e verticalidade não são condições da lei, e os módulos são iguais, não diferentes. A alternativa do mesmo corpo mistura o par da terceira lei com o equilíbrio de um diagrama.",
    passos: [
      "Terceira lei de Newton: se A exerce uma força em B, B exerce em A uma força de mesmo módulo e sentido oposto.",
      "Terceira lei: as duas forças do par atuam em corpos diferentes. Cada uma entra no diagrama de um corpo só.",
      "Por estarem em diagramas distintos, ação e reação não se somam numa resultante de um único corpo.",
      "O par existe com ou sem atrito e em qualquer direção. Os módulos são iguais. A alternativa do mesmo corpo descreve outro arranjo.",
    ],
    atalho:
      "Separe os desenhos: a força do pé no chão está no chão, e a força do chão no pé está no pé. Mesmo tamanho, sentidos opostos, corpos diferentes. Se as duas setas estão no mesmo boneco, o par da terceira lei foi desenhado no lugar errado.",
  },
  "fis-nw-n1q5": {
    intuicao:
      "Um livro parado na mesa, sem ninguém empurrando de lado, não precisa de atrito para ficar onde está. O peso e a normal já se fecham na vertical, e na horizontal não há força. Se uma mão começa a empurrar de leve, o atrito estático nasce no sentido contrário e cresce junto com o empurrão, até o teto μN. Antes desse teto o livro continua parado, e o atrito vale o necessário, não o máximo.",
    motivacao:
      "O estático é uma força de ajuste, limitada por μe N, e não uma força que vale sempre o máximo. Marcar μN para qualquer situação descreve só a iminência do escorregamento. Sem tendência de escorregar, o estático é zero. Ele aponta contra a tendência, não a favor da força aplicada, e não precisa de plano inclinado para existir. A alternativa do 'sempre μN' erra o caminho ao trocar o valor de ajuste pelo teto.",
    passos: [
      "Sem força paralela à superfície, não há tendência de escorregar e o atrito estático é nulo.",
      "Se surge uma força paralela e o corpo segue em repouso, a resultante horizontal é zero, então o estático iguala essa força.",
      "Desigualdade do atrito estático: o módulo não passa de μN. Abaixo do limite, ele vale o necessário, não o teto.",
      "Sentido do atrito estático: ele é oposto à tendência de escorregar. A alternativa do 'sempre μN' só vale na iminência, que o enunciado não impôs.",
    ],
    atalho:
      "Empurre um armário pesado com um dedo. Ele não anda, e o atrito iguala o dedo, bem abaixo de μN. Só quando o empurrão chega no limite é que o estático atinge μN. Antes disso, marcar o máximo responde o teto, não a força que está atuando.",
  },
  "fis-nw-n2q1": {
    intuicao:
      "As duas forças estão na mesma reta e apontam para lados opostos, num corpo de 2 kg. A de 10 N vence a de 4 N, e a sobra é uma seta de 6 N no sentido da maior. Essa sobra, dividida pela massa, é a aceleração. Somar 10 e 4 só faria sentido se as duas setas apontassem para o mesmo lado, e o enunciado diz que os sentidos são opostos.",
    motivacao:
      "Forças na mesma reta se subtraem quando os sentidos são opostos, porque a resultante é a soma vetorial. A segunda lei transforma essa resultante em aceleração ao dividir pela massa. A alternativa 7 m/s² faz (10 + 4)/2 e trata as forças como se tivessem o mesmo sentido, o que o desenho nega. A ordem certa é primeiro achar a sobra de 6 N e só então dividir por 2 kg.",
    passos: [
      "Soma vetorial na mesma reta, sentidos opostos: o módulo da resultante é 10 − 4 = 6 N, no sentido da força maior.",
      "Segunda lei de Newton: a = F/m, com F = 6 N na resultante já obtida e m = 2 kg no corpo.",
      "Divisão pela massa, segunda lei: a = 6/2 = 3. A unidade N/kg é m/s², e a aceleração mede 3 m/s².",
      "Segunda lei já dividida: a aceleração mede 3 m/s². 7 m/s² seria (10 + 4)/2, a conta dos sentidos iguais.",
    ],
    atalho:
      "A sobra é 6 N para 2 kg, isto é, 3 N em cada quilograma. Cada newton por quilograma vale 1 m/s², então a aceleração é 3 m/s². Se as forças tivessem o mesmo sentido, a alternativa 7 m/s² estaria certa, e ela está na lista para esse engano.",
  },
  "fis-nw-n2q2": {
    intuicao:
      "O bloco de 5 kg é puxado para a frente com 20 N, e o chão segura com 10 N de atrito, para trás. Na horizontal sobram 10 N no sentido da puxada. Na vertical, o peso e a normal se enfrentam e se cancelam, porque o bloco não sobe nem desce. A aceleração nasce só da sobra horizontal, repartida pelos 5 kg. O g = 10 entra apenas para fechar esse par vertical.",
    motivacao:
      "A segunda lei usa a resultante, não a força aplicada sozinha. Na horizontal, a resultante é a puxada menos o atrito. O peso m g = 50 N e a normal de 50 N ficam no eixo vertical e não entram na aceleração horizontal. A alternativa 4 m/s² faz 20/5 e esquece os 10 N do atrito. A alternativa 0 trataria a puxada como se fosse cancelada por inteiro, e 20 N não é igual a 10 N.",
    passos: [
      "Eixo vertical, sem aceleração: N = P = m g = 5 × 10 = 50 N, com g = 10 m/s². Esse par não entra na resultante horizontal.",
      "Eixo horizontal, sentidos opostos: a resultante é 20 − 10 = 10 N, no sentido da puxada.",
      "Segunda lei no eixo horizontal: a = F/m = 10/5 = 2 m/s², no sentido da puxada.",
      "Divisão: a = 2 m/s². 4 m/s² seria 20/5, a conta que não desconta o atrito.",
    ],
    atalho:
      "Sobra de 10 N em 5 kg é 2 m/s². O g = 10 só constrói o peso de 50 N, que a normal cancela na vertical. A aceleração pedida não usa esse 50 N. Se a resposta deu 4, o atrito ficou fora do diagrama.",
  },
  "fis-nw-n2q3": {
    intuicao:
      "O livro parado na mesa tem duas setas verticais no próprio livro: o peso, para baixo, feito pela Terra, e a normal, para cima, feita pela mesa. Elas têm o mesmo tamanho, senão o livro aceleraria na vertical. Mesmo assim não formam um par ação-reação. O par do peso está na Terra, que o livro puxa para cima. O par da normal está na mesa, que o livro comprime para baixo.",
    motivacao:
      "Equilíbrio e terceira lei respondem perguntas diferentes. Resultante nula no livro explica o repouso, e para isso peso e normal estão no mesmo diagrama e se cancelam. A terceira lei exige corpos diferentes e forças da mesma interação. Peso é gravitacional e normal é de contato. A alternativa que chama esse par de ação-reação usa o critério do equilíbrio no lugar do critério dos dois corpos.",
    passos: [
      "Repouso: a aceleração vertical é zero. Pela segunda lei, a resultante vertical no livro é nula, então N e P têm o mesmo módulo.",
      "Equilíbrio pela segunda lei, com a = 0: as duas forças estão aplicadas no livro e se equilibram nesse diagrama.",
      "Par ação-reação do peso, pela terceira lei: a Terra puxa o livro e o livro puxa a Terra. A normal não entra nesse par.",
      "Par da normal: a mesa empurra o livro e o livro empurra a mesa. Peso e normal equilibram o livro e não são o par da terceira lei.",
    ],
    atalho:
      "Apague a mesa no desenho. O peso continua, porque a Terra segue lá, e a normal some. Um par da terceira lei não se separa assim: as duas forças nascem juntas, em corpos diferentes, da mesma interação. Aqui cada força tem o seu par em outro corpo.",
  },
  "fis-nw-n2q4": {
    intuicao:
      "O peso aponta para baixo, na vertical, com tamanho m vezes 10. O plano sobe a 30° e a normal é perpendicular a ele. A parte do peso que puxa o corpo ao longo da rampa é a sombra do peso sobre o plano. Em 30°, essa sombra é a metade do peso, porque o ângulo entre o peso e a perpendicular ao plano é o próprio 30° da inclinação. A outra sombra, perpendicular ao plano, é equilibrada pela normal.",
    motivacao:
      "Decompor o peso nos eixos do plano evita inventar uma força extra. O eixo paralelo ao plano usa sen 30°, e o eixo perpendicular usa cos 30°. sen 30° = 1/2 corta o peso pela metade. A alternativa 10m usa o peso inteiro, como se o plano fosse uma parede vertical. A alternativa com √3 puxa o cosseno, que governa a normal, para o eixo que acelera o corpo.",
    passos: [
      "Peso, com g = 10 m/s²: P = m g = 10m, em newtons se m está em quilogramas, vertical para baixo.",
      "Decomposição do peso: no plano de 30°, a componente paralela ao plano é P sen 30°.",
      "Valor notável sen 30° = 1/2, então o módulo da componente paralela é 10m × 1/2 = 5m.",
      "Produto: 5m newtons. 10m seria sen 90°, um plano vertical. A componente perpendicular ao plano é 10m cos 30°, outro eixo.",
    ],
    atalho:
      "Em 0° a componente ao longo do plano é zero, e em 90° ela é o peso inteiro, 10m. Em 30°, sen 30° = 1/2, e a metade de 10m é 5m. O valor fica entre os dois extremos, como o ângulo pede. 10m é o caso da parede, não o desta rampa.",
  },
  "fis-nw-n2q5": {
    intuicao:
      "O bloco já está escorregando sobre a superfície. O raspar acontece no sentido contrário ao do movimento relativo. A seta do atrito cinético fica paralela à superfície e aponta contra a velocidade de deslizamento. O tamanho é μc N, a compressão vezes o coeficiente. Ao longo do caminho essa força vai gastando energia mecânica, metro a metro.",
    motivacao:
      "O sentido do cinético é definido pelo deslizamento, não pela força que um dia pôs o corpo em marcha. A alternativa que aponta a favor da velocidade faria o bloco acelerar sozinho e aumentaria a energia. Ser perpendicular à superfície é o papel da normal, não do atrito. Ser conservativo exigiria um trabalho que só dependesse dos extremos, e o trabalho do atrito depende da distância percorrida. O módulo μc N também não precisa superar o peso.",
    passos: [
      "Atrito cinético: existe quando há deslizamento, com módulo μc N, e é paralelo à superfície.",
      "Sentido do atrito cinético: ele é oposto ao deslizamento, isto é, contrário à velocidade relativa ao longo da superfície.",
      "A normal é que é perpendicular à superfície. O atrito não ocupa esse eixo.",
      "O trabalho do cinético num deslocamento d a favor do movimento é −μc N d. Ele depende do caminho, então a força não é conservativa.",
    ],
    atalho:
      "Se o atrito apontasse a favor da velocidade, o bloco ganharia energia sem ninguém empurrar. O que se observa é a freada. A seta aponta contra o deslizamento. A alternativa perpendicular descreve a normal, que é a outra força da superfície.",
  },
  "fis-nw-n3q1": {
    intuicao:
      "A caixa de 20 kg está parada no convés horizontal. O peso é 200 N e a normal, na horizontal, também é 200 N. O maior atrito estático que o convés consegue fazer é 0,4 vezes 200 N, isto é, 80 N. A força aplicada é de 50 N, menor que esse teto. A caixa nem começa a andar, e o atrito estático sobe só até 50 N, o bastante para anular a força, e o cinético nem entra em cena.",
    motivacao:
      "Antes de usar μc é preciso decidir se o corpo escorrega. A comparação é entre a força aplicada e o máximo μe N. Se a aplicada perde, o corpo fica em repouso, a resultante horizontal é zero e o estático iguala a aplicada. A alternativa 80 N marca o teto, não a força que está atuando. A alternativa 60 N usa μc N, conta que só vale depois que o deslizamento já começou.",
    passos: [
      "Equilíbrio vertical, segunda lei com aceleração nula: N = m g = 20 × 10 = 200 N, com g = 10 m/s².",
      "Limite do atrito estático: f_máx = μe N = 0,4 × 200 = 80 N. Abaixo disso a caixa pode continuar parada.",
      "A força aplicada, 50 N, é menor que 80 N. A caixa permanece em repouso e o atrito cinético não atua.",
      "No repouso a resultante horizontal é nula, pela primeira lei, então o estático vale 50 N, oposto à força.",
      "Atrito cinético, que não se aplica no repouso: 60 N seria μc N = 0,3 × 200. 80 N é o teto estático, não o valor pedido.",
    ],
    atalho:
      "50 N contra um teto de 80 N: a caixa nem se mexe. No repouso o atrito copia a força aplicada, e a cópia vale 50 N. O cinético de 60 N e o máximo de 80 N são números do enunciado que responderiam outra pergunta, a da iminência ou a do bloco já escorregando.",
  },
  "fis-nw-n3q2": {
    intuicao:
      "O bloco desce a rampa de 30° e não há atrito para segurar. A única força ao longo do plano é a componente do peso rampa abaixo. A normal cancela a componente perpendicular e não empurra o bloco nem para cima nem para baixo da rampa. Em 30° a componente motora é metade do peso, então a aceleração é metade de g. O enunciado fixa g = 10 m/s².",
    motivacao:
      "A segunda lei no eixo do plano, sem atrito, é m a = m g sen θ, e a massa cancela. O seno entra porque o ângulo entre o peso e a normal do plano é o ângulo de inclinação. cos 30° aparece em N = m g cos 30°, e a normal não tem componente ao longo do plano. A alternativa g cos 30°, e também 5√3 m/s², troca o eixo. 10 m/s² seria a queda livre vertical, sen 90°.",
    passos: [
      "Eixo ao longo do plano, no sentido da descida: a única força é a componente do peso, m g sen 30°.",
      "Segunda lei: m a = m g sen 30°. A massa, diferente de zero, cancela dos dois lados.",
      "Valor notável sen 30° = 1/2 e g = 10 m/s², então a = g sen 30° = 10 × 1/2 = 5 m/s².",
      "Produto: a = 5 m/s², plano abaixo. g cos 30° = 5√3 m/s² é a normal dividida pela massa, não a aceleração ao longo do plano.",
    ],
    atalho:
      "Sem atrito, a = g sen θ: em 0° o seno é zero e o bloco não anda. Em 90° o seno é 1 e a aceleração é 10 m/s². Em 30°, sen 30° = 1/2, e a metade de 10 é 5. A rampa fica no meio do seno, não no cosseno.",
  },
  "fis-nw-n3q3": {
    intuicao:
      "O corpo de 10 kg está no chão de um elevador que sobe e ainda acelera para cima a 2 m/s². O peso puxa para baixo com 100 N. Para a aceleração ser para cima, a normal tem de vencer o peso e ainda sobrar o bastante para acelerar os 10 kg. O chão empurra mais forte do que no elevador parado. A seta para cima é maior que a seta para baixo.",
    motivacao:
      "A segunda lei no eixo vertical, com o positivo para cima, é N − m g = m a, porque as duas forças apontam para lados opostos e a aceleração é para cima. A alternativa 100 N faz N = m g, o caso de velocidade vertical constante, em que a = 0. A alternativa 80 N faz N = m(g − a), que é o elevador acelerando para baixo. O sinal da aceleração é o que separa 120 de 80.",
    passos: [
      "Peso, definição P = m g: 10 × 10 = 100 N, para baixo, com o g = 10 m/s² do enunciado.",
      "Eixo positivo para cima. Segunda lei: N − m g = m a, porque a aceleração aponta para cima.",
      "Isolando a normal na segunda lei: N = m(g + a) = 10 × (10 + 2) = 10 × 12.",
      "Produto: 10 × 12 = 120. A normal vale 120 N, maior que o peso porque o elevador acelera para cima.",
      "Casos vizinhos da segunda lei: 100 N seria N = m g, aceleração vertical nula. 80 N seria N = m(g − a), aceleração para baixo.",
    ],
    atalho:
      "Acelerar para cima a 2 m/s² é como um g efetivo de 12 m/s². 10 kg vezes 12 dá 120 N. Para baixo, o g efetivo seria 8, e a normal seria 80 N, que está na lista para o sinal trocado. O elevador parado daria os 100 N do peso.",
  },
  "fis-nw-n3q4": {
    intuicao:
      "O rebocador e a barcaça andam juntos, em linha reta, sem ganhar nem perder velocidade. O cabo leve está esticado entre os dois cascos. O rebocador puxa uma ponta do cabo e a barcaça puxa a outra, em sentidos opostos. Num cabo ideal essas duas puxadas têm o mesmo tamanho. A velocidade constante de cada casco não nasce de uma diferença dentro do cabo: nasce do equilíbrio entre cabo, arrasto e, no rebocador, o empuxo das máquinas.",
    motivacao:
      "A terceira lei iguala a força de cada casco no cabo à força do cabo naquele casco. No cabo leve a resultante tem de ser nula, senão a aceleração seria enorme, então as duas pontas carregam o mesmo módulo. A primeira lei em cada casco é outra conta: velocidade constante pede resultante nula no diagrama, fechada pelo arrasto e pelo empuxo. A alternativa dos módulos diferentes confunde força com resultante. A das forças nulas apaga forças que se cancelam.",
    passos: [
      "Terceira lei: a força do rebocador no cabo e a força do cabo no rebocador têm o mesmo módulo e sentidos opostos, em corpos diferentes. O mesmo vale para a barcaça.",
      "Cabo ideal, massa desprezível: a resultante sobre o cabo é nula. As forças que os dois cascos exercem no cabo têm o mesmo módulo e sentidos opostos.",
      "Primeira lei em cada casco: velocidade constante significa resultante nula, não ausência de força.",
      "Primeira lei em cada casco: no rebocador, o empuxo das máquinas equilibra o arrasto mais a força do cabo. Na barcaça, a força do cabo equilibra o arrasto.",
      "Cabo leve, resultante nula: os módulos no cabo continuam iguais. Módulos diferentes violariam esse cabo. Forças nulas deixariam o arrasto da barcaça sem par.",
    ],
    atalho:
      "Corte o cabo no meio. Nas duas pontas de um cabo leve a tensão é a mesma, parado ou em velocidade constante. O que muda de um casco para o outro é o resto do diagrama: a barcaça tem o arrasto contra a tensão, e o rebocador tem as máquinas a mais. A tensão não precisa ser diferente para o conjunto andar.",
  },
  "fis-nw-n3q5": {
    intuicao:
      "O bloco desce o plano de 30°, e o peso empurra rampa abaixo com a componente m g sen 30°. Como há deslizamento para baixo, o atrito cinético aponta rampa acima e vale μc vezes a normal. A normal equilibra a componente perpendicular do peso, m g cos 30°. A aceleração é o que sobra quando se tira o atrito da componente motora e se divide pela massa. O enunciado entrega g = 10 e cos 30° = √3/2.",
    motivacao:
      "A segunda lei no eixo do plano junta as duas forças paralelas com sinais opostos. Sem o atrito, a resposta seria 5 m/s², que está nas alternativas e esquece μc. Somar o atrito em vez de subtrair daria 5 + √3, o caso de o atrito ajudar a descida, e ele não ajuda. O cosseno entra no atrito porque entra na normal, e o seno entra na componente do peso. Os dois eixos não se misturam.",
    passos: [
      "Eixo perpendicular ao plano, sem aceleração: N = m g cos 30°. Com g = 10 e cos 30° = √3/2, N = 10m × √3/2.",
      "Atrito cinético, oposto à descida: módulo μc N = 0,2 × 10m × √3/2 = m√3.",
      "Eixo plano abaixo, segunda lei: m a = m g sen 30° − μc N, com o atrito subtraído porque aponta rampa acima.",
      "sen 30° = 1/2, então m a = m × 10 × 1/2 − m√3. A massa cancela e a = 5 − √3, em m/s².",
      "Conferência do sentido: sen 30° = 0,5 e μc cos 30° = 0,2 × √3/2 ≈ 0,173. A componente do peso ganha, e o bloco de fato desce.",
    ],
    atalho:
      "a = g (sen θ − μ cos θ) = 10 × (1/2 − 0,2 × √3/2) = 5 − √3. O fator 10 distribui nos dois termos. A alternativa 5 é o plano liso. A alternativa 5 + √3 soma o atrito, como se ele empurrasse o bloco rampa abaixo.",
  },
};
