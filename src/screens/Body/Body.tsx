import React, { useState, useEffect } from "react";
import { Button } from "../../components/ui/button";
import { Header } from "../../components/Header";
import { LoadingScreen } from "../../components/LoadingScreen";
import { CallToActionSection } from "./sections/CallToActionSection";
import { FaqSection } from "./sections/FaqSection";
import { FeaturesSection } from "./sections/FeaturesSection";
import { FooterSection } from "./sections/FooterSection";
import { HeroSection } from "./sections/HeroSection";
import { HowItWorksSection } from "./sections/HowItWorksSection";
import { GamificationSection } from "./sections/GamificationSection";
import { PricingSection } from "./sections/PricingSection";
import { UserProfilesSection } from "./sections/UserProfilesSection";
import { TestimonialsSection } from "./sections/TestimonialsSection";
import { TeamSection } from "./sections/TeamSection";
import { DownloadAppSection } from "./sections/DownloadAppSection";
import { FounderSection } from "./sections/FounderSection";
import { MainContentSection } from "./sections/MainContentSection/MainContentSection";

export const Body = (): JSX.Element => {
  const [isLoading, setIsLoading] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    // Simuler le chargement du contenu
    const timer = setTimeout(() => {
      setFadeOut(true);
      // Attendre la fin de l'animation fade-out avant de retirer le loader
      setTimeout(() => {
        setIsLoading(false);
      }, 500);
    }, 2500); // 2.5 secondes de loading

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div
        className={`transition-opacity duration-500 ${
          fadeOut ? "opacity-0" : "opacity-100"
        }`}
      >
        <LoadingScreen />
      </div>
    );
  }

  return (
    <div className="flex flex-col items-start relative w-full">
      <Header />

      <div className="flex flex-col w-full items-start relative animate-fadeIn">
        <div className="flex flex-col w-full items-start relative bg-white">
          <main className="flex flex-col w-full items-start relative">
            <HeroSection />
            <FeaturesSection />
            <HowItWorksSection />
            <GamificationSection />
            <FounderSection />
            <UserProfilesSection />
            <TeamSection />
            <TestimonialsSection />
            <PricingSection />
            <DownloadAppSection />
            <CallToActionSection />
            <FaqSection />
            {/* <MainContentSection /> */}
            <FooterSection />
          </main>
        </div>
      </div>
    </div>
  );
};
