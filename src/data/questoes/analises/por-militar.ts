import type { AnaliseQuestao } from "../../lessons.ts";

export const ANALISES: Record<string, AnaliseQuestao> = {
  "por-ml-n1q1": {
    intuicao:
      "A frase diz que uma mensagem chegou às mãos de uma pessoa, a diretora do centro. O verbo entregar, nesse sentido de fazer algo chegar a alguém, pede a preposição 'a' antes do destinatário. 'Diretora' é substantivo feminino e, nesta frase, vem com artigo definido. A lacuna é o ponto em que a preposição e o artigo se encontram.",
    motivacao:
      "Crase é a fusão da preposição 'a' com o artigo 'a', e os dois precisam estar presentes ao mesmo tempo. A banca separa os pedaços: só o artigo, só o verbo 'há', o plural 'às' e a preposição 'em' contraída em 'na'. 'Há' parece acento de crase para quem mistura som com grafia. 'Às' seria feminino plural, e 'diretora' está no singular.",
    passos: [
      "Regência de entregar: no sentido de fazer chegar a alguém, o verbo pede a preposição 'a' antes do destinatário.",
      "Artigo feminino singular: 'diretora' aceita 'a diretora', e esse 'a' é artigo, diferente da preposição.",
      "Crase diante de palavra feminina: preposição 'a' mais artigo 'a' fundem-se em 'à', então a frase fica 'entregue à diretora'.",
      "Distratores de grafia: 'há' é verbo haver, 'às' é crase de plural e 'na' troca a preposição para 'em'. A lacuna fica 'à'.",
    ],
    atalho:
      "Troque 'diretora' por 'diretor'. A frase vira 'entregue ao diretor', e o 'ao' prova que havia preposição mais artigo. No feminino, esse mesmo par se escreve 'à'. Se a troca por um masculino não produzir 'ao', não há crase.",
  },
  "por-ml-n1q2": {
    intuicao:
      "A frase diz sobre o que o aviso trata, e o complemento é o capitão de serviço. 'Referir-se' liga o aviso a essa pessoa por meio da preposição 'a'. 'Capitão' é masculino e aceita o artigo 'o'. A lacuna mostra a contração dessa preposição com esse artigo masculino, sem acento de crase.",
    motivacao:
      "Crase só existe quando há dois 'aa', preposição mais artigo feminino. Diante de masculino, a preposição 'a' se junta ao artigo 'o' e forma 'ao', sem acento. A banca escreve 'à' para ver se o acento foi posto só porque a frase 'pede a'. 'Às' ainda pluraliza, 'há' troca pela verbo haver e 'na' troca a regência de 'referir-se'.",
    passos: [
      "Regência de referir-se: o verbo pede a preposição 'a', como em 'referir-se a alguém'.",
      "Artigo masculino: 'capitão' aceita 'o capitão', e a preposição 'a' mais o artigo 'o' formam 'ao'.",
      "Ausência de crase: não há artigo feminino para fundir, então 'à capitão' acentua uma fusão que não existe.",
      "Frase completa: 'o aviso se refere ao capitão de serviço'. 'Há' e 'na' trocam a classe ou a preposição. A lacuna fica 'ao'.",
    ],
    atalho:
      "O teste do masculino é o próprio enunciado. Se a palavra aceita 'o' e o verbo pede 'a', o resultado é 'ao', nunca 'à'. Plural seria 'aos capitães', e a frase está no singular 'capitão de serviço'.",
  },
  "por-ml-n1q3": {
    intuicao:
      "O período afirma que um grupo chegou, e situa essa chegada na maré. O verbo 'chegaram' pede um responsável: quem chegou. Esse responsável está nomeado no início, 'os práticos', e o restante da frase diz a circunstância. A pergunta é qual termo da oração exerce o papel gramatical de sujeito.",
    motivacao:
      "Sujeito é o termo sobre o qual o verbo declara algo, e a pergunta útil é 'quem chegou?'. A banca oferece o próprio verbo, o adjunto 'com a maré' e o núcleo interno desse adjunto, 'a maré'. Circunstância responde 'quando' ou 'em que condição', não 'quem'. Chamar o período inteiro de sujeito mistura a frase com um dos termos dela.",
    passos: [
      "Pergunta do sujeito: diante de 'chegaram', a pergunta 'quem chegou?' tem como resposta 'os práticos'.",
      "Núcleo do sujeito: o núcleo é o substantivo 'práticos', com o artigo 'os', e o verbo no plural concorda com esse núcleo.",
      "Verbo fora do sujeito: 'chegaram' é o predicado verbal, o termo que declara a chegada, e não é o sujeito.",
      "Adjunto adverbial: 'com a maré' indica a circunstância da chegada, e 'a maré' fica dentro desse adjunto. O sujeito é 'Os práticos'.",
    ],
    atalho:
      "Apague 'com a maré' e o período ainda diz quem fez o quê: 'os práticos chegaram'. Apague 'os práticos' e 'chegaram' fica sem dono. O termo que a frase não pode perder, se a pergunta é quem chegou, é o sujeito.",
  },
  "por-ml-n1q4": {
    intuicao:
      "A frase mede quanto tempo se passou desde que o navio fundeou. 'Três dias' é a quantidade de tempo, não alguém que pratica a ação de fazer. O verbo que indica tempo decorrido, nesta construção, não tem sujeito. A lacuna é a forma singular ou plural dessa indicação de tempo decorrido.",
    motivacao:
      "Quando 'fazer' indica tempo decorrido, é impessoal e fica na terceira pessoa do singular: 'faz três dias', 'faz dois anos'. A banca trata 'três dias' como sujeito e oferece 'fazem' e 'fazem-se', a concordância que a construção recusa. 'Houveram' repete o mesmo erro no verbo haver, e 'são' converteria os dias em predicativo de um sujeito que a frase não tem.",
    passos: [
      "Verbo impessoal de tempo: 'fazer', no sentido de tempo decorrido, não tem sujeito e não se flexiona no plural.",
      "Terceira pessoa do singular: a forma cobrada é 'faz três dias que o navio fundeou'.",
      "Falsa concordância: 'fazem' trataria 'três dias' como sujeito, e nessa construção os dias são a medida do tempo, não o sujeito.",
      "Haver no mesmo papel: tempo decorrido com haver também fica no singular, 'houve', e 'houveram' é a flexão recusada. A lacuna fica 'Faz'.",
    ],
    atalho:
      "Troque 'três dias' por 'muito tempo'. A frase natural é 'faz muito tempo que o navio fundeou', sempre no singular. Se o plural só aparece quando o numeral é plural, a concordância está seguindo a medida, não um sujeito. A forma estável é 'faz'.",
  },
  "por-ml-n1q5": {
    intuicao:
      "A frase diz que existem vários defeitos no relatório. Quem existe são os defeitos, mas o verbo escolhido para dizer isso é 'haver', no sentido de existir. Nessa acepção, o verbo não recebe o plural do termo que acompanha. A lacuna é a forma impessoal desse verbo, no presente do indicativo.",
    motivacao:
      "'Haver' com sentido de existir é impessoal e fica no singular mesmo com complemento plural: 'há vários defeitos'. A banca oferece 'hão', 'houveram' e 'hão de' porque o plural 'defeitos' puxa o ouvido. 'Houveram' não vale como 'existiram' na norma de prova. 'A' sozinho é preposição, e 'hão de' exigiria um infinitivo, como 'hão de aparecer'.",
    passos: [
      "Haver no sentido de existir: o verbo é impessoal, sem sujeito, e o termo 'vários defeitos' não comanda o plural.",
      "Singular obrigatório: a forma de presente é 'há vários defeitos no relatório'.",
      "Flexão recusada: 'houveram' e 'hão' tratam o verbo como pessoal no plural, leitura que a norma da prova não aceita nesse sentido.",
      "Outra estrutura: 'hão de' é haver auxiliar e pediria infinitivo, e 'a' não é verbo. A lacuna fica 'Há'.",
    ],
    atalho:
      "Substitua 'há' por 'existem' e o plural aparece: 'existem vários defeitos'. Volte para 'haver' e o plural some: 'há vários defeitos'. Se a troca por 'existir' mudou o número, a frase original estava com o verbo impessoal certo.",
  },
  "por-ml-n1q6": {
    intuicao:
      "A frase diz o que aconteceu com os relatórios da seção no dia de ontem: eles foram para o arquivo. O núcleo de quem sofreu essa ação é 'relatórios', no plural. 'Da seção' apenas restringe quais relatórios são esses. 'Ontem' coloca o fato num passado já fechado, e o verbo precisa concordar com o núcleo plural nesse tempo.",
    motivacao:
      "O verbo concorda com o núcleo do sujeito, não com o adjunto adnominal. A banca aproxima 'seção', singular, do verbo, para induzir 'foi' ou 'era'. 'É' ainda ignora 'ontem', e 'somos' troca a pessoa para a primeira do plural, que não está na frase. O particípio 'arquivados' já está no plural e combina com 'foram'.",
    passos: [
      "Concordância verbal com o núcleo: o sujeito é 'os relatórios', núcleo plural, então o verbo vai ao plural.",
      "Adjunto adnominal: 'da seção' restringe o substantivo e não se torna sujeito, por isso não puxa o verbo para o singular.",
      "Tempo do advérbio: 'ontem' pede pretérito, e a passiva de 'arquivar' no plural fica 'foram arquivados'.",
      "Formas de singular e de pessoa: 'foi', 'era' e 'é' não concordam com 'relatórios', e 'somos' muda a pessoa. A lacuna fica 'foram'.",
    ],
    atalho:
      "Corte 'da seção' e leia 'os relatórios foram arquivados ontem'. A concordância fica óbvia. Se o corte do adjunto não muda o verbo, 'seção' nunca foi o sujeito. 'Foi arquivado' só voltaria com 'o relatório', no singular.",
  },
  "por-ml-n2q1": {
    intuicao:
      "A frase marca a hora em que o quarto da madrugada começa, quatro horas certas. É uma hora determinada no relógio, não a duração de algo que já dura quatro horas. Começar, nesse anúncio de horário, pede a preposição 'a' antes da hora. As horas, no feminino plural, trazem o artigo 'as'.",
    motivacao:
      "Hora determinada se escreve com crase: a preposição 'a' mais o artigo das horas. No plural, 'às 4 horas'. A banca mistura isso com tempo decorrido, 'há 4 horas', que responderia 'faz quanto tempo'. 'As' seria só artigo, 'a' seria só preposição, e 'à' seria o singular de 'à uma hora', não de quatro horas.",
    passos: [
      "Crase na hora determinada: 'começar a' uma hora marcada junta a preposição 'a' ao artigo que acompanha as horas.",
      "Artigo plural: '4 horas' pede 'as horas', então a fusão é 'às 4 horas'.",
      "Singular diferente: 'à uma hora' existe porque o artigo fica no singular, e o enunciado está no plural 'horas'.",
      "Há de tempo decorrido: 'há 4 horas' mediria duração já passada, e a frase marca o início do quarto. A lacuna fica 'às'.",
    ],
    atalho:
      "Pergunte se a frase responde 'a que horas?' ou 'há quanto tempo?'. 'A que horas começa o quarto?' pede 'às 4 horas'. 'Há quanto tempo o navio fundeou?' pediria 'há'. A pergunta do relógio seleciona a crase.",
  },
  "por-ml-n2q2": {
    intuicao:
      "A frase diz que a equipe deu início a uma ação, revisar a carta. 'Revisar' está no infinitivo, forma verbal, e verbo não é acompanhado de artigo. 'Começar' liga-se a esse infinitivo pela preposição 'a', sozinha. A lacuna é somente essa preposição sozinha, sem fusão com artigo definido.",
    motivacao:
      "Não há crase antes de verbo no infinitivo, porque falta o artigo, um dos dois 'aa' da crase. A banca escreve 'à revisar' para quem acentua toda sequência de 'a' mais palavra. 'Às' pluraliza sem nome feminino, 'há' é verbo e 'na' troca a preposição. A mesma ausência de crase vale para 'disposto a colaborar' e 'passou a estudar'.",
    passos: [
      "Preposição antes de infinitivo: 'começou a revisar' liga o verbo principal ao infinitivo só com 'a'.",
      "Verbo sem artigo: 'revisar' não aceita 'a revisar' como artigo mais verbo, então não existe o segundo 'a' da crase.",
      "Crase incompleta: 'à revisar' poria acento numa fusão que não tem artigo, e a grafia fica sem crase.",
      "Trocas de classe: 'há' é haver, e 'na' é 'em' mais artigo. A lacuna fica 'a'.",
    ],
    atalho:
      "Tente pôr 'a' artigo antes do infinitivo, como se faz antes de 'diretora'. 'A revisar' como artigo não existe em português. Sem esse artigo, a crase não fecha, e a frase permanece 'começou a revisar'.",
  },
  "por-ml-n2q3": {
    intuicao:
      "A frase dá a finalidade do estudo: a pessoa estudou com o propósito de passar na prova militar. A locução clássica que introduz a finalidade, neste enunciado, é 'a fim de'. 'Fim' é substantivo masculino, e o 'a' que o antecede é apenas preposição. A lacuna não funde artigo feminino.",
    motivacao:
      "Sem artigo feminino não há crase, e 'fim' não aceita 'a fim' com artigo feminino nessa locução. A grafia 'à fim de' é o acento posto por hábito. 'Afim', numa palavra só, é outra classe e outro sentido, o de afinidade. 'Ao fim de' existe, mas marca encerramento, como 'ao fim de dois anos', não o propósito de passar na prova.",
    passos: [
      "Locução de finalidade: 'a fim de' introduz o propósito, e a frase diz para que a pessoa estudou.",
      "Fim masculino: o substantivo 'fim' não traz artigo feminino, então a preposição 'a' permanece sem crase.",
      "Palavra diferente: 'afim', junto, significa afinidade, e não é a locução de dois termos desta frase.",
      "Outra locução: 'ao fim de' indicaria o termo de um período, não a meta da prova. A lacuna fica 'a'.",
    ],
    atalho:
      "Troque a locução por 'com o propósito de'. O sentido de passar na prova se mantém, e não aparece acento. Se a frase falasse do encerramento de um prazo, 'ao fim de' caberia, e o enunciado fala da meta, não do prazo que acaba.",
  },
  "por-ml-n2q4": {
    intuicao:
      "A frase diz o lugar a que o grupo chegou, o porto, e a hora, o meio-dia. 'Chegar', na norma tradicional cobrada em prova, aponta o destino com a preposição 'a', não com 'em'. 'Porto' é masculino e aceita o artigo 'o'. A alternativa correta é a que junta essa preposição a esse artigo e deixa a hora como está.",
    motivacao:
      "Verbos de destino, como chegar, ir e comparecer, regem 'a' na norma de prova. 'Chegamos no porto' é comum na fala e é exatamente o desvio que a banca marca. 'À porto' põe crase em masculino, 'em o porto' deixa a contração por fazer e ainda usa 'em', e 'na porto' mistura a preposição 'em' com palavra masculina, que pediria 'no' se essa fosse a regência.",
    passos: [
      "Regência de chegar: na norma tradicional da prova, o destino pede a preposição 'a', em 'chegamos a' mais o lugar.",
      "Contração com artigo masculino: 'porto' aceita 'o', então 'a' mais 'o' forma 'ao porto'.",
      "Crase indevida: 'à porto' acentua masculino, onde não há artigo feminino.",
      "Preposição 'em': 'no porto', 'em o porto' e 'na porto' trocam a regência ou a concordância de gênero. A frase correta é 'Chegamos ao porto ao meio-dia'.",
    ],
    atalho:
      "Separe o que a fala aceita do que a prova pede. Na conversa, 'chegar no porto' aparece, e o enunciado avisa que a norma cobrada é a da preposição 'a'. O masculino 'porto' escreve essa regência como 'ao'. A hora 'ao meio-dia' já está certa em todas as opções e não decide o item.",
  },
  "por-ml-n2q5": {
    intuicao:
      "A frase diz que os alunos viram a manobra do começo ao fim. 'Assistir', nesse sentido de presenciar, não toma o espetáculo como objeto direto: liga-se a ele pela preposição 'a'. 'Manobra' é feminino e, com 'completa', vem determinada, aceitando o artigo 'a'. Preposição e artigo se encontram na lacuna.",
    motivacao:
      "Regência e crase andam juntas aqui. 'Assistiram a manobra', sem crase, deixa faltar o artigo que o nome feminino determinado pede. 'Na' troca 'a' por 'em', 'o' e 'as' erram o gênero ou o número e ainda dispensam a preposição. Outro sentido do verbo, assistir alguém como ajudar, é objeto direto e não é o sentido de ver a manobra.",
    passos: [
      "Regência de assistir no sentido de ver: o verbo pede a preposição 'a', e a manobra não é objeto direto.",
      "Artigo feminino: 'manobra completa' aceita 'a manobra', determinado pelo adjetivo e pelo contexto.",
      "Crase: preposição 'a' mais artigo 'a' formam 'à', em 'assistiram à manobra completa'.",
      "Sentido diferente: assistir o doente, sem preposição, significa ajudar, e ver a manobra não é esse uso. A lacuna fica 'à'.",
    ],
    atalho:
      "Troque 'manobra' por 'treino'. Se 'treino' é masculino, a frase vira 'assistiram ao treino', prova de preposição mais artigo. No feminino o mesmo par se escreve 'à'. 'Assistiram o doente' só volta quando o verbo significa prestar auxílio.",
  },
  "por-ml-n2q6": {
    intuicao:
      "A frase anuncia que embarcações usadas neste cais do porto estão à venda. A partícula 'se' constrói a passiva, e o que parece objeto é, na verdade, o sujeito paciente. 'Embarcações' está no plural e é quem recebe a ação de vender. O verbo precisa concordar com esse sujeito plural.",
    motivacao:
      "Na passiva pronominal, o verbo concorda com o sujeito paciente: 'vendem-se embarcações', como se diria 'embarcações são vendidas'. A banca deixa o verbo no singular, 'vende-se embarcações', que é o erro clássico de tratar o 'se' como partícula que congela o singular. 'Vendem' sem 'se' desmonta a passiva, 'é vendido' volta ao singular e ao masculino, e 'há vendem' junta dois verbos sem construção.",
    passos: [
      "Passiva pronominal: o 'se' apassivador faz de 'embarcações' o sujeito paciente da venda.",
      "Concordância com o sujeito: 'embarcações' é feminino plural, então o verbo vai ao plural, 'vendem-se'.",
      "Prova pela analítica: 'embarcações são vendidas' mostra o mesmo plural que 'vendem-se embarcações' condensa.",
      "Singular indevido: 'vende-se embarcações' deixa verbo singular com sujeito plural. A forma correta é 'Vendem-se'.",
    ],
    atalho:
      "Passe para a passiva com 'ser': o que era 'vende-se casa' vira 'a casa é vendida', e o que era plural vira 'as embarcações são vendidas'. Se a analítica pede plural, a sintética também pede. 'Vende-se' só sobreviveria com um sujeito singular, como 'vende-se uma embarcação'.",
  },
  "por-ml-n2q7": {
    intuicao:
      "A frase compara dois turnos e diz qual deles a pessoa prefere, o da manhã em relação ao da noite. 'Preferir' liga o termo preterido pela preposição 'a', não pelo 'do que' das comparações com 'melhor' ou 'maior'. 'Turno' é masculino, e 'o da noite' retoma esse nome. A regência certa produz a contração 'ao'.",
    motivacao:
      "A estrutura de prova é 'preferir uma coisa a outra'. 'Do que' e o 'mais' reforçado copiam o modelo de 'gosto mais disto do que daquilo', que 'preferir' não segue. 'Que' sozinho omite a preposição. 'À o da noite' acumula crase e artigo, como se a fusão ainda precisasse de outro 'o', e a crase já é a fusão pronta, que aqui nem cabe porque o nome é masculino.",
    passos: [
      "Regência de preferir: o verbo pede 'a', na estrutura 'preferir X a Y', e Y é o turno da noite.",
      "Retomada masculina: 'o da noite' retoma 'turno', então a preposição 'a' mais o artigo 'o' formam 'ao da noite'.",
      "Modelo que não se aplica: 'do que' e 'prefiro mais' pertencem à comparação com 'melhor', não à regência de 'preferir'.",
      "Crase acumulada: 'à o' escreve acento e artigo lado a lado, grafia inexistente. A frase correta é 'Prefiro o turno da manhã ao da noite'.",
    ],
    atalho:
      "Tire o 'mais' e o 'do que' e ponha 'a' no meio: 'prefiro isto àquilo' é o molde. Com 'turno', masculino, 'àquilo' vira 'ao da noite'. Se a frase continuar com 'do que', ela ainda está no modelo de 'maior do que', não no de 'preferir'.",
  },
  "por-ml-n3q1": {
    intuicao:
      "A frase anuncia duas idas, primeiro à Bahia e depois a Recife. Os dois verbos, voltar e ir, pedem a preposição 'a' de destino. A diferença está no nome do lugar: um aceita artigo feminino, o outro, na norma tradicional, não aceita artigo. A crase só aparece onde o artigo feminino realmente está.",
    motivacao:
      "A crase diante de lugar não é enfeite de nome geográfico: depende de o nome aceitar artigo. Bahia aceita, como mostram 'moro na Bahia' e 'volto da Bahia', então 'volto à Bahia'. Recife, na norma tradicional, não aceita, como mostram 'moro em Recife' e 'volto de Recife', então 'iremos a Recife'. A banca iguala os dois nomes ou troca os artigos de lugar.",
    passos: [
      "Teste do artigo em lugar: se o nome aceita 'na' e 'da', aceita artigo feminino e a volta se escreve com crase.",
      "Bahia com artigo: 'na Bahia' e 'da Bahia' confirmam o artigo, e 'voltaremos à Bahia' funde a preposição 'a' com esse artigo.",
      "Recife sem artigo: 'em Recife' e 'de Recife', não 'na Recife' nem 'da Recife', então 'iremos a Recife' leva só a preposição.",
      "Combinação das duas lacunas: a primeira fica 'à' e a segunda fica 'a'. 'À Recife' poria artigo num nome que não o leva.",
    ],
    atalho:
      "Faça o teste da vinda: 'venho da Bahia' conserva o artigo, 'venho de Recife' não conserva. Onde apareceu 'da', a ida correspondente leva crase. Onde apareceu só 'de', a ida leva 'a' sem acento.",
  },
  "por-ml-n3q2": {
    intuicao:
      "A frase identifica o navio por uma posse: o casco que foi inspecionado é o casco desse navio, e esse navio segue viagem. Entre 'navio' e 'casco' há relação de posse, não uma oração com verbo dentro do relativo. O pronome que cabe entre os dois substantivos é o de posse. Ele tem de concordar com a coisa possuída, que vem depois.",
    motivacao:
      "'Cujo' equivale a 'do qual' e liga possuidor a coisa possuída, concordando com a coisa: 'casco' masculino singular pede 'cujo'. A banca insere artigo, 'cujo o casco', ou troca por 'que o' e 'que seu', que não estabelecem a posse no molde exigido. 'O qual o' ainda acumula relativo e artigo sem a relação de posse pronta. Não se põe artigo entre 'cujo' e o substantivo.",
    passos: [
      "Pronome possessivo relativo: 'cujo' liga 'navio' a 'casco' com ideia de posse, o casco do navio.",
      "Concordância com o possuído: 'casco' é masculino singular, então 'cujo', e seria 'cuja' se o nome seguinte fosse 'âncora'.",
      "Sem artigo intermediário: 'cujo o casco' coloca artigo onde a relação já dispensa outro determinante.",
      "Relativos sem posse: 'que o', 'que seu' e 'o qual o' não fazem o papel de 'do qual' nesta frase. A lacuna fica 'cujo'.",
    ],
    atalho:
      "Substitua 'cujo' por 'do qual o' e veja a frase: 'o navio do qual o casco foi inspecionado'. O sentido fecha, e mesmo assim a norma prefere 'cujo casco', sem repetir o artigo. Se a substituição por 'do qual' ficar artificial, o pronome pedido não era 'cujo'.",
  },
  "por-ml-n3q3": {
    intuicao:
      "Há dois verbos e dois papéis para os relatórios. Na oração principal, os relatórios seguiram ao arquivo: eles são o sujeito de 'seguiram'. Na oração encaixada, o imediato revisou esses mesmos relatórios. O 'que' retoma 'relatórios' dentro da oração do verbo 'revisou', no lugar da coisa revisada.",
    motivacao:
      "A função do relativo é a função do termo que ele substitui na oração em que está, não na oração vizinha. A banca aponta 'seguiram' porque 'relatórios' é sujeito desse verbo, e o 'que' apenas retoma o mesmo nome. Dentro da adjetiva, a pergunta é 'o imediato revisou o quê?'. A resposta é o 'que'. Não há predicativo nem agente da passiva nessa oração.",
    passos: [
      "Oração principal: 'os relatórios seguiram ao arquivo', e o sujeito de 'seguiram' é 'os relatórios', não o pronome isolado.",
      "Oração adjetiva: 'que o imediato revisou' tem como sujeito 'o imediato', explícito antes do verbo.",
      "Objeto direto: 'revisou' pede a coisa revisada sem preposição, e o 'que' ocupa esse lugar, retomando 'relatórios'.",
      "Função no verbo certo: o 'que' não é sujeito de 'seguiram', nem adjunto, nem predicativo, nem agente da passiva. É objeto direto de 'revisou'.",
    ],
    atalho:
      "Reescreva a adjetiva como frase solta: 'o imediato revisou os relatórios'. 'Os relatórios' responde 'revisou o quê?' e por isso é objeto direto. O 'que' herda exatamente esse papel, não o papel de sujeito de 'seguiram'.",
  },
  "por-ml-n3q4": {
    intuicao:
      "De novo há dois verbos, e o 'que' muda de cadeira. Na principal, o imediato embarcou cedo, e o sujeito de 'embarcou' é 'o imediato'. Na adjetiva, alguém revisou os relatórios, e esse alguém é o mesmo imediato, retomado pelo 'que'. 'Os relatórios' agora está depois do verbo, no lugar da coisa revisada.",
    motivacao:
      "O mesmo pronome 'que' é sujeito ou objeto conforme o verbo da oração em que ele entra. A banca repete os rótulos da questão vizinha para ver se a função foi decorada. Aqui 'revisou' já tem objeto, 'os relatórios', e o lugar vazio antes do verbo é o do sujeito. 'Embarcou' tem sujeito próprio, o antecedente, e o 'que' não é predicativo nem adjunto de tempo.",
    passos: [
      "Oração principal: 'o imediato embarcou cedo', com sujeito 'o imediato', e 'cedo' é adjunto adverbial de tempo.",
      "Pergunta da adjetiva: 'quem revisou os relatórios?' tem como resposta o 'que', que retoma 'o imediato'.",
      "Sujeito do verbo da adjetiva: o 'que' é sujeito de 'revisou', e 'os relatórios' é o objeto direto já expresso.",
      "Comparação de função: na frase em que o imediato é quem revisa e os relatórios vêm antes, o 'que' vira objeto. Aqui o 'que' é sujeito de 'revisou'.",
    ],
    atalho:
      "Tire o relativo e forme a frase 'o imediato revisou os relatórios'. O nome que fica antes do verbo, no papel de quem revisa, é o sujeito. O 'que' está nesse lugar. Se 'os relatórios' já responde 'o quê?', ele não pode ser ao mesmo tempo o 'que'.",
  },
  "por-ml-n3q5": {
    intuicao:
      "Durante a manobra, uma pessoa entrega um papel a outra pessoa. Quem entrega é o prático, a coisa entregue é a carta e o destinatário é o comandante. 'Durante a manobra' só situa o momento. 'Ao comandante' vem com a preposição 'a' contraída, o sinal de que o termo completa o verbo por meio de preposição.",
    motivacao:
      "Entregar pede dois complementos: a coisa, objeto direto, e a pessoa, objeto indireto com 'a'. A banca troca esses papéis ou promove o adjunto de tempo e o agente da passiva. Agente da passiva pediria 'por' numa passiva, como 'a carta foi entregue pelo prático'. 'Ao comandante' não é sujeito, porque quem pratica 'entregou' é o prático.",
    passos: [
      "Sujeito e verbo: 'o prático' pratica 'entregou', então 'ao comandante' não é o sujeito da oração.",
      "Objeto direto: a coisa entregue, 'a carta', completa o verbo sem preposição obrigatória.",
      "Objeto indireto: o destinatário vem com a preposição 'a', em 'ao comandante', e esse é o termo perguntado.",
      "Termos circunstanciais: 'durante a manobra' é adjunto adverbial de tempo, e agente da passiva exigiria 'por' numa passiva. 'Ao comandante' é objeto indireto.",
    ],
    atalho:
      "Faça as duas perguntas do verbo. 'Entregou o quê?' responde 'a carta', objeto direto. 'Entregou a quem?' responde 'ao comandante', objeto indireto. A preposição 'a' na resposta da segunda pergunta é o teste inteiro.",
  },
  "por-ml-n3q6": {
    intuicao:
      "A expressão 'a maioria dos oficiais' junta um coletivo partitivo, 'maioria', a um complemento no plural, 'dos oficiais'. O verbo que vier depois pode olhar para o coletivo, no singular, ou para o nome plural que especifica esse coletivo. A análise pede o que a norma aceita nessas duas leituras, não uma escolha única de tempo verbal.",
    motivacao:
      "Coletivo partitivo seguido de adjunto no plural admite concordância com os dois núcleos. 'A maioria dos oficiais chegou' e 'a maioria dos oficiais chegaram' são ambas aceitas na gramática de concurso. A banca força uma única forma, singular ou plural, ou declara as duas erradas. O futuro do presente não entra nessa regra: a questão é de número, não de tempo.",
    passos: [
      "Coletivo partitivo: 'maioria' sozinha levaria o verbo ao singular, como em 'a maioria chegou'.",
      "Adjunto no plural: 'dos oficiais' autoriza também a concordância com 'oficiais', no plural.",
      "Dupla possibilidade: 'a maioria dos oficiais chegou' e 'a maioria dos oficiais chegaram' estão ambas aceitas.",
      "O que a alternativa única erra: marcar só o singular ou só o plural reduz uma concordância facultativa. As duas concordâncias são aceitas.",
    ],
    atalho:
      "Se a frase fosse só 'a maioria chegou', o singular estaria obrigatório. O acréscimo de 'dos oficiais' abre o segundo caminho, sem fechar o primeiro. Alternativa que diz 'só' uma das formas está mais estreita do que a norma. O futuro não é exigido por essa estrutura.",
  },
  "por-ml-n3q7": {
    intuicao:
      "A frase diz qual é o objetivo do candidato, a promoção. 'Visar', nesse sentido de ter em vista, liga-se ao objetivo pela preposição 'a'. 'Promoção' é feminino e determinado, com artigo 'a'. A grafia junta preposição e artigo. O sujeito está no singular, 'o candidato', e o verbo acompanha esse singular.",
    motivacao:
      "Visar, objetivar, pede 'a' e, com nome feminino determinado, pede crase: 'visa à promoção'. Sem crase, falta o artigo. 'Na' e 'para a' trocam a preposição da regência. Outro sentido, visar um passaporte no sentido de examinar ou rubricar, é objeto direto e não é o sentido de ter como objetivo. 'Os candidato visam' ainda quebra a concordância, porque o artigo plural pede 'candidatos'.",
    passos: [
      "Regência de visar no sentido de objetivar: o verbo pede a preposição 'a' antes da meta.",
      "Crase diante de feminino: 'promoção' aceita 'a promoção', e preposição mais artigo formam 'visa à promoção'.",
      "Preposições alheias: 'visa na promoção' e 'visa para a promoção' substituem a preposição 'a' exigida por esse sentido.",
      "Sentido e concordância: visar documento, sem preposição, é examinar, e 'os candidato' deixa o núcleo no singular com artigo plural. A frase correta é 'O candidato visa à promoção'.",
    ],
    atalho:
      "Troque 'promoção' por 'posto'. A frase do objetivo vira 'visa ao posto', com 'ao', prova de preposição mais artigo. No feminino, 'ao' corresponde a 'à'. Se o sentido fosse carimbar um documento, o 'a' da preposição sairia e a crase sairia com ele.",
  },
};
