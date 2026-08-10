import React, { createContext, useState, useContext, useEffect } from "react";

const LanguageContext = createContext();

export const translations = {
  en: {
    menu: "Menu",
    close: "Close",
    profile: "Profile",
    works: "Works",
    blog: "Blog",
    projects: "Projects",
    contact: "Contact",
    experience: "Experience",
    collaborations: "Collaborations",
    certificates: "Certificates",
    resume: "Resume",
    skills: "Skills",
    services: "Services",
    servicesCtaBtn: "Explore my services",
    faqTitle: "Frequently Asked Questions",
    bestFitTitle: "Best Fit",
    notFitTitle: "Not a Fit",
    marketContextTitle: "Today's Digital Landscape: Why Technical Judgment Matters More Than Ever.",
    backToHome: "← Back to portfolio",
  },
  es: {
    menu: "Menú",
    close: "Cerrar",
    profile: "Perfil",
    works: "Trabajos",
    blog: "Blog",
    projects: "Proyectos",
    contact: "Contacto",
    experience: "Experiencia",
    collaborations: "Colaboraciones",
    certificates: "Certificados",
    resume: "Currículum",
    skills: "Habilidades",
    services: "Servicios",
    servicesCtaBtn: "Conoce mis servicios",
    faqTitle: "Preguntas Frecuentes",
    bestFitTitle: "Proyectos que encajan",
    notFitTitle: "Proyectos que NO encajan",
    marketContextTitle: "El panorama digital actual: Por qué el criterio técnico importa más que nunca.",
    backToHome: "← Volver al portfolio",
  },
};


export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState(
    localStorage.getItem("language") || "en"
  );

  useEffect(() => {
    localStorage.setItem("language", language);
    document.documentElement.lang = language;
  }, [language]);

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === "en" ? "es" : "en"));
  };

  const t = (key) => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
