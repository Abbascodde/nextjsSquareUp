'use client';

import React from 'react';

// SVG Icons as React Components for better performance and customization
const InnovationIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
  </svg>
);

const WorkLifeBalanceIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

const GrowthIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
  </svg>
);

// Define a type for benefit items
type BenefitItem = {
  icon: React.ReactNode;
  title: string;
  description: string;
};

export default function WhyJoinUs() {
  const benefits: BenefitItem[] = [
    {
      icon: <InnovationIcon />,
      title: 'Innovation First',
      description: 'Work with cutting-edge technologies and shape the future of digital experiences'
    },
    {
      icon: <WorkLifeBalanceIcon />,
      title: 'Work-Life Balance',
      description: 'Flexible hours, remote work options, and a culture that values personal time'
    },
    {
      icon: <GrowthIcon />,
      title: 'Growth Opportunities',
      description: 'Continuous learning, mentorship programs, and career advancement paths'
    }
  ];

  return (
    <section className="bg-[#262626] py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-white text-center mb-12">
          Why Choose <span className="text-[#9EFF00]">SquareUp?</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div 
              key={index} 
              className="bg-[#1E1E1E] p-8 rounded-lg hover:transform hover:scale-105 transition-all duration-300 group"
            >
              <div className="text-[#9EFF00] mb-4 group-hover:text-[#7FDD00] transition-colors">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{benefit.title}</h3>
              <p className="text-gray-300">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}