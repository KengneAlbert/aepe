import React, { useState, useEffect, useRef } from "react";
import { Card, CardContent } from "../../../../components/ui/card";
import { Button } from "../../../../components/ui/button";
import { ChevronDown, ChevronUp, HelpCircle } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const faqs = [
  {
    question: "À partir de quel âge mon enfant peut-il utiliser L'AEFE ?",
    answer:
      "L'AEFE est conçu pour les enfants de 5 à 16 ans. Nous adaptons automatiquement le contenu selon l'âge de votre enfant, avec des parcours spécialement créés pour chaque tranche d'âge : 5-8 ans (découverte ludique), 9-12 ans (concepts fondamentaux), et 13-16 ans (projets entrepreneuriaux).",
  },
  {
    question: "Les informations financières sont-elles réelles ou simulées ?",
    answer:
      "Tout est entièrement simulé et sécurisé ! Vos enfants apprennent avec de faux budgets, de faux investissements et des entreprises virtuelles. Aucune vraie transaction financière n'est possible. C'est un environnement 100% éducatif et protégé.",
  },
  {
    question: "Comment puis-je suivre les progrès de mon enfant ?",
    answer:
      "Vous recevez un tableau de bord parent complet avec des rapports hebdomadaires détaillés, les badges obtenus, les leçons complétées, et même des suggestions d'activités à faire ensemble. Vous pouvez aussi paramétrer des notifications pour célébrer ses réussites !",
  },
  {
    question: "Y a-t-il des risques ou des achats intégrés ?",
    answer:
      "Absolument aucun ! L'application ne contient aucun achat intégré, aucune publicité, et aucun lien vers l'extérieur. Votre enfant ne peut pas dépenser d'argent réel. C'est un environnement fermé et totalement sécurisé, conforme au RGPD.",
  },
  {
    question: "Que se passe-t-il si mon enfant n'aime pas ?",
    answer:
      "Nous offrons une garantie satisfaction de 30 jours. Si votre enfant ne progresse pas ou ne s'amuse pas, nous vous remboursons intégralement, sans poser de questions.",
  },
  {
    question: "Puis-je utiliser L'AEFE pour plusieurs enfants ?",
    answer:
      "Oui ! Le plan Famille permet jusqu'à 3 enfants avec des parcours personnalisés pour chacun. Le plan Premium est illimité. Chaque enfant a son propre espace, ses propres progrès, et vous gérez tout depuis votre tableau de bord parent.",
  },
  {
    question: "Comment fonctionnent les sessions live ?",
    answer:
      "Nos sessions live sont des ateliers interactifs animés par notre équipe pédagogique experte. Ces sessions permettent aux enfants d'apprendre en groupe, de poser des questions et de participer à des activités collaboratives dans un environnement sécurisé.",
  },
  {
    question: "L'application fonctionne-t-elle hors ligne ?",
    answer:
      "Certains contenus comme les vidéos téléchargées et quelques jeux fonctionnent hors ligne. Cependant, pour les sessions live, les mises à jour de progrès et les nouveaux contenus, une connexion internet est nécessaire.",
  },
];

const categories = [
  { name: "Sécurité", icon: "🛡️", count: 3 },
  { name: "Pédagogie", icon: "📚", count: 2 },
  { name: "Technique", icon: "⚙️", count: 2 },
  { name: "Tarification", icon: "💰", count: 1 },
];

