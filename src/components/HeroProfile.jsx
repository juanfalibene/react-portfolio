import React from "react";
import { about } from "../data";
import { about_es } from "../data_es";
import { useLanguage } from "../LanguageContext";

const HeroProfile = () => {
  const { language } = useLanguage();
  const currentAbout = language === "en" ? about : about_es;

  return (
    <>
      {currentAbout.map((info) => (
        <div className='hero-data' key={info.name} id='pic'>
          <img
            src={info.imagePic}
            alt={info.name}
            className='hero-profile-img-pic'
          />
          <div className='pic-text-container'>
            <h2
              className='hero-profile-title-pic'
              dangerouslySetInnerHTML={{
                __html: info.profession.split("&").join("&<br />"),
              }}
            ></h2>
            <p
              className='hero-profile-text-pic'
              dangerouslySetInnerHTML={{
                __html: info.text.split(" ").join("<br />"),
              }}
            ></p>
          </div>
        </div>
      ))}
    </>
  );
};

export default HeroProfile;
