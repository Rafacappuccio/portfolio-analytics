const botao = document.getElementById('btn-interagir');
const containerPainel = document.getElementById('painel-bi');

botao.addEventListener('click', () => {
    // Muda o texto do container para simular que o Power BI está carregando
    containerPainel.innerHTML = `
        <div style="color: #38bdf8; font-weight: bold; font-size: 1.1rem;">
            🔄 Conectando às bases de dados do Excel...
        </div>
        <p style="font-size: 0.9rem; color: #9ca3af; margin-top: 0.5rem;">
            Tratando dados com Power Query (ETL) e validando regras de negócio.
        </p>
    `;

    // Após 2.5 segundos, exibe a confirmação de que a estrutura está pronta
    setTimeout(() => {
        containerPainel.innerHTML = `
            <div style="color: #10b981; font-weight: bold; font-size: 1.2rem; border: 1px dashed #10b981; padding: 2rem; border-radius: 8px;">
                ✅ Conexão Local Pronta!
                <p style="font-size: 0.9rem; color: #cbd5e1; font-weight: normal; margin-top: 0.5rem;">
                    A estrutura do site está validada. O próximo passo é publicar o relatório do Power BI na nuvem e colar o link de incorporação aqui!
                </p>
            </div>
        `;
    }, 2500);
});