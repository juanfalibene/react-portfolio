import React from "react";
import { about } from "../data";
import { about_es } from "../data_es";
import { useLanguage } from "../LanguageContext";

const WorkToggle = () => {
  const { language } = useLanguage();
  const currentAbout = language === "en" ? about : about_es;

  return (
      <div className='work-toggle-wrapper'>
        <div className='work-toggle-pic-area'>
          {currentAbout.slice(0, 1).map((info, index) => (
            <img
              key={index}
              src={info.imagePic}
              alt={info.name}
              className='work-toggle-img'
            />
          ))}
        </div>

        <a href='mailto:didea@juanfalibene.com' className='work-toggle-btn'>
          {language === "en" ? "Let's Chat!" : "¡Hablemos!"}
        </a>
      </div>
  );
};

export default WorkToggle;
