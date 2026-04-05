import React, { useState } from 'react';
import { Reveal, SectionLabel } from '../ui';
import { personal } from '../../data/portfolio';

const links = [
  { label: 'GitHub', href: personal.github, external: true },
  { label: 'LinkedIn', href: personal.linkedin, external: true },
  { label: 'Phone', href: `tel:${personal.phone}`, external: false },
];

const Contact: React.FC = () => {
  const [emailHovered, setEmailHovered] = useState(false);
  return (
    <section id="contact" style={{ padding: 'var(--section-pad)', borderTop: '1px solid var(--border)' }}>
      <Reveal><SectionLabel>Contact</SectionLabel></Reveal>
      <div style={{ maxWidth: '640px' }}>
        <Reveal delay={100}>
          <h2 style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(2rem, 4vw, 3.2rem)', fontWeight: 400, marginBottom: '2rem', lineHeight: 1.15 }}>
            Let's work<br /><em style={{ fontStyle: 'italic', color: 'var(--accent)' }}>together</em>
          </h2>
        </Reveal>
        <Reveal delay={200}>
          <a href={`mailto:${personal.email}`}
            onMouseEnter={() => setEmailHovered(true)} onMouseLeave={() => setEmailHovered(false)}
            style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(1.5rem, 3vw, 2.5rem)', color: emailHovered ? 'var(--accent)' : 'var(--text)', display: 'block', marginBottom: '0.5rem', borderBottom: '1px solid var(--border)', paddingBottom: '1.5rem', transition: 'color var(--transition)' }}>
            {personal.email}
          </a>
          <p style={{ color: 'var(--text-muted)', fontSize: '15px', lineHeight: 1.8, marginTop: '1.5rem', marginBottom: '2rem' }}>
            Open to full-time roles, freelance projects, and interesting conversations. Based in Toronto — happy to collaborate remotely or in person.
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
            {links.map((link) => <ContactLink key={link.label} {...link}>↗ {link.label}</ContactLink>)}
          </div>
        </Reveal>
      </div>
    </section>
  );
};

const ContactLink: React.FC<{ href: string; children: React.ReactNode; external: boolean }> = ({ href, children, external }) => {
  const [hovered, setHovered] = useState(false);
  return (
    <a href={href} target={external ? '_blank' : undefined} rel={external ? 'noopener noreferrer' : undefined}
      onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}
      style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '0.6rem 1.25rem', border: `1px solid ${hovered ? 'var(--accent)' : 'var(--border)'}`, fontSize: '12px', letterSpacing: '0.06em', textTransform: 'uppercase', color: hovered ? 'var(--accent)' : 'var(--muted)', transition: 'all var(--transition)' }}>
      {children}
    </a>
  );
};

export default Contact;
