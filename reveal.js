// Script para el efecto de revelación de secciones al hacer scroll
document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll("section");

    const observerOptions = {
        threshold: 0.1, // Porcentaje del elemento visible para activar
        rootMargin: "0px 0px -50px 0px" // Margen negativo para activar antes
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Añadir un pequeño retraso aleatorio para cada sección
                const delay = Math.random() * 200;
                setTimeout(() => {
                    entry.target.classList.add("visible");
                }, delay);
                observer.unobserve(entry.target); // Dejar de observar una vez que se ha mostrado
            }
        });
    }, observerOptions);

    // Observar cada sección
    sections.forEach(section => {
        observer.observe(section);
    });

    console.log("Efecto de revelación inicializado para", sections.length, "secciones");
}); 