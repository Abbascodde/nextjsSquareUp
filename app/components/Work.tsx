'use client';

import React from 'react';
import Image from 'next/image';

export default function Work() {
  const workItems = [
    {
      icon: '/images/Icon-3.png',
      title: 'Expertise',
      description: 'Our team consists of highly skilled professionals who have a deep understanding of the digital landscape. We stay updated with the latest industry trends and best practices to deliver cutting-edge solutions.'
    },
    {
      icon: '/images/Icon-4.png',
      title: 'Client-Centric Approach',
      description: 'We prioritize our clients and their unique needs. We listen to your ideas, challenges, and goals, and tailor our services to meet your specific requirements. Your success is our success.'
    },
    {
      icon: '/images/Icon-5.png',
      title: 'Result-Driven Solutions',
      description: 'Our primary focus is on delivering results. We combine creativity and technical expertise to create digital products that drive business growth, enhance user experiences, and provide a competitive advantage.'
    },
    {
      icon: '/images/Icon -6.png',
      title: 'Long-Term Partnership',
      description: 'We value long-term relationships with our clients. We see ourselves as your digital partner, providing ongoing support, maintenance, and updates to ensure your digital products continue to thrive.'
    }
  ];

  return (
    <section id="work" className="work-section text-white py-10 bg-[#1E1E1E]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold mb-4 text-center">Why Choose SquareUp?</h1>
        <p className="text-sm text-gray-300 mb-8 text-center">
          Experience excellence in digital craftsmanship with our team of skilled professionals dedicated to delivering 
          <br /> exceptional results.
        </p>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
          {workItems.map((item, index) => (
            <div key={index} className="work-card">
              <div className="flex items-center mb-4 gap-3">
                <Image 
                  src={item.icon} 
                  alt={`${item.title} Icon`} 
                  width={48} 
                  height={48} 
                  className="h-12 w-12 mb-4"
                />
                <h2 className="text-2xl font-bold mb-3">{item.title}</h2>
              </div>
              <p className="text-sm text-gray-300 mb-4">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}