"use client";

import Header from "@/components/header";
import Footer from "@/components/footer";
import Particles from "@/components/ui/Particles";
import { Download, Check, ArrowRight, Award, Globe, Zap, Users, Briefcase, TrendingUp, Rocket, FileText, Building2, Sparkles } from "lucide-react";
import BlurText from "@/components/ui/BlurText";
import Link from "next/link";
import Image from "next/image";
import GlareHover from "@/components/ui/GlareHover";

export default function SponsorsPage() {
  const whyPartner = [
    {
      title: "Engineering Excellence",
      description: "Join hands with a team that has secured top positions in global aeromodelling competitions, including SAE Aero Design and AIAA Design/Build/Fly, demonstrating innovation and precision in UAV engineering.",
      icon: Award
    },
    {
      title: "Global Recognition",
      description: "Leverage the visibility of Project Vyoma at national and international aerospace events, ensuring brand exposure across industry leaders, academia, and technology enthusiasts worldwide.",
      icon: Globe
    },
    {
      title: "Cutting-Edge Research",
      description: "Support advancements in UAV technology, including solar-powered aircraft, autonomous gliders, and next-gen blended wing body designs—pushing the boundaries of aerospace innovation.",
      icon: Zap
    },
    {
      title: "Industry-Academia Collaboration",
      description: "Engage with some of India's brightest aerospace minds through workshops, technical discussions, and mentorship opportunities, fostering a seamless exchange of knowledge and expertise.",
      icon: Users
    },
    {
      title: "Talent Pipeline Access",
      description: "Gain exclusive access to a pool of highly skilled engineers specializing in aerodynamics, avionics, and UAV systems—perfect for scouting future industry leaders.",
      icon: Briefcase
    },
    {
      title: "Digital & Media Presence",
      description: "Enhance your brand's outreach through Project Vyoma's strong digital presence, with extensive media coverage, social media recognition, and event branding opportunities.",
      icon: TrendingUp
    }
  ];

  const amplifyInvestment = [
    {
      title: "Advanced R&D Integration",
      description: "Your support fuels groundbreaking research in autonomous UAVs, high-efficiency propulsion, and solar-powered aircraft, setting new benchmarks in aerospace innovation.",
      icon: Rocket
    },
    {
      title: "Access to Top Engineering Talent",
      description: "Collaborate with some of India's best aerospace engineers, offering internship & recruitment opportunities within an elite talent pool trained in multidisciplinary problem-solving.",
      icon: Users
    },
    {
      title: "Strategic Financial Utilization",
      description: "Your contributions drive materials acquisition, UAV fabrication, competition participation, and cutting-edge avionics testing, ensuring optimal resource allocation.",
      icon: TrendingUp
    },
    {
      title: "Innovation & Technology Partnerships",
      description: "Engage in joint research initiatives addressing real-world aerospace challenges, fostering cutting-edge solutions through collaborative development.",
      icon: Sparkles
    },
    {
      title: "Extensive Brand Visibility",
      description: "Your brand will be featured on UAVs, team apparel, competition banners, and digital platforms, reaching a global audience at high-profile aerospace events.",
      icon: Globe
    },
    {
      title: "Technology Demonstration at Competitions",
      description: "Leverage our participation in SAE Aero Design, AIAA Design/Build/Fly, and national UAV challenges as a launchpad to showcase your technologies to key industry stakeholders.",
      icon: Award
    }
  ];

  const partnershipBenefits = [
    { benefit: "Availability of Team for Presentation", bronze: false, silver: true, gold: true },
    { benefit: "Exclusive Video", bronze: false, silver: true, gold: true },
    { benefit: "Website Presence", bronze: true, silver: true, gold: true },
    { benefit: "Campus Ambassadors", bronze: false, silver: false, gold: true },
    { benefit: "Assistance in Workshops", bronze: false, silver: false, gold: true },
    { benefit: "Social Media Shout Out", bronze: true, silver: true, gold: true },
    { benefit: "CSR Tax Incentives (Section 80G)", bronze: true, silver: true, gold: true },
    { benefit: "Conduct Placement and Internships", bronze: false, silver: false, gold: true },
    { benefit: "Acknowledgement in Team Publications / Events", bronze: false, silver: false, gold: true },
    { benefit: "Social Media Collaborative Reels", bronze: false, silver: false, gold: true }
  ];

  const logoPlacement = [
    { size: "20 x 20cm Logo on Plane", bronze: false, silver: false, gold: true, count: "1 Logo" },
    { size: "15 x 15cm Logo on Plane", bronze: false, silver: true, gold: false, count: "1 Logo" },
    { size: "10 x 10cm Logo on Plane", bronze: true, silver: false, gold: false, count: "1 Logo" }
  ];

  const documents = [
    { name: "SPONSORSHIP PROPOSAL", link: "/Vyoma Sponsorship.pdf", icon: FileText },
    { name: "STRATEGIC CSR ADVANTAGES", link: "/Vyoma CSR.pdf", icon: Building2 },
    { name: "TEAM BROCHURE", link: "/VYOMA BROCHURE.pdf", icon: FileText }
  ];

  const currentSponsors = [
    {
      name: "SolidWorks",
      tier: "Gold",
      logo: "/images/Solidworks.jpg",
      description: "Leading CAD software provider supporting our design and engineering projects."
    },
    {
      name: "ANSYS",
      tier: "Gold",
      logo: "/images/Anysy.png",
      description: "Advanced simulation software enabling cutting-edge aerospace analysis."
    }
  ];

  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
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
                <span className="text-primary text-sm font-medium uppercase tracking-wider">Sponsorship</span>
              </div>
              <div className="mb-8">
                <div className="text-5xl md:text-7xl lg:text-8xl font-headline font-bold leading-tight flex flex-wrap justify-center items-center gap-2">
                  <BlurText
                    text="Sponsor"
                    delay={100}
                    animateBy="words"
                    direction="top"
                    className="text-primary"
                  />
                  <BlurText
                    text="Project Vyoma"
                    delay={150}
                    animateBy="words"
                    direction="top"
                    className="text-white"
                  />
                </div>
              </div>
              <div className="mb-12 max-w-4xl mx-auto">
                <BlurText
                  text="Support innovation in aerospace engineering and gain global brand visibility"
                  delay={50}
                  animateBy="words"
                  direction="top"
                  className="text-xl md:text-2xl text-white/80 leading-relaxed text-center"
                />
              </div>
              <div className="flex flex-wrap justify-center gap-4 text-sm text-white/60">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-primary"></div>
                  <span>Global Recognition</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-primary"></div>
                  <span>Brand Visibility</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-primary"></div>
                  <span>CSR Benefits</span>
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

        {/* Why Partner Section */}
        <section className="py-32 px-4 relative">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/5 to-transparent"></div>
          <div className="container mx-auto max-w-7xl relative">
            <div className="text-center mb-20">
              <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 backdrop-blur-sm">
                <Award className="w-4 h-4 text-primary" />
                <span className="text-primary text-sm font-medium uppercase tracking-wider">Benefits</span>
              </div>
              <h2 className="text-4xl md:text-6xl font-headline font-bold text-white mb-6">
                Why Partner with <span className="text-primary">Project Vyoma?</span>
              </h2>
              <p className="text-lg text-white/60 max-w-2xl mx-auto">
                Discover the unique advantages of partnering with India's premier aerospace engineering team
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {whyPartner.map((item, i) => {
                const Icon = item.icon;
                return (
                  <div key={i} className="h-full min-h-[300px]">
                    <GlareHover
                      width="100%"
                      height="100%"
                      background="transparent"
                      borderRadius="16px"
                      borderColor="rgba(255, 255, 255, 0.1)"
                      glareColor="#60A5FA"
                      glareOpacity={0.3}
                      glareAngle={-30}
                      glareSize={300}
                      transitionDuration={800}
                      playOnce={false}
                      className="group hover:scale-105 transition-transform duration-300 h-full"
                    >
                      <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 h-full">
                        <div className="w-14 h-14 rounded-xl bg-white/10 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500">
                          <Icon className="w-7 h-7 text-blue-400" />
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-blue-400 transition-colors duration-300">
                          {item.title}
                        </h3>
                        <p className="text-white/70 leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    </GlareHover>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* How We Amplify Your Investment */}
        <section className="py-32 px-4 bg-gradient-to-b from-white/5 via-white/10 to-white/5 relative">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(59,130,246,0.05),transparent_50%)]"></div>
          <div className="container mx-auto max-w-7xl relative">
            <div className="text-center mb-20">
              <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 backdrop-blur-sm">
                <Rocket className="w-4 h-4 text-primary" />
                <span className="text-primary text-sm font-medium uppercase tracking-wider">Value Proposition</span>
              </div>
              <h2 className="text-4xl md:text-6xl font-headline font-bold text-white mb-6">
                How We Amplify Your <span className="text-primary">Investment</span>
              </h2>
              <p className="text-lg text-white/60 max-w-2xl mx-auto">
                Your support drives innovation and creates lasting impact
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {amplifyInvestment.map((item, i) => {
                const Icon = item.icon;
                return (
                  <div key={i} className="h-full min-h-[300px]">
                    <GlareHover
                      width="100%"
                      height="100%"
                      background="transparent"
                      borderRadius="16px"
                      borderColor="rgba(255, 255, 255, 0.1)"
                      glareColor="#60A5FA"
                      glareOpacity={0.3}
                      glareAngle={-30}
                      glareSize={300}
                      transitionDuration={800}
                      playOnce={false}
                      className="group hover:scale-105 transition-transform duration-300 h-full"
                    >
                      <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 h-full">
                        <div className="w-14 h-14 rounded-xl bg-white/10 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500">
                          <Icon className="w-7 h-7 text-blue-400" />
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-blue-400 transition-colors duration-300">
                          {item.title}
                        </h3>
                        <p className="text-white/70 leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    </GlareHover>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Partnership Benefits Table */}
        <section className="py-32 px-4 relative">
          <div className="container mx-auto max-w-7xl">
            <div className="text-center mb-20">
              <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 backdrop-blur-sm">
                <Award className="w-4 h-4 text-primary" />
                <span className="text-primary text-sm font-medium uppercase tracking-wider">Partnership Tiers</span>
              </div>
              <h2 className="text-4xl md:text-6xl font-headline font-bold text-white mb-6">
                Partnership <span className="text-primary">Benefits</span>
              </h2>
              <p className="text-lg text-white/60 max-w-2xl mx-auto">
                Choose the tier that best fits your partnership goals
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-black/80 via-black/60 to-black/40 border border-white/10 rounded-2xl overflow-hidden shadow-2xl">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-white/10 bg-gradient-to-r from-primary/10 to-transparent">
                      <th className="text-left p-6 text-white font-semibold text-base">Deliverables</th>
                      <th className="text-center p-6">
                        <div className="flex flex-col items-center">
                          <span className="text-orange-400 font-bold text-lg">Bronze</span>
                          <span className="text-white/70 text-sm font-normal mt-1">₹25,000</span>
                        </div>
                      </th>
                      <th className="text-center p-6">
                        <div className="flex flex-col items-center">
                          <span className="text-gray-300 font-bold text-lg">Silver</span>
                          <span className="text-white/70 text-sm font-normal mt-1">₹50,000</span>
                        </div>
                      </th>
                      <th className="text-center p-6">
                        <div className="flex flex-col items-center">
                          <span className="text-yellow-400 font-bold text-lg">Gold</span>
                          <span className="text-white/70 text-sm font-normal mt-1">₹1,00,000</span>
                        </div>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {partnershipBenefits.map((item, i) => (
                      <tr key={i} className="border-b border-white/5 hover:bg-white/5 transition-colors group">
                        <td className="p-6 text-white/90 font-medium">{item.benefit}</td>
                        <td className="p-6 text-center">
                          {item.bronze && (
                            <div className="flex justify-center">
                              <Check className="w-6 h-6 text-orange-400 group-hover:scale-125 transition-transform" />
                            </div>
                          )}
                        </td>
                        <td className="p-6 text-center">
                          {item.silver && (
                            <div className="flex justify-center">
                              <Check className="w-6 h-6 text-gray-300 group-hover:scale-125 transition-transform" />
                            </div>
                          )}
                        </td>
                        <td className="p-6 text-center">
                          {item.gold && (
                            <div className="flex justify-center">
                              <Check className="w-6 h-6 text-yellow-400 group-hover:scale-125 transition-transform" />
                            </div>
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>

        {/* Premium Brand Visibility */}
        <section className="py-32 px-4 bg-gradient-to-b from-white/5 via-white/10 to-white/5 relative">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(59,130,246,0.05),transparent_50%)]"></div>
          <div className="container mx-auto max-w-7xl relative">
            <div className="text-center mb-20">
              <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 backdrop-blur-sm">
                <TrendingUp className="w-4 h-4 text-primary" />
                <span className="text-primary text-sm font-medium uppercase tracking-wider">Brand Visibility</span>
              </div>
              <h2 className="text-4xl md:text-6xl font-headline font-bold text-white mb-6">
                Premium Brand Visibility: <span className="text-primary">Logo Placement</span>
              </h2>
              <p className="text-lg text-white/60 max-w-2xl mx-auto">
                Maximize your brand exposure with strategic logo placement
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-black/80 via-black/60 to-black/40 border border-white/10 rounded-2xl overflow-hidden shadow-2xl">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-white/10 bg-gradient-to-r from-primary/10 to-transparent">
                      <th className="text-left p-6 text-white font-semibold text-base">Logo Size</th>
                      <th className="text-center p-6">
                        <div className="flex flex-col items-center">
                          <span className="text-orange-400 font-bold text-lg">Bronze</span>
                          <span className="text-white/70 text-sm font-normal mt-1">₹25,000</span>
                        </div>
                      </th>
                      <th className="text-center p-6">
                        <div className="flex flex-col items-center">
                          <span className="text-gray-300 font-bold text-lg">Silver</span>
                          <span className="text-white/70 text-sm font-normal mt-1">₹50,000</span>
                        </div>
                      </th>
                      <th className="text-center p-6">
                        <div className="flex flex-col items-center">
                          <span className="text-yellow-400 font-bold text-lg">Gold</span>
                          <span className="text-white/70 text-sm font-normal mt-1">₹1,00,000</span>
                        </div>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {logoPlacement.map((item, i) => (
                      <tr key={i} className="border-b border-white/5 hover:bg-white/5 transition-colors group">
                        <td className="p-6 text-white/90 font-medium">{item.size}</td>
                        <td className="p-6 text-center">
                          {item.bronze ? (
                            <span className="text-orange-400 font-semibold">{item.count}</span>
                          ) : (
                            <span className="text-white/30">—</span>
                          )}
                        </td>
                        <td className="p-6 text-center">
                          {item.silver ? (
                            <span className="text-gray-300 font-semibold">{item.count}</span>
                          ) : (
                            <span className="text-white/30">—</span>
                          )}
                        </td>
                        <td className="p-6 text-center">
                          {item.gold ? (
                            <span className="text-yellow-400 font-semibold">{item.count}</span>
                          ) : (
                            <span className="text-white/30">—</span>
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>

        {/* Essential Documents */}
        <section className="py-32 px-4 relative">
          <div className="container mx-auto max-w-7xl">
            <div className="text-center mb-20">
              <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 backdrop-blur-sm">
                <FileText className="w-4 h-4 text-primary" />
                <span className="text-primary text-sm font-medium uppercase tracking-wider">Resources</span>
              </div>
              <h2 className="text-4xl md:text-6xl font-headline font-bold text-white mb-6">
                Essential <span className="text-primary">Documents</span>
              </h2>
              <p className="text-lg text-white/60 max-w-2xl mx-auto">
                Download our comprehensive sponsorship materials
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {documents.map((doc, i) => {
                const Icon = doc.icon;
                return (
                  <div key={i} className="h-full min-h-[250px]">
                    <GlareHover
                      width="100%"
                      height="100%"
                      background="rgba(255, 255, 255, 0.05)"
                      borderRadius="16px"
                      borderColor="rgba(255, 255, 255, 0.1)"
                      glareColor="#60A5FA"
                      glareOpacity={0.3}
                      glareAngle={-30}
                      glareSize={300}
                      transitionDuration={800}
                      playOnce={false}
                      className="group hover:scale-105 transition-transform duration-300 h-full"
                    >
                      <a
                        href={doc.link}
                        download
                        target="_blank"
                        rel="noopener noreferrer"
                        className="backdrop-blur-sm rounded-xl p-8 h-full block w-full"
                      >
                        <div className="w-14 h-14 rounded-xl bg-white/10 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500">
                          <Icon className="w-7 h-7 text-blue-400" />
                        </div>
                        <div className="flex items-center justify-between mb-4">
                          <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors duration-300">
                            {doc.name}
                          </h3>
                          <Download className="w-6 h-6 text-blue-400 group-hover:scale-125 group-hover:translate-x-1 transition-transform duration-300" />
                        </div>
                        <p className="text-white/60 text-sm">Click to download</p>
                      </a>
                    </GlareHover>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Distinguished Industry Collaborators */}
        <section className="py-32 px-4 bg-gradient-to-b from-white/5 via-white/10 to-white/5 relative">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.05),transparent_50%)]"></div>
          <div className="container mx-auto max-w-7xl relative">
            <div className="text-center mb-20">
              <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 backdrop-blur-sm">
                <Building2 className="w-4 h-4 text-primary" />
                <span className="text-primary text-sm font-medium uppercase tracking-wider">Partners</span>
              </div>
              <h2 className="text-4xl md:text-6xl font-headline font-bold text-white mb-6">
                Distinguished Industry <span className="text-primary">Collaborators</span>
              </h2>
              <p className="text-lg text-white/60 max-w-2xl mx-auto">
                Proudly partnered with industry leaders
              </p>
            </div>
            
            <div className="flex flex-wrap justify-center items-center gap-8">
              {currentSponsors.map((sponsor, i) => (
                <div
                  key={i}
                  className="group relative bg-white border-2 border-white/30 rounded-2xl p-10 hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/20 transition-all duration-500 hover:-translate-y-2 min-w-[280px] flex items-center justify-center"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="relative w-full h-28 flex items-center justify-center">
                    <Image
                      src={sponsor.logo}
                      alt={sponsor.name}
                      width={240}
                      height={112}
                      className="object-contain max-h-24 w-auto group-hover:scale-105 transition-transform duration-500"
                      unoptimized
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section id="initiate-partnership" className="py-32 px-4 relative">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent"></div>
          <div className="container mx-auto max-w-5xl relative">
            <div className="bg-gradient-to-br from-black/90 via-black/70 to-black/60 border border-white/10 rounded-3xl p-12 md:p-16 text-center shadow-2xl relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-sky-300/10"></div>
              <div className="relative z-10">
                <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full bg-primary/20 border border-primary/30 backdrop-blur-sm">
                  <Sparkles className="w-4 h-4 text-primary" />
                  <span className="text-primary text-sm font-medium uppercase tracking-wider">Get Started</span>
                </div>
                <h2 className="text-4xl md:text-6xl font-headline font-bold text-white mb-6">
                  Elevate the Future of <span className="text-blue-400">Aerospace</span>
                </h2>
                <p className="text-xl text-white/80 mb-10 leading-relaxed max-w-2xl mx-auto">
                  Forge a prestigious alliance with Project Vyoma and redefine the boundaries of aerospace innovation
                </p>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-primary via-sky-300 to-primary bg-size-200 bg-pos-0 hover:bg-pos-100 text-white font-semibold rounded-xl transition-all duration-500 hover:shadow-[0_20px_40px_rgba(59,130,246,0.4)] hover:-translate-y-1 text-lg"
                >
                  Initiate Partnership
                  <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
