'use strict';
//tbl-users 
const tableBody = document.querySelector('#tbl-users tbody');
let listaMascotas = [];
let user = JSON.parse(localStorage.getItem("usuarioConectado"));

const inicializarListaMascotaByUser = async() => {
    listaMascotas = await getDatosByUser('obtener-mascota-usuario', user.usuario);
    showTable();

};
console.log(listaMascotas)
const inicializarListaMascota = async() => {
    listaMascotas = await getDatos('obtener-mascotas');
    showTable();

};

const showTable = async() => {
    tableBody.innerHTML = "";

    listaMascotas.forEach((mascota) => {
        let fila = tableBody.insertRow();
        fila.insertCell().innerText = mascota._id;
        fila.insertCell().innerText = mascota.petName;

        let tdAcciones = fila.insertCell();
        //Creación del botón de editar
        let btnEditar = document.createElement("button");
        btnEditar.textContent = "Editar";
        btnEditar.type = "button";
        btnEditar.classList.add("btn-editar");

        //Creación del botón de eliminar
        let btnEliminar = document.createElement("button");
        btnEliminar.textContent = "Eliminar";
        btnEliminar.type = "button";
        btnEliminar.classList.add("btn-eliminar");

        //Agregar el botón de editar y eliminar a la celda de acciones
        tdAcciones.appendChild(btnEditar);
        tdAcciones.appendChild(btnEliminar);
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
                    Swal.fire("¡Factura eliminado!", "La factura fue borrado", "success");
                }
            });
        });
    });
};

inicializarListaMascotaByUser();