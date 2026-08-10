import React from "react";
import { projects, section_description } from "../data";
import { projects_es, section_description_es } from "../data_es";
import { useLanguage } from "../LanguageContext";

export default function Projects() {
  const { language } = useLanguage();
  const currentProjects = language === "en" ? projects : projects_es;
  const currentSectionDescription =
    language === "en" ? section_description : section_description_es;

  return (
    <>
      <section id='projects' className='section-wrapper'>
        <div className='content-box'>
          <h2 className='section-title'>
            {language === "en" ? "Projects" : "Proyectos"}
          </h2>
          {currentSectionDescription.map((des, index) =>
            des.section === "Projects" || des.section === "Proyectos" ? (
              <p
                className='blog-description-text'
                dangerouslySetInnerHTML={{ __html: des.description }}
                key={index}
              />
            ) : null
          )}
        </div>
        <div className='projects-list'>
          {currentProjects.map((project) => (
            <a
              href={project.link}
              key={`${project.title}-${project.subtitle}`}
              className={`project-link ${project.class}`}
              target='_blank'
              rel='noreferrer'
            >
              <div className='project-image' key={project.title}>
                <img
                  className='project-img'
                  src={project.cover}
                  alt={project.title}
                  width='800'
                  height='800'
                  loading='lazy'
                />
              </div>
              <div className='project-info' key={project.subtitle}>
                <h3 className='project-title'>
                  {project.title}
                  <span className='project-subtitle'>{project.subtitle}</span>
                </h3>
                {/* Meta tags with Read Article */}
                {((project.blog_link && project.blog_link !== "") ||
                  (project.github_link && project.github_link !== "")) && (
                  <div className='project-meta-links'>
                    {project.blog_link && project.blog_link !== "" && (
                      <span
                        className='project-meta-tag project-meta-tag--blog'
                        onClick={(e) => {
                          e.stopPropagation();
                          e.preventDefault();
                          window.open(project.blog_link, "_blank", "noreferrer");
                        }}
                      >
                        {language === "en" ? "Read Article" : "Leer Artículo"}
                      </span>
                    )}
                    {project.github_link && project.github_link !== "" && (
                      <span
                        className='project-meta-tag project-meta-tag--github'
                        onClick={(e) => {
                          e.stopPropagation();
                          e.preventDefault();
                          window.open(project.github_link, "_blank", "noreferrer");
                        }}
                      >
                        GitHub
                      </span>
                    )}
                  </div>
                )}
                <div className='project-info-sub'>
                  <h4 className='project-category'>{project.category}</h4>
                  <ul className='project-tags'>
                    {project.tags.map((tag, index) => (
                      <li key={index}>{tag}</li>
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
