document.addEventListener('DOMContentLoaded', function() {
    // Mobile Navigation Toggle
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    
    hamburger.addEventListener('click', function() {
        this.classList.toggle('active');
        navLinks.classList.toggle('active');
    });
    
    // Close mobile menu when clicking on a link
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navLinks.classList.remove('active');
        });
    });
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Project Filtering
    const filterButtons = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.project-card');
    
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Update active button
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            
            const filter = button.getAttribute('data-filter');
            
            // Filter projects
            projectCards.forEach(card => {
                if (filter === 'all' || card.getAttribute('data-category') === filter) {
                    card.style.display = 'block';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });
    
    // Contact Form Submission
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form values
            const name = this.querySelector('#name').value;
            const email = this.querySelector('#email').value;
            const subject = this.querySelector('#subject').value;
            const message = this.querySelector('#message').value;
            
            // Here you would typically send the data to a server
            // For now, we'll just log it and show an alert
            console.log({ name, email, subject, message });
            
            alert('Thank you for your message! I will get back to you soon.');
            this.reset();
        });
    }
    
    // Active link highlighting based on scroll position
    const sections = document.querySelectorAll('section');
    const navItems = document.querySelectorAll('.nav-links a');
    
    window.addEventListener('scroll', () => {
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            
            if (pageYOffset >= sectionTop - 200) {
                current = section.getAttribute('id');
            }
        });
        
        navItems.forEach(item => {
            item.classList.remove('active');
            if (item.getAttribute('href').includes(current)) {
                item.classList.add('active');
            }
        });
    });
    
    // Initialize particles.js if it exists
    if (typeof particlesJS !== 'undefined') {
        particlesJS('particles-js', {
            particles: {
                number: { value: 80, density: { enable: true, value_area: 800 } },
                color: { value: "#ffffff" },
                shape: { type: "circle" },
                opacity: { value: 0.5, random: true },
                size: { value: 3, random: true },
                line_linked: { enable: true, distance: 150, color: "#ffffff", opacity: 0.4, width: 1 },
                move: { enable: true, speed: 2, direction: "none", random: true, straight: false, out_mode: "out" }
            },
            interactivity: {
                detect_on: "canvas",
                events: {
                    onhover: { enable: true, mode: "repulse" },
                    onclick: { enable: true, mode: "push" }
                }
            }
        });
    }
});

document.addEventListener('DOMContentLoaded', function() {
    // Form submission handling
    const contactForm = document.getElementById('contactForm');
    const formFeedback = document.getElementById('formFeedback');
    const loadingSpinner = document.getElementById('loadingSpinner');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Show loading spinner
            loadingSpinner.style.display = 'block';
            formFeedback.style.display = 'none';
            
            // Submit form data using Fetch API
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
                    // Success message
                    formFeedback.textContent = 'Thank you! Your message has been sent successfully.';
                    formFeedback.className = 'form-feedback form-success';
                    formFeedback.style.display = 'block';
                    
                    // Reset form
                    contactForm.reset();
                } else {
                    // Error message
                    formFeedback.textContent = 'Oops! There was a problem sending your message. Please try again later.';
                    formFeedback.className = 'form-feedback form-error';
                    formFeedback.style.display = 'block';
                }
            })
            .catch(error => {
                loadingSpinner.style.display = 'none';
                formFeedback.textContent = 'Oops! There was a network error. Please check your connection and try again.';
                formFeedback.className = 'form-feedback form-error';
                formFeedback.style.display = 'block';
            });
        });
    }
    
    // Initialize particles.js if available
    if (typeof particlesJS !== 'undefined') {
        particlesJS.load('particles-js', 'js/particles.json', function() {
            console.log('Particles.js loaded successfully');
        });
    }
    
    // Mobile menu toggle
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    
    if (hamburger && navLinks) {
        hamburger.addEventListener('click', function() {
            navLinks.classList.toggle('active');
            hamburger.classList.toggle('active');
        });
    }
});

// Added the functionality of PDF 
// Add this to your existing script.js file
document.addEventListener('DOMContentLoaded', function() {
    // Download CV functionality
    const downloadCvBtn = document.querySelector('.btn.secondary[href="contact.html"]:nth-child(2)');
    
    if (downloadCvBtn) {
        downloadCvBtn.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Path to your CV PDF file
            const pdfUrl = 'assets/downloads/Muntaha_Siddique_CV.pdf';
            
            // Create a temporary anchor element
            const link = document.createElement('a');
            link.href = pdfUrl;
            link.download = 'Muntaha_Siddique_CV.pdf'; // Name of the downloaded file
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        });
    }
});
// In script.js
document.addEventListener('DOMContentLoaded', function() {
  const themeToggle = document.getElementById('theme-switch');
  const html = document.documentElement;
  
  // Initialize theme
  const initTheme = () => {
    const currentTheme = localStorage.getItem('theme') || 'dark';
    html.setAttribute('data-theme', currentTheme);
    themeToggle.checked = currentTheme === 'light';
    
    // Update icons
    const moonIcon = document.querySelector('.fa-moon');
    const sunIcon = document.querySelector('.fa-sun');
    if (currentTheme === 'light') {
      moonIcon.style.opacity = '0.5';
      sunIcon.style.opacity = '1';
      sunIcon.style.color = '#f6ad55'; // Orange sun in light mode
    } else {
      moonIcon.style.opacity = '1';
      sunIcon.style.opacity = '0.5';
      moonIcon.style.color = '#a3bffa'; // Blue moon in dark mode
    }
  };
  
  initTheme();
  
  // Toggle theme
  themeToggle.addEventListener('change', function() {
    const newTheme = this.checked ? 'light' : 'dark';
    html.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    initTheme();
  });
});
document.addEventListener('DOMContentLoaded', function() {
  // Mobile Navigation Toggle - Improved Version
  const hamburger = document.querySelector('.hamburger');
  const navLinks = document.querySelector('.nav-links');
  
  if (hamburger && navLinks) {
    hamburger.addEventListener('click', function() {
      // Toggle active class on hamburger
      this.classList.toggle('active');
      
      // Toggle active class on nav links
      navLinks.classList.toggle('active');
      
      // Toggle body overflow to prevent scrolling when menu is open
      document.body.style.overflow = navLinks.classList.contains('active') ? 'hidden' : '';
    });
    
    // Close menu when clicking on links
    document.querySelectorAll('.nav-links a').forEach(link => {
      link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navLinks.classList.remove('active');
        document.body.style.overflow = '';
      });
    });
  }
});
