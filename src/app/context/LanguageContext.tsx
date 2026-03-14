import React, { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { en } from "../locales/en";
import { uk } from "../locales/uk";

type Language = "en" | "uk";
type Translations = typeof en;

interface LanguageContextProps {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextProps | undefined>(undefined);

const translations: Record<Language, Translations> = { en, uk };

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>("en");

  // Load selected language from localStorage on mount
  useEffect(() => {
    const savedLang = localStorage.getItem("app-language") as Language;
    if (savedLang && (savedLang === "en" || savedLang === "uk")) {
      setLanguageState(savedLang);
    }
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem("app-language", lang);
  };

  const t = (key: string): string => {
    const keys = key.split(".");
    let current: any = translations[language];

    // Fallback to English if translation is missing in Ukrainian
    let fallback: any = translations["en"];

    for (const k of keys) {
      if (current[k] === undefined) {
        current = undefined;
        break;
      }
      current = current[k];
    }

    if (current === undefined) {
      for (const k of keys) {
        if (fallback[k] === undefined) return key; // Return the key itself if not found anywhere
        fallback = fallback[k];
      }
      return fallback;
    }

    return current;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextProps => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
