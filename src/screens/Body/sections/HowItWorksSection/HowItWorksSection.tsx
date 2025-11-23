import { InfoIcon } from "lucide-react";
import React from "react";
import { Badge } from "../../../../components/ui/badge";
import { Card, CardContent } from "../../../../components/ui/card";

const steps = [
  {
    number: "01",
    numberGradient:
      "bg-[linear-gradient(90deg,rgba(168,85,247,1)_0%,rgba(147,51,234,1)_100%)]",
    title: "Inscription simple",
    description:
      "Les parents créent un compte familial et ajoutent leurs enfants en quelques clics",
    icon: "/margin-wrap-32.svg",
    hasArrow: true,
  },
  {
    number: "02",
    numberGradient:
      "bg-[linear-gradient(90deg,rgba(236,72,153,1)_0%,rgba(219,39,119,1)_100%)]",
    title: "Personnalisation",
    description:
      "Chaque enfant crée son avatar et son pseudonyme pour une expérience unique et sécurisée",
    icon: "/margin-wrap-38.svg",
    hasArrow: true,
  },
  {
    number: "03",
    numberGradient:
      "bg-[linear-gradient(90deg,rgba(59,130,246,1)_0%,rgba(37,99,235,1)_100%)]",
    title: "Apprentissage ludique",
    description:
      "Les enfants explorent des modules interactifs adaptés à leur âge et progressent à leur rythme",
    icon: "/margin-wrap-34.svg",
    hasArrow: true,
  },
  {
    number: "04",
    numberGradient:
      "bg-[linear-gradient(90deg,rgba(34,197,94,1)_0%,rgba(22,163,74,1)_100%)]",
    title: "Suivi en temps réel",
    description:
      "Les parents suivent la progression, les badges obtenus et reçoivent des rapports hebdomadaires",
    icon: "/margin-wrap-47.svg",
    hasArrow: false,
  },
];

export const HowItWorksSection = (): JSX.Element => {
  return (
    <section className="flex flex-col w-full items-center px-4 sm:px-8 lg:px-0 py-12 sm:py-16 lg:py-24 bg-white">
      <div className="flex items-start px-0 sm:px-8 lg:px-20 py-0 w-full max-w-screen-xl">
        <div className="flex flex-col w-full items-start px-4 sm:px-8 py-0">
          <div className="flex flex-col items-start pb-8 sm:pb-12 lg:pb-16 w-full">
            <div className="flex flex-col items-start w-full">
              <div className="flex items-start justify-center w-full pb-4">
                <Badge className="flex items-center px-4 py-2 bg-[#dae9fe] text-[#1c4ed8] hover:bg-[#dae9fe] rounded-full gap-2">
                  <InfoIcon className="w-4 h-6" />
                  <span className="font-semibold text-sm">
                    Comment ça marche
                  </span>
                </Badge>
              </div>

              <div className="flex items-center justify-center w-full pb-4 sm:pb-6">
                <h2 className="[font-family:'Roboto',Helvetica] font-bold text-[#111726] text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-center tracking-[0] leading-tight">
                  Commencez en{" "}
                  <span className="bg-[linear-gradient(90deg,rgba(147,51,234,1)_0%,rgba(219,39,119,1)_100%)] [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] [text-fill-color:transparent]">
                    4 étapes simples
                  </span>
                </h2>
              </div>

              <div className="flex items-start justify-center w-full px-4 sm:px-8 md:px-16 lg:px-56">
                <p className="[font-family:'Roboto',Helvetica] font-normal text-[#4a5462] text-base sm:text-lg lg:text-xl text-center tracking-[0] leading-relaxed max-w-screen-md">
                  Un processus simple et rapide pour démarrer l&#39;aventure
                  financière de vos enfants
                </p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 w-full gap-6 sm:gap-8">
            {steps.map((step, index) => (
              <div
                key={index}
                className="flex flex-col items-start relative"
              >
                <Card className="w-full rounded-3xl border-2 border-transparent bg-[linear-gradient(120deg,rgba(250,245,255,1)_0%,rgba(253,242,248,1)_100%)]">
                  <CardContent className="flex flex-col items-start p-6 sm:p-8 lg:p-[34px]">
                    <div className="flex items-start pb-4 w-full">
                      <div className="flex items-center w-full">
                        <div
                          className={`${step.numberGradient} [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] [text-fill-color:transparent] [font-family:'Roboto',Helvetica] font-bold text-6xl tracking-[0] leading-[60px]`}
                        >
                          {step.number}
                        </div>
                      </div>
                    </div>

                    <img className="mb-4" alt="Step icon" src={step.icon} />

                    <div className="flex items-start pb-3 w-full">
                      <div className="flex items-center w-full">
                        <h3 className="[font-family:'Roboto',Helvetica] font-bold text-[#111726] text-xl tracking-[0] leading-7">
                          {step.title}
                        </h3>
                      </div>
                    </div>

                    <div className="flex flex-wrap items-start w-full">
                      <p className="[display:-webkit-box] [font-family:'Roboto',Helvetica] font-normal text-[#4a5462] text-base tracking-[0] leading-[26px] overflow-hidden text-ellipsis [-webkit-line-clamp:4] [-webkit-box-orient:vertical]">
                        {step.description}
                      </p>
                    </div>
                  </CardContent>
                </Card>

                {step.hasArrow && (
                  <img
                    className="hidden lg:block absolute top-[166px] -right-4 xl:-right-2 w-[31px] h-9"
                    alt="Arrow"
                    src="/div-168.svg"
                  />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
