let nicknamePerfil = document.querySelector(".nickname-perfil");
let txtNombre = document.querySelector(".nombre-container .txt-nombre");
let txtCorreo = document.querySelector(".email-container .txt-correo");
let txtNumero = document.querySelector(".numero-container .txt-numero");
let txtDireccion = document.querySelector(
  ".direccion-container .txt-direccion"
);
let fotoPerfil = document.querySelector(".img-perfil-content");
let cambiarInfoPerfil = () => {
  switch (usuarioConectado.rol) {
    case 1:
      nicknamePerfil.textContent = usuarioConectado.usuario;
      txtNombre.textContent = usuarioConectado.nombre;
      txtCorreo.textContent = usuarioConectado.correo;
      txtNumero.textContent = usuarioConectado.numero;
      txtDireccion.textContent = usuarioConectado.direccion;
      document.getElementById("img-perfil").src = "../imgs/users/user-admin.jpg";
      break;
    case 2:
      nicknamePerfil.textContent = usuarioConectado.usuario;
      txtNombre.textContent = usuarioConectado.nombre;
      txtCorreo.textContent = usuarioConectado.correo;
      txtNumero.textContent = usuarioConectado.numero;
      txtDireccion.textContent = usuarioConectado.direccion;
      document.getElementById("img-perfil").src = "../imgs/users/user-secretary.jpg";

      break;
    case 3:
      nicknamePerfil.textContent = usuarioConectado.usuario;
      txtNombre.textContent = usuarioConectado.nombre;
      txtCorreo.textContent = usuarioConectado.correo;
      txtNumero.textContent = usuarioConectado.numero;
      txtDireccion.textContent = usuarioConectado.direccion;
      document.getElementById("img-perfil").src = "../imgs/users/user-vet.jpg";
      break;
    case 4:
      nicknamePerfil.textContent = usuarioConectado.usuario;
      txtNombre.textContent = usuarioConectado.nombre;
      txtCorreo.textContent = usuarioConectado.correo;
      txtNumero.textContent = usuarioConectado.numero;
      txtDireccion.textContent = usuarioConectado.direccion;
      document.getElementById("img-perfil").src = usuarioConectado.foto;
      break;
  }
};

window.addEventListener("load", cambiarInfoPerfil);
