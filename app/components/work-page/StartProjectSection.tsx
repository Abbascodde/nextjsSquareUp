import React from 'react';
import Link from 'next/link';

export default function StartProjectSection() {
  const stats = [
    { value: '150+', label: 'Projects Completed' },
    { value: '98%', label: 'Client Satisfaction' },
    { value: '10+', label: 'Years Experience' },
    { value: '24/7', label: 'Support Available' }
  ];

  return (
    <section className="py-20 bg-[#1E1E1E]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Left Content */}
          <div className="lg:w-1/2">
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Start Your <span className="text-[#9EFF00]">Next Project?</span>
            </h2>
            <p className="text-gray-300 text-lg mb-8">
              Transform your ideas into reality with our expert team. We are here to help you create something extraordinary.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link 
                href="/contact" 
                className="inline-flex items-center gap-2 bg-[#9EFF00] text-[#1E1E1E] px-8 py-3 rounded-md hover:bg-[#8EE000] transition-colors font-semibold"
              >
                Get Started
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <Link 
                href="#" 
                className="inline-flex items-center gap-2 border-2 border-[#9EFF00] text-[#9EFF00] px-8 py-3 rounded-md hover:bg-[#9EFF00] hover:text-[#1E1E1E] transition-colors font-semibold"
              >
                View Process
              </Link>
            </div>
          </div>
          
          {/* Right Content - Stats */}
          <div className="lg:w-1/2 grid grid-cols-2 gap-8">
            {stats.map((stat, index) => (
              <div 
                key={index} 
                className="text-center p-8 bg-[#262626] rounded-xl"
              >
                <h3 className="text-4xl font-bold text-[#9EFF00] mb-2">
                  {stat.value}
                </h3>
                <p className="text-white">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}