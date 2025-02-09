'use client';

import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export default function Summary() {
  const strengths = [
    {
      title: 'Design',
      description: 'Creating beautiful, intuitive interfaces'
    },
    {
      title: 'Engineering',
      description: 'Building robust, scalable solutions'
    },
    {
      title: 'Management',
      description: 'Ensuring seamless project delivery'
    }
  ];

  return (
    <section className="py-10 text-white bg-[#262626] border-t border-[#9EFF00]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          {/* Logo and Image Side */}
          <div className="w-full md:w-1/2 flex justify-center">
            <div className="relative">
              <div className="absolute -inset-4 bg-[#9EFF00] opacity-10 blur-lg rounded-full"></div>
              <Image 
                src="/images/Logo001.png" 
                alt="SquareUp Logo" 
                width={256} 
                height={256} 
                className="relative w-64 h-64 object-contain"
              />
            </div>
          </div>

          {/* Content Side */}
          <div className="w-full md:w-1/2 space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Today, <span className="text-[#9EFF00]">SquareUp</span> Continues to Thrive
            </h2>

            <div className="space-y-4">
              <p className="text-xl text-gray-300 leading-relaxed">
                As a leading digital product agency, we combine the power of:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 my-8">
                {strengths.map((strength, index) => (
                  <div 
                    key={index}
                    className="bg-[#1E1E1E] p-4 rounded-lg border border-[#9EFF00] hover:bg-[#2A2A2A] transition-colors"
                  >
                    <h3 className="text-[#9EFF00] font-bold mb-2">{strength.title}</h3>
                    <p className="text-sm text-gray-300">{strength.description}</p>
                  </div>
                ))}
              </div>

              <p className="text-gray-300 leading-relaxed">
                We invite you to join us on our journey and discover how we can help bring your digital
                ideas to life with innovative solutions and exceptional experiences.
              </p>

              <div className="pt-8">
                <Link 
                  href="/#contact"
                  className="inline-block bg-[#9EFF00] text-[#1E1E1E] px-8 py-3 rounded-md font-medium hover:bg-[#8EEF00] transition-colors"
                >
                  Start Your Project
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}