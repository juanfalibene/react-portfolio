import React, { useEffect } from "react";
import Header from "../components/Header";
import Services from "../components/Services";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import { useLanguage } from "../LanguageContext";

export default function ServicesPage() {
  const { language } = useLanguage();

  // Update page title and meta for SEO
  useEffect(() => {
    const title =
      language === "en"
        ? "Services — Juan Falibene | Web Developer • WordPress & Front-End"
        : "Servicios — Juan Falibene | Desarrollador Web • WordPress & Front-End";
    document.title = title;

    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute(
        "content",
        language === "en"
          ? "WordPress technical audits, performance optimization, proactive maintenance, troubleshooting, consulting and launch support by Juan Falibene — based in Barcelona."
          : "Auditoría técnica WordPress, optimización de rendimiento, mantenimiento proactivo, resolución de problemas, consultoría y acompañamiento en lanzamientos por Juan Falibene — Barcelona."
      );
    }
  }, [language]);

  return (
    <div className='services-page-wrapper'>
      <Header />
      <main className='main-container' id='main-services'>
        <Services />
        <Contact />
        <Footer />
      </main>
    </div>
  );
}
