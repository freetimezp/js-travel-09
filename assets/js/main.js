function toggleMenu() {
    const toggleBtn = document.querySelector('.menu-bar');
    const menu = document.querySelector('.side-menu');
    const banner = document.querySelector('.banner');

    if (toggleBtn) {
        toggleBtn.addEventListener('click', () => {
            banner.classList.toggle('active');
            menu.classList.toggle('active');
        });
    }
}