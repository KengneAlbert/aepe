import { CheckIcon } from "lucide-react";
import React from "react";
import { Badge } from "../../../../components/ui/badge";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";

const pricingPlans = [
  {
    name: "Découverte",
    description: "Parfait pour commencer l'aventure",
    price: "9.99€",
    period: "/mois",
    buttonText: "Commencer l'essai gratuit",
    buttonVariant: "secondary" as const,
    features: [
      "1 enfant",
      "Accès aux vidéos éducatives",
      "Mini-jeux et quiz",
      "Tableau de bord basique",
      "Badges et trophées",
      "Support par email",
    ],
    featured: false,
  },
  {
    name: "Famille",
    description: "Le plus populaire pour toute la famille",
    price: "19.99€",
    period: "/mois",
    buttonText: "Commencer l'essai gratuit",
    buttonVariant: "gradient" as const,
    features: [
      "Jusqu'à 3 enfants",
      "Tout du plan Découverte",
      "Sessions live avec formateurs",
      "Missions et projets",
      "Rapports hebdomadaires détaillés",
      "Contrôle parental avancé",
      "Support prioritaire",
    ],
    featured: true,
  },
  {
    name: "Premium",
    description: "L'expérience complète et illimitée",
    price: "29.99€",
    period: "/mois",
    buttonText: "Commencer l'essai gratuit",
    buttonVariant: "secondary" as const,
    features: [
      "Enfants illimités",
      "Tout du plan Famille",
      "Coaching personnalisé",
      "Projets entrepreneuriaux avancés",
      "Accès anticipé aux nouveautés",
      "Sessions privées avec formateurs",
      "Support VIP 24/7",
    ],
    featured: false,
  },
];

export const PricingSection = (): JSX.Element => {
  return (
    <section className="w-full py-12 sm:py-16 lg:py-24 bg-[linear-gradient(0deg,rgba(250,245,255,1)_0%,rgba(255,255,255,1)_100%)]">
      <div className="container mx-auto px-4 sm:px-8 max-w-screen-xl">
        <div className="flex flex-col items-center gap-8 sm:gap-12 lg:gap-16">
          <div className="flex flex-col items-center gap-4 sm:gap-6 max-w-5xl w-full">
            <Badge className="bg-[#f2e7ff] text-[#7d21cd] hover:bg-[#f2e7ff] px-4 py-2 rounded-full">
              <img className="w-4 h-6 mr-2" alt="Icon" src="/i-670.svg" />
              <span className="font-semibold text-sm">Tarifs</span>
            </Badge>

            <div className="flex flex-wrap items-center justify-center gap-2">
              <h2 className="[font-family:'Roboto',Helvetica] font-bold text-[#111726] text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-center leading-tight">
                Un investissement dans
              </h2>
              <h2 className="bg-[linear-gradient(90deg,rgba(147,51,234,1)_0%,rgba(219,39,119,1)_100%)] [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] [text-fill-color:transparent] [font-family:'Roboto',Helvetica] font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-center leading-tight">
                l'avenir de vos enfants
              </h2>
            </div>

            <div className="max-w-3xl px-4 sm:px-8 lg:px-14 w-full">
              <p className="[font-family:'Roboto',Helvetica] font-normal text-[#4a5462] text-base sm:text-lg lg:text-xl text-center leading-relaxed">
                Choisissez le plan qui correspond à vos besoins. Tous les plans
                incluent 14 jours d'essai gratuit.
              </p>
            </div>

            <div className="flex items-center justify-center p-1 bg-white rounded-full shadow-[0px_10px_15px_-3px_#0000001a,0px_4px_6px_-4px_#0000001a]">
              <Button className="px-6 sm:px-8 py-2.5 sm:py-3 bg-[linear-gradient(90deg,rgba(147,51,234,1)_0%,rgba(219,39,119,1)_100%)] text-white font-semibold text-sm sm:text-base rounded-full hover:opacity-90 transition-opacity">
                Mensuel
              </Button>
              <div className="relative">
                <Button
                  variant="ghost"
                  className="px-6 sm:px-8 py-2.5 sm:py-3 text-[#4a5462] font-semibold text-sm sm:text-base rounded-full hover:bg-transparent"
                >
                  Annuel
                </Button>
                <Badge className="absolute -top-2 right-1 sm:right-2 bg-green-500 text-white hover:bg-green-500 px-2 py-1 text-xs font-semibold rounded-full">
                  -17%
                </Badge>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 w-full">
            {pricingPlans.map((plan, index) => (
              <Card
                key={index}
                className={`flex flex-col ${
                  plan.featured
                    ? "border-2 border-purple-500 shadow-[0px_25px_50px_-12px_#00000040] md:scale-105"
                    : "border border-[#e4e7eb] shadow-[0px_10px_15px_-3px_#0000001a,0px_4px_6px_-4px_#0000001a]"
                } rounded-2xl sm:rounded-3xl overflow-hidden bg-white transition-transform hover:scale-[1.02]`}
              >
                <CardContent className="flex flex-col p-6 sm:p-8 gap-4 sm:gap-6">
                  <div className="flex flex-col gap-2">
                    <h3 className="[font-family:'Roboto',Helvetica] font-bold text-[#111726] text-xl sm:text-2xl leading-7 sm:leading-8">
                      {plan.name}
                    </h3>
                    <p className="[font-family:'Roboto',Helvetica] font-normal text-[#4a5462] text-base leading-6">
                      {plan.description}
                    </p>
                  </div>

                  <div className="flex items-baseline gap-2">
                    <span className="[font-family:'Roboto',Helvetica] font-bold text-[#111726] text-3xl sm:text-4xl lg:text-5xl leading-tight">
                      {plan.price}
                    </span>
                    <span className="[font-family:'Roboto',Helvetica] font-normal text-[#4a5462] text-sm sm:text-base leading-6">
                      {plan.period}
                    </span>
                  </div>

                  <Button
                    className={`w-full py-3 sm:py-4 rounded-full font-semibold text-sm sm:text-base transition-all ${
                      plan.buttonVariant === "gradient"
                        ? "bg-[linear-gradient(90deg,rgba(147,51,234,1)_0%,rgba(219,39,119,1)_100%)] text-white hover:opacity-90"
                        : "bg-[#f2f4f5] text-[#111726] hover:bg-[#e5e7eb]"
                    }`}
                  >
                    {plan.buttonText}
                  </Button>

                  <div className="flex flex-col gap-4">
                    {plan.features.map((feature, featureIndex) => (
                      <div
                        key={featureIndex}
                        className="flex items-start gap-3"
                      >
                        <CheckIcon className="w-6 h-6 text-[#374050] flex-shrink-0" />
                        <span className="[font-family:'Roboto',Helvetica] font-normal text-[#374050] text-base leading-6">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="flex flex-col items-center gap-4 max-w-5xl w-full px-4">
            <p className="[font-family:'Roboto',Helvetica] font-normal text-[#4a5462] text-sm sm:text-base text-center leading-6">
              Vous avez besoin d'un plan personnalisé pour votre école ou
              organisation ?
            </p>
            <Button
              variant="outline"
              className="px-6 sm:px-8 py-3 sm:py-3.5 border-2 border-[#9333e9] text-[#9333e9] font-semibold text-sm sm:text-base rounded-full hover:bg-[#9333e9] hover:text-white transition-colors"
            >
              Contactez-nous pour un devis
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
