// --- SIMULADO COMPLETO: 30 QUESTÕES (UNIDADES 1 A 6) ---

const simuladoForense = [

{
    tipo: "topicoTextoItens",
    conteudo: {
        emoji: "📝",
        titulo: "A Importância da Fixação Técnica",
        subtitulo: "Por que realizar os simulados com rigor?",
        topicos: [
            {
                titulo: "Simulação do Contraditório",
                texto: "Na perícia real, seu trabalho será questionado por assistentes técnicos e advogados. O simulado antecipa esse desafio:",
                itens: [
                    "<strong>Validação do Conhecimento:</strong> Garante que termos como BFU, AFU e Hash não sejam apenas siglas, mas conceitos dominados.",
                    "<strong>Precisão Terminológica:</strong> Um erro de conceito em um laudo pode anular uma prova inteira. As questões treinam o uso da palavra correta.",
                    "<strong>Agilidade Analítica:</strong> Automatiza o raciocínio para que, no local de crime, a tomada de decisão seja rápida e segura.",
                    "<strong>Preparação para Certificações:</strong> Muitas questões seguem o padrão de provas internacionais (EnCE, ACE, IACIS) e concursos públicos."
                ]
            }
        ]
    }
},
  // --- UNIDADE 01: INTRODUÇÃO E FUNDAMENTOS ---
  {
    pergunta: "Qual é o objetivo principal que define uma análise como verdadeiramente forense?",
    opcoes: [
      "A capacidade de recuperar arquivos deletados.",
      "A aplicação de métodos científicos para que a prova suporte o contraditório judicial.",
      "O uso exclusivo de ferramentas pagas de alta tecnologia.",
      "A identificação imediata do culpado sem necessidade de processo."
    ],
    correta: 1,
    unidade: 1
  },
  {
    pergunta: "Sobre o Princípio de Locard aplicado ao mundo digital, qual afirmação é correta?",
    opcoes: [
      "No ambiente digital é impossível deixar rastros.",
      "Todo contato ou ação deixa um rastro, mesmo que seja o registro da própria deleção.",
      "O rastro digital só existe se o usuário estiver conectado à internet.",
      "Rastros digitais são apagados permanentemente ao desligar o PC."
    ],
    correta: 1,
    unidade: 1
  },
  {
    pergunta: "Qual é a principal responsabilidade ética do perito digital?",
    opcoes: [
      "Garantir a condenação do suspeito a qualquer custo.",
      "Manter a imparcialidade, limitando-se aos fatos técnicos extraíveis.",
      "Analisar todos os arquivos pessoais, mesmo os irrelevantes ao caso.",
      "Alterar a evidência para torná-la mais compreensível."
    ],
    correta: 1,
    unidade: 1
  },
  {
    pergunta: "Por que a perícia digital é um processo crítico em termos de 'reprodutibilidade'?",
    opcoes: [
      "Porque a evidência é frágil e pode ser alterada no primeiro contato.",
      "Porque os peritos não utilizam o método científico.",
      "Porque cada perito possui sua própria interpretação pessoal.",
      "Porque as ferramentas mudam de resultado toda vez que são usadas."
    ],
    correta: 0,
    unidade: 1
  },
  {
    pergunta: "O que define a 'validade jurídica' de uma evidência digital?",
    opcoes: [
      "O fato de ter sido encontrada por um policial.",
      "A comprovação de sua integridade e preservação da cadeia de custódia.",
      "A quantidade de gigabytes de dados coletados.",
      "O uso de criptografia para esconder a evidência da defesa."
    ],
    correta: 1,
    unidade: 1
  },

  // --- UNIDADE 02 E 03: PROCEDIMENTOS E ESTRUTURAS ---
  {
    pergunta: "Segundo a ISO/IEC 27037, quem é o responsável pela preservação inicial no local?",
    opcoes: [
      "Especialista em Evidência Digital (DES).",
      "Interventor em Evidência Digital (DEFR).",
      "Juiz de Instrução Forense.",
      "Administrador de Sistemas da Empresa."
    ],
    correta: 1,
    unidade: 2
  },
  {
    pergunta: "Por que a 'Cadeia de Custódia' é o coração da perícia?",
    opcoes: [
      "Porque permite cobrar mais caro pelo serviço.",
      "Porque garante a rastreabilidade, impedindo alegações de plantação de provas.",
      "Porque serve para criptografar os dados.",
      "Porque define quais crimes são mais importantes."
    ],
    correta: 1,
    unidade: 2
  },
  {
    pergunta: "O que caracteriza o 'Slack Space'?",
    opcoes: [
      "Espaço entre o fim do arquivo e o final do cluster alocado.",
      "Espaço livre no disco para novos arquivos.",
      "Uma partição oculta para criptografia.",
      "Área do disco com danos físicos (Bad Sectors)."
    ],
    correta: 0,
    unidade: 3
  },
  {
    pergunta: "Qual o desafio introduzido pelo comando TRIM em SSDs?",
    opcoes: [
      "Aumenta o tamanho dos arquivos.",
      "Limpa fisicamente setores deletados, impedindo a recuperação.",
      "Criptografa o disco automaticamente.",
      "Impede o uso de Write Blockers."
    ],
    correta: 1,
    unidade: 3
  },
  {
    pergunta: "Onde ficam os metadados (nome, datas) em um sistema NTFS?",
    opcoes: [
      "No arquivo Pagefile.sys.",
      "Na MFT (Master File Table).",
      "Dentro do Payload do arquivo.",
      "No BIOS do computador."
    ],
    correta: 1,
    unidade: 3
  },

  // --- UNIDADE 04: LOGS E MEMÓRIA ---
  {
    pergunta: "Por que a Ordem de Volatilidade é crucial?",
    opcoes: [
      "Para coletar primeiro o que permanece mais tempo no disco.",
      "Para priorizar dados que desaparecem rápido (RAM, conexões).",
      "Para garantir que arquivos grandes sejam copiados primeiro.",
      "Para evitar que o suspeito apague arquivos físicos."
    ],
    correta: 1,
    unidade: 4
  },
  {
    pergunta: "O que se encontra no Dump de RAM que não está no HD?",
    opcoes: [
      "Fotos salvas na pasta do usuário.",
      "Chaves de criptografia ativas e processos ocultos.",
      "Histórico de e-mails de anos atrás.",
      "Marca e modelo do processador."
    ],
    correta: 1,
    unidade: 4
  },
  {
    pergunta: "Qual log do Windows identifica falhas de autenticação?",
    opcoes: [
      "System Log.",
      "Security Log.",
      "Application Log.",
      "Setup Log."
    ],
    correta: 1,
    unidade: 4
  },
  {
    pergunta: "O que caracteriza o estado BFU em um smartphone?",
    opcoes: [
      "O aparelho já foi desbloqueado uma vez.",
      "O aparelho foi reiniciado e a criptografia ainda protege os dados.",
      "O modo avião está ativado.",
      "A bateria está abaixo de 5%."
    ],
    correta: 1,
    unidade: 4
  },
  {
    pergunta: "Qual a função da Capa de Faraday?",
    opcoes: [
      "Aumentar a duração da bateria.",
      "Isolar sinais de RF para impedir apagamento remoto (Wipe).",
      "Criptografar o celular automaticamente.",
      "Permitir chamadas não rastreadas."
    ],
    correta: 1,
    unidade: 4
  },

  // --- UNIDADE 05: FERRAMENTAS ---
  {
    pergunta: "Qual ferramenta nacional da PF foca em Big Data Forense?",
    opcoes: [
      "Magnet AXIOM.",
      "IPED.",
      "Cellebrite.",
      "Volatility."
    ],
    correta: 1,
    unidade: 5
  },
  {
    pergunta: "O que um Write Blocker faz fisicamente?",
    opcoes: [
      "Apaga vírus do HD.",
      "Permite leitura, mas bloqueia eletronicamente qualquer escrita.",
      "Aumenta a velocidade de cópia.",
      "Quebra a senha do Windows."
    ],
    correta: 1,
    unidade: 5
  },
  {
    pergunta: "Para que serve o Hunchly?",
    opcoes: [
      "Recuperar fotos de cartões SD.",
      "Preservar evidências web durante a navegação.",
      "Extrair iPhones em BFU.",
      "Analisar logs de servidores Linux."
    ],
    correta: 1,
    unidade: 5
  },
  {
    pergunta: "A ferramenta Autopsy é conhecida por ser:",
    opcoes: [
      "A única capaz de invadir iCloud.",
      "Uma suíte open-source poderosa com interface gráfica.",
      "Um hardware de clonagem de discos.",
      "Um antivírus russo."
    ],
    correta: 1,
    unidade: 5
  },
  {
    pergunta: "Para analisar sistemas de arquivos proprietários de DVR, usa-se:",
    opcoes: [
      "Formatação do disco em NTFS.",
      "Ferramentas especializadas em DVR Forensics.",
      "Microscópio eletrônico.",
      "Placa lógica de computador comum."
    ],
    correta: 1,
    unidade: 5
  },

  // --- UNIDADE 06: INVESTIGAÇÃO E RELATÓRIO ---
  {
    pergunta: "O que define a técnica de 'Análise de Vínculos'?",
    opcoes: [
      "Conectar cabos USB no dispositivo.",
      "Mapear relacionamentos e redes criminosas.",
      "Verificar o Hash da cópia.",
      "Instalar links de internet rápidos."
    ],
    correta: 1,
    unidade: 6
  },
  {
    pergunta: "Qual a finalidade dos Quesitos?",
    opcoes: [
      "Ferramentas de software escolhidas.",
      "Perguntas formuladas pelo juiz/partes que o perito deve responder.",
      "Erros encontrados na RAM.",
      "Nomes dos suspeitos presos."
    ],
    correta: 1,
    unidade: 6
  },
  {
    pergunta: "O que significa 'Time-lining'?",
    opcoes: [
      "Contar o tempo que o suspeito usou o PC.",
      "Organizar artefatos em sequência cronológica dos fatos.",
      "Ajustar o relógio do sistema.",
      "Definir prazo de entrega do laudo."
    ],
    correta: 1,
    unidade: 6
  },
  {
    pergunta: "Por que evitar 'tecniquês' excessivo no laudo?",
    opcoes: [
      "Para esconder falta de conhecimento.",
      "Porque o Juiz precisa entender o fato para decidir.",
      "Para a defesa não conseguir contestar.",
      "Porque a ABNT proíbe estrangeirismos."
    ],
    correta: 1,
    unidade: 6
  },
  {
    pergunta: "O que deve constar na seção de Metodologia?",
    opcoes: [
      "Lista de policiais da operação.",
      "Descrição das ferramentas e técnicas para garantir repetibilidade.",
      "Opinião sobre o caráter do investigado.",
      "Confissão do suspeito."
    ],
    correta: 1,
    unidade: 6
  },

  // --- EXTRAS DE FECHAMENTO ---
  {
    pergunta: "Qual a diferença entre Laudo e Parecer Técnico?",
    opcoes: [
      "Laudo é do perito oficial; Parecer é do assistente técnico das partes.",
      "Laudo é à mão e Parecer é digitado.",
      "Parecer tem mais valor que o Laudo.",
      "Laudo não pode ter imagens."
    ],
    correta: 0,
    unidade: 6
  },
  {
    pergunta: "Desafio de dados na nuvem no relatório:",
    opcoes: [
      "Cor dos ícones dos arquivos.",
      "Jurisdição e obtenção legal de dados em outros países.",
      "Falta de sistema de arquivos na nuvem.",
      "Imprimir todos os arquivos para o juiz."
    ],
    correta: 1,
    unidade: 6
  },
  {
    pergunta: "O que caracteriza a fase de Análise?",
    opcoes: [
      "Levar computadores ao laboratório.",
      "Processo intelectual de interpretar dados para responder ao caso.",
      "Limpeza física do hardware.",
      "Sorteio de quem escreve o laudo."
    ],
    correta: 1,
    unidade: 6
  },
  {
    pergunta: "Por que o 'Efeito Avalanche' é importante no Hash?",
    opcoes: [
      "Faz o PC travar em caso de erro.",
      "Garante que 1 bit alterado mude todo o Hash final.",
      "Recupera arquivos apagados.",
      "Deleta arquivos duplicados."
    ],
    correta: 1,
    unidade: 6
  },
  {
    pergunta: "Atitude do perito ao achar prova de inocência:",
    opcoes: [
      "Ignorar para não atrapalhar a polícia.",
      "Relatar com a mesma clareza da prova de culpa.",
      "Apagar a evidência.",
      "Cobrar extra da defesa."
    ],
    correta: 1,
    unidade: 6
  }
];