import React from 'react';

const Footer = () => {
  const company = ['Home', 'Who We Are', 'Our Vision', 'Our Mission', 'Our Promise', 'Careers'];
  const solutions = ['The Distributor', 'Our Value Proposition', 'Commercial Segments'];
  const trust = ['Trusted By', 'Why Choose Us', 'Blog', 'FAQ', 'Contact Us'];

  const socials = [
    {
      name: 'Facebook',
      href: '#',
      icon: (
        <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
          <path d="M8 0a8 8 0 100 16A8 8 0 008 0zm2 5.5h-1.3c-.3 0-.4.1-.4.4V7H10l-.2 1.5H8.3V13H6.7V8.5H5.5V7h1.2V5.8C6.7 4.6 7.4 4 8.5 4c.5 0 1 0 1.5.1V5.5z"/>
        </svg>
      ),
    },
    {
      name: 'Instagram',
      href: '#',
      icon: (
        <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
          <path d="M8 0C5.8 0 5.5 0 4.7.1 2.2.2.2 2.2.1 4.7 0 5.5 0 5.8 0 8c0 2.2 0 2.5.1 3.3.1 2.5 2.1 4.5 4.6 4.6.8.1 1.1.1 3.3.1 2.2 0 2.5 0 3.3-.1 2.5-.1 4.5-2.1 4.6-4.6.1-.8.1-1.1.1-3.3 0-2.2 0-2.5-.1-3.3C15.8 2.2 13.8.2 11.3.1 10.5 0 10.2 0 8 0zm0 1.4c2.1 0 2.4 0 3.2.1 2 .1 2.9 1 3 3 .1.8.1 1.1.1 3.2s0 2.4-.1 3.2c-.1 2-1 2.9-3 3-.8.1-1.1.1-3.2.1s-2.4 0-3.2-.1c-2-.1-2.9-1-3-3C1.7 10.4 1.7 10 1.7 8s0-2.4.1-3.2c.1-2 1-2.9 3-3C5.6 1.4 5.9 1.4 8 1.4zm0 2.4a4.2 4.2 0 100 8.4A4.2 4.2 0 008 3.8zm0 6.9a2.7 2.7 0 110-5.4 2.7 2.7 0 010 5.4zm4.4-7a1 1 0 100 2 1 1 0 000-2z"/>
        </svg>
      ),
    },
    {
      name: 'X',
      href: '#',
      icon: (
        <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
          <path d="M12.6 1h2.4L9.7 6.8 16 15h-4.6L7.9 9.9 3.6 15H1.2l5.6-6.2L0 1h4.7l3.1 4.7L12.6 1zm-.8 12.6h1.3L4.2 2.3H2.8l9 11.3z"/>
        </svg>
      ),
    },
    {
      name: 'LinkedIn',
      href: '#',
      icon: (
        <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
          <path d="M0 1.1C0 .5.5 0 1.1 0H15c.6 0 1 .5 1 1.1v13.8c0 .6-.4 1.1-1 1.1H1.1C.5 16 0 15.5 0 14.9V1.1zM4.8 13.5V6.2H2.4v7.3h2.4zm-1.2-8.3a1.4 1.4 0 100-2.8 1.4 1.4 0 000 2.8zm4.4 8.3V9.7c0-.2 0-.4.1-.6.2-.4.6-.9 1.3-.9.9 0 1.3.7 1.3 1.7v3.6h2.4V9.7c0-2.2-1.2-3.2-2.7-3.2-1.3 0-1.8.7-2.2 1.2H8V6.2H5.7v7.3h2.3z"/>
        </svg>
      ),
    },
  ];

  return (
    <footer className="footer" id="contact">
      <div className="footer__inner">
        <div className="footer__brand">
          <div className="footer__logo">
            <div className="footer__logo-icon">
              <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                <circle cx="14" cy="14" r="13" stroke="#22c55e" strokeWidth="2" />
                <path d="M8 14 L14 8 L20 14 L14 20 Z" fill="#22c55e" opacity="0.8" />
                <circle cx="14" cy="14" r="3" fill="#22c55e" />
              </svg>
            </div>
            <span className="footer__logo-text">MARSFORCE</span>
          </div>
          <p className="footer__tagline">
            Powering India's LPG distributors with smart technology.
          </p>
          <div className="footer__socials">
            {socials.map((s) => (
              <a key={s.name} href={s.href} className="footer__social" aria-label={s.name}>
                {s.icon}
              </a>
            ))}
          </div>
        </div>

        <div className="footer__col">
          <h4 className="footer__col-title">Company</h4>
          <ul className="footer__col-links">
            {company.map((l) => (
              <li key={l}><a href="#" className="footer__link">{l}</a></li>
            ))}
          </ul>
        </div>

        <div className="footer__col">
          <h4 className="footer__col-title">Solutions</h4>
          <ul className="footer__col-links">
            {solutions.map((l) => (
              <li key={l}><a href="#" className="footer__link">{l}</a></li>
            ))}
          </ul>
        </div>

        <div className="footer__col">
          <h4 className="footer__col-title">Trust & Support</h4>
          <ul className="footer__col-links">
            {trust.map((l) => (
              <li key={l}><a href="#" className="footer__link">{l}</a></li>
            ))}
          </ul>
        </div>
      </div>

      <div className="footer__bottom">
        <span>© 2024 Marsforce Technologies Pvt. Ltd. All rights reserved.</span>
        <span>Built with ❤️ for India's LPG distributors</span>
      </div>
    </footer>
  );
};

export default Footer;
