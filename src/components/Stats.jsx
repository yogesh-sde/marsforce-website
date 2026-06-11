import React, { useEffect, useState, useRef } from 'react';
import { useInView } from '../hooks/useInView';

const stats = [
  { value: 500, suffix: '+', label: 'Active Distributors', desc: 'Across India' },
  { value: 2, suffix: 'M+', label: 'Deliveries Tracked', desc: 'Every year' },
  { value: 99.9, suffix: '%', label: 'Platform Uptime', desc: 'SLA guaranteed' },
  { value: 48, suffix: 'hrs', label: 'Onboarding Time', desc: 'Go live fast' },
];

const AnimatedNumber = ({ target, suffix, isVisible }) => {
  const [count, setCount] = useState(0);
  const hasRun = useRef(false);

  useEffect(() => {
    if (!isVisible || hasRun.current) return;
    hasRun.current = true;

    const duration = 1800;
    const steps = 60;
    const step = target / steps;
    let current = 0;
    let frame = 0;

    const timer = setInterval(() => {
      frame++;
      current = Math.min(target, step * frame);
      const eased = target * (1 - Math.pow(1 - frame / steps, 3));
      setCount(Math.min(eased, target));
      if (frame >= steps) clearInterval(timer);
    }, duration / steps);

    return () => clearInterval(timer);
  }, [isVisible, target]);

  const display = target % 1 === 0 ? Math.round(count) : count.toFixed(1);
  return (
    <span>
      {display}
      {suffix}
    </span>
  );
};

const Stats = () => {
  const [ref, isInView] = useInView();

  return (
    <section className="stats" ref={ref}>
      <div className="stats__grid">
        {stats.map((stat, i) => (
          <div
            key={i}
            className={`stats__item ${isInView ? 'stats__item--visible' : ''}`}
            style={{ transitionDelay: `${i * 100}ms` }}
          >
            <div className="stats__value">
              <AnimatedNumber target={stat.value} suffix={stat.suffix} isVisible={isInView} />
            </div>
            <div className="stats__label">{stat.label}</div>
            <div className="stats__desc">{stat.desc}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Stats;
