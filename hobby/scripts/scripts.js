// JavaScript to handle section switching
document.addEventListener('DOMContentLoaded', () => {
    const links = document.querySelectorAll('nav a');
    const sections = document.querySelectorAll('section');

    links.forEach((link) => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            sections.forEach((section) => section.classList.remove('active'));
            document.querySelector(link.getAttribute('href')).classList.add('active');
        });
    });

    // Show the 'home' section by default
    document.querySelector('#home').classList.add('active');
});