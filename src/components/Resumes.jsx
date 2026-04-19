import React from 'react';
import { resume_urls } from '../data';
import { resume_urls_es } from '../data_es';
import { useLanguage } from '../LanguageContext';

const Resumes = () => {
  const { language } = useLanguage();
  const currentResumes = language === "en" ? resume_urls : resume_urls_es;

  return (
    <>
      <ul className='about-clients'>
        {currentResumes.map((resume) => (
          <li key={resume.name}>
            <a
              href={resume.link}
              target='_blank'
              rel='noreferrer'
              alt={resume.name}
            >
                <span className='client-since'>{resume.action}</span>
                {resume.name}
            </a>
          </li>
        ))}
      </ul>
    </>
  )
}

export default Resumes