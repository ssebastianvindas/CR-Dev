const inputs = document.querySelectorAll("input");
const modal = document.getElementById("modal-expediente");
const btnRol = document.getElementsByClassName("btn-ver");
const span = document.getElementsByClassName("close")[0];
let nickname = document.querySelector('.nickname');

let closeModal = () => {
    modal.style.display = "none";
}

let displayModal = () => {
    modal.style.display = "block";
}

for (const ver of btnRol) {
    ver.addEventListener('click', displayModal);
}



let cambiarNickname = () => {
    let usuarioConectado = JSON.parse(localStorage.getItem("usuarioConectado"));
    switch (usuarioConectado.rol) {
        case 1:
            nickname.textContent = 'Administrador'
            break;
        case 2:
            nickname.textContent = 'Secretaria'
            break;
        case 3:
            nickname.textContent = 'Veterinario'
            break;
        case 4:
            nickname.textContent = 'Cliente'
            break;
    }
}

window.addEventListener('load', cambiarNickname);
span.addEventListener('click', closeModal);