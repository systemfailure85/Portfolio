// Lista de projetos simulados
const meusProjetos = [
    {
        titulo: "E-commerce Dashboard",
        descricao: "Painel administrativo para controle de vendas, estoque e gráficos de rendimento mensal em tempo real.",
        tecnologias: "React, Node.js, Chart.js",
        link: "#"
    },
    {
        titulo: "App de Finanças Pessoais",
        descricao: "Aplicação para controle de gastos com categorização automática e relatórios de economia.",
        tecnologias: "JavaScript, LocalStorage, CSS Grid",
        link: "#"
    },
    {
        titulo: "Buscador de Filmes (API)",
        descricao: "Consumo da API do TMDB para listar filmes em cartaz, com sistema de busca e detalhes da obra.",
        tecnologias: "Fetch API, Async/Await, CSS Flexbox",
        link: "#"
    },
    {
        titulo: "Landing Page para SaaS",
        descricao: "Página de alta conversão totalmente responsiva com animações de scroll e formulário de contato.",
        tecnologias: "HTML5, CSS3 (BEM), JavaScript",
        link: "#"
    },
    {
        titulo: "Gerenciador de Tarefas (To-Do)",
        descricao: "Lista de tarefas interativa com drag-and-drop e persistência de dados no navegador.",
        tecnologias: "Vanilla JS, CSS Animado",
        link: "#"
    },
    {
        titulo: "Calculadora de Nutrição",
        descricao: "Ferramenta que calcula IMC e taxa metabólica basal baseada em inputs do usuário.",
        tecnologias: "JavaScript, Regex, Tailwind CSS",
        link: "#"
    }
];

const containerProjetos = document.getElementById('lista-projetos');

function carregarProjetos() {
    // Limpa o conteúdo inicial do HTML para usar apenas os dados do JS
    containerProjetos.innerHTML = ""; 

    meusProjetos.forEach(projeto => {
        // Criação do elemento do card
        const card = document.createElement('div');
        card.className = 'card-projeto';
        
        card.innerHTML = `
            <div class="card-img" style="background: linear-gradient(45deg, #1e293b, #334155); color: #38bdf8; font-weight: bold;">
                ${projeto.titulo.split(' ')[0]} </div>
            <div class="card-info">
                <h3>${projeto.titulo}</h3>
                <p style="font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;">${projeto.descricao}</p>
                <small style="color: #38bdf8; display: block; margin-bottom: 15px;"><strong>Tech:</strong> ${projeto.tecnologias}</small>
                <a href="${projeto.link}" target="_blank" style="text-decoration: underline;">Ver Detalhes →</a>
            </div>
        `;
        
        containerProjetos.appendChild(card);
    });
}

// Inicializa a renderização
window.onload = carregarProjetos;