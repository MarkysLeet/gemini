"use client";
import { motion } from "framer-motion";
import ScrollReveal from "@/components/ScrollReveal";

export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <motion.h1
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-5xl font-bold mb-12 text-center"
      >
        Свяжитесь с нами
      </motion.h1>
      <div className="grid md:grid-cols-2 gap-16 items-start">
        <ScrollReveal>
          <div>
            <h2 className="text-3xl font-bold mb-6">Контактная информация</h2>
            <div className="space-y-4 text-lg">
              <p>
                <strong>Email:</strong> <a href="mailto:grozantwink@gmail.com" className="hover:underline">grozantwink@gmail.com</a>
              </p>
              <p>
                <strong>Телефон / WhatsApp:</strong> <a href="tel:+905418462550" className="hover:underline">+90 541 846 25 50</a>
              </p>
              <p className="pt-4">
                Готовы обсудить ваш проект? Напишите нам или позвоните.
              </p>
            </div>
          </div>
        </ScrollReveal>
        <ScrollReveal delay={0.2}>
          <form className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-2">Имя</label>
              <input type="text" id="name" name="name" required className="w-full bg-gray-900 border border-gray-700 rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-white" />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-2">Email</label>
              <input type="email" id="email" name="email" required className="w-full bg-gray-900 border border-gray-700 rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-white" />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-2">Сообщение</label>
              <textarea id="message" name="message" rows={4} required className="w-full bg-gray-900 border border-gray-700 rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-white"></textarea>
            </div>
            <button type="submit" className="w-full bg-white text-black font-bold py-3 px-6 rounded-md hover:bg-gray-200 transition-colors">
              Отправить
            </button>
          </form>
        </ScrollReveal>
      </div>
    </div>
  );
}
