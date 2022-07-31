const campos = document.querySelectorAll(".frm-citas-new input");
const btnAgregar = document.querySelector('#btn-citasNew');
const selector = document.querySelector('#citas-doctores')
let validarForm = () => {
    campos.forEach((input) => {

        if (input.value === "" || selector.value === "") {


            input.classList.add("input-invalid");
            input.classList.remove("input-valid");
            if (selector.value === "") {
                selector.classList.add("input-invalid");
                selector.classList.remove("input-valid");
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
            selector.classList.remove("input-invalid");
            selector.classList.add("input-valid");

            Swal.fire({
                icon: 'success',
                title: 'Expediente Archivado',
                text: 'La información ha sido ingresada con éxito en el expediente clínico',
                confirmButtonText: "Entendido"
            }).then(() => {
                window.location.href = "admin.html";
            });


        }


    });
};

btnAgregar.addEventListener('click', validarForm)