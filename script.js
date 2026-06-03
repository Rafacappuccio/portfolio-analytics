console.log('Site carregado com sucesso');
// Selecionando o botão e o título do HTML
const botao = document.getElementById('btn-interagir');
const titulo = document.getElementById('main-title');

// Adicionando um evento de clique ao botão
botao.addEventListener('click', () => {
    // Altera a cor do título temporariamente e manda um alerta
    titulo.style.color = '#a855f7'; // Muda para roxo
    alert('Boa, Synch! O JavaScript está funcionando perfeitamente na nuvem!');
});