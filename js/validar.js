const inputs = document.querySelectorAll("form input");
const btnRegister = document.querySelector('#btn-save');
const checkbox = document.querySelectorAll('.pd-chkbox');
const labels = document.querySelectorAll('.lbl-chkbox');
const formLabDate = document.getElementById('frm-labDate');
const formLabPet = document.getElementById('lab-pet');
const formLabOwner = document.getElementById('lab-owner');
const formLabTest = document.getElementById('lab-test');
const formLabResult = document.getElementById('lab-result');
const formLabSelect = document.getElementById('lab-doctores');
const btnLab = document.querySelector('#btn-lab');
const btnMed = document.querySelector('#btn-med');
const MedDate = document.querySelector('#med-date');
const MedPet = document.querySelector('#med-pet');
const MedSelect = document.querySelector('#med-doctores');
const MedMed = document.querySelector('#med-med');



let contador = 0;

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
                window.location.href = "index.html";
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
                imageUrl: '../img/sick.jpg',
                imageWidth: 400,
                imageHeight: 200,
                imageAlt: 'Padecimientos',
                confirmButtonText: 'Entendido'
            });
        };
        //**  else {
        //     labels.forEach((lbl) => {
        //         lbl.classList.remove("input-invalid");
        //         lbl.classList.add("input-valid");
        //     });
        // }; 

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
        });
    }

};

btnMed.addEventListener("click", validarMed)
btnLab.addEventListener("click", validarLab)
btnRegister.addEventListener('click', validarForm)
btnRegister.addEventListener('mouseover', confirmar)