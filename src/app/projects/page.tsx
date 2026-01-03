"use client";

import Header from "@/components/header";
import Footer from "@/components/footer";
import ScrollStack, { ScrollStackItem } from "@/components/ui/ScrollStack";
import Particles from "@/components/ui/Particles";
import Image from "next/image";
import Link from "next/link";
import { Sparkles } from "lucide-react";
import BlurText from "@/components/ui/BlurText";

export default function ProjectsPage() {
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
                <span className="text-primary text-sm font-medium uppercase tracking-wider">Projects</span>
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
                    text="Projects"
                    delay={150}
                    animateBy="words"
                    direction="top"
                    className="text-white"
                  />
                </div>
              </div>
              <div className="mb-12 max-w-4xl mx-auto">
                <BlurText
                  text="Innovative aerospace solutions pushing the boundaries of autonomous flight and aerial technology"
                  delay={50}
                  animateBy="words"
                  direction="top"
                  className="text-xl md:text-2xl text-white/80 leading-relaxed"
                />
              </div>
              <div className="flex flex-wrap justify-center gap-4 text-sm text-white/60">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-primary"></div>
                  <span>Innovation</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-primary"></div>
                  <span>Excellence</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-primary"></div>
                  <span>Cutting-Edge</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section className="container mx-auto px-4">
          {/* ScrollStack */}
          <ScrollStack useWindowScroll={true} className="bg-black">
          <Link href="/projects/rc-airplanes">
            <ScrollStackItem>
              <div className="flex flex-col md:flex-row gap-8 items-center h-full cursor-pointer group">
                <div className="flex-1">
                  <h2 className="text-3xl md:text-4xl font-headline font-bold text-white mb-3 group-hover:text-primary transition-colors">
                    RC Model Airplanes
                  </h2>
                  <p className="text-primary/80 text-sm mb-4 font-medium uppercase tracking-wide">
                    RC Model Airplanes - Project Vyoma Project
                  </p>
                  <p className="text-white/80 text-base leading-relaxed">
                    We design and builds radio-controlled (RC) model airplanes for competitions and recreational flying.
                  </p>
                  <p className="text-white/70 text-base leading-relaxed mt-3">
                    We use advanced materials and manufacturing techniques to optimize the performance of our aircraft.
                  </p>
                  <div className="mt-4 text-primary/80 text-sm font-medium group-hover:text-primary transition-colors">
                    Learn more →
                  </div>
                </div>
                <div className="flex-1 w-full md:w-auto flex items-center justify-center">
                  <div className="relative w-full max-w-md h-48 md:h-56 rounded-lg overflow-hidden bg-white/5 border border-white/10 group-hover:border-primary/50 transition-colors">
                    <img 
                      src="/images/rcairplane.jpg" 
                      alt="RC Model Airplane" 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                </div>
              </div>
            </ScrollStackItem>
          </Link>

          <Link href="/projects/vtol">
            <ScrollStackItem>
              <div className="flex flex-col md:flex-row gap-8 items-center h-full cursor-pointer group">
                <div className="flex-1">
                  <h2 className="text-3xl md:text-4xl font-headline font-bold text-white mb-3 group-hover:text-primary transition-colors">
                    Fixed-Wing VTOL
                  </h2>
                  <p className="text-primary/80 text-sm mb-4 font-medium uppercase tracking-wide">
                    Fixed-Wing VTOL - Project Vyoma Project
                  </p>
                  <p className="text-white/80 text-base leading-relaxed">
                    A vertical takeoff and landing (VTOL) aircraft that can transition between hovering and forward flight.
                  </p>
                  <p className="text-white/70 text-base leading-relaxed mt-3">
                    It is designed to be a versatile platform for various applications, including aerial photography, surveillance, and package delivery.
                  </p>
                  <div className="mt-4 text-primary/80 text-sm font-medium group-hover:text-primary transition-colors">
                    Learn more →
                  </div>
                </div>
                <div className="flex-1 w-full md:w-auto flex items-center justify-center">
                  <div className="relative w-full max-w-md h-48 md:h-56 rounded-lg overflow-hidden bg-white/5 border border-white/10 group-hover:border-primary/50 transition-colors">
                    <img 
                      src="/images/vtol.jpg" 
                      alt="Fixed-Wing VTOL" 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                </div>
              </div>
            </ScrollStackItem>
          </Link>

          <Link href="/projects/launcher">
            <ScrollStackItem>
              <div className="flex flex-col md:flex-row gap-8 items-center h-full cursor-pointer group">
                <div className="flex-1">
                  <h2 className="text-3xl md:text-4xl font-headline font-bold text-white mb-3 group-hover:text-primary transition-colors">
                    RC Airplane Launcher
                  </h2>
                  <p className="text-primary/80 text-sm mb-4 font-medium uppercase tracking-wide">
                    RC Airplane Launcher - Project Vyoma Project
                  </p>
                  <p className="text-white/80 text-base leading-relaxed">
                    A device that launches RC model airplanes into the air with ease.
                  </p>
                  <p className="text-white/70 text-base leading-relaxed mt-3">
                    It is designed to provide a consistent and reliable launch. Compared to hand launching, it is less difficult and unpredictable.
                  </p>
                  <div className="mt-4 text-primary/80 text-sm font-medium group-hover:text-primary transition-colors">
                    Learn more →
                  </div>
                </div>
                <div className="flex-1 w-full md:w-auto flex items-center justify-center">
                  <div className="relative w-full max-w-md h-48 md:h-56 rounded-lg overflow-hidden bg-white/5 border border-white/10 group-hover:border-primary/50 transition-colors">
                    <img 
                      src="/images/rclauncher.jpg" 
                      alt="RC Airplane Launcher" 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                </div>
              </div>
            </ScrollStackItem>
          </Link>
          </ScrollStack>
        </section>
      </main>
      <Footer />
    </div>
  );
}
