import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, CheckCircle, AlertCircle } from 'lucide-react';
import emailjs from '@emailjs/browser';
import SectionWrapper from './SectionWrapper';
import Button from './Button';
import type { ContactForm } from '../types';

const Contact: React.FC = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState<ContactForm>({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // EmailJS configuration
      const serviceId = 'service_your_service_id'; // You'll need to create this in EmailJS
      const templateId = 'template_your_template_id'; // You'll need to create this in EmailJS
      const publicKey = 'your_public_key'; // You'll get this from EmailJS

      await emailjs.sendForm(
        serviceId,
        templateId,
        formRef.current!,
        publicKey
      );

      setSubmitStatus('success');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('Email send error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: <Mail size={24} />,
      title: 'Email',
      value: 'sabih0364@gmail.com',
      href: 'mailto:sabih0364@gmail.com'
    },
    {
      icon: <Phone size={24} />,
      title: 'Phone',
      value: '+92 XXX XXX XXXX',
      href: 'tel:+92XXXXXXXXXX'
    },
    {
      icon: <MapPin size={24} />,
      title: 'Location',
      value: 'Pakistan',
      href: '#'
    }
  ];

  return (
    <SectionWrapper id="contact" className="bg-gradient-to-br from-gray-900/80 to-gray-800/60 py-20">
      <div className="text-center mb-16">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl sm:text-5xl font-extrabold mb-4 bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent drop-shadow-lg"
        >
          Get In Touch
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="w-28 h-1 bg-gradient-to-r from-cyan-400 to-emerald-400 mx-auto rounded-full"
        />
      </div>

      <div className="grid gap-12 md:grid-cols-2">
        {/* Contact Information */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          <div>
            <h3 className="text-2xl font-semibold text-white mb-4 drop-shadow-sm">
              Let's Connect
            </h3>
            <p className="text-gray-200 leading-relaxed">
              I'm always interested in new opportunities and exciting projects. 
              Whether you have a question, want to collaborate, or just want to say hello, 
              feel free to reach out!
            </p>
          </div>

          <div className="space-y-6">
            {contactInfo.map((info, index) => (
              <motion.a
                key={info.title}
                href={info.href}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="flex items-center gap-4 p-4 rounded-2xl bg-white/10 backdrop-blur-lg shadow-lg border border-white/20 hover:bg-cyan-400/10 hover:border-cyan-400/30 transition-all duration-300 group"
              >
                <div className="w-10 h-10 flex items-center justify-center rounded-full bg-gradient-to-br from-cyan-400 to-emerald-400 text-gray-900 group-hover:from-emerald-400 group-hover:to-cyan-400 transition-colors duration-300">
                  {info.icon}
                </div>
                <div>
                  <h4 className="font-medium text-white">{info.title}</h4>
                  <p className="text-gray-200">{info.value}</p>
                </div>
              </motion.a>
            ))}
          </div>

          {/* Additional Info */}
          <div className="max-w-md rounded-2xl bg-white/10 backdrop-blur-lg shadow-xl border border-white/20 p-6">
            <div className="flex items-center space-x-2 mb-3">
              <div className="w-3 h-3 bg-red-500 rounded-full"></div>
              <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            </div>
            <pre className="text-emerald-400 text-sm text-left whitespace-pre-wrap">
{`// Available for opportunities
const availability = {
  freelance: true,
  fullTime: true,
  partTime: true,
  remote: true
};

// Response time
const responseTime = "within 24 hours";`}
            </pre>
          </div>
        </motion.div>

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="rounded-3xl bg-white/10 backdrop-blur-lg shadow-2xl border border-white/20 p-8"
        >
          <h3 className="text-2xl font-semibold text-white mb-6 drop-shadow-sm">
            Send Message
          </h3>

          <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                Name *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 bg-white/10 border-none rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/80 focus:bg-white/20 transition-all duration-200 shadow-inner backdrop-blur-md"
                placeholder="Your name"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                Email *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 bg-white/10 border-none rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/80 focus:bg-white/20 transition-all duration-200 shadow-inner backdrop-blur-md"
                placeholder="your.email@example.com"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                Message *
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                required
                rows={5}
                className="w-full px-4 py-3 bg-white/10 border-none rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/80 focus:bg-white/20 transition-all duration-200 shadow-inner backdrop-blur-md resize-none"
                placeholder="Tell me about your project or opportunity..."
              />
            </div>

            {/* Status Messages */}
            {submitStatus === 'success' && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex items-center space-x-2 p-3 bg-green-500/20 border border-green-500/30 rounded-lg"
              >
                <CheckCircle size={20} className="text-green-500" />
                <span className="text-green-400 text-sm">Message sent successfully!</span>
              </motion.div>
            )}

            {submitStatus === 'error' && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex items-center space-x-2 p-3 bg-red-500/20 border border-red-500/30 rounded-lg"
              >
                <AlertCircle size={20} className="text-red-500" />
                <span className="text-red-400 text-sm">Failed to send message. Please try again.</span>
              </motion.div>
            )}

            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full flex items-center justify-center space-x-2 rounded-full shadow-lg bg-gradient-to-r from-cyan-400 to-emerald-400 text-white font-bold px-8 py-3 hover:from-emerald-400 hover:to-cyan-400 transition-all duration-200"
            >
              {isSubmitting ? (
                <span>Sending...</span>
              ) : (
                <>
                  <Send size={18} className="mr-2" /> Send Message
                </>
              )}
            </Button>
          </form>
        </motion.div>
      </div>
    </SectionWrapper>
  );
};

export default Contact; 