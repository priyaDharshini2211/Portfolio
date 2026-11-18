import { Copy } from 'lucide-react';
import { Github, Linkedin } from './BrandIcons';
import { profile } from '../data/profile';
import { useCopyEmail } from '../utils';

function Footer() {
  const copyEmail = useCopyEmail(profile.email);
  return (
    <footer className="footer">
      <div className="container footer-row">
        <span>© {new Date().getFullYear()} {profile.name}. All rights reserved.</span>
        <div className="socials">
          <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub" className="icon-btn"><Github size={17} /></a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="icon-btn"><Linkedin size={17} /></a>
          <button type="button" onClick={copyEmail} aria-label="Copy email" className="icon-btn"><Copy size={17} /></button>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
