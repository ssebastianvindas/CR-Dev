const cuerpoTabla = document.querySelector('#tbl-hotel tbody');
const botonReservaBack = document.getElementById("btn-reservaAtras");
let usuarioConectado = JSON.parse(localStorage.getItem("usuarioConectado"));

const llenarTabla = () => {

    //cuerpoTabla.innerHTML = ''; //limpia el contenido del html

    reservas.forEach(reservaTemporal => {
        let fila = cuerpoTabla.insertRow(); //Crea una fila

        fila.insertCell().textContent = reservaTemporal.fechaReserva;
        fila.insertCell().textContent = reservaTemporal.fechaSalida;
        fila.insertCell().textContent = reservaTemporal.cantAnimales;
        // Creación de la celda para los botones
        let tdAcciones = fila.insertCell();

        //Creación del boton editar
        let btnEditar = document.createElement('button');
        btnEditar.textContent = 'Editar';
        btnEditar.type = 'button';
        btnEditar.classList.add('btn-editar');
        //Creacion del boton eliminar
        let btnEliminar = document.createElement('button');
        btnEliminar.textContent = 'Eliminar';
        btnEliminar.type = 'button';
        btnEliminar.classList.add('btn-eliminar');

        //Agregar el boton de editar a la celda acciones
        tdAcciones.appendChild(btnEditar);

        //Agregar el boton de eliminar a la celda acciones
        tdAcciones.appendChild(btnEliminar);

        btnEliminar.addEventListener('click', () => {
            Swal.fire({
                title: 'Está seguro que desea eliminar la cita?',
                text: "La acción no se puede revertir!",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Sí, eliminar!'
            }).then((result) => {
                if (result.isConfirmed) {
                    Swal.fire(
                        'Eliminado!',
                        'La cita fue eliminado.',
                        'success'
                    )
                }
            })
        });
    });
};

let regresarPrincipal = () => {

    switch (usuarioConectado.rol) {
        case "1":
            window.location.href = "admin.html";
            break;
        case "2":
            window.location.href = "secretaria.html";
            break;
        case "3":
            window.location.href = "cliente.html";
            break;
        case "4":
            window.location.href = "veterinario.html";
            break;
    }
};

botonReservaBack.addEventListener("click", regresarPrincipal);


llenarTabla();