export function initHeader() {
    const header = document.querySelector('.site-header');
    const menuButton = header?.querySelector('.menu-toggle');
    const navigation = header?.querySelector('.main-navigation');

    if (!header || !menuButton || !navigation) {
        return;
    }

    const mobileBreakpoint = window.matchMedia('(max-width: 768px)');

    function setMenuState(isOpen) {
        menuButton.setAttribute('aria-expanded', String(isOpen));
        menuButton.setAttribute(
            'aria-label',
            isOpen ? 'Fechar menu' : 'Abrir menu'
        );

        navigation.classList.toggle('is-open', isOpen);
    }

    menuButton.addEventListener('click', () => {
        const isOpen =
            menuButton.getAttribute('aria-expanded') === 'true';

        setMenuState(!isOpen);
    });

    navigation.addEventListener('click', (event) => {
        const clickedLink = event.target.closest('a');

        if (clickedLink && mobileBreakpoint.matches) {
            setMenuState(false);
        }
    });

    document.addEventListener('click', (event) => {
        const clickedOutsideHeader = !event.target.closest('.site-header');

        if (clickedOutsideHeader && mobileBreakpoint.matches) {
            setMenuState(false);
        }
    });

    document.addEventListener('keydown', (event) => {
        const isOpen =
            menuButton.getAttribute('aria-expanded') === 'true';

        if (event.key === 'Escape' && isOpen) {
            setMenuState(false);
            menuButton.focus();
        }
    });

    mobileBreakpoint.addEventListener('change', () => {
        setMenuState(false);
    });
}