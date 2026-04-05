import React from 'react';

interface SectionLabelProps {
  children: React.ReactNode;
}

const SectionLabel: React.FC<SectionLabelProps> = ({ children }) => (
  <div style={{
    fontFamily: 'var(--mono)',
    fontSize: '11px',
    color: 'var(--accent2)',
    letterSpacing: '0.15em',
    textTransform: 'uppercase',
    marginBottom: '3rem',
    display: 'flex',
    alignItems: 'center',
    gap: '1rem',
  }}>
    {children}
    <span style={{ flex: 1, height: '1px', background: 'var(--border)' }} />
  </div>
);

export default SectionLabel;
