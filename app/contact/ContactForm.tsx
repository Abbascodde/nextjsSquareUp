'use client';

import React, { useState } from 'react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    services: [] as string[]
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    
    if (type === 'checkbox') {
      setFormData(prev => ({
        ...prev,
        services: checked 
          ? [...prev.services, value]
          : prev.services.filter(service => service !== value)
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value
      }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Add form submission logic here
    console.log(formData);
  };

  return (
    <div className="bg-[#1E1E1E] p-8 rounded-2xl text-white justify-center max-w-2xl mx-auto mb-10">
      <form onSubmit={handleSubmit} className="flex flex-col space-y-6">
        <div className="space-y-4">
          <div className="flex flex-col space-y-2">
            <label htmlFor="name" className="text-sm font-medium text-gray-300">Full Name</label>
            <input 
              type="text" 
              id="name" 
              name="name" 
              required
              value={formData.name}
              onChange={handleInputChange}
              className="bg-[#262626] border border-gray-600 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#9EFF00] focus:border-transparent transition-all duration-200"
            />
          </div>

          <div className="flex flex-col space-y-2">
            <label htmlFor="email" className="text-sm font-medium text-gray-300">Email</label>
            <input 
              type="email" 
              id="email" 
              name="email" 
              required
              value={formData.email}
              onChange={handleInputChange}
              className="bg-[#262626] border border-gray-600 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#9EFF00] focus:border-transparent transition-all duration-200"
            />
          </div>
        </div>

        <div className="space-y-4">
          <label className="text-sm font-medium text-gray-300">Why are you reaching out?</label>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { value: 'web', label: 'Web Development' },
              { value: 'mobile', label: 'Mobile Development' },
              { value: 'collab', label: 'Collaboration' },
              { value: 'other', label: 'Others' }
            ].map((service) => (
              <div 
                key={service.value}
                className="flex items-center space-x-3 bg-[#262626] p-3 rounded-lg hover:bg-[#2A2A2A] transition-colors"
              >
                <input 
                  type="checkbox" 
                  id={service.value} 
                  name="services" 
                  value={service.value}
                  checked={formData.services.includes(service.value)}
                  onChange={handleInputChange}
                  className="w-4 h-4 accent-[#9EFF00]"
                />
                <label htmlFor={service.value} className="text-gray-300">{service.label}</label>
              </div>
            ))}
          </div>
        </div>

        <button 
          type="submit"
          className="bg-[#9EFF00] text-black font-semibold py-3 px-6 rounded-lg hover:bg-[#8EE000] transition-all duration-200 transform hover:scale-[1.02] active:scale-[0.98] mt-4"
        >
          Send Message
        </button>
      </form>
    </div>
  );
}