const inputs = document.querySelectorAll('input');

const btnSendCR = document.getElementById('submit');

let validarContactenosCR = () => {

    inputs.forEach((inputValidation) => {

        if (inputValidation.value === "") {
            inputValidation.classList.add("input-invalid");

            Swal.fire({
                icon: 'warning',
                title: 'Campos incompletos',
                text: 'Por favor revise que los campos marcados con rojo esten completos',
                confirmButtonText: 'Entendido'
            })
        } else {
            inputValidation.classList.remove("input-invalid");
            inputValidation.classList.add("input-valid");

            Swal.fire({
                icon: 'success',
                title: 'Enviado',
                text: 'Pronto te contactaremos.',
                confirmButtonText: "Entendido"
            });

        }
    })
};



btnSendCR.addEventListener('click', validarContactenosCR)