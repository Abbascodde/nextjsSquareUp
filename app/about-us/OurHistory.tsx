'use client';

import React from 'react';

export default function OurHistory() {
  const storyCards = [
    {
      number: '01',
      title: 'The Beginning',
      description: 'Founded by a group of passionate designers and developers, SquareUp started with a vision to bridge the gap between innovative design and cutting-edge technology.'
    },
    {
      number: '02',
      title: 'Early Success',
      description: 'Our first projects showcased our unique approach to digital solutions, combining aesthetic excellence with technical innovation to deliver outstanding results.'
    },
    {
      number: '03',
      title: 'Growth & Innovation',
      description: 'As our team expanded, we embraced new technologies and methodologies, staying at the forefront of digital innovation and industry best practices.'
    },
    {
      number: '04',
      title: 'Global Impact',
      description: 'Our projects began reaching international audiences, helping businesses across the globe transform their digital presence and achieve remarkable success.'
    },
    {
      number: '05',
      title: 'Industry Recognition',
      description: 'Our commitment to excellence earned us numerous industry awards and recognition, establishing SquareUp as a leader in digital innovation.'
    },
    {
      number: '06',
      title: 'Future Vision',
      description: 'Today, we continue to push boundaries, embrace emerging technologies, and shape the future of digital experiences for our clients worldwide.'
    }
  ];

  return (
    <section className="py-20 text-white bg-[#1E1E1E]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Our <span className="text-[#9EFF00]">Story</span></h2>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto">
            From humble beginnings to digital excellence, our journey has been driven by passion, innovation,
            and dedication to crafting exceptional digital experiences.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {storyCards.map((card, index) => (
            <div 
              key={index} 
              className="bg-[#262626] rounded-2xl p-6 border border-[#9EFF00] hover:transform hover:scale-105 transition-all duration-300"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-[#9EFF00] rounded-full p-4 w-14 h-14 flex items-center justify-center">
                  <span className="text-[#1E1E1E] text-2xl font-bold">{card.number}</span>
                </div>
                <h3 className="text-xl font-bold">{card.title}</h3>
              </div>
              <p className="text-gray-300 leading-relaxed">
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}