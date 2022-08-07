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
