import React from "react";
import { projects } from "../data";

export default function Projects() {
  return (
    <>
      <section id="projects" className="projects">
        <h2 className="section-title">Projects</h2>
        <div className="projects-list">
          {projects.map((project) => (
            <a href={project.link} key={project.cover} className="project-link">
              <div className="project-image">
                <img
                  className="project-img"
                  src={project.cover}
                  alt={project.title}
                />
              </div>
              <div className="project-info">
                <h3>
                  {project.title}
                  <span className="project-subtitle">{project.subtitle}</span>
                </h3>
                <div className="project-info-sub">
                  <h4 className="project-category">{project.category}</h4>
                  <ul className="project-tags">
                    {project.tags.map((tag) => (
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
