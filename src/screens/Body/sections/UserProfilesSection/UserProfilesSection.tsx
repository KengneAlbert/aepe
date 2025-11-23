import React from "react";
import { Badge } from "../../../../components/ui/badge";
import { Card, CardContent } from "../../../../components/ui/card";

const userProfiles = [
  {
    icon: "/margin-wrap-39.svg",
    title: "Pour les Enfants",
    description: "Un univers ludique et sécurisé pour apprendre en s'amusant",
    image: "/img-285.png",
    imagePosition: "right",
    features: [
      "Avatar personnalisé et pseudonyme",
      "Tableau de bord interactif",
      "Vidéos, jeux et quiz adaptés",
      "Badges et trophées à collectionner",
      "Tirelire virtuelle",
      "Projets entrepreneuriaux",
    ],
  },
  {
    icon: "/margin-wrap-48.svg",
    title: "Pour les Parents",
    description: "Suivez et accompagnez la progression de vos enfants",
    image: "/img-289.png",
    imagePosition: "left",
    features: [
      "Tableau de bord familial complet",
      "Suivi de progression en temps réel",
      "Rapports hebdomadaires détaillés",
      "Contrôle parental avancé",
      "Gestion des abonnements",
      "Communication avec formateurs",
    ],
  },
  {
    icon: "/margin-wrap-58.svg",
    title: "Pour les Formateurs",
    description: "Animez et évaluez avec des outils professionnels",
    image: "/img-387.png",
    imagePosition: "right",
    features: [
      "Interface pédagogique intuitive",
      "Animation de classes en direct",
      "Évaluation rapide des missions",
      "Suivi personnalisé des élèves",
      "Statistiques et alertes",
      "Messagerie avec parents",
    ],
  },
  {
    icon: "/margin-wrap-57.svg",
    title: "Pour les Administrateurs",
    description: "Gérez la plateforme avec efficacité et sécurité",
    image: "/img-391.png",
    imagePosition: "left",
    features: [
      "Gestion complète des utilisateurs",
      "Gestion des contenus pédagogiques",
      "Suivi des paiements et abonnements",
      "Logs d'audit et sécurité",
      "Configuration de la plateforme",
      "Gestion des rôles et permissions",
    ],
  },
];

export const UserProfilesSection = (): JSX.Element => {
  return (
    <section className="w-full py-12 sm:py-16 lg:py-24 bg-[linear-gradient(0deg,rgba(250,245,255,1)_0%,rgba(255,255,255,1)_100%)]">
      <div className="container mx-auto px-4 sm:px-8 lg:px-20">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-8">
          <header className="pb-8 sm:pb-12 lg:pb-16">
            <div className="flex flex-col items-center gap-3 sm:gap-4">
              <Badge className="bg-[#dbfbe7] text-[#15803c] hover:bg-[#dbfbe7] px-4 py-2 rounded-full">
                <img
                  className="w-[16.67px] h-6 mr-2"
                  alt="Icon"
                  src="/i-220.svg"
                />
                <span className="font-semibold text-sm">Pour qui</span>
              </Badge>

              <h2 className="flex flex-wrap items-center justify-center gap-2 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center leading-tight">
                <span className="text-[#111726] [font-family:'Roboto',Helvetica]">
                  Une plateforme pour
                </span>
                <span className="bg-[linear-gradient(90deg,rgba(147,51,234,1)_0%,rgba(219,39,119,1)_100%)] [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] [text-fill-color:transparent] [font-family:'Roboto',Helvetica]">
                  toute la famille
                </span>
              </h2>

              <p className="max-w-screen-md text-base sm:text-lg lg:text-xl text-[#4a5462] text-center [font-family:'Roboto',Helvetica] px-4">
                Chaque utilisateur dispose d'un espace personnalisé adapté à ses
                besoins
              </p>
            </div>
          </header>

          <div className="flex flex-col gap-8 sm:gap-12">
            {userProfiles.map((profile, index) => (
              <Card
                key={index}
                className="overflow-hidden rounded-2xl sm:rounded-3xl shadow-[0px_20px_25px_-5px_#0000001a,0px_8px_10px_-6px_#0000001a] border-0"
              >
                <CardContent className="p-0">
                  <div
                    className={`flex flex-col ${
                      profile.imagePosition === "left" ? "lg:flex-row-reverse" : "lg:flex-row"
                    }`}
                  >
                    <div className="w-full lg:w-1/2 flex flex-col justify-center p-6 sm:p-8 lg:p-12">
                      <img className="mb-4" alt="Icon" src={profile.icon} />

                      <h3 className="text-2xl sm:text-3xl font-bold text-[#111726] mb-3 sm:mb-4 [font-family:'Roboto',Helvetica]">
                        {profile.title}
                      </h3>

                      <p className="text-base sm:text-lg text-[#4a5462] mb-6 sm:mb-8 [font-family:'Roboto',Helvetica]">
                        {profile.description}
                      </p>

                      <ul className="flex flex-col gap-3 sm:gap-4">
                        {profile.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-start">
                            <img
                              className="flex-shrink-0 mt-1"
                              alt="Check"
                              src="/margin-wrap-2.svg"
                            />
                            <span className="ml-3 text-sm sm:text-base text-[#374050] [font-family:'Roboto',Helvetica]">
                              {feature}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="w-full lg:w-1/2">
                      <img
                        className="w-full h-full object-cover"
                        alt={profile.title}
                        src={profile.image}
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
