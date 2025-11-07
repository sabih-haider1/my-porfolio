import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Code, Terminal, Mail, Github, Linkedin } from 'lucide-react';

const Hero: React.FC = () => {
  const [currentText, setCurrentText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const texts = [
    'Software Engineer',
  ];

  useEffect(() => {
    const typeSpeed = isDeleting ? 50 : 100;
    const deleteSpeed = 50;
    const pauseTime = 2000;

    const typeText = () => {
      const currentFullText = texts[currentIndex];
      
      if (isDeleting) {
        setCurrentText(currentFullText.substring(0, currentText.length - 1));
        if (currentText === '') {
          setIsDeleting(false);
          setCurrentIndex((prev) => (prev + 1) % texts.length);
        }
      } else {
        setCurrentText(currentFullText.substring(0, currentText.length + 1));
        if (currentText === currentFullText) {
          setTimeout(() => setIsDeleting(true), pauseTime);
        }
      }
    };

    const timer = setTimeout(typeText, isDeleting ? deleteSpeed : typeSpeed);
    return () => clearTimeout(timer);
  }, [currentText, isDeleting, currentIndex, texts]);

  const socialLinks = [
    {
      icon: <Mail size={20} />,
      href: 'mailto:sabih0364@gmail.com',
      label: 'Email'
    },
    {
      icon: <Github size={20} />,
      href: 'https://github.com/sabih-haider1',
      label: 'GitHub'
    },
    {
      icon: <Linkedin size={20} />,
      href: 'https://www.linkedin.com/in/sabih-h-581113274/',
      label: 'Linkedin'
    }
  ];

  return (
    <section id="home" style={{ 
      minHeight: '100vh', 
      display: 'flex', 
      alignItems: 'center', 
      justifyContent: 'center', 
      position: 'relative',
      marginTop: '-130px',
      padding: '0 1rem'
    }}>
      {/* Background Elements */}
      <div style={{ position: 'absolute', inset: 0, opacity: 0.1 }}>
        <div style={{ position: 'absolute', top: '5rem', left: '2.5rem', color: '#22d3ee', fontFamily: 'monospace', fontSize: '0.875rem' }}>
          <Code size={20} />
        </div>
        <div style={{ position: 'absolute', top: '10rem', right: '5rem', color: '#10b981', fontFamily: 'monospace', fontSize: '0.875rem' }}>
          <Terminal size={20} />
        </div>
        <div style={{ position: 'absolute', bottom: '10rem', left: '5rem', color: '#8b5cf6', fontFamily: 'monospace', fontSize: '0.875rem' }}>
          {'</>'}
        </div>
      </div>

      <div className="container-custom" style={{ zIndex: 10 }}>
        {/* Main Hero Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          style={{
            backgroundColor: '#1f2937',
            borderRadius: '1rem',
            padding: '2rem 3rem',
            maxWidth: '1200px',
            margin: '0 auto',
            backdropFilter: 'blur(10px)',
            boxShadow: '0 15px 40px rgba(0, 0, 0, 0.2)'
          }}
        >
          {/* Name and Social Icons Row */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginBottom: '1.5rem',
            flexWrap: 'wrap',
            gap: '1rem'
          }}>
            {/* Name on the left */}
            <div style={{ flex: 1, minWidth: '200px' }}>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                style={{ color: '#22d3ee', fontFamily: 'monospace', fontSize: '1rem', marginBottom: '0.25rem' }}
              >
                Hello, I'm
              </motion.p>
              <motion.h1
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                style={{ fontSize: '2.25rem', fontWeight: 'bold', margin: 0 }}
              >
                <span className="gradient-text">Sabih Haider</span>
              </motion.h1>
            </div>

            {/* Social Icons on the right */}
            <div style={{
              display: 'flex',
              gap: '0.75rem',
              alignItems: 'center'
            }}>
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.6 + index * 0.1 }}
                  whileHover={{ scale: 1.1, y: -2 }}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '2.75rem',
                    height: '2.75rem',
                    border: '1px solid rgba(255, 255, 255, 0.3)',
                    borderRadius: '0.5rem',
                    color: 'white',
                    transition: 'all 0.3s ease',
                    backgroundColor: 'rgba(255, 255, 255, 0.05)'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = '#22d3ee';
                    e.currentTarget.style.backgroundColor = 'rgba(34, 211, 238, 0.1)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.3)';
                    e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.05)';
                  }}
                  aria-label={social.label}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Typing Effect */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            style={{ 
              height: '2.5rem', 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center',
              marginBottom: '1rem'
            }}
          >
            <span style={{ fontSize: '1.25rem', color: '#d1d5db', fontWeight: 300 }}>
              I'm a{' '}
              <span style={{ color: '#10b981', fontWeight: 600 }}>
                {currentText}
                <span style={{ animation: 'blink 1s infinite' }}>|</span>
              </span>
            </span>
          </motion.div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            style={{
              color: '#9ca3af',
              fontSize: '1rem',
              lineHeight: 1.6,
              textAlign: 'center',
              marginBottom: '0',
              maxWidth: '800px',
              margin: '0 auto 0 auto'
            }}
          >
            I'm a Full-Stack Developer, 22 years old. I've been coding since high school. I make websites that are fast and functional.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero; 
