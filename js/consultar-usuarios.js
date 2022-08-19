"use strict";
const cuerpoTabla = document.querySelector("#tbl-usuarios tbody");
let listaUsuarios = [];

const inicializarListas = async () => {
  listaUsuarios = await getDatos("/obtener-usuarios");
  mostrarTabla();
};

const mostrarTabla = async () => {
  cuerpoTabla.innerHTML = "";

  listaUsuarios.forEach((usuario) => {
    let fila = cuerpoTabla.insertRow();
    fila.insertCell().innerText = usuario.nombre;
    fila.insertCell().innerText = usuario.direccion;
    fila.insertCell().innerText = usuario.usuario;
    fila.insertCell().innerText = usuario.numero;
    fila.insertCell().innerText = usuario.correo;
    fila.insertCell().innerText = obtenerNombreRol(usuario.rol);
    fila.insertCell().innerText = obtenerNombreEstado(usuario.estado);

    let tdAcciones = fila.insertCell();
    //Creación del botón de editar
    let btnEditar = document.createElement("button");
    btnEditar.innerHTML = '<i class="fa-solid fa-pen-to-square"></i>';
    btnEditar.type = "button";
    btnEditar.classList.add("btn-editar");

    //Creación del botón de eliminar
    let btnEliminar = document.createElement("button");
    btnEliminar.innerHTML = '<i class="fa-solid fa-trash-can"></i>';
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
          eliminarDatos("/eliminar-usuario", usuario._id);
          Swal.fire("Usuario eliminado!", "El usuario fue borrado", "success");
        }
      });
    });
  });
};
inicializarListas();

