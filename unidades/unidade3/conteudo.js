// Conteúdo das seções - edite aqui para adicionar ou modificar slides
const slides = [
    // --- UNIDADE 03: SISTEMAS DE ARQUIVOS E ARMAZENAMENTO ---

{
    "tipo": "topicoTexto",
    "conteudo": {
        "emoji": "💾",
        "titulo": "Unidade 03",
        "subtitulo": "Sistemas de Arquivos e Armazenamento",
        "layout": "duas_colunas",
        "colunas": [
            {
                "nome": "Objetivos da Unidade",
                "topicos": [
                    { "titulo": "1. Estruturas Lógicas (NTFS, EXT4, FAT)" },
                    { "titulo": "2. Anatomia: Clusters, Setores e Slack Space" },
                    { "titulo": "3. Técnicas de Recuperação (File Carving)" }
                ]
            }
        ]
    }
},
{
    tipo: "topicoTextoItens",
    conteudo: {
        emoji: "🏗️",
        titulo: "Abstração Forense",
        subtitulo: "O mapa onde a evidência reside",
        topicos: [
            {
                titulo: "O que é um File System?",
                texto: "É a estrutura que o SO utiliza para controlar como os dados são armazenados e recuperados[cite: 35].",
                itens: [
                    "<strong>Para o Usuário:</strong> É um ícone de arquivo ou pasta.",
                    "<strong>Para o Perito:</strong> São metadados, Inodes, tabelas (MFT) e clusters organizados[cite: 36].",
                    "<strong>Importância:</strong> Entender o mapa é o que permite encontrar rastros que o sistema operacional 'esconde' do usuário comum."
                ]
            }
        ]
    }
},
{
    tipo: "topicoTextoItens",
    conteudo: {
        emoji: "🧱",
        titulo: "Anatomia do Armazenamento",
        subtitulo: "Onde o dado se fragmenta",
        topicos: [
            {
                titulo: "Conceitos Fundamentais",
                texto: "A base técnica para a recuperação de dados reside no entendimento físico e lógico:",
                itens: [
                    "<strong>Setor:</strong> Menor unidade física do disco (geralmente 512 bytes ou 4KB).",
                    "<strong>Cluster:</strong> Menor unidade lógica que o SO consegue ler; conjunto de setores.",
                    "<strong>Slack Space:</strong> O espaço desperdiçado entre o fim do arquivo e o fim do cluster. Um esconderijo clássico para bits de arquivos antigos.",
                    "<strong>Unallocated Space:</strong> Espaço marcado como livre, mas que ainda contém dados de arquivos deletados até serem sobrescritos."
                ]
            }
        ]
    }
},

{
    tipo: "topicoTextoItens",
    conteudo: {
        emoji: "🗄️",
        titulo: "O Coração do NTFS: A MFT",
        subtitulo: "Master File Table - Onde os segredos residem",
        topicos: [
            {
                titulo: "O Banco de Dados do Disco",
                texto: "Em sistemas Windows, a MFT é um arquivo especial que cataloga tudo o que existe no volume[cite: 36]:",
                itens: [
                    "<strong>Atributos Residentes:</strong> Arquivos muito pequenos podem ser armazenados dentro da própria MFT, sem ocupar clusters externos.",
                    "<strong>Metadados Cruciais:</strong> Datas de criação, modificação, acesso e registro (MACE).",
                    "<strong>Ponteiros de Dados:</strong> Se o arquivo não for residente, a MFT indica exatamente em quais clusters o conteúdo está espalhado."
                ]
            }
        ]
    }
},

{
    tipo: "topicoTextoItens",
    conteudo: {
        emoji: "🐧",
        titulo: "Sistemas Linux: O Poder dos Inodes",
        subtitulo: "Entendendo a estrutura EXT4",
        topicos: [
            {
                titulo: "Abstração Total",
                texto: "Diferente do Windows, o Linux separa o nome do arquivo do seu conteúdo real[cite: 36]:",
                itens: [
                    "<strong>O Inode:</strong> É o identificador numérico que contém os metadados, mas NÃO contém o nome do arquivo.",
                    "<strong>Diretórios:</strong> São apenas arquivos especiais que mapeiam um 'Nome' para um 'Número de Inode'.",
                    "<strong>Recuperação:</strong> Se o Inode for liberado (deleção), o perito precisa varrer os blocos de dados brutos, pois o vínculo com o nome original é perdido rapidamente."
                ]
            }
        ]
    }
},
{
    tipo: "topicoTexto",
    conteudo: {
        emoji: "🕵️‍♂️",
        titulo: "Deleção Lógica vs. Física",
        subtitulo: "O que o usuário acha que fez vs. O que realmente aconteceu",
        topicos: [
            { 
                titulo: "A Mentira do 'Delete'", 
                texto: "Quando um arquivo é excluído, o SO apenas marca o espaço como 'disponível' (Unallocated Space). O dado físico permanece lá até ser sobrescrito por outro arquivo." 
            },
            { 
                titulo: "O Perigo da Formatação", 
                texto: "A formatação rápida apenas cria um novo sistema de arquivos vazio. Os dados antigos continuam nos setores; apenas o 'índice' (mapa) foi apagado." 
            },
            { 
                titulo: "Wiping (Sanitização)", 
                texto: "Esta é a única deleção física real. Softwares sobrescrevem cada bit com zeros ou dados aleatórios, tornando a recuperação impossível[cite: 16]." 
            }
        ]
    }
},
{
    tipo: "topicoTextoItens",
    conteudo: {
        emoji: "🧩",
        titulo: "O Desafio do Slack Space",
        subtitulo: "Onde os vestígios se escondem",
        topicos: [
            {
                titulo: "O Espaço entre os Bits",
                texto: "Arquivos raramente terminam exatamente no final de um cluster:",
                itens: [
                    "<strong>RAM Slack:</strong> Espaço entre o fim do arquivo e o fim do setor (preenchido com dados da memória RAM no momento da gravação).",
                    "<strong>File Slack:</strong> Espaço entre o último setor usado e o fim do cluster alocado.",
                    "<strong>Valor Forense:</strong> Analisar o Slack Space pode revelar fragmentos de documentos anteriores que ocupavam aquele mesmo cluster."
                ]
            }
        ]
    }
},

{
    tipo: "topicoTexto",
    conteudo: {
        emoji: "🩹",
        titulo: "Recuperação de Dados",
        subtitulo: "Trazendo o invisível à luz",
        topicos: [
            { 
                titulo: "Deleção Lógica", 
                texto: "Ao 'apagar', o SO apenas remove o ponteiro. Os bits permanecem no disco até a sobrescrita[cite: 37]." 
            },
            { 
                titulo: "File Carving", 
                texto: "Técnica que busca por 'Assinaturas de Cabeçalho' (Magic Bytes), ignorando o sistema de arquivos corrompido ou formatado. Ex: 'FF D8 FF' para JPEGs[cite: 43]." 
            },
            { 
                titulo: "Desafio SSD (TRIM)", 
                texto: "Diferente dos HDs, SSDs limpam setores deletados automaticamente para manter a performance, dificultando a recuperação pericial." 
            }
        ]
    }
},

{
    tipo: "topicoTextoItens",
    conteudo: {
        emoji: "🛡️",
        titulo: "Conclusão da Unidade 03",
        subtitulo: "O Domínio da Estrutura",
        topicos: [
            {
                titulo: "Competências de Análise de Disco",
                texto: "Ao concluir esta etapa, o aluno adquiriu o 'olhar de raio-x' sobre o armazenamento:",
                itens: [
                    "<strong>Análise Estrutural:</strong> Capacidade de navegar em MFTs e Inodes para extrair metadados de criação e acesso[cite: 36].",
                    "<strong>Recuperação Avançada:</strong> Aplicação de File Carving para resgatar evidências em mídias formatadas ou danificadas[cite: 37].",
                    "<strong>Forense em Escala:</strong> Entendimento de como o Big Data impacta a análise de volumes massivos de dados hoje[cite: 9].",
                    "<strong>Diferenciação Tecnológica:</strong> Sabe lidar com as particularidades de HDs magnéticos versus SSDs modernos."
                ]
            }
        ],
        citacao: "No mundo digital, nada é realmente apagado até que outro dado ocupe seu lugar físico nos bits."
    }
}
];