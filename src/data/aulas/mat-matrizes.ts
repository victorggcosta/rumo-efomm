import type { Didactic } from "./types.ts";

export const didactic: Didactic = {
  origin: [
    "Sistema linear é o que se faz quando duas condições têm de valer ao mesmo tempo. Duas retas no plano ou se cruzam num ponto, ou são paralelas, ou são a mesma reta. A álgebra só dá nome a isso. O método de eliminar uma incógnita somando equações está nos Nove Capítulos da China antiga e, no Ocidente, ganha a forma de Gauss bem mais tarde.",
    "A matriz é a tabela dos coeficientes, separada dos nomes das incógnitas. Cayley, no século XIX, trata essa tabela como um objeto que se soma e se multiplica. A multiplicação não é casa por casa. É linha por coluna, porque é assim que a composição de duas transformações age sobre um par (x, y).",
    "O determinante 2 × 2, ad − bc, mede se as duas linhas apontam direções diferentes. Se é zero, uma linha é múltiplo da outra: as duas equações dizem a mesma coisa, ou se contradizem. Não há inversa, e o sistema não tem uma única solução.",
  ],
  construction: [
    "Ordem é linhas por colunas. Uma matriz 2 × 3 tem duas linhas e três colunas. O elemento a₂₁ está na linha 2 e na coluna 1. Trocar os índices troca a casa.",
    "Soma e produto por número exigem a mesma ordem na soma, e agem casa a casa. [1 2; 3 0] + [4 0; 1 5] = [5 2; 4 5]. O número 3 multiplica cada casa.",
    "O produto AB existe quando o número de colunas de A é o de linhas de B. A casa da linha i e coluna j é a linha i de A vezes a coluna j de B. [1 2; 0 1] [3 0; 1 4] = [5 8; 1 4]. A ordem importa: com A = [1 1; 0 1] e B = [1 0; 1 1], AB = [2 1; 1 1] e BA = [1 1; 1 2]. Não são iguais.",
    "Determinante de [a b; c d] é ad − bc. A identidade tem determinante 1. Se o determinante é zero, as linhas são proporcionais e não existe matriz inversa. [2 4; 1 2] tem determinante 0.",
    "Quando o determinante vale Δ ≠ 0, a inversa de [a b; c d] é (1/Δ) [d −b; −c a]. Para [3 1; 5 2], Δ = 1, e a inversa é [2 −1; −5 3]. O produto das duas, nos dois sentidos, é a identidade. Vale conferir uma linha antes de marcar.",
    "Se A e B têm inversa, a inversa do produto é (AB)⁻¹ = B⁻¹ A⁻¹. A ordem inverte, pelo mesmo motivo que AB e BA diferem: desfazer a composição começa pela última transformação.",
    "Sistema 2 × 2. Somar equações elimina uma incógnita quando os coeficientes estão opostos, ou depois de multiplicar uma equação. x + y = 7 e x − y = 3 dão 2x = 10, x = 5, y = 2. Cramer faz o mesmo com determinantes: troca-se a coluna da incógnita pelos termos independentes e divide pelo determinante do sistema. Em 2x + y = 8 e x + 3y = 9, Δ = 5, Δx = 15 e x = 3.",
    "Se Δ = 0, olhe os termos independentes. Em x + 2y = 4 e 2x + 4y = 8, a segunda equação é o dobro da primeira: infinitas soluções, a mesma reta escrita duas vezes. Em x + 2y = 4 e 2x + 4y = 7, o dobro de 4 seria 8, não 7: nenhuma solução. Determinante zero não decide sozinho entre impossível e indeterminado.",
  ],
  examples: [
    {
      title: "Inversa de [3 1; 5 2]",
      steps: [
        "Δ = 6 − 5 = 1.",
        "A inversa é [2 −1; −5 3].",
        "Produto: primeira linha dá 6 − 5 = 1 e −3 + 3 = 0.",
        "Segunda linha dá 10 − 10 = 0 e −5 + 6 = 1. É a identidade.",
      ],
    },
    {
      title: "Caixas no navio: 2x + y = 11 e x + 2y = 10",
      steps: [
        "Δ = 4 − 1 = 3.",
        "Δx = |11 1; 10 2| = 22 − 10 = 12. x = 4.",
        "y = 11 − 2 × 4 = 3.",
        "Confira a segunda equação: 4 + 6 = 10.",
      ],
    },
  ],
  application: [
    "Duas condições de carga, dois tipos de caixa, dois tanques misturando volumes: cada condição vira uma equação, e a matriz guarda os coeficientes. O determinante zero avisa que as duas medições não são independentes. Ou repetem a mesma informação, ou se contradizem, e não há uma carga única que satisfaça as duas.",
    "A não comutatividade não é curiosidade. A ordem em que se aplicam duas correções, duas trocas de base ou duas transformações muda o resultado. AB e BA diferentes, no exemplo numérico da aula, são o aviso concreto.",
    "A prensa de contas da prova pede a solução e a conferência nas duas equações. Marcar o par (x, y) sem substituir de volta deixa passar uma troca de coluna no Cramer.",
  ],
  traps: [
    "Ler a ordem como colunas por linhas, ou a₁₂ no lugar de a₂₁.",
    "Multiplicar matrizes casa por casa.",
    "Achar que AB = BA sempre.",
    "Inverter (AB) na ordem A⁻¹ B⁻¹. A ordem correta é B⁻¹ A⁻¹.",
    "Concluir que determinante zero significa sempre impossível. Pode ser a mesma equação repetida.",
    "No Cramer, trocar a coluna errada, ou dividir pelo determinante da coluna em vez do determinante do sistema.",
    "Esquecer o sinal na inversa: o elemento b vai para a outra diagonal com sinal trocado.",
  ],
  bibliography: [
    {
      book: "Gelson Iezzi e outros. Fundamentos de Matemática Elementar, vol. 4.",
      place: "Capítulos de matrizes, determinantes e sistemas lineares.",
      note: "Referência desta aula. O volume junta os três assuntos. Faça o produto linha por coluna antes do determinante, e o determinante antes de classificar o sistema.",
    },
    {
      book: "Matemática: Ciência e Aplicações, vol. 2.",
      place: "Capítulos de matrizes e sistemas.",
      note: "Mais sistema 2 × 2 e discussão de sistema impossível ou indeterminado.",
    },
    {
      book: "Elon Lages Lima e outros. A Matemática do Ensino Médio, vol. 3. SBM.",
      place: "Capítulos de sistemas lineares e matrizes.",
      note: "Aprofunda a inversa e o motivo de a multiplicação não comutar, tratando a matriz como transformação.",
    },
  ],
};
