import React from "react";
import { projects, section_description } from "../data";
import { projects_es, section_description_es } from "../data_es";
import { useLanguage } from "../LanguageContext";

export default function Projects() {
  const { language, t } = useLanguage();
  const currentProjects = language === "en" ? projects : projects_es;
  const currentSectionDescription = language === "en" ? section_description : section_description_es;

  return (
    <>
      <section id='projects' className='section-wrapper'>
        <div className='content-box'>
          <h2 className='section-title'>{language === "en" ? "FrontEnd Projects" : "Proyectos FrontEnd"}</h2>
          {currentSectionDescription.map((des, index) =>
            des.section === "Projects" || des.section === "Proyectos" ? (
              <p className='blog-description-text' dangerouslySetInnerHTML={{ __html: des.description }} key={index}></p>
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
                {((project.blog_link && project.blog_link !== "") ||
                  (project.github_link && project.github_link !== "")) && (
                    <div className='project-links'>
                      <ul>
                        {project.github_link && project.github_link !== "" && (
                          <li>
                            <a
                              href={project.github_link}
                              key={project.github_link}
                              target='_blank'
                              rel='noreferrer'
                            >
                              <img
                                src='/img/skills/github-mark-white.svg'
                                className='github-project'
                                alt='github.com'
                                width='24'
                                height='24'
                                loading='lazy'
                              />
                            </a>
                          </li>
                        )}
                        {project.blog_link && project.blog_link !== "" && (
                          <li>
                            <a
                              href={project.blog_link}
                              key={project.blog_link}
                              target='_blank'
                              rel='noreferrer'
                            >
                              <img
                                src='/img/skills/blog-writing.svg'
                                className='blog-writing'
                                alt='read on my blog'
                                width='24'
                                height='24'
                                loading='lazy'
                              />
                            </a>
                          </li>
                        )}
                      </ul>
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
