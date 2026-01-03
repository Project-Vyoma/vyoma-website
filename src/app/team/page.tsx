"use client";

import { useState } from "react";
import Header from "@/components/header";
import Footer from "@/components/footer";
import Particles from "@/components/ui/Particles";
import { Sparkles, Users } from "lucide-react";
import BlurText from "@/components/ui/BlurText";

interface TeamMember {
  name: string;
  role: string;
  image?: string;
  linkedin?: string;
  github?: string;
  email?: string;
}

const captainsAndAdvisor: TeamMember[] = [
  { 
    name: "Sarthak Sharma and Likhit A Nayaka",
    role: "Captains", 
    image: "/images/WhatsApp Image 2026-01-03 at 4.41.18 PM (1).jpeg",
    linkedin: "https://linkedin.com",
    email: "captain1@projectvyoma.com"
  },
  { 
    name: "Dr Ravindra S Kulkarni",
    role: "Advisor", 
    image: "/images/WhatsApp Image 2026-01-03 at 4.41.18 PM.jpeg",
    linkedin: "https://linkedin.com",
    email: "advisor1@projectvyoma.com"
  }
];

const technicalLeads: TeamMember[] = [
  { 
    name: "Sarthak Sharma",
    role: "Aerodynamics Lead", 
    image: "/images/WhatsApp Image 2026-01-03 at 4.41.24 PM.jpeg",
    linkedin: "https://linkedin.com",
    email: "techlead1@projectvyoma.com"
  },
  { 
    name: "Venkatesh Shenoy",
    role: "Structures lead and flight engineer", 
    image: "/images/WhatsApp Image 2026-01-03 at 4.41.23 PM (2).jpeg",
    linkedin: "https://linkedin.com",
    email: "techlead2@projectvyoma.com"
  },
  { 
    name: "Ajith PN",
    role: "Structures Lead", 
    image: "/images/WhatsApp Image 2026-01-03 at 4.41.23 PM (1).jpeg",
    linkedin: "https://linkedin.com",
    email: "techlead3@projectvyoma.com"
  },
  { 
    name: "Likhit A Nayaka",
    role: "Manufacturing Lead", 
    image: "/images/WhatsApp Image 2026-01-03 at 4.41.23 PM.jpeg",
    linkedin: "https://linkedin.com",
    email: "techlead4@projectvyoma.com"
  },
  { 
    name: "Manodnya Korishetty",
    role: "Manufacturing Lead", 
    image: "/images/WhatsApp Image 2026-01-03 at 4.41.22 PM (3).jpeg",
    linkedin: "https://linkedin.com",
    email: "techlead5@projectvyoma.com"
  },
  { 
    name: "Sarvika",
    role: "Avionics and DBF Lead", 
    image: "/images/WhatsApp Image 2026-01-03 at 4.41.22 PM (2).jpeg",
    linkedin: "https://linkedin.com",
    email: "techlead6@projectvyoma.com"
  },
  { 
    name: "Pranathi",
    role: "Avionics  Lead", 
    image: "/images/WhatsApp Image 2026-01-03 at 4.41.22 PM (1).jpeg",
    linkedin: "https://linkedin.com",
    email: "techlead7@projectvyoma.com"
  },
  { 
    name: "Yash Saraogi",
    role: "Flight Engineer and intelligent systems lead", 
    image: "/images/WhatsApp Image 2026-01-03 at 4.41.22 PM.jpeg",
    linkedin: "https://linkedin.com",
    email: "techlead8@projectvyoma.com"
  }
];

const nonTechnicalLeads: TeamMember[] = [
  { 
    name: "Rajdeep singh",
    role: "social media Lead", 
    image: "/images/WhatsApp Image 2026-01-03 at 4.41.21 PM (2).jpeg",
    linkedin: "https://linkedin.com",
    email: "nontechlead1@projectvyoma.com"
  },
  { 
    name: "Yadamreddy Navneeth",
    role: "Social media Lead", 
    image: "/images/WhatsApp Image 2026-01-03 at 4.41.21 PM (1).jpeg",
    linkedin: "https://linkedin.com",
    email: "nontechlead2@projectvyoma.com"
  },
  { 
    name: "Shivansh Singh",
    role: "Sonsorship, finance and budgeting Lead", 
    image: "/images/WhatsApp Image 2026-01-03 at 4.41.21 PM.jpeg",
    linkedin: "https://linkedin.com",
    email: "nontechlead3@projectvyoma.com"
  },
  { 
    name: "Sarthak Sharma",
    role: "Sponsorship Lead", 
    image: "/images/WhatsApp Image 2026-01-03 at 4.41.20 PM (2).jpeg",
    linkedin: "https://linkedin.com",
    email: "nontechlead4@projectvyoma.com"
  },
  { 
    name: "Sarvika",
    role: "Finance and budgetting Lead", 
    image: "/images/WhatsApp Image 2026-01-03 at 4.41.20 PM (1).jpeg",
    linkedin: "https://linkedin.com",
    email: "nontechlead5@projectvyoma.com"
  },
  { 
    name: "Likhit A Nayaka",
    role: "Procurement and inventory Lead", 
    image: "/images/WhatsApp Image 2026-01-03 at 4.41.20 PM.jpeg",
    linkedin: "https://linkedin.com",
    email: "nontechlead6@projectvyoma.com"
  },
  { 
    name: "Manodnya Korishetty",
    role: "Procurement and inventory Lead", 
    image: "/images/WhatsApp Image 2026-01-03 at 4.41.19 PM (1).jpeg",
    linkedin: "https://linkedin.com",
    email: "nontechlead7@projectvyoma.com"
  },
  { 
    name: "Tallam Sri Sai Subramanyam",
    role: "Web Development Lead", 
    image: "/images/WhatsApp Image 2026-01-03 at 4.41.19 PM.jpeg",
    linkedin: "https://linkedin.com",
    email: "nontechlead8@projectvyoma.com"
  }
];

