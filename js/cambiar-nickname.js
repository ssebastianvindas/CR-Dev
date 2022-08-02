let nicknameUser = document.querySelector(".nickname");
let usuarioConectado = JSON.parse(localStorage.getItem("usuarioConectado"));

let cambiarNickname = () => {
  switch (usuarioConectado.rol) {
    case 1:
      nicknameUser.textContent = usuarioConectado.usuario;
      document.getElementById("img-perfil").src ="/imgs/users/user2.jpg";
      break;
    case 2:
      nicknameUser.textContent = usuarioConectado.usuario;
      document.getElementById("img-perfil").src ="/imgs/users/users1.jpg";
      break;
    case 3:
      nicknameUser.textContent = usuarioConectado.usuario;
      document.getElementById("img-perfil").src ="/imgs/users/users1.jpg";
      break;
    case 4:
      nicknameUser.textContent = usuarioConectado.usuario;
      document.getElementById("img-perfil").src ="/imgs/users/users1.jpg";
      break;
  }
};

window.addEventListener("load", cambiarNickname);
