'use strict';
const fechaVeterinaria = document.getElementById('frm-fecha-hotel');
const montoVeterinaria = document.getElementById('frm-monto-hotel');
let ingresos = [];
let montoTotal = 0;

const llenarRegistrosIngresos = async() => {
    ingresos = await getDatos("obtener-facturas");

    ingresos.forEach(income => {
        montoTotal += income.total;

    });

    montoVeterinaria.value = montoTotal;
};

fechaVeterinaria.addEventListener('keyup', function(e) {
    if (e.key === 'Enter') {
        llenarRegistrosIngresos();
    }
});