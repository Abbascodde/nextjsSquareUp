'use client';

import React from 'react';

const ServiceIcons = {
  UxResearch: () => (
    <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 11a2 2 0 100-4 2 2 0 000 4z" />
    </svg>
  ),
  UiDesign: () => (
    <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
        d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
    </svg>
  ),
  BrandDesign: () => (
    <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
        d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
    </svg>
  ),
  WebDev: () => (
    <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
        d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
    </svg>
  ),
  MobileDev: () => (
    <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
        d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
    </svg>
  ),
  Ecommerce: () => (
    <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
        d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
    </svg>
  ),
  Seo: () => (
    <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
        d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
    </svg>
  ),
  SocialMedia: () => (
    <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
        d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
    </svg>
  ),
  ContentMarketing: () => (
    <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
        d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
    </svg>
  )
};

export default function ServicesList() {
  const designServices = [
    {
      icon: ServiceIcons.UxResearch,
      title: 'User Research',
      description: 'Deep understanding of user behavior through research and analysis.'
    },
    {
      icon: ServiceIcons.UiDesign,
      title: 'Interface Design',
      description: 'Beautiful, intuitive interfaces that deliver exceptional experiences.'
    },
    {
      icon: ServiceIcons.BrandDesign,
      title: 'Brand Identity',
      description: 'Comprehensive branding solutions that tell your story.'
    }
  ];

  const developmentServices = [
    {
      icon: ServiceIcons.WebDev,
      title: 'Web Development',
      description: 'Custom websites and web applications built with modern technologies.'
    },
    {
      icon: ServiceIcons.MobileDev,
      title: 'Mobile Apps',
      description: 'Native and cross-platform mobile applications.'
    },
    {
      icon: ServiceIcons.Ecommerce,
      title: 'E-Commerce',
      description: 'Full-featured online stores and shopping experiences.'
    }
  ];

  const digitalMarketingServices = [
    {
      icon: ServiceIcons.Seo,
      title: 'SEO Optimization',
      description: 'Improve your search rankings and online visibility.'
    },
    {
      icon: ServiceIcons.SocialMedia,
      title: 'Social Media',
      description: 'Engage your audience across social platforms.'
    },
    {
      icon: ServiceIcons.ContentMarketing,
      title: 'Content Strategy',
      description: 'Compelling content that drives engagement and conversions.'
    }
  ];

  const renderServiceSection = (title: string, description: string, services: any[]) => (
    <div className="mb-20">
      <div className="flex items-center gap-4 mb-8">
        <div className="h-10 w-1 bg-[#9EFF00]"></div>
        <h3 className="text-3xl font-bold text-white">{title}</h3>
      </div>
      <p className="text-gray-300 mb-12 max-w-4xl">{description}</p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <div 
            key={index}
            className="bg-[#1E1E1E] p-8 rounded-xl border border-[#9EFF00] hover:transform hover:scale-105 transition-all duration-300"
          >
            <div className="text-[#9EFF00] mb-6">
              <service.icon />
            </div>
            <h4 className="text-xl font-bold text-white mb-4">{service.title}</h4>
            <p className="text-gray-300">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <section id="services-list" className="py-20 bg-[#262626]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Our <span className="text-[#9EFF00]">Services</span></h2>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto">
            Comprehensive digital solutions tailored to elevate your business in the modern world.
          </p>
        </div>

        {renderServiceSection(
          'Design Services', 
          'Our design team creates stunning, user-centric experiences that captivate your audience and elevate your brand.',
          designServices
        )}

        {renderServiceSection(
          'Development', 
          'Cutting-edge development solutions that bring your digital vision to life.',
          developmentServices
        )}

        {renderServiceSection(
          'Digital Marketing', 
          'Strategic marketing solutions to grow your online presence and reach.',
          digitalMarketingServices
        )}
      </div>
    </section>
  );
}