// Mobile menu toggle and smooth scrolling
document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.getElementById('hamburger');
    const cross = document.getElementById('cross');
    const sidebar = document.querySelector('.sidebar');
    const navLinks = document.querySelectorAll('.nav-link');

    // Function to close the mobile menu
    function closeMobileMenu() {
        sidebar.classList.remove('active');
        cross.style.display = 'none';
        // Only show hamburger if screen is mobile size (<= 768px)
        if (window.innerWidth <= 768) {
            hamburger.style.display = 'block';
        }
    }

    // Function to open the mobile menu
    function openMobileMenu() {
        sidebar.classList.add('active');
        cross.style.display = 'block';
        hamburger.style.display = 'none';
    }

    // Toggle menu visibility
    hamburger.addEventListener('click', openMobileMenu);
    cross.addEventListener('click', closeMobileMenu);

    // Close menu on link click and smooth scroll
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            // Scroll to the target section
            if (targetSection) {
                targetSection.scrollIntoView({ behavior: 'smooth' });
            }
            
            // Close mobile menu after click (only if it was open)
            if (window.innerWidth <= 768) {
                closeMobileMenu();
            }
        });
    });

    // Handle screen resize for menu button visibility
    window.addEventListener('resize', function() {
        if (window.innerWidth > 768) {
            // On desktop, ensure menu toggles are hidden
            hamburger.style.display = 'none';
            cross.style.display = 'none';
        } else {
            // On mobile, show the appropriate toggle button
            if (sidebar.classList.contains('active')) {
                hamburger.style.display = 'none';
                cross.style.display = 'block';
            } else {
                hamburger.style.display = 'block';
                cross.style.display = 'none';
            }
        }
    });

    // Initial check on load
    if (window.innerWidth <= 768) {
        hamburger.style.display = 'block';
    }

    // Form submission
    document.querySelector('.contact-form')?.addEventListener('submit', function(e) {
        e.preventDefault();
        alert('Thank you for your message! I will get back to you soon.');
        this.reset();
        
        // Optionally, close the mobile menu if the screen is small
        if (window.innerWidth <= 768) {
            closeMobileMenu();
        }
    });
});