import React from "react";
import { certificates } from "../data";

const Certificates = () => {
  const mainCertificates = certificates.slice(0, 4);
  const specializedCertificates = certificates.slice(4);

  return (
    <>
      <ul className='about-clients'>
        {mainCertificates.map((certificate) => (
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
        <li className='certificates-row-container'>
          <div className='certificates-row'>
            {specializedCertificates.map((certificate, index) => (
              <a
                href={certificate.link}
                key={certificate.name}
                rel='noreferrer'
                target='_blank'
                alt={certificate.name}
              >
                <span className='client-since'>{certificate.year}</span>
                {certificate.name}
                {index < specializedCertificates.length - 1 && ","}
              </a>
            ))}
          </div>
        </li>
      </ul>
    </>
  );
};

export default Certificates;
