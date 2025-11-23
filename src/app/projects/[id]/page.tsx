"use client";

import React from "react";
import { projects, Project } from "@/data/projects";
import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import Link from "next/link";
import { ChevronLeft, ChevronDown } from "lucide-react";
import { ProjectOverviewBlock } from "@/components/project-blocks/ProjectOverviewBlock";
import { ContentBlockRenderer } from "@/components/project-blocks/ContentBlockRenderer";

type ProjectPageProps = {
  params: {
    id: string;
  };
};

export default function ProjectPage({ params }: ProjectPageProps) {
  const { language, t } = useLanguage();
  const project = projects.find((p) => p.id === params.id);

  if (!project) {
    return (
      <div className="min-h-screen flex justify-center items-center">
        <h1 className="text-4xl text-white">Project not found</h1>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 pt-20 pb-24 lg:pt-24 lg:pb-32">
        <div className="mb-4">
             <Link href="/projects" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 text-white transition-all duration-300 group backdrop-blur-sm">
                 <ChevronLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                 <span className="text-sm font-medium">{t.projects.back}</span>
             </Link>
        </div>

      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="text-center mb-16 max-w-4xl mx-auto"
      >
        <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white tracking-tight">{project.title}</h1>
        <p className="text-lg md:text-xl text-white/60 leading-relaxed">{project.description[language]}</p>
      </motion.div>

      {/* Cover Image */}
      {/* REMOVED PER REQUEST: The cover image is now only used for the card display, not on the detail page.
      <motion.div
         initial={{ opacity: 0, scale: 0.95 }}
         animate={{ opacity: 1, scale: 1 }}
         transition={{ duration: 0.8, delay: 0.1 }}
         className="w-full mb-16 lg:mb-24"
      >
          <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl border border-white/10">
               <img
                  src={project.coverImage}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
          </div>
      </motion.div>
      */}

      {/* --- NEW MODULAR CONTENT --- */}
      {project.overview && (
        <>
          <ProjectOverviewBlock overview={project.overview} />

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
            className="flex justify-center mt-8 mb-16"
          >
             <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                className="text-white/30"
              >
                <ChevronDown className="w-8 h-8" />
              </motion.div>
          </motion.div>
        </>
      )}

      {/* --- LEGACY CONTENT (Fallback if no new structure) --- */}
      {!project.overview && (
        <>
            <div className="grid md:grid-cols-3 gap-8 mb-16 bg-white/5 p-8 rounded-xl border border-white/10">
                <div>
                <h3 className="text-xl font-bold mb-4 text-white/80">{t.projects.client}</h3>
                <img src={project.clientLogo} alt={`${project.title} Logo`} className="bg-white p-2 rounded max-w-[150px]"/>
                </div>
                <div>
                <h3 className="text-xl font-bold mb-4 text-white/80">Category</h3>
                <p className="text-lg text-white/60">{t.projects.categories[project.category]}</p>
                </div>
                <div>
                {project.inspiration && (
                    <>
                        <h3 className="text-xl font-bold mb-4 text-white/80">{t.projects.inspiration}</h3>
                        <p className="text-lg text-white/60">{project.inspiration[language]}</p>
                    </>
                )}
                </div>
            </div>

            {project.fullDescription && (
                <div className="prose prose-invert max-w-none mb-16 text-lg leading-relaxed text-white/70">
                    <p>{project.fullDescription[language]}</p>
                </div>
            )}
        </>
      )}

      {/* --- BLOCKS RENDERER --- */}
      <div className="space-y-12 lg:space-y-16">
        {project.blocks?.map((block, index) => (
          <React.Fragment key={block.id}>
             {/* Divider between blocks (except the first one) */}
            {index > 0 && (
                <div className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent my-12" />
            )}
            <ContentBlockRenderer block={block} />
          </React.Fragment>
        ))}
      </div>

      {/* --- LEGACY IMAGES (Fallback) --- */}
      {!project.blocks && project.images && (
        <div className="space-y-12 mt-16">
            {project.images.map((img, index) => (
                <motion.img
                    key={index}
                    src={img}
                    alt={`Screenshot ${index+1}`}
                    className="w-full rounded-xl shadow-lg border border-white/5"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.5 }}
                />
            ))}
        </div>
      )}
    </div>
  );
}
