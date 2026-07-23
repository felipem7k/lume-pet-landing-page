const menuButton = document.querySelector('.menu-toggle');
const navigation = document.querySelector('.main-navigation');
const mobileBreakpoint = window.matchMedia('(max-width: 768px)');

function setMenuState(isOpen) {
    menuButton.setAttribute('aria-expanded', String(isOpen));
    menuButton.setAttribute('aria-label', isOpen ? 'Fechar menu' : 'Abrir menu');
    navigation.classList.toggle('is-open', isOpen);
}

menuButton.addEventListener('click', () => {
    const isOpen = menuButton.getAttribute('aria-expanded') === 'true';
    setMenuState(!isOpen);
});

navigation.addEventListener('click', (event) => {
    if (event.target.closest('a') && mobileBreakpoint.matches) {
        setMenuState(false);
    }
});

document.addEventListener('click', (event) => {
    if (!event.target.closest('.site-header') && mobileBreakpoint.matches) {
        setMenuState(false);
    }
});

document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && menuButton.getAttribute('aria-expanded') === 'true') {
        setMenuState(false);
        menuButton.focus();
    }
});

mobileBreakpoint.addEventListener('change', () => setMenuState(false));
