import React, { useEffect, useRef } from "react";
import { GraduationCap, Globe, Briefcase, Heart } from "lucide-react";
import { Card, CardContent } from "../../../../components/ui/card";
import { Badge } from "../../../../components/ui/badge";
import { Linkedin } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const teamMembers = [
  {
    name: "Dr. Kwame Nkrumah",
    role: "Directeur Pédagogique",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80",
    speciality: "Économie & Entrepreneuriat",
    experience: "15 ans d'expérience",
    description:
      "PhD en Sciences Économiques, ancien consultant à la Banque Mondiale",
    linkedin: "#",
  },
  {
    name: "Aissatou Sow",
    role: "Responsable Programmes Enfants",
    image:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=80",
    speciality: "Pédagogie 5-12 ans",
    experience: "10 ans d'expérience",
    description:
      "Spécialiste en éducation ludique et développement de l'enfant",
    linkedin: "#",
  },
  {
    name: "Omar Diop",
    role: "Formateur Senior",
    image:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&q=80",
    speciality: "Finance & Investissement",
    experience: "12 ans d'expérience",
    description: "Ex-trader, expert en éducation financière pour adolescents",
    linkedin: "#",
  },
  {
    name: "Fatou Kamara",
    role: "Animatrice Sessions Live",
    image:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&q=80",
    speciality: "Animation & Engagement",
    experience: "8 ans d'expérience",
    description: "Experte en communication digitale et animation jeunesse",
    linkedin: "#",
  },
];

export const TeamSection = (): JSX.Element => {
  const headerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
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

      cardsRef.current.forEach((card, index) => {
        if (card) {
          gsap.from(card, {
            y: 80,
            opacity: 0,
            scale: 0.9,
            duration: 0.8,
            delay: index * 0.15,
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
    <section className="relative w-full py-16 sm:py-20 lg:py-28 bg-gradient-to-b from-orange-50/40 via-yellow-50/30 to-white overflow-hidden">
      {/* Background image avec overlay */}
      <div className="absolute inset-0 opacity-[0.08]">
        <img
          src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=1920&q=80"
          alt=""
          className="w-full h-full object-cover"
          onError={(e) => {
            e.currentTarget.style.display = "none";
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white/85 via-white/80 to-white/90"></div>
      </div>

      {/* Background */}
      <div className="absolute inset-0 kente-pattern opacity-10"></div>
      <div className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-br from-orange-300/20 to-yellow-300/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-br from-purple-300/20 to-pink-300/20 rounded-full blur-3xl animate-pulse delay-1000"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div ref={headerRef} className="text-center mb-12 sm:mb-16">
          <Badge className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-orange-500 via-yellow-500 to-orange-500 text-white hover:opacity-90 rounded-full shadow-lg mb-6">
            <GraduationCap className="w-5 h-5" />
            <span className="font-bold text-base">Notre Équipe</span>
          </Badge>

          <h2 className="font-bold text-gray-900 text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-center leading-tight mb-6">
            Des experts passionnés pour{" "}
            <span className="bg-gradient-to-r from-orange-600 via-yellow-600 to-orange-600 bg-clip-text text-transparent drop-shadow-sm">
              vos enfants
            </span>
          </h2>

          <p className="text-gray-600 text-lg sm:text-xl text-center leading-relaxed max-w-3xl mx-auto">
            Une équipe pluridisciplinaire de{" "}
            <strong className="text-gray-900">formateurs qualifiés</strong> et
            passionnés par l'éducation financière
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {teamMembers.map((member, index) => (
            <Card
              key={index}
              ref={(el) => (cardsRef.current[index] = el)}
              className="group overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl border border-gray-100 bg-white transition-all duration-500 hover:-translate-y-2"
            >
              <CardContent className="p-0">
                {/* Image */}
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    onError={(e) => {
                      e.currentTarget.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(
                        member.name
                      )}&size=400&background=random`;
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>

                  {/* LinkedIn Icon */}
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute top-4 right-4 w-10 h-10 bg-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity shadow-lg hover:bg-orange-500 hover:text-white"
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                </div>

                {/* Content */}
                <div className="p-6 space-y-3">
                  <div>
                    <h3 className="font-bold text-gray-900 text-xl mb-1">
                      {member.name}
                    </h3>
                    <p className="text-orange-600 font-semibold text-sm">
                      {member.role}
                    </p>
                  </div>

                  <div className="space-y-2">
                    <Badge className="bg-orange-100 text-orange-700 hover:bg-orange-100 text-xs px-3 py-1">
                      {member.speciality}
                    </Badge>
                    <p className="text-gray-600 text-xs">{member.experience}</p>
                  </div>

                  <p className="text-gray-700 text-sm leading-relaxed">
                    {member.description}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to action */}
        <div className="mt-16 text-center">
          <p className="text-gray-600 text-lg mb-6">
            Rejoignez nos{" "}
            <strong className="text-orange-600">
              sessions live interactives
            </strong>{" "}
            animées par nos experts
          </p>
          <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-500">
            <div className="flex items-center gap-2">
              <GraduationCap className="w-6 h-6 text-orange-500" />
              <span>Formateurs certifiés</span>
            </div>
            <div className="flex items-center gap-2">
              <Globe className="w-6 h-6 text-orange-500" />
              <span>Expertise africaine</span>
            </div>
            <div className="flex items-center gap-2">
              <Briefcase className="w-6 h-6 text-orange-500" />
              <span>Expérience terrain</span>
            </div>
            <div className="flex items-center gap-2">
              <Heart className="w-6 h-6 text-orange-500" />
              <span>Passion éducation</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
