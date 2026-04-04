"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { plans, whatsappLink } from "@/lib/plans";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { Send, CheckCircle } from "lucide-react";

interface FormData {
  name: string;
  email: string;
  phone: string;
  plan: string;
}

export function FinalCTA() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { register, handleSubmit, formState: { errors }, setValue, watch } = useForm<FormData>();
  
  const selectedPlan = watch("plan");

  const onSubmit = (data: FormData) => {
    const message = encodeURIComponent(
      `¡Hola Randall! 👋\n\n` +
      `Me interesa empezar a entrenar contigo.\n\n` +
      `📝 Mis datos:\n` +
      `• Nombre: ${data.name}\n` +
      `• Email: ${data.email}\n` +
      `• WhatsApp: ${data.phone}\n` +
      `• Plan de interés: ${data.plan}\n\n` +
      `¿Podemos agendar una consulta gratuita?`
    );
    
    window.open(`${whatsappLink}?text=${message}`, '_blank');
    setIsSubmitted(true);
    
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  return (
    <section id="contacto" className="py-20 sm:py-28 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-sans text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-foreground mb-4">
              ¿LISTO PARA<br /><span className="text-primary">TRANSFORMARTE</span>?
            </h2>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
              La consulta inicial es <strong className="text-foreground">GRATIS</strong>. Sin compromiso, sin presión. Solo una conversación para conocer tus metas.
            </p>
          </div>

          {/* Form */}
          <div className="bg-card border border-border rounded-2xl p-6 sm:p-10">
            {isSubmitted ? (
              <div className="text-center py-12">
                <div className="w-16 h-16 rounded-full bg-green-500/20 flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-8 h-8 text-green-500" />
                </div>
                <h3 className="font-sans text-2xl text-foreground mb-2">¡Mensaje Enviado!</h3>
                <p className="text-muted-foreground">Te redirijo a WhatsApp para completar tu consulta.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-foreground">Nombre completo</Label>
                    <Input 
                      id="name"
                      placeholder="Tu nombre"
                      className="bg-secondary border-border focus:border-primary"
                      {...register("name", { required: "El nombre es requerido" })}
                    />
                    {errors.name && (
                      <p className="text-sm text-red-500">{errors.name.message}</p>
                    )}
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-foreground">Correo electrónico</Label>
                    <Input 
                      id="email"
                      type="email"
                      placeholder="tu@email.com"
                      className="bg-secondary border-border focus:border-primary"
                      {...register("email", { 
                        required: "El email es requerido",
                        pattern: {
                          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                          message: "Email inválido"
                        }
                      })}
                    />
                    {errors.email && (
                      <p className="text-sm text-red-500">{errors.email.message}</p>
                    )}
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="phone" className="text-foreground">WhatsApp</Label>
                    <Input 
                      id="phone"
                      type="tel"
                      placeholder="+502 1234-5678"
                      className="bg-secondary border-border focus:border-primary"
                      {...register("phone", { required: "El teléfono es requerido" })}
                    />
                    {errors.phone && (
                      <p className="text-sm text-red-500">{errors.phone.message}</p>
                    )}
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="plan" className="text-foreground">Plan de interés</Label>
                    <Select onValueChange={(value) => setValue("plan", value)} value={selectedPlan || ""}>
                      <SelectTrigger className="bg-secondary border-border focus:border-primary">
                        <SelectValue placeholder="Selecciona un plan" />
                      </SelectTrigger>
                      <SelectContent>
                        {plans.map((plan) => (
                          <SelectItem key={plan.id} value={plan.name}>
                            {plan.name} - {plan.currency}{plan.price}/{plan.period}
                          </SelectItem>
                        ))}
                        <SelectItem value="No estoy seguro">No estoy seguro aún</SelectItem>
                      </SelectContent>
                    </Select>
                    <input type="hidden" {...register("plan", { required: "Selecciona un plan" })} />
                    {errors.plan && (
                      <p className="text-sm text-red-500">{errors.plan.message}</p>
                    )}
                  </div>
                </div>

                <Button 
                  type="submit" 
                  size="lg"
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground py-6 text-lg font-bold transition-all hover:scale-[1.02]"
                >
                  <Send className="w-5 h-5 mr-2" />
                  Enviar y Conectar por WhatsApp
                </Button>

                <p className="text-center text-sm text-muted-foreground">
                  Al enviar, serás redirigido a WhatsApp para completar tu consulta gratuita.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
