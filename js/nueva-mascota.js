const btnSave = document.getElementById("btn-save");
const modal = document.getElementById("modal-register-mascota");
const btnAgregar = document.getElementById("btn-rol");
const span = document.getElementsByClassName("close")[0];

let imgMascota = document.querySelector(".input-img");
let inputImg = document.querySelector("#img");

const seleccionArchivos = document.querySelector("#seleccionArchivos"),
    imagenPrevisualizacion = document.querySelector("#imagenPrevisualizacion");
const txtNombreMascota = document.querySelector(".content-nombre-mascota #txt-nombre-mascota");

const cuidados = document.getElementById('cuidados-pet');

// Escuchar cuando cambie
seleccionArchivos.addEventListener("change", () => {
    // Los archivos seleccionados, pueden ser muchos o uno
    const archivos = seleccionArchivos.files;
    // Si no hay archivos salimos de la función y quitamos la imagen
    if (!archivos || !archivos.length) {
        imagenPrevisualizacion.src = "";
        return;
    }
    // Ahora tomamos el primer archivo, el cual vamos a previsualizar
    const primerArchivo = archivos[0];
    // Lo convertimos a un objeto de tipo objectURL
    const objectURL = URL.createObjectURL(primerArchivo);
    // Y a la fuente de la imagen le ponemos el objectURL
    imagenPrevisualizacion.src = objectURL;
});

// modal
let closeModal = () => {
    modal.style.display = "none";
};

let displayModal = () => {
    modal.style.display = "block";
};

// Por si quiere hacer que si da click en otro lado, se cierre el modal
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
};

let validar = () => {
    error = false
    if (txtNombreMascota.value == "") {
        txtNombreMascota.classList.add("input-invalido");
        error = true
    } else {
        txtNombreMascota.classList.remove("input-invalido");
        txtNombreMascota.classList.add("input-valido");
    }
    if (seleccionArchivos.value == "") {
        imagenPrevisualizacion.classList.add("input-invalido");
        error = true
    } else {
        imagenPrevisualizacion.classList.remove("input-invalido");
        imagenPrevisualizacion.classList.add("input-valido");
    }
    if (error == true) {
        Swal.fire({
            title: "Campos incompletos",
            text: "Por favor complete los campos resaltados en rojo",
            icon: "warning",
            confirmButtonColor: "#18b158",
            confirmButtonText: "Entendido",
        })
    } else {
        obtenerDatosMascota();
    }
};

const obtenerDatosMascota = () => {
    let user = JSON.parse(localStorage.getItem("usuarioConectado"))


    let mascota = {
        petUser: user.usuario,

        petName: txtNombreMascota.value,
        petPhoto: seleccionArchivos.value,
        petCare: cuidados.value,

    };
    Swal.fire({
        'icon': 'success',
        'title': 'Mascota registrada',
        'text': 'Su mascota ha sido registrada correctamente',
        'confirmButtonText': 'Continuar'
    }).then(() => {
        registrarDatos('registrar-mascota', mascota);
    });
}

btnAgregar.addEventListener("click", displayModal);
btnSave.addEventListener("click", validar);
span.addEventListener("click", closeModal);