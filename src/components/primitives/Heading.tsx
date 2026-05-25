import React from 'react';

interface HeadingProps {
  level?: 1 | 2 | 3;
  children: React.ReactNode;
  className?: string;
}

const Heading: React.FC<HeadingProps> = ({ level = 2, children, className = '' }) => {
  if (level === 1) return <h1 className={`text-display-lg font-extrabold ${className}`}>{children}</h1>;
  if (level === 2) return <h2 className={`text-display-md font-bold ${className}`}>{children}</h2>;
  return <h3 className={`text-h3 font-bold ${className}`}>{children}</h3>;
};

export default Heading;
