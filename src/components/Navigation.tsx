import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import type { NavItem } from '../types';

const navItems: NavItem[] = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        backgroundColor: 'transparent',
        backdropFilter: 'blur(8px)',
        borderBottom: '1px solid rgba(55, 65, 81, 0.3)',
        transition: 'all 0.3s ease'
      }}
    >
      <div className="container-custom" style={{ padding: '0 1rem' }}>
        <div style={{ 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'space-between', 
          height: '4rem',
          position: 'relative'
        }}>
          {/* Logo on the left */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="gradient-text"
            style={{
              fontSize: '1.25rem',
              fontWeight: 'bold',
              cursor: 'pointer',
              zIndex: 10
            }}
            onClick={() => scrollToSection('#home')}
          >
            Sabih Haider
          </motion.div>

          {/* Desktop Navigation - Centered */}
          <div style={{
            display: 'none',
            position: 'absolute',
            left: '50%',
            transform: 'translateX(-50%)',
            alignItems: 'center',
            gap: '2rem'
          }} className="desktop-menu">
            {navItems.map((item) => (
              <motion.button
                key={item.label}
                whileHover={{ y: -2 }}
                style={{
                  color: '#d1d5db',
                  fontWeight: 500,
                  transition: 'all 0.2s ease',
                  background: 'transparent',
                  border: 'none',
                  cursor: 'pointer',
                  padding: '0.5rem 1rem',
                  borderRadius: '0.375rem'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = '#22d3ee';
                  e.currentTarget.style.backgroundColor = 'rgba(34, 211, 238, 0.1)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = '#d1d5db';
                  e.currentTarget.style.backgroundColor = 'transparent';
                }}
                onClick={() => scrollToSection(item.href)}
              >
                {item.label}
              </motion.button>
            ))}
          </div>

          {/* Mobile Menu Button - Only visible on mobile */}
          <button
            style={{
              display: 'block',
              color: '#d1d5db',
              transition: 'color 0.2s ease',
              zIndex: 10
            }}
            className="mobile-menu-btn"
            onMouseEnter={(e) => {
              e.currentTarget.style.color = '#22d3ee';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = '#d1d5db';
            }}
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              style={{
                borderTop: '1px solid #374151',
                backgroundColor: 'rgba(17, 24, 39, 0.95)',
                backdropFilter: 'blur(8px)'
              }}
              className="mobile-menu"
            >
              <div style={{ padding: '1rem 0' }}>
                {navItems.map((item) => (
                  <motion.button
                    key={item.label}
                    whileHover={{ x: 10 }}
                    style={{
                      display: 'block',
                      width: '100%',
                      textAlign: 'left',
                      color: '#d1d5db',
                      fontWeight: 500,
                      padding: '0.5rem 0',
                      transition: 'all 0.2s ease',
                      background: 'transparent',
                      border: 'none',
                      cursor: 'pointer'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = '#22d3ee';
                      e.currentTarget.style.backgroundColor = 'rgba(34, 211, 238, 0.1)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = '#d1d5db';
                      e.currentTarget.style.backgroundColor = 'transparent';
                    }}
                    onClick={() => scrollToSection(item.href)}
                  >
                    {item.label}
                  </motion.button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default Navigation; 