"use client";

import { useLanguage } from "@/context/LanguageContext";

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="w-full p-8 flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
      <p>&copy; {new Date().getFullYear()} {t.footer.rights}</p>
      <div className="flex flex-col md:flex-row gap-2 md:gap-4">
        <a href="mailto:grozantwink@gmail.com" className="hover:text-white transition-colors">grozantwink@gmail.com</a>
        <a href="tel:+905418462550" className="hover:text-white transition-colors">+90 541 846 25 50</a>
      </div>
    </footer>
  );
}
