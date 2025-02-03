import React from 'react';
 import ServicesHero from "@/app/services/ServicesHero";
 import ServicesList from "@/app/services/ServicesList";
 import VisionSection from "@/app/services/VisionSection";
 import Footer from "@/app/components/Footer";
 
 export default function ServicesPage() {
   return (
     <div>
       <ServicesHero />
       <ServicesList />
       <VisionSection />
       <Footer />
     </div>
   );
 }