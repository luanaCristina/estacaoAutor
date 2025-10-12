// --- SCRIPT PARA MENU HAMBÚRGUER ---

// Espera o documento HTML ser completamente carregado antes de executar o script.
document.addEventListener('DOMContentLoaded', () => {

    // Seleciona o botão hambúrguer e o menu de navegação pelos seus IDs/classes.
    const hamburgerButton = document.getElementById('hamburger-button');
    const mainNav = document.querySelector('.main-nav');

    // Verifica se ambos os elementos existem na página.
    if (hamburgerButton && mainNav) {
        
        // Adiciona um "ouvinte de evento" para o clique no botão.
        hamburgerButton.addEventListener('click', () => {
            // A cada clique, ele adiciona ou remove a classe 'active' do menu.
            // A classe 'active' é usada no CSS para mostrar ou esconder o menu.
            mainNav.classList.toggle('active');
        });
    }

});
