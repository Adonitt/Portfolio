function toggleMenu() {
    const nav = document.querySelector('.nav');
    nav.classList.toggle('active');
}

function closeNav() {
    const nav = document.querySelector('.nav');
    nav.classList.remove('active');  // This closes the nav

    const line = document.querySelector('.line');
    line.classList.remove('active');
}

document.addEventListener('click', function (event) {
    const nav = document.querySelector('.nav');
    const burgerMenu = document.querySelector('.burger-menu');
    // burgerMenu.style.classList.display('hidden');

    if (!nav.contains(event.target) && !burgerMenu.contains(event.target)) {
        nav.classList.remove('active');
        const line = document.querySelector('.line');
        line.classList.remove('active');
    }
});


