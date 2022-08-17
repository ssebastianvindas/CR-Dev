"use strict";
// register
const txtNombre = document.getElementById("new-user-fullname");
const txtDireccion = document.getElementById("new-user-direction");
const txtUsuarioRegister = document.getElementById("new-user-name");
const txtNumero = document.getElementById("new-user-number");
const txtCorreoRegister = document.getElementById("new-user-email");
const txtContrasennaRegister = document.getElementById("new-user-password");
const rolesUsers = document.getElementById("roles");
const btnRegistrar = document.querySelector(
  "#btn-userAdd"
);

let validarFormRegister = () => {
  let error = false;
  if (txtNombre.value == "") {
    error = true;
    txtNombre.classList.add("input-invalid");
    txtNombre.classList.remove("input-valid");
  } else {
    txtNombre.classList.add("input-valid");
    txtNombre.classList.remove("input-invalid");
  }
  if (txtDireccion.value == "") {
    error = true;
    txtDireccion.classList.add("input-invalid");
    txtDireccion.classList.remove("input-valid");
  } else {
    txtDireccion.classList.add("input-valid");
    txtDireccion.classList.remove("input-invalid");
  }
  if (txtUsuarioRegister.value == "") {
    error = true;
    txtUsuarioRegister.classList.add("input-invalid");
    txtUsuarioRegister.classList.remove("input-valid");
  } else {
    txtUsuarioRegister.classList.add("input-valid");
    txtUsuarioRegister.classList.remove("input-invalid");
  }
  if (txtNumero.value == "") {
    error = true;
    txtNumero.classList.add("input-invalid");
    txtNumero.classList.remove("input-valid");
  } else {
    txtNumero.classList.add("input-valid");
    txtNumero.classList.remove("input-invalid");
  }
  if (txtCorreoRegister.value == "") {
    error = true;
    txtCorreoRegister.classList.add("input-invalid");
    txtCorreoRegister.classList.remove("input-valid");
  } else {
    txtCorreoRegister.classList.add("input-valid");
    txtCorreoRegister.classList.remove("input-invalid");
  }
  if (txtContrasennaRegister.value == "") {
    error = true;
    txtContrasennaRegister.classList.add("input-invalid");
    txtContrasennaRegister.classList.remove("input-valid");
  } else {
    txtContrasennaRegister.classList.add("input-valid");
    txtContrasennaRegister.classList.remove("input-invalid");
  }
  if (rolesUsers.value == "") {
    error = true;
    rolesUsers.classList.add("input-invalid");
    rolesUsers.classList.remove("input-valid");
  } else {
    rolesUsers.classList.add("input-valid");
    rolesUsers.classList.remove("input-invalid");
  }
  if (error == true) {
    Swal.fire({
      icon: "warning",
      title: "Informacion incorrecta",
      text: "Complete los campos resaltados en color rojo",
    });
  } else {
    obtenerDatosRegister();
  }
};

const obtenerDatosRegister = ()=>{
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
btnRegistrar.addEventListener("click", validarFormRegister);

//   Swal.fire({
//     icon: "success",
//     title: "Informacion completa",
//     text: "Se ha registrado exitosamente",
//     confirmButtonText: "Entendido",
//   });
