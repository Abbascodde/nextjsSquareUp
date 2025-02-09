'use client';

import React, { useState, FormEvent } from 'react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    console.log('Form submitted:', formData);

  };

  return (
    <section id="contact" className="py-16 bg-[#262626]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-4xl font-bold text-white mb-6">Get in Touch</h2>
          <p className="text-gray-300 text-lg">Ready to start your project? We had love to hear from you.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-[#1E1E1E] p-8 rounded-2xl">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-[#262626] border border-gray-700 rounded-lg focus:ring-2 focus:ring-[#9EFF00] focus:border-transparent text-white placeholder-gray-500"
                    placeholder="John Doe"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-[#262626] border border-gray-700 rounded-lg focus:ring-2 focus:ring-[#9EFF00] focus:border-transparent text-white placeholder-gray-500"
                    placeholder="john@example.com"
                    required
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-[#262626] border border-gray-700 rounded-lg focus:ring-2 focus:ring-[#9EFF00] focus:border-transparent text-white placeholder-gray-500"
                  placeholder="Project Discussion"
                  required
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-3 bg-[#262626] border border-gray-700 rounded-lg focus:ring-2 focus:ring-[#9EFF00] focus:border-transparent text-white placeholder-gray-500"
                  placeholder="Tell us about your project..."
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-[#9EFF00] text-[#1E1E1E] py-2 px-4 md:py-3 md:px-6 rounded-lg font-medium hover:bg-[#8EEF00] transition-colors duration-300 text-sm"
              >
                Send Message
              </button>

            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            {/* Office Location */}
            <div className="bg-[#1E1E1E] p-8 rounded-2xl">
              <h3 className="text-2xl font-bold text-white mb-6">Visit Our Office</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <svg className="w-6 h-6 text-[#9EFF00] mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <div>
                    <h4 className="text-white font-medium mb-1">Location</h4>
                    <p className="text-gray-300">123 Business Avenue, FCT</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <svg className="w-6 h-6 text-[#9EFF00] mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <div>
                    <h4 className="text-white font-medium mb-1">Email</h4>
                    <a href="mailto:hello@squareup.com" className="text-gray-300 hover:text-[#9EFF00] transition-colors">
                      hello@squareup.com
                    </a>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <svg className="w-6 h-6 text-[#9EFF00] mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <div>
                    <h4 className="text-white font-medium mb-1">Phone</h4>
                    <a href="tel:+1234567890" className="text-gray-300 hover:text-[#9EFF00] transition-colors">
                      +1 (234) 567-890
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="bg-[#1E1E1E] p-8 rounded-2xl">
              <h3 className="text-2xl font-bold text-white mb-6">Follow Us</h3>
              <div className="flex space-x-4">
                <a href="#" className="p-3 bg-[#262626] rounded-lg hover:bg-[#9EFF00] group transition-colors duration-300">
                  <svg className="w-6 h-6 text-[#9EFF00] group-hover:text-[#1E1E1E]" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </a>
                <a href="#" className="p-3 bg-[#262626] rounded-lg hover:bg-[#9EFF00] group transition-colors duration-300">
                  <svg className="w-6 h-6 text-[#9EFF00] group-hover:text-[#1E1E1E]" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </a>
                <a href="#" className="p-3 bg-[#262626] rounded-lg hover:bg-[#9EFF00] group transition-colors duration-300">
                  <svg className="w-6 h-6 text-[#9EFF00] group-hover:text-[#1E1E1E]" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;