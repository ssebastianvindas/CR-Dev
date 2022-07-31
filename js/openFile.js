const btnOpen = document.querySelector('#btn-rx');
const rxImage = document.querySelectorAll('.rx');

let cargarImagen = () => {
    rxImage.forEach((rx) => {
        rx.src = 'img/rx.jpg';

    });
};
btnOpen.addEventListener('click', cargarImagen);