import React from 'react';

interface SectionProps {
  children: React.ReactNode;
  id?: string;
  className?: string;
  style?: React.CSSProperties;
}

const Section: React.FC<SectionProps> = ({ children, id, className = '', style }) => {
  return (
    <section id={id} className={`py-rhythm-5 ${className}`} style={style}>
      {children}
    </section>
  );
};

export default Section;
