import {
  InfoIcon,
  Users,
  Palette,
  Gamepad2,
  BarChart3,
  Sparkles,
} from "lucide-react";
import React, { useEffect, useRef } from "react";
import { Badge } from "../../../../components/ui/badge";
import { Card, CardContent } from "../../../../components/ui/card";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const steps = [
  {
    number: "01",
    icon: Users,
    title: "Créez votre famille",
    description:
      "Inscription en 2 minutes • Ajoutez vos enfants • Choisissez votre plan",
    details: "Interface simple et sécurisée pour toute la famille",
    color: "from-purple-500 to-violet-600",
    bgColor: "from-purple-50 to-violet-50",
    time: "2 min",
  },
  {
    number: "02",
    icon: Palette,
    title: "Personnalisez l'expérience",
    description:
      "Avatar unique • Pseudonyme sécurisé • Préférences d'apprentissage",
    details: "Chaque enfant a son espace personnalisé et protégé",
    color: "from-pink-500 to-rose-600",
    bgColor: "from-pink-50 to-rose-50",
    time: "5 min",
  },
  {
    number: "03",
    icon: Gamepad2,
    title: "Commencez à apprendre",
    description:
      "Modules adaptés à l'âge • Progression personnalisée • Jeux interactifs",
    details: "L'apprentissage devient un jeu passionnant",
    color: "from-blue-500 to-cyan-600",
    bgColor: "from-blue-50 to-cyan-50",
    time: "Immédiat",
  },
  {
    number: "04",
    icon: BarChart3,
    title: "Suivez les progrès",
    description:
      "Tableaux de bord • Rapports détaillés • Badges et récompenses",
    details: "Célébrez chaque victoire ensemble",
    color: "from-green-500 to-emerald-600",
    bgColor: "from-green-50 to-emerald-50",
    time: "En continu",
  },
];

