"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";

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

      <ScrollReveal>
        <div className="py-24 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            Дизайн, который рассказывает вашу историю.
          </h2>
          <p className="max-w-3xl mx-auto text-lg text-gray-400 mb-12">
            Мы — креативная студия, которая верит в силу продуманного дизайна. Наша цель — создавать не просто красивые сайты, а цифровые продукты, которые решают задачи бизнеса, вызывают эмоции и запоминаются. Мы уделяем внимание каждой детали, чтобы ваш бренд говорил с аудиторией на одном языке.
          </p>
          <Link
            href="/projects"
            className="inline-block bg-white text-black font-bold py-4 px-8 rounded-md hover:bg-gray-200 transition-colors text-lg"
          >
            Наши проекты
          </Link>
        </div>
      </ScrollReveal>
    </div>
  );
}
