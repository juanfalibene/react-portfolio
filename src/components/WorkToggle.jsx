import React from "react";
import { about } from "../data";
import { about_es } from "../data_es";
import { useLanguage } from "../LanguageContext";
import { Link } from "react-router-dom";

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
            width='500'
            height='500'
            loading='lazy'
          />
        ))}
      </div>

      <Link to='/contact' className='work-toggle-btn'>
        {language === "en" ? "Let's Chat! →" : "¡Hablemos! →"}
      </Link>
    </div>
  );
};

export default WorkToggle;
