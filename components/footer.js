
class CustomFooter extends HTMLElement {
    connectedCallback() {
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.innerHTML = `
            <style>
                :host {
                    display: block;
                    margin-top: auto;
                }
                
                .footer-container {
                    background: rgba(15, 23, 42, 0.95);
                    border-top: 1px solid rgba(30, 41, 59, 0.5);
                }
                
                .footer-link {
                    position: relative;
                    transition: color 0.3s ease;
                }
                
                .footer-link:hover {
                    color: #67e8f9;
                }
                
                .footer-link::before {
                    content: '→';
                    position: absolute;
                    left: -20px;
                    opacity: 0;
                    transition: all 0.3s ease;
                }
                
                .footer-link:hover::before {
                    opacity: 1;
                    left: -15px;
                }
                
                .social-icon {
                    transition: all 0.3s ease;
                }
                
                .social-icon:hover {
                    transform: translateY(-3px);
                    box-shadow: 0 5px 15px rgba(6, 182, 212, 0.2);
                }
                
                @media (max-width: 768px) {
                    .footer-grid {
                        grid-template-columns: 1fr;
                        gap: 2rem;
                    }
                }
            </style>
            
            <footer class="footer-container">
                <div class="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
                    <div class="grid grid-cols-1 md:grid-cols-4 gap-8 footer-grid">
                        <!-- Company Info -->
                        <div class="space-y-4">
                            <div class="flex items-center space-x-3">
                                <div class="w-10 h-10 bg-gradient-to-br from-electric-500 to-electric-600 rounded-lg flex items-center justify-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                                    </svg>
                                </div>
                                <div class="flex flex-col">
                                    <span class="text-xl font-bold text-white tracking-tight">Opsentra AI</span>
                                    <span class="text-xs text-electric-400 font-medium">Intelligence Infrastructure</span>
                                </div>
                            </div>
                            <p class="text-gray-400 text-sm">
                                Building scalable AI infrastructure for forward-thinking enterprises.
                            </p>
                            <div class="pt-4">
                                <a href="mailto:info@opsentra.ai" class="text-electric-400 hover:text-electric-300 font-medium inline-flex items-center">
                                    <i data-feather="mail" class="w-4 h-4 mr-2"></i>
                                    info@opsentra.ai
                                </a>
                            </div>
                        </div>
                        
                        <!-- Quick Links -->
                        <div>
                            <h3 class="text-lg font-bold text-white mb-6">Quick Links</h3>
                            <ul class="space-y-3">
                                <li><a href="index.html" class="footer-link text-gray-400">Home</a></li>
                                <li><a href="solutions.html" class="footer-link text-gray-400">Solutions</a></li>
                                <li><a href="pricing.html" class="footer-link text-gray-400">Pricing</a></li>
                                <li><a href="contact.html" class="footer-link text-gray-400">Contact</a></li>
                            </ul>
                        </div>
                        
                        <!-- Solutions -->
                        <div>
                            <h3 class="text-lg font-bold text-white mb-6">Solutions</h3>
                            <ul class="space-y-3">
                                <li><a href="solutions.html#customer-service" class="footer-link text-gray-400">Customer Service AI</a></li>
                                <li><a href="solutions.html#automation" class="footer-link text-gray-400">Task Automation</a></li>
                                <li><a href="solutions.html#research" class="footer-link text-gray-400">Research Agents</a></li>
                                <li><a href="solutions.html#dashboards" class="footer-link text-gray-400">Analytics Dashboards</a></li>
                            </ul>
                        </div>
                        
                        <!-- Legal -->
                        <div>
                            <h3 class="text-lg font-bold text-white mb-6">Legal</h3>
                            <ul class="space-y-3">
                                <li><a href="#" class="footer-link text-gray-400">Privacy Policy</a></li>
                                <li><a href="#" class="footer-link text-gray-400">Terms of Service</a></li>
                                <li><a href="#" class="footer-link text-gray-400">Cookie Policy</a></li>
                                <li><a href="#" class="footer-link text-gray-400">Security</a></li>
                            </ul>
                        </div>
                    </div>
                    
                    <!-- Divider -->
                    <div class="border-t border-navy-800 mt-10 pt-8">
                        <div class="flex flex-col md:flex-row justify-between items-center">
                            <p class="text-gray-500 text-sm">
                                © ${new Date().getFullYear()} Opsentra AI. All rights reserved.
                            </p>
                            <div class="flex items-center space-x-4 mt-4 md:mt-0">
                                <a href="#" class="social-icon w-10 h-10 bg-navy-800 rounded-full flex items-center justify-center hover:bg-electric-500/10">
                                    <i data-feather="linkedin" class="w-4 h-4 text-gray-400"></i>
                                </a>
                                <a href="#" class="social-icon w-10 h-10 bg-navy-800 rounded-full flex items-center justify-center hover:bg-electric-500/10">
                                    <i data-feather="twitter" class="w-4 h-4 text-gray-400"></i>
                                </a>
                                <a href="#" class="social-icon w-10 h-10 bg-navy-800 rounded-full flex items-center justify-center hover:bg-electric-500/10">
                                    <i data-feather="github" class="w-4 h-4 text-gray-400"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        `;
    }
}

customElements.define('custom-footer', CustomFooter);
