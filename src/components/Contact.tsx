import React, { useState, useRef } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle, AlertCircle } from 'lucide-react';
import SectionWrapper from './SectionWrapper';
import Card from './primitives/Card';
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
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
        }),
      });

      if (!response.ok) {
        const errorPayload = await response.json().catch(() => null);
        throw new Error(errorPayload?.error || 'Unable to send message');
      }

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
    { icon: <Mail size={20} />, title: 'Email', value: 'sabih0364@gmail.com', href: 'mailto:sabih0364@gmail.com' },
    { icon: <Phone size={20} />, title: 'Phone', value: '+92 341 008 4746', href: 'tel:+923410084746' },
    { icon: <MapPin size={20} />, title: 'Location', value: 'Pakistan', href: '#' }
  ];

  const collaborationDomains = ['Product interfaces', 'API integrations', 'CMS or platform extension', 'Backend workflow implementation'];

  return (
    <SectionWrapper id="contact" className="bg-gradient-to-br from-[rgba(17,24,39,0.8)] to-[rgba(31,41,55,0.6)]">
      <div className="mb-8">
        <h2 className="text-display-md font-extrabold bg-clip-text gradient-text text-transparent">Contact</h2>
        <p className="mt-3 text-sm text-muted-400 max-w-3xl">
          Open to scoped engineering work, integrations, and delivery support.
        </p>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-[0.95fr_1.05fr] gap-6">
        <div className="flex flex-col gap-4">
          <Card className="space-y-3">
            <div className="text-xs uppercase tracking-[0.16em] text-accent-blue font-semibold">Work areas</div>
            <div className="flex flex-wrap gap-2">
              {collaborationDomains.map((domain) => (
                <span key={domain} className="inline-flex rounded-pill border border-surface-muted bg-[rgba(255,255,255,0.02)] px-3 py-1 text-sm text-muted-200">
                  {domain}
                </span>
              ))}
            </div>
          </Card>

          <div className="flex flex-col gap-4">
            {contactInfo.map((info) => (
              <Card key={info.title} className="flex items-center gap-4">
                <div className="w-10 h-10 flex items-center justify-center rounded-full bg-gradient-to-br from-accent-blue to-accent-green text-gray-900">{info.icon}</div>
                <div>
                  <div className="font-medium text-gray-100">{info.title}</div>
                  <a href={info.href} className="text-muted-400 text-sm">{info.value}</a>
                </div>
              </Card>
            ))}
          </div>

          <Card>
            <div className="text-xs uppercase tracking-[0.16em] text-accent-blue font-semibold">Availability</div>
            <pre className="text-accent-green text-sm m-0 mt-3">{`{
  freelance: true,
  partTime: true,
  projectBased: true,
  responseWindow: "within 24 hours"
}`}</pre>
          </Card>
        </div>

        <Card>
          <h3 className="text-h3 font-semibold mb-3">Start a Conversation</h3>
          <p className="text-sm text-muted-400 mb-4">Share scope, constraints, and timeline.</p>
          <form ref={formRef} onSubmit={handleSubmit} className="flex flex-col gap-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-muted-400 mb-2">Name *</label>
              <input id="name" name="name" value={formData.name} onChange={handleInputChange} required placeholder="Your name" className="w-full px-4 py-3 rounded-md bg-[rgba(255,255,255,0.04)] text-white outline-none" />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-muted-400 mb-2">Email *</label>
              <input id="email" name="email" type="email" value={formData.email} onChange={handleInputChange} required placeholder="you@example.com" className="w-full px-4 py-3 rounded-md bg-[rgba(255,255,255,0.04)] text-white outline-none" />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-muted-400 mb-2">Message *</label>
              <textarea id="message" name="message" value={formData.message} onChange={handleInputChange} required rows={5} placeholder="Describe your project or challenge..." className="w-full px-4 py-3 rounded-md bg-[rgba(255,255,255,0.04)] text-white outline-none" />
            </div>

            {submitStatus === 'success' && <div className="p-3 rounded-md bg-green-900/30 border border-green-700 text-green-300 flex items-center gap-2"><CheckCircle /> Message sent successfully.</div>}
            {submitStatus === 'error' && <div className="p-3 rounded-md bg-red-900/30 border border-red-700 text-red-300 flex items-center gap-2"><AlertCircle /> Message failed. Please retry.</div>}

            <Button type="submit" disabled={isSubmitting} className="w-full">
              {isSubmitting ? 'Sending...' : <><Send className="mr-2" /> Send Message</>}
            </Button>
          </form>
        </Card>
      </div>
    </SectionWrapper>
  );
};

export default Contact;
