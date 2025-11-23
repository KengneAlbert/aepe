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
    <section className="flex flex-col items-start py-12 sm:py-16 lg:py-24 bg-[linear-gradient(130deg,rgba(147,51,234,1)_0%,rgba(219,39,119,1)_50%,rgba(126,34,206,1)_100%)] w-full relative">
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
        <div className="absolute top-10 left-10 w-32 h-32 bg-white rounded-full blur-[32px]" />
        <div className="absolute top-[1365px] left-[1240px] w-40 h-40 bg-white rounded-full blur-[32px]" />
        <div className="absolute top-[782px] left-[720px] w-48 h-48 bg-white rounded-full blur-[32px]" />
      </div>

      <div className="w-full flex justify-center px-4 sm:px-8 lg:px-20">
        <div className="flex flex-col max-w-screen-xl w-full items-start px-4 sm:px-8">
          <header className="w-full pb-8 sm:pb-12 lg:pb-16">
            <div className="flex flex-col w-full items-start">
              <div className="flex items-start justify-center w-full pb-4">
                <Badge className="bg-[#ffffff33] text-white border-0 backdrop-blur-[2px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(2px)_brightness(100%)] px-4 py-2 h-10 rounded-full hover:bg-[#ffffff33]">
                  <img
                    className="w-[16.67px] h-6"
                    alt="Gamification icon"
                    src="/i-447.svg"
                  />
                  <span className="pl-2 [font-family:'Roboto',Helvetica] font-semibold text-sm">
                    Gamification
                  </span>
                </Badge>
              </div>

              <div className="w-full pb-4 sm:pb-6">
                <h2 className="w-full text-center [font-family:'Roboto',Helvetica] font-bold text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-tight">
                  <span>Apprendre n&#39;a jamais été aussi </span>
                  <span className="text-[#fddf46]">amusant</span>
                </h2>
              </div>

              <div className="w-full flex justify-center px-4 sm:px-8 md:px-16 lg:px-56">
                <p className="max-w-screen-md text-center [font-family:'Roboto',Helvetica] font-normal text-[#ffffffe6] text-base sm:text-lg lg:text-xl leading-relaxed">
                  Un système de récompenses motivant qui encourage les enfants à
                  progresser et à s&#39;améliorer
                </p>
              </div>
            </div>
          </header>

          <div className="w-full pb-8 sm:pb-12">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 w-full">
              {featureCards.map((card, index) => (
                <Card
                  key={index}
                  className="bg-[#ffffff1a] border-[#ffffff33] backdrop-blur-[6px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(6px)_brightness(100%)] rounded-2xl"
                >
                  <CardContent className="p-5 sm:p-6 lg:p-[25px]">
                    <img className="mb-4" alt={card.title} src={card.icon} />
                    <h3 className="[font-family:'Roboto',Helvetica] font-bold text-white text-lg sm:text-xl leading-6 sm:leading-7 pb-2">
                      {card.title}
                    </h3>
                    <p className="[font-family:'Roboto',Helvetica] font-normal text-[#ffffffcc] text-base leading-6 line-clamp-2">
                      {card.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <Card className="w-full bg-[#ffffff1a] border-[#ffffff33] backdrop-blur-[6px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(6px)_brightness(100%)] rounded-2xl sm:rounded-3xl">
            <CardContent className="p-6 sm:p-8 lg:p-[49px]">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 items-center">
                <div className="flex flex-col">
                  <h3 className="[font-family:'Roboto',Helvetica] font-bold text-white text-xl sm:text-2xl lg:text-3xl leading-tight sm:leading-9 pb-4 sm:pb-6">
                    Un monde interactif à explorer
                  </h3>

                  <div className="flex flex-col space-y-4">
                    {interactiveFeatures.map((feature, index) => (
                      <div key={index} className="flex items-start">
                        <img
                          className="flex-shrink-0"
                          alt={feature.title}
                          src={feature.icon}
                        />
                        <div className="pl-3">
                          <h4 className="[font-family:'Roboto',Helvetica] font-semibold text-white text-base sm:text-lg leading-6 sm:leading-7 pb-1">
                            {feature.title}
                          </h4>
                          <p className="[font-family:'Roboto',Helvetica] font-normal text-[#ffffffcc] text-base leading-6 line-clamp-2">
                            {feature.description}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex items-center justify-center">
                  <img
                    className="rounded-2xl object-cover w-full h-auto"
                    alt="Interactive world illustration"
                    src="/img-562.png"
                  />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