export const HowItWorksSection = (): JSX.Element => {
  const headerRef = useRef<HTMLDivElement>(null);
  const stepsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animation du header
      if (headerRef.current) {
        gsap.from(headerRef.current.children, {
          y: 50,
          opacity: 0,
          duration: 1,
          stagger: 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: headerRef.current,
            start: "top 80%",
          },
        });
      }

      // Animation des steps avec stagger
      stepsRef.current.forEach((step, index) => {
        if (step) {
          gsap.from(step, {
            y: 100,
            opacity: 0,
            scale: 0.8,
            duration: 0.8,
            delay: index * 0.15,
            ease: "back.out(1.7)",
            scrollTrigger: {
              trigger: step,
              start: "top 85%",
            },
          });
        }
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="comment-ca-marche"
      className="w-full py-16 sm:py-20 lg:py-28 bg-gradient-to-b from-yellow-50/50 via-orange-50/30 to-white relative overflow-hidden"
    >
      {/* Background image avec overlay */}
      <div className="absolute inset-0 opacity-10">
        <img
          src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=1920&q=80"
          alt=""
          className="w-full h-full object-cover"
          onError={(e) => {
            e.currentTarget.style.display = "none";
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white/80 via-white/60 to-white/90"></div>
      </div>

      {/* Background decorative elements avec motifs africains */}
      <div className="absolute inset-0 adinkra-dots opacity-15"></div>
      <div className="absolute top-10 left-10 w-64 h-64 bg-gradient-to-br from-orange-300/30 to-yellow-300/30 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-10 right-10 w-72 h-72 bg-gradient-to-br from-purple-300/30 to-pink-300/30 rounded-full blur-3xl animate-pulse delay-1000"></div>
      <div className="absolute top-1/2 left-1/4 w-48 h-48 bg-gradient-to-br from-green-300/20 to-emerald-300/20 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Header amélioré */}
        <div ref={headerRef} className="text-center mb-16">
          <Badge className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-orange-500 via-purple-500 to-pink-500 text-white hover:opacity-90 rounded-full gap-2 mb-6 shadow-lg">
            <Sparkles className="w-5 h-5" />
            <span className="font-bold text-base">Comment ça marche</span>
          </Badge>

          <h2 className="font-bold text-gray-900 text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-center leading-tight mb-6">
            Commencez en{" "}
            <span className="bg-gradient-to-r from-orange-600 via-purple-600 to-pink-600 bg-clip-text text-transparent drop-shadow-sm">
              4 étapes simples
            </span>
          </h2>

          <p className="text-gray-600 text-lg sm:text-xl text-center max-w-3xl mx-auto leading-relaxed">
            De l'inscription à l'apprentissage, tout est conçu pour être
            <strong className="text-gray-900"> intuitif et sécurisé</strong>
          </p>

          {/* Timeline indicator */}
          <div className="flex justify-center items-center mt-8">
            <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-md border border-purple-100">
              <span className="text-sm text-gray-600">Temps total:</span>
              <span className="font-semibold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                Moins de 10 minutes
              </span>
            </div>
          </div>
        </div>

        {/* Steps avec nouvelle disposition */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6 relative">
          {/* Ligne de connexion pour desktop */}
          <div className="hidden lg:block absolute top-20 left-0 w-full h-0.5 bg-gradient-to-r from-purple-200 to-green-200"></div>

          {steps.map((step, index) => (
            <div
              key={index}
              ref={(el) => (stepsRef.current[index] = el)}
              className="relative group"
            >
              {/* Step card améliorée */}
              <Card
                className={`w-full rounded-3xl border-0 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105 bg-gradient-to-br ${step.bgColor} overflow-hidden`}
              >
                <CardContent className="p-8 relative">
                  {/* Numéro avec nouveau design */}
                  <div className="flex items-center justify-between mb-6">
                    <div
                      className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${step.color} flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow`}
                    >
                      <span className="text-white font-bold text-xl">
                        {step.number}
                      </span>
                    </div>
                    <div className="text-right">
                      <div className="text-xs text-gray-500 uppercase tracking-wider">
                        Durée
                      </div>
                      <div className="font-semibold text-sm text-gray-700">
                        {step.time}
                      </div>
                    </div>
                  </div>

                  {/* Icône et titre */}
                  <div className="mb-6">
                    <div className="flex justify-center mb-3">
                      <step.icon className="w-12 h-12 text-gray-700" />
                    </div>
                    <h3 className="font-bold text-gray-900 text-xl lg:text-2xl text-center leading-tight">
                      {step.title}
                    </h3>
                  </div>

                  {/* Description principale */}
                  <div className="mb-4">
                    <div className="text-gray-700 font-medium text-sm leading-relaxed text-center">
                      {step.description}
                    </div>
                  </div>

                  {/* Détails supplémentaires */}
                  <div className="text-center">
                    <p className="text-gray-600 text-xs leading-relaxed">
                      {step.details}
                    </p>
                  </div>

                  {/* Indicateur de progression */}
                  <div className="mt-6">
                    <div
                      className={`h-1 bg-gradient-to-r ${step.color} rounded-full`}
                    ></div>
                  </div>
                </CardContent>
              </Card>

              {/* Flèche de connexion pour desktop */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-20 -right-3 z-10">
                  <div className="w-6 h-6 bg-white border-2 border-gray-200 rounded-full flex items-center justify-center shadow-sm">
                    <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                  </div>
                </div>
              )}

              {/* Numéro de connexion pour mobile */}
              {index < steps.length - 1 && (
                <div className="md:hidden flex justify-center my-4">
                  <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center">
                    <div className="w-1 h-4 bg-gray-400 rounded-full transform rotate-90"></div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Section call-to-action */}
        <div className="mt-20 text-center">
          <div className="bg-white rounded-3xl shadow-xl p-8 lg:p-12 border border-gray-100">
            <h3 className="font-bold text-gray-900 text-2xl lg:text-3xl mb-4">
              Prêt à commencer l'aventure ?
            </h3>
            <p className="text-gray-600 text-lg mb-8 max-w-2xl mx-auto">
              Rejoignez les milliers de familles qui transforment déjà
              l'éducation financière de leurs enfants
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-bold px-8 py-4 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                Commencer maintenant
              </button>
              <button className="bg-white border-2 border-gray-200 text-gray-700 hover:bg-gray-50 hover:border-gray-300 font-semibold px-8 py-4 rounded-2xl transition-all duration-300">
                📞 Parler à un conseiller
              </button>
            </div>

            {/* Garanties */}
            <div className="flex flex-wrap justify-center gap-6 mt-8 pt-8 border-t border-gray-100">
              <div className="flex items-center gap-2">
                <span className="text-green-500">✅</span>
                <span className="text-sm text-gray-600">Accès immédiat</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-green-500">✅</span>
                <span className="text-sm text-gray-600">Annulation facile</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-green-500">✅</span>
                <span className="text-sm text-gray-600">Support 7j/7</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
