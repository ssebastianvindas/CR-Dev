const inputEntrada1 = document.getElementById('fecha-entrada');
const inputSalida1 = document.getElementById('fecha-salida');
const inputAnimales1 = document.getElementById('cantidad-animales');
const btnGuardar1 = document.getElementById('btn-registrar');
const inputMonto1 = document.getElementById('frm-monto-reserva');
const inputMascota1 = document.getElementById('frm-mascota-reserva');
let usuarioRegistroReserva = JSON.parse(localStorage.getItem("usuarioConectado"));

const validarReservaUser = () => {

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
    if (inputMascota1.value == '') {
        error = true;
        inputMascota1.classList.add('input-invalid');
    } else {
        inputMascota1.classList.remove('input-invalid')
    }

    if (error == true) {
        Swal.fire({
            'icon': 'warning',
            'title': 'Datos ingresados incorrectamente',
            'text': 'Favor revise los campos resaltados',
            'confirmButtonText': 'Entendido'
        });

    } else {
        obtenerDatosRegistroUser();
    }

};
const obtenerDatosRegistroUser = () => {
    //variable tipo JSON
    let reserva = {
        'usuario': usuarioRegistroReserva.usuario,
        'mascota': inputMascota1.value,
        'fechaEntrada': inputEntrada1.value,
        'fechaSalida': inputSalida1.value,
        'numMascotas': inputAnimales1.value,
        'monto': inputMonto1.value
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


function getNumberOfDays(start, end) {
    const date1 = new Date(start);
    const date2 = new Date(end);

    // One day in milliseconds
    const oneDay = 1000 * 60 * 60 * 24;

    // Calculating the time difference between two dates
    const diffInTime = date2.getTime() - date1.getTime();

    // Calculating the no. of days between two dates
    const diffInDays = Math.round(diffInTime / oneDay);

    return diffInDays;
}

inputAnimales1.addEventListener('keyup', function(e) {
    if (e.key === 'Enter') {
        let dias = getNumberOfDays(inputEntrada1.value, inputSalida1.value);
        let monto = 0;
        monto = parseInt(inputAnimales1.value) * (dias * 5000);
        inputMonto1.value = monto;
    }
});
btnGuardar1.addEventListener('click', validarReservaUser);