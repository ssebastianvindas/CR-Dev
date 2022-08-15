const cuerpoTabla = document.querySelector('#tbl-users tbody');
const cuerpoTablaPendiente = document.querySelector('#tbl-pendientes tbody');
const cuerpoTablaDoctor = document.querySelector('#tbl-doctor tbody');
const seleccion = document.getElementById('cita-listar-doctores');
const selectFiltroTabla = document.getElementById('cita-listar-doctores');


const llenarTablaDia = () => {
    //Limpia el contenido que tiene el cuerpo de la tabla.
    cuerpoTabla.innerHTML = '';
    //Para cada usuario que se encuentre dentro de la coleccion de usuarios
    citas.forEach(cita => {

        let fila = cuerpoTabla.insertRow();

        fila.insertCell().textContent = cita.fecha;
        fila.insertCell().textContent = cita.hora;
        fila.insertCell().textContent = cita.nombreMascota;
        fila.insertCell().textContent = cita.nombreOwner;
        fila.insertCell().textContent = cita.procedimiento;
        fila.insertCell().textContent = cita.doctor;
        fila.insertCell().textContent = cita.estado;


        // Creación de la celda para los botones
        let tdAcciones = fila.insertCell();

        //Creación del botón de editar
        let btnEditar = document.createElement('button');
        btnEditar.innerHTML = '<i class="fa-solid fa-pen-to-square"></i>';
        btnEditar.type = 'button';
        btnEditar.classList.add('btn-editar');

        //Creación del botón de eliminar
        let btnEliminar = document.createElement('button');
        btnEliminar.innerHTML = '<i class="fa-solid fa-trash-can"></i>';
        btnEliminar.type = 'button';
        btnEliminar.classList.add('btn-eliminar');

        //Agregar el boton de editar a la celda acciones
        tdAcciones.appendChild(btnEditar);

        //Agregar el boton de eliminar a la celda acciones
        tdAcciones.appendChild(btnEliminar);

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
                    Swal.fire(
                        'Eliminado!',
                        'La cita fue cancelada.',
                        'success'
                    )
                }
            })
        });

    });
};
const llenarTablaDoctor = () => {
    //Limpia el contenido que tiene el cuerpo de la tabla.
    cuerpoTablaDoctor.innerHTML = '';
    //Para cada usuario que se encuentre dentro de la coleccion de usuarios
    citas.forEach(cita => {
        if (cita.doctor == seleccion.value) {
            let fila = cuerpoTablaDoctor.insertRow();

            fila.insertCell().textContent = cita.fecha;
            fila.insertCell().textContent = cita.hora;
            fila.insertCell().textContent = cita.nombreMascota;
            fila.insertCell().textContent = cita.nombreOwner;
            fila.insertCell().textContent = cita.procedimiento;
            fila.insertCell().textContent = cita.doctor;
            fila.insertCell().textContent = cita.estado;


            // Creación de la celda para los botones
            let tdAcciones = fila.insertCell();

        //Creación del botón de editar
        let btnEditar = document.createElement('button');
        btnEditar.innerHTML = '<i class="fa-solid fa-pen-to-square"></i>';
        btnEditar.type = 'button';
        btnEditar.classList.add('btn-editar');

        //Creación del botón de eliminar
        let btnEliminar = document.createElement('button');
        btnEliminar.innerHTML = '<i class="fa-solid fa-trash-can"></i>';
        btnEliminar.type = 'button';
        btnEliminar.classList.add('btn-eliminar');

            //Agregar el boton de editar a la celda acciones
            tdAcciones.appendChild(btnEditar);

            //Agregar el boton de eliminar a la celda acciones
            tdAcciones.appendChild(btnEliminar);


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
                        Swal.fire(
                            'Eliminado!',
                            'La cita fue cancelada.',
                            'success'
                        )
                    }
                })
            });

        }
    });
};

