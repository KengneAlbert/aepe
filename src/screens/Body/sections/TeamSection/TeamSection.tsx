import { useEffect, useRef } from "react";
import { GraduationCap, Globe, Briefcase, Heart } from "lucide-react";
import { Card, CardContent } from "../../../../components/ui/card";
import { Badge } from "../../../../components/ui/badge";
import { Linkedin } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Founder from "../../../../assets/stephanie1.jpg";
import Image1 from "../../../../assets/img1.jpg";
import Image2 from "../../../../assets/img2.jpg";
import Image3 from "../../../../assets/img3.jpg";
import Image4 from "../../../../assets/img4.jpg";

gsap.registerPlugin(ScrollTrigger);

const teamMembers = [
  {
    name: "Stéphanie Mbida",
    role: "Fondatrice & Formatrice",
    image: Founder,
    speciality: "Éducation Financière & Animation",
    experience: "10+ ans d'expertise",
    description:
      "Créatrice de la chaîne 'Parlons de Business', elle anime personnellement des sessions live avec les enfants pour transmettre sa passion de l'entrepreneuriat et bâtir une génération financièrement intelligente en Afrique.",
    linkedin: "#",
  },
  {
    name: "Dr. Kwame ",
    role: "Directeur Pédagogique",
    image: Image2,
    speciality: "Ingénierie Pédagogique",
    experience: "15 ans d'expérience",
    description:
      "Conçoit des programmes éducatifs adaptés aux réalités culturelles et économiques africaines.",
    linkedin: "#",
  },
  {
    name: "Aissatou Sow",
    role: "Psychologue de l'Enfant",
    image: Image4,
    speciality: "Développement Cognitif",
    experience: "10 ans d'expérience",
    description:
      "Veille à ce que chaque module soit parfaitement adapté à la maturité émotionnelle de l'enfant.",
    linkedin: "#",
  },
  {
    name: "Omar Diop",
    role: "Expert Gamification",
    image: Image3,
    speciality: "Engagement Ludique",
    experience: "12 ans d'expérience",
    description:
      "Transforme les concepts financiers complexes en aventures captivantes et mémorables.",
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
    <section className="relative w-full py-10 sm:py-20 lg:py-32 bg-gray-50 overflow-hidden">
      {/* Background image avec overlay */}
      <div className="absolute inset-0 opacity-[0.08]">
        <img
          src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=1920&q=80&fm=webp"
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

        {/* Team Grid - Bento Layout */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-6 lg:gap-8 auto-rows-fr">
          {teamMembers.map((member, index) => {
            // Bento Grid Logic
            const isLarge = index === 0;
            const isWide = index === 1;

            return (
              <Card
                key={index}
                ref={(el) => (cardsRef.current[index] = el)}
                className={`group overflow-hidden rounded-3xl shadow-lg hover:shadow-2xl border-0 transition-all duration-500 hover:-translate-y-2 flex flex-col ${
                  isLarge
                    ? "md:col-span-2 md:row-span-2"
                    : isWide
                    ? "md:col-span-2"
                    : "md:col-span-1"
                }`}
              >
                <CardContent className="p-0 flex flex-col h-full">
                  {/* Image */}
                  <div
                    className={`relative overflow-hidden ${
                      isLarge ? "h-full min-h-[500px]" : "h-64"
                    }`}
                  >
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      onError={(e) => {
                        e.currentTarget.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(
                          member.name
                        )}&size=400&background=random`;
                      }}
                    />
                    <div
                      className={`absolute inset-0 bg-gradient-to-t ${
                        isLarge
                          ? "from-black/90 via-black/40 to-transparent opacity-80"
                          : "from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-40"
                      } transition-opacity duration-500`}
                    ></div>

                    {/* LinkedIn Icon */}
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="absolute top-4 right-4 w-10 h-10 bg-white/20 backdrop-blur-md border border-white/30 rounded-full flex items-center justify-center text-white hover:bg-white hover:text-orange-600 transition-all duration-300"
                    >
                      <Linkedin className="w-5 h-5" />
                    </a>

                    {/* Overlay Content for Bento Style */}
                    <div
                      className={`absolute bottom-0 left-0 w-full p-6 text-white transform ${
                        isLarge
                          ? "translate-y-0"
                          : "translate-y-2 group-hover:translate-y-0"
                      } transition-transform duration-500`}
                    >
                      <Badge className="bg-orange-500/90 hover:bg-orange-600 border-0 text-white mb-3 backdrop-blur-sm">
                        {member.role}
                      </Badge>
                      <h3
                        className={`font-bold text-white mb-2 ${
                          isLarge ? "text-3xl md:text-4xl" : "text-xl"
                        }`}
                      >
                        {member.name}
                      </h3>
                      <p className="text-white/80 text-sm line-clamp-2 mb-2">
                        {member.speciality}
                      </p>

                      {isLarge && (
                        <div className="mt-4 max-w-xl">
                          <p className="text-white/90 text-base md:text-lg leading-relaxed mb-4">
                            {member.description}
                          </p>
                          <div className="flex items-center gap-3">
                            <Badge
                              variant="outline"
                              className="border-white/30 text-white bg-white/10 backdrop-blur-md"
                            >
                              {member.experience}
                            </Badge>
                            <div className="flex items-center gap-2 text-orange-300 font-medium text-sm">
                              <span>En savoir plus</span>
                              <Briefcase className="w-4 h-4" />
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Content Details - Hidden for Large Card */}
                  {!isLarge && (
                    <div className="p-6 bg-white flex-grow flex flex-col justify-between">
                      <div>
                        <div className="flex items-center gap-2 mb-4">
                          <Badge
                            variant="outline"
                            className="border-orange-200 text-orange-700 bg-orange-50"
                          >
                            {member.experience}
                          </Badge>
                        </div>
                        <p className="text-gray-600 text-sm leading-relaxed">
                          {member.description}
                        </p>
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Call to action */}
        <div className="mt-16 text-center">
          <p className="text-gray-600 text-lg mb-6">
            Une équipe dédiée pour{" "}
            <strong className="text-orange-600">accompagner vos enfants</strong>{" "}
            vers l'autonomie financière
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
