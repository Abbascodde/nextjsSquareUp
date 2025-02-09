'use client';

import Link from 'next/link';

export default function CTASection() {
  return (
    <section className="bg-[#1E1E1E] py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
          Ready to Start Your <span className="text-[#9EFF00]">Project?</span>
        </h2>
        <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
          Let's work together to bring your vision to life with our proven process and expertise.
        </p>
        <Link 
          href="#contact" 
          className="inline-flex items-center gap-2 bg-[#9EFF00] text-[#1E1E1E] px-8 py-3 rounded-md hover:bg-[#8EE000] transition-colors font-semibold"
        >
          Get Started
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className="h-5 w-5" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth="2" 
              d="M17 8l4 4m0 0l-4 4m4-4H3" 
            />
          </svg>
        </Link>
      </div>
    </section>
  );
}