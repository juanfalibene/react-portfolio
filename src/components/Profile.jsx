import React, { useState } from "react";
import { about } from "../data";
import { About } from "./About";
import Clients from "./Clients";
import Skills from "./Skills";
import Certificates from "./Certificates";
import Resumes from "./Resumes";

export default function Profile() {
  const [activeContainer, setActiveContainer] = useState(null);

  const showContainer = (componentName) => (e) => {
    e.preventDefault();
    setActiveContainer((current) =>
      current === componentName ? null : componentName
    );
  };

  return (
    <section id='profile' className='profile'>
      {about.map((text) => (
        <div className='profile-about-info' key={text.name}>
          <h2 className='section-title' id='profile-title'>
            Profile
          </h2>
          <p className='profile-about-text'>{text.bio_excerpt}</p>
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
                  Experience
                </button>
                {activeContainer === "About" && (
                  <div className={`experience active`}>
                    <About key={"about-container-expands"} />
                  </div>
                )}
              </li>
              <li>
                <button
                  onClick={showContainer("Skills")}
                  className={
                    activeContainer === "Skills"
                      ? "expands-container-active"
                      : ""
                  }
                >
                  Skills
                </button>
                {activeContainer === "Skills" && (
                  <div className={`experience active`}>
                    <Skills key={"skills-container-expands"} />
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
                  Collaborations
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
                  Certificates
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
                  Resume
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
