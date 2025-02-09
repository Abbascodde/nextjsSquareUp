'use client';

import React from 'react';
import Image from 'next/image';

export default function Companies() {
  const companies = [
    { name: 'Zapier', logo: '/images/zapier.png' },
    { name: 'Spotify', logo: '/images/spotify.png' },
    { name: 'Zoom', logo: '/images/zoom10111.png' }
  ];

  return (
    <section className="py-8 bg-[#1E1E1E]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center mb-8">
          <div className="inline-block border-4 border-[#262626] rounded-[50px] px-6 py-2">
            <p className="text-xs sm:text-sm font-bold text-white text-center">
              Trusted By 250+ Companies
            </p>
          </div>
        </div>
        
        <div className="logos-slide-container overflow-hidden relative">
          <div className="logos-slide flex space-x-12 animate-slide">
            {[...companies, ...companies].map((company, index) => (
              <div key={index} className="logo-wrapper">
                <Image 
                  src={company.logo} 
                  alt={company.name}
                  width={120}
                  height={48}
                  className="h-8 sm:h-10 md:h-12 w-auto opacity-70 hover:opacity-100 transition-all duration-300 transform hover:scale-110"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}