'use strict';
const cuerpoTablaFact = document.querySelector('#tbl-factura-pagar tbody');
const clienteFactura = document.getElementById('factura-pagar-cliente');
const fechaFactura = document.getElementById('factura-pagar-fecha');
const mascotaFactura = document.getElementById('factura-pagar-mascota');
const facturaFactura = document.getElementById('factura-pagar-numero');
let FacturaID = JSON.parse(window.localStorage.getItem('facturaId'));
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
        if (FacturaID.consecutivo === fact.consecutivo) {
            clienteFactura.textContent = fact.cliente;
            fechaFactura.textContent = fact.fecha;
            mascotaFactura.textContent = fact.paciente;
            facturaFactura.textContent = fact.consecutivo;
            llenarTablaFact();
        };
    });
};

const llenarTablaFact = () => {
    cuerpoTablaFact.innerHTML = '';

    facturaPrint.forEach(facturaTemp => {

        let fila = cuerpoTablaFact.insertRow();

        // fila.insertCell().textContent = facturaTemp.juridica;
        // fila.insertCell().textContent = facturaTemp.consecutivo;
        // fila.insertCell().textContent = facturaTemp.fecha;
        // fila.insertCell().textContent = facturaTemp.cliente;
        fila.insertCell().textContent = facturaTemp.cantidad;
        fila.insertCell().textContent = facturaTemp.subtotal;
        fila.insertCell().textContent = facturaTemp.impuesto;
        fila.insertCell().textContent = facturaTemp.total;
        monto += facturaTemp.subtotal;
        imp = facturaTemp.impuesto;






    });
    subtotalFactura.textContent = monto;
    impuestoFactura.textContent = imp;
    totalFactura.textContent = monto;

};
llenarRegistros();