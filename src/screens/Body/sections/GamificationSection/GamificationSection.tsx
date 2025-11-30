import React from "react";
import {
  Gamepad2,
  Trophy,
  Award,
  TrendingUp,
  Star,
  Gift,
  Target,
} from "lucide-react";
import { Badge } from "../../../../components/ui/badge";
import { Card, CardContent } from "../../../../components/ui/card";

const featureCards = [
  {
    icon: Trophy,
    title: "Trophées",
    description: "Débloquez des trophées exclusifs en accomplissant des défis",
  },
  {
    icon: Award,
    title: "Badges",
    description: "Collectionnez des badges pour chaque compétence maîtrisée",
  },
  {
    icon: TrendingUp,
    title: "Niveaux",
    description: "Progressez à travers différents niveaux de difficulté",
  },
  {
    icon: Star,
    title: "Points",
    description: "Gagnez des points à chaque activité complétée",
  },
  {
    icon: Gift,
    title: "Récompenses",
    description: "Échangez vos points contre des récompenses virtuelles",
  },
  {
    icon: Target,
    title: "Missions",
    description: "Accomplissez des missions quotidiennes et hebdomadaires",
  },
];

export const GamificationSection = (): JSX.Element => {
  return (
    <section className="flex flex-col items-start py-10 sm:py-20 lg:py-32 bg-[#0B1120] w-full relative overflow-hidden">
      {/* Background image avec overlay */}
      <div className="absolute inset-0 opacity-20">
        <img
          src="https://images.unsplash.com/photo-1511512578047-dfb367046420?w=1920&q=80&fm=webp"
          alt=""
          className="w-full h-full object-cover"
          onError={(e) => {
            e.currentTarget.style.display = "none";
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0B1120]/90 via-[#0B1120]/80 to-[#0B1120]/95"></div>
      </div>

      {/* Background avec motifs africains */}
      <div className="absolute inset-0 african-pattern-bg opacity-5"></div>
      <div className="absolute top-10 left-10 w-64 h-64 bg-purple-500/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl animate-pulse delay-1000" />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-pink-500/10 rounded-full blur-3xl" />

      <div className="w-full flex justify-center px-4 sm:px-8 lg:px-20">
        <div className="flex flex-col max-w-screen-xl w-full items-start px-4 sm:px-8">
          <header className="w-full pb-8 sm:pb-12 lg:pb-16 relative z-10">
            <div className="flex flex-col w-full items-center">
              <div className="flex items-center justify-center w-full pb-6">
                <Badge className="bg-purple-500/10 text-purple-300 border border-purple-500/30 backdrop-blur-md px-6 py-3 rounded-full hover:bg-purple-500/20 transition-all shadow-lg shadow-purple-500/10">
                  <Gamepad2 className="w-6 h-6 mr-2" />
                  <span className="[font-family:'Roboto',Helvetica] font-bold text-base tracking-wide">
                    Gamification
                  </span>
                </Badge>
              </div>

              <div className="w-full pb-6">
                <h2 className="w-full text-center [font-family:'Roboto',Helvetica] font-bold text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight drop-shadow-xl">
                  Apprendre n&#39;a jamais été aussi{" "}
                  <span className="relative inline-block">
                    <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent drop-shadow-lg">
                      amusant
                    </span>
                    <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full opacity-70"></span>
                  </span>
                </h2>
              </div>

              <div className="w-full flex justify-center px-4 sm:px-8 md:px-16 lg:px-32">
                <p className="max-w-3xl text-center [font-family:'Roboto',Helvetica] font-normal text-gray-300 text-lg sm:text-xl lg:text-2xl leading-relaxed">
                  Un système de{" "}
                  <strong className="text-purple-400 font-medium">
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
                  className="group bg-white/5 border border-white/10 backdrop-blur-lg hover:bg-white/10 hover:border-purple-500/50 transition-all duration-300 rounded-2xl hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/20"
                >
                  <CardContent className="p-5 sm:p-6 lg:p-7">
                    <div className="mb-4 w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                      <card.icon className="w-10 h-10 text-white" />
                    </div>
                    <h3 className="[font-family:'Roboto',Helvetica] font-bold text-white text-lg sm:text-xl leading-6 sm:leading-7 pb-2 group-hover:text-purple-400 transition-colors">
                      {card.title}
                    </h3>
                    <p className="[font-family:'Roboto',Helvetica] font-normal text-gray-400 text-base leading-6">
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
