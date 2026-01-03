"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import BlurText from "@/components/ui/BlurText";
import Particles from "@/components/ui/Particles";
import { ArrowLeft, Home } from "lucide-react";

export default function NotFound() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      {/* Particles Background */}
      <div className="fixed inset-0 w-full h-full z-[5] pointer-events-auto">
        <div style={{ width: '100%', height: '100vh', position: 'relative', pointerEvents: 'auto' }}>
          <Particles
            particleColors={['#ffffff', '#60a5fa']}
            particleCount={80}
            particleSpread={10}
            speed={0.1}
            particleBaseSize={100}
            moveParticlesOnHover={true}
            alphaParticles={false}
            disableRotation={false}
          />
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex items-center justify-center min-h-screen px-4">
        <div className="text-center max-w-2xl mx-auto">
          {/* Animated 404 Number */}
          <div className="mb-8">
            <div className="relative inline-block">
              <BlurText
                text="404"
                delay={50}
                animateBy="letters"
                direction="top"
                className="text-[120px] md:text-[180px] lg:text-[220px] font-headline font-bold text-primary leading-none"
              />
              {/* Glowing effect */}
              <div className="absolute inset-0 text-[120px] md:text-[180px] lg:text-[220px] font-headline font-bold text-primary/20 blur-3xl -z-10">
                404
              </div>
            </div>
          </div>

          {/* Animated Title */}
          <div className="mb-6">
            <BlurText
              text="Page Not Found"
              delay={100}
              animateBy="words"
              direction="top"
              className="text-3xl md:text-4xl lg:text-5xl font-headline font-bold text-white mb-4"
            />
          </div>

          {/* Animated Description */}
          <div className="mb-12">
            <BlurText
              text="The page you're looking for seems to have drifted into the void."
              delay={150}
              animateBy="words"
              direction="top"
              className="text-base md:text-lg text-white/60 leading-relaxed max-w-md mx-auto"
            />
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/"
              className="group relative inline-flex items-center gap-2 px-6 py-3 bg-primary/10 border border-primary/30 rounded-lg text-primary font-medium transition-all duration-300 hover:bg-primary/20 hover:border-primary/50 hover:shadow-[0_0_20px_rgba(96,165,250,0.3)] backdrop-blur-sm"
            >
              <Home className="w-4 h-4 transition-transform duration-300 group-hover:scale-110" />
              <span>Return Home</span>
            </Link>
            
            <button
              onClick={() => router.back()}
              className="group relative inline-flex items-center gap-2 px-6 py-3 bg-white/5 border border-white/10 rounded-lg text-white/80 font-medium transition-all duration-300 hover:bg-white/10 hover:border-white/20 hover:text-white backdrop-blur-sm"
            >
              <ArrowLeft className="w-4 h-4 transition-transform duration-300 group-hover:-translate-x-1" />
              <span>Go Back</span>
            </button>
          </div>

          {/* Decorative Elements */}
          <div className="mt-16 flex items-center justify-center gap-2">
            <div className="h-px w-12 bg-gradient-to-r from-transparent via-primary/50 to-transparent"></div>
            <div className="w-1.5 h-1.5 rounded-full bg-primary/50"></div>
            <div className="h-px w-12 bg-gradient-to-r from-transparent via-primary/50 to-transparent"></div>
          </div>
        </div>
      </div>

      {/* Floating Elements Animation */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-primary/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-40 h-40 bg-primary/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>
    </div>
  );
}

