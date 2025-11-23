'use client';

import React from 'react';
import { ProjectOverview } from '@/data/projects';
import { useLanguage } from '@/context/LanguageContext';
import { motion } from 'framer-motion';

interface ProjectOverviewProps {
  overview: ProjectOverview;
}

export const ProjectOverviewBlock: React.FC<ProjectOverviewProps> = ({ overview }) => {
  const { language } = useLanguage();

  const items = [
    { label: { ru: 'Клиент', en: 'Client', tr: 'Müşteri' }, text: overview.client },
    { label: { ru: 'Задача', en: 'Task', tr: 'Görev' }, text: overview.task },
    { label: { ru: 'Решение', en: 'Solution', tr: 'Çözüm' }, text: overview.solution },
  ];

  return (
    <section className="w-full py-12 lg:py-16">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
        {items.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="flex flex-col gap-3"
          >
            <h3 className="text-sm uppercase tracking-widest text-white/40 font-semibold">
              {item.label[language]}
            </h3>
            <p className="text-white/80 leading-relaxed text-sm lg:text-base">
              {item.text[language]}
            </p>
          </motion.div>
        ))}
      </div>
      <div className="w-full h-px bg-white/10 mt-12 lg:mt-16" />
    </section>
  );
};
