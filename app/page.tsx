import Hero from "@/app/components/Hero";
import Companies from "@/app/components/Companies";
import Services from "@/app/components/Services";
import Work from "@/app/components/Work";
import Clients from "@/app/components/Clients";
import Faq from "@/app/components/Faq";
import Contact from "@/app/components/Contact";
import Footer from "@/app/components/Footer";

export default function Home() {
  return (
    <main>
      <Hero />
      <Companies />
      <Services />
      <Work />
      <Clients />
      <Faq />
      <Contact />
      <Footer />
    </main>
  );
}