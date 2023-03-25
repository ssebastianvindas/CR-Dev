let txtUsuario = document.querySelector('#login-usuario')
let txtContrasenna = document.querySelector('#login-password')

let opcionesNav = document.querySelectorAll("nav a");

let listaUsuarios = [];

const inicializarListas = async () => {
  listaUsuarios = await getDatos("/obtener-usuarios");
};
const rederigirUsuarios = () => {
    let usuarioConectado = JSON.parse(localStorage.getItem("usuarioConectado"));
    switch (usuarioConectado.rol) {
        case 1:
            window.location.href = "dashboard-admin.html";
            break;
        case 2:
            window.location.href = "dashboard-secretaria.html";
            break;
        case 3:
            window.location.href = "dashboard-veterinario.html";
            break;
        case 4:
            window.location.href = "dash-usuario.html";
            break;
        default:
            window.location.href = "dashboard-admin.html";
            break;
    }
};

const iniciarSesion = () => {
    let usuarioLogin = txtUsuario.value;
    let contrasennaLogin = txtContrasenna.value;
    validarCredenciales(usuarioLogin, contrasennaLogin);
    
};

const validarCredenciales = (usuarioLogin, contrasennaLogin) => {
    let usuarioValidado = false;
    let usuarioInactivo = false;
    listaUsuarios.forEach((objUsuario) => {
            if (objUsuario.usuario == usuarioLogin && objUsuario.contrasenna == contrasennaLogin && objUsuario.estado == 1) {
                usuarioValidado = true;
                localStorage.setItem("usuarioConectado", JSON.stringify(objUsuario));
            }
            if (objUsuario.usuario == usuarioLogin && objUsuario.contrasenna == contrasennaLogin && objUsuario.estado != 1) {
                usuarioValidado = false;
                usuarioInactivo = true
                localStorage.setItem("usuarioConectado", JSON.stringify(objUsuario));
            }

    });
    if (usuarioValidado == false && usuarioInactivo == true) {
        console.log("hola")
        Swal.fire({
            icon: "warning",
            title: "Usuario inactivo",
            text: "Por favor pongase en contacto con el administador",
            confirmButtonText: "Entendido",
        });
    }else if (usuarioValidado == false && usuarioInactivo == false) {
                Swal.fire({
                    icon: "warning",
                    title: "No se ha podido iniciar sesión",
                    text: "El correo del usuario o la contraseña son incorrectos",
                    confirmButtonText: "Entendido",
                });
            txtUsuarioLogin.classList.add("input-invalid");
            txtContrasennaLogin.classList.add("input-invalid");
        } else {
            txtUsuarioLogin.classList.remove("input-invalid");
            txtContrasennaLogin.classList.remove("input-invalid");
            Swal.fire({
                    icon: "success",
                    title: "Inicio de sesión correcto",
                    text: "Bienvenido",
                    confirmButtonText: "Entendido",
                })
                .then(() => {
                    rederigirUsuarios();
                });
        }
};
inicializarListas();