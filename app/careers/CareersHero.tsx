'use client';

import React from 'react';
import Link from 'next/link';

export default function CareersHero() {
  return (
    <section className="bg-[#1E1E1E] py-20 sm:py-32 md:py-40 lg:py-48 relative">
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col justify-center items-center text-center">
          <div className="space-y-6 max-w-4xl">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6 leading-tight">
              Join Our <span className="text-[#9EFF00]">Innovative</span> Team
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-6 sm:mb-8 leading-relaxed">
              Be part of a creative collective that's reimagining digital experiences and pushing the boundaries of technology.
            </p>
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <Link 
                href="/apply" 
                className="inline-block text-center bg-[#9EFF00] text-black px-4 py-2 sm:px-6 sm:py-3 rounded-full font-semibold 
                hover:bg-[#7FDD00] transition-colors duration-300 ease-in-out 
                w-full sm:w-auto text-sm sm:text-base"
              >
                View Open Positions
              </Link>
              <Link 
                href="/about-us" 
                className="inline-block text-center border border-white text-white px-4 py-2 sm:px-6 sm:py-3 rounded-full font-semibold 
                hover:bg-white hover:text-black transition-colors duration-300 ease-in-out
                w-full sm:w-auto text-sm sm:text-base"
              >
                Learn About Us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}