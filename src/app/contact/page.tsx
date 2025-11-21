"use client";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import ScrollReveal from "@/components/ScrollReveal";
import { useLanguage } from "@/context/LanguageContext";
import { Mail, Phone, Instagram, ArrowRight } from "lucide-react";

export default function ContactPage() {
  const { t } = useLanguage();
  const [result, setResult] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {
    const savedPlan = sessionStorage.getItem('grozan-ai-plan');
    if (savedPlan) {
      setMessage(savedPlan);
      sessionStorage.removeItem('grozan-ai-plan');
    }
  }, []);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setResult(t.contact.sending);
    const formData = new FormData(event.currentTarget);

    formData.append("access_key", "YOUR_ACCESS_KEY_HERE"); // Замените на ваш ключ от web3forms

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult(t.contact.success);
      (event.target as HTMLFormElement).reset();
    } else {
      console.log("Error", data);
      setResult(t.contact.error);
    }
  };

  const contactBlocks = [
    {
      icon: <Mail className="w-6 h-6" />,
      label: "Email",
      value: "grozan.studio@gmail.com",
      href: "mailto:grozan.studio@gmail.com",
    },
    {
      icon: <Phone className="w-6 h-6" />,
      label: "WhatsApp / Tel",
      value: "+90 541 846 25 50",
      href: "tel:+905418462550",
    },
    {
      icon: <Instagram className="w-6 h-6" />,
      label: "Instagram",
      value: "@grozan.studio",
      href: "https://www.instagram.com/grozan.studio/",
      external: true,
    },
  ];

  return (
    <div className="container mx-auto px-4 py-16">
      <motion.h1
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-5xl font-bold mb-12 text-center"
      >
        {t.contact.title}
      </motion.h1>
      <div className="grid md:grid-cols-2 gap-16 items-start">
        {/* Contact Info Blocks */}
        <ScrollReveal>
          <div className="space-y-6">
            {contactBlocks.map((block, index) => (
              <a
                key={index}
                href={block.href}
                target={block.external ? "_blank" : undefined}
                rel={block.external ? "noopener noreferrer" : undefined}
                className="block group"
              >
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 flex items-center justify-between transition-all duration-300 group-hover:bg-white/10 group-hover:border-white/20 group-hover:translate-x-1">
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-white/10 rounded-full text-white group-hover:bg-white group-hover:text-black transition-colors">
                      {block.icon}
                    </div>
                    <div>
                      <p className="text-sm text-gray-400 font-medium">{block.label}</p>
                      <p className="text-lg font-semibold text-white group-hover:text-purple-200 transition-colors">
                        {block.value}
                      </p>
                    </div>
                  </div>
                  <ArrowRight className="w-5 h-5 text-gray-500 group-hover:text-white transition-colors transform group-hover:translate-x-1" />
                </div>
              </a>
            ))}
          </div>
        </ScrollReveal>

        {/* Contact Form */}
        <ScrollReveal delay={0.2}>
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8">
            <h2 className="text-2xl font-bold mb-6">{t.contact.title}</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <input type="hidden" name="from_name" value="Grozan Studio Site" />
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-2">
                  {t.contact.name}
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full bg-black/50 border border-white/10 rounded-lg py-3 px-4 focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-transparent transition-all placeholder-gray-600"
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-2">
                  {t.contact.email}
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full bg-black/50 border border-white/10 rounded-lg py-3 px-4 focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-transparent transition-all placeholder-gray-600"
                  placeholder="john@example.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-2">
                  {t.contact.message}
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  required
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full bg-black/50 border border-white/10 rounded-lg py-3 px-4 focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-transparent transition-all placeholder-gray-600 resize-none custom-scrollbar"
                  placeholder={t.contact.message}
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-white text-black font-bold py-4 px-6 rounded-lg hover:bg-gray-200 transition-colors flex items-center justify-center gap-2 group"
              >
                <span>{t.contact.send}</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
              {result && <p className="text-center mt-4 text-gray-300">{result}</p>}
            </form>
          </div>
        </ScrollReveal>
      </div>
    </div>
  );
}
