import type { AnaliseQuestao } from "../../lessons.ts";

export const ANALISES: Record<string, AnaliseQuestao> = {
  "mat-cx-n1q1": {
    intuicao:
      "No plano de Argand, i é o ponto (0, 1), uma unidade acima da origem, no eixo imaginário. Multiplicar por i gira o plano 90° no sentido anti-horário e não muda a distância até a origem. Duas multiplicações seguidas são um giro de 180°, e um giro de 180° manda cada ponto para o simétrico em relação à origem. O ponto i cai então em (−1, 0), que é o real −1, ainda antes de consultar qualquer tabela de potências.",
    motivacao:
      "A igualdade i² = −1 é a tradução algébrica desse meio-giro, e é ela que dá lugar às raízes de números negativos. Sem o ângulo, a frase vira um verso decorado e troca de lugar com i⁴, porque as duas potências são pares e a memória as cola. i⁴ fecha 360° e volta a 1. i² para na metade do ciclo, no eixo real negativo, e é esse desenho que impede a troca.",
    passos: [
      "Unidade imaginária: i é definido pela relação i² = −1, o ponto (0, 1) do plano de Argand.",
      "Giro: multiplicar por i soma 90° ao argumento. Aplicado a i, o argumento passa de π/2 para π.",
      "O argumento π é o sentido negativo do eixo real, o ponto (−1, 0). Portanto i² = −1.",
      "Ciclo conferido: i⁴ = (i²)² = (−1)² = 1. Quem responde 1 adiantou duas casas do ciclo.",
    ],
    atalho:
      "As potências de i repetem de quatro em quatro: i, −1, −i, 1. O expoente 2 cai na segunda casa, que é −1. Se a alternativa ainda traz a letra i, o giro não chegou ao eixo real, onde i² tem de cair.",
  },
  "mat-cx-n1q2": {
    intuicao:
      "4 + 2i e 1 − 5i são dois vetores no plano de Argand: o primeiro anda 4 para a direita e 2 para cima, o segundo anda 1 para a direita e 5 para baixo. Somar complexos é somar esses deslocamentos, eixo com eixo. A parte real fica na horizontal e a parte imaginária fica na vertical. O resultado é um único ponto, a ponta da soma dos dois vetores.",
    motivacao:
      "A soma é definida componente a componente porque o plano é um espaço vetorial com base 1 e i. Juntar tudo num número só, como 4 + 2 + 1 − 5, apaga a direção e trata i como se fosse 1. O caminho certo separa os eixos, soma cada um, e só no fim reescreve a + bi. O sinal de cada parcela imaginária entra na soma, não é enfeite.",
    passos: [
      "Partes reais, soma de reais: 4 + 1 = 5. Esse 5 é a abscissa do vetor resultante.",
      "Partes imaginárias: 2i + (−5i) = (2 − 5)i = −3i. Os coeficientes de i se somam como números.",
      "Forma a + bi: reunindo a abscissa 5 e a ordenada −3, o resultado é 5 − 3i.",
      "5 + 3i sairia se o −5i trocasse de sinal antes da soma. 3 − 3i esqueceria de somar as partes reais inteiras.",
    ],
    atalho:
      "Marque (4, 2) e (1, −5). A soma dos pares é (5, −3), que se escreve 5 − 3i. Um teste rápido: a parte imaginária do resultado tem de ser negativa, porque 2 não cobre 5 e a soma 2 − 5 fica negativa.",
  },
  "mat-cx-n1q3": {
    intuicao:
      "2 − 3i é o ponto (2, −3), duas unidades à direita da origem e três abaixo do eixo real. O conjugado é o reflexo desse ponto pelo eixo real, como um espelho horizontal. A altura troca de sinal e a posição horizontal fica onde está. O ponto espelhado é (2, 3), escrito 2 + 3i, com a mesma parte real do número original.",
    motivacao:
      "O conjugado troca só o sinal da parte imaginária, porque a reflexão no eixo real preserva a abscissa. Trocar os dois sinais produz −z, o simétrico em relação à origem, que é uma meia-volta e não um espelho. Trocar a ordem das partes, como 3 − 2i, mistura os eixos. O teste do espelho separa essas três operações, que a memória costuma fundir num único troca o sinal.",
    passos: [
      "Conjugado: se z = a + bi, então o conjugado é a − bi. Aqui a = 2 e b = −3.",
      "Troca do sinal imaginário: −b = −(−3) = 3, então o conjugado é 2 + 3i, o ponto (2, 3).",
      "A parte real 2 permanece. −2 + 3i seria −z com um sinal a mais, não o espelho.",
      "Módulo conferido: |2 − 3i| = |2 + 3i|, porque a reflexão não muda a distância até a origem.",
    ],
    atalho:
      "Desenhe (2, −3) e copie o ponto para cima do eixo, na mesma vertical. A cópia é (2, 3). Qualquer alternativa com parte real negativa atravessou a origem, e não apenas o eixo real do espelho.",
  },
  "mat-cx-n1q4": {
    intuicao:
      "3 + 4i é o ponto (3, 4) do plano de Argand. O módulo é a distância desse ponto até a origem, o comprimento do vetor, não a soma dos deslocamentos. Do 3 horizontal e do 4 vertical sai um triângulo retângulo. A hipotenusa desse triângulo é o módulo, o comprimento que a pergunta pede.",
    motivacao:
      "O módulo |a + bi| = √(a² + b²) é o teorema de Pitágoras aplicado aos dois eixos. Somar 3 + 4 = 7 mede o caminho em L, encostado nos eixos, e não o atalho reto. Elevar ao quadrado e esquecer a raiz deixa 25, que é o quadrado do comprimento. A raiz devolve a mesma unidade do deslocamento, e o triângulo 3-4-5 é o caso clássico em que a conta fecha inteira.",
    passos: [
      "Módulo: |3 + 4i| = √(3² + 4²), a distância de (3, 4) à origem no plano de Argand.",
      "Quadrados, pelo teorema de Pitágoras: 3² = 9 e 4² = 16. Soma: 9 + 16 = 25.",
      "Raiz quadrada: √25 = 5, porque 5² = 25 e o módulo é não negativo por definição.",
      "7 seria 3 + 4, o perímetro dos catetos. 25 seria o quadrado do módulo, sem a raiz.",
    ],
    atalho:
      "O trio 3, 4, 5 é pitagórico: 9 + 16 = 25. Reconhecer o trio evita a raiz e já entrega 5. Se a conta deu 7 ou 25, uma das duas operações, a soma dos quadrados ou a raiz, ficou de fora.",
  },
  "mat-cx-n1q5": {
    intuicao:
      "Cada fator i gira o plano 90° no sentido anti-horário. i³ pede três desses giros, 270° no total, partindo do ponto 1, que está em (1, 0). 270° anti-horários colocam o ponto em (0, −1), uma unidade abaixo da origem. Esse ponto é −i, ainda no eixo imaginário, no sentido negativo, uma unidade abaixo da origem.",
    motivacao:
      "A conta curta usa a definição já conhecida: i³ = i² × i, e i² = −1, então o produto é −i. Decorar a lista inteira sem saber que ela nasce desse produto faz inverter a ordem e responder i, que é um giro só. O ciclo de quatro, i, −1, −i, 1, existe porque o quarto giro completa a volta. Parar no terceiro giro é a pergunta, e o terceiro lugar da lista é −i.",
    passos: [
      "Fatoração da potência: i³ = i² × i, separando a potência que já vale −1.",
      "Definição: i² = −1. Substituição na potência: i³ = (−1) × i = −i. O fator que sobra é o próprio i, com sinal menos.",
      "Giro equivalente: 3 × 90° = 270°, argumento −π/2 ou 3π/2, o ponto −i do eixo.",
      "Conferência do ciclo: (−i) × i = −i² = 1, logo i⁴ = 1 e a casa seguinte volta ao início.",
    ],
    atalho:
      "Conte no ciclo i, −1, −i, 1. A terceira posição é −i. i³ não é i², porque sobra um fator i, e não é 1, porque falta um giro para fechar a volta e só i⁴ volta a 1, quando o giro completa 360°.",
  },
  "mat-cx-n2q1": {
    intuicao:
      "1 + 2i e 1 − 2i são espelhos um do outro no plano de Argand, o mesmo ponto refletido pelo eixo real. O produto de um número pelo seu conjugado cai sempre sobre o eixo real, porque os giros opostos se cancelam e o argumento soma zero. O comprimento do resultado é o quadrado do módulo. Aqui o ponto está a √5 da origem, e o produto vale 5.",
    motivacao:
      "A identidade (a + bi)(a − bi) = a² + b² é a diferença de quadrados com (bi)² = b² i² = −b², que troca de sinal e se soma a a². Expandir termo a termo e cancelar os imaginários mostra de onde o real nasce. Parar no meio da distributiva, em 1 − 4i ou 1 + 4i, é esquecer que i² não é i. O produto pelo conjugado é real e não negativo, igual ao quadrado do módulo.",
    passos: [
      "Conjugado: 1 − 2i é o conjugado de 1 + 2i. O produto z vezes conjugado vale |z|².",
      "Módulo ao quadrado: |1 + 2i|² = 1² + 2² = 1 + 4 = 5, já o valor do produto.",
      "Distributiva de conferência: (1 + 2i)(1 − 2i) = 1 − (2i)² = 1 − 4 i² = 1 − 4(−1) = 1 + 4 = 5.",
      "Os termos −2i e +2i se cancelam. O resultado 5 é real, sem parte imaginária.",
    ],
    atalho:
      "Para qualquer b, (1 + bi)(1 − bi) = 1 + b². Com b = 2 sai 5. Uma alternativa com i ainda escrito não pode ser o produto de um par de conjugados, que é sempre real e igual ao quadrado do módulo.",
  },
  "mat-cx-n2q2": {
    intuicao:
      "1 + i está no primeiro quadrante, a 45° do eixo real, com módulo √2. Elevar ao quadrado dobra o argumento e eleva o módulo ao quadrado. O ângulo vai a 90° e o módulo vai a 2, o que descreve o ponto (0, 2), isto é, 2i. A figura da potência já entrega o lugar, antes da distributiva.",
    motivacao:
      "A forma polar explica o resultado de uma vez, e o quadrado da soma confirma a conta sem trigonometria. (1 + i)² = 1 + 2i + i² pelo produto notável, e i² = −1 cancela o 1, sobrando 2i. O erro clássico é fazer 1² + i² = 1 − 1 = 0, pulando o dobro do produto. Esse termo do meio é justamente o 2i que a polar tinha previsto no eixo imaginário.",
    passos: [
      "Produto notável: (1 + i)² = 1² + 2 × 1 × i + i² = 1 + 2i + i², com o dobro do produto.",
      "Definição: i² = −1. Substituição no quadrado: 1 + 2i − 1. Os reais 1 e −1 ficam prontos para cancelar.",
      "Cancelamento dos reais: (1 − 1) + 2i = 0 + 2i = 2i. Só o termo imaginário permanece.",
      "Forma polar de conferência: argumento π/4 dobrado é π/2, e (√2)² = 2. O ponto de argumento π/2 e módulo 2 é 2i.",
    ],
    atalho:
      "Teste a expansão num ponto conhecido. 1 + 2i + i² precisa do meio. Sem o 2i a conta daria 0, e 0 não é o quadrado de um número de módulo √2, cujo quadrado tem módulo 2, longe de zero.",
  },
  "mat-cx-n2q3": {
    intuicao:
      "Dividir por i é desfazer o giro de 90° anti-horário, ou seja, girar 90° no sentido horário. O número 1 está em (1, 0). Um quarto de volta horário leva esse ponto para (0, −1). O resultado da divisão é −i, um ponto do eixo imaginário, e a divisão existe porque i não é zero e tem módulo 1.",
    motivacao:
      "Algebricamente, tira-se i do denominador multiplicando em cima e embaixo pelo conjugado −i. O denominador vira um real, que aqui é 1, e o numerador fica −i. Dizer que 1/i não existe repete o reflexo dos reais, em que um quadrado nunca é −1. Nos complexos i tem inverso. Responder i esqueceria o sinal que o conjugado introduz.",
    passos: [
      "Conjugado do denominador: o conjugado de i é −i. Multiplique numerador e denominador por −i.",
      "Denominador: i × (−i) = −i² = −(−1) = 1. A divisão ficou com denominador real 1.",
      "Numerador: 1 × (−i) = −i. Portanto 1/i = −i / 1 = −i. O denominador real 1 não altera o valor.",
      "Prova do produto: i × (−i) = −i² = 1. O inverso conferido devolve a unidade.",
    ],
    atalho:
      "Se i × (−i) = 1, então −i já é o inverso de i, e 1/i = −i. Girar (1, 0) de 90° no sentido horário cai em (0, −1), o mesmo ponto −i, e o produto i × (−i) já vale 1, sem montar a fração outra vez.",
  },
  "mat-cx-n2q4": {
    intuicao:
      "Dividir por 1 + i é multiplicar pelo inverso desse número. No plano, 1 + i está a 45° e tem módulo √2, então o inverso gira −45° e divide comprimentos por √2. O caminho prático empurra o denominador para o eixo real, multiplicando pelo conjugado 1 − i. O quociente que sai é o ponto 2 − i.",
    motivacao:
      "O conjugado funciona porque (1 + i)(1 − i) = 1² + 1² = 2, um real, e dividir por um real é dividir cada parte. Expandir o numerador sem esse passo deixa i no denominador e a fração não está na forma a + bi pedida pelas alternativas. Esquecer de dividir o numerador inteiro por 2 produz 4 − 2i, que ainda é o numerador, não o quociente.",
    passos: [
      "Conjugado do denominador: multiplique em cima e embaixo por 1 − i, o espelho de 1 + i.",
      "Denominador real: (1 + i)(1 − i) = 1 − i² = 1 + 1 = 2, o quadrado do módulo.",
      "Numerador: (3 + i)(1 − i) = 3 − 3i + i − i² = 3 − 2i + 1 = 4 − 2i, ainda por dividir.",
      "Divisão por 2: (4 − 2i)/2 = 2 − i. Cada parte é dividida pelo mesmo real.",
    ],
    atalho:
      "Confira o produto (2 − i)(1 + i) = 2 + 2i − i − i² = 2 + i + 1 = 3 + i. Voltou o numerador original, então o quociente 2 − i está certo. 4 − 2i é o dobro desse valor, o numerador antes de dividir por 2.",
  },
  "mat-cx-n2q5": {
    intuicao:
      "1 + i é o ponto (1, 1), no primeiro quadrante, à mesma distância dos dois eixos. O argumento é o ângulo que o vetor faz com o sentido positivo do eixo real. Quando os catetos são iguais, o triângulo é isósceles e o ângulo da base é metade de 90°, isto é, 45°. Em radianos, no intervalo pedido, esse ângulo é π/4.",
    motivacao:
      "A forma polar pede módulo e argumento separados. A tangente do argumento é a parte imaginária dividida pela real, aqui 1/1 = 1, e no primeiro quadrante o arco cuja tangente vale 1 é π/4. O módulo √2 mede o raio e não gira o ponto, então não entra na resposta. π/2 seria o eixo imaginário puro, onde a parte real é zero. Trocar o arco da tangente pelo módulo é o caminho decorado que erra a pergunta.",
    passos: [
      "Argumento: θ = arctan(b/a) no primeiro quadrante, com a = 1 e b = 1 iguais.",
      "Razão: b/a = 1/1 = 1. O ângulo do primeiro quadrante com tangente 1 é π/4.",
      "Módulo, só para situar: √(1² + 1²) = √2. Ele mede o raio e não altera θ.",
      "Intervalo (−π, π]: π/4 já está dentro. π/2 seria 1 no imaginário e 0 no real, outro ponto.",
    ],
    atalho:
      "A bissetriz do primeiro quadrante é exatamente a reta y = x, onde está 1 + i. A bissetriz mede 45°, ou π/4. Qualquer alternativa em graus disfarçados de outro arco famoso, como 30° ou 60°, exigiria catetos diferentes.",
  },
  "mat-cx-n3q1": {
    intuicao:
      "z² + 4 = 0 pede os pontos do plano cujo quadrado é −4, um ponto do eixo real negativo. No plano de Argand, −4 tem argumento π e módulo 4. A raiz quadrada corta o módulo pela raiz e corta o ângulo pela metade, então um dos resultados fica no argumento π/2, sobre o eixo imaginário. O outro usa o argumento π + 2π, cuja metade é 3π/2, o sentido oposto do mesmo eixo.",
    motivacao:
      "Escrever −4 = 4 i² transforma a equação em diferença de quadrados, z² − (2i)² = 0, e os fatores aparecem sem fórmula. Dizer que não existe solução repete a regra dos reais, em que um quadrado não é negativo. 2 e −2 ao quadrado dão +4, o sinal errado. A forma polar confirma o par: módulo √4 = 2 e argumentos π/2 e 3π/2, que são 2i e −2i.",
    passos: [
      "Isolamento: z² = −4. Reescreva −4 = 4 × (−1) = 4 i², usando a definição i² = −1.",
      "Diferença de quadrados: z² − (2i)² = 0, então (z − 2i)(z + 2i) = 0, produto nulo.",
      "Raízes do produto nulo: z = 2i ou z = −2i, os dois pontos do eixo imaginário.",
      "Conferência: (2i)² = 4 i² = −4 e (−2i)² = 4 i² = −4. Some 4 e a equação zera.",
    ],
    atalho:
      "Na polar, −4 tem módulo 4 e argumento π. As raízes têm módulo 2 e argumentos π/2 e π/2 + π. Isso é 2i e −2i. O par real ±2 quadraria em +4 e não alcança o ponto −4 do eixo real negativo.",
  },
  "mat-cx-n3q2": {
    intuicao:
      "z² − 2z + 2 = 0 é uma parábola que, no eixo real, não corta o eixo horizontal: o mínimo fica acima de zero. No plano complexo a mesma equação tem dois pontos. Eles são simétricos em relação ao eixo real, porque os coeficientes são reais, e a fórmula de Bhaskara continua valendo quando o discriminante é negativo. O par que aparece é 1 + i e 1 − i.",
    motivacao:
      "O discriminante Δ = b² − 4ac conta as raízes, e Δ < 0 não apaga a conta: √(−4) = 2i leva o par para fora do eixo real. Parar em não há raiz real e marcar i e −i, ou 1 e 2, ignora o termo −2z, que empurra o centro do par para a direita. Completar o quadrado mostra o mesmo centro: (z − 1)² + 1 = 0, então z − 1 = ±i.",
    passos: [
      "Discriminante: a = 1, b = −2, c = 2. Δ = (−2)² − 4 × 1 × 2 = 4 − 8 = −4.",
      "Fórmula de Bhaskara: z = [2 ± √(−4)] / 2. Como √(−4) = √4 × √(−1) = 2i, z = (2 ± 2i)/2.",
      "Divisão por 2, o coeficiente líder: z = 1 + i ou z = 1 − i. Cada parte, real e imaginária, foi dividida por 2.",
      "Conferência de 1 + i: (1 + i)² − 2(1 + i) + 2 = 1 + 2i + i² − 2 − 2i + 2 = (1 − 1 − 2 + 2) + (2i − 2i) = 0.",
    ],
    atalho:
      "Complete o quadrado: z² − 2z + 2 = (z − 1)² + 1 = 0, logo (z − 1)² = −1 e z − 1 = ±i. As soluções são 1 ± i. O 1 é o eixo de simetria da parábola, e i é a altura imaginária do par conjugado.",
  },
  "mat-cx-n3q3": {
    intuicao:
      "1 + i está a 45° e a distância √2 da origem. A quarta potência multiplica o ângulo por 4 e eleva o módulo à quarta. O ângulo vai a 180°, que é o sentido negativo do eixo real, e o módulo vai a 4. O ponto de chegada é (−4, 0), o real −4. A figura da forma polar responde antes de expandir o binômio quatro vezes.",
    motivacao:
      "A forma polar de de Moivre, [r (cos θ + i sen θ)]ⁿ = rⁿ (cos nθ + i sen nθ), é o motivo de potência de complexo ser giro mais escala, e não a distributiva de cada termo. Fazer (1 + i)⁴ = 1 + i⁴ = 2 esquece todos os termos do meio e erra o módulo, que teria de ser (√2)⁴ = 4. O caminho curto em dois quadrados, (1 + i)² = 2i e (2i)² = −4, confirma de Moivre sem tabela de senos.",
    passos: [
      "Quadrado já conhecido, pelo produto notável: (1 + i)² = 1 + 2i + i² = 2i.",
      "Quarta potência, quadrado do quadrado: (1 + i)⁴ = (2i)² = 4 i². O módulo 2, ao quadrado, produz 4.",
      "Definição: i² = −1, então 4 i² = 4 × (−1) = −4. O ponto (−4, 0) é o resultado.",
      "Forma polar: módulo (√2)⁴ = 4 e argumento 4 × (π/4) = π, o ponto de módulo 4 no argumento π, que é −4.",
    ],
    atalho:
      "2i ao quadrado é 4 vezes i², e i² é −1, então o produto é −4. O módulo 4 impede as alternativas 2i e −2, curtas demais, e o argumento π impede o 4 positivo, que estaria no ângulo 0.",
  },
  "mat-cx-n3q4": {
    intuicao:
      "O deslocamento 3 + 4i é um vetor de 3 milhas para leste e 4 milhas para o norte. No plano de Argand, multiplicar por i gira qualquer vetor 90° no sentido anti-horário, sem mudar o comprimento. O leste vira norte e o norte vira oeste. As 3 milhas passam a apontar para o norte e as 4 milhas passam a apontar para o oeste.",
    motivacao:
      "A rotação é a multiplicação, não uma troca artesanal de coordenadas que se decora com sinais soltos. i(a + bi) = ai + b i² = −b + ai coloca a parte imaginária antiga, com sinal trocado, na posição real. Errar o sentido do giro produz 4 − 3i ou 4 + 3i, que são outros quadrantes. O módulo √(3² + 4²) = 5 tem de se conservar, e isso elimina quem muda o comprimento.",
    passos: [
      "Multiplicação pelo giro i: i(3 + 4i) = 3i + 4 i², distribuindo o fator.",
      "Definição: i² = −1, então 4 i² = −4. O produto é −4 + 3i, oeste e norte.",
      "Módulo: |−4 + 3i| = √(16 + 9) = √25 = 5, igual a |3 + 4i|. O giro preserva o comprimento.",
      "Leitura náutica: parte real −4 são 4 milhas para oeste, e 3i são 3 milhas para o norte.",
    ],
    atalho:
      "A regra do giro de 90° anti-horário é (a, b) vai para (−b, a). Com (3, 4) sai (−4, 3), escrito −4 + 3i. O comprimento continua o triângulo 3-4-5, de hipotenusa 5 milhas, o mesmo comprimento de antes do giro.",
  },
  "mat-cx-n3q5": {
    intuicao:
      "√3 + i é o ponto (√3, 1), no primeiro quadrante. O cateto horizontal é √3 e o vertical é 1, então o vetor está mais deitado do que em pé. O argumento é o ângulo com o eixo real, e a tangente desse ângulo é o cateto oposto sobre o adjacente, 1/√3. Esse é o ângulo de 30°, o menor ângulo agudo do triângulo clássico, escrito π/6.",
    motivacao:
      "A forma polar separa o raio do ângulo. O módulo √(3 + 1) = 2 diz o raio e não é alternativa de argumento, embora √3 apareça entre as opções para quem troca as duas perguntas. π/3 nasceria se os catetos estivessem trocados, no ponto 1 + i√3, cuja tangente é √3. Memorizar que √3 no complexo vale 60° olha para o número escrito e não para qual eixo ele ocupa.",
    passos: [
      "Tangente do argumento: tan θ = b/a = 1/√3, com a = √3 > 0 e b = 1 > 0 no primeiro quadrante.",
      "Primeiro quadrante: o arco cuja tangente vale 1/√3 é π/6, o ângulo de 30°.",
      "Módulo, separado do ângulo: √( (√3)² + 1² ) = √(3 + 1) = √4 = 2. Não é o argumento.",
      "Caso trocado: se fosse 1 + i√3, tan θ = √3 e o argumento seria π/3. Aqui os eixos estão no sentido de 30°.",
    ],
    atalho:
      "O triângulo de catetos √3 e 1 tem hipotenusa 2, o famoso 30-60-90. O ângulo encostado no cateto maior, que é o eixo real, mede 30°, ou π/6. √3 sozinho é um cateto do triângulo, não um ângulo.",
  },
};
