import React from 'react';
import Service from './Service';

export default function Services() {
  return (
    <section id="Services" className="services-section text-white py-10 bg-[#262626] relative">
      {/* Section Header */}
      <div className="relative mt-[20px] z-10 max-w-7xl mb-4 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <h1 className="text-3xl font-bold mb-4">Our Services</h1>
          <p className="text-sm text-gray-300 mb-8">
            Transform your brand with our innovative digital solutions that captivate and engage your audience.
          </p>
        </div>
      </div>

      {/* Services Grid */}
      <div className="relative z-10 mb-[30px] max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Service />
      </div>
    </section>
  );
}