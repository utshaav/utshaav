import React from 'react';
import useReveal from '../../hooks/useReveal';

interface RevealProps {
  children: React.ReactNode;
  delay?: number;
  style?: React.CSSProperties;
}

const Reveal: React.FC<RevealProps> = ({ children, delay = 0, style }) => {
  const { ref, visible } = useReveal();
  return (
    <div
      ref={ref}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(24px)',
        transition: `opacity 0.7s ease ${delay}ms, transform 0.7s ease ${delay}ms`,
        ...style,
      }}
    >
      {children}
    </div>
  );
};

export default Reveal;
