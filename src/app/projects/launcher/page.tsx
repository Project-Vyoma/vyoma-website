"use client";

import Header from "@/components/header";
import Footer from "@/components/footer";
import Link from "next/link";
import Image from "next/image";
import Particles from "@/components/ui/Particles";
import { Sparkles } from "lucide-react";
import BlurText from "@/components/ui/BlurText";

export default function LauncherPage() {
  const advantages = [
    { icon: "🎯", title: "Consistent Launches", desc: "Eliminates variability of hand launches. Every takeoff is identical, perfect for testing and competitions." },
    { icon: "🔧", title: "Adjustable Settings", desc: "Customize launch parameters for different aircraft weights, wing loadings, and flight conditions." },
    { icon: "📐", title: "Angle Control", desc: "Adjustable launch angle from 0-30° allows optimization for different aircraft types and weather conditions." },
    { icon: "🛡️", title: "Safety First", desc: "Remote operation keeps pilot at safe distance. Automated checks prevent accidental launches and equipment damage." },
  ];

  const whyLauncher = [
    "✅ Eliminates human error in launches",
    "✅ Provides consistent launch velocity",
    "✅ Enables precise launch angle control",
    "✅ Safer for high-performance aircraft",
    "✅ Repeatable testing conditions",
  ];

  const challenges = [
    {
      challenge: "Universal Mounting",
      problem: "Designing a mounting system compatible with aircraft of varying sizes and fuselage shapes.",
      solution: "Created adjustable cradle system with padded clamps and quick-release mechanism. Accommodates fuselage diameters from 30mm to 100mm."
    },
    {
      challenge: "Force Calibration",
      problem: "Determining optimal launch force for different aircraft weights without over-stressing airframes.",
      solution: "Integrated load cell sensors and developed calibration protocol. Created lookup table for recommended settings based on aircraft specifications."
    }
  ];

  const milestones = [
    { date: "January 2024", title: "Concept Development", desc: "Identified need for reliable launch system. Researched existing designs and analyzed requirements for our aircraft fleet." },
    { date: "February - March 2024", title: "Design Phase", desc: "Completed CAD modeling and structural analysis. Finalized mechanical design with focus on portability and ease of use." },
    { date: "April 2024", title: "Prototype Build", desc: "Fabricated first prototype using workshop facilities. Conducted initial tension and release mechanism tests." },
    { date: "May - June 2024", title: "Field Testing", desc: "Performed field tests with various aircraft models. Gathered data on launch consistency and reliability." },
    { date: "Current", title: "Optimization Phase", desc: "Refining design based on test results. Adding electronic controls and safety features for competition readiness." },
  ];

  const galleryImages = [
    { src: "/images/img1.jpg", alt: "Launcher Mechanism Design" },
    { src: "/images/14.jpg", alt: "Fabrication in Workshop" },
    { src: "/images/7.jpg", alt: "CAD Design Session" },
  ];

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
            <Link 
              href="/projects" 
              className="inline-flex items-center text-primary/80 hover:text-primary mb-8 transition-all duration-300 group"
            >
              <svg className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back to Projects
            </Link>
            
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 backdrop-blur-sm">
                  <Sparkles className="w-4 h-4 text-primary" />
                  <span className="text-primary text-sm font-medium uppercase tracking-wider">Project</span>
                </div>
                <div className="mb-6">
                  <div className="text-5xl md:text-7xl lg:text-8xl font-headline font-bold leading-tight flex flex-wrap items-center gap-2">
                    <BlurText
                      text="RC Airplane"
                      delay={100}
                      animateBy="words"
                      direction="top"
                      className="text-white"
                    />
                    <BlurText
                      text="Launcher"
                      delay={150}
                      animateBy="words"
                      direction="top"
                      className="text-primary"
                    />
                  </div>
                </div>
                <div className="mb-8">
                  <BlurText
                    text="Precision Launch System for Consistent & Reliable Takeoffs"
                    delay={50}
                    animateBy="words"
                    direction="top"
                    className="text-xl md:text-2xl text-white/80 leading-relaxed"
                  />
                </div>
                
                <div className="flex flex-wrap gap-3 mb-8">
                  <span className="px-5 py-2.5 bg-primary/20 backdrop-blur-sm text-primary rounded-full text-sm font-medium border border-primary/30 hover:bg-primary/30 transition-all duration-300">Mechanical Design</span>
                  <span className="px-5 py-2.5 bg-primary/20 backdrop-blur-sm text-primary rounded-full text-sm font-medium border border-primary/30 hover:bg-primary/30 transition-all duration-300">R&D</span>
                  <span className="px-5 py-2.5 bg-primary/20 backdrop-blur-sm text-primary rounded-full text-sm font-medium border border-primary/30 hover:bg-primary/30 transition-all duration-300">In Development</span>
                </div>
              </div>
              
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent rounded-2xl blur-3xl"></div>
                <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-black/40 backdrop-blur-sm">
                  <img 
                    src="/images/rclauncher.jpg" 
                    alt="RC Airplane Launcher"
                    className="w-full h-full object-cover"
                  />
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

        {/* Overview Section */}
        <section className="py-24 px-4">
          <div className="container mx-auto max-w-4xl">
            <div className="inline-block mb-4">
              <span className="text-primary text-sm font-medium uppercase tracking-wider">About</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-headline font-bold text-white mb-8">Overview</h2>
            <div className="space-y-6 text-white/80 leading-relaxed text-lg">
              <p>
                The RC Airplane Launcher is an innovative mechanical system designed to launch RC aircraft with precision, consistency, and safety. This project addresses the limitations of hand launches by providing a controlled takeoff mechanism suitable for various aircraft configurations.
              </p>
              <p>
                Our launcher features adjustable launch angles, variable thrust settings, and a reliable release mechanism that ensures stable and predictable launches every time.
              </p>
            </div>
          </div>
        </section>

        {/* Why a Launcher Section */}
        <section className="py-24 px-4 bg-gradient-to-b from-white/5 via-white/10 to-white/5">
          <div className="container mx-auto max-w-5xl">
            <div className="text-center mb-12">
              <div className="inline-block mb-4">
                <span className="text-primary text-sm font-medium uppercase tracking-wider">Benefits</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-headline font-bold text-white mb-8">Why a Launcher?</h2>
            </div>
            
            <div className="bg-gradient-to-br from-black/60 to-black/40 border border-white/10 rounded-xl p-8">
              <div className="grid md:grid-cols-2 gap-4">
                {whyLauncher.map((item, i) => (
                  <div key={i} className="flex items-center gap-3 text-white/90">
                    <span className="text-primary text-xl">{item.split(' ')[0]}</span>
                    <span>{item.substring(item.indexOf(' ') + 1)}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Technical Specifications */}
        <section className="py-24 px-4">
          <div className="container mx-auto max-w-7xl">
            <div className="text-center mb-16">
              <div className="inline-block mb-4">
                <span className="text-primary text-sm font-medium uppercase tracking-wider">Specifications</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-headline font-bold text-white">Technical Specifications</h2>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Mechanical System */}
              <div className="bg-gradient-to-br from-black/60 to-black/40 border border-white/10 rounded-xl p-6 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/20 transition-all duration-300 group">
                <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center mb-4 group-hover:bg-primary/30 transition-colors">
                  <span className="text-2xl">⚙️</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-5">Mechanical System</h3>
                <div className="space-y-4 text-sm">
                  <div>
                    <span className="text-white/50 text-xs uppercase tracking-wide">Launch Method</span>
                    <div className="text-white font-medium mt-1">Elastic catapult system</div>
                  </div>
                  <div>
                    <span className="text-white/50 text-xs uppercase tracking-wide">Frame</span>
                    <div className="text-white font-medium mt-1">Aluminum alloy construction</div>
                  </div>
                  <div>
                    <span className="text-white/50 text-xs uppercase tracking-wide">Rails</span>
                    <div className="text-white font-medium mt-1">3m carbon fiber tracks</div>
                  </div>
                  <div>
                    <span className="text-white/50 text-xs uppercase tracking-wide">Adjustability</span>
                    <div className="text-white font-medium mt-1">0-30° launch angle</div>
                  </div>
                </div>
              </div>

              {/* Performance */}
              <div className="bg-gradient-to-br from-black/60 to-black/40 border border-white/10 rounded-xl p-6 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/20 transition-all duration-300 group">
                <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center mb-4 group-hover:bg-primary/30 transition-colors">
                  <span className="text-2xl">🚀</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-5">Performance</h3>
                <div className="space-y-4 text-sm">
                  <div>
                    <span className="text-white/50 text-xs uppercase tracking-wide">Launch Speed</span>
                    <div className="text-white font-medium mt-1">10-25 m/s (adjustable)</div>
                  </div>
                  <div>
                    <span className="text-white/50 text-xs uppercase tracking-wide">Aircraft Weight</span>
                    <div className="text-white font-medium mt-1">500g - 5kg</div>
                  </div>
                  <div>
                    <span className="text-white/50 text-xs uppercase tracking-wide">Acceleration</span>
                    <div className="text-white font-medium mt-1">2-4G maximum</div>
                  </div>
                  <div>
                    <span className="text-white/50 text-xs uppercase tracking-wide">Setup Time</span>
                    <div className="text-white font-medium mt-1">Under 5 minutes</div>
                  </div>
                </div>
              </div>

              {/* Control System */}
              <div className="bg-gradient-to-br from-black/60 to-black/40 border border-white/10 rounded-xl p-6 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/20 transition-all duration-300 group">
                <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center mb-4 group-hover:bg-primary/30 transition-colors">
                  <span className="text-2xl">🎮</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-5">Control System</h3>
                <div className="space-y-4 text-sm">
                  <div>
                    <span className="text-white/50 text-xs uppercase tracking-wide">Trigger</span>
                    <div className="text-white font-medium mt-1">Electronic release mechanism</div>
                  </div>
                  <div>
                    <span className="text-white/50 text-xs uppercase tracking-wide">Tension Control</span>
                    <div className="text-white font-medium mt-1">Winch with load cell</div>
                  </div>
                  <div>
                    <span className="text-white/50 text-xs uppercase tracking-wide">Safety</span>
                    <div className="text-white font-medium mt-1">Automated pre-launch checks</div>
                  </div>
                  <div>
                    <span className="text-white/50 text-xs uppercase tracking-wide">Interface</span>
                    <div className="text-white font-medium mt-1">Wireless remote control</div>
                  </div>
                </div>
              </div>

              {/* Portability */}
              <div className="bg-gradient-to-br from-black/60 to-black/40 border border-white/10 rounded-xl p-6 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/20 transition-all duration-300 group">
                <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center mb-4 group-hover:bg-primary/30 transition-colors">
                  <span className="text-2xl">📦</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-5">Portability</h3>
                <div className="space-y-4 text-sm">
                  <div>
                    <span className="text-white/50 text-xs uppercase tracking-wide">Weight</span>
                    <div className="text-white font-medium mt-1">15kg (disassembled)</div>
                  </div>
                  <div>
                    <span className="text-white/50 text-xs uppercase tracking-wide">Transport</span>
                    <div className="text-white font-medium mt-1">Modular 3-piece design</div>
                  </div>
                  <div>
                    <span className="text-white/50 text-xs uppercase tracking-wide">Dimensions</span>
                    <div className="text-white font-medium mt-1">3m x 0.5m x 0.8m (assembled)</div>
                  </div>
                  <div>
                    <span className="text-white/50 text-xs uppercase tracking-wide">Power</span>
                    <div className="text-white font-medium mt-1">12V battery operated</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Development Timeline */}
        <section className="py-24 px-4 bg-gradient-to-b from-white/5 via-white/10 to-white/5">
          <div className="container mx-auto max-w-5xl">
            <div className="text-center mb-16">
              <div className="inline-block mb-4">
                <span className="text-primary text-sm font-medium uppercase tracking-wider">Journey</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-headline font-bold text-white">Development Timeline</h2>
            </div>
            
            <div className="relative">
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-primary/50 to-transparent hidden md:block"></div>
              <div className="space-y-12">
                {milestones.map((milestone, i) => (
                  <div key={i} className="relative flex gap-8 group">
                    <div className="flex-shrink-0 w-16 h-16 rounded-full bg-gradient-to-br from-primary/30 to-primary/10 border-2 border-primary flex items-center justify-center group-hover:scale-110 transition-transform duration-300 relative z-10">
                      <div className="w-3 h-3 rounded-full bg-primary"></div>
                    </div>
                    <div className="flex-1 pb-12 group-hover:translate-x-2 transition-transform duration-300">
                      <div className="text-primary font-semibold mb-2 text-sm uppercase tracking-wide">{milestone.date}</div>
                      <h3 className="text-2xl font-bold text-white mb-3">{milestone.title}</h3>
                      <p className="text-white/70 leading-relaxed">{milestone.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Key Advantages */}
        <section className="py-24 px-4">
          <div className="container mx-auto max-w-7xl">
            <div className="text-center mb-16">
              <div className="inline-block mb-4">
                <span className="text-primary text-sm font-medium uppercase tracking-wider">Advantages</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-headline font-bold text-white">Key Advantages</h2>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {advantages.map((advantage, i) => (
                <div 
                  key={i} 
                  className="bg-gradient-to-br from-black/60 to-black/40 border border-white/10 rounded-xl p-6 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/20 transition-all duration-300 group"
                >
                  <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">{advantage.icon}</div>
                  <h3 className="text-xl font-bold text-white mb-3">{advantage.title}</h3>
                  <p className="text-white/70 text-sm leading-relaxed">{advantage.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Engineering Challenges */}
        <section className="py-24 px-4 bg-gradient-to-b from-white/5 via-white/10 to-white/5">
          <div className="container mx-auto max-w-5xl">
            <div className="text-center mb-16">
              <div className="inline-block mb-4">
                <span className="text-primary text-sm font-medium uppercase tracking-wider">Engineering</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-headline font-bold text-white">Engineering Challenges</h2>
            </div>
            
            <div className="space-y-6">
              {challenges.map((item, i) => (
                <div 
                  key={i} 
                  className="bg-gradient-to-br from-black/60 to-black/40 border border-white/10 rounded-xl p-8 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/20 transition-all duration-300 group"
                >
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-10 h-10 rounded-lg bg-red-500/20 flex items-center justify-center flex-shrink-0 group-hover:bg-red-500/30 transition-colors">
                      <span className="text-xl">⚠️</span>
                    </div>
                    <h3 className="text-2xl font-bold text-white">Challenge: {item.challenge}</h3>
                  </div>
                  <div className="ml-14 space-y-4">
                    <div className="p-4 rounded-lg bg-white/5 border border-white/10">
                      <p className="text-white/90 leading-relaxed">
                        <span className="font-semibold text-white">Problem: </span>
                        {item.problem}
                      </p>
                    </div>
                    <div className="p-4 rounded-lg bg-primary/10 border border-primary/30">
                      <p className="text-primary/90 leading-relaxed">
                        <span className="font-semibold text-primary">✓ Solution: </span>
                        {item.solution}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Project Gallery */}
        <section className="py-24 px-4">
          <div className="container mx-auto max-w-7xl">
            <div className="text-center mb-16">
              <div className="inline-block mb-4">
                <span className="text-primary text-sm font-medium uppercase tracking-wider">Gallery</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-headline font-bold text-white">Project Gallery</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {galleryImages.map((img, i) => (
                <div 
                  key={i} 
                  className="relative aspect-square rounded-xl overflow-hidden bg-white/5 border border-white/10 group cursor-pointer hover:border-primary/50 transition-all duration-300"
                >
                  <img 
                    src={img.src} 
                    alt={img.alt}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                    <span className="text-white text-sm font-medium">{img.alt}</span>
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

