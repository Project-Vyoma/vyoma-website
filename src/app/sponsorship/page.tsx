"use client";

import Header from "@/components/header";
import Footer from "@/components/footer";
import Particles from "@/components/ui/Particles";
import { Download, Check, ArrowRight } from "lucide-react";

export default function SponsorshipPage() {
  const whyPartner = [
    {
      title: "Engineering Excellence",
      description: "Join hands with a team that has secured top positions in global aeromodelling competitions, including SAE Aero Design and AIAA Design/Build/Fly, demonstrating innovation and precision in UAV engineering."
    },
    {
      title: "Global Recognition",
      description: "Leverage the visibility of Project Vyoma at national and international aerospace events, ensuring brand exposure across industry leaders, academia, and technology enthusiasts worldwide."
    },
    {
      title: "Cutting-Edge Research",
      description: "Support advancements in UAV technology, including solar-powered aircraft, autonomous gliders, and next-gen blended wing body designs—pushing the boundaries of aerospace innovation."
    },
    {
      title: "Industry-Academia Collaboration",
      description: "Engage with some of India's brightest aerospace minds through workshops, technical discussions, and mentorship opportunities, fostering a seamless exchange of knowledge and expertise."
    },
    {
      title: "Talent Pipeline Access",
      description: "Gain exclusive access to a pool of highly skilled engineers specializing in aerodynamics, avionics, and UAV systems—perfect for scouting future industry leaders."
    },
    {
      title: "Digital & Media Presence",
      description: "Enhance your brand's outreach through Project Vyoma's strong digital presence, with extensive media coverage, social media recognition, and event branding opportunities."
    }
  ];

  const amplifyInvestment = [
    {
      title: "Advanced R&D Integration",
      description: "Your support fuels groundbreaking research in autonomous UAVs, high-efficiency propulsion, and solar-powered aircraft, setting new benchmarks in aerospace innovation."
    },
    {
      title: "Access to Top Engineering Talent",
      description: "Collaborate with some of India's best aerospace engineers, offering internship & recruitment opportunities within an elite talent pool trained in multidisciplinary problem-solving."
    },
    {
      title: "Strategic Financial Utilization",
      description: "Your contributions drive materials acquisition, UAV fabrication, competition participation, and cutting-edge avionics testing, ensuring optimal resource allocation."
    },
    {
      title: "Innovation & Technology Partnerships",
      description: "Engage in joint research initiatives addressing real-world aerospace challenges, fostering cutting-edge solutions through collaborative development."
    },
    {
      title: "Extensive Brand Visibility",
      description: "Your brand will be featured on UAVs, team apparel, competition banners, and digital platforms, reaching a global audience at high-profile aerospace events."
    },
    {
      title: "Technology Demonstration at Competitions",
      description: "Leverage our participation in SAE Aero Design, AIAA Design/Build/Fly, and national UAV challenges as a launchpad to showcase your technologies to key industry stakeholders."
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
    { name: "SPONSORSHIP PROPOSAL", link: "#" },
    { name: "STRATEGIC CSR ADVANTAGES", link: "#" },
    { name: "TEAM BROCHURE", link: "#" }
  ];

  const collaborators = [
    { name: "SolidWorks", logo: "/images/solidworks-logo.png" },
    { name: "ANSYS", logo: "/images/ansys-logo.png" }
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
        <section className="relative pt-32 pb-24 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent"></div>
          <div className="container mx-auto relative max-w-7xl">
            <div className="text-center mb-16">
              <div className="inline-block mb-4">
                <span className="text-primary text-sm font-medium uppercase tracking-wider">Partnership</span>
              </div>
              <h1 className="text-5xl md:text-7xl font-headline font-bold text-white mb-6 leading-tight">
                Partner with <span className="text-primary">Project Vyoma</span>
              </h1>
              <p className="text-xl text-white/70 mb-8 leading-relaxed max-w-3xl mx-auto">
                Elevate the Future of Aerospace
              </p>
              <p className="text-lg text-white/60 mb-12 max-w-2xl mx-auto">
                Forge a prestigious alliance with Project Vyoma and redefine the boundaries of aerospace innovation
              </p>
              <a
                href="#initiate-partnership"
                className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-primary to-sky-300 text-white font-semibold rounded-lg hover:from-primary/90 hover:to-sky-300/90 transition-all duration-300 hover:shadow-[0_10px_30px_rgba(59,130,246,0.3)] hover:-translate-y-0.5"
              >
                Initiate Partnership
                <ArrowRight className="w-5 h-5" />
              </a>
            </div>
          </div>
        </section>

        {/* Why Partner Section */}
        <section className="py-24 px-4">
          <div className="container mx-auto max-w-7xl">
            <div className="text-center mb-16">
              <div className="inline-block mb-4">
                <span className="text-primary text-sm font-medium uppercase tracking-wider">Benefits</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-headline font-bold text-white mb-4">
                Why Partner with Project Vyoma?
              </h2>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {whyPartner.map((item, i) => (
                <div
                  key={i}
                  className="bg-gradient-to-br from-black/60 to-black/40 border border-white/10 rounded-xl p-6 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/20 transition-all duration-300 group"
                >
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-primary transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-white/70 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How We Amplify Your Investment */}
        <section className="py-24 px-4 bg-gradient-to-b from-white/5 via-white/10 to-white/5">
          <div className="container mx-auto max-w-7xl">
            <div className="text-center mb-16">
              <div className="inline-block mb-4">
                <span className="text-primary text-sm font-medium uppercase tracking-wider">Value Proposition</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-headline font-bold text-white mb-4">
                How We Amplify Your Investment
              </h2>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {amplifyInvestment.map((item, i) => (
                <div
                  key={i}
                  className="bg-gradient-to-br from-black/60 to-black/40 border border-white/10 rounded-xl p-6 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/20 transition-all duration-300 group"
                >
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-primary transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-white/70 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Partnership Benefits Table */}
        <section className="py-24 px-4">
          <div className="container mx-auto max-w-7xl">
            <div className="text-center mb-16">
              <div className="inline-block mb-4">
                <span className="text-primary text-sm font-medium uppercase tracking-wider">Partnership Tiers</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-headline font-bold text-white mb-4">
                Partnership Benefits
              </h2>
            </div>
            
            <div className="bg-gradient-to-br from-black/60 to-black/40 border border-white/10 rounded-xl overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-white/10">
                      <th className="text-left p-4 md:p-6 text-white font-semibold text-sm md:text-base">Deliverables</th>
                      <th className="text-center p-4 md:p-6 text-primary font-semibold text-sm md:text-base">Bronze<br /><span className="text-white/70 text-xs md:text-sm font-normal">₹25,000</span></th>
                      <th className="text-center p-4 md:p-6 text-primary font-semibold text-sm md:text-base">Silver<br /><span className="text-white/70 text-xs md:text-sm font-normal">₹50,000</span></th>
                      <th className="text-center p-4 md:p-6 text-primary font-semibold text-sm md:text-base">Gold<br /><span className="text-white/70 text-xs md:text-sm font-normal">₹1,00,000</span></th>
                    </tr>
                  </thead>
                  <tbody>
                    {partnershipBenefits.map((item, i) => (
                      <tr key={i} className="border-b border-white/5 hover:bg-white/5 transition-colors">
                        <td className="p-4 md:p-6 text-white/90 text-sm md:text-base">{item.benefit}</td>
                        <td className="p-4 md:p-6 text-center">
                          {item.bronze && <Check className="w-5 h-5 text-primary mx-auto" />}
                        </td>
                        <td className="p-4 md:p-6 text-center">
                          {item.silver && <Check className="w-5 h-5 text-primary mx-auto" />}
                        </td>
                        <td className="p-4 md:p-6 text-center">
                          {item.gold && <Check className="w-5 h-5 text-primary mx-auto" />}
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
        <section className="py-24 px-4 bg-gradient-to-b from-white/5 via-white/10 to-white/5">
          <div className="container mx-auto max-w-7xl">
            <div className="text-center mb-16">
              <div className="inline-block mb-4">
                <span className="text-primary text-sm font-medium uppercase tracking-wider">Brand Visibility</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-headline font-bold text-white mb-4">
                Premium Brand Visibility: Logo Placement
              </h2>
            </div>
            
            <div className="bg-gradient-to-br from-black/60 to-black/40 border border-white/10 rounded-xl overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-white/10">
                      <th className="text-left p-4 md:p-6 text-white font-semibold text-sm md:text-base">Logo Size</th>
                      <th className="text-center p-4 md:p-6 text-primary font-semibold text-sm md:text-base">Bronze<br /><span className="text-white/70 text-xs md:text-sm font-normal">₹25,000</span></th>
                      <th className="text-center p-4 md:p-6 text-primary font-semibold text-sm md:text-base">Silver<br /><span className="text-white/70 text-xs md:text-sm font-normal">₹50,000</span></th>
                      <th className="text-center p-4 md:p-6 text-primary font-semibold text-sm md:text-base">Gold<br /><span className="text-white/70 text-xs md:text-sm font-normal">₹1,00,000</span></th>
                    </tr>
                  </thead>
                  <tbody>
                    {logoPlacement.map((item, i) => (
                      <tr key={i} className="border-b border-white/5 hover:bg-white/5 transition-colors">
                        <td className="p-4 md:p-6 text-white/90 text-sm md:text-base">{item.size}</td>
                        <td className="p-4 md:p-6 text-center">
                          {item.bronze ? (
                            <span className="text-primary font-medium text-sm md:text-base">{item.count}</span>
                          ) : (
                            <span className="text-white/30">—</span>
                          )}
                        </td>
                        <td className="p-4 md:p-6 text-center">
                          {item.silver ? (
                            <span className="text-primary font-medium text-sm md:text-base">{item.count}</span>
                          ) : (
                            <span className="text-white/30">—</span>
                          )}
                        </td>
                        <td className="p-4 md:p-6 text-center">
                          {item.gold ? (
                            <span className="text-primary font-medium text-sm md:text-base">{item.count}</span>
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
        <section className="py-24 px-4">
          <div className="container mx-auto max-w-7xl">
            <div className="text-center mb-16">
              <div className="inline-block mb-4">
                <span className="text-primary text-sm font-medium uppercase tracking-wider">Resources</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-headline font-bold text-white mb-4">
                Essential Documents
              </h2>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6">
              {documents.map((doc, i) => (
                <a
                  key={i}
                  href={doc.link}
                  className="bg-gradient-to-br from-black/60 to-black/40 border border-white/10 rounded-xl p-6 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/20 transition-all duration-300 group"
                >
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-bold text-white group-hover:text-primary transition-colors">
                      {doc.name}
                    </h3>
                    <Download className="w-5 h-5 text-primary group-hover:scale-110 transition-transform" />
                  </div>
                  <p className="text-white/60 text-sm">Click to download</p>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Distinguished Industry Collaborators */}
        <section className="py-24 px-4 bg-gradient-to-b from-white/5 via-white/10 to-white/5">
          <div className="container mx-auto max-w-7xl">
            <div className="text-center mb-16">
              <div className="inline-block mb-4">
                <span className="text-primary text-sm font-medium uppercase tracking-wider">Partners</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-headline font-bold text-white mb-4">
                Distinguished Industry Collaborators
              </h2>
            </div>
            
            <div className="flex flex-wrap justify-center items-center gap-12">
              {collaborators.map((collab, i) => (
                <div
                  key={i}
                  className="bg-gradient-to-br from-black/60 to-black/40 border border-white/10 rounded-xl p-8 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/20 transition-all duration-300 min-w-[200px] flex items-center justify-center"
                >
                  <span className="text-2xl font-bold text-white">{collab.name}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section id="initiate-partnership" className="py-24 px-4">
          <div className="container mx-auto max-w-4xl">
            <div className="bg-gradient-to-br from-black/60 to-black/40 border border-white/10 rounded-2xl p-12 text-center">
              <h2 className="text-4xl md:text-5xl font-headline font-bold text-white mb-6">
                Elevate the Future of Aerospace
              </h2>
              <p className="text-xl text-white/70 mb-8 leading-relaxed">
                Forge a prestigious alliance with Project Vyoma and redefine the boundaries of aerospace innovation
              </p>
              <a
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-primary to-sky-300 text-white font-semibold rounded-lg hover:from-primary/90 hover:to-sky-300/90 transition-all duration-300 hover:shadow-[0_10px_30px_rgba(59,130,246,0.3)] hover:-translate-y-0.5"
              >
                Initiate Partnership
                <ArrowRight className="w-5 h-5" />
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

