// Coletar ID dentro do HTML
let footer = document.getElementById('footer');

// Inserir componente dentro do HTML
footer.innerHTML = `
        <div class="social">
            <!-- Linkedin -->
            <a data-social="Linkedin" href="https://www.linkedin.com/in/gabriel-ferreira-severino-a7a70b317"
                target="_blank">
                <i class="fa-brands fa-linkedin"></i>
            </a>

            <!-- Github -->
            <a data-social="Github" href="https://github.com/gabrielfsev" target="_blank">
                <i class="fa-brands fa-github"></i>
            </a>

            <!-- CV -->
            <a data-social="CV"
                href="https://drive.google.com/file/d/1KL8N4kFTFH3A15zpNXJ-vsbmDI3XoDhW/view?usp=sharing"
                target="_blank">
                <i class="fa-solid fa-file-pdf"></i>
            </a>
        </div>

        <ul class="list">
            <li><a href="#home">Home</a></li>
            <li><a href="#experience">Experiência</a></li>
            <li><a href="#projects">Projetos</a></li>
        </ul>
        <p class="copyright">
            &copy; Gabrielsev | Todos os Direitos Reservados
        </p>
`