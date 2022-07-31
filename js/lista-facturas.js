const cuerpoTabla = document.querySelector('#tbl-factura tbody');
const botonDashboard = document.getElementById("btn-dash");
let usuarioConectado = JSON.parse(localStorage.getItem("usuarioConectado"));
const llenarTabla = () => {
    cuerpoTabla.innerHTML = '';

    facturas.forEach(facturaTemp => {
        let fila = cuerpoTabla.insertRow();

        fila.insertCell().textContent = facturaTemp.juridica;
        fila.insertCell().textContent = facturaTemp.consecutivo;
        fila.insertCell().textContent = facturaTemp.fecha;
        fila.insertCell().textContent = facturaTemp.cliente;
        fila.insertCell().textContent = facturaTemp.email;
        fila.insertCell().textContent = facturaTemp.telefono;
        fila.insertCell().textContent = facturaTemp.paciente;
        fila.insertCell().textContent = facturaTemp.subtotal;
        fila.insertCell().textContent = facturaTemp.descuento;
        fila.insertCell().textContent = facturaTemp.total;

        let tdAcciones = fila.insertCell();

        //Creación del botón de editar
        let btnEditar = document.createElement('button');
        btnEditar.textContent = 'Editar';
        btnEditar.type = 'button';
        btnEditar.classList.add('btn-editar');

        //Creación del botón de eliminar
        let btnEliminar = document.createElement('button');
        btnEliminar.textContent = 'Eliminar';
        btnEliminar.type = 'button';
        btnEliminar.classList.add('btn-eliminar');

        //Agregar el botón de editar y eliminar a la celda de acciones
        tdAcciones.appendChild(btnEditar);
        tdAcciones.appendChild(btnEliminar);

        btnEliminar.addEventListener('click', () => {
            Swal.fire({
                title: '¿Está seguro que desea eliminar la información?',
                text: "La acción no se puede revertir",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: '¡Sí, eliminar!'
            }).then((result) => {
                if (result.isConfirmed) {
                    Swal.fire(
                        '¡Factura eliminado!',
                        'La factura fue borrado',
                        'success'
                    )
                }
            })
        });

    });
};

let validarUsuariosBack = () => {

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

botonDashboard.addEventListener("click", validarUsuariosBack);
llenarTabla();