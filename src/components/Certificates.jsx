import React from "react";
import { certificates } from "../data";

const Certificates = () => {
  return (
    <>
      <ul className='about-clients'>
        {certificates.map((certificate) => (
          <li key={certificate.name}>
            <a
              href={certificate.link}
              rel='noreferrer'
              target='_blank'
              alt={certificate.name}
            >
              <span className='client-since'>{certificate.year}</span>
              {certificate.name}
            </a>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Certificates;
