var modalRepository = document.getElementById('modalRepository');
var modalWebsite = document.getElementById('modalWebsite');
var modalContent = document.getElementById('modalContent');

function modalActive(num) {
    if (num == 1) {
        modalRepository.style.display = "flex";
        modalWebsite.style.display = "none";
    } else if (num == 2) {
        modalRepository.style.display = "none";
        modalWebsite.style.display = "flex";
    } else if (num == 0) {
        modalRepository.style.display = "none";
        modalWebsite.style.display = "none";
    }
}

modalRepository.innerHTML = `
        <div id="modalContent" class="modalContent">
            <div class="closeBtn">
                <i onclick="modalActive(0)" class="fa-solid fa-xmark"></i>
            </div>

            <h1>Aviso!</h1>

            <p>A empresa do projeto não disponibiliza a visibilidade do código.</p>
        </div>
`

modalWebsite.innerHTML = `
        <div id="modalContent" class="modalContent">
            <div class="closeBtn">
                <i onclick="modalActive(0)" class="fa-solid fa-xmark"></i>
            </div>

            <h1>Aviso!</h1>

            <p>Não é possivel acessar o website.</p>
        </div>
`