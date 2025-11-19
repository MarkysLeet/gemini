"use client";

import { projects, Project } from "@/data/projects";
import { motion } from "framer-motion";

type ProjectPageProps = {
  params: {
    id: string;
  };
};

export default function ProjectPage({ params }: ProjectPageProps) {
  const project = projects.find((p) => p.id === params.id);

  if (!project) {
    return (
      <div className="min-h-screen flex justify-center items-center">
        <h1 className="text-4xl">Проект не найден</h1>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-16">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="text-center mb-16"
      >
        <h1 className="text-6xl font-bold mb-4">{project.title}</h1>
        <p className="text-xl text-gray-400">{project.description}</p>
      </motion.div>

      <motion.img
        src={project.coverImage}
        alt={project.title}
        className="w-full rounded-lg mb-16"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      />

      <div className="grid md:grid-cols-3 gap-8 mb-16">
        <div>
          <h3 className="text-2xl font-bold mb-4">Клиент</h3>
          <img src={project.clientLogo} alt={`${project.title} Logo`} className="bg-white p-2 rounded"/>
        </div>
        <div>
          <h3 className="text-2xl font-bold mb-4">Категория</h3>
          <p className="text-lg text-gray-300">{project.category}</p>
        </div>
        <div>
          <h3 className="text-2xl font-bold mb-4">Вдохновение</h3>
          <p className="text-lg text-gray-300">{project.inspiration}</p>
        </div>
      </div>

      <div className="prose prose-invert max-w-none mb-16">
        <p className="text-lg">{project.fullDescription}</p>
      </div>

      <div className="space-y-8">
        {project.images.map((img, index) => (
            <motion.img
                key={index}
                src={img}
                alt={`Screenshot ${index+1}`}
                className="w-full rounded-lg"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5 }}
            />
        ))}
      </div>
    </div>
  );
}
