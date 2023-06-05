const menuHamburger = document.querySelector(".menu-icon");
const navLinks = document.querySelector(".nav-links");

menuHamburger.addEventListener('click',()=>{
    navLinks.classList.toggle('mobile-menu')
});