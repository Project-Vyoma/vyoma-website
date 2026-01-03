"use client";

import { useEffect, useState } from "react";
import { Cursor } from '@/components/core/cursor';
import { AnimatePresence, motion } from 'motion/react';

export default function CustomCursor() {
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    // Only show on desktop (not touch devices)
    const isDesktop = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    if (!isDesktop) return;

    const handleMouseEnter = (e: MouseEvent) => {
      const target = e.target;
      if (!target || !(target instanceof Element)) return;
      
      const element = target as HTMLElement;
      const isInteractive = 
        element.tagName === "A" ||
        element.tagName === "BUTTON" ||
        (element.closest && (
          !!element.closest("a") ||
          !!element.closest("button") ||
          !!element.closest("[role='button']") ||
          !!element.closest("[data-cursor-hover]")
        )) ||
        element.style.cursor === "pointer" ||
        window.getComputedStyle(element).cursor === "pointer";
      
      setIsHovering(isInteractive);
    };

    const handleMouseLeave = () => {
      setIsHovering(false);
    };

    document.addEventListener("mouseover", handleMouseEnter, true);
    document.addEventListener("mouseout", handleMouseLeave, true);

    return () => {
      document.removeEventListener("mouseover", handleMouseEnter, true);
      document.removeEventListener("mouseout", handleMouseLeave, true);
    };
  }, []);

  return (
    <Cursor
      attachToParent={false}
      variants={{
        initial: { scale: 0.3, opacity: 0 },
        animate: { scale: 1, opacity: 1 },
        exit: { scale: 0.3, opacity: 0 },
      }}
      springConfig={{
        bounce: 0.001,
      }}
      transition={{
        ease: 'easeInOut',
        duration: 0.15,
      }}
    >
      <motion.div
        animate={{
          width: isHovering ? 80 : 16,
          height: isHovering ? 32 : 16,
        }}
        className='flex items-center justify-center rounded-[24px] bg-white/80 backdrop-blur-md border border-gray-300/40'
      >
        <AnimatePresence>
          {isHovering ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.6 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.6 }}
              className='inline-flex w-full items-center justify-center'
            >
              <div className='inline-flex items-center text-sm text-gray-800 font-medium'>
                Click
              </div>
            </motion.div>
          ) : null}
        </AnimatePresence>
      </motion.div>
    </Cursor>
  );
}

