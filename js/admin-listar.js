'use strict';


const botonFac = document.querySelector('#btn-cantidad');
const txtCantidad = document.querySelector('#txt-cantidad');
const txtProc = document.querySelector('#txt-procedimientos');
const txtPrecio = document.querySelector('#txt-precio');




function llenarTablaFac() {
    let iCantidad = txtCantidad.value;
    let sProcedimiento = txtProc.value;
    let iPrecio = txtPrecio.value;
    let tbodyFac = document.querySelector("#tbl-users tbody");
    // tbodyFac.innerHTML = "";
    let fila = tbodyFac.insertRow();
    let celdaCantidad = fila.insertCell();
    let celdaProc = fila.insertCell();
    let celdaPrecio = fila.insertCell();
    let tdAcciones = fila.insertCell();
    celdaCantidad.innerHTML = iCantidad;
    celdaProc.innerHTML = sProcedimiento;
    celdaPrecio.innerHTML = iPrecio;
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
            title: 'Está seguro que desea eliminar el campo a facturar?',
            text: "La acción no se puede revertir!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Sí, eliminar!'
        }).then((result) => {
            tbodyFac.innerHTML = "";

            //Agregar el boton de editar a la celda acciones
            tdAcciones.appendChild(btnEditar);

            //Agregar el boton de eliminar a la celda acciones
            tdAcciones.appendChild(btnEliminar);
            if (result.isConfirmed) {
                Swal.fire(
                    'Eliminado!',
                    'El registro fue eliminado.',
                    'success'
                )
            }
        })
    });


}

botonFac.addEventListener('click', llenarTablaFac);