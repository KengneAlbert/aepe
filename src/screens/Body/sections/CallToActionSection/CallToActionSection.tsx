import { ShieldIcon } from "lucide-react";
import React, { useEffect, useRef } from "react";
import { Badge } from "../../../../components/ui/badge";
import { Card, CardContent } from "../../../../components/ui/card";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const securityFeatures = [
  {
    icon: "🛡️",
    title: "Environnement 100% fermé",
    description: "Plateforme isolée sans accès aux réseaux sociaux externes",
    highlight: "Aucun risque de contact externe",
    color: "from-green-500 to-emerald-600",
    bgColor: "from-green-50 to-emerald-50",
  },
  {
    icon: "🎭",
    title: "Identité protégée",
    description: "Pseudonymes obligatoires, aucune donnée personnelle visible",
    highlight: "Anonymat total garanti",
    color: "from-blue-500 to-cyan-600",
    bgColor: "from-blue-50 to-cyan-50",
  },
  {
    icon: "👨‍👩‍👧‍👦",
    title: "Contrôle parental total",
    description:
      "Permissions complètes : sessions live, micro, caméra, interactions",
    highlight: "Vous décidez de tout",
    color: "from-purple-500 to-violet-600",
    bgColor: "from-purple-50 to-violet-50",
  },
  {
    icon: "🔐",
    title: "Authentification renforcée",
    description: "Double authentification (2FA) et connexion sécurisée",
    highlight: "Protection maximale des comptes",
    color: "from-orange-500 to-amber-600",
    bgColor: "from-orange-50 to-amber-50",
  },
  {
    icon: "📋",
    title: "Traçabilité complète",
    description: "Logs d'audit de toutes les actions et interactions",
    highlight: "Transparence totale",
    color: "from-indigo-500 to-blue-600",
    bgColor: "from-indigo-50 to-blue-50",
  },
  {
    icon: "⚖️",
    title: "Conformité RGPD",
    description:
      "Respect strict des réglementations sur la protection des mineurs",
    highlight: "Cadre légal respecté",
    color: "from-teal-500 to-green-600",
    bgColor: "from-teal-50 to-green-50",
  },
];

const trustStats = [
  { number: "99.9%", label: "Disponibilité", icon: "⚡" },
  { number: "24/7", label: "Surveillance", icon: "👁️" },
  { number: "100%", label: "Données protégées", icon: "🔐" },
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
          gsap.from(card, {
            y: 80,
            opacity: 0,
            duration: 0.8,
            delay: index * 0.1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: card,
              start: "top 85%",
            },
          });
        }
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <section className="w-full bg-gradient-to-b from-white via-purple-50/30 to-pink-50/40 py-16 sm:py-20 lg:py-28 relative overflow-hidden">
      {/* Background decorative elements avec motifs africains */}
      <div className="absolute inset-0 adinkra-dots opacity-10"></div>
      <div className="absolute top-10 right-10 w-72 h-72 bg-gradient-to-br from-purple-300/30 to-pink-300/30 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-10 left-10 w-64 h-64 bg-gradient-to-br from-orange-300/30 to-yellow-300/30 rounded-full blur-3xl animate-pulse delay-1000"></div>
      <div className="absolute top-1/3 left-1/2 transform -translate-x-1/2 w-96 h-96 bg-gradient-to-br from-pink-300/20 to-purple-300/20 rounded-full blur-3xl"></div>

      <div className="mx-auto max-w-7xl px-4 sm:px-8">
        {/* Header amélioré */}
        <div ref={headerRef} className="text-center mb-16">
          <Badge className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 text-white hover:opacity-90 rounded-full gap-2 mb-6 shadow-lg">
            <ShieldIcon className="w-5 h-5" />
            <span className="font-bold text-base">Sécurité & Protection</span>
          </Badge>

          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
            <span className="text-gray-900">
              La sécurité de vos enfants est notre{" "}
            </span>
            <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-orange-600 bg-clip-text text-transparent drop-shadow-sm">
              priorité absolue
            </span>
          </h2>

          <p className="max-w-3xl mx-auto text-lg sm:text-xl text-gray-600 leading-relaxed mb-10">
            Un environnement{" "}
            <strong className="text-gray-900">100% sécurisé et contrôlé</strong>{" "}
            où vos enfants peuvent apprendre en toute sérénité, sous votre
            surveillance bienveillante.
          </p>

          {/* Trust Stats */}
          <div
            ref={statsRef}
            className="grid grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto mb-4"
          >
            {trustStats.map((stat, index) => (
              <div
                key={index}
                className="text-center p-4 bg-white/90 backdrop-blur-sm rounded-xl shadow-md border border-purple-100 hover:shadow-xl transition-all hover:-translate-y-1"
              >
                <div className="text-3xl mb-2">{stat.icon}</div>
                <div className="text-2xl font-bold bg-gradient-to-r from-purple-600 via-pink-600 to-orange-600 bg-clip-text text-transparent mb-1">
                  {stat.number}
                </div>
                <div className="text-sm text-gray-600 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Security Features avec disposition améliorée */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {securityFeatures.map((feature, index) => (
            <Card
              ref={(el) => (cardsRef.current[index] = el)}
              key={index}
              className={`group relative border-2 border-transparent hover:border-green-300 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 bg-white overflow-hidden`}
            >
              <CardContent className="p-6 relative">
                {/* Colored accent bar avec animation */}
                <div
                  className={`absolute top-0 left-0 w-full h-2 bg-gradient-to-r ${feature.color} opacity-60 group-hover:opacity-100 group-hover:h-3 transition-all duration-300`}
                ></div>

                {/* Icon moderne */}
                <div className="flex items-start justify-between mb-5">
                  <div
                    className={`w-14 h-14 rounded-xl bg-gradient-to-br ${feature.color} flex items-center justify-center shadow-md group-hover:shadow-lg group-hover:scale-110 transition-all duration-300`}
                  >
                    <span className="text-2xl">{feature.icon}</span>
                  </div>
                  <div
                    className={`bg-gradient-to-r ${feature.bgColor} px-3 py-1.5 rounded-full border border-green-200`}
                  >
                    <span className="text-xs font-bold text-green-700">
                      ✓ Actif
                    </span>
                  </div>
                </div>

                {/* Titre et description */}
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2.5 group-hover:text-green-600 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-3">
                    {feature.description}
                  </p>
                  <div className="inline-flex items-center bg-gradient-to-r from-green-50 to-emerald-50 px-3 py-1.5 rounded-full border border-green-200">
                    <span className="text-xs font-bold text-green-700">
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
