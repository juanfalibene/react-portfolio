import React from "react";
import { about, clients, hard_skills, soft_skills } from "../data";

export default function Profile() {
  return (
    <>
      <section id="profile" className="profile">
        <h2 className="section-title">Profile</h2>
        {about.map((text) => (
          <div className="profile-about-info" key={text.name}>
            <p>{text.text}</p>
            <div className="profile-about-links">
              <ul className="profile-about-links-list">
                <li key={text.about_page}>
                  <a href={text.about_page}>About Me</a>
                </li>
                <li key={text.resume_page}>
                  <a href={text.resume_page}>View Resume</a>
                </li>
              </ul>
            </div>
          </div>
        ))}
        <div className="about-experience">
          <div className="experience">
            <h3 className="about-subtitle">Collaborations</h3>
            <ul className="about-clients">
              {clients.map((client) => (
                <li key={client.name}>
                  <a
                    href={client.link}
                    target="_blank"
                    rel="noreferrer"
                    alt={client.name}
                  >
                    {client.name}
                    <span className="client-since">{client.since}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="experience">
            <h3 className="about-subtitle">Soft Skills</h3>
            <ul className="about-soft-skills">
              {soft_skills.map((soft_skill) => (
                <li className="soft-skill-item" key={soft_skill.soft_skills}>
                  {soft_skill.soft_skills}
                </li>
              ))}
            </ul>
          </div>

          <div className="experience">
            <h3 className="about-subtitle">Hard Skills</h3>
            <ul className="about-hard-skills">
              {hard_skills.map((hard_skill) => (
                <li className="hard-skill-item" key={hard_skill.skill}>
                  <img
                    className="hard-skill-img"
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
