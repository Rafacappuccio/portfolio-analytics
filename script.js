// Dicionário de Idiomas (PT-BR / EN)
const dicionario = {
    pt: {
        "nav-home": "Início",
        "nav-about": "Sobre",
        "nav-projects": "Projetos",
        "nav-certs": "Certificados",
        "nav-contact": "Contatos",
        "about-paragraph": "Estudante de Ciência de Dados focado no desenvolvimento de soluções estratégicas e inteligência de negócios. Especializado em transformar dados brutos em relatórios dinâmicos que auxiliam na tomada de decisões corporativas eficientes.",
        "title-projects": "Projetos em Destaque",
        "project-text": "Engenharia de dados e construção de dashboard estratégico focado no setor de saúde. O projeto visa centralizar indicadores de faturamento, monitorar o tempo médio de atendimento (SLAs) e analisar taxas de aprovação de reembolsos operacionais, transformando dados dispersos em insights acionáveis.",
        "dash-placeholder": "O Dashboard Interativo do Power BI será embutido aqui.",
        "certs-placeholder": "Listagem e comprovação de cursos técnicos e bootcamps.",
        "btn-contact-text": "Entrar em Contato",
        "back-to-top": "Voltar ao topo"
    },
    en: {
        "nav-home": "Home",
        "nav-about": "About",
        "nav-projects": "Projects",
        "nav-certs": "Certificates",
        "nav-contact": "Contact",
        "about-paragraph": "Data Science student focused on developing strategic solutions and business intelligence. Specialized in transforming raw data into dynamic reports that support efficient corporate decision-making.",
        "title-projects": "Featured Projects",
        "project-text": "Data engineering and development of a strategic dashboard focused on the healthcare sector. The project aims to centralize billing metrics, monitor Service Level Agreements (SLAs), and analyze operational reimbursement approval rates, turning scattered data into actionable insights.",
        "dash-placeholder": "The Interactive Power BI Dashboard will be embedded here.",
        "certs-placeholder": "List and validation of technical courses and bootcamps.",
        "btn-contact-text": "Get In Touch",
        "back-to-top": "Back to top"
    }
};

// Gerenciamento de Idioma
const btnLang = document.getElementById('btn-lang');
let idiomaAtual = 'pt';

btnLang.addEventListener('click', () => {
    idiomaAtual = idiomaAtual === 'pt' ? 'en' : 'pt';
    btnLang.textContent = idiomaAtual === 'pt' ? 'EN' : 'BR';
    document.documentElement.setAttribute('data-lang', idiomaAtual);
    
    // Altera os textos que possuem a tag data-i18n
    document.querySelectorAll('[data-i18n]').forEach(elemento => {
        const chave = elemento.getAttribute('data-i18n');
        elemento.textContent = dicionario[idiomaAtual][chave];
    });
});

// Gerenciamento do Modo Claro/Escuro
const btnTema = document.getElementById('btn-tema');

btnTema.addEventListener('click', () => {
    const tema = document.documentElement.getAttribute('data-theme');
    if (tema === 'light') {
        document.documentElement.setAttribute('data-theme', 'dark');
        btnTema.textContent = '☀️ Claro';
    } else {
        document.documentElement.setAttribute('data-theme', 'light');
        btnTema.textContent = '🌙 Escuro';
    }
});

// Efeito Fade-In Dinâmico ao rolar a página (Intersection Observer)
const secoes = document.querySelectorAll('.fade-in-section');

const observerOpcoes = {
    root: null,
    threshold: 0.1, // Dispara o efeito quando 10% da seção aparecer na tela
    rootMargin: "0px 0px -50px 0px"
};

const secaoObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
        }
    });
}, observerOpcoes);

secoes.forEach(secao => {
    secaoObserver.observe(secao);
});