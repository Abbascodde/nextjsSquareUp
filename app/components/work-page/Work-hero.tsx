import React from 'react';
import Link from 'next/link';

export default function WorkHero() {
  return (
    <section className="relative bg-black pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative z-10">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Our Creative Portfolio
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-8">
              Discover our innovative solutions and successful projects that have helped businesses transform their digital presence.
            </p>
            <div className="flex justify-center gap-4">
              <Link 
                href="#portfolio"
                className="bg-[#9EFF00] text-[#1E1E1E] px-8 py-3 rounded-md hover:bg-[#8EE000] transition-colors font-semibold"
              >
                View Projects
              </Link>
              <Link 
                href="#contact"
                className="border-2 border-[#9EFF00] text-[#9EFF00] px-8 py-3 rounded-md hover:bg-[#9EFF00] hover:text-[#1E1E1E] transition-colors font-semibold"
              >
                Get in Touch
              </Link>
            </div>
          </div>
        </div>
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
          <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-[#9EFF00] rounded-full filter blur-3xl opacity-10"></div>
          <div className="absolute bottom-1/4 right-1/3 w-48 h-48 bg-[#9EFF00] rounded-full filter blur-3xl opacity-10"></div>
        </div>
      </div>
    </section>
  );
}