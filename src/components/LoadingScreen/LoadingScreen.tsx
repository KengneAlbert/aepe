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
      className="fixed inset-0 z-[100] bg-slate-950 flex items-center justify-center transition-opacity duration-500"
    >
      {/* Background avec motifs subtils */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-500/10 rounded-full blur-[100px] animate-pulse"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-indigo-500/10 rounded-full blur-[100px] animate-pulse delay-700"></div>
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
            <div className="w-24 h-24 bg-white/5 backdrop-blur-md border border-white/10 rounded-full flex items-center justify-center shadow-2xl">
              <span className="text-5xl font-bold text-white">A</span>
            </div>
          </div>
        </div>

        {/* Texte */}
        <div className="text-center space-y-3">
          <h1 className="text-5xl sm:text-6xl font-bold text-white drop-shadow-lg tracking-tight">
            L'AEFE
          </h1>
          <p className="text-lg sm:text-xl text-slate-400 font-light tracking-wide">
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
              className="absolute inset-0 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full shadow-xl"
              style={{
                width: `${progress}%`,
                transition: "width 0.2s cubic-bezier(0.4, 0, 0.2, 1)",
                boxShadow: "0 0 20px rgba(59, 130, 246, 0.4)",
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
          <div className="flex justify-between items-center text-slate-400 text-sm font-medium">
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
                className="w-3 h-3 bg-blue-400 rounded-full shadow-lg"
                style={{
                  boxShadow: "0 0 10px rgba(96, 165, 250, 0.5)",
                }}
              ></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
