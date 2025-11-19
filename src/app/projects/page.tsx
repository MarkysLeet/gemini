"use client";
import { useState } from "react";
import { projects } from "@/data/projects";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

const categories = ["Все", "Кафе", "Рестораны", "Салоны"];

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
            className={`px-4 py-2 rounded-md ${
              selectedCategory === category
                ? "bg-white text-black"
                : "bg-gray-800"
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
                <div className="block bg-gray-900 rounded-lg overflow-hidden group">
                  <img
                    src={project.coverImage}
                    alt={project.title}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="p-6">
                    <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
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
