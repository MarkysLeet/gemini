"use client";

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [cursorVariant, setCursorVariant] = useState("default");
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    // Check for touch device capabilities
    const checkTouch = () => {
        return window.matchMedia("(pointer: coarse)").matches || 'ontouchstart' in window;
    };

    if (checkTouch()) {
      setIsTouchDevice(true);
      return; // Do not add listeners on touch devices
    }

    const mouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", mouseMove);

    const handleMouseEnter = () => setCursorVariant("text");
    const handleMouseLeave = () => setCursorVariant("default");

    const links = document.querySelectorAll('a, button');
    links.forEach(link => {
      link.addEventListener('mouseenter', handleMouseEnter);
      link.addEventListener('mouseleave', handleMouseLeave);
    });

    return () => {
      window.removeEventListener("mousemove", mouseMove);
      links.forEach(link => {
        link.removeEventListener('mouseenter', handleMouseEnter);
        link.removeEventListener('mouseleave', handleMouseLeave);
      });
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

  if (isTouchDevice) return null;

  return (
    <motion.div
      className='fixed top-0 left-0 rounded-full pointer-events-none z-[999]'
      variants={variants}
      animate={cursorVariant}
      transition={{ type: "spring", stiffness: 800, damping: 20 }}
    />
  );
};

export default CustomCursor;
