// Cosmic Pitstop v2.3 - Master Script

document.addEventListener("DOMContentLoaded", () => {
    const logo = document.querySelector('.logo');
    flickerEffect(logo, 15, 80);  // Updated flicker count and speed

    highlightActiveNav();  // Run navigation highlight
});

// Neon flicker function using opacity for smoother glow
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

// Highlight current page in navigation based on URL
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

// Smooth scroll for in-page anchors (future-proof)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
