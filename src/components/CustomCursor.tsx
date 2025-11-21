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
      return;
    }

    const mouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const selector = 'a, button, input:not([type="hidden"]), select, .cursor-hover';

    const handleMouseOver = (e: MouseEvent) => {
        const target = e.target as HTMLElement;
        // Ignore textarea explicitly
        if (target.tagName.toLowerCase() === 'textarea') return;

        if (target.closest(selector)) {
            setCursorVariant("text");
        }
    };

    const handleMouseOut = (e: MouseEvent) => {
        const target = e.target as HTMLElement;
        const related = e.relatedTarget as HTMLElement;

        if (target.tagName.toLowerCase() === 'textarea') return;

        // If we were on an interactive element
        if (target.closest(selector)) {
             // And we are going to something that is NOT interactive
             if (!related || (!related.closest(selector) && related.tagName.toLowerCase() !== 'textarea')) {
                 setCursorVariant("default");
             }
        }
    };

    window.addEventListener("mousemove", mouseMove);
    window.addEventListener("mouseover", handleMouseOver);
    window.addEventListener("mouseout", handleMouseOut);

    return () => {
      window.removeEventListener("mousemove", mouseMove);
      window.removeEventListener("mouseover", handleMouseOver);
      window.removeEventListener("mouseout", handleMouseOut);
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
      transition: {
        x: { type: "spring", stiffness: 450, damping: 30, mass: 0.5 },
        y: { type: "spring", stiffness: 450, damping: 30, mass: 0.5 },
        height: { type: "tween", ease: "easeOut", duration: 0.2 },
        width: { type: "tween", ease: "easeOut", duration: 0.2 }
      }
    },
    text: {
        x: mousePosition.x - 32,
        y: mousePosition.y - 32,
        height: 64,
        width: 64,
        backgroundColor: "white",
        mixBlendMode: "difference" as const,
        transition: {
            x: { type: "spring", stiffness: 450, damping: 30, mass: 0.5 },
            y: { type: "spring", stiffness: 450, damping: 30, mass: 0.5 },
            height: { type: "tween", ease: "backOut", duration: 0.3 },
            width: { type: "tween", ease: "backOut", duration: 0.3 }
        }
    },
  };

  if (isTouchDevice) return null;

  return (
    <motion.div
      className='fixed top-0 left-0 rounded-full pointer-events-none z-[999]'
      variants={variants}
      animate={cursorVariant}
    />
  );
};

export default CustomCursor;
