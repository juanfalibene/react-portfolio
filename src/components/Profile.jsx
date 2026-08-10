import React, { useState } from "react";
import { about } from "../data";
import { about_es } from "../data_es";
import { About } from "./About";
import Clients from "./Clients";
import Skills from "./Skills";
import Certificates from "./Certificates";
import Resumes from "./Resumes";
import { useLanguage } from "../LanguageContext";

export default function Profile() {
  const [activeContainer, setActiveContainer] = useState(null);
  const { language, t } = useLanguage();

  const showContainer = (componentName) => (e) => {
    e.preventDefault();
    setActiveContainer((current) =>
      current === componentName ? null : componentName
    );
  };

  const aboutData = language === "en" ? about : about_es;

  return (
    <section id='profile' className='profile section-wrapper'>
      <div className='content-box'>
        <h2 className='section-title' id='profile-title'>
          {t("profile")}
        </h2>

        {/* 2-Column Profile layout: Bio Lead & Story (Left) + Photo Card (Right) */}
        {aboutData.map((info) => (
          <div key={info.name} className='profile-two-col'>
            {/* Left Column: Lead paragraph & Secondary story */}
            <div className='profile-col-left'>
              <p
                className='profile-lead-text'
                dangerouslySetInnerHTML={{
                  __html: info.bio_lead || info.bio_excerpt,
                }}
              />
              <p
                className='profile-about-text'
                dangerouslySetInnerHTML={{
                  __html: info.bio_story || info.bio,
                }}
              />
            </div>

            {/* Right Column: Photo Card with Role & Location */}
            <div className='profile-col-right'>
              <div className='profile-photo-card'>
                <div className='profile-photo-wrapper'>
                  <img
                    src={info.imagePic}
                    alt={info.name}
                    className='profile-photo-img'
                    width='400'
                    height='400'
                    loading='lazy'
                  />
                </div>
                <div className='profile-photo-meta'>
                  <h3 className='profile-photo-role'>{info.profession}</h3>
                  <span className='profile-photo-location'>
                    <span className='profile-photo-dot' aria-hidden='true'></span>
                    {info.text}
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* Skills */}
        <div className='profile-skills'>
          <h3 className='profile-skills-title'>{t("skills")}</h3>
          <Skills />
        </div>

        {/* Expandable accordion tabs */}
        <div className='about-experience'>
          <ul className='profile-about-links-list'>
            <li>
              <button
                onClick={showContainer("About")}
                className={
                  activeContainer === "About" ? "expands-container-active" : ""
                }
              >
                {t("experience")}
              </button>
              {activeContainer === "About" && (
                <div className='experience active'>
                  <About key='about-panel' />
                </div>
              )}
            </li>
            <li>
              <button
                onClick={showContainer("Clients")}
                className={
                  activeContainer === "Clients"
                    ? "expands-container-active"
                    : ""
                }
              >
                {t("collaborations")}
              </button>
              {activeContainer === "Clients" && (
                <div className='experience active'>
                  <Clients key='clients-panel' />
                </div>
              )}
            </li>
            <li>
              <button
                onClick={showContainer("Certificates")}
                className={
                  activeContainer === "Certificates"
                    ? "expands-container-active"
                    : ""
                }
              >
                {t("certificates")}
              </button>
              {activeContainer === "Certificates" && (
                <div className='experience active'>
                  <Certificates key='certs-panel' />
                </div>
              )}
            </li>
            <li>
              <button
                onClick={showContainer("Resumes")}
                className={
                  activeContainer === "Resumes"
                    ? "expands-container-active"
                    : ""
                }
              >
                {t("resume")}
              </button>
              {activeContainer === "Resumes" && (
                <div className='experience active'>
                  <Resumes key='resumes-panel' />
                </div>
              )}
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
