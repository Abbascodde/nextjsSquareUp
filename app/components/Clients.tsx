'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Clients() {
  const clientTestimonials = [
    {
      quote: "SquareUp has been Instrumental in Transforming our Online Presence",
      description: "Their team's expertise in web development and design resulted in a visually stunning and user-friendly e-commerce platform. Our online sales have skyrocketed, and we couldn't be happier.",
      profileImage: "/images/Profile.png",
      name: "John Smith",
      title: "CEO of Chic Boutique"
    },
    {
      quote: "Exceeded Our Expectations",
      description: "They understood our vision for a mobile app that streamlined our food delivery service. The app they delivered exceeded our expectations, and our customers love the seamless ordering experience.",
      profileImage: "/images/Profile (1).png",
      name: "Sarah Smith",
      title: "Founder of HungryBites"
    },
    {
      quote: "Comprehensive Booking System",
      description: "Their attention to detail and commitment to delivering a user-friendly platform was evident throughout the project. The system has streamlined our operations significantly.",
      profileImage: "/images/Profile (2).png",
      name: "Mark Thompson",
      title: "CEO of EventMasters"
    },
    {
      quote: "Comprehensive Booking System",
      description: "Their attention to detail and commitment to delivering a user-friendly platform was evident throughout the project. The system has streamlined our operations significantly.",
      profileImage: "/images/Profile (2).png",
      name: "Mark Thompson",
      title: "CEO of EventMasters"
    },
    {
      quote: "Comprehensive Booking System",
      description: "Their attention to detail and commitment to delivering a user-friendly platform was evident throughout the project. The system has streamlined our operations significantly.",
      profileImage: "/images/Profile (2).png",
      name: "Mark Thompson",
      title: "CEO of EventMasters"
    },
    {
      quote: "Comprehensive Booking System",
      description: "Their attention to detail and commitment to delivering a user-friendly platform was evident throughout the project. The system has streamlined our operations significantly.",
      profileImage: "/images/Profile (2).png",
      name: "Mark Thompson",
      title: "CEO of EventMasters"
    }
  ];

  return (
    <section id="clients" className="clients-section text-white py-16 bg-[#262626]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h1 className="text-4xl font-bold mb-6">What our Clients say About us</h1>
          <p className="text-gray-300 text-lg">
            At SquareUp, we take pride in delivering exceptional digital products and services that drive success for our clients. 
            Here is what some of our satisfied clients have to say.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {clientTestimonials.map((client, index) => (
            <div key={index} className="client-card">
              <h4 className="text-[#D8FF99]">{client.quote}</h4>
              <p className="mt-4">{client.description}</p>
              <div className="flex items-center justify-between mt-8">
                <div className="flex items-center gap-4">
                  <Image 
                    src={client.profileImage} 
                    alt={client.name} 
                    width={48} 
                    height={48} 
                    className="h-12 w-12 rounded-full"
                  />
                  <div className="profile-info">
                    <h5>{client.name}</h5>
                    <p className="text-sm text-gray-400">{client.title}</p>
                  </div>
                </div>
                <Link 
                  href="#" 
                  className="website-button text-sm font-medium"
                >
                  View Project
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-[#9EFF00] text-[#1E1E1E] px-8 py-3 rounded-md font-medium hover:bg-[#8EEF00] transition-colors">
            View More Success Stories
          </button>
        </div>
      </div>
    </section>
  );
}