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
import ServicesPage from "./pages/ServicesPage";
import ContactPage from "./pages/ContactPage";
import { keepTheme } from "./theme";
import { useEffect } from "react";
import { LanguageProvider } from "./LanguageContext";
import { Routes, Route, useLocation } from "react-router-dom";

function HomeLayout() {
  const location = useLocation();

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

function App() {
  useEffect(() => {
    keepTheme();
  });

  return (
    <LanguageProvider>
      <Routes>
        <Route path='/' element={<HomeLayout />} />
        <Route path='/services' element={<ServicesPage />} />
        <Route path='/contact' element={<ContactPage />} />
      </Routes>
    </LanguageProvider>
  );
}

export default App;
