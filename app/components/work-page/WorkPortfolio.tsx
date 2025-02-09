'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface Project {
  image: string;
  category: string;
  title: string;
  description: string;
  link: string;
  year: string;
}

export default function WorkPortfolio() {
  const [showAllProjects, setShowAllProjects] = useState(false);

  const projects: Project[] = [
    {
      image: '/images/Image-0027.png',
      category: 'E-Commerce',
      title: 'Chic Boutique',
      description: 'A modern e-commerce platform with seamless shopping experience and secure payments.',
      link: 'https://chicboutique.com',
      year: '2024'
    },
    {
      image: '/images/Image (1).png',
      category: 'Mobile App',
      title: 'FitTrack Pro',
      description: 'Fitness tracking app with personalized workout plans and progress analytics.',
      link: '#',
      year: '2023'
    },
    {
      image: '/images/Image (3).png',
      category: 'Web Platform',
      title: 'EduLearn Hub',
      description: 'Online learning platform with interactive courses and real-time collaboration.',
      link: '#',
      year: '2023'
    },
    {
      image: '/images/Image (4).png',
      category: 'Analytics',
      title: 'MarketPro Analytics',
      description: 'Comprehensive marketing analytics dashboard with real-time data visualization and AI-powered insights.',
      link: 'https://marketpro.demo.com',
      year: '2024'
    },
    {
      image: '/images/Image (5).png',
      category: 'Social Media',
      title: 'ConnectHub Social',
      description: 'Next-gen social media platform with AI-powered content recommendations and real-time engagement analytics.',
      link: '#',
      year: '2024'
    },
    {
      image: '/images/Image (6).png',
      category: 'Mobile App',
      title: 'FoodExpress',
      description: 'Smart food delivery platform with real-time tracking and AI-powered delivery optimization.',
      link: '#',
      year: '2023'
    },
    {
      image: '/images/Image (7).png',
      category: 'Real Estate',
      title: 'PropertyFinder Pro',
      description: 'Advanced real estate platform with VR property tours and AI-powered property matching.',
      link: '#',
      year: '2024'
    },
    {
      image: '/images/Image (8).png',
      category: 'Healthcare',
      title: 'MediCare Connect',
      description: 'Telemedicine platform with secure video consultations and electronic health records management.',
      link: '#',
      year: '2023'
    },
    {
      image: '/images/Image (9).png',
      category: 'Education',
      title: 'SkillMaster LMS',
      description: 'Comprehensive learning management system with interactive courses and progress tracking.',
      link: '#',
      year: '2024'
    }
  ];

  const displayProjects = showAllProjects ? projects : projects.slice(0, 3);

  const toggleProjects = () => {
    setShowAllProjects(!showAllProjects);
  };

  return (
    <section className="py-20 bg-[#1E1E1E]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Our <span className="text-[#9EFF00]">Portfolio</span></h2>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto">
            Explore our diverse collection of successful projects that have transformed businesses and delighted users.
          </p>
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" id="portfolio-grid">
          {displayProjects.map((project, index) => (
            <div 
              key={index}
              className="group relative overflow-hidden rounded-xl bg-[#262626] transition-all duration-300 hover:transform hover:scale-105"
            >
              <div className="aspect-w-16 aspect-h-9 overflow-hidden">
                <Image 
                  src={project.image} 
                  alt={project.title}
                  width={600}
                  height={400}
                  className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-110"
                />
              </div>
              <div className="p-6">
                <div className="mb-4">
                  <span className="inline-block px-3 py-1 text-sm text-[#9EFF00] bg-[#1E1E1E] rounded-full">
                    {project.category}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                <p className="text-gray-400 mb-4">{project.description}</p>
                <div className="flex items-center justify-between">
                  <Link 
                    href={project.link} 
                    target="_blank"
                    className="text-[#9EFF00] hover:text-white transition-colors flex items-center gap-2"
                  >
                    {project.link === '#' ? 'Case Study' : 'Visit Website'}
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </Link>
                  <span className="text-gray-500">{project.year}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Projects Button */}
        <div className="text-center mt-12">
          <button 
            onClick={toggleProjects}
            className="inline-flex items-center gap-2 bg-[#9EFF00] text-[#1E1E1E] px-8 py-3 rounded-md hover:bg-[#8EE000] transition-colors font-semibold"
          >
            {showAllProjects ? 'Show Less' : 'View All Projects'}
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}