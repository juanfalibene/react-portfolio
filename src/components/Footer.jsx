import React, { useState, useEffect } from "react";
import { about_links } from "../data";
import MiniFooter from "./MiniFooter";

export default function Footer() {
  const professional_links = about_links.filter(
    (link_pro) => link_pro.category === "professional"
  );
  const personal_links = about_links.filter(
    (link_per) => link_per.category === "personal"
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


          <MiniFooter />
        </div>
      </footer>
    </>
  );
}
