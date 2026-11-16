import type { Didactic } from "./types.ts";

export const didactic: Didactic = {
  origin: [
    "O volume responde a uma pergunta de capacidade: quanto cabe. Egípcios calculavam pilhas e celeiros. Euclides deixa os sólidos para o fim dos Elementos. Arquimedes compara a esfera com o cilindro que a envolve e pede que esse desenho vá no túmulo. A razão entre os volumes é 2 para 3, esfera para cilindro, quando o cilindro tem o raio da esfera e a altura igual ao diâmetro.",
    "Cavalieri organiza o que a intuição já sugere. Se duas pilhas, cortadas na mesma altura, têm sempre a mesma área de seção, têm o mesmo volume. Um prisma e um cilindro de mesma base e mesma altura empilham seções iguais. Uma pirâmide ocupa um terço do prisma correspondente. Três pirâmides de mesma base e mesma altura preenchem o prisma, no caso em que a conta fecha por corte, e Cavalieri estende o fator 1/3 aos demais.",
    "Escala é o mesmo assunto com outro nome. O modelo de um casco na escala 1:50 reduz cada comprimento por 50. Área, que tem duas dimensões, cai por 50². Volume, que tem três, cai por 50³. Um tanque de 125 m³ vira 0,001 m³ no modelo. Quem divide só por 50 trata volume como se fosse comprimento.",
  ],
  construction: [
    "Prisma e cilindro: volume = área da base × altura. O cubo é o prisma de base quadrada e altura igual ao lado: V = a³. A superfície do cubo tem 6 faces, área 6a². Aresta 2 dá volume 8 e área total 24. São contas diferentes.",
    "A diagonal da caixa a × b × c sai de Pitágoras duas vezes. A diagonal da base é √(a² + b²). Com a altura, d² = a² + b² + c². A caixa 2 × 3 × 6 tem diagonal 7, porque 4 + 9 + 36 = 49. No cubo, d = a√3. A diagonal de uma face é a√2, menor, e a banca troca as duas.",
    "Pirâmide e cone: volume = (1/3) × área da base × altura. O 1/3 não é opcional. Um cone de raio 3 e altura 4 tem volume 12π. O cilindro de mesmo raio e mesma altura tem 36π, o triplo.",
    "Esfera: V = (4/3) π r³ e área da superfície 4π r². Para raio 6, o volume é 288π e a superfície é 144π. Esquecer o 1/3, ou usar a fórmula da área no lugar do volume, produz um dos distratores clássicos.",
    "Esfera inscrita no cilindro: altura do cilindro 2r, volume do cilindro 2π r³, volume da esfera (4/3) π r³. A razão cilindro/esfera é 3/2. É a relação de Arquimedes, deduzida das duas fórmulas, não decorada.",
    "Fundir não muda o volume do metal. Uma esfera de raio 3 tem volume 36π. Um cilindro de raio 3 feito com esse metal tem 9π h = 36π, então h = 4.",
    "Na pirâmide regular de base quadrada, a área lateral pede a altura da face, não a altura da pirâmide. Do centro da base até o meio de um lado há metade do lado. Com lado 6 e altura 4, essa distância é 3, e a altura da face é √(4² + 3²) = 5. Cada face triangular tem área 15. Quatro faces dão 60. Com a base 36, a área total é 96.",
    "Semelhança em sólidos: razão linear k, áreas k², volumes k³. Um cone cheio de água até a metade da altura, a partir do vértice, contém um cone semelhante na razão 1/2. O volume é (1/2)³ = 1/8 do cone inteiro. Metade da altura não é metade do volume.",
  ],
  examples: [
    {
      title: "Pirâmide de base 6 e altura 4",
      steps: [
        "Base quadrada: área 36. Isso entra na superfície e também, com o terço, no volume.",
        "Volume, se fosse a pergunta: (1/3) × 36 × 4 = 48.",
        "Altura da face: √(16 + 9) = 5. Quatro triângulos de área 15 somam 60.",
        "Área total: 36 + 60 = 96.",
      ],
    },
    {
      title: "Tanque de 125 m³ na escala 1:50",
      steps: [
        "Cada aresta do modelo é a real dividida por 50.",
        "O volume divide por 50³ = 125.000.",
        "125 / 125.000 = 0,001 m³.",
        "125/50 = 2,5 m³ seria a conta de quem esquece que volume tem três dimensões.",
      ],
    },
  ],
  application: [
    "Capacidade de porão, tanque de lastro e tanque de combustível é volume de prisma, cilindro ou uma composição dos dois. A altura que importa é a da carga, não a do teto, quando o tanque não está cheio. Base vezes altura ocupada.",
    "O modelo de casco no tanque de provas usa a escala ao cubo para volume e ao quadrado para área molhada. Uma conclusão tirada do modelo sem esse fator não volta para o navio. A aula não faz a hidrodinâmica do ensaio. Faz o fator que o ensaio exige antes de qualquer outra conta.",
    "A esfera e o cilindro de Arquimedes reaparecem em tanques e em boias. Saber que o cilindro circunscrito tem 3/2 do volume da esfera evita tratar os dois sólidos como se tivessem o mesmo miolo.",
  ],
  traps: [
    "Usar 6a² como volume do cubo, ou a³ como área.",
    "Esquecer o 1/3 da pirâmide e do cone.",
    "Trocar a diagonal da face, a√2, com a diagonal do cubo, a√3.",
    "Na pirâmide, usar a altura do sólido como altura da face triangular.",
    "Dobrar a aresta e dobrar o volume. O volume multiplica por 8.",
    "Encher o cone até a metade da altura e achar que o volume está pela metade. Está em 1/8, se a água parte do vértice.",
    "Na escala, dividir o volume pelo fator linear.",
  ],
  bibliography: [
    {
      book: "Gelson Iezzi e outros. Fundamentos de Matemática Elementar, vol. 10.",
      place: "Capítulos de prismas, pirâmides, cilindros, cones e esferas.",
      note: "Referência desta aula. O volume é o de geometria espacial. Faça o princípio de Cavalieri antes de aceitar o 1/3 como número solto.",
    },
    {
      book: "Matemática: Ciência e Aplicações, vol. 2.",
      place: "Capítulos de geometria espacial.",
      note: "Mais problema de volume e de escala depois do FME.",
    },
    {
      book: "Elon Lages Lima e outros. A Matemática do Ensino Médio, vol. 2. SBM.",
      place: "Capítulos do princípio de Cavalieri, do prisma, da pirâmide e da esfera.",
      note: "Aprofunda o fator 1/3 e a comparação de Arquimedes entre a esfera e o cilindro circunscrito.",
    },
  ],
};
