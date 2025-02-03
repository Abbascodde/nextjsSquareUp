import React from 'react';
import Image from 'next/image';

interface Testimonial {
  image: string;
  name: string;
  title: string;
  quote: string;
  rating: number;
}

export default function TestimonialsSection() {
  const testimonials: Testimonial[] = [
    {
      image: '/imge/Profile (3).png',
      name: 'Sarah Johnson',
      title: 'CEO, TechStart',
      quote: '"SquareUp transformed our digital presence completely. Their attention to detail and innovative solutions helped us achieve our goals faster than expected."',
      rating: 5
    },
    {
      image: '/imge/Profile.png',
      name: 'Michael Chen',
      title: 'Founder, InnovateLab',
      quote: '"Working with SquareUp was a game-changer for our business. Their team\'s expertise and dedication to quality delivered results beyond our expectations."',
      rating: 5
    },
    {
      image: '/imge/Profile (1).png',
      name: 'Emily Rodriguez',
      title: 'Marketing Director, GrowthX',
      quote: '"The team at SquareUp doesn\'t just deliver projects; they create experiences. Their innovative approach and technical expertise are unmatched."',
      rating: 5
    }
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: rating }, (_, index) => (
      <svg 
        key={index} 
        xmlns="http://www.w3.org/2000/svg" 
        className="h-5 w-5" 
        viewBox="0 0 20 20" 
        fill="currentColor"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ));
  };

  return (
    <section className="py-20 bg-[#262626]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">
            What Our <span className="text-[#9EFF00]">Clients Say</span>
          </h2>
          <p className="text-gray-300 text-lg">
            Hear from businesses we have helped transform through our solutions.
          </p>
        </div>
        
        {/* Testimonial Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="bg-[#1E1E1E] p-8 rounded-xl"
            >
              {/* Client Profile */}
              <div className="flex items-center mb-6">
                <Image 
                  src={testimonial.image} 
                  alt={testimonial.name} 
                  width={48} 
                  height={48} 
                  className="rounded-full mr-4"
                />
                <div>
                  <h4 className="text-white font-semibold">{testimonial.name}</h4>
                  <p className="text-gray-400">{testimonial.title}</p>
                </div>
              </div>

              {/* Testimonial Quote */}
              <p className="text-gray-300 mb-4">{testimonial.quote}</p>

              {/* Star Rating */}
              <div className="flex text-[#9EFF00] mt-4">
                {renderStars(testimonial.rating)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}