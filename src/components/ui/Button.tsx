import React, { useState } from 'react';

interface ButtonProps {
  href?: string;
  onClick?: () => void;
  variant?: 'primary' | 'ghost';
  children: React.ReactNode;
  external?: boolean;
}

const Button: React.FC<ButtonProps> = ({ href, onClick, variant = 'ghost', children, external = false }) => {
  const [hovered, setHovered] = useState(false);

  const base: React.CSSProperties = {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '8px',
    padding: '0.75rem 1.75rem',
    fontSize: '13px',
    letterSpacing: '0.06em',
    textTransform: 'uppercase',
    fontFamily: 'var(--sans)',
    fontWeight: 400,
    cursor: 'pointer',
    border: '1px solid',
    transition: 'all var(--transition)',
    textDecoration: 'none',
  };

  const style: React.CSSProperties =
    variant === 'primary'
      ? { ...base, background: hovered ? 'transparent' : 'var(--accent)', borderColor: 'var(--accent)', color: hovered ? 'var(--accent)' : '#0a0a0a' }
      : { ...base, background: 'transparent', borderColor: hovered ? 'var(--accent)' : 'var(--border)', color: hovered ? 'var(--accent)' : 'var(--muted)' };

  if (href) {
    return (
      <a href={href} style={style} target={external ? '_blank' : undefined} rel={external ? 'noopener noreferrer' : undefined}
        onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}>
        {children}
      </a>
    );
  }
  return (
    <button style={style} onClick={onClick} onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}>
      {children}
    </button>
  );
};

export default Button;
