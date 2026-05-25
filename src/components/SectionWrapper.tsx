import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import Container from './primitives/Container';

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
  const prefersReduced = useReducedMotion();

  return (
    <section id={id} className={`py-rhythm-5 ${className}`} style={style}>
      <motion.div
        initial={{ opacity: 0, y: prefersReduced ? 0 : 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.6, delay }}
      >
        <Container>{children}</Container>
      </motion.div>
    </section>
  );
};

export default SectionWrapper;