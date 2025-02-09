'use client';

import React, { useState, FormEvent } from 'react';

const Footer: React.FC = () => {
  const [email, setEmail] = useState('');

  const handleNewsletterSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // TODO: Implement newsletter subscription logic
    console.log('Newsletter subscription email:', email);
    setEmail(''); // Clear the input after submission
  };

  return (
    <footer className="bg-[#1E1E1E] pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-6">SquareUp</h3>
            <p className="text-gray-300 mb-6">
              Creating exceptional digital experiences that drive growth and success for businesses worldwide.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-[#9EFF00] hover:text-white transition-colors">
                <span className="sr-only">Facebook</span>
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
              <a href="#" className="text-[#9EFF00] hover:text-white transition-colors">
                <span className="sr-only">Twitter</span>
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              <a href="#" className="text-[#9EFF00] hover:text-white transition-colors">
                <span className="sr-only">LinkedIn</span>
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-6">Quick Links</h3>
            <ul className="space-y-4">
              <li><a href="#home" className="text-gray-300 hover:text-[#9EFF00] transition-colors">Home</a></li>
              <li><a href="#Services" className="text-gray-300 hover:text-[#9EFF00] transition-colors">Services</a></li>
              <li><a href="#work" className="text-gray-300 hover:text-[#9EFF00] transition-colors">Our Work</a></li>
              <li><a href="#clients" className="text-gray-300 hover:text-[#9EFF00] transition-colors">Clients</a></li>
              <li><a href="#faq" className="text-gray-300 hover:text-[#9EFF00] transition-colors">FAQ</a></li>
              <li><a href="#contact" className="text-gray-300 hover:text-[#9EFF00] transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-6">Services</h3>
            <ul className="space-y-4">
              <li><a href="#" className="text-gray-300 hover:text-[#9EFF00] transition-colors">Web Development</a></li>
              <li><a href="#" className="text-gray-300 hover:text-[#9EFF00] transition-colors">Mobile Apps</a></li>
              <li><a href="#" className="text-gray-300 hover:text-[#9EFF00] transition-colors">UI/UX Design</a></li>
              <li><a href="#" className="text-gray-300 hover:text-[#9EFF00] transition-colors">Digital Marketing</a></li>
              <li><a href="#" className="text-gray-300 hover:text-[#9EFF00] transition-colors">Branding</a></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-6">Newsletter</h3>
            <p className="text-gray-300 mb-4">Subscribe to our newsletter for updates and insights.</p>
            <form onSubmit={handleNewsletterSubmit} className="space-y-4">
              <div>
                <input 
                  type="email" 
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full px-4 py-3 bg-[#262626] border border-gray-700 rounded-lg focus:ring-2 focus:ring-[#9EFF00] focus:border-transparent text-white placeholder-gray-500"
                />
              </div>
               <button 
                 type="submit"
                 className="w-full bg-[#9EFF00] text-[#1E1E1E] py-2 px-4 md:py-3 md:px-6 rounded-lg font-medium hover:bg-[#8EEF00] transition-colors duration-300 text-sm"
               >
                 Subscribe
               </button>
            </form>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800">
          <div className="pt-8 flex flex-col md:flex-row justify-between items-center">
            {/* Copyright */}
            <p className="text-gray-400 text-sm text-center md:text-left">
              © 2025 SquareUp. All rights reserved.
            </p>
            {/* Legal Links */}
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-[#9EFF00] text-sm transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-[#9EFF00] text-sm transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-gray-400 hover:text-[#9EFF00] text-sm transition-colors">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;