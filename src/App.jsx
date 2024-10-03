import Header from "./components/Header";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Profile from "./components/Profile";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Works from "./components/Works";
import Blog from "./components/Blog";
import { keepTheme } from "./theme";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    keepTheme();
  });
  return (
    <main className='main-container' id='main'>
      <Header />
      <Hero />
      <Profile />
      <Works />
      <Blog />
      <Projects />
      <Contact />
      <Footer />
    </main>
  );
}

export default App;
