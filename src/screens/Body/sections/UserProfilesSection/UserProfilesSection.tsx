import React from "react";
import { Users } from "lucide-react";
import { Badge } from "../../../../components/ui/badge";
import { Card, CardContent } from "../../../../components/ui/card";

const userProfiles = [
  {
    icon: "/margin-wrap-39.svg",
    title: "Pour les Enfants",
    description: "Un univers ludique et sécurisé pour apprendre en s'amusant",
    image:
      "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=600&q=80",
    imagePosition: "right",
    features: [
      "Avatar personnalisé et pseudonyme",
      "Tableau de bord interactif coloré",
      "Vidéos, jeux et quiz adaptés à leur âge",
      "Badges et trophées à collectionner",
      "Tirelire virtuelle avec objectifs",
      "Projets entrepreneuriaux guidés",
      "Missions quotidiennes amusantes",
      "Apprentissage par le jeu",
    ],
    highlight: "🎮 Interface 100% ludique",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: "/margin-wrap-48.svg",
    title: "Pour les Parents",
    description:
      "Suivez et accompagnez la progression de vos enfants en toute sérénité",
    image:
      "https://images.unsplash.com/photo-1475503572774-15a45e5d60b9?w=600&q=80",
    imagePosition: "left",
    features: [
      "Tableau de bord familial complet",
      "Suivi de progression en temps réel",
      "Rapports hebdomadaires détaillés",
      "Contrôle parental avancé et sécurisé",
      "Gestion multi-enfants simplifiée",
      "Alertes et notifications personnalisées",
      "Support client dédié aux parents",
      "Ressources pédagogiques exclusives",
    ],
    highlight: "👨‍👩‍👧‍👦 Contrôle total",
    color: "from-purple-500 to-pink-500",
  },
];

export const UserProfilesSection = (): JSX.Element => {
  return (
    <section
      id="pour-qui"
      className="relative w-full py-16 sm:py-20 lg:py-28 bg-gradient-to-b from-purple-50/40 via-pink-50/30 to-orange-50/40 overflow-hidden"
    >
      {/* Background avec motifs africains */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 adinkra-dots opacity-10"></div>
        <div className="absolute top-20 right-20 w-96 h-96 bg-gradient-to-br from-purple-400/20 to-pink-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-gradient-to-br from-orange-400/20 to-yellow-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-gradient-to-br from-cyan-400/15 to-blue-400/15 rounded-full blur-3xl"></div>
      </div>

      <div className="relative container mx-auto px-4 sm:px-8 lg:px-20">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-8">
          <header className="pb-12 sm:pb-16 lg:pb-20">
            <div className="flex flex-col items-center gap-4 sm:gap-6">
              <Badge className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-100 via-pink-100 to-orange-100 text-purple-800 hover:bg-purple-100 rounded-full border-2 border-purple-300 shadow-lg">
                <Users className="w-5 h-5" />
                <span className="font-bold text-base">Pour qui</span>
              </Badge>
              <Badge className="hidden bg-[#dbfbe7] text-[#15803c] hover:bg-[#dbfbe7] px-4 py-2 rounded-full">
                <img
                  className="w-[16.67px] h-6 mr-2"
                  alt="Icon"
                  src="/i-220.svg"
                />
                <span className="font-semibold text-sm">Pour qui</span>
              </Badge>

              <h2 className="flex flex-wrap items-center justify-center gap-2 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-center leading-tight">
                <span className="text-gray-900 [font-family:'Roboto',Helvetica]">
                  Une plateforme pensée pour
                </span>
                <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-orange-600 bg-clip-text text-transparent [font-family:'Roboto',Helvetica] drop-shadow-sm">
                  toute la famille
                </span>
              </h2>

              <p className="max-w-screen-md text-lg sm:text-xl text-gray-600 text-center [font-family:'Roboto',Helvetica] px-4 leading-relaxed">
                Chaque utilisateur dispose d'un{" "}
                <strong className="text-gray-900">espace personnalisé</strong>{" "}
                adapté à ses besoins
              </p>
            </div>
          </header>

          {/* Grid layout pour une meilleure disposition */}
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
            {userProfiles.map((profile, index) => (
              <Card
                key={index}
                className="group overflow-hidden rounded-3xl shadow-xl hover:shadow-2xl border border-gray-100 bg-white transition-all duration-500 hover:scale-[1.02] hover:-translate-y-2"
              >
                <CardContent className="p-0 relative">
                  {/* Gradient overlay */}
                  <div
                    className={`absolute top-0 left-0 w-full h-2 bg-gradient-to-r ${profile.color}`}
                  ></div>

                  <div className="p-8 lg:p-10">
                    {/* Header avec icon et highlight */}
                    <div className="flex items-start justify-between mb-6">
                      <div
                        className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${profile.color} flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow`}
                      >
                        <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center">
                          <span className="text-white text-lg font-bold">
                            {profile.title.includes("Enfants") ? "👶" : "👨‍👩‍👧‍👦"}
                          </span>
                        </div>
                      </div>
                      <div className="text-right">
                        <span className="inline-flex items-center bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm font-semibold">
                          {profile.highlight}
                        </span>
                      </div>
                    </div>

                    {/* Titre et description */}
                    <div className="mb-8">
                      <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-600 group-hover:to-pink-600 group-hover:bg-clip-text transition-all duration-300">
                        {profile.title}
                      </h3>
                      <p className="text-lg text-gray-600 leading-relaxed">
                        {profile.description}
                      </p>
                    </div>

                    {/* Features avec nouvelle disposition */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {profile.features.map((feature, featureIndex) => (
                        <div
                          key={featureIndex}
                          className="flex items-start gap-3 p-3 rounded-xl hover:bg-gray-50 transition-colors group/feature"
                        >
                          <div className="flex-shrink-0 w-5 h-5 rounded-full bg-green-100 flex items-center justify-center mt-0.5">
                            <span className="text-green-600 text-xs font-bold">
                              ✓
                            </span>
                          </div>
                          <span className="text-sm text-gray-700 group-hover/feature:text-gray-900 transition-colors leading-relaxed">
                            {feature}
                          </span>
                        </div>
                      ))}
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
