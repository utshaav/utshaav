import React from 'react';
import { Button } from '../ui';
import { personal } from '../../data/portfolio';

const fadeUpStyle = (step: number): React.CSSProperties => ({
  opacity: 0,
  animation: `fadeUp 0.7s ease forwards ${0.2 * step}s`,
});

const Hero: React.FC = () => (
  <section id="home" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', padding: '0 4rem 5rem', position: 'relative', overflow: 'hidden' }}>
    {/* Grid lines */}
    <div style={{ position: 'absolute', inset: 0, zIndex: 0, pointerEvents: 'none' }}>
      {[{top:'22%'},{top:'60%'}].map((s,i) => (
        <div key={i} style={{ position: 'absolute', left: 0, right: 0, height: '1px', background: 'var(--border)', opacity: 0.6, ...s }} />
      ))}
      <div style={{ position: 'absolute', top: 0, bottom: 0, left: '40%', width: '1px', background: 'var(--border)', opacity: 0.6 }} />
    </div>

    <div style={{ position: 'relative', zIndex: 1 }}>
      <p style={{ fontFamily: 'var(--mono)', fontSize: '11px', color: 'var(--muted)', letterSpacing: '0.1em', marginBottom: '1.5rem', ...fadeUpStyle(1) }}>
        001 / Full Stack Developer
      </p>
      <h1 style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(3.5rem, 8vw, 7rem)', lineHeight: 1.0, fontWeight: 400, marginBottom: '1rem', ...fadeUpStyle(2) }}>
        {personal.name.split(' ')[0]}
        <br />
        <em style={{ fontStyle: 'italic', color: 'var(--accent)' }}>{personal.name.split(' ')[1]}</em>
      </h1>
      <p style={{ fontSize: '14px', color: 'var(--muted)', letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: '2.5rem', ...fadeUpStyle(3) }}>
        {personal.location} &nbsp;·&nbsp; Available for opportunities
      </p>
      <p style={{ maxWidth: '520px', color: 'var(--text-muted)', fontSize: '15px', lineHeight: 1.8, marginBottom: '3rem', ...fadeUpStyle(4) }}>
        {personal.summary}
      </p>
      <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', ...fadeUpStyle(5) }}>
        <Button href="#experience" variant="primary">View Experience</Button>
        <Button href="#contact" variant="ghost">Get In Touch</Button>
      </div>
    </div>

    <div style={{ position: 'absolute', bottom: '2.5rem', right: '4rem', display: 'flex', alignItems: 'center', gap: '1rem', ...fadeUpStyle(6) }}>
      <div style={{ width: '60px', height: '1px', background: 'var(--muted)' }} />
      <span style={{ fontFamily: 'var(--mono)', fontSize: '10px', color: 'var(--muted)', letterSpacing: '0.15em', textTransform: 'uppercase', writingMode: 'vertical-lr' }}>Scroll</span>
    </div>
  </section>
);

export default Hero;
