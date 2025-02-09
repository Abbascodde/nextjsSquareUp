'use client';

import React from 'react';

export default function ContactInfo() {
  return (
    <div className="max-w-7xl md:max-w-7xl justify-center mx-auto px-4 md:px-8 sm:px-6 lg:px-8 py-12 flex flex-col md:flex-row gap-5 items-center text-white">
      <div className="flex items-start space-x-2">
        <svg className="w-7 h-7 text-[#9EFF00] mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
        <p className="mb-4 bg-[#1E1E1E] p-2 px-3 rounded-lg">hello@squareup.com</p>
      </div>
      <div className="flex items-start space-x-2">
        <svg className="w-6 h-6 text-[#9EFF00] mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
        <p className="mb-4 bg-[#1E1E1E] p-2 px-3 rounded-lg">+1 (123) 456-7890</p>
      </div>
      <div className="flex items-start space-x-2">
        <svg className="w-7 h-7 text-[#9EFF00] mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
        <p className="mb-4 bg-[#1E1E1E] p-2 px-3 rounded-lg">Get Location</p>
      </div>
    </div>
  );
}