"use client";
import { useState } from "react";
import { projects } from "@/data/projects";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

const categories = ["Все", "Комплексы", "Кафе-рестораны"];

export default function ProjectsPage() {
  const [selectedCategory, setSelectedCategory] = useState("Все");

  const filteredProjects =
    selectedCategory === "Все"
      ? projects
      : projects.filter((p) => p.category === selectedCategory);

  return (
    <div className="container mx-auto px-4 py-16">
      <motion.h1
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-5xl font-bold mb-12 text-center"
      >
        Наши Проекты
      </motion.h1>

      <div className="flex justify-center space-x-4 mb-12">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-4 py-2 rounded-md transition-colors duration-300 ${
              selectedCategory === category
                ? "bg-white text-black shadow-lg shadow-white/20"
                : "bg-gray-800 hover:bg-gray-700 text-white"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <AnimatePresence>
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.3 }}
            >
              <Link href={`/projects/${project.id}`}>
                <div className="block bg-gray-900/50 backdrop-blur-sm rounded-lg overflow-hidden group border border-white/10 hover:border-white/30 transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-white/5">
                  <div className="relative h-64 overflow-hidden">
                     {/* Using img instead of next/image for simplicity with external unpredictable URLs in this context,
                         but we enabled next/image in config so we could use Image if preferred.
                         Sticking to img as per existing code style to ensure no layout shift issues without width/height data. */}
                    <img
                      src={project.coverImage}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <span className="text-white font-medium px-4 py-2 border border-white rounded-full backdrop-blur-md">Подробнее</span>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex justify-between items-start mb-2">
                        <h3 className="text-2xl font-bold">{project.title}</h3>
                        <span className="text-xs font-medium bg-white/10 px-2 py-1 rounded text-gray-300">{project.category}</span>
                    </div>
                    <p className="text-gray-400">{project.description}</p>
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
