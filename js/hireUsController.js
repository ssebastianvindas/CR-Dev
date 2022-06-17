'use strict';

let botonEnviar = document.querySelector('#submit');
let inputName = document.querySelector('#name');
let inputGroup = document.querySelector('#group');
let inputService = document.querySelector('#service');
let inputEmail = document.querySelector('#email');
let inputPhone = document.querySelector('#phone');

botonEnviar.addEventListener('click', getData);

function getData() {
    let sName = inputName.value;
    let sGroup = inputGroup.value;
    let sService = inputService.value;
    let sEmail = inputEmail.value;
    let nPhone = inputPhone.value;

    console.log(sName, sGroup, sService, sEmail, nPhone);
}