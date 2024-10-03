import React from "react";
import { works, section_description } from "../data";
import ProjectLinks from "./ProjectLinks";
import HeroStart from "./HeroStart";
import ViewArchive from "./ViewArchive";

export default function Works() {
  return (
    <>
      <section id='works' className='projects'>
        <div className='works-info'>
          <h2 className='section-title'>Wordpress Works</h2>
          {section_description.map((des, index) =>
            des.section === "Works" ? (
              <p className='work-description-text' key={index}>
                {des.description}
              </p>
            ) : null
          )}
        </div>
        <div className='projects-list'>
          {works.map((work) => (
            <a
              href={work.link}
              key={`${work.title}-${work.subtitle}`}
              className={`project-link ${work.class}`}
              target='_blank'
              rel='noreferrer'
            >
              <div className='project-image' key={work.title}>
                <img
                  className='project-img'
                  src={work.cover}
                  alt={work.title}
                />
              </div>
              <div className='project-info' key={work.subtitle}>
                <h3 className='project-title'>
                  {work.title}
                  <span className='project-subtitle'>{work.subtitle}</span>
                </h3>
                <ProjectLinks
                  blog_link={work.blog_link}
                  github_link={work.github_link}
                  behance_link={work.behance_link}
                  figma_link={work.figma_link}
                />
                <div className='project-info-sub'>
                  <h4 className='project-category'>{work.category}</h4>
                  <ul className='project-tags'>
                    {work.tags.map((tag, index) => (
                      <li key={index}>{tag}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </a>
          ))}
        </div>
        <ViewArchive />
      </section>
    </>
  );
}
