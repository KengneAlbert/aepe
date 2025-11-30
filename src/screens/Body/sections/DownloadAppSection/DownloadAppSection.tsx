import React, { useEffect, useRef } from "react";
import { Badge } from "../../../../components/ui/badge";
import { Button } from "../../../../components/ui/button";
import {
  Smartphone,
  Download,
  Star,
  Users,
  TrendingUp,
  Award,
} from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const stats = [
  {
    icon: Download,
    value: "15K+",
    label: "Téléchargements",
    color: "text-orange-500",
  },
  {
    icon: Star,
    value: "4.9/5",
    label: "Note moyenne",
    color: "text-purple-500",
  },
  { icon: Users, value: "98%", label: "Satisfaction", color: "text-pink-500" },
  {
    icon: Award,
    value: "#1",
    label: "Éducation financière",
    color: "text-orange-600",
  },
];

export const DownloadAppSection = (): JSX.Element => {
  const headerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (headerRef.current) {
        gsap.from(headerRef.current.children, {
          y: 50,
          opacity: 0,
          duration: 1,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: headerRef.current,
            start: "top 80%",
          },
        });
      }

      if (contentRef.current) {
        gsap.from(contentRef.current.children, {
          x: -60,
          opacity: 0,
          duration: 0.8,
          stagger: 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: contentRef.current,
            start: "top 80%",
          },
        });
      }

      if (statsRef.current) {
        gsap.from(statsRef.current.children, {
          scale: 0.5,
          opacity: 0,
          duration: 0.6,
          stagger: 0.1,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: statsRef.current,
            start: "top 85%",
          },
        });
      }
    });

    return () => ctx.revert();
  }, []);

  return (
    <section className="relative w-full py-10 sm:py-20 lg:py-32 bg-white overflow-hidden">
      {/* Background image avec overlay */}
      <div className="absolute inset-0 opacity-[0.05]">
        <img
          src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=1920&q=80&fm=webp"
          alt=""
          className="w-full h-full object-cover"
          onError={(e) => {
            e.currentTarget.style.display = "none";
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white/90 via-white/85 to-white/95"></div>
      </div>

      {/* Background decorative elements */}
      <div className="absolute inset-0 adinkra-dots opacity-5"></div>
      <div className="absolute top-10 right-10 w-80 h-80 bg-gradient-to-br from-orange-200/30 to-yellow-200/30 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-gradient-to-br from-purple-200/25 to-pink-200/25 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left content */}
          <div ref={contentRef}>
            <Badge className="inline-flex items-center gap-2 px-5 py-2 bg-gradient-to-r from-orange-500 via-purple-500 to-pink-500 text-white border-transparent hover:shadow-lg transition-shadow duration-300 rounded-full mb-6">
              <Download className="w-4 h-4" />
              <span className="font-semibold text-sm">Application mobile</span>
            </Badge>

            <h2 className="font-bold text-gray-900 text-3xl sm:text-4xl lg:text-5xl leading-tight mb-6">
              Téléchargez l'application{" "}
              <span className="bg-gradient-to-r from-orange-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                L'AEFE
              </span>
            </h2>

            <p className="text-gray-600 text-base sm:text-lg leading-relaxed mb-6 sm:mb-8 max-w-xl">
              Emportez l'éducation financière partout avec vous. Notre
              application mobile offre une expérience optimisée pour accompagner
              vos enfants dans leur apprentissage, à tout moment.
            </p>

            {/* Download buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-6 sm:mb-10">
              <Button
                className="group bg-gray-900 hover:bg-black text-white px-6 py-5 rounded-xl shadow-lg hover:shadow-xl transition-all flex items-center gap-3 border border-gray-800"
                onClick={() => window.open("https://apps.apple.com", "_blank")}
              >
                <svg
                  className="w-7 h-7"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z" />
                </svg>
                <div className="text-left">
                  <div className="text-xs text-white/60">Télécharger sur</div>
                  <div className="font-semibold text-sm">App Store</div>
                </div>
              </Button>

              <Button
                className="group bg-gray-900 hover:bg-black text-white px-6 py-5 rounded-xl shadow-lg hover:shadow-xl transition-all flex items-center gap-3 border border-gray-800"
                onClick={() => window.open("https://play.google.com", "_blank")}
              >
                <svg
                  className="w-7 h-7"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 0 1-.61-.92V2.734a1 1 0 0 1 .609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.198l2.807 1.626a1 1 0 0 1 0 1.73l-2.808 1.626L15.206 12l2.492-2.491zM5.864 2.658L16.802 8.99l-2.303 2.303-8.635-8.635z" />
                </svg>
                <div className="text-left">
                  <div className="text-xs text-white/60">Disponible sur</div>
                  <div className="font-semibold text-sm">Google Play</div>
                </div>
              </Button>
            </div>

            {/* Stats */}
            <div
              ref={statsRef}
              className="grid grid-cols-2 sm:grid-cols-4 gap-3"
            >
              {stats.map((stat, index) => {
                const IconComponent = stat.icon;
                return (
                  <div
                    key={index}
                    className="bg-white border border-purple-100 rounded-lg p-4 text-center hover:shadow-md hover:border-purple-200 transition-all duration-300"
                  >
                    <div className="flex justify-center mb-2">
                      <IconComponent className={`w-5 h-5 ${stat.color}`} />
                    </div>
                    <div className="font-bold text-lg text-gray-900 mb-1">
                      {stat.value}
                    </div>
                    <div className="text-xs text-gray-500">{stat.label}</div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right content - Phone mockup */}
          <div ref={headerRef} className="flex justify-center lg:justify-end">
            <div className="relative">
              {/* Subtle shadow */}
              <div className="absolute inset-0 bg-gray-900/5 rounded-[3rem] blur-2xl"></div>

              {/* Phone frame */}
              <div className="relative bg-gray-900 rounded-[3rem] p-2.5 shadow-xl border border-gray-800">
                <div className="bg-white rounded-[2.3rem] overflow-hidden w-[280px] h-[580px] sm:w-[320px] sm:h-[640px]">
                  {/* Notch */}
                  <div className="h-7 bg-gray-900 rounded-b-3xl mx-auto w-36 relative">
                    <div className="absolute top-1.5 left-1/2 transform -translate-x-1/2 w-14 h-3.5 bg-gray-800 rounded-full"></div>
                  </div>

                  {/* Screenshot/Content */}
                  <div className="h-full bg-gradient-to-b from-gray-50 to-white p-5">
                    <div className="space-y-4">
                      {/* App header */}
                      <div className="flex items-center gap-3 mb-6">
                        <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-orange-500 via-purple-500 to-pink-500 flex items-center justify-center shadow-lg">
                          <Smartphone className="w-8 h-8 text-white" />
                        </div>
                        <div>
                          <div className="font-bold text-xl text-gray-900">
                            L'AEFE
                          </div>
                          <div className="text-sm text-gray-600">
                            Éducation Financière
                          </div>
                        </div>
                      </div>

                      {/* Sample cards */}
                      <div className="space-y-3">
                        <div className="bg-white rounded-2xl p-4 shadow-md border border-orange-100">
                          <div className="flex items-center gap-3 mb-2">
                            <div className="w-10 h-10 rounded-full bg-gradient-to-r from-green-400 to-emerald-500 flex items-center justify-center">
                              <Star
                                className="w-5 h-5 text-white"
                                fill="currentColor"
                              />
                            </div>
                            <div>
                              <div className="font-semibold text-sm">
                                Niveau 1
                              </div>
                              <div className="text-xs text-gray-500">
                                Les Petits Épargnants
                              </div>
                            </div>
                          </div>
                          <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                            <div className="h-full w-3/4 bg-gradient-to-r from-green-400 to-emerald-500"></div>
                          </div>
                        </div>

                        <div className="bg-white rounded-2xl p-4 shadow-md border border-purple-100">
                          <div className="flex items-center gap-3 mb-2">
                            <div className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-400 to-cyan-500 flex items-center justify-center">
                              <Award className="w-5 h-5 text-white" />
                            </div>
                            <div>
                              <div className="font-semibold text-sm">
                                Niveau 2
                              </div>
                              <div className="text-xs text-gray-500">
                                Jeunes Gestionnaires
                              </div>
                            </div>
                          </div>
                          <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                            <div className="h-full w-1/2 bg-gradient-to-r from-blue-400 to-cyan-500"></div>
                          </div>
                        </div>

                        <div className="bg-white rounded-2xl p-4 shadow-md border border-pink-100">
                          <div className="flex items-center gap-3 mb-2">
                            <div className="w-10 h-10 rounded-full bg-gradient-to-r from-purple-400 to-pink-500 flex items-center justify-center">
                              <TrendingUp className="w-5 h-5 text-white" />
                            </div>
                            <div>
                              <div className="font-semibold text-sm">
                                Niveau 3
                              </div>
                              <div className="text-xs text-gray-500">
                                Futurs Entrepreneurs
                              </div>
                            </div>
                          </div>
                          <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                            <div className="h-full w-1/4 bg-gradient-to-r from-purple-400 to-pink-500"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
