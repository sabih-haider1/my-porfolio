import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Twitter, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  const socialLinks = [
    {
      icon: <Github size={20} />,
      href: 'https://github.com/yourusername',
      label: 'GitHub'
    },
    {
      icon: <Linkedin size={20} />,
      href: 'https://linkedin.com/in/yourusername',
      label: 'LinkedIn'
    },
    {
      icon: <Twitter size={20} />,
      href: 'https://twitter.com/yourusername',
      label: 'Twitter'
    },
    {
      icon: <Mail size={20} />,
      href: 'mailto:sabih0364@gmail.com',
      label: 'Email'
    }
  ];

  return (
    <footer className="bg-gray-900 border-t border-gray-700">
      <div className="container-custom py-12">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          {/* Logo and Description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            <h3 className="text-xl font-bold gradient-text">
              Sabih Haider
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Software Engineer & Front-End Developer passionate about creating 
              innovative solutions and building the future of web technology.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-4"
          >
            <h4 className="text-lg font-semibold text-gray-100 mb-4">
              Quick Links
            </h4>
            <div className="space-y-2">
              {['Home', 'About', 'Skills', 'Projects', 'Contact'].map((link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  className="block text-gray-400 hover:text-cyan-400 transition-colors duration-200 text-sm"
                >
                  {link}
                </a>
              ))}
            </div>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-4"
          >
            <h4 className="text-lg font-semibold text-gray-100 mb-4">
              Connect
            </h4>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  whileHover={{ scale: 1.1, y: -2 }}
                  className="p-3 bg-gray-700 border border-gray-600 rounded-lg text-gray-400 hover:text-cyan-400 hover:border-cyan-400/50 transition-all duration-300"
                  aria-label={social.label}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="border-t border-gray-700 mt-8 pt-8 text-center"
        >
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
            <p className="text-gray-400 text-sm">
              © {currentYear} Sabih Haider. All rights reserved.
            </p>
            <div className="flex items-center space-x-2 text-sm text-gray-500">
              <span>Built with</span>
              <span className="text-red-500">❤</span>
              <span>using React & TypeScript</span>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer; 