// Neon flicker effect on logo text
document.addEventListener("DOMContentLoaded", () => {
    const logoText = document.querySelector('.logo a');
    if (logoText) {
        flickerEffect(logoText, 10, 100);
    }

    // Run navigation highlight
    highlightActiveNav();
});

// Flicker function: element, flicker count, flicker speed
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

// Highlight the current page in navigation
function highlightActiveNav() {
    const path = window.location.pathname.split("/").pop();
    const navLinks = document.querySelectorAll('.navigation a');

    navLinks.forEach(link => {
        const href = link.getAttribute('href');
        if (href === path || (path === "" && href === "index.html")) {
            link.classList.add('active');
        }
    });
}
