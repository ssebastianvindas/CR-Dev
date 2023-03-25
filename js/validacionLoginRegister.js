let txtUsuarioLogin = document.querySelector("#form-login #login-usuario");
let txtContrasennaLogin = document.querySelector("#form-login #login-password");
const btnIniciarSesion = document.querySelector(
  ".container-btn-iniciar-sesion #btn-login-form"
);

// login
let validarFormLogin = () => {
  let error = false;
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

btnIniciarSesion.addEventListener("click", validarFormLogin);

txtContrasennaLogin.addEventListener("keyup", () => {
  localStorage.clear();
});
