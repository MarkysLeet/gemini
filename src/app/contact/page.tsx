"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import ScrollReveal from "@/components/ScrollReveal";
import { useLanguage } from "@/context/LanguageContext";

export default function ContactPage() {
  const { t } = useLanguage();
  const [result, setResult] = useState("");

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
        <ScrollReveal>
          <div>
            <h2 className="text-3xl font-bold mb-6">{t.contact.title}</h2>
            <div className="space-y-4 text-lg">
              <p>
                <strong>{t.contact.email}:</strong> <a href="mailto:grozantwink@gmail.com" className="hover:underline">grozantwink@gmail.com</a>
              </p>
              <p>
                <strong>WhatsApp / Tel:</strong> <a href="tel:+905418462550" className="hover:underline">+90 541 846 25 50</a>
              </p>
              <p className="pt-4">
               {/* Using a generic translated message or falling back to english if not in dict */}
               {/* Since I didn't add a specific key for "Ready to discuss...", I'll leave it static or generic for now, or add it. */}
               {/* Actually, let's just leave the contact info clear. */}
              </p>
            </div>
          </div>
        </ScrollReveal>
        <ScrollReveal delay={0.2}>
          <form onSubmit={handleSubmit} className="space-y-6">
            <input type="hidden" name="from_name" value="Grozan Studio Site" />
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-2">{t.contact.name}</label>
              <input type="text" id="name" name="name" required className="w-full bg-gray-900 border border-gray-700 rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-white" />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-2">{t.contact.email}</label>
              <input type="email" id="email" name="email" required className="w-full bg-gray-900 border border-gray-700 rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-white" />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-2">{t.contact.message}</label>
              <textarea id="message" name="message" rows={4} required className="w-full bg-gray-900 border border-gray-700 rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-white"></textarea>
            </div>
            <button type="submit" className="w-full bg-white text-black font-bold py-3 px-6 rounded-md hover:bg-gray-200 transition-colors">
              {t.contact.send}
            </button>
            {result && <p className="text-center mt-4">{result}</p>}
          </form>
        </ScrollReveal>
      </div>
    </div>
  );
}
