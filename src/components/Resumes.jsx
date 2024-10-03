import React from 'react';
import { resume_urls } from '../data';

const Resumes = () => {
  return (
    <>
      <ul className='about-clients'>
        {resume_urls.map((resume) => (
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