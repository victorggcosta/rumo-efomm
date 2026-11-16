import type { AnaliseQuestao } from "../../lessons.ts";

export const ANALISES: Record<string, AnaliseQuestao> = {
  "mat-log-n1q1": {
    intuicao:
      "log₂ 8 pergunta qual expoente faz a base 2 alcançar 8. Não é dividir 8 por 2, e não é a própria altura 8. Na fila das potências de 2, o 8 aparece depois de 2 e de 4. A pergunta é a posição dessa altura, o número de vezes que o 2 foi multiplicado. Essa posição na fila das dobras é o próprio logaritmo pedido.",
    motivacao:
      "Ler o logaritmo como uma divisão produz 4, e a banca deixa esse quociente entre as alternativas. O motivo por que a definição devolve um expoente é que log_a b é, por construção, o número x tal que aˣ = b. Sem transformar o 8 em potência de 2, o símbolo não tem o que contar. A divisão 8/2 responde outra pergunta.",
    passos: [
      "Definição: log₂ 8 = x significa 2ˣ = 8, com argumento positivo e base maior que 0 e diferente de 1.",
      "Decomposição do argumento: 8 = 2 × 2 × 2 = 2³. A base já coincide com a do logaritmo.",
      "Igualdade de potências de mesma base, com base diferente de 1: 2ˣ = 2³ implica x = 3.",
      "O valor é 3. A alternativa 4 seria 8/2. A alternativa 2 é log₂ 4, um argumento menor.",
    ],
    atalho:
      "Conte as dobras de 1 até 8: 2, 4, 8. São três dobras, então o logaritmo é 3. 16 já seria a quarta dobra, e 8 sozinho é o argumento, não o expoente. A resposta que fecha essa lista de dobras é 3.",
  },
  "mat-log-n1q2": {
    intuicao:
      "log₁₀ 1.000 pergunta quantos zeros cabem depois do 1 quando se escreve o número como potência de 10. Mil é 10 × 10 × 10, três fatores 10 empilhados. O logaritmo decimal lê essa pilha e devolve só a altura dela. A pergunta é essa altura, não o próprio mil e não a base 10. O milhar escrito com ponto não muda essa contagem.",
    motivacao:
      "Responder 10 repete a base, e responder 1.000 repete o argumento. O motivo por que o resultado é o expoente 3 é a definição: log₁₀ (10ⁿ) = n, porque 10ⁿ já está escrito na base do logaritmo. Sem essa leitura, o símbolo parece uma conta entre 10 e 1.000. Nenhuma das duas repetições é o expoente.",
    passos: [
      "Decomposição decimal: 1.000 = 10 × 10 × 10 = 10³. O ponto separa o milhar, e o número é mil.",
      "Definição de logaritmo: log₁₀ (10³) é o expoente que faz a base 10 valer 10³.",
      "Logaritmo da potência da própria base: log₁₀ (10³) = 3, porque o expoente da base 10 é lido direto.",
      "O valor é 3. log₁₀ 100 seria 2, e log₁₀ 10.000 seria 4. Nenhum dos dois é o argumento mil.",
    ],
    atalho:
      "Conte os zeros de 1.000. São três, e cada zero é um fator 10. O logaritmo decimal de uma potência inteira de 10 é exatamente essa contagem. 100 tem dois zeros e daria 2, então a resposta deste argumento é 3.",
  },
  "mat-log-n1q3": {
    intuicao:
      "log_a a pergunta qual expoente devolve a própria base. A base já é um fator só dela mesma: a aparece uma vez. Não é preciso procurar uma potência alta nem uma fração. A pergunta vale para qualquer a positivo e diferente de 1, então a resposta é um número fixo, não uma expressão em a.",
    motivacao:
      "Responder 0 confunde este logaritmo com log_a 1, que é outra pergunta. O motivo por que o expoente é 1 é que a¹ significa um único fator igual à base, e um único fator é a própria base. Responder a repete o argumento no lugar do expoente, e o logaritmo não devolve a base. O resultado não depende de qual base permitida se escolheu.",
    passos: [
      "Definição de logaritmo: log_a a = x significa aˣ = a, com a > 0 e a diferente de 1.",
      "Potência de expoente 1: a¹ = a. Um único fator igual à base reproduz a própria base.",
      "Igualdade de potências de mesma base, base diferente de 1: o expoente é 1.",
      "O valor é 1. Zero seria log_a 1, porque a⁰ = 1. A alternativa a repete a base, não o expoente.",
    ],
    atalho:
      "Troque a por 2: log₂ 2 é o expoente de 2¹, que vale 1. Troque a por 10 e log₁₀ 10 vale 1 de novo. O valor não depende da base permitida. Zero só apareceria se o argumento fosse 1, não a própria base.",
  },
  "mat-log-n1q4": {
    intuicao:
      "log_a 1 pergunta qual expoente faz a base cair em 1. Elevar a zero não empilha fator nenhum, e a pilha vazia da multiplicação vale 1. O desenho é o mesmo para toda base positiva diferente de 1: o gráfico do logaritmo corta a altura 0 exatamente quando o argumento é 1. A pergunta pede esse corte, o expoente zero.",
    motivacao:
      "Responder 1 confunde log_a 1 com log_a a. O motivo por que o expoente é 0 é que a⁰ = 1 para a diferente de zero, e a hipótese a > 0 já garante isso. O logaritmo apenas lê esse expoente. Dizer que não existe valeria para argumento negativo ou nulo, e 1 é positivo. Não há buraco no domínio neste ponto.",
    passos: [
      "Definição de logaritmo: log_a 1 = x significa aˣ = 1, com a > 0 e a diferente de 1.",
      "Expoente zero: a⁰ = 1, porque aⁿ / aⁿ = a⁰ e esse quociente também vale 1.",
      "Comparação das duas escritas: o expoente que satisfaz a equação é 0. Logo log_a 1 = 0.",
      "O valor é 0. 1 seria log_a a. −1 seria log_a (1/a), o inverso da base, não o número 1.",
    ],
    atalho:
      "Em qualquer base permitida, o logaritmo de 1 é a altura zero do gráfico. log₂ 1 = 0, log₁₀ 1 = 0 e log₃ 1 = 0. A resposta não muda com a. Se o resultado fosse 1, o argumento teria de ser a própria base.",
  },
  "mat-log-n1q5": {
    intuicao:
      "log₃ 9 pergunta quantos fatores 3 cabem dentro de 9. 9 é o quadrado de lado 3, dois fatores, não três e não nove. A pergunta invertida, log₉ 3, é que responderia uma fração, porque aí se procura a raiz. Aqui a base é a menor e o argumento é o quadrado. Contam-se quantos 3 cabem em 9, e cabem dois.",
    motivacao:
      "A alternativa 1/2 é log₉ 3, a pergunta com base e argumento trocados. O motivo por que não se inverte é que o logaritmo guarda a base embaixo e o argumento ao lado, e a definição exige baseˣ = argumento, não o contrário. 3² já é 9, então o expoente está visível antes de qualquer mudança de base.",
    passos: [
      "Definição de logaritmo: log₃ 9 = x significa 3ˣ = 9, com o argumento 9 positivo.",
      "Quadrado perfeito: 9 = 3 × 3 = 3². Dois fatores iguais à base já completam o argumento.",
      "Igualdade de potências de mesma base, diferente de 1: 3ˣ = 3² implica x = 2.",
      "O valor é 2. 1/2 seria log₉ 3, porque 9^(1/2) = 3. A alternativa 3 repete a base.",
    ],
    atalho:
      "3¹ = 3 e 3² = 9. O argumento 9 cai exatamente na segunda potência, então o logaritmo é 2. 27 seria a terceira e daria 3. Não há meio fator sobrando, então 1/2 fica para a pergunta invertida.",
  },
  "mat-log-n2q1": {
    intuicao:
      "O argumento é um produto, 8 × 4, e o logaritmo de um produto não multiplica os logaritmos. Ele separa o produto numa soma, desde que a base seja a mesma e os dois fatores sejam positivos. 8 e 4 são potências de 2 fáceis de ler. A pergunta pede o expoente do produto, que é a soma desses expoentes.",
    motivacao:
      "Somar 8 e 4 produz 12, e multiplicar os argumentos é outra conta, a que está dentro do logaritmo, não fora. O motivo por que o logaritmo transforma produto em soma é que aˣ × aʸ = aˣ⁺ʸ: os expoentes se somam quando as potências se multiplicam. Aplicar o log é só ler essa soma de expoentes.",
    passos: [
      "Logaritmo do produto, mesma base e fatores positivos: log₂ (8 × 4) = log₂ 8 + log₂ 4.",
      "Potências conhecidas: 8 = 2³, então log₂ 8 = 3. E 4 = 2², então log₂ 4 = 2.",
      "Soma dos logaritmos de mesma base: 3 + 2 = 5. O expoente do produto é essa soma.",
      "Conferência pelo produto: 8 × 4 = 32 = 2⁵, logo log₂ 32 = 5. O valor é 5.",
    ],
    atalho:
      "8 × 4 = 32, e 32 é a quinta dobra de 2: 2, 4, 8, 16, 32. Cinco passos, logaritmo 5. A alternativa 12 soma os fatores antes do logaritmo. 32 é o argumento já multiplicado, não o expoente.",
  },
  "mat-log-n2q2": {
    intuicao:
      "Há uma diferença de dois logaritmos com a mesma base. Diferença, no logaritmo, fala de divisão: o quanto 6 é maior que 3, em fatores de 2. 6 dividido por 3 é 2, um único fator da própria base. A conta grande dos dois logaritmos separados nem precisa ser feita, porque o quociente já é simples.",
    motivacao:
      "Subtrair os argumentos, 6 − 3 = 3, e depois tomar o logaritmo, não é a propriedade. O motivo por que a diferença dos logs é o log do quociente é que aˣ / aʸ = aˣ⁻ʸ, então a distância entre expoentes é o expoente da divisão. log₂ 9 seria uma soma ou um produto de argumentos, não esta diferença.",
    passos: [
      "Diferença de logaritmos de mesma base: log₂ 6 − log₂ 3 = log₂ (6/3), com os dois argumentos positivos.",
      "Simplificação do quociente: 6/3 = 2. Os fatores comuns saem e sobra a própria base.",
      "Logaritmo da própria base: log₂ 2 = 1, porque 2¹ = 2. Um único fator devolve o expoente 1.",
      "O valor é 1. A alternativa 18 multiplica os argumentos. log₂ 9 não é a diferença pedida.",
    ],
    atalho:
      "6 = 2 × 3, então log₂ 6 = log₂ 2 + log₂ 3 = 1 + log₂ 3. Ao subtrair log₂ 3, sobra só o 1. A parte comum aos dois logaritmos cancela, e o que resta é o fator 2 que estava escondido no 6.",
  },
  "mat-log-n2q3": {
    intuicao:
      "log₄ 8 compara duas potências de 2 que foram escritas em bases diferentes. 4 é um quadrado de lado 2, e 8 é um cubo de lado 2. O expoente que leva 4 até 8 tem de compensar essa diferença de empilhamento. Não é um inteiro óbvio, porque 4¹ = 4 fica curto e 4² = 16 já passa de 8. O valor fica entre 1 e 2.",
    motivacao:
      "Responder 2 ignora que 4² = 16, não 8. O motivo por que a mudança de base é o caminho é que 4 e 8 ficam transparentes na base 2, e log_b a = log_c a / log_c b transforma o logaritmo num quociente de expoentes conhecidos. Sem a troca, a fração 3/2 não aparece. O quociente 3/2 é exatamente essa compensação.",
    passos: [
      "Mudança de base para 2: log₄ 8 = log₂ 8 / log₂ 4. A fórmula vale porque 4^(log₄ 8) = 8 e as duas bases são potências de 2.",
      "Potências de 2: log₂ 8 = 3, porque 2³ = 8. E log₂ 4 = 2, porque 2² = 4.",
      "Quociente dos expoentes: 3/2. Três unidades na base 2, divididas por duas, dão o expoente na base 4.",
      "Conferência: 4^(3/2) = (2²)^(3/2) = 2³ = 8. O valor é 3/2. 1/2 seria o logaritmo invertido, log₈ 4.",
    ],
    atalho:
      "4^(3/2) = 4 × √4 = 4 × 2 = 8. O expoente 3/2 já acerta o argumento, então ele é o logaritmo. 4¹ = 4 fica abaixo de 8 e 4² = 16 fica acima, então a resposta está no meio e não é inteira. Sobra 3/2.",
  },
  "mat-log-n2q4": {
    intuicao:
      "log₂ x = 5 diz que x é a potência de 2 cujo expoente já foi dado, o número 5. O logaritmo entregou a altura da pilha de fatores, e falta só montar essa pilha. x não é o próprio 5, e também não é o produto 2 × 5. É o número que aparece depois de cinco dobras a partir de 1, o fim da fila.",
    motivacao:
      "A alternativa 10 lê a equação como 2x = 5 ou como 2 × 5. O motivo por que se eleva a base ao logaritmo é a definição ao contrário: se log_a x = b, então x = aᵇ, desde que x seja positivo. Aqui a base é 2 e o expoente informado é 5, então a potência está determinada. Substituir depois confirma que o argumento ficou positivo.",
    passos: [
      "Definição, na volta para a exponencial: log₂ x = 5 significa x = 2⁵. O argumento de um logaritmo real tem de ser positivo, e 2⁵ é positivo.",
      "Potência de expoente natural: 2⁵ = 2 × 2 × 2 × 2 × 2. São cinco fatores iguais a 2.",
      "Produto em etapas: 2 × 2 = 4, 4 × 2 = 8, 8 × 2 = 16 e 16 × 2 = 32. A quinta dobra fecha em 32.",
      "A solução é x = 32. x = 10 seria 2 × 5. x = 25 seria 5². x = 16 é 2⁴, um expoente a menos.",
    ],
    atalho:
      "Liste as potências de 2 até o expoente 5: 2, 4, 8, 16, 32. A quinta entrada da lista, a que o enunciado pede, é 32. 16 é a quarta e ficaria com logaritmo 4, não 5. Substituir 32 devolve log₂ 32 = 5 e confirma.",
  },
  "mat-log-n2q5": {
    intuicao:
      "O argumento é um quociente, 81/9. Antes do logaritmo, a fração pode encolher: 9 cabe em 81 exatamente nove vezes, e nove é um quadrado de 3. O logaritmo de um quadrado da própria base é a contagem desses dois fatores. Dá para ir pelo quociente simplificado ou pela diferença dos logs, e os dois desenhos têm de concordar.",
    motivacao:
      "Responder 4 lê só log₃ 81 e esquece de descontar o denominador. O motivo por que os dois caminhos se encontram é que log (A/B) = log A − log B, então simplificar a fração primeiro ou subtrair os logaritmos depois é a mesma conta. Parar no 4 deixa o fator 9 ainda dentro do argumento.",
    passos: [
      "Simplificação do argumento: 81/9 = 9. O logaritmo fica log₃ 9, com o quociente já reduzido.",
      "Quadrado da base: 9 = 3², então log₃ 9 = 2. Dois fatores 3 completam o argumento reduzido.",
      "Caminho pela diferença: log₃ (81/9) = log₃ 81 − log₃ 9. Como 81 = 3⁴ e 9 = 3², a conta é 4 − 2 = 2.",
      "Os dois caminhos dão 2. A alternativa 4 é só log₃ 81, antes de descontar o denominador.",
    ],
    atalho:
      "81 ÷ 9 = 9, e 9 é 3 × 3. Dois fatores, logaritmo 2. Se a fração não tivesse sido simplificada, 81 sugeriria o expoente 4, que é a armadilha. O denominador come exatamente duas das quatro potências de 3.",
  },
  "mat-log-n3q1": {
    intuicao:
      "Há uma soma de dois logaritmos de mesma base, e cada um só existe se o seu argumento for positivo. x − 1 e x + 1 são lados de um intervalo: os dois positivos ao mesmo tempo empurram x para a direita de 1. A soma, no logaritmo, vira o log do produto, que aqui é uma diferença de quadrados. Uma raiz da equação algébrica pode morrer nesse intervalo.",
    motivacao:
      "A equação x² = 9 tem duas raízes, e a banca oferece as duas juntas. O motivo por que uma delas sai é que o logaritmo não está definido em argumento negativo ou nulo, e a soma exige que os dois argumentos sejam positivos ao mesmo tempo. Resolver só a equação quadrática, sem voltar ao domínio, aceita um número que nunca pôde entrar no enunciado.",
    passos: [
      "Domínio: x − 1 > 0 e x + 1 > 0. As duas desigualdades juntas dão x > 1.",
      "Logaritmo do produto: log₂ (x − 1) + log₂ (x + 1) = log₂ [(x − 1)(x + 1)] = log₂ (x² − 1). A soma vale 3.",
      "Definição: x² − 1 = 2³ = 8, então x² = 9. As raízes são x = 3 e x = −3.",
      "Filtro do domínio: −3 não satisfaz x > 1. Só x = 3 permanece. Confira: log₂ 2 + log₂ 4 = 1 + 2 = 3.",
    ],
    atalho:
      "x = −3 torna x − 1 = −4, e logaritmo de negativo não existe. Essa alternativa morre antes da conta. x = 3 dá os argumentos 2 e 4, cujos logs na base 2 são 1 e 2, e a soma é 3. A raiz que serve é só x = 3.",
  },
  "mat-log-n3q2": {
    intuicao:
      "A base 1/2 é menor que 1, então o logaritmo desce quando o argumento cresce: números pequenos têm log grande, e números grandes têm log muito negativo. A desigualdade pede log maior que −2, isto é, a parte alta do gráfico, que fica nos argumentos pequenos. O argumento também precisa ser positivo, senão o logaritmo nem começa.",
    motivacao:
      "Conservar o sinal produziria x > 4, como se a base fosse maior que 1. O motivo por que a desigualdade vira é que log_(1/2) é decrescente: valor maior do log corresponde a argumento menor. Esquecer o domínio e ficar só com x < 4 deixaria entrar zero e os negativos, onde a expressão do enunciado não existe.",
    passos: [
      "Domínio do logaritmo: o argumento precisa ser positivo, então x > 0. Zero e negativos ficam de fora.",
      "Reescrita do limite: (1/2)⁻² = 4, logo −2 = log_(1/2) 4. A desigualdade é log_(1/2) x > log_(1/2) 4.",
      "Função decrescente, base entre 0 e 1: a desigualdade inverte ao passar para os argumentos, e fica x < 4.",
      "Interseção com o domínio: 0 < x < 4. x = 2 serve, porque log_(1/2) 2 = −1 > −2. x = 8 dá −3, que não é maior que −2.",
    ],
    atalho:
      "Reescreva o corte: (1/2)⁻² = 4, então a altura −2 é o logaritmo de 4. Como a base é menor que 1, log maior que −2 significa argumento menor que 4. Junte isso com x > 0 e o intervalo fica 0 < x < 4. Em x = 1 o logaritmo vale 0, que é maior que −2, e em x = 4 há empate, fora do enunciado estrito.",
  },
  "mat-log-n3q3": {
    intuicao:
      "Os dois logaritmos falam do mesmo x, mas um está na base 2 e o outro na base 4. 4 é o quadrado de 2, então cada passo na base 4 vale dois passos na base 2. O segundo logaritmo é a metade do primeiro. A equação vira uma conta de uma incógnita só, a altura log₂ x, e no fim essa altura volta a ser uma potência.",
    motivacao:
      "Somar os logaritmos como se as bases fossem iguais produziria 2 log₂ x = 3, um x que não confere. O motivo por que a mudança de base vem primeiro é que só se somam logaritmos escritos na mesma base. log₄ x é metade de log₂ x justamente porque 4 = 2², e esse fator 2 tem de aparecer antes da álgebra.",
    passos: [
      "Mudança de base: log₄ x = log₂ x / log₂ 4. Como log₂ 4 = 2, fica log₄ x = (1/2) log₂ x.",
      "Substituição y = log₂ x. A equação vira y + y/2 = 3, isto é, (3/2)y = 3.",
      "Multiplicação pelo inverso de 3/2: y = 3 × 2/3 = 2. Então log₂ x = 2, e o logaritmo já está isolado.",
      "Definição: x = 2² = 4, que é positivo e está no domínio. Confira: log₂ 4 + log₄ 4 = 2 + 1 = 3.",
    ],
    atalho:
      "Teste x = 4: log₂ 4 = 2 e log₄ 4 = 1, e a soma 3 é o enunciado. x = 2 dá 1 + 1/2 = 1,5, curto demais. x = 16 dá 4 + 2 = 6, longo demais. O único ponto da lista que fecha de verdade é 4.",
  },
  "mat-log-n3q4": {
    intuicao:
      "log₁₀ (C/C₀) = 3 diz que o quociente das concentrações é uma potência de 10, e o expoente já foi dado: 3. Três fatores 10 empilham mil. O logaritmo não é o próprio quociente, e também não é um acréscimo de 3 unidades. A pergunta pede C/C₀, o número que estava dentro do logaritmo, não o expoente.",
    motivacao:
      "Responder 3 lê o logaritmo como se ele fosse o quociente. O motivo por que se volta à potência é a definição: log₁₀ N = 3 significa N = 10³. Inverter a potência, 10⁻³, responderia ao expoente com o sinal trocado e daria uma concentração mil vezes menor, não mil vezes maior. O enunciado descreve um aumento, não uma redução.",
    passos: [
      "Definição, na volta para a exponencial: log₁₀ (C/C₀) = 3 significa C/C₀ = 10³. C₀ > 0 garante que o quociente pode ser argumento de logaritmo quando C > 0.",
      "Potência de 10: 10³ = 10 × 10 × 10 = 1.000. Três fatores 10 empilham o milhar.",
      "O quociente é 1.000. Três ordens decimais separam C de C₀, e C é mil vezes C₀.",
      "3 seria o próprio logaritmo. 0,001 = 10⁻³ inverte o expoente e troca crescimento por redução.",
    ],
    atalho:
      "Cada unidade do logaritmo decimal multiplica a concentração por 10. Três unidades: ×10, ×10 e ×10, ou seja, ×1.000. 30 seria 3 × 10, uma unidade só com o 3 no lugar do fator. O quociente é 1.000.",
  },
  "mat-log-n3q5": {
    intuicao:
      "A soma de dois logaritmos decimais pede que os dois argumentos sejam positivos, e o segundo argumento é x − 3. Os dois juntos empurram x para a direita de 3. A soma vira o log do produto, e esse produto vale 10, porque o logaritmo deu 1. A equação do produto é uma quadrática, e uma das raízes dela nasce fora do intervalo permitido.",
    motivacao:
      "A fórmula de Bhaskara devolve duas raízes, e a banca oferece o par inteiro. O motivo por que x = −2 não entra é o domínio: log₁₀ de um número negativo não existe, e x − 3 também precisa ser positivo. Guardar as duas raízes responde à equação polinomial, não à equação logarítmica que foi escrita.",
    passos: [
      "Domínio: x > 0 e x − 3 > 0. A condição mais forte é x > 3, porque ela já garante as duas.",
      "Logaritmo do produto: log₁₀ x + log₁₀ (x − 3) = log₁₀ [x(x − 3)] = 1. Então x(x − 3) = 10¹ = 10.",
      "Equação do segundo grau: x² − 3x − 10 = 0. O discriminante é 9 + 40 = 49, e as raízes são (3 ± 7)/2, isto é, 5 e −2.",
      "Filtro do domínio: −2 não satisfaz x > 3. Só x = 5 permanece. Confira: log₁₀ 5 + log₁₀ 2 = log₁₀ 10 = 1.",
    ],
    atalho:
      "x = 5 dá os argumentos 5 e 2, e 5 × 2 = 10, cujo logaritmo decimal é 1. x = −2 deixa o primeiro argumento negativo. x = 3 anula x − 3, e logaritmo de zero não existe. O único sobrevivente da lista é x = 5.",
  },
};
