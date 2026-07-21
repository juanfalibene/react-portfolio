import React from "react";
import { about_links } from "../data";
import { about_links_es } from "../data_es";
import MiniFooter from "./MiniFooter";
import { useLanguage } from "../LanguageContext";

export default function Footer() {
  const { language } = useLanguage();
  const currentAboutLinks = language === "en" ? about_links : about_links_es;

  const professional_links = currentAboutLinks.filter(
    (link_pro) => link_pro.category === "professional"
  );
  const personal_links = currentAboutLinks.filter(
    (link_per) => link_per.category === "personal"
  );
  const development_links = currentAboutLinks.filter(
    (link_dev) => link_dev.category === "development"
  );

  return (
    <>
      <footer className='footer' id='footer'>
        <div className='footer-container'>
          <ul className='footer-links' id='links'>
            {professional_links.map((link_pro) => (
              <li key={link_pro.name}>
                <a
                  href={link_pro.link}
                  alt={link_pro.name}
                  target='_blank'
                  rel='noreferrer'
                >
                  {link_pro.name}
                </a>
              </li>
            ))}
          </ul>
          <ul className='footer-links' id='mail'>
            {personal_links.map((link_per) => (
              <li key={link_per.name}>
                <a
                  href={link_per.link}
                  alt={link_per.name}
                  target='_blank'
                  rel='noreferrer'
                >
                  {link_per.name}
                </a>
              </li>
            ))}
          </ul>
          <ul className='footer-links' id='development'>
            {development_links.map((link_dev) => (
              <li key={link_dev.name}>
                <a
                  href={link_dev.link}
                  alt={link_dev.name}
                  target='_blank'
                  rel='noreferrer'
                >
                  {link_dev.name}
                </a>
              </li>
            ))}
          </ul>


          <MiniFooter />
        </div>
      </footer>
    </>
  );
}
