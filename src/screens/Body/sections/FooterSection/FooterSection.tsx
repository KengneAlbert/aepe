import React from "react";

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
    <footer className="w-full bg-[#111726] pt-12 sm:pt-16 pb-6 sm:pb-8">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-8">
        <div className="pb-8 sm:pb-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-8">
            <div className="flex flex-col lg:col-span-2">
              <div className="pb-4">
                <div className="flex items-center h-12">
                  <img className="w-12 h-12" alt="Logo" src="/div-1089.svg" />
                  <div className="pl-3">
                    <div className="[font-family:'Pacifico',Helvetica] font-normal text-2xl leading-8 text-white whitespace-nowrap">
                      L'AEFE
                    </div>
                  </div>
                </div>
              </div>

              <div className="pb-6">
                <p className="[font-family:'Roboto',Helvetica] font-normal text-base leading-[26px] text-[#9ca2af] line-clamp-3">
                  La plateforme d'éducation financière qui transforme
                  l'apprentissage en aventure pour les enfants de 5 à 16 ans.
                </p>
              </div>

              <img
                className="w-full h-10"
                alt="Social media icons"
                src="/div-968.svg"
              />
            </div>


            {footerColumns.map((column, index) => (
              <div key={index} className="flex flex-col">
                <div className="pb-4">
                  <h3 className="[font-family:'Roboto',Helvetica] font-bold text-lg leading-7 text-white">
                    {column.title}
                  </h3>
                </div>

                <nav className="flex flex-col">
                  {column.links.map((link, linkIndex) => (
                    <a
                      key={linkIndex}
                      href="#"
                      className={`[font-family:'Roboto',Helvetica] font-normal text-base leading-6 text-[#9ca2af] hover:text-white transition-colors ${linkIndex > 0 ? "pt-3" : ""}`}
                    >
                      {link}
                    </a>
                  ))}
                </nav>
              </div>
            ))}
          </div>
        </div>

        <div className="pt-6 sm:pt-[33px] border-t border-gray-800">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="[font-family:'Roboto',Helvetica] font-normal text-xs sm:text-sm leading-5 text-[#9ca2af] text-center sm:text-left">
              © 2024 FinKids. Tous droits réservés.
            </p>

            <p className="[font-family:'Roboto',Helvetica] font-normal text-xs sm:text-sm leading-5 text-[#9ca2af] text-center sm:text-right">
              Powered by Readdy
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
