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


let contador = 0;



let AlmacenarDatos = () => {
    let Datos = {
        fecha: expGetFecha.value,
        mascota: expGetMascota.value,
        mascotaId: expGetMascotaId.value,
        owner: expGetOwner.value,
        ownerId: expGetOwnerId.value,
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
    console.log(expChkFilarias.value);
    registrarDatos('registrar-expediente', Datos);

};



let almacenarTx = () => {
    let tratamientoDatos = {
        mascotaId: expGetMascotaId.value,
        fecha: InputTextDate.value,
        tratamiento: InputTextEvol.value
    };

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


            let vacunasDatos = {
                mascotaId: expGetMascotaId.value,
                fecha: vacFecha.value,
                vacuna: vacNombre.value
            };


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
            almacenarTx();
        });
    }

};

btnMed.addEventListener("click", validarMed)
btnLab.addEventListener("click", validarLab)
btnVac.addEventListener("click", validarVac)
botonTx.addEventListener('click', validarTx)

btnRegister.addEventListener('mouseover', confirmar)
btnRegister.addEventListener('click', validarForm)