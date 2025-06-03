// Neon flicker effect on logo text
document.addEventListener("DOMContentLoaded", () => {
    const logo = document.querySelector('.logo');
    flickerEffect(logo, 10, 100);
});

// Flicker function: element, flicker count, flicker speed
function flickerEffect(element, times, speed) {
    let flickers = 0;
    const interval = setInterval(() => {
        if (element.style.visibility === 'hidden') {
            element.style.visibility = 'visible';
        } else {
            element.style.visibility = 'hidden';
        }
        flickers++;
        if (flickers >= times * 2) {
            element.style.visibility = 'visible';
            clearInterval(interval);
        }
    }, speed);
}

// Future expansion: you can add interactive nav, booking forms, etc.
