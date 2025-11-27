import React, { useEffect, useRef } from "react";
import { Badge } from "../../../../components/ui/badge";
import { Card, CardContent } from "../../../../components/ui/card";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ageGroups = [
  {
    emoji: "🧒",
    ageRange: "5-8 ans",
    title: "Les Petits Épargnants",
    description: "Découverte ludique de l'argent et de l'épargne",
    modules: [
      "Comprendre l'argent",
      "Besoins vs Désirs",
      "La Tirelire & l'Épargne",
    ],
    color: "from-green-500 to-emerald-600",
    bgColor: "from-green-50 to-emerald-50",
    sessions: "4 sessions/an",
    duration: "45 min/session",
  },
  {
    emoji: "👦",
    ageRange: "9-12 ans",
    title: "Les Jeunes Gestionnaires",
    description: "Gestion budgétaire et premiers revenus",
    modules: [
      "Tout du niveau 5-8 ans",
      "Budget et gestion simple",
      "Gagner ses premiers revenus",
      "Mini-projet entrepreneurial",
    ],
    color: "from-blue-500 to-cyan-600",
    bgColor: "from-blue-50 to-cyan-50",
    sessions: "4 sessions/an",
    duration: "60 min/session",
  },
  {
    emoji: "🧑",
    ageRange: "13-16 ans",
    title: "Les Futurs Entrepreneurs",
    description: "Investissement et création d'entreprise",
    modules: [
      "Tout des niveaux précédents",
      "Marge, profit, coûts",
      "Bases de l'investissement",
      "Création d'une micro-entreprise",
    ],
    color: "from-purple-500 to-violet-600",
    bgColor: "from-purple-50 to-violet-50",
    sessions: "4 sessions/an",
    duration: "75 min/session",
  },
];

const programStats = [
  { label: "Tranches d'âge", value: "3", icon: "👶" },
  { label: "Sessions par an", value: "4", icon: "📅" },
  { label: "Mois de formation", value: "Jan•Avr•Jul•Oct", icon: "🗓️" },
  { label: "Formateurs experts", value: "12+", icon: "👩‍🏫" },
];

const trimestrialSchedule = [
  {
    month: "Janvier",
    theme: "Planification & Objectifs",
    color: "bg-blue-100 text-blue-700",
    icon: "🎯",
  },
  {
    month: "Avril",
    theme: "Mise en Pratique",
    color: "bg-green-100 text-green-700",
    icon: "🛠️",
  },
  {
    month: "Juillet",
    theme: "Projets d'Été",
    color: "bg-orange-100 text-orange-700",
    icon: "☀️",
  },
  {
    month: "Octobre",
    theme: "Bilan & Évolution",
    color: "bg-purple-100 text-purple-700",
    icon: "📊",
  },
];

