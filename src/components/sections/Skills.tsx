import React, { useState } from 'react';
import { Reveal, SectionLabel } from '../ui';
import { skills } from '../../data/portfolio';
import type { SkillGroup } from '../../types';

const Skills: React.FC = () => (
  <section id="skills" style={{ padding: 'var(--section-pad)', borderTop: '1px solid var(--border)' }}>
    <Reveal><SectionLabel>Skills</SectionLabel></Reveal>
    <Reveal delay={100}>
      <h2 style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(2rem, 4vw, 3.2rem)', fontWeight: 400, marginBottom: '3rem', lineHeight: 1.15 }}>
        Technical<br /><em style={{ fontStyle: 'italic', color: 'var(--accent)' }}>toolkit</em>
      </h2>
    </Reveal>
    <Reveal delay={200}>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1px', background: 'var(--border)' }}>
        {skills.map((group) => <SkillCard key={group.category} {...group} />)}
      </div>
    </Reveal>
  </section>
);

const SkillCard: React.FC<SkillGroup> = ({ category, items }) => {
  const [hovered, setHovered] = useState(false);
  return (
    <div onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}
      style={{ background: hovered ? 'var(--surface-hover)' : 'var(--surface)', padding: '2rem', transition: 'background var(--transition)' }}>
      <div style={{ fontFamily: 'var(--mono)', fontSize: '10px', color: 'var(--accent2)', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '1.2rem' }}>{category}</div>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
        {items.map((item) => <SkillTag key={item}>{item}</SkillTag>)}
      </div>
    </div>
  );
};

const SkillTag: React.FC<{ children: string }> = ({ children }) => {
  const [hovered, setHovered] = useState(false);
  return (
    <span onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}
      style={{ fontSize: '12px', color: hovered ? 'var(--accent)' : 'var(--muted)', padding: '4px 10px', border: `1px solid ${hovered ? 'var(--accent)' : 'var(--border)'}`, letterSpacing: '0.03em', transition: 'all var(--transition)', cursor: 'default' }}>
      {children}
    </span>
  );
};

export default Skills;
