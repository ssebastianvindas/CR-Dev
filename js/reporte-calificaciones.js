"use strict";
const cuerpoTablaCalificaciones = document.querySelector("#tbl-calificaciones tbody");
const cuerpoTablaCalificaciones2 = document.querySelector("#tbl-calificaciones2 tbody");

let califica = [];
let califMascotas = [];

const llenarCalificaciones = async() => {
    califica = await getDatos("obtener-calificacionVet");

    llenarTablaCalificar();
};

const llenarCalificacionesPet = async() => {
    califMascotas = await getDatos("obtener-calificacionPet");
    llenarTablaCalificarPets();
}

const llenarTablaCalificar = () => {
    cuerpoTablaCalificaciones.innerHTML = ""; //limpia el contenido del html

    califica.forEach((calif) => {
        let fila = cuerpoTablaCalificaciones.insertRow(); //Crea una fila

        fila.insertCell().textContent = calif.nombreusuario;
        fila.insertCell().textContent = calif.nombreveterinario;
        fila.insertCell().textContent = calif.calificacion;

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

        //Agregar el boton de editar a la celda acciones
        tdAcciones.appendChild(btnEditar);

        //Agregar el boton de eliminar a la celda acciones
        tdAcciones.appendChild(btnEliminar);

        btnEliminar.addEventListener("click", () => {
            Swal.fire({
                title: "Está seguro que desea eliminar la cita?",
                text: "La acción no se puede revertir!",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Sí, eliminar!",
            }).then((result) => {
                if (result.isConfirmed) {
                    eliminarDatos("eliminar-reservas", reservaTemporal._id);
                }
            });
        });
    });
};

llenarCalificaciones();


const llenarTablaCalificarPets = () => {
    cuerpoTablaCalificaciones2.innerHTML = ""; //limpia el contenido del html

    califMascotas.forEach((califMas) => {
        let fila2 = cuerpoTablaCalificaciones2.insertRow(); //Crea una fila

        fila2.insertCell().textContent = califMas.nombreVeterinario;
        fila2.insertCell().textContent = califMas.nombrePet;
        fila2.insertCell().textContent = califMas.calificacion;

        // Creación de la celda para los botones
        let tdAcciones2 = fila2.insertCell();

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

        //Agregar el boton de editar a la celda acciones
        tdAcciones2.appendChild(btnEditar);

        //Agregar el boton de eliminar a la celda acciones
        tdAcciones2.appendChild(btnEliminar);

        btnEliminar.addEventListener("click", () => {
            Swal.fire({
                title: "Está seguro que desea eliminar la cita?",
                text: "La acción no se puede revertir!",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Sí, eliminar!",
            }).then((result) => {
                if (result.isConfirmed) {
                    eliminarDatos("eliminar-reservas", reservaTemporal._id);
                }
            });
        });
    });
};

llenarCalificacionesPet();