import type { AnaliseQuestao } from "../../lessons.ts";

export const ANALISES: Record<string, AnaliseQuestao> = {
  "mat-cb-n1q1": {
    intuicao:
      "Uma farda é um par usado junto: uma camisa e uma calça ao mesmo tempo. Com 3 camisas, cada uma pode ir com cada uma das 2 calças, e o desenho é uma tabela de 3 linhas por 2 colunas. Cada casa dessa tabela é um uniforme diferente, não uma peça solta. A pergunta conta essas casas, antes de qualquer nome de fórmula.",
    motivacao:
      "O princípio multiplicativo vale porque a segunda escolha acontece para cada resultado da primeira, e não no lugar dela. Somar 3 e 2 serviria se a pessoa fosse vestir camisa ou calça, uma coisa só. Aqui as duas peças convivem no mesmo uniforme, então as quantidades se multiplicam. A banca deixa a soma 5 ao lado do produto para quem lê combina como junta os totais.",
    passos: [
      "Princípio multiplicativo: duas decisões em sequência, e toda camisa admite toda calça. O total de pares é o produto das quantidades de opções.",
      "Contagem das opções: a primeira decisão tem 3 camisas e a segunda tem 2 calças. Nenhuma restrição impede um dos pares.",
      "Produto: 3 × 2 = 6 pares camisa-calça. Cada casa da tabela 3 por 2 é uma farda.",
      "A soma 3 + 2 = 5 conta peças avulsas. 9 seria 3 × 3, como se houvesse 3 calças.",
    ],
    atalho:
      "Liste as camisas A, B e C e as calças 1 e 2. Os pares são A1, A2, B1, B2, C1 e C2: seis linhas, sem repetir e sem faltar. A soma 5 não cabe nessa lista. Com tão poucas peças, a tabela fecha antes da fórmula.",
  },
  "mat-cb-n1q2": {
    intuicao:
      "Uma fila é uma ordem: quem fica na frente muda a fila, mesmo com as mesmas quatro pessoas. O primeiro lugar pode ser qualquer uma das 4. Quem já entrou na fila não pode ocupar outro lugar, então o próximo lugar tem uma pessoa a menos. A pergunta conta essas ordens completas, não o número de pessoas.",
    motivacao:
      "A ordem importa e ninguém se repete, então cada posição é uma decisão com menos opções que a anterior. Isso é a permutação, o fatorial 4!, e não uma combinação: combinação jogaria fora a ordem e trataria a fila como um grupo. A banca oferece 16, que é 4 × 4, para quem esquece que a pessoa já usada sai da contagem. 4 sozinho é só a primeira posição.",
    passos: [
      "Princípio multiplicativo com exclusão: a primeira posição tem 4 escolhas, a segunda 3, a terceira 2 e a última 1.",
      "Produto das posições: 4 × 3 × 2 × 1 = 24 filas distintas, uma para cada ordem.",
      "Fatorial: 4! = 24, que é exatamente o número de ordens das 4 pessoas distintas.",
      "4 × 4 = 16 reporia a mesma pessoa em dois lugares. 12 seria 4 × 3, uma fila de duas posições só.",
    ],
    atalho:
      "Com 3 pessoas a lista cabe na mão: ABC, ACB, BAC, BCA, CAB, CBA, seis filas, que é 3!. Acrescente uma quarta pessoa: ela pode entrar em 4 frestas de cada fila antiga, e 6 × 4 = 24. A simetria das posições dispensa listar as 24.",
  },
  "mat-cb-n1q3": {
    intuicao:
      "O dado tem seis faces e, se é honesto, nenhuma face pesa mais que qualquer outra. Par, neste dado, é o conjunto {2, 4, 6}: três faces no meio de seis. A probabilidade é a fatia dessas faces no disco inteiro das faces. Não se pede a soma dos pares, nem quantos pares existem fora da fração.",
    motivacao:
      "Com resultados equiprováveis, a definição de Laplace basta: casos favoráveis sobre casos possíveis. Não há combinação escondida, porque cada face é um resultado simples de um único lançamento. A confusão clássica é contar só os pares e responder 3, ou reduzir mal 3/6 e cair em 1/3. 1/6 seria a chance de uma face marcada.",
    passos: [
      "Espaço amostral equiprovável: Ω = {1, 2, 3, 4, 5, 6}, com 6 resultados.",
      "Evento par: A = {2, 4, 6}, com 3 resultados. As faces 1, 3 e 5 ficam de fora do evento.",
      "Definição de Laplace: P(A) é o quociente dos casos, isto é, P(A) = 3/6.",
      "Simplificação por 3: 3/6 = 1/2. 1/3 seria 2/6, a chance de um múltiplo de 3, não de um par.",
    ],
    atalho:
      "As faces alternam par e ímpar em volta do dado: par, ímpar, par, ímpar, par, ímpar. Metade do disco é par. A fração 1/2 aparece sem escrever o 6, e 2/3 pediria quatro faces favoráveis, que este dado não tem.",
  },
  "mat-cb-n1q4": {
    intuicao:
      "A urna tem quatro bolas que, numa extração às cegas, saem com exatamente a mesma chance. Três delas são vermelhas e uma é azul. A mão pega uma bola só, então o desenho é quatro saídas possíveis e três pintadas de vermelho. A probabilidade é essa proporção, não o número 3 de bolas vermelhas.",
    motivacao:
      "De novo vale Laplace, porque o enunciado não dá pesos diferentes às bolas. O denominador é o total de bolas, 4, e o numerador é o total de vermelhas, 3. Trocar esses papéis produz 1/3, que compara vermelhas com um grupo imaginário de três. 1/4 é a chance da azul, a cor que não foi pedida.",
    passos: [
      "Espaço amostral: 3 vermelhas mais 1 azul dão 4 bolas igualmente prováveis.",
      "Evento pedido: sair vermelha, com 3 casos favoráveis entre as bolas da urna.",
      "Definição de Laplace: P(vermelha) = 3/4, três vermelhas no total de quatro bolas.",
      "1/4 seria a azul. O número 3 é a contagem, não uma probabilidade, pois passa de 1.",
    ],
    atalho:
      "Se a urna fosse repetida em quatro extrações ideais, uma de cada bola, três voltariam vermelhas. A fração observada é 3/4. A azul sozinha responde por 1/4, e 1/3 não fecha a conta das quatro bolas.",
  },
  "mat-cb-n1q5": {
    intuicao:
      "Cada lançamento da moeda parte o mundo em cara e coroa, com a mesma chance. Dois lançamentos desenham uma árvore de quatro pontas: cara-cara, cara-coroa, coroa-cara e coroa-coroa. Duas caras é uma ponta só dessa árvore. A pergunta é a fatia dessa ponta, não a chance de cara num lançamento isolado.",
    motivacao:
      "Os lançamentos são independentes, então a chance da sequência cara e depois cara é o produto das chances. Listar o espaço também funciona e evita esquecer que cara-coroa é diferente de coroa-cara. A banca planta 1/2, que é a cara de uma moeda só, para quem não multiplica o segundo lançamento.",
    passos: [
      "Princípio multiplicativo no espaço: cada moeda tem 2 resultados, então dois lançamentos dão 2 × 2 = 4 sequências equiprováveis.",
      "Independência: P(cara) = 1/2 em cada lançamento, e P(cara e cara) = (1/2) × (1/2).",
      "Produto: (1/2) × (1/2) = 1/4. Só a sequência cara-cara está no evento pedido.",
      "1/2 seria um único lançamento. 3/4 seria pelo menos uma cara, outro evento.",
    ],
    atalho:
      "As quatro sequências cabem numa linha: CC, CX, XC, XX. Uma delas é CC, e a fração lida na lista é 1/4. Se a segunda moeda fosse ignorada, a conta pararia em 1/2 e descreveria outra pergunta.",
  },
  "mat-cb-n2q1": {
    intuicao:
      "Uma dupla é um par de pessoas sem crachá: {A, B} é a mesma dupla que {B, A}. Com 5 pessoas, primeiro dá para escolher a primeira de 5 modos e a segunda de 4, mas essa contagem escreve cada dupla duas vezes. A pergunta pede grupos, não filas de dois. O desenho é o conjunto de pares, não a lista ordenada.",
    motivacao:
      "Combinação, e não arranjo, porque o enunciado diz que a ordem dentro da dupla não distingue. O arranjo P(5, 2) = 20 contaria presidente e vice, dois cargos. Dividir por 2! desfaz essas duas ordens de cada par. A banca deixa 20 logo ao lado de 10, que é exatamente esse esquecimento da divisão. 25 seria 5 × 5, com repetição da mesma pessoa.",
    passos: [
      "Critério: a dupla não tem ordem interna. Conta-se combinação C(5, 2), não arranjo.",
      "Arranjo antes da correção: 5 escolhas para o primeiro nome e 4 para o segundo, isto é, 5 × 4 = 20 listas ordenadas.",
      "Cada dupla foi listada 2! = 2 vezes. C(5, 2) = 20 / 2 = 10 duplas sem ordem.",
      "Fórmula direta: C(5, 2) = 5 × 4 / (2 × 1) = 10. P(5, 2) = 20 é a alternativa que não divide.",
    ],
    atalho:
      "Com pessoas A, B, C, D e E, as duplas de A são AB, AC, AD e AE: quatro. As de B que ainda não apareceram são BC, BD e BE: três. Depois CB já foi contada, restam CD, CE e por fim DE. 4 + 3 + 2 + 1 = 10.",
  },
  "mat-cb-n2q2": {
    intuicao:
      "Uma fila de livros muda quando o livro da frente troca de lugar, mesmo que os dois títulos sejam os mesmos. Há 5 livros distintos e só 2 lugares na fila. O primeiro lugar escolhe entre 5 títulos, e o segundo escolhe entre os 4 que sobraram. A pergunta conta essas filas curtas, não os pares sem ordem.",
    motivacao:
      "A posição na fila é um cargo: primeiro e segundo são diferentes. Por isso é arranjo, P(5, 2), e não a combinação C(5, 2) = 10 da questão vizinha. A banca repete as alternativas 10 e 20 de propósito, para ver se a palavra fila foi lida. 25 seria escolher o segundo livro com reposição, como se o mesmo livro pudesse ocupar os dois lugares.",
    passos: [
      "Critério: a ordem na fila distingue. Conta-se o arranjo P(5, 2), não a combinação.",
      "Princípio multiplicativo: 5 opções para o primeiro lugar e 4 para o segundo, sem repetir livro.",
      "Produto do arranjo: P(5, 2) = 5 × 4 = 20 filas de dois livros distintos.",
      "C(5, 2) = 10 apagaria a ordem da fila. 5 × 5 = 25 reporia o livro já escolhido.",
    ],
    atalho:
      "Se a ordem não importasse, seriam as 10 duplas da questão anterior. Cada dupla vira duas filas, uma com cada livro na frente. 10 × 2 = 20. A simetria de dois lugares dobra a combinação, e o gabarito é o arranjo.",
  },
  "mat-cb-n2q3": {
    intuicao:
      "Dois dados desenham uma tabela de 6 por 6. Cada casa é um par (primeiro dado, segundo dado), e há 36 casas com a mesma chance. A soma 7 é a diagonal em que as faces se completam: 1 com 6, 2 com 5, 3 com 4 e os pares trocados. A pergunta é a fatia dessa diagonal na tabela, não 7 dividido por alguma coisa.",
    motivacao:
      "Os dados são distinguíveis pelo lançamento, então (1, 6) e (6, 1) são casas diferentes e as duas entram. Esquecer a troca corta a diagonal pela metade e empurra a resposta para 1/12. Laplace usa 36 no denominador porque o princípio multiplicativo já montou o espaço. 1/36 seria uma única casa, como o par (6, 6).",
    passos: [
      "Princípio multiplicativo: 6 faces no primeiro dado e 6 no segundo dão 6 × 6 = 36 resultados equiprováveis.",
      "Evento soma 7: (1, 6), (2, 5), (3, 4), (4, 3), (5, 2) e (6, 1). São 6 casas.",
      "Definição de Laplace: P(soma 7) = 6/36, seis casas favoráveis na tabela de 36.",
      "Simplificação por 6: 6/36 = 1/6. 1/12 contaria só três pares, sem as trocas de ordem.",
    ],
    atalho:
      "Na tabela 6 por 6, a diagonal da soma 7 tem exatamente uma casa por linha, da linha 1 à linha 6. São 6 casas em 36, a fração 1/6. Nenhuma outra soma ocupa tantas casas: 7 é o centro da tabela.",
  },
  "mat-cb-n2q4": {
    intuicao:
      "A e B são duas regiões de um diagrama, com um miolo comum. P(A) já inclui esse miolo, e P(B) inclui o mesmo miolo de novo. A união é a mancha inteira, sem pintar o miolo duas vezes. Os números 0,3, 0,4 e 0,1 são as áreas dessas regiões. A pergunta pede a área da mancha, não a soma crua.",
    motivacao:
      "A fórmula da união tira a interseção justamente porque ela foi contada nos dois termos. Somar 0,3 e 0,4 e parar em 0,7 é o erro que a banca deixa pronto na primeira alternativa. Multiplicar 0,3 por 0,4 daria 0,12, que seria a interseção se os eventos fossem independentes, mas o enunciado já entregou P(A ∩ B) = 0,1, então não se calcula de novo.",
    passos: [
      "Regra da união: P(A ∪ B) = P(A) + P(B) − P(A ∩ B). O último termo desconta a região contada duas vezes.",
      "Substituição dos dados: P(A ∪ B) = 0,3 + 0,4 − 0,1, com a interseção já descontada.",
      "Soma parcial: 0,3 + 0,4 = 0,7. Subtração da interseção: 0,7 − 0,1 = 0,6.",
      "0,7 esquece o desconto. 0,12 = 0,3 × 0,4 não é o dado do enunciado, que já fixou a interseção em 0,1.",
    ],
    atalho:
      "Separe as três fatias disjuntas: só A vale 0,3 − 0,1 = 0,2, só B vale 0,4 − 0,1 = 0,3, e o miolo vale 0,1. Some 0,2 + 0,3 + 0,1 = 0,6. As fatias não se sobrepõem, então não há o que descontar de novo.",
  },
  "mat-cb-n2q5": {
    intuicao:
      "Um quarto de serviço é um grupo de 3 tripulantes embarcados juntos, sem chefe, timoneiro ou vigia marcados. Com 8 pessoas, escolher Ana, Bia e Caio é o mesmo quarto que listá-los em outra ordem. A pergunta conta esses grupos. Uma fila de três nomes seria outro problema, com crachás nos lugares.",
    motivacao:
      "Sem cargo distinto, a ordem da lista não cria quarto novo, então a conta é a combinação C(8, 3). O arranjo P(8, 3) = 336 vale se os três lugares forem funções diferentes, e essa alternativa está no enunciado de propósito. 512 = 8 × 8 × 8 ainda repõe gente, como se a mesma pessoa pudesse ocupar três vagas. Dividir pelo 3! é o passo que separa grupo de fila.",
    passos: [
      "Critério: o quarto não tem ordem interna, então a contagem correta é a combinação C(8, 3).",
      "Numerador do arranjo: 8 opções para o primeiro nome, 7 para o segundo e 6 para o terceiro. 8 × 7 × 6 = 336 listas.",
      "Cada grupo de 3 foi escrito 3! = 6 vezes. C(8, 3) = 336 / 6 = 56 quartos de serviço.",
      "Fórmula: C(8, 3) = (8 × 7 × 6) / (3 × 2 × 1) = 56. 336 é o arranjo, válido só com três cargos distintos.",
    ],
    atalho:
      "O numerador 8 × 7 × 6 vale 336 e ainda trata o quarto como três cargos ordenados. Dividir por 3 × 2 × 1 = 6 desfaz essa ordem e deixa 56 grupos. Com chefe, timoneiro e vigia nomeados, a divisão sairia da conta e a resposta ficaria 336.",
  },
  "mat-cb-n3q1": {
    intuicao:
      "Há 9 pessoas, 5 homens e 4 mulheres, e a comissão leva 3 delas. Pelo menos uma mulher significa que o grupo não pode ser formado só pelos homens. É mais curto contar todas as comissões e riscar as que não têm mulher do que abrir três casos logo de saída. A comissão é um grupo: a ordem dos nomes não muda o trio.",
    motivacao:
      "O complemento evita perder as comissões de duas ou de três mulheres, que o caso exatamente uma mulher deixa de fora. Esse caso isolado dá 40, e 40 está entre as alternativas. A combinação entra porque uma comissão não é uma fila. Arranjo inflaria cada trio em 6 listas e não bateria em nenhuma alternativa inteira deste item, o que já denuncia a ferramenta errada.",
    passos: [
      "Total sem restrição: C(9, 3) = (9 × 8 × 7) / (3 × 2 × 1) = 84 comissões.",
      "Só homens, o complemento de pelo menos uma mulher: C(5, 3) = (5 × 4 × 3) / 6 = 10.",
      "Subtração do complemento: 84 − 10 = 74 comissões com pelo menos uma mulher.",
      "Conferência por casos: C(4, 1) × C(5, 2) = 40, com uma mulher; C(4, 2) × C(5, 1) = 30, com duas; C(4, 3) = 4, com três. 40 + 30 + 4 = 74.",
    ],
    atalho:
      "84 menos as 10 comissões masculinas é 74. Quem para no caso de exatamente uma mulher lê 40 e marca a alternativa armada. Os três casos somam o mesmo 74, então o complemento e a soma direta se confirmam.",
  },
  "mat-cb-n3q2": {
    intuicao:
      "Pelo menos um 6, em dois dados, é a mancha de todas as casas da tabela 6 por 6 em que o 6 aparece na linha, na coluna ou nas duas. Contar essa mancha casa a casa espalha os casos. O complemento é o bloco limpo, em que nenhum dado mostra 6: cinco faces contra cinco faces. A pergunta pede a mancha, e o bloco limpo é o caminho mais curto.",
    motivacao:
      "O complemento cabe porque pelo menos um é a negação de nenhum. Cada dado tem probabilidade 5/6 de não dar 6, e os dados são independentes, então o bloco limpo é o produto (5/6) × (5/6). Subtrair de 1 devolve o evento pedido. A alternativa 10/36 conta um 6 só e esquece a casa (6, 6). 1/6 é a chance de 6 num único dado, ou a da soma 7.",
    passos: [
      "Espaço amostral: princípio multiplicativo, 6 × 6 = 36 resultados equiprováveis dos dois dados.",
      "Complemento, nenhum 6: 5 faces úteis em cada dado. 5 × 5 = 25, e P(nenhum 6) = 25/36.",
      "Regra do complemento: P(pelo menos um 6) = 1 − 25/36 = 11/36, que é a mancha pedida.",
      "Contagem direta: 6 casas com 6 no primeiro dado e 5 casas novas com 6 só no segundo, mais a casa já não duplicada, fecham 6 + 5 = 11. 11/36. A fração 10/36 deixa a casa (6, 6) de fora.",
    ],
    atalho:
      "Inclusão: P(6 no primeiro) + P(6 no segundo) − P(6 nos dois) = 1/6 + 1/6 − 1/36 = 12/36 − 1/36 = 11/36. O desconto de 1/36 é exatamente a casa dupla que a alternativa 10/36 perde de outro jeito.",
  },
  "mat-cb-n3q3": {
    intuicao:
      "A urna começa com 10 bolas, 4 vermelhas e 6 azuis. A primeira bola sai e não volta: a segunda extração enxerga 9 bolas, não 10. Duas vermelhas é um caminho em sequência, primeira vermelha e segunda vermelha, com o universo encolhendo no meio. A pergunta é a probabilidade desse caminho, já reduzida à fração irredutível.",
    motivacao:
      "Sem reposição, a segunda probabilidade muda porque a bola vermelha retirada altera numerador e denominador. Multiplicar 4/10 por 4/10 de novo seria reposição, e 4/25 está na lista para esse engano. A ordem da extração não cria dupla nova, e a combinação C(4, 2) / C(10, 2) dá o mesmo valor, porque cada par é igualmente provável. Os dois caminhos têm de fechar em 2/15.",
    passos: [
      "Primeira extração vermelha: 4 vermelhas em 10 bolas, com probabilidade 4/10.",
      "Sem reposição, o universo passa a 9 bolas e 3 vermelhas. A segunda vermelha tem probabilidade 3/9.",
      "Princípio multiplicativo no caminho: (4/10) × (3/9) = 12/90, produto ainda por simplificar.",
      "Simplificação por 6: 12/90 = 2/15. Pela combinação, C(4, 2) / C(10, 2) = 6/45 = 2/15, a mesma fração irredutível.",
    ],
    atalho:
      "12/90 ainda mostra o produto cru. Divida numerador e denominador por 6 e leia 2/15, que é a forma do gabarito. (4/10) × (4/10) = 16/100 = 4/25 devolveria a bola à urna, e o enunciado não devolve.",
  },
  "mat-cb-n3q4": {
    intuicao:
      "A frase sabendo que a primeira foi branca já retirou uma bola branca da urna. O que resta é o novo mundo: 7 bolas, das quais as 3 pretas continuam todas lá, porque a que saiu era branca. A segunda extração acontece nesse mundo menor. A pergunta não pede a chance de preta no começo, nem a chance das duas cores em sequência.",
    motivacao:
      "Probabilidade condicional é a conta refeita dentro do universo que a informação deixou. A definição P(segunda preta | primeira branca) = P(branca e depois preta) / P(primeira branca) chega no mesmo 3/7, mas o retrato das bolas restantes é mais curto. 3/8 é a preta antes de qualquer notícia. 15/56 é o produto (5/8) × (3/7), a sequência inteira, que ainda não dividiu pela condição.",
    passos: [
      "Condição ocorrida: a primeira bola foi branca e não voltou. Saíram uma branca e nenhuma preta.",
      "Universo restante: 5 − 1 = 4 brancas e 3 pretas, no total de 7 bolas na urna.",
      "Laplace no universo condicionado: P(segunda preta | primeira branca) = 3/7.",
      "Pela definição: o caminho branca e depois preta vale (5/8) × (3/7) = 15/56, e P(primeira branca) = 5/8. O quociente (15/56) / (5/8) = 3/7.",
    ],
    atalho:
      "Depois da branca, as pretas não diminuíram e o total caiu de 8 para 7. A fração passa de 3/8 para 3/7. 15/56 é o numerador da definição antes de dividir por 5/8; o gabarito é o quociente, 3/7.",
  },
  "mat-cb-n3q5": {
    intuicao:
      "Três moedas honestas formam uma lista de caras e coroas com 8 linhas possíveis, todas com a mesma chance. Exatamente duas caras significa uma coroa só, e essa coroa pode estar na primeira, na segunda ou na terceira moeda. São três listas no meio das oito. A pergunta é essa fração, não a chance de cara numa moeda isolada.",
    motivacao:
      "Cada sequência de três lançamentos tem probabilidade (1/2)³ = 1/8, porque os lançamentos são independentes. O número de sequências com exatamente duas caras é a combinação C(3, 2), que escolhe as posições das caras. Multiplicar 3 por 1/8 é a distribuição binomial neste caso particular. 1/8 sozinho seria três caras, uma única lista. 1/2 seria quatro listas, outro evento.",
    passos: [
      "Princípio multiplicativo: 2 × 2 × 2 = 2³ = 8 resultados equiprováveis das três moedas.",
      "Posições das duas caras: C(3, 2) = 3 sequências, a saber cara-cara-coroa, cara-coroa-cara e coroa-cara-cara.",
      "Laplace: P(exatamente duas caras) = 3/8, três sequências favoráveis em oito.",
      "Binomial: C(3, 2) × (1/2)³ = 3 × 1/8 = 3/8. 1/8 = C(3, 3) / 8 seria três caras.",
    ],
    atalho:
      "Escreva as oito listas e risque. Sobram três com exatamente duas caras, uma com três caras e três com uma cara. 3/8 é a classe do meio. A simetria deixa uma cara e duas caras com a mesma contagem, três cada.",
  },
};
