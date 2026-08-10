import React, { useState } from "react";
import { services_list, services_intro, client_fit, faqs } from "../data";
import {
  services_list_es,
  services_intro_es,
  client_fit_es,
  faqs_es,
} from "../data_es";
import { useLanguage } from "../LanguageContext";
import { Link } from "react-router-dom";

const Services = ({ compact = false }) => {
  const { language, t } = useLanguage();
  const [openFaq, setOpenFaq] = useState(null);

  const currentServices = language === "en" ? services_list : services_list_es;
  const currentIntro = language === "en" ? services_intro : services_intro_es;
  const currentFit = language === "en" ? client_fit : client_fit_es;
  const currentFaqs = language === "en" ? faqs : faqs_es;

  const toggleFaq = (index) => {
    setOpenFaq((prev) => (prev === index ? null : index));
  };

  /* ─────────────────────────────────────────────
     Compact mode — home page preview (cards only)
  ───────────────────────────────────────────── */
  if (compact) {
    return (
      <section id='services' className='services-section section-wrapper'>
        <div className='content-box'>
          <h2 className='section-title'>{t("services")}</h2>
          <div className='services-grid' role='list' aria-label={t("services")}>
            {currentServices.map((service) => (
              <article
                key={service.id}
                className='service-card'
                role='listitem'
              >
                <span className='service-card-number' aria-hidden='true'>
                  {String(service.id).padStart(2, "0")}
                </span>
                <h3 className='service-card-title'>{service.title}</h3>
                <p className='service-card-description'>
                  {service.description}
                </p>
              </article>
            ))}
          </div>

          {/* Unified Centered CTA with engaging invitation */}
          <div className='section-cta-container'>
            <p className='section-cta-prompt'>
              {language === "en"
                ? "Looking for a tailored technical solution for your web platform?"
                : "¿Buscas una solución técnica a medida para tu plataforma web?"}
            </p>
            <Link to='/services' className='section-cta-button'>
              {language === "en"
                ? "EXPLORE ALL SERVICES →"
                : "EXPLORAR TODOS LOS SERVICIOS →"}
            </Link>
          </div>
        </div>
      </section>
    );
  }

  /* ─────────────────────────────────────────────
     Full mode — /services page
  ───────────────────────────────────────────── */
  return (
    <section id='services' className='services-section section-wrapper'>
      <div className='content-box'>
        <h2 className='section-title'>{t("services")}</h2>

        {/* Lead Headline & Subtitle Treatment */}
        <div
          className='services-market-context'
          aria-labelledby='services-lead-title'
        >
          <h3 id='services-lead-title' className='services-lead-headline'>
            {currentIntro.headline}
          </h3>
          <p className='services-lead-subtitle'>{currentIntro.subtitle}</p>
        </div>

        {/* Service Cards Grid */}
        <div className='services-grid' role='list' aria-label={t("services")}>
          {currentServices.map((service) => (
            <article
              key={service.id}
              className='service-card'
              role='listitem'
            >
              <span className='service-card-number' aria-hidden='true'>
                {String(service.id).padStart(2, "0")}
              </span>
              <h3 className='service-card-title'>{service.title}</h3>
              <p className='service-card-description'>{service.description}</p>
            </article>
          ))}
        </div>

        {/* Client Fit */}
        <div className='services-fit'>
          <div className='services-fit-col services-fit-best'>
            <h3 className='services-fit-title services-fit-title--best'>
              {t("bestFitTitle")}
            </h3>
            <ul className='services-fit-list'>
              {currentFit.bestFit.map((item, i) => (
                <li
                  key={i}
                  className='services-fit-item services-fit-item--best'
                >
                  <span className='services-fit-icon' aria-hidden='true'>
                    ✓
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className='services-fit-col services-fit-not'>
            <h3 className='services-fit-title services-fit-title--not'>
              {t("notFitTitle")}
            </h3>
            <ul className='services-fit-list'>
              {currentFit.notFit.map((item, i) => (
                <li
                  key={i}
                  className='services-fit-item services-fit-item--not'
                >
                  <span className='services-fit-icon' aria-hidden='true'>
                    ✕
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* FAQs */}
        <div className='services-faq' aria-label={t("faqTitle")}>
          <h3 className='section-subtitle-title'>{t("faqTitle")}</h3>
          <ul className='services-faq-list'>
            {currentFaqs.map((faq, index) => (
              <li key={index} className='services-faq-item'>
                <button
                  className={`services-faq-question ${
                    openFaq === index ? "services-faq-question--open" : ""
                  }`}
                  onClick={() => toggleFaq(index)}
                  aria-expanded={openFaq === index}
                  aria-controls={`faq-answer-${index}`}
                  id={`faq-question-${index}`}
                >
                  {faq.question}
                </button>
                <div
                  id={`faq-answer-${index}`}
                  role='region'
                  aria-labelledby={`faq-question-${index}`}
                  className={`services-faq-answer ${
                    openFaq === index ? "services-faq-answer--open" : ""
                  }`}
                >
                  <p>{faq.answer}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Services;
