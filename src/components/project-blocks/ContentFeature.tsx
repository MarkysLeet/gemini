'use client';

import React from 'react';
import { FeatureBlock } from '@/data/projects';
import { useLanguage } from '@/context/LanguageContext';
import { ImagePlaceholder } from './ImagePlaceholder';
import { motion } from 'framer-motion';

interface ContentFeatureProps {
  block: FeatureBlock;
}

export const ContentFeature: React.FC<ContentFeatureProps> = ({ block }) => {
  const { language } = useLanguage();

  // Determine layout class based on position
  const position = block.image?.position || 'bottom';
  const isHorizontal = position === 'left' || position === 'right';
  const isReverse = position === 'left';

  return (
    <section className="py-16 w-full max-w-7xl mx-auto">
      <div className={`flex flex-col gap-12 ${isHorizontal ? 'lg:flex-row lg:items-center' : ''} ${isReverse ? 'lg:flex-row-reverse' : ''}`}>

        {/* Text Content */}
        <div className={`flex-1 space-y-6 ${isHorizontal ? 'lg:w-1/2' : 'w-full'}`}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              {block.title[language]}
            </h2>
            <div className="text-white/70 space-y-4 leading-relaxed whitespace-pre-line">
              {block.description[language]}
            </div>

            {block.listItems && block.listItems.length > 0 && (
              <ul className="mt-6 space-y-3">
                {block.listItems.map((item, idx) => (
                   <li key={idx} className="flex items-start gap-3 text-white/70">
                     <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-white/40 shrink-0" />
                     <span>{item[language]}</span>
                   </li>
                ))}
              </ul>
            )}
          </motion.div>
        </div>

        {/* Image Content */}
        {block.image && (
          <div className={`flex-1 ${isHorizontal ? 'lg:w-1/2' : 'w-full'}`}>
             <motion.div
               initial={{ opacity: 0, scale: 0.95 }}
               whileInView={{ opacity: 1, scale: 1 }}
               viewport={{ once: true }}
               transition={{ duration: 0.6, delay: 0.2 }}
             >
                <ImagePlaceholder
                    label={block.image.label}
                    dimensions={block.image.dimensions}
                    className="shadow-2xl border-white/5"
                />
             </motion.div>
          </div>
        )}
      </div>
    </section>
  );
};
