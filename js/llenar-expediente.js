'use strict';
const expFecha = document.getElementById('frm-dfecha');
const namePet = document.getElementById('name-pet');
const expId = document.getElementById('exp-id');
const nameOwner = document.getElementById('name-owner');
const expIdOwner = document.getElementById('exp-idowner');
const expVet = document.getElementById('exp-vet');
const expQueja = document.getElementById('exp-queja');
const chkTos = document.getElementById('chk-tos');
const chkResfrio = document.getElementById('chk-resfrio');
const chkFiebre = document.getElementById('chk-fiebre');
const chkBrucelosis = document.getElementById('chk-brucelosis');
const chkDistemper = document.getElementById('chk-distemper');
const chkCarbunco = document.getElementById('chk-cb');
const chkHongos = document.getElementById('chk-hongos');
const chkMoquillo = document.getElementById('chk-moquillo');
const chkViriosis = document.getElementById('chk-viriosis');
const chkParvo = document.getElementById('chk-parvo');
const chkHepatitis = document.getElementById('chk-hepatitis');
const chkLaringo = document.getElementById('chk-laringo');
const chkGastro = document.getElementById('chk-gastro');
const chkRabia = document.getElementById('chk-rabia');
const chkLepto = document.getElementById('chk-lepto');
const chkTp = document.getElementById('chk-tp');
const chkParasitos = document.getElementById('chk-parasitos');
const chkLehismania = document.getElementById('chk-lehismania');
const chkFilarias = document.getElementById('chk-filarias');
const expPa = document.getElementById('exp-pa');
const expPulso = document.getElementById('exp-pulso');
const expTemp = document.getElementById('exp-temp');
const expPeso = document.getElementById('exp-peso');
const expTalla = document.getElementById('exp-talla');
const expEdad = document.getElementById('exp-edad');
const labFecha = document.getElementById('frm-labDate');
const labPet = document.getElementById('lab-pet');
const labOwner = document.getElementById('lab-owner');
const labTest = document.getElementById('lab-test');
const labResult = document.getElementById('lab-result');
const labDoctores = document.getElementById('lab-doctores');


let llenarExpediente = () => {
    expFecha.value = '2022-05-17';
    namePet.value = 'Dusty';
    expId.value = '110890528';
    nameOwner.value = 'Gabriel Coto';
    expIdOwner.value = '121600787';
    expVet.value = 'Dr. Amir Gupta';
    expQueja.value = 'El perro se escapa y es agresivo';
    chkTos.checked = true;
    chkBrucelosis.checked = true;
    chkHongos.checked = true;
    chkParvo.checked = true;
    chkRabia.checked = true;
    chkParasitos.checked = true;
    chkFilarias.checked = true;
    expPa.value = '120/80';
    expPulso.value = '80';
    expTemp.value = '36.5';
    expPeso.value = '45';
    expTalla.value = '110';
    expEdad.value = '3';
    rxImage.forEach((rx) => {
        rx.src = '../imgs/rx.jpg';

    });

    labFecha.value = '2022-05-17';
    labPet.value = 'Dusty';
    labOwner.value = 'Gabriel Coto';
    labTest.value = 'Fórmula Rojas';
    labResult.value = 'Hemoglobina:Normal, Hematocrito:Normal, Suero:Normal';
    labDoctores.value = 'Dr. Amir Gupta';




    llenarVacunas();
    llenarProcedimientos();

};

llenarExpediente();