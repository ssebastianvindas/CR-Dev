// declaracion de variables
const btnLogin = document.querySelector("#btn-login");
const btnRegister = document.querySelector("#btn-register");
const formlogin = document.querySelector(".formulario-login");
const formRegister = document.querySelector(".formulario-register");
const contenedorLoginRegister = document.querySelector(
  ".contenedor-login-register"
);
const cajaTraseraLogin = document.querySelector(".caja-trasera-login");
const cajaTraseraRegister = document.querySelector(".caja-trasera-register");
const cajatresera = document.querySelector(".caja-trasera");
let anchoPage = () => {
  if (window.innerWidth > 850) {
    cajaTraseraLogin.style.display = "block";
    cajaTraseraRegister.style.display = "block";
    cajatresera.style.marginTop = "0px";
    formlogin.style.width = "90%";
  } else {
    cajaTraseraRegister.style.display = "block";
    formlogin.style.width = "100%";
    cajaTraseraRegister.style.opacity = "1";
    cajaTraseraLogin.style.display = "none";
    formlogin.style.display = "block";
    formRegister.style.display = "none";
    contenedorLoginRegister.style.left = "0px";
    cajatresera.style.marginTop = "20px";
  }
};

let login = () => {
  if (window.innerWidth > 850) {
    formlogin.style.display = "block";
    contenedorLoginRegister.style.left = "10px";
    formRegister.style.display = "none";
    cajaTraseraRegister.style.opacity = "1";
    cajaTraseraLogin.style.opacity = "0px";
  } else {
    formlogin.style.display = "block";
    contenedorLoginRegister.style.left = "0px";
    formlogin.style.width = "100%";
    formRegister.style.display = "none";
    cajaTraseraRegister.style.display = "block";
    cajaTraseraLogin.style.display = "none";
    cajatresera.style.marginTop = "20px";
  }
};
let register = () => {
  if (window.innerWidth > 850) {
    formRegister.style.display = "block";
    contenedorLoginRegister.style.left = "410px";
    formlogin.style.display = "none";
    cajaTraseraRegister.style.opacity = "0";
    cajaTraseraLogin.style.opacity = "1";
  } else {
    formRegister.style.display = "block";
    contenedorLoginRegister.style.left = "0px";
    formlogin.style.display = "none";
    cajaTraseraRegister.style.display = "none";
    cajaTraseraLogin.style.display = "block";
    cajaTraseraLogin.style.opacity = "1";
    cajatresera.style.marginTop = "20px";
  }
};
if (window.innerWidth > 850) {
  window.addEventListener("resize", anchoPage);
  anchoPage();
}
anchoPage();
btnRegister.addEventListener("click", register);
btnLogin.addEventListener("click", login);

// validacion de inputs
let inputs = document.querySelectorAll("input");
for (let i = 0; i < inputs.length; i++) {
  inputs[i].addEventListener("keyup", function () {
    if (this.value.length >= 1) {
      this.nextElementSibling.classList.add("fijar");
    } else {
      this.nextElementSibling.classList.remove("fijar");
    }
  });
}

//fucion de boton password
let btnPassword1 = document.querySelector(".btn-password1");
let icon = document.querySelector(".fa-eye");

let password1 = () => {
  let tipo = document.getElementById("login-password");
  if (tipo.type == "password") {
    tipo.type = "text";
    icon.classList.replace("fa-eye", "ri-eye-close-fill");
  } else {
    tipo.type = "password";
    icon.classList.replace("ri-eye-close-fill", "fa-eye");
  }
};
// register
let btnPassword2 = document.querySelector(".btn-password2");
let icon2 = document.querySelector(".ri-eye-fill");

let password2 = () => {
  let tipo2 = document.getElementById("register-password2");
  if (tipo2.type == "password") {
    tipo2.type = "text";
    icon2.classList.replace("ri-eye-fill", "ri-eye-close-fill");
  } else {
    tipo2.type = "password";
    icon2.classList.replace("ri-eye-close-fill", "ri-eye-fill");
  }
};

btnPassword1.addEventListener("click", password1);
btnPassword2.addEventListener("click", password2);

// validacion login
const btnFormLogin = document.querySelector("#btn-login-form");
const formularioLogin = document.querySelector("#form-login");
const inputsLogin = document.querySelectorAll("#form-login input");

// const expresiones = {
//   usuario: /^[a-zA-Z0-9\_\-]{4,16}$/, // Letras, numeros, guion y guion_bajo
//   nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
//   mascota: /^[a-zA-ZÀ-ÿ\s]{1,15}$/, // Letras y espacios, pueden llevar acentos.
//   password: /^.{4,12}$/, // 4 a 12 digitos.
//   correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
//   telefono: /^\d{7,14}$/, // 7 a 14 numeros.
// };

// const campos = {
//   nombreCompleto: false,
//   mascota: false,
//   usuario: false,
//   email: false,
//   password: false,
//   phone: false,
// };

