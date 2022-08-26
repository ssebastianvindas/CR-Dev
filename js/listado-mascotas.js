"use strict";
//tbl-users
const tableBody = document.querySelector("#tbl-mascota tbody");
let listaMascotas = [];
let user = JSON.parse(localStorage.getItem("usuarioConectado"));
const inputfiltro = document.getElementById("txt-filter");

const inputsPerfil = document.querySelectorAll("input");
const modalPerfil = document.getElementById("modal-perfil-mascota");
const btnRolPerfil = document.getElementsByClassName("btn-ver-perfil");
const spanPerfil = document.getElementsByClassName("close")[0];
const btnSavePerfil = document.getElementById('btn-save-perfil');

let cuidadosPerfil = document.querySelector("#txt-cuidados-pet-perfil");
let sexoMascotaPerfil = document.querySelector("#sexo-mascota-perfil");
let txtEspeciePerfil = document.querySelector("#txt-especie-perfil");
let txtTamannoPerfil = document.querySelector("#txt-tamanno-perfil");
let txtColorPerfil = document.querySelector("#txt-color-perfil");

let txtNombreMascotaPerfil = document.querySelector(
    ".content-nombre-mascota-perfil #txt-nombre-mascota-perfil"
);

let seleccionArchivosPerfil = document.querySelector("#seleccionArchivos-perfil"),
    imagenPrevisualizacionPerfil = document.getElementById("imagenPrevisualizacion-perfil");

let miTabla = document.getElementById('tbl-mascota');

let test;

const inicializarListaMascotaByUser = async() => {
    listaMascotas = await getDatosByUser("obtener-mascota-usuario", user.usuario);
    showTable();
};

let closeModalPerfil = () => {
    modalPerfil.style.display = "none";
};


let displayModalPerfil = (event) => {
    console.log(event.target);
    modalPerfil.style.display = "block";
    cargarPerfilMascota();

};

/*
console.log(listaMascotas)
const inicializarListaMascota = async() => {
    listaMascotas = await getDatos('obtener-mascotas');
    showTable();
};
*/
const showTable = async() => {
    tableBody.innerHTML = "";

    listaMascotas.forEach((mascota) => {
        if (
            mascota.petName.toLowerCase().includes(inputfiltro.value.toLowerCase()) ||
            mascota.petEspecie.toLowerCase().includes(inputfiltro.value.toLowerCase()) ||
            mascota.petSexo.toLowerCase().includes(inputfiltro.value.toLowerCase())
        ) {
            let fila = tableBody.insertRow();
            let idReducido = String(mascota._id);
            fila.insertCell().innerText = idReducido.slice(-5);
            fila.insertCell().innerText = mascota.petName;
            fila.insertCell().innerText = mascota.petEspecie;
            fila.insertCell().innerText = mascota.petSexo;

            let tdAcciones = fila.insertCell();
            //Creación del botón de editar
            let btnVerPerfil = document.createElement("button");
            btnVerPerfil.innerHTML = 'Ver Perfil';
            btnVerPerfil.type = "button";
            btnVerPerfil.classList.add("btn-ver-perfil");

            //Creación del botón de eliminar
            let btnEliminar = document.createElement("button");
            btnEliminar.innerHTML = '<i class="fa-solid fa-trash-can"></i>';
            btnEliminar.type = "button";
            btnEliminar.classList.add("btn-eliminar");

            //Agregar el botón de editar y eliminar a la celda de acciones
            tdAcciones.appendChild(btnVerPerfil);
            tdAcciones.appendChild(btnEliminar);

            for (const ver of btnRolPerfil) {
                ver.addEventListener('click', displayModalPerfil);
            }

            window.onclick = function(event) {
                if (event.target == modalPerfil) {
                    modalPerfil.style.display = "none";
                }
            };

            miTabla.addEventListener('click', function(e) {
                let button = e.target;
                let cell = button.parentNode;
                let row = cell.parentNode;
                let rowFirstCellText = row.querySelector('td').innerHTML;

                console.log(button);
                console.log(cell);
                console.log(row);
                console.log(rowFirstCellText);

                if (rowFirstCellText === mascota._id.slice(-5)) {
                    txtNombreMascotaPerfil.textContent = mascota.petName;
                    sexoMascotaPerfil.textContent = mascota.petSexo;
                    txtEspeciePerfil.textContent = mascota.petEspecie;
                    txtTamannoPerfil.textContent = mascota.petTamanno;
                    txtColorPerfil.textContent = mascota.petColor;
                    cuidadosPerfil.textContent = mascota.petCare;
                } else {
                    console.log("nimodo");
                }

            }, false);

            btnEliminar.addEventListener("click", () => {
                Swal.fire({
                    title: "¿Está seguro que desea eliminar la información?",
                    text: "La acción no se puede revertir",
                    icon: "warning",
                    showCancelButton: true,
                    confirmButtonColor: "#3085d6",
                    cancelButtonColor: "#d33",
                    confirmButtonText: "¡Sí, eliminar!",
                }).then((result) => {
                    if (result.isConfirmed) {
                        eliminarDatos("/eliminar-mascota", mascota._id);
                    }
                });
            });
        }
    });
};

const btnsBorrar = document.querySelectorAll(".btn-eliminar");
btnsBorrar.forEach((btnBorrar) => {
    btnBorrar.addEventListener("click", () => {
        Swal.fire({
            title: "¿Esta seguro que desea eliminar a esta mascota?",
            text: "¡La acción no se puede revertir!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#18b158",
            cancelButtonColor: "#d33",
            confirmButtonText: "Si, eliminar!",
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire({
                    title: "La mascota se ha eliminado correctamente",
                    confirmButtonText: "Entendido",
                    confirmButtonColor: "#18b158",
                });
            }
        });
    });
});

inicializarListaMascotaByUser();
inputfiltro.addEventListener("keyup", inicializarListaMascotaByUser);

const cargarPerfilMascota = () => {
    listaMascotas.forEach((mascota) => {
        if (test === mascota._id) {
            txtNombreMascotaPerfil.textContent = mascota.petName;
            sexoMascotaPerfil.textContent = mascota.petSexo;
            txtEspeciePerfil.textContent = mascota.petEspecie;
            txtTamannoPerfil.textContent = mascota.petTammano;
            txtColorPerfil.textContent = mascota.petColor;
            cuidadosPerfil.textContent = mascota.petCare;
            imagenPrevisualizacionPerfil.src = mascota.petPhoto;
            console.log(mascota.petColor);
            console.log(mascota.petName);
            console.log(mascota.petSexo);
            console.log(mascota.petCare);
            console.log(mascota.petPhoto);
        } else {
            console.log("nimodo");
        }
    })
};

btnRolPerfil.addEventListener("click", displayModalPerfil);
spanPerfil.addEventListener("click", closeModalPerfil);
console.log(cargarPerfilMascota);