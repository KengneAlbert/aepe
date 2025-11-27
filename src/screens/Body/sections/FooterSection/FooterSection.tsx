import React from "react";
import {
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  Mail,
  Phone,
  MapPin,
  ArrowRight,
} from "lucide-react";

const footerColumns = [
  {
    title: "Produit",
    links: ["Fonctionnalités", "Tarifs", "Sécurité", "Démo"],
  },
  {
    title: "Entreprise",
    links: ["À propos", "Blog", "Carrières", "Contact"],
  },
  {
    title: "Ressources",
    links: ["Centre d'aide", "Guides pédagogiques", "FAQ", "Communauté"],
  },
  {
    title: "Légal",
    links: ["Confidentialité", "Conditions d'utilisation", "RGPD", "Cookies"],
  },
];

export const FooterSection = (): JSX.Element => {
  return (
    <footer className="w-full bg-[#111726] relative overflow-hidden pt-16 sm:pt-20 pb-8">
      {/* Background decorative elements */}
      <div className="absolute inset-0 adinkra-dots opacity-5"></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-br from-orange-500/10 to-yellow-500/10 rounded-full blur-3xl"></div>

      <div className="max-w-screen-xl mx-auto px-4 sm:px-8 relative z-10">
        <div className="pb-8 sm:pb-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-8">
            <div className="flex flex-col lg:col-span-2">
              <div className="pb-4">
                <div className="flex items-center h-12">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-orange-500 via-purple-500 to-pink-500 flex items-center justify-center shadow-lg">
                    <span className="text-2xl">💰</span>
                  </div>
                  <div className="pl-3">
                    <div className="[font-family:'Pacifico',Helvetica] font-normal text-3xl leading-8 bg-gradient-to-r from-orange-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                      L'AEFE
                    </div>
                  </div>
                </div>
              </div>

              <div className="pb-6">
                <p className="[font-family:'Roboto',Helvetica] font-normal text-base leading-relaxed text-gray-400 max-w-sm">
                  La plateforme d'éducation financière qui transforme
                  l'apprentissage en aventure pour les enfants de 5 à 16 ans.
                </p>
              </div>

              {/* Contact Info */}
              <div className="space-y-3 pb-6">
                <div className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors group">
                  <Mail className="w-4 h-4 text-purple-400 group-hover:text-purple-300" />
                  <span className="text-sm">contact@laefe.com</span>
                </div>
                <div className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors group">
                  <Phone className="w-4 h-4 text-purple-400 group-hover:text-purple-300" />
                  <span className="text-sm">+33 1 23 45 67 89</span>
                </div>
                <div className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors group">
                  <MapPin className="w-4 h-4 text-purple-400 group-hover:text-purple-300" />
                  <span className="text-sm">Paris, France</span>
                </div>
              </div>

              {/* Social Media */}
              <div className="flex items-center gap-3">
                <a
                  href="#"
                  className="w-10 h-10 rounded-full bg-gray-800 hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-500 flex items-center justify-center transition-all duration-300 hover:scale-110 group"
                >
                  <Facebook className="w-5 h-5 text-gray-400 group-hover:text-white" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 rounded-full bg-gray-800 hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-500 flex items-center justify-center transition-all duration-300 hover:scale-110 group"
                >
                  <Twitter className="w-5 h-5 text-gray-400 group-hover:text-white" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 rounded-full bg-gray-800 hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-500 flex items-center justify-center transition-all duration-300 hover:scale-110 group"
                >
                  <Linkedin className="w-5 h-5 text-gray-400 group-hover:text-white" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 rounded-full bg-gray-800 hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-500 flex items-center justify-center transition-all duration-300 hover:scale-110 group"
                >
                  <Instagram className="w-5 h-5 text-gray-400 group-hover:text-white" />
                </a>
              </div>
            </div>

            {footerColumns.map((column, index) => (
              <div key={index} className="flex flex-col">
                <div className="pb-4">
                  <h3 className="[font-family:'Roboto',Helvetica] font-bold text-lg leading-7 text-white mb-1">
                    {column.title}
                  </h3>
                  <div className="w-12 h-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"></div>
                </div>

                <nav className="flex flex-col space-y-3">
                  {column.links.map((link, linkIndex) => (
                    <a
                      key={linkIndex}
                      href="#"
                      className="[font-family:'Roboto',Helvetica] font-normal text-base text-gray-400 hover:text-white transition-all duration-300 flex items-center gap-2 group"
                    >
                      <ArrowRight className="w-4 h-4 text-purple-400 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                      <span>{link}</span>
                    </a>
                  ))}
                </nav>
              </div>
            ))}
          </div>
        </div>

        <div className="pt-8 mt-8 border-t border-gray-800/50">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-4 flex-wrap justify-center sm:justify-start">
              <p className="[font-family:'Roboto',Helvetica] font-normal text-sm text-gray-400">
                © 2024{" "}
                <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent font-semibold">
                  L'AEFE
                </span>
                . Tous droits réservés.
              </p>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                <span className="text-xs text-gray-500">
                  Plateforme sécurisée
                </span>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <span className="text-sm text-gray-500">Développé avec</span>
              <span className="text-red-500">❤️</span>
              <span className="text-sm text-gray-500">par</span>
              <span className="text-sm font-semibold bg-gradient-to-r from-orange-400 to-purple-400 bg-clip-text text-transparent">
                Readdy
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
