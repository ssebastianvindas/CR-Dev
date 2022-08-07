const btnOpen = document.querySelector('#btn-rx');
const rxImage = document.querySelectorAll('.rx');

let cargarImagen = () => {
    rxImage.forEach((rx) => {
        rx.src = '../imgs/rx.jpg';

    });
};
btnOpen.addEventListener('click', cargarImagen);