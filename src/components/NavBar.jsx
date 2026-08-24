import { useEffect, useState } from 'react';
import { profile } from '../data/profile';

const links = [
  { href: '#about', id: 'about', label: 'About' },
  { href: '#skills', id: 'skills', label: 'Skills' },
  { href: '#experience', id: 'experience', label: 'Experience' },
  { href: '#projects', id: 'projects', label: 'Projects' },
  { href: '#education', id: 'education', label: 'Education' },
  { href: '#contact', id: 'contact', label: 'Contact' },
];

function NavBar({ theme, onToggleTheme, activeSection }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const closeMenu = () => {
    const menu = document.getElementById('navMenu');
    if (menu?.classList.contains('show')) {
      menu.classList.remove('show');
    }
  };

  return (
    <nav className={`navbar navbar-expand-lg sticky-top navbar-glass py-3 ${scrolled ? 'is-scrolled' : ''}`}>
      <div className="container">
        <a className="navbar-brand fw-bold d-flex align-items-center gap-2" href="#top">
          <span className="brand-badge">{profile.name.charAt(0)}</span>
          <span>
            {profile.name.split(' ')[0]}
            <span className="text-gradient">.</span>
          </span>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navMenu"
          aria-controls="navMenu"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navMenu">
          <ul className="navbar-nav ms-auto align-items-lg-center gap-lg-1">
            {links.map((link) => (
              <li className="nav-item" key={link.href}>
                <a
                  className={`nav-link ${activeSection === link.id ? 'active' : ''}`}
                  href={link.href}
                  onClick={closeMenu}
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li className="nav-item ms-lg-3 mt-3 mt-lg-0">
              <button
                type="button"
                className="theme-toggle"
                onClick={onToggleTheme}
                aria-label="Toggle color theme"
              >
                <i className={`bi ${theme === 'light' ? 'bi-moon-stars-fill' : 'bi-sun-fill'}`}></i>
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
