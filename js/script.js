const menuHamburger = document.querySelector(".menu-icon");
const navLinks = document.querySelector(".nav-links");

menuHamburger.addEventListener('click',()=>{
    navLinks.classList.toggle('mobile-menu')
});


window.addEventListener('scroll',function reveal(){
    var reveals = document.querySelectorAll('.reveal');

    for(var i = 0; i < reveals.length; i++){

        var windowheight = window.innerHeight;
        var revealtop = reveals[i].getBoundingClientRect().top;
        var revealpoint = 150;

        if(revealtop < windowheight - revealpoint){
            reveals[i].classList.add('active');
        }
        else{
            reveals[i].classList.remove('active');
        }
    }
} );