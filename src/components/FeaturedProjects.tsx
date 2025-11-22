"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { projects } from "@/data/projects";
import { useLanguage } from "@/context/LanguageContext";
import ScrollReveal from "./ScrollReveal";
import SpotlightCard from "./SpotlightCard";

const FeaturedProjects = () => {
  const { t, language } = useLanguage();

  // Select first 3 projects
  const featuredProjects = projects.slice(0, 3);

  if (featuredProjects.length < 3) return null;

  return (
    <section className="">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-24">
        <ScrollReveal>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold uppercase tracking-wider text-white/90">
              {t.projects.title}
            </h2>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:h-[400px]">
          {/* Main Card - Large (Spans 2 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="group relative lg:col-span-2 h-[200px] lg:h-full"
          >
            {/* Backdrop Glow */}
            <div className="absolute -inset-4 bg-indigo-500/20 rounded-[2.5rem] blur-3xl opacity-40 transition-all duration-700 group-hover:opacity-100 group-hover:scale-105 group-hover:bg-indigo-500/30 -z-10" />

            <Link href={`/projects/${featuredProjects[0].id}`} className="block w-full h-full">
              <SpotlightCard className="h-full">
                {/* Image */}
                <div className="absolute inset-0 overflow-hidden">
                  <img
                    src={featuredProjects[0].coverImage}
                    alt={featuredProjects[0].title}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                </div>

                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/25 to-transparent pointer-events-none" />

                {/* Content */}
                <div className="absolute bottom-0 left-0 w-full p-6 lg:p-8 pointer-events-none">
                  <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <div className="flex gap-2 mb-2 lg:mb-3 flex-wrap">
                      {/* Glass Chip */}
                      <span className="px-3 py-1 text-xs font-bold uppercase tracking-wider text-white/90 bg-white/10 backdrop-blur-md border border-white/5 rounded-full">
                        {t.projects.categories[featuredProjects[0].category] || featuredProjects[0].category}
                      </span>
                    </div>
                    <h3 className="text-xl lg:text-3xl font-bold text-white mb-1 lg:mb-2">{featuredProjects[0].title}</h3>
                    <p className="text-gray-300 line-clamp-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 hidden lg:block">
                      {featuredProjects[0].description[language]}
                    </p>
                  </div>
                </div>
              </SpotlightCard>
            </Link>
          </motion.div>

          {/* Right Column - Two Small Cards */}
          <div className="lg:col-span-1 flex flex-col gap-6 h-full min-h-[400px] lg:min-h-0">
            {/* Second Item */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="group relative flex-1 h-[200px] lg:h-auto"
            >
                {/* Backdrop Glow */}
                <div className="absolute -inset-4 bg-indigo-500/20 rounded-[2.5rem] blur-3xl opacity-40 transition-all duration-700 group-hover:opacity-100 group-hover:scale-105 group-hover:bg-indigo-500/30 -z-10" />

                <Link href={`/projects/${featuredProjects[1].id}`} className="block w-full h-full">
                    <SpotlightCard className="h-full">
                        {/* Image */}
                        <div className="absolute inset-0 overflow-hidden">
                             <img
                                src={featuredProjects[1].coverImage}
                                alt={featuredProjects[1].title}
                                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                            />
                        </div>

                        {/* Overlay Gradient */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/25 to-transparent pointer-events-none" />

                        {/* Content */}
                        <div className="absolute bottom-0 left-0 w-full p-6 pointer-events-none">
                            <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                                <div className="flex gap-2 mb-2 flex-wrap">
                                    <span className="px-3 py-1 text-xs font-bold uppercase tracking-wider text-white/90 bg-white/10 backdrop-blur-md border border-white/5 rounded-full">
                                    {t.projects.categories[featuredProjects[1].category] || featuredProjects[1].category}
                                    </span>
                                </div>
                                <h3 className="text-xl font-bold text-white mb-1">{featuredProjects[1].title}</h3>
                            </div>
                        </div>
                    </SpotlightCard>
                </Link>
            </motion.div>

             {/* Third Item */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="group relative flex-1 h-[200px] lg:h-auto"
            >
                {/* Backdrop Glow */}
                <div className="absolute -inset-4 bg-indigo-500/20 rounded-[2.5rem] blur-3xl opacity-40 transition-all duration-700 group-hover:opacity-100 group-hover:scale-105 group-hover:bg-indigo-500/30 -z-10" />

                <Link href={`/projects/${featuredProjects[2].id}`} className="block w-full h-full">
                    <SpotlightCard className="h-full">
                        {/* Image */}
                        <div className="absolute inset-0 overflow-hidden">
                             <img
                                src={featuredProjects[2].coverImage}
                                alt={featuredProjects[2].title}
                                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                            />
                        </div>

                        {/* Overlay Gradient */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/25 to-transparent pointer-events-none" />

                        {/* Content */}
                        <div className="absolute bottom-0 left-0 w-full p-6 pointer-events-none">
                            <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                                <div className="flex gap-2 mb-2 flex-wrap">
                                    <span className="px-3 py-1 text-xs font-bold uppercase tracking-wider text-white/90 bg-white/10 backdrop-blur-md border border-white/5 rounded-full">
                                    {t.projects.categories[featuredProjects[2].category] || featuredProjects[2].category}
                                    </span>
                                </div>
                                <h3 className="text-xl font-bold text-white mb-1">{featuredProjects[2].title}</h3>
                            </div>
                        </div>
                    </SpotlightCard>
                </Link>
            </motion.div>
          </div>
        </div>

         <div className="mt-12 text-center md:hidden">
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
