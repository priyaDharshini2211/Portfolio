import { useEffect, useState } from 'react';
import AOS from 'aos';
import NavBar from './components/NavBar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';
import BackToTop from './components/BackToTop';

const SECTION_IDS = ['top', 'about', 'skills', 'experience', 'projects', 'education', 'contact'];

function App() {
  const [theme, setTheme] = useState('dark');
  const [activeSection, setActiveSection] = useState('top');

  useEffect(() => {
    document.documentElement.dataset.bsTheme = theme;
  }, [theme]);

  useEffect(() => {
    AOS.init({ duration: 700, easing: 'ease-out-cubic', once: true, offset: 40 });
  }, []);

  useEffect(() => {
    const sections = SECTION_IDS.map((id) => document.getElementById(id)).filter(Boolean);
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: '-45% 0px -50% 0px', threshold: 0 }
    );
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  const toggleTheme = () => setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));

  return (
    <div className="app bg-body text-body min-vh-100">
      <div className="bg-decor" aria-hidden="true">
        <span className="blob blob-1" />
        <span className="blob blob-2" />
        <span className="blob blob-3" />
      </div>
      <NavBar theme={theme} onToggleTheme={toggleTheme} activeSection={activeSection} />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Education />
      <Contact />
      <Footer />
      <BackToTop />
    </div>
  );
}

export default App;
