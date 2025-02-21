let projects = document.getElementById('projects');

projects.innerHTML = `
        <h2 class="sectionTitle">Projetos</h2>

        <div class="projectsContainer">
            <div class="projectsBox">
                <img src="./src/img/projects/garagem_calcados.png">
                <h2 class="titleProject">Garagem Calçados</h2>
                <p class="descriptionProject">E-commerce desenvolvido para um empresa fornecer vendas online.</p>
                <div class="buttonsProject">
                    <a href="https://garagemcalcados.com.br/" target="_blank" class="btnProject">Website</a>
                    <a onclick="modalActive(1)" class="btnProject">Repositório</a>
                </div>
            </div>

            <div class="projectsBox">
                <img src="./src/img/projects/crud.png">
                <h2 class="titleProject">CRUD</h2>
                <p class="descriptionProject">Create Read Update e Delete, feito com PHP, MySql e Bootstrap</p>
                <div class="buttonsProject">
                    <a onclick="modalActive(2)" class="btnProject">Website</a>
                    <a href="https://github.com/gabrielfsev/crud" target="_blank" class="btnProject">Repositório</a>
                </div>
            </div>

            <div class="projectsBox">
                <img src="./src/img/projects/dsupplier.png" alt="">
                <h2 class="titleProject">Dsupplier</h2>
                <p class="descriptionProject">E-Commerce com foco em informar receitas e vendas online.</p>
                <div class="buttonsProject">
                    <a href="https://dsupplier.vercel.app/" target="_blank" class="btnProject">Website</a>
                    <a href="https://github.com/gabrielfsev/dsupplier" target="_blank"
                        class="btnProject">Repositório</a>
                </div>
            </div>
        </div>
`