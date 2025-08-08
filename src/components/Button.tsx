import React from 'react';
import { motion } from 'framer-motion';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  onClick?: () => void;
  href?: string;
  className?: string;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
  style?: React.CSSProperties;
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  onClick,
  href,
  className = '',
  disabled = false,
  type,
  style,
}) => {
  const baseClasses = 'inline-flex items-center justify-center font-semibold rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-dark-900';
  
  const variants = {
    primary: 'btn-primary focus:ring-accent-blue',
    secondary: 'btn-secondary focus:ring-accent-green',
    outline: 'border border-dark-600 text-gray-300 hover:border-accent-blue hover:text-accent-blue focus:ring-accent-blue',
  };
  
  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  };
  
  const classes = `${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`;
  
  const buttonContent = (
    <motion.div
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className="w-full h-full"
    >
      {children}
    </motion.div>
  );
  
  if (href) {
    return (
      <a
        href={href}
        className={classes}
        target="_blank"
        rel="noopener noreferrer"
        style={style}
      >
        {buttonContent}
      </a>
    );
  }
  
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      type={type || 'button'}
      className={`${classes} ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`}
      style={style}
    >
      {buttonContent}
    </button>
  );
};

export default Button; 