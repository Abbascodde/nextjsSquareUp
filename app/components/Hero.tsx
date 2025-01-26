'use client';

import React from 'react';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="bg-black">
      {/* Hero Section */}
      <Hero />
    </main>
  );
}

function Hero() {
  return (
    <section id="home" className="pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="text-center">
          <h1 className="text-4xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl">
            <span className="block">A Digital Product Studio that will Work</span>
            <span className="block text-white">With SquareUp</span>
          </h1>
          
          {/* Social good */}
          <div className="bg-[#1A1A1A] text-white flex flex-wrap items-center justify-center mt-6 border border-[#242424] rounded-md w-full max-w-[900px] mx-auto p-4 gap-2 md:gap-4 px-4 md:px-8">
            <p className="text-[#98989A] text-sm md:text-base">For</p>
            {[
              'Startups',
              'Enterprises',
              'Media & Publishers',
              'Social Good'
            ].map((item, index) => (
              <React.Fragment key={index}>
                {index > 0 && index < 3 && (
                  <span className="text-[#98989A] text-sm md:text-base">{index === 2 ? 'and' : ','}</span>
                )}
                <span className="bg-[#262626] p-1.5 md:p-2 rounded-md text-sm md:text-base whitespace-nowrap">
                  {item}
                </span>
              </React.Fragment>
            ))}
          </div>

          <p className="mt-3 max-w-md mx-auto text-base text-white sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
            We create stunning digital experiences that drive growth and success for your business.
          </p>

          <div className="mt-5 max-w-md mx-auto flex flex-col sm:flex-row items-center justify-center gap-3 md:mt-8">
            <div className="rounded-md shadow w-full sm:w-auto">
              <Link 
                href="/work" 
                className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-[#242424] md:py-2 md:text-lg md:px-5"
              >
                Our Works
              </Link>
            </div>
            <div className="rounded-md shadow w-full sm:w-auto">
              <Link 
                href="#contact" 
                className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-[#1E1E1E] bg-[#9EFF00] md:py-2 md:text-lg md:px-5"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}