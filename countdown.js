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
    if (!element) return;
    
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

// Header scroll effect
document.addEventListener("DOMContentLoaded", function() {
    // Header scroll effect
    window.addEventListener('scroll', function() {
        const header = document.querySelector('.site-header');
        if (header) {
            if (window.scrollY > 50) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        }
    });
    
    // Agrega efecto de partículas en la sección hero
    setupParticles();
    
    // Añade animación hover a botones
    setupButtonAnimations();
    
    // Inicializa la barra de progreso
    setupScrollProgress();
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
            particle.style.opacity = '0.6'; // Asegurar visibilidad
            
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
    // Comprobar si la barra de progreso ya existe (creada por scroll-progress.js)
    if (!document.querySelector('.scroll-progress')) {
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
}


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