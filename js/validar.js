const inputs = document.querySelectorAll("form input");
const btnRegister = document.querySelector('#btn-save');
const botonTx = document.querySelector('#btn-agregarTx');
const checkbox = document.querySelectorAll('.pd-chkbox');
const labels = document.querySelectorAll('.lbl-chkbox');
const formLabDate = document.getElementById('frm-labDate');
const formLabPet = document.getElementById('lab-pet');
const formLabOwner = document.getElementById('lab-owner');
const formLabTest = document.getElementById('lab-test');
const formLabResult = document.getElementById('lab-result');
const formLabSelect = document.getElementById('lab-doctores');
const btnVac = document.getElementById('btn-agregarVacuna');
const btnLab = document.querySelector('#btn-lab');
const btnMed = document.querySelector('#btn-med');
const MedDate = document.querySelector('#med-date');
const MedPet = document.querySelector('#med-pet');
const MedSelect = document.querySelector('#med-doctores');
const MedMed = document.querySelector('#med-med');
const vacFecha = document.querySelector('#input-dateVac');
const vacNombre = document.querySelector('#input-vacuna');
const InputTextDate = document.querySelector('#input-txDate');
const InputTextEvol = document.querySelector('#input-txEvol');
//Toma de inputs para getDatos
const expGetFecha = document.getElementById('frm-dfecha');
const expGetMascota = document.getElementById('name-pet');
const expGetMascotaId = document.getElementById('exp-id');
const expGetOwner = document.getElementById('name-owner');
const expGetOwnerId = document.getElementById('exp-idowner');
const expGetcorreo = document.getElementById('exp-email');
const expGetTelefono = document.getElementById('exp-phone');
const expGetVet = document.getElementById('exp-vet');
const expGetQueja = document.getElementById('expQPrincipal');
const expChkTos = document.getElementById('chk-tos');
const expChkResfrio = document.getElementById('chk-resfrio');
const expChkFiebre = document.getElementById('chk-fiebre');
const expChkBrucelosis = document.getElementById('chk-brucelosis');
const expChkDistemper = document.getElementById('chk-distemper');
const expChkCarbunco = document.getElementById('chk-cb');
const expChkHongos = document.getElementById('chk-hongos');
const expChkMoquillo = document.getElementById('chk-moquillo');
const expChkViriosis = document.getElementById('chk-viriosis');
const expChkParvo = document.getElementById('chk-parvo');
const expChkHepatitis = document.getElementById('chk-hepatitis');
const expChkLaringo = document.getElementById('chk-laringo');
const expChkGastro = document.getElementById('chk-gastro');
const expChkRabia = document.getElementById('chk-rabia');
const expChkLepto = document.getElementById('chk-lepto');
const expChkTp = document.getElementById('chk-tp');
const expChkParasitos = document.getElementById('chk-parasitos');
const expChkLehismania = document.getElementById('chk-lehismania');
const expChkFilarias = document.getElementById('chk-filarias');
const expPresionArterial = document.getElementById('exp-pa');
const expPulso = document.getElementById('exp-pulso');
const expTemperatura = document.getElementById('exp-temp');
const expPeso = document.getElementById('exp-peso');
const expTalla = document.getElementById('exp-talla');
const expEdad = document.getElementById('exp-edad');
const TablaVacunas = document.querySelector('#tbl-vacuna tbody');
const TablaLaboratorios = document.querySelector('#tbl-lab tbody');
const TablaProcemientos = document.querySelector('#tbl-procedimiento tbody');
const TablaRecetas = document.querySelector('#tbl-receta tbody');

let contador = 0;

function padTo2Digits(num) {
    return num.toString().padStart(2, '0');
}

function formatDate(date = new Date()) {
    return [
        date.getFullYear(),
        padTo2Digits(date.getMonth() + 1),
        padTo2Digits(date.getDate()),
    ].join('-');
}


