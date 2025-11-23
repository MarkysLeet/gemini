"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { Terminal, Layers, Code, Rocket } from "lucide-react";

export default function WorkProcess() {
  const { t } = useLanguage();
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const steps = [
    {
      icon: Terminal,
      color: "text-green-400",
      ...t.workProcess.steps[0]
    },
    {
        icon: Layers,
        color: "text-purple-400",
        ...t.workProcess.steps[1]
    },
    {
        icon: Code,
        color: "text-blue-400",
        ...t.workProcess.steps[2]
    },
    {
        icon: Rocket,
        color: "text-orange-400",
        ...t.workProcess.steps[3]
    },
  ];

  const lineHeight = useTransform(scrollYProgress, [0, 0.5], ["0%", "100%"]);

  return (
    <section ref={containerRef} className="py-24 relative overflow-hidden">
       {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-black/0 via-indigo-900/5 to-black/0 pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            {t.workProcess.title}
          </motion.h2>
        </div>

        <div className="relative max-w-4xl mx-auto">
            {/* Vertical Line (Base) */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gray-800 transform md:-translate-x-1/2" />

            {/* Vertical Line (Active/Animated) */}
            <motion.div
                style={{ height: lineHeight }}
                className="absolute left-4 md:left-1/2 top-0 w-0.5 bg-gradient-to-b from-indigo-500 via-purple-500 to-blue-500 transform md:-translate-x-1/2 origin-top"
            />

            <div className="space-y-12 md:space-y-24">
                {steps.map((step, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className={`relative flex flex-col md:flex-row gap-8 items-start ${
                            index % 2 === 0 ? "md:flex-row-reverse" : ""
                        }`}
                    >
                        {/* Timeline Dot */}
                        <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-black border-2 border-indigo-500 rounded-full transform -translate-x-[7px] md:-translate-x-1/2 mt-1.5 z-20 shadow-[0_0_15px_rgba(99,102,241,0.5)]" />

                        {/* Content Card */}
                        <div className={`pl-12 md:pl-0 w-full md:w-1/2 ${
                            index % 2 === 0 ? "md:pr-16 md:text-right" : "md:pl-16"
                        }`}>
                            <div className="bg-white/5 border border-white/10 p-6 rounded-2xl hover:bg-white/10 transition-colors duration-300 group">
                                <div className={`flex items-center gap-4 mb-4 ${
                                    index % 2 === 0 ? "md:flex-row-reverse" : ""
                                }`}>
                                    <div className={`p-3 rounded-lg bg-white/5 ${step.color}`}>
                                        <step.icon className="w-6 h-6" />
                                    </div>
                                    <h3 className="text-xl font-bold text-white">{step.title}</h3>
                                </div>
                                <p className="text-gray-400 leading-relaxed">
                                    {step.description}
                                </p>
                            </div>
                        </div>

                        {/* Empty space for the other side on desktop */}
                        <div className="hidden md:block w-1/2" />
                    </motion.div>
                ))}
            </div>
        </div>
      </div>
    </section>
  );
}
