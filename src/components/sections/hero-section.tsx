"use client";

import BlurText from "@/components/ui/BlurText";

export default function HeroSection() {
  return (
    <section id="home" className="relative w-full h-screen z-0">
      <div className="container relative mx-auto flex h-full items-start px-4">
        <div className="flex flex-col items-start gap-0 pt-8 md:pt-12">
          {/* Logo Image - Larger size */}
          <div className="flex items-center">
            <img 
              src="/images/image.png" 
              alt="VYOMA Logo" 
              className="h-44 md:h-56 w-auto object-contain"
            />
          </div>
          
          {/* Club Name - Improved font and white color with BlurText effect */}
          <div className="text-white text-base md:text-lg font-medium tracking-wider uppercase z-50 relative -mt-9 ml-2 md:ml-4">
            <BlurText
              text="Aeromodelling Club of RVCE"
              delay={100}
              animateBy="words"
              direction="top"
              className="text-white text-base md:text-lg font-medium tracking-wider uppercase"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
