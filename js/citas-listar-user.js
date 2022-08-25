const cuerpoTablaUser = document.querySelector('#tbl-userClient tbody');
const seleccion = document.getElementById('cita-listar-doctores');
let usuarioConectadoUser = JSON.parse(localStorage.getItem("usuarioConectado"));
let citasUser = [];

const inputs = document.querySelectorAll("input");
const modal = document.getElementById("modal-citas");
const btnRol = document.getElementsByClassName("btn-ver");
const span = document.getElementsByClassName("close")[0];
const btnSave = document.getElementById('btn-save');

const califInput1 = document.getElementById("radio1");
const califInput2 = document.getElementById("radio2");
const califInput3 = document.getElementById("radio3");
let calificacionTotal;


let closeModal = () => {
    modal.style.display = "none";
}

let displayModal = () => {
    modal.style.display = "block";
}

const llenarCitasUser = async() => {

    citasUser = await getDatos('obtener-citas');

    llenarTablaUser();

};

const llenarTablaUser = () => {
    //Limpia el contenido que tiene el cuerpo de la tabla.
    cuerpoTablaUser.innerHTML = '';
    //Para cada usuario que se encuentre dentro de la coleccion de usuarios
    citasUser.forEach(cita => {
        if (usuarioConectadoUser.nombre === cita.nombreduenno) {
            let fila = cuerpoTablaUser.insertRow();

            fila.insertCell().textContent = moment(cita.fecha).format('DD-MM-YYYY');
            fila.insertCell().textContent = cita.hora;
            fila.insertCell().textContent = cita.nombremascota;
            fila.insertCell().textContent = cita.nombreduenno;
            fila.insertCell().textContent = cita.procedimiento;
            fila.insertCell().textContent = cita.doctor;
            fila.insertCell().textContent = cita.estado;

            // Creación de la celda para los botones
            let tdAcciones = fila.insertCell();

            //Creación del boton editar
            let btnEditar = document.createElement('button');
            btnEditar.textContent = 'Editar';
            btnEditar.type = 'button';
            btnEditar.classList.add('btn-editar');
            //Creacion del boton eliminar
            let btnEliminar = document.createElement('button');
            btnEliminar.textContent = 'Cancelar';
            btnEliminar.type = 'button';
            btnEliminar.classList.add('btn-eliminar');

            let btnCalificar = document.createElement('button');
            btnCalificar.textContent = "Calificar";
            btnCalificar.type = 'button';
            btnCalificar.classList.add('btn-ver');

            //Agregar el boton de editar a la celda acciones
            tdAcciones.appendChild(btnEditar);

            //Agregar el boton de eliminar a la celda acciones
            tdAcciones.appendChild(btnEliminar);

            //Agregar el boton de calificar a la celda acciones
            tdAcciones.appendChild(btnCalificar);
            //Itera la cantidad de botones de calificar presentes
            for (const ver of btnRol) {
                ver.addEventListener('click', displayModal);
            }

            window.onclick = function(event) {
                if (event.target == modal) {
                    modal.style.display = "none";
                }
            }

            btnEliminar.addEventListener('click', () => {
                Swal.fire({
                    title: 'Está seguro que desea cancelar la cita?',
                    text: "La acción no se puede revertir!",
                    icon: 'warning',
                    showCancelButton: true,
                    confirmButtonColor: '#3085d6',
                    cancelButtonColor: '#d33',
                    confirmButtonText: 'Sí, eliminar!'
                }).then((result) => {
                    if (result.isConfirmed) {
                        eliminarDatos('eliminar-cita', cita._id);

                    }
                })
            });
        }
    });
};

llenarCitasUser();

let validar = () => {
    for (const input of inputs) {
        if (input.checked) {
            input.classList.remove('input-invalid');
            input.classList.add('input-invalid');
            Swal.fire({
                icon: 'success',
                title: 'Listo',
                text: 'Has registrado la calificacion',
                confirmButtonText: 'Entendido',
            })
            break;
        } else {
            input.classList.add('input-invalid');
            input.classList.remove('input-invalid');
            Swal.fire({
                icon: 'warning',
                title: 'Campos incompletos',
                text: 'Por favor, seleccione al menos una opcion.',
                confirmButtonText: 'Entendido',
            })
        }
    };

}
btnSave.addEventListener('click', validar);
span.addEventListener('click', closeModal);


let getCalificacion = () => {
    if (califInput1.checked) {
        calificacionTotal = 3;
    } else if (califInput2.checked) {
        calificacionTotal = 2;
    } else if (califInput3.checked) {
        calificacionTotal = 1;
    }
    console.log(calificacionTotal);
}

let enviarCalificacion = () => {
    let user = JSON.parse(localStorage.getItem("usuarioConectado"));

    let calificacion = {
        nombreusuario: user.usuarioConectado,
        nombreveterinario: "nose",
        calificacion: calificacionTotal,
    };

    Swal.fire({
        icon: "success",
        title: "Calificacion registrada",
        text: "La calificacion ha sido registrada",
        confirmButtonText: "Continuar",

    }).then(() => {
        registrarDatos("registrar-calificacionVet", calificacion);
        window.location.href = "list-citas.html";
    });
};
getCalificacion();
console.log(getCalificacion());
console.log("hola");