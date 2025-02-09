'use client';

import React from 'react';
import Link from 'next/link';

const ServiceIcons = {
  WebDev: () => (
    <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
        d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
    </svg>
  ),
  UiUx: () => (
    <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
        d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
    </svg>
  ),
  DigitalMarketing: () => (
    <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
        d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
    </svg>
  )
};

export default function ServicesHero() {
  const serviceCategories = [
    {
      icon: ServiceIcons.WebDev,
      title: 'Web Development',
      description: 'Custom websites and web applications built with cutting-edge technologies.'
    },
    {
      icon: ServiceIcons.UiUx,
      title: 'UI/UX Design',
      description: 'Beautiful, intuitive interfaces that deliver exceptional user experiences.'
    },
    {
      icon: ServiceIcons.DigitalMarketing,
      title: 'Digital Marketing',
      description: 'Strategic marketing solutions to grow your online presence and reach.'
    }
  ];

  return (
    <section className="pt-32 pb-20 bg-[#1E1E1E] lg:mt-[50px] mt-[50px] relative overflow-hidden">
      
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[#9EFF00] rotate-12 transform -skew-y-12 scale-150 blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
       
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Transforming Ideas into
            <span className="text-[#9EFF00]"> Digital Reality</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-12">
            We offer comprehensive digital solutions tailored to your needs. From web development to branding,
            we are here to help you succeed in the digital world.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <Link 
              href="#services-list"
              className="inline-block text-center bg-[#9EFF00] text-[#1E1E1E] 
              px-4 py-2 sm:px-8 sm:py-3 
              rounded-md font-medium 
              hover:bg-[#8EEF00] transition-colors 
              w-full sm:w-auto text-sm sm:text-base"
            >
              Explore Services
            </Link>
            <Link 
              href="#contact"
              className="inline-block text-center 
              border-2 border-[#9EFF00] text-[#9EFF00] 
              px-4 py-2 sm:px-8 sm:py-3 
              rounded-md font-medium 
              hover:bg-[#9EFF00] hover:text-[#1E1E1E] transition-colors 
              w-full sm:w-auto text-sm sm:text-base"
            >
              Get in Touch
            </Link>
          </div>
        </div>

    
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
          {serviceCategories.map((service, index) => (
            <div 
              key={index}
              className="bg-[#262626] p-8 rounded-xl border border-[#9EFF00] hover:transform hover:scale-105 transition-all duration-300"
            >
              <div className="text-[#9EFF00] mb-4">
                <service.icon />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
              <p className="text-gray-300">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}