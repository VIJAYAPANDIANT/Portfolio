document.addEventListener('DOMContentLoaded', () => {
    // Mobile Menu Toggle
    const menuToggle = document.getElementById('mobile-menu');
    const navLinks = document.querySelector('.nav-links');

    if (menuToggle) {
        menuToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });
    }

    // Close menu when clicking a link
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
        });
    });

    // Smooth Scrolling for anchor links (if browser support missing)
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            } else if (window.location.pathname.includes('certificates.html')) {
                // Return to index.html if on certificates page
                window.location.href = 'index.html#' + targetId;
            }
        });
    });

    // Contact Form Handling
    const sendWhatsappBtn = document.getElementById('send-whatsapp');
    const sendEmailBtn = document.getElementById('send-email');

    if (sendWhatsappBtn) {
        sendWhatsappBtn.addEventListener('click', () => {
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;

            if (!name || !email || !message) {
                alert('Please fill in all fields.');
                return;
            }

            const text = `Name: ${name}%0AEmail: ${email}%0AMessage: ${message}`;
            const url = `https://wa.me/918610554060?text=${text}`;
            window.open(url, '_blank');
        });
    }

    if (sendEmailBtn) {
        sendEmailBtn.addEventListener('click', () => {
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;

            if (!name || !email || !message) {
                alert('Please fill in all fields.');
                return;
            }

            const subject = `Contact from Portfolio: ${name}`;
            const body = `Name: ${name}%0D%0AEmail: ${email}%0D%0AMessage: ${message}`;
            const url = `mailto:vijayapandian112007@gmail.com?subject=${encodeURIComponent(subject)}&body=${body}`;
            window.location.href = url;
        });
    }
});
