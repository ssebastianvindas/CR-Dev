const btnPay = document.getElementById("btn-pay");
const modalPay = document.getElementById("modal-metodo-pagar");
const btnPayModal = document.getElementsByClassName("btn-pagar-factura"); //cambiar cuando se pase al main
const closeModalPago = document.getElementsByClassName("close-modal")[0];
let inputsPay = document.querySelectorAll(".form-pagar input");
const selectTipoPay = document.querySelector('#tipo')

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
for (const observer of btnPayModal) {
    observer.addEventListener('click', displayModalPay);
}

let validarPay = () => {
    error = false;
    inputsPay.forEach((input) => {
        if (input.value == "") {
            error = true;
            input.classList.add("input-invalid");
            input.classList.remove("input-valid");
        } else {
            input.classList.add("input-valid");
            input.classList.remove("input-invalid");
        }
        if (selectTipoPay.value == "") {
            error = true
            selectTipoPay.classList.add("input-invalid");
            selectTipoPay.classList.remove("input-valid");
        } else {
            selectTipoPay.classList.remove("input-invalid");
            selectTipoPay.classList.add("input-valid");
        }
    });
    if (error == true) {
        Swal.fire({
            icon: "warning",
            title: "Datos ingresados incorrectamente",
            text: "Por favor revise los campos resaltados en rojo",
            confirmButtonText: "Entendido",
        });
    } else {
        Swal.fire({
            icon: "success",
            title: "Datos ingresados correctamente",
            text: "El pago realizado con éxito",
            confirmButtonText: "Entendido",
        }).then(() => {
            window.location.href = '../list-pagos.html'
        })
    }
};

//btnPayModal.addEventListener("click", displayModalPay); // cambiar cuando se pase al main
btnPay.addEventListener("click", validarPay);
closeModalPago.addEventListener("click", closeModalPay);