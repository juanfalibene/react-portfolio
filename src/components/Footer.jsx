import React, { useState, useEffect } from "react";
import { about_links } from "../data";
import MiniFooter from "./MiniFooter";

export default function Footer() {
  const clock = () => {
    const date = new Date();
    const h = date.getHours();
    const m = date.getMinutes();
    const s = date.getSeconds();
    return `${h}:${m}:${s}`;
  };
  const [time, setTime] = useState(clock());
  const professional_links = about_links.filter(
    (link_pro) => link_pro.category === "professional"
  );
  const personal_links = about_links.filter(
    (link_per) => link_per.category === "personal"
  );
  const credit_links = about_links.filter(
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

          <ul className='footer-links' id='credits'>
            {credit_links.map((link_cre) => (
              <li key={link_cre.name}>{link_cre.name}</li>
            ))}
            <li>{time}</li>
          </ul>
          <MiniFooter />
        </div>
      </footer>
    </>
  );
}
