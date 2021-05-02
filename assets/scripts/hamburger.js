const header = document.querySelector('header');
const hamburgerBtn = document.querySelector('.hamburger');
const mobileNav = document.querySelector('.nav-container');

hamburgerBtn.addEventListener('click', openNav);

function openNav() {
    mobileNav.classList.toggle('show');
    hamburgerBtn.classList.toggle('open');
    if (hamburgerBtn.classList.contains('open')) {
        header.style.boxShadow = '0 200px 150px 200px hsla(233, 26%, 24%, .6)';
    } else {
        header.style.boxShadow = 'none';
    }
}