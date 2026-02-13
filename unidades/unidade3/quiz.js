// Simulado Forense - Unidade 03: Sistemas de Arquivos e Armazenamento
const quizSlides = [


{
    tipo: "quiz",
    conteudo: {
        titulo: "Simulado Forense - Questão 1",
        subtitulo: "Unidade 03: Slack Space",
        pergunta: "O que caracteriza tecnicamente o 'Slack Space' em um sistema de arquivos?",
        opcoes: [
            "O espaço entre o fim do arquivo e o final do cluster alocado.",
            "O espaço livre total disponível para o usuário no disco.",
            "Uma partição escondida por softwares de criptografia.",
            "Área do disco inutilizada devido a danos físicos (bad sectors)."
        ],
        dica: "É o 'espaço desperdiçado' onde fragmentos de arquivos deletados podem residir.",
        respostaCorreta: 0
    }
},
{
    tipo: "quiz",
    conteudo: {
        titulo: "Simulado Forense - Questão 2",
        subtitulo: "Unidade 03: Desafio SSD",
        pergunta: "Qual o impacto direto do comando TRIM em investigações forenses em SSDs?",
        opcoes: [
            "Ele aumenta o tamanho dos metadados dos arquivos.",
            "Ele impede o funcionamento de qualquer Write Blocker de hardware.",
            "Ele limpa fisicamente os setores marcados como deletados, impossibilitando a recuperação.",
            "Ele criptografa automaticamente o Unallocated Space."
        ],
        dica: "SSDs modernos 'limpam a casa' sozinhos para manter a performance.",
        respostaCorreta: 2
    }
},
{
    tipo: "quiz",
    conteudo: {
        titulo: "Simulado Forense - Questão 3",
        subtitulo: "Unidade 03: NTFS e MFT",
        pergunta: "Em sistemas NTFS, onde o perito encontra metadados cruciais como datas de criação e nomes de arquivos?",
        opcoes: [
            "No registro de inicialização do BIOS/UEFI.",
            "Dentro da MFT (Master File Table).",
            "Exclusivamente no arquivo de paginação do sistema.",
            "No payload binário de cada arquivo individual."
        ],
        dica: "Pense na MFT como o 'banco de dados' central do sistema de arquivos.",
        respostaCorreta: 1
    }
},
{
    tipo: "quiz",
    conteudo: {
        titulo: "Simulado Forense - Questão 4",
        subtitulo: "Unidade 03: File Carving",
        pergunta: "A técnica de 'File Carving' é utilizada principalmente quando:",
        opcoes: [
            "O sistema de arquivos está intacto e o arquivo está na lixeira.",
            "O perito precisa descriptografar um volume BitLocker.",
            "O sistema de arquivos está corrompido ou a mídia foi formatada.",
            "O objetivo é apenas alterar a data de acesso de um arquivo."
        ],
        dica: "Busca-se pela 'assinatura' (Magic Bytes) no nível binário.",
        respostaCorreta: 2
    }
},
{
    tipo: "quiz",
    conteudo: {
        titulo: "Simulado Forense - Questão 5",
        subtitulo: "Unidade 03: Inodes",
        pergunta: "Em sistemas Linux (EXT4), o que é o 'Inode'?",
        opcoes: [
            "O nome visível do arquivo para o usuário.",
            "Uma estrutura de dados que contém metadados e ponteiros para os blocos de dados.",
            "O comando para deletar arquivos permanentemente.",
            "Um tipo de vírus que infecta o setor de boot."
        ],
        dica: "O Linux separa o nome do arquivo de sua estrutura de dados interna.",
        respostaCorreta: 1
    }
},
{
    tipo: "topicoTextoItens",
    conteudo: {
        emoji: "🏁",
        titulo: "Conclusão da Unidade 03",
        subtitulo: "Dominando o Mapa dos Dados",
        topicos: [
            {
                titulo: "Competências de Arquitetura de Dados",
                texto: "Ao finalizar esta unidade, o aluno desenvolveu a capacidade de enxergar além da interface do usuário:",
                itens: [
                    "<strong>Leitura Estrutural:</strong> Capacidade de localizar evidências em estruturas complexas como MFT e Inodes[cite: 36, 77].",
                    "<strong>Recuperação Binária:</strong> Domínio da lógica de File Carving para resgatar dados em mídias formatadas[cite: 37, 77].",
                    "<strong>Análise de Espaço:</strong> Entendimento técnico de Slack Space e Unallocated Space como fontes de prova[cite: 35].",
                    "<strong>Estratégia Big Data:</strong> Ciência de como lidar com volumes massivos através de triagem (Triage) eficiente[cite: 27].",
                    "<strong>Consciência de Hardware:</strong> Compreensão dos desafios impostos por tecnologias como SSD/TRIM na preservação de vestígios[cite: 32]."
                ]
            }
        ],
        citacao: "O perito não vê arquivos; ele vê estruturas, ponteiros e a persistência da verdade nos bits."
    }
}
];