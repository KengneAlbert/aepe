import React, { useState } from "react";
import { Button } from "../../components/ui/button";
import { Menu, X } from "lucide-react";
import { CallToActionSection } from "./sections/CallToActionSection";
import { FeaturesSection } from "./sections/FeaturesSection";
import { FooterSection } from "./sections/FooterSection";
import { HeroSection } from "./sections/HeroSection";
import { HowItWorksSection } from "./sections/HowItWorksSection";
import { MainContentSection } from "./sections/MainContentSection";
import { NavigationSection } from "./sections/NavigationSection";
import { PricingSection } from "./sections/PricingSection";
import { UserProfilesSection } from "./sections/UserProfilesSection";

const navigationItems = [
  { label: "Fonctionnalités", href: "#features" },
  { label: "Comment ça marche", href: "#how-it-works" },
  { label: "Pour qui", href: "#for-who" },
  { label: "Tarifs", href: "#pricing" },
];

export const Body = (): JSX.Element => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="flex flex-col items-start relative w-full">
      <div className="flex flex-col w-full items-start relative">
        <div className="flex flex-col w-full items-start relative bg-white">
          <header className="sticky top-0 z-50 w-full bg-[#fffffff2] border-b border-[#f2f4f5] backdrop-blur-[8px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(8px)_brightness(100%)]">
            <div className="flex items-center justify-center px-4 sm:px-8 lg:px-20 py-0">
              <div className="flex flex-col max-w-screen-xl w-full items-start px-4 sm:px-8 py-0">
                <div className="flex w-full h-16 sm:h-20 items-center justify-between">
                  <div className="flex items-center gap-2 sm:gap-3">
                    <img className="w-10 h-10 sm:w-12 sm:h-12" alt="Logo" src="/div-1089.svg" />
                    <div className="bg-[linear-gradient(90deg,rgba(147,51,234,1)_0%,rgba(219,39,119,1)_100%)] [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] [text-fill-color:transparent] text-transparent [font-family:'Pacifico',Helvetica] font-normal text-xl sm:text-2xl tracking-[0] leading-8 whitespace-nowrap">
                      L&#39;AEFE
                    </div>
                  </div>

                  <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
                    {navigationItems.map((item, index) => (
                      <a
                        key={index}
                        href={item.href}
                        className="font-medium text-[#374050] text-base leading-6 [font-family:'Roboto',Helvetica] tracking-[0] whitespace-nowrap hover:text-[#9333e9] transition-colors"
                      >
                        {item.label}
                      </a>
                    ))}
                    <Button className="h-11 px-6 py-2.5 bg-[linear-gradient(90deg,rgba(147,51,234,1)_0%,rgba(219,39,119,1)_100%)] rounded-full [font-family:'Roboto',Helvetica] font-medium text-white text-base text-center tracking-[0] leading-6 whitespace-nowrap hover:opacity-90 transition-opacity">
                      Commencer gratuitement
                    </Button>
                  </nav>

                  <button
                    className="lg:hidden p-2 text-[#374050] hover:text-[#9333e9] transition-colors"
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    aria-label="Toggle menu"
                  >
                    {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                  </button>
                </div>

                {mobileMenuOpen && (
                  <div className="lg:hidden w-full pb-4 animate-in slide-in-from-top duration-200">
                    <nav className="flex flex-col gap-4">
                      {navigationItems.map((item, index) => (
                        <a
                          key={index}
                          href={item.href}
                          className="font-medium text-[#374050] text-base leading-6 [font-family:'Roboto',Helvetica] tracking-[0] hover:text-[#9333e9] transition-colors py-2"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          {item.label}
                        </a>
                      ))}
                      <Button className="w-full h-11 px-6 py-2.5 bg-[linear-gradient(90deg,rgba(147,51,234,1)_0%,rgba(219,39,119,1)_100%)] rounded-full [font-family:'Roboto',Helvetica] font-medium text-white text-base text-center tracking-[0] leading-6 hover:opacity-90 transition-opacity">
                        Commencer gratuitement
                      </Button>
                    </nav>
                  </div>
                )}
              </div>
            </div>
          </header>

          <main className="flex flex-col w-full items-start relative">
            <HeroSection />
            <FeaturesSection />
            <HowItWorksSection />
            <UserProfilesSection />
            <NavigationSection />
            <CallToActionSection />
            <PricingSection />
            <MainContentSection />
            <FooterSection />
          </main>

          <Button className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 w-12 h-12 sm:w-auto sm:h-12 sm:px-4 sm:py-3 bg-[#9333e9] rounded-2xl shadow-[0px_10px_15px_-3px_#0000001a,0px_4px_6px_-4px_#0000001a] hover:bg-[#7c2ec9] transition-colors">
            <div className="flex items-center justify-center sm:gap-2">
              <img className="w-6 h-6 sm:w-7 sm:h-7" alt="Chat icon" src="/svg-1114.svg" />
              <span className="hidden sm:inline [font-family:'Roboto',Helvetica] font-medium text-white text-sm tracking-[0] leading-[16.8px] whitespace-nowrap">
                Talk with Us
              </span>
            </div>
          </Button>
        </div>
      </div>
    </div>
  );
};
