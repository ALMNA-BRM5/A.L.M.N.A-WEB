// Archivo JS para la Landing Page A.L.M.N.A

document.addEventListener('DOMContentLoaded', () => {
    // Referencias a elementos del DOM
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const mobileMenu = document.querySelector('.mobile-menu');
    const closeTooltipBtn = document.querySelector('.close-tooltip');
    const helpTooltip = document.querySelector('.help-tooltip');

    // Toggle para el menú móvil
    if (mobileMenuBtn && mobileMenu) {
        mobileMenuBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('active');
            
            // Animación del ícono de menú (opcional)
            const isOpen = mobileMenu.classList.contains('active');
            if (isOpen) {
                mobileMenuBtn.innerHTML = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>';
            } else {
                mobileMenuBtn.innerHTML = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>';
            }
        });
    }

    // Cerrar tooltip del chat
    if (closeTooltipBtn && helpTooltip) {
        closeTooltipBtn.addEventListener('click', () => {
            helpTooltip.style.display = 'none';
        });
    }

    // Pequeño efecto parallax en el fondo del hero
    window.addEventListener('scroll', () => {
        const scrolled = window.scrollY;
        const heroBg = document.querySelector('.hero-bg');
        if (heroBg) {
            heroBg.style.transform = `translateY(${scrolled * 0.4}px)`;
        }
    });
});
