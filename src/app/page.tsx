"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";
import { useLoading } from "@/context/LoadingContext";
import { useLanguage } from "@/context/LanguageContext";
import { ChevronDown } from "lucide-react";

export default function Home() {
  const { isLoading } = useLoading();
  const { t } = useLanguage();

  const handleScrollDown = () => {
    const aboutSection = document.getElementById("about");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="container mx-auto px-4">
      <div className="min-h-screen flex flex-col justify-center items-center text-center relative">
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={isLoading ? {} : { opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl md:text-8xl font-bold tracking-tight mb-4"
        >
          {t.hero.title}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isLoading ? {} : { opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-lg md:text-2xl text-gray-300"
        >
          {t.hero.subtitle}
        </motion.p>

        {!isLoading && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="absolute bottom-[148px]"
          >
            <button
              onClick={handleScrollDown}
              className="flex flex-col items-center text-gray-400 hover:text-white transition-colors focus:outline-none"
              aria-label={t.hero.scrollDown}
            >
              <span className="text-sm mb-2">{t.hero.scrollDown}</span>
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              >
                <ChevronDown size={32} />
              </motion.div>
            </button>
          </motion.div>
        )}
      </div>

      <div id="about">
        <ScrollReveal>
          <div className="py-24 text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-8">
              {t.about.title}
            </h2>
            <p className="max-w-3xl mx-auto text-lg text-gray-400 mb-12">
              {t.about.description}
            </p>
            <Link
              href="/projects"
              className="inline-block bg-white text-black font-bold py-4 px-8 rounded-md hover:bg-gray-200 transition-colors text-lg"
            >
              {t.about.button}
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </div>
  );
}
