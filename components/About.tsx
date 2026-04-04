"use client";

import Image from "next/image";
import { Trophy, Brain, Apple, Users, MapPin, TrendingUp } from "lucide-react";

const features = [
  {
    icon: Trophy,
    title: "Atleta Competitivo",
    description: "No solo enseño — yo lo vivo. Mi experiencia en competencia me hace entender el cuerpo desde adentro."
  },
  {
    icon: Brain,
    title: "Conocimiento Integral",
    description: "Domino hipertrofia, fuerza, resistencia y pérdida de grasa. Un solo coach para todos tus objetivos."
  },
  {
    icon: Apple,
    title: "Nutrición Incluida",
    description: "Plan de alimentación personalizado integrado con tu entrenamiento para resultados más rápidos."
  },
  {
    icon: Users,
    title: "Atención Personalizada",
    description: "Cada cliente es único. Tus rutinas, tiempos y metas son el centro de cada decisión."
  },
  {
    icon: MapPin,
    title: "Presencial y Online",
    description: "Flexibilidad total: entrena conmigo en persona o desde cualquier lugar con seguimiento activo."
  },
  {
    icon: TrendingUp,
    title: "Resultados Comprobados",
    description: "Metodología basada en evidencia y ajustes continuos para que tu progreso nunca se detenga."
  }
];

export function About() {
  return (
    <section id="sobre-mi" className="py-20 sm:py-28">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image Side */}
          <div className="relative">
            <div className="aspect-[4/5] rounded-2xl bg-card border-2 border-primary/20 overflow-hidden relative">
              <Image
                src="/randallchoc.jpeg"
                alt="Randall Choc - Personal Trainer & Atleta Híbrido"
                fill
                className="object-cover object-top"
                priority
              />
              {/* Corner accent */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-primary" style={{ clipPath: 'polygon(100% 0, 0 0, 100% 100%)' }} />
            </div>
            {/* Floating badge */}
            <div className="absolute -bottom-4 -right-4 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-sans text-lg">
              GUATEMALA
            </div>
          </div>

          {/* Content Side */}
          <div>
            <span className="text-primary font-semibold tracking-wider text-sm">SOBRE MÍ</span>
            <h2 className="font-sans text-4xl sm:text-5xl md:text-6xl text-foreground mt-2 mb-6">
              RANDALL<br /><span className="text-primary">PERSONAL TRAINER</span><br />& ATLETA HÍBRIDO
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Soy un atleta híbrido con experiencia en múltiples disciplinas del fitness: hipertrofia, fuerza, resistencia y pérdida de grasa. Mi formación como atleta competitivo me da una perspectiva única: <strong className="text-foreground">no solo entreno a otros, yo vivo lo que enseño.</strong>
            </p>
            
            <div className="grid sm:grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <div key={index} className="flex gap-3 p-3 rounded-lg hover:bg-card transition-colors">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <feature.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground text-sm">{feature.title}</h3>
                    <p className="text-muted-foreground text-xs leading-relaxed">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
