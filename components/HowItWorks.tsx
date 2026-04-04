"use client";

import { MessageCircle, ClipboardCheck, FileText, Dumbbell } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: MessageCircle,
    title: "Primer Contacto",
    description: "Me escribes y agendamos una consulta gratuita para conocer tus metas y punto de partida."
  },
  {
    number: "02",
    icon: ClipboardCheck,
    title: "Evaluación Inicial",
    description: "Análisis de tu condición física, historial y objetivos para diseñar tu plan ideal."
  },
  {
    number: "03",
    icon: FileText,
    title: "Tu Plan Personalizado",
    description: "Creo tu programa de entrenamiento y plan nutricional específico para ti."
  },
  {
    number: "04",
    icon: Dumbbell,
    title: "Entrenamos Juntos",
    description: "Comenzamos las sesiones con seguimiento constante y ajustes según tu progreso."
  }
];

export function HowItWorks() {
  return (
    <section id="proceso" className="py-20 sm:py-28">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-primary font-semibold tracking-wider text-sm">EL PROCESO</span>
          <h2 className="font-sans text-4xl sm:text-5xl md:text-6xl text-foreground mt-2 mb-4">
            ¿CÓMO <span className="text-primary">EMPEZAMOS</span>?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Simple, directo y sin complicaciones. En 4 pasos cambias de donde estás a donde quieres estar.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative group">
              {/* Connector Line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-12 left-[60%] w-[80%] h-px bg-border" />
              )}
              
              <div className="text-center">
                {/* Number Badge */}
                <div className="relative inline-flex items-center justify-center mb-6">
                  <div className="w-24 h-24 rounded-full bg-card border-2 border-border group-hover:border-primary transition-colors flex items-center justify-center">
                    <step.icon className="w-10 h-10 text-primary" />
                  </div>
                  <span className="absolute -top-2 -right-2 w-10 h-10 rounded-full bg-primary text-primary-foreground font-sans text-xl flex items-center justify-center">
                    {step.number}
                  </span>
                </div>

                <h3 className="font-sans text-2xl text-foreground mb-2">{step.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
