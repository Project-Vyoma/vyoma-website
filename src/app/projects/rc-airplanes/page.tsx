"use client";

import Header from "@/components/header";
import Footer from "@/components/footer";
import Link from "next/link";
import Image from "next/image";
import Particles from "@/components/ui/Particles";
import { Sparkles } from "lucide-react";
import BlurText from "@/components/ui/BlurText";

export default function RCAirplanesPage() {
  const stats = [
    { value: "15+", label: "Aircraft Built", icon: "✈️" },
    { value: "Top 20", label: "National Ranking", icon: "🏆" },
    { value: "500+", label: "Flight Hours", icon: "⏱️" },
    { value: "3+", label: "Competitions", icon: "🎯" },
  ];

  const features = [
    { icon: "🎯", title: "Precision Control", desc: "Advanced flight controller with GPS-assisted stabilization and autonomous waypoint navigation capabilities." },
    { icon: "⚡", title: "High Performance", desc: "Optimized aerodynamics with low-drag airfoils, achieving high speed and extended flight times." },
    { icon: "🔧", title: "Modular Design", desc: "Easy assembly/disassembly for transport and maintenance. Interchangeable components for different mission profiles." },
    { icon: "📡", title: "Telemetry System", desc: "Real-time data transmission including altitude, speed, battery status, and GPS coordinates." },
    { icon: "🎥", title: "FPV Capability", desc: "First-person view system with HD camera for immersive flying experience and aerial photography." },
    { icon: "🛡️", title: "Safety Features", desc: "Return-to-home functionality, low battery alarms, and geofencing to ensure safe operation." },
  ];

  const challenges = [
    {
      challenge: "Wing Structural Integrity",
      problem: "Initial designs suffered from wing flutter at high speeds due to insufficient rigidity.",
      solution: "Implemented carbon fiber spar reinforcement and optimized rib spacing. Conducted vibration analysis to identify resonant frequencies."
    },
    {
      challenge: "CG Balance",
      problem: "Achieving proper center of gravity was difficult with varying payload configurations.",
      solution: "Designed adjustable battery mounting system and added ballast compartments for fine-tuning weight distribution."
    },
    {
      challenge: "Landing Gear Durability",
      problem: "Original landing gear failed during hard landings on rough terrain.",
      solution: "Upgraded to spring-loaded landing gear with shock absorption. Added protective skid plates for belly landings."
    }
  ];

  const milestones = [
    { date: "August 2022", title: "Project Initiation", desc: "Team formation, research, and initial design concepts. Selected aircraft configuration and established project goals." },
    { date: "September 2022", title: "Design & CAD Modeling", desc: "Completed aerodynamic analysis using XFLR5. Finalized wing design with optimal airfoil selection (NACA 4412)." },
    { date: "October 2022", title: "First Prototype Build", desc: "Built and tested first prototype. Conducted ground tests and initial taxi trials. Achieved first successful flight." },
    { date: "February 2023", title: "Boeing IIT Competition", desc: "Secured Top 20 position out of 600+ teams in Round 2 of Boeing National Aeromodelling Competition at IIT Bombay." },
    { date: "2023 - Present", title: "Advanced Models", desc: "Development of advanced aircraft with autonomous capabilities, FPV systems, and improved aerodynamic efficiency." },
  ];

  const galleryImages = [
    { src: "/images/model1.jpg", alt: "RC Aircraft - Model 1" },
    { src: "/images/model2.jpg", alt: "RC Aircraft - Model 2" },
    { src: "/images/1.jpg", alt: "RC Aircraft - Assembly" },
    { src: "/images/4.jpg", alt: "RC Aircraft - Flight Testing" },
    { src: "/images/16.jpg", alt: "RC Aircraft - Final Build" },
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
                      text="RC Model"
                      delay={100}
                      animateBy="words"
                      direction="top"
                      className="text-white"
                    />
                    <BlurText
                      text="Airplanes"
                      delay={150}
                      animateBy="words"
                      direction="top"
                      className="text-primary"
                    />
                  </div>
                </div>
                <div className="mb-8">
                  <BlurText
                    text="Custom-Built Radio-Controlled Aircraft for Competition & Research"
                    delay={50}
                    animateBy="words"
                    direction="top"
                    className="text-xl md:text-2xl text-white/80 leading-relaxed"
                  />
                </div>
                
                <div className="flex flex-wrap gap-3 mb-8">
                  <span className="px-5 py-2.5 bg-primary/20 backdrop-blur-sm text-primary rounded-full text-sm font-medium border border-primary/30 hover:bg-primary/30 transition-all duration-300">Aerodynamics</span>
                  <span className="px-5 py-2.5 bg-primary/20 backdrop-blur-sm text-primary rounded-full text-sm font-medium border border-primary/30 hover:bg-primary/30 transition-all duration-300">Competition</span>
                  <span className="px-5 py-2.5 bg-primary/20 backdrop-blur-sm text-primary rounded-full text-sm font-medium border border-primary/30 hover:bg-primary/30 transition-all duration-300">R&D</span>
                </div>
              </div>
              
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent rounded-2xl blur-3xl"></div>
                <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-black/40 backdrop-blur-sm">
                  <img 
                    src="/images/rcairplane.jpg" 
                    alt="RC Model Airplane"
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

        {/* Stats Section */}
        <section className="py-20 px-4 border-y border-white/10 bg-gradient-to-b from-transparent via-white/5 to-transparent">
          <div className="container mx-auto max-w-6xl">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {stats.map((stat, i) => (
                <div 
                  key={i} 
                  className="text-center p-6 rounded-xl bg-black/40 border border-white/10 hover:border-primary/50 transition-all duration-300 hover:bg-black/60 group"
                >
                  <div className="text-4xl mb-3 group-hover:scale-110 transition-transform duration-300">{stat.icon}</div>
                  <div className="text-4xl md:text-5xl font-bold text-primary mb-2 group-hover:scale-105 transition-transform duration-300">{stat.value}</div>
                  <div className="text-white/60 text-sm uppercase tracking-wide">{stat.label}</div>
                </div>
              ))}
            </div>
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
                Project Vyoma specializes in designing, building, and flying custom RC airplanes. Our projects range from simple trainer aircraft to complex competition-grade models featuring advanced aerodynamics, autonomous flight capabilities, and precision control systems.
              </p>
              <p>
                We've successfully participated in national-level competitions, securing top positions and gaining recognition for our innovative designs and engineering excellence.
              </p>
            </div>
          </div>
        </section>

        {/* Technical Specifications */}
        <section className="py-24 px-4 bg-gradient-to-b from-white/5 via-white/10 to-white/5">
          <div className="container mx-auto max-w-7xl">
            <div className="text-center mb-16">
              <div className="inline-block mb-4">
                <span className="text-primary text-sm font-medium uppercase tracking-wider">Specifications</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-headline font-bold text-white">Technical Specifications</h2>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Airframe */}
              <div className="bg-gradient-to-br from-black/60 to-black/40 border border-white/10 rounded-xl p-6 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/20 transition-all duration-300 group">
                <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center mb-4 group-hover:bg-primary/30 transition-colors">
                  <span className="text-2xl">✈️</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-5">Airframe</h3>
                <div className="space-y-4 text-sm">
                  <div>
                    <span className="text-white/50 text-xs uppercase tracking-wide">Wingspan</span>
                    <div className="text-white font-medium mt-1">1.2m - 2.5m</div>
                  </div>
                  <div>
                    <span className="text-white/50 text-xs uppercase tracking-wide">Weight</span>
                    <div className="text-white font-medium mt-1">800g - 3.5kg</div>
                  </div>
                  <div>
                    <span className="text-white/50 text-xs uppercase tracking-wide">Material</span>
                    <div className="text-white font-medium mt-1">Balsa wood, Carbon fiber, EPP foam</div>
                  </div>
                  <div>
                    <span className="text-white/50 text-xs uppercase tracking-wide">Construction</span>
                    <div className="text-white font-medium mt-1">Semi-monocoque design</div>
                  </div>
                </div>
              </div>

              {/* Propulsion */}
              <div className="bg-gradient-to-br from-black/60 to-black/40 border border-white/10 rounded-xl p-6 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/20 transition-all duration-300 group">
                <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center mb-4 group-hover:bg-primary/30 transition-colors">
                  <span className="text-2xl">⚡</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-5">Propulsion</h3>
                <div className="space-y-4 text-sm">
                  <div>
                    <span className="text-white/50 text-xs uppercase tracking-wide">Motor</span>
                    <div className="text-white font-medium mt-1">Brushless DC, 900-2200KV</div>
                  </div>
                  <div>
                    <span className="text-white/50 text-xs uppercase tracking-wide">ESC</span>
                    <div className="text-white font-medium mt-1">30A - 60A with BEC</div>
                  </div>
                  <div>
                    <span className="text-white/50 text-xs uppercase tracking-wide">Battery</span>
                    <div className="text-white font-medium mt-1">3S - 4S LiPo, 2200-5000mAh</div>
                  </div>
                  <div>
                    <span className="text-white/50 text-xs uppercase tracking-wide">Propeller</span>
                    <div className="text-white font-medium mt-1">9-12 inch, variable pitch</div>
                  </div>
                </div>
              </div>

              {/* Avionics */}
              <div className="bg-gradient-to-br from-black/60 to-black/40 border border-white/10 rounded-xl p-6 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/20 transition-all duration-300 group">
                <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center mb-4 group-hover:bg-primary/30 transition-colors">
                  <span className="text-2xl">📡</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-5">Avionics</h3>
                <div className="space-y-4 text-sm">
                  <div>
                    <span className="text-white/50 text-xs uppercase tracking-wide">Flight Controller</span>
                    <div className="text-white font-medium mt-1">Pixhawk/Custom Arduino</div>
                  </div>
                  <div>
                    <span className="text-white/50 text-xs uppercase tracking-wide">Radio</span>
                    <div className="text-white font-medium mt-1">2.4GHz, 6-10 channel</div>
                  </div>
                  <div>
                    <span className="text-white/50 text-xs uppercase tracking-wide">Sensors</span>
                    <div className="text-white font-medium mt-1">GPS, IMU, Barometer</div>
                  </div>
                  <div>
                    <span className="text-white/50 text-xs uppercase tracking-wide">Telemetry</span>
                    <div className="text-white font-medium mt-1">Real-time data transmission</div>
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
                    <span className="text-white/50 text-xs uppercase tracking-wide">Max Speed</span>
                    <div className="text-white font-medium mt-1">80-120 km/h</div>
                  </div>
                  <div>
                    <span className="text-white/50 text-xs uppercase tracking-wide">Flight Time</span>
                    <div className="text-white font-medium mt-1">15-30 minutes</div>
                  </div>
                  <div>
                    <span className="text-white/50 text-xs uppercase tracking-wide">Range</span>
                    <div className="text-white font-medium mt-1">Up to 2km</div>
                  </div>
                  <div>
                    <span className="text-white/50 text-xs uppercase tracking-wide">Payload</span>
                    <div className="text-white font-medium mt-1">500g - 1.5kg</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Timeline & Milestones */}
        <section className="py-24 px-4">
          <div className="container mx-auto max-w-5xl">
            <div className="text-center mb-16">
              <div className="inline-block mb-4">
                <span className="text-primary text-sm font-medium uppercase tracking-wider">Journey</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-headline font-bold text-white">Timeline & Milestones</h2>
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

        {/* Key Features */}
        <section className="py-24 px-4 bg-gradient-to-b from-white/5 via-white/10 to-white/5">
          <div className="container mx-auto max-w-7xl">
            <div className="text-center mb-16">
              <div className="inline-block mb-4">
                <span className="text-primary text-sm font-medium uppercase tracking-wider">Features</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-headline font-bold text-white">Key Features & Capabilities</h2>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {features.map((feature, i) => (
                <div 
                  key={i} 
                  className="bg-gradient-to-br from-black/60 to-black/40 border border-white/10 rounded-xl p-6 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/20 transition-all duration-300 group"
                >
                  <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">{feature.icon}</div>
                  <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                  <p className="text-white/70 text-sm leading-relaxed">{feature.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Challenges & Solutions */}
        <section className="py-24 px-4">
          <div className="container mx-auto max-w-5xl">
            <div className="text-center mb-16">
              <div className="inline-block mb-4">
                <span className="text-primary text-sm font-medium uppercase tracking-wider">Engineering</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-headline font-bold text-white">Challenges & Solutions</h2>
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

        {/* Competition Achievement */}
        <section className="py-24 px-4 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-primary/10 to-transparent"></div>
          <div className="container mx-auto max-w-5xl text-center relative z-10">
            <div className="inline-block mb-6">
              <div className="text-6xl mb-4 animate-bounce">🏆</div>
            </div>
            <div className="inline-block mb-4">
              <span className="text-primary text-sm font-medium uppercase tracking-wider">Achievement</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-headline font-bold text-white mb-6">
              Boeing IIT: National Aeromodelling Competition
            </h2>
            <p className="text-white/80 text-lg mb-12 leading-relaxed max-w-3xl mx-auto">
              We secured a position in the Top 20 out of 600 competing teams in Round 2 of the Boeing National Aeromodelling Competition. This achievement stands as a testament to our dedication, teamwork, and relentless pursuit of excellence in aerospace engineering.
            </p>
            
            <div className="grid grid-cols-3 gap-6 max-w-2xl mx-auto">
              <div className="p-6 rounded-xl bg-black/40 border border-white/10 hover:border-primary/50 transition-all duration-300 group">
                <div className="text-4xl font-bold text-primary mb-2 group-hover:scale-110 transition-transform">600+</div>
                <div className="text-white/60 text-sm uppercase tracking-wide">Teams</div>
              </div>
              <div className="p-6 rounded-xl bg-black/40 border border-white/10 hover:border-primary/50 transition-all duration-300 group">
                <div className="text-4xl font-bold text-primary mb-2 group-hover:scale-110 transition-transform">Top 20</div>
                <div className="text-white/60 text-sm uppercase tracking-wide">Ranking</div>
              </div>
              <div className="p-6 rounded-xl bg-black/40 border border-white/10 hover:border-primary/50 transition-all duration-300 group">
                <div className="text-4xl font-bold text-primary mb-2 group-hover:scale-110 transition-transform">National</div>
                <div className="text-white/60 text-sm uppercase tracking-wide">Level</div>
              </div>
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
            
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
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
