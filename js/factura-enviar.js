'use strict';
const btnImprimir = document.querySelector('#btn-factura-imprimir');
const btnEnviar = document.querySelector('#btn-factura-enviar');


let enviarFactura = () => {

};

let imprimirFactura = () => {

    let printContents = document.getElementById('imp1').innerHTML;
    window.open();
    document.write(printContents);

    window.print();
    window.close();

};

btnImprimir.addEventListener('click', imprimirFactura);