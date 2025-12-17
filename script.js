
// Opsentra AI - Global JavaScript

// Initialize Feather icons
if (typeof feather !== 'undefined') {
    feather.replace();
}

// FAQ functionality
class FAQManager {
    constructor() {
        this.init();
    }

    init() {
        const faqQuestions = document.querySelectorAll('.faq-question');
        
        faqQuestions.forEach(question => {
            question.addEventListener('click', () => {
                const answer = question.nextElementSibling;
                const icon = question.querySelector('.faq-icon');
                
                // Check if currently active
                const isActive = answer.classList.contains('active');
                
                // Deactivate all other FAQ items
                this.deactivateAll();
                
                // Toggle current
                if (!isActive) {
                    answer.classList.add('active');
                    question.querySelector('.faq-icon').style.transform = 'rotate(180deg)';
                }
            });
        });
    }

    deactivateAll() {
        const allAnswers = document.querySelectorAll('.faq-answer');
        const allIcons = document.querySelectorAll('.faq-icon');
        
        allAnswers.forEach(answer => {
            answer.classList.remove('active');
        });
        
        allIcons.forEach(icon => {
            icon.style.transform = 'rotate(0deg)';
        });
    }
}

// Form handling for contact page
class ContactFormHandler {
    constructor(formId) {
        this.form = document.getElementById(formId);
        if (this.form) {
            this.init();
        }
    }

    init() {
        this.form.addEventListener('submit', this.handleSubmit.bind(this));
        this.setupValidation();
    }

    setupValidation() {
        const requiredFields = this.form.querySelectorAll('[required]');
        requiredFields.forEach(field => {
            field.addEventListener('blur', this.validateField.bind(this));
        });
    }

    validateField(e) {
        const field = e.target;
        const value = field.value.trim();
        const errorElement = field.parentNode.querySelector('.error-message') 
            || this.createErrorMessageElement(field);
        if (!value) {
            this.showError(field, errorElement, 'This field is required');
            return false;
        }

        if (field.type === 'email' && !this.isValidEmail(value)) {
            this.showError(field, errorElement, 'Please enter a valid email address');
            return false;
        }

        this.clearError(field, errorElement);
        return true;
    }

    isValidEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }

    showError(field, errorElement, message) {
        field.classList.add('border-red-500');
        errorElement.textContent = message;
        errorElement.classList.remove('hidden');
    }

    clearError(field, errorElement) {
        field.classList.remove('border-red-500');
        errorElement.classList.add('hidden');
}
        const errorElement = document.createElement('div');
        errorElement.className = 'error-message text-red-400 text-sm mt-1 hidden';
        field.parentNode.appendChild(errorElement);
        return errorElement;
    }

    async handleSubmit(e) {
        e.preventDefault();
        
        // Validate all fields
        const requiredFields = this.form.querySelectorAll('[required]');
        let isValid = true;
        
        requiredFields.forEach(field => {
            if (!this.validateField({ target: field })) {
                isValid = false;
            }
        });

        if (!isValid) {
            this.showFormMessage('Please fill in all required fields correctly.', 'error');
            return;
        }

        // Show loading state
        const submitButton = this.form.querySelector('button[type="submit"]');
        const originalText = submitButton.textContent;
        submitButton.textContent = 'Sending...';
        submitButton.disabled = true;

        try {
            const formData = new FormData(this.form);
            const data = Object.fromEntries(formData.entries());

            await this.simulateSubmission(data);
            
            this.showFormMessage('Thank you for your message. We will be in touch shortly.', 'success');
            this.form.reset();
        } catch (error) {
            console.error('Form submission error:', error);
            this.showFormMessage('There was an error sending your message. Please try again later.', 'error');
        } finally {
            submitButton.textContent = originalText;
            submitButton.disabled = false;
        }
    }

    simulateSubmission(data) {
        return new Promise((resolve) => {
            setTimeout(() => {
                console.log('Form data would be sent to webhook:', data);
                resolve();
            }, 1500);
        });
    }

    showFormMessage(message, type) {
        const existingMessage = document.querySelector('.form-message');
        if (existingMessage) existingMessage.remove();

        const messageElement = document.createElement('div');
        messageElement.className = `form-message p-4 rounded-lg mt-6 ${
            type === 'success' 
                ? 'bg-green-900/30 border border-green-800 text-green-300' 
                : 'bg-red-900/30 border border-red-800 text-red-300'
        }`;
        messageElement.textContent = message;

        this.form.appendChild(messageElement);

        setTimeout(() => {
            if (messageElement.parentNode) messageElement.remove();
        }, 5000);
    }
}

// Smooth scrolling for anchor links
class SmoothScroller {
    constructor() {
        this.init();
    }

    init() {
        document.addEventListener('click', (e) => {
            const link = e.target.closest('a[href^="#"]');
            if (link && link.getAttribute('href') !== '#') {
                e.preventDefault();
                const targetId = link.getAttribute('href').substring(1);
                const targetElement = document.getElementById(targetId);
                
                if (targetElement) {
                    this.scrollToElement(targetElement);
                }
            }
        });
    }

    scrollToElement(element) {
        const headerOffset = 80;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
        });
    }
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    // Initialize Feather icons
    if (typeof feather !== 'undefined') {
        feather.replace();
    }

    // Initialize FAQ
    new FAQManager();

    // Initialize contact form if it exists
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        new ContactFormHandler('contactForm');
    }

    // Initialize smooth scrolling
    new SmoothScroller();
});

// Utility function for copying email address
function copyEmail() {
    const email = 'info@opsentra.ai';
    navigator.clipboard.writeText(email).then(() => {
        const notification = document.createElement('div');
        notification.className = 'fixed bottom-4 right-4 bg-electric-500 text-white px-4 py-2 rounded-lg shadow-lg z-50';
        notification.textContent = 'Email copied to clipboard';
        document.body.appendChild(notification);
        
        setTimeout(() => {
            notification.remove();
        }, 3000);
    });
}

// Theme handling (for future dark/light mode implementation)
class ThemeManager {
    constructor() {
        this.currentTheme = 'dark';
        this.init();
    }

    init() {
        const savedTheme = localStorage.getItem('opsentra-theme');
        if (savedTheme) {
            this.setTheme(savedTheme);
        }
    }

    setTheme(theme) {
        this.currentTheme = theme;
        document.documentElement.classList.remove('dark', 'light');
        document.documentElement.classList.add(theme);
        localStorage.setItem('opsentra-theme', theme);
    }

    toggleTheme() {
        const newTheme = this.currentTheme === 'dark' ? 'light' : 'dark';
        this.setTheme(newTheme);
    }
}

// Export for module usage if needed
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        FAQManager,
        ContactFormHandler,
        SmoothScroller,
        ThemeManager
    };
}
