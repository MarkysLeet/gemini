"use client";
import { motion } from "framer-motion";
import ScrollReveal from "@/components/ScrollReveal";

const services = [
  {
    title: "Веб-разработка",
    description: "Мы создаем быстрые, адаптивные и красивые сайты, которые решают задачи вашего бизнеса. От лендингов до сложных корпоративных порталов.",
  },
  {
    title: "UI/UX Дизайн",
    description: "Проектируем интуитивно понятные и эстетически приятные интерфейсы, которые обеспечивают лучший пользовательский опыт.",
  },
  {
    title: "Брендинг",
    description: "Разрабатываем айдентику, которая отражает ценности вашего бренда и помогает выделиться на рынке.",
  },
];

export default function ServicesPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <motion.h1
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-5xl font-bold mb-12 text-center"
      >
        Наши Услуги
      </motion.h1>
      <div className="grid md:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <ScrollReveal key={index} delay={index * 0.1}>
            <div
              className="bg-gray-900 p-8 rounded-lg h-full"
            >
              <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
              <p className="text-gray-400">{service.description}</p>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </div>
  );
}
