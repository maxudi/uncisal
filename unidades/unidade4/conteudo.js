// Conteúdo das seções - edite aqui para adicionar ou modificar slides
const slides = [
   // --- UNIDADE 04: ANÁLISE DE LOGS E MEMÓRIA ---

{
    "tipo": "topicoTexto",
    "conteudo": {
        "emoji": "🧠",
        "titulo": "Unidade 04",
        "subtitulo": "Rastros voláteis e registros de atividades",
        "layout": "duas_colunas",
        "colunas": [
            {
                "nome": "Conteúdo Programático",
                "topicos": [
                    { "titulo": "1. Forense de Memória RAM" },
                    { "titulo": "2. Análise de Logs de Sistemas" },
                    { "titulo": "3. Estados Mobile: BFU vs AFU" }
                ]
            }
        ]
    }
},
{
    tipo: "topicoTextoItens",
    conteudo: {
        emoji: "⚡",
        titulo: "A Natureza da Memória RAM",
        subtitulo: "Onde os dados 'evaporam'",
        topicos: [
            {
                titulo: "Volatilidade: O Desafio do Presente",
                texto: "Diferente do disco (passado), a RAM contém o que está acontecendo agora no sistema[cite: 41]:",
                itens: [
                    "<strong>Processos Ativos:</strong> Malwares 'fileless' que rodam apenas na memória sem deixar rastros no HD[cite: 15].",
                    "<strong>Conexões de Rede:</strong> IPs e portas que estavam abertas no momento da coleta.",
                    "<strong>Artefatos de Senhas:</strong> Chaves de criptografia (BitLocker) e senhas em texto claro que residem na RAM[cite: 15, 41].",
                    "<strong>Dump de Memória:</strong> Técnica de 'congelar' os bits da RAM para análise posterior via frameworks como Volatility."
                ]
            }
        ]
    }
},
{
    tipo: "topicoTextoItens",
    conteudo: {
        emoji: "📜",
        titulo: "Logs: A Caixa-Preta Digital",
        subtitulo: "A reconstrução cronológica dos fatos",
        topicos: [
            {
                titulo: "Fontes de Evidência",
                texto: "O perito utiliza logs para provar a autoria e a cronologia do incidente[cite: 40]:",
                itens: [
                    "<strong>Windows Event Logs:</strong> Registros de logon/logoff, alterações de privilégios e erros de sistema[cite: 15, 40].",
                    "<strong>Syslog (Linux):</strong> Histórico de comandos e acessos remotos via SSH.",
                    "<strong>Centralização (SIEM):</strong> O uso de ferramentas como Splunk ou ELK para analisar logs de múltiplos servidores em tempo real.",
                    "<strong>Timelining:</strong> O cruzamento de logs para criar uma linha do tempo única e coerente."
                ]
            }
        ]
    }
},

{
    tipo: "topicoTextoItens",
    conteudo: {
        emoji: "📱",
        titulo: "Desafios Mobile: BFU vs AFU",
        subtitulo: "A fronteira da extração em smartphones",
        topicos: [
            {
                titulo: "Segurança de Hardware",
                texto: "O estado do aparelho determina o que o perito consegue extrair:",
                itens: [
                    "<strong>BFU (Before First Unlock):</strong> Aparelho reiniciado. Criptografia forte ativa; dados quase inacessíveis[cite: 15].",
                    "<strong>AFU (After First Unlock):</strong> Usuário desbloqueou o celular ao menos uma vez. Chaves de criptografia estão na RAM; alta chance de extração via Cellebrite.",
                    "<strong>Inactivity Reboot:</strong> Mecanismo de defesa que força o iPhone a voltar para BFU após X horas sem uso.",
                    "<strong>Preservação:</strong> Uso mandatório de Power Banks e Capas de Faraday para manter o estado AFU."
                ]
            }
        ]
    }
},

{
    tipo: "topicoTexto",
    conteudo: {
        emoji: "🛡️",
        titulo: "Conclusão da Unidade 04",
        subtitulo: "A Volatilidade como Oportunidade",
        topicos: [
            { 
                titulo: "A RAM é a Verdade", 
                texto: "O disco pode mentir através de deleções, mas a memória RAM e os Logs centralizados contam a história real da execução[cite: 41]." 
            },
            { 
                titulo: "Próximos Passos", 
                texto: "Dominada a teoria de coleta (U2), disco (U3) e memória (U4), vamos para a Unidade 05 conhecer as ferramentas que automatizam este fluxo." 
            }
        ],
        citacao: "O disco rígido é o arquivo morto; a memória RAM é a cena do crime em movimento."
    }
},
// --- UNIDADE 04: APROFUNDAMENTO EM MEMÓRIA E LOGS ---

{
    tipo: "topicoTextoItens",
    conteudo: {
        emoji: "🧪",
        titulo: "O 'Santo Graal' da RAM",
        subtitulo: "Anatomia de um Dump de Memória",
        topicos: [
            {
                titulo: "O que extraímos da volatilidade?",
                texto: "A análise de memória (RAM Forensics) permite visualizar o estado exato do sistema antes do desligamento[cite: 41]:",
                itens: [
                    "<strong>Processos Injetados:</strong> Identificação de códigos maliciosos que não possuem executáveis no disco (Fileless Malware).",
                    "<strong>Criptografia em Aberto:</strong> Chaves de volumes BitLocker ou VeraCrypt montados que ficam expostas na RAM durante o uso.",
                    "<strong>Artefatos de Navegação:</strong> URLs acessadas em abas anônimas e dados de formulários que nunca foram gravados no cache do HD.",
                    "<strong>Comunicação Ativa:</strong> Sockets de rede abertos, conexões reversas e IPs de comando e controle (C2)."
                ]
            }
        ]
    }
},
{
    tipo: "topicoTexto",
    conteudo: {
        emoji: "📊",
        titulo: "A Hierarquia de Volatilidade",
        subtitulo: "Ordem de Coleta (RFC 3227)",
        topicos: [
            { 
                titulo: "Prioridade Zero", 
                texto: "Registradores e Cache da CPU: os dados mudam em nanossegundos." 
            },
            { 
                titulo: "Prioridade Alta", 
                texto: "Memória RAM e Tabelas de Roteamento: o coração da investigação 'Live'." 
            },
            { 
                titulo: "Prioridade Média", 
                texto: "Sistemas de arquivos e Discos Rígidos: dados persistentes que podem esperar o isolamento físico." 
            },
            { 
                titulo: "Prioridade Baixa", 
                texto: "Backups físicos e documentação em papel[cite: 22]." 
            }
        ]
    }
},
{
    tipo: "topicoTextoItens",
    conteudo: {
        emoji: "🛡️",
        titulo: "Evolução dos Logs: Do Local ao SIEM",
        subtitulo: "Gestão de Big Data Forense",
        topicos: [
            {
                titulo: "Rastreabilidade em Escala",
                texto: "Em ambientes corporativos ou governamentais, os logs individuais são insuficientes[cite: 40]:",
                itens: [
                    "<strong>Centralização:</strong> Coleta de logs de firewalls, servidores e endpoints em um repositório único.",
                    "<strong>SIEM (Security Information and Event Management):</strong> Ferramentas que correlacionam eventos (ex: 5 falhas de login seguidas de um acesso bem-sucedido às 3h da manhã).",
                    "<strong>Imutabilidade:</strong> Garantir que os logs sejam enviados para um servidor remoto para evitar que o invasor apague os rastros na máquina local.",
                    "<strong>Timeline Forense:</strong> O perito reconstrói o incidente cruzando o horário do log de rede com a data de modificação de arquivos no disco[cite: 45]."
                ]
            }
        ]
    }
},
{
    tipo: "topicoTextoItens",
    conteudo: {
        emoji: "🚨",
        titulo: "Mobile Forensics: A Luta contra o Tempo",
        subtitulo: "BFU, AFU e os Mecanismos de Defesa",
        topicos: [
            {
                titulo: "O Estado do Dispositivo Móvel",
                texto: "A extração de dados em smartphones modernos é uma corrida técnica[cite: 16]:",
                itens: [
                    "<strong>Inactivity Reboot:</strong> Se o perito não interagir com o aparelho, ele reinicia sozinho, voltando para o estado BFU (proteção máxima).",
                    "<strong>USB Restricted Mode:</strong> O iOS desativa a porta de dados após uma hora bloqueado, impedindo ferramentas como Cellebrite.",
                    "<strong>Hot Isolation:</strong> A necessidade de manter o aparelho carregado e isolado em sacos de Faraday para impedir o 'Wipe' remoto (apagamento via Find My iPhone/Android).",
                    "<strong>First Response:</strong> O interventor (DEFR) deve documentar se o celular estava ligado e qual era o nível de bateria no momento da apreensão[cite: 11]."
                ]
            }
        ]
    }
},
{
    tipo: "topicoTexto",
    conteudo: {
        emoji: "🧠",
        titulo: "Fixação Teórica: Unidade 04",
        subtitulo: "A Volatilidade como Prova Irrefutável",
        topicos: [
            { 
                titulo: "Rigor no Dump", 
                texto: "A coleta de RAM deve ser feita com ferramentas que minimizam a alteração da própria memória (footprint reduzido)." 
            },
            { 
                titulo: "O valor dos Logs", 
                texto: "Sem logs, você tem o corpo do crime (disco); com logs, você tem a filmagem da ação (histórico)." 
            },
            { 
                titulo: "Conexão de Unidades", 
                texto: "Entender a memória RAM (U4) prepara o aluno para usar as ferramentas avançadas que veremos na Unidade 05[cite: 42]." 
            }
        ]
    }
}
];