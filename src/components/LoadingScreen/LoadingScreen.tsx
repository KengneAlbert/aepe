import React, { useEffect, useState, useRef } from "react";
import gsap from "gsap";

export const LoadingScreen: React.FC = () => {
  const [progress, setProgress] = useState(0);
  const logoRef = useRef<HTMLDivElement>(null);
  const circlesRef = useRef<HTMLDivElement>(null);
  const orbsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 2;
      });
    }, 30);

    // Animations GSAP
    const ctx = gsap.context(() => {
      // Animation du logo avec rotation continue
      gsap.to(logoRef.current, {
        rotation: 360,
        duration: 2,
        repeat: -1,
        ease: "linear",
      });

      // Animation des cercles concentriques
      gsap.to(".loading-circle", {
        scale: 1.5,
        opacity: 0,
        duration: 2,
        repeat: -1,
        stagger: 0.3,
        ease: "power2.out",
      });

      // Animation des orbes flottants
      orbsRef.current.forEach((orb, index) => {
        if (orb) {
          gsap.to(orb, {
            y: -20,
            duration: 1.5 + index * 0.2,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut",
          });
        }
      });
    });

    return () => {
      clearInterval(interval);
      ctx.revert();
    };
  }, []);

  return (
    <div className="fixed inset-0 z-[100] bg-gradient-to-br from-orange-500 via-purple-600 to-pink-600 flex items-center justify-center">
      {/* Background avec motifs africains */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 kente-pattern opacity-20"></div>
        <div className="absolute top-20 left-20 w-96 h-96 bg-yellow-400/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-pink-400/30 rounded-full blur-3xl animate-pulse delay-700"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full adinkra-dots opacity-15"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center gap-12 px-4">
        {/* Logo avec cercles concentriques */}
        <div className="relative w-32 h-32">
          {/* Cercles concentriques animés */}
          <div ref={circlesRef} className="absolute inset-0">
            <div className="loading-circle absolute inset-0 border-4 border-white/30 rounded-full"></div>
            <div className="loading-circle absolute inset-0 border-4 border-white/20 rounded-full"></div>
            <div className="loading-circle absolute inset-0 border-4 border-white/10 rounded-full"></div>
          </div>

          {/* Logo central rotatif */}
          <div
            ref={logoRef}
            className="absolute inset-0 flex items-center justify-center"
          >
            <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center shadow-2xl">
              <span className="text-5xl font-bold bg-gradient-to-r from-orange-500 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                A
              </span>
            </div>
          </div>
        </div>

        {/* Texte */}
        <div className="text-center space-y-3">
          <h1 className="text-5xl sm:text-6xl font-bold text-white drop-shadow-2xl tracking-tight">
            L'AEFE
          </h1>
          <p className="text-lg sm:text-xl text-white/90 drop-shadow-md font-light tracking-wide">
            Plateforme d'Éducation Financière
          </p>
        </div>

        {/* Barre de progression élégante */}
        <div className="w-80 sm:w-96 space-y-4">
          <div className="relative h-1.5 bg-white/15 rounded-full overflow-hidden backdrop-blur-sm">
            {/* Effet de lueur */}
            <div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
              style={{
                width: `${progress}%`,
                transition: "width 0.3s ease-out",
              }}
            ></div>
            {/* Barre principale */}
            <div
              className="absolute inset-0 bg-gradient-to-r from-yellow-300 via-yellow-400 to-orange-400 rounded-full shadow-lg"
              style={{
                width: `${progress}%`,
                transition: "width 0.3s ease-out",
              }}
            ></div>
          </div>
          <div className="flex justify-between items-center text-white/70 text-sm font-medium">
            <span>Initialisation</span>
            <span>{progress}%</span>
          </div>
        </div>

        {/* Orbes flottants minimalistes */}
        <div className="flex items-center gap-6 mt-8">
          {[0, 1, 2, 3].map((index) => (
            <div
              key={index}
              ref={(el) => (orbsRef.current[index] = el)}
              className="w-3 h-3 bg-white/40 rounded-full shadow-lg"
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
};
