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

document.addEventListener('DOMContentLoaded', function() {
    // Gestion des projets
    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach(card => {
        card.addEventListener('click', function() {
            this.classList.toggle('expanded');
            const text = this.classList.contains('expanded') ? 'Voir moins' : 'Voir plus';
            this.setAttribute('data-text', text);
        });
    });

    // Gestion des expériences
    const experienceCards = document.querySelectorAll('.experience-card');
    experienceCards.forEach(card => {
        card.addEventListener('click', function() {
            this.classList.toggle('expanded');
            const text = this.classList.contains('expanded') ? 'Voir moins' : 'Voir plus';
            this.setAttribute('data-text', text);
        });
    });
});

document.getElementById('contactForm').addEventListener('submit', function(e){
    e.preventDefault();
    let isValid = true;

    document.querySelectorAll('.error').forEach(error => error.textContent = '');

    const firstname = document.getElementById('firstname').value.trim();
    const lastname = document.getElementById('lastname').value.trim();
    const email = document.getElementById('email').value.trim();
    const telephone = document.getElementById('telephone').value.trim();
    const message = document.getElementById('message').value.trim();

    if (firstname === '') {
        isValid = false;
        document.getElementById('error-firstname').textContent = 'Le prénom est requis.';
    }

    if (lastname === '') {
        isValid = false;
        document.getElementById('error-lastname').textContent = 'Le nom est requis.';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email === '') {
        isValid = false;
        document.getElementById('error-email').textContent = 'L\'email est requis.';
    } else if (!emailRegex.test(email)) {
        isValid = false;
        document.getElementById('error-email').textContent = 'L\'email n\'est pas valide.';
    }

    const phoneRegex = /^\+?[0-9\s\-]{7,15}$/;
    if (telephone === '') {
        isValid = false;
        document.getElementById('error-telephone').textContent = 'Le téléphone est requis.';
    } else if (!phoneRegex.test(telephone)) {
        isValid = false;
        document.getElementById('error-telephone').textContent = 'Le téléphone n\'est pas valide.';
    }

    if (message === '') {
        isValid = false;
        document.getElementById('error-message').textContent = 'Le message est requis.';
    }

    if (isValid) {
        alert('Formulaire envoyé avec succès !');
        // Ici, vous pouvez soumettre le formulaire ou effectuer d'autres actions.
    }
    
});