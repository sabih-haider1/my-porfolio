import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Eye } from 'lucide-react';
import SectionWrapper from './SectionWrapper';
import Button from './Button';
import type { Project } from '../types';

const Projects: React.FC = () => {
  const projects: Project[] = [
    {
      id: '1',
      title: 'PVC Wall Panels',
      description: 'Custom WooCommerce e-commerce platform for PVC wall panels with advanced product customization, user management, and payment integration. Features include dynamic pricing, bulk ordering, and admin dashboard.',
      technologies: ['WordPress', 'WooCommerce', 'PHP', 'MySQL', 'JavaScript', 'CSS'],
      featured: true,
      github: '#',
      live: '#'
    },
    {
      id: '2',
      title: 'Pure Eats',
      description: 'Diet-based food delivery application with personalized meal recommendations, nutritional tracking, and real-time delivery updates. Built with modern React patterns and responsive design.',
      technologies: ['React', 'JavaScript', 'TailwindCSS', 'Node.js', 'MongoDB'],
      featured: true,
      github: '#',
      live: '#'
    },
    {
      id: '3',
      title: 'Spam Message Classifier',
      description: 'Machine learning project using SMS dataset to classify messages as spam or legitimate. Implements various ML algorithms with data preprocessing and model evaluation.',
      technologies: ['Python', 'Machine Learning', 'Pandas', 'Scikit-learn', 'NLTK'],
      featured: true,
      github: '#',
      live: '#'
    }
  ];

  return (
    <SectionWrapper id="projects" className="bg-gradient-to-br from-gray-900/80 to-gray-800/60 py-20">
      <div className="text-center mb-16">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl sm:text-5xl font-extrabold mb-4 bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent drop-shadow-lg"
        >
          Featured Projects
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="w-28 h-1 bg-gradient-to-r from-cyan-400 to-emerald-400 mx-auto rounded-full"
        />
      </div>

      <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            className="relative group rounded-3xl bg-white/10 backdrop-blur-lg shadow-2xl border border-white/20 p-8 flex flex-col justify-between min-h-[420px] hover:scale-[1.025] transition-transform duration-300"
          >
            {/* Project Title & Icon */}
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-gradient-to-br from-cyan-400 to-emerald-400 text-gray-900 font-bold text-2xl shadow-lg">
                {project.title.charAt(0)}
              </div>
              <h3 className="text-2xl font-bold text-white drop-shadow-sm">
                {project.title}
              </h3>
            </div>
            {/* Description */}
            <p className="text-gray-200 mb-6 flex-1">
              {project.description}
            </p>
            {/* Technologies */}
            <div className="flex flex-wrap gap-2 mb-6">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 rounded-full bg-gradient-to-r from-cyan-500 to-emerald-500 text-white text-xs font-semibold shadow-md backdrop-blur-md border border-white/10 hover:from-emerald-500 hover:to-cyan-500 transition-colors duration-200"
                >
                  {tech}
                </span>
              ))}
            </div>
            {/* Action Buttons */}
            <div className="flex gap-4 mt-auto">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-4 py-2 rounded-full bg-white/20 hover:bg-cyan-400/80 text-cyan-300 hover:text-white shadow transition-all duration-200 border border-cyan-400/30"
                >
                  <Github size={18} className="mr-2" /> Code
                </a>
              )}
              {project.live && (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-4 py-2 rounded-full bg-white/20 hover:bg-emerald-400/80 text-emerald-300 hover:text-white shadow transition-all duration-200 border border-emerald-400/30"
                >
                  <Eye size={18} className="mr-2" /> Live
                </a>
              )}
            </div>
            {/* Glassy Overlay on Hover */}
            <div className="absolute inset-0 rounded-3xl pointer-events-none group-hover:bg-white/10 group-hover:backdrop-blur-sm transition-all duration-300" />
          </motion.div>
        ))}
      </div>

      {/* Call to Action */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.5 }}
        className="text-center mt-20"
      >
        <div className="max-w-2xl mx-auto rounded-2xl bg-white/10 backdrop-blur-lg shadow-xl border border-white/20 p-8">
          <div className="flex items-center space-x-2 mb-3">
            <div className="w-3 h-3 bg-red-500 rounded-full"></div>
            <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
          </div>
          <pre className="text-emerald-400 text-sm text-left whitespace-pre-wrap">
{`// More projects coming soon...
const upcomingProjects = [
  "AI-Powered Chat Application",
  "Real-time Collaboration Tool", 
  "Advanced E-commerce Platform",
  "Mobile-First Web Apps"
];

// Always open to new opportunities
const openToWork = true;`}
          </pre>
        </div>
        <div className="mt-8">
          <Button href="#contact" size="lg" className="rounded-full shadow-lg bg-gradient-to-r from-cyan-400 to-emerald-400 text-white font-bold px-8 py-3 hover:from-emerald-400 hover:to-cyan-400 transition-all duration-200">
            Let's Work Together
          </Button>
        </div>
      </motion.div>
    </SectionWrapper>
  );
};

export default Projects; 