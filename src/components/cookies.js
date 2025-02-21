// Coletar ID dentro do HTML
var msgCookies = document.getElementById('cookies-msg');

// Inserir componente dentro do HTML
msgCookies.innerHTML = `
    <div class="cookies-txt">
        <p>Este site usa cookies e tecnologias afins, que são pequenos arquivos ou pedaços de texto baixados para um
            aparelho quando o visitante acessa um website ou aplicativo. Ao utilizar nosso site você está de acordo
            com a utilização dos cookies para te proporcionar uma melhor experiência.</p>
        <div class="cookies-btn">
            <button onclick="accept()">Aceito</button>
        </div>
    </div>
`

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