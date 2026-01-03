"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { Card, CardContent } from "@/components/ui/card";
import { Users, Calendar, Trophy, Plane, Globe, GraduationCap, Sparkles } from "lucide-react";
import BlurText from "@/components/ui/BlurText";
import Particles from "@/components/ui/Particles";

export default function AboutPage() {
  const stats = [
    { icon: <Users className="w-8 h-8" />, label: "Active Members", value: "15+" },
    { icon: <Calendar className="w-8 h-8" />, label: "Years Active", value: "18", subtext: "Since 2007" },
    { icon: <Trophy className="w-8 h-8" />, label: "Awards Won", value: "20+" },
    { icon: <Plane className="w-8 h-8" />, label: "Aircraft Built", value: "25+" },
    { icon: <Globe className="w-8 h-8" />, label: "Competitions", value: "10+" },
    { icon: <GraduationCap className="w-8 h-8" />, label: "Alumni", value: "100+" },
  ];

  const journey = [
    { year: "2007", title: "Foundation", description: "Project Vyoma founded by seven passionate students at RV College of Engineering." },
    { year: "2008", title: "Vyoma-I Success", description: "Ranked 18th out of 40 teams at SAE Aero Design, USA. Our first international breakthrough." },
    { year: "2009", title: "Vyoma-II Achievement", description: "Secured 20th position out of 43 teams at SAE Aero Design Competition." },
    { year: "2011", title: "Vyoma-III Excellence", description: "Ranked 8th out of 17 teams. Received presidential certificate of appreciation from Smt. Pratibha Patil." },
    { year: "2013", title: "NASA Systems Engineering Award", description: "Won prestigious NASA award at SAE Aero Design West - Best among 75 teams worldwide. Received $750 prize." },
    { year: "2015", title: "AIAA DBF & AVC Success", description: "First Indian team to fly at AIAA DBF. 4th place at Sparkfun AVC with V.E.N.G.E.A.N.C.E." },
    { year: "2018", title: "Design Report Excellence", description: "Design report ranked 10th globally at DBF competition for dual-purpose aircraft." },
    { year: "2019", title: "Multi-Purpose Aircraft", description: "Design proposal placed 13th out of 140 international teams at DBF carrier operations challenge." },
    { year: "2020-21", title: "Virtual Competitions", description: "Continued participation through virtual DBF events during COVID-19 pandemic." },
    { year: "2023", title: "Boeing Competition Success", description: "Top 20 out of 600+ teams at Boeing IIT National Aeromodelling Competition." },
    { year: "2025", title: "Ongoing Innovation", description: "Developing advanced VTOL systems, autonomous aircraft, and competing at national level." },
  ];

  const [visibleItems, setVisibleItems] = useState<Set<number>>(new Set());
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);
  const observersRef = useRef<IntersectionObserver[]>([]);
  
  // Refs for content sections
  const whoWeAreRef = useRef<HTMLDivElement>(null);
  const whatWeDoRef = useRef<HTMLDivElement>(null);
  const missionRef = useRef<HTMLDivElement>(null);
  const historyRef = useRef<HTMLDivElement>(null);
  
  const [visibleSections, setVisibleSections] = useState<Set<string>>(new Set());

  // Timeline items observer
  useEffect(() => {
    // Wait for refs to be populated
    const timeoutId = setTimeout(() => {
      const observers: IntersectionObserver[] = [];

      itemRefs.current.forEach((ref, index) => {
        if (!ref) return;

        const observer = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                // Add a slight delay for stagger effect
                setTimeout(() => {
                  setVisibleItems((prev) => {
                    const newSet = new Set(prev);
                    newSet.add(index);
                    return newSet;
                  });
                }, index * 100);
                // Unobserve after it's visible to improve performance
                observer.unobserve(ref);
              }
            });
          },
          {
            threshold: 0.2,
            rootMargin: "0px 0px -100px 0px",
          }
        );

        observer.observe(ref);
        observers.push(observer);
      });

      observersRef.current = observers;
    }, 200);

    return () => {
      clearTimeout(timeoutId);
      observersRef.current.forEach((observer) => observer.disconnect());
      observersRef.current = [];
    };
  }, [journey.length]);

  // Content sections observer
  useEffect(() => {
    const sections = [
      { ref: whoWeAreRef, id: 'whoWeAre' },
      { ref: whatWeDoRef, id: 'whatWeDo' },
      { ref: missionRef, id: 'mission' },
      { ref: historyRef, id: 'history' },
    ];

    const observers: IntersectionObserver[] = [];

    sections.forEach(({ ref, id }) => {
      if (!ref.current) return;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setVisibleSections((prev) => {
                const newSet = new Set(prev);
                newSet.add(id);
                return newSet;
              });
              observer.unobserve(ref.current!);
            }
          });
        },
        {
          threshold: 0.2,
          rootMargin: "0px 0px -100px 0px",
        }
      );

      observer.observe(ref.current);
      observers.push(observer);
    });

    return () => {
      observers.forEach((observer) => observer.disconnect());
    };
  }, []);

  return (
    <div className="min-h-screen bg-black relative">
      {/* Particles Background */}
      <div className="fixed inset-0 w-full h-full z-[5] pointer-events-auto">
        <div style={{ width: '100%', height: '100vh', position: 'relative', pointerEvents: 'auto' }}>
          <Particles
            particleColors={['#ffffff', '#ffffff']}
            particleCount={100}
            particleSpread={10}
            speed={0.1}
            particleBaseSize={100}
            moveParticlesOnHover={true}
            alphaParticles={false}
            disableRotation={false}
          />
        </div>
      </div>
      
      <Header />
      <main className="relative z-10 pointer-events-auto">
        {/* Hero Section */}
        <section className="relative pt-32 pb-32 px-4 overflow-hidden">
          <div className="container mx-auto relative max-w-7xl">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 backdrop-blur-sm">
                <Sparkles className="w-4 h-4 text-primary" />
                <span className="text-primary text-sm font-medium uppercase tracking-wider">About Us</span>
              </div>
              <div className="mb-8">
                <div className="text-5xl md:text-7xl lg:text-8xl font-headline font-bold leading-tight flex flex-wrap justify-center items-center gap-2">
                  <BlurText
                    text="About"
                    delay={100}
                    animateBy="words"
                    direction="top"
                    className="text-white"
                  />
                  <BlurText
                    text="Project Vyoma"
                    delay={150}
                    animateBy="words"
                    direction="top"
                    className="text-primary"
                  />
                </div>
              </div>
              <div className="mb-12 max-w-4xl mx-auto">
                <BlurText
                  text="Pioneering excellence in aerospace engineering since 2007"
                  delay={50}
                  animateBy="words"
                  direction="top"
                  className="text-xl md:text-2xl text-white/80 leading-relaxed text-center"
                />
              </div>
              <div className="flex flex-wrap justify-center gap-4 text-sm text-white/60">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-primary"></div>
                  <span>18+ Years</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-primary"></div>
                  <span>25+ Aircraft</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-primary"></div>
                  <span>20+ Awards</span>
                </div>
              </div>
            </div>
          </div>
          {/* Scroll Indicator */}
          <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 z-10 animate-bounce">
            <button
              onClick={() => {
                const nextSection = document.querySelector('section:nth-of-type(2)');
                nextSection?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm border border-white/10 flex items-center justify-center hover:bg-primary/20 hover:border-primary/50 transition-all duration-300 group cursor-pointer"
              aria-label="Scroll to content"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 text-white group-hover:text-primary transition-colors">
                <path d="m6 9 6 6 6-6"></path>
              </svg>
            </button>
          </div>
        </section>

        <div className="container mx-auto px-4 relative z-10 pointer-events-auto">

        {/* Stats Section */}
        <section className="mb-24">
          <h2 className="text-3xl md:text-4xl font-headline font-bold text-white mb-12 text-center">
            Project Vyoma by the Numbers
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 text-center h-full hover:bg-white/10 hover:border-white/20 transition-all duration-300 group hover:scale-105"
              >
                <div className="flex justify-center mb-4 text-blue-400">
                  {stat.icon}
                </div>
                <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
                <div className="text-sm text-white/70">{stat.label}</div>
                {stat.subtext && (
                  <div className="text-xs text-white/50 mt-1">{stat.subtext}</div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Who We Are */}
        <section className="mb-32 py-16">
          <div
            ref={whoWeAreRef}
            className={`text-center transition-all duration-1000 ease-out ${
              visibleSections.has('whoWeAre')
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-12"
            }`}
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-headline font-bold text-white mb-12">
              Who We Are
            </h2>
            <p className="text-white/90 text-base md:text-lg leading-[1.8] max-w-4xl mx-auto font-light tracking-normal px-4">
              We are the aero-design team of RV College of Engineering. Started in 2007, we are one of the leading student projects in India, having won many national and international competitions and awards such as the NASA Systems Engineering Award.
            </p>
          </div>
        </section>

        {/* What We Do */}
        <section className="mb-32 py-16">
          <div
            ref={whatWeDoRef}
            className={`text-center transition-all duration-1000 ease-out ${
              visibleSections.has('whatWeDo')
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-12"
            }`}
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-headline font-bold text-white mb-12">
              What We Do
            </h2>
            <div className="space-y-6 text-white/90 text-base md:text-lg leading-[1.8] max-w-4xl mx-auto font-light tracking-normal px-4">
              <p>
                Carry out cutting edge research for development of Unmanned Aerial Vehicles. Ignite inquisitiveness and interest in young minds in Aerospace Engineering and help them along that path.
              </p>
              <p>
                Represent our country in numerous International competitions like SAE Aero-design, AIAA Design Build Fly & IMAV.
              </p>
            </div>
          </div>
        </section>

        {/* Our Mission */}
        <section className="mb-32 py-16">
          <div
            ref={missionRef}
            className={`text-center transition-all duration-1000 ease-out ${
              visibleSections.has('mission')
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-12"
            }`}
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-headline font-bold text-white mb-12">
              Our Mission
            </h2>
            <div className="bg-white/5 border border-white/10 rounded-xl p-8 md:p-10 max-w-4xl mx-auto backdrop-blur-sm hover:border-primary/30 transition-all duration-300 px-6">
              <p className="text-white/90 text-base md:text-lg leading-[1.8] font-light tracking-normal">
                To develop state of the art technologies in the field Autonomous Robotics, to accelerate the growth of the Aerospace domain by conceiving a Societal Drone Era, to Carry out R&D in Unmanned Aerial Vehicles, to perform custom advanced missions for societal use.
              </p>
            </div>
          </div>
        </section>

        {/* History */}
        <section className="mb-32 py-16">
          <div
            ref={historyRef}
            className={`text-center transition-all duration-1000 ease-out ${
              visibleSections.has('history')
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-12"
            }`}
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-headline font-bold text-white mb-12">
              History
            </h2>
            <div className="space-y-6 text-white/90 text-base md:text-lg leading-[1.8] max-w-4xl mx-auto font-light tracking-normal text-center px-4">
            <p>
              Project Vyoma was founded in 2007 by a group of seven students. Our big breakthrough occured when we took part in an international aerodesign competition in the USA, organized by the Society of Automotive Engineers (SAE). Our first project, Vyoma-I, was a success, and we ranked 18th out of 40 teams that participated in the event.
            </p>
            
            {/* YouTube Video - Vyoma-I */}
            <div className="my-8 rounded-lg overflow-hidden border border-gray-800/50 bg-black/40 backdrop-blur-sm hover:border-primary/50 transition-all duration-300">
              <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
                <iframe
                  className="absolute top-0 left-0 w-full h-full"
                  src="https://www.youtube.com/embed/fvLBWQWJb3s?si=nXS0akjgGK0Nwnqv"
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
            
            <p>
              Vyoma-II was our next project for the 2009 SAE Aero Design competition. We went on to secure the 20th position out of 43 teams that participated. We also showcased our aircraft at the 2011 Times Auto Expo at Palace Grounds, Bangalore.
            </p>
            
            {/* YouTube Video - Vyoma-II */}
            <div className="my-8 rounded-lg overflow-hidden border border-gray-800/50 bg-black/40 backdrop-blur-sm hover:border-primary/50 transition-all duration-300">
              <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
                <iframe
                  className="absolute top-0 left-0 w-full h-full"
                  src="https://www.youtube.com/embed/OCySn5WkKhQ?si=sFk-7lqw3-MRcJ8R"
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
            <p>
              In 2011, our next project Vyoma-III ranked 8th out of 17 teams in the SAE Aero Design competition. We were also awarded a certificate of appreciation for being the first and only team to represent India at the event by none other than then President of India, Smt. Pratibha Devsingh Patil. We showcased our aircraft at the 2009 and 2010 IIT-Madras Shaastra fests too.
            </p>
            <p>
              In 2013, we won the <span className="text-primary font-semibold">NASA Systems Engineering Award</span> at the SAE Aero Design West competition - the best among 75 teams from around the world. We received a $750 cash prize as well as a trophy from NASA. Our UAV was also featured as one of the top 24 innovations in the country by ET Now.
            </p>
            <p>
              In 2015, Project Vyoma participated in the 2015 Design/Build/Fly (DBF) event at Tucson, Arizon. We were officially the first Indian team to take off at an AIAA DBF event. Our entry was featured by some of the top newspapers in the country. The year concluded with us securing 4th place among 26 teams at the Sparkfun Autonomous Vehicle Competition at Niwot, Colorado. We presented V.E.N.G.E.A.N.C.E., capable of object detection and avoidance and autonomous navigation (without using GPS!). We were once again the only Indian team selected for the event.
            </p>
            <p>
              In 2018, we participated in the 2018 Design/Build/Fly (DBF) competition, requiring us to design a dual-purpose regional and business aircraft. Our design report was graded 10th globally.
            </p>
            
            {/* 2018 DBF Aircraft Image */}
            <div className="my-8 flex flex-col items-center">
              <div className="rounded-md overflow-hidden border border-gray-800/50 bg-black/40 backdrop-blur-sm hover:border-primary/50 transition-all duration-300 max-w-3xl w-full">
                <Image
                  src="/images/aircraft_2018.jpg"
                  alt="Our 2018 DBF aircraft"
                  width={1200}
                  height={800}
                  className="w-full h-auto object-cover rounded-md"
                  unoptimized
                />
              </div>
              <p className="text-white/70 text-sm mt-3 italic">Our 2018 DBF aircraft</p>
            </div>
            
            <p>
              In 2019, we participated in the 2019 DBF competition, where our design proposal placed 13th out of 140 international teams. This year the competition was more challenging as it required us to build a multi-purpose aircraft that simulates carrier operations.
            </p>
            <p>
              Over the coming years, we have continued to participate in these competitions. We participated in DBF 2020 and 2021, even though the events were held virtually due to the COVID-19 pandemic. That brings us to the present day. We would not have been able to achieve all this without the support of our college, our sponsors, and our crowd-funding campaigns.
            </p>
            </div>
          </div>
        </section>

        {/* Our Journey Timeline */}
        <section className="mb-24 py-24 px-4">
          <div className="container mx-auto max-w-5xl">
            <div className="text-center mb-16">
              <div className="inline-block mb-4">
                <span className="text-primary text-sm font-medium uppercase tracking-wider">Timeline</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-headline font-bold text-white">Our Journey</h2>
            </div>
            
            <div className="relative">
              <div className="space-y-12">
                {journey.map((item, index) => {
                  const isVisible = visibleItems.has(index);
                  return (
                    <div
                      key={index}
                      ref={(el) => {
                        if (el) {
                          itemRefs.current[index] = el;
                        }
                      }}
                      className={`relative flex items-start gap-6 group transition-all duration-1000 ease-out ${
                        isVisible
                          ? "opacity-100 translate-y-0 translate-x-0 scale-100"
                          : "opacity-0 translate-y-12 translate-x-8 scale-95"
                      }`}
                      style={{
                        transitionDelay: isVisible ? `${index * 100}ms` : "0ms",
                      }}
                    >
                      {/* Timeline dot */}
                      <div className={`flex-shrink-0 w-16 h-16 md:w-20 md:h-20 rounded-full bg-gradient-to-br from-primary/30 to-primary/10 border-2 border-primary flex items-center justify-center group-hover:scale-110 transition-all duration-500 relative z-10 shadow-[0_0_20px_rgba(96,165,250,0.3)] ${
                        isVisible ? "scale-100" : "scale-0"
                      }`}
                      style={{
                        transitionDelay: isVisible ? `${index * 100 + 200}ms` : "0ms",
                      }}>
                        <span className="text-white font-bold text-xs md:text-sm">{item.year}</span>
                        <div className="absolute inset-0 rounded-full bg-primary/20 animate-ping opacity-0 group-hover:opacity-100"></div>
                      </div>
                      
                      {/* Content */}
                      <div className="flex-1 pt-2 group-hover:translate-x-2 transition-transform duration-300">
                        <div className={`bg-gradient-to-br from-gray-900/50 to-black/80 backdrop-blur-sm border border-gray-800/50 rounded-xl p-6 hover:border-primary/50 transition-all duration-500 hover:shadow-[0_10px_30px_rgba(96,165,250,0.15)] ${
                          isVisible ? "shadow-[0_0_0_rgba(96,165,250,0)]" : ""
                        }`}>
                          <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-primary transition-colors">
                            {item.title}
                          </h3>
                          <p className="text-white/70 leading-relaxed">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}
