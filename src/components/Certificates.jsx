import React from "react";
import { certificates } from "../data";
import { certificates_es } from "../data_es";
import { useLanguage } from "../LanguageContext";

const Certificates = () => {
  const { language } = useLanguage();
  const currentCertificates = language === "en" ? certificates : certificates_es;
  
  const mainCertificates = currentCertificates.slice(0, 4);
  const specializedCertificates = currentCertificates.slice(4);

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
