'use strict';
const fechaHotel = document.getElementById('frm-fecha-hotel');
const montoHotel = document.getElementById('frm-monto-hotel');
let ingresosHotel = [];
let montoTotalHotel = 0;

const llenarRegistrosIngresosHotel = async() => {
    ingresosHotel = await getDatos("obtener-reservas");

    ingresosHotel.forEach(income => {
        if (income.fecha === fechaHotel.value) {
            montoTotalHotel += income.monto;
        }

    });

    montoHotel.value = montoTotal;
};

fechaHotel.addEventListener('keyup', function(e) {
    if (e.key === 'Enter') {
        llenarRegistrosIngresosHotel();
    }
});