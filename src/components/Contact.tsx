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
      const serviceId = 'service_m94bvqq';
      const templateId = 'template_hg6b6ro';
      const publicKey = 'XvWlxbPipY_NIbdgR';

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
      value: '+92 341 008 4746',
      href: 'tel:+923410084746'
    },
    {
      icon: <MapPin size={24} />,
      title: 'Location',
      value: 'Pakistan',
      href: '#'
    }
  ];

  return (
    <SectionWrapper
      id="contact"
      style={{
        background: 'linear-gradient(to bottom right, rgba(17,24,39,0.8), rgba(31,41,55,0.6))',
        padding: '80px 0'
      }}
    >
      {/* Title */}
      <div style={{ textAlign: 'center', marginBottom: '64px' }}>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{
            fontSize: '2.25rem',
            fontWeight: 800,
            marginBottom: '16px',
            background: 'linear-gradient(to right, #22d3ee, #34d399)',
            WebkitBackgroundClip: 'text',
            color: 'transparent',
            textShadow: '0 2px 4px rgba(0,0,0,0.4)'
          }}
        >
          Get In Touch
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          style={{
            width: '112px',
            height: '4px',
            background: 'linear-gradient(to right, #22d3ee, #34d399)',
            margin: '0 auto',
            borderRadius: '9999px'
          }}
        />
      </div>

      <div style={{ display: 'grid', gap: '48px', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))' }}>
        {/* Contact Information */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}
        >
          <div>
            <h3 style={{ fontSize: '1.5rem', fontWeight: 600, color: 'white', marginBottom: '16px', textShadow: '0 1px 2px rgba(0,0,0,0.3)' }}>
              Let's Connect
            </h3>
            <p style={{ color: '#e5e7eb', lineHeight: '1.6' }}>
              I'm always interested in new opportunities and exciting projects.
              Whether you have a question, want to collaborate, or just want to say hello,
              feel free to reach out!
            </p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            {contactInfo.map((info, index) => (
              <motion.a
                key={info.title}
                href={info.href}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '16px',
                  padding: '16px',
                  borderRadius: '16px',
                  background: 'rgba(255,255,255,0.1)',
                  backdropFilter: 'blur(16px)',
                  boxShadow: '0 4px 12px rgba(0,0,0,0.4)',
                  border: '1px solid rgba(255,255,255,0.2)',
                  transition: 'all 0.3s ease',
                  textDecoration: 'none'
                }}
              >
                <div
                  style={{
                    width: '40px',
                    height: '40px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderRadius: '50%',
                    background: 'linear-gradient(to bottom right, #22d3ee, #34d399)',
                    color: '#111827',
                    transition: 'background 0.3s ease'
                  }}
                >
                  {info.icon}
                </div>
                <div>
                  <h4 style={{ fontWeight: 500, color: 'white', margin: 0 }}>{info.title}</h4>
                  <p style={{ color: '#e5e7eb', margin: 0 }}>{info.value}</p>
                </div>
              </motion.a>
            ))}
          </div>

          {/* Additional Info */}
          <div
            style={{
              maxWidth: '28rem',
              borderRadius: '16px',
              background: 'rgba(255,255,255,0.1)',
              backdropFilter: 'blur(16px)',
              boxShadow: '0 8px 24px rgba(0,0,0,0.4)',
              border: '1px solid rgba(255,255,255,0.2)',
              padding: '24px'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '12px' }}>
              <div style={{ width: '12px', height: '12px', background: '#ef4444', borderRadius: '50%' }} />
              <div style={{ width: '12px', height: '12px', background: '#facc15', borderRadius: '50%' }} />
              <div style={{ width: '12px', height: '12px', background: '#22c55e', borderRadius: '50%' }} />
            </div>
            <pre style={{ color: '#34d399', fontSize: '0.875rem', whiteSpace: 'pre-wrap', margin: 0 }}>
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
          style={{
            borderRadius: '24px',
            background: 'rgba(255,255,255,0.1)',
            backdropFilter: 'blur(16px)',
            boxShadow: '0 12px 32px rgba(0,0,0,0.5)',
            border: '1px solid rgba(255,255,255,0.2)',
            padding: '32px'
          }}
        >
          <h3 style={{ fontSize: '1.5rem', fontWeight: 600, color: 'white', marginBottom: '24px', textShadow: '0 1px 2px rgba(0,0,0,0.3)' }}>
            Send Message
          </h3>

          <form ref={formRef} onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            {/* Name */}
            <div>
              <label htmlFor="name" style={{ display: 'block', fontSize: '0.875rem', fontWeight: 500, color: '#d1d5db', marginBottom: '8px' }}>
                Name *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
                placeholder="Your name"
                style={{
                  width: '100%',
                  padding: '12px 16px',
                  background: 'rgba(255,255,255,0.1)',
                  border: 'none',
                  borderRadius: '12px',
                  color: 'white',
                  fontSize: '1rem',
                  outline: 'none'
                }}
              />
            </div>

            {/* Email */}
            <div>
              <label htmlFor="email" style={{ display: 'block', fontSize: '0.875rem', fontWeight: 500, color: '#d1d5db', marginBottom: '8px' }}>
                Email *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                placeholder="your.email@example.com"
                style={{
                  width: '100%',
                  padding: '12px 16px',
                  background: 'rgba(255,255,255,0.1)',
                  border: 'none',
                  borderRadius: '12px',
                  color: 'white',
                  fontSize: '1rem',
                  outline: 'none'
                }}
              />
            </div>

            {/* Message */}
            <div>
              <label htmlFor="message" style={{ display: 'block', fontSize: '0.875rem', fontWeight: 500, color: '#d1d5db', marginBottom: '8px' }}>
                Message *
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                required
                rows={5}
                placeholder="Tell me about your project or opportunity..."
                style={{
                  width: '100%',
                  padding: '12px 16px',
                  background: 'rgba(255,255,255,0.1)',
                  border: 'none',
                  borderRadius: '12px',
                  color: 'white',
                  fontSize: '1rem',
                  outline: 'none',
                  resize: 'none'
                }}
              />
            </div>

            {/* Status Messages */}
            {submitStatus === 'success' && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  padding: '12px',
                  background: 'rgba(34,197,94,0.2)',
                  border: '1px solid rgba(34,197,94,0.3)',
                  borderRadius: '8px'
                }}
              >
                <CheckCircle size={20} color="#22c55e" />
                <span style={{ color: '#4ade80', fontSize: '0.875rem' }}>Message sent successfully!</span>
              </motion.div>
            )}

            {submitStatus === 'error' && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  padding: '12px',
                  background: 'rgba(239,68,68,0.2)',
                  border: '1px solid rgba(239,68,68,0.3)',
                  borderRadius: '8px'
                }}
              >
                <AlertCircle size={20} color="#ef4444" />
                <span style={{ color: '#f87171', fontSize: '0.875rem' }}>Failed to send message. Please try again.</span>
              </motion.div>
            )}

            {/* Submit Button */}
            <Button
              type="submit"
              disabled={isSubmitting}
              style={{
                width: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: '9999px',
                background: 'linear-gradient(to right, #22d3ee, #34d399)',
                color: 'white',
                fontWeight: 700,
                padding: '12px 32px',
                cursor: 'pointer',
                boxShadow: '0 4px 12px rgba(0,0,0,0.4)',
                fontSize: '1rem',
                transition: 'background 0.3s ease'
              }}
            >
              {isSubmitting ? (
                <span>Sending...</span>
              ) : (
                <>
                  <Send size={18} style={{ marginRight: '8px' }} /> Send Message
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
