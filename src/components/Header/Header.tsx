import React, { useState, useEffect } from "react";
import { Button } from "../ui/button";
import { Globe, Menu, X } from "lucide-react";

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [language, setLanguage] = useState<"fr" | "en">("fr");
  const [showLangMenu, setShowLangMenu] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-lg shadow-lg py-3 px-4"
          : "bg-transparent py-6 px-4"
      }`}
    >
      <nav
        className={`max-w-7xl mx-auto transition-all duration-500 ${
          isScrolled
            ? "px-6 py-3"
            : "bg-white/10 backdrop-blur-sm shadow-none rounded-full px-8 py-4 border-2 border-white/30"
        }`}
      >
        <div className="flex items-center justify-between">
          {/* Logo */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="flex items-center gap-3 cursor-pointer hover:opacity-80 transition-opacity"
          >
            <div className="w-10 h-10 bg-gradient-to-br from-orange-400 via-purple-500 to-pink-500 rounded-full flex items-center justify-center shadow-lg">
              <span className="text-white font-bold text-xl">A</span>
            </div>
            <div className="flex flex-col">
              <span
                className={`text-xl font-bold ${
                  isScrolled
                    ? "bg-gradient-to-r from-orange-500 to-purple-600 bg-clip-text text-transparent"
                    : "text-white"
                }`}
              >
                L'AEFE
              </span>
              <span
                className={`text-xs -mt-1 ${
                  isScrolled ? "text-gray-600" : "text-white/80"
                }`}
              >
                Éducation Financière
              </span>
            </div>
          </button>

          {/* Navigation Links - Desktop */}
          <div className="hidden lg:flex items-center gap-8">
            <button
              onClick={() => scrollToSection("fonctionnalites")}
              className={`transition-colors font-medium cursor-pointer ${
                isScrolled
                  ? "text-gray-700 hover:text-orange-500"
                  : "text-white hover:text-yellow-300"
              }`}
            >
              Fonctionnalités
            </button>
            <button
              onClick={() => scrollToSection("comment-ca-marche")}
              className={`transition-colors font-medium cursor-pointer ${
                isScrolled
                  ? "text-gray-700 hover:text-orange-500"
                  : "text-white hover:text-yellow-300"
              }`}
            >
              Comment ça marche
            </button>
            <button
              onClick={() => scrollToSection("pour-qui")}
              className={`transition-colors font-medium cursor-pointer ${
                isScrolled
                  ? "text-gray-700 hover:text-orange-500"
                  : "text-white hover:text-yellow-300"
              }`}
            >
              Pour qui
            </button>
            <button
              onClick={() => scrollToSection("tarifs")}
              className={`transition-colors font-medium cursor-pointer ${
                isScrolled
                  ? "text-gray-700 hover:text-orange-500"
                  : "text-white hover:text-yellow-300"
              }`}
            >
              Tarifs
            </button>
            <button
              onClick={() => scrollToSection("faq")}
              className={`transition-colors font-medium cursor-pointer ${
                isScrolled
                  ? "text-gray-700 hover:text-orange-500"
                  : "text-white hover:text-yellow-300"
              }`}
            >
              FAQ
            </button>
          </div>

          {/* CTA Buttons */}
          <div className="flex items-center gap-3">
            {/* Language Selector */}
            <div className="relative hidden sm:block">
              <button
                onClick={() => setShowLangMenu(!showLangMenu)}
                className={`flex items-center gap-2 px-3 py-2 rounded-lg transition-all ${
                  isScrolled
                    ? "text-gray-700 hover:bg-orange-50"
                    : "text-white hover:bg-white/10"
                }`}
              >
                <Globe className="w-5 h-5" />
                <span className="font-medium text-sm uppercase">
                  {language}
                </span>
              </button>

              {/* Language Dropdown */}
              {showLangMenu && (
                <div className="absolute right-0 mt-2 w-40 bg-white rounded-lg shadow-xl border border-gray-200 overflow-hidden z-50">
                  <button
                    onClick={() => {
                      setLanguage("fr");
                      setShowLangMenu(false);
                    }}
                    className={`w-full px-4 py-3 text-left hover:bg-orange-50 transition-colors flex items-center gap-3 ${
                      language === "fr"
                        ? "bg-orange-50 text-orange-600"
                        : "text-gray-700"
                    }`}
                  >
                    <span className="text-xl">🇫🇷</span>
                    <span className="font-medium">Français</span>
                  </button>
                  <button
                    onClick={() => {
                      setLanguage("en");
                      setShowLangMenu(false);
                    }}
                    className={`w-full px-4 py-3 text-left hover:bg-orange-50 transition-colors flex items-center gap-3 ${
                      language === "en"
                        ? "bg-orange-50 text-orange-600"
                        : "text-gray-700"
                    }`}
                  >
                    <span className="text-xl">🇬🇧</span>
                    <span className="font-medium">English</span>
                  </button>
                </div>
              )}
            </div>

            <Button
              variant="ghost"
              className={`hidden sm:flex font-medium ${
                isScrolled
                  ? "text-gray-700 hover:text-orange-500 hover:bg-orange-50"
                  : "text-white hover:text-yellow-300 hover:bg-white/10"
              }`}
            >
              Connexion
            </Button>
            <Button className="hidden sm:flex bg-gradient-to-r from-yellow-400 via-orange-400 to-orange-500 hover:from-yellow-500 hover:via-orange-500 hover:to-orange-600 text-gray-900 font-semibold shadow-lg hover:shadow-xl transition-all px-6">
              Commencer
            </Button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`lg:hidden p-2 rounded-lg transition-colors ${
                isScrolled
                  ? "text-gray-700 hover:bg-orange-50"
                  : "text-white hover:bg-white/10"
              }`}
              aria-label="Menu"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden mt-4 py-4 border-t border-gray-200/20">
            <div className="flex flex-col space-y-1">
              <button
                onClick={() => scrollToSection("fonctionnalites")}
                className={`text-left px-4 py-3 rounded-lg transition-colors font-medium ${
                  isScrolled
                    ? "text-gray-700 hover:bg-orange-50 hover:text-orange-600"
                    : "text-white hover:bg-white/10"
                }`}
              >
                Fonctionnalités
              </button>
              <button
                onClick={() => scrollToSection("comment-ca-marche")}
                className={`text-left px-4 py-3 rounded-lg transition-colors font-medium ${
                  isScrolled
                    ? "text-gray-700 hover:bg-orange-50 hover:text-orange-600"
                    : "text-white hover:bg-white/10"
                }`}
              >
                Comment ça marche
              </button>
              <button
                onClick={() => scrollToSection("pour-qui")}
                className={`text-left px-4 py-3 rounded-lg transition-colors font-medium ${
                  isScrolled
                    ? "text-gray-700 hover:bg-orange-50 hover:text-orange-600"
                    : "text-white hover:bg-white/10"
                }`}
              >
                Pour qui
              </button>
              <button
                onClick={() => scrollToSection("tarifs")}
                className={`text-left px-4 py-3 rounded-lg transition-colors font-medium ${
                  isScrolled
                    ? "text-gray-700 hover:bg-orange-50 hover:text-orange-600"
                    : "text-white hover:bg-white/10"
                }`}
              >
                Tarifs
              </button>
              <button
                onClick={() => scrollToSection("faq")}
                className={`text-left px-4 py-3 rounded-lg transition-colors font-medium ${
                  isScrolled
                    ? "text-gray-700 hover:bg-orange-50 hover:text-orange-600"
                    : "text-white hover:bg-white/10"
                }`}
              >
                FAQ
              </button>

              {/* Mobile Language Selector */}
              <div className="sm:hidden px-4 pt-3 mt-2 border-t border-gray-200/20">
                <button
                  onClick={() => setLanguage(language === "fr" ? "en" : "fr")}
                  className={`flex items-center gap-3 w-full py-2 ${
                    isScrolled ? "text-gray-700" : "text-white"
                  }`}
                >
                  <Globe className="w-5 h-5" />
                  <span className="font-medium">
                    {language === "fr" ? "🇫🇷 Français" : "🇬🇧 English"}
                  </span>
                </button>
              </div>

              {/* Mobile CTA Buttons */}
              <div className="flex flex-col gap-2 px-4 pt-3 mt-2 border-t border-gray-200/20">
                <Button
                  variant="ghost"
                  className="w-full justify-center md:hidden text-gray-700 hover:bg-orange-50"
                >
                  Connexion
                </Button>
                <Button className="w-full justify-center sm:hidden bg-gradient-to-r from-yellow-400 via-orange-400 to-orange-500 text-gray-900 font-semibold">
                  Commencer
                </Button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};
