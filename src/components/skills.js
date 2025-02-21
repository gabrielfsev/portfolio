// Coletar ID dentro do HTML
let skills = document.getElementById('skills');

// Inserir componente dentro do HTML
skills.innerHTML = `
<h2 class="sectionTitle">Skills</h2>

<div class="skillsContainer">
    <a href="https://developer.mozilla.org/pt-BR/docs/Web/HTML" target="_blank" class="skillsBox">
        <img src="./src/img/tech/html.svg" class="skillsImg">
        <p>HTML</p>
    </a>

    <a href="https://developer.mozilla.org/pt-BR/docs/Web/CSS" target="_blank" class="skillsBox">
        <img src="./src/img/tech/css.svg" class="skillsImg">
        <p>CSS</p>
    </a>

    <a href="https://developer.mozilla.org/pt-BR/docs/Web/JavaScript" target="_blank" class="skillsBox">
        <img src="./src/img/tech/js.svg" class="skillsImg">
        <p>JavaScript</p>
    </a>

    <a href="https://www.php.net/" target="_blank" class="skillsBox">
        <img src="./src/img/tech/php.svg" class="skillsImg">
        <p>PHP</p>
    </a>

    <a href="https://www.mysql.com/" target="_blank" class="skillsBox">
        <img src="./src/img/tech/mysql.svg" class="skillsImg sql">
        <p>MySql</p>
    </a>

    <a href="https://getbootstrap.com/" target="_blank" class="skillsBox">
        <img src="./src/img/tech/bootstrap.svg" class="skillsImg">
        <p>Bootstrap</p>
    </a>

    <a href="https://reactnative.dev/" target="_blank" class="skillsBox">
        <img src="./src/img/tech/react-native.svg" class="skillsImg">
        <p>React Native</p>
    </a>

    <a href="https://dotnet.microsoft.com/pt-br/languages/csharp" target="_blank" class="skillsBox">
        <img src="./src/img/tech/csharp.svg" class="skillsImg">
        <p>C# (estudando)</p>
    </a>
</div>
`