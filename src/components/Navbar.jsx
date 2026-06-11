import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = ['Home', 'About Us', 'Service', 'FAQ', 'Careers'];

  return (
    <nav className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
      <div className="navbar__inner">
        <a href="#" className="navbar__logo">
          <div className="navbar__logo-icon">
            <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
              <circle cx="14" cy="14" r="13" stroke="#22c55e" strokeWidth="2" />
              <path d="M8 14 L14 8 L20 14 L14 20 Z" fill="#22c55e" opacity="0.8" />
              <circle cx="14" cy="14" r="3" fill="#22c55e" />
            </svg>
          </div>
          <span className="navbar__logo-text">MARSFORCE</span>
        </a>

        <ul className="navbar__links">
          {navLinks.map((link, i) => (
            <li key={i}>
              <a
                href="#"
                className={`navbar__link ${link === 'Home' ? 'navbar__link--active' : ''}`}
              >
                {link}
              </a>
            </li>
          ))}
        </ul>

        <a href="#contact" className="btn btn--primary btn--sm">
          Contact Us
        </a>

        <button
          className="navbar__hamburger"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span className={menuOpen ? 'open' : ''}></span>
          <span className={menuOpen ? 'open' : ''}></span>
          <span className={menuOpen ? 'open' : ''}></span>
        </button>
      </div>

      <div className={`navbar__mobile ${menuOpen ? 'navbar__mobile--open' : ''}`}>
        {navLinks.map((link, i) => (
          <a
            key={i}
            href="#"
            className={`navbar__mobile-link ${link === 'Home' ? 'navbar__mobile-link--active' : ''}`}
            onClick={() => setMenuOpen(false)}
          >
            {link}
          </a>
        ))}
        <a href="#contact" className="btn btn--primary btn--sm" onClick={() => setMenuOpen(false)}>
          Contact Us
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
