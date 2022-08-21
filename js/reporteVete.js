'use strict'

const cuerpoTabla = document.querySelectorId('tbl-pendientes');
let reporteVete = [];

const llenarReporteVete = async() => {

    reporteVete = await getDatos('obtener-reporteVete');

};
llenarReporteVete();