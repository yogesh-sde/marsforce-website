import React from 'react';
import { useInView } from '../hooks/useInView';

const features = [
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <rect x="2" y="2" width="8" height="8" rx="1.5" stroke="#22c55e" strokeWidth="1.5"/>
        <rect x="12" y="2" width="8" height="8" rx="1.5" stroke="#22c55e" strokeWidth="1.5"/>
        <rect x="2" y="12" width="8" height="8" rx="1.5" stroke="#22c55e" strokeWidth="1.5"/>
        <path d="M16 12v8M12 16h8" stroke="#22c55e" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    title: 'Backend automation',
    description:
      'Mandatory inspections, safety awareness campaign, and tracking run on their own. No manual entry. No forgotten steps. Domestic refill sales growth.',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <path d="M11 2C6.03 2 2 6.03 2 11s4.03 9 9 9 9-4.03 9-9-4.03-9-9-9Z" stroke="#22c55e" strokeWidth="1.5"/>
        <path d="M7 11l3 3 5-5" stroke="#22c55e" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: 'Sales and support',
    description:
      'Sales flow, customer engagement, and CRM work as one system. Every customer tracked. Every opportunity captured.',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <path d="M11 2L3 6v5c0 4.4 3.4 8.5 8 9.5 4.6-1 8-5.1 8-9.5V6L11 2Z" stroke="#22c55e" strokeWidth="1.5" strokeLinejoin="round"/>
        <path d="M8 11l2 2 4-4" stroke="#22c55e" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: 'Mandatory Inspections',
    description:
      'Compliance becomes effortless. Every home tracked. Every detail stored. Every risk flagged before it becomes a problem.',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <path d="M3 8h16l-2 9H5L3 8Z" stroke="#22c55e" strokeWidth="1.5" strokeLinejoin="round"/>
        <path d="M3 8l2-4h12l2 4" stroke="#22c55e" strokeWidth="1.5" strokeLinejoin="round"/>
        <circle cx="8" cy="19" r="1.5" fill="#22c55e"/>
        <circle cx="15" cy="19" r="1.5" fill="#22c55e"/>
      </svg>
    ),
    title: 'Delivery and tracking',
    description:
      'End-to-end visibility from warehouse to doorstep. Know where every cylinder and allied products. Know when it arrives.',
  },
];

const FeatureCard = ({ feature, index }) => {
  const [ref, isInView] = useInView();

  return (
    <div
      ref={ref}
      className={`feature-card ${isInView ? 'feature-card--visible' : ''}`}
      style={{ transitionDelay: `${index * 120}ms` }}
    >
      <div className="feature-card__icon">{feature.icon}</div>
      <h3 className="feature-card__title">{feature.title}</h3>
      <p className="feature-card__desc">{feature.description}</p>
    </div>
  );
};

const Features = () => {
  const [titleRef, titleInView] = useInView();

  return (
    <section className="features" id="service">
      <div
        ref={titleRef}
        className={`features__header ${titleInView ? 'features__header--visible' : ''}`}
      >
        <span className="section-eyebrow">CAPABILITIES</span>
        <h2 className="features__title">What we do for your business</h2>
        <p className="features__subtitle">
          Core systems working together to transform your distributorship from chaos into clarity.
        </p>
      </div>

      <div className="features__grid">
        {features.map((feature, i) => (
          <FeatureCard key={i} feature={feature} index={i} />
        ))}
      </div>
    </section>
  );
};

export default Features;
