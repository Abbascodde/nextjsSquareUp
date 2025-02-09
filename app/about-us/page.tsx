import React from 'react';
import AboutHero from './AboutHero';
import OurHistory from './OurHistory';
import Summary from './Summary';
import Footer from '../components/Footer';

export default function AboutUsPage() {
  return (
    <main>
      <AboutHero />
      <OurHistory />
      <Summary />
      <Footer />
    </main>
  );
}