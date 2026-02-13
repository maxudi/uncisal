// Conteúdo das seções - edite aqui para adicionar ou modificar slides
const slides = [
   // --- UNIDADE 05: FERRAMENTAS E TÉCNICAS DE ANÁLISE ---

{
    "tipo": "topicoTexto",
    "conteudo": {
        "emoji": "🛠️",
        "titulo": "Unidade 05",
        "subtitulo": "Ferramentas de Computação Forense",
        "layout": "duas_colunas",
        "colunas": [
            {
                "nome": "O Arsenal do Perito",
                "topicos": [
                    { "titulo": "1. Softwares Proprietários vs. Open-Source" },
                    { "titulo": "2. Hardwares Forenses e Write Blockers" },
                    { "titulo": "3. Ferramentas Especializadas (Mobile, Nuvem, DVR)" }
                ]
            }
        ]
    }
},
{
    tipo: "topicoTextoItens",
    conteudo: {
        emoji: "💰",
        titulo: "Softwares Proprietários (Pagos)",
        subtitulo: "Alto desempenho e validação jurídica",
        topicos: [
            {
                titulo: "Suítes Líderes de Mercado",
                texto: "Ferramentas robustas com suporte técnico e certificações internacionais:",
                itens: [
                    "<strong>Cellebrite Premium:</strong> O padrão ouro para extração mobile e contorno de senhas.",
                    "<strong>Magnet AXIOM:</strong> Excelente na correlação de artefatos de computador, celular e nuvem.",
                    "<strong>PC-3000:</strong> Ferramenta russa especializada em recuperação física de HDs e reparo de firmware.",
                    "<strong>Belkasoft Evidence Center:</strong> Focada em análise rápida de redes sociais e mensageiros."
                ]
            }
        ]
    }
},
{
    tipo: "topicoTextoItens",
    conteudo: {
        emoji: "🐧",
        titulo: "Software Livre e Iniciativas Nacionais",
        subtitulo: "Poder analítico sem custo de licenciamento",
        topicos: [
            {
                titulo: "Validação pela Comunidade e Governo",
                texto: "Soluções essenciais que oferecem transparência metodológica:",
                itens: [
                    "<strong>IPED (Polícia Federal):</strong> Ferramenta brasileira de alta performance para indexação de grandes volumes de dados.",
                    "<strong>Autopsy / Sleuth Kit:</strong> Interface gráfica amigável para análise profunda de sistemas de arquivos.",
                    "<strong>Volatility Framework:</strong> O líder mundial para análise forense de memória RAM.",
                    "<strong>FTK Imager (Lite):</strong> O padrão para criação de imagens forenses e triagem rápida de arquivos."
                ]
            }
        ]
    }
},
{
    tipo: "topicoTextoItens",
    conteudo: {
        emoji: "🧠",
        titulo: "Além das Ferramentas",
        subtitulo: "A Primazia do Método sobre o Software",
        topicos: [
            {
                titulo: "Independência de Ferramental",
                texto: "O arsenal forense apresentado é uma referência de mercado, mas a atuação profissional não se limita a eles. O foco deve ser sempre a norma e o procedimento:",
                itens: [
                    "<strong>Ferramenta ≠ Perícia:</strong> O software é um meio, não o fim. O que valida o trabalho é o atendimento às normas (como a ISO 27037) e ao Código de Processo Penal.",
                    "<strong>Falibilidade do Software:</strong> Softwares, inclusive os caros e proprietários, podem falhar ou não atender a requisitos normativos dependendo da versão ou da forma de uso.",
                    "<strong>Evolução Dinâmica:</strong> A tecnologia e as práticas criminosas evoluem diariamente. Ficar preso a uma única ferramenta é tornar-se um perito obsoleto rapidamente.",
                    "<strong>Validação Cruzada:</strong> É dever do perito ou assistente técnico validar os achados por outros meios ou ferramentas (Cross-Validation) sempre que possível."
                ]
            }
        ],
        citacao: "O perito domina o método; o entusiasta apenas opera o software."
    }
},
{
    tipo: "topicoTextoItens",
    conteudo: {
        emoji: "🛡️",
        titulo: "Hardwares Forenses",
        subtitulo: "Garantindo a integridade física da prova",
        topicos: [
            {
                titulo: "Equipamentos de Campo e Laboratório",
                texto: "O hardware que impede a alteração dos bits originais:",
                itens: [
                    "<strong>Write Blockers (Bloqueadores):</strong> Pontes de hardware que permitem a leitura, mas bloqueiam fisicamente qualquer tentativa de escrita no disco.",
                    "<strong>Duplicadores Forenses:</strong> Equipamentos dedicados para clonagem bit-a-bit em alta velocidade sem necessidade de computador.",
                    "<strong>Gaiolas de Faraday:</strong> Essenciais para isolar sinais de rádio (4G/Wi-Fi) de dispositivos móveis apreendidos."
                ]
            }
        ]
    }
},
{
    tipo: "topicoTexto",
    conteudo: {
        emoji: "#️⃣",
        titulo: "A Pedra Angular: O Hash",
        subtitulo: "A impressão digital da evidência",
        topicos: [
            { 
                titulo: "Funções Matemáticas", 
                texto: "Algoritmos (SHA-256, MD5) que transformam dados em uma sequência alfanumérica única." 
            },
            { 
                titulo: "Garantia de Integridade", 
                texto: "Se um único bit for alterado, o Hash muda completamente (Efeito Avalanche)." 
            },
            { 
                titulo: "Cadeia de Custódia", 
                texto: "O Hash deve ser gerado no momento da coleta e conferido no tribunal para provar que a prova não foi adulterada." 
            }
        ]
    }
},
// --- UNIDADE 05: APROFUNDAMENTO EM HASH FORENSE ---

{
    tipo: "topicoTextoItens",
    conteudo: {
        emoji: "🧮",
        titulo: "A Matemática da Integridade",
        subtitulo: "O Algoritmo de Hash além da Superfície",
        topicos: [
            {
                titulo: "Propriedades Fundamentais",
                texto: "Para ser considerado útil na forense, um algoritmo de Hash deve possuir três características determinantes:",
                itens: [
                    "<strong>Determinismo:</strong> A mesma entrada (arquivo) sempre resultará no mesmo valor de saída, não importa quantas vezes seja processada.",
                    "<strong>Resistência à Colisão:</strong> Deve ser matematicamente improvável que dois arquivos diferentes gerem o mesmo Hash.",
                    "<strong>Irreversibilidade:</strong> É um caminho de mão única; você não pode reconstruir o arquivo original a partir do código Hash.",
                    "<strong>Efeito Avalanche:</strong> Se você alterar apenas um bit (um 0 para 1) em um arquivo de 1 Terabyte, o código Hash final será completamente irreconhecível em relação ao anterior."
                ]
            }
        ]
    }
},
{
    tipo: "topicoTextoItens",
    conteudo: {
        emoji: "📑",
        titulo: "O Hash no Processo Judicial",
        subtitulo: "Do Local do Crime ao Tribunal",
        topicos: [
            {
                titulo: "A Identidade Digital da Prova",
                texto: "O Hash não é apenas um número, é o que mantém o suspeito na cena do crime ou o perito fora de problemas legais:",
                itens: [
                    "<strong>Cadeia de Custódia:</strong> O Hash deve ser gerado no instante da coleta (preservação) e documentado no auto de apreensão.",
                    "<strong>Verificação em Juízo:</strong> Se a defesa alegar que o perito 'plantou' evidências no HD, basta rodar o Hash novamente. Se os valores baterem, a prova é íntegra.",
                    "<strong>Filtro de Arquivos Conhecidos:</strong> Usamos bases de Hashes conhecidos (NSRL/NIST) para ignorar arquivos de sistema (Windows/DLLs) e focar apenas em arquivos do usuário.",
                    "<strong>Busca por Assinatura:</strong> Podemos localizar uma foto específica em um mar de dados buscando apenas pelo seu Hash, mesmo que o suspeito tenha mudado o nome e a extensão do arquivo."
                ]
            }
        ]
    }
},
{
    tipo: "topicoTextoItens",
    conteudo: {
        emoji: "💿",
        titulo: "Como o Hash funciona na Prática?",
        subtitulo: "O Exemplo da Gravação de Mídia",
        topicos: [
            {
                titulo: "A Analogia do CD-ROM",
                texto: "Para entender como o software 'sabe' que a cópia é idêntica ao original, lembramos do processo de gravação de imagens ISO:",
                itens: [
                    "<strong>Geração da Imagem:</strong> Antes de gravar, o sistema gera um Hash da imagem original no HD.",
                    "<strong>A Gravação:</strong> Os dados são queimados no disco físico.",
                    "<strong>A Conferência:</strong> Ao final, o software lê o CD gravado e gera um novo Hash. Se o 'Hash do CD' = 'Hash da ISO', a gravação foi perfeita.",
                    "<strong>Erro de Verificação:</strong> Se um único setor do CD falhasse, o mecanismo de conferência detectava a diferença de Hash e avisava: 'A verificação falhou'.",
                    "<strong>Na Forense:</strong> Fazemos exatamente isso ao criar uma imagem de um disco apreendido. O Hash da imagem deve ser idêntico ao Hash do disco físico original."
                ]
            }
        ],
        citacao: "O Hash é o selo de cera digital que, se rompido, invalida toda a verdade contida na prova."
    }
},
{
    tipo: "topicoTextoItens",
    conteudo: {
        emoji: "🏁",
        titulo: "Conclusão da Unidade 05",
        subtitulo: "Dominando as Ferramentas",
        topicos: [
            {
                titulo: "Competências Técnicas",
                texto: "Ao finalizar esta unidade, o aluno compreende que:",
                itens: [
                    "<strong>Não existe ferramenta única:</strong> O perito deve saber qual software aplicar para cada tipo de ativo.",
                    "<strong>Hardware é fundamental:</strong> O uso de bloqueadores de escrita é o que diferencia uma perícia de uma cópia comum.",
                    "<strong>Nacional vs Internacional:</strong> O uso do IPED da Polícia Federal demonstra o alto nível da perícia brasileira.",
                    "<strong>Rigor no Hash:</strong> Sem a validação matemática do Hash, qualquer análise técnica perde sua força probatória."
                ]
            }
        ],
        citacao: "A ferramenta não faz o perito, mas um perito sem as ferramentas certas está cego perante o crime organizado."
    }
}
];