import React from "react";
import { section_description } from "../data";

const DideaCTA = () => {
  return (
    <section id='services' className='section-wrapper'>
      <div className='content-box'>
        <h2 className='section-title'>Services</h2>
        {section_description.map((des, index) =>
          des.section === "Services" ? (
            <p className='blog-description-text' key={index}>
              {des.description}
            </p>
          ) : null
        )}
        <a
          href='https://didea.juanfalibene.com/'
          target='_blank'
          rel='noopener noreferrer'
          className='didea-cta-card'
        >
          <div className='didea-logo-box'>
            <img
              src='/img/didea_logo_cta.svg'
              alt='DIDEA Logo'
              className='didea-spin-img'
            />
          </div>

          <div className='didea-text-content'>
            <h2 className='didea-brand'>D*IDEA</h2>
            <h3 className='didea-title'>Design, Development, Idea</h3>
            <p className='didea-tagline'>
              <em>
                Comprehensive web solutions for agencies and startups defined
                with purpose
              </em>
            </p>
          </div>

          <div className='didea-arrow-box'>
            <span className='didea-arrow'>→</span>
          </div>
        </a>
      </div>
    </section>
  );
};

export default DideaCTA;
