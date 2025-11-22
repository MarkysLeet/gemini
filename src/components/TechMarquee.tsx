"use client";

import { motion } from "framer-motion";

const TechMarquee = () => {
  const technologies = [
    "Next.js",
    "React",
    "Tailwind",
    "TypeScript",
    "Vercel",
    "Figma",
  ];

  // Duplicate the list to create a seamless loop
  const marqueeItems = [...technologies, ...technologies, ...technologies, ...technologies];

  return (
    <div className="w-full overflow-hidden py-8 bg-black/50 backdrop-blur-sm border-y border-white/5">
      <div className="relative flex items-center">
        {/* Left Fade Gradient */}
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none"></div>

        {/* Right Fade Gradient */}
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none"></div>

        <motion.div
          className="flex whitespace-nowrap"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            repeat: Infinity,
            ease: "linear",
            duration: 30, // Adjust speed here
          }}
        >
          {marqueeItems.map((tech, index) => (
            <div
              key={index}
              className="mx-8 text-2xl md:text-4xl font-bold text-white/20 select-none uppercase tracking-widest flex items-center"
            >
              {tech}
              <span className="ml-16 text-white/10">•</span>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default TechMarquee;
