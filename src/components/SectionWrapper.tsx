import React from 'react';
import { motion } from 'framer-motion';

interface SectionWrapperProps {
  children: React.ReactNode;
  id: string;
  className?: string;
  delay?: number;
  style?: React.CSSProperties;
}

const SectionWrapper: React.FC<SectionWrapperProps> = ({
  children,
  id,
  className = '',
  delay = 0,
  style,
}) => {
  return (
    <section id={id} className={`section-padding ${className}`} style={style}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.6, delay }}
        className="container-custom"
      >
        {children}
      </motion.div>
    </section>
  );
};

export default SectionWrapper; 