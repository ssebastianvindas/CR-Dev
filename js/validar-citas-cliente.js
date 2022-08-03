const campos1 = document.querySelectorAll(".frm-citas-new input");
const btnAgregar1 = document.querySelector('#btn-citasNew');
const selector1 = document.querySelector('#citas-doctores');

let validarForm = () => {
    campos1.forEach((input) => {

        if (input.value === "" || selector1.value === "") {


            input.classList.add("input-invalid");
            input.classList.remove("input-valid");
            if (selector1.value === "") {
                selector1.classList.add("input-invalid");
                selector1.classList.remove("input-valid");
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
            selector1.classList.remove("input-invalid");
            selector1.classList.add("input-valid");

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

btnAgregar1.addEventListener('click', validarForm)