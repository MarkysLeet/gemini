"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const Preloader = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 3000); // Show for 3 seconds
    return () => clearTimeout(timer);
  }, []);

  const text = "Grozan Studio";
  const containerVariants = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 0,
      transition: {
        delay: 2.5,
        duration: 0.5,
        when: "afterChildren",
      },
    },
  };

  const letterVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
      },
    }),
  };

  if (isLoaded) return null;

  return (
    <motion.div
      className="fixed inset-0 bg-black flex justify-center items-center z-[100]"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      onAnimationComplete={() => setIsLoaded(true)}
    >
      <motion.h1 className="text-white text-4xl md:text-6xl font-bold" aria-label={text}>
        {text.split("").map((char, i) => (
          <motion.span
            key={i}
            custom={i}
            variants={letterVariants}
            initial="hidden"
            animate="visible"
            style={{ display: "inline-block", whiteSpace: "pre" }}
          >
            {char}
          </motion.span>
        ))}
      </motion.h1>
    </motion.div>
  );
};

export default Preloader;
