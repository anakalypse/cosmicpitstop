// Neon flicker effect on logo text
document.addEventListener("DOMContentLoaded", () => {
    const logo = document.querySelector('.logo');
    flickerEffect(logo, 10, 100);

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
    const path = window.location.pathname;
    const navLinks = document.querySelectorAll('.navigation a');

    navLinks.forEach(link => {
        const href = link.getAttribute('href');
        if (href !== '#' && path.includes(href)) {
            link.classList.add('active');
        }
    });
}

// Optional smooth scroll for future in-page anchors
document.querySelectorAll('a[href^=\"#\"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
