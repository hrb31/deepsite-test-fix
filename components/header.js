class CustomHeader extends HTMLElement {
    connectedCallback() {
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.innerHTML = `
            <style>
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