'use strict';
const fechaHotel = document.getElementById('frm-fecha-hotel');
const montoHotel = document.getElementById('frm-monto-hotel');
let ingresosHotel = [];
let montoTotalHotel = 0;

const llenarRegistrosIngresosHotel = async() => {
    ingresosHotel = await getDatos("obtener-reservas");
    ingresosHotel.forEach(income => {
        if (moment(income.fechaEntrada).add('1','d').format('DD-MM-YYYY') === moment(fechaHotel.value).format('DD-MM-YYYY')) {
            montoTotalHotel += income.monto;
        }
    });

    montoHotel.value = montoTotalHotel;
};

fechaHotel.addEventListener('keyup', function(e) {
    if (e.key === 'Enter') {
        llenarRegistrosIngresosHotel();
    }
});