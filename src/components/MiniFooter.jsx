import React, { useState, useEffect } from "react";
import { about_links } from "../data";
import { about_links_es } from "../data_es";
import { useLanguage } from "../LanguageContext";

const MiniFooter = () => {
  const { language } = useLanguage();
  const currentAboutLinks = language === "en" ? about_links : about_links_es;

  const clock = () => {
    const date = new Date();
    const h = date.getHours();
    const m = date.getMinutes();
    const s = date.getSeconds();
    const format = (num) => (num < 10 ? `0${num}` : num);
    return `${format(h)}:${format(m)}:${format(s)}`;
  };

  const [time, setTime] = useState(clock());

  const credit_links = currentAboutLinks.filter(
    (link_credit) => link_credit.category === "credit"
  );

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(clock());
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <div className='intro-mini-footer'>
      {/* 1. Credits & Time */}
      <div className='footer-credits-group'>
        <ul className='footer-links' id='credits'>
          {credit_links.map((link_cre) => (
            <li key={link_cre.name}>{link_cre.name}</li>
          ))}
          <li className='footer-time'>{time}</li>
        </ul>
      </div>

      {/* 2. Portfolio build with React */}
      <p>
        {language === "en" ? "Portfolio build with" : "Creado con"}
        <img
          src='/img/skills/react.svg'
          className='hero-hard-skill-img'
          alt='react-framework'
          width='24'
          height='24'
          loading='lazy'
        />
      </p>

      {/* 3. Repositories on Github */}
      <p>
        <a
          href='https://github.com/juanfalibene'
          target='_blank'
          rel='noreferrer'
        >
          {language === "en" ? "Repositories on" : "Código en"}
          <img
            src='/img/skills/github-mark-white.svg'
            className='hero-hard-skill-img'
            id='github'
            alt='github.com'
            width='24'
            height='24'
            loading='lazy'
          />
        </a>
      </p>
    </div>
  );
};

export default MiniFooter;
