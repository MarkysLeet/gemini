"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { projects } from "@/data/projects";
import { useLanguage } from "@/context/LanguageContext";
import ScrollReveal from "./ScrollReveal";

const FeaturedProjects = () => {
  const { t, language } = useLanguage();

  // Select first 3 projects
  const featuredProjects = projects.slice(0, 3);

  if (featuredProjects.length < 3) return null;

  return (
    <section className="py-24 bg-black relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                {t.projects.title}
              </h2>
              <p className="text-gray-400 max-w-xl text-lg">
                {t.hero.subtitle}
              </p>
            </div>
            <Link
              href="/projects"
              className="hidden md:flex items-center gap-2 text-white hover:text-gray-300 transition-colors group"
            >
              {t.projects.categories.all}
              <ArrowUpRight className="w-5 h-5 group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 auto-rows-[400px]">
          {/* First Item - Large (Spans 2 rows on desktop) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="group relative row-span-1 md:row-span-2 rounded-2xl overflow-hidden border border-neutral-800 bg-neutral-900"
          >
            <Link href={`/projects/${featuredProjects[0].id}`} className="block w-full h-full">
              <div className="absolute inset-0 overflow-hidden">
                <Image
                  src="https://placehold.co/800x1000/1a1a1a/FFFFFF?text=Project+Image+800x1000"
                  alt={featuredProjects[0].title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-500" />
              </div>

              <div className="absolute bottom-0 left-0 w-full p-8 bg-gradient-to-t from-black/90 via-black/50 to-transparent">
                <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <div className="flex gap-2 mb-3 flex-wrap">
                    <span className="px-3 py-1 text-xs font-bold uppercase tracking-wider text-black bg-white rounded-full">
                      {t.projects.categories[featuredProjects[0].category] || featuredProjects[0].category}
                    </span>
                  </div>
                  <h3 className="text-3xl font-bold text-white mb-2">{featuredProjects[0].title}</h3>
                  <p className="text-gray-300 line-clamp-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                    {featuredProjects[0].description[language]}
                  </p>
                </div>
              </div>
            </Link>
          </motion.div>

          {/* Second Item */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="group relative rounded-2xl overflow-hidden border border-neutral-800 bg-neutral-900"
          >
             <Link href={`/projects/${featuredProjects[1].id}`} className="block w-full h-full">
              <div className="absolute inset-0 overflow-hidden">
                <Image
                  src="https://placehold.co/800x500/1a1a1a/FFFFFF?text=Project+Image+800x500"
                  alt={featuredProjects[1].title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-500" />
              </div>

              <div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-black/90 via-black/50 to-transparent">
                <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <div className="flex gap-2 mb-2 flex-wrap">
                    <span className="px-3 py-1 text-xs font-bold uppercase tracking-wider text-black bg-white rounded-full">
                      {t.projects.categories[featuredProjects[1].category] || featuredProjects[1].category}
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-1">{featuredProjects[1].title}</h3>
                </div>
              </div>
            </Link>
          </motion.div>

          {/* Third Item */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="group relative rounded-2xl overflow-hidden border border-neutral-800 bg-neutral-900"
          >
             <Link href={`/projects/${featuredProjects[2].id}`} className="block w-full h-full">
              <div className="absolute inset-0 overflow-hidden">
                <Image
                  src="https://placehold.co/800x500/1a1a1a/FFFFFF?text=Project+Image+800x500"
                  alt={featuredProjects[2].title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-500" />
              </div>

              <div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-black/90 via-black/50 to-transparent">
                <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                   <div className="flex gap-2 mb-2 flex-wrap">
                    <span className="px-3 py-1 text-xs font-bold uppercase tracking-wider text-black bg-white rounded-full">
                      {t.projects.categories[featuredProjects[2].category] || featuredProjects[2].category}
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-1">{featuredProjects[2].title}</h3>
                </div>
              </div>
            </Link>
          </motion.div>
        </div>

        <div className="mt-8 text-center md:hidden">
           <Link
              href="/projects"
              className="inline-flex items-center gap-2 text-white border border-white/20 px-6 py-3 rounded-full hover:bg-white hover:text-black transition-all"
            >
              {t.projects.categories.all}
              <ArrowUpRight className="w-5 h-5" />
            </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;
