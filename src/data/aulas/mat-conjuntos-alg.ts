import type { Didactic } from "./types.ts";

export const didactic: Didactic = {
  origin: [
    "Contar cabeças de gado e medir um campo não pedem o mesmo tipo de número. O gado sai inteiro: 1, 2, 3. O campo se parte. Os egípcios, ao refazer as marcas das terras depois da cheia do Nilo, precisavam de pedaços de unidade. A fração nasceu dessa necessidade, não de um capricho de notação.",
    "O zero demorou. Durante séculos dava para contar e medir sem um símbolo para o nada. A escrita posicional, vinda da Índia e espalhada pelo mundo árabe, não funciona sem ele: 205 e 25 seriam a mesma figura. O zero é o guardião da casa decimal, e por isso não pode ser divisor. Não é uma proibição arbitrária.",
    "Os negativos entram quando a conta passa do zero: dívida, temperatura abaixo de um marco, posição do outro lado de uma origem. Os conjuntos organizam essa história. ℕ, ℤ, ℚ, ℝ não são gavetas decoradas. Cada um existe porque o anterior não dava conta de uma operação que a prática exigia.",
  ],
  construction: [
    "Um conjunto fica definido quando se sabe, sem dúvida, se um objeto está dentro ou fora. {1, 2, 3} e {3, 1, 2} são o mesmo conjunto: ordem não cria elemento novo, e repetição também não. A ∩ B fica com o que está nos dois. A ∪ B junta, sem escrever duas vezes quem já estava.",
    "Cada elemento de um conjunto de n membros pode entrar ou não num subconjunto. São duas escolhas por elemento, então há 2ⁿ subconjuntos. Para n = 3, são 8, incluindo o vazio e o próprio conjunto. Esquecer um dos dois é o erro de quem conta “os pedaços visíveis” e não as escolhas.",
    "Nos inteiros, somar é deslocar na reta. Multiplicar por um positivo repete esse deslocamento. Multiplicar por −1 troca o lado da origem: é o oposto. Por isso (−3) × (−4) é 12. A primeira troca leva a −12 se o outro fator fosse positivo; a segunda troca devolve o positivo. Não é uma regra recitada. É duas inversões de sentido.",
    "A fração a/b, com b ≠ 0, é o número x tal que b · x = a. Essa frase explica a divisão e também a proibição: se b = 0, a equação 0 · x = a não tem solução quando a ≠ 0, e tem infinitas quando a = 0. Nos dois casos não existe “o” quociente. Frações equivalentes são o mesmo x escrito com outro par: 1/2 = 2/4 porque 2 · 2 = 4 · 1.",
    "Somar frações é somar quantidades da mesma parte. 3/4 e 1/6 não falam da mesma parte. O múltiplo comum 12 corta a unidade em pedaços que servem aos dois: 9/12 + 2/12 = 11/12. Multiplicar frações é tomar uma parte de uma parte. Dividir por uma fração é multiplicar pelo inverso, porque a/b ÷ c/d pergunta qual número, vezes c/d, devolve a/b.",
    "A ordem das operações não é etiqueta. 7 × 2 é um bloco já resolvido antes de se juntar ao −4. Parênteses existem justamente para furar essa ordem quando a situação pede outro agrupamento. Potências de mesma base se multiplicam somando expoentes, porque 2³ × 2⁻¹ é (2 · 2 · 2) × (1/2) = 2².",
    "Racional é quem cabe numa fração de inteiros. 0,75 = 3/4. √2 não cabe: não há inteiros p e q, q ≠ 0, com p/q = √2. O decimal 0,999…, com infinitos noves, não é “quase 1”. Se x = 0,999…, então 10x − x = 9 e x = 1. Entre 0,999… e 1 não sobra lugar na reta real.",
  ],
  examples: [
    {
      title: "Por que (x² − 1)/(x − 1) não é x + 1 em toda a reta",
      steps: [
        "x² − 1 = (x − 1)(x + 1). Isso é diferença de quadrados, e vale para todo x.",
        "Dividir por (x − 1) só faz sentido quando esse fator não é zero, isto é, x ≠ 1.",
        "Fora desse ponto, cancelar deixa x + 1. Em x = 1 a expressão original nem existe.",
        "Simplificar é legítimo. Apagar a restrição, não. A igualdade simplificada vale em ℝ menos {1}.",
      ],
    },
    {
      title: "(2/3 − 1/4) ÷ (5/6)",
      steps: [
        "O parêntese primeiro. Denominador comum de 3 e 4: 12. 2/3 = 8/12 e 1/4 = 3/12.",
        "8/12 − 3/12 = 5/12.",
        "Dividir por 5/6 é multiplicar por 6/5: (5/12) × (6/5) = 1/2.",
        "A ordem importa. Dividir 5/6 pela diferença, em vez do contrário, responde outra pergunta.",
      ],
    },
  ],
  application: [
    "A bordo, conjunto é lista de estados permitidos. O conjunto dos calados em que o navio pode sair, o conjunto dos tanques que ainda recebem lastro, a interseção entre “tem espaço” e “o peso não estoura o limite”. União sem olhar a interseção conta duas vezes o mesmo tanque.",
    "Fração e decimal aparecem na mistura de combustível, na fração de um tanque, na conversão de uma leitura de 250 g para 0,25 kg numa amostra de laboratório, e na parte de uma carga que cabe num porão. Errar o denominador comum é errar uma quantidade real, não um exercício.",
    "A restrição de domínio aparece sempre que uma conta divide por uma leitura. Vazão sobre uma diferença de pressão, consumo por hora, razão entre duas sondas. Se o denominador pode zerar, a fórmula não está definida naquele ponto, e o procedimento tem de dizer o que fazer em vez de “simplificar e seguir”.",
  ],
  traps: [
    "Tratar (a + b)² como a² + b², ou somar frações pelo numerador e pelo denominador ao mesmo tempo. 1/2 + 1/2 não é 2/4.",
    "Cancelar (x − 1) em (x² − 1)/(x − 1) e entregar x + 1 para todo real, inclusive x = 1.",
    "Confundir caminho com deslocamento também na álgebra dos conjuntos: |A ∪ B| não é |A| + |B| quando a interseção não é vazia.",
    "Achar que 0,999… é menor que 1, ou que √4/9 é √4 / 9 em vez de 2/3. A raiz alcança o numerador e o denominador.",
    "Multiplicar negativos “porque negativo com negativo dá positivo” sem saber se a operação é multiplicação. Na soma, (−3) + (−4) continua −7.",
    "Contar subconjuntos e esquecer o vazio, ou contar pares ordenados quando o enunciado pede subconjunto. C(4, 2) = 6, enquanto A(4, 2) = 12.",
  ],
  bibliography: [
    {
      book: "Gelson Iezzi e outros. Fundamentos de Matemática Elementar, vol. 1.",
      place: "Capítulos de conjuntos, conjuntos numéricos e funções do 1º grau, na parte inicial de conjuntos numéricos e operações.",
      note: "É a referência de base. Leia a definição de conjunto e a construção de ℕ, ℤ e ℚ antes de decorar símbolo.",
    },
    {
      book: "Iezzi, Dolce, Degenszajn, Périgo e Almeida. Matemática: Ciência e Aplicações, vol. 1.",
      place: "Capítulos iniciais de conjuntos numéricos, frações e operações.",
      note: "Use junto com o FME. A Ciência e Aplicações traz mais exercício de fixação no mesmo chão.",
    },
    {
      book: "Elon Lages Lima e outros. A Matemática do Ensino Médio, vol. 1. SBM.",
      place: "Capítulo de conjuntos e números reais.",
      note: "É o aprofundamento. A linguagem é mais seca e não substitui o FME na primeira leitura. Serve para entender por que 0,999… = 1 e por que √2 não é racional.",
    },
  ],
};
