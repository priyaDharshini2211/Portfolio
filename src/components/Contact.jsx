import { ArrowUpRight, Copy, MapPin, Phone } from 'lucide-react';
import { Github, Linkedin } from './BrandIcons';
import { profile } from '../data/profile';
import { spotlight, useCopyEmail, useReveal } from '../utils';

function Contact() {
  const ref = useReveal();
  const copyEmail = useCopyEmail(profile.email);

  return (
    <section id="contact" className="section" ref={ref}>
      <div className="container">
        <div className="cta reveal">
          <span className="eyebrow">Contact</span>
          <h2>Let's build something <span className="grad">great together</span></h2>
          <p>I'm open to full stack and backend opportunities. Click the button to copy my email.</p>
          <button type="button" className="btn btn-primary btn-lg" onClick={copyEmail}>
            <Copy size={20} /> {profile.email}
          </button>
        </div>

        <div className="contact-grid">
          <a className="card spot contact-card reveal" href={`tel:${profile.phone}`} onMouseMove={spotlight}>
            <span className="icon-tile"><Phone size={20} /></span>
            <div><small>Phone</small><strong>{profile.phone}</strong></div>
            <ArrowUpRight size={18} className="go" />
          </a>
          <div className="card spot contact-card reveal" style={{ '--d': '70ms' }} onMouseMove={spotlight}>
            <span className="icon-tile"><MapPin size={20} /></span>
            <div><small>Location</small><strong>{profile.location}</strong></div>
          </div>
          <a className="card spot contact-card reveal" style={{ '--d': '140ms' }} href={profile.github} target="_blank" rel="noreferrer" onMouseMove={spotlight}>
            <span className="icon-tile"><Github size={20} /></span>
            <div><small>GitHub</small><strong>{profile.githubUsername}</strong></div>
            <ArrowUpRight size={18} className="go" />
          </a>
          <a className="card spot contact-card reveal" style={{ '--d': '210ms' }} href={profile.linkedin} target="_blank" rel="noreferrer" onMouseMove={spotlight}>
            <span className="icon-tile"><Linkedin size={20} /></span>
            <div><small>LinkedIn</small><strong>View profile</strong></div>
            <ArrowUpRight size={18} className="go" />
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;
