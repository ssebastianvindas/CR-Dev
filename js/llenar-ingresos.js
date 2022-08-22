'use strict';
const fechaVeterinaria = document.getElementById('frm-vet-fecha');
const montoVeterinaria = document.getElementById('frm-vet-monto');
const btnIngresosVete = document.getElementById('btn-ingresos-veterinaria');

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
const veteRegistrarIngreso = () => {
    let ingresosVete = {
        fecha: fechaVeterinaria.value,
        monto: montoVeterinaria.value
    };
    registrarDatos('registrar-reporteVete', ingresosVete);
};

fechaVeterinaria.addEventListener('keyup', function(e) {
    if (e.key === 'Enter') {
        llenarRegistrosIngresos();
    }
});
let registrarIngresosVete = () => {
    let ingresosVeterinaria = {
        fecha: fechaVeterinaria.value,
        monto: montoVeterinaria.value
    };
    registrarDatos("registrar-reporteVete", ingresosVeterinaria);
};

btnIngresosVete.addEventListener('click', registrarIngresosVete)