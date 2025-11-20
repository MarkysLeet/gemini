"use client";
import { useState } from "react";
import { projects, ProjectCategory } from "@/data/projects";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";

export default function ProjectsPage() {
  const { language, t } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState<ProjectCategory | "all">("all");

  // Map categories using keys
  const categories: { key: ProjectCategory | "all"; label: string }[] = [
    { key: "all", label: t.projects.categories.all },
    { key: "cafe", label: t.projects.categories.cafe },
    { key: "restaurants", label: t.projects.categories.restaurants },
    { key: "salons", label: t.projects.categories.salons },
  ];

  const filteredProjects =
    selectedCategory === "all"
      ? projects
      : projects.filter((p) => p.category === selectedCategory);

  return (
    <div className="container mx-auto px-4 py-16">
      <motion.h1
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-5xl font-bold mb-12 text-center"
      >
        {t.projects.title}
      </motion.h1>

      <div className="flex flex-wrap justify-center gap-4 mb-12">
        {categories.map((cat) => (
          <button
            key={cat.key}
            onClick={() => setSelectedCategory(cat.key)}
            className={`px-4 py-2 rounded-md transition-all active:scale-95 cursor-pointer ${
              selectedCategory === cat.key
                ? "bg-white text-black shadow-[0_0_15px_rgba(255,255,255,0.3)]"
                : "bg-gray-800 hover:bg-gray-700 text-white"
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <AnimatePresence>
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              className="h-full"
            >
              <Link href={`/projects/${project.id}`} className="block h-full active:scale-[0.98] transition-transform duration-200">
                <div className="h-full bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl overflow-hidden group hover:border-white/30 transition-colors">
                  <div className="overflow-hidden">
                    <img
                      src={project.coverImage}
                      alt={project.title}
                      className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-2xl font-bold mb-2 group-hover:text-purple-300 transition-colors">{project.title}</h3>
                    <p className="text-gray-400 line-clamp-3">{project.description[language]}</p>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
