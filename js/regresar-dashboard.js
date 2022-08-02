const botonReservaBack = document.querySelector(".btn-dashboard-principal");
let regresarPrincipal = () => {
    let usuarioConectado = JSON.parse(localStorage.getItem("usuarioConectado"));
    switch (usuarioConectado.rol) {
        case 1:
            window.location.href = "../dashboard-admin.html";
            break;
        case 2:
            window.location.href = "../dashboard-secretaria.html";
            break;
        case 3:
            window.location.href = "../dashboard-veterinario.html";
            break;
        case 4:
            window.location.href = "../dash-usuario.html";
            break;
    }
};
botonReservaBack.addEventListener("click", regresarPrincipal);