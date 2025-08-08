import React from 'react';
import { motion } from 'framer-motion';

const AboutText: React.FC = () => (
  <motion.section
    initial={{ opacity: 0, x: -50 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6 }}
    className="space-y-6"
  >
    <h3 className="text-2xl font-semibold bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent drop-shadow-lg">
      Software Engineer & Front-End Developer
    </h3>
    <div className="space-y-4 text-gray-200 text-lg leading-relaxed">
      <p>
        I'm currently studying Software Engineering at the University of Central Punjab (UCP). I've been learning and building things on the web for a few years now, focusing mostly on front-end development.
      </p>
      <p>
        I enjoy working with React, JavaScript, and modern CSS tools. Lately, I've also started exploring full-stack development to build complete web apps.
      </p>
      <p>
        Outside of coding, I like trying out new tools, learning from open-source projects, and helping others in the developer community when I can.
      </p>
    </div>
  </motion.section>
);

export default AboutText; 