import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { Problem } from "@/components/Problem";
import { About } from "@/components/About";
import { Plans } from "@/components/Plans";
import { HowItWorks } from "@/components/HowItWorks";
// import { Testimonials } from "@/components/Testimonials"; // TODO: descomentar cuando los testimonios estén listos
import { FinalCTA } from "@/components/FinalCTA";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <Problem />
      <About />
      <Plans />
      <HowItWorks />
      {/* <Testimonials /> */}
      <FinalCTA />
      <Footer />
    </main>
  );
}
