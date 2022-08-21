const campos = document.querySelectorAll(".frm-citas-editar input");
const btnEditar = document.querySelector('#btn-citasEditar');
const selector = document.querySelector('#citas-doctores');
const dateCita = document.querySelector("#newCita-date");
const hourCita = document.querySelector("#newCita-hour");
const namePetCita = document.querySelector("#newCita-name-pet");
const nameUserCita = document.querySelector("#newCita-name-user");
const procedimientosCita = document.querySelector("#newCita-procedimientos");
const doctores = document.getElementById("citas-doctores");
let idStorageList = localStorage.getItem("idStorage");
let citasEditar = [];

let llenarCitaEditar = async() => {


    citasEditar = await getDatos("obtener-citas");
    citasEditar.forEach(cita => {
        if (cita._id === idStorageList) {
            dateCita.value = moment(cita.fecha).format("YYYY-MM-DD");
            hourCita.value = cita.hora;
            namePetCita.value = cita.nombremascota;
            nameUserCita.value = cita.nombreduenno;
            procedimientosCita.value = cita.procedimiento;
            selector.value = cita.doctor

        }
    });

};

let validarFormEditar = () => {
    campos.forEach((input) => {

        if (input.value == "" || selector.value == "") {


            input.classList.add("input-invalid");
            input.classList.remove("input-valid");
            if (selector.value == "") {
                selector.classList.add("input-invalid");
                selector.classList.remove("input-valid");
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
            selector.classList.remove("input-invalid");
            selector.classList.add("input-valid");

            Swal.fire({
                icon: 'success',
                title: 'Cita agendada',
                text: 'Se ha creado la cita',
                confirmButtonText: "Entendido"
            }).then(() => {
                let cita = {
                    nombremascota: namePetCita.value,
                    nombreduenno: nameUserCita.value,
                    procedimiento: procedimientosCita.value,
                    fecha: dateCita.value,
                    hora: hourCita.value,
                    doctor: doctores.value,
                    estado: 'activo'
                };
                editarDatos("actualizar-cita", cita);

            });


        }


    });
};

llenarCitaEditar();
btnEditar.addEventListener('click', validarFormEditar);