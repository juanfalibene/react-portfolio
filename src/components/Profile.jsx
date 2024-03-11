import React, { useState } from "react";
import { about, clients, hard_skills, soft_skills } from "../data";
import { About } from "./About";

export default function Profile() {
  const [aboutContainer, setAboutContainer] = useState(false);

  const showAbout = (e) => {
    e.preventDefault();
    setAboutContainer((current) => !current);
  };
  const linkResume = (e) => {
    e.preventDefault();
    console.log("linka a resume");
    window.open("https://juanfalibene.com/resume", "_blank", "noreferrer");
  };
  return (
    <>
      <section id='profile' className='profile'>
        <h2 className='section-title'>Profile</h2>
        {about.map((text) => (
          <div className='profile-about-info' key={text.name}>
            <p className='profile-about-text'>{text.bio_excerpt}</p>
            <div className='profile-about-links'>
              <ul className='profile-about-links-list'>
                <li key={text.about_page}>
                  <button
                    onClick={showAbout}
                    className={aboutContainer ? "expands-container-active" : ""}
                  >
                    About
                  </button>
                </li>
                <li key={text.resume_page}>
                  <button onClick={linkResume}>Resume</button>
                </li>
              </ul>
            </div>
          </div>
        ))}
        <div className='about-experience'>
          <div className='about-expand-container'>
            {aboutContainer && <About key={"about-container-expands"} />}
          </div>
          <div className='experience'>
            <h3 className='about-subtitle'>Collaborations</h3>
            <ul className='about-clients'>
              {clients.map((client) => (
                <li key={client.name}>
                  <a
                    href={client.link}
                    target='_blank'
                    rel='noreferrer'
                    alt={client.name}
                  >
                    <span className='client-since'>{client.since}</span>
                    {client.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className='experience'>
            <h3 className='about-subtitle'>Soft Skills</h3>
            <ul className='about-soft-skills'>
              {soft_skills.map((soft_skill) => (
                <li className='soft-skill-item' key={soft_skill.skill}>
                  {soft_skill.skill}
                </li>
              ))}
            </ul>
          </div>

          <div className='experience'>
            <h3 className='about-subtitle'>Hard Skills</h3>
            <ul className='about-hard-skills'>
              {hard_skills.map((hard_skill) => (
                <li className='hard-skill-item' key={hard_skill.skill}>
                  <img
                    className='hard-skill-img'
                    src={hard_skill.image}
                    alt={hard_skill.skill}
                  />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
