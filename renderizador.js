// Renderizador de slides - gera HTML automaticamente a partir do conteudo.js

function gerarSlides() {
    const container = document.getElementById('slides-container');
    
    slides.forEach(slide => {
        const section = document.createElement('section');
        
        switch(slide.tipo) {
            case 'perfil':
                section.innerHTML = renderPerfil(slide.conteudo);
                break;
            case 'experiencia':
                section.innerHTML = renderExperiencia(slide.conteudo);
                break;
            case 'academico':
                section.innerHTML = renderAcademico(slide.conteudo);
                break;
            case 'topico':
                section.innerHTML = renderTopico(slide.conteudo);
                break;
            case 'topicoTexto':
                section.innerHTML = renderTopicoTexto(slide.conteudo);
                break;
            case 'topicoTextoItens':
                section.innerHTML = renderTopicoTextoItens(slide.conteudo);
                break;
            case 'ferramentas':
                section.innerHTML = renderFerramentas(slide.conteudo);
                break;
            case 'multi':
                section.innerHTML = renderMulti(slide.conteudo);
                break;
            case 'caso':
                section.innerHTML = renderCaso(slide.conteudo);
                break;
            case 'quiz':
                section.innerHTML = renderQuiz(slide.conteudo);
                // Adicionar interatividade ao quiz após renderizar
                setTimeout(() => adicionarInteratividadeQuiz(section, slide.conteudo.respostaCorreta), 100);
                break;
            default:
                section.innerHTML = '<div class="content"><h1>Tipo de slide não reconhecido</h1></div>';
        }
        
        container.appendChild(section);
    });
}

function renderPerfil(conteudo) {
    let textosHTML = conteudo.texto.map(t => `<p>${t}</p>`).join('');
    
    return `
        <div class="content profile-container">
            <div class="profile-text">
                <span class="badge">${conteudo.badge}</span>
                <h1>${conteudo.titulo}</h1>
                <p><strong>${conteudo.subtitulo}</strong></p>
                ${textosHTML}
                <span class="emoji">${conteudo.emoji}</span>
            </div>
        </div>
    `;
}

function renderExperiencia(conteudo) {
    let cardsHTML = conteudo.cards.map(card => {
        let itensHTML = card.itens.map(item => 
            `<li>${item}</li>`
        ).join('');
        
        return `
            <div class="card">
                <h3>${card.titulo}</h3>
                <ul style="list-style: none; font-size: 0.95rem; color: #ccc; line-height: 1.6;">
                    ${itensHTML}
                </ul>
            </div>
        `;
    }).join('');
    
    let imagemHTML = conteudo.imagem ? `<img src="${conteudo.imagem}" alt="Imagem" style="max-width: 300px; margin: 20px auto; display: block; border-radius: 10px;">` : '';
    let fotoHTML = conteudo.foto ? `<img src="${conteudo.foto}" alt="Foto" style="width: 180px; height: 180px; border-radius: 50%; border: 4px solid var(--accent-color); object-fit: cover; margin-bottom: 20px;">` : '';
    let nomeHTML = conteudo.nome ? `<h2 style="color: var(--accent-color); margin-bottom: 10px;">${conteudo.nome}</h2>` : '';
    let subtituloHTML = conteudo.subtitulo ? `<p style="font-size: 1.1rem; color: #ccc; margin-bottom: 15px;">${conteudo.subtitulo}</p>` : '';
    
    return `
        <div class="content" style="text-align: center;">
            ${imagemHTML}
            ${fotoHTML}
            ${nomeHTML}
            <span class="badge">${conteudo.badge}</span>
            <h1 style="font-size: 2rem;">${conteudo.titulo}</h1>
            ${subtituloHTML}
            <div class="grid" style="text-align: left;">
                ${cardsHTML}
            </div>
        </div>
    `;
}

function renderAcademico(conteudo) {
    let cardsHTML = conteudo.cards.map(card => {
        let itensHTML = card.itens.map(item => 
            `<li>${item}</li>`
        ).join('');
        
        return `
            <div class="card">
                <h3>${card.titulo}</h3>
                <ul style="list-style: none; font-size: 0.9rem; color: #ccc; line-height: 1.4;">
                    ${itensHTML}
                </ul>
            </div>
        `;
    }).join('');
    
    let imagemHTML = conteudo.imagem ? `<img src="${conteudo.imagem}" alt="Imagem" style="max-width: 300px; margin: 20px auto; display: block; border-radius: 10px;">` : '';
    let subtituloHTML = conteudo.subtitulo ? `<p style="font-size: 1.1rem; color: #ccc; margin-bottom: 15px;">${conteudo.subtitulo}</p>` : '';
    
    return `
        <div class="content">
            ${imagemHTML}
            <span class="badge">${conteudo.badge}</span>
            <h1 style="font-size: 2rem;">${conteudo.titulo}</h1>
            ${subtituloHTML}
            <div class="grid">
                ${cardsHTML}
            </div>
            <p style="text-align: center; margin-top: 20px; color: var(--accent-color);"><em>"${conteudo.citacao}"</em></p>
        </div>
    `;
}

