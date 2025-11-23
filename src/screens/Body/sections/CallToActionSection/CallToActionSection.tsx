import { ShieldIcon } from "lucide-react";
import React from "react";
import { Badge } from "../../../../components/ui/badge";
import { Card, CardContent } from "../../../../components/ui/card";

const securityFeatures = [
  {
    icon: "/margin-wrap.svg",
    title: "Environnement 100% sécurisé",
    description:
      "Plateforme fermée sans accès aux réseaux sociaux externes pour protéger vos enfants",
  },
  {
    icon: "/margin-wrap-4.svg",
    title: "Pseudonymes obligatoires",
    description:
      "Aucune donnée personnelle visible, les enfants utilisent uniquement des pseudonymes",
  },
  {
    icon: "/margin-wrap-29.svg",
    title: "Contrôle parental avancé",
    description:
      "Les parents contrôlent toutes les permissions : live, micro, caméra, interactions",
  },
  {
    icon: "/margin-wrap-5.svg",
    title: "Authentification renforcée",
    description:
      "Double authentification (2FA) pour les formateurs et administrateurs",
  },
  {
    icon: "/margin-wrap-1.svg",
    title: "Logs d'audit complets",
    description:
      "Traçabilité totale de toutes les actions pour garantir la sécurité",
  },
  {
    icon: "/margin-wrap-20.svg",
    title: "Conformité RGPD",
    description:
      "Respect total de la réglementation sur la protection des données des mineurs",
  },
];

const certificationBadges = [
  "RGPD Conforme",
  "SSL Sécurisé",
  "Données Chiffrées",
];

export const CallToActionSection = (): JSX.Element => {
  return (
    <section className="w-full bg-white py-12 sm:py-16 lg:py-24">
      <div className="mx-auto max-w-screen-xl px-4 sm:px-8">
        <div className="flex flex-col items-start gap-8 sm:gap-12 lg:gap-16">
          <header className="w-full">
            <div className="flex flex-col items-center gap-4 pb-4">
              <Badge className="bg-[#dbfbe7] text-[#15803c] hover:bg-[#dbfbe7] px-4 py-2 rounded-full flex items-center gap-2">
                <ShieldIcon className="w-4 h-6" />
                <span className="font-semibold text-sm">Sécurité</span>
              </Badge>
            </div>

            <div className="flex flex-col items-center gap-4 sm:gap-6 pb-4 sm:pb-6">
              <h2 className="text-center text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight [font-family:'Roboto',Helvetica]">
                <span className="text-[#111726]">
                  La sécurité de vos enfants est notre{" "}
                </span>
                <span className="bg-[linear-gradient(90deg,rgba(22,163,74,1)_0%,rgba(37,99,235,1)_100%)] [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] [text-fill-color:transparent]">
                  priorité absolue
                </span>
              </h2>
            </div>

            <div className="flex justify-center px-4 sm:px-8 md:px-16 lg:px-56">
              <p className="max-w-screen-md text-center text-base sm:text-lg lg:text-xl text-[#4a5462] leading-relaxed [font-family:'Roboto',Helvetica]">
                Un environnement totalement sécurisé et contrôlé pour que vos
                enfants apprennent en toute tranquillité
              </p>
            </div>
          </header>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 w-full">
            {securityFeatures.map((feature, index) => (
              <Card
                key={index}
                className="border-[#dbfbe7] bg-[linear-gradient(157deg,rgba(240,253,244,1)_0%,rgba(239,246,255,1)_100%)] rounded-2xl"
              >
                <CardContent className="p-6 sm:p-8 lg:p-[33px] flex flex-col gap-3">
                  <img src={feature.icon} alt="" className="flex-shrink-0" />
                  <h3 className="text-lg sm:text-xl font-bold text-[#111726] leading-6 sm:leading-7 [font-family:'Roboto',Helvetica]">
                    {feature.title}
                  </h3>
                  <p className="text-base text-[#4a5462] leading-6 [font-family:'Roboto',Helvetica] line-clamp-3">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="w-full bg-[linear-gradient(90deg,rgba(22,163,74,1)_0%,rgba(37,99,235,1)_100%)] border-0 rounded-2xl sm:rounded-3xl">
            <CardContent className="p-6 sm:p-8 lg:p-12 flex flex-col gap-4">
              <div className="flex justify-center w-full">
                <img src="/inline-center-wrap.svg" alt="" className="w-full" />
              </div>

              <h2 className="text-2xl sm:text-3xl font-bold text-white text-center leading-tight sm:leading-9 [font-family:'Roboto',Helvetica]">
                Certification et conformité
              </h2>

              <div className="flex justify-center px-4 sm:px-8 md:px-16 lg:px-44 pb-4">
                <p className="max-w-screen-md text-base sm:text-lg lg:text-xl text-[#ffffffe6] text-center leading-relaxed [font-family:'Roboto',Helvetica]">
                  Notre plateforme respecte les normes les plus strictes en
                  matière de protection des données des mineurs et de sécurité
                  en ligne. Nous sommes conformes au RGPD et aux réglementations
                  internationales.
                </p>
              </div>

              <div className="flex flex-wrap justify-center gap-3 sm:gap-4 lg:gap-6">
                {certificationBadges.map((badge, index) => (
                  <Badge
                    key={index}
                    className="bg-[#ffffff33] hover:bg-[#ffffff33] text-white px-4 sm:px-6 py-2 sm:py-3 rounded-full backdrop-blur-[2px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(2px)_brightness(100%)] h-10 sm:h-12"
                  >
                    <span className="font-semibold text-base text-center [font-family:'Roboto',Helvetica]">
                      {badge}
                    </span>
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
