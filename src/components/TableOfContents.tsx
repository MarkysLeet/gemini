'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface TocItem {
  id: string;
  label: string;
}

interface TableOfContentsProps {
  items: TocItem[];
}

export default function TableOfContents({ items }: TableOfContentsProps) {
  const [activeId, setActiveId] = useState<string>('');
  const [isHovered, setIsHovered] = useState(false);

  // Handle scroll spy
  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    const handleIntersect = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveId(entry.target.id);
        }
      });
    };

    const observerOptions = {
      rootMargin: '-20% 0px -50% 0px', // Trigger when element is in the upper middle part of screen
      threshold: 0.1
    };

    const observer = new IntersectionObserver(handleIntersect, observerOptions);

    items.forEach((item) => {
      const element = document.getElementById(item.id);
      if (element) {
        observer.observe(element);
      }
    });

    return () => {
      observer.disconnect();
    };
  }, [items]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -100; // Offset for header
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  if (items.length === 0) return null;

  return (
    <motion.nav
      className="fixed right-4 top-1/2 -translate-y-1/2 z-40 hidden lg:flex flex-col items-end gap-4 p-4"
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1 }}
    >
      {items.map((item) => {
        const isActive = activeId === item.id;

        return (
          <button
            key={item.id}
            onClick={() => scrollToSection(item.id)}
            className="group flex items-center gap-3 outline-none"
            aria-label={`Scroll to ${item.label}`}
          >
            {/* Label - Only visible on hover or if active (optional, user said 'on hover') */}
            <span className="relative overflow-hidden">
               <motion.span
                initial={{ opacity: 0, x: 20, display: 'none' }}
                animate={{
                  opacity: isHovered ? 1 : 0,
                  x: isHovered ? 0 : 20,
                  display: isHovered ? 'block' : 'none'
                }}
                transition={{ duration: 0.2 }}
                className={`text-sm font-medium whitespace-nowrap ${
                  isActive ? 'text-white' : 'text-gray-400'
                } group-hover:text-white transition-colors text-right`}
              >
                {item.label}
              </motion.span>
            </span>

            {/* Indicator Dot/Line */}
            <div className="relative flex items-center justify-center w-6 h-6">
              {/* Active Glow */}
              {isActive && (
                <motion.div
                  layoutId="toc-glow"
                  className="absolute w-4 h-4 bg-primary/20 rounded-full blur-sm"
                  transition={{ duration: 0.3 }}
                />
              )}

              {/* Dot */}
              <motion.div
                animate={{
                  height: isActive ? 24 : 6,
                  width: 2,
                  backgroundColor: isActive ? '#fff' : '#6b7280' // white vs gray-500
                }}
                className="rounded-full transition-colors duration-300"
              />
            </div>
          </button>
        );
      })}
    </motion.nav>
  );
}
