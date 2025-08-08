import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Code, Lightbulb, Users } from 'lucide-react';
import SectionWrapper from './SectionWrapper';

const About: React.FC = () => {
  const highlights = [
    {
      icon: <GraduationCap size={24} />,
      title: 'Education',
      description: 'Software Engineering student at UCP, passionate about technology and innovation.'
    },
    {
      icon: <Code size={24} />,
      title: 'Development',
      description: 'Specialized in front-end and full-stack development with modern technologies.'
    },
    {
      icon: <Lightbulb size={24} />,
      title: 'Problem Solving',
      description: 'Love tackling complex challenges and creating elegant, scalable solutions.'
    },
    {
      icon: <Users size={24} />,
      title: 'Collaboration',
      description: 'Thrive in team environments and enjoy sharing knowledge with fellow developers.'
    }
  ];

  return (
    <SectionWrapper id="about" className="bg-gray-800/50">
      <div className="text-center mb-16">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4"
        >
          About <span className="gradient-text">Me</span>
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-emerald-400 mx-auto rounded-full"
        />
      </div>

      <div className="grid lg:grid-cols-2 gap-12 items-center">
        {/* Left Column - Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <h3 className="text-2xl font-semibold text-cyan-400">
            Software Engineer & Front-End Developer
          </h3>
          
          <div className="space-y-4 text-gray-300 leading-relaxed">
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

          {/* Code Block */}
          <div className="code-block mt-8">
            <div className="flex items-center space-x-2 mb-3">
              <div className="w-3 h-3 bg-red-500 rounded-full"></div>
              <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            </div>
            <pre className="text-emerald-400">
{`const sabih = {
  name: "Sabih Haider",
  role: "Software Engineer",
  education: "UCP",
  passion: "Web Development",
  skills: ["React", "JavaScript", "PHP", "WordPress"],
  location: "Pakistan"
};`}
            </pre>
          </div>
        </motion.div>

        {/* Right Column - Highlights */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid sm:grid-cols-2 gap-6"
        >
          {highlights.map((highlight, index) => (
            <motion.div
              key={highlight.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="card text-center group"
            >
              <div className="text-cyan-400 mb-4 group-hover:text-emerald-400 transition-colors duration-300">
                {highlight.icon}
              </div>
              <h4 className="text-lg font-semibold mb-2 text-gray-100">
                {highlight.title}
              </h4>
              <p className="text-gray-400 text-sm leading-relaxed">
                {highlight.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </SectionWrapper>
  );
};

export default About; 