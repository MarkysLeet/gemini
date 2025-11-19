"use client";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="container mx-auto px-4">
      <div className="min-h-screen flex flex-col justify-center items-center text-center">
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 3 }} // Delay to start after preloader
          className="text-5xl md:text-8xl font-bold tracking-tight mb-4"
        >
          Grozan Studio
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 3.2 }}
          className="text-lg md:text-2xl text-gray-300"
        >
          Создаем не просто сайты, а впечатления.
        </motion.p>
      </div>
    </div>
  );
}
