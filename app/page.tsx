import Hero from "@/app/components/Hero";
import Companies from "@/app/components/Companies";
import Services from "@/app/components/Services";
import Work from "@/app/components/Work";

export default function Home() {
  return (
    <main>
      <Hero />
      <Companies />
      <Services />
      <Work />
    </main>
  );
}