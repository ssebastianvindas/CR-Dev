function openModule(evt, modulo) {
    let i, tabcontentPet, tablinksDisplay;

    tabcontentPet = document.getElementsByClassName("tabcontentPet");
    for (i = 0; i < tabcontentPet.length; i++) {
        tabcontentPet[i].style.display = "none";
    }

    tablinksDisplay = document.getElementsByClassName("tablinksDisplay");
    for (i = 0; i < tablinksDisplay.length; i++) {
        tablinksDisplay[i].className = tablinksDisplay[i].className.replace(" active", "");
    }

    document.getElementById(modulo).style.display = "block";
    evt.currentTarget.className += " active";
}