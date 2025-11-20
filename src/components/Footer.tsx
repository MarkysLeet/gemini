"use client";

import { useLanguage } from "@/context/LanguageContext";
import { Instagram } from "lucide-react";

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="w-full p-8 flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
      <p>&copy; {new Date().getFullYear()} {t.footer.rights}</p>
      <div className="flex flex-col md:flex-row items-center gap-4 md:gap-6">
        <a href="mailto:grozan.studio@gmail.com" className="hover:text-white transition-colors">grozan.studio@gmail.com</a>
        <a href="tel:+905418462550" className="hover:text-white transition-colors">+90 541 846 25 50</a>
        <a
          href="https://www.instagram.com/grozan.studio/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 hover:text-white transition-colors"
          aria-label="Instagram"
        >
          <Instagram className="w-5 h-5" />
          <span className="md:hidden">Instagram</span>
        </a>
      </div>
    </footer>
  );
}
