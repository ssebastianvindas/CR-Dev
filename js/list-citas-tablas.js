const cuerpoTabla = document.querySelector('#tbl-users tbody');


const llenarTablaList = () => {
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

llenarTablaList();