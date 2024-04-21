import React from "react";
import { works } from "../data";

export default function Works() {
  return (
    <>
      <section id='works' className='projects'>
        <h2 className='section-title-invert'>Wordpress Works</h2>
        <div className='projects-list'>
          {works.map((work) => (
            <a
              href={work.link}
              key={`${work.title}-${work.subtitle}`}
              className='project-link'
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
