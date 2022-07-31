const inputs = document.querySelectorAll("input");
const modal = document.getElementById("modal-expediente");
const btnRol = document.getElementsByClassName("btn-ver");
const span = document.getElementsByClassName("close")[0];

let closeModal = () => {
    modal.style.display = "none";
}

let displayModal = () => {
    modal.style.display = "block";
}

for (const ver of btnRol) {
    ver.addEventListener('click', displayModal);
}

span.addEventListener('click', closeModal);