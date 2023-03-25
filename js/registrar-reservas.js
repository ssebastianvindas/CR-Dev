"use strict";
// register
const txtNombreU = document.getElementById("new-user-fullname");
const txtDireccionU = document.getElementById("new-user-direction");
const txtUsuarioRegisterU = document.getElementById("new-user-name");
const txtNumeroU = document.getElementById("new-user-number");
const txtCorreoRegisterU = document.getElementById("new-user-email");
const txtContrasennaRegisterU = document.getElementById("new-user-password");
const rolesUsersU = document.getElementById("roles");
const btnRegistrarU = document.querySelector(
  "#btn-userAdd"
);

let validarFormRegisterU = () => {
  let error = false;
  if (txtNombreU.value == "") {
    error = true;
    txtNombreU.classList.add("input-invalid");
    txtNombreU.classList.remove("input-valid");
  } else {
    txtNombreU.classList.add("input-valid");
    txtNombreU.classList.remove("input-invalid");
  }
  if (txtDireccionU.value == "") {
    error = true;
    txtDireccionU.classList.add("input-invalid");
    txtDireccion.classList.remove("input-valid");
  } else {
    txtDireccionU.classList.add("input-valid");
    txtDireccionU.classList.remove("input-invalid");
  }
  if (txtUsuarioRegisterU.value == "") {
    error = true;
    txtUsuarioRegisterU.classList.add("input-invalid");
    txtUsuarioRegisterU.classList.remove("input-valid");
  } else {
    txtUsuarioRegisterU.classList.add("input-valid");
    txtUsuarioRegisterU.classList.remove("input-invalid");
  }
  if (txtNumeroU.value == "") {
    error = true;
    txtNumeroU.classList.add("input-invalid");
    txtNumeroU.classList.remove("input-valid");
  } else {
    txtNumeroU.classList.add("input-valid");
    txtNumeroU.classList.remove("input-invalid");
  }
  if (txtCorreoRegisterU.value == "") {
    error = true;
    txtCorreoRegisterU.classList.add("input-invalid");
    txtCorreoRegisterU.classList.remove("input-valid");
  } else {
    txtCorreoRegisterU.classList.add("input-valid");
    txtCorreoRegisterU.classList.remove("input-invalid");
  }
  if (txtContrasennaRegisterU.value == "") {
    error = true;
    txtContrasennaRegisterU.classList.add("input-invalid");
    txtContrasennaRegisterU.classList.remove("input-valid");
  } else {
    txtContrasennaRegisterU.classList.add("input-valid");
    txtContrasennaRegisterU.classList.remove("input-invalid");
  }
  if (rolesUsersU.value == "") {
    error = true;
    rolesUsersU.classList.add("input-invalid");
    rolesUsersU.classList.remove("input-valid");
  } else {
    rolesUsersU.classList.add("input-valid");
    rolesUsersU.classList.remove("input-invalid");
  }
  if (error == true) {
    Swal.fire({
      icon: "warning",
      title: "Informacion incorrecta",
      text: "Complete los campos resaltados en color rojo",
    });
  } else {
    obtenerDatosRegisterU();
  }
};

const obtenerDatosRegisterU = ()=>{
  let usuario = {
    nombre: txtNombre.value,
    direccion: txtDireccion.value,
    usuario: txtUsuarioRegister.value,
    numero: txtNumero.value,
    correo: txtCorreoRegister.value,
    contrasenna: txtContrasennaRegister.value,
    foto: "",
    rol: rolesUsers.value,
};
registrarDatos("registrar-usuario",usuario, 'consultar-usuarios.html' );
}
btnRegistrarU.addEventListener("click", validarFormRegisterU);

//   Swal.fire({
//     icon: "success",
//     title: "Informacion completa",
//     text: "Se ha registrado exitosamente",
//     confirmButtonText: "Entendido",
//   });
