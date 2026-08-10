import React from "react";
import { hero_content } from "../data";
import { hero_content_es } from "../data_es";
import { useLanguage } from "../LanguageContext";

const HeroManifesto = () => {
  const { language } = useLanguage();
  const content = language === "en" ? hero_content : hero_content_es;

  return (
    <div className='hero-manifesto' id='hero-manifesto'>
      <div className='hero-manifesto-two-col'>
        {/* Left Column: Headline & Subtitle */}
        <div className='hero-manifesto-col-left'>
          <h2 className='hero-manifesto-headline'>{content.headline}</h2>
          <p className='hero-manifesto-subtitle'>{content.subtitle}</p>
        </div>

        {/* Right Column: Highlighted Criteria Manifesto Card */}
        <div className='hero-manifesto-col-right'>
          <blockquote className='hero-manifesto-card'>
            <div className='hero-manifesto-card-icon' aria-hidden='true'>“</div>
            <p className='hero-manifesto-card-text'>{content.manifesto}</p>
          </blockquote>
        </div>
      </div>
    </div>
  );
};

export default HeroManifesto;
