'use strict';
const botonMed = document.getElementById('btn-med');
const botonLab = document.querySelector('#btn-lab');
const botonTx = document.querySelector('#btn-agregarTx');
const botonVac = document.querySelector('#btn-agregarVacuna');
const dateLab = document.querySelector('#frm-labDate');
const labPet = document.querySelector('#lab-pet');
const labOwner = document.querySelector('#lab-owner');
const labTest = document.querySelector('#lab-test');
const labResult = document.querySelector('#lab-result');
const medDate = document.querySelector('#med-date');
const medPet = document.querySelector('#med-pet');
const medMed = document.querySelector('#med-med');
const medDr = document.querySelector('#med-doctores');
const vacunaDateInput = document.querySelector('#input-dateVac');
const vacunaInput = document.querySelector('#input-vacuna');
const txDate = document.querySelector('#input-txDate');
const txTreatment = document.querySelector('#input-txEvol');





function llenarTablaVac() {
    let sName = vacunaInput.value;
    let dateVac = vacunaDateInput.value;
    let tbodyVac = document.querySelector("#tbl-vacuna tbody");
    //tbodyVac.innerHTML = "";
    let fila = tbodyVac.insertRow();
    let celdaDate = fila.insertCell();
    let celdaNombre = fila.insertCell();
    let tdAcciones = fila.insertCell();
    celdaDate.innerHTML = dateVac;
    celdaNombre.innerHTML = sName;
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
            tbodyVac.innerHTML = "";
            let celdaDate = fila.insertCell();
            let celdaNombre = fila.insertCell();
            let tdAcciones = fila.insertCell();
            celdaDate.innerHTML = "";
            celdaNombre.innerHTML = "";
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

function llenarTablaTx() {
    let dateTx = txDate.value;
    let treatment = txTreatment.value;
    let tbodyTx = document.querySelector("#tbl-procedimiento tbody");
    //tbodyTx.innerHTML = " ";
    let fila = tbodyTx.insertRow();
    let celdaDateTx = fila.insertCell();
    let celdaProc = fila.insertCell();
    let tdAccionesTx = fila.insertCell();
    celdaDateTx.innerHTML = dateTx;
    celdaProc.innerHTML = treatment;
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
    tdAccionesTx.appendChild(btnEditar);

    //Agregar el boton de eliminar a la celda acciones
    tdAccionesTx.appendChild(btnEliminar);

    btnEliminar.addEventListener('click', () => {
        Swal.fire({
            title: 'Está seguro que desea eliminar la evolución del procedimiento?',
            text: "La acción no se puede revertir!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Sí, eliminar!'
        }).then((result) => {
            tbodyTx.innerHTML = "";
            let celdaDate = fila.insertCell();
            let celdaNombre = fila.insertCell();
            let tdAcciones = fila.insertCell();
            celdaDateTx.innerHTML = "";
            celdaProc.innerHTML = "";
            //Agregar el boton de editar a la celda acciones
            tdAccionesTx.appendChild(btnEditar);

            //Agregar el boton de eliminar a la celda acciones
            tdAccionesTx.appendChild(btnEliminar);
            if (result.isConfirmed) {
                Swal.fire(
                    'Eliminado!',
                    'El registro fue eliminado.',
                    'success'
                )
            }
        })
    })
}

function llenarTablaLab() {
    let dFecha = dateLab.value;
    let sPet = labPet.value;
    let sOwner = labOwner.value;
    let sTest = labTest.value;
    let sResult = labResult.value;


    let tbodyLab = document.querySelector("#tbl-lab tbody");
    // tbodyLab.innerHTML = "";
    let fila = tbodyLab.insertRow();
    let celdaDate = fila.insertCell();
    let celdaPet = fila.insertCell();
    let celdaOwner = fila.insertCell();
    let celdaTest = fila.insertCell();
    let celdaResult = fila.insertCell();
    let tdAccionesLab = fila.insertCell();
    celdaDate.innerHTML = dFecha;
    celdaPet.innerHTML = sPet;
    celdaOwner.innerHTML = sOwner;
    celdaTest.innerHTML = sTest;
    celdaResult.innerHTML = sResult;

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
    tdAccionesLab.appendChild(btnEditar);

    //Agregar el boton de eliminar a la celda acciones
    tdAccionesLab.appendChild(btnEliminar);

    btnEliminar.addEventListener('click', () => {
        Swal.fire({
            title: 'Está seguro que desea eliminar el exámen?',
            text: "La acción no se puede revertir!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Sí, eliminar!'
        }).then((result) => {
            tbodyLab.innerHTML = "";
            let celdaDate = fila.insertCell();
            let celdaPet = fila.insertCell();
            let celdaOwner = fila.insertCell();
            let celdaTest = fila.insertCell();
            let celdaResult = fila.insertCell();
            let tdAccionesLab = fila.insertCell();
            celdaDate.innerHTML = " ";
            celdaPet.innerHTML = " ";
            celdaOwner.innerHTML = " ";
            celdaTest.innerHTML = " ";
            celdaResult.innerHTML = " ";
            //Agregar el boton de editar a la celda acciones
            tdAccionesLab.appendChild(btnEditar);

            //Agregar el boton de eliminar a la celda acciones
            tdAccionesLab.appendChild(btnEliminar);
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


function llenarTablaMed() {
    let medFecha = medDate.value;
    let smedPet = medPet.value;
    let smedDr = medDr.value;
    let smedMed = medMed.value;



    let tbodyMed = document.querySelector("#tbl-receta tbody");
    //tbodyMed.innerHTML = "";
    let fila = tbodyMed.insertRow();
    let celdaDateMed = fila.insertCell();
    let celdaPetMed = fila.insertCell();
    let celdaDrMed = fila.insertCell();
    let celdaMedMed = fila.insertCell();
    let tdAccionesMed = fila.insertCell();
    celdaDateMed.innerHTML = medFecha;
    celdaPetMed.innerHTML = smedPet;
    celdaDrMed.innerHTML = smedDr;
    celdaMedMed.innerHTML = smedMed;


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
    tdAccionesMed.appendChild(btnEditar);

    //Agregar el boton de eliminar a la celda acciones
    tdAccionesMed.appendChild(btnEliminar);

    btnEliminar.addEventListener('click', () => {
        Swal.fire({
            title: 'Está seguro que desea eliminar el registro?',
            text: "La acción no se puede revertir!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Sí, eliminar!'
        }).then((result) => {
            tbodyLab.innerHTML = "";
            let celdaDate = fila.insertCell();
            let celdaPet = fila.insertCell();
            let celdaDr = fila.insertCell();
            let celdaMed = fila.insertCell();
            let tdAccionesMed = fila.insertCell();
            celdaDate.innerHTML = " ";
            celdaPet.innerHTML = " ";
            celdaDr.innerHTML = " ";
            celdaMed.innerHTML = " ";
            //Agregar el boton de editar a la celda acciones
            tdAccionesMed.appendChild(btnEditar);

            //Agregar el boton de eliminar a la celda acciones
            tdAccionesMed.appendChild(btnEliminar);
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

botonMed.addEventListener('click', llenarTablaMed);
botonTx.addEventListener('click', llenarTablaTx);
botonVac.addEventListener('click', llenarTablaVac);
botonLab.addEventListener('click', llenarTablaLab);