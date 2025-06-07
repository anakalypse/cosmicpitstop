document.addEventListener("DOMContentLoaded", () => {
    highlightActiveNav();
});

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
