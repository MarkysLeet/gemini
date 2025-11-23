'use client';

import React, { useState, useRef, useEffect } from 'react';
import { SplitComparisonBlock } from '@/data/projects';
import { useLanguage } from '@/context/LanguageContext';
import { ImagePlaceholder } from './ImagePlaceholder';
import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion';

interface CompareSliderProps {
  block: SplitComparisonBlock;
}

export const CompareSlider: React.FC<CompareSliderProps> = ({ block }) => {
  const { language } = useLanguage();
  const [sliderPosition, setSliderPosition] = useState(50); // percentage 0-100
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = (event: React.MouseEvent | React.TouchEvent) => {
    if (!containerRef.current) return;

    const rect = containerRef.current.getBoundingClientRect();
    const x = 'touches' in event ? event.touches[0].clientX : (event as React.MouseEvent).clientX;
    const position = ((x - rect.left) / rect.width) * 100;

    setSliderPosition(Math.min(100, Math.max(0, position)));
  };

  const handleMouseDown = () => setIsDragging(true);
  const handleMouseUp = () => setIsDragging(false);

  // Global event listeners for smooth dragging outside the component
  useEffect(() => {
    const handleGlobalMove = (e: MouseEvent | TouchEvent) => {
      if (isDragging) {
        // @ts-ignore - Simple casting for mixed event types
        handleMove(e);
      }
    };
    const handleGlobalUp = () => setIsDragging(false);

    if (isDragging) {
      window.addEventListener('mousemove', handleGlobalMove);
      window.addEventListener('touchmove', handleGlobalMove);
      window.addEventListener('mouseup', handleGlobalUp);
      window.addEventListener('touchend', handleGlobalUp);
    }
    return () => {
      window.removeEventListener('mousemove', handleGlobalMove);
      window.removeEventListener('touchmove', handleGlobalMove);
      window.removeEventListener('mouseup', handleGlobalUp);
      window.removeEventListener('touchend', handleGlobalUp);
    };
  }, [isDragging]);

  return (
    <section className="py-16 w-full max-w-7xl mx-auto space-y-8">
      <div className="text-center space-y-4 mb-8">
        <h2 className="text-2xl md:text-3xl font-bold text-white">{block.title[language]}</h2>
        {block.description && (
          <p className="text-white/60 max-w-2xl mx-auto">{block.description[language]}</p>
        )}
      </div>

      <div
        ref={containerRef}
        className="relative w-full aspect-video rounded-xl overflow-hidden cursor-ew-resize select-none border border-white/10 shadow-2xl"
        onMouseDown={handleMouseDown}
        onTouchStart={handleMouseDown}
        onClick={handleMove} // Allow click to jump
      >
        {/* Right Image (Background - Dark Mode usually) */}
        <div className="absolute inset-0 bg-neutral-900 flex items-center justify-center">
            {/* We use the placeholder here, but in real app it would be an <img> */}
            <div className="absolute inset-0 flex items-center justify-center bg-[#0a0a0a]">
                <ImagePlaceholder
                    label={block.rightImage.label}
                    dimensions={block.rightImage.dimensions}
                    url={block.rightImage.url}
                    aspectRatio="h-full w-full"
                    className="!bg-transparent !border-0"
                    showOverlayOnHover={false}
                />
            </div>
        </div>

        {/* Left Image (Foreground - Light Mode) - Clip Path controlled */}
        <div
            className="absolute inset-0 bg-neutral-100 overflow-hidden"
            style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
        >
             <div className="absolute inset-0 flex items-center justify-center bg-[#f5f5f5]">
                <ImagePlaceholder
                    label={block.leftImage.label}
                    dimensions={block.leftImage.dimensions}
                    url={block.leftImage.url}
                    aspectRatio="h-full w-full"
                    className="!bg-transparent !border-0 text-black/80"
                    showOverlayOnHover={false}
                />
                 {/* Hack: Force text color to black for light mode side placeholder */}
                <style jsx>{`
                    .bg-\[\#f5f5f5\] p { color: #000 !important; }
                    .bg-\[\#f5f5f5\] svg { color: #000 !important; }
                `}</style>
            </div>
        </div>

        {/* Slider Handle */}
        <div
            className="absolute top-0 bottom-0 w-1 bg-white cursor-ew-resize z-20 flex items-center justify-center"
            style={{ left: `${sliderPosition}%` }}
        >
            <div className="w-8 h-8 rounded-full bg-white shadow-lg flex items-center justify-center transform -translate-x-1/2">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="15 18 9 12 15 6"></polyline>
                    <polyline points="9 18 3 12 9 6" style={{display: 'none'}}></polyline> {/* Simple arrow */}
                </svg>
                <div className="flex gap-[2px]">
                   <div className="w-[2px] h-3 bg-black/20"></div>
                   <div className="w-[2px] h-3 bg-black/20"></div>
                </div>
            </div>
        </div>

        {/* Labels overlay */}
        <div className="absolute top-4 left-4 z-10 px-3 py-1 bg-black/50 backdrop-blur-md rounded-full text-xs text-white/90 font-medium">
            {block.leftImage.label}
        </div>
        <div className="absolute top-4 right-4 z-10 px-3 py-1 bg-black/50 backdrop-blur-md rounded-full text-xs text-white/90 font-medium">
            {block.rightImage.label}
        </div>
      </div>
    </section>
  );
};
