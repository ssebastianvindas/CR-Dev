const btnAgregar1 = document.querySelector("#btn-citasNew");
const selector = document.querySelector("#citas-doctores");
const dateCita = document.querySelector("#newCita-date");
const hourCita = document.querySelector("#newCita-hour");
const namePetCita = document.querySelector("#newCita-name-pet");
const nameUserCita = document.querySelector("#newCita-name-user");
const procedimientosCita = document.querySelector("#newCita-procedimientos");
const doctores1 = document.getElementById("citas-doctores");
const usuario = JSON.parse(localStorage.getItem('usuarioConectado'));
const select = document.querySelector("#newCita-name-pet");
let mascotas = [];
let llenarMascotas = async() => {
    mascotas = await getDatosByUser('obtener-mascota-usuario', usuario.usuario);
    mascotas.forEach((mascota) => {
        const option = document.createElement('option');
        const valor = mascota.petName;
        option.value = valor;
        option.text = valor;
        select.appendChild(option);
    });
};

let validarForm = () => {
    let error = false;
    if (selector.value == "") {
        error = true;
        selector.classList.add("input-invalid");
        selector.classList.remove("input-valid");
    } else {
        selector.classList.remove("input-invalid");
        selector.classList.add("input-valid");
    }
    if (dateCita.value == "") {
        error = true;
        dateCita.classList.add("input-invalid");
        dateCita.classList.remove("input-valid");
    } else {
        dateCita.classList.remove("input-invalid");
        dateCita.classList.add("input-valid");
    }
    if (hourCita.value == "") {
        error = true;
        hourCita.classList.add("input-invalid");
        hourCita.classList.remove("input-valid");
    } else {
        hourCita.classList.remove("input-invalid");
        hourCita.classList.add("input-valid");
    }
    if (namePetCita.value == "") {
        error = true;
        namePetCita.classList.add("input-invalid");
        namePetCita.classList.remove("input-valid");
    } else {
        namePetCita.classList.remove("input-invalid");
        namePetCita.classList.add("input-valid");
    }
    if (procedimientosCita.value == "") {
        error = true;
        procedimientosCita.classList.add("input-invalid");
        procedimientosCita.classList.remove("input-valid");
    } else {
        procedimientosCita.classList.remove("input-invalid");
        procedimientosCita.classList.add("input-valid");
    }
    if (error == true) {
        Swal.fire({
            icon: "warning",
            title: "Campos incompletos",
            text: "Por favor revise los campos resaltados",
            confirmButtonText: "Entendido",
        });
    } else {
        obtenerDatos();
    }

};
const obtenerDatos = () => {
    let citasUser = {
        nombremascota: namePetCita.value,
        nombreduenno: nameUserCita.value,
        procedimiento: procedimientosCita.value,
        fecha: dateCita.value,
        hora: hourCita.value,
        doctor: doctores1.value,
        estado: "activo",
    };
    registrarDatos("registrar-cita", citasUser);
};

const llenarNombre = () => {
    nameUserCita.value = usuarioConectado.nombre
}
window.onload = llenarNombre
llenarMascotas();
btnAgregar1.addEventListener("click", validarForm);