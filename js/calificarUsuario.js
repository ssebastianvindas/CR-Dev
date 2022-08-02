const inputs1 = document.querySelectorAll("input");
const modal1 = document.getElementById("modal-citas");
const btnRol1 = document.getElementsByClassName("btn-ver");
const span1 = document.getElementsByClassName("close")[0];
const btnSave1 = document.getElementById('btn-save');

let closeModal = () => {
    modal1.style.display = "none";
}

let displayModal = () => {
    modal1.style.display = "block";
}

for (const ver of btnRol1) {
    ver.addEventListener('click', displayModal);
}

let validar = () => {
    for (const input of inputs1) {
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
                text: 'Por favor, seleccione al menos una estrella.',
                confirmButtonText: 'Entendido',
            })
        }
    };

}

window.onclick = function(event) {
    if (event.target == modal1) {
        modal1.style.display = "none";
    }
}


btnSave1.addEventListener('click', validar);
span1.addEventListener('click', closeModal);