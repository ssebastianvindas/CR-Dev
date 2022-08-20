const campos1 = document.querySelectorAll(".frm-citas-new input");
const btnAgregar1 = document.querySelector('#btn-citasNew');
const selector = document.querySelector('#citas-doctores');
const dateCita = document.querySelector("#newCita-date");
const hourCita = document.querySelector("#newCita-hour");
const namePetCita = document.querySelector("#newCita-name-pet");
const nameUserCita = document.querySelector("#newCita-name-user");
const procedimientosCita = document.querySelector("#newCita-procedimientos");
const doctores1 = document.getElementById("citas-doctores");

let validarForm = () => {
    campos1.forEach((input) => {

        if (input.value === "" || doctores1.value === "") {


            input.classList.add("input-invalid");
            input.classList.remove("input-valid");
            if (doctores1.value === "") {
                doctores1.classList.add("input-invalid");
                doctores1.classList.remove("input-valid");
            }

            Swal.fire({
                icon: 'warning',
                title: 'Campos incompletos',
                text: 'Por favor revise los campos resaltados',
                confirmButtonText: 'Entendido'
            })
        } else {
            input.classList.remove("input-invalid");
            input.classList.add("input-valid");
            doctores1.classList.remove("input-invalid");
            doctores1.classList.add("input-valid");

            Swal.fire({
                icon: 'success',
                title: 'Cita agendada',
                text: 'Se ha creado la cita',
                confirmButtonText: "Entendido"
            }).then(() => {
                let citasUser = {
                    nombremascota: namePetCita.value,
                    nombreduenno: nameUserCita.value,
                    procedimiento: procedimientosCita.value,
                    fecha: dateCita.value,
                    hora: hourCita.value,
                    doctor: doctores1.value,
                    estado: 'activo'
                };
                registrarDatos('registrar-cita', citasUser);
            });


        }


    });
};

btnAgregar1.addEventListener('click', validarForm)