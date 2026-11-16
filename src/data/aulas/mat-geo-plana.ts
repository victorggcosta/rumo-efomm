import type { Didactic } from "./types.ts";

export const didactic: Didactic = {
  origin: [
    "A geometria plana nasce de medir terra. Depois da cheia do Nilo, o limite do lote sumia e era preciso reconstruir a área sem o desenho antigo. Os gregos transformaram esse ofício em argumento. Euclides, nos Elementos, parte de poucas afirmações e deduz o resto. Pitágoras, Tales e o círculo entram aí, não como lista de fórmulas.",
    "Área compara a figura com um quadrado de lado 1. Perímetro é outra medida: é o comprimento da fronteira. Um retângulo de 6 por 4 tem área 24 e perímetro 20. Trocar as duas é o erro mais antigo da banca, e já era possível no Egito.",
    "O círculo pede o número π porque a volta e a área não fecham com um inteiro. Nesta aula, π fica escrito. 3,14 é aproximação, e a prova que pede valor exato não quer o arredondamento.",
  ],
  construction: [
    "Retângulo: a área é base vezes altura, porque ele se cobre com o quadrado unitário. Triângulo: a diagonal corta o retângulo ao meio, então a área é (base × altura) / 2. A altura é o segmento perpendicular à base, não um lado inclinado. Trapézio: a média das duas bases vezes a altura, (B + b) h / 2. É o retângulo que teria a mesma área.",
    "A soma dos ângulos internos de um triângulo é 180°. Uma reta paralela a um lado, passando pelo vértice oposto, faz ângulos alternos iguais aos dois da base, e os três juntos formam um ângulo raso. Se dois ângulos são 50° e 60°, o terceiro é 70°.",
    "Pitágoras sai da semelhança. No triângulo retângulo, a altura relativa à hipotenusa forma dois triângulos semelhantes ao original e entre si. Cada cateto é média geométrica entre a hipotenusa e a sua projeção: a² = c · m e b² = c · n. Somando, a² + b² = c (m + n) = c². O triângulo 5-12-13 fecha porque 25 + 144 = 169. A diagonal do quadrado de lado 6 é a hipotenusa de dois catetos 6: d = 6√2.",
    "Semelhança: dois triângulos com os mesmos ângulos têm lados proporcionais. Se a razão linear é k, as alturas também estão na razão k, e a área, que multiplica base por altura, fica na razão k². Razão 2/3 nas lados dá razão 4/9 nas áreas. Área 16 no menor implica 36 no maior.",
    "No círculo, o ângulo central vale o arco que ele enxerga. O ângulo inscrito, com vértice na circunferência, vale metade desse arco. Um arco de 100° dá inscrito de 50°. Se o arco é uma semicircunferência, 180°, o inscrito mede 90°. Por isso todo triângulo inscrito num diâmetro é retângulo no terceiro vértice.",
    "De um ponto externo P, a tangente toca em T e a secante corta em A e B, com A mais perto de P. Os triângulos formados pela tangente e pela secante são semelhantes, e daí PT² = PA · PB. Se a tangente mede 6 e o trecho externo da secante mede 4, o comprimento total da secante é 9, porque 36 = 4 × 9.",
    "Losango: as diagonais se cortam no meio e em ângulo reto. Diagonais 6 e 8 dão metades 3 e 4, e o lado é 5. A área é o semiproduto das diagonais, 24, que não é o lado.",
    "Heron dá a área pelos três lados, sem precisar da altura. Com semiperímetro s, a área é √[s(s − a)(s − b)(s − c)]. Para 13, 14 e 15, s = 21 e a área é 84. Vale conferir a conta do radicando até o quadrado perfeito, em vez de parar no meio.",
  ],
  examples: [
    {
      title: "Equilátero de lado 4",
      steps: [
        "A altura cai no meio da base e forma catetos 2 e hipotenusa 4.",
        "h² = 16 − 4 = 12, então h = 2√3.",
        "Área = (4 × 2√3) / 2 = 4√3.",
        "a²√3 / 4 dá o mesmo: 16√3 / 4 = 4√3.",
      ],
    },
    {
      title: "Quadrado inscrito no círculo de raio 5",
      steps: [
        "A diagonal do quadrado é o diâmetro, 10.",
        "L√2 = 10, então L = 5√2.",
        "Área = L² = 25 × 2 = 50.",
        "25π é a área do círculo, não a do quadrado.",
      ],
    },
  ],
  application: [
    "A diagonal de um convés ou de um tanque retangular é Pitágoras. Um compartimento de 5 m por 12 m tem diagonal 13 m. Serve para passar um escora, uma mangueira ou uma peça rígida, e a soma 17 m não cabe na conta: a peça atravessa em linha reta.",
    "Semelhança aparece na estimativa de distância. Dois triângulos com o mesmo ângulo, um pequeno e medido a bordo e outro grande até o objeto, têm lados na mesma razão. A área, se entrar, vai ao quadrado. Usar a razão linear na área erra o fator.",
    "A carta náutica e o radar desenham arcos. O ângulo inscrito explica por que uma marcação que enxerga o mesmo arco, a partir de outro ponto da circunferência, vale metade do ângulo no centro. Não é um detalhe de desenho. É a relação que a prova cobra com outros nomes.",
  ],
  traps: [
    "Trocar perímetro com área, ou esquecer o /2 na área do triângulo.",
    "Usar um lado inclinado como altura.",
    "Aplicar a razão de semelhança direto na área. O correto é o quadrado da razão.",
    "Tomar o ângulo inscrito igual ao arco, em vez da metade.",
    "Achar que o ângulo inscrito num diâmetro depende da posição do terceiro ponto. Vale 90° em qualquer ponto da circunferência, fora das extremidades.",
    "No losango, confundir o lado com a área, ou somar as diagonais em vez de usar as metades no triângulo retângulo.",
    "Na potência do ponto, multiplicar a tangente pelo trecho externo, em vez de igualar o quadrado da tangente ao produto.",
  ],
  bibliography: [
    {
      book: "Gelson Iezzi e outros. Fundamentos de Matemática Elementar, vol. 9.",
      place: "Capítulos de áreas, semelhança, triângulo retângulo e círculo.",
      note: "Referência desta aula. O volume é o de geometria plana. Faça a semelhança antes da potência do ponto, porque a potência é um caso de semelhança.",
    },
    {
      book: "Matemática: Ciência e Aplicações, vol. 2.",
      place: "Capítulos de geometria plana.",
      note: "Mais exercício de área e de ângulo inscrito depois que a dedução do FME estiver feita.",
    },
    {
      book: "João Lucas Marques Barbosa. Geometria Euclidiana Plana. SBM.",
      place: "Capítulos de semelhança, triângulo retângulo e círculo.",
      note: "Aprofunda a semelhança e o teorema de Pitágoras como consequência, sem tratar a fórmula como axioma. A geometria espacial correspondente está no volume 2 de Elon Lages Lima, A Matemática do Ensino Médio.",
    },
  ],
};
