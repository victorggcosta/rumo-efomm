import type { AnaliseQuestao } from "./lessons.ts";

export const ANALISES_AULA: Record<string, AnaliseQuestao> = {
  "ing-tobe-n1q1": {
    intuicao:
      "A frase apresenta uma mulher e diz o que ela é na vida, médica. Não há ação correndo no tempo: há identidade, o papel do verbo to be. O sujeito 'she' é terceira pessoa do singular, no presente, sem marca de ontem. A lacuna é a forma presente de 'be' que combina com esse pronome sujeito.",
    motivacao:
      "No presente, 'I' pede 'am', 'he', 'she' e 'it' pedem 'is', e 'you', 'we' e 'they' pedem 'are'. A banca oferece 'are' e 'were' porque o plural e o passado estão frescos, e oferece 'be' e 'am' porque são formas da mesma família. 'Be' sozinho não fecha a frase, e 'am' pertence só a 'I'. 'Were' ainda mudaria o tempo.",
    passos: [
      "Verbo to be de identidade: 'a doctor' diz o que ela é, e o verbo que liga sujeito e classificação é o to be.",
      "Presente da terceira pessoa: 'she' pede 'is', na série 'he is', 'she is', 'it is'.",
      "Formas de outro pronome: 'are' serviria a 'you', 'we' ou 'they', e 'am' serve só a 'I'.",
      "Forma básica e passado: 'be' não é a forma conjugada, e 'were' é passado de plural. A frase fica 'She is a doctor'.",
    ],
    atalho:
      "Troque 'she' por 'I' e a frase vira 'I am a doctor'. Troque por 'they' e vira 'They are doctors'. Cada pronome puxa o seu verbo, e 'she' puxa 'is'. 'Were' só entraria com 'yesterday' ou com sujeito plural no passado.",
  },
  "ing-tobe-n1q2": {
    intuicao:
      "A frase é uma pergunta sobre o lugar de um grupo, o porto, num dia que já passou. 'They' é o sujeito plural, e 'yesterday' empurra a cena para o passado. Na pergunta com to be, o verbo vem antes do sujeito. A lacuna é a forma passada de 'be' que cabe a 'they' e ainda inicia a pergunta.",
    motivacao:
      "No passado, 'I', 'he', 'she' e 'it' usam 'was', e 'you', 'we' e 'they' usam 'were'. A banca põe 'was' no início porque a inversão da pergunta esconde o sujeito plural que vem depois. 'Is' e 'are' ignoram 'yesterday', e 'did' pertence a verbos que não são o to be. Com to be não se usa 'do' nem 'did'.",
    passos: [
      "Marca de passado: 'yesterday' situa o fato num tempo encerrado, então o to be sai do presente.",
      "Passado de 'they': 'you', 'we' e 'they' no passado usam 'were', não 'was'.",
      "Ordem da pergunta: o verbo to be vem antes do sujeito, em 'Were they at the port yesterday?'.",
      "Auxiliar indevido: 'did' pergunta verbos comuns, e 'is' ou 'are' ficariam no presente. A forma é 'Were'.",
    ],
    atalho:
      "Passe a pergunta para afirmação: 'They were at the port yesterday'. Se a afirmação pede 'were', a pergunta só inverte, 'Were they'. 'Was they' quebra o plural, e 'Did they be' junta um auxiliar que o to be não aceita.",
  },
  "ing-tobe-n1q3": {
    intuicao:
      "A frase aponta um livro e diz de quem ele é, dela. 'This is' já está com o to be, e a lacuna fica entre o verbo e o substantivo 'book'. O pronome que ocupa esse lugar acompanha o nome, não o substitui. O parêntese 'o livro dela' pede o possessivo feminino de 'she' nessa posição de determinante.",
    motivacao:
      "Possessivo que vem antes do substantivo é 'my', 'your', 'his', 'her', 'its', 'our', 'their'. 'Her book' é o livro dela. 'Hers' sozinho substitui o nome já dito, como em 'this book is hers', e por isso não cabe diante de 'book'. 'She' é sujeito, 'him' é objeto de 'he', e 'they' é sujeito plural. A banca mistura função com gênero.",
    passos: [
      "Possessivo antes do nome: a lacuna está imediatamente antes de 'book', lugar de determinante possessivo, não de pronome sujeito.",
      "Forma de 'she': o possessivo que acompanha o substantivo é 'her', em 'her book'.",
      "Forma independente: 'hers' substitui o substantivo e entraria em 'this book is hers', sem 'book' depois.",
      "Pronomes de outra função: 'she' e 'they' são sujeitos, e 'him' é objeto masculino. A frase fica 'This is her book'.",
    ],
    atalho:
      "Se a palavra seguinte é um substantivo, use 'her'. Se o substantivo já saiu da frase, use 'hers': 'the book is hers'. A presença de 'book' logo após a lacuna elimina 'hers', 'she' e 'they' de uma vez.",
  },
  "ing-tobe-n1q4": {
    intuicao:
      "O item pede uma pergunta correta sobre uma mulher ser cadete da escola. O verbo é o to be, no presente, com sujeito 'she'. Em inglês, pergunta com to be inverte verbo e sujeito, sem outro auxiliar. A alternativa certa é a que faz só essa inversão de ordem e conserva 'is' com 'she'.",
    motivacao:
      "Não se usa 'do' nem 'does' com o to be nesta estrutura. 'Does she is' e 'does she be' tratam 'be' como verbo comum. 'She is a cadet?' só muda a entoação e deixa a ordem da afirmação. 'Are she' inverte, mas combina 'are' com 'she', que pede 'is'. A forma cobrada é 'Is she a cadet?'.",
    passos: [
      "Pergunta com to be: o verbo vem antes do sujeito, e a ordem correta começa por 'is'.",
      "Concordância de 'she': a terceira pessoa do singular no presente pede 'is', não 'are'.",
      "Auxiliar proibido: 'does she is a cadet' e 'does she be a cadet' juntam 'does' ao to be, combinação que a frase recusa.",
      "Ordem afirmativa: 'She is a cadet?' não inverte verbo e sujeito. A pergunta correta é 'Is she a cadet?'.",
    ],
    atalho:
      "Monte a afirmação 'She is a cadet' e troque os dois primeiros termos de lugar: 'Is she a cadet?'. Se aparecer 'does' em qualquer ponto, a pergunta saiu do padrão do to be. 'Are' só voltaria se o sujeito fosse 'you', 'we' ou 'they'.",
  },
  "ing-present-n1q1": {
    intuicao:
      "A frase diz o que uma mulher faz com o inglês, e 'every day' espalha essa ação por todos os dias. É hábito, não um estudo acontecendo neste minuto. 'She' é terceira pessoa do singular. O verbo 'study' no present simple dessa pessoa ganha uma terminação, e a grafia muda diante do 'y'.",
    motivacao:
      "Simple present de rotina, com 'every day', 'always' ou 'usually', deixa 'he', 'she' e 'it' com -s ou -es. 'Study' troca 'y' por 'ies': 'studies'. A banca oferece 'study' sem -s, o -ing solto, 'is study' sem -ing completo e a grafia inexistente 'studyes'. 'Studyes' parece regra de 'go' virando 'goes' aplicada no lugar errado.",
    passos: [
      "Simple present de hábito: 'every day' marca rotina, e rotina no presente usa a forma simples, não o continuous.",
      "Terceira pessoa do singular: 'she' recebe -s ou -es no verbo principal da rotina.",
      "Grafia do -y: verbo terminado em consoante mais 'y' troca 'y' por 'ies', e 'study' vira 'studies'.",
      "Formas afastadas: 'is study' falta o -ing, 'studying' falta o auxiliar, e 'studyes' não existe. A frase fica 'She studies English every day'.",
    ],
    atalho:
      "Ponha 'now' no lugar de 'every day' e a forma passa a 'is studying'. Com 'every day' escrito, o -s da terceira pessoa fica no verbo principal. A grafia se confere pela troca: 'cry' vira 'cries', e 'study' vira 'studies', nunca 'studyes'.",
  },
  "ing-present-n1q2": {
    intuicao:
      "A frase diz o que um grupo de alunos faz com uma prova escrita, e 'right now' prende a cena a este exato momento. A ação já começou e ainda está em curso diante de quem fala. 'They' é sujeito plural. O present continuous desta frase pede o auxiliar do to be no plural mais o verbo com -ing.",
    motivacao:
      "'Now', 'right now', 'at the moment' e 'look' pedem continuous: 'am', 'is' ou 'are' mais -ing. 'They' pede 'are', não 'is'. 'Writes' seria simple present, ainda com -s de terceira pessoa singular, contra 'they'. 'Writing' sozinho não tem auxiliar, e 'wrote' joga a prova para o passado.",
    passos: [
      "Marca de agora: 'right now' indica ação em curso, território do present continuous.",
      "Forma do continuous: auxiliar de 'be' no presente mais verbo com -ing, aqui 'writing'.",
      "Auxiliar de 'they': o plural pede 'are', então a forma é 'are writing'.",
      "Tempos e pessoas vizinhas: 'writes' é simple present singular, 'is writing' é continuous singular e 'wrote' é passado. A frase fica 'They are writing a test'.",
    ],
    atalho:
      "Separe a frase em sujeito e auxiliar antes de olhar o -ing. 'They' só aceita 'are' entre as formas de 'be' do presente. 'Is writing' cairia bem com 'he' ou 'she', e o sujeito desta frase é o grupo.",
  },
  "ing-present-n1q3": {
    intuicao:
      "A frase pergunta se ele trabalha aos domingos, um dia que volta toda semana. 'On Sundays' é marca de rotina, no present simple, não de uma ação só de agora nem de ontem. 'He' é terceira pessoa, e na pergunta desse tempo o -s sai do verbo principal. A lacuna é o auxiliar que carrega essa pessoa.",
    motivacao:
      "Pergunta do simple present usa 'do' ou 'does' mais verbo na forma básica. 'He', 'she' e 'it' pedem 'does', e 'work' fica sem -s: 'Does he work on Sundays?'. A banca oferece 'do', que serviria a 'I', 'you', 'we' e 'they', e oferece 'is' e 'are', que perguntariam o to be ou o continuous. 'Did' mudaria a rotina dos domingos para o passado.",
    passos: [
      "Simple present de rotina: 'on Sundays' descreve hábito, e a pergunta desse tempo leva 'do' ou 'does'.",
      "Auxiliar da terceira pessoa: 'he' pede 'does', e o -s fica no auxiliar, não no verbo 'work'.",
      "Verbo na base: a frase completa é 'Does he work on Sundays?', com 'work' sem -s.",
      "Auxiliares de outro tempo: 'is' e 'are' não perguntam o simple present de 'work', e 'did' perguntaria o passado. A lacuna fica 'Does'.",
    ],
    atalho:
      "A resposta curta seria 'Yes, he does' ou 'No, he doesn't'. O auxiliar da resposta é o mesmo da pergunta. 'Do he work' quebra a pessoa, e 'Does he works' poria o -s duas vezes, no auxiliar e no verbo.",
  },
  "ing-present-n1q4": {
    intuicao:
      "Alguém diz 'look' e aponta o que o navio faz em relação ao porto de saída neste instante. 'Look' é o aviso de cena em curso, como 'now'. 'The ship' é um navio só, singular. O verbo 'leave' precisa aparecer no continuous de agora, com o auxiliar singular que combina com esse sujeito.",
    motivacao:
      "Present continuous é 'am', 'is' ou 'are' mais -ing, e 'look' pede essa forma. 'The ship' equivale a 'it' e pede 'is leaving'. 'Leaves' seria rotina, 'left' seria passado, 'leave' seria base sem pessoa e 'are leaving' poria plural num sujeito singular. A banca usa o -s de 'leaves' para parecer concordância, no tempo errado.",
    passos: [
      "Marca de agora: 'Look!' aponta para uma ação visível neste momento e pede present continuous.",
      "Forma com -ing: o verbo 'leave' entra como 'leaving', com auxiliar de 'be'.",
      "Singular do sujeito: 'the ship' pede 'is', não 'are', e a forma é 'is leaving'.",
      "Simple present e passado: 'leaves' contaria hábito e 'left' contaria saída já feita. A frase fica 'The ship is leaving the port'.",
    ],
    atalho:
      "Se a frase fosse 'every morning', 'the ship leaves the port' estaria certa. O imperativo 'look' troca o hábito pela cena atual. Entre 'is leaving' e 'are leaving', o número de 'ship' decide pelo singular.",
  },
  "ing-past-n1q1": {
    intuicao:
      "A frase conta uma ida à escola num dia que já acabou de todo. 'Yesterday' fecha o tempo no passado encerrado. O sujeito é 'I', primeira pessoa, e o verbo é 'go', que não forma o passado com -ed. A lacuna pede a forma irregular própria desse verbo de movimento, não um particípio nem um -ing.",
    motivacao:
      "Simple past de tempo encerrado, com 'yesterday', 'last' ou 'ago', usa a forma de passado do verbo. 'Go' é irregular: 'went'. 'Goed' aplica a regra do -ed num verbo que não a aceita. 'Gone' é particípio, para perfect, 'going' é -ing, e 'go' é a base, que voltaria só depois de 'did' numa negativa ou pergunta.",
    passos: [
      "Simple past com tempo fechado: 'yesterday' pede a forma de passado, não o presente nem o continuous.",
      "Verbo irregular: 'go' não recebe -ed de nenhum modo, e o simple past é 'went'.",
      "Forma inexistente: 'goed' imita o passado regular e não é palavra do inglês.",
      "Particípio e base: 'gone' pediria 'have' ou 'has', e 'going' pediria auxiliar de continuous. A frase fica 'I went to school yesterday'.",
    ],
    atalho:
      "Diga a série curta 'go, went, gone'. A forma do meio é a do simple past. Se a frase tivesse 'did not', a base 'go' voltaria, e aqui não há 'did'. 'Goed' sai no teste de existir no dicionário.",
  },
  "ing-past-n1q2": {
    intuicao:
      "A frase nega que ela tenha feito algo com o livro indicado. 'Didn't' já carrega o passado inteiro, e o verbo que vem depois volta à forma básica. O sentido pedido é o de ler, não o de ver o volume. A lacuna, nesta negativa, não pode repetir passado, nem -s, nem -ing, nem uma grafia inventada.",
    motivacao:
      "Depois de 'did' ou 'didn't', o verbo principal fica na base, porque o auxiliar já marcou o tempo. 'Didn't read' está certo, e 'didn't readed' ou 'didn't saw' põem passado duas vezes. 'Readed' nem existe. 'Reads' devolve o -s da terceira pessoa, e 'reading' pediria 'be'. 'Saw' ainda troca o verbo 'read' pelo verbo 'see'.",
    passos: [
      "Negativa do simple past: 'didn't' mais verbo na forma básica, pois o auxiliar já está no passado.",
      "Base de 'read': a forma que segue 'didn't' é 'read', a mesma grafia do presente, sem -ed.",
      "Passado duplicado: 'saw' já é passado de 'see', e depois de 'didn't' o passado não se repete no verbo principal.",
      "Grafia e pessoa: 'readed' não existe, 'reads' leva -s indevido e 'reading' não tem auxiliar de continuous. A lacuna fica 'read'.",
    ],
    atalho:
      "O par mínimo é 'didn't see' contra 'didn't saw'. O primeiro conserva a base, o segundo repete o passado. O mesmo par, com ler, é 'didn't read' contra 'didn't readed'. Sempre que 'didn't' está escrito, risque a opção que já é passado ou que leva -s.",
  },
  "ing-past-n1q3": {
    intuicao:
      "A frase pergunta se o ouvinte viu o navio na noite passada, a bordo ou no porto. 'Last night' coloca o fato num tempo já encerrado. O verbo da pergunta é 'see', ainda na forma básica, sinal claro de que o passado está no auxiliar. A lacuna é esse auxiliar inicial de pergunta no passado.",
    motivacao:
      "Pergunta do simple past de verbo comum usa 'did' mais sujeito mais verbo na base: 'Did you see the ship last night?'. 'Do' perguntaria o presente, 'were' e 'are' e 'was' pertencem ao to be ou a continuous. 'See' não é to be, então não se abre a pergunta com 'were'. A resposta curta seria 'Yes, I did'.",
    passos: [
      "Simple past na pergunta: 'last night' pede passado, e o auxiliar de verbo comum nesse tempo é 'did'.",
      "Verbo na base: 'see' permanece 'see', porque 'did' já marca o passado, em 'Did you see'.",
      "Presente afastado: 'do' perguntaria rotina de agora, contra 'last night'.",
      "To be no lugar errado: 'was', 'were' e 'are' não auxiliam 'see' nesta pergunta. A lacuna fica 'Did'.",
    ],
    atalho:
      "Se a resposta curta é 'Yes, I did', a pergunta começou com 'did'. 'Did you saw' poria passado no verbo e no auxiliar, e por isso 'see' tem de ficar na base. 'Were you see' mistura to be com verbo comum.",
  },
  "ing-past-n1q4": {
    intuicao:
      "A frase diz que um grupo concluiu por completo o exercício num momento já passado, duas horas atrás. 'Ago' conta o tempo para trás a partir de agora e fecha a ação. 'Finish' é verbo regular. 'They' no simple past não muda a terminação: o passado regular é o mesmo para todas as pessoas.",
    motivacao:
      "Sinais 'yesterday', 'last' e 'ago' pedem simple past. Regular ganha -ed: 'finished'. 'Finish' sem marca fica no presente, 'finishes' põe o -s da terceira pessoa do presente, 'finishing' é -ing sem auxiliar e 'are finish' mistura 'are' com a base. Nenhuma dessas formas convive com 'two hours ago'.",
    passos: [
      "Marca 'ago': 'two hours ago' situa a ação num passado encerrado e pede simple past.",
      "Passado regular: 'finish' recebe -ed, e a forma é 'finished' para 'they' como seria para 'she'.",
      "Sem -s no passado: 'finishes' é presente de 'he', 'she' ou 'it', não passado de 'they'.",
      "Continuous incompleto: 'finishing' e 'are finish' não formam nem o passado nem o continuous. A frase fica 'They finished the exercise two hours ago'.",
    ],
    atalho:
      "Troque 'two hours ago' por 'every day' e o verbo pode ir para 'finish', com 'they'. Com 'ago', a marca -ed é obrigatória. Se o verbo fosse 'go', a forma seria 'went', e 'finish' não está nessa lista irregular.",
  },
  "ing-preposicoes-n1q1": {
    intuicao:
      "A frase marca o instante em que o exame começa, oito da manhã. É um ponto no relógio, a hora exata, não um mês, um dia da semana ou um período largo. A preposição de tempo, nesse grau mais fechado, é uma palavra pequena diante do numeral da hora. A lacuna escolhe entre 'in', 'on' e 'at', além de duas preposições que não marcam hora.",
    motivacao:
      "No tempo, 'at' é o ponto, 'on' é o dia e 'in' é o período maior. Hora pede 'at': 'at 8 a.m.'. A banca troca essa escala e ainda oferece 'to' e 'by', que em outros contextos marcam direção ou prazo. Traduzir 'em' do português por uma preposição só esconde a diferença entre hora, dia e mês.",
    passos: [
      "Escala do tempo: ponto fechado pede 'at', dia pede 'on' e período maior pede 'in'.",
      "Hora exata: '8 a.m.' é ponto no relógio, então a preposição é 'at', em 'at 8 a.m.'.",
      "Dia e período afastados: 'on' caberia em 'on Monday', e 'in' caberia em 'in the morning' ou 'in July'.",
      "Outras preposições: 'to' e 'by' não introduzem a hora de início nesta frase. A lacuna fica 'at'.",
    ],
    atalho:
      "Diga a trinca em voz alta: 'at 8', 'on Monday', 'in July'. O exame desta frase tem hora, então o primeiro termo da trinca é o que entra. Se o enunciado trouxesse o mês, 'in' voltaria, e aqui há '8 a.m.'.",
  },
  "ing-preposicoes-n1q2": {
    intuicao:
      "A frase diz em que parte do dia ela estuda inglês, a manhã. Manhã é um período amplo, maior que uma hora e menor que a estação do ano, e entra no grupo de 'afternoon' e 'evening'. A preposição desse período é 'in'. A noite, sozinha, é a exceção conhecida e não é o caso desta frase.",
    motivacao:
      "'In the morning', 'in the afternoon' e 'in the evening' usam 'in'. 'At night' é a exceção, e a banca conta com quem generaliza 'at' para toda parte do dia, ou 'on' como se manhã fosse data. 'To' e 'of' não situam a parte do dia. A palavra 'morning' no enunciado é o que decide, não a tradução única de 'em'.",
    passos: [
      "Parte do dia: 'morning', 'afternoon' e 'evening' pedem 'in', em 'in the morning'.",
      "Exceção nomeada: 'night' pede 'at night', e a frase traz 'morning', que fica fora dessa exceção.",
      "Hora e dia afastados: 'at' marcaria 'at 8', e 'on' marcaria 'on Monday', não a manhã inteira.",
      "Preposições sem tempo: 'to' e 'of' não localizam a rotina de estudo nesta frase. A lacuna fica 'in'.",
    ],
    atalho:
      "O par mínimo é 'in the morning' contra 'at night'. As duas são partes do dia, e só 'night' foge para 'at'. Se a palavra fosse 'night', a resposta mudaria, e escrita 'morning' a resposta é 'in'.",
  },
  "ing-preposicoes-n1q3": {
    intuicao:
      "A frase marca o dia da semana em que a reunião de estudo acontece, segunda-feira. Dia da semana é uma unidade do calendário, nem hora marcada nem mês inteiro. A preposição que acompanha o nome do dia, nesta escala, é 'on'. A lacuna não pede lugar no mapa nem movimento para dentro da sala.",
    motivacao:
      "Dia e data pedem 'on': 'on Monday', 'on July 4'. 'In' abriria mês, ano ou parte do dia, 'at' abriria hora ou 'night'. 'Into' indica movimento para dentro, e 'of' indica posse ou relação, não o dia da reunião. A banca mistura a escala inteira de 'in', 'on' e 'at' num único nome de dia.",
    passos: [
      "Dia da semana: o nome 'Monday' pede a preposição 'on', como em 'on Monday'.",
      "Escala vizinha: 'in' serviria a 'in July' ou 'in the morning', e 'at' serviria a 'at 8' ou 'at night'.",
      "Data no mesmo grupo: 'on July 4' confirma que dia e data compartilham 'on'.",
      "Preposições de outro sentido: 'into' é movimento e 'of' não marca calendário. A lacuna fica 'on'.",
    ],
    atalho:
      "Complete a série com a mesma preposição: 'on Monday', 'on Tuesday', 'on July 4'. Se a palavra é nome de dia, 'on' se repete. 'In Monday' e 'at Monday' quebram a série no primeiro teste.",
  },
  "ing-preposicoes-n1q4": {
    intuicao:
      "A frase diz onde os marinheiros dormem, e o lugar é o navio. Navio, neste uso, entra no grupo dos meios de transporte, ao lado de ônibus e avião, não no grupo da sala fechada nem no do ponto no mapa. A preposição desse grupo é 'on'. A frase não diz que eles estão num ponto chamado navio, diz que dormem a bordo.",
    motivacao:
      "'On the ship', 'on the bus' e 'on the plane' compartilham 'on'. 'In' caberia em 'in the room' ou 'in Rio', volume ou área. 'At' caberia em 'at the port' ou 'at home', um ponto. 'To' marca destino ou direção, e 'of' marca relação. Traduzir 'no navio' por 'in the ship' é a colagem com o português que a questão testa.",
    passos: [
      "Transporte e embarcação: 'ship' fica com 'bus' e 'plane', e a preposição do grupo é 'on'.",
      "Frase de bordo: 'the sailors sleep on the ship' localiza o sono a bordo.",
      "Ponto e volume: 'at the port' seria o porto como ponto, e 'in the room' seria o interior de um cômodo, dois esquemas que não são o desta frase.",
      "Direção e posse: 'to' e 'of' não respondem 'onde dormem'. A lacuna fica 'on'.",
    ],
    atalho:
      "Diga o trio 'on the bus', 'on the plane', 'on the ship'. A preposição não muda quando o veículo muda de ônibus para navio. 'At' voltaria se a frase fosse 'at the port', o ponto onde o navio atraca, não o lugar onde se dorme a bordo.",
  },
  "ing-vocabulario-n1q1": {
    intuicao:
      "O item pede o sentido da palavra 'ship' sozinha, no vocabulário de base do mar. 'Ship' nomeia a embarcação, o navio. Ao lado dela, no mesmo campo, estão 'port', o porto, e 'map', o mapa, palavras que a banca põe como disfarce. 'Loja' entra porque a grafia inglesa de loja é parecida, não igual.",
    motivacao:
      "A confusão é de par mínimo gráfico: 'ship' e 'shop'. 'Shop' é loja, 'ship' é navio. Uma letra muda o significado, e a alternativa 'loja' existe para quem leu a palavra vizinha. 'Porto' é 'port', 'mapa' é 'map' e 'tempo', no sentido de clima, seria 'weather', ou 'time' no sentido de relógio. Cada opção é a tradução de outra palavra da lição.",
    passos: [
      "Vocabulário do mar: 'ship' significa navio, a embarcação de grande porte.",
      "Par mínimo 'ship' e 'shop': 'shop' significa loja, e a semelhança de letras não iguala as duas palavras.",
      "Palavras vizinhas: 'port' é porto e 'map' é mapa, traduções que ocupam as outras alternativas.",
      "Tempo fora do par: 'tempo' não é o sentido de 'ship'. A resposta é navio.",
    ],
    atalho:
      "Leia 'the ship left the port'. Navio sai do porto, e loja não sai do porto nessa frase. Se a palavra fosse 'shop', a frase de saída do porto ficaria sem sentido. A letra 'i', em 'ship', é a que segura o significado de navio.",
  },
  "ing-vocabulario-n1q2": {
    intuicao:
      "O item pede o sentido de 'yesterday' no grupo das palavras de tempo. A série da lição separa hoje, ontem e amanhã, e também sempre e nunca, que são frequência, não dia. 'Yesterday' aponta o dia anterior a hoje. A alternativa certa é a tradução desse dia, não a de 'today' nem a de 'always'.",
    motivacao:
      "As três palavras de dia formam um trio fácil de embaralhar: 'today' é hoje, 'yesterday' é ontem, 'tomorrow' é amanhã. A banca põe as três traduções lado a lado e ainda mistura 'always' e 'never', que respondem 'com que frequência', não 'em que dia'. Quem decora a lista na ordem errada marca amanhã no lugar de ontem.",
    passos: [
      "Trio do dia: 'today', 'yesterday' e 'tomorrow' significam hoje, ontem e amanhã, nessa correspondência.",
      "Palavra do item: 'yesterday' é o dia já passado em relação a hoje, ontem.",
      "Frequência afastada: 'always' é sempre e 'never' é nunca, e nenhuma das duas nomeia um dia.",
      "Vizinhos do trio: 'hoje' traduz 'today' e 'amanhã' traduz 'tomorrow'. A resposta é ontem.",
    ],
    atalho:
      "Monte a linha do tempo 'yesterday, today, tomorrow' e traduza na mesma ordem: ontem, hoje, amanhã. A palavra do meio da linha inglesa não é a palavra do item. O item é a primeira, ontem.",
  },
  "ing-vocabulario-n1q3": {
    intuicao:
      "O item pede o oposto exato de 'early'. 'Early' situa um acontecimento cedo, antes da hora esperada. O oposto desloca o mesmo acontecimento para depois, tarde. A palavra desse par, na lição de base, é 'late'. As outras opções são tempo próximo, tempo de agora ou opostos de outro par.",
    motivacao:
      "Opostos se decoram em pares fechados: 'early' com 'late', 'easy' com 'hard', 'big' com 'small'. 'Soon' significa logo, em breve, e parece vizinho de cedo sem ser o contrário. 'Now' é agora, um ponto, não o antônimo. 'Easy' e 'big' fecham outros pares e entrariam se o enunciado fosse 'hard' ou 'small'.",
    passos: [
      "Par de opostos: 'early' significa cedo, e o oposto pedido pela lição é 'late', tarde.",
      "Vizinho que não é antônimo: 'soon' significa em breve, uma proximidade no futuro, não o contrário de cedo.",
      "Ponto no tempo: 'now' significa agora e não forma par de oposição com 'early'.",
      "Outros pares: 'easy' opõe-se a 'hard', e 'big' opõe-se a 'small'. A resposta é 'late'.",
    ],
    atalho:
      "Encaixe numa frase mínima: 'She arrived early' tem o contrário 'She arrived late'. 'She arrived soon' não nega a chegada cedo, só diz que foi em breve. O teste da mesma frase, com uma palavra no lugar da outra, separa oposto de vizinho.",
  },
  "ing-vocabulario-n1q4": {
    intuicao:
      "A frase 'The tide is high' fala de algo que está alto no cenário do mar aberto. 'High' aqui é alto, e a palavra que pode estar alta nesse sentido, entre as da lição, é a maré. 'Tide' nomeia a maré. Vento, porto, mapa e navio são palavras do mesmo cenário, cada uma com seu nome inglês.",
    motivacao:
      "No grupo do mar, 'tide' é maré, 'wind' é vento, 'port' é porto, 'map' é mapa e 'ship' é navio. A banca põe as cinco traduções juntas porque o campo semântico é um só. 'The tide is high' ajuda: maré alta é colocação natural, e vento alto, porto alto ou mapa alto não fecham a mesma frase. O contexto confirma o verbete.",
    passos: [
      "Vocabulário em frase: 'tide' em 'the tide is high' significa maré, e 'high' descreve a maré alta.",
      "Palavra vizinha de clima: 'wind' significa vento e não substitui 'tide' nessa frase.",
      "Lugar e objeto: 'port' é porto, 'map' é mapa e 'ship' é navio, três nomes que não ficam 'high' neste uso.",
      "Leitura do enunciado: a palavra perguntada é 'tide', e o sentido é maré.",
    ],
    atalho:
      "Substitua 'tide' por 'wind' e leia 'the wind is high'. A frase pode existir, mas não é a palavra do item, e a alternativa vento traduz 'wind'. Para 'tide', a substituição que conserva o sentido em português é 'maré'. 'Port', 'map' e 'ship' já têm tradução fixa fora desse par.",
  },
  "por-acentuacao-n1q1": {
    intuicao:
      "O item pede uma palavra que, ao mesmo tempo, esteja com o acento certo e seja oxítona. Oxítona tem a força na última sílaba. Entre as opções, há palavra sem acento que deveria ter, palavra acentuada com a força na penúltima e palavra que a norma atual deixa sem acento. A escolha precisa satisfazer as duas condições juntas.",
    motivacao:
      "Oxítona terminada em 'a', 'e' ou 'o' leva acento: 'café' tem força em 'fé' e termina em 'e'. 'Cafe', sem acento, está incompleta. 'Fácil' leva acento, mas a força está em 'fá', penúltima, então é paroxítona. 'Mesa' é paroxítona terminada em 'a', sem acento. 'Ideia' é paroxítona de ditongo e, pelo acordo, também não leva acento.",
    passos: [
      "Classificação pela sílaba tônica: oxítona tem a força na última sílaba, e 'café' tem a força em 'fé'.",
      "Regra da oxítona: terminação em 'e' pede acento, então 'café' está grafada certo e é oxítona.",
      "Acento de outra classe: 'fácil' é paroxítona terminada em 'l', acentuada por outra regra.",
      "Grafias que não fecham o pedido: 'cafe' falta o acento, e 'mesa' e 'ideia' não são oxítonas. A resposta é 'café'.",
    ],
    atalho:
      "Bata palma na sílaba forte. Em 'ca-fé' a palma cai na última, e o acento está escrito. Em 'fá-cil' e 'me-sa' a palma cai na penúltima. 'Cafe' sem acento até pode ser lida como oxítona, mas a grafia cobrada não está completa.",
  },
  "por-acentuacao-n1q2": {
    intuicao:
      "O item fala das proparoxítonas como classe, não de uma palavra só. Proparoxítona tem a força na antepenúltima sílaba, como 'má' em 'matemática' ou 'lâm' em 'lâmpada'. A pergunta é o que a regra de acento faz com todas as palavras dessa classe. A resposta é uma afirmação sobre o grupo inteiro.",
    motivacao:
      "Toda proparoxítona é acentuada, sem lista de terminações que escapem. A banca importa regras de outras classes: nenhuma leva acento, só as terminadas em 'a', a regra das oxítonas, ou só o caso do hiato. Oxítona depende da terminação, paroxítona depende de terminações menos comuns, e proparoxítona não faz essa triagem. 'Física', 'público' e 'lâmpada' ilustram o acento obrigatório.",
    passos: [
      "Definição: proparoxítona tem a sílaba tônica na antepenúltima posição da palavra.",
      "Regra única da classe: toda proparoxítona leva acento gráfico, como 'matemática', 'lâmpada', 'físico' e 'público'.",
      "Sem filtro de terminação: a regra não se restringe às terminadas em 'a' nem copia a lista das oxítonas.",
      "Hiato é outra regra: o acento de 'saída' não é o critério das proparoxítonas. A afirmação correta é que todas levam acento.",
    ],
    atalho:
      "Tente achar uma proparoxítona sem acento na lista da lição. 'Matemática', 'lâmpada', 'físico' e 'público' todas trazem acento. Se a classe inteira aparece acentuada, a alternativa 'nenhuma leva' e a alternativa 'só algumas' ficam largas demais ou estreitas demais.",
  },
  "por-acentuacao-n1q3": {
    intuicao:
      "O item pede a grafia que o acordo ortográfico atual aceita, entre formas antigas e formas de hoje. Há ditongo de paroxítona, vogal dobrada e oxítona com ditongo aberto. O acordo tirou acento de um grupo e conservou o de outro. A palavra que permanece correta, entre as opções, é 'ideia', sem acento.",
    motivacao:
      "Paroxítonas com ditongo aberto 'ei' ou 'oi' não levam mais acento: 'ideia', 'jiboia', 'assembleia'. Vogal dobrada também não: 'voo', 'leem'. Oxítona com ditongo aberto tônico continua acentuada, porque a força está na última sílaba: 'herói', 'anéis'. A banca mistura a grafia antiga 'idéia', 'assembléia' e 'voô' com 'heroi' sem o acento que ainda é obrigatório.",
    passos: [
      "Acordo nas paroxítonas: ditongo 'ei' tônico em paroxítona não leva acento, e a grafia atual é 'ideia'.",
      "Vogal dobrada: 'voo' se escreve sem acento, e 'voô' é grafia antiga do acordo anterior.",
      "Oxítona que conserva o acento: 'herói' tem força na última sílaba, ditongo aberto, e 'heroi' sem acento está incompleto.",
      "Assembleia no mesmo grupo de 'ideia': 'assembléia' perdeu o acento. A grafia correta entre as opções é 'ideia'.",
    ],
    atalho:
      "Separe pela sílaba forte. Se a força está na penúltima e há 'ei' ou vogal dobrada, apague o acento antigo: 'ideia', 'voo', 'assembleia'. Se a força está na última, como em 'herói', o acento fica. A única opção já escrita nesse desenho é 'ideia'.",
  },
  "por-acentuacao-n1q4": {
    intuicao:
      "A palavra 'saída' tem acento no 'i', e o item pergunta por que esse acento está ali. A divisão é 'sa-í-da': três sílabas, com a força no 'i', que é a penúltima. O 'i' não forma ditongo com o 'a' anterior, fica sozinho na sílaba, em hiato. Essa posição do 'i' tônico é a razão do acento, não a classe da palavra terminada em 'a'.",
    motivacao:
      "No hiato, 'i' ou 'u' tônico, sozinho na sílaba ou seguido de 's', leva acento, desde que não haja 'nh' depois, como em 'rainha'. 'Saída' e 'país' e 'baú' entram nessa regra. Chamar 'saída' de proparoxítona erra a contagem das sílabas. Paroxítona terminada em 'a', como 'mesa', não leva acento só por essa terminação. Ditongo não é hiato, e nem todo ditongo leva acento.",
    passos: [
      "Separação silábica: 'sa-í-da' tem o 'i' tônico sozinho na sílaba, em hiato com o 'a' de 'sa'.",
      "Regra do hiato: 'i' ou 'u' tônico, sozinho na sílaba ou com 's', leva acento, e é essa a razão de 'saída'.",
      "Classe que não explica o acento: a palavra é paroxítona, não proparoxítona nem oxítona, e paroxítona terminada em 'a' não leva acento por essa terminação, como mostra 'mesa'.",
      "Ditongo afastado: o 'i' de 'saída' não forma ditongo, e a regra não é 'todo ditongo leva acento'. O acento vem do hiato.",
    ],
    atalho:
      "Compare 'saída' com 'mesa'. As duas são paroxítonas terminadas em 'a', e só 'saída' tem acento. A diferença é o 'i' sozinho na sílaba tônica. Se o acento fosse da terminação 'a', 'mesa' também o teria.",
  },
  "por-gramaticais-n1q1": {
    intuicao:
      "Na frase 'O mar estava calmo', cada palavra faz um papel. 'O' acompanha o nome, 'mar' nomeia, 'estava' situa o estado e 'calmo' diz como é esse mar. A palavra perguntada caracteriza o substantivo. Caracterizar o substantivo é o papel de adjetivo, aqui ligado ao nome por um verbo de estado.",
    motivacao:
      "Classe se decide pelo que a palavra faz na frase, não pela forma isolada. 'Calmo' atribui qualidade a 'mar', então é adjetivo. A banca oferece substantivo, porque 'calmo' poderia parecer nome de uma qualidade, e oferece verbo, porque está perto de 'estava'. Advérbio modificaria o verbo, como 'muito' em 'estava muito calmo', e preposição ligaria termos, como 'de' ou 'em'.",
    passos: [
      "Papel na frase: 'calmo' diz uma característica de 'mar', o substantivo já nomeado.",
      "Adjetivo: palavra que atribui qualidade ou estado ao substantivo, nesta frase, é adjetivo.",
      "Verbo de ligação ao lado: 'estava' é o verbo, e 'calmo' é o predicativo, sem deixar de ser adjetivo.",
      "Classes que não caracterizam o nome: substantivo nomearia, advérbio modificaria verbo ou adjetivo, preposição ligaria. 'Calmo' é adjetivo.",
    ],
    atalho:
      "Pergunte 'calmo em relação a quê?'. A resposta é 'em relação ao mar'. Se a palavra caracteriza um substantivo, a classe é adjetivo. 'Muito calmo' traria um advérbio modificando esse adjetivo, e esse 'muito' não está na frase.",
  },
  "por-gramaticais-n1q2": {
    intuicao:
      "Na frase 'Ela estudou bastante', 'ela' é quem estuda, 'estudou' é a ação e 'bastante' diz com clareza a intensidade ou o modo dessa ação. A palavra não caracteriza um substantivo, porque não há substantivo depois dela. Ela modifica o verbo da oração. Modificar verbo é papel de advérbio.",
    motivacao:
      "'Bastante' muda de classe conforme o que modifica. Junto de verbo, é advérbio: 'estudou bastante'. Junto de substantivo, no sentido de suficiente e em geral no plural quando o nome é plural, pode ser adjetivo ou pronome, e não é o caso desta frase. A banca oferece adjetivo por essa outra vida da palavra. Conjunção ligaria orações, artigo determinaria o nome e substantivo nomearia.",
    passos: [
      "Termo modificado: 'bastante' incide sobre 'estudou', dizendo intensidade da ação.",
      "Advérbio: palavra que modifica verbo, adjetivo ou outro advérbio, e aqui o alvo é o verbo.",
      "Outro uso da mesma palavra: em 'aluna bastante dedicada', 'bastante' modificaria o adjetivo e continuaria advérbio, ainda sem ser a frase deste item.",
      "Classes de ligação e de nome: conjunção, artigo e substantivo não intensificam 'estudou'. 'Bastante' é advérbio.",
    ],
    atalho:
      "Troque 'bastante' por 'muito'. 'Ela estudou muito' conserva o sentido e 'muito', nesse lugar, é advérbio. Se a frase fosse 'bastantes capítulos', a palavra iria para junto do substantivo e o teste do 'muito' no verbo deixaria de caber.",
  },
  "por-gramaticais-n1q3": {
    intuicao:
      "A frase junta duas orações completas: 'quero estudar' e 'estou cansada'. Entre elas, a palavra 'mas' marca que a segunda se opõe à primeira vontade. A palavra não nomeia um ser, não modifica um verbo e não liga um nome a outro nome. Ela liga orações com sentido bem claro de oposição.",
    motivacao:
      "Conjunção liga orações ou termos semelhantes, e 'mas' é conjunção adversativa. Preposição, como 'de', 'em' ou 'para', liga um termo a outro dentro da oração, não duas orações com verbo cada uma. Advérbio modificaria 'estou' ou 'estudar'. Substantivo e verbo teriam núcleo nominal ou flexão de tempo, e 'mas' não tem nenhuma das duas coisas.",
    passos: [
      "Duas orações: 'quero estudar' tem verbo, e 'estou cansada' tem outro verbo.",
      "Ligação com oposição: 'mas' une essas orações e inverte a expectativa, papel de conjunção adversativa.",
      "Preposição afastada: preposição ligaria nome a complemento, como 'cansada de estudar', estrutura diferente da desta frase.",
      "Classes de conteúdo: advérbio, substantivo e verbo não fazem a ponte entre as duas orações. 'Mas' é conjunção.",
    ],
    atalho:
      "Apague 'mas' e as duas orações continuam frases, só perdem o laço de oposição. Palavra que se pode tirar deixando duas orações inteiras, e que só existe para ligá-las, é conjunção. 'Porque' e 'e' passariam no mesmo teste, com outros sentidos.",
  },
  "por-gramaticais-n1q4": {
    intuicao:
      "Na frase 'As três alunas chegaram cedo', há um grupo de alunas e um número exato diante do nome delas. 'As' determina, 'alunas' nomeia, 'chegaram' é a ação e 'cedo' diz quando. 'Três' diz quantas alunas são. Indicar quantidade exata é o papel de numeral, não de artigo nem de advérbio.",
    motivacao:
      "Numeral quantifica ou ordena: 'três', 'duas', 'primeiro'. Artigo seria 'as', já presente, e não traz a quantidade três. 'Cedo', na mesma frase, é o advérbio, e a banca empurra essa classe para 'três' por contaminação. Conjunção ligaria orações, e não há segunda oração. Interjeição seria uma reação, como 'oxalá', solta da contagem.",
    passos: [
      "Quantidade do substantivo: 'três' diz o número exato de 'alunas' na frase.",
      "Numeral: palavra que indica quantidade ou ordem, nesta frase a quantidade, é numeral.",
      "Artigo já usado: 'as' é o artigo que acompanha 'alunas', e 'três' não repete esse papel.",
      "Advérbio da mesma frase: 'cedo' modifica 'chegaram', e essa classe não se transfere para o número. 'Três' é numeral.",
    ],
    atalho:
      "Troque 'três' por 'primeiro' e o papel continua de numeral, agora de ordem. Troque 'cedo' por 'tarde' e só o advérbio muda. As duas trocas mostram que número e circunstância de tempo não são a mesma classe. 'As' sozinho não diria quantas alunas chegaram.",
  },
  "por-redacao-estrutura-n1q1": {
    intuicao:
      "A dissertação da prova defende uma ideia, e essa ideia precisa aparecer cedo, numa frase que o resto do texto consegue sustentar. Essa frase é a tese. O lugar em que o leitor a encontra pela primeira vez é a introdução, junto do tema. A conclusão volta a ela depois, com outras palavras, e não é o estreia.",
    motivacao:
      "Tese vaga, do tipo 'a leitura é muito importante', não segura dois parágrafos. Tese defensável, como 'a leitura frequente amplia o repertório de quem estuda', orienta argumentos e exemplos. A banca esconde a tese na conclusão, no título, em cada exemplo ou depois de uma proposta solta. Exemplo serve ao argumento, e o argumento serve à tese, que já foi dita na abertura.",
    passos: [
      "Lugar da tese: a introdução apresenta o tema e a tese, numa frase que se pode defender.",
      "Frase defensável: a tese precisa ser específica o bastante para sustentar os parágrafos de desenvolvimento.",
      "Papel da conclusão: a conclusão retoma a tese, e essa retomada não é a primeira aparição dela.",
      "Lugares que não a estreiam: título, exemplo e proposta solta não substituem a frase de tese na introdução. A tese aparece na introdução.",
    ],
    atalho:
      "Leia só o primeiro parágrafo e veja se dá para discordar de uma frase dele. Se der, essa frase é a tese. Se a ideia só surge no último parágrafo, o texto obrigou o leitor a caminhar sem saber o que estava sendo defendido.",
  },
  "por-redacao-estrutura-n1q2": {
    intuicao:
      "O parágrafo de desenvolvimento tem uma função: entregar um argumento a serviço da tese. A primeira frase desse parágrafo avisa qual é o argumento, antes da explicação e do exemplo. Esse aviso é o tópico frasal. Pergunta sem resposta, cópia do enunciado, interjeição ou data não anunciam argumento.",
    motivacao:
      "O tópico frasal existe para o parágrafo não começar pelo exemplo solto. A banca oferece a cópia do texto motivador, que não é argumento próprio, e a pergunta sem resposta, que adia a ideia. Interjeição e data da prova não sustentam desenvolvimento. Explicação e exemplo vêm depois do anúncio, não no lugar dele.",
    passos: [
      "Abertura do desenvolvimento: o parágrafo começa pelo tópico frasal, a frase que anuncia o argumento daquele bloco.",
      "Ordem interna: depois do tópico frasal vêm a explicação e o exemplo concreto, a serviço da tese.",
      "Exemplo sem anúncio: começar pelo caso ou pela pergunta deixa o leitor sem saber que ideia o parágrafo defende.",
      "Enchimento: cópia do enunciado, interjeição e data não são tópico frasal. O parágrafo começa com o tópico frasal.",
    ],
    atalho:
      "Cubra o restante do parágrafo e leia só a primeira frase. Se ela já diz o argumento, é tópico frasal. Se ela só pergunta, cita a data ou repete o tema da prova, o argumento ainda não foi anunciado.",
  },
  "por-redacao-estrutura-n1q3": {
    intuicao:
      "A conclusão é o fechamento da dissertação. Ela volta à tese com outras palavras e encerra o percurso dos argumentos. Não é um convite a assunto novo, nem uma segunda introdução copiada, nem uma lista de conectivos, nem um depósito de dados que não servem à tese. O leitor precisa sentir que o texto acabou na mesma ideia que anunciou.",
    motivacao:
      "Assunto novo na conclusão deixa o texto sem fim, porque abre uma discussão que não terá parágrafo. Repetir a introdução com as mesmas palavras não é retomada, é cópia. Listar conectivos mostra vocabulário, não fechamento. Dado sem relação com a tese quebra a regra de que exemplo e informação servem ao argumento, e o argumento serve à tese.",
    passos: [
      "Função da conclusão: retomar a tese e fechar o texto, sem inaugurar outra discussão.",
      "Retomada que não é cópia: a ideia volta com outras palavras, não como repetição literal da introdução.",
      "Assunto novo: um tema inédito nesse ponto não tem desenvolvimento e desfaz o fechamento.",
      "Material solto: lista de conectivos e dado sem relação com a tese não concluem. A conclusão retoma a tese e fecha.",
    ],
    atalho:
      "Risque a conclusão e veja se o texto fica sem pouso. Se ficar, ela estava fechando. Se a conclusão apresentar um tema que não estava na tese nem nos dois argumentos, ela abriu conversa em vez de encerrar. A frase final tem de poder conviver com a tese do primeiro parágrafo.",
  },
  "por-redacao-estrutura-n1q4": {
    intuicao:
      "Antes de escrever a dissertação, o texto precisa de um mapa curto. Esse mapa tem a tese, os dois argumentos que vão sustentá-la e o que a conclusão vai retomar. Com isso, cada parágrafo já sabe o seu tópico frasal. Começar a frase sem esse mapa empurra a decisão do tema para o meio ou para o fim.",
    motivacao:
      "O esquema evita o texto que muda de ideia no meio do caminho. Escrever direto e decidir o tema no último parágrafo inverte a ordem, porque a conclusão não pode estrear a tese. Três introduções adiam a escolha. Começar pela proposta sem tese deixa a defesa sem frase central. Copiar o texto motivador e trocar palavras não produz argumento, produz paráfrase.",
    passos: [
      "Planejamento mínimo: antes de redigir, monta-se um esquema com a tese, dois argumentos e a conclusão.",
      "Tópico frasal adiantado: cada argumento do esquema vira a frase de abertura de um parágrafo de desenvolvimento.",
      "Decisão tardia: escolher o tema no último parágrafo ou escrever várias introduções deixa o miolo sem norte.",
      "Atalhos que não planejam: proposta sem tese e cópia do texto motivador não constituem o esquema. O planejamento adequado é tese, dois argumentos e conclusão.",
    ],
    atalho:
      "Se você não consegue dizer a tese em uma frase e os dois argumentos em duas linhas, ainda não é hora da primeira palavra do texto. Quando essas três peças cabem num esquema, a introdução, os dois desenvolvimentos e a conclusão já têm o que dizer. Trocar palavras do texto motivador não substitui esse esquema.",
  },
};
