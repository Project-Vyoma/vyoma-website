"use client";

import Header from "@/components/header";
import Footer from "@/components/footer";
import Link from "next/link";
import Image from "next/image";
import Particles from "@/components/ui/Particles";
import { Sparkles } from "lucide-react";
import BlurText from "@/components/ui/BlurText";

export default function VTOLPage() {
  const stats = [
    { value: "45 min", label: "Flight Time", icon: "⏱️" },
    { value: "5km", label: "Max Range", icon: "📡" },
    { value: "2.5kg", label: "Total Weight", icon: "⚖️" },
    { value: "3 Modes", label: "Flight Modes", icon: "🔄" },
  ];

  const features = [
    { icon: "🎯", title: "No Runway Required", desc: "Takes off and lands vertically in spaces as small as 2x2 meters. Perfect for operations in confined or remote areas." },
    { icon: "⚡", title: "Extended Endurance", desc: "Fixed-wing flight provides 3x longer flight time compared to pure multicopters. Efficient for long-range missions." },
    { icon: "🤖", title: "Autonomous Operation", desc: "Fully autonomous mission planning with waypoint navigation, auto-takeoff, auto-land, and failsafe return-to-home." },
    { icon: "📡", title: "Advanced Sensors", desc: "Equipped with GPS, IMU, airspeed sensor, and barometer for precise flight control in all conditions." },
    { icon: "🎥", title: "Payload Capacity", desc: "500g payload capacity suitable for cameras, sensors, or other mission-specific equipment." },
    { icon: "🌐", title: "Long-Range Telemetry", desc: "433MHz telemetry system provides real-time flight data and control up to 5km range." },
  ];

  const flightModes = [
    {
      icon: "🚁",
      title: "Multicopter Mode",
      desc: "Vertical takeoff and landing using quad-rotor configuration. Stable hovering for precision maneuvers, loitering, and confined space operations."
    },
    {
      icon: "🔄",
      title: "Transition Mode",
      desc: "Smooth transition between multicopter and fixed-wing modes. Automated transition sequence with airspeed and altitude monitoring."
    },
    {
      icon: "✈️",
      title: "Fixed-Wing Mode",
      desc: "Efficient forward flight with extended range and endurance. Aerodynamic lift enables high-speed cruise and maximum flight time."
    }
  ];

  const challenges = [
    {
      challenge: "Transition Control",
      problem: "Achieving smooth and stable transition between hover and forward flight modes without losing altitude or control.",
      solution: "Developed custom transition algorithm that gradually increases forward motor thrust while reducing VTOL motor power. Airspeed sensor ensures adequate wing lift before full transition."
    },
    {
      challenge: "Weight Distribution",
      problem: "Balancing center of gravity for both hover stability and forward flight efficiency proved difficult.",
      solution: "Strategically positioned battery and electronics to achieve optimal CG. Conducted extensive testing in both flight modes to validate design."
    },
    {
      challenge: "Motor Cooling",
      problem: "VTOL motors experienced overheating during extended hover operations due to high current draw.",
      solution: "Added dedicated cooling ducts and selected motors with higher thermal margins. Implemented temperature monitoring with automatic power limiting."
    }
  ];

  const milestones = [
    { date: "March 2023", title: "Research & Planning", desc: "Comprehensive study of VTOL configurations. Selected tail-sitter design for optimal performance and simplicity." },
    { date: "April - May 2023", title: "CAD Design & Simulation", desc: "Completed 3D modeling and CFD analysis. Optimized wing design for both hover and forward flight efficiency." },
    { date: "June - August 2023", title: "Prototype Construction", desc: "Built first prototype using carbon fiber and foam composite. Integrated flight controller and completed electrical systems." },
    { date: "September 2023", title: "Hover Testing", desc: "Successfully achieved stable hover. Tuned PID controllers for optimal stability in multicopter mode." },
    { date: "October 2023 - Present", title: "Transition Testing", desc: "Developing and refining transition algorithms. Working towards fully autonomous mode transitions and waypoint navigation." },
  ];

  const applications = [
    { icon: "📸", title: "Aerial Surveying", desc: "Long-range mapping and surveying with vertical takeoff from confined locations." },
    { icon: "🔍", title: "Surveillance", desc: "Extended loitering time for monitoring and reconnaissance missions." },
    { icon: "📦", title: "Cargo Delivery", desc: "Efficient transport of small packages to remote or inaccessible areas." },
    { icon: "🌾", title: "Agricultural Monitoring", desc: "Crop health assessment and precision agriculture applications." },
  ];

  const galleryImages = [
    { src: null, alt: "VTOL Aircraft - Hover Mode" },
    { src: "/images/9.jpg", alt: "VTOL Testing" },
    { src: "/images/6.jpg", alt: "Flight Demonstration" },
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
                      text="Fixed-Wing"
                      delay={100}
                      animateBy="words"
                      direction="top"
                      className="text-white"
                    />
                    <BlurText
                      text="VTOL"
                      delay={150}
                      animateBy="words"
                      direction="top"
                      className="text-primary"
                    />
                  </div>
                </div>
                <div className="mb-8">
                  <BlurText
                    text="Hybrid Aircraft Combining Vertical Takeoff with Efficient Forward Flight"
                    delay={50}
                    animateBy="words"
                    direction="top"
                    className="text-xl md:text-2xl text-white/80 leading-relaxed"
                  />
                </div>
                
                <div className="flex flex-wrap gap-3 mb-8">
                  <span className="px-5 py-2.5 bg-primary/20 backdrop-blur-sm text-primary rounded-full text-sm font-medium border border-primary/30 hover:bg-primary/30 transition-all duration-300">VTOL</span>
                  <span className="px-5 py-2.5 bg-primary/20 backdrop-blur-sm text-primary rounded-full text-sm font-medium border border-primary/30 hover:bg-primary/30 transition-all duration-300">Autonomous</span>
                  <span className="px-5 py-2.5 bg-primary/20 backdrop-blur-sm text-primary rounded-full text-sm font-medium border border-primary/30 hover:bg-primary/30 transition-all duration-300">Advanced</span>
                </div>
              </div>
              
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent rounded-2xl blur-3xl"></div>
                <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-black/40 backdrop-blur-sm">
                  <img 
                    src="/images/vtol.jpg" 
                    alt="Fixed-Wing VTOL"
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
                The Fixed-Wing VTOL (Vertical Takeoff and Landing) represents the pinnacle of our engineering capabilities. This hybrid aircraft combines the vertical flight capabilities of a multirotor with the efficient forward flight characteristics of a fixed-wing aircraft.
              </p>
              <p>
                Our VTOL can take off and land in confined spaces like a helicopter, then transition to fixed-wing flight for extended range and endurance. This makes it ideal for surveillance, mapping, and long-range missions.
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
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Airframe */}
              <div className="bg-gradient-to-br from-black/60 to-black/40 border border-white/10 rounded-xl p-6 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/20 transition-all duration-300 group">
                <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center mb-4 group-hover:bg-primary/30 transition-colors">
                  <span className="text-2xl">✈️</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-5">Airframe</h3>
                <div className="space-y-4 text-sm">
                  <div>
                    <span className="text-white/50 text-xs uppercase tracking-wide">Wingspan</span>
                    <div className="text-white font-medium mt-1">1.8m</div>
                  </div>
                  <div>
                    <span className="text-white/50 text-xs uppercase tracking-wide">Length</span>
                    <div className="text-white font-medium mt-1">1.2m</div>
                  </div>
                  <div>
                    <span className="text-white/50 text-xs uppercase tracking-wide">Weight</span>
                    <div className="text-white font-medium mt-1">2.5kg (all-up)</div>
                  </div>
                  <div>
                    <span className="text-white/50 text-xs uppercase tracking-wide">Material</span>
                    <div className="text-white font-medium mt-1">Carbon fiber composite</div>
                  </div>
                  <div>
                    <span className="text-white/50 text-xs uppercase tracking-wide">Wing Area</span>
                    <div className="text-white font-medium mt-1">0.42 m²</div>
                  </div>
                </div>
              </div>

              {/* Propulsion System */}
              <div className="bg-gradient-to-br from-black/60 to-black/40 border border-white/10 rounded-xl p-6 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/20 transition-all duration-300 group">
                <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center mb-4 group-hover:bg-primary/30 transition-colors">
                  <span className="text-2xl">⚡</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-5">Propulsion System</h3>
                <div className="space-y-4 text-sm">
                  <div>
                    <span className="text-white/50 text-xs uppercase tracking-wide">VTOL Motors</span>
                    <div className="text-white font-medium mt-1">4x 1100KV brushless</div>
                  </div>
                  <div>
                    <span className="text-white/50 text-xs uppercase tracking-wide">Push Motor</span>
                    <div className="text-white font-medium mt-1">1x 1400KV brushless</div>
                  </div>
                  <div>
                    <span className="text-white/50 text-xs uppercase tracking-wide">Battery</span>
                    <div className="text-white font-medium mt-1">4S 5000mAh LiPo</div>
                  </div>
                  <div>
                    <span className="text-white/50 text-xs uppercase tracking-wide">Flight Time</span>
                    <div className="text-white font-medium mt-1">45 min (cruise)</div>
                  </div>
                  <div>
                    <span className="text-white/50 text-xs uppercase tracking-wide">Max Thrust</span>
                    <div className="text-white font-medium mt-1">6kg combined</div>
                  </div>
                </div>
              </div>

              {/* Flight Controller */}
              <div className="bg-gradient-to-br from-black/60 to-black/40 border border-white/10 rounded-xl p-6 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/20 transition-all duration-300 group">
                <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center mb-4 group-hover:bg-primary/30 transition-colors">
                  <span className="text-2xl">📡</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-5">Flight Controller</h3>
                <div className="space-y-4 text-sm">
                  <div>
                    <span className="text-white/50 text-xs uppercase tracking-wide">FC</span>
                    <div className="text-white font-medium mt-1">Pixhawk 4 with PX4</div>
                  </div>
                  <div>
                    <span className="text-white/50 text-xs uppercase tracking-wide">IMU</span>
                    <div className="text-white font-medium mt-1">3-axis gyro + accelerometer</div>
                  </div>
                  <div>
                    <span className="text-white/50 text-xs uppercase tracking-wide">GPS</span>
                    <div className="text-white font-medium mt-1">Dual GPS with compass</div>
                  </div>
                  <div>
                    <span className="text-white/50 text-xs uppercase tracking-wide">Sensors</span>
                    <div className="text-white font-medium mt-1">Airspeed, Barometer, Rangefinder</div>
                  </div>
                  <div>
                    <span className="text-white/50 text-xs uppercase tracking-wide">Telemetry</span>
                    <div className="text-white font-medium mt-1">433MHz long-range</div>
                  </div>
                </div>
              </div>

              {/* Performance */}
              <div className="bg-gradient-to-br from-black/60 to-black/40 border border-white/10 rounded-xl p-6 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/20 transition-all duration-300 group md:col-span-2 lg:col-span-1">
                <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center mb-4 group-hover:bg-primary/30 transition-colors">
                  <span className="text-2xl">🚀</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-5">Performance</h3>
                <div className="space-y-4 text-sm">
                  <div>
                    <span className="text-white/50 text-xs uppercase tracking-wide">Cruise Speed</span>
                    <div className="text-white font-medium mt-1">60 km/h</div>
                  </div>
                  <div>
                    <span className="text-white/50 text-xs uppercase tracking-wide">Max Speed</span>
                    <div className="text-white font-medium mt-1">90 km/h</div>
                  </div>
                  <div>
                    <span className="text-white/50 text-xs uppercase tracking-wide">Range</span>
                    <div className="text-white font-medium mt-1">Up to 5km</div>
                  </div>
                  <div>
                    <span className="text-white/50 text-xs uppercase tracking-wide">Ceiling</span>
                    <div className="text-white font-medium mt-1">500m AGL</div>
                  </div>
                  <div>
                    <span className="text-white/50 text-xs uppercase tracking-wide">Transition Time</span>
                    <div className="text-white font-medium mt-1">3-5 seconds</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Flight Modes */}
        <section className="py-24 px-4">
          <div className="container mx-auto max-w-7xl">
            <div className="text-center mb-16">
              <div className="inline-block mb-4">
                <span className="text-primary text-sm font-medium uppercase tracking-wider">Capabilities</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-headline font-bold text-white">Flight Modes</h2>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6">
              {flightModes.map((mode, i) => (
                <div 
                  key={i} 
                  className="bg-gradient-to-br from-black/60 to-black/40 border border-white/10 rounded-xl p-8 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/20 transition-all duration-300 group"
                >
                  <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">{mode.icon}</div>
                  <h3 className="text-2xl font-bold text-white mb-4">{mode.title}</h3>
                  <p className="text-white/70 leading-relaxed">{mode.desc}</p>
                </div>
              ))}
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

        {/* Key Features */}
        <section className="py-24 px-4">
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

        {/* Flight Demonstration */}
        <section className="py-24 px-4 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-primary/10 to-transparent"></div>
          <div className="container mx-auto max-w-5xl text-center relative z-10">
            <div className="inline-block mb-6">
              <div className="text-6xl mb-4">🎥</div>
            </div>
            <div className="inline-block mb-4">
              <span className="text-primary text-sm font-medium uppercase tracking-wider">Demonstration</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-headline font-bold text-white mb-6">
              Flight Demonstration
            </h2>
            <p className="text-white/80 text-lg mb-8 leading-relaxed max-w-3xl mx-auto">
              Watch our VTOL aircraft perform autonomous takeoff, transition, and landing sequences.
            </p>
            <div className="p-8 rounded-xl bg-black/40 border border-white/10 max-w-2xl mx-auto">
              <p className="text-white/60 italic">Flight demonstration video coming soon</p>
              <p className="text-white/40 text-sm mt-2">Currently editing footage from recent test flights</p>
            </div>
          </div>
        </section>

        {/* Potential Applications */}
        <section className="py-24 px-4">
          <div className="container mx-auto max-w-7xl">
            <div className="text-center mb-16">
              <div className="inline-block mb-4">
                <span className="text-primary text-sm font-medium uppercase tracking-wider">Applications</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-headline font-bold text-white">Potential Applications</h2>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {applications.map((app, i) => (
                <div 
                  key={i} 
                  className="bg-gradient-to-br from-black/60 to-black/40 border border-white/10 rounded-xl p-6 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/20 transition-all duration-300 group text-center"
                >
                  <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">{app.icon}</div>
                  <h3 className="text-xl font-bold text-white mb-3">{app.title}</h3>
                  <p className="text-white/70 text-sm leading-relaxed">{app.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Project Gallery */}
        <section className="py-24 px-4 bg-gradient-to-b from-white/5 via-white/10 to-white/5">
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
                  {img.src ? (
                    <>
                      <img 
                        src={img.src} 
                        alt={img.alt}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                        <span className="text-white text-sm font-medium">{img.alt}</span>
                      </div>
                    </>
                  ) : (
                    <div className="w-full h-full flex items-center justify-center">
                      <span className="text-white/50 text-sm font-medium">{img.alt}</span>
                    </div>
                  )}
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

