"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import ScrollReveal from "@/components/ScrollReveal";
import SpeedReliability from "@/components/SpeedReliability";
import { useLoading } from "@/context/LoadingContext";
import { useLanguage } from "@/context/LanguageContext";
import { useAi } from "@/context/AiContext";
import { ChevronDown, Sparkles } from "lucide-react";

export default function Home() {
  const { isLoading } = useLoading();
  const { t } = useLanguage();
  const { openAiModal } = useAi();

  const handleScrollDown = () => {
    const nextSection = document.getElementById("speed-reliability");
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="container mx-auto px-4">
      <div className="min-h-screen flex flex-col justify-center items-center text-center relative pb-24">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isLoading ? {} : { opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="relative w-24 h-24 md:w-32 md:h-32 mb-6"
        >
          <Image
            src="https://i.imgur.com/2PponBY.png"
            alt="Grozan Studio Logo"
            fill
            className="object-contain"
          />
        </motion.div>
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
          className="text-lg md:text-2xl text-gray-300 mb-10"
        >
          {t.hero.subtitle}
        </motion.p>

        {!isLoading && (
          <>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="mb-24"
            >
               <button
                onClick={openAiModal}
                className="group bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300 shadow-lg shadow-indigo-500/25 flex items-center justify-center gap-2 mx-auto"
              >
                <Sparkles className="w-5 h-5 text-yellow-300 animate-pulse" />
                {t.hero.aiStart}
              </button>
            </motion.div>

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
          </>
        )}
      </div>

      <div id="speed-reliability">
        <SpeedReliability />
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
