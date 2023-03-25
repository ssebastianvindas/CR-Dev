const cuerpoTablaUser = document.querySelector('#tbl-userClient tbody');
const seleccion = document.getElementById('cita-listar-doctores');
let usuarioConectadoUser = JSON.parse(localStorage.getItem("usuarioConectado"));
let citasUser = [];

const inputs = document.querySelectorAll("input");
const modal = document.getElementById("modal-citas");
const btnRol = document.getElementsByClassName("btn-ver");
const span = document.getElementsByClassName("close")[0];
const btnSave = document.getElementById('btn-save');

let calificacionTotal;
let doctorName;

let miTabla = document.getElementById('tbl-userClient');

let rowFirstCellText;

let closeModal = () => {
    modal.style.display = "none";
}

let displayModal = () => {
    modal.style.display = "block";

    miTabla.addEventListener('click', function(e) {
        let button = e.target;
        let cell = button.parentNode;
        let row = cell.parentNode;
        rowFirstCellText = row.querySelector('td:nth-child(6)').innerHTML;

        console.log(button);
        console.log(cell);
        console.log(row);
        console.log(rowFirstCellText);

    }, false);
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
            let btnEditar = document.createElement("button");
            btnEditar.innerHTML = '<i class="fa-solid fa-pen-to-square"></i>';
            btnEditar.type = "button";
            btnEditar.classList.add("btn-editar");


            //Creación del botón de eliminar
            let btnEliminar = document.createElement("button");
            btnEliminar.innerHTML = '<i class="fa-solid fa-trash-can"></i>';
            btnEliminar.type = "button";
            btnEliminar.classList.add("btn-eliminar");

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
                /*
                miTabla.addEventListener('click', function(e) {
                    let button = e.target;
                    let cell = button.parentNode;
                    let row = cell.parentNode;
                    let rowFirstCellText = row.querySelector('td:nth-child(6)').innerHTML;

                    console.log(button);
                    console.log(cell);
                    console.log(row);
                    console.log(rowFirstCellText);

                    if (rowFirstCellText === cita.doctor) {
                        for (const ver of btnRol) {
                            ver.addEventListener('click', displayModal);
                        }
                    } else {
                        console.log("nimodo");
                    }

                }, false);
                */

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

    let elemento = document.getElementsByName('estrellas');
    for (var i = 0, length = elemento.length; i < length; i++) {
        if (elemento[i].checked) {
            calificacionTotal = elemento[i].value
            console.log(elemento[i].value);
        }
    }

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
            enviarCalificacion();
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

let enviarCalificacion = () => {

    let calificacion = {
        nombreusuario: usuarioConectadoUser.usuario,
        nombreveterinario: rowFirstCellText,
        calificacion: calificacionTotal,
    };
    console.log(calificacion);

    Swal.fire({
        icon: "success",
        title: "Calificacion registrada",
        text: "La calificacion ha sido registrada",
        confirmButtonText: "Continuar",

    }).then(() => {
        registrarDatos("registrar-calificacionVet", calificacion);
    });
};