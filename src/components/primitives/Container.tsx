import React from 'react';

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

const Container: React.FC<ContainerProps> = ({ children, className = '', style }) => {
  return (
    <div className={`mx-auto w-full px-4 sm:px-6 lg:px-8 ${className}`} style={style}>
      <div className="max-w-content mx-auto">{children}</div>
    </div>
  );
};

export default Container;
