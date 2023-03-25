const btnUsuario = document.querySelector("#btn-usuario");
let menu = document.querySelector(".menu-user-container");
let imgMenu = document.getElementById("img-menu");
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
      if (usuarioConectado.foto == "") {
        imgMenu.src = "imgs/users/user-admin.jpg";
      } else {
        imgMenu.src = usuarioConectado.foto;
      }

      break;
    case 2:
      if (usuarioConectado.foto == "") {
        imgMenu.src = "imgs/users/user-secretary.jpg";
      } else {
        imgMenu.src = usuarioConectado.foto;
      }

      break;
    case 3:
      if (usuarioConectado.foto == "") {
        imgMenu.src = "imgs/users/user-vet.jpg";
      } else {
        imgMenu.src = usuarioConectado.foto;
      }

      break;
    case 4:
      if (usuarioConectado.foto == "") {
        imgMenu.src = "imgs/users/user-cliente.jpg";
      } else {
        imgMenu.src = usuarioConectado.foto;
      }

      break;
  }
};

window.addEventListener("load", cambiarFotoPerfil);
