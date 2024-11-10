document.addEventListener("DOMContentLoaded", function() {
    // Manejador de pestañas
    const tabs = document.querySelectorAll('.tab');
    const tabContents = document.querySelectorAll('.tab-content');
    const catalogLinks = document.querySelectorAll('.menu-item .dropdown a');
    const contactLinks = document.querySelectorAll('.menu-item.contact .dropdown a');

    // Cambio de pestaña al hacer clic
    tabs.forEach(tab => {
        tab.addEventListener('click', function() {
            activateTab(tab.id);
        });
    });

    // Manejo de enlaces del catálogo
    catalogLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            if (!this.getAttribute('href').includes('.pdf')) {
                event.preventDefault();
                const targetId = this.getAttribute('href').substring(1);
                activateTab(targetId.replace('-content', ''));
                document.getElementById(targetId).scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    // Manejo de enlaces de contacto
    contactLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            const href = this.getAttribute('href');
            if (href.startsWith('https://wa.me/')) {
                event.preventDefault();
                const message = "Hola. Revisé tu página y tengo interés en algunas persianas.";
                window.location.href = `${href}?text=${encodeURIComponent(message)}`;
            }
        });
    });

    // Manejo de enlaces de "Me interesa" con número de WhatsApp fijo
const buttonsMeInteresa = document.querySelectorAll('.me-interesa-btn');

buttonsMeInteresa.forEach(button => {
    button.addEventListener('click', function(event) {
        const message = this.getAttribute('data-message');
        const waUrl = `https://wa.me/525591916676?text=${encodeURIComponent(message)}`;
        window.location.href = waUrl;
    });
});

    // Función para activar pestaña
    function activateTab(tabId) {
        tabs.forEach(t => t.classList.remove('active'));
        tabContents.forEach(content => content.style.display = 'none');
        document.getElementById(tabId).classList.add('active');
        document.getElementById(tabId + '-content').style.display = 'block';
    }

    // Mostrar automáticamente la cuadrícula de Elegancia por defecto
    activateTab('elegancia');

    // Manejador para el botón de arquitectos
    const arquitectosButton = document.getElementById('arquitectos-button');

    if (arquitectosButton) {
        arquitectosButton.addEventListener('click', function() {
            alert("¡Aprovecha nuestros descuentos exclusivos para grandes proyectos! Cierra la pestaña y contacta con nosotros");
            const whatsappUrl = "https://wa.me/5591916676?text=Hola,%20soy%20Arquitecto/Decorador%20y%20tengo%20interés%20en%20los%20precios%20preferenciales";
            window.open(whatsappUrl, '_blank');
        });
    }

    // Mostrar aviso de cookies
    const cookieConsent = document.getElementById('cookie-consent');
    const acceptCookiesButton = document.getElementById('accept-cookies');
    const cookiePolicyLink = document.getElementById('cookie-policy-link');
    const cookieModal = document.getElementById('cookieModal');
    const closeCookieModal = document.getElementById('close-cookie-modal');
    const acceptCookieButton = document.getElementById('accept-cookies');

    if (!localStorage.getItem('cookies-accepted')) {
        cookieConsent.style.display = 'block';
    }

    acceptCookiesButton.addEventListener('click', function() {
        localStorage.setItem('cookies-accepted', 'true');
        cookieConsent.style.display = 'none';
    });

    cookiePolicyLink.addEventListener('click', function(event) {
        event.preventDefault();
        cookieModal.style.display = 'block';
    });

    closeCookieModal.addEventListener('click', function() {
        cookieModal.style.display = 'none';
    });

    acceptCookieButton.addEventListener('click', function() {
        localStorage.setItem('cookies-accepted', 'true');
        cookieModal.style.display = 'none';
    });

    window.addEventListener('click', function(event) {
        if (event.target === cookieModal) {
            cookieModal.style.display = 'none';
        }
    });

    // Mostrar aviso de privacidad
    const privacyPolicyLink = document.getElementById('privacy-policy-link');
    const privacyPolicyModal = document.getElementById('privacy-policy-modal');
    const closePrivacyPolicyModal = privacyPolicyModal.querySelector('.close');

    privacyPolicyLink.addEventListener('click', function(event) {
        event.preventDefault();
        privacyPolicyModal.style.display = 'block';
    });

    closePrivacyPolicyModal.addEventListener('click', function() {
        privacyPolicyModal.style.display = 'none';
    });

    window.addEventListener('click', function(event) {
        if (event.target === privacyPolicyModal) {
            privacyPolicyModal.style.display = 'none';
        }
    });
});