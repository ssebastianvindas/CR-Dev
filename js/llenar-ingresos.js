'use strict';
const fechaVeterinaria = document.getElementById('frm-vet-fecha');
const montoVeterinaria = document.getElementById('frm-vet-monto');
const btnIngresosHotel = document.getElementById('btn-ingresos-veterinaria');

let ingresos = [];
let montoTotal = 0;

const llenarRegistrosIngresos = async() => {
    ingresos = await getDatos("obtener-facturas");

    ingresos.forEach(income => {

        if (moment(income.fecha).format('DD-MM-YYYY') === moment(fechaVeterinaria.value).format('DD-MM-YYYY')) {
            montoTotal += income.total;
        }

    });

    montoVeterinaria.value = montoTotal;
};

fechaVeterinaria.addEventListener('keyup', function(e) {
    if (e.key === 'Enter') {
        llenarRegistrosIngresos();
    }
});
let registrarIngresos = () => {
    let ingresosVeterinaria = {
        fecha: fechaVeterinaria.value,
        monto: montoVeterinaria.value
    };
    registrarDatos("registrar-ingresosVete", ingresosVeterinaria);
};

btnIngresosHotel.addEventListener('click', registrarIngresos)