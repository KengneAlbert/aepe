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
import { NavigationSection } from "./sections/NavigationSection";
import { PricingSection } from "./sections/PricingSection";
import { UserProfilesSection } from "./sections/UserProfilesSection";

export const Body = (): JSX.Element => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simuler le chargement du contenu
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000); // 3 secondes de loading

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <LoadingScreen />;
  }

  return (
    <div className="flex flex-col items-start relative w-full">
      <div className="flex flex-col w-full items-start relative">
        <div className="flex flex-col w-full items-start relative bg-white">
          <Header />

          <main className="flex flex-col w-full items-start relative">
            <HeroSection />
            <FeaturesSection />
            <HowItWorksSection />
            <UserProfilesSection />
            <PricingSection />
            <FaqSection />
            <CallToActionSection />
            <NavigationSection />
            <FooterSection />
          </main>
        </div>
      </div>
    </div>
  );
};
