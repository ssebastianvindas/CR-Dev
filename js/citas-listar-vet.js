const cuerpoTablaVet = document.querySelector("#tbl-users tbody");
const cuerpoTablaPendienteVet = document.querySelector("#tbl-pendientes tbody");
const cuerpoTablaDoctorVet = document.querySelector("#tbl-doctor tbody");
const seleccionVet = document.getElementById("cita-listar-doctores");
const selectFiltroTablaVet = document.getElementById("cita-listar-doctores");
let usuarioConectadoVet = JSON.parse(localStorage.getItem("usuarioConectado"));
let citasVet = [];

const llenarCitasVet = async() => {
    citasVet = await getDatos("obtener-citas");

    llenarTablaDiaVet();
    llenarTablaDoctorVet();
    llenarTablaPendientesVet();
};

const llenarTablaDiaVet = () => {
    //Limpia el contenido que tiene el cuerpo de la tabla.
    cuerpoTablaVet.innerHTML = "";
    //Para cada usuario que se encuentre dentro de la coleccion de usuarios

    citasVet.forEach((cita) => {

        if (cita.doctor === usuarioConectadoVet.nombre) {
            let fila = cuerpoTablaVet.insertRow();

            fila.insertCell().textContent = moment(cita.fecha).format("DD-MM-YYYY");
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

            //Agregar el boton de editar a la celda acciones
            tdAcciones.appendChild(btnEditar);

            //Agregar el boton de eliminar a la celda acciones
            tdAcciones.appendChild(btnEliminar);


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
                        eliminarDatos("eliminar-cita", cita._id);
                    }
                });
            });
        }
    });
};
const llenarTablaDoctorVet = () => {
    //Limpia el contenido que tiene el cuerpo de la tabla.
    cuerpoTablaDoctorVet.innerHTML = "";
    //Para cada usuario que se encuentre dentro de la coleccion de usuarios
    citasVet.forEach((cita) => {

        if (cita.doctor == seleccionVet.value) {
            let fila = cuerpoTablaDoctorVet.insertRow();

            fila.insertCell().textContent = moment(cita.fecha).format("DD-MM-YYYY");
            fila.insertCell().textContent = cita.hora;
            fila.insertCell().textContent = cita.nombremascota;
            fila.insertCell().textContent = cita.nombreduenno;
            fila.insertCell().textContent = cita.procedimiento;
            fila.insertCell().textContent = cita.doctor;
            fila.insertCell().textContent = cita.estado;

            // Creación de la celda para los botones
            let tdAcciones = fila.insertCell();

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
                    title: "Está seguro que desea cancelar la cita?",
                    text: "La acción no se puede revertir!",
                    icon: "warning",
                    showCancelButton: true,
                    confirmButtonColor: "#3085d6",
                    cancelButtonColor: "#d33",
                    confirmButtonText: "Sí, eliminar!",
                }).then((result) => {
                    if (result.isConfirmed) {
                        eliminarDatos("eliminar-cita", cita._id);
                    }
                });
            });
        }
    });
};



const llenarTablaPendientesVet = () => {
    //Limpia el contenido que tiene el cuerpo de la tabla.
    cuerpoTablaPendienteVet.innerHTML = "";
    //Para cada usuario que se encuentre dentro de la coleccion de usuarios
    citasVet.forEach((cita) => {
        if (cita.doctor === usuarioConectadoVet.nombre) {
            let fila = cuerpoTablaPendienteVet.insertRow();

            fila.insertCell().textContent = moment(cita.fecha).format("DD-MM-YYYY");
            fila.insertCell().textContent = cita.hora;
            fila.insertCell().textContent = cita.nombremascota;
            fila.insertCell().textContent = cita.nombreduenno;
            fila.insertCell().textContent = cita.procedimiento;
            fila.insertCell().textContent = cita.doctor;
            fila.insertCell().textContent = cita.estado;
            //Creación del botón de editar

            // Creación de la celda para los botones
            let tdAccionesPendiente = fila.insertCell();

            //Creación del boton editar
            let btnAgregar = document.createElement("button");
            btnAgregar.textContent = 'Asignar';
            btnAgregar.type = "button";
            btnAgregar.classList.add("btn-agregar");

            //Creación del botón de eliminar
            let btnEliminar = document.createElement("button");
            btnEliminar.innerHTML = '<i class="fa-solid fa-trash-can"></i>';
            btnEliminar.type = "button";
            btnEliminar.classList.add("btn-eliminar");

            //Agregar el boton de editar a la celda acciones
            tdAccionesPendiente.appendChild(btnAgregar);

            //Agregar el boton de eliminar a la celda acciones
            tdAccionesPendiente.appendChild(btnEliminar);

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
                        eliminarDatos("eliminar-cita", cita._id);
                    }
                });
            });

            btnEditar.addEventListener("click", () => {
                Swal.fire({
                    title: "Está seguro que desea agendarse la cita?",
                    text: "La acción no se puede revertir!",
                    icon: "warning",
                    showCancelButton: true,
                    confirmButtonColor: "#3085d6",
                    cancelButtonColor: "#d33",
                    confirmButtonText: "Sí, Asignar!",
                }).then((result) => {
                    if (result.isConfirmed) {
                        Swal.fire("Eliminado!", "La cita fue asignada.", "success");
                    }
                });
            });
        }
    });
};

llenarCitasVet();
selectFiltroTablaVet.addEventListener("change", llenarTablaDoctorVet);