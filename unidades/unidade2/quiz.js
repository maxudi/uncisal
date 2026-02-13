// Simulado Forense - 05 Questões
const quizSlides = [

{
    tipo: "quiz",
    conteudo: {
        titulo: "Simulado Forense - Questão 1",
        subtitulo: "Unidade 02: ISO 27037",
        pergunta: "Segundo a ISO/IEC 27037, quem é o responsável pela preservação inicial no local?",
        opcoes: [
            "Juiz de Instrução Forense.",
            "Interventor em Evidência Digital (DEFR).",
            "Especialista em Evidência Digital (DES).",
            "Administrador de Sistemas da Empresa."
        ],
        dica: "First Responder - primeiro a chegar[cite: 11].",
        respostaCorreta: 1
    }
},
{
    tipo: "quiz",
    conteudo: {
        titulo: "Simulado Forense - Questão 2",
        subtitulo: "Unidade 02: Cadeia de Custódia",
        pergunta: "Por que a 'Cadeia de Custódia' é considerada o coração da perícia?",
        opcoes: [
            "Porque permite cobrar mais caro pelo serviço.",
            "Porque serve para criptografar os dados.",
            "Porque garante a rastreabilidade, impedindo alegações de plantação de provas.",
            "Porque define quais crimes são mais importantes."
        ],
        dica: "O pecado capital forense é quebrar a rastreabilidade[cite: 16, 33].",
        respostaCorreta: 2
    }
},
{
    tipo: "quiz",
    conteudo: {
        titulo: "Simulado Forense - Questão 3",
        subtitulo: "Unidade 02: Pilares da Evidência",
        pergunta: "Para que uma evidência seja válida, ela deve possuir três pilares. Quais são?",
        opcoes: [
            "Velocidade, Custo e Tecnologia.",
            "Relevância, Confiabilidade e Suficiência.",
            "Sigilo, Criptografia e Bloqueio.",
            "Hardware, Software e Internet."
        ],
        dica: "Deve provar o fato, ser autêntica e completa[cite: 19].",
        respostaCorreta: 1
    }
},
{
    tipo: "quiz",
    conteudo: {
        titulo: "Simulado Forense - Questão 4",
        subtitulo: "Unidade 02: Coleta de RAM",
        pergunta: "Em qual situação a 'Aquisição Imediata (Live)' é prioritária?",
        opcoes: [
            "Quando o computador está desligado.",
            "Quando o disco rígido é muito grande.",
            "Quando o sistema não pode ser interrompido e possui dados na RAM.",
            "Somente em casos de crimes financeiros."
        ],
        dica: "Missão crítica: servidores e dados voláteis[cite: 41, 48].",
        respostaCorreta: 2
    }
},
{
    tipo: "quiz",
    conteudo: {
        titulo: "Simulado Forense - Questão 5",
        subtitulo: "Unidade 02: Métodos Técnicos",
        pergunta: "O que garante que o processo pericial possa ser avaliado por terceiros (Auditabilidade)?",
        opcoes: [
            "O uso de senhas fortes.",
            "A documentação minuciosa de todas as ações e ferramentas usadas.",
            "O sigilo absoluto do laudo.",
            "A formatação do dispositivo após a cópia."
        ],
        dica: "Tudo deve ser documentado para ser justificável[cite: 46, 52].",
        respostaCorreta: 1
    }
},
{
    tipo: "topicoTextoItens",
    conteudo: {
        emoji: "🛡️",
        titulo: "Conclusão da Unidade 02",
        subtitulo: "O Guardião da Admissibilidade",
        topicos: [
            {
                titulo: "Competências de Campo",
                texto: "Ao dominar esta unidade, o aluno deixa de ser apenas um observador para se tornar um agente de preservação:",
                itens: [
                    "<strong>Protocolo ISO 27037:</strong> Capacidade de atuar como DEFR, garantindo que a cena não seja contaminada[cite: 11].",
                    "<strong>Blindagem de Custódia:</strong> Entende que a prova física e a digital devem estar seladas por registros inquestionáveis[cite: 16, 33].",
                    "<strong>Gestão de Volatilidade:</strong> Sabe decidir entre o 'puxar da tomada' e a coleta de RAM para preservar chaves de criptografia[cite: 41].",
                    "<strong>Integridade Matemática:</strong> Domina o uso do Hash no momento exato da aquisição para garantir a imutabilidade do vestígio[cite: 16].",
                    "<strong>Segurança Jurídica:</strong> Compreende que o rigor na coleta é o que separa uma perícia de elite de uma prova anulada[cite: 26]."
                ]
            }
        ],
        citacao: "A análise mais brilhante do mundo é inútil se a coleta for considerada ilícita."
    }
}
];

