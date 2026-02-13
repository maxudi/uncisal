// Conteúdo das seções - edite aqui para adicionar ou modificar slides
const slides = [
    {
        tipo: "experiencia",
        conteudo: {
            nome: "Prof. Me. MAXIMIANO EDUARDO PEREIRA",
            foto: "max.png",
            badge: "Experiência Profissional",
            titulo: "Experiência de Campo e Inteligência 🛡️",
            cards: [
                {
                    titulo: "Infraestrutura Crítica",
                    itens: [
                        "🔹 <strong>IBM UNIX & Linux:</strong> Administração de sistemas e CPD nos anos 2000.",
                        "🔹 <strong>Comunicação Satelital:</strong> Implantação de redes de dados fabris."
                    ]
                },
                {
                    titulo: "Inteligência e GAECO",
                    itens: [
                        "🔹 <strong>PMMG (Desde 2002):</strong> Análise criminal e suporte à decisão via Big Data.",
                        "🔹 <strong>LABFOR GAECO:</strong> Responsável Técnico do Laboratório Forense (Sgt. PMMG cedido ao MPMG).",
                        "🔹 <strong>Certificação Cellebrite:</strong> Extração avançada e combate ao crime organizado."
                    ]
                }
            ]
        }
    },
    {
        tipo: "academico",
        conteudo: {
            badge: "Acadêmico & Pesquisa",
            titulo: "Percurso Acadêmico e Docência 🎓",
            cards: [
                {
                    titulo: "Pesquisa e Títulos",
                    itens: [
                        "✅ <strong>Doutorando/Mestre</strong> em Sist. Computacionais (UFU).",
                        "✅ Esp. em <strong>Computação Forense</strong> (IFTM).",
                        "✅ Esp. em <strong>Inteligência de Segurança</strong> (IFSULDEMINAS).",
                        "✅ Esp. em <strong>IoT e Automação</strong> (Anhanguera)."
                    ]
                },
                {
                    titulo: "Ensino Superior",
                    itens: [
                        "👨‍🏫 <strong>UNCISAL:</strong> Pós em Segurança e Forense.",
                        "👨‍🏫 <strong>Grupo Cogna:</strong> Graduação em Tecnologia.",
                        "👨‍🏫 <strong>Instrutor PMMG:</strong> Capacitação técnica operacional."
                    ]
                }
            ],
            citacao: "Buscando a convergência entre o rigor científico e a prática de campo."
        }
    },
{
    "tipo": "topicoTexto",
    "conteudo": {
        "emoji": "📝",
        "titulo": "Plano de Curso",
        "subtitulo": "Nossa jornada pelos fundamentos da análise forense digital💪",
        "layout": "duas_colunas",
        "colunas": [
            {
                "nome": "Coluna 1",
                "topicos": [
                    { "titulo": "1. Introdução à Análise Forense", "texto": "Conceitos, Fundamentos, Ética e Legalidade." },
                    { "titulo": "2. Coleta e Preservação", "texto": "Cadeia de Custódia e Boas Práticas." },
                    { "titulo": "3. Sistemas de Arquivos", "texto": "Estruturas e Recuperação de Dados." }
                ]
            },
            {
                "nome": "Coluna 2",
                "topicos": [
                    { "titulo": "4. Análise de Logs e Memória", "texto": "Sistemas e Memória Volátil." },
                    { "titulo": "5. Ferramentas Forenses", "texto": "Softwares e Técnicas de Análise." },
                    { "titulo": "6. Investigação e Relatórios", "texto": "Metodologias e Laudos Periciais." }
                ]
            }
        ]
    }
},
{
    tipo: "topicoTexto",
    conteudo: {
        emoji: "📝✨",
        titulo: "A Evolução Tecnológica",
        subtitulo: "Da válvula ao rastro digital: a evolução que moldou a perícia forense",
        topicos: [
            { titulo: "Válvulas (O Início)", texto: "Máquinas monumentais (ENIAC). Processamento binário puro, sem armazenamento persistente como conhecemos; a 'perícia' seria puramente física/elétrica." },
            { titulo: "Transistores (A Miniaturização)", texto: "Substituição das válvulas. Maior confiabilidade e surgimento das memórias magnéticas (os primórdios do que viria a ser o HD" },
            { titulo: "Microchips (Circuitos Integrados)", texto: "Milhares de transistores em uma pastilha de silício. Início do processamento em massa e padronização de arquiteturas." }
        ]
    }
},
{
    tipo: "topicoTexto",
    conteudo: {
        emoji: "📝✨",
        titulo: "A Era da Conectividade e Mobilidade",
        subtitulo: "Novas tecnologias, Internet, IA",
        topicos: [
            { titulo: "Computador Pessoal (PC)", texto: "A computação chega às mesas e lares. Surgem os sistemas de arquivos (FAT, NTFS) e a necessidade de recuperar dados deletados em discos locais." },
            { titulo: "Internet (A Grande Teia)", texto: "A evidência sai do isolamento. Surgem os crimes de rede, logs de acesso e a análise forense de tráfego de dados (TCP/IP)." },
            { titulo: "Hoje (Ubiquidade e Nuvem)", texto: "Dispositivos menores que a palma da mão, criptografia de hardware e dados fragmentados em servidores globais. A análise é multidispositivo." }
        ]
    }
},
{
    tipo: "topicoTextoItens",
    conteudo: {
        emoji: "",
        titulo: "Análise Forense🏛️",
        subtitulo: "",
        topicos: [
            {
                titulo: "Origem",
                texto: "O termo Forense vem do latim forensis, que se refere ao fórum. Na Roma Antiga, o fórum era o local onde as disputas judiciais aconteciam. Portanto, análise forense é, por definição, qualquer análise técnica ou científica feita para ser utilizada em um tribunal.",
                itens: []
            },
            {
                titulo: "Definição",
                texto: "É o conjunto de métodos científicos utilizados para examinar vestígios, objetos e locais, com o objetivo de responder a três perguntas fundamentais para a justiça: ",
                itens: [
                        "<strong>O que aconteceu?</strong> (A dinâmica do evento)",
                        "<strong>Como aconteceu?</strong> (O método utilizado)",
                        "<strong>Quem estava envolvido?</strong> (A autoria)"
                    ]
            }
        ]
    }
},
{
    tipo: "topicoTextoItens",
    conteudo: {
        emoji: "",
        titulo: "As Áreas Clássicas (Não Digitais)",
        subtitulo: "",
        topicos: [
            {
                titulo: "",
                texto: "Antes de falarmos de bits, a análise forense já resolvia crimes através de:",
                itens: [
                    "<strong>Criminalística</strong> Exame do local do crime, análise de manchas de sangue (serologia) e balística.",
                    "<strong>Papiloscopia</strong> O estudo das impressões digitais para identificação humana.",
                    "<strong>Medicina Legal </strong> Autópsias e exames de corpo de delito para determinar a causa da morte ou lesões.",
                    "<strong>Grafotecnia </strong> Análise de escritas e assinaturas para detectar falsificações.",
                    "<strong>Toxicologia </strong> Identificação de substâncias químicas, drogas ou venenos no organismo.",
                    "<strong>Entomologia </strong>O estudo de insetos encontrados em cadáveres para determinar o tempo da morte."
                ]
            }
        ]
    }
},
{
    tipo: "topicoTextoItens",
    conteudo: {
        emoji: "",
        titulo: "Análise Forense🏛️ x Análise Forense Digital🏛️📱",
        subtitulo: "",
        topicos: [

            {
                titulo: "A análise forense se diferencia de uma análise científica comum por causa do rigor legal",
                texto: "Na ciência comum, se você comete um erro, você refaz o experimento. Na análise forense, se você quebra a Cadeia de Custódia (o registro de quem tocou na prova), a prova é anulada e o criminoso pode ser solto, mesmo que a análise esteja correta.",
                itens: []
            }
        ]
    }
},

// --- UNIDADE 02 ---
{
    tipo: "topicoTexto",
    conteudo: {
        emoji: "⚖️",
        titulo: "UNIDADE 02 - Coleta e preservação de evidências",
        subtitulo: "Princípios e práticas da coleta e preservação de evidências",
        topicos: [
            { titulo: "Principal Fundamentação", texto: "Norma ISO/IEC 27037" },
            { titulo: "Atores Principais", texto: "Quem vai manusear a evidência" },
            { titulo: "Pilares da Evidência Digital", texto: "Principais pontos a serem observados" },
            { titulo: "Principios Fundamentais", texto: "Garantindo a validade científica do processo" },
            { titulo: "Fases Principais", texto: "Principais etapas do procedimento técnico" },
            { titulo: "Casos Especiais", texto: "Quando o sistema não pode ser desligado" },
            { titulo: "Cadeia de Custódia", texto: "O coração da perícia judicial" }
        ]
    }
},

{
    tipo: "topicoTexto",
    conteudo: {
        emoji: "⚖️",
        titulo: "A Norma ISO/IEC 27037",
        subtitulo: "O Padrão Ouro na Preservação de Evidências Digitais",
        topicos: [
            { titulo: "O que é?", texto: "Diretriz internacional para identificação, coleta, aquisição e preservação de evidência digital. Essencial para garantir a admissibilidade jurídica." },
            { titulo: "Objetivo Principal", texto: "Padronizar o tratamento da evidência para que ela tenha força probatória, mantendo integridade e autenticidade desde a cena do crime até o tribunal." },
            { titulo: "Aplicação Reativa", texto: "A norma foca em medidas tomadas *após* a ocorrência de um incidente ou crime." }
        ]
    }
},
{
    tipo: "topicoTextoItens",
    conteudo: {
        emoji: "👤",
        titulo: "Atores da ISO 27037",
        subtitulo: "Quem manipula a evidência?",
        topicos: [
            {
                titulo: "Categorias de Indivíduos",
                texto: "A norma divide as responsabilidades conforme o nível de especialização:",
                itens: [
                    "<strong>Interventores (DEFR):</strong> Digital Evidence First Responders. Têm conhecimento para auxiliar no manuseio inicial sem destruir provas.",
                    "<strong>Especialistas (DES):</strong> Digital Evidence Specialists. Profissionais experientes (Peritos) que garantem a preservação técnica complexa."
                ]
            }
        ]
    }
},
{
    tipo: "topicoTexto",
    conteudo: {
        emoji: "💎",
        titulo: "Os 3 Pilares da Evidência Digital",
        subtitulo: "Para ser válida, a evidência deve ser:",
        topicos: [
            { titulo: "1. Relevância", texto: "Deve provar ou refutar um elemento central do caso investigado." },
            { titulo: "2. Confiabilidade", texto: "O processo deve garantir que a evidência seja exatamente o que pretende ser (sem adulteração)." },
            { titulo: "3. Suficiência", texto: "A prova deve ser completa o bastante para permitir uma investigação adequada do fato." }
        ]
    }
},
{
    tipo: "topicoTextoItens",
    conteudo: {
        emoji: "⚙️",
        titulo: "Princípios Fundamentais (Método)",
        subtitulo: "Garantindo a validade científica do processo",
        topicos: [
            {
                titulo: "Tratamento Técnico",
                texto: "A ISO 27037 exige quatro aspectos no tratamento:",
                itens: [
                    "<strong>Auditabilidade:</strong> Documentar tudo para que o processo possa ser avaliado por terceiros.",
                    "<strong>Repetibilidade:</strong> Mesmos métodos e instrumentos devem gerar o mesmo resultado.",
                    "<strong>Reprodutibilidade:</strong> Diferentes instrumentos/condições devem chegar ao mesmo resultado (ex: Hash).",
                    "<strong>Justificabilidade:</strong> Todas as ações devem ter uma razão técnica lógica e documentada."
                ]
            }
        ]
    }
},
{
    tipo: "topicoTexto",
    conteudo: {
        emoji: "🔍",
        titulo: "Fase 1: Identificação",
        subtitulo: "Onde o rastro começa",
        topicos: [
            { titulo: "Busca e Reconhecimento", texto: "Identificar dispositivos físicos (HDs, Celulares) e lógicos (arquivos, partições) que contenham dados relevantes." },
            { titulo: "Priorização de Volatilidade", texto: "Decidir o que coletar primeiro com base no risco de perda (Memória RAM antes de HD, por exemplo)." },
            { titulo: "Regra de Ouro", texto: "Se está desligado, não ligue. Se está ligado, não desligue (até avaliar o risco de perda de dados voláteis)." }
        ]
    }
},

{
    tipo: "topicoTexto",
    conteudo: {
        emoji: "📦",
        titulo: "Fase 2 & 3: Coleta e Aquisição",
        subtitulo: "Extraindo a prova com rigor",
        topicos: [
            { titulo: "Coleta (Física)", texto: "Recolher o dispositivo físico da cena para o laboratório. Exige embalagem antiestática e lacres." },
            { titulo: "Aquisição (Lógica)", texto: "Criar a cópia forense (imagem). Deve-se usar funções de <strong>HASH (MD5, SHA-256)</strong> para provar que a cópia é idêntica ao original." },
            { titulo: "Espaço não alocado", texto: "A aquisição deve tentar capturar dados deletados (espaço slack/unallocated) sempre que possível." }
        ]
    }
},
{
    tipo: "topicoTextoItens",
    conteudo: {
        emoji: "⛓️",
        titulo: "A Cadeia de Custódia",
        subtitulo: "O coração da perícia judicial",
        topicos: [
            {
                titulo: "Rastreabilidade Total",
                texto: "Documento cronológico que registra todo o histórico da evidência:",
                itens: [
                    "Identificador único da evidência.",
                    "Quem acessou, quando (data/hora) e onde (local).",
                    "Registros de entrada e saída de salas de custódia.",
                    "Justificativa para qualquer alteração inevitável (ex: aquisição de sistema ligado)."
                ]
            }
        ]
    }
},

{
    tipo: "topicoTexto",
    conteudo: {
        emoji: "🛡️",
        titulo: "Fase 4: Preservação",
        subtitulo: "Protegendo contra o tempo e o homem",
        topicos: [
            { titulo: "Espoliação", texto: "Proteger contra degradação magnética, calor, umidade e vibrações que podem corromper os bits." },
            { titulo: "Adulteração", texto: "Evitar mudanças intencionais. Uso de bloqueadores de escrita (Write Blockers) é mandatório." },
            { titulo: "Custódia Segura", texto: "Armazenamento em cofres ou salas com acesso restrito e monitorado (CFTV)." }
        ]
    }
},
{
    tipo: "topicoTextoItens",
    conteudo: {
        emoji: "🚀",
        titulo: "Casos Especiais: Missão Crítica",
        subtitulo: "Quando não podemos desligar o sistema",
        topicos: [
            {
                titulo: "Servidores e Hospitais",
                texto: "Dispositivos que não podem parar exigem abordagens diferentes:",
                itens: [
                    "<strong>Aquisição Parcial:</strong> Quando o volume de dados é massivo ou há restrição legal (mandado específico).",
                    "<strong>Aquisição Imediata (Live):</strong> Coleta de dados da RAM enquanto o sistema roda. Vital para recuperar chaves de criptografia e conexões ativas."
                ]
            }
        ]
    }
},
{
    tipo: "topicoTexto",
    conteudo: {
        emoji: "✅",
        titulo: "Conclusão do Módulo",
        subtitulo: "Seguir a norma não é burocracia, é segurança jurídica",
        topicos: [
            { titulo: "Integridade", texto: "Sem o rastro da ISO 27037, a perícia é apenas uma opinião técnica vulnerável a questionamentos." },
            { titulo: "Próximos Passos", texto: "Agora que sabemos como coletar, vamos entender os Sistemas de Arquivos (FAT, NTFS, EXT) para saber onde os dados se escondem." }
        ]
    }
},


// --- MÓDULO 3: SISTEMAS DE ARQUIVOS E ARMAZENAMENTO ---
{
    tipo: "topicoTexto",
    conteudo: {
        emoji: "⚖️",
        titulo: "UNIDADE 03 - Sistemas de Arquivos e Armazenamento",
        subtitulo: "A arquitetura onde a evidência reside",
        topicos: [
            { titulo: "Sistemas de Arquivos", texto: "Como o dado é organizado (NTFS, EXT4, FAT) e onde a evidência se esconde." },
            { titulo: "Dinâmica do Armazenamento", texto: "Clusters, Slack Space e a evolução para o Big Data Forense." },
            { titulo: "Recuperação de Dados", texto: "Técnicas de File Carving e os desafios dos dispositivos modernos (SSD/TRIM)." }
        ]
    }
},

{
    tipo: "topicoTexto",
    conteudo: {
        emoji: "💾",
        titulo: "Sistemas de Arquivos e Armazenamento",
        subtitulo: "A arquitetura onde a evidência reside",
        topicos: [
            { titulo: "O que é um File System?", texto: "É o método e a estrutura de dados que o sistema operacional utiliza para controlar como os dados são armazenados e recuperados." },
            { titulo: "Abstração Forense", texto: "Para o usuário, é um arquivo. Para o perito, são clusters, setores, inodes e metadados organizados em uma estrutura lógica específica." },
            { titulo: "Importância", texto: "Entender o sistema de arquivos é o que permite recuperar dados que o suspeito acredita ter apagado para sempre." }
        ]
    }
},
{
    tipo: "topicoTextoItens",
    conteudo: {
        emoji: "📈",
        titulo: "A Explosão do Armazenamento",
        subtitulo: "Do disquete ao Big Data Forense",
        topicos: [
            {
                titulo: "A Evolução da Capacidade",
                texto: "O desafio forense mudou de escala drasticamente:",
                itens: [
                    "<strong>Anos 90/00:</strong> Disquetes (1.44MB) e HDs de poucos GB. Perícia rápida, bit-a-bit.",
                    "<strong>Era Atual:</strong> SSDs de TBs, NVMe ultravelozes e storages em nuvem.",
                    "<strong>Desafio Big Data:</strong> Analisar volumes massivos de dados exige ferramentas de triagem (Triage) e indexação avançada, pois a cópia bit-a-bit de Petabytes é inviável."
                ]
            }
        ]
    }
},
{
    tipo: "topicoTexto",
    conteudo: {
        emoji: "🏗️",
        titulo: "Estruturas de Sistemas de Arquivos",
        subtitulo: "Principais arquiteturas encontradas em campo",
        topicos: [
            { titulo: "Windows (FAT32 / NTFS)", texto: "O NTFS utiliza a MFT (Master File Table), um banco de dados interno que armazena metadados cruciais para a perícia." },
            { titulo: "Linux (EXT4 / XFS)", texto: "Baseados em Inodes. Separam o nome do arquivo do seu conteúdo físico no disco." },
            { titulo: "Apple (APFS)", texto: "Otimizado para Flash/SSD, utiliza 'Copy-on-Write' e criptografia nativa de sistema." }
        ]
    }
},

{
    tipo: "topicoTextoItens",
    conteudo: {
        emoji: "🧱",
        titulo: "Anatomia do Armazenamento",
        subtitulo: "Como o dado é organizado fisicamente",
        topicos: [
            {
                titulo: "Conceitos Fundamentais",
                texto: "A base da recuperação de dados:",
                itens: [
                    "<strong>Setor:</strong> A menor unidade física (geralmente 512 bytes ou 4KB).",
                    "<strong>Cluster:</strong> Conjunto de setores. É a menor unidade lógica que o SO consegue ler.",
                    "<strong>Slack Space:</strong> O 'espaço desperdiçado' entre o fim do arquivo e o fim do cluster. Um esconderijo clássico para evidências!",
                    "<strong>Unallocated Space:</strong> Espaço marcado como 'livre' pelo SO, mas que ainda contém dados de arquivos deletados."
                ]
            }
        ]
    }
},

{
    tipo: "topicoTexto",
    conteudo: {
        emoji: "🩹",
        titulo: "Recuperação de Dados (Data Recovery)",
        subtitulo: "Trazendo o invisível de volta à luz",
        topicos: [
            { titulo: "Deleção Lógica vs. Física", texto: "Quando você 'apaga' um arquivo, o SO apenas remove o ponteiro. Os bits continuam no disco até serem sobrescritos." },
            { titulo: "File Carving", texto: "Técnica de recuperação que não usa o sistema de arquivos. Ela busca por 'Assinaturas de Cabeçalho' (Magic Bytes). Ex: Todo JPEG começa com 'FF D8 FF'." },
            { titulo: "Desafio SSD (TRIM)", texto: "Diferente dos HDs, SSDs modernos limpam setores deletados automaticamente via comando TRIM, dificultando a recuperação." }
        ]
    }
},

{
    tipo: "topicoTextoItens",
    conteudo: {
        emoji: "🛡️",
        titulo: "A Evidência no Big Data",
        subtitulo: "Estratégias para grandes volumes",
        topicos: [
            {
                titulo: "Forense em Escala",
                texto: "Como o Prof. Maximiano aplica isso em cenários complexos:",
                itens: [
                    "<strong>Hash Filtering:</strong> Eliminar arquivos conhecidos (SO, DLLs) para focar apenas no que o usuário criou.",
                    "<strong>Timeline Analysis:</strong> Cruzar metadados de criação, modificação e acesso (MAC times) para reconstruir eventos.",
                    "<strong>Data Mining Forense:</strong> Uso de IA e scripts para encontrar padrões em milhões de logs de sistemas distribuídos."
                ]
            }
        ]
    }
},
{
    tipo: "topicoTexto",
    conteudo: {
        emoji: "🏁",
        titulo: "Resumo do Módulo",
        subtitulo: "Domine a base, entenda o rastro",
        topicos: [
            { titulo: "O Sistema de Arquivos é o Mapa", texto: "Sem entender a estrutura (NTFS, EXT4), o perito está cego." },
            { titulo: "A Recuperação é Técnica", texto: "O File Carving é a última linha de defesa quando o sistema de arquivos está corrompido ou formatado." },
            { titulo: "Próximo Passo", texto: "Agora que sabemos onde os arquivos ficam, vamos aprender a analisar os logs e a memória volátil (RAM)." }
        ]
    }
},

// --- MÓDULO 4: ANÁLISE DE LOGS E MEMÓRIA ---

// --- MÓDULO 4: ANÁLISE DE LOGS E MEMÓRIA ---

{
    tipo: "topicoTexto",
    conteudo: {
        emoji: "🧠",
        titulo: "UNIDADE 04 - Análise de Logs e Memória",
        subtitulo: "Rastros voláteis e registros de atividades",
        topicos: [
            { titulo: "Memória Volátil vs. Não-Volátil", texto: "A natureza dos dados e a ordem de volatilidade." },
            { titulo: "Forense de Memória (RAM)", texto: "Capturando processos, senhas e chaves de criptografia em tempo real." },
            { titulo: "Logs de Sistemas", texto: "A linha do tempo dos eventos: quem, quando e onde." },
            { titulo: "A Evolução dos Registros", texto: "Dos logs locais à centralização em SIEM e Cloud." },
            { titulo: "Estados de Dispositivos", texto: "O desafio técnico dos estados BFU e AFU em perícia móvel." }
        ]
    }
},
{
    tipo: "topicoTextoItens",
    conteudo: {
        emoji: "⚡",
        titulo: "A Natureza da Memória",
        subtitulo: "Onde os dados 'evaporam'",
        topicos: [
            {
                titulo: "Volatilidade: O Grande Desafio",
                texto: "Diferente do disco rígido, a RAM depende de energia para manter a informação:",
                itens: [
                    "<strong>Memória RAM:</strong> Armazena processos ativos, conexões de rede e senhas abertas.",
                    "<strong>Evolução:</strong> De megabytes a centenas de gigabytes; analisar um 'dump' moderno exige ferramentas de alta performance.",
                    "<strong>Dados na Nuvem:</strong> Muitas vezes, logs de acesso e memória de instâncias voláteis são as únicas provas em crimes SaaS."
                ]
            }
        ]
    }
},
{
    tipo: "topicoTexto",
    conteudo: {
        emoji: "🧪",
        titulo: "O 'Santo Graal' da RAM",
        subtitulo: "O que encontramos no Dump de Memória",
        topicos: [
            { titulo: "Processos Ocultos", texto: "Malwares 'fileless' que rodam apenas na RAM e não deixam rastros no disco." },
            { titulo: "Criptografia", texto: "Chaves de BitLocker ou VeraCrypt frequentemente residem na RAM enquanto o sistema está aberto." },
            { titulo: "Artefatos Recentes", texto: "Histórico de navegação anônima e documentos não salvos que nunca chegaram ao HD." }
        ]
    }
},
{
    tipo: "topicoTextoItens",
    conteudo: {
        emoji: "📜",
        titulo: "Logs: A Caixa-Preta do Sistema",
        subtitulo: "Reconstruindo a linha do tempo",
        topicos: [
            {
                titulo: "Tipos de Registros",
                texto: "Onde o perito busca a autoria e a cronologia:",
                itens: [
                    "<strong>Windows Event Logs:</strong> Registros de logons, falhas e criação de serviços.",
                    "<strong>Syslog (Linux):</strong> Autenticações SSH e mensagens críticas do kernel.",
                    "<strong>SIEM & Cloud:</strong> Centralização de logs (Splunk/ELK) para análise de Big Data e correlação de eventos globais."
                ]
            }
        ]
    }
},
{
    tipo: "topicoTextoItens",
    conteudo: {
        emoji: "📱",
        titulo: "Estados de Dispositivos Móveis",
        subtitulo: "BFU vs. AFU: O cenário real da perícia",
        topicos: [
            {
                titulo: "BFU (Before First Unlock)",
                texto: "Aparelho reiniciado, aguardando a primeira senha:",
                itens: [
                    "Criptografia forte ativa; chaves ainda não carregadas na RAM.",
                    "Extração extremamente limitada para o perito."
                ]
            },
            {
                titulo: "AFU (After First Unlock)",
                texto: "Usuário já desbloqueou o aparelho ao menos uma vez após ligar:",
                itens: [
                    "<strong>Chaves na RAM:</strong> Mesmo bloqueado, as chaves de descriptografia estão acessíveis para ferramentas avançadas (ex: Cellebrite).",
                    "<strong>Risco:</strong> Se o aparelho desligar ou reiniciar por inatividade, ele volta ao estado BFU."
                ]
            }
        ]
    }
},
{
    tipo: "topicoTexto",
    conteudo: {
        emoji: "🛡️",
        titulo: "Segurança Ativa em Smartphones",
        subtitulo: "Mecanismos de defesa modernos",
        topicos: [
            { titulo: "Inactivity Reboot", texto: "Recurso que força o reinício automático após X horas sem uso, 'trancando' o aparelho em BFU." },
            { titulo: "USB Restricted Mode", texto: "Desativa a porta de dados do iPhone após período de inatividade, bloqueando ferramentas forenses." },
            { titulo: "Boas Práticas", texto: "Uso de Capas de Faraday e manutenção constante de energia (Power Banks) para preservar o estado AFU." }
        ]
    }
},
{
    tipo: "topicoTextoItens",
    conteudo: {
        emoji: "🛠️",
        titulo: "Ferramentas de Análise",
        subtitulo: "O arsenal para análise de Logs e RAM",
        topicos: [
            {
                titulo: "Softwares Padrão de Mercado",
                texto: "Tecnologia a favor da investigação:",
                itens: [
                    "<strong>Volatility:</strong> Framework líder para análise forense de memória.",
                    "<strong>FTK Imager:</strong> Coleta de RAM e imagem de disco.",
                    "<strong>Cellebrite Premium:</strong> Exploração de estados AFU em dispositivos móveis.",
                    "<strong>Splunk / Graylog:</strong> Gestão e análise de logs em larga escala (Big Data)."
                ]
            }
        ]
    }
},
{
    tipo: "topicoTexto",
    conteudo: {
        emoji: "🏁",
        titulo: "Resumo do Módulo 04",
        subtitulo: "A volatilidade como oportunidade",
        topicos: [
            { titulo: "A RAM é a Verdade", texto: "O disco diz o que foi feito; a memória diz o que está sendo feito agora." },
            { titulo: "Preservação Móvel", texto: "Entender BFU/AFU é a diferença entre uma extração completa e um dispositivo inacessível." },
            { titulo: "Rumo ao Próximo Nível", texto: "Com os dados coletados e os logs analisados, vamos agora dominar as ferramentas que automatizam esse fluxo." }
        ]
    }
},

// --- MÓDULO 5: FERRAMENTAS E TÉCNICAS DE ANÁLISE ---

{
    tipo: "topicoTexto",
    conteudo: {
        emoji: "🛠️",
        titulo: "UNIDADE 05 - Ferramentas de Computação Forense",
        subtitulo: "O arsenal técnico do perito digital",
        topicos: [
            { titulo: "Ecossistema de Ferramentas", texto: "Diferenciação entre softwares proprietários (pagos) e open-source (livres)." },
            { titulo: "Especialização por Ativo", texto: "Ferramentas focadas em Discos (HD/SSD), Mobile, Nuvem, Web e DVR." },
            { titulo: "Hardwares Forenses", texto: "Bloqueadores de escrita, duplicadores e laboratórios de campo." },
            { titulo: "A Integridade Digital", texto: "O papel do Hash como 'impressão digital' da prova." }
        ]
    }
},
{
    tipo: "topicoTextoItens",
    conteudo: {
        emoji: "💰",
        titulo: "Softwares Proprietários (Pagos)",
        subtitulo: "Líderes de mercado e alto desempenho",
        topicos: [
            {
                titulo: "Suítes de Investigação",
                texto: "Ferramentas robustas com suporte e validação jurídica:",
                itens: [
                    "<strong>Cellebrite Premium:</strong> Líder absoluta em Mobile. Capaz de realizar extrações físicas e contornar bloqueios complexos.",
                    "<strong>Magnet AXIOM:</strong> Excelente para integrar evidências de smartphone, computador e nuvem em uma única timeline.",
                    "<strong>PC-3000 (Tcheca):</strong> O 'padrão ouro' para recuperação de dados em HDs com falha física e reparo de firmware.",
                    "<strong>Belkasoft Evidence Center:</strong> Especializado em análise de artefatos de redes sociais e mensageiros."
                ]
            }
        ]
    }
},
{
    tipo: "topicoTextoItens",
    conteudo: {
        emoji: "🐧",
        titulo: "Software Livre e Iniciativas Nacionais",
        subtitulo: "Poder analítico sem custo de licenciamento",
        topicos: [
            {
                titulo: "Ferramentas Abertas e Governamentais",
                texto: "Soluções amplamente validadas pela comunidade:",
                itens: [
                    "<strong>IPED (Polícia Federal):</strong> Ferramenta brasileira de alta performance para processamento e indexação de grandes volumes de dados.",
                    "<strong>Autopsy / Sleuth Kit:</strong> Interface gráfica amigável e extensível para análise de sistemas de arquivos.",
                    "<strong>Paladin (Linux):</strong> Uma distro 'bootável' forense baseada em Ubuntu, pronta para triagem e imagem de discos.",
                    "<strong>FTK Imager (Lite):</strong> O padrão para criação de imagens forenses e triagem rápida de arquivos."
                ]
            }
        ]
    }
},
{
    tipo: "topicoTexto",
    conteudo: {
        emoji: "🌐",
        titulo: "Ferramentas Especializadas",
        subtitulo: "Onde o generalismo não alcança",
        topicos: [
            { titulo: "Web Forensics (Hunchly)", texto: "Captura automática de páginas web, preservando metadados e garantindo que a prova online não 'desapareça'." },
            { titulo: "Cloud Forensics", texto: "Ferramentas como o Magnet Cloud para coletar dados diretamente de contas Google, iCloud e Office 365." },
            { titulo: "DVR Forensics", texto: "Softwares específicos para extrair vídeos de sistemas de monitoramento (CFTV) que possuem sistemas de arquivos proprietários." },
            { titulo: "iOS Time Pause", texto: "Técnicas e ferramentas para 'congelar' o tempo interno do iPhone, evitando bloqueios por inatividade ou reboots programados." }
        ]
    }
},
{
    tipo: "topicoTextoItens",
    conteudo: {
        emoji: "🛡️",
        titulo: "Técnicas de Campo e Preservação",
        subtitulo: "Garantindo a custódia antes do laboratório",
        topicos: [
            {
                titulo: "Ambiente Controlado",
                texto: "Equipamentos que evitam a contaminação da prova:",
                itens: [
                    "<strong>Faraday (Gaiola/Capa):</strong> Bloqueio total de sinais (RF/WiFi/Bluetooth) para impedir comandos remotos de 'wipe'.",
                    "<strong>Modo Avião:</strong> Primeira ação em dispositivos móveis para isolar o rádio, quando o acesso é possível.",
                    "<strong>Write Blockers:</strong> Hardware que impede fisicamente que o sistema operacional escreva qualquer bit no disco sob análise."
                ]
            }
        ]
    }
},
{
    tipo: "topicoTexto",
    conteudo: {
        emoji: "#️⃣",
        titulo: "O Algoritmo de Hash",
        subtitulo: "A pedra angular da autenticidade",
        topicos: [
            { titulo: "O que é?", texto: "Uma função matemática que transforma qualquer volume de dados em uma sequência alfanumérica única de tamanho fixo (ex: MD5, SHA-1, SHA-256)." },
            { titulo: "Para que serve?", texto: "Garantir a integridade. Se um único bit for alterado no arquivo, o Hash muda completamente (efeito avalanche)." },
            { titulo: "Na Justiça", texto: "O perito calcula o Hash no momento da coleta e no momento da entrega do laudo. Se os hashes batem, a prova é a mesma; se divergem, a prova foi adulterada." }
        ]
    }
},
{
    tipo: "topicoTexto",
    conteudo: {
        emoji: "🏁",
        titulo: "Resumo do Módulo 05",
        subtitulo: "Tecnologia a serviço da verdade",
        topicos: [
            { titulo: "Não existe ferramenta única", texto: "O perito deve saber qual software aplicar para cada tipo de ativo (HD, Mobile, Web)." },
            { titulo: "Rigor acima de tudo", texto: "Bloqueadores de escrita e o uso correto do Hash são o que diferencia uma perícia de uma simples cópia de arquivos." },
            { titulo: "Próximo Passo", texto: "Agora que dominamos as ferramentas, vamos para o encerramento: Metodologias de Investigação e Elaboração de Relatórios." }
        ]
    }
},

// --- MÓDULO 6: INVESTIGAÇÃO E RELATÓRIOS ---

{
    tipo: "topicoTexto",
    conteudo: {
        emoji: "⚖️",
        titulo: "UNIDADE 06 - Investigação e Relatórios",
        subtitulo: "A materialização da prova e o rigor metodológico",
        topicos: [
            { titulo: "Metodologias de Investigação", texto: "Processos estruturados para garantir que nenhum detalhe seja esquecido." },
            { titulo: "Análise de Dados", texto: "Transformando dados brutos em informações inteligíveis para a justiça." },
            { titulo: "Elaboração de Relatórios", texto: "A arte de traduzir o 'tecniquês' para o magistrado e advogados." },
            { titulo: "Ética e Imparcialidade", texto: "O papel do perito como auxiliar da justiça, não da acusação ou defesa." }
        ]
    }
},
{
    tipo: "topicoTextoItens",
    conteudo: {
        emoji: "📉",
        titulo: "Metodologias de Investigação",
        subtitulo: "Seguindo padrões internacionais",
        topicos: [
            {
                titulo: "Fluxo de Trabalho Forense",
                texto: "As fases que dão suporte à investigação:",
                itens: [
                    "<strong>Preparação:</strong> Planejamento da abordagem e check-list de equipamentos.",
                    "<strong>Exame:</strong> Aplicação das ferramentas (que vimos no módulo 5) para extrair os dados.",
                    "<strong>Análise:</strong> A fase intelectual. Cruzar logs, metadados e arquivos para responder aos quesitos.",
                    "<strong>Apresentação:</strong> A consolidação de tudo no documento final."
                ]
            }
        ]
    }
},
{
    tipo: "topicoTexto",
    conteudo: {
        emoji: "🕵️",
        titulo: "Técnicas de Análise",
        subtitulo: "Onde o perito 'conversa' com os dados",
        topicos: [
            { titulo: "Análise Temporal (Timeline)", texto: "Reconstruir a ordem dos fatos. O que aconteceu antes e depois do incidente?" },
            { titulo: "Análise de Vínculos", texto: "Cruzar contatos, e-mails e transferências para identificar organizações criminosas (essencial no GAECO)." },
            { titulo: "Análise de Palavras-Chave", texto: "Uso de expressões regulares (Regex) para encontrar padrões como CPFs, placas de veículos ou termos específicos do crime." }
        ]
    }
},
{
    tipo: "topicoTextoItens",
    conteudo: {
        emoji: "✍️",
        titulo: "O Laudo Pericial Forense",
        subtitulo: "A voz do perito no processo judicial",
        topicos: [
            {
                titulo: "Estrutura do Documento",
                texto: "Um relatório profissional deve conter:",
                itens: [
                    "<strong>Preâmbulo:</strong> Identificação das autoridades, perito e objeto (celular, HD, etc).",
                    "<strong>Histórico:</strong> Contexto da investigação e do recebimento da prova.",
                    "<strong>Metodologia:</strong> Quais ferramentas e técnicas foram usadas (ex: Cellebrite, Hash SHA-256).",
                    "<strong>Resposta aos Quesitos:</strong> Respostas diretas às perguntas feitas pela autoridade ou pelas partes.",
                    "<strong>Conclusão:</strong> O parecer técnico final do perito."
                ]
            }
        ]
    }
},
{
    tipo: "topicoTexto",
    conteudo: {
        emoji: "🚫",
        titulo: "Erros Comuns na Relatoria",
        subtitulo: "O que pode anular seu trabalho",
        topicos: [
            { titulo: "Subjetividade", texto: "Nunca use 'eu acho' ou 'parece'. O laudo deve ser baseado em evidências extraíveis e repetíveis." },
            { titulo: "Linguagem excessivamente técnica", texto: "O juiz não precisa saber o que é um 'ponteiro de inode', ele precisa saber se o arquivo foi deletado propositalmente." },
            { titulo: "Falha na Cadeia de Custódia", texto: "Não documentar quem manuseou a prova entre a coleta e a análise invalida o laudo." }
        ]
    }
},
{
    tipo: "topicoTexto",
    conteudo: {
        emoji: "🏁",
        titulo: "Encerramento do Curso",
        subtitulo: "A Convergência entre Ciência e Justiça",
        topicos: [
            { titulo: "A Perícia como Pilar", texto: "Em um mundo digital, a prova pericial tecnológica é, muitas vezes, a única prova irrefutável." },
            { titulo: "Evolução Contínua", texto: "Novas criptografias e IAs surgem a cada dia. O perito nunca para de estudar." },
            { titulo: "Mensagem Final", texto: " 'A perícia digital não busca culpados, busca a verdade contida nos bits.' " }
        ]
    }
},

// --- SIMULADO COMPLETO: 30 QUESTÕES (UNIDADES 1 A 6) ---

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
}
];