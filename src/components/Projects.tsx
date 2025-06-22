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
    <SectionWrapper id="projects" className="bg-gray-800/50">
      <div className="text-center mb-16">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4"
        >
          Featured <span className="gradient-text">Projects</span>
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-emerald-400 mx-auto rounded-full"
        />
      </div>

      <div className="space-y-12">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            className="group"
          >
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              {/* Project Image/Preview */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="relative overflow-hidden rounded-lg bg-gray-700 border border-gray-600"
              >
                <div className="aspect-video bg-gradient-to-br from-gray-600 to-gray-700 flex items-center justify-center">
                  <div className="text-center space-y-4">
                    <div className="w-16 h-16 mx-auto bg-gradient-to-r from-cyan-400 to-emerald-400 rounded-lg flex items-center justify-center">
                      <span className="text-2xl font-bold text-gray-900">
                        {project.title.charAt(0)}
                      </span>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-100">
                      {project.title}
                    </h3>
                  </div>
                </div>
                
                {/* Overlay with links */}
                <div className="absolute inset-0 bg-gray-900/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
                  {project.github && (
                    <motion.a
                      href={project.github}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="p-3 bg-cyan-400 text-gray-900 rounded-full hover:bg-emerald-400 transition-colors duration-200"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github size={20} />
                    </motion.a>
                  )}
                  {project.live && (
                    <motion.a
                      href={project.live}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="p-3 bg-emerald-400 text-gray-900 rounded-full hover:bg-cyan-400 transition-colors duration-200"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink size={20} />
                    </motion.a>
                  )}
                </div>
              </motion.div>

              {/* Project Details */}
              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-bold text-gray-100 mb-3 group-hover:text-cyan-400 transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* Technologies */}
                <div>
                  <h4 className="text-sm font-semibold text-emerald-400 mb-3 uppercase tracking-wide">
                    Technologies Used
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="skill-tag text-xs"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-wrap gap-4">
                  {project.github && (
                    <Button
                      href={project.github}
                      variant="outline"
                      size="sm"
                      className="flex items-center space-x-2"
                    >
                      <Github size={16} />
                      <span>View Code</span>
                    </Button>
                  )}
                  {project.live && (
                    <Button
                      href={project.live}
                      size="sm"
                      className="flex items-center space-x-2"
                    >
                      <Eye size={16} />
                      <span>Live Demo</span>
                    </Button>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Call to Action */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.5 }}
        className="text-center mt-16"
      >
        <div className="code-block max-w-2xl mx-auto">
          <div className="flex items-center space-x-2 mb-3">
            <div className="w-3 h-3 bg-red-500 rounded-full"></div>
            <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
          </div>
          <pre className="text-emerald-400 text-sm">
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
          <Button href="#contact" size="lg">
            Let's Work Together
          </Button>
        </div>
      </motion.div>
    </SectionWrapper>
  );
};

export default Projects; 