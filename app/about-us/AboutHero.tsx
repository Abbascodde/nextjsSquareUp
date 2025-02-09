'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function AboutHero() {
  return (
    <section className="pt-32 pb-10 gap-12 bg-[#1E1E1E] lg:mt-[50px] mt-[50px]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Crafting Digital <span className="text-[#9EFF00]">Excellence</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-12">
            We are a team of passionate designers, developers, and digital craftsmen dedicated to creating
            exceptional digital experiences that drive success for our clients.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <Link 
              href="/#contact"
              className="inline-block text-center bg-[#9EFF00] text-[#1E1E1E] 
              px-4 py-2 sm:px-8 sm:py-3 
              rounded-md font-medium 
              hover:bg-[#8EEF00] transition-colors 
              w-full sm:w-auto text-sm sm:text-base"
            >
              Get in Touch
            </Link>
            <Link 
              href="/#work"
              className="inline-block text-center 
              border border-[#9EFF00] text-[#9EFF00] 
              px-4 py-2 sm:px-8 sm:py-3 
              rounded-md font-medium 
              hover:bg-[#262626] transition-colors 
              w-full sm:w-auto text-sm sm:text-base"
            >
              View Our Work
            </Link>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mt-6 mx-auto px-4 sm:px-10 lg:px-8 flex flex-col md:flex-row items-center justify-around gap-3 md:mt-10">
        <div>
          <h2 className="text-3xl font-bold text-[#9EFF00] mb-4 mt-10">Our Mission</h2>
          <p className="text-gray-300 text-lg">
            At SquareUp, our mission is to empower businesses and individuals with
            cutting-edge digital solutions that drive success and innovation. We are a team of talented
            designers, developers, and digital craftsmen dedicated to creating exceptional digital experiences that
            captivate audiences and drive results for our clients. With a strong focus on user experience,
            innovation, and customer-centricity, we strive to deliver digital products that not only meet but
            exceed expectations.
          </p>
        </div>
        <div className="hidden md:block">
          <Image 
            src="/images/Image.png" 
            alt="About Us Mission" 
            width={400} 
            height={300} 
            className="mt-8 about-img" 
          />
        </div>
      </div>
    </section>
  );
}