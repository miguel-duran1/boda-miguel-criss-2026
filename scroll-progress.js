// Barra de progreso para todas las páginas
document.addEventListener("DOMContentLoaded", function() {
    // Crear la barra de progreso si no existe
    if (!document.querySelector('.scroll-progress')) {
        const progressBar = document.createElement('div');
        progressBar.className = 'scroll-progress';
        document.body.appendChild(progressBar);
    }
    
    // Actualizar la barra de progreso al hacer scroll
    window.addEventListener('scroll', () => {
        const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
        const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrolled = (winScroll / height) * 100;
        document.querySelector('.scroll-progress').style.width = scrolled + "%";
    });
    
    console.log("Barra de progreso inicializada");
}); 