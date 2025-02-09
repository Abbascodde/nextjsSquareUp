// File: c:\Users\840 G3\Desktop\sureJob\my-app\app\process\ProcessSteps.tsx
'use client';

import React, { useState } from 'react';

const ProcessSteps = () => {
  const [showAllSteps, setShowAllSteps] = useState(false);

  const steps = [
    {
      number: '01',
      title: 'Discovery & Planning',
      description: 'Initial consultation and project scope definition to understand your goals and requirements.',
      details: [
        'Initial consultation',
        'Project scope definition',
        'Goals and requirements gathering',
        'Timeline and budget planning'
      ]
    },
    {
      number: '02',
      title: 'Research & Strategy',
      description: 'Comprehensive analysis of market trends and user needs to develop a strategic roadmap.',
      details: [
        'Market analysis',
        'User research',
        'Competitive analysis',
        'Strategic roadmap development'
      ]
    },
    {
      number: '03',
      title: 'Design & Conceptualization',
      description: 'Creating visual designs and prototypes that align with your brand and user needs.',
      details: [
        'Wireframing',
        'UI/UX design',
        'Design system creation',
        'Prototype development'
      ]
    },
    {
      number: '04',
      title: 'Development & Implementation',
      description: 'Transforming designs into fully functional solutions with clean, efficient code.',
      details: [
        'Frontend development',
        'Backend integration',
        'Content implementation',
        'Quality assurance'
      ]
    },
    {
      number: '05',
      title: 'Testing & Optimization',
      description: 'Rigorous testing and optimization to ensure perfect performance across all platforms.',
      details: [
        'Cross-browser testing',
        'Performance optimization',
        'Security testing',
        'User acceptance testing'
      ]
    },
    {
      number: '06',
      title: 'Launch & Support',
      description: 'Smooth deployment and ongoing support to ensure continued success.',
      details: [
        'Deployment preparation',
        'Go-live execution',
        'Post-launch monitoring',
        'Ongoing maintenance'
      ]
    }
  ];

  const displayedSteps = showAllSteps ? steps : steps.slice(0, 3);

  return (
    <section className="bg-[#262626] py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayedSteps.map((step) => (
            <div 
              key={step.number} 
              className="bg-[#1E1E1E] p-8 rounded-lg hover:transform hover:scale-105 transition-all duration-300"
            >
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <span className="text-[#9EFF00] text-6xl font-bold leading-none">
                    {step.number}
                  </span>
                  <h2 className="text-2xl font-bold text-white mt-2">
                    {step.title}
                  </h2>
                </div>
                <p className="text-gray-300">
                  {step.description}
                </p>
                <ul className="space-y-3 text-gray-300">
                  {step.details.map((detail, index) => (
                    <li key={index} className="flex items-center gap-2">
                      <span className="text-[#9EFF00]">•</span>
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {!showAllSteps && steps.length > 3 && (
          <div className="text-center mt-12">
            <button 
              onClick={() => setShowAllSteps(true)}
              className="bg-[#9EFF00] text-[#1E1E1E] px-8 py-3 rounded-full 
                         font-semibold hover:bg-[#8EEF00] transition-all duration-300 
                         shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              View All Steps
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProcessSteps;