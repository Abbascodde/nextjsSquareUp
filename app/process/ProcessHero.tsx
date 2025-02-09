'use client';

import React from 'react';

const ProcessHero = () => {
  return (
    <section className="relative bg-[#1E1E1E] py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[#1E1E1E] via-[#2A2A2A] to-[#1E1E1E] opacity-50"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 relative group">
            Our <span className="text-[#9EFF00] relative">
              Process
              <span 
                className="absolute -bottom-2 left-0 right-0 h-1 bg-[#9EFF00] 
                           transform scale-x-0 group-hover:scale-x-100 
                           transition-transform duration-500 origin-center"
              ></span>
            </span>
          </h1>
          
          <p className="text-gray-300 text-lg md:text-xl max-w-3xl mx-auto mb-10 leading-relaxed">
            We follow a systematic, client-centric approach that transforms complex challenges 
            into innovative solutions, ensuring exceptional results for every project.
          </p>
          
          <div>
            <a 
              href="#our-approach" 
              className="inline-block bg-[#9EFF00] text-[#1E1E1E] px-8 py-3 rounded-full 
                         font-semibold hover:bg-[#8EEF00] transition-all duration-300 
                         shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Explore Our Approach
            </a>
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div 
          className="absolute top-1/4 left-1/4 w-32 h-32 bg-[#9EFF00] opacity-10 rounded-full blur-2xl"
        ></div>
        <div 
          className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-[#9EFF00] opacity-10 rounded-full blur-2xl"
        ></div>
      </div>
    </section>
  );
};

export default ProcessHero;