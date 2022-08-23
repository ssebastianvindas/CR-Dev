const cuerpoTablaFactura = document.querySelector('#tbl-factura tbody');
const botonDashboard = document.getElementById("btn-dash");
const nickname = document.querySelector('.nickname');
const inputfiltro = document.getElementById("txt-filter");
let facturasDatos = [];
const llenarRegistros = async() => {
    facturasDatos = await getDatos("obtener-facturas");
    llenarTabla();
};

const llenarTabla = () => {
    cuerpoTablaFactura.innerHTML = '';
    facturasDatos.forEach(facturaTemp => {
        if (
            facturaTemp.juridica.toLowerCase().includes(inputfiltro.value.toLowerCase()) ||
            facturaTemp.cliente.toLowerCase().includes(inputfiltro.value.toLowerCase()) ||
            facturaTemp.email.toLowerCase().includes(inputfiltro.value.toLowerCase()) ||
            facturaTemp.telefono.toLowerCase().includes(inputfiltro.value.toLowerCase()) ||
            facturaTemp.paciente.toLowerCase().includes(inputfiltro.value.toLowerCase()) 
          ) {
        let fila = cuerpoTablaFactura.insertRow();
        fila.insertCell().textContent = facturaTemp.juridica;
        fila.insertCell().textContent = facturaTemp.consecutivo;
        fila.insertCell().textContent = moment(facturaTemp.fecha).format('DD-MM-YYYY');
        fila.insertCell().textContent = facturaTemp.cliente;
        fila.insertCell().textContent = facturaTemp.email;
        fila.insertCell().textContent = facturaTemp.telefono;
        fila.insertCell().textContent = facturaTemp.paciente;
        fila.insertCell().textContent = facturaTemp.subtotal;
        fila.insertCell().textContent = facturaTemp.impuesto;
        fila.insertCell().textContent = facturaTemp.total;

        let tdAcciones = fila.insertCell();

        //Creación del botón de editar
        let btnPagar = document.createElement('button');
        btnPagar.textContent = 'Pagar';
        btnPagar.type = 'button';
        btnPagar.classList.add('btn-editar');


        //Creación del botón de eliminar
        let btnEliminar = document.createElement("button");
        btnEliminar.innerHTML = '<i class="fa-solid fa-trash-can"></i>';
        btnEliminar.type = "button";
        btnEliminar.classList.add("btn-eliminar");

        //Agregar el botón de editar y eliminar a la celda de acciones
        tdAcciones.appendChild(btnPagar);
        tdAcciones.appendChild(btnEliminar);
        btnPagar.addEventListener('click', () => {
            Swal.fire({
                title: '¿Está seguro que desea pagar la factura?',
                text: "Se producirá una versión imprimible de la factura",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: '¡Sí, pagar!'
            }).then((result) => {
                const infoFactura = {
                    consecutivo: facturaTemp.consecutivo
                }

                window.localStorage.setItem('facturaId', JSON.stringify(infoFactura));
                window.open('../factura-imprimir.html', '_blank');

            })
        });

        btnEliminar.addEventListener('click', () => {
            Swal.fire({
                title: '¿Está seguro que desea eliminar la información?',
                text: "La acción no se puede revertir",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: '¡Sí, eliminar!'
            }).then((result) => {
                if (result.isConfirmed) {
                    eliminarDatos('eliminar-facturas', facturaTemp._id);
                }
            })
        });
    }

    });
};
llenarRegistros();
inputfiltro.addEventListener("keyup", llenarRegistros);