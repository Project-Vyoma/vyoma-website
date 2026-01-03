"use client";

import { useState } from "react";
import { ArrowRight, Plane, Trophy, Users, Rocket, Award } from "lucide-react";

type SectionItem = {
  id: number;
  number: string;
  title: string;
  subtitle: string;
  description: string;
  icon: React.ReactNode;
  color: string;
  bgColor: string;
};

const items: SectionItem[] = [
  {
    id: 1,
    number: "01",
    title: "Engineering Excellence",
    subtitle: "AEROSPACE INNOVATION",
    description: "Pioneering excellence in aerospace engineering since 2007. We design and build cutting-edge aircraft, pushing the boundaries of what's possible in unmanned aerial systems through advanced aerodynamics and precision engineering.",
    icon: <Plane className="w-10 h-10" />,
    color: "text-blue-400",
    bgColor: "bg-blue-500/10",
  },
  {
    id: 2,
    number: "02",
    title: "Global Recognition",
    subtitle: "COMPETITION SUCCESS",
    description: "Securing top positions in prestigious international competitions including SAE Aero Design and AIAA Design/Build/Fly. Our achievements showcase innovation, precision, and engineering excellence on the world stage.",
    icon: <Trophy className="w-10 h-10" />,
    color: "text-amber-400",
    bgColor: "bg-amber-500/10",
  },
  {
    id: 3,
    number: "03",
    title: "Cutting-Edge Research",
    subtitle: "TECHNOLOGY ADVANCEMENT",
    description: "Advancing UAV technology through research in solar-powered aircraft, autonomous systems, and next-generation designs. We explore the frontiers of aerospace innovation, setting new benchmarks in performance and efficiency.",
    icon: <Rocket className="w-10 h-10" />,
    color: "text-purple-400",
    bgColor: "bg-purple-500/10",
  },
  {
    id: 4,
    number: "04",
    title: "Talent Development",
    subtitle: "NURTURING EXCELLENCE",
    description: "Fostering the next generation of aerospace engineers through hands-on experience, mentorship, and collaborative learning. We provide opportunities for students to develop practical skills and pursue careers in aerospace engineering.",
    icon: <Users className="w-10 h-10" />,
    color: "text-emerald-400",
    bgColor: "bg-emerald-500/10",
  },
  {
    id: 5,
    number: "05",
    title: "Industry Partnerships",
    subtitle: "STRATEGIC COLLABORATIONS",
    description: "Building strong relationships with industry leaders, academic institutions, and technology partners. Our collaborations drive innovation, create opportunities for research, and help shape the future of aerospace engineering.",
    icon: <Award className="w-10 h-10" />,
    color: "text-cyan-400",
    bgColor: "bg-cyan-500/10",
  },
];

export default function InteractiveSection() {
  return (
    <section className="py-32 sm:py-40 bg-black">
      <div className="container mx-auto px-4 max-w-7xl">
        <InteractiveRow items={items} />
      </div>
    </section>
  );
}

function InteractiveRow({ items }: { items: SectionItem[] }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeItem = items[activeIndex];

  const getBarColor = (color: string) => {
    if (color === 'text-blue-400') return 'bg-blue-400';
    if (color === 'text-amber-400') return 'bg-amber-400';
    if (color === 'text-purple-400') return 'bg-purple-400';
    if (color === 'text-emerald-400') return 'bg-emerald-400';
    if (color === 'text-cyan-400') return 'bg-cyan-400';
    return 'bg-blue-400';
  };

  const getBorderColor = (color: string) => {
    if (color === 'text-blue-400') return 'border-blue-400/20';
    if (color === 'text-amber-400') return 'border-amber-400/20';
    if (color === 'text-purple-400') return 'border-purple-400/20';
    if (color === 'text-emerald-400') return 'border-emerald-400/20';
    if (color === 'text-cyan-400') return 'border-cyan-400/20';
    return 'border-blue-400/20';
  };

  const getGlowColor = (color: string) => {
    if (color === 'text-blue-400') return 'bg-blue-400';
    if (color === 'text-amber-400') return 'bg-amber-400';
    if (color === 'text-purple-400') return 'bg-purple-400';
    if (color === 'text-emerald-400') return 'bg-emerald-400';
    if (color === 'text-cyan-400') return 'bg-cyan-400';
    return 'bg-blue-400';
  };

  return (
    <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
      {/* Left Panel - Navigation */}
      <div className="bg-black lg:w-1/2">
        <div className="space-y-0">
          {items.map((item, index) => (
            <button
              key={item.id}
              onMouseEnter={() => setActiveIndex(index)}
              className={`relative w-full text-left py-8 px-6 transition-all duration-300 group ${
                index === activeIndex
                  ? "text-white"
                  : "text-white/50 hover:text-white/70"
              }`}
              style={{ cursor: 'none' }}
            >
              {/* Vertical Bar Indicator - Thicker */}
              {index === activeIndex && (
                <div className={`absolute left-0 top-0 bottom-0 w-1 ${getBarColor(activeItem.color)}`} />
              )}
              
              <div className="flex items-center justify-between pl-4">
                <div className="flex items-center gap-6">
                  <span className="text-base font-light text-white/40">{item.number}</span>
                  <span className={`text-lg font-bold transition-colors ${
                    index === activeIndex ? "text-white font-bold" : "text-white/60 font-semibold"
                  }`}>
                    {item.title}
                  </span>
                </div>
                {index === activeIndex && (
                  <ArrowRight className={`w-5 h-5 ${activeItem.color} transition-transform group-hover:translate-x-1`} />
                )}
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Right Panel - Content - Full Height Card */}
      <div className={`${activeItem.bgColor.replace('/10', '/5')} border ${getBorderColor(activeItem.color)} rounded-xl p-12 md:p-16 transition-all duration-500 relative overflow-hidden lg:w-1/2 lg:self-stretch flex flex-col`}>
        {/* Icon Container */}
        <div className={`${activeItem.bgColor} rounded-lg p-4 w-fit mb-10`}>
          <div className={activeItem.color}>
            {activeItem.icon}
          </div>
        </div>

        {/* Subtitle */}
        <div className={`${activeItem.color} text-xs font-light tracking-[0.2em] uppercase mb-5`}>
          {activeItem.subtitle}
        </div>

        {/* Title */}
        <h3 className="text-white text-4xl md:text-5xl font-bold mb-8 leading-tight">
          {activeItem.title}
        </h3>

        {/* Description */}
        <p className="text-white/80 text-lg md:text-xl leading-relaxed flex-grow font-light">
          {activeItem.description}
        </p>

        {/* Decorative Background Graphic */}
        <div className={`absolute bottom-0 right-0 w-64 h-64 opacity-10 ${getGlowColor(activeItem.color)} rounded-full blur-3xl`} />
        <div className="absolute -bottom-20 -right-20 w-80 h-80 opacity-5">
          <div className="w-full h-full rounded-full border-2 border-white/10" />
        </div>
      </div>
    </div>
  );
}

