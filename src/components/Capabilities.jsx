import React, { useState } from 'react';
import { useInView } from '../hooks/useInView';

const capabilities = [
  {
    id: 'backend',
    label: 'Backend automation',
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <rect x="1" y="1" width="7" height="7" rx="1.5" stroke="#22c55e" strokeWidth="1.5"/>
        <rect x="11" y="1" width="7" height="7" rx="1.5" stroke="#22c55e" strokeWidth="1.5"/>
        <rect x="1" y="11" width="7" height="7" rx="1.5" stroke="#22c55e" strokeWidth="1.5"/>
        <path d="M15 11v7M11 14.5h7" stroke="#22c55e" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    description:
      'Mandatory inspections, safety awareness campaign, and tracking run on their own. No manual entry. No forgotten steps. Domestic refill sales growth.',
    details: ['Auto-scheduled inspections', 'Zero manual data entry', 'Smart refill forecasting', 'Compliance audit logs'],
  },
  {
    id: 'sales',
    label: 'Sales and support',
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path d="M10 1C5.03 1 1 5.03 1 10s4.03 9 9 9 9-4.03 9-9-4.03-9-9-9Z" stroke="#22c55e" strokeWidth="1.5"/>
        <path d="M6.5 10l2.5 2.5 4.5-4.5" stroke="#22c55e" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    description:
      'Sales flow, customer engagement, and CRM work as one system. Every customer tracked. Every opportunity captured.',
    details: ['Unified CRM pipeline', 'Real-time lead tracking', 'Automated follow-ups', 'Revenue dashboards'],
  },
  {
    id: 'inspections',
    label: 'Mandatory Inspections',
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path d="M10 1L2 5v4.5c0 4.1 3.4 7.9 8 8.9 4.6-1 8-4.8 8-8.9V5L10 1Z" stroke="#22c55e" strokeWidth="1.5" strokeLinejoin="round"/>
        <path d="M7 10l2 2 4-4" stroke="#22c55e" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    description:
      'Compliance becomes effortless. Every home tracked. Every detail stored. Every risk flagged before it becomes a problem.',
    details: ['Geo-tagged inspections', 'Photo documentation', 'Risk auto-flagging', 'Inspector mobile app'],
  },
  {
    id: 'delivery',
    label: 'Delivery and tracking',
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path d="M2 7h13l-1.5 8H3.5L2 7Z" stroke="#22c55e" strokeWidth="1.5" strokeLinejoin="round"/>
        <path d="M2 7l1.5-4h10l1.5 4" stroke="#22c55e" strokeWidth="1.5" strokeLinejoin="round"/>
        <circle cx="6.5" cy="17" r="1.5" fill="#22c55e"/>
        <circle cx="12.5" cy="17" r="1.5" fill="#22c55e"/>
      </svg>
    ),
    description:
      'End-to-end visibility from warehouse to doorstep. Know where every cylinder and allied products. Know when it arrives.',
    details: ['Live GPS tracking', 'Delivery confirmation', 'Route optimization', 'Customer notifications'],
  },
];

const Capabilities = () => {
  const [active, setActive] = useState('backend');
  const [titleRef, titleInView] = useInView();
  const [cardRef, cardInView] = useInView();

  const current = capabilities.find((c) => c.id === active);

  return (
    <section className="capabilities" id="capabilities">
      <div className="capabilities__inner">
        {/* Left panel */}
        <div
          ref={titleRef}
          className={`capabilities__left ${titleInView ? 'capabilities__left--visible' : ''}`}
        >
          <span className="section-eyebrow">CAPABILITIES</span>
          <h2 className="capabilities__heading">What we do for your business</h2>
          <p className="capabilities__subtext">
            Core systems working together to transform your distributorship from chaos into clarity.
          </p>

          <ul className="capabilities__tabs">
            {capabilities.map((cap) => (
              <li key={cap.id}>
                <button
                  className={`capabilities__tab ${active === cap.id ? 'capabilities__tab--active' : ''}`}
                  onClick={() => setActive(cap.id)}
                >
                  <span className="capabilities__tab-icon">{cap.icon}</span>
                  <span>{cap.label}</span>
                  {active === cap.id && (
                    <svg className="capabilities__tab-arrow" width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path d="M4 8h8M9 5l3 3-3 3" stroke="#22c55e" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  )}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Right panel – card */}
        <div
          ref={cardRef}
          className={`capabilities__card ${cardInView ? 'capabilities__card--visible' : ''}`}
          key={active}
        >
          <div className="capabilities__card-icon">{current.icon}</div>
          <h3 className="capabilities__card-title">{current.label}</h3>
          <p className="capabilities__card-desc">{current.description}</p>
          <ul className="capabilities__card-list">
            {current.details.map((d, i) => (
              <li key={i} className="capabilities__card-item">
                <span className="capabilities__card-check">
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path d="M2.5 7l3 3 6-6" stroke="#22c55e" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </span>
                {d}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Capabilities;
