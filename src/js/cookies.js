// Criar variável e receber seu valor;
var msgCookies = document.getElementById('cookies-msg');

// Função para armazenar no localStorage
function accept() {
    localStorage.lgpdCookies = "display";
    msgCookies.classList.remove('displayCookies');
}

// Condição para adicionar ou remover o cookies
if (localStorage.lgpdCookies === "display") {
    // Remover cookies da tela
    msgCookies.classList.remove('displayCookies');
} else {
    // Adicionar cookies na tela
    msgCookies.classList.add('displayCookies');
}