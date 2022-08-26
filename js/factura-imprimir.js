'use strict';
const cuerpoTablaFact = document.querySelector('#tbl-factura-pagar tbody');
const clienteFactura = document.getElementById('factura-pagar-cliente');
const fechaFactura = document.getElementById('factura-pagar-fecha');
const mascotaFactura = document.getElementById('factura-pagar-mascota');
const facturaFactura = document.getElementById('factura-pagar-numero');
const subtotalFactura = document.getElementById('subtotal');
const impuestoFactura = document.getElementById('impuesto');
const totalFactura = document.getElementById('total');
let facturaPrint = [];
let monto = 0;
let imp = 0;
const llenarRegistros = async() => {
    facturaPrint = await getDatos("obtener-facturas");
    facturaLlenar();

};

const facturaLlenar = () => {
    facturaPrint.forEach(fact => {

        if (parseInt(FacturaID) === parseInt(fact.consecutivo)) {
            clienteFactura.textContent = fact.cliente;
            fechaFactura.textContent = moment(fact.fecha).format('DD-MM-YYYY');
            mascotaFactura.textContent = fact.paciente;
            facturaFactura.textContent = fact.consecutivo;
            llenarTablaFact();
        };
    });
};

const llenarTablaFact = () => {
    cuerpoTablaFact.innerHTML = '';


    facturaPrint.forEach(facturaTemp => {

        if (parseInt(FacturaID) === parseInt(facturaTemp.consecutivo)) {
            let fila = cuerpoTablaFact.insertRow();
            fila.insertCell().textContent = facturaTemp.cantidad;
            fila.insertCell().textContent = facturaTemp.procedimiento;
            fila.insertCell().textContent = facturaTemp.subtotal;
            fila.insertCell().textContent = facturaTemp.total;
            monto += facturaTemp.subtotal;
            imp = facturaTemp.impuesto;

        }




    });
    subtotalFactura.textContent = monto;
    impuestoFactura.textContent = imp;
    totalFactura.textContent = monto;

};
llenarRegistros();