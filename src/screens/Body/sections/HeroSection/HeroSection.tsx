import { Star } from "lucide-react";
import React, { useEffect, useRef } from "react";
import { Sparkles } from "lucide-react";
import { Badge } from "../../../../components/ui/badge";
import { Button } from "../../../../components/ui/button";
import FinKids from "../../../../assets/finkids.png";
import Familly from "../../../../assets/familly.jpg";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const HeroSection = (): JSX.Element => {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const badgeRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animation du badge (entrée depuis le haut)
      gsap.from(badgeRef.current, {
        y: -50,
        opacity: 0,
        duration: 0.8,
        ease: "back.out(1.7)",
      });

      // Animation du titre (entrée en fondu avec échelle)
      gsap.from(titleRef.current, {
        scale: 0.8,
        opacity: 0,
        y: 30,
        duration: 1,
        delay: 0.3,
        ease: "power3.out",
      });

      // Animation du sous-titre (entrée depuis la gauche)
      gsap.from(subtitleRef.current, {
        x: -30,
        opacity: 0,
        duration: 0.8,
        delay: 0.6,
        ease: "power2.out",
      });

      // Animation des boutons CTA (entrée depuis le bas)
      gsap.from(ctaRef.current, {
        y: 40,
        opacity: 0,
        duration: 0.8,
        delay: 0.9,
        ease: "power2.out",
      });

      // Animation de l'image (entrée depuis la droite avec rotation légère)
      gsap.from(imageRef.current, {
        x: 100,
        rotation: 5,
        opacity: 0,
        duration: 1,
        delay: 0.5,
        ease: "power3.out",
      });

      // Animation parallaxe au scroll
      gsap.to(sectionRef.current, {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 1,
        },
        y: 100,
        opacity: 0.3,
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="accueil"
      className="relative w-full min-h-screen flex items-center justify-center pt-24 sm:pt-32 pb-10 sm:pb-20 px-4 sm:px-8 bg-black overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={Familly}
          alt="Background"
          className="w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80"></div>
      </div>

      {/* Background elements avec motifs africains */}
      <div className="absolute top-0 left-0 w-full h-full z-0 pointer-events-none">
        {/* Motif Kente subtil */}
        <div className="absolute inset-0 kente-pattern opacity-5"></div>

        {/* Orbes lumineux - Intensité réduite */}
        <div className="absolute top-10 left-5 w-64 h-64 bg-orange-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-1/4 right-10 w-96 h-96 bg-orange-400/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-pink-400/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-10 left-10 w-72 h-72 bg-purple-400/10 rounded-full blur-3xl"></div>

        {/* Points Adinkra délicats */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full adinkra-dots opacity-5"></div>

        {/* Lignes diagonales subtiles */}
        <div className="absolute inset-0 african-zigzag opacity-5"></div>
      </div>

      <div className="relative w-full max-w-5xl mx-auto px-4 sm:px-8 z-10">
        <div className="flex flex-col items-center text-center space-y-8 sm:space-y-10">
          {/* New announcement badge */}
          <div
            ref={badgeRef}
            className="flex flex-wrap justify-center items-center gap-3"
          >
            <Badge className="bg-white/10 backdrop-blur-md text-white hover:bg-white/20 px-5 py-2.5 rounded-full flex items-center gap-2 border border-white/20 shadow-lg transition-all duration-300">
              <span className="text-base">✨</span>
              <span className="font-medium text-sm tracking-wide">
                Sessions live avec des experts
              </span>
            </Badge>
          </div>

          <div ref={titleRef} className="space-y-6 max-w-4xl mx-auto">
            <h1 className="font-bold text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-tight tracking-tight drop-shadow-xl">
              Transformez vos enfants en
              <span className="bg-gradient-to-r from-yellow-200 via-orange-200 to-yellow-200 bg-clip-text text-transparent block sm:inline drop-shadow-sm">
                {" "}
                petits entrepreneurs
              </span>
            </h1>
          </div>

          <p
            ref={subtitleRef}
            className="text-gray-200 text-lg sm:text-xl leading-relaxed max-w-2xl mx-auto drop-shadow-md font-light"
          >
            Un programme ludique et inspiré des cultures africaines pour
            éveiller l'esprit entrepreneurial des enfants.
            <strong className="text-white font-medium block mt-2">
              En un trimestre, votre enfant apprend à épargner, découvre
              l'investissement et lance une mini‑entreprise.
            </strong>
          </p>

          {/* Enhanced CTA buttons */}
          <div ref={ctaRef} className="flex flex-col items-center gap-8 w-full">
            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto justify-center">
              <Button
                size="lg"
                className="relative bg-gradient-to-r from-orange-500 via-purple-600 to-pink-600 hover:from-orange-600 hover:via-purple-700 hover:to-pink-700 text-white font-bold text-lg px-10 py-4 h-16 rounded-2xl shadow-2xl hover:shadow-orange-500/50 transition-all duration-300 transform hover:scale-105 group"
              >
                <span className="flex items-center gap-3">
                  Commencer l'aventure
                  <div className="w-2 h-2 bg-yellow-300 rounded-full animate-ping"></div>
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-yellow-300/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </Button>
            </div>

            {/* Stats Row */}
            <div className="grid grid-cols-3 gap-8 sm:gap-16 pt-4 border-t border-white/10">
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-white">
                  15K+
                </div>
                <div className="text-xs sm:text-sm text-gray-300">Familles</div>
              </div>
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-white">
                  4.9/5
                </div>
                <div className="text-xs sm:text-sm text-gray-300">★★★★★</div>
              </div>
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-white">
                  95%
                </div>
                <div className="text-xs sm:text-sm text-gray-300">
                  Satisfaction
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