export const FaqSection = (): JSX.Element => {
  const [openFaq, setOpenFaq] = useState<number | null>(0); // Premier FAQ ouvert par défaut
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const faqsRef = useRef<(HTMLDivElement | null)[]>([]);

  const filteredFaqs = selectedCategory
    ? faqs.filter((_, index) => {
        if (selectedCategory === "Sécurité") return [1, 3, 6].includes(index);
        if (selectedCategory === "Pédagogie") return [0, 2].includes(index);
        if (selectedCategory === "Technique") return [4, 7].includes(index);
        if (selectedCategory === "Tarification") return [5].includes(index);
        return true;
      })
    : faqs;

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animation du header
      if (headerRef.current) {
        gsap.from(headerRef.current.children, {
          y: 40,
          opacity: 0,
          duration: 0.8,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: headerRef.current,
            start: "top 80%",
          },
        });
      }

      // Animation des FAQs
      faqsRef.current.forEach((faq, index) => {
        if (faq) {
          gsap.from(faq, {
            x: -50,
            opacity: 0,
            duration: 0.6,
            delay: index * 0.1,
            ease: "power2.out",
            scrollTrigger: {
              trigger: faq,
              start: "top 90%",
            },
          });
        }
      });
    });

    return () => ctx.revert();
  }, [filteredFaqs.length]);

  return (
    <section
      id="faq"
      className="w-full py-16 sm:py-24 px-4 sm:px-8 bg-gradient-to-b from-purple-50/40 via-pink-50/30 to-orange-50/40 relative overflow-hidden"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 adinkra-dots opacity-10"></div>
      <div className="absolute top-10 left-10 w-64 h-64 bg-gradient-to-br from-purple-300/30 to-pink-300/30 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-10 right-10 w-72 h-72 bg-gradient-to-br from-orange-300/30 to-yellow-300/30 rounded-full blur-3xl animate-pulse delay-1000"></div>
      <div className="max-w-4xl mx-auto relative z-10">
        {/* Header */}
        <div ref={headerRef} className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 text-white px-6 py-3 rounded-full text-sm font-bold mb-6 shadow-lg">
            <HelpCircle className="w-5 h-5" />
            Questions fréquentes
          </div>
          <h2 className="font-bold text-3xl sm:text-4xl lg:text-5xl text-gray-900 mb-6">
            Toutes les réponses à vos
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              {" "}
              questions de parents
            </span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Nous comprenons vos préoccupations. Voici les réponses aux questions
            que se posent le plus souvent les parents.
          </p>
        </div>

        {/* Categories */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          <button
            onClick={() => setSelectedCategory(null)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
              !selectedCategory
                ? "bg-purple-100 text-purple-700 border border-purple-200"
                : "bg-white text-gray-600 border border-gray-200 hover:border-purple-200"
            }`}
          >
            Toutes les questions
          </button>
          {categories.map((category) => (
            <button
              key={category.name}
              onClick={() => setSelectedCategory(category.name)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all flex items-center gap-2 ${
                selectedCategory === category.name
                  ? "bg-purple-100 text-purple-700 border border-purple-200"
                  : "bg-white text-gray-600 border border-gray-200 hover:border-purple-200"
              }`}
            >
              <span>{category.icon}</span>
              {category.name}
              <span className="bg-gray-100 text-gray-500 px-2 py-0.5 rounded-full text-xs">
                {category.count}
              </span>
            </button>
          ))}
        </div>

        {/* FAQ Items */}
        <div className="space-y-4 mb-16">
          {filteredFaqs.map((faq, index) => (
            <Card
              key={index}
              ref={(el) => (faqsRef.current[index] = el)}
              className="border border-gray-100 shadow-md hover:shadow-xl transition-all duration-300 bg-white/80 backdrop-blur-sm"
            >
              <CardContent className="p-0">
                <button
                  className="w-full p-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                >
                  <h3 className="font-semibold text-lg text-gray-900 pr-8">
                    {faq.question}
                  </h3>
                  {openFaq === index ? (
                    <ChevronUp className="w-5 h-5 text-purple-600 flex-shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-gray-400 flex-shrink-0" />
                  )}
                </button>

                {openFaq === index && (
                  <div className="px-6 pb-6 pt-0">
                    <div className="border-t pt-4">
                      <p className="text-gray-700 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Still have questions */}
        <Card className="bg-gradient-to-r from-purple-50 to-pink-50 border-0">
          <CardContent className="p-8 text-center">
            <div className="w-16 h-16 mx-auto mb-4 bg-white rounded-full flex items-center justify-center shadow-sm">
              <HelpCircle className="w-8 h-8 text-purple-600" />
            </div>
            <h3 className="font-semibold text-xl text-gray-900 mb-3">
              Vous avez encore des questions ?
            </h3>
            <p className="text-gray-600 mb-6 max-w-md mx-auto">
              Notre équipe de parents-experts est là pour vous accompagner et
              répondre à toutes vos interrogations.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button className="bg-purple-600 hover:bg-purple-700 text-white px-6">
                Discuter avec un expert
              </Button>
              <Button
                variant="outline"
                className="border-purple-200 text-purple-700 hover:bg-purple-50"
              >
                support@laefe.fr
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};
