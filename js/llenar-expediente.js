'use strict';
const rxImage = document.querySelectorAll('.rx');
const expFecha = document.getElementById('frm-dfecha');
const namePet = document.getElementById('name-pet');
const expId = document.getElementById('exp-id');
const nameOwner = document.getElementById('name-owner');
const expIdOwner = document.getElementById('exp-idowner');
const expVet = document.getElementById('exp-vet');
const expCorreo = document.getElementById('exp-email');
const expTelefono = document.getElementById('exp-phone');
const expQueja = document.getElementById('exp-queja');
const chkTos = document.getElementById('chk-tos');
const chkResfrio = document.getElementById('chk-resfrio');
const chkFiebre = document.getElementById('chk-fiebre');
const chkBrucelosis = document.getElementById('chk-brucelosis');
const chkDistemper = document.getElementById('chk-distemper');
const chkCarbunco = document.getElementById('chk-cb');
const chkHongos = document.getElementById('chk-hongos');
const chkMoquillo = document.getElementById('chk-moquillo');
const chkViriosis = document.getElementById('chk-viriosis');
const chkParvo = document.getElementById('chk-parvo');
const chkHepatitis = document.getElementById('chk-hepatitis');
const chkLaringo = document.getElementById('chk-laringo');
const chkGastro = document.getElementById('chk-gastro');
const chkRabia = document.getElementById('chk-rabia');
const chkLepto = document.getElementById('chk-lepto');
const chkTp = document.getElementById('chk-tp');
const chkParasitos = document.getElementById('chk-parasitos');
const chkLehismania = document.getElementById('chk-lehismania');
const chkFilarias = document.getElementById('chk-filarias');
const expPa = document.getElementById('exp-pa');
const expPulso = document.getElementById('exp-pulso');
const expTemp = document.getElementById('exp-temp');
const expPeso = document.getElementById('exp-peso');
const expTalla = document.getElementById('exp-talla');
const expEdad = document.getElementById('exp-edad');
const labFecha = document.getElementById('frm-labDate');
const labPet = document.getElementById('lab-pet');
const labOwner = document.getElementById('lab-owner');
const labTest = document.getElementById('lab-test');
const labResult = document.getElementById('lab-result');
const labDoctores = document.getElementById('labo-doctores');
const cuerpoTablaVacunas = document.querySelector('#tbl-vacuna tbody');
const cuerpoTablaLaboratorios = document.querySelector('#tbl-lab tbody');
const cuerpoTablaProcemientos = document.querySelector('#tbl-procedimiento tbody');
const cuerpoTablaRecetas = document.querySelector('#tbl-receta tbody');
let expediente = [];
let vacunas = [];
let procedimientos = [];
let laboratorios = [];
let medicamentos = [];



const llenarRegExpediente = async() => {
    expediente = await getDatos("obtener-expediente");
    llenarExpediente();
    vacunas = await getDatos("obtener-vacunas");
    llenarVacunas();
    laboratorios = await getDatos("obtener-laboratorios");
    llenarLaboratorios();
    procedimientos = await getDatos("obtener-tratamientos");
    llenarProcedimientos();
    medicamentos = await getDatos("obtener-medicamentos");
    llenarRecetas();

};




const llenarVacunas = () => {
    //Limpia el contenido que tiene el cuerpo de la tabla.
    cuerpoTablaVacunas.innerHTML = '';
    //Para cada usuario que se encuentre dentro de la coleccion de usuarios
    vacunas.forEach(vacuna => {

        if (expId.value === vacuna.mascotaId) {
            let fila = cuerpoTablaVacunas.insertRow();

            fila.insertCell().textContent = moment(vacuna.fecha).format('DD-MM-YYYY');
            fila.insertCell().textContent = vacuna.vacuna;



            // Creación de la celda para los botones
            let tdAccionesVac = fila.insertCell();

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
            tdAccionesVac.appendChild(btnEditar);

            //Agregar el boton de eliminar a la celda acciones
            tdAccionesVac.appendChild(btnEliminar);


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

        }

    });
};

