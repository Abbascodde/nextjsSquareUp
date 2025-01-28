'use client';

import React, { useState } from 'react';

interface FAQItem {
  question: string;
  answer: string;
}

const Faq: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const faqData: FAQItem[] = [
    {
      question: "What services does SquareUp offer?",
      answer: "We offer comprehensive digital services including web development, UI/UX design, mobile app development, branding, and digital marketing solutions."
    },
    {
      question: "How long does a typical project take?",
      answer: "Project timelines vary based on complexity. Typically, websites take 6-12 weeks, while larger applications may take 3-6 months. We'll provide a detailed timeline during consultation."
    },
    {
      question: "What is your development process?",
      answer: "Our process includes Discovery, Planning, Design, Development, Testing, and Launch phases. We maintain clear communication and regular updates throughout the project."
    },
    {
      question: "Do you provide ongoing support?",
      answer: "Yes, we offer comprehensive maintenance and support packages to ensure your digital products remain up-to-date and perform optimally."
    }
  ];

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-16 bg-[#1E1E1E]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-4xl font-bold text-white mb-6">Frequently Asked Questions</h2>
          <p className="text-gray-300 text-lg">Find answers to common questions about our services and process.</p>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqData.map((faq, index) => (
            <div key={index} className="faq-item bg-[#262626] rounded-lg overflow-hidden">
              <button
                onClick={() => toggleFAQ(index)}
                className="faq-button w-full flex items-center justify-between p-6 text-left text-white hover:text-[#9EFF00] transition-colors"
              >
                <span className="text-lg font-medium">{faq.question}</span>
                <svg 
                  className={`w-6 h-6 transform transition-transform ${activeIndex === index ? 'rotate-180' : ''}`} 
                  fill="none" 
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div 
                className={`faq-content bg-[#1E1E1E] px-6 overflow-hidden transition-all duration-300 ${
                  activeIndex === index ? 'max-h-screen opacity-100 py-6' : 'max-h-0 opacity-0'
                }`}
              >
                <p className="text-gray-300">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Faq;