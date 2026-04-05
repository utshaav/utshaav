import React from 'react';
import { personal } from '../../data/portfolio';

const Footer: React.FC = () => {
  const year = new Date().getFullYear();
  return (
    <footer style={{
      padding: '2rem 4rem', display: 'flex', justifyContent: 'space-between',
      alignItems: 'center', borderTop: '1px solid var(--border)', flexWrap: 'wrap', gap: '0.5rem',
    }}>
      <span style={{ fontFamily: 'var(--mono)', fontSize: '11px', color: 'var(--muted)', letterSpacing: '0.06em' }}>
        © {year} {personal.name}
      </span>
      <span style={{ fontFamily: 'var(--mono)', fontSize: '11px', color: 'var(--muted)', letterSpacing: '0.06em' }}>
        {personal.location}
      </span>
    </footer>
  );
};

export default Footer;
