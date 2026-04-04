"use client";

import { whatsappLink, instagramLink, email, whatsappNumber } from "@/lib/plans";
import { MessageCircle, Instagram, Mail, MapPin } from "lucide-react";

const socialLinks = [
  {
    name: "WhatsApp",
    href: whatsappLink,
    icon: MessageCircle,
    label: whatsappNumber
  },
  {
    name: "Instagram",
    href: instagramLink,
    icon: Instagram,
    label: "@Chuukk._"
  },
  {
    name: "Email",
    href: `mailto:${email}`,
    icon: Mail,
    label: email
  }
];

const navLinks = [
  { name: "Inicio", href: "#" },
  { name: "Sobre Mí", href: "#sobre-mi" },
  { name: "Planes", href: "#planes" },
  { name: "Proceso", href: "#proceso" },
  // { name: "Testimonios", href: "#testimonios" }, // TODO: descomentar cuando los testimonios estén listos
  { name: "Contacto", href: "#contacto" }
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-10 mb-10">
          {/* Brand */}
          <div>
            <h3 className="font-sans text-3xl text-foreground mb-2">
              RANDALL<span className="text-primary">CHOC</span>
            </h3>
            <p className="text-muted-foreground text-sm mb-4">
              Personal Trainer & Atleta Híbrido
            </p>
            <div className="flex items-center gap-2 text-muted-foreground text-sm">
              <MapPin className="w-4 h-4 text-primary" />
              <span>Guatemala</span>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Navegación</h4>
            <nav className="grid grid-cols-2 gap-2">
              {navLinks.map((link) => (
                <a 
                  key={link.name}
                  href={link.href}
                  className="text-muted-foreground hover:text-primary transition-colors text-sm"
                >
                  {link.name}
                </a>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Contáctame</h4>
            <div className="space-y-3">
              {socialLinks.map((social) => (
                <a 
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors group"
                >
                  <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                    <social.icon className="w-5 h-5" />
                  </div>
                  <span className="text-sm">{social.label}</span>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Tagline */}
        <div className="text-center py-8 border-t border-border">
          <p className="font-sans text-2xl sm:text-3xl text-foreground tracking-widest">
            FUERTE PARA TODO.
          </p>
        </div>

        {/* Copyright */}
        <div className="text-center pt-6 border-t border-border">
          <p className="text-muted-foreground text-sm">
            © {currentYear} Randall Choc. Todos los derechos reservados. · Desarrollado por{" "}
            <a 
              href="https://renoa.tech/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-primary hover:text-primary/80 transition-colors font-medium"
            >
              RENOA
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
