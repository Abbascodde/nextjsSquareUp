import React from 'react';
import WorkHero from '@/app/components/work-page/Work-hero';
import WorkPortfolio from '@/app/components/work-page/WorkPortfolio';
import StartProjectSection from '@/app/components/work-page/StartProjectSection';
import TestimonialsSection from '@/app/components/work-page/TestimonialsSection';
import Footer from '@/app/components/Footer';

export default function WorkPage() {
  return (
    <div>
      <WorkHero />
      <WorkPortfolio />
      <StartProjectSection />
      <TestimonialsSection />
      <Footer />
    </div>
  );
}