import { useEffect, useState } from 'react';
import { profile } from '../data/profile';

function useTypewriter(words, { typeSpeed = 70, deleteSpeed = 40, pause = 1500 } = {}) {
  const [text, setText] = useState('');
  const [wordIndex, setWordIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = words[wordIndex % words.length];
    let timeout;

    if (!deleting && text === current) {
      timeout = setTimeout(() => setDeleting(true), pause);
    } else if (deleting && text === '') {
      setDeleting(false);
      setWordIndex((prev) => prev + 1);
    } else {
      timeout = setTimeout(
        () => {
          setText((prev) =>
            deleting ? current.slice(0, prev.length - 1) : current.slice(0, prev.length + 1)
          );
        },
        deleting ? deleteSpeed : typeSpeed
      );
    }

    return () => clearTimeout(timeout);
  }, [text, deleting, wordIndex, words, typeSpeed, deleteSpeed, pause]);

  return text;
}

function Hero() {
  const typedRole = useTypewriter(profile.roles);

  return (
    <header id="top" className="hero-section">
      <div className="container py-5">
        <div className="row align-items-center gy-5 py-lg-5">
          <div className="col-lg-7" data-aos="fade-right">
            <div className="hero-badge mb-4">
              <span className="status-dot" />
              Available for new opportunities
            </div>
            <p className="text-uppercase text-primary fw-semibold mb-3 letter-spacing">
              Welcome to my portfolio
            </p>
            <h1 className="display-3 fw-bold mb-3">
              Hi, I'm <span className="text-gradient">{profile.name}</span>
            </h1>
            <h2 className="h3 hero-role mb-4">
              <span className="typewriter">{typedRole}</span>
              <span className="cursor">|</span>
            </h2>
            <p className="lead text-body-secondary mb-4 col-lg-10">{profile.tagline}</p>
            <div className="d-flex flex-wrap gap-3">
              <a href="#contact" className="btn btn-gradient btn-lg px-4">
                Get in Touch <i className="bi bi-arrow-right ms-1"></i>
              </a>
              <a
                href={profile.resumeFile}
                target="_blank"
                rel="noreferrer"
                className="btn btn-outline-glass btn-lg px-4"
              >
                <i className="bi bi-download me-2"></i>Resume
              </a>
            </div>
            <div className="d-flex gap-3 mt-4">
              <a
                href={profile.github}
                target="_blank"
                rel="noreferrer"
                className="social-icon"
                aria-label="GitHub profile"
              >
                <i className="bi bi-github"></i>
              </a>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer"
                className="social-icon"
                aria-label="LinkedIn profile"
              >
                <i className="bi bi-linkedin"></i>
              </a>
            </div>
          </div>
          <div className="col-lg-5 text-center" data-aos="fade-left" data-aos-delay="150">
            <div className="hero-avatar-wrap mx-auto">
              <div className="hero-avatar">
                <span>{profile.name.charAt(0)}</span>
              </div>
              <div className="orbit-chip chip-1">
                <i className="bi bi-code-slash"></i> Ruby on Rails
              </div>
              <div className="orbit-chip chip-2">
                <i className="bi bi-shield-lock"></i> Secure APIs
              </div>
              <div className="orbit-chip chip-3">
                <i className="bi bi-cloud-arrow-up"></i> AWS / Heroku
              </div>
            </div>
          </div>
        </div>
        <a href="#about" className="scroll-indicator" aria-label="Scroll to About section">
          <i className="bi bi-mouse2"></i>
        </a>
      </div>
    </header>
  );
}

export default Hero;
