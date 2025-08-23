// Script pour charger le header et footer
function loadComponent(file, elementId) {
    fetch(file)
        .then(response => response.text())
        .then(data => {
            document.getElementById(elementId).innerHTML = data;
            
            // Si c'est le header, initialiser le menu mobile et mettre en surbrillance la page active
            if (elementId === 'header') {
                initMobileMenu();
                highlightActivePage();
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
    const mobileClose = document.getElementById('mobile-close');
    const hamburgerLine1 = document.getElementById('hamburger-line-1');
    const hamburgerLine2 = document.getElementById('hamburger-line-2');
    const hamburgerLine3 = document.getElementById('hamburger-line-3');
    
    if (navToggle && mobileNav) {
        // Ouvrir le menu avec le bouton hamburger
        navToggle.addEventListener('click', function() {
            mobileNav.classList.remove('translate-x-full');
            
            // Animation du hamburger en croix
            if (hamburgerLine1 && hamburgerLine2 && hamburgerLine3) {
                hamburgerLine1.classList.add('rotate-45', 'translate-y-[6px]');
                hamburgerLine2.classList.add('opacity-0', 'scale-x-0');
                hamburgerLine3.classList.add('-rotate-45', '-translate-y-[6px]');
            }
        });
        
        // Fermer le menu avec la croix
        if (mobileClose) {
            mobileClose.addEventListener('click', function() {
                mobileNav.classList.add('translate-x-full');
                resetHamburger();
            });
        }
        
        // Fermer le menu quand on clique sur un lien
        const mobileLinks = mobileNav.querySelectorAll('a');
        mobileLinks.forEach(link => {
            link.addEventListener('click', function() {
                mobileNav.classList.add('translate-x-full');
                resetHamburger();
            });
        });
        
        // Fermer le menu quand on clique à l'extérieur
        document.addEventListener('click', function(event) {
            if (!mobileNav.contains(event.target) && !navToggle.contains(event.target)) {
                mobileNav.classList.add('translate-x-full');
                resetHamburger();
            }
        });
    }
    
    // Fonction pour réinitialiser l'animation du hamburger
    function resetHamburger() {
        if (hamburgerLine1 && hamburgerLine2 && hamburgerLine3) {
            hamburgerLine1.classList.remove('rotate-45', 'translate-y-[6px]');
            hamburgerLine2.classList.remove('opacity-0', 'scale-x-0');
            hamburgerLine3.classList.remove('-rotate-45', '-translate-y-[6px]');
        }
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

// Mettre en surbrillance la page active
function highlightActivePage() {
    const currentPage = getCurrentPageName();
    const navLinks = document.querySelectorAll('[data-page]');
    
    navLinks.forEach(link => {
        const linkPage = link.getAttribute('data-page');
        if (linkPage === currentPage) {
            // Menu desktop - utiliser TailwindCSS pour l'underline
            if (link.classList.contains('after:content-[\'\']')) {
                link.classList.remove('text-gray-700', 'hover:text-primary');
                link.classList.add('text-primary', 'font-medium');
                // Ajouter l'underline actif
                link.classList.add('after:w-full');
            }
            // Menu mobile
            else {
                link.classList.remove('text-gray-900', 'font-medium');
                link.classList.add('text-primary', 'font-semibold');
            }
        }
    });
}

// Déterminer le nom de la page actuelle
function getCurrentPageName() {
    const path = window.location.pathname;
    const filename = path.split('/').pop();
    
    if (filename === 'index.html' || filename === '') return 'index';
    if (filename === 'nos-services.html') return 'nos-services';
    if (filename === 'notre-equipe.html') return 'notre-equipe';
    if (filename === 'faq.html') return 'faq';
    if (filename === 'mentions-legales.html') return 'mentions-legales';
    
    return 'index'; // Par défaut
}

// Charger les composants au chargement de la page
document.addEventListener('DOMContentLoaded', function() {
    loadComponent('header.html', 'header');
    loadComponent('footer.html', 'footer');
});
