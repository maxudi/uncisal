# Fundamentos de Análise Forense - UNCISAL

Apresentação interativa sobre Computação Forense para pós-graduação.

## 📋 Arquivos Principais

### 🏠 Página Inicial
- **index.html** - Landing page com apresentação do curso, plano de ensino e navegação para unidades

### 📚 Conteúdo Completo
- **curso-completo.html** - Apresentação completa com todas as 6 unidades (scroll-snap)
- **conteudo.js** - Dados dos slides completos (experiência, acadêmico, tópicos, etc - 855 linhas)
- **quiz.js** - 30 questões do simulado forense
- **renderizador.js** - Engine de renderização dos slides

### 📖 Unidades Separadas
- **unidades/unidade1/** - Introdução à Análise Forense Digital
- **unidades/unidade2/** - Coleta e Preservação de Evidências
- **unidades/unidade3/** - Sistemas de Arquivos e Armazenamento
- **unidades/unidade4/** - Análise de Logs e Memória
- **unidades/unidade5/** - Ferramentas e Técnicas de Análise
- **unidades/unidade6/** - Investigação e Elaboração de Laudos

Cada unidade contém:
- `index.html` - Apresentação específica da unidade
- `conteudo.js` - Conteúdo específico da unidade
- `quiz.js` - Quiz específico da unidade
- `renderizador.js` - Engine de renderização
- Outros arquivos auxiliares

### 🗒️ Extras
- **notas.html** - Página de anotações do curso
- **editor-slides.html** - Editor visual para criar slides

## 🚀 Como Usar

### Localmente
Basta abrir `index.html` em qualquer navegador moderno. Não precisa servidor.

A partir da página inicial você pode:
- Navegar para o **Curso Completo** (todas as unidades de uma vez)
- Acessar as **Unidades Individuais** (conteúdo específico de cada unidade)

### Deploy (EasyPanel, Vercel, Netlify, etc)
É um site **100% estático** - sem build, sem npm, sem dependências.

1. Faça commit dos arquivos
2. No EasyPanel: crie um novo serviço "Static Site"
3. Aponte para a raiz do repositório
4. Arquivo de entrada: `index.html`

## 📁 Estrutura

```
/
├── index.html               # Landing page (nova)
├── curso-completo.html      # Todas as unidades juntas
├── notas.html               # Notas do curso
├── editor-slides.html       # Editor
├── conteudo.js              # Dados completos (855 linhas)
├── quiz.js                  # Quiz completo (30 questões)
├── renderizador.js          # Engine de renderização
├── logo_uncisal.png         # Logo
├── max.png                  # Foto professor
├── ciclo_evidencia.png      # Diagrama
└── unidades/
    ├── unidade1/
    │   ├── index.html
    │   ├── conteudo.js
    │   ├── quiz.js
    │   └── renderizador.js
    ├── unidade2/
    │   ├── index.html
    │   ├── conteudo.js
    │   ├── quiz.js
    │   └── renderizador.js
    ├── unidade3/
    │   └── ...
    ├── unidade4/
    │   └── ...
    ├── unidade5/
    │   └── ...
    └── unidade6/
        └── ...
```

## 🎯 Funcionalidades

- ✅ Landing page com apresentação e navegação
- ✅ Curso completo ou acesso por unidades individuais
- ✅ Botão "Voltar ao Início" em todas as páginas
- ✅ Scroll-snap navigation
- ✅ Navegação por setas (← →)
- ✅ Indicador de progresso
- ✅ 9 tipos de slides diferentes
- ✅ Quiz interativo por unidade
- ✅ Editor visual de slides
- ✅ Página de notas completa

## 🛠️ Tecnologias

- HTML5
- CSS3 (Grid, Flexbox, Scroll-snap)
- JavaScript Vanilla (ES6+)
- **Zero dependências**

## 👨‍🏫 Autor

**Prof. Me. Maximiano Eduardo Pereira**
- PMMG - GAECO LABFOR
- Doutorando UFU
- Certificação Cellebrite

---

*Prompts e conteúdo: Prof. Maximiano | Com auxílio de IA*
