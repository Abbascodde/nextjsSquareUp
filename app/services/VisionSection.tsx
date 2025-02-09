import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function VisionSection() {
  return (
    <section id="Services" className="services-section text-white py-16 bg-[#262626] relative">
       
      <div className="absolute inset-0">
        
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat" 
          style={{backgroundImage: "url('/images/Text Container.png')"}}
        ></div>
      
        <div className="absolute inset-0 bg-black opacity-70"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="flex flex-col items-center text-center">
          {/* Logo */}
          <div className="mb-8">
            <Image 
              src="/images/Logo001.png" 
              alt="SquareUp Logo" 
              width={96} 
              height={96} 
              className="object-contain"
            />
          </div>

          {/* Content */}
          <h1 className="text-3xl md:text-4xl font-bold mb-6 max-w-3xl">
            Let us Bring your Ideas to Life in the 
            <span className="text-[#9EFF00]"> Digital World</span>
          </h1>

          <p className="text-gray-300 max-w-2xl mb-8 leading-relaxed">
            No matter which services you choose, we are committed to delivering exceptional results that exceed 
            your expectations. Our multidisciplinary team works closely together to ensure seamless 
            collaboration and a unified vision for your digital product.
          </p>

          {/* CTA Button */}
          <Link 
            href="#contact"
            className="inline-block bg-[#9EFF00] text-[#1E1E1E] px-8 py-3 rounded-md font-medium hover:bg-[#8EEF00] transition-colors"
          >
            Start Project
          </Link>
        </div>
      </div>
    </section>
  );
}