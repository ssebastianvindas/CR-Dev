const registrarDatos = async(endpoint, data) => {
    let url = `http://localhost:3000/api/${endpoint}`;

    await axios({
            url: url,
            method: "post",
            responseType: "json",
            data: data,
        })
        .then((response) => {
            Swal.fire({
                icon: "success",
                title: "Felicidades",
                text: response.data.msj,
            }).then(() => {
                let expediente = localStorage.getItem("expediente");
                if (expediente) {} else {
                    window.location.reload();
                }
            });
        })
        .catch((error) => {
            Swal.fire({
                icon: "error",
                title: "Ha ocurrido un error",
                text: error,
            });
        });
};
const getDatos = async(endpoint) => {
    let url = `http://localhost:3000/api/${endpoint}`;
    let listaDatos = [];
    await axios({
            url: url,
            method: "get",
            responseType: "json",
        })
        .then((response) => {
            listaDatos = response.data.lista;
        })
        .catch((error) => {
            Swal.fire({
                icon: "error",
                text: error,
            });
        });

    return listaDatos;
};

const getDatosByUser = async(endpoint, user) => {
    let url = `http://localhost:3000/api/${endpoint}`;
    let listaDatos = [];
    await axios({
            url: url,
            method: "post",
            responseType: "json",
            data: {
                usuario: user,
            },
        })
        .then((response) => {
            listaDatos = response.data.lista;
        })
        .catch((error) => {
            Swal.fire({
                icon: "error",
                text: error,
            });
        });

    return listaDatos;
};

const eliminarDatos = async(endpoint, _id) => {
    let url = `http://localhost:3000/api/${endpoint}`;
    await axios({
            url: url,
            method: "delete",
            responseType: "json",
            data: {
                _id: _id,
            },
        })
        .then((response) => {
            Swal.fire({
                icon: "success",
                title: response.data.msj,
            }).then(() => {
                window.location.reload();
            });
        })
        .catch((error) => {
            Swal.fire({
                icon: "error",
                text: error,
            });
        });
};
const editarDatos = async(endpoint, data) => {
    let url = `http://localhost:3000/api/${endpoint}`;

    await axios({
            url: url,
            method: "put",
            responseType: "json",
            data: data,
        })
        .then((response) => {
            Swal.fire({
                icon: "success",
                title: "Felicidades",
                text: response.data.msj,
            }).then(() => {
                window.location.reload();
            });
        })
        .catch((error) => {
            Swal.fire({
                icon: "error",
                title: "Ha ocurrido un error",
                text: error,
            });
        });
};
const obtenerNombreRol = (idRol) => {
    let nombreRol = "";

    switch (idRol) {
        case 1:
            nombreRol = "Administrador";
            break;
        case 2:
            nombreRol = "Secretaria";
            break;
        case 3:
            nombreRol = "Veterinario";
            break;
        case 4:
            nombreRol = "Cliente";
            break;
    }
    return nombreRol;
};

const obtenerNombreEstado = (idEstado) => {
    let nombreEstado = "";

    switch (idEstado) {
        case 1:
            nombreEstado = "Activo";
            break;
        case 2:
            nombreEstado = "Inactivo";
            break;
    }
    return nombreEstado;
};