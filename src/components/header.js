// Coletar ID dentro do HTML
let header = document.getElementById('header');

// Inserir componente dentro do HTML
header.innerHTML = `
<nav class="nav">
            <a href="/" class="logo">Gabrielsev</a>

            <div class="navbar">
                <ul>
                    <li><a href="#home">Home</a></li>
                    <li><a href="#experience">Experiência</a></li>
                    <li><a href="#skills">Skills</a></li>
                    <li><a href="#projects">Projetos</a></li>
                </ul>
            </div>

            <button onclick="menu()" id="btn-menu" class="btn-menu">
                <span class="line"></span>
                <span class="line"></span>
                <span class="line"></span>
            </button>
        </nav>

        <div class="menu-items" id="menu-items">
            <ul>
                <li><a href="#home">Home</a></li>
                <li><a href="#experience">Experiência</a></li>
                <li><a href="#skills">Skills</a></li>
                <li><a href="#projects">Projetos</a></li>
            </ul>
        </div>
`;