function renderTopico(conteudo) {
    let cardsHTML = conteudo.cards.map(card => `
        <div class="card">
            <h3>${card.titulo}</h3>
            <p>${card.texto}</p>
        </div>
    `).join('');
    
    let imagemHTML = conteudo.imagem ? `<img src="${conteudo.imagem}" alt="Imagem" style="max-width: 300px; margin: 20px auto; display: block; border-radius: 10px;">` : '';
    let subtituloHTML = conteudo.subtitulo ? `<h2 style="font-size: 1.3rem; color: #ccc; margin-bottom: 15px;">${conteudo.subtitulo}</h2>` : '';
    
    return `
        <div class="content">
            ${imagemHTML}
            <span class="emoji">${conteudo.emoji}</span>
            <h1>${conteudo.titulo}</h1>
            ${subtituloHTML}
            <p>${conteudo.descricao}</p>
            <div class="grid">
                ${cardsHTML}
            </div>
        </div>
    `;
}

function renderTopicoTexto(conteudo) {
    let topicosHTML = '';
    
    // Verifica se está usando layout de duas colunas
    if (conteudo.layout === 'duas_colunas' && conteudo.colunas) {
        let colunasHTML = conteudo.colunas.map(coluna => {
            let topicosColuna = coluna.topicos.map(topico => `
                <div style="margin-bottom: 20px;">
                    <h3 style="color: #fff; margin-bottom: 8px; font-size: 1.1rem;">${topico.titulo}</h3>
                    ${topico.texto ? `<p style="margin-left: 20px; color: #ccc; font-size: 0.9rem;">${topico.texto}</p>` : ''}
                </div>
            `).join('');
            return `<div style="flex: 1; padding: 0 15px;">${topicosColuna}</div>`;
        }).join('');
        
        topicosHTML = `<div style="display: flex; gap: 30px; margin-top: 30px;">${colunasHTML}</div>`;
    } else {
        // Layout padrão (uma coluna)
        topicosHTML = conteudo.topicos.map(topico => `
            <div style="margin-bottom: 25px;">
                <h3 style="color: #fff; margin-bottom: 10px;">${topico.titulo}</h3>
                <p style="margin-left: 20px; color: #fff;">${topico.texto}</p>
            </div>
        `).join('');
        topicosHTML = `<div style="margin-top: 30px;">${topicosHTML}</div>`;
    }
    
    let imagemHTML = conteudo.imagem ? `<img src="${conteudo.imagem}" alt="Imagem" style="max-width: 300px; margin: 20px auto; display: block; border-radius: 10px;">` : '';
    let emojiHTML = conteudo.emoji ? `<span class="emoji">${conteudo.emoji}</span>` : '';
    let subtituloHTML = conteudo.subtitulo ? `<h2 style="font-size: 1.3rem; color: #ccc; margin-bottom: 15px;">${conteudo.subtitulo}</h2>` : '';
    
    return `
        <div class="content">
            ${imagemHTML}
            ${emojiHTML}
            <h1>${conteudo.titulo}</h1>
            ${subtituloHTML}
            ${topicosHTML}
        </div>
    `;
}

function renderTopicoTextoItens(conteudo) {
    let topicosHTML = conteudo.topicos.map(topico => {
        let itensHTML = topico.itens && topico.itens.length > 0 
            ? `<ul style="list-style: none; margin-left: 40px; margin-top: 10px; color: #ccc;">
                ${topico.itens.map(item => `<li style="margin-bottom: 8px;">• ${item}</li>`).join('')}
               </ul>`
            : '';
        
        return `
            <div style="margin-bottom: 25px;">
                <h3 style="color: #fff; margin-bottom: 10px;">${topico.titulo}</h3>
                <p style="margin-left: 20px; color: #fff;">${topico.texto}</p>
                ${itensHTML}
            </div>
        `;
    }).join('');
    
    let imagemHTML = conteudo.imagem ? `<img src="${conteudo.imagem}" alt="Imagem" style="max-width: 300px; margin: 20px auto; display: block; border-radius: 10px;">` : '';
    let emojiHTML = conteudo.emoji ? `<span class="emoji">${conteudo.emoji}</span>` : '';
    let subtituloHTML = conteudo.subtitulo ? `<h2 style="font-size: 1.3rem; color: #ccc; margin-bottom: 15px;">${conteudo.subtitulo}</h2>` : '';
    
    return `
        <div class="content">
            ${imagemHTML}
            ${emojiHTML}
            <h1>${conteudo.titulo}</h1>
            ${subtituloHTML}
            <div style="margin-top: 30px;">
                ${topicosHTML}
            </div>
        </div>
    `;
}

