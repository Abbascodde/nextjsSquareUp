'use client';

import React from 'react';
import ProcessHero from './ProcessHero';
import ProcessSteps from './ProcessSteps';
import Cat from './Cat';
import Footer from '../components/Footer';

export default function ProcessPage() {
  return (
    <main className="bg-[#1E1E1E] min-h-screen">
      <ProcessHero />
      <ProcessSteps />
      <Cat />
      <Footer />
    </main>
  );
}