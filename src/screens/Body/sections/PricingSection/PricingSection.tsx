import {
  CheckIcon,
  Target,
  CalendarRange,
  Trophy,
  Users,
  ShieldCheck,
  Coins,
} from "lucide-react";
import React, { useEffect, useRef, useState } from "react";
import { Badge } from "../../../../components/ui/badge";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const pricingPlans = [
  {
    name: "Débutant",
    description: "Idéal pour découvrir l'éducation financière",
    price: "39€",
    originalPrice: "49€",
    annualPrice: "117€",
    annualOriginalPrice: "156€",
    period: "/trimestre",
    buttonText: "Commencer maintenant",
    buttonVariant: "secondary" as const,
    features: [
      "1 enfant (5-16 ans)",
      "Cours trimestriel complet",
      "Modules adaptés à l'âge",
      "Jeux éducatifs interactifs",
      "Suivi des progrès",
      "Certificat de réussite",
      "Support par email",
      "Accès mobile et tablette",
    ],
    featured: false,
    popular: false,
  },
  {
    name: "Famille",
    description: "Le plus populaire - Éducation financière familiale",
    price: "89€",
    originalPrice: "119€",
    annualPrice: "267€",
    annualOriginalPrice: "356€",
    period: "/trimestre",
    buttonText: "Choisir famille",
    buttonVariant: "gradient" as const,
    features: [
      "Jusqu'à 3 enfants",
      "Tous les avantages Débutant",
      "Ateliers entrepreneuriaux",
      "Projets pratiques en famille",
      "Sessions live mensuelles",
      "Tableau de bord parental détaillé",
      "Rapports de progression",
      "Support prioritaire",
      "Accès aux masterclass",
    ],
    featured: true,
    popular: true,
  },
];

const additionalFeatures = [
  {
    icon: Target,
    title: "Adapté à chaque âge",
    description:
      "Contenu spécialement conçu pour les 5-8 ans, 9-12 ans et 13-16 ans",
  },
  {
    icon: CalendarRange,
    title: "Rythme trimestriel",
    description:
      "Nouveaux cours chaque trimestre (janvier, avril, juillet, octobre)",
  },
  {
    icon: Trophy,
    title: "Apprentissage certifié",
    description: "Certificats de réussite et badges de progression",
  },
  {
    icon: Users,
    title: "Expérience familiale",
    description: "Activités parents-enfants et projets en famille",
  },
];

