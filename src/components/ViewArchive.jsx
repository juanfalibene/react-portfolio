import React from "react";
import { useLanguage } from "../LanguageContext";

const ViewArchive = () => {
  const { language } = useLanguage();
  return (
    <div className='section-cta-container'>
      <p className='section-cta-prompt'>
        {language === "en"
          ? "Looking for more client case studies, custom builds, and past delivered work?"
          : "¿Quieres ver más casos de estudio, desarrollos a medida y proyectos anteriores?"}
      </p>
      <a
        href='https://juanfalibene.com/writing/#/archive'
        className='section-cta-button'
        rel='noreferrer nofollow noopener'
      >
        {language === "en" ? "EXPLORE FULL ARCHIVE →" : "EXPLORAR ARCHIVO COMPLETO →"}
      </a>
    </div>
  );
};

export default ViewArchive;