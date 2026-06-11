import React, { useEffect, useState } from 'react';

const Hero = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 100);
    return () => clearTimeout(t);
  }, []);

  return (
    <section className="hero">
      {/* Background glow orb */}
      <div className="hero__bg-orb hero__bg-orb--1" />
      <div className="hero__bg-orb hero__bg-orb--2" />

      {/* Radial circuit overlay */}
      <div className="hero__circuit-overlay" />

      <div className="hero__content">
        <div className={`hero__badge ${loaded ? 'hero__badge--visible' : ''}`}>
          <span className="hero__badge-dot" />
          AI-Powered Platform
        </div>

        <h1 className={`hero__heading ${loaded ? 'hero__heading--visible' : ''}`}>
          Powering India's LPG distributors
          <br />
          with <span className="hero__heading--accent">smart technology</span>
        </h1>

        <p className={`hero__subtext ${loaded ? 'hero__subtext--visible' : ''}`}>
          AI-powered LPG distribution, smart refill prediction, and automated delivery — all
          in one unified platform.
        </p>

        <div className={`hero__ctas ${loaded ? 'hero__ctas--visible' : ''}`}>
          <a href="#demo" className="btn btn--primary btn--lg">
            <span>Book a Demo</span>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
          <a href="#contact" className="btn btn--outline btn--lg">
            Talk to Our Team
          </a>
        </div>

        {/* Stats row */}
        <div className={`hero__stats ${loaded ? 'hero__stats--visible' : ''}`}>
          {[
            { value: '500+', label: 'Distributors' },
            { value: '2M+', label: 'Deliveries Tracked' },
            { value: '99.9%', label: 'Uptime SLA' },
          ].map((stat, i) => (
            <div key={i} className="hero__stat">
              <span className="hero__stat-value">{stat.value}</span>
              <span className="hero__stat-label">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
