const cuerpoTabla = document.querySelector("#tbl-doctor tbody");
let citas = [];

const llenarCitas = async () => {
  citas = await getDatos("obtener-citas");

  llenarTablaDia();
};

const llenarTablaDia = () => {
  //Limpia el contenido que tiene el cuerpo de la tabla.
  cuerpoTabla.innerHTML = "";
  //Para cada usuario que se encuentre dentro de la coleccion de usuarios
  citas.forEach((cita) => {
    let fila = cuerpoTabla.insertRow();

    fila.insertCell().textContent = moment(cita.fecha).format("DD-MM-YYYY");
    fila.insertCell().textContent = cita.hora;
    fila.insertCell().textContent = cita.nombremascota;
    fila.insertCell().textContent = cita.nombreduenno;
    fila.insertCell().textContent = cita.procedimiento;
    fila.insertCell().textContent = cita.doctor;
    fila.insertCell().textContent = cita.estado;

    // Creación de la celda para los botones
    let tdAcciones = fila.insertCell();

    //Creación del boton editar
    let btnEditar = document.createElement("button");
    btnEditar.textContent = "Editar";
    btnEditar.type = "button";
    btnEditar.classList.add("btn-editar");
    //Creacion del boton eliminar
    let btnEliminar = document.createElement("button");
    btnEliminar.textContent = "Cancelar";
    btnEliminar.type = "button";
    btnEliminar.classList.add("btn-eliminar");

    //Agregar el boton de editar a la celda acciones
    tdAcciones.appendChild(btnEditar);

    //Agregar el boton de eliminar a la celda acciones
    tdAcciones.appendChild(btnEliminar);

    btnEliminar.addEventListener("click", () => {
      Swal.fire({
        title: "Está seguro que desea cancelar la cita?",
        text: "La acción no se puede revertir!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Sí, eliminar!",
      }).then((result) => {
        if (result.isConfirmed) {
          eliminarDatos("eliminar-cita", cita._id);
        }
      });
    });
  });
};

llenarCitas();