function renderFerramentas(conteudo) {
    let cardsHTML = conteudo.cards.map(card => `
        <div class="card">
            <span class="emoji">${card.emoji}</span>
            <p>${card.texto}</p>
        </div>
    `).join('');
    
    let imagemHTML = conteudo.imagem ? `<img src="${conteudo.imagem}" alt="Imagem" style="max-width: 300px; margin: 20px auto; display: block; border-radius: 10px;">` : '';
    let subtituloHTML = conteudo.subtitulo ? `<p style="font-size: 1.1rem; color: #ccc; margin-bottom: 15px;">${conteudo.subtitulo}</p>` : '';
    
    return `
        <div class="content">
            ${imagemHTML}
            <h2>${conteudo.titulo}</h2>
            ${subtituloHTML}
            <div class="grid">
                ${cardsHTML}
            </div>
            <p style="margin-top:30px;">${conteudo.rodape}</p>
        </div>
    `;
}

function renderMulti(conteudo) {
    let cardsHTML = conteudo.cards.map(card => `
        <div class="card">
            <h3>${card.titulo}</h3>
            <p>${card.texto}</p>
        </div>
    `).join('');
    
    let imagemHTML = conteudo.imagem ? `<img src="${conteudo.imagem}" alt="Imagem" style="max-width: 300px; margin: 20px auto; display: block; border-radius: 10px;">` : '';
    let subtituloHTML = conteudo.subtitulo ? `<h2 style="font-size: 1.3rem; color: #ccc; margin-bottom: 15px;">${conteudo.subtitulo}</h2>` : '';
    
    return `
        <div class="content">
            ${imagemHTML}
            <h1>${conteudo.titulo}</h1>
            ${subtituloHTML}
            <p>${conteudo.descricao}</p>
            <div class="grid">
                ${cardsHTML}
            </div>
        </div>
    `;
}

function renderCaso(conteudo) {
    let imagemHTML = conteudo.imagem ? `<img src="${conteudo.imagem}" alt="Imagem" style="max-width: 300px; margin: 20px auto; display: block; border-radius: 10px;">` : '';
    
    return `
        <div class="content">
            ${imagemHTML}
            <span class="emoji">${conteudo.emoji}</span>
            <h1>${conteudo.titulo}</h1>
            <h2 style="font-size: 1.3rem; color: #ccc; margin-bottom: 15px;">${conteudo.subtitulo}</h2>
            <p>${conteudo.texto}</p>
            <blockquote style="background: rgba(0,0,0,0.3); padding: 20px; border-radius: 10px;">
                "${conteudo.citacao}"
            </blockquote>
        </div>
    `;
}

function renderQuiz(conteudo) {
    let opcoesHTML = conteudo.opcoes.map(opcao => 
        `<div class="quiz-option">${opcao}</div>`
    ).join('');
    
    let imagemHTML = conteudo.imagem ? `<img src="${conteudo.imagem}" alt="Imagem" style="max-width: 300px; margin: 20px auto; display: block; border-radius: 10px;">` : '';
    let subtituloHTML = conteudo.subtitulo ? `<h2 style="font-size: 1.3rem; color: #ccc; margin-bottom: 15px;">${conteudo.subtitulo}</h2>` : '';
    
    return `
        <div class="content">
            ${imagemHTML}
            <h1>${conteudo.titulo}</h1>
            ${subtituloHTML}
            <p>${conteudo.pergunta}</p>
            ${opcoesHTML}
            <p style="font-size: 0.9rem; color: var(--accent-color); margin-top: 20px;">${conteudo.dica}</p>
        </div>
    `;
}

function adicionarInteratividadeQuiz(section, respostaCorreta) {
    const opcoes = section.querySelectorAll('.quiz-option');
    
    opcoes.forEach((opcao, index) => {
        opcao.addEventListener('click', function() {
            // Só permite clicar uma vez
            if (this.classList.contains('respondido')) return;
            
            // Marca todas como respondidas
            opcoes.forEach(opt => opt.classList.add('respondido'));
            
            // Verifica se está correto
            if (index === respostaCorreta) {
                this.style.background = 'rgba(34, 139, 34, 0.7)';
                this.innerHTML += ' ✓ Correto!';
            } else {
                this.style.background = 'rgba(178, 31, 31, 0.5)';
                this.innerHTML += ' ✗ Incorreto';
                // Mostra a resposta correta
                opcoes[respostaCorreta].style.background = 'rgba(34, 139, 34, 0.7)';
                opcoes[respostaCorreta].innerHTML += ' ✓ Resposta correta';
            }
        });
    });
}
