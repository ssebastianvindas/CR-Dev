// let inputsFormLogin = document.querySelectorAll("#form-login input");
let txtUsuarioLogin = document.querySelector("#form-login #login-usuario");
let txtContrasennaLogin = document.querySelector("#form-login #login-password");

let inputsFormRegister = document.querySelectorAll("#form-register input");

const btnIniciarSesion = document.querySelector(
  ".container-btn-iniciar-sesion #btn-login-form"
);
const btnRegistrar = document.querySelector(
  ".container-btn-register #btn-register-form"
);

// login
let validarFormLogin = () => {
  error = false;
  if (txtUsuarioLogin.value == "") {
    error = true;
    txtUsuarioLogin.classList.add("input-invalid");
  } else {
    txtUsuarioLogin.classList.remove("input-invalid");
  }
  if (txtContrasennaLogin.value == "") {
    error = true;
    txtContrasennaLogin.classList.add("input-invalid");
  } else {
    txtContrasennaLogin.classList.remove("input-invalid");
  }
  if (error == true) {
    Swal.fire({
      icon: "warning",
      title: "Información incorrecta",
      text: "Complete los campos resaltados en color rojo",
    });
  } else {
    iniciarSesion();
  }
};

// register
let validarFormRegister = () => {
  error = false;
  inputsFormRegister.forEach((inputRegister) => {
    let nombreCompleto = inputRegister.value;
    let usuarioRegister = inputRegister.value;
    let numero = inputRegister.value;
    let emailRegister = inputRegister.value;
    let contrasenna = inputRegister.value;
    if (inputRegister.value == "") {
      error = true;
      inputRegister.classList.add("input-invalid");
      inputRegister.classList.remove("input-valid");
    } else {
      inputRegister.classList.add("input-valid");
      inputRegister.classList.remove("input-invalid");
      Swal.fire({
        icon: "success",
        title: "Informacion completa",
        text: "Se ha registrado exitosamente",
        confirmButtonText: "Entendido",
      }).then(() => {
        window.location.href = "login.html";
      });
    }
  });

  if (error == true) {
    Swal.fire({
      icon: "warning",
      title: "Informacion incorrecta",
      text: "Complete los campos resaltados en color rojo",
    });
  }
};

btnIniciarSesion.addEventListener("click", validarFormLogin);
btnRegistrar.addEventListener("click", validarFormRegister);
