import React from "react";
import { works, section_description } from "../data";

export default function Works() {
  return (
    <>
      <section id='works' className='projects'>
        <div className='works-info'>
          <h2 className='section-title-invert'>Wordpress Works</h2>
          {section_description.map((des, index) =>
            des.section === "Works" ? (
              <p className='work-description-text' key={index}>
                {des.description}
              </p>
            ) : null
          )}
        </div>
        <div className='projects-list'>
          {works.map((work, index) => (
            <a
              href={work.link}
              key={`${work.title}-${work.subtitle}`}
              className='project-link'
              target='_blank'
              rel='noreferrer'
              id={index === 0 ? 'first-work' : undefined}
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
                {work.behance_link && work.behance_link !== "" && (
                  <div className='view-github'>
                    <a
                      href={work.behance_link}
                      key={work.behance_link}
                      target='_blank'
                      rel='noreferrer'
                    >
                      <img
                        src='/img/skills/behance.svg'
                        className='behance-project'
                        alt='behance.com'
                      />
                    </a>
                  </div>
                )}
                {work.figma_link && work.figma_link !== "" && (
                  <div className='view-github'>
                    <a
                      href={work.figma_link}
                      key={work.figma_link}
                      target='_blank'
                      rel='noreferrer'
                    >
                      <img
                        src='/img/skills/figma.svg'
                        className='figma-project'
                        alt='figma.com'
                      />
                    </a>
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
      </section>
    </>
  );
}
