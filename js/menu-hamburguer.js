const navToggle = document.querySelector(".nav-toggle");
const menuItems = document.querySelector(".menu-items");
let icon = document.querySelector('.fa-bars')

navToggle.addEventListener("click", () => {
  menuItems.classList.toggle("nav-menu_visible");
  if (menuItems.classList.contains("nav-menu_visible")) {
    icon.classList.replace('fa-bars','fa-times')
    navToggle.setAttribute("aria-label", "Cerar menú");

  } else {
    icon.classList.replace('fa-times','fa-bars')
    navToggle.setAttribute("aria-label", "Abrir menú");
  }
});

// Cerrar menu cuando se lecciona una seccion de la pagina (un enlace)
const closeMenu = document.querySelectorAll('.menu-items a[href^="#"]');
closeMenu.forEach((closeMenu) => {
  closeMenu.addEventListener("click", function () {
    menuItems.classList.remove("nav-menu_visible");
    if (menuItems.classList.contains("nav-menu_visible")) {
      icon.classList.replace('fa-bars','fa-times')
      navToggle.setAttribute("aria-label", "Cerar menú");
  
    } else {
      icon.classList.replace('fa-times','fa-bars')
      navToggle.setAttribute("aria-label", "Abrir menú");
    }
  });
});
