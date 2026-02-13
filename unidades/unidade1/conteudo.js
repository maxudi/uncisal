// Conteúdo das seções - edite aqui para adicionar ou modificar slides
const slides = [
    
    
{
    "tipo": "topicoTexto",
    "conteudo": {
        "emoji": "📝",
        "titulo": "Unidade 01",
        "subtitulo": "Introdução à análise forense digital",
        "layout": "duas_colunas",
        "colunas": [
            {
                "nome": "Coluna 1",
                "topicos": [
                    { "titulo": "1. Breve histórico da Evolução Tecnológiga" },
                    { "titulo": "2. A Era do Conectividade e Mobilidade" },
                    { "titulo": "3. Fundamentos de Análise Forense" }
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



// --- SIMULADO COMPLETO: 5 QUESTÕES (UNIDADES 1 ) ---

{
    tipo: "topicoTextoItens",
    conteudo: {
        emoji: "📝",
        titulo: "Construindo sua Autoridade",
        subtitulo: "Por que dominar os fundamentos agora?",
        topicos: [
            {
                titulo: "A Base do Especialista",
                texto: "O conhecimento técnico avançado é inútil sem uma base sólida em conceitos e ética. As atividades da Unidade 01 são o seu primeiro passo para:",
                itens: [
                    "<strong>Blindagem Jurídica:</strong> Aprender a fundamentar suas ações para que nenhum advogado consiga anular seu trabalho por falhas conceituais[cite: 16].",
                    "<strong>Diferenciação no Mercado:</strong> Deixar de ser um 'apertador de botões' de ferramentas e se tornar um analista que compreende a ciência por trás dos bits[cite: 14].",
                    "<strong>Raciocínio Pericial:</strong> Treinar sua mente para responder as perguntas fundamentais (O que? Como? Quem?) desde o primeiro contato com o caso[cite: 19].",
                    "<strong>Ética e Credibilidade:</strong> Consolidar a postura de imparcialidade que define os grandes peritos e instrutores do mercado[cite: 31]."
                ]
            }
        ]
    }
}
];