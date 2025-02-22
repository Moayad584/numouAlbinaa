const menuToggle = document.getElementById('menu-toggle');
const navLinks = document.querySelector('.nav-links');
menuToggle.addEventListener('click', () => {
      navLinks.classList.toggle('active');
    });

    function toggleLanguage() {
        const langToggle = document.getElementById('lang-toggle');
        if (langToggle.checked) {
            window.location.href = 'index.html'; // Arabic page
        } else {
            window.location.href = 'indexEn.html'; // English page
        }
    }