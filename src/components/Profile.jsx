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
      {aboutData.map((text) => (
        <div className='profile-about-info content-box' key={text.name}>
          <h2 className='section-title' id='profile-title'>
            {t("profile")}
          </h2>
          <p className='profile-about-text' dangerouslySetInnerHTML={{ __html: text.bio_excerpt }}></p>
          <p className='profile-about-text' dangerouslySetInnerHTML={{ __html: text.bio_values }}></p>
          <div className='profile-skills'>
            <h3 className='profile-skills-title'>{t("skills")}</h3>
            <Skills />
          </div>
        </div>
      ))}
      <div className='profile-about-info' id='accordion'>
        <div className='about-experience'>
          <div className='about-expand-container'>
            <ul className='profile-about-links-list'>
              <li>
                <button
                  onClick={showContainer("About")}
                  className={
                    activeContainer === "About"
                      ? "expands-container-active"
                      : ""
                  }
                >
                  {t("experience")}
                </button>
                {activeContainer === "About" && (
                  <div className={`experience active`}>
                    <About key={"about-container-expands"} />
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
                  <div className={`experience active`}>
                    <Clients key={"clients-container-expands"} />
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
                  <div className={`experience active`}>
                    <Certificates key={"certificates-container-expands"} />
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
                  <div className={`experience active`}>
                    <Resumes key={"resumes-container-expands"} />
                  </div>
                )}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
