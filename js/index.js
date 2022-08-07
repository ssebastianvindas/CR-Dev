const castraciones = document.querySelector("#castraciones");
const cirugias = document.querySelector("#cirugias");
const desparacitaciones = document.querySelector("#desparacitaciones");
const grooming = document.querySelector("#grooming");
const odontovet = document.querySelector("#odontovet");
const radio = document.querySelector("#radio");
const vacunacion = document.querySelector("#vacunacion");
const emergencias = document.querySelector("#emergencias");

let castracionesSelect = () => {
  document.getElementById("sct-castraciones").classList.add("card-select");
  setTimeout(() => {
    document.getElementById("sct-castraciones").classList.remove("card-select");
  }, 3000);
};

let cirugiasSelect = () => {
  document.getElementById("sct-cirugias").classList.add("card-select");
  setTimeout(() => {
    document.getElementById("sct-cirugias").classList.remove("card-select");
  }, 3000);
};
let desparacitacionesSelect = () => {
  document.getElementById("sct-desparasitaciones").classList.add("card-select");
  setTimeout(() => {
    document
      .getElementById("sct-desparasitaciones")
      .classList.remove("card-select");
  }, 3000);
};
let groomingSelect = () => {
  document.getElementById("sct-grooming").classList.add("card-select");
  setTimeout(() => {
    document.getElementById("sct-grooming").classList.remove("card-select");
  }, 3000);
};
let odontovetSelect = () => {
  document.getElementById("sct-odontovet").classList.add("card-select");
  setTimeout(() => {
    document.getElementById("sct-odontovet").classList.remove("card-select");
  }, 3000);
};
let radioSelect = () => {
  document.getElementById("sct-radio").classList.add("card-select");
  setTimeout(() => {
    document.getElementById("sct-radio").classList.remove("card-select");
  }, 3000);
};
let vacunacionSelect = () => {
  document.getElementById("sct-vacuna").classList.add("card-select");
  setTimeout(() => {
    document.getElementById("sct-vacuna").classList.remove("card-select");
  }, 3000);
};
let emergenciasSelect = () => {
  document.getElementById("sct-emergencias").classList.add("card-select");
  setTimeout(() => {
    document.getElementById("sct-emergencias").classList.remove("card-select");
  }, 3000);
};

castraciones.addEventListener("click", castracionesSelect);
cirugias.addEventListener("click", cirugiasSelect);
desparacitaciones.addEventListener("click", desparacitacionesSelect);
grooming.addEventListener("click", groomingSelect);
odontovet.addEventListener("click", odontovetSelect);
radio.addEventListener("click", radioSelect);
vacunacion.addEventListener("click", vacunacionSelect);
emergencias.addEventListener("click", emergenciasSelect);

