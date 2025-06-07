document.addEventListener("DOMContentLoaded", () => {
    const logo = document.querySelector('.logo a');
    flickerEffect(logo, 5, 150);
    highlightActiveNav();
});

function flickerEffect(element, times, speed) {
    let flickers = 0;
    const interval = setInterval(() => {
        element.style.opacity = (element.style.opacity === '0') ? '1' : '0';
        flickers++;
        if (flickers >= times * 2) {
            element.style.opacity = '1';
            clearInterval(interval);
        }
    }, speed);
}

function highlightActiveNav() {
    const path = window.location.pathname;
    const navLinks = document.querySelectorAll('.navigation a');
    navLinks.forEach(link => {
        const href = link.getAttribute('href');
        if (href !== '#' && path.includes(href)) {
            link.classList.add('active');
        }
    });
}
