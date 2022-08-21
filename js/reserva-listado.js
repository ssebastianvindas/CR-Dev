const cuerpoTabla = document.querySelector("#tbl-hotel tbody");
let reservas = [];

const llenarReservas = async () => {
  reservas = await getDatos("obtener-reservas");

  llenarTabla();
};
const llenarTabla = () => {
  cuerpoTabla.innerHTML = ""; //limpia el contenido del html

  reservas.forEach((reservaTemporal) => {
    let fila = cuerpoTabla.insertRow(); //Crea una fila

    fila.insertCell().textContent = moment(reservaTemporal.fechaEntrada)
      .add(1, "d")
      .format("DD-MM-YYYY");
    fila.insertCell().textContent = moment(reservaTemporal.fechaSalida)
      .add(1, "d")
      .format("DD-MM-YYYY");
    fila.insertCell().textContent = reservaTemporal.numMascotas;
    fila.insertCell().textContent = reservaTemporal.monto;

    // Creación de la celda para los botones
    let tdAcciones = fila.insertCell();

    //Creación del boton editar
    let btnEditar = document.createElement("button");
    btnEditar.innerHTML = '<i class="fa-solid fa-pen-to-square"></i>';
    btnEditar.type = "button";
    btnEditar.classList.add("btn-editar");

    //Creación del botón de eliminar
    let btnEliminar = document.createElement("button");
    btnEliminar.innerHTML = '<i class="fa-solid fa-trash-can"></i>';
    btnEliminar.type = "button";
    btnEliminar.classList.add("btn-eliminar");

    //Agregar el boton de editar a la celda acciones
    tdAcciones.appendChild(btnEditar);

    //Agregar el boton de eliminar a la celda acciones
    tdAcciones.appendChild(btnEliminar);

    btnEliminar.addEventListener("click", () => {
      Swal.fire({
        title: "Está seguro que desea eliminar la cita?",
        text: "La acción no se puede revertir!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Sí, eliminar!",
      }).then((result) => {
        if (result.isConfirmed) {
          eliminarDatos("eliminar-reservas", reservaTemporal._id);
        }
      });
    });
  });
};

llenarReservas();
