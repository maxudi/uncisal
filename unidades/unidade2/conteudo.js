// Conteúdo das seções - edite aqui para adicionar ou modificar slides
const slides = [
    // --- UNIDADE 02: COLETA E PRESERVAÇÃO DE EVIDÊNCIAS ---

{
    "tipo": "topicoTexto",
    "conteudo": {
        "emoji": "⚖️",
        "titulo": "Unidade 02",
        "subtitulo": "Coleta e preservação de evidências digitais",
        "layout": "duas_colunas",
        "colunas": [
            {
                "nome": "Conteúdo Programático",
                "topicos": [
                    { "titulo": "1. A Norma ISO/IEC 27037" },
                    { "titulo": "2. Cadeia de Custódia e Integridade" },
                    { "titulo": "3. Procedimentos de Coleta e Aquisição" }
                ]
            }
        ]
    }
},
{
    tipo: "topicoTextoItens",
    conteudo: {
        emoji: "👤",
        titulo: "Atores da ISO 27037",
        subtitulo: "Responsabilidades no tratamento da evidência",
        topicos: [
            {
                titulo: "Categorias de Especialistas",
                texto: "A norma define quem está apto a manipular os vestígios digitais:",
                itens: [
                    "<strong>DEFR (Interventor):</strong> Digital Evidence First Responder. O primeiro a chegar, responsável por identificar e isolar sem destruir provas.",
                    "<strong>DES (Especialista):</strong> Digital Evidence Specialist. O perito com expertise para realizar aquisições complexas em laboratório."
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
        subtitulo: "Requisitos para a admissibilidade jurídica",
        topicos: [
            { titulo: "1. Relevância", texto: "A evidência deve ser útil para provar ou refutar um fato central da investigação[cite: 19]." },
            { titulo: "2. Confiabilidade", texto: "O processo deve garantir que o dado coletado é exatamente o que estava no dispositivo original[cite: 26]." },
            { titulo: "3. Suficiência", texto: "A prova deve ser completa para permitir uma análise adequada do incidente[cite: 15]." }
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
                texto: "Documento que registra todo o histórico da evidência para evitar a nulidade do processo:",
                itens: [
                    "<strong>Identificação:</strong> Registro único do dispositivo (Marca, Modelo, Serial).",
                    "<strong>Cronologia:</strong> Quem manuseou, onde, quando e por qual motivo.",
                    "<strong>Integridade:</strong> Uso de funções HASH (MD5/SHA-256) para selar a evidência digital.",
                    "<strong>Acondicionamento:</strong> Uso de lacres físicos e embalagens antiestáticas."
                ]
            }
        ]
    }
},
{
    tipo: "topicoTexto",
    conteudo: {
        emoji: "🔍",
        titulo: "Fases Técnicas da Unidade 02",
        subtitulo: "Identificação, Coleta e Aquisição",
        topicos: [
            { titulo: "Identificação", texto: "Localizar dispositivos físicos e dados lógicos voláteis ou não voláteis[cite: 15]." },
            { titulo: "Coleta vs. Aquisição", texto: "Coleta é o recolhimento físico do bem. Aquisição é a criação da imagem forense (bit-a-bit)[cite: 14]." },
            { titulo: "Regra de Ouro", texto: "Se o sistema está ligado, priorize a memória RAM. Se está desligado, não ligue[cite: 41, 48]." }
        ]
    }
},
{
    tipo: "topicoTextoItens",
    conteudo: {
        emoji: "🛡️",
        titulo: "Fixação Técnica - Unidade 02",
        subtitulo: "Rumo à Excelência Pericial",
        topicos: [
            {
                titulo: "Desafio da Integridade",
                texto: "Nesta etapa, o aluno deve focar em evitar a espoliação da prova:",
                itens: [
                    "<strong>Uso de Write Blockers:</strong> Impedir fisicamente qualquer escrita no disco original.",
                    "<strong>Protocolo de Faraday:</strong> Isolar dispositivos móveis de conexões externas (WiFi/4G/5G).",
                    "<strong>Justificabilidade:</strong> Toda ação invasiva deve ser tecnicamente justificada no relatório[cite: 25, 46]."
                ]
            }
        ]
    }
}
];