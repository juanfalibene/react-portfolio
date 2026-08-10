import React from "react";
import { works, section_description } from "../data";
import { works_es, section_description_es } from "../data_es";
import ViewArchive from "./ViewArchive";
import { useLanguage } from "../LanguageContext";

export default function Works() {
  const { language } = useLanguage();
  const currentWorks = language === "en" ? works : works_es;
  const currentSectionDescription =
    language === "en" ? section_description : section_description_es;

  return (
    <>
      <section id='works' className='section-wrapper'>
        <div className='content-box'>
          <h2 className='section-title'>
            {language === "en" ? "Wordpress Works" : "Trabajos Wordpress"}
          </h2>
          {currentSectionDescription.map((des, index) =>
            des.section === "Works" || des.section === "Trabajos" ? (
              <p
                className='blog-description-text'
                dangerouslySetInnerHTML={{ __html: des.description }}
                key={index}
              />
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
                {/* Meta tags with Read Article */}
                {((work.blog_link && work.blog_link !== "") ||
                  (work.github_link && work.github_link !== "") ||
                  (work.behance_link && work.behance_link !== "") ||
                  (work.figma_link && work.figma_link !== "")) && (
                  <div className='project-meta-links'>
                    {work.blog_link && work.blog_link !== "" && (
                      <span
                        className='project-meta-tag project-meta-tag--blog'
                        onClick={(e) => {
                          e.stopPropagation();
                          e.preventDefault();
                          window.open(work.blog_link, "_blank", "noreferrer");
                        }}
                      >
                        {language === "en" ? "Read Article" : "Leer Artículo"}
                      </span>
                    )}
                    {work.github_link && work.github_link !== "" && (
                      <span
                        className='project-meta-tag project-meta-tag--github'
                        onClick={(e) => {
                          e.stopPropagation();
                          e.preventDefault();
                          window.open(work.github_link, "_blank", "noreferrer");
                        }}
                      >
                        GitHub
                      </span>
                    )}
                    {work.behance_link && work.behance_link !== "" && (
                      <span
                        className='project-meta-tag project-meta-tag--behance'
                        onClick={(e) => {
                          e.stopPropagation();
                          e.preventDefault();
                          window.open(work.behance_link, "_blank", "noreferrer");
                        }}
                      >
                        Behance
                      </span>
                    )}
                  </div>
                )}
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
