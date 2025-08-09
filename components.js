// Script pour charger le header et footer
function loadComponent(file, elementId) {
    fetch(file)
        .then(response => response.text())
        .then(data => {
            document.getElementById(elementId).innerHTML = data;
            
            // Si c'est le header, initialiser le menu mobile
            if (elementId === 'header') {
                initMobileMenu();
            }
            
            // Initialiser le smooth scrolling après chargement
            initSmoothScrolling();
        })
        .catch(error => console.error('Erreur lors du chargement:', error));
}

// Fonction pour initialiser le menu mobile
function initMobileMenu() {
    const navToggle = document.getElementById('nav-toggle');
    const mobileNav = document.getElementById('mobile-nav');
    
    if (navToggle && mobileNav) {
        navToggle.addEventListener('click', function() {
            // Toggle de la classe active pour l'animation du hamburger
            navToggle.classList.toggle('active');
            
            // Toggle du menu mobile
            mobileNav.classList.toggle('translate-x-full');
        });
        
        // Fermer le menu quand on clique sur un lien
        const mobileLinks = mobileNav.querySelectorAll('a');
        mobileLinks.forEach(link => {
            link.addEventListener('click', function() {
                mobileNav.classList.add('translate-x-full');
                navToggle.classList.remove('active');
            });
        });
        
        // Fermer le menu quand on clique à l'extérieur
        document.addEventListener('click', function(event) {
            if (!mobileNav.contains(event.target) && !navToggle.contains(event.target)) {
                mobileNav.classList.add('translate-x-full');
                navToggle.classList.remove('active');
            }
        });
    }
}

// Fonction pour initialiser le smooth scrolling
function initSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// Charger les composants au chargement de la page
document.addEventListener('DOMContentLoaded', function() {
    loadComponent('header.html', 'header');
    loadComponent('footer.html', 'footer');
});
