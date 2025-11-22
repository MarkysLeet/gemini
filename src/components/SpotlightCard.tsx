"use client";

import React, { useRef, MouseEvent } from "react";
import { motion, useMotionTemplate, useMotionValue } from "framer-motion";

interface SpotlightCardProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

const SpotlightCard = ({ children, className = "", onClick }: SpotlightCardProps) => {
  const divRef = useRef<HTMLDivElement>(null);

  // Use Framer Motion values for performance (avoids React re-renders on mouse move)
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!divRef.current) return;

    const rect = divRef.current.getBoundingClientRect();
    mouseX.set(e.clientX - rect.left);
    mouseY.set(e.clientY - rect.top);
  };

  return (
    <div
      ref={divRef}
      onMouseMove={handleMouseMove}
      onClick={onClick}
      className={`relative rounded-3xl overflow-hidden bg-[#0f0f0f] border border-white/10 group cursor-none ${className}`}
    >
      {/* 1. Spotlight Gradient (Inner Glow) */}
      <motion.div
        className="pointer-events-none absolute -inset-px opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background: useMotionTemplate`radial-gradient(600px circle at ${mouseX}px ${mouseY}px, rgba(255,255,255,0.06), transparent 40%)`,
        }}
      />

      {/* 2. Border Spotlight (Reveal) */}
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-3xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background: useMotionTemplate`radial-gradient(600px circle at ${mouseX}px ${mouseY}px, rgba(255,255,255,0.3), transparent 40%)`,
          maskImage: `linear-gradient(black, black), linear-gradient(black, black)`,
          maskClip: "content-box, border-box",
          maskComposite: "exclude", // Shows only the border
          WebkitMaskComposite: "xor", // Safari support
          padding: "1px", // Border width
        }}
      />

      {/* 3. Noise Texture (Revealed by Spotlight) */}
      <motion.div
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-20 mix-blend-overlay"
        style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='1'/%3E%3C/svg%3E")`,
            maskImage: useMotionTemplate`radial-gradient(400px circle at ${mouseX}px ${mouseY}px, black, transparent)`,
            WebkitMaskImage: useMotionTemplate`radial-gradient(400px circle at ${mouseX}px ${mouseY}px, black, transparent)`,
        }}
      />

      {/* Content */}
      <div className="relative h-full">{children}</div>
    </div>
  );
};

export default SpotlightCard;
