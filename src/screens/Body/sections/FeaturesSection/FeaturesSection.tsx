import React from "react";
import { Badge } from "../../../../components/ui/badge";
import { Card, CardContent } from "../../../../components/ui/card";

const features = [
  {
    icon: "/margin-wrap-42.svg",
    title: "Vidéos éducatives",
    description:
      "Des contenus vidéo captivants qui expliquent les concepts financiers de manière simple et amusante",
    lines: 3,
  },
  {
    icon: "/margin-wrap-35.svg",
    title: "Mini-jeux interactifs",
    description:
      "Apprendre en jouant avec des jeux qui simulent des situations financières réelles",
    lines: 2,
  },
  {
    icon: "/margin-wrap-43.svg",
    title: "Quiz et défis",
    description:
      "Testez les connaissances acquises avec des quiz ludiques et des défis progressifs",
    lines: 2,
  },
  {
    icon: "/margin-wrap-31.svg",
    title: "Missions pratiques",
    description:
      "Des missions concrètes pour mettre en pratique les apprentissages au quotidien",
    lines: 2,
  },
  {
    icon: "/margin-wrap-33.svg",
    title: "Projets entrepreneuriaux",
    description:
      "Créez et gérez des mini-entreprises virtuelles pour comprendre l'entrepreneuriat",
    lines: 2,
  },
  {
    icon: "/margin-wrap-30.svg",
    title: "Sessions en direct",
    description:
      "Participez à des classes live avec des formateurs experts en éducation financière",
    lines: 2,
  },
];

export const FeaturesSection = (): JSX.Element => {
  return (
    <section className="flex flex-col w-full items-center px-4 sm:px-8 lg:px-0 py-12 sm:py-16 lg:py-24 bg-[linear-gradient(0deg,rgba(255,255,255,1)_0%,rgba(250,245,255,1)_100%)]">
      <div className="flex items-start px-0 sm:px-8 lg:px-20 py-0 w-full max-w-screen-xl">
        <div className="flex flex-col w-full items-start px-4 sm:px-8 py-0">
          <div className="flex flex-col items-start pb-8 sm:pb-12 lg:pb-16 w-full">
            <div className="flex flex-col w-full items-start">
              <div className="flex items-start justify-center w-full pb-4">
                <Badge className="flex items-center gap-2 px-4 py-2 bg-[#f2e7ff] text-[#7d21cd] hover:bg-[#f2e7ff] rounded-full">
                  <img className="w-[16.67px] h-6" alt="Icon" src="/i-60.svg" />
                  <span className="font-semibold text-sm">Fonctionnalités</span>
                </Badge>
              </div>

              <div className="flex items-center justify-center w-full pb-4 sm:pb-6">
                <h2 className="[font-family:'Roboto',Helvetica] font-bold text-[#111726] text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-center leading-tight">
                  Une expérience d&#39;apprentissage{" "}
                  <span className="bg-[linear-gradient(90deg,rgba(147,51,234,1)_0%,rgba(219,39,119,1)_100%)] [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] [text-fill-color:transparent]">
                    complète
                  </span>
                </h2>
              </div>

              <div className="flex items-center justify-center w-full px-4 sm:px-8 md:px-16 lg:px-56">
                <p className="[font-family:'Roboto',Helvetica] font-normal text-[#4a5462] text-base sm:text-lg lg:text-xl text-center leading-relaxed">
                  Tout ce dont vos enfants ont besoin pour devenir des experts
                  en gestion financière
                </p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 w-full">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="flex flex-col items-start bg-white rounded-3xl border border-solid border-[#f2f4f5] shadow-[0px_10px_15px_-3px_#0000001a,0px_4px_6px_-4px_#0000001a] overflow-hidden"
              >
                <CardContent className="flex flex-col items-start p-6 sm:p-8 lg:p-[33px] w-full">
                  <img
                    className="mb-4"
                    alt={feature.title}
                    src={feature.icon}
                  />

                  <h3 className="[font-family:'Roboto',Helvetica] font-bold text-[#111726] text-xl sm:text-2xl leading-7 sm:leading-8 mb-3 sm:mb-4">
                    {feature.title}
                  </h3>

                  <p
                    className={`[font-family:'Roboto',Helvetica] font-normal text-[#4a5462] text-base leading-[26px] [display:-webkit-box] [-webkit-line-clamp:${feature.lines}] [-webkit-box-orient:vertical] overflow-hidden text-ellipsis`}
                  >
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
