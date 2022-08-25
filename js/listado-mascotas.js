"use strict";
//tbl-users
const tableBody = document.querySelector("#tbl-mascota tbody");
let listaMascotas = [];
let user = JSON.parse(localStorage.getItem("usuarioConectado"));
const inputfiltro = document.getElementById("txt-filter");

const inicializarListaMascotaByUser = async () => {
  listaMascotas = await getDatosByUser("obtener-mascota-usuario", user.usuario);
  showTable();
};

/*
console.log(listaMascotas)
const inicializarListaMascota = async() => {
    listaMascotas = await getDatos('obtener-mascotas');
    showTable();

};
*/
const showTable = async () => {
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
    btnVerPerfil.innerHTML = 'Ver perfil';
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