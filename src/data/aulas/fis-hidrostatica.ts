import type { Didactic } from "./types.ts";

export const didactic: Didactic = {
  origin: [
    "Arquimedes, em Siracusa, compara o peso de uma coroa com o peso da água que ela desloca. O empuxo é o peso do fluido deslocado. A lenda da banheira é dispensável. A frase física não é: um corpo imerso perde peso. A frase é: o fluido empurra para cima com força igual ao peso da porção de fluido que teve de sair do lugar.",
    "Stevin, no fim do século XVI, mostra que a pressão num líquido em repouso depende da profundidade, não do formato do vaso. Dois pontos na mesma profundidade têm a mesma pressão, ainda que um vaso seja estreito e o outro largo. Pascal, no século XVII, acrescenta que um aumento de pressão num líquido confinado se transmite a todos os pontos. A prensa hidráulica é essa frase com dois pistões.",
    "Um navio flutua pelo mesmo Arquimedes. O peso do navio iguala o peso da água deslocada. Aço maciço afunda porque a densidade do aço passa da densidade da água. O casco flutua porque a conta usa a massa dividida pelo volume externo, ar dos porões incluído. Essa densidade média é que fica abaixo da densidade da água.",
  ],
  construction: [
    "Pressão é força perpendicular dividida pela área: p = F/A, em pascal, que é N/m². 200 N sobre 0,4 m² dão 500 Pa. Multiplicar força por área não é pressão.",
    "Stevin: entre dois pontos de um líquido em repouso, p₂ − p₁ = ρ g h, com h o desnível. A pressão manométrica, acima da atmosfera, a uma profundidade h é ρ g h. Com ρ = 10³ kg/m³, g = 10 m/s² e h = 3 m, p = 30.000 Pa. A pressão absoluta somaria cerca de 10⁵ Pa da atmosfera. O enunciado que diz manométrica não quer essa soma.",
    "Paradoxo hidrostático: a força no fundo é p vezes a área do fundo, isto é, ρ g h A. Três vasos com o mesmo fundo e a mesma altura de líquido fazem a mesma força no fundo, mesmo que o peso do líquido seja diferente. Se o vaso abre para cima, as paredes carregam parte do peso e a força no fundo é menor que o peso do líquido. Se o vaso fecha para cima, as paredes empurram o líquido para baixo e a força no fundo supera o peso. A pressão naquela profundidade não muda.",
    "Numa antepara vertical retangular, a pressão varia de modo linear. A média é a pressão na meia-altura. Uma chapa de 2 m de largura, da profundidade 1 m até 3 m, tem 4 m² e o meio a 2 m. Pressão média 20.000 Pa. Força 80.000 N. Usar só o topo ou só o fundo erra para menos ou para mais.",
    "Pascal: F₁/A₁ = F₂/A₂. Área oito vezes maior equilibra força oito vezes maior. O líquido ideal é incompressível, então o volume que desce num pistão sobe no outro: A₁ d₁ = A₂ d₂. Pistão de 4 cm² que desce 10 cm levanta o pistão de 40 cm² em 1 cm. A força maior vem com deslocamento menor. No caso ideal, o trabalho se conserva.",
    "Empuxo: E = ρ_fluido V_deslocado g. Um cubo de aresta 0,1 m totalmente imerso desloca 0,001 m³ e sofre empuxo de 10 N na água, com g = 10. O peso aparente é o peso real menos o empuxo. 50 N no ar e 35 N imerso significam empuxo de 15 N.",
    "Flutuação: no equilíbrio, E = peso. Para um sólido homogêneo, ρ_corpo V = ρ_líquido V_sub, então a fração submersa é a razão das densidades. Madeira de 600 kg/m³ na água tem 0,6 do volume embaixo d'água. Os 0,4 que sobram são a parte emersa, e a banca troca as duas.",
    "Densidade pela pesagem. Amostra de 40 N no ar e 24 N imersa: empuxo 16 N, volume 16/(ρ g) = 0,0016 m³, massa 4 kg, densidade 2.500 kg/m³. A massa vem do peso dividido por g, não do peso aparente.",
    "Calado. Carga nova Δm pede volume novo Δm/ρ para o empuxo acompanhar o peso. Se a área da linha d'água fica aproximadamente constante, o aumento do calado é esse volume dividido pela área. 20 toneladas são 20.000 kg. Em água de 10³ kg/m³ e área 50 m², o calado sobe 0,4 m. A aproximação da área constante vale para acréscimo pequeno. Um casco real muda a área com o calado, e a tabela de deslocamento é que manda a bordo.",
  ],
  examples: [
    {
      title: "20 t de carga e linha d'água de 50 m²",
      steps: [
        "20 t = 20.000 kg.",
        "Volume de água a mais: 20.000 / 1.000 = 20 m³.",
        "Aumento do calado: 20 / 50 = 0,4 m.",
        "0,2 m usaria 10 t, ou trataria a tonelada como 500 kg.",
      ],
    },
    {
      title: "Antepara de 1 m a 3 m, largura 2 m",
      steps: [
        "Altura da chapa: 2 m. Área: 4 m². Profundidade média: 2 m.",
        "Pressão média: 1.000 × 10 × 2 = 20.000 Pa.",
        "Força: 80.000 N.",
        "40.000 N seria a conta com a profundidade do topo, 1 m, na área inteira.",
      ],
    },
  ],
  application: [
    "Deslocamento é o peso da água deslocada e, no navio flutuando, é o peso do navio. Embarcar carga aumenta o deslocamento na mesma quantidade e o calado segundo a área da linha d'água. A conta de 0,4 m desta aula é a versão de prova, com área constante e água a 10³ kg/m³. Água do mar fica perto de 1.025 kg/m³, e o volume deslocado pela mesma massa é um pouco menor.",
    "Antepara de tanque e costado sentem a força de Stevin, não só a pressão num ponto. A força total usa a pressão média na área. Um furo no fundo vê a pressão daquela profundidade. A chapa inteira vê a média.",
    "A prensa do leme hidráulico, do guincho e da tampa de escotilha repete Pascal. A vantagem de força é a razão das áreas, e o curso do pistão pequeno é maior na mesma razão. Projetar só a força, sem o curso, escolhe um cilindro que não completa o movimento.",
    "Um bloco de aço no convés afunda se cair ao mar. O navio não afunda por ser de aço. Afunda se a densidade média passar da densidade da água: água aberta embarcada, porão alagado, reserva de flutuabilidade gasta. Arquimedes não abre exceção para casco metálico.",
  ],
  traps: [
    "Trocar p = F/A por F × A.",
    "Somar a atmosfera quando o enunciado pede a pressão manométrica, ou esquecê-la quando pede a absoluta.",
    "Achar que a força no fundo iguala o peso do líquido em qualquer vaso. Isso só é verdade em paredes verticais.",
    "Na antepara, usar a pressão do topo ou a do fundo no lugar da média.",
    "No corpo que flutua, marcar a fração emersa no lugar da submersa.",
    "Calcular a densidade com o peso aparente no lugar da massa, ou esquecer de tirar o empuxo antes do volume.",
    "Na prensa, igualar os deslocamentos, ou inverter a razão das áreas.",
    "Dizer que o navio flutua porque o aço é menos denso que a água.",
  ],
  bibliography: [
    {
      book: "Helou, Gualter e Newton. Tópicos de Física, vol. 1.",
      place: "Capítulos de hidrostática: pressão, Stevin, Pascal e Arquimedes.",
      note: "Livro desta aula. Faça o diagrama da força na antepara e o equilíbrio do corpo flutuante antes de aplicar fórmula.",
    },
    {
      book: "Ramalho, Nicolau e Toledo. Os Fundamentos da Física, vol. 1.",
      place: "Capítulos de hidrostática.",
      note: "Segunda bateria, em especial prensa hidráulica e empuxo com peso aparente.",
    },
    {
      book: "Halliday, Resnick e Walker. Fundamentos de Física.",
      place: "Capítulo de fluidos em repouso.",
      note: "Aprofundamento. O texto separa pressão manométrica e absoluta e deduz o empuxo a partir do teorema de Stevin, que é a ordem usada aqui.",
    },
  ],
};
