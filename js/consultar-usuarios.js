'use strict';
const cuerpoTabla = document.querySelector('#tbl-usuarios tbody');
const nickname = document.querySelector('.nickname');

const llenarUsuarios = () => {
    //Limpia el contenido que tiene el cuerpo de la tabla.
    cuerpoTabla.innerHTML = '';
    //Para cada usuario que se encuentre dentro de la coleccion de usuarios
    usuarios.forEach(user => {

        let fila = cuerpoTabla.insertRow();

        fila.insertCell().textContent = user.usuario;
        fila.insertCell().textContent = user.nombre;
        fila.insertCell().textContent = user.contrasenna;
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
let cambiarNickname = () => {
    let usuarioConectado = JSON.parse(localStorage.getItem("usuarioConectado"));
    switch (usuarioConectado.rol) {
        case 1:
            nickname.textContent = 'Administrador'
            break;
        case 2:
            nickname.textContent = 'secretaria'
            break;
        case 3:
            nickname.textContent = 'Administrador'
            break;
        case 4:
            nickname.textContent = 'Administrador'
            break;
    }
}
window.addEventListener('load', cambiarNickname)

llenarUsuarios();