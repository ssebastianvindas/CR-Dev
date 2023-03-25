"use strict";
// registrar citas
const dateCitaRegister = document.querySelector("#newCita-date");
const hourCitaRegister = document.querySelector("#newCita-hour");
const namePetCitaR = document.querySelector("#newCita-name-pet");
const nameUserCitaR = document.querySelector("#newCita-name-user");
const procedimientosCitaR = document.querySelector("#newCita-procedimientos");
const doctores = document.getElementById("citas-doctores");
const btnCitasNew = document.querySelector("#btn-citasNew");

let validarFormRegisterCitas = () => {
    let error = false;
    if (dateCitaRegister.value == "") {
        error = true;
        dateCitaRegister.classList.add("input-invalid");
        dateCitaRegister.classList.remove("input-valid");
    } else {
        dateCitaRegister.classList.add("input-valid");
        dateCitaRegister.classList.remove("input-invalid");
    }
    if (hourCitaRegister.value == "") {
        error = true;
        hourCitaRegister.classList.add("input-invalid");
        hourCitaRegister.classList.remove("input-valid");
    } else {
        hourCitaRegister.classList.add("input-valid");
        hourCitaRegister.classList.remove("input-invalid");
    }
    if (namePetCitaR.value == "") {
        error = true;
        namePetCitaR.classList.add("input-invalid");
        namePetCitaR.classList.remove("input-valid");
    } else {
        namePetCitaR.classList.add("input-valid");
        namePetCitaR.classList.remove("input-invalid");
    }
    if (nameUserCitaR.value == "") {
        error = true;
        nameUserCitaR.classList.add("input-invalid");
        nameUserCitaR.classList.remove("input-valid");
    } else {
        nameUserCitaR.classList.add("input-valid");
        nameUserCitaR.classList.remove("input-invalid");
    }
    if (procedimientosCitaR.value == "") {
        error = true;
        procedimientosCitaR.classList.add("input-invalid");
        procedimientosCitaR.classList.remove("input-valid");
    } else {
        procedimientosCitaR.classList.add("input-valid");
        procedimientosCitaR.classList.remove("input-invalid");
    }
    if (doctores.value == "") {
        error = true;
        doctores.classList.add("input-invalid");
        doctores.classList.remove("input-valid");
    } else {
        doctores.classList.add("input-valid");
        doctores.classList.remove("input-invalid");
    }

    if (error == true) {
        Swal.fire({
            icon: "warning",
            title: "Informacion incorrecta",
            text: "Complete los campos resaltados en color rojo",
        });
    } else {
        Swal.fire({
            icon: "success",
            title: "Información completa",
            text: "Se ha registrado exitosamente",
            confirmButtonText: "Entendido",
        });
        let cita = {
            nombremascota: namePetCitaR.value,
            nombreduenno: nameUserCitaR.value,
            procedimiento: procedimientosCitaR.value,
            fecha: dateCitaRegister.value,
            hora: hourCitaRegister.value,
            doctor: doctores.value,
            estado: 'activo',

        };
        registrarDatos("registrar-cita", cita);
    }
};
btnCitasNew.addEventListener("click", validarFormRegisterCitas);

//   Swal.fire({
//     icon: "success",
//     title: "Informacion completa",
//     text: "Se ha registrado exitosamente",
//     confirmButtonText: "Entendido",
//   });