export default function TeamPage() {
  const [activeTab, setActiveTab] = useState<'technical' | 'nonTechnical'>('technical');
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
                <span className="text-primary text-sm font-medium uppercase tracking-wider">Team</span>
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
                    text="Team"
                    delay={150}
                    animateBy="words"
                    direction="top"
                    className="text-white"
                  />
                </div>
              </div>
              <div className="mb-12 max-w-4xl mx-auto">
                <BlurText
                  text="Meet the dedicated individuals behind Project Vyoma who work to foster innovation and excellence in aerospace engineering."
                  delay={50}
                  animateBy="words"
                  direction="top"
                  className="text-xl md:text-2xl text-white/80 leading-relaxed"
                />
              </div>
              <div className="flex flex-wrap justify-center gap-4 text-sm text-white/60">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-primary"></div>
                  <span>15+ Members</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-primary"></div>
                  <span>Expertise</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-primary"></div>
                  <span>Innovation</span>
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

        {/* Captains and Advisor Section */}
        <section className="py-12 px-4">
          <div className="container mx-auto">
            <h2 className="text-3xl md:text-4xl font-headline font-bold text-white mb-12 text-center">
              Captains and <span className="text-primary">Advisor</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {captainsAndAdvisor.map((member, index) => (
                <div
                  key={index}
                  className="group relative bg-gradient-to-br from-gray-900/50 to-black/80 backdrop-blur-sm border border-gray-800/50 rounded-xl overflow-hidden hover:border-primary/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(96,165,250,0.15)]"
                >
                  {/* Portrait Image with Desaturated Background Effect */}
                  <div className="relative w-full h-[300px] overflow-hidden bg-gray-900">
                    {member.image ? (
                      <>
                        <img
                          src={member.image}
                          alt={member.name}
                          className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                          onError={(e) => {
                            const target = e.target as HTMLImageElement;
                            target.style.display = 'none';
                          }}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                      </>
                    ) : (
                      <div className="w-full h-full bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
                        <span className="text-5xl font-bold text-primary">
                          {member.name.charAt(0)}
                        </span>
                      </div>
                    )}
                    {/* Year Indicator */}
                    <div className="absolute bottom-3 left-3 bg-black/60 backdrop-blur-sm px-2 py-1 rounded-md border border-white/10">
                      <span className="text-xs font-medium text-white">2025</span>
                    </div>
                  </div>
                  
                  {/* Content Section */}
                  <div className="p-5">
                    <h3 className="text-lg font-semibold text-white mb-1 text-center">
                      {member.name}
                    </h3>
                    <p className="text-xs text-white/70 leading-relaxed text-center mb-4">
                      {member.role}
                    </p>
                    
                    {/* Social Media Icons */}
                    <div className="flex justify-center gap-3">
                      <a
                        href={member.linkedin || "#"}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-9 h-9 rounded-full bg-gray-800/50 border border-gray-700/50 flex items-center justify-center hover:bg-primary/20 hover:border-primary/50 transition-all duration-300 group/icon"
                      >
                        <svg className="w-4 h-4 text-white group-hover/icon:text-primary transition-colors" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                        </svg>
                      </a>
                      <a
                        href={`mailto:${member.email || "#"}`}
                        className="w-9 h-9 rounded-full bg-gray-800/50 border border-gray-700/50 flex items-center justify-center hover:bg-primary/20 hover:border-primary/50 transition-all duration-300 group/icon"
                      >
                        <svg className="w-4 h-4 text-white group-hover/icon:text-primary transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Technical Leads / Non Technical Leads Section with Tabs */}
        <section className="py-12 px-4">
          <div className="container mx-auto">
            {/* Tab Navigation */}
            <div className="flex justify-center gap-4 mb-12">
              <button
                onClick={() => setActiveTab('technical')}
                className={`px-6 py-3 text-lg font-semibold transition-all duration-300 ${
                  activeTab === 'technical'
                    ? 'text-primary border-b-2 border-primary'
                    : 'text-white/60 hover:text-white'
                }`}
              >
                Technical Leads
              </button>
              <button
                onClick={() => setActiveTab('nonTechnical')}
                className={`px-6 py-3 text-lg font-semibold transition-all duration-300 ${
                  activeTab === 'nonTechnical'
                    ? 'text-primary border-b-2 border-primary'
                    : 'text-white/60 hover:text-white'
                }`}
              >
                Non Technical Leads
              </button>
            </div>

            {/* Tab Content */}
            {activeTab === 'technical' && (
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {technicalLeads.map((lead, index) => (
                <div
                  key={index}
                  className="group relative bg-gradient-to-br from-gray-900/50 to-black/80 backdrop-blur-sm border border-gray-800/50 rounded-xl overflow-hidden hover:border-primary/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(96,165,250,0.15)]"
                >
                  {/* Portrait Image with Desaturated Background Effect */}
                  <div className="relative w-full h-[300px] overflow-hidden bg-gray-900">
                    {lead.image ? (
                      <>
                        <img
                          src={lead.image}
                          alt={lead.name}
                          className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                          onError={(e) => {
                            const target = e.target as HTMLImageElement;
                            target.style.display = 'none';
                          }}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                      </>
                    ) : (
                      <div className="w-full h-full bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
                        <span className="text-5xl font-bold text-primary">
                          {lead.name.charAt(0)}
                        </span>
                      </div>
                    )}
                    {/* Year Indicator */}
                    <div className="absolute bottom-3 left-3 bg-black/60 backdrop-blur-sm px-2 py-1 rounded-md border border-white/10">
                      <span className="text-xs font-medium text-white">2025</span>
                    </div>
                  </div>
                  
                  {/* Content Section */}
                  <div className="p-5">
                    <h3 className="text-lg font-semibold text-white mb-1 text-center">
                      {lead.name}
                    </h3>
                    <p className="text-xs text-white/70 leading-relaxed text-center mb-4">
                      {lead.role}
                    </p>
                    
                    {/* Social Media Icons */}
                    <div className="flex justify-center gap-3">
                      <a
                        href={lead.linkedin || "#"}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-9 h-9 rounded-full bg-gray-800/50 border border-gray-700/50 flex items-center justify-center hover:bg-primary/20 hover:border-primary/50 transition-all duration-300 group/icon"
                      >
                        <svg className="w-4 h-4 text-white group-hover/icon:text-primary transition-colors" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                        </svg>
                      </a>
                      <a
                        href={`mailto:${lead.email || "#"}`}
                        className="w-9 h-9 rounded-full bg-gray-800/50 border border-gray-700/50 flex items-center justify-center hover:bg-primary/20 hover:border-primary/50 transition-all duration-300 group/icon"
                      >
                        <svg className="w-4 h-4 text-white group-hover/icon:text-primary transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            )}

            {activeTab === 'nonTechnical' && (
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {nonTechnicalLeads.map((lead, index) => (
                <div
                  key={index}
                  className="group relative bg-gradient-to-br from-gray-900/50 to-black/80 backdrop-blur-sm border border-gray-800/50 rounded-xl overflow-hidden hover:border-primary/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(96,165,250,0.15)]"
                >
                  {/* Portrait Image with Desaturated Background Effect */}
                  <div className="relative w-full h-[300px] overflow-hidden bg-gray-900">
                    {lead.image ? (
                      <>
                        <img
                          src={lead.image}
                          alt={lead.name}
                          className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                          onError={(e) => {
                            const target = e.target as HTMLImageElement;
                            target.style.display = 'none';
                          }}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                      </>
                    ) : (
                      <div className="w-full h-full bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
                        <span className="text-5xl font-bold text-primary">
                          {lead.name.charAt(0)}
                        </span>
                      </div>
                    )}
                    {/* Year Indicator */}
                    <div className="absolute bottom-3 left-3 bg-black/60 backdrop-blur-sm px-2 py-1 rounded-md border border-white/10">
                      <span className="text-xs font-medium text-white">2025</span>
                    </div>
                  </div>
                  
                  {/* Content Section */}
                  <div className="p-5">
                    <h3 className="text-lg font-semibold text-white mb-1 text-center">
                      {lead.name}
                    </h3>
                    <p className="text-xs text-white/70 leading-relaxed text-center mb-4">
                      {lead.role}
                    </p>
                    
                    {/* Social Media Icons */}
                    <div className="flex justify-center gap-3">
                      <a
                        href={lead.linkedin || "#"}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-9 h-9 rounded-full bg-gray-800/50 border border-gray-700/50 flex items-center justify-center hover:bg-primary/20 hover:border-primary/50 transition-all duration-300 group/icon"
                      >
                        <svg className="w-4 h-4 text-white group-hover/icon:text-primary transition-colors" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                        </svg>
                      </a>
                      <a
                        href={`mailto:${lead.email || "#"}`}
                        className="w-9 h-9 rounded-full bg-gray-800/50 border border-gray-700/50 flex items-center justify-center hover:bg-primary/20 hover:border-primary/50 transition-all duration-300 group/icon"
                      >
                        <svg className="w-4 h-4 text-white group-hover/icon:text-primary transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              ))}
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
