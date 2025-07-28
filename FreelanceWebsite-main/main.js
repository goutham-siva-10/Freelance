// main.js
document.addEventListener('DOMContentLoaded', () => {
    // Toggle mobile menu
    const mobileMenuButton = document.querySelector('.mobile-menu-button');
    const navMenu = document.querySelector('nav ul');
    
    mobileMenuButton.addEventListener('click', () => {
        navMenu.classList.toggle('open');
    });
    
    // Scroll to section smoothly
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});

// search.js
const searchInput = document.querySelector('.search-bar input');
searchInput.addEventListener('keyup', () => {
    const query = searchInput.value.toLowerCase();
    const results = document.querySelectorAll('.result-item');
    
    results.forEach(result => {
        const text = result.textContent.toLowerCase();
        if (text.includes(query)) {
            result.style.display = 'block';
        } else {
            result.style.display = 'none';
        }
    });
});
