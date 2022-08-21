'use strict'
const cuerpoTabla = document.querySelectorId('tbl-users');
let reporteHotel = [];

const llenarReporteHotel = async() => {

    reporteHotel = await getDatos('obtener-reporteHotel');

    llenarReporteHotel();

};

const llenarReporteHotel = () => {

}