const camposUser = document.querySelectorAll(".frm-userName");
const btnAgregarUser = document.querySelector('#btn-userAdd');
const selectorUser = document.querySelector('#roles');
const btnProcedimiento = document.querySelector('#btn-agregarTx');
const InputTextDate = document.querySelector('#input-textDate');
const InputTextEvol = document.querySelector('#input-txEvol');
let validarUser = () => {
    camposUser.forEach((input) => {

        if (input.value === "" || selectorUser.value === "") {


            input.classList.add("input-invalid");
            input.classList.remove("input-valid");
            if (selectorUser.value === "") {
                selectorUser.classList.add("input-invalid");
                selectorUser.classList.remove("input-valid");
            }

            Swal.fire({
                icon: 'warning',
                title: 'Campos incompletos',
                text: 'Por favor revise los campos resaltados',
                confirmButtonText: 'Entendido'
            })
        } else {
            input.classList.remove("input-invalid");
            input.classList.add("input-valid");
            selectorUser.classList.remove("input-invalid");
            selectorUser.classList.add("input-valid");

            Swal.fire({
                icon: 'success',
                title: 'Expediente Archivado',
                text: 'La información ha sido ingresada con éxito en el expediente clínico',
                confirmButtonText: "Entendido"
            }).then(() => {
                regresarPrincipal();
            });


        }


    });
};

const validarProc = () => {
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
            regresarPrincipal();
        });
    }

};




btnProcedimiento.addEventListener('click', validarProc);
btnAgregarUser.addEventListener('click', validarUser)