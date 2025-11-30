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
    <section className="relative flex flex-col items-center w-full py-10 sm:py-20 lg:py-32 px-4 sm:px-8 bg-[#111726] overflow-hidden">
      {/* Background avec motifs africains */}
      <div className="absolute inset-0 african-pattern-bg opacity-5"></div>
      <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-full blur-[128px] animate-pulse" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-br from-orange-500/10 to-pink-500/10 rounded-full blur-[128px] animate-pulse delay-1000" />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-white/5 rounded-full blur-3xl" />

      <div className="relative z-10 flex flex-col items-center max-w-screen-xl w-full px-4 sm:px-8 space-y-8 sm:space-y-12">
        {/* Badge "Call to Action" */}
        <div className="flex items-center justify-center mb-4">
          <div className="bg-white/5 backdrop-blur-md border border-white/10 px-6 py-3 rounded-full shadow-2xl">
            <div className="flex items-center gap-2">
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
              <span className="bg-gradient-to-r from-orange-400 to-pink-500 bg-clip-text text-transparent">
                l'avenir financier
              </span>
              <span className="absolute -bottom-2 left-0 w-full h-1.5 bg-gradient-to-r from-orange-400 to-pink-500 rounded-full"></span>
            </span>
            <br className="hidden sm:block" />
            de vos enfants ?
          </h1>

          <p className="max-w-3xl [font-family:'Roboto',Helvetica] font-normal text-gray-300 text-lg sm:text-xl lg:text-2xl leading-relaxed">
            Rejoignez{" "}
            <strong className="text-white font-bold">15,000+ familles</strong>{" "}
            qui font confiance à{" "}
            <strong className="text-white font-bold">L'AEFE</strong>
            <br className="hidden sm:block" />
            pour l'éducation financière de leurs enfants
          </p>
        </div>

        <div className="flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center justify-center gap-4 sm:gap-5 w-full sm:w-auto">
          <Button
            size="lg"
            className="h-14 sm:h-16 lg:h-20 px-10 sm:px-12 bg-gradient-to-r from-orange-500 to-pink-600 hover:from-orange-600 hover:to-pink-700 transition-all text-white [font-family:'Roboto',Helvetica] font-bold text-base sm:text-lg lg:text-xl rounded-full shadow-2xl hover:shadow-orange-500/20 hover:scale-105 transform duration-300"
          >
            Commencer maintenant
          </Button>

          <Button
            size="lg"
            variant="outline"
            className="h-14 sm:h-16 lg:h-20 px-10 sm:px-12 bg-white/5 hover:bg-white/10 transition-all text-white border border-white/20 hover:border-white/40 [font-family:'Roboto',Helvetica] font-bold text-base sm:text-lg lg:text-xl rounded-full backdrop-blur-md shadow-xl hover:scale-105 transform duration-300"
          >
            Planifier une démo
          </Button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 w-full max-w-5xl">
          {statisticsData.map((stat, index) => (
            <Card
              key={index}
              className="group bg-white/5 border border-white/10 backdrop-blur-lg rounded-2xl hover:bg-white/10 hover:border-orange-500/30 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-orange-500/10"
            >
              <CardContent className="flex flex-col items-center justify-center p-6 sm:p-8 space-y-3">
                <div className="[font-family:'Roboto',Helvetica] font-bold bg-gradient-to-r from-orange-400 to-pink-500 bg-clip-text text-transparent text-4xl sm:text-5xl leading-tight text-center group-hover:scale-110 transition-transform">
                  {stat.value}
                </div>
                <div className="[font-family:'Roboto',Helvetica] font-semibold text-gray-300 text-sm sm:text-base leading-6 text-center">
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
              className="flex items-center gap-2.5 bg-white/5 backdrop-blur-sm px-4 py-2.5 rounded-full border border-white/10 hover:bg-white/10 hover:border-orange-500/30 transition-all"
            >
              <div className="w-6 h-6 bg-gradient-to-r from-orange-500 to-pink-600 rounded-full flex items-center justify-center flex-shrink-0">
                <CheckIcon className="w-4 h-4 text-white" strokeWidth={3} />
              </div>
              <span className="[font-family:'Roboto',Helvetica] font-semibold text-gray-300 text-base leading-6">
                {feature}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
