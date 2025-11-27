import { CheckIcon } from "lucide-react";
import React from "react";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";

const statisticsData = [
  {
    value: "Immédiat",
    label: "Accès instantané",
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
    <section className="relative flex flex-col items-center w-full py-12 sm:py-16 lg:py-24 px-4 sm:px-8 bg-gradient-to-br from-orange-500 via-purple-600 to-pink-600 overflow-hidden">
      {/* Background avec motifs africains */}
      <div className="absolute inset-0 african-pattern-bg opacity-10"></div>
      <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-yellow-300/30 to-orange-300/30 rounded-full blur-[128px] animate-pulse" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-br from-pink-300/30 to-purple-300/30 rounded-full blur-[128px] animate-pulse delay-1000" />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-white/5 rounded-full blur-3xl" />

      <div className="relative z-10 flex flex-col items-center max-w-screen-xl w-full px-4 sm:px-8 space-y-8 sm:space-y-12">
        {/* Badge "Call to Action" */}
        <div className="flex items-center justify-center mb-4">
          <div className="bg-white/20 backdrop-blur-md border-2 border-white/30 px-6 py-3 rounded-full shadow-2xl">
            <div className="flex items-center gap-2">
              <span className="text-2xl">🚀</span>
              <span className="text-white font-bold text-base">
                Rejoignez-nous
              </span>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center space-y-6 sm:space-y-8 text-center">
          <h1 className="[font-family:'Roboto',Helvetica] font-bold text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl leading-tight drop-shadow-2xl">
            Prêt à transformer{" "}
            <span className="relative inline-block">
              <span className="bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
                l'avenir financier
              </span>
              <span className="absolute -bottom-2 left-0 w-full h-1.5 bg-gradient-to-r from-yellow-300 to-orange-300 rounded-full"></span>
            </span>
            <br className="hidden sm:block" />
            de vos enfants ?
          </h1>

          <p className="max-w-3xl [font-family:'Roboto',Helvetica] font-normal text-white text-lg sm:text-xl lg:text-2xl leading-relaxed">
            Rejoignez{" "}
            <strong className="text-yellow-300 font-bold">
              15,000+ familles
            </strong>{" "}
            qui font confiance à{" "}
            <strong className="text-yellow-300 font-bold">L'AEFE</strong>
            <br className="hidden sm:block" />
            pour l'éducation financière de leurs enfants
          </p>
        </div>

        <div className="flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center justify-center gap-4 sm:gap-5 w-full sm:w-auto">
          <Button
            size="lg"
            className="h-14 sm:h-16 lg:h-20 px-10 sm:px-12 bg-gradient-to-r from-yellow-400 to-orange-400 hover:from-yellow-500 hover:to-orange-500 transition-all text-gray-900 [font-family:'Roboto',Helvetica] font-bold text-base sm:text-lg lg:text-xl rounded-full shadow-2xl hover:shadow-yellow-500/50 hover:scale-105 transform duration-300"
          >
            <span className="mr-2">🚀</span>
            Commencer maintenant
          </Button>

          <Button
            size="lg"
            variant="outline"
            className="h-14 sm:h-16 lg:h-20 px-10 sm:px-12 bg-white/10 hover:bg-white/20 transition-all text-white border-2 border-white/50 hover:border-white [font-family:'Roboto',Helvetica] font-bold text-base sm:text-lg lg:text-xl rounded-full backdrop-blur-md shadow-xl hover:scale-105 transform duration-300"
          >
            <span className="mr-2">📅</span>
            Planifier une démo
          </Button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 w-full max-w-5xl">
          {statisticsData.map((stat, index) => (
            <Card
              key={index}
              className="group bg-white/15 border-2 border-white/25 backdrop-blur-lg rounded-2xl hover:bg-white/25 hover:border-yellow-300/50 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-yellow-500/20"
            >
              <CardContent className="flex flex-col items-center justify-center p-6 sm:p-8 space-y-3">
                <div className="[font-family:'Roboto',Helvetica] font-bold bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent text-4xl sm:text-5xl leading-tight text-center group-hover:scale-110 transition-transform">
                  {stat.value}
                </div>
                <div className="[font-family:'Roboto',Helvetica] font-semibold text-white text-sm sm:text-base leading-6 text-center">
                  {stat.label}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-8">
          {featuresData.map((feature, index) => (
            <div
              key={index}
              className="flex items-center gap-2.5 bg-white/10 backdrop-blur-sm px-4 py-2.5 rounded-full border border-white/20 hover:bg-white/20 hover:border-yellow-300/50 transition-all"
            >
              <div className="w-6 h-6 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full flex items-center justify-center flex-shrink-0">
                <CheckIcon className="w-4 h-4 text-gray-900" strokeWidth={3} />
              </div>
              <span className="[font-family:'Roboto',Helvetica] font-semibold text-white text-base leading-6">
                {feature}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
