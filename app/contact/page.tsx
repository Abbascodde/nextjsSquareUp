'use client';

import React from 'react';
import ContactHero from './Contact';
import Footer from '../components/Footer';
import ContactInfo from './ContactInfo';
import ContactForm from './ContactForm';

export default function ContactPage() {
  return (
    <main>
      <ContactHero />
      <ContactInfo />
      <ContactForm />
      <Footer />
    </main>
  );
}