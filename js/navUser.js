const btnUsuario = document.querySelector("#btn-usuario");
let menu = document.querySelector(".menu-user-container");

btnUsuario.addEventListener("click", () => {
  menu.classList.toggle("ocultar-menu");
});

window.onclick = function (e) {
  if (e.target == menu) {
    menu.classList.toggle("ocultar-menu");
  }
};

let cambiarFotoPerfil = () => {
  switch (usuarioConectado.rol) {
    case 1:
      document.getElementById("img-perfil").innerHTML = usuarioConectado.foto;
      break;
    case 2:
      document.getElementById("img-perfil").innerHTML = usuarioConectado.foto;
      break;
    case 3:
      document.getElementById("img-perfil").innerHTML = usuarioConectado.foto;
      break;
    case 4:
      document.getElementById("img-perfil").innerHTML = usuarioConectado.foto;
      break;
  }
};

window.addEventListener("load", cambiarFotoPerfil);