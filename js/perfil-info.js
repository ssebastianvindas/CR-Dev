let nicknamePerfil = document.querySelector(".nickname-perfil");
let txtNombre = document.querySelector(".nombre-container .txt-nombre");
let txtCorreo = document.querySelector(".email-container .txt-correo");
let fotoPerfil = document.querySelector(".img-perfil-content");
let cambiarInfoPerfil = () => {
  switch (usuarioConectado.rol) {
    case 1:
      nicknamePerfil.textContent = usuarioConectado.usuario;
      txtNombre.textContent = usuarioConectado.nombre;
      txtCorreo.textContent = usuarioConectado.correo;
      document.getElementById("img-perfil").src ="/imgs/users/user2.jpg";
      break;
    case 2:
      nicknamePerfil.textContent = usuarioConectado.usuario;
      txtNombre.textContent = usuarioConectado.nombre;
      txtCorreo.textContent = usuarioConectado.correo;
      document.getElementById("img-perfil").src ="/imgs/users/users1.jpg";
      break;
    case 3:
      nicknamePerfil.textContent = usuarioConectado.usuario;
      txtNombre.textContent = usuarioConectado.nombre;
      txtCorreo.textContent = usuarioConectado.correo;
      document.getElementById("img-perfil").src ="/imgs/users/users1.jpg";
      break;
    case 4:
      nicknamePerfil.textContent = usuarioConectado.usuario;
      txtNombre.textContent = usuarioConectado.nombre;
      txtCorreo.textContent = usuarioConectado.correo;
      document.getElementById("img-perfil").src ="/imgs/users/users1.jpg";
      break;
  }
};

window.addEventListener("load", cambiarInfoPerfil);
