// Mobile Menu Toggle
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on nav link
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// Navbar scroll effect
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Active nav link on scroll
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.nav-link');

window.addEventListener('scroll', () => {
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (scrollY >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').slice(1) === current) {
            link.classList.add('active');
        }
    });
});

// Scroll Reveal Animation
const revealElements = document.querySelectorAll('.skill-card, .project-card, .about-text, .about-image, .contact-info, .contact-form');

const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
            revealObserver.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
});

revealElements.forEach(element => {
    revealObserver.observe(element);
});

// Typing Effect
const typingText = document.querySelector('.typing-text');
const phrases = ['Full Stack Developer', 'Flutter Developer', 'AI/ML Enthusiast'];
let phraseIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeEffect() {
    const currentPhrase = phrases[phraseIndex];
    
    if (isDeleting) {
        typingText.textContent = currentPhrase.substring(0, charIndex - 1);
        charIndex--;
    } else {
        typingText.textContent = currentPhrase.substring(0, charIndex + 1);
        charIndex++;
    }
    
    let typeSpeed = isDeleting ? 50 : 100;
    
    if (!isDeleting && charIndex === currentPhrase.length) {
        typeSpeed = 2000;
        isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        phraseIndex++;
        if (phraseIndex >= phrases.length) {
            phraseIndex = 0;
        }
    }
    
    setTimeout(typeEffect, typeSpeed);
}

// Start typing effect
setTimeout(typeEffect, 500);

// Smooth scroll for anchor links
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

// EmailJS Configuration
// IMPORTANT: Replace these with your actual EmailJS credentials
// Get them from: https://www.emailjs.com/
const EMAILJS_SERVICE_ID = 'service_c39f8rp';
const EMAILJS_TEMPLATE_ID = 'template_0au1q9p'; // Replace with your actual template ID from EmailJS dashboard
const EMAILJS_PUBLIC_KEY = 'wd3_TGgmFTX0hVGh3';

// Wait for EmailJS to load and initialize
document.addEventListener('DOMContentLoaded', function() {
    // Initialize EmailJS when the page loads
    if (typeof emailjs !== 'undefined') {
        emailjs.init(EMAILJS_PUBLIC_KEY);
        console.log('EmailJS initialized successfully');
    } else {
        console.error('EmailJS library not loaded');
    }
});

// Form submission with EmailJS
const contactForm = document.getElementById('contactForm');
const formMessage = document.getElementById('formMessage');
const submitBtn = document.getElementById('submitBtn');
const submitBtnText = document.getElementById('submitBtnText');
const submitBtnLoader = document.getElementById('submitBtnLoader');

