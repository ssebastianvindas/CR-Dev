'use strict';
const cuerpoTablaFacturaUsuario = document.querySelector('#tbl-users tbody');
const cuerpoTablaEscogerMetodo = document.querySelector('#tbl-choose-method tbody');
//const btnPay = document.getElementById("btn-pay");
const modalPay = document.getElementById("modal-metodo-pagar");
const btnPayModal = document.getElementsByClassName("btn-ver"); //cambiar cuando se pase al main
const closeModalPago = document.getElementsByClassName("close-modal")[0];
let inputsPay = document.querySelectorAll(".form-pagar input");
const selectTipoPay = document.querySelector('#tipo');
let facturasDatos = [];
let metodosPago = [];

let usuarioConectadoFactura = JSON.parse(localStorage.getItem("usuarioConectado"));

let miTabla = document.getElementById('tbl-users');
let rowFirstCellText;
let fila;

const llenarTablaFacturasUsuario = async() => {
    facturasDatos = await getDatos("obtener-facturas");
    mostrarFacturasUsuario();
}

const llenarTablaMetodosPagoUsuario = async() => {
    metodosPago = await getDatosByUser("obtener-tarjeta-usuario", usuarioConectadoFactura.usuario);
    escogerMetodoPago();
}


// Escuchar cuando cambie
// modal
let closeModalPay = () => {
    modalPay.style.display = "none";
};

let displayModalPay = () => {
    modalPay.style.display = "block";
};

// Por si quiere hacer que si da click en otro lado, se cierre el modal
window.onclick = function(event) {
    if (event.target == modalPay) {
        modalPay.style.display = "none";
    }
};

// Selecciona mediante el observer todos los botones que se encuentren en la tabla y llama la funcion display


let validarPay = () => {
    Swal.fire({
        icon: "success",
        title: "Pagado",
        text: "El pago realizado con éxito",
        confirmButtonText: "Entendido",
    }).then(() => {
        miTabla.addEventListener('click', function(e) {
            let button = e.target;
            let cell = button.parentNode;
            let row = cell.parentNode;
            rowFirstCellText = row.querySelector('td:nth-child(4)').innerHTML;

            console.log(button);
            console.log(cell);
            console.log(row);
            console.log(rowFirstCellText);

        }, false);
        window.location.href = '../list-pagos.html'
    })
};

//btnPayModal.addEventListener("click", displayModalPay); // cambiar cuando se pase al main
//btnPayModal.addEventListener("click", displayModalPay);
closeModalPago.addEventListener("click", closeModalPay);

const mostrarFacturasUsuario = () => {
    cuerpoTablaFacturaUsuario.innerHTML = "";
    facturasDatos.forEach(facturaTemp => {
        console.log(facturaTemp.cliente);

        if (usuarioConectadoFactura.nombre === facturaTemp.cliente) {
            fila = cuerpoTablaFacturaUsuario.insertRow();
            fila.insertCell().textContent = facturaTemp.fecha;
            fila.insertCell().textContent = facturaTemp.paciente;
            fila.insertCell().textContent = facturaTemp.cliente;
            fila.insertCell().textContent = facturaTemp.total;
            fila.insertCell().textContent = facturaTemp.procedimiento;

            let tdAccionesFactura = fila.insertCell();

            let btnTarjeta = document.createElement("button");
            btnTarjeta.innerHTML = '<i class="fa-solid fa-receipt"></i>';
            btnTarjeta.type = "button";
            btnTarjeta.classList.add("btn-ver");

            tdAccionesFactura.appendChild(btnTarjeta);

            for (const observer of btnPayModal) {
                observer.addEventListener('click', displayModalPay);
            }

            window.onclick = function(event) {
                if (event.target == modalPay) {
                    modalPay.style.display = "none";
                }
            }
        }

    });
}

llenarTablaFacturasUsuario();

const escogerMetodoPago = () => {
    cuerpoTablaEscogerMetodo.innerHTML = "";
    metodosPago.forEach(metodoSelected => {
        console.log(metodoSelected.titular);
        if (usuarioConectadoFactura.nombre === metodoSelected.titular) {
            let fila = cuerpoTablaEscogerMetodo.insertRow();
            fila.insertCell().textContent = metodoSelected.titular;
            fila.insertCell().textContent = metodoSelected.numerotarjeta;
            fila.insertCell().textContent = metodoSelected.tipo;
            fila.insertCell().textContent = metodoSelected.fechaExpiracion;

            let tdAccionesPagar = fila.insertCell();

            let btnPagarFactura = document.createElement("button");
            btnPagarFactura.innerHTML = '<i class="fa-solid fa-money-bill-wave"></i>';
            btnPagarFactura.type = "button";
            btnPagarFactura.classList.add("btn-ver");

            tdAccionesPagar.appendChild(btnPagarFactura);

            for (const check of btnPayModal) {
                check.addEventListener('click', validarPay);
            }

        }
    })
};

llenarTablaMetodosPagoUsuario();