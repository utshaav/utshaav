import React from 'react';
import { Reveal, SectionLabel } from '../ui';
import { personal, stats } from '../../data/portfolio';

const About: React.FC = () => (
  <section id="about" style={{ padding: 'var(--section-pad)', borderTop: '1px solid var(--border)' }}>
    <Reveal><SectionLabel>About</SectionLabel></Reveal>
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '6rem', alignItems: 'start' }}>
      <Reveal delay={100}>
        <h2 style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(2rem, 4vw, 3.2rem)', fontWeight: 400, marginBottom: '2rem', lineHeight: 1.15 }}>
          Building things<br />
          <em style={{ fontStyle: 'italic', color: 'var(--accent)' }}>that actually work</em>
        </h2>
        <p style={para}>I'm a Full Stack Developer with hands-on experience building and maintaining production systems in financial and transactional domains. I care deeply about safe releases, performance improvements, and long-term maintainability.</p>
        <p style={para}>My background spans backend services, RESTful APIs, and complex state-driven front-end interfaces with React and Redux. I thrive in Agile environments where collaboration and code quality go hand in hand.</p>
        <p style={{ ...para, marginBottom: 0 }}>
          Based in <strong style={{ color: 'var(--accent)', fontWeight: 400 }}>Toronto, Canada</strong>, reachable at{' '}
          <a href={`mailto:${personal.email}`} style={{ color: 'var(--accent2)' }}>{personal.email}</a>
        </p>
      </Reveal>
      <Reveal delay={200}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1px', background: 'var(--border)' }}>
          {stats.map((s) => (
            <div key={s.label} style={{ background: 'var(--surface)', padding: '2rem 1.5rem' }}>
              <div style={{ fontFamily: 'var(--serif)', fontSize: '2.8rem', color: 'var(--accent)', lineHeight: 1, marginBottom: '0.5rem' }}>{s.value}</div>
              <div style={{ fontSize: '12px', color: 'var(--muted)', letterSpacing: '0.06em', textTransform: 'uppercase' }}>{s.label}</div>
            </div>
          ))}
        </div>
      </Reveal>
    </div>
  </section>
);

const para: React.CSSProperties = { color: 'var(--text-muted)', fontSize: '15px', lineHeight: 1.9, marginBottom: '1.5rem' };

export default About;
