// Sistema de traducción para la boda
const translations = {
    es: {
        // Navegación
        'nav.inicio': 'Inicio',
        'nav.informacion': 'Información',
        'nav.cuenta-atras': 'Cuenta Atrás',
        'nav.asistencia': 'Asistencia',
        'nav.lista-regalos': 'Lista de Regalos',
        'nav.ubicacion': 'Ubicación',
        'nav.contacto': 'Contacto',
        
        // Hero
        'hero.title': 'Miguel & Cristina',
        'hero.subtitle': '¡Nos casamos! Acompáñanos en este día tan especial.',
        
        // Información
        'info.title': 'Nuestra Boda',
        'info.date': '2 de Mayo de 2026',
        'info.ceremony': 'Ceremonia',
        'info.reception': 'Celebración',
        'info.time': 'h',
        'info.cocktail-dinner-dance': 'Cóctel, cena y baile',
        'info.until-dawn': 'Hasta la madrugada',
        'info.message': 'Nos hace mucha ilusión compartir este día tan especial con vosotros',
        
        // Cuenta atrás
        'countdown.title': 'Cuenta Atrás',
        'countdown.message': 'Nos vemos en',
        'countdown.days': 'Días',
        'countdown.hours': 'Horas',
        'countdown.minutes': 'Minutos',
        'countdown.seconds': 'Segundos',
        'countdown.final-message': 'para nuestro gran día',
        'countdown.today-message': '¡HOY ES EL GRAN DÍA!',
        'countdown.thanks-message': '¡Gracias por compartir este momento tan especial con nosotros!',
        
        // RSVP
        'rsvp.title': 'Confirma tu Asistencia',
        'rsvp.message': 'Nos encantaría contar con tu presencia en este día tan especial para nosotros.',
        'rsvp.deadline': 'Por favor, confirma tu asistencia antes del',
        'rsvp.deadline-date': '1 de marzo de 2026',
        'rsvp.button': 'Confirmar asistencia',
        'rsvp.alternative': 'Si prefieres confirmar por teléfono, puedes contactarnos directamente',
        
        // Regalos
        'gifts.title': 'Lista de Regalos',
        'gifts.greeting': 'Queridos amigos y familiares,',
        'gifts.message': 'Vuestra presencia en nuestra boda es el mejor regalo que podríamos desear. Sin embargo, si queréis contribuir de alguna otra manera, hemos habilitado un número de cuenta para ayudarnos a comenzar esta nueva etapa juntos.',
        'gifts.contribution': 'Contribución',
        'gifts.contribution-desc': 'Ayúdanos a hacer realidad nuestros sueños',
        'gifts.details': 'Ver detalles',
        'gifts.presence': 'Tu presencia',
        'gifts.presence-desc': 'Compartir este momento con vosotros es nuestro mayor regalo',
        'gifts.signature': 'Con cariño,',
        'gifts.names': 'Miguel y Cristina',
        
        // Ubicación
        'location.title': 'Ubicación',
        'location.intro': 'La boda tendrá lugar en:',
        
        // Contacto
        'contact.title': 'Contacto',
        'contact.message': '¿Tienes preguntas o quieres enviarnos tus mejores deseos?<br>¡Nos encantará leerte!',
        
        // Footer
        'footer.copyright': 'Copyright © 2026 Miguel & Cristina. Todos Los Derechos Reservados',
        
        // Lista de Regalos (página completa)
        'gifts-page.title': 'Lista de Regalos',
        'gifts-page.subtitle': 'Boda de Miguel y Cristina - 2 de mayo de 2026',
        'gifts-page.greeting': 'Queridos familiares y amigos,',
        'gifts-page.message1': 'Estamos muy ilusionados por compartir con vosotros uno de los días más especiales de nuestras vidas. Vuestra presencia en nuestra boda es, sin duda, el mejor regalo que podemos recibir.',
        'gifts-page.message2': 'Para aquellos que habéis preguntado si podéis hacernos algún detalle, hemos habilitado un número de cuenta donde podéis realizar vuestras aportaciones que nos ayudarán a empezar esta nueva etapa juntos.',
        'gifts-page.bank-data': 'Datos bancarios',
        'gifts-page.copy-iban': 'Copiar IBAN',
        'gifts-page.copied': '¡Copiado!',
        'gifts-page.payment-note': 'Si prefieres otro método de pago o tienes alguna duda, no dudes en contactarnos directamente.',
        'gifts-page.thanks': '¡Muchas gracias!',
        'gifts-page.thanks-message': 'Estamos profundamente agradecidos por vuestra generosidad y por formar parte de este momento tan especial. ¡Esperamos celebrar con todos vosotros!',
        'gifts-page.with-love': 'Con todo nuestro cariño,',
        'gifts-page.back': 'Volver a la página principal',
        
        // Asistencia (página completa)
        'rsvp-page.title': 'Confirma tu Asistencia',
        'rsvp-page.subtitle': '¡Nos encantaría contar contigo en nuestro gran día!',
        'rsvp-page.deadline': 'Por favor, confirma antes del',
        'rsvp-page.deadline-date': '1 de marzo de 2026',
        'rsvp-page.email': 'Email',
        'rsvp-page.name': 'Nombre completo',
        'rsvp-page.phone': 'Teléfono',
        'rsvp-page.attending': '¿Asistirás a nuestra boda?',
        'rsvp-page.attending-yes': 'Sí, asistiré',
        'rsvp-page.attending-no': 'No podré asistir',
        'rsvp-page.guests': 'Número de invitados (incluyéndote)',
        'rsvp-page.dietary': '¿Tienes alguna restricción alimentaria?',
        'rsvp-page.dietary-none': 'No, ninguna',
        'rsvp-page.dietary-vegetarian': 'Vegetariano',
        'rsvp-page.dietary-vegan': 'Vegano',
        'rsvp-page.dietary-gluten': 'Sin gluten',
        'rsvp-page.dietary-other': 'Otra',
        'rsvp-page.dietary-specify': 'Por favor, especifica tus restricciones alimentarias:',
        'rsvp-page.message': '¿Te gustaría dejar algún mensaje para los novios?',
        'rsvp-page.submit': 'Confirmar Asistencia',
        'rsvp-page.sending': 'Enviando tu respuesta...',
        'rsvp-page.success-title': '¡Gracias por confirmar tu asistencia!',
        'rsvp-page.success-message1': 'Hemos recibido tu respuesta correctamente.',
        'rsvp-page.success-message2': 'Estamos deseando compartir contigo nuestro día especial.',
        'rsvp-page.error': 'Lo sentimos, ha ocurrido un problema al enviar el formulario. Por favor, inténtalo de nuevo.',
        'rsvp-page.back': '← Volver a la página principal',
        
        // Form Personalizado (página completa)
        'form-page.companion': '¿Llevas acompañante?',
        'form-page.companion-yes': 'Sí',
        'form-page.companion-no': 'No',
        'form-page.companion-name': 'Si llevas acompañante, indícanos el nombre y apellidos',
        'form-page.required-fields': 'Por favor, completa todos los campos requeridos.'
    },
    ca: {
        // Navegación
        'nav.inicio': 'Inici',
        'nav.informacion': 'Informació',
        'nav.cuenta-atras': 'Compte Enrere',
        'nav.asistencia': 'Assistència',
        'nav.lista-regalos': 'Llista de Regals',
        'nav.ubicacion': 'Ubicació',
        'nav.contacto': 'Contacte',
        
        // Hero
        'hero.title': 'Miguel & Cristina',
        'hero.subtitle': 'Ens casem! Acompanyeu-nos en aquest dia tan especial.',
        
        // Información
        'info.title': 'El Nostre Casament',
        'info.date': '2 de Maig de 2026',
        'info.ceremony': 'Cerimònia',
        'info.reception': 'Celebració',
        'info.time': 'h',
        'info.cocktail-dinner-dance': 'Còctel, sopar i ball',
        'info.until-dawn': 'Fins a la matinada',
        'info.message': 'Ens fa molta il·lusió compartir aquest dia tan especial amb vosaltres',
        
        // Cuenta atrás
        'countdown.title': 'Compte Enrere',
        'countdown.message': 'Ens veiem en',
        'countdown.days': 'Dies',
        'countdown.hours': 'Hores',
        'countdown.minutes': 'Minuts',
        'countdown.seconds': 'Segons',
        'countdown.final-message': 'per al nostre gran dia',
        'countdown.today-message': 'AVUI ÉS EL GRAN DIA!',
        'countdown.thanks-message': 'Gràcies per compartir aquest moment tan especial amb nosaltres!',
        
        // RSVP
        'rsvp.title': 'Confirma la Teva Assistència',
        'rsvp.message': 'Ens encantaria comptar amb la teva presència en aquest dia tan especial per a nosaltres.',
        'rsvp.deadline': 'Si us plau, confirma la teva assistència abans del',
        'rsvp.deadline-date': '1 de març de 2026',
        'rsvp.button': 'Confirmar assistència',
        'rsvp.alternative': 'Si prefereixes confirmar per telèfon, pots contactar-nos directament',
        
        // Regalos
        'gifts.title': 'Llista de Regals',
        'gifts.greeting': 'Estimats amics i familiars,',
        'gifts.message': 'La vostra presència al nostre casament és el millor regal que podríem desitjar. Tanmateix, si voleu contribuir d\'alguna altra manera, hem habilitat un número de compte per ajudar-nos a començar aquesta nova etapa junts.',
        'gifts.contribution': 'Contribució',
        'gifts.contribution-desc': 'Ajuda\'ns a fer realitat els nostres somnis',
        'gifts.details': 'Veure detalls',
        'gifts.presence': 'La teva presència',
        'gifts.presence-desc': 'Compartir aquest moment amb vosaltres és el nostre major regal',
        'gifts.signature': 'Amb afecte,',
        'gifts.names': 'Miguel i Cristina',
        
        // Ubicación
        'location.title': 'Ubicació',
        'location.intro': 'El casament tindrà lloc a:',
        
        // Contacto
        'contact.title': 'Contacte',
        'contact.message': 'Tens preguntes o vols enviar-nos els teus millors desitjos?<br>Ens encantarà llegir-te!',
        
        // Footer
        'footer.copyright': 'Copyright © 2026 Miguel & Cristina. Tots els Drets Reservats',
        
        // Lista de Regalos (página completa)
        'gifts-page.title': 'Llista de Regals',
        'gifts-page.subtitle': 'Casament de Miguel i Cristina - 2 de maig de 2026',
        'gifts-page.greeting': 'Estimats familiars i amics,',
        'gifts-page.message1': 'Estem molt il·lusionats per compartir amb vosaltres un dels dies més especials de les nostres vides. La vostra presència al nostre casament és, sens dubte, el millor regal que podem rebre.',
        'gifts-page.message2': 'Per a aquells que heu preguntat si podeu fer-nos algun detall, hem habilitat un número de compte on podeu realitzar les vostres aportacions que ens ajudaran a començar aquesta nova etapa junts.',
        'gifts-page.bank-data': 'Dades bancàries',
        'gifts-page.copy-iban': 'Copiar IBAN',
        'gifts-page.copied': 'Copiat!',
        'gifts-page.payment-note': 'Si prefereixes un altre mètode de pagament o tens algun dubte, no dubtis a contactar-nos directament.',
        'gifts-page.thanks': 'Moltes gràcies!',
        'gifts-page.thanks-message': 'Estem profundament agraïts per la vostra generositat i per formar part d\'aquest moment tan especial. Esperem celebrar amb tots vosaltres!',
        'gifts-page.with-love': 'Amb tot el nostre afecte,',
        'gifts-page.back': 'Tornar a la pàgina principal',
        
        // Asistencia (página completa)
        'rsvp-page.title': 'Confirma la Teva Assistència',
        'rsvp-page.subtitle': 'Ens encantaria comptar amb tu en el nostre gran dia!',
        'rsvp-page.deadline': 'Si us plau, confirma abans del',
        'rsvp-page.deadline-date': '1 de març de 2026',
        'rsvp-page.email': 'Correu electrònic',
        'rsvp-page.name': 'Nom complet',
        'rsvp-page.phone': 'Telèfon',
        'rsvp-page.attending': 'Assistiràs al nostre casament?',
        'rsvp-page.attending-yes': 'Sí, assistiré',
        'rsvp-page.attending-no': 'No podré assistir',
        'rsvp-page.guests': 'Nombre d\'invitats (incloent-te)',
        'rsvp-page.dietary': 'Tens alguna restricció alimentària?',
        'rsvp-page.dietary-none': 'No, cap',
        'rsvp-page.dietary-vegetarian': 'Vegetarià',
        'rsvp-page.dietary-vegan': 'Vegà',
        'rsvp-page.dietary-gluten': 'Sense gluten',
        'rsvp-page.dietary-other': 'Altres',
        'rsvp-page.dietary-specify': 'Si us plau, especifica les teves restriccions alimentàries:',
        'rsvp-page.message': 'T\'agradaria deixar algun missatge per als nuvis?',
        'rsvp-page.submit': 'Confirmar Assistència',
        'rsvp-page.sending': 'Enviant la teva resposta...',
        'rsvp-page.success-title': 'Gràcies per confirmar la teva assistència!',
        'rsvp-page.success-message1': 'Hem rebut la teva resposta correctament.',
        'rsvp-page.success-message2': 'Estem desitjant compartir amb tu el nostre dia especial.',
        'rsvp-page.error': 'Ho sentim, ha ocorregut un problema en enviar el formulari. Si us plau, torna-ho a intentar.',
        'rsvp-page.back': '← Tornar a la pàgina principal',
        
        // Form Personalizado (página completa)
        'form-page.companion': 'Portes acompanyant?',
        'form-page.companion-yes': 'Sí',
        'form-page.companion-no': 'No',
        'form-page.companion-name': 'Si portes acompanyant, indica\'ns el nom i cognoms',
        'form-page.required-fields': 'Si us plau, completa tots els camps requerits.'
    }
};

