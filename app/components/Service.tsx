import React from 'react';
import Image from 'next/image';

export default function Service() {
  const serviceDetails = [
    {
      icon: '/icons/Icon-3.png',
      title: 'Web Development',
      description: 'We craft responsive, high-performance websites and web applications using modern technologies like Next.js, React, and TypeScript.',
      details: [
        'Custom Website Design',
        'E-commerce Solutions',
        'Web Application Development',
        'Performance Optimization'
      ]
    },
    {
      icon: '/icons/Icon-4.png',
      title: 'Mobile Development',
      description: 'Cross-platform mobile app development that provides seamless user experiences on iOS and Android.',
      details: [
        'Native iOS Development',
        'Native Android Development',
        'React Native Apps',
        'Flutter Development'
      ]
    },
    {
      icon: '/icons/Icon-5.png',
      title: 'UI/UX Design',
      description: 'User-centered design that combines aesthetics with functionality to create intuitive digital experiences.',
      details: [
        'User Research',
        'Wireframing',
        'Prototype Design',
        'User Testing'
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-[#1E1E1E] text-white">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-5xl font-bold text-center mb-12">Our Services</h1>
        
        <div className="grid md:grid-cols-3 gap-8">
          {serviceDetails.map((service, index) => (
            <div 
              key={index} 
              className="bg-[#2A2A2A] rounded-lg p-6 hover:scale-105 transition-transform"
            >
              <div className="flex justify-center mb-6">
                <Image 
                  src={service.icon} 
                  alt={service.title} 
                  width={80} 
                  height={80} 
                />
              </div>
              <h2 className="text-2xl font-semibold text-center mb-4">{service.title}</h2>
              <p className="text-gray-300 text-center mb-4">{service.description}</p>
              <ul className="list-disc list-inside text-gray-400">
                {service.details.map((detail, idx) => (
                  <li key={idx} className="mb-2">{detail}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}