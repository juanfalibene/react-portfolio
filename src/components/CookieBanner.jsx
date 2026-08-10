import React, { useState, useEffect } from "react";
import { useLanguage } from "../LanguageContext";

export default function CookieBanner({ onOpenPrivacy }) {
  const { language } = useLanguage();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookie_consent");
    if (!consent) {
      // Delay slightly for smooth page entry
      const timer = setTimeout(() => setVisible(true), 1200);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookie_consent", "true");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <aside className='cookie-banner' role='region' aria-label='Privacy notice'>
      <div className='cookie-banner-inner'>
        <p className='cookie-banner-text'>
          {language === "en"
            ? "This site only uses essential local storage for theme and language preferences. No tracking cookies."
            : "Este sitio solo utiliza almacenamiento local esencial para recordar tu tema e idioma. Sin cookies de rastreo."}{" "}
          <button
            type='button'
            className='cookie-privacy-link'
            onClick={onOpenPrivacy}
          >
            {language === "en" ? "Privacy & Cookies" : "Privacidad y Cookies"}
          </button>
        </p>
        <button
          type='button'
          className='cookie-accept-btn'
          onClick={handleAccept}
        >
          {language === "en" ? "Got it" : "Entendido"}
        </button>
      </div>
    </aside>
  );
}