// Función para obtener el idioma actual
function getCurrentLanguage() {
    const savedLang = localStorage.getItem('wedding-language');
    return savedLang || 'es'; // Por defecto español
}

// Función para cambiar el idioma
function setLanguage(lang) {
    localStorage.setItem('wedding-language', lang);
    document.documentElement.lang = lang;
    applyTranslations(lang);
    
    // Disparar evento personalizado para que otros scripts sepan que cambió el idioma
    const event = new CustomEvent('languageChanged', { detail: { language: lang } });
    document.dispatchEvent(event);
}

// Función para aplicar las traducciones
function applyTranslations(lang) {
    const elements = document.querySelectorAll('[data-i18n]');
    elements.forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (translations[lang] && translations[lang][key]) {
            if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                element.placeholder = translations[lang][key];
            } else {
                element.innerHTML = translations[lang][key];
            }
        }
    });
    
    // Actualizar el selector de idioma
    const langSelector = document.querySelector('.language-selector');
    if (langSelector) {
        const buttons = langSelector.querySelectorAll('button');
        buttons.forEach(btn => {
            btn.classList.remove('active');
            if (btn.getAttribute('data-lang') === lang) {
                btn.classList.add('active');
            }
        });
    }
}

// Inicializar traducciones al cargar la página
document.addEventListener('DOMContentLoaded', function() {
    const currentLang = getCurrentLanguage();
    setLanguage(currentLang);
    
    // Añadir event listeners a los botones de idioma
    const langButtons = document.querySelectorAll('.language-selector button');
    langButtons.forEach(button => {
        button.addEventListener('click', function() {
            const lang = this.getAttribute('data-lang');
            setLanguage(lang);
        });
    });
});

