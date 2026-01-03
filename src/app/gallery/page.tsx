"use client";

import { useState, useMemo } from "react";
import Header from "@/components/header";
import Footer from "@/components/footer";
import Particles from "@/components/ui/Particles";
import { Sparkles, Search, X, Plane, Trophy, GraduationCap, Users } from "lucide-react";
import BlurText from "@/components/ui/BlurText";
import Image from "next/image";

type GalleryItem = {
  id: number;
  shortTitle: string;
  title: string;
  description: string;
  category: "Aircraft" | "Competitions" | "Workshops" | "Team Events";
  image: string;
  size: "small" | "medium" | "large" | "wide" | "tall";
};

const galleryItems: GalleryItem[] = [
  { id: 1, shortTitle: "RC Aircraft Flight Test", title: "RC Aircraft Flight Test", description: "Team members conducting flight tests of our custom-built RC aircraft", category: "Aircraft", image: "/images/1.jpg", size: "large" },
  { id: 2, shortTitle: "Workshop Session", title: "Workshop Session", description: "Technical workshop on aerodynamics and aircraft design principles", category: "Workshops", image: "/images/2.jpg", size: "medium" },
  { id: 3, shortTitle: "Competition Win", title: "Competition Win", description: "Team celebrating victory at inter-college aeromodelling competition", category: "Competitions", image: "/images/3.jpg", size: "wide" },
  { id: 4, shortTitle: "Aircraft Assembly", title: "Aircraft Assembly", description: "Team assembling wing components for new aircraft prototype", category: "Aircraft", image: "/images/4.jpg", size: "medium" },
  { id: 5, shortTitle: "Team Meeting", title: "Team Meeting", description: "Strategic planning meeting for upcoming competition", category: "Team Events", image: "/images/5.jpg", size: "small" },
  { id: 6, shortTitle: "Flight Demonstration", title: "Flight Demonstration", description: "Demonstrating autonomous flight capabilities to audience", category: "Aircraft", image: "/images/6.jpg", size: "tall" },
  { id: 7, shortTitle: "CAD Design Session", title: "CAD Design Session", description: "Team working on 3D modeling and design optimization", category: "Workshops", image: "/images/7.jpg", size: "medium" },
  { id: 8, shortTitle: "Competition Preparation", title: "Competition Preparation", description: "Final preparations before national-level competition", category: "Competitions", image: "/images/8.jpg", size: "large" },
  { id: 9, shortTitle: "VTOL Testing", title: "VTOL Testing", description: "Vertical Take-Off and Landing aircraft field testing", category: "Aircraft", image: "/images/9.jpg", size: "wide" },
  { id: 10, shortTitle: "Electronics Workshop", title: "Electronics Workshop", description: "Workshop on avionics and flight control systems", category: "Workshops", image: "/images/10.jpg", size: "small" },
  { id: 11, shortTitle: "Award Ceremony", title: "Award Ceremony", description: "Receiving first place trophy at regional competition", category: "Competitions", image: "/images/11.jpg", size: "medium" },
  { id: 12, shortTitle: "Drone Assembly", title: "Drone Assembly", description: "Building custom quadcopter with FPV capabilities", category: "Aircraft", image: "/images/12.jpg", size: "tall" },
  { id: 13, shortTitle: "Team Bonding", title: "Team Bonding", description: "Team building activities and social gathering", category: "Team Events", image: "/images/14.jpg", size: "medium" },
  { id: 14, shortTitle: "Fabrication Lab", title: "Fabrication Lab", description: "Manufacturing aircraft components in our workshop", category: "Workshops", image: "/images/15.jpg", size: "large" },
  { id: 15, shortTitle: "Competition Day", title: "Competition Day", description: "Team at venue ready for competition rounds", category: "Competitions", image: "/images/16.jpg", size: "small" },
  { id: 16, shortTitle: "Test Flight Success", title: "Test Flight Success", description: "Successful maiden flight of new aircraft design", category: "Aircraft", image: "/images/17.png", size: "wide" },
  { id: 17, shortTitle: "Guest Lecture", title: "Guest Lecture", description: "Industry expert sharing insights on aerospace engineering", category: "Workshops", image: "/images/18.png", size: "medium" },
  { id: 18, shortTitle: "Team Photo", title: "Team Photo", description: "Project Vyoma members at annual gathering", category: "Team Events", image: "/images/16.jpg", size: "large" },
];

