const camposUser = document.querySelectorAll(".frm-userName");
const btnAgregarUser = document.querySelector('#btn-userAdd');
const selectorUser = document.querySelector('#roles')
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
                window.location.href = "admin.html";
            });


        }


    });
};

btnAgregarUser.addEventListener('click', validarUser)