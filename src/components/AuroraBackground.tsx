"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useEffect } from "react";

export default function AuroraBackground() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth out the mouse movement
  const springConfig = { damping: 25, stiffness: 150 };
  const springX = useSpring(mouseX, springConfig);
  const springY = useSpring(mouseY, springConfig);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;

      // Normalize coordinates to range [-1, 1]
      const x = (clientX / innerWidth) * 2 - 1;
      const y = (clientY / innerHeight) * 2 - 1;

      mouseX.set(x);
      mouseY.set(y);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  // Transformations for different orbs to create parallax effect
  const x1 = useTransform(springX, [-1, 1], [-100, 100]);
  const y1 = useTransform(springY, [-1, 1], [-50, 50]);

  const x2 = useTransform(springX, [-1, 1], [50, -50]); // Moves opposite
  const y2 = useTransform(springY, [-1, 1], [50, -50]);

  const x3 = useTransform(springX, [-1, 1], [-30, 30]);
  const y3 = useTransform(springY, [-1, 1], [30, -30]);

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      <div className="absolute inset-0 bg-black" />

      {/* Aurora Orbs */}
      <motion.div
        className="absolute top-[-10%] left-[-10%] w-[40rem] h-[40rem] bg-purple-900/30 rounded-full blur-[100px]"
        style={{ x: x1, y: y1 }}
        animate={{
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute top-[20%] right-[-10%] w-[30rem] h-[30rem] bg-blue-900/20 rounded-full blur-[100px]"
        style={{ x: x2, y: y2 }}
        animate={{
          scale: [1, 1.5, 1],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-[-10%] left-[20%] w-[50rem] h-[50rem] bg-indigo-900/20 rounded-full blur-[120px]"
        style={{ x: x3, y: y3 }}
        animate={{
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Subtle Noise Texture Overlay (Optional, adds grain/texture) */}
      <div className="absolute inset-0 opacity-[0.02] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-overlay" />
    </div>
  );
}
