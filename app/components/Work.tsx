'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Work() {
  const works = [
    {
      image: '/imge/Project1.png',
      title: 'Project One',
      description: 'A comprehensive digital solution that transforms business processes.',
      link: '#'
    },
    {
      image: '/imge/Project2.png',
      title: 'Project Two',
      description: 'An innovative mobile application that revolutionizes user experience.',
      link: '#'
    },
    {
      image: '/imge/Project3.png',
      title: 'Project Three',
      description: 'A cutting-edge web platform designed for seamless collaboration.',
      link: '#'
    }
  ];

  return (
    <section id="work" className="bg-[#1E1E1E] py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12 text-white">Our Featured Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {works.map((work, index) => (
            <div 
              key={index} 
              className="work-card transition-transform duration-300 hover:scale-105"
            >
              <div className="bg-[#262626] rounded-lg overflow-hidden shadow-lg">
                <Image 
                  src={work.image} 
                  alt={work.title} 
                  width={400} 
                  height={300} 
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 text-white">{work.title}</h3>
                  <p className="text-gray-300 mb-4">{work.description}</p>
                  <Link 
                    href={work.link} 
                    className="service-card-button"
                  >
                    View Project
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}