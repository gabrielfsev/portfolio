// Coletar ID dentro do HTML
let home = document.getElementById('home');

// Inserir componente dentro do HTML
home.innerHTML = `
        <div class="home-img">
            <img src="./src/img/perfil.jpeg" alt="Foto de Perfil">
        </div>

        <div class="home-content">
            <h1>Oi, meu nome é <span>Gabriel</span></h1>

            <h3 class="typing-text"><span></span></h3>

            <p>
                Eu me chamo Gabriel, sou desenvolvedor full-stack web, trabalho com HTML, CSS, Bootstrap, JavaScript,
                PHP e MySql.
            </p>

            <div class="social-icon">
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

            <a href="https://api.whatsapp.com/send/?phone=5514988381159&text=Quero+saber+mais+sobre+seus+servi%C3%A7os.&type=phone_number&app_absent=0"
                target="_blank" class="btn">
                Fale Comigo!
            </a>
        </div>
`