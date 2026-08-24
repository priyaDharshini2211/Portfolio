import { profile } from '../data/profile';

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="py-4 border-top footer-section">
      <div className="container d-flex flex-column flex-md-row justify-content-between align-items-center gap-3 text-body-secondary small">
        <span>
          &copy; {year} {profile.name}. All rights reserved.
        </span>
        <div className="d-flex gap-3">
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
          <a href={`mailto:${profile.email}`} className="social-icon" aria-label="Email">
            <i className="bi bi-envelope-fill"></i>
          </a>
          <a href={`tel:${profile.phone}`} className="social-icon" aria-label="Phone">
            <i className="bi bi-telephone-fill"></i>
          </a>
        </div>
        <span>Built with React, Vite &amp; Bootstrap</span>
      </div>
    </footer>
  );
}

export default Footer;
