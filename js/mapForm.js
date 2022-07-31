let map, infoWindow, pos;

function initMap() {
    map = new google.maps.Map(document.getElementById("form-map"), {
        center: { lat: 9.928, lng: -84.093 },
        zoom: 9,
    });
    infoWindow = new google.maps.InfoWindow();

    const locationButton = document.createElement("button");

    locationButton.textContent = "Click para geolocalizarte";
    locationButton.classList.add("custom-map-control-button");
    map.controls[google.maps.ControlPosition.TOP_CENTER].push(locationButton);
    locationButton.addEventListener("click", () => {
        // Try HTML5 geolocation.
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    pos = {
                        lat: position.coords.latitude,
                        lng: position.coords.longitude,
                    };

                    infoWindow.setPosition(pos);
                    infoWindow.setContent("Location found.");
                    infoWindow.open(map);
                    map.setCenter(pos);
                },
                () => {
                    handleLocationError(true, infoWindow, map.getCenter());
                }
            );
        } else {
            // Browser doesn't support Geolocation
            handleLocationError(false, infoWindow, map.getCenter());
        }
    });
}

function handleLocationError(browserHasGeolocation, infoWindow, pos) {
    infoWindow.setPosition(pos);
    infoWindow.setContent(
        browserHasGeolocation ?
        "Error: The Geolocation service failed." :
        "Error: Your browser doesn't support geolocation."
    );
    infoWindow.open(map);
}

window.initMap = initMap;

const btnSend = document.getElementById('btn-send');
const inputName = document.getElementById('name');
const inputPet = document.getElementById('petName');
const inputPhone = document.getElementById('phone');
const inputEmail = document.getElementById('email');
const inputDirection = document.getElementById('map');
const inputOtherDirection = document.getElementById('textDirection');
const inputInformation = document.getElementById('message');

const inputCall = document.getElementById('call');
const inputMail = document.getElementById('mail');
const inputWhats = document.getElementById('whats');

const validar = () => {
    let error = false;

    if (inputName.value == '' || inputPet.value == '' || inputPhone.value == '' || inputEmail.value == '' || inputDirection.value == '' || inputOtherDirection.value == '' || inputInformation.value == '') {
        error = true;
        inputName.classList.add('input-error');
    } else {
        inputName.classList.remove('input-error');
    }

    if (error) {
        console.log('Advertencia, no se enviaron los datos');
    } else {
        getData();
    }
}

const getData = () => {

    if (inputCall.checked) {
        call = inputCall.value;
    } else {
        call = null;
    }

    if (inputMail.checked) {
        mail = inputMail.value;
    } else {
        mail = null;
    }

    if (inputWhats.checked) {
        whats = inputWhats.value;
    } else {
        whats = null;
    }

    let user = {
        'nombre': inputName.value,
        'mascota': inputPet.value,
        'telefono': inputPhone.value,
        'email': inputEmail.value,
        'location': pos,
        'other': inputOtherDirection.value,
        'information': inputInformation.value,
        'recibir-llamada': call,
        'recibir-correo': mail,
        'recibir-mensaje': whats,
    };

    console.log(user);
};

btnSend.addEventListener('click', validar);

// AIzaSyCbe_yIKBbi4YG3 - tlEvw9Qb_UbM1Or74k
