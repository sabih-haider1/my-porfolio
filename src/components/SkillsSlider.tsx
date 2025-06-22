import React from 'react';
import { motion } from 'framer-motion';
import {
  SiJavascript, SiReact, SiTailwindcss, SiPhp, SiWordpress,
  SiHtml5, SiCss3, SiGit, SiGithub, SiMysql, SiMongodb, SiNodedotjs, SiTypescript, SiFigma,
  SiPython, SiDocker, SiAmazon, SiFirebase, SiPostgresql, SiRedis, SiJest, SiWebpack
} from 'react-icons/si';
import { FaShoppingCart, FaCode, FaDatabase, FaServer } from 'react-icons/fa';

const SkillsSlider: React.FC = () => {
  // Calculate exact width to match Hero section (1200px)
  // Each item: minWidth(120px) + padding(2rem = 32px) + gap(2rem = 32px) = 184px
  const itemWidth = 184;
  const heroWidth = 1200;

  // First row skills (moving left)
  const skillsRow1 = [
    { name: 'JavaScript', icon: <SiJavascript size={32} />, color: '#f7df1e' },
    { name: 'React', icon: <SiReact size={32} />, color: '#61dafb' },
    { name: 'TypeScript', icon: <SiTypescript size={32} />, color: '#3178c6' },
    { name: 'HTML5', icon: <SiHtml5 size={32} />, color: '#e34f26' },
    { name: 'CSS3', icon: <SiCss3 size={32} />, color: '#1572b6' },
    { name: 'TailwindCSS', icon: <SiTailwindcss size={32} />, color: '#06b6d4' },
    { name: 'PHP', icon: <SiPhp size={32} />, color: '#777bb4' },
    { name: 'Node.js', icon: <SiNodedotjs size={32} />, color: '#339933' },
    { name: 'Python', icon: <SiPython size={32} />, color: '#3776ab' },
    { name: 'Docker', icon: <SiDocker size={32} />, color: '#2496ed' },
    { name: 'AWS', icon: <SiAmazon size={32} />, color: '#ff9900' },
    { name: 'Firebase', icon: <SiFirebase size={32} />, color: '#ffca28' },
  ];

  // Second row skills (moving right)
  const skillsRow2 = [
    { name: 'WordPress', icon: <SiWordpress size={32} />, color: '#21759b' },
    { name: 'MySQL', icon: <SiMysql size={32} />, color: '#4479a1' },
    { name: 'MongoDB', icon: <SiMongodb size={32} />, color: '#47a248' },
    { name: 'PostgreSQL', icon: <SiPostgresql size={32} />, color: '#336791' },
    { name: 'Redis', icon: <SiRedis size={32} />, color: '#dc382d' },
    { name: 'Git', icon: <SiGit size={32} />, color: '#f05032' },
    { name: 'GitHub', icon: <SiGithub size={32} />, color: '#181717' },
    { name: 'VS Code', icon: <FaCode size={32} />, color: '#007acc' },
    { name: 'Figma', icon: <SiFigma size={32} />, color: '#f24e1e' },
    { name: 'Jest', icon: <SiJest size={32} />, color: '#c21325' },
    { name: 'Webpack', icon: <SiWebpack size={32} />, color: '#8dd6f9' },
    { name: 'OpenCart', icon: <FaShoppingCart size={32} />, color: '#34a853' },
  ];

  return (
    <section style={{
      padding: '1rem 0',
      overflow: 'hidden',
      position: 'relative',
      marginTop: '-200px'
    }}>
      <div className="container-custom" style={{ position: 'relative', zIndex: 10 }}>
        {/* Main Skills Slider Card - matching Hero card structure */}
        <div style={{
          borderRadius: '1rem',
          padding: '1rem 3rem',
          maxWidth: '820px',
          margin: '0 auto',
          position: 'relative',
          overflow: 'hidden'
        }}>
          {/* Left fade overlay */}
          <div style={{
            position: 'absolute',
            left: 0,
            top: 0,
            bottom: 0,
            width: '200px',
            background: 'linear-gradient( to right, rgba(17, 24, 39, 1) 0%, rgba(17, 24, 39, 0.9) 25%, rgba(17, 24, 39, 0.6) 50%, rgba(17, 24, 39, 0.3) 75%, rgba(17, 24, 39, 0) 100%)',
          zIndex: 20,
          pointerEvents: 'none'
          }} />

          {/* Right fade overlay */}
          <div style={{
            position: 'absolute',
            right: 0,
            top: 0,
            bottom: 0,
            width: '200px',
            background: 'linear-gradient( to left, rgba(17, 24, 39, 1) 0%, rgba(17, 24, 39, 0.9) 25%, rgba(17, 24, 39, 0.6) 50%, rgba(17, 24, 39, 0.3) 75%, rgba(17, 24, 39, 0) 100%)',
            zIndex: 20,
            pointerEvents: 'none'
          }} />

          {/* First Row - Moving Left */}
          <div style={{
            marginBottom: '2.5rem',
            overflow: 'visible',
            position: 'relative',
            padding: '0.5rem 0'
          }}>
            <motion.div
              animate={{
                x: [0, -heroWidth]
              }}
              transition={{
                duration: 30,
                repeat: Infinity,
                ease: 'linear'
              }}
              style={{
                display: 'flex',
                gap: '2rem',
                width: 'max-content'
              }}
            >
              {/* Duplicate items for seamless loop */}
              {[...skillsRow1, ...skillsRow1].map((skill, index) => (
                <motion.div
                  key={`${skill.name}-${index}`}
                  whileHover={{ scale: 1.1, y: -5 }}
                  style={{
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                    gap: '0.5rem',
                    padding: '0.75rem 1rem',
                    backgroundColor: 'rgba(31, 41, 55, 0.8)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    borderRadius: '0.5rem',
                    minWidth: '120px',
                    transition: 'all 0.3s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = 'rgba(34, 211, 238, 0.5)';
                    e.currentTarget.style.backgroundColor = 'rgba(31, 41, 55, 0.9)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)';
                    e.currentTarget.style.backgroundColor = 'rgba(31, 41, 55, 0.8)';
                  }}
                >
                  <div style={{ color: 'white' }}>
                    {React.cloneElement(skill.icon, { size: 20 })}
                  </div>
                  <span style={{
                    fontSize: '0.75rem',
                    fontWeight: '500',
                    color: '#f3f4f6',
                    whiteSpace: 'nowrap'
                  }}>
                    {skill.name}
                  </span>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Second Row - Moving Right */}
          <div style={{
            overflow: 'visible',
            position: 'relative',
            padding: '0.5rem 0'
          }}>
            <motion.div
              animate={{
                x: [-heroWidth, 0]
              }}
              transition={{
                duration: 25,
                repeat: Infinity,
                ease: 'linear'
              }}
              style={{
                display: 'flex',
                gap: '2rem',
                width: 'max-content'
              }}
            >
              {/* Duplicate items for seamless loop */}
              {[...skillsRow2, ...skillsRow2].map((skill, index) => (
                <motion.div
                  key={`${skill.name}-${index}`}
                  whileHover={{ scale: 1.1, y: -5 }}
                  style={{
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                    gap: '0.5rem',
                    padding: '0.75rem 1rem',
                    backgroundColor: 'rgba(31, 41, 55, 0.8)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    borderRadius: '0.5rem',
                    minWidth: '120px',
                    transition: 'all 0.3s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = 'rgba(16, 185, 129, 0.5)';
                    e.currentTarget.style.backgroundColor = 'rgba(31, 41, 55, 0.9)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)';
                    e.currentTarget.style.backgroundColor = 'rgba(31, 41, 55, 0.8)';
                  }}
                >
                  <div style={{ color: 'white' }}>
                    {React.cloneElement(skill.icon, { size: 20 })}
                  </div>
                  <span style={{
                    fontSize: '0.75rem',
                    fontWeight: '500',
                    color: '#f3f4f6',
                    whiteSpace: 'nowrap'
                  }}>
                    {skill.name}
                  </span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSlider;