const cuerpoTabla = document.querySelector('.tbl-vacunas tbody');
const cuerpoTablaProc = document.querySelector('.tbl-procedimientos tbody');



const llenarVacunas = () => {
    //Limpia el contenido que tiene el cuerpo de la tabla.
    cuerpoTabla.innerHTML = '';
    //Para cada usuario que se encuentre dentro de la coleccion de usuarios
    vacunas.forEach(vacuna => {
        let fila = cuerpoTabla.insertRow();

        fila.insertCell().textContent = vacuna.fecha;
        fila.insertCell().textContent = vacuna.vacuna;

        // Creación de la celda para los botones
        let tdAcciones = fila.insertCell();

        //Creación del boton editar
        let btnEditar = document.createElement('button');
        btnEditar.textContent = 'Editar';
        btnEditar.type = 'button';
        btnEditar.classList.add('btn-editar');
        //Creacion del boton eliminar
        let btnEliminar = document.createElement('button');
        btnEliminar.textContent = 'Eliminar';
        btnEliminar.type = 'button';
        btnEliminar.classList.add('btn-eliminar');

        //Agregar el boton de editar a la celda acciones
        tdAcciones.appendChild(btnEditar);

        //Agregar el boton de eliminar a la celda acciones
        tdAcciones.appendChild(btnEliminar);

        btnEliminar.addEventListener('click', () => {
            Swal.fire({
                title: 'Está seguro que desea eliminar la vacuna?',
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
                        'La vacuna fue eliminada.',
                        'success'
                    )
                }
            })
        });

    });
};





const llenarProcedimientos = () => {
    //Limpia el contenido que tiene el cuerpo de la tabla.
    cuerpoTablaProc.innerHTML = '';
    //Para cada usuario que se encuentre dentro de la coleccion de usuarios
    terapias.forEach(proc => {
        let fila = cuerpoTablaProc.insertRow();

        fila.insertCell().textContent = proc.fecha;
        fila.insertCell().textContent = proc.procedimientos;

        // Creación de la celda para los botones
        let tdAcciones = fila.insertCell();

        //Creación del boton editar
        let btnEditar1 = document.createElement('button');
        btnEditar1.textContent = 'Editar';
        btnEditar1.type = 'button';
        btnEditar1.classList.add('btn-editar');
        //Creacion del boton eliminar
        let btnEliminar1 = document.createElement('button');
        btnEliminar1.textContent = 'Eliminar';
        btnEliminar1.type = 'button';
        btnEliminar1.classList.add('btn-eliminar');

        //Agregar el boton de editar a la celda acciones
        tdAcciones.appendChild(btnEditar1);

        //Agregar el boton de eliminar a la celda acciones
        tdAcciones.appendChild(btnEliminar1);

        btnEliminar1.addEventListener('click', () => {
            Swal.fire({
                title: 'Está seguro que desea eliminar el procedimiento?',
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
                        'El procedimiento fue eliminado.',
                        'success'
                    )
                }
            });
        });

    });
};



llenarProcedimientos();


llenarVacunas();