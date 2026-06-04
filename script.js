// Controle do Modo Claro / Escuro
const botaoTema = document.getElementById('btn-tema');
const iconeTema = document.getElementById('theme-icon');
const textoTema = document.getElementById('theme-text');

botaoTema.addEventListener('click', () => {
    // Verifica qual é o tema atual ativo na tag HTML principal
    const temaAtual = document.documentElement.getAttribute('data-theme');
    
    if (temaAtual === 'light') {
        // Se estiver claro, muda para escuro
        document.documentElement.setAttribute('data-theme', 'dark');
        iconeTema.textContent = '☀️';
        textoTema.textContent = 'Claro';
    } else {
        // Se não tiver nada (padrão escuro), muda para claro
        document.documentElement.setAttribute('data-theme', 'light');
        iconeTema.textContent = '🌙';
        textoTema.textContent = 'Escuro';
    }
});

// Mantendo a animação do painel que fizemos antes
const botaoInteragir = document.getElementById('btn-interagir');
const containerPainel = document.getElementById('painel-bi');

if (botaoInteragir) {
    botaoInteragir.addEventListener('click', () => {
        containerPainel.innerHTML = `
            <div style="color: var(--accent-blue); font-weight: bold; font-size: 1.1rem;">
                🔄 Conectando às bases de dados do Excel...
            </div>
            <p style="font-size: 0.9rem; margin-top: 0.5rem;">
                Tratando dados com Power Query (ETL) e validando regras de negócio.
            </p>
        `;

        setTimeout(() => {
            containerPainel.innerHTML = `
                <div style="color: var(--accent-green); font-weight: bold; font-size: 1.2rem; border: 1px dashed var(--accent-green); padding: 2rem; border-radius: 8px; width: 100%; box-sizing: border-box;">
                    ✅ Conexão Local Pronta!
                    <p style="font-size: 0.9rem; font-weight: normal; margin-top: 0.5rem;">
                        A estrutura do site está validada. O próximo passo é embutir o relatório final aqui dentro!
                    </p>
                </div>
            `;
        }, 2500);
    });
}