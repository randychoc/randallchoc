"use client";

import { Clock, TrendingDown, HelpCircle, Frown } from "lucide-react";

const problems = [
  {
    icon: Clock,
    title: "Sin tiempo",
    description: "Tu agenda está llena, pero tus resultados están vacíos. Necesitas un plan que se adapte a tu vida, no al revés."
  },
  {
    icon: TrendingDown,
    title: "Sin resultados",
    description: "Has probado de todo: apps, videos de YouTube, dietas de moda, y no te funcionan. Necesitas un experto que te conozca."
  },
  {
    icon: HelpCircle,
    title: "Sin guía",
    description: "Caminas al gym sin saber qué hacer, cuántas series, qué peso. La confusión mata tu progreso."
  },
  {
    icon: Frown,
    title: "Sin motivación",
    description: "Empezaste fuerte pero ya no sientes las ganas. Necesitas a alguien que te empuje cuando tú no puedas."
  }
];

export function Problem() {
  return (
    <section className="py-20 sm:py-28 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-sans text-4xl sm:text-5xl md:text-6xl text-foreground mb-4">
            ¿TE <span className="text-primary">IDENTIFICAS</span>?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            No estás solo. La mayoría de personas luchan con estos mismos problemas. La diferencia está en qué haces al respecto.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {problems.map((problem, index) => (
            <div 
              key={index}
              className="group p-6 rounded-lg bg-card border border-border hover:border-primary/50 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <problem.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-sans text-2xl text-foreground mb-2">{problem.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{problem.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-xl sm:text-2xl font-sans text-foreground">
            ES HORA DE <span className="text-primary">CAMBIAR LA HISTORIA.</span>
          </p>
        </div>
      </div>
    </section>
  );
}
