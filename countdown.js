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

// Manejo del menú con el logo M&C
document.addEventListener("DOMContentLoaded", function() {
    const menuToggle = document.getElementById('menu-toggle');
    const menu = document.getElementById('menu');
    const menuOverlay = document.getElementById('menu-overlay');
    const body = document.body;
    const header = document.querySelector('.site-header');
    const menuItems = document.querySelectorAll('nav ul li a');
    
    if (!menuToggle || !menu || !menuOverlay) return;
    
    // Toggle menu
    menuToggle.addEventListener('click', function() {
        menuToggle.classList.toggle('active');
        menu.classList.toggle('active');
        menuOverlay.classList.toggle('active');
        body.classList.toggle('menu-open');
    });
    
    // Close menu when clicking overlay
    menuOverlay.addEventListener('click', function() {
        closeMenu();
    });
    
    // Close menu when clicking a menu item
    menuItems.forEach(item => {
        item.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href.startsWith('#')) {
                e.preventDefault();
                closeMenu();
                
                // Scroll suave a la sección
                const targetId = href.substring(1);
                const targetSection = document.getElementById(targetId);
                
                if (targetSection) {
                    targetSection.scrollIntoView({ 
                        behavior: 'smooth'
                    });
                }
            }
        });
    });
    
    // Función para cerrar el menú
    function closeMenu() {
        // Asegurar que el logo vuelva a su estado original
        menuToggle.classList.remove('active');
        
        // Ocultar el menú y overlay
        menu.classList.remove('active');
        menuOverlay.classList.remove('active');
        body.classList.remove('menu-open');
        
        // Forzar reflow para asegurar que los cambios visuales se apliquen
        void menuToggle.offsetWidth;
    }
    
    // Header scroll effect
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
    
    // Highlight active section in menu
    function setActiveMenuItem() {
        const scrollPosition = window.scrollY;
        
        document.querySelectorAll('section').forEach(section => {
            const sectionTop = section.offsetTop - 100;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');
            
            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                menuItems.forEach(item => {
                    item.classList.remove('active');
                    if (item.getAttribute('href') === `#${sectionId}`) {
                        item.classList.add('active');
                    }
                });
            }
        });
    }
    
    window.addEventListener('scroll', setActiveMenuItem);
    setActiveMenuItem(); // Set active on page load
    
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