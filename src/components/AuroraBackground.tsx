"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function AuroraBackground() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    // Check initially
    checkMobile();

    // Add listener
    window.addEventListener("resize", checkMobile);

    // Cleanup
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      <div className="absolute inset-0 bg-black" />

      {/* Aurora Orbs */}
      <motion.div
        className="absolute top-[-10%] left-[-10%] w-[40rem] h-[40rem] bg-purple-900/50 rounded-full blur-[100px]"
        animate={isMobile ? undefined : {
          scale: [1, 1.2, 1],
          x: [0, 100, -50, 0],
          y: [0, 50, -100, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute top-[20%] right-[-10%] w-[30rem] h-[30rem] bg-blue-900/40 rounded-full blur-[100px]"
        animate={isMobile ? undefined : {
          scale: [1, 1.5, 1],
          x: [0, -80, 40, 0],
          y: [0, -60, 80, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-[-10%] left-[20%] w-[50rem] h-[50rem] bg-indigo-900/40 rounded-full blur-[120px]"
        animate={isMobile ? undefined : {
          scale: [1, 1.1, 1],
          x: [0, 50, -50, 0],
          y: [0, -40, 40, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </div>
  );
}