if (contactForm) {
    contactForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        // Check if EmailJS is loaded
        if (typeof emailjs === 'undefined') {
            formMessage.textContent = 'Email service is not loaded. Please refresh the page and try again.';
            formMessage.className = 'form-message error';
            formMessage.style.display = 'block';
            return;
        }
        
        // Show loading state
        submitBtn.disabled = true;
        submitBtnText.style.display = 'none';
        submitBtnLoader.style.display = 'inline-block';
        formMessage.style.display = 'none';
        
        try {
            // Get form data - EmailJS template variables
            // These must match your EmailJS template variable names exactly
            const templateParams = {
                name: document.getElementById('user_name').value.trim(),        // {{name}} in template
                from_name: document.getElementById('user_name').value.trim(),   // {{from_name}} for From Name field
                from_email: document.getElementById('user_email').value.trim(), // {{from_email}} for From Email field
                email: document.getElementById('user_email').value.trim(),      // {{email}} for Reply To field
                message: document.getElementById('message').value.trim(),       // {{message}} in template
                title: 'New Contact Form Message',                             // {{title}} in subject
                time: new Date().toLocaleString()                               // {{time}} in template
            };
            
            // Log for debugging (remove in production)
            console.log('Sending email with params:', templateParams);
            console.log('Service ID:', EMAILJS_SERVICE_ID);
            console.log('Template ID:', EMAILJS_TEMPLATE_ID);
            
            // Send email using EmailJS
            const response = await emailjs.send(
                EMAILJS_SERVICE_ID,
                EMAILJS_TEMPLATE_ID,
                templateParams
            );
            
            console.log('Email sent successfully:', response);
            
            // Success
            formMessage.textContent = 'Thank you for your message! I\'ll get back to you soon.';
            formMessage.className = 'form-message success';
            formMessage.style.display = 'block';
            contactForm.reset();
            
            // Hide message after 5 seconds
            setTimeout(() => {
                formMessage.style.display = 'none';
            }, 5000);
            
        } catch (error) {
            // Enhanced error handling
            console.error('EmailJS Error Details:', error);
            let errorMessage = 'Sorry, there was an error sending your message. ';
            
            if (error.text) {
                console.error('EmailJS Error Text:', error.text);
                errorMessage += `Error: ${error.text}`;
            } else if (error.message) {
                console.error('Error Message:', error.message);
                errorMessage += `Error: ${error.message}`;
            } else {
                errorMessage += 'Please check the console for details and try again later.';
            }
            
            formMessage.textContent = errorMessage;
            formMessage.className = 'form-message error';
            formMessage.style.display = 'block';
        } finally {
            // Reset button state
            submitBtn.disabled = false;
            submitBtnText.style.display = 'inline-block';
            submitBtnLoader.style.display = 'none';
        }
    });
}

// Parallax effect for hero section
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const heroAvatar = document.querySelector('.hero-avatar');
    if (heroAvatar) {
        heroAvatar.style.transform = `translateY(${scrolled * 0.5}px)`;
    }
});

// Counter animation for stats
const animateCounter = (element, target) => {
    let current = 0;
    const increment = target / 100;
    const duration = 2000;
    const stepTime = duration / 100;
    
    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            element.textContent = target;
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(current);
        }
    }, stepTime);
};

const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const statNumber = entry.target.querySelector('.stat-number');
            if (statNumber && !statNumber.classList.contains('animated')) {
                const targetValue = parseInt(statNumber.textContent);
                animateCounter(statNumber, targetValue);
                statNumber.classList.add('animated');
            }
        }
    });
}, {
    threshold: 0.5
});

document.querySelectorAll('.stat-item').forEach(stat => {
    statsObserver.observe(stat);
});

// Add parallax effect to project cards
document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        
        const rotateX = (y - centerY) / 10;
        const rotateY = (centerX - x) / 10;
        
        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-10px)`;
    });
    
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateY(0)';
    });
});

// Add sparkle effect on mouse move
document.addEventListener('mousemove', (e) => {
    if (Math.random() > 0.95) {
        createSparkle(e.clientX, e.clientY);
    }
});

function createSparkle(x, y) {
    const sparkle = document.createElement('div');
    sparkle.style.position = 'fixed';
    sparkle.style.left = x + 'px';
    sparkle.style.top = y + 'px';
    sparkle.style.width = '4px';
    sparkle.style.height = '4px';
    sparkle.style.background = `hsl(${Math.random() * 60 + 240}, 100%, 70%)`;
    sparkle.style.borderRadius = '50%';
    sparkle.style.pointerEvents = 'none';
    sparkle.style.zIndex = '9999';
    sparkle.style.animation = 'sparkleFade 1s ease forwards';
    
    document.body.appendChild(sparkle);
    
    setTimeout(() => sparkle.remove(), 1000);
}

// Add sparkle animation to CSS dynamically
const style = document.createElement('style');
style.textContent = `
    @keyframes sparkleFade {
        0% {
            opacity: 1;
            transform: scale(1) translateY(0);
        }
        100% {
            opacity: 0;
            transform: scale(0) translateY(-20px);
        }
    }
`;
document.head.appendChild(style);

console.log('Portfolio website loaded successfully! 🚀');

