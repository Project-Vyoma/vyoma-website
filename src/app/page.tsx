"use client";

import { useState, useEffect, useRef } from "react";
import { aircraftConfig } from "@/app/config";
import LoadingScreen from "@/components/loading-screen";
import Header from "@/components/header";
import Footer from "@/components/footer";
import HeroSection from "@/components/sections/hero-section";
import InteractiveSection from "@/components/sections/interactive-section";
import StatsSection from "@/components/sections/stats-section";
import ScrollVelocity from "@/components/ui/ScrollVelocity";
import CustomCursor from "@/components/ui/CustomCursor";

export default function Home() {
  const [loadingProgress, setLoadingProgress] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isReady, setIsReady] = useState(false);

  const canvasRef = useRef<HTMLCanvasElement>(null);
  const imagesRef = useRef<HTMLImageElement[]>([]);
  const heroRef = useRef<HTMLDivElement>(null);

  const getFrameUrl = (frame: number) => {
    return aircraftConfig.frameUrlTemplate.replace(
      'FRAME_INDEX',
      String(frame).padStart(3, '0')
    );
  };
  
  useEffect(() => {
    const { frameCount } = aircraftConfig;
    let loadedCount = 0;
    const imgElements: HTMLImageElement[] = [];

    const handleFrameLoadedOrFailed = () => {
      loadedCount++;
      setLoadingProgress((loadedCount / frameCount) * 100);
      if (loadedCount === frameCount) {
        imagesRef.current = imgElements;
        // Short delay to allow the loading bar to hit 100%
        setTimeout(() => setIsLoaded(true), 200);
        // Fade in content
        setTimeout(() => setIsReady(true), 700);
      }
    };

    for (let i = 0; i < frameCount; i++) {
      const img = new Image();
      img.src = getFrameUrl(i);
      imgElements.push(img);
      img.onload = handleFrameLoadedOrFailed;
      img.onerror = handleFrameLoadedOrFailed;
    }

    // Safety timeout: if frames never finish loading, still show the site
    const timeoutId = window.setTimeout(() => {
      if (!isLoaded) {
        setIsLoaded(true);
        setIsReady(true);
      }
    }, 8000);

    return () => {
      window.clearTimeout(timeoutId);
    };
  }, []);

  useEffect(() => {
    if (!isLoaded || !canvasRef.current || imagesRef.current.length === 0) return;

    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");
    if (!context) return;
    
    // Set canvas size
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    
    // Draw initial frame immediately
    if (imagesRef.current[0]) {
      context.drawImage(imagesRef.current[0], 0, 0, canvas.width, canvas.height);
    }

    let rafId: number | null = null;
    let lastFrameIndex = 0;

    const handleScroll = () => {
      const heroElement = heroRef.current;
      if (!heroElement) return;

      const scrollableHeight = heroElement.scrollHeight - window.innerHeight;
      const scrollTop = window.scrollY;
      // Slow down the parallax by reducing scroll sensitivity
      const scrollFraction = Math.min(1, Math.max(0, (scrollTop / scrollableHeight) * 0.7));
      
      // Use smoother easing function for natural parallax effect
      const easeInOutQuart = (t: number) => t < 0.5 
        ? 8 * t * t * t * t 
        : 1 - Math.pow(-2 * t + 2, 4) / 2;
      
      const easedFraction = easeInOutQuart(scrollFraction);
      
      // Interpolate between frames for ultra-smooth transitions
      const exactFrame = easedFraction * (aircraftConfig.frameCount - 1);
      const frameIndex = Math.floor(exactFrame);
      const nextFrameIndex = Math.min(frameIndex + 1, aircraftConfig.frameCount - 1);
      const frameBlend = exactFrame - frameIndex;

      // Always update for smoother animation
      if (frameIndex !== lastFrameIndex || frameBlend > 0) {
        lastFrameIndex = frameIndex;
        
        if (rafId) cancelAnimationFrame(rafId);
        
        rafId = requestAnimationFrame(() => {
          if (!canvas || !context) return;
          
          context.clearRect(0, 0, canvas.width, canvas.height);
          
          // Draw current frame
          if (imagesRef.current[frameIndex]) {
            context.globalAlpha = 1 - frameBlend;
            context.drawImage(imagesRef.current[frameIndex], 0, 0, canvas.width, canvas.height);
          }
          
          // Blend with next frame for smoother transitions
          if (frameBlend > 0 && imagesRef.current[nextFrameIndex]) {
            context.globalAlpha = frameBlend;
            context.drawImage(imagesRef.current[nextFrameIndex], 0, 0, canvas.width, canvas.height);
            context.globalAlpha = 1;
          }
        });
      }
    };
    
    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      handleScroll();
    }

    // Use passive scroll listener for better performance
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener('resize', handleResize, { passive: true });
    
    // Initial scroll to ensure first frame is drawn
    handleScroll();
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener('resize', handleResize);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, [isLoaded]);

  return (
    <>
      <LoadingScreen progress={loadingProgress} isLoaded={isLoaded} />
      <div className={`transition-opacity duration-500 ${isReady ? 'opacity-100' : 'opacity-0'}`}>
        <CustomCursor />
        <Header />
        <canvas 
          ref={canvasRef} 
          className="fixed top-0 left-0 -z-10 w-full h-full"
          style={{ display: 'block', width: '100vw', height: '100vh' }}
        />
        <main>
          <div ref={heroRef} className="relative h-[500vh]">
            <HeroSection />
          </div>
          <div className="relative bg-black z-10">
            <InteractiveSection />
            <StatsSection />
            <div className="py-16">
              <ScrollVelocity
                texts={[
                  'Project Vyoma',
                  'Aerospace Excellence',
                  'Innovation in Flight'
                ]}
                velocity={50}
                className="text-white"
                parallaxClassName="py-8"
                scrollerClassName="text-white/90"
              />
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
}
