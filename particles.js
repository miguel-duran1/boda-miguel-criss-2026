// Script dedicado para las partículas en el hero
document.addEventListener("DOMContentLoaded", function() {
    const hero = document.getElementById('hero');
    
    if (!hero) return;
    
    // Verificar si ya existe un contenedor de partículas
    let particlesContainer = hero.querySelector('.particles-container');
    
    // Si no existe, crearlo
    if (!particlesContainer) {
        particlesContainer = document.createElement('div');
        particlesContainer.className = 'particles-container';
        hero.insertBefore(particlesContainer, hero.firstChild); // Insertar al principio para que esté detrás de todo
    }
    
    // Limpiar partículas existentes
    particlesContainer.innerHTML = '';
    
    // Crear partículas
    const particleCount = 40; // Aumentar la cantidad para hacerlas más visibles
    
    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        
        // Posición aleatoria
        const posX = Math.random() * 100;
        const posY = Math.random() * 100;
        
        // Tamaño aleatorio (un poco más grandes)
        const size = Math.random() * 15 + 5;
        
        // Velocidad aleatoria
        const duration = Math.random() * 15 + 10;
        
        // Aplicar estilos
        particle.style.left = `${posX}%`;
        particle.style.top = `${posY}%`;
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;
        particle.style.animationDuration = `${duration}s`;
        particle.style.opacity = Math.random() * 0.5 + 0.3; // Mayor opacidad
        
        // Añadir al contenedor
        particlesContainer.appendChild(particle);
    }
    
    console.log("Partículas inicializadas: " + particleCount);
}); 