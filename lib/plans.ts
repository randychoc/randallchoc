export interface Plan {
  id: string;
  name: string;
  tagline: string;
  price: number;
  currency: string;
  period: string;
  sessions?: number;
  features: string[];
  popular?: boolean;
  cta: string;
}

export const plans: Plan[] = [
  {
    id: "core",
    name: "CORE",
    tagline: "Tu base sólida",
    price: 1600,
    currency: "Q",
    period: "12 sesiones",
    sessions: 12,
    features: [
      "12 sesiones presenciales",
      "Seguimiento mensual de progreso",
      "Acceso a comunidad privada"
    ],
    cta: "Empezar con CORE"
  },
  {
    id: "apex",
    name: "APEX",
    tagline: "La cima, tu mejor versión",
    price: 2100,
    currency: "Q",
    period: "16 sesiones",
    sessions: 16,
    features: [
      "16 sesiones presenciales",
      "Seguimiento avanzado + reajustes",
      "Prioridad en agenda",
      "Plan nutricional básico"
    ],
    popular: true,
    cta: "Elegir APEX"
  },
  {
    id: "rise",
    name: "RISE",
    tagline: "Elévate, sube de nivel",
    price: 3000,
    currency: "Q",
    period: "20 sesiones",
    sessions: 20,
    features: [
      "20 sesiones presenciales",
      "Plan nutricional personalizado",
      "Evaluación y ajuste de rutinas",
      "Prioridad máxima en agenda",
      "Soporte por WhatsApp directo"
    ],
    cta: "Ir con RISE"
  },
  {
    id: "hybrid",
    name: "HYBRID",
    tagline: "Lo mejor de ambos mundos",
    price: 800,
    currency: "Q",
    period: "mensual",
    features: [
      "Rutinas 100% personalizadas",
      "1 sesión presencial al mes",
      "Seguimiento y ajustes semanales",
      "Comunicación directa conmigo",
      "Sin contratos mínimos"
    ],
    cta: "Probar HYBRID"
  }
];

export const singleSession = {
  price: 200,
  currency: "Q",
  description: "Sesión suelta — ideal para probar antes de comprometerte con un paquete."
};

export const whatsappNumber = "+50241209343";
export const whatsappLink = `https://wa.me/${whatsappNumber.replace(/\+/g, '')}`;
export const instagramHandle = "Chuukk._";
export const instagramLink = `https://instagram.com/${instagramHandle}`;
export const email = "randallchoc@gmail.com";
