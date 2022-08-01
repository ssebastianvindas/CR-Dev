'use strict';
const cuerpoTabla = document.querySelector('#tbl-usuarios tbody');
const botonBackMain = document.getElementById("btn-backMain");

const llenarUsuarios = () => {
    //Limpia el contenido que tiene el cuerpo de la tabla.
    cuerpoTabla.innerHTML = '';
    //Para cada usuario que se encuentre dentro de la coleccion de usuarios
    usuarios.forEach(user => {

        let fila = cuerpoTabla.insertRow();

        fila.insertCell().textContent = user.identificacion;
        fila.insertCell().textContent = user.nombre;
        fila.insertCell().textContent = user.contrasena;
        fila.insertCell().textContent = user.rol;


        // Creación de la celda para los botones
        let tdAccionesUser = fila.insertCell();

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
        tdAccionesUser.appendChild(btnEditar);

        //Agregar el boton de eliminar a la celda acciones
        tdAccionesUser.appendChild(btnEliminar);
        btnEditar.addEventListener('click', () => { window.location.href = "" });


        btnEliminar.addEventListener('click', () => {
            Swal.fire({
                title: 'Está seguro que desea eliminar el usuario?',
                text: "La acción no se puede revertir!",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Sí, eliminar!'
            }).then((result) => {
                if (result.isConfirmed) {
                    cuerpoTabla.innerHTML = '';
                    Swal.fire(
                        'Eliminado!',
                        'El usuario fue eliminado.',
                        'success'
                    )
                }
            })
        });

    });
};

llenarUsuarios();

let dirigirBackMain = () => {

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

botonBackMain.addEventListener("click", dirigirBackMain);