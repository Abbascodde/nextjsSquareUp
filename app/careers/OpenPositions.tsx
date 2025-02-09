'use client';

import React from 'react';

// SVG Icon for Apply Now button
const ApplyArrowIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
  </svg>
);

// Type definition for a Job Position
type JobPosition = {
  title: string;
  type: string;
  skills: string[];
  applyLink: string;
};

export default function OpenPositions() {
  const jobPositions: JobPosition[] = [
    {
      title: 'Senior Frontend Developer',
      type: 'Remote / Full-time',
      skills: ['React', 'TypeScript', 'Tailwind CSS'],
      applyLink: '#apply'
    },
    {
      title: 'UI/UX Designer',
      type: 'Hybrid / Full-time',
      skills: ['Figma', 'Adobe XD', 'User Research'],
      applyLink: '#apply'
    },
    {
      title: 'Backend Developer',
      type: 'Remote / Full-time',
      skills: ['Node.js', 'Python', 'AWS'],
      applyLink: '#apply'
    }
  ];

  return (
    <section className="bg-[#1E1E1E] py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-white text-center mb-12">
          Open <span className="text-[#9EFF00]">Positions</span>
        </h2>
        <div className="grid gap-6">
          {jobPositions.map((job, index) => (
            <div 
              key={index} 
              className="bg-[#262626] p-8 rounded-lg hover:bg-[#2A2A2A] transition-colors group"
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">{job.title}</h3>
                  <p className="text-gray-300 mb-4">{job.type}</p>
                  <ul className="flex flex-wrap gap-2">
                    {job.skills.map((skill, skillIndex) => (
                      <li 
                        key={skillIndex} 
                        className="bg-[#1E1E1E] text-[#9EFF00] px-3 py-1 rounded-full text-sm"
                      >
                        {skill}
                      </li>
                    ))}
                  </ul>
                </div>
                <a 
                  href={job.applyLink} 
                  className="inline-flex items-center gap-2 bg-[#9EFF00] text-[#1E1E1E] px-6 py-2 rounded-md hover:bg-[#8EE000] transition-colors font-semibold whitespace-nowrap group-hover:bg-[#8EE000]"
                >
                  Apply Now
                  <ApplyArrowIcon />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}