let AlmacenarDatos = () => {
    let Datos = {
        fecha: expGetFecha.value,
        mascota: expGetMascota.value,
        mascotaId: expGetMascotaId.value,
        owner: expGetOwner.value,
        ownerId: expGetOwnerId.value,
        correo: expGetcorreo.value,
        telefono: expGetTelefono.value,
        veterinario: expGetVet.value,
        quejaprincipal: expGetQueja.value,
        tos: expChkTos.checked,
        resfrio: expChkResfrio.checked,
        fiebre: expChkFiebre.checked,
        brucelosis: expChkBrucelosis.checked,
        distemper: expChkDistemper.checked,
        carbunco: expChkCarbunco.checked,
        hongos: expChkHongos.checked,
        moquillo: expChkMoquillo.checked,
        viriosis: expChkViriosis.checked,
        parvo: expChkParvo.checked,
        hepatitis: expChkHepatitis.checked,
        laringo: expChkLaringo.checked,
        gastro: expChkGastro.checked,
        rabia: expChkRabia.checked,
        lepto: expChkLepto.checked,
        tp: expChkTp.checked,
        parasitos: expChkParasitos.checked,
        lehismania: expChkLehismania.checked,
        filarias: expChkFilarias.checked,
        presionarterial: expPresionArterial.value,
        pulso: expPulso.value,
        temperatura: expTemperatura.value,
        peso: expPeso.value,
        talla: expTalla.value,
        edad: expEdad.value,
        radiografia: 'imgs/radiografia.png'



    };
    let expedienteVar = true;
    localStorage.setItem('expediente', expedienteVar);
    registrarDatos('registrar-expediente', Datos);

};



let almacenarTx = () => {
    let tratamientoDatos = {
        mascotaId: expGetMascotaId.value,
        fecha: InputTextDate.value,
        tratamiento: InputTextEvol.value
    };
    let expedienteVar = true;
    localStorage.setItem('expediente', expedienteVar);
    registrarDatos('registrar-tratamientos', tratamientoDatos);

};

let almacenarLab = () => {
    let LabDatos = {
        mascotaId: expGetMascotaId.value,
        fecha: formLabDate.value,
        mascota: formLabPet.value,
        owner: formLabOwner.value,
        examen: formLabTest.value,
        resultados: formLabResult.value,
        doctor: formLabSelect.value

    };

    let expedienteVar = true;
    localStorage.setItem('expediente', expedienteVar);
    registrarDatos('registrar-laboratorios', LabDatos);

};

let almacenarMed = () => {
    let MedDatos = {
        mascotaId: expGetMascotaId.value,
        fecha: MedDate.value,
        mascota: MedPet.value,
        doctor: MedSelect.value,
        medicamento: MedMed.value


    };
    let expedienteVar = true;
    localStorage.setItem('expediente', expedienteVar);
    registrarDatos('registrar-medicamentos', MedDatos);

};

let validarForm = () => {
    inputs.forEach((input) => {

        if (input.value === "") {


            input.classList.add("input-invalid");
            input.classList.remove("input-valid");

            Swal.fire({
                icon: 'warning',
                title: 'Campos incompletos',
                text: 'Por favor revise los campos resaltados',
                confirmButtonText: 'Entendido'
            })
        } else {
            input.classList.remove("input-invalid");
            input.classList.add("input-valid");

            Swal.fire({
                icon: 'success',
                title: 'Expediente Archivado',
                text: 'La información ha sido ingresada con éxito en el expediente clínico',
                confirmButtonText: "Entendido"
            }).then(() => {

                AlmacenarDatos();
            });


        }


    });
};

let confirmar = () => {
    if (contador === 0) {
        contador++;
        let padecimientos = 0;
        checkbox.forEach((chk) => {
            if (chk.checked) {
                padecimientos++;
            };


        });
        if (padecimientos === 0) {
            labels.forEach((lbl) => {
                lbl.classList.add("input-invalid");
                lbl.classList.remove("input-valid");
            });
            Swal.fire({
                title: 'Padecimientos Vacíos!',
                text: 'Por favor revise que no se le paso por alto llenar los padecimientos.',
                imageUrl: '../imgs/sick.jpg',
                imageWidth: 400,
                imageHeight: 200,
                imageAlt: 'Padecimientos',
                confirmButtonText: 'Entendido'
            });
        };


    };


};

