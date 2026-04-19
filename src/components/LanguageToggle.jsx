import React from "react";
import { useLanguage } from "../LanguageContext";

const LanguageToggle = () => {
  const { language, toggleLanguage } = useLanguage();

  return (
    <li className='nav-item' id='language-toggle'>
      <a 
        href="#language"
        onClick={(e) => {
          e.preventDefault();
          toggleLanguage();
        }}
        alt='Language Toggle'
      >
        {language === "en" ? "ES" : "EN"}
      </a>
    </li>
  );
};

export default LanguageToggle;
