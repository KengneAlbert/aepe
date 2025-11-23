import { InfoIcon, ShieldIcon, SparklesIcon, UsersIcon } from "lucide-react";
import React from "react";
import { Badge } from "../../../../components/ui/badge";
import { Button } from "../../../../components/ui/button";

const features = [
  {
    icon: ShieldIcon,
    text: "100% sécurisé",
  },
  {
    icon: UsersIcon,
    text: "Contrôle parental",
  },
  {
    icon: SparklesIcon,
    text: "Ludique",
  },
];

export const HeroSection = (): JSX.Element => {
  return (
    <section className="relative w-full min-h-[600px] sm:min-h-[700px] lg:min-h-[900px] flex items-center justify-center pt-16 sm:pt-20 pb-16 sm:pb-20 px-4 sm:px-8 [background:url(..//section-3.png)_50%_50%_/_cover]">
      <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(90deg,rgba(255,255,255,0.98)_0%,rgba(255,255,255,0.95)_40%,rgba(255,255,255,0.7)_70%,rgba(0,0,0,0)_100%)]" />

      <div className="relative w-full max-w-screen-xl px-4 sm:px-8 py-8 sm:py-12 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="flex flex-col items-start space-y-6 sm:space-y-8">
            <Badge className="bg-[#f2e7ff] text-[#7d21cd] hover:bg-[#f2e7ff] px-4 py-2 rounded-full flex items-center gap-2">
              <InfoIcon className="w-4 h-4" />
              <span className="font-semibold text-sm">
                Éducation financière pour enfants de 5 à 16 ans
              </span>
            </Badge>

            <div className="space-y-2">
              <h1 className="[font-family:'Roboto',Helvetica] font-bold text-[#111726] text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight sm:leading-[1.1]">
                Apprenez à vos enfants à{" "}
                <span className="bg-[linear-gradient(90deg,rgba(147,51,234,1)_0%,rgba(219,39,119,1)_100%)] [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] [text-fill-color:transparent]">
                  gérer l'argent
                </span>{" "}
                en s'amusant
              </h1>
            </div>

            <p className="[font-family:'Roboto',Helvetica] font-normal text-[#4a5462] text-base sm:text-lg lg:text-xl leading-relaxed max-w-[584px]">
              Une plateforme ludique et sécurisée qui enseigne l'épargne,
              l'investissement et l'entrepreneuriat à travers des vidéos, jeux,
              quiz et projets interactifs.
            </p>

            <div className="flex flex-col sm:flex-row flex-wrap items-stretch sm:items-start gap-3 sm:gap-4 w-full sm:w-auto">
              <Button
                size="lg"
                className="bg-[linear-gradient(90deg,rgba(147,51,234,1)_0%,rgba(219,39,119,1)_100%)] hover:opacity-90 transition-opacity text-white font-semibold text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 h-12 sm:h-16 rounded-full"
              >
                Essai gratuit 14 jours
              </Button>

              <Button
                size="lg"
                variant="outline"
                className="bg-white border-2 border-[#9333e9] text-[#9333e9] hover:bg-[#9333e9] hover:text-white transition-colors font-semibold text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 h-12 sm:h-16 rounded-full"
              >
                Voir la démo
              </Button>
            </div>

            <div className="flex flex-wrap items-center gap-4 sm:gap-6 lg:gap-8 pt-2 sm:pt-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center gap-2">
                  <feature.icon className="w-5 h-5 sm:w-6 sm:h-6 text-[#374050]" />
                  <span className="[font-family:'Roboto',Helvetica] font-medium text-[#374050] text-sm sm:text-base">
                    {feature.text}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="hidden lg:block" />
        </div>
      </div>

      <img
        className="hidden lg:block absolute bottom-[68px] left-1/2 w-[31px] h-9 animate-bounce"
        alt="Scroll indicator"
        src="/div-54.svg"
      />
    </section>
  );
};
