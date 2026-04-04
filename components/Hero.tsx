"use client";

import { Button } from "@/components/ui/button";
import { whatsappLink } from "@/lib/plans";
import { ChevronDown } from "lucide-react";

export function Hero() {
  const scrollToPlans = () => {
    document.getElementById("planes")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-background">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
      </div>

      {/* Grid Pattern */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,107,53,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,107,53,0.3) 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }}
      />

      <div className="relative z-10 container mx-auto px-4 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/10 mb-8">
          <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
          <span className="text-sm text-primary font-medium tracking-wide">ATLETA HÍBRIDO · COACH CERTIFICADO</span>
        </div>

        {/* Name */}
        <h1 className="font-sans text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-normal tracking-tight mb-4 text-foreground">
          RANDALL<span className="text-primary">CHOC</span>
        </h1>

        {/* Title */}
        <p className="text-xl sm:text-2xl md:text-3xl text-muted-foreground mb-6 tracking-widest font-sans">
          PERSONAL TRAINER
        </p>

        {/* Tagline */}
        <p className="text-3xl sm:text-4xl md:text-5xl font-sans text-foreground mb-4">
          FUERTE PARA TODO.
        </p>

        <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
          Tu transformación comienza aquí. Hipertrofia, fuerza, resistencia y pérdida de grasa con un atleta que vive lo que enseña.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button 
            size="lg" 
            className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg font-semibold transition-all hover:scale-105"
            onClick={scrollToPlans}
          >
            Quiero Empezar
          </Button>
          <Button 
            variant="outline" 
            size="lg"
            className="border-foreground/20 text-foreground hover:bg-foreground/5 px-8 py-6 text-lg"
            asChild
          >
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
              Consulta Gratis
            </a>
          </Button>
        </div>

        {/* Specialties */}
        <div className="mt-16 flex flex-wrap justify-center gap-4 sm:gap-8">
          {["HIPERTROFIA", "FUERZA", "RESISTENCIA", "PÉRDIDA DE GRASA"].map((specialty) => (
            <span 
              key={specialty}
              className="text-sm sm:text-base font-sans tracking-wider text-muted-foreground hover:text-primary transition-colors"
            >
              {specialty}
            </span>
          ))}
        </div>

        {/* Scroll Indicator */}
        <button 
          onClick={scrollToPlans}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted-foreground hover:text-primary transition-colors animate-bounce"
          aria-label="Scroll down"
        >
          <ChevronDown className="w-8 h-8" />
        </button>
      </div>
    </section>
  );
}
