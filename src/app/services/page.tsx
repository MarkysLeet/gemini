"use client";

import { motion } from "framer-motion";
import ScrollReveal from "@/components/ScrollReveal";
import {
  Check, Zap, Shield, Globe, Smartphone,
  FileBox, Phone, MapPin, Layers, Bot,
  Calendar, Languages, MessageSquare, QrCode, Database
} from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function ServicesPage() {
  const { t } = useLanguage();
  const phoneNumber = "905418462550";

  // Map the plans from context to the format expected by the render loop
  const plans = [
    {
      ...t.services.plans.start,
      price: "7,500 ₺ +",
      recommended: false,
    },
    {
      ...t.services.plans.base,
      price: "15,000 ₺ +",
      recommended: true,
    },
    {
      ...t.services.plans.profi,
      price: "30,000 ₺ +",
      recommended: false,
    },
  ];

  // Define icons for each plan's features
  // The order must match the order of features in translations.ts
  const planIcons = [
    // Plan 1: Start
    [
      <FileBox key="f1" className="w-5 h-5 text-purple-500" />, // One-page site
      <Phone key="f2" className="w-5 h-5 text-purple-500" />,   // WhatsApp Button
      <MapPin key="f3" className="w-5 h-5 text-purple-500" />,  // Google Maps
    ],
    // Plan 2: Base
    [
      <Layers key="f1" className="w-5 h-5 text-purple-500" />,    // Multi-page site
      <Bot key="f2" className="w-5 h-5 text-purple-500" />,       // AI Integration
      <Calendar key="f3" className="w-5 h-5 text-purple-500" />,  // Online form
      <Languages key="f4" className="w-5 h-5 text-purple-500" />, // Multilingual
    ],
    // Plan 3: Profi
    [
      <Check key="f1" className="w-5 h-5 text-purple-500" />,         // All from Business
      <MessageSquare key="f2" className="w-5 h-5 text-purple-500" />, // AI Chatbot
      <QrCode key="f3" className="w-5 h-5 text-purple-500" />,        // QR Menu
      <Database key="f4" className="w-5 h-5 text-purple-500" />,      // CRM Setup
    ],
  ];

  const commonFeaturesData = [
    {
      icon: <Smartphone className="w-6 h-6 text-purple-400" />,
      ...t.services.common.features.adaptive
    },
    {
      icon: <Zap className="w-6 h-6 text-purple-400" />,
      ...t.services.common.features.speed
    },
    {
      icon: <Globe className="w-6 h-6 text-purple-400" />,
      ...t.services.common.features.hosting
    },
    {
      icon: <Shield className="w-6 h-6 text-purple-400" />,
      ...t.services.common.features.security
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <div className="container mx-auto px-4 py-16">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h1 className="text-5xl font-bold mb-6">{t.services.title}</h1>
        <p className="text-gray-400 max-w-2xl mx-auto text-lg">
          {t.services.subtitle}
        </p>
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto items-start mb-24"
      >
        {plans.map((plan, planIndex) => (
          <motion.div
            key={planIndex}
            variants={itemVariants}
            className={`relative flex flex-col bg-gray-900/50 backdrop-blur-sm border rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/10 ${
              plan.recommended
                ? "border-purple-500 shadow-lg shadow-purple-500/20 scale-105 z-10"
                : "border-white/10 hover:border-white/20"
            }`}
          >
            {plan.recommended && (
              <div className="bg-purple-600 text-white text-xs font-bold uppercase tracking-wider py-1.5 text-center w-full absolute top-0 left-0">
                {t.services.recommended}
              </div>
            )}

            <div className={`p-8 flex-grow ${plan.recommended ? "pt-12" : ""}`}>
              <div className="mb-4">
                <h3 className="text-2xl font-bold text-white flex items-center gap-2">
                  {plan.title}
                  <span className="text-sm font-normal text-gray-400 bg-white/5 px-2 py-1 rounded-full">
                    {plan.subtitle}
                  </span>
                </h3>
                <p className="text-purple-400 font-medium mt-2 text-sm">{plan.type}</p>
              </div>

              <div className="mb-6">
                <span className="text-4xl font-bold text-white">{plan.price}</span>
              </div>

              <p className="text-gray-400 text-sm mb-6 leading-relaxed">
                {plan.description}
              </p>

              <div className="space-y-2 mb-8 text-sm text-gray-300">
                 <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-blue-400"></span>
                    <span><span className="text-white">{plan.duration}</span></span>
                 </div>
                 <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-green-400"></span>
                    <span>{plan.support}</span>
                 </div>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-gray-300">
                    <div className="flex-shrink-0 mt-0.5">
                        {planIcons[planIndex] && planIcons[planIndex][i] ? (
                            planIcons[planIndex][i]
                        ) : (
                            <Check className="w-5 h-5 text-purple-500" />
                        )}
                    </div>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-8 pt-0 mt-auto">
               <a
                href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(
                  `Здравствуйте, меня интересует тариф ${plan.title} (${plan.subtitle})`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className={`block w-full py-4 rounded-xl font-bold text-center transition-all duration-300 ${
                  plan.recommended
                    ? "bg-purple-600 hover:bg-purple-500 text-white shadow-lg shadow-purple-600/25"
                    : "bg-white/10 hover:bg-white/20 text-white"
                }`}
              >
                {t.services.selectPlan}
              </a>
            </div>
          </motion.div>
        ))}
      </motion.div>

      <div className="max-w-6xl mx-auto">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">{t.services.common.title}</h2>
          <p className="text-gray-400">{t.services.common.subtitle}</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
           {commonFeaturesData.map((feature, index) => (
              <ScrollReveal key={index} delay={index * 0.1}>
                 <div className="bg-white/5 border border-white/10 p-6 rounded-xl hover:bg-white/10 transition-colors text-center h-full">
                    <div className="bg-gray-900 w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-4">
                       {feature.icon}
                    </div>
                    <h3 className="text-lg font-bold text-white mb-2">{feature.title}</h3>
                    <p className="text-sm text-gray-400">{feature.description}</p>
                 </div>
              </ScrollReveal>
           ))}
        </div>
      </div>
    </div>
  );
}
