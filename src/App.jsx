import { Suspense, lazy, useEffect, useState } from 'react';
import NavBar from './components/NavBar';
import Hero from './components/Hero';
import BackToTop from './components/BackToTop';
import { ToastProvider } from './components/Toast';

const About = lazy(() => import('./components/About'));
const Skills = lazy(() => import('./components/Skills'));
const Experience = lazy(() => import('./components/Experience'));
const Projects = lazy(() => import('./components/Projects'));
const Education = lazy(() => import('./components/Education'));
const Contact = lazy(() => import('./components/Contact'));
const Footer = lazy(() => import('./components/Footer'));

const SECTION_IDS = ['top', 'about', 'skills', 'experience', 'projects', 'education', 'contact'];

function App() {
  const [theme, setTheme] = useState(() => document.documentElement.dataset.theme || 'dark');
  const [activeSection, setActiveSection] = useState('top');

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    try {
      localStorage.setItem('theme', theme);
    } catch {
      /* storage unavailable */
    }
  }, [theme]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { rootMargin: '-45% 0px -50% 0px', threshold: 0 }
    );
    const watch = () =>
      SECTION_IDS.forEach((id) => {
        const el = document.getElementById(id);
        if (el) observer.observe(el);
      });
    watch();
    const retry = setTimeout(watch, 600); // lazy sections mount a moment later
    return () => {
      clearTimeout(retry);
      observer.disconnect();
    };
  }, []);

  return (
    <ToastProvider>
      <div className="bg-fx" aria-hidden="true" />
      <NavBar
        theme={theme}
        onToggleTheme={() => setTheme((t) => (t === 'dark' ? 'light' : 'dark'))}
        activeSection={activeSection}
      />
      <main>
        <Hero />
        <Suspense fallback={null}>
          <About />
          <Skills />
          <Experience />
          <Projects />
          <Education />
          <Contact />
        </Suspense>
      </main>
      <Suspense fallback={null}>
        <Footer />
      </Suspense>
      <BackToTop />
    </ToastProvider>
  );
}

export default App;
