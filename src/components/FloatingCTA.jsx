import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useLanguage } from "../LanguageContext";

const FloatingCTA = () => {
  const { t, language } = useLanguage();
  const location = useLocation();
  const [visible, setVisible] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  const isStandalonePage =
    location.pathname === "/services" || location.pathname === "/contact";

  useEffect(() => {
    if (isStandalonePage) return;

    const heroEl = document.getElementById("intro");
    if (!heroEl) return;

    const observer = new IntersectionObserver(
      ([entry]) => setVisible(!entry.isIntersecting),
      { threshold: 0.1 }
    );

    observer.observe(heroEl);
    return () => observer.disconnect();
  }, [isStandalonePage, location.pathname]);

  if (isStandalonePage) return null;

  const show = visible && !dismissed;

  return (
    <div
      className={`floating-cta-card ${show ? "floating-cta-card--visible" : ""}`}
      role='complementary'
      aria-label={t("servicesCtaBtn")}
    >
      <button
        className='floating-cta-close'
        onClick={() => setDismissed(true)}
        aria-label='Close'
      >
        ×
      </button>
      <div className='floating-cta-body'>
        <p className='floating-cta-eyebrow'>WordPress &amp; Front-End</p>
        <p className='floating-cta-headline'>
          {language === "en"
            ? "Need a Tech Partner?"
            : "¿Buscas un Tech Partner?"}
        </p>
        <p className='floating-cta-sub'>
          {language === "en"
            ? "Technical criteria, reliability, and custom web development."
            : "Criterio técnico, fiabilidad y desarrollo web a medida."}
        </p>
        <div className='floating-cta-actions'>
          <Link
            to='/services'
            className='floating-cta-btn'
            id='floating-cta-button'
          >
            {t("servicesCtaBtn")}
          </Link>
          <Link
            to='/contact'
            className='floating-cta-btn-secondary'
          >
            {language === "en" ? "Book 30-min Call ↗" : "Agendar llamada 30 min ↗"}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FloatingCTA;
