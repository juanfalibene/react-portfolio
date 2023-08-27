import Header from "./components/Header";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Profile from "./components/Profile";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Works from "./components/Works";

function App() {
  return (
    <main className="main-container" id="main">
      <Header />
      <Hero />
      <Projects />
      <Profile />
      <Works />
      <Contact />
      <Footer />
    </main>
  );
}

export default App;
