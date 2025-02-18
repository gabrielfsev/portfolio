// Criar as variáveis e receber seus valores;
const btn = document.getElementById('btn-menu');
const menu_items = document.getElementById('menu-items');

// Menu Function;
function menu() {
    // Adicionar a classe 'active' por meio do toggle;
    btn.classList.toggle('active');
    menu_items.classList.toggle('show');
}