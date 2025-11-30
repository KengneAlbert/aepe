import React, { useEffect, useRef } from "react";
import { Badge } from "../../../../components/ui/badge";
import { Card } from "../../../../components/ui/card";
import Founder from "../../../../assets/stephanie.jpg";
import {
  Users,
  GraduationCap,
  Heart,
  TrendingUp,
  Youtube,
  Briefcase,
  Coins,
} from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const FounderSection = (): JSX.Element => {
  const headerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Header animation
      gsap.from(headerRef.current, {
        scrollTrigger: {
          trigger: headerRef.current,
          start: "top 80%",
        },
        y: 50,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
      });

      // Image animation
      gsap.from(imageRef.current, {
        scrollTrigger: {
          trigger: imageRef.current,
          start: "top 75%",
        },
        x: -60,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
      });

      // Content animation
      gsap.from(contentRef.current, {
        scrollTrigger: {
          trigger: contentRef.current,
          start: "top 75%",
        },
        x: 60,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
      });

      // Stats animation
      if (statsRef.current) {
        gsap.from(statsRef.current.children, {
          scrollTrigger: {
            trigger: statsRef.current,
            start: "top 80%",
          },
          y: 40,
          opacity: 0,
          duration: 0.6,
          stagger: 0.15,
          ease: "back.out(1.7)",
        });
      }
    });

    return () => ctx.revert();
  }, []);

  const stats = [
    {
      icon: Youtube,
      value: "100K+",
      label: "Abonnés Youtube",
      color: "text-orange-500",
    },
    {
      icon: GraduationCap,
      value: "15+",
      label: "Années d'expérience",
      color: "text-purple-500",
    },
    {
      icon: Users,
      value: "2K+",
      label: "Membres tontine",
      color: "text-pink-500",
    },
    {
      icon: Briefcase,
      value: "1000+",
      label: "Entrepreneurs formés",
      color: "text-orange-600",
    },
  ];

  return (
    <section className="relative w-full py-10 sm:py-20 lg:py-32 bg-white overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 kente-pattern opacity-[0.03]"></div>
      <div className="absolute top-20 left-10 w-80 h-80 bg-gradient-to-br from-orange-200/20 to-yellow-200/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-br from-purple-200/20 to-pink-200/20 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div ref={headerRef} className="text-center mb-16">
          <Badge className="mb-4 px-5 py-2 bg-gradient-to-r from-orange-500 via-purple-500 to-pink-500 text-white border-transparent hover:shadow-lg transition-shadow duration-300">
            <Heart className="w-4 h-4 mr-2" />
            Notre Fondatrice
          </Badge>
          <h2 className="font-bold text-gray-900 text-3xl sm:text-4xl lg:text-5xl leading-tight mb-6">
            Rencontrez{" "}
            <span className="bg-gradient-to-r from-orange-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              Stéphanie Mbida
            </span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Une visionnaire passionnée par l'éducation financière et
            l'autonomisation des familles africaines
          </p>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-16">
          {/* Image */}
          <div ref={imageRef} className="relative">
            {/* Decorative elements behind image */}
            <div className="absolute -top-6 -left-6 w-full h-full bg-gradient-to-br from-orange-400/20 via-purple-400/20 to-pink-400/20 rounded-3xl blur-xl"></div>
            <div className="absolute -bottom-6 -right-6 w-full h-full bg-gradient-to-tl from-purple-400/15 to-orange-400/15 rounded-3xl blur-2xl"></div>

            {/* Main image container */}
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
              <img
                src={Founder}
                alt="Stéphanie Mbida - Fondatrice de L'AEFE"
                className="w-full h-[500px] object-cover"
                onError={(e) => {
                  e.currentTarget.src =
                    "https://ui-avatars.com/api/?name=Stephanie+Mbida&size=800&background=f97316&color=fff&bold=true";
                }}
              />

              {/* Quote overlay */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-gray-900/95 via-gray-900/80 to-transparent p-6 sm:p-8">
                <div className="flex items-start gap-3">
                  <div className="text-orange-400 text-4xl font-serif leading-none">
                    "
                  </div>
                  <div>
                    <p className="text-white text-base sm:text-lg font-medium italic mb-2">
                      Préparons ensemble les futurs milliardaires africains en
                      leur enseignant l'éducation financière dès le bas âge.
                    </p>
                    <p className="text-orange-300 text-sm font-semibold">
                      — Stéphanie Mbida
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating badge */}
            <div className="absolute -top-4 -right-4 bg-white rounded-2xl shadow-xl p-4 border border-purple-100">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-orange-500 to-purple-600 flex items-center justify-center">
                  <TrendingUp className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-gray-900">15+</p>
                  <p className="text-xs text-gray-500">Années d'expertise</p>
                </div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div ref={contentRef} className="space-y-6">
            <div>
              <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                Une Experte Dévouée à Votre Réussite
              </h3>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  <span className="font-semibold text-gray-900">
                    Stéphanie Mbida
                  </span>{" "}
                  est une entrepreneure visionnaire avec plus de 15 années
                  d'expérience. Créatrice de la chaîne YouTube{" "}
                  <span className="font-semibold text-orange-600">
                    "Parlons de Business"
                  </span>{" "}
                  (600K+ abonnés), elle inspire quotidiennement des milliers
                  d'Africains à prendre en main leur avenir financier.
                </p>
                <p>
                  Fondatrice de{" "}
                  <span className="font-semibold text-purple-600">
                    l'École de l'Entrepreneuriat
                  </span>{" "}
                  qui a formé plus de 1000 entrepreneurs, et créatrice de{" "}
                  <span className="font-semibold text-pink-600">
                    la plus grande tontine africaine
                  </span>{" "}
                  avec 2K+ membres, Stéphanie a prouvé son engagement envers
                  l'autonomisation financière en Afrique.
                </p>
                <p>
                  Face au constat alarmant que{" "}
                  <span className="font-semibold text-gray-900">
                    l'éducation financière est absente des cursus scolaires
                    classiques
                  </span>
                  , elle a créé{" "}
                  <span className="font-semibold text-orange-600">L'AEFE</span>{" "}
                  pour enseigner aux enfants dès le bas âge les compétences
                  financières essentielles. Sa mission :{" "}
                  <span className="font-semibold text-gray-900">
                    préparer les futurs milliardaires africains de demain
                  </span>
                  .
                </p>
              </div>
            </div>

            {/* Credentials badges */}
            <div className="flex flex-wrap gap-3 pt-4">
              <Badge className="px-4 py-2 bg-orange-50 text-orange-700 border-orange-200 hover:bg-orange-100">
                <Youtube className="w-4 h-4 mr-2" />
                600K+ Abonnés
              </Badge>
              <Badge className="px-4 py-2 bg-purple-50 text-purple-700 border-purple-200 hover:bg-purple-100">
                <GraduationCap className="w-4 h-4 mr-2" />
                Fondatrice École de l'Entrepreneuriat
              </Badge>
              <Badge className="px-4 py-2 bg-pink-50 text-pink-700 border-pink-200 hover:bg-pink-100">
                <Coins className="w-4 h-4 mr-2" />
                Plus Grande Tontine Africaine
              </Badge>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
