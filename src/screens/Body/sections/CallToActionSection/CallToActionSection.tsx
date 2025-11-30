import {
  ShieldIcon,
  ShieldCheck,
  UserRound,
  Users,
  Lock,
  ClipboardList,
  Scale,
  Zap,
  Eye,
  LockKeyhole,
} from "lucide-react";
import React, { useEffect, useRef } from "react";
import { Badge } from "../../../../components/ui/badge";
import { Card, CardContent } from "../../../../components/ui/card";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const securityFeatures = [
  {
    icon: ShieldCheck,
    title: "Environnement 100% fermé",
    description: "Plateforme isolée sans accès aux réseaux sociaux externes",
    highlight: "Aucun risque de contact externe",
    color: "from-green-500 to-emerald-600",
    bgColor: "from-green-50 to-emerald-50",
  },
  {
    icon: UserRound,
    title: "Identité protégée",
    description: "Pseudonymes obligatoires, aucune donnée personnelle visible",
    highlight: "Anonymat total garanti",
    color: "from-blue-500 to-cyan-600",
    bgColor: "from-blue-50 to-cyan-50",
  },
  {
    icon: Users,
    title: "Contrôle parental total",
    description:
      "Permissions complètes : sessions live, micro, caméra, interactions",
    highlight: "Vous décidez de tout",
    color: "from-purple-500 to-violet-600",
    bgColor: "from-purple-50 to-violet-50",
  },
  {
    icon: Lock,
    title: "Authentification renforcée",
    description: "Double authentification (2FA) et connexion sécurisée",
    highlight: "Protection maximale des comptes",
    color: "from-orange-500 to-amber-600",
    bgColor: "from-orange-50 to-amber-50",
  },
  {
    icon: ClipboardList,
    title: "Traçabilité complète",
    description: "Logs d'audit de toutes les actions et interactions",
    highlight: "Transparence totale",
    color: "from-indigo-500 to-blue-600",
    bgColor: "from-indigo-50 to-blue-50",
  },
  {
    icon: Scale,
    title: "Conformité RGPD",
    description:
      "Respect strict des réglementations sur la protection des mineurs",
    highlight: "Cadre légal respecté",
    color: "from-teal-500 to-green-600",
    bgColor: "from-teal-50 to-green-50",
  },
];

export const CallToActionSection = (): JSX.Element => {
  const headerRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animation du header
      if (headerRef.current) {
        gsap.from(headerRef.current.children, {
          y: 50,
          opacity: 0,
          duration: 1,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: headerRef.current,
            start: "top 80%",
          },
        });
      }

      // Animation des stats
      if (statsRef.current) {
        gsap.from(statsRef.current.children, {
          scale: 0.5,
          opacity: 0,
          duration: 0.8,
          stagger: 0.1,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: statsRef.current,
            start: "top 85%",
          },
        });
      }

      // Animation des security cards
      cardsRef.current.forEach((card, index) => {
        if (card) {
          gsap.fromTo(
            card,
            { y: 50, opacity: 0 },
            {
              y: 0,
              opacity: 1,
              duration: 0.8,
              delay: index * 0.1,
              ease: "power3.out",
              scrollTrigger: {
                trigger: card,
                start: "top 85%",
              },
            }
          );
        }
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <section className="w-full bg-slate-950 py-10 sm:py-20 lg:py-32 relative overflow-hidden">
      {/* Background image avec overlay */}
      <div className="absolute inset-0 opacity-10">
        <img
          src="https://images.unsplash.com/photo-1511895426328-dc8714191300?w=1920&q=80&fm=webp"
          alt=""
          className="w-full h-full object-cover"
          onError={(e) => {
            e.currentTarget.style.display = "none";
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/95 via-slate-950/90 to-slate-950/95"></div>
      </div>

      {/* Background decorative elements avec motifs africains */}
      <div className="absolute inset-0 adinkra-dots opacity-5"></div>
      <div className="absolute top-10 right-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-10 left-10 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      <div className="absolute top-1/3 left-1/2 transform -translate-x-1/2 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl"></div>

      <div className="mx-auto max-w-7xl px-4 sm:px-8">
        {/* Header amélioré */}
        <div ref={headerRef} className="text-center mb-16">
          <Badge className="inline-flex items-center px-6 py-3 bg-blue-500/10 text-blue-300 border border-blue-500/20 hover:bg-blue-500/20 rounded-full gap-2 mb-6 shadow-lg backdrop-blur-md">
            <ShieldIcon className="w-5 h-5" />
            <span className="font-bold text-base">Sécurité & Protection</span>
          </Badge>

          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 text-white">
            <span className="text-white">
              La sécurité de vos enfants est notre{" "}
            </span>
            <span className="bg-gradient-to-r from-sky-300 via-blue-300 to-indigo-300 bg-clip-text text-transparent drop-shadow-md">
              priorité absolue
            </span>
          </h2>

          <p className="max-w-3xl mx-auto text-lg sm:text-xl text-slate-300 leading-relaxed mb-10">
            Un environnement{" "}
            <strong className="text-sky-300">100% sécurisé et contrôlé</strong>{" "}
            où vos enfants peuvent apprendre en toute sérénité, sous votre
            surveillance bienveillante.
          </p>
        </div>

        {/* Security Features avec disposition améliorée */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {securityFeatures.map((feature, index) => (
            <Card
              ref={(el) => (cardsRef.current[index] = el)}
              key={index}
              className={`group relative border border-white/10 hover:border-blue-500/50 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 bg-white/5 backdrop-blur-sm overflow-hidden`}
            >
              <CardContent className="p-6 relative">
                {/* Colored accent bar avec animation */}
                <div
                  className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${feature.color} opacity-60 group-hover:opacity-100 group-hover:h-2 transition-all duration-300`}
                ></div>

                {/* Icon moderne */}
                <div className="flex items-start justify-between mb-5">
                  <div
                    className={`w-14 h-14 rounded-xl bg-gradient-to-br ${feature.color} flex items-center justify-center shadow-md group-hover:shadow-lg group-hover:scale-110 transition-all duration-300`}
                  >
                    <feature.icon className="w-7 h-7 text-white" />
                  </div>
                  <div
                    className={`bg-white/10 px-3 py-1.5 rounded-full border border-white/10`}
                  >
                    <span className="text-xs font-bold text-emerald-400">
                      ✓ Actif
                    </span>
                  </div>
                </div>

                {/* Titre et description */}
                <div>
                  <h3 className="text-lg font-bold text-white mb-2.5 group-hover:text-blue-300 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-slate-400 text-sm leading-relaxed mb-3">
                    {feature.description}
                  </p>
                  <div className="inline-flex items-center bg-white/5 px-3 py-1.5 rounded-full border border-white/10">
                    <span className="text-xs font-bold text-blue-300">
                      {feature.highlight}
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
