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