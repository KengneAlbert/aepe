import { CheckIcon } from "lucide-react";
import React from "react";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";

const statisticsData = [
  {
    value: "14 jours",
    label: "Essai gratuit sans engagement",
  },
  {
    value: "10 000+",
    label: "Enfants déjà inscrits",
  },
  {
    value: "4.9/5",
    label: "Note moyenne des parents",
  },
];

const featuresData = [
  "Sans carte bancaire",
  "Annulation à tout moment",
  "Support 7j/7",
];

export const MainContentSection = (): JSX.Element => {
  return (
    <section className="relative flex flex-col items-center w-full py-12 sm:py-16 lg:py-24 px-4 sm:px-8 bg-gradient-to-br from-purple-600 via-pink-600 to-purple-700 overflow-hidden">
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-[128px]" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-[128px]" />
      </div>

      <div className="relative z-10 flex flex-col items-center max-w-screen-lg w-full px-4 sm:px-8 space-y-8 sm:space-y-12">
        <div className="flex flex-col items-center space-y-4 sm:space-y-6 text-center">
          <h1 className="[font-family:'Roboto',Helvetica] font-bold text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight">
            Prêt à transformer l'avenir financier
            <br className="hidden sm:block" />
            de vos enfants ?
          </h1>

          <p className="max-w-screen-md [font-family:'Roboto',Helvetica] font-normal text-[#ffffffe6] text-base sm:text-lg lg:text-2xl leading-relaxed">
            Rejoignez des milliers de familles qui font confiance à FinKids pour
            <br className="hidden sm:block" />
            l'éducation financière de leurs enfants
          </p>
        </div>

        <div className="flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center justify-center gap-3 sm:gap-4 w-full sm:w-auto">
          <Button
            size="lg"
            className="h-14 sm:h-16 lg:h-[72px] px-8 sm:px-10 bg-white hover:bg-white/90 transition-colors text-[#9333e9] [font-family:'Roboto',Helvetica] font-bold text-base sm:text-lg rounded-full"
          >
            Commencer l'essai gratuit
          </Button>

          <Button
            size="lg"
            variant="outline"
            className="h-14 sm:h-16 lg:h-[72px] px-8 sm:px-10 lg:px-[42px] bg-[#ffffff33] hover:bg-[#ffffff4d] transition-colors text-white border-2 border-white [font-family:'Roboto',Helvetica] font-bold text-base sm:text-lg rounded-full backdrop-blur-sm"
          >
            Planifier une démo
          </Button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 w-full max-w-4xl">
          {statisticsData.map((stat, index) => (
            <Card
              key={index}
              className="bg-[#ffffff1a] border-[#ffffff33] backdrop-blur-md rounded-2xl"
            >
              <CardContent className="flex flex-col items-center justify-center p-6 sm:p-[25px] space-y-2">
                <div className="[font-family:'Roboto',Helvetica] font-bold text-white text-3xl sm:text-4xl leading-tight text-center">
                  {stat.value}
                </div>
                <div className="[font-family:'Roboto',Helvetica] font-normal text-[#ffffffcc] text-sm sm:text-base leading-6 text-center">
                  {stat.label}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
          {featuresData.map((feature, index) => (
            <div key={index} className="flex items-center gap-2">
              <CheckIcon className="w-5 h-5 text-white" strokeWidth={2.5} />
              <span className="[font-family:'Roboto',Helvetica] font-normal text-[#ffffffcc] text-base leading-6">
                {feature}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
