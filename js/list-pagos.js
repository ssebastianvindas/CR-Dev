const btnRol = document.getElementsByClassName("btn-ver");

let nickname = document.querySelector('.nickname');



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

window.addEventListener('load', cambiarNickname)