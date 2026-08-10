import React, { useState, useEffect } from "react";
import { useLanguage } from "../LanguageContext";
import { Link } from "react-router-dom";

const formatTime = () => {
  const date = new Date();
  const h = String(date.getHours()).padStart(2, "0");
  const m = String(date.getMinutes()).padStart(2, "0");
  const s = String(date.getSeconds()).padStart(2, "0");
  return `${h}:${m}:${s}`;
};

export default function Footer() {
  const { language, openPrivacyModal } = useLanguage();
  const [time, setTime] = useState(formatTime());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(formatTime());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <footer className='footer' id='footer'>
      <div className='footer-container'>

        {/* ── 5 Columns Layout (2 links per column) ── */}
        <div className='footer-columns-grid'>

          {/* Col 1: Quick Links */}
          <div className='footer-col'>
            <h4 className='footer-col-title'>
              {language === "en" ? "Quick Links" : "Quick Links"}
            </h4>
            <ul className='footer-col-list'>
              <li>
                <Link to='/services' className='footer-link'>
                  {language === "en" ? "Services" : "Servicios"}
                </Link>
              </li>
              <li>
                <Link to='/contact' className='footer-link'>
                  {language === "en" ? "Contact" : "Contacto"}
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 2: Profesional */}
          <div className='footer-col'>
            <h4 className='footer-col-title'>
              {language === "en" ? "Professional" : "Profesional"}
            </h4>
            <ul className='footer-col-list'>
              <li>
                <a
                  href='https://www.linkedin.com/in/juanfalibene/'
                  className='footer-link'
                  target='_blank'
                  rel='noreferrer'
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href='https://github.com/juanfalibene'
                  className='footer-link'
                  target='_blank'
                  rel='noreferrer'
                >
                  GitHub
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Intereses */}
          <div className='footer-col'>
            <h4 className='footer-col-title'>
              {language === "en" ? "Interests" : "Intereses"}
            </h4>
            <ul className='footer-col-list'>
              <li>
                <a
                  href='https://juanfalibene.com/writing/'
                  className='footer-link'
                  target='_blank'
                  rel='noreferrer'
                >
                  Blog
                </a>
              </li>
              <li>
                <a
                  href='https://music.juanfalibene.com'
                  className='footer-link'
                  target='_blank'
                  rel='noreferrer'
                >
                  Music
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4: Side Projects */}
          <div className='footer-col'>
            <h4 className='footer-col-title'>
              {language === "en" ? "Side Projects" : "Side Projects"}
            </h4>
            <ul className='footer-col-list'>
              <li>
                <a
                  href='http://dev.juanfalibene.com/discava/index.html'
                  className='footer-link'
                  target='_blank'
                  rel='noreferrer'
                >
                  Discava!
                </a>
              </li>
              <li>
                <a
                  href='https://links.juanfalibene.com/dev-tree'
                  className='footer-link'
                  target='_blank'
                  rel='noreferrer'
                >
                  Dev &amp; UX
                </a>
              </li>
            </ul>
          </div>

          {/* Col 5: Build / Source — GitHub first, then React icon + heart */}
          <div className='footer-col'>
            <h4 className='footer-col-title'>
              {language === "en" ? "About This Site" : "Esta Web"}
            </h4>
            <ul className='footer-col-list'>
              <li>
                <a
                  href='https://github.com/juanfalibene/react-portfolio'
                  className='footer-link'
                  target='_blank'
                  rel='noreferrer'
                >
                  {language === "en" ? "Code on GitHub" : "Código en GitHub"}
                </a>
              </li>
              <li>
                <span className='footer-link footer-link--built'>
                  {language === "en" ? "Built with" : "Creado con"}{" "}
                  <img
                    src='/img/skills/react.svg'
                    alt='React'
                    className='footer-react-icon'
                    width='15'
                    height='15'
                    loading='lazy'
                  />{" "}
                  ❤️
                </span>
              </li>
            </ul>
          </div>

        </div>

        {/* ── Fixed Bottom Bar: Credits & Time ── */}
        <div className='footer-bottom-bar'>
          <div className='footer-bottom-credits'>
            <span>© Juan Falibene 2026</span>
            <span className='footer-bottom-dot'>•</span>
            <span>Barcelona</span>
            <span className='footer-bottom-dot'>•</span>
            <button
              type='button'
              className='footer-privacy-btn'
              onClick={openPrivacyModal}
            >
              {language === "en" ? "Privacy & Cookies" : "Privacidad y Cookies"}
            </button>
          </div>
          <div className='footer-bottom-clock'>
            <span className='footer-time-val'>{time}</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