let validarLab = () => {
    let error = false;

    if (formLabDate.value == '') {
        error = true;
        formLabDate.classList.add('input-invalid');
        formLabDate.classList.remove('input-valid');
    } else {
        formLabDate.classList.remove('input-invalid');
        formLabDate.classList.add('input-valid');
    }

    if (formLabPet.value == '') {
        error = true;
        formLabPet.classList.add('input-invalid');
        formLabPet.classList.remove('input-valid');
    } else {
        formLabPet.classList.remove('input-invalid');
        formLabPet.classList.add('input-valid');
    }

    if (formLabOwner.value == '') {
        error = true;
        formLabOwner.classList.add('input-invalid');
        formLabOwner.classList.remove('input-valid');
    } else {
        formLabOwner.classList.remove('input-invalid');
        formLabOwner.classList.add('input-valid');
    }

    if (formLabTest.value == '') {
        error = true;
        formLabTest.classList.add('input-invalid');
        formLabTest.classList.remove('input-valid');
    } else {
        formLabTest.classList.remove('input-invalid');
        formLabTest.classList.add('input-valid');
    }

    if (formLabResult.value == '') {
        error = true;
        formLabResult.classList.add('input-invalid');
        formLabResult.classList.remove('input-valid');
    } else {
        formLabResult.classList.remove('input-invalid');
        formLabResult.classList.add('input-valid');
    }

    if (formLabSelect.value == '') {
        error = true;
        formLabSelect.classList.add('input-invalid');
        formLabSelect.classList.remove('input-valid');
    } else {
        formLabSelect.classList.remove('input-invalid');
        formLabSelect.classList.add('input-valid');
    }


    if (error == true) {
        Swal.fire({
            'icon': 'warning',
            'title': 'Datos ingresados incorrectamente',
            'text': 'Por favor revise los campos resaltados',
            'confirmButtonText': 'Entendido'
        });

    } else {
        Swal.fire({
            'icon': 'success',
            'title': 'Datos ingresados correctamente',
            'text': 'El registro se ha creado adecuadamente',
            'confirmButtonText': 'Entendido'
        }).then(() => {
            llenarLaboratorios();
            almacenarLab();
        });
    }

};

let validarMed = () => {
    let error = false;

    if (MedDate.value == '') {
        error = true;
        MedDate.classList.add('input-invalid');
        MedDate.classList.remove('input-valid');
    } else {
        MedDate.classList.remove('input-invalid');
        MedDate.classList.add('input-valid');
    }

    if (MedPet.value == '') {
        error = true;
        MedPet.classList.add('input-invalid');
        MedPet.classList.remove('input-valid');
    } else {
        MedPet.classList.remove('input-invalid');
        MedPet.classList.add('input-valid');
    }

    if (MedSelect.value == '') {
        error = true;
        MedSelect.classList.add('input-invalid');
        MedSelect.classList.remove('input-valid');
    } else {
        MedSelect.classList.remove('input-invalid');
        MedSelect.classList.add('input-valid');
    }

    if (MedMed.value == '') {
        error = true;
        MedMed.classList.add('input-invalid');
        MedMed.classList.remove('input-valid');
    } else {
        MedMed.classList.remove('input-invalid');
        MedMed.classList.add('input-valid');
    }




    if (error == true) {
        Swal.fire({
            'icon': 'warning',
            'title': 'Datos ingresados incorrectamente',
            'text': 'Por favor revise los campos resaltados',
            'confirmButtonText': 'Entendido'
        });

    } else {
        Swal.fire({
            'icon': 'success',
            'title': 'Datos ingresados correctamente',
            'text': 'La receta se ha creado adecuadamente',
            'confirmButtonText': 'Entendido'
        }).then(() => {
            llenarRecetas();
            almacenarMed();
        });
    }

};

let validarVac = () => {
    let error = false;

    if (vacFecha.value == '') {
        error = true;
        vacFecha.classList.add('input-invalid');
        vacFecha.classList.remove('input-valid');
    } else {
        vacFecha.classList.remove('input-invalid');
        vacFecha.classList.add('input-valid');
    }

    if (vacNombre.value == '') {
        error = true;
        vacNombre.classList.add('input-invalid');
        vacNombre.classList.remove('input-valid');
    } else {
        vacNombre.classList.remove('input-invalid');
        vacNombre.classList.add('input-valid');
    }



    if (error == true) {
        Swal.fire({
            'icon': 'warning',
            'title': 'Datos ingresados incorrectamente',
            'text': 'Por favor revise los campos resaltados',
            'confirmButtonText': 'Entendido'
        });

    } else {
        Swal.fire({
            'icon': 'success',
            'title': 'Datos ingresados correctamente',
            'text': 'La vacuna se ha ingresado adecuadamente',
            'confirmButtonText': 'Entendido'
        }).then(() => {
            llenarVacunas();

            let vacunasDatos = {
                mascotaId: expGetMascotaId.value,
                fecha: vacFecha.value,
                vacuna: vacNombre.value
            };
            let expedienteVar = true;
            localStorage.setItem('expediente', expedienteVar);
            registrarDatos('registrar-vacunas', vacunasDatos)

        });
    }

};

