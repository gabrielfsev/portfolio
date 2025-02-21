// Coletar ID dentro do HTML
let experience = document.getElementById('experience');

// Inserir componente dentro do HTML
experience.innerHTML = `
        <h2 class="sectionTitle">Experiência</h2>

        <div class="experienceContainer">
            <div class="experienceBox">
                <i class="fa-solid fa-code"></i>
                <h3 class="titleBox">Suporte Técnico - Solutudo Brasil</h3>
                <h4 class="durationBox">3 Meses</h4>
                <p class="descriptionBox">Prestação de suporte dedicado para todos os websites das unidades da empresa,
                    abrangendo questões
                    relacionadas à hospedagem, gestão de e-mails, e alterações avançadas em HTML, CSS e JavaScript. O
                    atendimento é prestado tanto aos clientes quanto aos franqueados, assegurando um suporte completo e
                    eficiente.</p>
            </div>

            <div class="experienceBox">
                <i class="fa-solid fa-code"></i>
                <h3 class="titleBox">Freelancer</h3>
                <h4 class="durationBox">8 Meses</h4>
                <p class="descriptionBox">Criação de sites responsivos utilizando HTML, CSS e JavaScript. Isso pode
                    incluir
                    landing
                    pages, blogs, portfólios, sites corporativos e E-commerce.</p>
            </div>
        </div>
`