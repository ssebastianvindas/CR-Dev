"use strict";
const cuerpoTabla = document.querySelector("#tbl-factura tbody");
const inputfiltro = document.getElementById("txt-filter");
let listaMetodos = [];

const inicializarListas = async() => {
    listaMetodos = await getDatos("/obtener-metodoDePago");
    mostrarTabla();
};

const mostrarTabla = async() => {
    cuerpoTabla.innerHTML = "";
    listaMetodos.forEach((MetodoPago) => {
        if (
            MetodoPago.titular
            .toLowerCase()
            .includes(inputfiltro.value.toLowerCase()) ||
            MetodoPago.numerotarjeta
            .toLowerCase()
            .includes(inputfiltro.value.toLowerCase())
        ) {
            let fila = cuerpoTabla.insertRow();
            let numerot = String(MetodoPago.numerotarjeta);
            fila.insertCell().innerText = MetodoPago.titular;
            fila.insertCell().innerText = "************" + numerot.slice(-4);
            fila.insertCell().innerText = MetodoPago.tipo;
            fila.insertCell().innerText = MetodoPago.fechaExpiracion;

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
                        eliminarDatos("/eliminar-metodoDePago", MetodoPago._id);
                        Swal.fire(
                            "Usuario eliminado!",
                            "El metodo de pago fue borrado",
                            "success"
                        );
                    }
                });
            });
        }
    });
};
inicializarListas();
inputfiltro.addEventListener("keyup", inicializarListas);