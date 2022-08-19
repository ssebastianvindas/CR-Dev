"use strict";
// register
const titular = document.getElementById("txt-nombre");
const numeroTarjeta = document.getElementById("num-tarjeta");
const tipo = document.getElementById("tipo");
const mes = document.getElementById("num-mes");
const anno = document.getElementById("num-año");
const cvv = document.getElementById("num-cvv");
const btnGuardar = document.getElementById("btn-guardar");

let validarFormRegister = () => {
  let error = false;
  if (titular.value == "") {
    error = true;
    titular.classList.add("input-invalid");
    titular.classList.remove("input-valid");
  } else {
    titular.classList.add("input-valid");
    titular.classList.remove("input-invalid");
  }
  if (numeroTarjeta.value == "") {
    error = true;
    numeroTarjeta.classList.add("input-invalid");
    numeroTarjeta.classList.remove("input-valid");
  } else {
    numeroTarjeta.classList.add("input-valid");
    numeroTarjeta.classList.remove("input-invalid");
  }
  if (tipo.value == "") {
    error = true;
    tipo.classList.add("input-invalid");
    tipo.classList.remove("input-valid");
  } else {
    tipo.classList.add("input-valid");
    tipo.classList.remove("input-invalid");
  }
  if (mes.value == "") {
    error = true;
    mes.classList.add("input-invalid");
    mes.classList.remove("input-valid");
  } else {
    mes.classList.add("input-valid");
    mes.classList.remove("input-invalid");
  }
  if (anno.value == "") {
    error = true;
    anno.classList.add("input-invalid");
    anno.classList.remove("input-valid");
  } else {
    anno.classList.add("input-valid");
    anno.classList.remove("input-invalid");
  }
  if (cvv.value == "") {
    error = true;
    cvv.classList.add("input-invalid");
    cvv.classList.remove("input-valid");
  } else {
    cvv.classList.add("input-valid");
    cvv.classList.remove("input-invalid");
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

const obtenerDatosRegister = () => {
  let metodoDePago = {
    titular: titular.value,
    numerotarjeta: numeroTarjeta.value,
    tipo: tipo.value,
    fechaExpiracion: mes.value + '/' + anno.value,
    cvv: cvv.value,
  };
  registrarDatos("registrar-metodoDePago", metodoDePago," ");
};
btnGuardar.addEventListener("click", validarFormRegister);

//   Swal.fire({
//     icon: "success",
//     title: "Informacion completa",
//     text: "Se ha registrado exitosamente",
//     confirmButtonText: "Entendido",
//   });
