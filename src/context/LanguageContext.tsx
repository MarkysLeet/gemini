"use client";

import React, { createContext, useContext, useState, ReactNode, useEffect } from "react";
import { translations, Translation } from "@/data/translations";

type Language = "ru" | "en" | "tr";

interface LanguageContextProps {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: Translation;
}

const LanguageContext = createContext<LanguageContextProps | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  // Initialize with a default language, but check localStorage on mount
  const [language, setLanguageState] = useState<Language>("ru");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
      setMounted(true);
      const savedLang = localStorage.getItem("grozan-lang") as Language;
      if (savedLang && ["ru", "en", "tr"].includes(savedLang)) {
          setLanguageState(savedLang);
      }
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem("grozan-lang", lang);
  };

  // Update document lang attribute
  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  // During server-side rendering or hydration, use default 'ru'
  // Once mounted, we can use the user's preference
  const currentLang = mounted ? language : "ru";

  return (
    <LanguageContext.Provider
      value={{
        language: currentLang,
        setLanguage,
        t: translations[currentLang],
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
