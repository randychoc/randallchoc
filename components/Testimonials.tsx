"use client";

import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Carlos M.",
    role: "Empresario",
    avatar: "CM",
    quote: "En 3 meses logré lo que no pude en 2 años solo. Randall entiende que mi tiempo es limitado y cada sesión cuenta.",
    result: "Bajé 12kg de grasa",
    rating: 5
  },
  {
    name: "María G.",
    role: "Contadora",
    avatar: "MG",
    quote: "Nunca había tenido un plan de nutrición que realmente pudiera seguir. Ahora como mejor y entreno menos horas con mejores resultados.",
    result: "Ganó masa muscular",
    rating: 5
  },
  {
    name: "Roberto S.",
    role: "Ingeniero",
    avatar: "RS",
    quote: "El seguimiento online es increíble. Aunque viajo mucho, nunca pierdo el ritmo. Randall ajusta todo según mis circunstancias.",
    result: "Mejoró su rendimiento",
    rating: 5
  }
];

export function Testimonials() {
  return (
    <section id="testimonios" className="py-20 sm:py-28 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-primary font-semibold tracking-wider text-sm">TESTIMONIOS</span>
          <h2 className="font-sans text-4xl sm:text-5xl md:text-6xl text-foreground mt-2 mb-4">
            RESULTADOS <span className="text-primary">REALES</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            No son solo palabras. Son personas como tú que decidieron dar el paso.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-card border border-border rounded-2xl p-6 hover:border-primary/50 transition-colors relative"
            >
              {/* Quote Icon */}
              <Quote className="absolute top-6 right-6 w-8 h-8 text-primary/20" />

              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                ))}
              </div>

              {/* Quote */}
              <p className="text-foreground mb-6 leading-relaxed">
                &ldquo;{testimonial.quote}&rdquo;
              </p>

              {/* Result Badge */}
              <div className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
                {testimonial.result}
              </div>

              {/* Author */}
              <div className="flex items-center gap-3 pt-4 border-t border-border">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                  <span className="font-sans text-lg text-primary">{testimonial.avatar}</span>
                </div>
                <div>
                  <p className="font-semibold text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <p className="text-center text-muted-foreground mt-8 text-sm">
          * Resultados reales de clientes. Los resultados individuales pueden variar según compromiso y constancia.
        </p>
      </div>
    </section>
  );
}