const categories = ["All", "Aircraft", "Competitions", "Workshops", "Team Events"] as const;

const categoryIcons = {
  All: Search,
  Aircraft: Plane,
  Competitions: Trophy,
  Workshops: GraduationCap,
  "Team Events": Users,
};

export default function GalleryPage() {
  const [selectedCategory, setSelectedCategory] = useState<typeof categories[number]>("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredItems = useMemo(() => {
    return galleryItems.filter((item) => {
      const matchesCategory = selectedCategory === "All" || item.category === selectedCategory;
      const matchesSearch = 
        item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.shortTitle.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);


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
                <span className="text-primary text-sm font-medium uppercase tracking-wider">Gallery</span>
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
                    text="Gallery"
                    delay={150}
                    animateBy="words"
                    direction="top"
                    className="text-white"
                  />
                </div>
              </div>
              <div className="mb-12 max-w-4xl mx-auto">
                <BlurText
                  text="Explore our journey through images of aircraft, competitions, and team moments"
                  delay={50}
                  animateBy="words"
                  direction="top"
                  className="text-xl md:text-2xl text-white/80 leading-relaxed text-center"
                />
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

        {/* Gallery Section */}
        <section className="py-24 px-4">
          <div className="container mx-auto max-w-7xl">
            {/* Search Bar */}
            <div className="mb-8 max-w-2xl mx-auto">
              <div className="relative">
                <div className="absolute left-4 top-1/2 -translate-y-1/2 z-10 pointer-events-none">
                  <Search className="w-5 h-5 text-white/50" />
                </div>
                <input
                  type="text"
                  placeholder="Search images..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-12 py-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl text-white placeholder-white/40 focus:outline-none focus:border-primary/50 focus:bg-white/10 transition-all duration-300"
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery("")}
                    className="absolute right-4 top-1/2 -translate-y-1/2 z-10 text-white/50 hover:text-white transition-colors"
                    aria-label="Clear search"
                  >
                    <X className="w-5 h-5" />
                  </button>
                )}
              </div>
            </div>

            {/* Category Filters */}
            <div className="flex flex-wrap justify-center gap-3 mb-12">
              {categories.map((category) => {
                const Icon = categoryIcons[category];
                const isActive = selectedCategory === category;
                return (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`group flex items-center gap-2 px-6 py-3 rounded-full border backdrop-blur-sm transition-all duration-300 ${
                      isActive
                        ? "bg-primary/20 border-primary/50 text-primary"
                        : "bg-white/5 border-white/10 text-white/60 hover:bg-white/10 hover:border-white/20 hover:text-white"
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                    <span className="font-medium">{category}</span>
                  </button>
                );
              })}
            </div>

            {/* Gallery Masonry - Full Size Images */}
            {filteredItems.length > 0 ? (
              <div className="columns-1 md:columns-2 lg:columns-3 xl:columns-4 gap-4 space-y-4">
                {filteredItems.map((item) => (
                  <div
                    key={item.id}
                    className="group relative overflow-hidden rounded-md break-inside-avoid mb-4 cursor-pointer"
                  >
                    {/* Image Container - Full Natural Size */}
                    <div className="relative w-full rounded-md overflow-hidden">
                      <Image
                        src={item.image}
                        alt={item.title}
                        width={800}
                        height={600}
                        className="w-full h-auto object-contain transition-transform duration-700 group-hover:scale-105 rounded-md"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                      
                      {/* Hover Overlay with Text */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/60 to-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-3 md:p-4 rounded-md">
                        {/* Category */}
                        <div className="mb-1.5">
                          <span className="text-primary text-[9px] font-extralight tracking-[0.2em] uppercase">
                            {item.category}
                          </span>
                        </div>
                        
                        {/* Short Title */}
                        <h3 className="text-white text-sm md:text-base font-extralight tracking-[0.05em] mb-1.5 leading-snug">
                          {item.shortTitle}
                        </h3>
                        
                        {/* Description */}
                        <p className="text-white/60 text-[11px] md:text-xs font-light leading-relaxed tracking-wide">
                          {item.description}
                        </p>
                      </div>

                      {/* Subtle Border on Hover */}
                      <div className="absolute inset-0 border border-white/0 group-hover:border-white/20 transition-all duration-500 rounded-md pointer-events-none" />
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-20">
                <p className="text-white/60 text-lg">No images found matching your search.</p>
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
