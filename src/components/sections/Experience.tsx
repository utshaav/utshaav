import React from 'react';
import { Reveal, SectionLabel } from '../ui';
import { experience, education } from '../../data/portfolio';
import type { ExperienceItem } from '../../types';

const Experience: React.FC = () => (
  <section id="experience" style={{ padding: 'var(--section-pad)', borderTop: '1px solid var(--border)' }}>
    <Reveal><SectionLabel>Experience</SectionLabel></Reveal>
    <Reveal delay={100}>
      <h2 style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(2rem, 4vw, 3.2rem)', fontWeight: 400, marginBottom: '3rem', lineHeight: 1.15 }}>
        Where I've<br /><em style={{ fontStyle: 'italic', color: 'var(--accent)' }}>worked</em>
      </h2>
    </Reveal>

    {experience.map((job, i) => (
      <Reveal key={job.company} delay={i * 80}>
        <ExperienceCard {...job} isLast={i === experience.length - 1} />
      </Reveal>
    ))}

    <Reveal delay={300}>
      <div style={{ marginTop: '4rem', paddingTop: '4rem', borderTop: '1px solid var(--border)' }}>
        <div style={{ fontFamily: 'var(--mono)', fontSize: '11px', color: 'var(--accent2)', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '2rem' }}>Education</div>
        {education.map((edu) => (
          <div key={edu.school} style={{ display: 'grid', gridTemplateColumns: '200px 1fr', gap: '3rem' }}>
            <div>
              <div style={{ fontFamily: 'var(--mono)', fontSize: '11px', color: 'var(--muted)', letterSpacing: '0.08em' }}>{edu.period}</div>
              <div style={{ fontSize: '13px', color: 'var(--accent2)', marginTop: '0.25rem' }}>{edu.school}</div>
              <div style={{ fontSize: '12px', color: 'var(--muted)', marginTop: '0.15rem' }}>{edu.location}</div>
            </div>
            <div style={{ fontFamily: 'var(--serif)', fontSize: '1.3rem', fontWeight: 400, color: 'var(--text)' }}>{edu.degree}</div>
          </div>
        ))}
      </div>
    </Reveal>
  </section>
);

const ExperienceCard: React.FC<ExperienceItem & { isLast: boolean }> = ({ period, company, location, title, bullets, isLast }) => (
  <div style={{ display: 'grid', gridTemplateColumns: '200px 1fr', gap: '3rem', padding: '2.5rem 0', borderBottom: isLast ? 'none' : '1px solid var(--border)' }}>
    <div style={{ paddingTop: '0.2rem' }}>
      <div style={{ fontFamily: 'var(--mono)', fontSize: '11px', color: 'var(--muted)', letterSpacing: '0.08em', marginBottom: '0.5rem' }}>{period}</div>
      <div style={{ fontSize: '13px', color: 'var(--accent2)' }}>{company}</div>
      <div style={{ fontSize: '12px', color: 'var(--muted)', marginTop: '0.25rem' }}>{location}</div>
    </div>
    <div>
      <div style={{ fontFamily: 'var(--serif)', fontSize: '1.4rem', fontWeight: 400, marginBottom: '1rem', color: 'var(--text)' }}>{title}</div>
      <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
        {bullets.map((bullet, i) => (
          <li key={i} style={{ fontSize: '14px', color: 'var(--text-muted)', lineHeight: 1.7, paddingLeft: '1.2rem', position: 'relative' }}>
            <span style={{ position: 'absolute', left: 0, color: 'var(--muted)' }}>—</span>
            {bullet}
          </li>
        ))}
      </ul>
    </div>
  </div>
);

export default Experience;
