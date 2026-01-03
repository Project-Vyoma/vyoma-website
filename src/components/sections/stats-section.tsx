"use client";

import { Plane, Trophy, Users, Calendar } from "lucide-react";
import ElectricBorder from "@/components/ui/ElectricBorder";

const stats = [
  {
    icon: Calendar,
    value: "18+",
    label: "Years of Excellence",
    description: "Pioneering aerospace innovation since 2007",
  },
  {
    icon: Plane,
    value: "25+",
    label: "Aircraft Built",
    description: "Custom-designed and engineered aircraft",
  },
  {
    icon: Trophy,
    value: "20+",
    label: "Awards & Recognition",
    description: "National and international achievements",
  },
  {
    icon: Users,
    value: "15+",
    label: "Active Members",
    description: "Dedicated team of aerospace engineers",
  },
];

export default function StatsSection() {
  return (
    <section className="py-24 sm:py-32 bg-black relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-500/5 to-transparent" />
      
      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Our Impact
          </h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            Building a legacy of excellence in aerospace engineering
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <ElectricBorder
                key={index}
                color="#60A5FA"
                speed={1.1}
                chaos={0.02}
                borderRadius={16}
                className="group hover:scale-105 transition-transform duration-300"
              >
                <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 h-full">
                  {/* Icon */}
                  <div className="bg-white/10 rounded-lg p-4 w-fit mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-8 h-8 text-blue-400" />
                  </div>

                  {/* Value */}
                  <div className="text-blue-400 text-5xl md:text-6xl font-bold mb-2">
                    {stat.value}
                  </div>

                  {/* Label */}
                  <div className="text-white text-xl font-semibold mb-2">
                    {stat.label}
                  </div>

                  {/* Description */}
                  <div className="text-white/60 text-sm leading-relaxed">
                    {stat.description}
                  </div>
                </div>
              </ElectricBorder>
            );
          })}
        </div>
      </div>
    </section>
  );
}

