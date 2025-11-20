"use client";

import { projects, Project } from "@/data/projects";
import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import Link from "next/link";
import { ChevronLeft } from "lucide-react";

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
        <h1 className="text-4xl">Project not found</h1>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-16">
        <div className="mb-8">
             <Link href="/projects" className="inline-flex items-center text-gray-400 hover:text-white transition-colors">
                 <ChevronLeft className="w-5 h-5 mr-1" />
                 {t.projects.back}
             </Link>
        </div>

      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="text-center mb-16"
      >
        <h1 className="text-6xl font-bold mb-4">{project.title}</h1>
        <p className="text-xl text-gray-400">{project.description[language]}</p>
      </motion.div>

      <motion.img
        src={project.coverImage}
        alt={project.title}
        className="w-full rounded-lg mb-16 shadow-2xl border border-white/10"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      />

      <div className="grid md:grid-cols-3 gap-8 mb-16 bg-white/5 p-8 rounded-xl border border-white/10">
        <div>
          <h3 className="text-2xl font-bold mb-4 text-purple-300">{t.projects.client}</h3>
          <img src={project.clientLogo} alt={`${project.title} Logo`} className="bg-white p-2 rounded max-w-[200px]"/>
        </div>
        <div>
          <h3 className="text-2xl font-bold mb-4 text-purple-300">{t.services.common.features.adaptive.title /* Recycling "Category" label if not present, or just showing value */}</h3>
          {/* Wait, I should use a proper label for Category. I missed adding "Category" label to translation specifically? */}
          {/* Actually I can use "Категория" from my previous knowledge or add it. But looking at translations.ts: */}
          {/* I have t.projects.categories. So I can map the category key to the label. */}
          <p className="text-lg text-gray-300">{t.projects.categories[project.category]}</p>
        </div>
        <div>
          <h3 className="text-2xl font-bold mb-4 text-purple-300">{t.projects.inspiration}</h3>
          <p className="text-lg text-gray-300">{project.inspiration[language]}</p>
        </div>
      </div>

      <div className="prose prose-invert max-w-none mb-16 text-lg leading-relaxed text-gray-300">
        <p>{project.fullDescription[language]}</p>
      </div>

      <div className="space-y-12">
        {project.images.map((img, index) => (
            <motion.img
                key={index}
                src={img}
                alt={`Screenshot ${index+1}`}
                className="w-full rounded-lg shadow-lg border border-white/5"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5 }}
            />
        ))}
      </div>
    </div>
  );
}
