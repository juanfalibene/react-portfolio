import React from "react";
import { works, section_description } from "../data";
import { works_es, section_description_es } from "../data_es";
import ProjectLinks from "./ProjectLinks";
import ViewArchive from "./ViewArchive";
import { useLanguage } from "../LanguageContext";

export default function Works() {
  const { language, t } = useLanguage();
  const currentWorks = language === "en" ? works : works_es;
  const currentSectionDescription = language === "en" ? section_description : section_description_es;

  return (
    <>
      <section id='works' className='section-wrapper'>
        <div className='content-box'>
          <h2 className='section-title'>{language === "en" ? "Wordpress Works" : "Trabajos Wordpress"}</h2>
          {currentSectionDescription.map((des, index) =>
            des.section === "Works" || des.section === "Trabajos" ? (
              <p className='blog-description-text' dangerouslySetInnerHTML={{ __html: des.description }} key={index}></p>
            ) : null
          )}
        </div>
        <div className='projects-list'>
          {currentWorks.map((work) => (
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
                  width='800'
                  height='800'
                  loading='lazy'
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
