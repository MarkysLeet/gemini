"use client";

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [cursorVariant, setCursorVariant] = useState("default");

  useEffect(() => {
    const mouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", mouseMove);

    return () => {
      window.removeEventListener("mousemove", mouseMove);
    };
  }, []);

  const variants = {
    default: {
      x: mousePosition.x - 8,
      y: mousePosition.y - 8,
      height: 16,
      width: 16,
      backgroundColor: "white",
      mixBlendMode: "difference" as const,
    },
    text: {
        x: mousePosition.x - 32,
        y: mousePosition.y - 32,
        height: 64,
        width: 64,
        backgroundColor: "white",
        mixBlendMode: "difference" as const,
    },
  };

  useEffect(() => {
    const handleMouseEnter = () => setCursorVariant("text");
    const handleMouseLeave = () => setCursorVariant("default");

    const links = document.querySelectorAll('a, button');
    links.forEach(link => {
      link.addEventListener('mouseenter', handleMouseEnter);
      link.addEventListener('mouseleave', handleMouseLeave);
    });

    return () => {
        links.forEach(link => {
            link.removeEventListener('mouseenter', handleMouseEnter);
            link.removeEventListener('mouseleave', handleMouseLeave);
        });
    }
  }, []);

  return (
    <motion.div
      className='fixed top-0 left-0 rounded-full pointer-events-none z-[999]'
      variants={variants}
      animate={cursorVariant}
      transition={{ type: "spring", stiffness: 500, damping: 30 }}
    />
  );
};

export default CustomCursor;
