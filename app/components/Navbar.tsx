'use client';

import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="bg-[#1E1E1E] shadow-lg fixed w-full z-10">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-2">
            <Link href="/" className="flex items-center space-x-2">
              <Image 
                src="/images/Logo1.png" 
                alt="SquareUp Logo" 
                width={32} 
                height={32} 
                className="h-8 w-8"
              />
              <h1 className="text-2xl font-bold text-white">SquareUp</h1>
            </Link>
          </div>

          {/* Nav Links */}
          <div className="hidden md:flex flex-1 justify-center">
            <div className="flex items-center space-x-8 mx-8">
              {[
                { href: "#home", label: "Home", active: true },
                { href: "/services", label: "Services", active: false },
                { href: "/work", label: "Work", active: false },
                { href: "/process", label: "Process", active: false },
                { href: "/about-us", label: "About", active: false },
                { href: "/careers", label: "Careers", active: false }
              ].map((link) => (
                <Link 
                  key={link.href}
                  href={link.href}
                  className={`
                    text-white 
                    ${link.active 
                      ? 'text-[#9EFF00] border-b-2 border-[#9EFF00]' 
                      : 'hover:text-[#9EFF00] hover:border-b-2 hover:border-[#9EFF00]'
                    } 
                    transition-colors p-3
                  `}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact Button - Desktop */}
          <div className="hidden md:block">
            <Link 
              href="/contact"
              className="bg-[#9EFF00] text-[#1E1E1E] px-4 py-2 rounded-md hover:bg-[#1E1E1E] hover:text-[#9EFF00] transition-colors"
            >
              Contact Us
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button 
              onClick={toggleMobileMenu}
              className="text-white hover:text-[#9EFF00] focus:outline-none"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth="2" 
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {[
                { href: "/home", label: "Home" },
                { href: "/services", label: "Services" },
                { href: "/work", label: "Work" },
                { href: "/process", label: "Process" },
                { href: "/about-us", label: "About" },
                { href: "/careers", label: "Careers" }
              ].map((link) => (
                <Link 
                  key={link.href}
                  href={link.href}
                  className="block text-white hover:text-[#9EFF00] py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
               <Link 
                 href="/contact"
                 className="bg-[#9EFF00] text-[#1E1E1E] px-3 py-1.5 md:px-4 md:py-2 rounded-md hover:bg-[#1E1E1E] hover:text-[#9EFF00] transition-colors text-sm"
               >
                 Contact Us
               </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}