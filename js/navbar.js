const navbarToggle = document.querySelector('.navbar-toggle');
const navbarLinks = document.querySelector('.navbar-links');

navbarToggle.addEventListener('click', () => {
    navbarLinks.classList.toggle('active');
});

$(document).ready(function () {
    // Capturamos la barra de navegación
    const navbar = $(".navbar");

    // Definimos la altura a la que queremos que la barra de navegación deje de estar fija
    const scrollThreshold = 400; // En píxeles, ajusta esta altura según tus necesidades

    $(window).scroll(function () {
        // Obtenemos la posición actual del scroll
        const scrollPosition = $(window).scrollTop();

        // Comprobamos si el scroll supera el umbral definido para quitar la clase "navbar-fixed"
        if (scrollPosition > scrollThreshold) {
            navbar.addClass("scrolled");
        } else {
            navbar.removeClass("scrolled");
        }
    });
});