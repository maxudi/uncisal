// Simulado Forense - 30 Questões
const quizSlides = [

// --- QUESTÕES UNIDADE 06: INVESTIGAÇÃO E RELATÓRIOS ---
{
    tipo: "topicoTextoItens",
    conteudo: {
        emoji: "⚔️",
        titulo: "Desafio Final: O Simulado Forense",
        subtitulo: "Do Conhecimento à Prática de Campo",
        topicos: [
            {
                titulo: "Prepare seu Raciocínio Pericial",
                texto: "Chegou o momento de validar sua jornada. Este simulado não é apenas uma prova, é um treinamento para a realidade que você encontrará no GAECO e nas perícias judiciais:",
                itens: [
                    "<strong>Ambiente de Pressão:</strong> Treine sua tomada de decisão para não hesitar diante de uma evidência volátil.",
                    "<strong>Precisão Terminológica:</strong> Domine os conceitos que os assistentes técnicos das partes usarão para tentar questionar seu laudo.",
                    "<strong>Visão 360º:</strong> Conecte os pontos entre a coleta (ISO 27037), a estrutura do disco e a análise intelectual dos fatos.",
                    "<strong>Certificação de Competência:</strong> Acerte as questões para garantir que você não é apenas um operador de software, mas um Analista Forense de elite."
                ]
            }
        ],
        citacao: "No laboratório, o erro custa tempo. No tribunal, o erro custa a prova. Teste-se agora para ser impecável depois."
    }
},

{
    tipo: "quiz",
    conteudo: {
        titulo: "Simulado Forense - Questão 1",
        subtitulo: "Unidade 06: Metodologia Científica",
        pergunta: "Por que a seção de 'Metodologia' é indispensável em um laudo pericial segundo as normas técnicas?",
        opcoes: [
            "Para listar o currículo do perito.",
            "Para permitir a reprodutibilidade do exame por outros peritos (contra-perícia).",
            "Para justificar o valor cobrado pelos honorários.",
            "Para confundir a defesa com termos técnicos complexos."
        ],
        dica: "Ciência exige que o caminho percorrido possa ser refeito por terceiros.",
        respostaCorreta: 1
    }
},
{
    tipo: "quiz",
    conteudo: {
        titulo: "Simulado Forense - Questão 2",
        subtitulo: "Unidade 06: Redação Técnica",
        pergunta: "Ao redigir a conclusão de um laudo, qual postura deve ser adotada pelo perito?",
        opcoes: [
            "Expressar convicção pessoal sobre a culpa do suspeito.",
            "Utilizar adjetivos como 'terrível' ou 'criminoso' para enfatizar o fato.",
            "Manter a imparcialidade, limitando-se a responder aos quesitos com base nos vestígios extraídos.",
            "Sugerir a pena que o juiz deve aplicar ao réu."
        ],
        dica: "O perito é um auxiliar técnico da justiça, não o julgador.",
        respostaCorreta: 2
    }
},
{
    tipo: "quiz",
    conteudo: {
        titulo: "Simulado Forense - Questão 3",
        subtitulo: "Unidade 06: Quesitos",
        pergunta: "O que são 'Quesitos' no contexto de uma perícia judicial?",
        opcoes: [
            "As ferramentas de software utilizadas na análise.",
            "Perguntas formuladas pela autoridade judiciária ou pelas partes que devem ser respondidas tecnicamente.",
            "Os arquivos deletados que foram recuperados com sucesso.",
            "O registro de entrada e saída do laboratório forense."
        ],
        dica: "São as perguntas que delimitam o trabalho do perito.",
        respostaCorreta: 1
    }
},
{
    tipo: "quiz",
    conteudo: {
        titulo: "Simulado Forense - Questão 4",
        subtitulo: "Unidade 06: Análise Temporal",
        pergunta: "A técnica de 'Timeline Analysis' (Linha do Tempo) serve primordialmente para:",
        opcoes: [
            "Ajustar o relógio do computador do perito.",
            "Medir quanto tempo o perito levou para terminar o laudo.",
            "Reconstruir a ordem cronológica dos eventos digitais para provar a dinâmica do fato.",
            "Apagar os logs antigos para liberar espaço no servidor."
        ],
        dica: "Fundamental para entender o 'antes, durante e depois' do incidente.",
        respostaCorreta: 2
    }
},
{
    tipo: "quiz",
    conteudo: {
        titulo: "Simulado Forense - Questão 5",
        subtitulo: "Unidade 06: Nulidades",
        pergunta: "Qual destes fatores é motivo de anulação total de uma prova digital em tribunal?",
        opcoes: [
            "O uso de uma ferramenta open-source em vez de uma paga.",
            "A quebra comprovada da Cadeia de Custódia.",
            "O perito não possuir doutorado na área.",
            "O laudo ter mais de 50 páginas."
        ],
        dica: "Sem rastreabilidade e integridade, a prova perde o valor jurídico.",
        respostaCorreta: 1
    }
},

// --- SLIDE FINAL DE ENCERRAMENTO DO CURSO ---

{
    tipo: "topicoTextoItens",
    conteudo: {
        emoji: "🎓",
        titulo: "Jornada Concluída!",
        subtitulo: "O que você leva desta Especialização",
        topicos: [
            {
                titulo: "A Excelência Pericial",
                texto: "Você percorreu o caminho desde os fundamentos até a entrega da prova. Agora, você compreende que:",
                itens: [
                    "<strong>O Rigor é a sua Proteção:</strong> Seguir normas (ISO 27037, ABNT) protege o seu trabalho e a sua reputação.",
                    "<strong>A Tecnologia é Volátil:</strong> As ferramentas mudam, mas o método científico e o raciocínio lógico são permanentes.",
                    "<strong>A Ética é Inegociável:</strong> Sua lealdade é com a evidência técnica, garantindo justiça para todas as partes.",
                    "<strong>O Aprendizado é Contínuo:</strong> No LABFOR GAECO ou em qualquer laboratório, o perito nunca para de estudar."
                ]
            }
        ],
        citacao: "A verdade digital é fragmentada, mas com o método correto, ela se torna inquestionável. Sucesso na sua jornada!"
    }
}
];