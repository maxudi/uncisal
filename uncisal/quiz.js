// Simulado Forense - 30 Questões
const quizSlides = [
{
    tipo: "quiz",
    conteudo: {
        titulo: "Simulado Forense - Questão 1",
        subtitulo: "Unidade 01: Fundamentos",
        pergunta: "Qual é o objetivo principal que define uma análise como verdadeiramente forense?",
        opcoes: [
            "A capacidade de recuperar arquivos deletados.",
            "A aplicação de métodos científicos para que a prova suporte o contraditório judicial.",
            "O uso exclusivo de ferramentas pagas de alta tecnologia.",
            "A identificação imediata do culpado sem necessidade de processo."
        ],
        dica: "Lembre-se: Forense vem de Fórum.",
        respostaCorreta: 1
    }
},
{
    tipo: "quiz",
    conteudo: {
        titulo: "Simulado Forense - Questão 2",
        subtitulo: "Unidade 01: Princípio de Locard",
        pergunta: "Sobre o Princípio de Locard aplicado ao mundo digital, qual afirmação é correta?",
        opcoes: [
            "Todo contato ou ação deixa um rastro, mesmo que seja o registro da própria deleção.",
            "No ambiente digital é impossível deixar rastros.",
            "O rastro digital só existe se o usuário estiver conectado à internet.",
            "Rastros digitais são apagados permanentemente ao desligar o PC."
        ],
        dica: "Todo contato deixa um rastro - logs, metadados, temporários.",
        respostaCorreta: 0
    }
},
{
    tipo: "quiz",
    conteudo: {
        titulo: "Simulado Forense - Questão 3",
        subtitulo: "Unidade 01: Ética",
        pergunta: "Qual é a principal responsabilidade ética do perito digital?",
        opcoes: [
            "Garantir a condenação do suspeito a qualquer custo.",
            "Analisar todos os arquivos pessoais, mesmo os irrelevantes ao caso.",
            "Manter a imparcialidade, limitando-se aos fatos técnicos extraíveis.",
            "Alterar a evidência para torná-la mais compreensível."
        ],
        dica: "O perito trabalha para a verdade, não para a polícia ou defesa.",
        respostaCorreta: 2
    }
},
{
    tipo: "quiz",
    conteudo: {
        titulo: "Simulado Forense - Questão 4",
        subtitulo: "Unidade 01: Reprodutibilidade",
        pergunta: "Por que a perícia digital é um processo crítico em termos de 'reprodutibilidade'?",
        opcoes: [
            "Porque a evidência é frágil e pode ser alterada no primeiro contato.",
            "Porque os peritos não utilizam o método científico.",
            "Porque cada perito possui sua própria interpretação pessoal.",
            "Porque as ferramentas mudam de resultado toda vez que são usadas."
        ],
        dica: "Você só tem UMA chance de coletar a RAM ou o local de crime.",
        respostaCorreta: 0
    }
},
{
    tipo: "quiz",
    conteudo: {
        titulo: "Simulado Forense - Questão 5",
        subtitulo: "Unidade 01: Validade Jurídica",
        pergunta: "O que define a 'validade jurídica' de uma evidência digital?",
        opcoes: [
            "O fato de ter sido encontrada por um policial.",
            "A quantidade de gigabytes de dados coletados.",
            "O uso de criptografia para esconder a evidência da defesa.",
            "A comprovação de sua integridade e preservação da cadeia de custódia."
        ],
        dica: "Sem Cadeia de Custódia, é lixo jurídico.",
        respostaCorreta: 3
    }
},
{
    tipo: "quiz",
    conteudo: {
        titulo: "Simulado Forense - Questão 6",
        subtitulo: "Unidade 02: ISO 27037",
        pergunta: "Segundo a ISO/IEC 27037, quem é o responsável pela preservação inicial no local?",
        opcoes: [
            "Juiz de Instrução Forense.",
            "Interventor em Evidência Digital (DEFR).",
            "Especialista em Evidência Digital (DES).",
            "Administrador de Sistemas da Empresa."
        ],
        dica: "First Responder - primeiro a chegar.",
        respostaCorreta: 1
    }
},
{
    tipo: "quiz",
    conteudo: {
        titulo: "Simulado Forense - Questão 7",
        subtitulo: "Unidade 02: Cadeia de Custódia",
        pergunta: "Por que a 'Cadeia de Custódia' é o coração da perícia?",
        opcoes: [
            "Porque permite cobrar mais caro pelo serviço.",
            "Porque serve para criptografar os dados.",
            "Porque garante a rastreabilidade, impedindo alegações de plantação de provas.",
            "Porque define quais crimes são mais importantes."
        ],
        dica: "O pecado capital forense é quebrar a Cadeia.",
        respostaCorreta: 2
    }
},
{
    tipo: "quiz",
    conteudo: {
        titulo: "Simulado Forense - Questão 8",
        subtitulo: "Unidade 03: Slack Space",
        pergunta: "O que caracteriza o 'Slack Space'?",
        opcoes: [
            "Espaço entre o fim do arquivo e o final do cluster alocado.",
            "Espaço livre no disco para novos arquivos.",
            "Uma partição oculta para criptografia.",
            "Área do disco com danos físicos (Bad Sectors)."
        ],
        dica: "O espaço desperdiçado onde arquivos deletados vivem.",
        respostaCorreta: 0
    }
},
{
    tipo: "quiz",
    conteudo: {
        titulo: "Simulado Forense - Questão 9",
        subtitulo: "Unidade 03: TRIM",
        pergunta: "Qual o desafio introduzido pelo comando TRIM em SSDs?",
        opcoes: [
            "Aumenta o tamanho dos arquivos.",
            "Criptografa o disco automaticamente.",
            "Limpa fisicamente setores deletados, impedindo a recuperação.",
            "Impede o uso de Write Blockers."
        ],
        dica: "SSDs modernos limpam sozinhos para ganhar performance.",
        respostaCorreta: 2
    }
},
{
    tipo: "quiz",
    conteudo: {
        titulo: "Simulado Forense - Questão 10",
        subtitulo: "Unidade 03: NTFS",
        pergunta: "Onde ficam os metadados (nome, datas) em um sistema NTFS?",
        opcoes: [
            "No BIOS do computador.",
            "Na MFT (Master File Table).",
            "No arquivo Pagefile.sys.",
            "Dentro do Payload do arquivo."
        ],
        dica: "É uma tabela mestra de arquivos.",
        respostaCorreta: 1
    }
},
{
    tipo: "quiz",
    conteudo: {
        titulo: "Simulado Forense - Questão 11",
        subtitulo: "Unidade 04: Volatilidade",
        pergunta: "Por que a Ordem de Volatilidade é crucial?",
        opcoes: [
            "Para coletar primeiro o que permanece mais tempo no disco.",
            "Para garantir que arquivos grandes sejam copiados primeiro.",
            "Para priorizar dados que desaparecem rápido (RAM, conexões).",
            "Para evitar que o suspeito apague arquivos físicos."
        ],
        dica: "RAM antes de HD - o que evapora primeiro.",
        respostaCorreta: 2
    }
},
{
    tipo: "quiz",
    conteudo: {
        titulo: "Simulado Forense - Questão 12",
        subtitulo: "Unidade 04: RAM",
        pergunta: "O que se encontra no Dump de RAM que não está no HD?",
        opcoes: [
            "Chaves de criptografia ativas e processos ocultos.",
            "Fotos salvas na pasta do usuário.",
            "Histórico de e-mails de anos atrás.",
            "Marca e modelo do processador."
        ],
        dica: "A RAM é o presente, o disco é o passado.",
        respostaCorreta: 0
    }
},
{
    tipo: "quiz",
    conteudo: {
        titulo: "Simulado Forense - Questão 13",
        subtitulo: "Unidade 04: Windows Logs",
        pergunta: "Qual log do Windows identifica falhas de autenticação?",
        opcoes: [
            "Application Log.",
            "Security Log.",
            "System Log.",
            "Setup Log."
        ],
        dica: "Auditoria e segurança ficam em qual log?",
        respostaCorreta: 1
    }
},
{
    tipo: "quiz",
    conteudo: {
        titulo: "Simulado Forense - Questão 14",
        subtitulo: "Unidade 04: BFU",
        pergunta: "O que caracteriza o estado BFU em um smartphone?",
        opcoes: [
            "O modo avião está ativado.",
            "A bateria está abaixo de 5%.",
            "O aparelho foi reiniciado e a criptografia ainda protege os dados.",
            "O aparelho já foi desbloqueado uma vez."
        ],
        dica: "Before First Unlock - antes do primeiro desbloqueio.",
        respostaCorreta: 2
    }
},
{
    tipo: "quiz",
    conteudo: {
        titulo: "Simulado Forense - Questão 15",
        subtitulo: "Unidade 04: Faraday",
        pergunta: "Qual a função da Capa de Faraday?",
        opcoes: [
            "Permitir chamadas não rastreadas.",
            "Criptografar o celular automaticamente.",
            "Aumentar a duração da bateria.",
            "Isolar sinais de RF para impedir apagamento remoto (Wipe)."
        ],
        dica: "Bloqueio total de sinais.",
        respostaCorreta: 3
    }
},
{
    tipo: "quiz",
    conteudo: {
        titulo: "Simulado Forense - Questão 16",
        subtitulo: "Unidade 05: IPED",
        pergunta: "Qual ferramenta nacional da PF foca em Big Data Forense?",
        opcoes: [
            "IPED.",
            "Magnet AXIOM.",
            "Cellebrite.",
            "Volatility."
        ],
        dica: "Orgulho nacional da Polícia Federal.",
        respostaCorreta: 0
    }
},
{
    tipo: "quiz",
    conteudo: {
        titulo: "Simulado Forense - Questão 17",
        subtitulo: "Unidade 05: Write Blocker",
        pergunta: "O que um Write Blocker faz fisicamente?",
        opcoes: [
            "Aumenta a velocidade de cópia.",
            "Permite leitura, mas bloqueia eletronicamente qualquer escrita.",
            "Apaga vírus do HD.",
            "Quebra a senha do Windows."
        ],
        dica: "Hardware obrigatório para não contaminar a prova.",
        respostaCorreta: 1
    }
},
{
    tipo: "quiz",
    conteudo: {
        titulo: "Simulado Forense - Questão 18",
        subtitulo: "Unidade 05: Hunchly",
        pergunta: "Para que serve o Hunchly?",
        opcoes: [
            "Extrair iPhones em BFU.",
            "Analisar logs de servidores Linux.",
            "Preservar evidências web durante a navegação.",
            "Recuperar fotos de cartões SD."
        ],
        dica: "Web Forensics - prova online que não desaparece.",
        respostaCorreta: 2
    }
},
{
    tipo: "quiz",
    conteudo: {
        titulo: "Simulado Forense - Questão 19",
        subtitulo: "Unidade 05: Autopsy",
        pergunta: "A ferramenta Autopsy é conhecida por ser:",
        opcoes: [
            "Um hardware de clonagem de discos.",
            "Um antivírus russo.",
            "Uma suíte open-source poderosa com interface gráfica.",
            "A única capaz de invadir iCloud."
        ],
        dica: "Open-source, amigável e extensível.",
        respostaCorreta: 2
    }
},
{
    tipo: "quiz",
    conteudo: {
        titulo: "Simulado Forense - Questão 20",
        subtitulo: "Unidade 05: DVR Forensics",
        pergunta: "Para analisar sistemas de arquivos proprietários de DVR, usa-se:",
        opcoes: [
            "Formatação do disco em NTFS.",
            "Placa lógica de computador comum.",
            "Ferramentas especializadas em DVR Forensics.",
            "Microscópio eletrônico."
        ],
        dica: "CFTV tem sistema proprietário.",
        respostaCorreta: 2
    }
},
{
    tipo: "quiz",
    conteudo: {
        titulo: "Simulado Forense - Questão 21",
        subtitulo: "Unidade 06: Análise de Vínculos",
        pergunta: "O que define a técnica de 'Análise de Vínculos'?",
        opcoes: [
            "Verificar o Hash da cópia.",
            "Instalar links de internet rápidos.",
            "Mapear relacionamentos e redes criminosas.",
            "Conectar cabos USB no dispositivo."
        ],
        dica: "Essencial no GAECO para organizações criminosas.",
        respostaCorreta: 2
    }
},
{
    tipo: "quiz",
    conteudo: {
        titulo: "Simulado Forense - Questão 22",
        subtitulo: "Unidade 06: Quesitos",
        pergunta: "Qual a finalidade dos Quesitos?",
        opcoes: [
            "Nomes dos suspeitos presos.",
            "Perguntas formuladas pelo juiz/partes que o perito deve responder.",
            "Ferramentas de software escolhidas.",
            "Erros encontrados na RAM."
        ],
        dica: "O limite da atuação do perito.",
        respostaCorreta: 1
    }
},
{
    tipo: "quiz",
    conteudo: {
        titulo: "Simulado Forense - Questão 23",
        subtitulo: "Unidade 06: Timeline",
        pergunta: "O que significa 'Time-lining'?",
        opcoes: [
            "Definir prazo de entrega do laudo.",
            "Contar o tempo que o suspeito usou o PC.",
            "Ajustar o relógio do sistema.",
            "Organizar artefatos em sequência cronológica dos fatos."
        ],
        dica: "A narrativa que convence o magistrado.",
        respostaCorreta: 3
    }
},
{
    tipo: "quiz",
    conteudo: {
        titulo: "Simulado Forense - Questão 24",
        subtitulo: "Unidade 06: Linguagem",
        pergunta: "Por que evitar 'tecniquês' excessivo no laudo?",
        opcoes: [
            "Porque a ABNT proíbe estrangeirismos.",
            "Para a defesa não conseguir contestar.",
            "Porque o Juiz precisa entender o fato para decidir.",
            "Para esconder falta de conhecimento."
        ],
        dica: "Traduzir offset hexadecimal em evidência de acesso.",
        respostaCorreta: 2
    }
},
{
    tipo: "quiz",
    conteudo: {
        titulo: "Simulado Forense - Questão 25",
        subtitulo: "Unidade 06: Metodologia",
        pergunta: "O que deve constar na seção de Metodologia?",
        opcoes: [
            "Confissão do suspeito.",
            "Descrição das ferramentas e técnicas para garantir repetibilidade.",
            "Lista de policiais da operação.",
            "Opinião sobre o caráter do investigado."
        ],
        dica: "Quais ferramentas e técnicas foram usadas?",
        respostaCorreta: 1
    }
},
{
    tipo: "quiz",
    conteudo: {
        titulo: "Simulado Forense - Questão 26",
        subtitulo: "Unidade 06: Laudo vs Parecer",
        pergunta: "Qual a diferença entre Laudo e Parecer Técnico?",
        opcoes: [
            "Laudo é do perito oficial; Parecer é do assistente técnico das partes.",
            "Laudo é à mão e Parecer é digitado.",
            "Parecer tem mais valor que o Laudo.",
            "Laudo não pode ter imagens."
        ],
        dica: "Perito oficial vs assistente técnico.",
        respostaCorreta: 0
    }
},
{
    tipo: "quiz",
    conteudo: {
        titulo: "Simulado Forense - Questão 27",
        subtitulo: "Unidade 06: Nuvem",
        pergunta: "Desafio de dados na nuvem no relatório:",
        opcoes: [
            "Falta de sistema de arquivos na nuvem.",
            "Jurisdição e obtenção legal de dados em outros países.",
            "Cor dos ícones dos arquivos.",
            "Imprimir todos os arquivos para o juiz."
        ],
        dica: "Dados em servidores globais exigem cooperação internacional.",
        respostaCorreta: 1
    }
},
{
    tipo: "quiz",
    conteudo: {
        titulo: "Simulado Forense - Questão 28",
        subtitulo: "Unidade 06: Fase de Análise",
        pergunta: "O que caracteriza a fase de Análise?",
        opcoes: [
            "Levar computadores ao laboratório.",
            "Limpeza física do hardware.",
            "Processo intelectual de interpretar dados para responder ao caso.",
            "Sorteio de quem escreve o laudo."
        ],
        dica: "A fase intelectual que cruza logs e metadados.",
        respostaCorreta: 2
    }
},
{
    tipo: "quiz",
    conteudo: {
        titulo: "Simulado Forense - Questão 29",
        subtitulo: "Unidade 06: Hash",
        pergunta: "Por que o 'Efeito Avalanche' é importante no Hash?",
        opcoes: [
            "Recupera arquivos apagados.",
            "Garante que 1 bit alterado mude todo o Hash final.",
            "Faz o PC travar em caso de erro.",
            "Deleta arquivos duplicados."
        ],
        dica: "A impressão digital dos arquivos.",
        respostaCorreta: 1
    }
},
{
    tipo: "quiz",
    conteudo: {
        titulo: "Simulado Forense - Questão 30",
        subtitulo: "Unidade 06: Imparcialidade",
        pergunta: "Atitude do perito ao achar prova de inocência:",
        opcoes: [
            "Ignorar para não atrapalhar a polícia.",
            "Apagar a evidência.",
            "Relatar com a mesma clareza da prova de culpa.",
            "Cobrar extra da defesa."
        ],
        dica: "O perito trabalha para a evidência, não para a polícia.",
        respostaCorreta: 2
    }
}
];
