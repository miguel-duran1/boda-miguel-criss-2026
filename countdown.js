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
    updateCountdownElement('days', days);
    updateCountdownElement('hours', hours);
    updateCountdownElement('minutes', minutes);
    updateCountdownElement('seconds', seconds);

    // Si la cuenta atrás termina, muestra un mensaje
    if (distance < 0) {
        clearInterval(countdownFunction);
        document.getElementById('countdown-timer').innerHTML = '<div class="celebration">¡Hoy es el gran día! 🎉</div>';
    }
}, 1000);

// Actualiza los elementos con una pequeña animación
function updateCountdownElement(id, value) {
    const element = document.getElementById(id);
    const currentValue = parseInt(element.innerText);
    
    // Solo anima si hay un cambio de valor
    if (element.innerText === '' || currentValue !== value) {
        element.classList.add('countdown-update');
        element.innerText = value;
        
        // Quita la clase después de la animación
        setTimeout(() => {
            element.classList.remove('countdown-update');
        }, 900);
    }
}

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
    
    // Agrega efecto de partículas en la sección hero
    setupParticles();
    
    // Añade animación hover a botones
    setupButtonAnimations();
    
    // Inicializa la barra de progreso
    setupScrollProgress();
    
    // Inicializa el indicador de sección activa
    setupActiveSection();
});

// Función para manejar partículas en el fondo (efecto elegante)
function setupParticles() {
    const hero = document.getElementById('hero');
    if (hero) {
        // Crear el contenedor de partículas
        const particlesContainer = document.createElement('div');
        particlesContainer.className = 'particles-container';
        hero.appendChild(particlesContainer);
        
        // Crear 30 partículas
        for (let i = 0; i < 30; i++) {
            const particle = document.createElement('div');
            particle.className = 'particle';
            
            // Posición aleatoria
            const posX = Math.random() * 100;
            const posY = Math.random() * 100;
            
            // Tamaño aleatorio
            const size = Math.random() * 10 + 5;
            
            // Velocidad aleatoria
            const duration = Math.random() * 20 + 10;
            
            particle.style.left = `${posX}%`;
            particle.style.top = `${posY}%`;
            particle.style.width = `${size}px`;
            particle.style.height = `${size}px`;
            particle.style.animationDuration = `${duration}s`;
            
            particlesContainer.appendChild(particle);
        }
    }
}

// Añade animaciones a los botones al pasar el ratón
function setupButtonAnimations() {
    const buttons = document.querySelectorAll('.rsvp-button, .back-link');
    buttons.forEach(button => {
        button.addEventListener('mouseover', function() {
            this.classList.add('pulse');
        });
        button.addEventListener('animationend', function() {
            this.classList.remove('pulse');
        });
    });
}

// Añade una barra de progreso en la parte superior
function setupScrollProgress() {
    // Crear la barra de progreso
    const progressBar = document.createElement('div');
    progressBar.className = 'scroll-progress';
    document.body.appendChild(progressBar);
    
    // Actualizar la barra de progreso al hacer scroll
    window.addEventListener('scroll', () => {
        const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
        const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrolled = (winScroll / height) * 100;
        progressBar.style.width = scrolled + "%";
    });
}

// Resalta la sección activa en el menú
function setupActiveSection() {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('nav ul li a');
    
    window.addEventListener('scroll', () => {
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (window.scrollY >= (sectionTop - sectionHeight / 3)) {
                current = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active-link');
            if (link.getAttribute('href') === '#' + current) {
                link.classList.add('active-link');
            }
        });
    });
}

// Prevenir el desplazamiento cuando el menú está abierto
document.addEventListener("touchmove", function (e) {
    if (document.body.classList.contains("menu-open")) {
        e.preventDefault();
    }
}, { passive: false });

// Efecto de revelación para las secciones
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