let validarTx = () => {

    let error = false;

    if (InputTextDate.value == '') {
        error = true;
        InputTextDate.classList.add('input-invalid');
        InputTextDate.classList.remove('input-valid');
    } else {
        InputTextDate.classList.remove('input-invalid');
        InputTextDate.classList.add('input-valid');
    }

    if (InputTextEvol.value == '') {
        error = true;
        InputTextEvol.classList.add('input-invalid');
        InputTextEvol.classList.remove('input-valid');
    } else {
        InputTextEvol.classList.remove('input-invalid');
        InputTextEvol.classList.add('input-valid');
    }


    if (error == true) {
        Swal.fire({
            'icon': 'warning',
            'title': 'Datos ingresados incorrectamente',
            'text': 'Por favor revise los campos resaltados',
            'confirmButtonText': 'Entendido'
        });

    } else {
        Swal.fire({
            'icon': 'success',
            'title': 'Datos ingresados correctamente',
            'text': 'La factura se ha creado adecuadamente',
            'confirmButtonText': 'Entendido'
        }).then(() => {
            llenarProcedimientos();
            almacenarTx();
        });
    }

};

let llenarFechas = () => {
    expGetFecha.value = formatDate();
    vacFecha.value = formatDate();
    InputTextDate.value = formatDate();
    formLabDate.value = formatDate();
    MedDate.value = formatDate();

};
let llenarMascota = () => {
    formLabPet.value = expGetMascota.value;
    MedPet.value = expGetMascota.value;


};
let llenarOwner = () => {
    formLabOwner.value = expGetOwner.value;
};

let llenarVet = () => {
    formLabSelect.value = expGetVet.value;
    MedSelect.value = expGetVet.value;

};
const llenarVacunas = () => {
    //Limpia el contenido que tiene el cuerpo de la tabla.
    //TablaVacunas.innerHTML = '';
    //Para cada usuario que se encuentre dentro de la coleccion de usuarios


    let fila = TablaVacunas.insertRow();

    fila.insertCell().textContent = vacFecha.value;
    fila.insertCell().textContent = vacNombre.value;



    // Creación de la celda para los botones
    let tdAccionesVac = fila.insertCell();

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
            TablaVacunas.innerHTML = '';
        })
    });




};

const llenarProcedimientos = () => {
    //Limpia el contenido que tiene el cuerpo de la tabla.
    //TablaProcemientos.innerHTML = '';
    //Para cada usuario que se encuentre dentro de la coleccion de usuarios

    let fila = TablaProcemientos.insertRow();

    fila.insertCell().textContent = InputTextDate.value;
    fila.insertCell().textContent = InputTextEvol.value;


    // Creación de la celda para los botones
    let tdAccionesProc = fila.insertCell();

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
            TablaProcemientos.innerHTML = '';
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


};

const llenarLaboratorios = () => {
    //Limpia el contenido que tiene el cuerpo de la tabla.
    //TablaLaboratorios.innerHTML = '';
    //Para cada usuario que se encuentre dentro de la coleccion de usuarios


    let fila = TablaLaboratorios.insertRow();

    fila.insertCell().textContent = formLabDate.value;
    fila.insertCell().textContent = formLabPet.value;
    fila.insertCell().textContent = formLabOwner.value;
    fila.insertCell().textContent = formLabTest.value;
    fila.insertCell().textContent = formLabResult.value;
    fila.insertCell().textContent = formLabSelect.value;


    // Creación de la celda para los botones
    let tdAccionesLab = fila.insertCell();

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
            TablaLaboratorios.innerHTML = '';
        })
    });



};

const llenarRecetas = () => {
    //Limpia el contenido que tiene el cuerpo de la tabla.
    //TablaRecetas.innerHTML = '';
    //Para cada usuario que se encuentre dentro de la coleccion de usuarios


    let fila = TablaRecetas.insertRow();

    fila.insertCell().textContent = MedDate.value;
    fila.insertCell().textContent = MedPet.value;
    fila.insertCell().textContent = MedSelect.value;
    fila.insertCell().textContent = MedMed.value;


    // Creación de la celda para los botones
    let tdAccionesMed = fila.insertCell();

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
            TablaRecetas.innerHTML = '';
        })
    });


};

llenarFechas();
btnMed.addEventListener("click", validarMed)
btnLab.addEventListener("click", validarLab)
btnVac.addEventListener("click", validarVac)
botonTx.addEventListener('click', validarTx)
expGetMascota.addEventListener('keyup', llenarMascota)
expGetOwner.addEventListener('keyup', llenarOwner)
expGetVet.addEventListener('keyup', llenarVet)
btnRegister.addEventListener('mouseover', confirmar)
btnRegister.addEventListener('click', validarForm)