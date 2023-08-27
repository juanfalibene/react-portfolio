import React from "react";
import { works } from "../data";

export default function Works() {
  return (
    <>
      <section id="works" className="projects">
        <h2 className="section-title">Works</h2>
        <div className="projects-list">
          {works.map((work) => (
            <a href={work.link} key={work.cover} className="project-link">
              <div className="project-image">
                <img
                  className="project-img"
                  src={work.cover}
                  alt={work.title}
                />
              </div>
              <div className="project-info">
                <h3>
                  {work.title}
                  <span className="project-subtitle">{work.subtitle}</span>
                </h3>
                <div className="project-info-sub">
                  <h4 className="project-category">{work.category}</h4>
                  <ul className="project-tags">
                    {work.tags.map((tag) => (
                      <li>{tag}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </a>
          ))}
        </div>
      </section>
    </>
  );
}
