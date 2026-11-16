import type { Didactic } from "./types.ts";

export const didactic: Didactic = {
  origin: [
    "O logaritmo nasceu na navegação. No fim do século XVI, multiplicar senos de ângulos para achar posição no mar era lento e fácil de errar. John Napier construiu uma tabela em que o produto de dois números virava a soma de dois outros. Somar é mais seguro que multiplicar quando a conta é longa e o convés balança. O logaritmo é esse expoente guardado numa tabela.",
    "A definição é a frase inversa da exponencial. log_a b = c significa aᶜ = b. Não há uma operação nova. Há um nome para o expoente que já resolve a equação aᶜ = b. Por isso as propriedades do logaritmo são as propriedades da potência lidas de trás para a frente.",
    "A base carrega as mesmas restrições da exponencial: a > 0 e a ≠ 1. O argumento b tem de ser positivo, porque aᶜ, com a positivo, nunca é zero nem negativo. log_a (−3) não existe nos reais. Não é um detalhe de domínio para o fim do exercício. É a definição.",
  ],
  construction: [
    "log_a (aᶜ) = c e a^(log_a b) = b, quando as expressões existem. São a função e a inversa desfazendo uma à outra. Daí saem os valores de memória: log_a a = 1, log_a 1 = 0, log_a (aⁿ) = n.",
    "Produto vira soma porque aᶜ aᵈ = aᶜ⁺ᵈ. Se b = aᶜ e d no expoente é log_a de outro fator, log_a (xy) = log_a x + log_a y, com x > 0 e y > 0. Quociente vira diferença. Potência sai para a frente: log_a (xᵏ) = k log_a x. Nada disso vale para log_a (x + y). Soma dentro do argumento não tem identidade.",
    "Mudança de base: log_a b = log_c b / log_c a. O motivo é escrever b = aᵏ, aplicar log_c nos dois lados e isolar k. log₄ 8 = log₂ 8 / log₂ 4 = 3/2. A conta fecha porque 4^(3/2) = 8.",
    "A função log_a , no domínio (0, +∞), cresce se a > 1 e decresce se 0 < a < 1. Numa inequação, o sinal entre os argumentos acompanha o crescimento. Se a base está entre 0 e 1, o sinal vira. O domínio x > 0, ou o que o argumento exigir, corta a resposta depois da conta, não antes de esquecer.",
    "Equação com soma de logs: junte primeiro, e só então volte à exponencial. log₂ (x − 1) + log₂ (x + 1) = 3 exige x > 1. O produto dos argumentos vale 8, e x² − 1 = 8. Das raízes 3 e −3, só 3 respeita x > 1. Conferir no enunciado original pega o sinal e o domínio de uma vez.",
    "Quando as bases diferem, uma delas muda. log₂ x + log₄ x = 3 usa log₄ x = (1/2) log₂ x. A equação fica em um único logaritmo e uma única incógnita.",
  ],
  examples: [
    {
      title: "log₂ (x − 1) + log₂ (x + 1) = 3",
      steps: [
        "Domínio: x − 1 > 0 e x + 1 > 0, logo x > 1.",
        "A soma é log₂ (x² − 1) = 3, então x² − 1 = 8 e x² = 9.",
        "x = 3 ou x = −3. Só x = 3 está em x > 1.",
        "Confira: log₂ 2 + log₂ 4 = 1 + 2 = 3.",
      ],
    },
    {
      title: "log_(1/2) x > −2",
      steps: [
        "Argumento positivo: x > 0.",
        "−2 = log_(1/2) 4, porque (1/2)⁻² = 4.",
        "A base está entre 0 e 1, a função decresce e a desigualdade vira: x < 4.",
        "A interseção é 0 < x < 4.",
      ],
    },
  ],
  application: [
    "A tabela de logaritmos e a régua de cálculo foram instrumento de navegação astronômica durante séculos. O seno de um ângulo, multiplicado por uma distância, virava soma de logs. A calculadora aposentou a tabela, não a ideia: quando um manual ainda fala em “três ordens de grandeza”, está dizendo que o log₁₀ do quociente é 3, isto é, o fator é 1.000.",
    "Concentração, intensidade sonora e pH são logaritmos porque a grandeza física varia por fatores, não por parcelas. log₁₀ (C/C₀) = 3 significa C = 1.000 C₀. Ler o 3 como se fosse o próprio quociente erra mil vezes.",
    "Numa carta ou num cálculo de consumo que envolve produto de vários fatores, separar o logaritmo da soma é o mesmo gesto de Napier. O erro log(a + b) = log a + log b destrói essa separação e não tem o que conferir no fim, porque a conta já saiu do modelo.",
  ],
  traps: [
    "log(a + b) no lugar de log a + log b, ou o inverso.",
    "Aceitar argumento negativo ou zero.",
    "Esquecer a raiz que nasce ao exponenciar e que o domínio mata, como x = −3.",
    "Não inverter a inequação quando a base está entre 0 e 1.",
    "Trocar log_a b com log_b a. log₃ 9 = 2 e log₉ 3 = 1/2.",
    "Mudar de base e inverter o quociente: log_a b = log_c b / log_c a, não o contrário.",
  ],
  bibliography: [
    {
      book: "Gelson Iezzi e outros. Fundamentos de Matemática Elementar, vol. 2.",
      place: "Capítulos de logaritmo, equações logarítmicas e inequações logarítmicas.",
      note: "Referência desta aula. Faça a definição aᶜ = b antes da lista de propriedades. O livro dedica o volume inteiro a isso.",
    },
    {
      book: "Matemática: Ciência e Aplicações, vol. 1.",
      place: "Capítulo de função logarítmica.",
      note: "Mais exercício de equação com domínio, depois do FME.",
    },
    {
      book: "Elon Lages Lima e outros. A Matemática do Ensino Médio, vol. 1. SBM.",
      place: "Capítulo de logaritmo, junto com a exponencial.",
      note: "Mostra o logaritmo como inversa e a mudança de base como consequência, sem tratar a fórmula como axioma.",
    },
  ],
};
