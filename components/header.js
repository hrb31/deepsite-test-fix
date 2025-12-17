class CustomHeader extends HTMLElement {
    connectedCallback() {
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.innerHTML = `
            <style>
                * {
                    box-sizing: border-box;
                    margin: 0;
                    padding: 0;
                }

                :host {
                    display: block;
                    position: sticky;
                    top: 0;
                    z-index: 50;
                    backdrop-filter: blur(10px);
                    -webkit-backdrop-filter: blur(10px);
                }

                .header-container {
                    background: rgba(15, 23, 42, 0.9);
                    border-bottom: 1px solid rgba(30, 41, 59, 0.5);
                }

                .container {
                    max-width: 1280px;
                    margin: 0 auto;
                    padding: 0 1rem;
                }

                @media (min-width: 640px) {
                    .container {
                        padding: 0 1.5rem;
                    }
                }

                @media (min-width: 1024px) {
                    .container {
                        padding: 0 2rem;
                    }
                }

                .flex {
                    display: flex;
                }

                .items-center {
                    align-items: center;
                }

                .justify-between {
                    justify-content: space-between;
                }

                .space-x-3 > * + * {
                    margin-left: 0.75rem;
                }

                .space-x-8 > * + * {
                    margin-left: 2rem;
                }

                .space-y-4 > * + * {
                    margin-top: 1rem;
                }

                .h-20 {
                    height: 5rem;
                }

                .w-10 {
                    width: 2.5rem;
                }

                .h-10 {
                    height: 2.5rem;
                }

                .w-6 {
                    width: 1.5rem;
                }

                .h-6 {
                    height: 1.5rem;
                }

                .w-full {
                    width: 100%;
                }

                .h-0\.5 {
                    height: 0.125rem;
                }

                .bg-gradient-to-br {
                    background-image: linear-gradient(to bottom right, var(--tw-gradient-stops));
                }

                .from-electric-500 {
                    --tw-gradient-from: #06b6d4;
                    --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to, rgba(6, 182, 212, 0));
                }

                .to-electric-600 {
                    --tw-gradient-to: #0891b2;
                }

                .bg-gradient-to-r {
                    background-image: linear-gradient(to right, var(--tw-gradient-stops));
                }

                .rounded-lg {
                    border-radius: 0.5rem;
                }

                .rounded {
                    border-radius: 0.25rem;
                }

                .flex-col {
                    flex-direction: column;
                }

                .text-xl {
                    font-size: 1.25rem;
                    line-height: 1.75rem;
                }

                .text-xs {
                    font-size: 0.75rem;
                    line-height: 1rem;
                }

                .font-bold {
                    font-weight: 700;
                }

                .font-semibold {
                    font-weight: 600;
                }

                .font-medium {
                    font-weight: 500;
                }

                .text-white {
                    color: #ffffff;
                }

                .text-gray-300 {
                    color: #d1d5db;
                }

                .text-gray-400 {
                    color: #9ca3af;
                }

                .tracking-tight {
                    letter-spacing: -0.025em;
                }

                .text-electric-400 {
                    color: #22d3ee;
                }

                .bg-navy-800 {
                    background-color: #1e293b;
                }

                .bg-navy-900 {
                    background-color: #0f172a;
                }

                .border-navy-800 {
                    border-color: #1e293b;
                }

                .border-b {
                    border-bottom-width: 1px;
                }

                .px-6 {
                    padding-left: 1.5rem;
                    padding-right: 1.5rem;
                }

                .py-2\.5 {
                    padding-top: 0.625rem;
                    padding-bottom: 0.625rem;
                }

                .py-3 {
                    padding-top: 0.75rem;
                    padding-bottom: 0.75rem;
                }

                .px-4 {
                    padding-left: 1rem;
                    padding-right: 1rem;
                }

                .py-6 {
                    padding-top: 1.5rem;
                    padding-bottom: 1.5rem;
                }

                .p-2 {
                    padding: 0.5rem;
                }

                .block {
                    display: block;
                }

                .hidden {
                    display: none;
                }

                .relative {
                    position: relative;
                }

                .absolute {
                    position: absolute;
                }

                .left-0 {
                    left: 0;
                }

                .right-0 {
                    right: 0;
                }

                .top-1 {
                    top: 0.25rem;
                }

                .top-3 {
                    top: 0.75rem;
                }

                .top-5 {
                    top: 1.25rem;
                }

                a {
                    text-decoration: none;
                }

                svg {
                    display: block;
                }

                .hover\:text-white:hover {
                    color: #ffffff;
                }

                .hover\:bg-navy-800:hover {
                    background-color: #1e293b;
                }

                .transition-colors {
                    transition-property: color, background-color, border-color;
                    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
                    transition-duration: 150ms;
                }

                .transition-all {
                    transition-property: all;
                    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
                    transition-duration: 150ms;
                }

                .duration-300 {
                    transition-duration: 300ms;
                }

                .hover\:shadow-lg:hover {
                    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
                }

                .hover\:shadow-electric-500\/20:hover {
                    box-shadow: 0 10px 15px -3px rgba(6, 182, 212, 0.2);
                }

                .text-center {
                    text-align: center;
                }

                .nav-link {
                    position: relative;
                    padding-bottom: 4px;
                }

                .nav-link::after {
                    content: '';
                    position: absolute;
                    bottom: 0;
                    left: 0;
                    width: 0;
                    height: 2px;
                    background: linear-gradient(90deg, #06b6d4, #22d3ee);
                    transition: width 0.3s ease;
                }

                .nav-link:hover::after {
                    width: 100%;
                }

                .mobile-menu {
                    transition: all 0.3s ease;
                    transform-origin: top;
                }

                @media (min-width: 768px) {
                    .md\:flex {
                        display: flex;
                    }

                    .md\:hidden {
                        display: none;
                    }
                }

                @media (max-width: 768px) {
                    .mobile-menu {
                        box-shadow: 0 10px 25px rgba(0, 0, 0, 0.3);
                    }
                }

                .hamburger-line {
                    transition: all 0.3s ease;
                }

                .hamburger.active .hamburger-line:nth-child(1) {
                    transform: rotate(45deg) translate(6px, 6px);
                }

                .hamburger.active .hamburger-line:nth-child(2) {
                    opacity: 0;
                }

                .hamburger.active .hamburger-line:nth-child(3) {
                    transform: rotate(-45deg) translate(7px, -6px);
                }
            </style>
            
            <header class="header-container">
                <div class="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div class="flex items-center justify-between h-20">
                        <!-- Logo -->
                        <div class="flex items-center">
                            <a href="index.html" class="flex items-center space-x-3">
                                <div class="w-10 h-10 bg-gradient-to-br from-electric-500 to-electric-600 rounded-lg flex items-center justify-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                                    </svg>
                                </div>
                                <div class="flex flex-col">
                                    <span class="text-xl font-bold text-white tracking-tight">Opsentra AI</span>
                                    <span class="text-xs text-electric-400 font-medium">Intelligence Infrastructure</span>
                                </div>
                            </a>
                        </div>
                        
                        <!-- Desktop Navigation -->
                        <nav class="hidden md:flex items-center space-x-8">
                            <a href="index.html" class="nav-link text-gray-300 hover:text-white font-medium">Home</a>
                            <a href="solutions.html" class="nav-link text-gray-300 hover:text-white font-medium">Solutions</a>
                            <a href="pricing.html" class="nav-link text-gray-300 hover:text-white font-medium">Pricing</a>
                            <a href="contact.html" class="px-6 py-2.5 bg-gradient-to-r from-electric-500 to-electric-600 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-electric-500/20 transition-all duration-300">
                                Contact Us
                            </a>
                        </nav>
                        
                        <!-- Mobile menu button -->
                        <div class="md:hidden">
                            <button class="hamburger p-2 rounded-lg hover:bg-navy-800 transition-colors">
                                <div class="w-6 h-6 relative">
                                    <span class="hamburger-line absolute left-0 top-1 w-full h-0.5 bg-gray-300 rounded"></span>
                                    <span class="hamburger-line absolute left-0 top-3 w-full h-0.5 bg-gray-300 rounded"></span>
                                    <span class="hamburger-line absolute left-0 top-5 w-full h-0.5 bg-gray-300 rounded"></span>
                                </div>
                            </button>
                        </div>
                    </div>
                    
                    <!-- Mobile Navigation -->
                    <div class="mobile-menu hidden md:hidden absolute left-0 right-0 bg-navy-900 border-b border-navy-800">
                        <div class="container mx-auto px-4 py-6 space-y-4">
                            <a href="index.html" class="block py-3 px-4 rounded-lg hover:bg-navy-800 text-gray-300 hover:text-white font-medium">Home</a>
                            <a href="solutions.html" class="block py-3 px-4 rounded-lg hover:bg-navy-800 text-gray-300 hover:text-white font-medium">Solutions</a>
                            <a href="pricing.html" class="block py-3 px-4 rounded-lg hover:bg-navy-800 text-gray-300 hover:text-white font-medium">Pricing</a>
                            <a href="contact.html" class="block py-3 px-4 rounded-lg bg-gradient-to-r from-electric-500 to-electric-600 text-white font-semibold text-center">
                                Contact Us
                            </a>
                        </div>
                    </div>
                </div>
            </header>
        `;
        
        // Add mobile menu functionality
        const hamburger = this.shadowRoot.querySelector('.hamburger');
        const mobileMenu = this.shadowRoot.querySelector('.mobile-menu');
        
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            mobileMenu.classList.toggle('hidden');
            
            if (!mobileMenu.classList.contains('hidden')) {
                mobileMenu.style.transform = 'scaleY(1)';
                mobileMenu.style.opacity = '1';
            } else {
                mobileMenu.style.transform = 'scaleY(0)';
                mobileMenu.style.opacity = '0';
            }
        });
        
        // Close mobile menu when clicking outside
        document.addEventListener('click', (e) => {
            if (!this.shadowRoot.contains(e.target) && !mobileMenu.classList.contains('hidden')) {
                hamburger.classList.remove('active');
                mobileMenu.classList.add('hidden');
                mobileMenu.style.transform = 'scaleY(0)';
                mobileMenu.style.opacity = '0';
            }
        });
        
        // Update active link based on current page
        this.updateActiveLink();
    }
    
    updateActiveLink() {
        const currentPath = window.location.pathname;
        const links = this.shadowRoot.querySelectorAll('a');
        
        links.forEach(link => {
            const linkPath = link.getAttribute('href');
            if (currentPath.includes(linkPath) && linkPath !== 'index.html') {
                link.classList.add('text-electric-400');
                if (link.classList.contains('nav-link')) {
                    link.style.setProperty('--after-width', '100%', 'important');
                }
            }
        });
    }
}

customElements.define('custom-header', CustomHeader);