const llenarProcedimientos = () => {
    //Limpia el contenido que tiene el cuerpo de la tabla.
    cuerpoTablaProcemientos.innerHTML = '';
    //Para cada usuario que se encuentre dentro de la coleccion de usuarios
    procedimientos.forEach(proc => {
        if (expId.value === proc.mascotaId) {
            let fila = cuerpoTablaProcemientos.insertRow();

            fila.insertCell().textContent = moment(proc.fecha).format('DD-MM-YYYY');
            fila.insertCell().textContent = proc.tratamiento;


            // Creación de la celda para los botones
            let tdAccionesProc = fila.insertCell();

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
            tdAccionesProc.appendChild(btnEditar);

            //Agregar el boton de eliminar a la celda acciones
            tdAccionesProc.appendChild(btnEliminar);


            btnEliminar.addEventListener('click', () => {
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
                })
            });

            btnEditar.addEventListener('click', () => {
                Swal.fire({
                    title: 'Está seguro que desea modificar el procedimiento?',
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
                            'El procedimiento fue modificado.',
                            'success'
                        )
                    }
                })
            });
        }
    });
};

const llenarLaboratorios = () => {
    //Limpia el contenido que tiene el cuerpo de la tabla.
    cuerpoTablaLaboratorios.innerHTML = '';
    //Para cada usuario que se encuentre dentro de la coleccion de usuarios
    laboratorios.forEach(lab => {
        if (expId.value === lab.mascotaId) {

            let fila = cuerpoTablaLaboratorios.insertRow();

            fila.insertCell().textContent = moment(lab.fecha).format('DD-MM-YYYY');
            fila.insertCell().textContent = lab.mascota;
            fila.insertCell().textContent = lab.owner;
            fila.insertCell().textContent = lab.examen;
            fila.insertCell().textContent = lab.resultados;
            fila.insertCell().textContent = lab.doctor;


            // Creación de la celda para los botones
            let tdAccionesLab = fila.insertCell();

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
            tdAccionesLab.appendChild(btnEditar);

            //Agregar el boton de eliminar a la celda acciones
            tdAccionesLab.appendChild(btnEliminar);


            btnEliminar.addEventListener('click', () => {
                Swal.fire({
                    title: 'Está seguro que desea cancelar el Laboratorio?',
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
                            'El laboratorio fue cancelado.',
                            'success'
                        )
                    }
                })
            });
        }

    });
};

const llenarRecetas = () => {
    //Limpia el contenido que tiene el cuerpo de la tabla.
    cuerpoTablaRecetas.innerHTML = '';
    //Para cada usuario que se encuentre dentro de la coleccion de usuarios

    medicamentos.forEach(med => {
        if (expId.value === med.mascotaId) {
            let fila = cuerpoTablaRecetas.insertRow();

            fila.insertCell().textContent = moment(med.fecha).format('DD-MM-YYYY');
            fila.insertCell().textContent = med.mascota;
            fila.insertCell().textContent = med.doctor;
            fila.insertCell().textContent = med.medicamento;


            // Creación de la celda para los botones
            let tdAccionesMed = fila.insertCell();

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

    });
};

let llenarExpediente = () => {
    expediente.forEach(exp => {
        if (parseInt(expId.value) === exp.mascotaId) {
            expFecha.value = moment(exp.fecha).format('YYYY-MM-DD');
            namePet.value = exp.mascota;
            expId.value = exp.mascotaId;
            nameOwner.value = exp.owner;
            expIdOwner.value = exp.ownerId;
            expCorreo.value = exp.correo;
            expTelefono.value = exp.telefono;
            expVet.value = exp.veterinario;
            expQueja.value = exp.quejaprincipal;
            chkTos.checked = exp.tos;
            chkBrucelosis.checked = exp.brucelosis;
            chkHongos.checked = exp.hongos;
            chkParvo.checked = exp.parvo;
            chkRabia.checked = exp.rabia;
            chkParasitos.checked = exp.parasitos;
            chkFilarias.checked = exp.filarias;
            expPa.value = exp.presionarterial;
            expPulso.value = exp.pulso;
            expTemp.value = exp.temperatura;
            expPeso.value = exp.peso;
            expTalla.value = exp.talla;
            expEdad.value = exp.edad;
            rxImage.forEach(rx => {
                rx.src = exp.radiografia;
            });

        }
    });

};


expId.addEventListener('keyup', function(e) {
    if (e.key === 'Enter') {
        llenarRegExpediente();
    }
});