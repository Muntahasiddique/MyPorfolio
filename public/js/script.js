
document.addEventListener('DOMContentLoaded', function() {
    // Custom cursor
    const cursor = document.querySelector('.cursor');
    document.addEventListener('mousemove', (e) => {
        cursor.style.left = e.pageX + 'px';
        cursor.style.top = e.pageY + 'px';
    });

    // Header scroll effect
    const header = document.querySelector('header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('header-scrolled');
        } else {
            header.classList.remove('header-scrolled');
        }
    });

    // Mobile navigation
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navLinks.classList.toggle('active');
    });

    // Close mobile menu when clicking on a link
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navLinks.classList.remove('active');
        });
    });

    // Project filtering
    const filterButtons = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.project-card');
    
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            
            const filter = button.getAttribute('data-filter');
            
            projectCards.forEach(card => {
                if (filter === 'all' || card.getAttribute('data-category') === filter) {
                    card.style.display = 'block';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });

    // Contact form submission
    const contactForm = document.getElementById('contactForm');
    const formFeedback = document.getElementById('formFeedback');
    const loadingSpinner = document.getElementById('loadingSpinner');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            loadingSpinner.style.display = 'block';
            formFeedback.style.display = 'none';
            
            fetch(contactForm.action, {
                method: 'POST',
                body: new FormData(contactForm),
                headers: {
                    'Accept': 'application/json'
                }
            })
            .then(response => {
                loadingSpinner.style.display = 'none';
                
                if (response.ok) {
                    formFeedback.textContent = 'Thank you! Your message has been sent.';
                    formFeedback.className = 'form-feedback form-success';
                    formFeedback.style.display = 'block';
                    contactForm.reset();
                } else {
                    formFeedback.textContent = 'Oops! There was a problem. Please try again.';
                    formFeedback.className = 'form-feedback form-error';
                    formFeedback.style.display = 'block';
                }
            })
            .catch(error => {
                loadingSpinner.style.display = 'none';
                formFeedback.textContent = 'Network error. Please check your connection.';
                formFeedback.className = 'form-feedback form-error';
                formFeedback.style.display = 'block';
            });
        });
    }

    // Theme toggle
    const themeToggle = document.getElementById('theme-switch');
    const html = document.documentElement;
    
    const initTheme = () => {
        const currentTheme = localStorage.getItem('theme') || 'dark';
        html.setAttribute('data-theme', currentTheme);
        themeToggle.checked = currentTheme === 'light';
    };
    
    initTheme();
    
    themeToggle.addEventListener('change', function() {
        const newTheme = this.checked ? 'light' : 'dark';
        html.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
    });

    // Animate elements on scroll
    const animateOnScroll = () => {
        const elements = document.querySelectorAll('.animate__animated');
        
        elements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.3;
            
            if (elementPosition < screenPosition) {
                const animation = element.getAttribute('data-animation') || 'fadeInUp';
                const delay = element.getAttribute('data-delay') || '0s';
                
                element.style.animationDelay = delay;
                element.classList.add(`animate__${animation}`);
            }
        });
    };
    
    window.addEventListener('scroll', animateOnScroll);
    animateOnScroll();

    // Download CV button
    const downloadCvBtn = document.querySelector('.btn-tertiary');
    if (downloadCvBtn) {
        downloadCvBtn.addEventListener('click', function(e) {
            if (this.href.endsWith('.pdf')) {
                e.preventDefault();
                const link = document.createElement('a');
                link.href = this.href;
                link.download = 'Muntaha_Siddique_CV.pdf';
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
            }
        });
    }
});