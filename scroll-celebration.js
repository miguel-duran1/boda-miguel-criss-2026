// Efecto de celebración al hacer scroll hacia abajo
document.addEventListener("DOMContentLoaded", function() {
    let lastScrollTop = 0;
    let scrollTimeout = null;
    let isScrollingDown = false;
    
    // Colores para las estrellas/fuegos artificiales (tema de boda)
    const colors = ['#FFD700', '#FFA500', '#FF6B9D', '#FFB6C1', '#D8B48C', '#A67B5B', '#FFF8DC', '#FFE4E1', '#FFC0CB', '#FFE5B4'];
    
    // Función para crear una estrella/fuego artificial
    function createCelebrationParticle(x, y, direction = null) {
        const particle = document.createElement('div');
        particle.className = 'celebration-particle';
        
        // Color aleatorio
        const color = colors[Math.floor(Math.random() * colors.length)];
        particle.style.color = color;
        
        // Tamaño aleatorio (más grande y visible)
        const size = Math.random() * 20 + 15;
        particle.style.fontSize = `${size}px`;
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;
        particle.style.lineHeight = `${size}px`;
        
        // Añadir el símbolo de estrella
        particle.textContent = '★';
        
        // Posición inicial
        particle.style.left = `${x}px`;
        particle.style.top = `${y}px`;
        
        // Rotación inicial aleatoria (se usará en la animación)
        const initialRotation = Math.random() * 360;
        
        // Ángulo aleatorio para la dispersión en todas las direcciones
        let angle;
        if (direction === 'from-top') {
            // Desde arriba, dispersión hacia abajo y lados (0 a 180 grados)
            angle = Math.random() * Math.PI; // 0 a π (hacia abajo)
        } else if (direction === 'from-left') {
            // Desde la izquierda, dispersión hacia la derecha (-90 a 90 grados)
            angle = Math.random() * Math.PI - Math.PI / 2; // -π/2 a π/2
        } else if (direction === 'from-right') {
            // Desde la derecha, dispersión hacia la izquierda (90 a 270 grados)
            angle = Math.random() * Math.PI + Math.PI / 2; // π/2 a 3π/2
        } else {
            // Dispersión completa en todas las direcciones
            angle = Math.random() * Math.PI * 2;
        }
        
        const velocity = Math.random() * 200 + 100; // Mayor velocidad para más dinamismo
        const vx = Math.cos(angle) * velocity;
        const vy = Math.sin(angle) * velocity;
        
        // Duración aleatoria de la animación (más tiempo para disfrutar el efecto)
        const duration = Math.random() * 2.5 + 2.5; // 2.5-5 segundos
        particle.style.setProperty('--vx', `${vx}px`);
        particle.style.setProperty('--vy', `${vy}px`);
        particle.style.setProperty('--initial-rotation', `${initialRotation}deg`);
        particle.style.animationDuration = `${duration}s`;
        
        // Añadir al body
        document.body.appendChild(particle);
        
        // Remover después de la animación
        setTimeout(() => {
            if (particle.parentNode) {
                particle.parentNode.removeChild(particle);
            }
        }, duration * 1000);
    }
    
    // Función para crear múltiples partículas (efecto de fuego artificial)
    function createFirework(x, y, direction = null) {
        const particleCount = Math.floor(Math.random() * 20 + 25); // 25-45 partículas (mucho más visible)
        
        for (let i = 0; i < particleCount; i++) {
            setTimeout(() => {
                createCelebrationParticle(x, y, direction);
            }, i * 5); // Delay más corto para efecto más compacto
        }
    }
    
    // Función para crear estrellas grandes y brillantes
    function createStarBurst(x, y, direction = null) {
        const starCount = Math.floor(Math.random() * 8 + 12); // 12-20 estrellas grandes
        
        for (let i = 0; i < starCount; i++) {
            setTimeout(() => {
                const particle = document.createElement('div');
                particle.className = 'celebration-particle star-burst';
                
                const color = colors[Math.floor(Math.random() * colors.length)];
                particle.style.color = color;
                
                // Estrellas más grandes
                const size = Math.random() * 30 + 20;
                particle.style.fontSize = `${size}px`;
                particle.style.width = `${size}px`;
                particle.style.height = `${size}px`;
                particle.style.lineHeight = `${size}px`;
                
                // Añadir el símbolo de estrella
                particle.textContent = '★';
                
                particle.style.left = `${x}px`;
                particle.style.top = `${y}px`;
                
                // Rotación inicial aleatoria (se usará en la animación)
                const initialRotation = Math.random() * 360;
                
                // Dispersión en todas las direcciones
                let angle;
                if (direction === 'from-top') {
                    // Desde arriba, dispersión hacia abajo
                    angle = Math.random() * Math.PI; // 0 a π
                } else if (direction === 'from-left') {
                    // Desde la izquierda, dispersión hacia la derecha
                    angle = Math.random() * Math.PI - Math.PI / 2; // -π/2 a π/2
                } else if (direction === 'from-right') {
                    // Desde la derecha, dispersión hacia la izquierda
                    angle = Math.random() * Math.PI + Math.PI / 2; // π/2 a 3π/2
                } else {
                    // Dispersión completa en todas las direcciones
                    angle = Math.random() * Math.PI * 2;
                }
                
                const velocity = Math.random() * 180 + 120;
                const vx = Math.cos(angle) * velocity;
                const vy = Math.sin(angle) * velocity;
                
                const duration = Math.random() * 2 + 3; // 3-5 segundos
                particle.style.setProperty('--vx', `${vx}px`);
                particle.style.setProperty('--vy', `${vy}px`);
                particle.style.setProperty('--initial-rotation', `${initialRotation}deg`);
                particle.style.animationDuration = `${duration}s`;
                
                document.body.appendChild(particle);
                
                setTimeout(() => {
                    if (particle.parentNode) {
                        particle.parentNode.removeChild(particle);
                    }
                }, duration * 1000);
            }, i * 15);
        }
    }
    
    // Detectar scroll hacia abajo
    window.addEventListener('scroll', function() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        // Determinar si está haciendo scroll hacia abajo
        if (scrollTop > lastScrollTop && scrollTop > 100) {
            // Scroll hacia abajo
            if (!isScrollingDown) {
                isScrollingDown = true;
            }
            
            // Limpiar timeout anterior
            if (scrollTimeout) {
                clearTimeout(scrollTimeout);
            }
            
            // Crear efecto después de un pequeño delay para evitar demasiadas partículas
            scrollTimeout = setTimeout(() => {
                // Determinar dirección de origen aleatoria
                const directionType = Math.random();
                let direction = null;
                let x, y;
                
                if (directionType > 0.75) {
                    // Desde arriba (25%)
                    direction = 'from-top';
                    x = window.innerWidth / 2 + (Math.random() - 0.5) * 600;
                    y = scrollTop + 50 + Math.random() * 100;
                } else if (directionType > 0.5) {
                    // Desde la izquierda (25%)
                    direction = 'from-left';
                    x = 50 + Math.random() * 100;
                    y = scrollTop + window.innerHeight / 2 + (Math.random() - 0.5) * 400;
                } else if (directionType > 0.25) {
                    // Desde la derecha (25%)
                    direction = 'from-right';
                    x = window.innerWidth - 50 - Math.random() * 100;
                    y = scrollTop + window.innerHeight / 2 + (Math.random() - 0.5) * 400;
                } else {
                    // Desde el centro (25%) - dispersión completa
                    x = window.innerWidth / 2 + (Math.random() - 0.5) * 400;
                    y = scrollTop + window.innerHeight / 2 + (Math.random() - 0.5) * 300;
                }
                
                // Crear efectos más frecuentemente y variados
                const effectType = Math.random();
                
                if (effectType > 0.6) {
                    // Fuegos artificiales grandes (40% de las veces)
                    createFirework(x, y, direction);
                } else if (effectType > 0.3) {
                    // Estallidos de estrellas grandes (30% de las veces)
                    createStarBurst(x, y, direction);
                } else {
                    // Múltiples estrellas individuales (30% de las veces)
                    const starCount = Math.floor(Math.random() * 8 + 6); // 6-14 estrellas
                    for (let i = 0; i < starCount; i++) {
                        setTimeout(() => {
                            const starX = x + (Math.random() - 0.5) * 600;
                            const starY = y + (Math.random() - 0.5) * 400;
                            createCelebrationParticle(starX, starY, direction);
                        }, i * 20);
                    }
                }
            }, 50); // Delay más corto para efectos más frecuentes
        } else {
            // Scroll hacia arriba o sin movimiento
            isScrollingDown = false;
        }
        
        lastScrollTop = scrollTop;
    }, { passive: true });
    
    console.log("Efecto de celebración al scroll inicializado");
});

