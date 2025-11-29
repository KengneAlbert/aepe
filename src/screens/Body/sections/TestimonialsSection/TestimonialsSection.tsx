import React, { useEffect, useRef } from "react";
import { Card, CardContent } from "../../../../components/ui/card";
import { Badge } from "../../../../components/ui/badge";
import { Star, MessageCircle } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const testimonials = [
  {
    name: "Aminata Diallo",
    role: "Mère de 2 enfants (8 et 12 ans)",
    image:
      "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=150&q=80",
    rating: 5,
    text: "Mes enfants adorent ! Ils ont appris à gérer leur argent de poche et ont même lancé leur petite entreprise de vente de jus. Je suis fière de voir leur évolution.",
    highlight: "3 mois d'utilisation",
    location: "Dakar, Sénégal",
  },
  {
    name: "Jean-Claude Kouassi",
    role: "Père de 3 enfants (6, 10 et 14 ans)",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&q=80",
    rating: 5,
    text: "Une plateforme exceptionnelle ! Mes enfants comprennent maintenant la valeur de l'argent. Le programme trimestriel est parfaitement adapté à leur rythme scolaire.",
    highlight: "6 mois d'utilisation",
    location: "Abidjan, Côte d'Ivoire",
  },
  {
    name: "Sophie Mensah",
    role: "Mère de 1 enfant (13 ans)",
    image:
      "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=150&q=80",
    rating: 5,
    text: "Mon fils de 13 ans a créé un budget pour ses projets et économise pour son premier investissement. L'interface est ludique et les formateurs sont compétents.",
    highlight: "4 mois d'utilisation",
    location: "Accra, Ghana",
  },
  {
    name: "Ibrahim Ndiaye",
    role: "Père de 2 enfants (7 et 11 ans)",
    image:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&q=80",
    rating: 5,
    text: "Excellent investissement pour l'avenir de mes enfants. Ils sont plus responsables et posent des questions intelligentes sur l'argent. Le tableau de bord parent est très complet.",
    highlight: "8 mois d'utilisation",
    location: "Douala, Cameroun",
  },
  {
    name: "Marie Adjoua",
    role: "Mère de 3 enfants (5, 9 et 15 ans)",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&q=80",
    rating: 5,
    text: "Parfait pour toute la famille ! Chaque enfant a du contenu adapté à son âge. Les sessions live sont interactives et mes enfants ne les ratent jamais.",
    highlight: "1 an d'utilisation",
    location: "Lomé, Togo",
  },
  {
    name: "Kofi Amoah",
    role: "Père de 1 enfant (10 ans)",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&q=80",
    rating: 5,
    text: "Ma fille a développé un vrai esprit entrepreneurial. Elle a même proposé des idées de business à la maison ! Le programme africain est très valorisant.",
    highlight: "5 mois d'utilisation",
    location: "Lagos, Nigeria",
  },
];

export const TestimonialsSection = (): JSX.Element => {
  const headerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animation du header
      if (headerRef.current) {
        gsap.from(headerRef.current.children, {
          y: 50,
          opacity: 0,
          duration: 1,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: headerRef.current,
            start: "top 80%",
          },
        });
      }

      // Animation des cartes témoignages
      cardsRef.current.forEach((card, index) => {
        if (card) {
          gsap.from(card, {
            y: 80,
            opacity: 0,
            scale: 0.9,
            duration: 0.8,
            delay: index * 0.1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: card,
              start: "top 85%",
            },
          });
        }
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <section className="relative w-full py-16 sm:py-20 lg:py-28 bg-gradient-to-b from-white via-purple-50/30 to-pink-50/30 overflow-hidden">
      {/* Background image avec overlay */}
      <div className="absolute inset-0 opacity-[0.06]">
        <img
          src="https://images.unsplash.com/photo-1491438590914-bc09fcaaf77a?w=1920&q=80"
          alt=""
          className="w-full h-full object-cover"
          onError={(e) => {
            e.currentTarget.style.display = "none";
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white/90 via-white/88 to-white/92"></div>
      </div>

      {/* Background decorative elements */}
      <div className="absolute inset-0 adinkra-dots opacity-10"></div>
      <div className="absolute top-20 right-20 w-96 h-96 bg-gradient-to-br from-purple-300/20 to-pink-300/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 left-20 w-80 h-80 bg-gradient-to-br from-orange-300/20 to-yellow-300/20 rounded-full blur-3xl animate-pulse delay-1000"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div ref={headerRef} className="text-center mb-12 sm:mb-16">
          <Badge className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 text-white hover:opacity-90 rounded-full shadow-lg mb-6">
            <MessageCircle className="w-5 h-5" />
            <span className="font-bold text-base">Témoignages</span>
          </Badge>

          <h2 className="font-bold text-gray-900 text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-center leading-tight mb-6">
            Ce que disent les{" "}
            <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-orange-600 bg-clip-text text-transparent drop-shadow-sm">
              parents satisfaits
            </span>
          </h2>

          <p className="text-gray-600 text-lg sm:text-xl text-center leading-relaxed max-w-3xl mx-auto">
            Rejoignez{" "}
            <strong className="text-gray-900">
              15,000+ familles africaines
            </strong>{" "}
            qui transforment l'avenir financier de leurs enfants
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              ref={(el) => (cardsRef.current[index] = el)}
              className="group overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl border border-gray-100 bg-white transition-all duration-500 hover:-translate-y-2"
            >
              <CardContent className="p-6 flex flex-col gap-4">
                {/* Rating */}
                <div className="flex items-center gap-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>

                {/* Testimonial Text */}
                <p className="text-gray-700 leading-relaxed text-base">
                  "{testimonial.text}"
                </p>

                {/* Highlight Badge */}
                <Badge className="w-fit bg-gradient-to-r from-purple-100 to-pink-100 text-purple-700 hover:bg-purple-100 text-xs px-3 py-1">
                  {testimonial.highlight}
                </Badge>

                {/* Profile */}
                <div className="flex items-center gap-4 pt-4 border-t border-gray-100">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-14 h-14 rounded-full object-cover border-2 border-purple-200"
                    onError={(e) => {
                      e.currentTarget.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(
                        testimonial.name
                      )}&background=random`;
                    }}
                  />
                  <div className="flex-1">
                    <div className="font-bold text-gray-900 text-sm">
                      {testimonial.name}
                    </div>
                    <div className="text-gray-600 text-xs leading-tight">
                      {testimonial.role}
                    </div>
                    <div className="text-gray-500 text-xs mt-1 flex items-center gap-1">
                      <span>📍</span>
                      {testimonial.location}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Stats Footer */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-2">
              15K+
            </div>
            <div className="text-gray-600 text-sm">Familles actives</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-2">
              98%
            </div>
            <div className="text-gray-600 text-sm">Taux de satisfaction</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-2">
              4.9/5
            </div>
            <div className="text-gray-600 text-sm">Note moyenne</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-2">
              15
            </div>
            <div className="text-gray-600 text-sm">Pays africains</div>
          </div>
        </div>
      </div>
    </section>
  );
};
