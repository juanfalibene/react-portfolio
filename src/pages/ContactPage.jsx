import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useLanguage } from "../LanguageContext";
import { useSearchParams } from "react-router-dom";

export default function ContactPage() {
  const { language } = useLanguage();
  const [searchParams] = useSearchParams();

  // Pre-select service if passed in query string (?service=audit)
  const initialService = searchParams.get("service") || "development";

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    website: "",
    service: initialService,
    message: "",
    _hp: "", // Honeypot anti-bot field
  });

  const [errorMessage, setErrorMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  // Update SEO title and description
  useEffect(() => {
    const title =
      language === "en"
        ? "Contact & Discovery Call — Juan Falibene | WordPress & Front-End Tech Partner"
        : "Contacto y Llamada Inicial — Juan Falibene | Socio Tecnológico WordPress & Front-End";
    document.title = title;

    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute(
        "content",
        language === "en"
          ? "Get in touch with Juan Falibene for WordPress development, technical audits, performance optimization or schedule a direct 30-minute discovery call."
          : "Ponte en contacto con Juan Falibene para desarrollo WordPress, auditorías técnicas, optimización WPO o agenda una llamada inicial de 30 minutos."
      );
    }
  }, [language]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errorMessage) setErrorMessage("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // 1. Anti-bot honeypot check
    if (formData._hp) {
      console.warn("Bot detected via honeypot field.");
      return;
    }

    // 2. Client-side validation
    const trimmedName = formData.name.trim();
    const trimmedEmail = formData.email.trim();
    const trimmedMessage = formData.message.trim();

    if (!trimmedName || trimmedName.length < 2) {
      setErrorMessage(
        language === "en"
          ? "Please enter a valid name or agency name."
          : "Por favor, introduce un nombre o agencia válido."
      );
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(trimmedEmail)) {
      setErrorMessage(
        language === "en"
          ? "Please enter a valid email address."
          : "Por favor, introduce un correo electrónico válido."
      );
      return;
    }

    if (trimmedMessage.length < 10) {
      setErrorMessage(
        language === "en"
          ? "Please provide a slightly more detailed message (min. 10 characters)."
          : "Por favor, proporciona un mensaje un poco más detallado (mínimo 10 caracteres)."
      );
      return;
    }

    // 3. Encode & trigger mailto dispatch
    const subject = encodeURIComponent(
      `[Portfolio Inquiry] ${formData.service.toUpperCase()} - ${trimmedName}`
    );
    const body = encodeURIComponent(
      `Name: ${trimmedName}\nEmail: ${trimmedEmail}\nWebsite: ${
        formData.website.trim() || "N/A"
      }\nService: ${formData.service}\n\nMessage:\n${trimmedMessage}`
    );

    window.location.href = `mailto:hola@juanfalibene.com?subject=${subject}&body=${body}`;
    setSubmitted(true);
  };

  return (
    <div className='contact-page-wrapper'>
      <Header />
      <main className='main-container' id='main-contact'>
        <section className='contact-page-section section-wrapper'>
          <div className='content-box'>

            {/* Page Header */}
            <div className='contact-page-header'>
              <h1 className='contact-page-title'>
                {language === "en"
                  ? "Let's build something scalable, performant & reliable."
                  : "Construyamos una plataforma escalable, rápida y fiable."}
              </h1>
              <p className='contact-page-subtitle'>
                {language === "en"
                  ? "Choose the best path for your workflow: send a detailed inquiry with your technical scope or book a direct 30-minute discovery call."
                  : "Elige la vía más conveniente para tu flujo: envía una consulta detallada con tu requerimiento técnico o agenda directamente una llamada de 30 minutos."}
              </p>
            </div>

            {/* 2-Column Split: Form (Left) & Calendly Card (Right) */}
            <div className='contact-split-grid'>

              {/* ── Column 1: Asynchronous Inquiry Form ── */}
              <div className='contact-form-card'>
                <div className='contact-card-header'>
                  <span className='contact-card-tag'>
                    {language === "en" ? "Direct Inquiry" : "Consulta Directa"}
                  </span>
                  <h2 className='contact-card-title'>
                    {language === "en"
                      ? "Send Project Details"
                      : "Cuéntame sobre tu proyecto"}
                  </h2>
                  <p className='contact-card-desc'>
                    {language === "en"
                      ? "Fill in your specifications and I'll get back to you within 24 business hours."
                      : "Describe tu requerimiento y te responderé en un plazo máximo de 24 horas laborables."}
                  </p>
                </div>

                {submitted ? (
                  <div className='contact-form-success'>
                    <div className='success-icon'>✓</div>
                    <h3>
                      {language === "en"
                        ? "Opening your email client..."
                        : "Abriendo tu gestor de correo..."}
                    </h3>
                    <p>
                      {language === "en"
                        ? "If your email app didn't open automatically, you can write directly to "
                        : "Si tu aplicación de correo no se abrió automáticamente, puedes escribir directamente a "}
                      <a href='mailto:hola@juanfalibene.com'>
                        hola@juanfalibene.com
                      </a>
                    </p>
                    <button
                      className='section-cta-button'
                      onClick={() => setSubmitted(false)}
                      style={{ marginTop: "1rem" }}
                    >
                      {language === "en" ? "Send another message" : "Enviar otro mensaje"}
                    </button>
                  </div>
                ) : (
                  <form className='contact-form' onSubmit={handleSubmit} noValidate>
                    {/* Honeypot hidden input */}
                    <input
                      type='text'
                      name='_hp'
                      value={formData._hp}
                      onChange={handleChange}
                      style={{ display: "none", position: "absolute", left: "-9999px" }}
                      tabIndex='-1'
                      autoComplete='off'
                      aria-hidden='true'
                    />

                    {/* Name */}
                    <div className='form-group'>
                      <label htmlFor='contact-name' className='form-label'>
                        {language === "en" ? "Your Name / Agency" : "Nombre / Agencia"} *
                      </label>
                      <input
                        type='text'
                        id='contact-name'
                        name='name'
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder={
                          language === "en"
                            ? "Your name or agency name"
                            : "Tu nombre o el de tu agencia"
                        }
                        className='form-input'
                      />
                    </div>

                    {/* Email */}
                    <div className='form-group'>
                      <label htmlFor='contact-email' className='form-label'>
                        {language === "en" ? "Email Address" : "Correo Electrónico"} *
                      </label>
                      <input
                        type='email'
                        id='contact-email'
                        name='email'
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder='name@domain.com'
                        className='form-input'
                      />
                    </div>

                    {/* Website URL (optional) */}
                    <div className='form-group'>
                      <label htmlFor='contact-website' className='form-label'>
                        {language === "en"
                          ? "Website / Staging URL (optional)"
                          : "Sitio Web / URL de Pruebas (opcional)"}
                      </label>
                      <input
                        type='url'
                        id='contact-website'
                        name='website'
                        value={formData.website}
                        onChange={handleChange}
                        placeholder='https://yourwebsite.com'
                        className='form-input'
                      />
                    </div>

                    {/* Service Type Select */}
                    <div className='form-group'>
                      <label htmlFor='contact-service' className='form-label'>
                        {language === "en"
                          ? "Service / Area of Interest"
                          : "Servicio o Tipo de Consulta"} *
                      </label>
                      <select
                        id='contact-service'
                        name='service'
                        value={formData.service}
                        onChange={handleChange}
                        className='form-select'
                      >
                        <option value='development'>
                          {language === "en"
                            ? "Custom Web & WordPress Development"
                            : "Desarrollo Web & WordPress a Medida"}
                        </option>
                        <option value='audit'>
                          {language === "en"
                            ? "Technical WordPress Audit"
                            : "Auditoría Técnica de WordPress"}
                        </option>
                        <option value='consulting'>
                          {language === "en"
                            ? "Technical Consulting & Architecture"
                            : "Consultoría Técnica y Arquitectura"}
                        </option>
                        <option value='wpo'>
                          {language === "en"
                            ? "Performance & Speed Optimization (WPO)"
                            : "WPO y Optimización de Rendimiento"}
                        </option>
                        <option value='troubleshooting'>
                          {language === "en"
                            ? "Troubleshooting & Issue Resolution"
                            : "Resolución de Problemas y Diagnóstico"}
                        </option>
                        <option value='maintenance'>
                          {language === "en"
                            ? "Proactive Maintenance & Support"
                            : "Mantenimiento Proactivo y Soporte"}
                        </option>
                        <option value='other'>
                          {language === "en"
                            ? "General Collaboration / Other"
                            : "Colaboración General / Otra Consulta"}
                        </option>
                      </select>
                    </div>

                    {/* Message */}
                    <div className='form-group'>
                      <label htmlFor='contact-message' className='form-label'>
                        {language === "en"
                          ? "Brief Description of the Project or Issue"
                          : "Breve descripción del proyecto o problema"} *
                      </label>
                      <textarea
                        id='contact-message'
                        name='message'
                        required
                        rows='4'
                        value={formData.message}
                        onChange={handleChange}
                        placeholder={
                          language === "en"
                            ? "Tell me about your current stack, timeline, and what you're looking to achieve..."
                            : "Cuéntame sobre el stack actual, plazos y los objetivos técnicos a resolver..."
                        }
                        className='form-textarea'
                      />
                    </div>

                    {/* Error message if validation fails */}
                    {errorMessage && (
                      <p className='form-error-msg' style={{ color: "#ff6b6b", fontSize: "12px", margin: "0" }}>
                        ⚠️ {errorMessage}
                      </p>
                    )}

                    {/* Submit Button */}
                    <button type='submit' className='contact-submit-btn'>
                      {language === "en" ? "SEND INQUIRY →" : "ENVIAR CONSULTA →"}
                    </button>
                  </form>
                )}
              </div>

              {/* ── Column 2: Direct Calendly 30-min Discovery Call Card ── */}
              <div className='calendly-booking-card'>
                <div className='calendly-card-header'>
                  <span className='calendly-badge'>
                    {language === "en" ? "Fast-Track" : "Vía Rápida"}
                  </span>
                  <h2 className='calendly-card-title'>
                    {language === "en"
                      ? "Book a 30-Min Discovery Call"
                      : "Agendar Llamada Inicial de 30 Minutos"}
                  </h2>
                  <p className='calendly-card-desc'>
                    {language === "en"
                      ? "Ideal for agency directors, product leads, and technical founders who want to evaluate scope, timeline, and technical alignment directly."
                      : "Ideal para directores de agencia, responsables de producto y fundadores técnicos que prefieren analizar alcance, viabilidad técnica y plazos de forma directa."}
                  </p>
                </div>

                {/* Call Specs / Benefits */}
                <div className='calendly-specs-box'>
                  <ul className='calendly-specs-list'>
                    <li className='calendly-spec-item'>
                      <span className='spec-bullet'>•</span>
                      <div>
                        <strong>{language === "en" ? "30 Minutes" : "30 Minutos"}</strong>
                        <p>{language === "en" ? "Focused & structured video meeting" : "Reunión por videollamada estructurada"}</p>
                      </div>
                    </li>
                    <li className='calendly-spec-item'>
                      <span className='spec-bullet'>•</span>
                      <div>
                        <strong>{language === "en" ? "In-Depth Diagnosis" : "Diagnóstico a Fondo"}</strong>
                        <p>
                          {language === "en"
                            ? "We use the call to understand every aspect of your project and prepare an accurate, thorough diagnosis."
                            : "Aprovechamos la llamada para conocer todos los detalles del proyecto, entenderlo y diagnosticar a fondo."}
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>

                {/* Calendly Action Button */}
                <a
                  href='https://calendly.com/juanignaciofalibene/30min'
                  target='_blank'
                  rel='noreferrer noopener'
                  className='calendly-cta-button'
                >
                  <span>{language === "en" ? "SCHEDULE 30-MIN CALL" : "AGENDAR LLAMADA EN CALENDLY"}</span>
                  <span className='calendly-arrow'>↗</span>
                </a>

                {/* Direct info footer */}
                <div className='calendly-card-footer'>
                  <div className='direct-contact-item'>
                    <span className='direct-label'>{language === "en" ? "Direct Email:" : "Email Directo:"}</span>
                    <a href='mailto:hola@juanfalibene.com' className='direct-val'>
                      hola@juanfalibene.com
                    </a>
                  </div>
                  <div className='direct-contact-item'>
                    <span className='direct-label'>{language === "en" ? "Timezone:" : "Zona Horaria:"}</span>
                    <span className='direct-val'>Barcelona, Spain (CET / UTC+1)</span>
                  </div>
                </div>
              </div>

            </div>

          </div>
        </section>
        <Footer />
      </main>
    </div>
  );
}
