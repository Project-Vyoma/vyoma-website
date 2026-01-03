"use client";

import Header from "@/components/header";
import Footer from "@/components/footer";
import Particles from "@/components/ui/Particles";
import { Sparkles, Trophy } from "lucide-react";
import BlurText from "@/components/ui/BlurText";

interface AchievementCard {
  title: string;
  description: string;
  label: string;
  image: string;
  imageAlt: string;
}

const achievementCards: AchievementCard[] = [
  {
    title: 'BOEING Aeromodelling IITM',
    description: 'Stood in the top 20 of the Boeing National Aeromodelling Competition. This stands as a testament to our relentless pursuit of excellence.',
    label: 'Top 20',
      image: '/images/boeing.png',
    imageAlt: 'BOEING Aeromodelling Competition'
  },
  {
    title: 'Air Crash Investigation',
    description: 'Our 8th mile event, a testament to the commitment to safer skies, and an opportunity to fortify the foundations of aviation safety worldwide.',
    label: '8th Mile',
      image: '/images/aci.jpg',
    imageAlt: 'Air Crash Investigation'
  },
  {
    title: 'NACDEC',
    description: 'All three teams from Project Vyoma stood in the top 10%. The objective was to design an aircraft capable of carrying and dropping a heavy payload.',
    label: 'Top 10%',
      image: '/images/nacdec.png',
    imageAlt: 'NACDEC Competition'
  },
  {
    title: 'Aerodominator 7.0',
    description: 'Developed a remote-controlled aircraft capable of carrying medical supplies. Stood in the 8th and 13th positions.',
    label: '8th & 13th',
      image: '/images/guppy.png',
    imageAlt: 'Aerodominator 7.0'
  },
  {
    title: 'DBF 2019',
    description: 'Designed a multi-purpose aircraft supporting carrier operations with specific design parameters. Stood in the 41st position out of 113 teams.',
    label: '41st/113',
      image: '/images/dbf.png',
    imageAlt: 'DBF 2019 Competition'
  },
  {
    title: 'Wings of Wonder',
    description: 'Wings of Wonder is a program aiming to expose young students to the world of model aircraft, sowing the seeds of interest at a young age.',
    label: 'Education',
      image: '/images/wow.jpg',
    imageAlt: 'Wings of Wonder Program'
  },
  {
    title: 'Skysparks Techkriti',
    description: 'Designed an aircraft suitable for crop dusting, firefighting, surveying, and medicinal cargo deliveries.',
    label: 'Multi-Purpose',
      image: '/images/skysparks.png',
    imageAlt: 'Skysparks Techkriti'
  },
  {
    title: 'Jain Fixed Wing UAV Competition',
    description: 'Honored with the Best Performer award at the Jain University National Aero Modelling Competition, showcasing exceptional skill and innovation.',
    label: 'Best Performer',
      image: '/images/Jain.jpg',
    imageAlt: 'Jain Fixed Wing UAV Competition'
  },
  {
    title: 'IIT Bombay Techfest National Aeromodelling Competition',
    description: 'Two teams secured positions in the top 25 among 300+ competing teams. The mechanisms were made for carrying and precisely dropping balls.',
    label: 'Top 25',
      image: '/images/iitbombay.png',
    imageAlt: 'IIT Bombay Techfest'
  }
];

export default function AchievementsPage() {
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
                <span className="text-primary text-sm font-medium uppercase tracking-wider">Achievements</span>
              </div>
              <div className="mb-8">
                <div className="text-5xl md:text-7xl lg:text-8xl font-headline font-bold leading-tight flex flex-wrap justify-center items-center gap-2">
                  <BlurText
                    text="Our"
                    delay={100}
                    animateBy="words"
                    direction="top"
                    className="text-primary"
                  />
                  <BlurText
                    text="Achievements"
                    delay={150}
                    animateBy="words"
                    direction="top"
                    className="text-white"
                  />
                </div>
              </div>
              <div className="mb-12 max-w-4xl mx-auto">
                <BlurText
                  text="Celebrating milestones, awards, and recognition in aerospace engineering excellence"
                  delay={50}
                  animateBy="words"
                  direction="top"
                  className="text-xl md:text-2xl text-white/80 leading-relaxed"
                />
              </div>
              <div className="flex flex-wrap justify-center gap-4 text-sm text-white/60">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-primary"></div>
                  <span>20+ Awards</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-primary"></div>
                  <span>Top Rankings</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-primary"></div>
                  <span>Global Recognition</span>
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

        {/* Achievements Grid Section */}
        <section className="py-12 px-4 pb-24">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {achievementCards.map((achievement, index) => (
                <div
                  key={index}
                  className="group relative bg-gradient-to-br from-gray-900/50 to-black/80 backdrop-blur-sm border border-gray-800/50 rounded-xl overflow-hidden hover:border-primary/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(96,165,250,0.15)]"
                >
                  {/* Achievement Image with Desaturated Background Effect */}
                  <div className="relative w-full min-h-[300px] overflow-hidden flex items-center justify-center bg-gray-900/50">
                    <img
                      src={achievement.image}
                      alt={achievement.imageAlt}
                      className="w-full h-auto max-h-[400px] object-contain grayscale group-hover:grayscale-0 transition-all duration-500"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.style.display = 'none';
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                    {/* Label Badge */}
                    <div className="absolute bottom-3 left-3 bg-black/60 backdrop-blur-sm px-3 py-1.5 rounded-md border border-white/10">
                      <span className="text-xs font-semibold text-white">{achievement.label}</span>
                    </div>
                  </div>
                  
                  {/* Content Section */}
                  <div className="p-5">
                    <h3 className="text-lg font-semibold text-white mb-2 text-center leading-tight">
                      {achievement.title}
                    </h3>
                    <p className="text-xs text-white/70 leading-relaxed text-center">
                      {achievement.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
