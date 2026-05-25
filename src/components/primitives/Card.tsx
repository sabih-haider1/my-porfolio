import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  as?: 'div' | 'article' | 'section';
}

const Card: React.FC<CardProps> = ({ children, className = '', as = 'div' }) => {
  const Tag: any = as;
  return (
    <Tag className={`bg-surface-default border border-surface-muted rounded-md p-6 shadow-elev-1 ${className}`}>
      {children}
    </Tag>
  );
};

export default Card;
