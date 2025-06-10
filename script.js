document.addEventListener('DOMContentLoaded', () => {

    // ===== Efecto de scroll en el Header =====
    const header = document.querySelector('.header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // ===== Animación de elementos al hacer scroll (Intersection Observer) =====
    const revealElements = document.querySelectorAll('.reveal');

    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            // Si el elemento es visible en la pantalla
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                // Dejamos de observar el elemento una vez que es visible para optimizar
                observer.unobserve(entry.target);
            }
        });
    }, {
        root: null, // viewport
        threshold: 0.1, // El 10% del elemento debe ser visible
        rootMargin: '0px 0px -50px 0px' // Se activa un poco antes de que llegue al fondo
    });

    revealElements.forEach(element => {
        revealObserver.observe(element);
    });

});
