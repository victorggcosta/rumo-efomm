import type { Didactic } from "./types.ts";

export const didactic: Didactic = {
  origin: [
    "A análise combinatória conta sem listar. Pascal e Fermat, em 1654, trocam cartas sobre um jogo de dados interrompido: como repartir a aposta se a partida não acabou. Para responder, é preciso contar os finais ainda possíveis. A probabilidade clássica nasce dessa contagem, não de uma tabela decorada.",
    "O princípio multiplicativo é anterior ao fatorial. Se uma escolha tem 3 caminhos e, em seguida, outra tem 2, o par de escolhas tem 3 × 2 = 6. Some só quando os conjuntos são alternativos e disjuntos: ou uma camisa ou outra, não uma camisa e uma calça.",
    "Laplace, no século XVIII, escreve a probabilidade como o quociente entre casos favoráveis e casos possíveis, quando todos têm a mesma chance. O dado honesto e a moeda honesta cabem nessa frase. Um dado viciado não cabe, e a fórmula deixa de valer do jeito que está.",
  ],
  construction: [
    "Uma fila de n pessoas distintas: n escolhas para o primeiro lugar, n − 1 para o segundo, e assim por diante. O produto é n!. Quatro pessoas dão 4 × 3 × 2 × 1 = 24 filas.",
    "Arranjo é uma fila parcial. Escolher k objetos distintos de n, em ordem, dá P(n, k) = n! / (n − k)!. De 5 livros, uma fila de 2 é 5 × 4 = 20. O fatorial de baixo cancela o que não foi usado.",
    "Combinação é um grupo, sem ordem. Cada grupo de k pessoas foi contado k! vezes nos arranjos, uma para cada fila interna. Por isso C(n, k) = P(n, k) / k! = n! / [k! (n − k)!]. Duplas de 5 pessoas: 5 × 4 / 2 = 10. Um quarto de serviço de 3 tripulantes entre 8, sem cargo distinto, é C(8, 3) = 56. Se os três lugares fossem chefe, timoneiro e vigia, a ordem criaria serviço novo e a conta seria P(8, 3) = 336.",
    "Pelo menos um caso costuma sair pelo complemento. Comissões de 3 com 5 homens e 4 mulheres, exigindo ao menos uma mulher: C(9, 3) − C(5, 3) = 84 − 10 = 74. Contar só a comissão com exatamente uma mulher esquece as de duas e as de três.",
    "Probabilidade de Laplace: P = favoráveis / possíveis. Dado par: 3/6 = 1/2. Duas moedas: o espaço é cara-cara, cara-coroa, coroa-cara, coroa-coroa. Duas caras: 1/4, não 1/2. Dois dados: 36 resultados. A soma 7 ocupa 6 deles, probabilidade 1/6. Pelo menos um 6: 1 − (5/6)² = 11/36.",
    "União: P(A ∪ B) = P(A) + P(B) − P(A ∩ B). A interseção foi somada duas vezes. Com 0,3, 0,4 e interseção 0,1, a união vale 0,6. Se os eventos são disjuntos, a interseção é zero e a subtração some.",
    "Sem reposição, a segunda extração vê outra urna. Duas vermelhas, de 4 vermelhas e 6 azuis: (4/10) × (3/9) = 2/15. Com reposição seria (4/10) × (4/10). A frase 'sem reposição' muda o segundo denominador.",
    "Probabilidade condicional: P(A|B) = P(A ∩ B) / P(B), quando P(B) ≠ 0. Saber que a primeira bola foi branca, numa urna de 5 brancas e 3 pretas, deixa 7 bolas e 3 pretas. A chance de a segunda ser preta é 3/7, não 3/8. Três moedas e exatamente duas caras: C(3, 2) resultados favoráveis em 8, probabilidade 3/8.",
  ],
  examples: [
    {
      title: "Comissão com pelo menos uma mulher",
      steps: [
        "Total: C(9, 3) = 84.",
        "Só homens: C(5, 3) = 10.",
        "Pelo menos uma mulher: 84 − 10 = 74.",
      ],
    },
    {
      title: "Duas vermelhas sem reposição",
      steps: [
        "Primeira vermelha: 4/10.",
        "Segunda, com 3 vermelhas em 9 bolas: 3/9.",
        "Produto: 12/90 = 2/15.",
      ],
    },
  ],
  application: [
    "Escala de quarto é combinação quando os três estão no mesmo serviço, e arranjo quando cada um assume um posto diferente. Trocar as duas contas não erra de pouco: 56 vira 336.",
    "Um alarme que dispara com pelo menos um de dois sensores independentes se calcula pelo complemento, a chance de nenhum disparar. Somar as probabilidades e passar de 1 é o sinal de que a interseção foi esquecida.",
    "Sorteio de inspeção sem repor o nome na lista é extração sem reposição. A segunda probabilidade não repete o denominador da primeira.",
  ],
  traps: [
    "Somar escolhas sucessivas em vez de multiplicar.",
    "Usar arranjo quando o grupo não tem ordem, ou combinação quando os cargos são distintos.",
    "Esquecer o complemento em 'pelo menos um' e contar só um dos subcasos.",
    "Tratar duas moedas como se o espaço tivesse 3 resultados, juntando cara-coroa com coroa-cara.",
    "Na união, somar P(A) e P(B) sem tirar a interseção.",
    "Manter o denominador na segunda extração sem reposição.",
    "Ignorar a condição já realizada e voltar à probabilidade inicial.",
  ],
  bibliography: [
    {
      book: "Gelson Iezzi e outros. Fundamentos de Matemática Elementar, vol. 5.",
      place: "Capítulos de análise combinatória e de probabilidade.",
      note: "Referência desta aula. Faça o princípio multiplicativo antes do fatorial, e o arranjo antes da combinação, porque a combinação é o arranjo dividido por k!.",
    },
    {
      book: "Augusto César Morgado e outros. Análise Combinatória e Probabilidade. SBM.",
      place: "Capítulos do princípio multiplicativo, combinações e probabilidade condicional.",
      note: "Aprofundamento. O livro insiste em contar por decisão, sem escolher uma fórmula pelo nome antes de saber se a ordem importa.",
    },
    {
      book: "Elon Lages Lima e outros. A Matemática do Ensino Médio, vol. 2. SBM.",
      place: "Capítulos de combinatória e de probabilidade.",
      note: "A mesma preocupação: o princípio da multiplicação no lugar de uma lista de arranjos e combinações decorada.",
    },
  ],
};
