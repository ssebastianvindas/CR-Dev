const inputEntrada = document.getElementById('fecha-entrada');
const inputSalida = document.getElementById('fecha-salida');
const inputAnimales = document.getElementById('cantidad-animales');
const btnGuardar = document.getElementById('btn-registrar');

const validarReserva = () => {

    let error = false;

    if (inputEntrada.value == '') {
        error = true;
        inputEntrada.classList.add('input-invalid');
    } else {
        inputEntrada.classList.remove('input-invalid');
    }

    if (inputSalida.value == '') {
        error = true;
        inputSalida.classList.add('input-invalid');
    } else {
        inputSalida.classList.remove('input-invalid');
    }

    if (inputAnimales.value == '') {
        error = true;
        inputAnimales.classList.add('input-invalid');
    } else {
        inputAnimales.classList.remove('input-invalid')
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
        'date': inputEntrada.value,
        'cant-cuartos': inputSalida.value,
        'cant-animales': inputAnimales.value
    };
    console.log(reserva);
    Swal.fire({
        'icon': 'success',
        'title': 'Reserva realizada exitosamente',
        'text': 'Su numero de confirmacion le llegara al correo',
        'confirmButtonText': 'Continuar'
    }).then(() => {
        window.location.href = 'reserva-listado.html'

    });

};

btnGuardar.addEventListener('click', validarReserva);