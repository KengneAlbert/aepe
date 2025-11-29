import React, { useEffect, useState, useRef } from "react";
import gsap from "gsap";

export const LoadingScreen: React.FC = () => {
  const [progress, setProgress] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);
  const circlesRef = useRef<HTMLDivElement>(null);
  const orbsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    // Progression non-linéaire pour un effet plus naturel
    const startTime = Date.now();
    const duration = 2500; // 2.5 secondes

    const updateProgress = () => {
      const elapsed = Date.now() - startTime;
      const rawProgress = Math.min(elapsed / duration, 1);

      // Courbe d'accélération easeOutQuad pour progression naturelle
      const easedProgress = 1 - Math.pow(1 - rawProgress, 3);
      setProgress(Math.floor(easedProgress * 100));

      if (rawProgress < 1) {
        requestAnimationFrame(updateProgress);
      }
    };

    requestAnimationFrame(updateProgress);

    // Animations GSAP
    const ctx = gsap.context(() => {
      // Animation du logo avec rotation et échelle
      gsap.to(logoRef.current, {
        rotation: 360,
        duration: 3,
        repeat: -1,
        ease: "linear",
      });

      gsap.to(logoRef.current, {
        scale: 1.05,
        duration: 1.5,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      // Animation des cercles concentriques avec délai
      gsap.to(".loading-circle", {
        scale: 1.8,
        opacity: 0,
        duration: 2.5,
        repeat: -1,
        stagger: 0.4,
        ease: "power3.out",
      });

      // Animation des orbes flottants avec variation
      orbsRef.current.forEach((orb, index) => {
        if (orb) {
          gsap.to(orb, {
            y: -25,
            scale: 1.2,
            duration: 1.2 + index * 0.15,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut",
          });
        }
      });
    });

    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-[100] bg-gradient-to-br from-orange-500 via-purple-600 to-pink-600 flex items-center justify-center transition-opacity duration-500"
    >
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
            Academie d'Éducation Financière pour Enfants
          </p>
        </div>

        {/* Barre de progression élégante */}
        <div className="w-80 sm:w-96 space-y-4">
          <div className="relative h-2 bg-white/20 rounded-full overflow-hidden backdrop-blur-sm shadow-inner">
            {/* Effet de lueur animée */}
            <div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent animate-pulse"
              style={{
                width: `${progress}%`,
                transition: "width 0.2s cubic-bezier(0.4, 0, 0.2, 1)",
              }}
            ></div>
            {/* Barre principale avec dégradé dynamique */}
            <div
              className="absolute inset-0 bg-gradient-to-r from-yellow-300 via-orange-400 to-orange-500 rounded-full shadow-xl"
              style={{
                width: `${progress}%`,
                transition: "width 0.2s cubic-bezier(0.4, 0, 0.2, 1)",
                boxShadow: "0 0 20px rgba(251, 191, 36, 0.6)",
              }}
            ></div>
            {/* Point lumineux à l'extrémité */}
            <div
              className="absolute top-1/2 -translate-y-1/2 w-4 h-4 bg-white rounded-full shadow-lg"
              style={{
                left: `${progress}%`,
                transition: "left 0.2s cubic-bezier(0.4, 0, 0.2, 1)",
                transform: "translateX(-50%) translateY(-50%)",
                opacity: progress > 0 ? 1 : 0,
              }}
            ></div>
          </div>
          <div className="flex justify-between items-center text-white/80 text-sm font-medium">
            <span className="tracking-wide">
              Préparation de votre expérience
            </span>
            <span className="text-lg font-bold text-white">{progress}%</span>
          </div>
        </div>

        {/* Orbes flottants avec effets de lueur */}
        <div className="flex items-center gap-6 mt-8">
          {[0, 1, 2, 3].map((index) => (
            <div
              key={index}
              ref={(el) => (orbsRef.current[index] = el)}
              className="relative"
            >
              <div
                className="w-4 h-4 bg-white rounded-full shadow-2xl"
                style={{
                  boxShadow:
                    "0 0 15px rgba(255, 255, 255, 0.8), 0 0 30px rgba(255, 255, 255, 0.4)",
                }}
              ></div>
              <div className="absolute inset-0 w-4 h-4 bg-white/30 rounded-full blur-sm"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
