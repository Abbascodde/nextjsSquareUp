import React from 'react';
import CareersHero from './CareersHero';
import WhyJoinUs from './WhyJoinUs';
import OpenPositions from './OpenPositions';
import Culture from './Culture';
import ApplicationProcess from './ApplicationProcess';
import Faq from '../components/Faq';
import Footer from '../components/Footer';

export default function CareersPage() {
  return (
    <main>
      <CareersHero />
      <WhyJoinUs />
      <OpenPositions />
      <Culture />
      <ApplicationProcess />
      <Faq />
      <Footer />
    </main>
  );
}