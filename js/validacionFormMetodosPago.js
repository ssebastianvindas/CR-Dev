let inputs = document.querySelectorAll("form input");
const btnGuardar = document.querySelector("#btn-guardar");
let selectTipo = document.querySelector("select");

let validarForm = () => {
  error=false
  inputs.forEach((input) => {
    if (input.value == "") {
      error =true
      input.classList.add("input-invalid");
      input.classList.remove("input-valid");
    } else {
      input.classList.add("input-valid");
      input.classList.remove("input-invalid");
    }
    if (selectTipo.value == "") {
      error = true
      selectTipo.classList.add("input-invalid");
      selectTipo.classList.remove("input-valid");
    } else {
      selectTipo.classList.remove("input-invalid");
      selectTipo.classList.add("input-valid");
    }
  });
  if (error == true) {
    Swal.fire({
        'icon': 'warning',
        'title': 'Datos ingresados incorrectamente',
        'text': 'Por favor revise los campos resaltados',
        'confirmButtonText': 'Entendido'
    });

} else {
    obtenerDatos();
}

};
const obtenerDatos = () => {
  swal
    .fire({
      icon: "success",
      title: "Campos completos",
      confirmButtonColor: "#18b158",
      text: "El metodo de pago se ha guardo exitosamente",
      confirmButtonText: "Entendido",
    })
    .then(() => {
      window.location.href = "listadoMetodosPago.html";
    });
};

btnGuardar.addEventListener("click", validarForm);
