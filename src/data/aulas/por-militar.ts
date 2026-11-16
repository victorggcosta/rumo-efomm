import type { Didactic } from "./types.ts";

export const didactic: Didactic = {
  origin: [
    "A prova militar de português cobra a norma escrita, não o jeito mais comum de falar. Chegar no porto se ouve todo dia. A banca pede chegamos ao porto. Assistir o filme também se ouve. No sentido de ver, a regência pedida é assistir ao filme. Saber a regra é saber o que a prova marca, e saber onde a fala se afastou dela.",
    "Crase não é um acento de enfeite. É a fusão de duas vogais iguais: a preposição a com o artigo a, ou com o a inicial de um pronome demonstrativo, como aquele. Se um dos dois aa falta, não há crase. Por isso não existe crase diante de palavra masculina, nem diante de verbo.",
    "Sintaxe é o nome da função. O mesmo que pode ser sujeito numa oração e objeto direto na outra. Concordância é o verbo ou o adjetivo seguindo o termo com o qual se liga. Regência é a preposição, ou a falta dela, que o verbo exige.",
  ],
  construction: [
    "Crase só quando há preposição a e artigo feminino a. Entregar algo a alguém pede preposição. A diretora aceita artigo. Entregue à diretora. O capitão é masculino: refere-se ao capitão, com a + o, sem crase.",
    "Não há crase antes de infinitivo: começou a revisar. Não há crase em a fim de, porque fim é masculino e o a é só preposição. Afim, junto, é outra palavra, a da afinidade. Há crase nas horas determinadas: às 4 horas, à uma hora. Há quatro horas, com h, é o verbo haver e marca tempo decorrido, não o relógio.",
    "Lugar: a crase depende do artigo. Bahia aceita artigo, moro na Bahia, volto da Bahia, então volto à Bahia. Recife, na norma tradicional, não aceita artigo: moro em Recife, volto de Recife, então vou a Recife. O teste é trocar por um nome masculino. Se der ao ou no, no feminino correspondente pode haver crase. Se der a ou em, sem artigo, não há.",
    "Regência de prova. Chegar, ir e comparecer pedem a: chegamos ao porto. Assistir, no sentido de ver, pede a: assistiram à manobra. Assistir, no sentido de ajudar, é direto: o médico assiste o doente. Preferir pede a, não do que: prefiro o turno da manhã ao da noite. Visar, no sentido de objetivar, pede a: visa à promoção. Visar um documento, no sentido de examinar, é direto.",
    "Faz, para tempo decorrido, é impessoal e fica no singular: faz três dias. Há, para existir, também: há vários defeitos. Houveram vários defeitos é a forma que a banca recusa. Haver como auxiliar de tempo composto é outro caso e quase não aparece na prova.",
    "Sujeito no plural puxa o verbo: os relatórios da seção foram arquivados. Da seção é adjunto, não sujeito. Com se apassivador, o que parece objeto é o sujeito: vendem-se embarcações. Vende-se embarcações deixa o verbo surdo ao plural.",
    "A maioria, sozinha, pede singular. A maioria dos oficiais pode levar o verbo ao singular, concordando com maioria, ou ao plural, concordando com oficiais. As duas estão na norma. A pegadinha é tratar uma delas como único certo.",
    "Cujo indica posse e concorda com a coisa possuída, que vem depois: o navio cujo casco foi inspecionado. Casco masculino, cujo. Âncora feminina, cuja. Não se escreve cujo o, nem cujo a. O artigo depois é que está sobrando.",
    "Função do que. Em os relatórios que o imediato revisou, o imediato é quem revisa e o que retoma os relatórios como objeto direto. Em o imediato que revisou os relatórios, o que é o sujeito de revisou. A função se decide dentro da oração do que, não pela oração principal.",
    "Objeto direto é o complemento sem preposição obrigatória: entregou a carta. Objeto indireto vem com preposição: ao comandante. Sujeito é quem pratica: o prático. Durante a manobra é adjunto adverbial. Agente da passiva leva por: a carta foi entregue pelo prático.",
  ],
  examples: [
    {
      title: "À Bahia, a Recife",
      steps: [
        "Bahia aceita artigo: volto da Bahia. Logo, voltaremos à Bahia.",
        "Recife não aceita artigo na norma tradicional: volto de Recife. Logo, iremos a Recife.",
        "O teste do masculino confirma. Volto ao Rio, com artigo, corresponde a voltar à Bahia. Vou a Recife corresponde a vou a Fortaleza, sem artigo.",
      ],
    },
    {
      title: "Dois «que» diferentes",
      steps: [
        "Os relatórios que o imediato revisou: quem revisou foi o imediato. O que é objeto direto.",
        "O imediato que revisou os relatórios: quem revisou é o que. O que é sujeito.",
        "Os relatórios, nas duas frases, muda de lugar sintático. A palavra que não tem função fixa.",
      ],
    },
  ],
  application: [
    "Ordem interna e relatório usam o mesmo português da prova. Entregar o aviso à diretora, referir-se ao capitão, começar às 4 horas. O acento errado muda a regência que o avaliador está contando.",
    "Numa descrição de manobra, o prático entregou a carta ao comandante separa três funções numa frase só. Quem erra o objeto indireto costuma chamar todo complemento de objeto direto.",
    "Escala e efetivo: a maioria dos oficiais chegou, ou chegaram, as duas podem estar certas. Faz três dias que o navio fundeou fica no singular. São contas diferentes, e a prova põe as duas na mesma questão para ver se a regra foi trocada.",
  ],
  traps: [
    "Crase antes de masculino, de verbo ou de a fim de.",
    "Há no lugar de às, ou às no lugar de tempo decorrido.",
    "Chegar em e assistir sem preposição, no sentido de ver, como se a fala valesse na prova.",
    "Preferir do que, e mais prefiro.",
    "Vende-se com sujeito plural.",
    "Cujo o, com artigo no meio.",
    "Marcar só o singular, ou só o plural, com a maioria dos.",
    "Dar ao que uma função só, sem olhar o verbo da oração dele.",
  ],
  bibliography: [
    {
      book: "Fernando Pestana. A Gramática para Concursos Públicos.",
      place: "Capítulos de crase, regência verbal, concordância e análise sintática.",
      note: "O livro alinhado ao que a banca militar cobra. Faça crase pelo teste da troca por um masculino antes de decorar a lista de locuções.",
    },
    {
      book: "Evanildo Bechara. Moderna Gramática Portuguesa.",
      place: "Capítulos de crase, regência e concordância.",
      note: "A norma que sustenta o caso de a maioria dos, em que as duas concordâncias cabem. Use quando a questão parecer ter duas respostas e for preciso saber se a norma aceita as duas.",
    },
    {
      book: "Celso Cunha e Lindley Cintra. Nova Gramática do Português Contemporâneo.",
      place: "Capítulos de sintaxe: termos da oração, pronome relativo e concordância.",
      note: "Para a função do que e para cujo. Leia um período e pergunte, de cada verbo, quem pratica e o que completa.",
    },
  ],
};