export const PricingSection = (): JSX.Element => {
  const [billingPeriod, setBillingPeriod] = useState<"trimestre" | "annuel">(
    "trimestre"
  );
  const headerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);
  const featuresRef = useRef<HTMLDivElement>(null);

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

      // Animation des pricing cards avec effet 3D
      cardsRef.current.forEach((card, index) => {
        if (card) {
          gsap.from(card, {
            y: 100,
            opacity: 0,
            rotationY: -20,
            scale: 0.9,
            duration: 1,
            delay: index * 0.2,
            ease: "back.out(1.4)",
            scrollTrigger: {
              trigger: card,
              start: "top 85%",
            },
          });

          // Hover effect amélioré
          card.addEventListener("mouseenter", () => {
            gsap.to(card, {
              scale: 1.05,
              y: -15,
              boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
              duration: 0.3,
              ease: "power2.out",
            });
          });

          card.addEventListener("mouseleave", () => {
            gsap.to(card, {
              scale: 1,
              y: 0,
              boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)",
              duration: 0.3,
              ease: "power2.out",
            });
          });
        }
      });

      // Animation des additional features
      if (featuresRef.current) {
        gsap.from(featuresRef.current.children, {
          x: -50,
          opacity: 0,
          duration: 0.8,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: featuresRef.current,
            start: "top 85%",
          },
        });
      }
    });

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="tarifs"
      className="relative w-full py-10 sm:py-20 lg:py-32 bg-slate-50 overflow-hidden"
    >
      {/* Background image avec overlay */}
      <div className="absolute inset-0 opacity-[0.06]">
        <img
          src="https://images.unsplash.com/photo-1554224311-beee2efdc0c8?w=1920&q=80&fm=webp"
          alt=""
          className="w-full h-full object-cover"
          onError={(e) => {
            e.currentTarget.style.display = "none";
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-50/90 via-slate-50/85 to-slate-50/95"></div>
      </div>

      {/* Background avec motifs africains */}
      <div className="absolute inset-0 kente-pattern opacity-5"></div>
      <div className="absolute top-20 left-20 w-96 h-96 bg-indigo-300/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-violet-300/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      <div className="relative">
        <div className="container mx-auto px-4 sm:px-8 max-w-screen-xl">
          <div className="flex flex-col items-center gap-8 sm:gap-12 lg:gap-16">
            <div
              ref={headerRef}
              className="flex flex-col items-center gap-4 sm:gap-6 max-w-5xl w-full"
            >
              <Badge className="bg-indigo-100 text-indigo-700 border border-indigo-200 hover:bg-indigo-200 px-6 py-3 rounded-full shadow-sm">
                <Coins className="w-5 h-5 mr-2" />
                <span className="font-bold text-base">Tarifs</span>
              </Badge>

              <div className="flex flex-wrap items-center justify-center gap-2">
                <h2 className="[font-family:'Roboto',Helvetica] font-bold text-slate-900 text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-center leading-tight">
                  Un investissement dans
                </h2>
                <h2 className="bg-gradient-to-r from-indigo-600 via-violet-600 to-purple-600 bg-clip-text text-transparent [font-family:'Roboto',Helvetica] font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-center leading-tight drop-shadow-sm">
                  l'avenir de vos enfants
                </h2>
              </div>

              <div className="max-w-3xl px-4 sm:px-8 lg:px-14 w-full">
                <p className="[font-family:'Roboto',Helvetica] font-normal text-slate-600 text-base sm:text-lg lg:text-xl text-center leading-relaxed">
                  Choisissez le plan qui correspond à vos besoins. Tous les
                  plans avec accès immédiat à toutes les fonctionnalités.
                </p>
              </div>

              <div className="flex items-center justify-center p-1.5 bg-white rounded-full shadow-lg border border-slate-200">
                <Button
                  onClick={() => setBillingPeriod("trimestre")}
                  className={`px-6 sm:px-8 py-2.5 sm:py-3 font-bold text-sm sm:text-base rounded-full transition-all shadow-sm ${
                    billingPeriod === "trimestre"
                      ? "bg-gradient-to-r from-indigo-600 to-violet-600 text-white shadow-indigo-200"
                      : "bg-transparent text-slate-600 hover:bg-slate-50"
                  }`}
                >
                  Trimestriel
                </Button>
                <div className="relative">
                  <Button
                    onClick={() => setBillingPeriod("annuel")}
                    className={`px-6 sm:px-8 py-2.5 sm:py-3 font-semibold text-sm sm:text-base rounded-full transition-all ${
                      billingPeriod === "annuel"
                        ? "bg-gradient-to-r from-indigo-600 to-violet-600 text-white shadow-lg shadow-indigo-200"
                        : "bg-transparent text-slate-600 hover:bg-slate-50"
                    }`}
                  >
                    Annuel
                  </Button>
                  <Badge className="absolute -top-2 right-1 sm:right-2 bg-emerald-100 text-emerald-700 border border-emerald-200 px-2 py-1 text-xs font-bold rounded-full shadow-sm">
                    -25%
                  </Badge>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 w-full max-w-4xl mx-auto">
              {pricingPlans.map((plan, index) => (
                <Card
                  key={index}
                  ref={(el) => (cardsRef.current[index] = el)}
                  className={`relative flex flex-col ${
                    plan.featured
                      ? "border-2 border-indigo-500 shadow-[0px_25px_50px_-12px_rgba(99,102,241,0.25)] md:scale-105 bg-gradient-to-b from-white to-indigo-50/50"
                      : "border border-slate-200 shadow-lg hover:border-indigo-300"
                  } rounded-2xl sm:rounded-3xl overflow-hidden bg-white transition-all duration-300 hover:scale-[1.02] hover:shadow-xl`}
                >
                  {plan.popular && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 z-10">
                      <Badge className="bg-gradient-to-r from-indigo-600 via-violet-600 to-indigo-600 text-white px-5 py-2 text-sm font-bold rounded-full shadow-lg border border-indigo-400/20">
                        Plus populaire
                      </Badge>
                    </div>
                  )}

                  <CardContent className="flex flex-col p-6 sm:p-8 gap-4 sm:gap-6 flex-grow">
                    <div className="flex flex-col gap-2">
                      <h3 className="[font-family:'Roboto',Helvetica] font-bold text-slate-900 text-xl sm:text-2xl leading-7 sm:leading-8">
                        {plan.name}
                      </h3>
                      <p className="[font-family:'Roboto',Helvetica] font-normal text-slate-500 text-base leading-6">
                        {plan.description}
                      </p>
                    </div>

                    <div className="flex flex-col gap-1">
                      <div className="flex items-baseline gap-2">
                        <span className="[font-family:'Roboto',Helvetica] font-bold text-slate-900 text-3xl sm:text-4xl lg:text-5xl leading-tight">
                          {billingPeriod === "trimestre"
                            ? plan.price
                            : plan.annualPrice}
                        </span>
                        <span className="[font-family:'Roboto',Helvetica] font-normal text-slate-500 text-sm sm:text-base leading-6">
                          {billingPeriod === "trimestre" ? "/trimestre" : "/an"}
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-slate-400 line-through text-sm">
                          {billingPeriod === "trimestre"
                            ? plan.originalPrice
                            : plan.annualOriginalPrice}
                        </span>
                        <Badge className="bg-emerald-100 text-emerald-700 border border-emerald-200 text-xs px-2 py-1">
                          {billingPeriod === "annuel"
                            ? "Économie -25%"
                            : "Économie"}
                        </Badge>
                      </div>
                    </div>

                    <Button
                      className={`w-full py-3 sm:py-4 rounded-full font-bold text-sm sm:text-base transition-all ${
                        plan.buttonVariant === "gradient"
                          ? "bg-gradient-to-r from-indigo-600 via-violet-600 to-purple-600 text-white hover:from-indigo-700 hover:via-violet-700 hover:to-purple-700 shadow-lg hover:shadow-indigo-500/25"
                          : "bg-white text-indigo-700 hover:bg-indigo-50 border-2 border-indigo-100 hover:border-indigo-200 shadow-sm"
                      }`}
                    >
                      {plan.buttonText}
                    </Button>

                    <div className="flex flex-col gap-4 flex-grow">
                      {plan.features.map((feature, featureIndex) => (
                        <div
                          key={featureIndex}
                          className="flex items-start gap-3"
                        >
                          <CheckIcon
                            className={`w-5 h-5 flex-shrink-0 mt-0.5 ${
                              plan.featured
                                ? "text-indigo-600"
                                : "text-slate-400"
                            }`}
                          />
                          <span className="[font-family:'Roboto',Helvetica] font-normal text-slate-600 text-base leading-6">
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>


            <div className="flex flex-col items-center gap-4 max-w-5xl w-full px-4 mt-8">
              <p className="[font-family:'Roboto',Helvetica] font-normal text-slate-500 text-sm sm:text-base text-center leading-6">
                Une question sur nos offres ? Notre équipe est là pour vous
                accompagner.
              </p>
              <Button
                variant="outline"
                className="px-6 sm:px-8 py-3 sm:py-3.5 border-2 border-indigo-500 text-indigo-600 font-bold text-sm sm:text-base rounded-full hover:bg-gradient-to-r hover:from-indigo-600 hover:via-violet-600 hover:to-purple-600 hover:text-white hover:border-transparent transition-all duration-300 hover:shadow-xl hover:shadow-indigo-500/30"
              >
                Nous contacter
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
