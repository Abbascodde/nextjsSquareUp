'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Services() {
  const services = [
    {
      icon: '/imge/Icon.png',
      title: 'Design',
      description: 'At Squareup, our design team is passionate about creating stunning, user-centric designs that captivate your audience and elevate your brand. We believe that great design is not just about aesthetics; it\'s about creating seamless and intuitive user experiences.'
    },
    {
      icon: '/imge/Icon (1).png',
      title: 'Development',
      description: 'At Squareup, our design team is passionate about creating stunning, user-centric designs that captivate your audience and elevate your brand. We believe that great design is not just about aesthetics; it\'s about creating seamless and intuitive user experiences.'
    },
    {
      icon: '/imge/Icon (2).png',
      title: 'Marketing',
      description: 'At Squareup, our design team is passionate about creating stunning, user-centric designs that captivate your audience and elevate your brand. We believe that great design is not just about aesthetics; it\'s about creating seamless and intuitive user experiences.'
    }
  ];

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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="service-card bg-[#1E1E1E] p-6 rounded-lg transition-transform duration-300 hover:scale-105"
            >
              <Image 
                src={service.icon} 
                alt={`${service.title} Icon`} 
                width={48} 
                height={48} 
                className="h-12 w-12 mb-4"
              />
              <h2 className="text-2xl font-bold mb-3">{service.title}</h2>
              <p className="text-sm text-gray-300 mb-4">{service.description}</p>
              <Link 
                href="#" 
                className="service-card-button block w-full bg-[#9EFF00] text-black py-2 text-center rounded-md hover:bg-[#8EEF00] transition-colors"
              >
                Learn More
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}