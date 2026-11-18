import { useEffect, useState } from 'react';
import {
  ArrowUpRight,
  Cloud,
  Copy,
  Download,
  MapPin,
  ShieldCheck,
  Sparkles,
} from 'lucide-react';
import { Github, Linkedin } from './BrandIcons';
import { profile } from '../data/profile';
import { useCopyEmail } from '../utils';

function useTypewriter(words, { type = 70, erase = 35, pause = 1600 } = {}) {
  const [text, setText] = useState(words[0]);
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return undefined;
    let i = 0;
    let t = words[0].length;
    let deleting = true;
    let timer;
    const tick = () => {
      const word = words[i % words.length];
      if (!deleting) {
        t += 1;
        setText(word.slice(0, t));
        if (t === word.length) {
          deleting = true;
          timer = setTimeout(tick, pause);
          return;
        }
        timer = setTimeout(tick, type);
      } else {
        t -= 1;
        setText(word.slice(0, Math.max(t, 0)));
        if (t <= 0) {
          deleting = false;
          i += 1;
          timer = setTimeout(tick, 250);
          return;
        }
        timer = setTimeout(tick, erase);
      }
    };
    timer = setTimeout(tick, pause);
    return () => clearTimeout(timer);
  }, [words, type, erase, pause]);
  return text;
}

function Hero() {
  const role = useTypewriter(profile.roles);
  const copyEmail = useCopyEmail(profile.email);

  return (
    <section id="top" className="hero">
      <div className="container hero-grid">
        <div className="hero-copy">
          <span className="pill">
            <span className="pulse" />
            Open to new opportunities
          </span>
          <h1 className="hero-title">
            Hi, I'm <span className="grad">{profile.name}</span>
          </h1>
          <p className="hero-role" aria-label={profile.title}>
            <Sparkles size={20} aria-hidden="true" />
            <span>{role}</span>
            <i className="caret" aria-hidden="true" />
          </p>
          <p className="hero-tagline">{profile.tagline}</p>

          <div className="btn-row">
            <a href="#contact" className="btn btn-primary">
              Let's talk <ArrowUpRight size={18} />
            </a>
            <a href={profile.resumeFile} target="_blank" rel="noreferrer" className="btn btn-ghost">
              <Download size={18} /> Resume
            </a>
            <button type="button" className="btn btn-ghost" onClick={copyEmail}>
              <Copy size={18} /> Copy email
            </button>
          </div>

          <div className="socials">
            <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub" className="icon-btn">
              <Github size={18} />
            </a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="icon-btn">
              <Linkedin size={18} />
            </a>
            <span className="loc">
              <MapPin size={16} /> {profile.location}
            </span>
          </div>
        </div>

        <div className="hero-visual" aria-hidden="true">
          <div className="orb" />
          <div className="id-card">
            <div className="id-top">
              <div className="avatar-ring">
                <span>{profile.name.charAt(0)}</span>
              </div>
              <div>
                <p className="id-name">{profile.name} S</p>
                <p className="id-role">{profile.title}</p>
              </div>
            </div>
            <div className="id-lines">
              <p><b>stack</b><span>Rails · React · Django</span></p>
              <p><b>exp</b><span>2+ years</span></p>
              <p><b>focus</b><span>APIs · Performance</span></p>
              <p><b>status</b><span className="ok">● available</span></p>
            </div>
          </div>
          <span className="chip chip-a"><ShieldCheck size={15} /> Secure APIs</span>
          <span className="chip chip-b"><Cloud size={15} /> AWS · Heroku</span>
        </div>
      </div>
    </section>
  );
}

export default Hero;
