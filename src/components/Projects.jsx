import React from "react";
import { projects, section_description } from "../data";

export default function Projects() {
  return (
    <>
      <section id='projects' className='projects'>
        <div className='works-info'>
          <h2 className='section-title'>FrontEnd Projects</h2>
          {section_description.map((des, index) =>
            des.section === "Projects" ? (
              <p className='work-description-text' key={index}>
                {des.description}
              </p>
            ) : null
          )}
        </div>
        <div className='projects-list'>
          {projects.map((project) => (
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
                />
              </div>
              <div className='project-info' key={project.subtitle}>
                <h3 className='project-title'>
                  {project.title}
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
