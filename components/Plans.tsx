"use client";

import { Button } from "@/components/ui/button";
import { plans, singleSession, whatsappLink } from "@/lib/plans";
import { Check, Star, Zap, Crown, Globe } from "lucide-react";
import { cn } from "@/lib/utils";

const planIcons: Record<string, React.ElementType> = {
  core: Zap,
  apex: Star,
  rise: Crown,
  hybrid: Globe
};

export function Plans() {
  const handleSelectPlan = (planName: string) => {
    const message = encodeURIComponent(`Hola Randall! Me interesa el plan ${planName}. ¿Podemos agendar una consulta?`);
    window.open(`${whatsappLink}?text=${message}`, '_blank');
  };

  return (
    <section id="planes" className="py-20 sm:py-28 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-primary font-semibold tracking-wider text-sm">PAQUETES</span>
          <h2 className="font-sans text-4xl sm:text-5xl md:text-6xl text-foreground mt-2 mb-4">
            ELIGE TU <span className="text-primary">PLAN</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Empieza a transformarte con el paquete que mejor se adapte a tus objetivos y estilo de vida.
          </p>
        </div>

        {/* Plans Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {plans.map((plan) => {
            const Icon = planIcons[plan.id] || Zap;
            return (
              <div 
                key={plan.id}
                className={cn(
                  "relative rounded-2xl p-6 transition-all duration-300 hover:scale-[1.02]",
                  plan.popular 
                    ? "bg-primary text-primary-foreground border-2 border-primary" 
                    : "bg-card border border-border hover:border-primary/50"
                )}
              >
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-foreground text-background text-xs font-bold rounded-full">
                    MÁS POPULAR
                  </div>
                )}

                <div className={cn(
                  "w-12 h-12 rounded-lg flex items-center justify-center mb-4",
                  plan.popular ? "bg-primary-foreground/20" : "bg-primary/10"
                )}>
                  <Icon className={cn("w-6 h-6", plan.popular ? "text-primary-foreground" : "text-primary")} />
                </div>

                <h3 className={cn(
                  "font-sans text-3xl mb-1",
                  plan.popular ? "text-primary-foreground" : "text-foreground"
                )}>
                  {plan.name}
                </h3>
                <p className={cn(
                  "text-sm mb-4",
                  plan.popular ? "text-primary-foreground/80" : "text-muted-foreground"
                )}>
                  {plan.tagline}
                </p>

                <div className="mb-6">
                  <span className={cn(
                    "font-sans text-4xl",
                    plan.popular ? "text-primary-foreground" : "text-foreground"
                  )}>
                    {plan.currency}{plan.price.toLocaleString()}
                  </span>
                  <span className={cn(
                    "text-sm ml-1",
                    plan.popular ? "text-primary-foreground/70" : "text-muted-foreground"
                  )}>
                    / {plan.period}
                  </span>
                </div>

                <ul className="space-y-3 mb-6">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <Check className={cn(
                        "w-5 h-5 shrink-0 mt-0.5",
                        plan.popular ? "text-primary-foreground" : "text-primary"
                      )} />
                      <span className={cn(
                        "text-sm",
                        plan.popular ? "text-primary-foreground/90" : "text-muted-foreground"
                      )}>
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                <Button 
                  className={cn(
                    "w-full font-semibold transition-all",
                    plan.popular 
                      ? "bg-foreground text-background hover:bg-foreground/90" 
                      : "bg-primary text-primary-foreground hover:bg-primary/90"
                  )}
                  onClick={() => handleSelectPlan(plan.name)}
                >
                  {plan.cta}
                </Button>
              </div>
            );
          })}
        </div>

        {/* Single Session Note */}
        <div className="text-center">
          <p className="text-muted-foreground">
            <span className="text-foreground font-semibold">{singleSession.currency}{singleSession.price} sesión suelta</span> — {singleSession.description}
          </p>
        </div>
      </div>
    </section>
  );
}
