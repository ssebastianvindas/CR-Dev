let nicknameUser = document.querySelector(".nickname");
let usuarioConectado = JSON.parse(localStorage.getItem("usuarioConectado"));

let cambiarNickname = () => {
  switch (usuarioConectado.rol) {
    case 1:
      nicknameUser.textContent = usuarioConectado.usuario;
      break;
    case 2:
      nicknameUser.textContent = usuarioConectado.usuario;
      break;
    case 3:
      nicknameUser.textContent = usuarioConectado.usuario;
      break;
    case 4:
      nicknameUser.textContent = usuarioConectado.usuario;
      break;
  }
};

window.addEventListener("load", cambiarNickname);
