import type { Didactic } from "./types.ts";

export const didactic: Didactic = {
  origin: [
    "Medir é comparar com um padrão. Sem padrão combinado, “um braço de corda” de um homem não é o de outro, e um navio não conversa com o porto. O Sistema Internacional fixa um conjunto pequeno de grandezas de base — metro, quilograma, segundo, ampere, kelvin, mol, candela — e constrói as outras por multiplicação e divisão. Quilo, mili e as demais são só potências de dez na frente da unidade, não unidades novas.",
    "A análise dimensional nasce da recusa em somar coisas de naturezas diferentes. Não se soma metro com segundo. Uma fórmula montada por analogia pode estar errada antes de qualquer número: se o lado esquerdo é uma distância e o lado direito não tem dimensão de comprimento, a fórmula está morta. Isso filtrava contas de engenharia muito antes da calculadora.",
    "Vetor entra quando o número e a unidade não bastam. Um deslocamento de 10 km para o norte não é um deslocamento de 10 km para o leste. Vento, correnteza, força e velocidade de um navio pedem direção e sentido. A soma de vetores não é a soma dos módulos, salvo quando eles apontam para o mesmo lado. Navegar somando milhas como se fossem escalares é o erro que a geometria do plano corrige desde cedo.",
  ],
  construction: [
    "Unidade derivada se lê na definição. Velocidade é variação de posição sobre tempo, então a unidade de base é m/s. Aceleração é variação de velocidade sobre tempo, m/s². Força, mais adiante, será kg · m/s², o newton. Se você troca a unidade no meio da conta, troca o número. 72 km/h não é 72 m/s.",
    "O fator 3,6 não é mágica. 1 km = 1.000 m e 1 h = 3.600 s, então 1 km/h = 1.000/3.600 m/s = 1/3,6 m/s. Passar de km/h para m/s é dividir por 3,6. O caminho inverso multiplica. 90 km/h = 25 m/s. 90 × 3,6 = 324 é a conversão feita de costas.",
    "O nó é 1 milha náutica por hora. Com 1 milha náutica = 1.852 m, 10 nós = 18.520 m/h = 18.520/3.600 m/s ≈ 5,1 m/s. Tratar o nó como se já fosse m/s, ou esquecer de passar a hora para segundo, produz 10 ou 18,5, que são as iscas da banca.",
    "Homogeneidade: cada termo de uma soma tem de ter a mesma dimensão, e os dois lados de uma igualdade também. vt tem dimensão de comprimento. at² também, porque (L/T²) · T² = L. O fator 1/2 é número puro e não muda dimensão. at, sem o quadrado no tempo, é L/T: velocidade, não distância. Uma expressão candidata a “fórmula de espaço” cai fora se a dimensão não fecha, mesmo que o número, num caso particular, pareça razoável.",
    "Ordem de grandeza é a potência de dez mais próxima, não o expoente que já está escrito. Compara-se o coeficiente com √10 ≈ 3,16. Se ele é maior, a ordem sobe um expoente. 4,7 × 10³ está mais perto de 10⁴ do que de 10³. Algarismo significativo é outra coisa: é o dígito que a medida sustenta. Zeros à esquerda de 0,045 não contam. No produto, o resultado não pode ficar mais preciso que o fator mais pobre: 2,50 × 3,2 se escreve 8,0, com dois significativos.",
    "Vetor no plano se decompõe. Um módulo 10 a 60° do eixo x tem componente horizontal 10 cos 60° = 5 e componente vertical 10 sen 60° = 5√3. Cosseno cola no eixo adjacente. Trocar seno e cosseno troca os catetos. Módulos perpendiculares se combinam por Pitágoras: 3 km e 4 km dão 5 km de deslocamento, não 7 km de caminho. Duas forças de 6 N e 8 N em ângulo reto dão 10 N. A velocidade do navio em relação à terra é a soma da velocidade em relação à água com a velocidade da correnteza, vetorialmente.",
  ],
  examples: [
    {
      title: "10 nós para m/s",
      steps: [
        "1 nó = 1.852 m/h. Dez nós = 18.520 m/h.",
        "Uma hora tem 3.600 segundos. 18.520 / 3.600 ≈ 5,14.",
        "A resposta honesta, na precisão desta conta, é cerca de 5,1 m/s.",
        "18,5 m/s seria parar em m/h e apagar o fator 3.600 de modo incompleto.",
      ],
    },
    {
      title: "O que não pode ser uma distância",
      steps: [
        "Distância: dimensão L.",
        "vt, at², v²/a e (1/2)at² fecham em L. O 1/2 não carrega unidade.",
        "at fecha em L/T. É velocidade. Uma fórmula de espaço escrita como at está dimensionalmente errada, qualquer que seja o número na frente.",
      ],
    },
  ],
  application: [
    "Carta, radar e máquina não falam a mesma unidade o tempo todo. A velocidade na carta pode estar em nós, uma corrente em m/s, um consumo em litros por hora. Converter antes de somar é parte da navegação, não um prefácio. 10 nós e 5 m/s não se somam até os dois estarem na mesma unidade.",
    "Correnteza e vento são vetores. Um navio que faz 8 m/s para o norte em relação à água, numa corrente de 6 m/s para o leste, não faz 14 m/s em relação à terra. Faz 10 m/s numa direção intermediária, o arco cuja tangente é 6/8. O rumo na água e o rumo no fundo não são o mesmo número.",
    "Ordem de grandeza serve para recusar uma conta absurda antes do resultado fino. Se uma conversão de 90 km/h produz centenas de metros por segundo, o fator foi invertido. No diário de máquinas, um algarismo a mais numa leitura não cria precisão que o instrumento não tinha.",
  ],
  traps: [
    "Multiplicar por 3,6 quando se quer m/s, ou dividir quando se quer km/h.",
    "Tratar nó como m/s, ou como km/h sem o fator 1,852.",
    "Somar módulos de vetores perpendiculares. 3 e 4 não dão 7 no deslocamento.",
    "Trocar seno e cosseno na componente. A 60°, o eixo adjacente leva o cosseno, que é 1/2.",
    "Achar que o coeficiente 1/2 muda a dimensão, ou que uma fórmula “conhecida” dispensa o teste de homogeneidade.",
    "Contar zeros à esquerda como significativos, ou escrever o produto com mais dígitos do que o fator mais pobre permite. Ordem de grandeza não é o expoente cru quando o coeficiente passa de √10.",
  ],
  bibliography: [
    {
      book: "Helou, Gualter e Newton. Tópicos de Física, vol. 1.",
      place: "Capítulos de introdução à Física: algarismos significativos, ordem de grandeza, sistema de unidades e vetores.",
      note: "É o livro desta etapa. A introdução e o capítulo de vetores cobrem o que a aula pede, com exercício de conversão.",
    },
    {
      book: "Ramalho, Nicolau e Toledo. Os Fundamentos da Física, vol. 1.",
      place: "Capítulos iniciais de grandezas, unidades e vetores.",
      note: "Segunda voz, mesmo chão. Use se um enunciado do Tópicos ficar opaco.",
    },
    {
      book: "Halliday, Resnick e Walker. Fundamentos de Física, vol. 1.",
      place: "Capítulo 1, Medição, e capítulo 3, Vetores.",
      note: "Aprofundamento. O Halliday é mais longo no conceito de medida e na decomposição. Não comece por ele se a conversão de unidades ainda falha.",
    },
  ],
};
