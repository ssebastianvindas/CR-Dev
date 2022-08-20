const inputEntrada1 = document.getElementById('fecha-entrada');
const inputSalida1 = document.getElementById('fecha-salida');
const inputAnimales1 = document.getElementById('cantidad-animales');
const btnGuardar1 = document.getElementById('btn-registrar');

const validarReserva = () => {

    let error = false;

    if (inputEntrada1.value == '') {
        error = true;
        inputEntrada1.classList.add('input-invalid');
    } else {
        inputEntrada1.classList.remove('input-invalid');
    }

    if (inputSalida1.value == '') {
        error = true;
        inputSalida1.classList.add('input-invalid');
    } else {
        inputSalida1.classList.remove('input-invalid');
    }

    if (inputAnimales1.value == '') {
        error = true;
        inputAnimales1.classList.add('input-invalid');
    } else {
        inputAnimales1.classList.remove('input-invalid')
    }

    if (error == true) {
        Swal.fire({
            'icon': 'warning',
            'title': 'Datos ingresados incorrectamente',
            'text': 'Favor revise los campos resaltados',
            'confirmButtonText': 'Entendido'
        });

    } else {
        obtenerDatosRegistro();
    }

};
const obtenerDatosRegistro = () => {
    //variable tipo JSON
    let reserva = {
        fechaEntrada: inputEntrada1.value,
        fechaSalida: inputSalida1.value,
        numMascotas: inputAnimales1.value
    };

    Swal.fire({
        'icon': 'success',
        'title': 'Reserva realizada exitosamente',
        'text': 'Su numero de confirmacion le llegara al correo',
        'confirmButtonText': 'Continuar'
    }).then(() => {
        registrarDatos('registrar-reservas', reserva);

    });

};

btnGuardar1.addEventListener('click', validarReserva);