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

    // Select links, buttons, and inputs (excluding textarea)
    // Also include labels that wrap inputs or are 'for' inputs implicitly if needed,
    // but usually inputs themselves are enough.
    // Added specific input types to avoid selecting hidden inputs or file uploads if undesired,
    // but generic 'input:not([type="hidden"])' is usually safe.
    // Excluding textarea as requested.
    const selector = 'a, button, input:not([type="hidden"]), select, .cursor-hover';
    const elements = document.querySelectorAll(selector);

    elements.forEach(el => {
      // Double check it's not a textarea (though input selector shouldn't catch it)
      if (el.tagName.toLowerCase() === 'textarea') return;

      el.addEventListener('mouseenter', handleMouseEnter);
      el.addEventListener('mouseleave', handleMouseLeave);
    });

    return () => {
      window.removeEventListener("mousemove", mouseMove);
      elements.forEach(el => {
        el.removeEventListener('mouseenter', handleMouseEnter);
        el.removeEventListener('mouseleave', handleMouseLeave);
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
      transition={{ duration: 0 }}
    />
  );
};

export default CustomCursor;
