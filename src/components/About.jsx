import React from "react";
import { about } from "../data";
import { about_es } from "../data_es";
import { useLanguage } from "../LanguageContext";

export const About = () => {
  const { language } = useLanguage();
  const currentAbout = language === "en" ? about : about_es;

  return (
    <>
      {currentAbout.map((bio) => (
        <p
          key={bio.name + bio.profession}
          className='about-experience-description-text'
          dangerouslySetInnerHTML={{ __html: bio.bio }}
        />
      ))}
    </>
  );
};