export const FeaturesSection = (): JSX.Element => {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);
  const scheduleRef = useRef<HTMLDivElement>(null);
  const scheduleItemsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animation du header (fade in + slide up)
      gsap.from(headerRef.current, {
        scrollTrigger: {
          trigger: headerRef.current,
          start: "top 80%",
          end: "bottom 60%",
          toggleActions: "play none none reverse",
        },
        y: 50,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
      });

      // Animation des stats (compteur + apparition)
      gsap.from(".stat-item", {
        scrollTrigger: {
          trigger: statsRef.current,
          start: "top 75%",
          toggleActions: "play none none reverse",
        },
        scale: 0.5,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: "back.out(1.7)",
      });

      // Animation des cartes en cascade avec rotation
      cardsRef.current.forEach((card, index) => {
        if (card) {
          gsap.from(card, {
            scrollTrigger: {
              trigger: card,
              start: "top 85%",
              end: "bottom 50%",
              toggleActions: "play none none reverse",
            },
            y: 80,
            opacity: 0,
            rotationY: -15,
            scale: 0.9,
            duration: 1,
            delay: index * 0.2,
            ease: "power3.out",
          });

          // Hover effect avec GSAP
          card.addEventListener("mouseenter", () => {
            gsap.to(card, {
              y: -10,
              scale: 1.05,
              boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
              duration: 0.3,
              ease: "power2.out",
            });
          });

          card.addEventListener("mouseleave", () => {
            gsap.to(card, {
              y: 0,
              scale: 1,
              boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)",
              duration: 0.3,
              ease: "power2.out",
            });
          });
        }
      });

      // Animation du calendrier trimestriel
      scheduleItemsRef.current.forEach((item, index) => {
        if (item) {
          gsap.from(item, {
            scrollTrigger: {
              trigger: scheduleRef.current,
              start: "top 80%",
              toggleActions: "play none none reverse",
            },
            x: -50,
            opacity: 0,
            duration: 0.8,
            delay: index * 0.2,
            ease: "power2.out",
          });
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="fonctionnalites"
      className="w-full py-16 sm:py-20 lg:py-28 bg-gradient-to-b from-white via-orange-50/30 to-purple-50/40 relative overflow-hidden"
    >
      {/* Background elements avec motifs africains */}
      <div className="absolute inset-0 african-zigzag opacity-20"></div>
      <div className="absolute top-10 left-10 w-64 h-64 bg-gradient-to-br from-orange-300/30 to-yellow-300/30 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-10 right-10 w-72 h-72 bg-gradient-to-br from-purple-300/30 to-pink-300/30 rounded-full blur-3xl animate-pulse delay-1000"></div>
      <div className="absolute top-1/3 right-1/4 w-48 h-48 bg-gradient-to-br from-green-300/20 to-emerald-300/20 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Header amélioré */}
        <div ref={headerRef} className="text-center mb-16">
          <Badge className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-orange-100 to-yellow-100 text-orange-800 hover:bg-orange-100 rounded-full mb-6 border-2 border-orange-300 shadow-lg">
            <span className="text-xl">🎓</span>
            <span className="font-bold text-base">Programme Trimestriel</span>
          </Badge>

          <h2 className="font-bold text-gray-900 text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-center leading-tight mb-6">
            Une formation progressive par{" "}
            <span className="bg-gradient-to-r from-orange-600 via-purple-600 to-pink-600 bg-clip-text text-transparent drop-shadow-sm">
              tranche d'âge
            </span>
          </h2>

          <p className="text-gray-600 text-lg sm:text-xl text-center leading-relaxed max-w-3xl mx-auto mb-8">
            <strong className="text-gray-900">
              Cours digitaux trimestriels
            </strong>{" "}
            adaptés à chaque âge, avec formateurs experts pour un apprentissage
            optimal
          </p>

          {/* Stats programme */}
          <div
            ref={statsRef}
            className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mb-16"
          >
            {programStats.map((stat, index) => (
              <div key={index} className="stat-item text-center">
                <div className="text-2xl mb-2">{stat.icon}</div>
                <div className="text-2xl lg:text-3xl font-bold text-gray-900 mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Tranches d'âge */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
          {ageGroups.map((group, index) => (
            <div key={index} ref={(el) => (cardsRef.current[index] = el)}>
              <Card
                className={`group relative overflow-hidden border-0 shadow-lg bg-gradient-to-br ${group.bgColor} h-full`}
              >
                <CardContent className="p-8 relative">
                  {/* Accent coloré */}
                  <div
                    className={`absolute top-0 left-0 w-full h-2 bg-gradient-to-r ${group.color}`}
                  ></div>

                  {/* Header */}
                  <div className="text-center mb-6">
                    <div
                      className={`w-20 h-20 mx-auto rounded-2xl bg-gradient-to-r ${group.color} flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow mb-4`}
                    >
                      <span className="text-3xl">{group.emoji}</span>
                    </div>
                    <div className="bg-white/80 px-3 py-1 rounded-full shadow-sm mb-2">
                      <span className="text-sm font-bold text-gray-700">
                        {group.ageRange}
                      </span>
                    </div>
                    <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-2">
                      {group.title}
                    </h3>
                    <p className="text-gray-700 text-sm leading-relaxed">
                      {group.description}
                    </p>
                  </div>

                  {/* Modules */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3 text-center">
                      Modules inclus :
                    </h4>
                    <ul className="space-y-2">
                      {group.modules.map((module, moduleIndex) => (
                        <li
                          key={moduleIndex}
                          className="flex items-start gap-2"
                        >
                          <span className="text-green-500 font-bold text-sm">
                            ✓
                          </span>
                          <span className="text-gray-700 text-sm leading-relaxed">
                            {module}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Détails sessions */}
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="text-center p-3 bg-white/50 rounded-lg">
                      <div className="text-xs text-gray-600 mb-1">
                        Fréquence
                      </div>
                      <div className="font-semibold text-sm text-gray-900">
                        {group.sessions}
                      </div>
                    </div>
                    <div className="text-center p-3 bg-white/50 rounded-lg">
                      <div className="text-xs text-gray-600 mb-1">Durée</div>
                      <div className="font-semibold text-sm text-gray-900">
                        {group.duration}
                      </div>
                    </div>
                  </div>

                  {/* Bouton d'action */}
                  <button className="w-full py-3 px-4 rounded-xl font-semibold transition-all duration-300 bg-white/80 hover:bg-white text-gray-700 hover:text-gray-900 shadow-sm hover:shadow-md">
                    Voir le programme →
                  </button>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>

        {/* Planning trimestriel */}
        <div
          ref={scheduleRef}
          className="bg-white rounded-3xl shadow-xl p-8 lg:p-12 border border-gray-100 mb-16"
        >
          <div className="text-center mb-12">
            <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
              Calendrier des Sessions 2024-2025
            </h3>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              <strong className="text-gray-900">4 sessions par an</strong>{" "}
              organisées selon un calendrier fixe pour une progression optimale
              tout au long de l'année
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {trimestrialSchedule.map((session, index) => (
              <div
                key={index}
                ref={(el) => (scheduleItemsRef.current[index] = el)}
              >
                <Card
                  className={`${session.color} border-0 text-center group transition-all duration-300`}
                >
                  <CardContent className="p-6">
                    <div className="text-4xl mb-3">{session.icon}</div>
                    <h4 className="font-bold text-lg mb-2">{session.month}</h4>
                    <p className="text-sm opacity-80">{session.theme}</p>
                    <div className="mt-4 text-xs opacity-70">
                      Session trimestrielle
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>

          <div className="text-center mt-8 pt-6 border-t border-gray-100">
            <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-600">
              <div className="flex items-center gap-2">
                <span className="text-green-500">✅</span>
                <span>Formateurs qualifiés</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-green-500">✅</span>
                <span>Groupes par âge</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-green-500">✅</span>
                <span>Supports interactifs</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-green-500">✅</span>
                <span>Suivi parental</span>
              </div>
            </div>
          </div>
        </div>

        {/* Call to action */}
        <div className="text-center bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl p-8 lg:p-12 text-white">
          <div className="w-16 h-16 mx-auto mb-6 bg-white/20 rounded-full flex items-center justify-center">
            <span className="text-2xl">🎓</span>
          </div>
          <h3 className="text-2xl lg:text-3xl font-bold mb-4">
            Prochaine session : Janvier 2025
          </h3>
          <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
            Inscrivez vos enfants dès maintenant pour la session de janvier.
            <strong className="text-white">
              {" "}
              Places limitées par tranche d'âge.
            </strong>
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-purple-600 hover:bg-gray-50 font-bold px-8 py-4 rounded-2xl shadow-lg transition-all duration-300 transform hover:scale-105">
              S'inscrire maintenant
            </button>
            <button className="bg-white/20 text-white border-2 border-white/30 hover:bg-white/30 font-semibold px-8 py-4 rounded-2xl transition-all duration-300">
              Voir le calendrier complet
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
