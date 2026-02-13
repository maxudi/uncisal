// Simulado Forense - 30 Questões
const quizSlides = [
// --- QUESTÕES UNIDADE 04: ANÁLISE DE LOGS E MEMÓRIA ---

{
    tipo: "quiz",
    conteudo: {
        titulo: "Simulado Forense - Questão 1",
        subtitulo: "Unidade 04: Ordem de Volatilidade",
        pergunta: "De acordo com a RFC 3227, qual destes itens deve ser coletado primeiro devido à sua alta volatilidade?",
        opcoes: [
            "Arquivos de configuração no disco rígido.",
            "Conteúdo da Memória RAM e conexões de rede ativas.",
            "Backups armazenados em fitas magnéticas.",
            "Logs de eventos gravados no SSD."
        ],
        dica: "Pense no que 'evapora' imediatamente ao cortar a energia.",
        respostaCorreta: 1
    }
},
{
    tipo: "quiz",
    conteudo: {
        titulo: "Simulado Forense - Questão 2",
        subtitulo: "Unidade 04: Artefatos de Memória",
        pergunta: "Qual evidência crucial pode ser encontrada em um Dump de RAM, mas raramente está no HD?",
        opcoes: [
            "O nome do fabricante do gabinete.",
            "Chaves de criptografia de volumes montados (ex: BitLocker).",
            "Documentos PDF salvos na pasta 'Documentos'.",
            "O histórico de impressões de papel do mês passado."
        ],
        dica: "A RAM armazena as chaves de 'trabalho' enquanto o sistema está aberto.",
        respostaCorreta: 1
    }
},
{
    tipo: "quiz",
    conteudo: {
        titulo: "Simulado Forense - Questão 3",
        subtitulo: "Unidade 04: Forense Mobile (AFU)",
        pergunta: "Por que o estado AFU (After First Unlock) é o preferido para a extração forense em smartphones?",
        opcoes: [
            "Porque o aparelho está desligado e mais seguro.",
            "Porque as chaves de descriptografia já foram carregadas na memória RAM.",
            "Porque nesse estado o aparelho não precisa de bateria.",
            "Porque desativa automaticamente o Wi-Fi e o Bluetooth."
        ],
        dica: "Usuário já digitou a senha uma vez após ligar o aparelho.",
        respostaCorreta: 1
    }
},
{
    tipo: "quiz",
    conteudo: {
        titulo: "Simulado Forense - Questão 4",
        subtitulo: "Unidade 04: Logs de Segurança",
        pergunta: "Em uma investigação de invasão a um servidor Windows, qual log é o mais indicado para identificar tentativas de ataque de força bruta?",
        opcoes: [
            "System Log.",
            "Application Log.",
            "Security Log (Event ID 4625 - Falha de Logon).",
            "Setup Log."
        ],
        dica: "Auditoria de acessos e segurança ficam em um log específico.",
        respostaCorreta: 2
    }
},
{
    tipo: "quiz",
    conteudo: {
        titulo: "Simulado Forense - Questão 5",
        subtitulo: "Unidade 04: SIEM e Centralização",
        pergunta: "Qual a principal vantagem forense de um sistema SIEM (centralização de logs) em uma rede corporativa?",
        opcoes: [
            "Aumentar a velocidade da internet.",
            "Permitir que o invasor apague os logs mais rapidamente.",
            "Garantir a imutabilidade e permitir a correlação de eventos de múltiplas fontes.",
            "Substituir a necessidade de peritos humanos."
        ],
        dica: "Logs externos são mais difíceis de serem adulterados pelo invasor local.",
        respostaCorreta: 2
    }
},

// --- SLIDE DE FECHAMENTO MOTIVADOR UNIDADE 04 ---

{
    tipo: "topicoTextoItens",
    conteudo: {
        emoji: "🧠",
        titulo: "Conclusão da Unidade 04",
        subtitulo: "Dominando o 'Agora' Digital",
        topicos: [
            {
                titulo: "Competências de Análise Volátil",
                texto: "Ao concluir esta etapa, você subiu de nível na escala pericial:",
                itens: [
                    "<strong>Visão de Tempo Real:</strong> Você entende que a RAM é a 'conversa' ativa do computador.",
                    "<strong>Estratégia Mobile:</strong> Sabe a importância vital de manter um celular ligado (AFU) para garantir a prova.",
                    "<strong>Inteligência de Logs:</strong> Aprendeu a reconstruir passos através da caixa-preta dos registros de sistema.",
                    "<strong>Rigor Metodológico:</strong> Aplica a Ordem de Volatilidade para não destruir provas acidentalmente."
                ]
            }
        ],
        citacao: "O disco diz o que eles fizeram; a memória diz o que eles estão fazendo e como tentaram se esconder."
    }
}
];