// const validarFormularioLogin = (e) => {
//   switch (e.target.name) {
//     case "login-usuario":
//       validarCampoLogin(expresiones.usuario, e.target, "usuario");
//       break;
//     case "login-password":
//       validarCampoLogin(expresiones.password, e.target, "password");
//       break;
//   }
// };

// const validarCampoLogin = (expresion, input, campo) => {
//   if (expresion.test(input.value)) {
//     document
//       .getElementById(`login-${campo}`)
//       .classList.remove("formulario__grupo-incorrecto");
//     document
//       .getElementById(`login-${campo}`)
//       .classList.add("formulario__grupo-correcto");
//     document
//       .querySelector(`#grupo__${campo} .formulario__input-error`)
//       .classList.remove("formulario__input-error-activo");
//     document.getElementById("btn-password-1").classList.add("btn-password");
//     document
//       .getElementById("btn-password-1")
//       .classList.remove("btn-password-error");
//     document.getElementById("form-login").classList.add("formulario-login");
//     document
//       .getElementById("form-login")
//       .classList.remove("formulario-login-error");
//     campos[campo] = true;
//   } else {
//     document
//       .getElementById(`login-${campo}`)
//       .classList.add("formulario__grupo-incorrecto");
//     document
//       .getElementById(`login-${campo}`)
//       .classList.remove("formulario__grupo-correcto");
//     document
//       .querySelector(`#grupo__${campo} .formulario__input-error`)
//       .classList.add("formulario__input-error-activo");
//     document.getElementById("form-login").classList.remove("formulario-login");
//     document
//       .getElementById("form-login")
//       .classList.add("formulario-login-error");
//     document.getElementById("btn-password-1").classList.remove("btn-password");
//     document
//       .getElementById("btn-password-1")
//       .classList.add("btn-password-error");
//     campos[campo] = false;
//   }
// };

// inputsLogin.forEach((input) => {
//   input.addEventListener("keyup", validarFormularioLogin);
//   input.addEventListener("blur", validarFormularioLogin);
// });

// btnFormLogin.addEventListener("click", (e) => {
//   if (campos.usuario && campos.password) {
//     formularioLogin.reset();
//   }
// });

// // validacion register
// const formularioRegister = document.querySelector("#form-register");
// const inputsRegister = document.querySelectorAll("#form-register input");

// const validarFormularioRegister = (e) => {
//   switch (e.target.name) {
//     case "register-name":
//       validarCampoRegister(expresiones.nombre, e.target, "name");
//       break;
//     case "register-pet":
//       validarCampoRegister(expresiones.mascota, e.target, "pet");
//       break;
//     case "register-user":
//       validarCampoRegister(expresiones.usuario, e.target, "user");
//       break;
//     case "register-email":
//       validarCampoRegister(expresiones.correo, e.target, "email");
//       break;
//     case "register-number":
//       validarCampoRegister(expresiones.telefono, e.target, "number");
//       break;
//     case "register-password2":
//       validarCampoRegister(expresiones.password, e.target, "password2");
//       break;
//   }
// };

// const validarCampoRegister = (expresion, input, campo) => {
//   if (expresion.test(input.value)) {
//     document
//       .getElementById(`register-${campo}`)
//       .classList.remove("formulario__grupo-incorrecto");
//     document
//       .getElementById(`register-${campo}`)
//       .classList.add("formulario__grupo-correcto");
//     document
//       .querySelector(`#grupo__${campo} .formulario__input-error-register`)
//       .classList.remove("formulario__input-error-activo");
//     document.getElementById("btn-password-2").classList.add("btn-password");
//     document
//       .getElementById("btn-password-2")
//       .classList.remove("btn-password-error");
//     campos[campo] = true;
//   } else {
//     document
//       .getElementById(`register-${campo}`)
//       .classList.add("formulario__grupo-incorrecto");
//     document
//       .getElementById(`register-${campo}`)
//       .classList.remove("formulario__grupo-correcto");
//     document
//       .querySelector(`#grupo__${campo} .formulario__input-error-register`)
//       .classList.add("formulario__input-error-activo");
//     document
//       .getElementById("form-register")
//       .classList.remove("formulario-register");
//     document
//       .getElementById("form-register")
//       .classList.add("formulario-register-error");
//     document.getElementById("btn-password-2").classList.remove("btn-password");
//     document
//       .getElementById("btn-password-2")
//       .classList.add("btn-password-error");
//     campos[campo] = false;
//   }
// };

// inputsRegister.forEach((input) => {
//   input.addEventListener("keyup", validarFormularioRegister);
//   input.addEventListener("blur", validarFormularioRegister);
// });

// formularioRegister.addEventListener("click", (e) => {
//   if(campos.nombreCompleto && campos.mascota && campos.password && campos.email && campos.phone ){
// 		document.getElementById('formulario__mensaje-exito').classList.add('formulario__mensaje-exito-activo');
// 		setTimeout(() => {
// 			document.getElementById('formulario__mensaje-exito').classList.remove('formulario__mensaje-exito-activo');
// 		}, 5000);
//   }
// });
