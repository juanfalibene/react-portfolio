import Header from "./components/Header";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Profile from "./components/Profile";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Works from "./components/Works";
import Blog from "./components/Blog";
import Services from "./components/Services";
import FloatingCTA from "./components/FloatingCTA";
import CookieBanner from "./components/CookieBanner";
import PrivacyModal from "./components/PrivacyModal";
import ServicesPage from "./pages/ServicesPage";
import ContactPage from "./pages/ContactPage";
import ScrollToTop from "./components/ScrollToTop";
import { keepTheme } from "./theme";
import { useEffect } from "react";
import { LanguageProvider, useLanguage } from "./LanguageContext";
import { Routes, Route, useLocation } from "react-router-dom";

function HomeLayout() {
  const location = useLocation();
  const { language } = useLanguage();

  // Update SEO title and description based on current role & language
  useEffect(() => {
    const title =
      language === "en"
        ? "Juan Falibene | WordPress & Front-End Tech Partner"
        : "Juan Falibene | Socio Tecnológico WordPress & Front-End";
    document.title = title;

    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute(
        "content",
        language === "en"
          ? "Juan Falibene — WordPress & Front-End Tech Partner based in Barcelona. High-performance web development, technical audits, WPO, and maintenance for agencies and brands."
          : "Juan Falibene — Socio Tecnológico en WordPress y Front-End en Barcelona. Desarrollo web a medida, auditorías técnicas, optimización WPO y mantenimiento para agencias y marcas."
      );
    }
  }, [language]);

  // Scroll to section when navigating from another page with state
  useEffect(() => {
    const id = location.state?.scrollTo;
    if (id) {
      const timer = setTimeout(() => {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: "smooth" });
      }, 150);
      return () => clearTimeout(timer);
    }
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <main className='main-container' id='main'>
      <Header />
      <Hero />
      <Services compact />
      <Works />
      <Profile />
      <Blog />
      <Projects />
      <Contact />
      <Footer />
      <FloatingCTA />
    </main>
  );
}

function AppContent() {
  const { isPrivacyOpen, openPrivacyModal, closePrivacyModal } = useLanguage();

  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path='/' element={<HomeLayout />} />
        <Route path='/services' element={<ServicesPage />} />
        <Route path='/contact' element={<ContactPage />} />
      </Routes>
      <CookieBanner onOpenPrivacy={openPrivacyModal} />
      <PrivacyModal isOpen={isPrivacyOpen} onClose={closePrivacyModal} />
    </>
  );
}

function App() {
  useEffect(() => {
    keepTheme();
  });

  return (
    <LanguageProvider>
      <AppContent />
    </LanguageProvider>
  );
}

export default App;
