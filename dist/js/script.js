// Navbar Scroll
window.onscroll = function() {
    const header = document.querySelector('header');
    const fixedNavbar = header.offsetTop;

    if(window.pageYOffset > fixedNavbar) {
        header.classList.add('navbar-fixed');
    } else {
        header.classList.remove('navbar-fixed');
    }
}

// Hamburger
const hamburger = document.querySelector('#hamburger');
const navMenu = document.querySelector('#nav-menu');

hamburger.addEventListener('click',function() {
    hamburger.classList.toggle('hamburger-active');
    navMenu.classList.toggle('hidden');
})

// Darkmode toggle
const darkToggle = document.querySelector('#dark-toggle');
const html = document.querySelector('html');

darkToggle.addEventListener('click',function() {
    if(darkToggle.checked) {
        html.classList.add('dark');
        localStorage.theme = 'dark';
    } else {
        html.classList.remove('dark');
        localStorage.theme = 'light';
    }
});

// On page load or when changing themes, best to add inline in `head` to avoid FOUC
if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    darkToggle.checked = true;
} else {
    darkToggle.checked = false;
}