const llenarTablaDoctores = () => {
    //Limpia el contenido que tiene el cuerpo de la tabla.
    cuerpoTablaDoctor.innerHTML = '';
    //Para cada usuario que se encuentre dentro de la coleccion de usuarios
    citas.forEach(cita => {

        let fila = cuerpoTablaDoctor.insertRow();

        fila.insertCell().textContent = cita.fecha;
        fila.insertCell().textContent = cita.hora;
        fila.insertCell().textContent = cita.nombreMascota;
        fila.insertCell().textContent = cita.nombreOwner;
        fila.insertCell().textContent = cita.procedimiento;
        fila.insertCell().textContent = cita.doctor;
        fila.insertCell().textContent = cita.estado;


        // Creación de la celda para los botones
        let tdAcciones = fila.insertCell();

        //Creación del botón de editar
        let btnEditar = document.createElement('button');
        btnEditar.innerHTML = '<i class="fa-solid fa-pen-to-square"></i>';
        btnEditar.type = 'button';
        btnEditar.classList.add('btn-editar');

        //Creación del botón de eliminar
        let btnEliminar = document.createElement('button');
        btnEliminar.innerHTML = '<i class="fa-solid fa-trash-can"></i>';
        btnEliminar.type = 'button';
        btnEliminar.classList.add('btn-eliminar');

        //Agregar el boton de editar a la celda acciones
        tdAcciones.appendChild(btnEditar);

        //Agregar el boton de eliminar a la celda acciones
        tdAcciones.appendChild(btnEliminar);


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
                    Swal.fire(
                        'Eliminado!',
                        'La cita fue cancelada.',
                        'success'
                    )
                }
            })
        });

    });
};

const llenarTablaPendientes = () => {
    //Limpia el contenido que tiene el cuerpo de la tabla.
    cuerpoTablaPendiente.innerHTML = '';
    //Para cada usuario que se encuentre dentro de la coleccion de usuarios
    citas.forEach(cita => {

        let fila = cuerpoTablaPendiente.insertRow();

        fila.insertCell().textContent = cita.fecha;
        fila.insertCell().textContent = cita.hora;
        fila.insertCell().textContent = cita.nombreMascota;
        fila.insertCell().textContent = cita.nombreOwner;
        fila.insertCell().textContent = cita.procedimiento;
        fila.insertCell().textContent = cita.doctor;
        fila.insertCell().textContent = cita.estado;


        // Creación de la celda para los botones
        let tdAccionesPendiente = fila.insertCell();

        //Creación del botón de editar
        let btnEditar = document.createElement('button');
        btnEditar.innerHTML = '<i class="fa-solid fa-pen-to-square"></i>';
        btnEditar.type = 'button';
        btnEditar.classList.add('btn-editar');

        //Creación del botón de eliminar
        let btnEliminar = document.createElement('button');
        btnEliminar.innerHTML = '<i class="fa-solid fa-trash-can"></i>';
        btnEliminar.type = 'button';
        btnEliminar.classList.add('btn-eliminar');

        //Agregar el boton de editar a la celda acciones
        tdAccionesPendiente.appendChild(btnEditar);

        //Agregar el boton de eliminar a la celda acciones
        tdAccionesPendiente.appendChild(btnEliminar);


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
                    Swal.fire(
                        'Eliminado!',
                        'La cita fue cancelada.',
                        'success'
                    )
                }
            })
        });

        btnEditar.addEventListener('click', () => {
            Swal.fire({
                title: 'Está seguro que desea agendarse la cita?',
                text: "La acción no se puede revertir!",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Sí, Asignar!'
            }).then((result) => {
                if (result.isConfirmed) {
                    Swal.fire(
                        'Eliminado!',
                        'La cita fue asignada.',
                        'success'
                    )
                }
            })
        });

    });
};




llenarTablaDia();
llenarTablaDoctores();
llenarTablaPendientes();
selectFiltroTabla.addEventListener('change', llenarTablaDoctor);