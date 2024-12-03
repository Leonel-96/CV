let typed = new Typed('.auto-typing', {
    strings: ["Ingénieur en expertise informatique et système d'information.",'Dévéloppeur Front-end.',' Dévéloppeur Back-end.','Dévéloppeur Full-stack.','Chef de Projet IT.'],
    typeSpeed:50,
    backSpeed: 50,
    loop: true,
    fadeOut: true,
    fadeOutClass: 'type-fade-out',
    fadeOutDelay: 500
});

var swiper = new Swiper(".slide-content", {
    slidesPerView: 4,
    spaceBetween: 30,
    slidesPerGroup: 3,
    loop: true,
    centerSlide: 'true',
    fade: 'true',
    grabCursor: 'true',
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
        dynamicBullets: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        520: {
            slidesPerView: 2,
        },
        950: {
            slidesPerView: 4,
        }
    }

});