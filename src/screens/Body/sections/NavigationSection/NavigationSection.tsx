import React from "react";
import { Badge } from "../../../../components/ui/badge";
import { Card, CardContent } from "../../../../components/ui/card";

const featureCards = [
  {
    icon: "/margin-wrap-67.svg",
    title: "Trophées",
    description: "Débloquez des trophées exclusifs en accomplissant des défis",
  },
  {
    icon: "/margin-wrap-76.svg",
    title: "Badges",
    description: "Collectionnez des badges pour chaque compétence maîtrisée",
  },
  {
    icon: "/margin-wrap-66.svg",
    title: "Niveaux",
    description: "Progressez à travers différents niveaux de difficulté",
  },
  {
    icon: "/margin-wrap-60.svg",
    title: "Points",
    description: "Gagnez des points à chaque activité complétée",
  },
  {
    icon: "/margin-wrap-71.svg",
    title: "Récompenses",
    description: "Échangez vos points contre des récompenses virtuelles",
  },
  {
    icon: "/margin-wrap-69.svg",
    title: "Missions",
    description: "Accomplissez des missions quotidiennes et hebdomadaires",
  },
];

const interactiveFeatures = [
  {
    icon: "/margin-wrap-72.svg",
    title: "Carte du monde interactive",
    description:
      "Explorez différents continents et pays pour découvrir les concepts financiers",
  },
  {
    icon: "/margin-wrap-75.svg",
    title: "Mascotte guide",
    description:
      "Une mascotte sympathique accompagne les enfants tout au long de leur parcours",
  },
  {
    icon: "/margin-wrap-73.svg",
    title: "Missions courtes",
    description:
      "Des activités de 5 à 15 minutes pour maintenir l'attention et la motivation",
  },
];

export const NavigationSection = (): JSX.Element => {
  return (
    <section className="flex flex-col items-start py-12 sm:py-16 lg:py-24 bg-gradient-to-br from-orange-500 via-purple-600 to-pink-600 w-full relative overflow-hidden">
      {/* Background avec motifs africains */}
      <div className="absolute inset-0 african-pattern-bg opacity-10"></div>
      <div className="absolute top-10 left-10 w-64 h-64 bg-gradient-to-br from-yellow-300/30 to-orange-300/30 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-gradient-to-br from-pink-300/30 to-purple-300/30 rounded-full blur-3xl animate-pulse delay-1000" />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-gradient-to-br from-white/10 to-transparent rounded-full blur-3xl" />

      <div className="w-full flex justify-center px-4 sm:px-8 lg:px-20">
        <div className="flex flex-col max-w-screen-xl w-full items-start px-4 sm:px-8">
          <header className="w-full pb-8 sm:pb-12 lg:pb-16 relative z-10">
            <div className="flex flex-col w-full items-center">
              <div className="flex items-center justify-center w-full pb-6">
                <Badge className="bg-gradient-to-r from-yellow-400/30 to-orange-400/30 text-white border-2 border-yellow-300/50 backdrop-blur-md px-6 py-3 rounded-full hover:from-yellow-400/40 hover:to-orange-400/40 transition-all shadow-lg">
                  <span className="text-2xl mr-2">🎮</span>
                  <span className="[font-family:'Roboto',Helvetica] font-bold text-base">
                    Gamification
                  </span>
                </Badge>
              </div>

              <div className="w-full pb-6">
                <h2 className="w-full text-center [font-family:'Roboto',Helvetica] font-bold text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight drop-shadow-lg">
                  Apprendre n&#39;a jamais été aussi{" "}
                  <span className="relative inline-block">
                    <span className="text-yellow-300 drop-shadow-[0_0_20px_rgba(253,224,71,0.5)]">
                      amusant
                    </span>
                    <span className="absolute -bottom-2 left-0 w-full h-1 bg-yellow-300 rounded-full"></span>
                  </span>
                </h2>
              </div>

              <div className="w-full flex justify-center px-4 sm:px-8 md:px-16 lg:px-32">
                <p className="max-w-3xl text-center [font-family:'Roboto',Helvetica] font-normal text-white/95 text-lg sm:text-xl lg:text-2xl leading-relaxed">
                  Un système de{" "}
                  <strong className="text-yellow-300">
                    récompenses motivant
                  </strong>{" "}
                  qui encourage les enfants à progresser et à s&#39;améliorer
                  tout en s&#39;amusant
                </p>
              </div>
            </div>
          </header>

          <div className="w-full pb-8 sm:pb-12 relative z-10">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 w-full">
              {featureCards.map((card, index) => (
                <Card
                  key={index}
                  className="group bg-white/10 border-2 border-white/20 backdrop-blur-lg hover:bg-white/20 hover:border-yellow-300/50 transition-all duration-300 rounded-2xl hover:scale-105 hover:shadow-2xl hover:shadow-yellow-500/20"
                >
                  <CardContent className="p-5 sm:p-6 lg:p-7">
                    <div className="mb-4 w-16 h-16 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                      <img
                        className="w-10 h-10"
                        alt={card.title}
                        src={card.icon}
                      />
                    </div>
                    <h3 className="[font-family:'Roboto',Helvetica] font-bold text-white text-lg sm:text-xl leading-6 sm:leading-7 pb-2 group-hover:text-yellow-300 transition-colors">
                      {card.title}
                    </h3>
                    <p className="[font-family:'Roboto',Helvetica] font-normal text-white/90 text-base leading-6">
                      {card.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
