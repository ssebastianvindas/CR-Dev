const inputs = document.querySelectorAll("input");
const modal = document.getElementById("modal-citas");
const btnRol = document.getElementsByClassName("btn-ver");
const span = document.getElementsByClassName("close")[0];
const btnSave = document.getElementById('btn-save');


let closeModal = () => {
    modal.style.display = "none";
}

let displayModal = () => {
    modal.style.display = "block";
}

for (const ver of btnRol) {
    ver.addEventListener('click', displayModal);
}

let validar = () => {
    for (const input of inputs) {
        if (input.checked) {
            input.classList.remove('input-invalid');
            input.classList.add('input-invalid');
            Swal.fire({
                icon: 'success',
                title: 'Listo',
                text: 'Has registrado la calificacion',
                confirmButtonText: 'Entendido',
            })
            break;
        } else {
            input.classList.add('input-invalid');
            input.classList.remove('input-invalid');
            Swal.fire({
                icon: 'warning',
                title: 'Campos incompletos',
                text: 'Por favor, seleccione al menos una opcion.',
                confirmButtonText: 'Entendido',
            })
        }
    };

}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

btnSave.addEventListener('click', validar);
span.addEventListener('click', closeModal);