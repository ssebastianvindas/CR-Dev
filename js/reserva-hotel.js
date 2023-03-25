const inputEntrada = document.getElementById("fecha-entrada");
const inputSalida = document.getElementById("fecha-salida");
const inputAnimales = document.getElementById("cantidad-animales");
const btnGuardar = document.getElementById("btn-registrar");
const inputMonto = document.getElementById("frm-monto-reserva");
const inputMascota = document.getElementById("frm-mascota-reserva");
let usuarioRegistroReserva = JSON.parse(
  localStorage.getItem("usuarioConectado")
);

const validarReservaUser = () => {
  let error = false;

  if (inputEntrada.value == "") {
    error = true;
    inputEntrada.classList.add("input-invalid");
  } else {
    inputEntrada.classList.remove("input-invalid");
  }

  if (inputSalida.value == "") {
    error = true;
    inputSalida.classList.add("input-invalid");
  } else {
    inputSalida.classList.remove("input-invalid");
  }

  if (inputAnimales.value == "") {
    error = true;
    inputAnimales.classList.add("input-invalid");
  } else {
    inputAnimales.classList.remove("input-invalid");
  }
  if (inputMascota.value == "") {
    error = true;
    inputMascota.classList.add("input-invalid");
  } else {
    inputMascota.classList.remove("input-invalid");
  }

  if (error == true) {
    Swal.fire({
      icon: "warning",
      title: "Datos ingresados incorrectamente",
      text: "Favor revise los campos resaltados",
      confirmButtonText: "Entendido",
    });
  } else {
    obtenerDatosRegistroUser();
  }
};
const obtenerDatosRegistroUser = () => {
  //variable tipo JSON
  let reserva = {
    usuario: usuarioRegistroReserva.usuario,
    mascota: inputMascota.value,
    fechaEntrada: inputEntrada.value,
    fechaSalida: inputSalida.value,
    numMascotas: inputAnimales.value,
    monto: inputMonto.value,
  };

  Swal.fire({
    icon: "success",
    title: "Reserva realizada exitosamente",
    text: "Su numero de confirmacion le llegara al correo",
    confirmButtonText: "Continuar",
  }).then(() => {
    registrarDatos("registrar-reservas", reserva);
  });
};

function getNumberOfDays(start, end) {
  const date1 = new Date(start);
  const date2 = new Date(end);

  // One day in milliseconds
  const oneDay = 1000 * 60 * 60 * 24;

  // Calculating the time difference between two dates
  const diffInTime = date2.getTime() - date1.getTime();

  // Calculating the no. of days between two dates
  const diffInDays = Math.round(diffInTime / oneDay);

  return diffInDays;
}

inputAnimales.addEventListener("keyup", function (e) {
  if (e.key === "Enter") {
    let dias = getNumberOfDays(inputEntrada.value, inputSalida.value);
    let monto = 0;
    monto = parseInt(inputAnimales.value) * (dias * 5000);
    inputMonto.value = monto;
  }
});
btnGuardar.addEventListener("click", validarReservaUser);
