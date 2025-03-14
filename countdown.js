// Configura la fecha de la boda
const weddingDate = new Date('May 2, 2026 00:00:00').getTime();

// Actualiza la cuenta atrás cada segundo
const countdownFunction = setInterval(() => {
    const now = new Date().getTime();
    const distance = weddingDate - now;

    // Cálculos de tiempo
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Muestra el resultado en el elemento con id="countdown-timer"
    document.getElementById('days').innerText = days;
    document.getElementById('hours').innerText = hours;
    document.getElementById('minutes').innerText = minutes;
    document.getElementById('seconds').innerText = seconds;

    // Si la cuenta atrás termina, muestra un mensaje
    if (distance < 0) {
        clearInterval(countdownFunction);
        document.getElementById('countdown-timer').innerHTML = "¡Hoy es el gran día!";
    }
}, 1000);

// Cambia el color del header cuando se hace scroll
window.addEventListener("scroll", function () {
    var header = document.querySelector("header");
    if (window.scrollY > 50) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }
});



// Manejo del menú hamburguesa
// Manejo del menú hamburguesa
document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.getElementById("menu-toggle");
    const menu = document.getElementById("menu");
    const body = document.body;
    const menuLinks = document.querySelectorAll("#menu li a"); 

    // Abrir/cerrar el menú al hacer clic en el ícono de hamburguesa
    menuToggle.addEventListener("click", function () {
        menu.classList.toggle("active");
        body.classList.toggle("menu-open");

        // Cambiar el ícono a "X" cuando el menú está abierto
        if (menu.classList.contains("active")) {
            menuToggle.classList.add("close");
            menuToggle.innerHTML = '✕'; // Cambia el ícono a "X"
        } else {
            menuToggle.classList.remove("close");
            menuToggle.innerHTML = '&#9776;'; // Vuelve al ícono de hamburguesa
        }
    });

    // Cerrar el menú y desplazarse a la sección correspondiente al hacer clic en un enlace
    menuLinks.forEach(link => {
        link.addEventListener("click", function (e) {
            e.preventDefault(); 

            // Cierra el menú
            menu.classList.remove("active");
            body.classList.remove("menu-open");

            // Cambia el ícono de vuelta a hamburguesa
            menuToggle.classList.remove("close");
            menuToggle.innerHTML = '&#9776;';

            // Obtén el ID de la sección a la que se debe desplazar
            const targetId = this.getAttribute("href").substring(1); 
            const targetSection = document.getElementById(targetId);

            // Desplázate suavemente a la sección
            if (targetSection) {
                targetSection.scrollIntoView({ behavior: "smooth" });
            }
        });
    });
});

// reveal.js

document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll("section");

    const observerOptions = {
        threshold: 0.1 // Ajusta este valor para cambiar cuándo se activa la animación
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
                observer.unobserve(entry.target); // Deja de observar una vez que se ha mostrado
            }
        });
    }, observerOptions);

    sections.forEach(section => {
        observer.observe(section);
    });
});