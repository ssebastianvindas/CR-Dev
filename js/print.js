'use strict';
const btnImprimirExp = document.querySelector('#btn-print');
const btnEnviar = document.querySelector('#btn-factura-enviar');


let enviarFactura = () => {

};

let imprimirFactura = () => {

    let printContents = document.getElementById('sct-expediente').innerHTML;
    // window.open();
    document.write(printContents);

    window.print(printContents);
    // window.close();

};

btnImprimirExp.addEventListener('click', imprimirFactura);