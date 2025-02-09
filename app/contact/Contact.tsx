'use client';

import React from 'react';
import Link from 'next/link';

export default function ContactHero() {
  return (
    <section className="services-section text-white py-32 md:py-40 bg-[#262626] relative overflow-hidden">
      <div className="absolute inset-0">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
          style={{ backgroundImage: "url('/imge/Text Container.png')" }}
        ></div>
        <div className="absolute inset-0 bg-black opacity-70"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col items-center text-center space-y-6">
          <div className="bg-[#1E1E1E] bg-opacity-50 p-6 md:p-10 rounded-xl shadow-2xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 max-w-3xl leading-tight text-white">
              Contact <span className="text-[#9EFF00]">Us</span>
            </h1>

            <p className="text-gray-300 max-w-2xl mb-8 leading-relaxed text-lg">
              Get in touch with us today and let us help you with any questions or inquiries you may have. We're here to support your vision.
            </p>

            <Link 
              href="/contact#contact"
              className="inline-block bg-[#9EFF00] text-[#1E1E1E] px-10 py-4 rounded-lg font-bold text-lg 
              hover:bg-[#8EEF00] hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              Start Project
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}