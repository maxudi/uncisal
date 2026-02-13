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
    tipo: "topicoTextoItens",
    conteudo: {
        emoji: "🎯",
        titulo: "Conclusão da Unidade 01",
        subtitulo: "O que você dominou nesta etapa?",
        topicos: [
            {
                titulo: "Competências Adquiridas",
                texto: "Ao finalizar os estudos e o simulado, espera-se que o aluno tenha migrado do senso comum para o rigor técnico-científico:",
                itens: [
                    "<strong>Visão Processual:</strong> Entende que a perícia não é apenas 'recuperar arquivos', mas aplicar métodos científicos para suportar o contraditório judicial[cite: 14, 19].",
                    "<strong>Rigor Ético:</strong> Reconhece sua responsabilidade como auxiliar da justiça, mantendo a imparcialidade e o foco em fatos técnicos extraíveis.",
                    "<strong>Domínio Conceitual:</strong> Diferencia com clareza a análise científica comum da análise forense, compreendendo o peso da integridade da prova[cite: 14, 16].",
                    "<strong>Consciência de Rastro:</strong> Aplica o Princípio de Locard ao mundo digital, sabendo que cada interação no sistema gera metadados e logs[cite: 15, 40].",
                    "<strong>Fundamentação Legal:</strong> Compreende a importância da Cadeia de Custódia como o único meio de garantir a validade jurídica de uma evidência[cite: 16, 33]."
                ]
            }
        ],
        citacao: "Você deixou de ser um entusiasta da tecnologia para se tornar um guardião da integridade da prova."
    }
}

];
