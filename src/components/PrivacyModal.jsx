import React from "react";
import { useLanguage } from "../LanguageContext";

export default function PrivacyModal({ isOpen, onClose }) {
  const { language } = useLanguage();

  if (!isOpen) return null;

  return (
    <div className='privacy-modal-overlay' onClick={onClose} role='dialog' aria-modal='true'>
      <div className='privacy-modal-card' onClick={(e) => e.stopPropagation()}>
        <button className='privacy-modal-close' onClick={onClose} aria-label='Close'>
          ✕
        </button>

        <h2 className='privacy-modal-title'>
          {language === "en" ? "Privacy & Local Storage Policy" : "Política de Privacidad y Cookies"}
        </h2>

        <div className='privacy-modal-content'>
          <section className='privacy-section'>
            <h3>{language === "en" ? "1. Data Controller" : "1. Responsable del Tratamiento"}</h3>
            <p>
              {language === "en"
                ? "Juan Falibene — Web & WordPress Developer based in Barcelona, Spain. Email: "
                : "Juan Falibene — Desarrollador Web & WordPress con base en Barcelona, España. Correo: "}
              <a href='mailto:hola@juanfalibene.com'>hola@juanfalibene.com</a>
            </p>
          </section>

          <section className='privacy-section'>
            <h3>{language === "en" ? "2. Contact Form & Communications" : "2. Formulario de Contacto"}</h3>
            <p>
              {language === "en"
                ? "The data provided via the contact form (name, email, project scope) is used solely to respond to your inquiry and evaluate technical collaboration. Your data is never sold, shared, or used for automated marketing."
                : "Los datos facilitados a través del formulario de contacto (nombre, email, detalles del proyecto) se utilizan exclusivamente para responder a tu solicitud y evaluar la colaboración técnica. Tus datos nunca son cedidos ni utilizados para fines comerciales no solicitados."}
            </p>
          </section>

          <section className='privacy-section'>
            <h3>{language === "en" ? "3. Cookies & Local Storage" : "3. Cookies y Almacenamiento Local"}</h3>
            <p>
              {language === "en"
                ? "This website does NOT use third-party tracking or advertising cookies. It only utilizes essential browser local storage (localStorage) to remember your chosen theme (dark/light) and language preference (EN/ES)."
                : "Este sitio web NO utiliza cookies de seguimiento publicitario ni analíticas de terceros. Únicamente emplea almacenamiento local técnico del navegador (localStorage) para recordar tu preferencia de tema (oscuro/claro) y selección de idioma (EN/ES)."}
            </p>
          </section>

          <section className='privacy-section'>
            <h3>{language === "en" ? "4. Your Rights (GDPR)" : "4. Tus Derechos (RGPD)"}</h3>
            <p>
              {language === "en"
                ? "You have the right to access, rectify, or delete any personal information by simply sending an email to "
                : "Puedes ejercer tus derechos de acceso, rectificación y supresión de datos en cualquier momento enviando un correo a "}
              <a href='mailto:hola@juanfalibene.com'>hola@juanfalibene.com</a>.
            </p>
          </section>
        </div>

        <button className='privacy-modal-btn' onClick={onClose}>
          {language === "en" ? "Understood" : "Entendido"}
        </button>
      </div>
    </div>
  );
}
