// menu.js - Lógica unificada del menú lateral para todas las páginas
document.addEventListener("DOMContentLoaded", function() {
    const menuToggle = document.getElementById('menu-toggle');
    const menu = document.getElementById('menu');
    const menuOverlay = document.getElementById('menu-overlay');
    const body = document.body;
    
    // Verificar que los elementos existan
    if (!menuToggle || !menu || !menuOverlay) {
        console.warn('Menu elements not found');
        return;
    }
    
    // Asegurar que el menú esté oculto inicialmente
    menu.classList.add('hidden');
    
    // Función para abrir el menú
    function openMenu() {
        menu.classList.remove('hidden');
        menuToggle.classList.add('active');
        menu.classList.add('active');
        menuOverlay.classList.add('active');
        body.classList.add('menu-open');
        body.style.overflow = 'hidden'; // Prevenir scroll del body
    }
    
    // Función para cerrar el menú
    function closeMenu() {
        menuToggle.classList.remove('active');
        menu.classList.remove('active');
        menuOverlay.classList.remove('active');
        body.classList.remove('menu-open');
        body.style.overflow = ''; // Restaurar scroll del body
        
        // Ocultar el menú después de la transición
        setTimeout(() => {
            if (!menu.classList.contains('active')) {
                menu.classList.add('hidden');
            }
        }, 500); // Mismo tiempo que la duración de la transición en CSS
    }
    
    // Toggle del menú al hacer click en el logo M&C
    menuToggle.addEventListener('click', function(e) {
        e.stopPropagation();
        if (menu.classList.contains('active')) {
            closeMenu();
        } else {
            openMenu();
        }
    });
    
    // Cerrar el menú al hacer click en el overlay
    menuOverlay.addEventListener('click', function() {
        closeMenu();
    });
    
    // Manejar clicks en los enlaces del menú
    const menuLinks = menu.querySelectorAll('li a');
    menuLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            
            // Si es un enlace a otra página (index.html#...), navegar normalmente
            if (href && href.includes('.html')) {
                // Permitir navegación normal, solo cerrar el menú
                closeMenu();
                return; // No prevenir el comportamiento por defecto
            }
            
            // Si es un ancla dentro de la misma página (#seccion), hacer scroll suave
            if (href && href.startsWith('#')) {
                e.preventDefault();
                closeMenu();
                
                const targetId = href.substring(1);
                const targetSection = document.getElementById(targetId);
                
                if (targetSection) {
                    // Scroll suave a la sección
                    targetSection.scrollIntoView({ 
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            } else {
                // Para otros enlaces, cerrar el menú y permitir navegación normal
                closeMenu();
            }
        });
    });
    
    // Prevenir scroll cuando el menú está abierto (especialmente en móvil)
    document.addEventListener("touchmove", function (e) {
        if (body.classList.contains("menu-open")) {
            e.preventDefault();
        }
    }, { passive: false });
    
    // Cerrar el menú al presionar ESC
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && menu.classList.contains('active')) {
            closeMenu();
        }
    });
});

