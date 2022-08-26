'use strict'
let tablaExpedientes = document.querySelector('#tbl-users tbody');
let usuarioExpediente = JSON.parse(localStorage.getItem('usuarioConectado'));

let expedientes = [];

const llenarCitas = async() => {
    expedientes = await getDatos("obtener-expediente");

    llenarTablaExp();

};

const llenarTablaExp = () => {
    //Limpia el contenido que tiene el cuerpo de la tabla.
    tablaExpedientes.innerHTML = "";
    //Para cada usuario que se encuentre dentro de la coleccion de usuarios
    expedientes.forEach((expe) => {

        if (usuarioExpediente.nombre === expe.owner) {
            let fila = tablaExpedientes.insertRow();

            fila.insertCell().textContent = moment(expe.fecha).add('1', 'd').format("DD-MM-YYYY");
            fila.insertCell().textContent = expe.mascotaId;
            fila.insertCell().textContent = expe.mascota;
            fila.insertCell().textContent = expe.owner;
            fila.insertCell().textContent = expe.telefono;
            fila.insertCell().textContent = expe.correo;


            // Creación de la celda para los botones
            let tdAcciones = fila.insertCell();

            //Creación del boton editar
            let btnEditar = document.createElement("button");
            btnEditar.innerHTML = '<i class="fa-solid fa-folder"></i>';
            btnEditar.textContent = 'Expediente';
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

            btnEditar.addEventListener("click", () => {
                let mascid = expe.macotaId;
                localStorage.setItem('MascotaID', mascid);
                window.location.href = 'expediente-consultar.html';
            });

            btnEliminar.addEventListener("click", () => {
                Swal.fire({
                    title: "Está seguro que desea cancelar la cita?",
                    text: "La acción no se puede revertir!",
                    icon: "warning",
                    showCancelButton: true,
                    confirmButtonColor: "#3085d6",
                    cancelButtonColor: "#d33",
                    confirmButtonText: "Sí, eliminar!",
                }).then((result) => {
                    if (result.isConfirmed) {
                        eliminarDatos("eliminar-expediente", expe._id);
                    }
                });
            });
        }
    });
};

llenarCitas();