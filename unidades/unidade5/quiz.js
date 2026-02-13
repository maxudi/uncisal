// Simulado Forense - 30 Questões
const quizSlides = [
// --- QUESTÕES UNIDADE 05: FERRAMENTAS ---
{
    tipo: "topicoTextoItens",
    conteudo: {
        emoji: "🧪",
        titulo: "Hora de Testar seu Arsenal",
        subtitulo: "Por que realizar este Simulado?",
        topicos: [
            {
                titulo: "A Ferramenta é o seu Braço Direito",
                texto: "Na perícia real, saber qual software usar economiza dias de trabalho e evita a perda de provas. Este simulado vai te ajudar a:",
                itens: [
                    "<strong>Fixar Diferenças:</strong> Saber quando usar o IPED (nacional/Big Data) e quando recorrer à suíte Autopsy.",
                    "<strong>Blindagem Técnica:</strong> Dominar o conceito de Hash e Write Blockers para que sua coleta nunca seja questionada.",
                    "<strong>Agilidade de Decisão:</strong> Treinar o cérebro para identificar instantaneamente o melhor hardware para cada dispositivo apreendido.",
                    "<strong>Visão de GAECO:</strong> Entender como o Cellebrite e ferramentas especializadas em DVR resolvem casos reais de crime organizado."
                ]
            }
        ],
        citacao: "O software faz o processamento, mas o perito garante a integridade."
    }
},
{
    tipo: "quiz",
    conteudo: {
        titulo: "Simulado Forense - Questão 1",
        subtitulo: "Unidade 05: Hardware Forense",
        pergunta: "Qual é a função primordial de um 'Write Blocker' (Bloqueador de Escrita) em uma análise forense?",
        opcoes: [
            "Aumentar a velocidade de transferência de dados.",
            "Descriptografar senhas de usuários automaticamente.",
            "Impedir fisicamente que o sistema operacional escreva qualquer dado no disco original sob análise.",
            "Recuperar arquivos que foram apagados fisicamente por ímãs."
        ],
        dica: "A regra nº 1 da forense é: não altere a prova original.",
        respostaCorreta: 2
    }
},
{
    tipo: "quiz",
    conteudo: {
        titulo: "Simulado Forense - Questão 2",
        subtitulo: "Unidade 05: Ferramentas Nacionais",
        pergunta: "O software IPED, amplamente utilizado no Brasil para processamento e indexação de grandes volumes de dados, foi desenvolvido por qual instituição?",
        opcoes: [
            "Microsoft Brasil.",
            "Polícia Federal (Brasil).",
            "FBI (Estados Unidos).",
            "Interpol."
        ],
        dica: "É um orgulho da perícia brasileira para combater o crime organizado.",
        respostaCorreta: 1
    }
},
{
    tipo: "quiz",
    conteudo: {
        titulo: "Simulado Forense - Questão 3",
        subtitulo: "Unidade 05: Integridade Digital",
        pergunta: "Sobre o algoritmo de Hash (ex: SHA-256), o que significa o 'Efeito Avalanche'?",
        opcoes: [
            "O software de perícia trava se houver muitos arquivos.",
            "A capacidade de recuperar arquivos corrompidos pela neve.",
            "O fato de que uma pequena alteração no arquivo original gera um Hash completamente diferente.",
            "A exclusão automática de arquivos duplicados no disco."
        ],
        dica: "Pense na sensibilidade matemática: mudou um bit, mudou a assinatura.",
        respostaCorreta: 2
    }
},
{
    tipo: "quiz",
    conteudo: {
        titulo: "Simulado Forense - Questão 4",
        subtitulo: "Unidade 05: Forense Mobile",
        pergunta: "Qual ferramenta é considerada a líder mundial para extração física e quebra de bloqueios em dispositivos móveis (Smartphones)?",
        opcoes: [
            "Autopsy.",
            "Volatility.",
            "Cellebrite Premium.",
            "Windows Explorer."
        ],
        dica: "Você utiliza essa tecnologia no GAECO para enfrentar dispositivos bloqueados.",
        respostaCorreta: 2
    }
},
{
    tipo: "quiz",
    conteudo: {
        titulo: "Simulado Forense - Questão 5",
        subtitulo: "Unidade 05: Ferramentas Web",
        pergunta: "Para preservar evidências de páginas web, garantindo que o conteúdo online não seja alterado ou removido pelo suspeito, qual ferramenta é indicada?",
        opcoes: [
            "Hunchly.",
            "PC-3000.",
            "Notepad++.",
            "WinRAR."
        ],
        dica: "Capture o que você vê no navegador com integridade forense.",
        respostaCorreta: 0
    }
},
{
    tipo: "topicoTextoItens",
    conteudo: {
        emoji: "🏆",
        titulo: "Conclusão da Unidade 05",
        subtitulo: "O Perito Equipado",
        topicos: [
            {
                titulo: "Domínio Tecnológico Alcançado",
                texto: "Ao finalizar esta etapa, esperamos que você tenha migrado do uso amador para o uso profissional de ativos forenses:",
                itens: [
                    "<strong>Consciência de Ferramental:</strong> Você não 'aperta botões', você escolhe metodologias validadas (Proprietárias ou Open-Source).",
                    "<strong>Rigor de Integridade:</strong> O uso de Hash e Bloqueadores de Escrita tornou-se um reflexo automático no seu fluxo de trabalho.",
                    "<strong>Especialização de Ativos:</strong> Sabe diferenciar a perícia de computador da perícia mobile, web e de sistemas de CFTV.",
                    "<strong>Valorização Nacional:</strong> Reconhece o poder das ferramentas desenvolvidas no Brasil para o enfrentamento ao crime.",
                    "<strong>Prontidão para o Laudo:</strong> Com os dados processados corretamente, você está pronto para a análise final e a relatoria."
                ]
            }
        ],
        citacao: "A tecnologia a serviço da verdade digital: você agora domina o arsenal."
    }
}
];
