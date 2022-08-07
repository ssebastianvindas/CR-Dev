const inputJuridica = document.getElementById('txt-juridica');
const inputConsecutivo = document.getElementById('txt-consecutivo');
const inputFecha = document.getElementById('txt-fecha');
const inputCliente = document.getElementById('txt-cliente');
const inputEmail = document.getElementById('txt-email');
const inputTelefono = document.getElementById('txt-telefono');
const inputPaciente = document.getElementById('txt-paciente');
const inputSubtotal = document.getElementById('txt-subtotal');
const inputDescuento = document.getElementById('txt-descuento');
const inputTotal = document.getElementById('txt-total');
const inputCantidad = document.getElementById('txt-cantidad');
const inputProcedimiento = document.getElementById('txt-procedimientos');
const inputPrecio = document.getElementById('txt-precio');
const btnImprimir = document.getElementById('btn-imprimir');

const validar = () => {
    let error = false;

    if (inputJuridica.value == '') {
        error = true;
        inputJuridica.classList.add('input-invalid');
        inputJuridica.classList.remove('input-valid');
    } else {
        inputJuridica.classList.remove('input-invalid');
        inputJuridica.classList.add('input-valid');
    }

    if (inputConsecutivo.value == '') {
        error = true;
        inputConsecutivo.classList.add('input-invalid');
        inputConsecutivo.classList.remove('input-valid');
    } else {
        inputConsecutivo.classList.remove('input-invalid');
        inputConsecutivo.classList.add('input-valid');
    }

    if (inputFecha.value == '') {
        error = true;
        inputFecha.classList.add('input-invalid');
        inputFecha.classList.remove('input-valid');
    } else {
        inputFecha.classList.remove('input-invalid');
        inputFecha.classList.add('input-valid');
    }

    if (inputCliente.value == '') {
        error = true;
        inputCliente.classList.add('input-invalid');
        inputCliente.classList.remove('input-valid');
    } else {
        inputCliente.classList.remove('input-invalid');
        inputCliente.classList.add('input-valid');
    }

    if (inputEmail.value == '') {
        error = true;
        inputEmail.classList.add('input-invalid');
        inputEmail.classList.remove('input-valid');
    } else {
        inputEmail.classList.remove('input-invalid');
        inputEmail.classList.add('input-valid');
    }

    if (inputTelefono.value == '') {
        error = true;
        inputTelefono.classList.add('input-invalid');
        inputTelefono.classList.remove('input-valid');
    } else {
        inputTelefono.classList.remove('input-invalid');
        inputTelefono.classList.add('input-valid');
    }

    if (inputPaciente.value == '') {
        error = true;
        inputPaciente.classList.add('input-invalid');
        inputPaciente.classList.remove('input-valid');
    } else {
        inputPaciente.classList.remove('input-invalid');
        inputPaciente.classList.add('input-valid');
    }
    if (inputCantidad.value == '') {
        error = true;
        inputCantidad.classList.add('input-invalid');
        inputCantidad.classList.remove('input-valid');
    } else {
        inputCantidad.classList.remove('input-invalid');
        inputCantidad.classList.add('input-valid');
    }
    if (inputProcedimiento.value == '') {
        error = true;
        inputProcedimiento.classList.add('input-invalid');
        inputProcedimiento.classList.remove('input-valid');
    } else {
        inputProcedimiento.classList.remove('input-invalid');
        inputProcedimiento.classList.add('input-valid');
    }
    if (inputPrecio.value == '') {
        error = true;
        inputPrecio.classList.add('input-invalid');
        inputPrecio.classList.remove('input-valid');
    } else {
        inputPrecio.classList.remove('input-invalid');
        inputPrecio.classList.add('input-valid');
    }

    if (inputSubtotal.value == '') {
        error = true;
        inputSubtotal.classList.add('input-invalid');
        inputSubtotal.classList.remove('input-valid');
    } else {
        inputSubtotal.classList.remove('input-invalid');
        inputSubtotal.classList.add('input-valid');
    }

    if (inputDescuento.value == '') {
        error = true;
        inputDescuento.classList.add('input-invalid');
        inputDescuento.classList.remove('input-valid');
    } else {
        inputDescuento.classList.remove('input-invalid');
        inputDescuento.classList.add('input-valid');
    }

    if (inputTotal.value == '') {
        error = true;
        inputTotal.classList.add('input-invalid');
        inputTotal.classList.remove('input-valid');
    } else {
        inputTotal.classList.remove('input-invalid');
        inputTotal.classList.add('input-valid');
    }
    if (error == true) {
        Swal.fire({
            'icon': 'warning',
            'title': 'Datos ingresados incorrectamente',
            'text': 'Por favor revise los campos resaltados',
            'confirmButtonText': 'Entendido'
        });

    } else {
        obtenerDatos();
    }

};
const obtenerDatos = () => {
    let factura = {
        'juridica': inputJuridica.value,
        'consecutivo': inputConsecutivo.value,
        'fecha': inputFecha.value,
        'paciente': inputPaciente.value,
        'email': inputEmail.value,
        'telefono': inputTelefono.value,
        'paciente': inputPaciente.value,
        'subtotal': inputSubtotal.value,
        'descuento': inputDescuento.value,
        'total': inputTotal.value,
    };
    Swal.fire({
        'icon': 'success',
        'title': 'Datos ingresados correctamente',
        'text': 'La factura se ha creado adecuadamente',
        'confirmButtonText': 'Entendido'
    }).then(() => {
        window.location.href = 'lista-facturas.html';
    });
};


btnImprimir.addEventListener('click', validar);