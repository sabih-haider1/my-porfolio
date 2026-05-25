import React from 'react';

interface BadgeProps {
  children: React.ReactNode;
  className?: string;
}

const Badge: React.FC<BadgeProps> = ({ children, className = '' }) => {
  return (
    <span className={`inline-flex items-center px-3 py-1 rounded-pill text-sm font-semibold bg-surface-muted text-white ${className}`}>
      {children}
    </span>
  );
};

export default Badge;
