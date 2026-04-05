import React, { useEffect, useState } from 'react';
import { ThemeToggle } from '../ui/ThemeToggle';

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
];

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', handler);
    return () => window.removeEventListener('scroll', handler);
  }, []);

  return (
    <nav style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
      display: 'flex', justifyContent: 'space-between', alignItems: 'center',
      padding: '1.5rem 4rem',
      borderBottom: scrolled ? '1px solid var(--border)' : '1px solid transparent',
      background: scrolled ? 'rgba(10,10,10,0.95)' : 'transparent',
      backdropFilter: scrolled ? 'blur(8px)' : 'none',
      transition: 'all 0.3s ease',
    }}>
      <a href="#home" style={{ fontFamily: 'var(--serif)', fontSize: '1.2rem', color: 'var(--text)', letterSpacing: '0.02em' }}>
        Utsav Kuinkel
      </a>
      <ul style={{ display: 'flex', gap: '2.5rem', listStyle: 'none' }}>
        {navLinks.map((link) => <NavLink key={link.href} href={link.href}>{link.label}</NavLink>)}
        <ThemeToggle />
      </ul>
    </nav>
  );
};

const NavLink: React.FC<{ href: string; children: React.ReactNode }> = ({ href, children }) => {
  const [hovered, setHovered] = useState(false);
  return (
    <li>
      <a href={href} style={{ color: hovered ? 'var(--text)' : 'var(--muted)', fontSize: '13px', letterSpacing: '0.08em', textTransform: 'uppercase', fontWeight: 400, transition: 'color var(--transition)' }}
        onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}>
        {children}
      </a>
    </li>
  );
};

export default Navbar;
