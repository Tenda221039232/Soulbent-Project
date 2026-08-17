// Hamburger toggle
document.addEventListener('DOMContentLoaded', function () {
    const hamburger = document.getElementById('hamburger');
    const nav = document.getElementById('nav');

    if (hamburger && nav) {
        hamburger.addEventListener('click', () => {
            nav.classList.toggle('open');
            hamburger.innerHTML = nav.classList.contains('open') ?
                '<i class="fas fa-times"></i>' :
                '<i class="fas fa-bars"></i>';
        });

        // Close nav on link click (mobile)
        document.querySelectorAll('#nav a').forEach(link => {
            link.addEventListener('click', () => {
                nav.classList.remove('open');
                hamburger.innerHTML = '<i class="fas fa-bars"></i>';
            });
        });
    }

    // Volunteer form (if exists)
    const volunteerForm = document.getElementById('volunteerForm');
    if (volunteerForm) {
        volunteerForm.addEventListener('submit', function (e) {
            e.preventDefault();
            alert('Thank you for your interest in volunteering with Soulbent Project! We will contact you shortly.');
            this.reset();
        });
    }

    // Contact form (if exists)
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function (e) {
            e.preventDefault();
            alert('Your message has been sent. We\'ll get back to you as soon as possible.');
            this.reset();
        });
    }

    // Smooth scroll for anchor links (optional)
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href === '#') return;
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });
});