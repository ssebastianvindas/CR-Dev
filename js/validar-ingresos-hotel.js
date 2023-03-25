const inputFechaIngreso = document.querySelector('#frm-fecha-hotel');
const inputMontoIngreso = document.querySelector('#frm-monto-hotel');
const btnRegistrarIngreso = document.querySelector('#btn-ingresos-hotel');

const calcular  = () => {
    //declare a variable error in false.
    let error = false;

    //if error true, add another class to the
    //to the inputs for the validation.
    if(inputFechaIngreso.value == ''){
        error = true;
        inputFechaIngreso.classList.add('input-error');
    }else{
        inputFechaIngreso.classList.remove('input-error');
    }

    if(inputMontoIngreso.value == ''){
        error = true;
        inputMontoIngreso.classList.add('input-error');
    }else{
        inputMontoIngreso.classList.remove('input-error');
    }
    
    if(error == true){
       Swal.fire({
        'icon' : 'warning',
        'title' : 'Datos ingresados incorrectamente',
        'text': 'Favor revise los campos resaltados',
        'confirmButtonText' : 'Entendido'
       });

    }else{
        obtenerIngresos();
    }
    
}; 

const obtenerIngresos = () => {
    //variable tipo JSON
    let ingresoHotel = {
        fecha: inputFechaIngreso.value,
        monto : inputMontoIngreso.value
    };
    
    Swal.fire({
        'icon': 'success',
        'title' : 'Reserva realizada exitosamente',
        'text' : 'Su numero de confirmacion le llegara al correo',
        'confirmButtonText' : 'Continuar'
    }).then (()=>{
        registrarDatos('registrar-ingresosHotel', ingresoHotel);
    });
       
};


btnRegistrarIngreso.addEventListener('click', calcular)