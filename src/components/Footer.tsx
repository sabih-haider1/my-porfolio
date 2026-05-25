import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { label: 'Home', href: '#home' },
    { label: 'Focus', href: '#about' },
    { label: 'Engineering Work', href: '#projects' },
    { label: 'Building', href: '#building' },
    { label: 'Experience', href: '#experience' },
    { label: 'Stack', href: '#skills' },
    { label: 'Contact', href: '#contact' },
  ];

  const socialLinks = [
    { icon: <Github size={18} />, href: 'https://github.com/sabih-haider1', label: 'GitHub' },
    { icon: <Linkedin size={18} />, href: 'https://www.linkedin.com/in/sabih-h-581113274/', label: 'LinkedIn' },
    { icon: <Mail size={18} />, href: 'mailto:sabih0364@gmail.com', label: 'Email' },
  ];

  return (
    <footer className="border-t border-surface-muted bg-[#0f172a]">
      <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid gap-6 md:grid-cols-[1.1fr_0.9fr_0.85fr]">
          <div className="space-y-2">
            <h3 className="text-h3 font-bold text-gray-100">Sabih Haider</h3>
            <p className="text-sm leading-6 text-muted-400 max-w-md">
              Engineering collaboration for integration-heavy product work, platform extension, and backend-connected delivery.
            </p>
            <div className="text-xs uppercase tracking-[0.16em] text-accent-blue font-semibold">Availability: Freelance, part-time, project based</div>
          </div>

          <div>
            <div className="text-sm font-semibold uppercase tracking-[0.18em] text-accent-blue">Navigation</div>
            <div className="mt-3 flex flex-col gap-1.5 text-sm text-muted-400">
              {quickLinks.map((link) => (
                <a key={link.label} href={link.href} className="transition-colors hover:text-accent-blue">
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          <div>
            <div className="text-sm font-semibold uppercase tracking-[0.18em] text-accent-blue">Endpoints</div>
            <div className="mt-3 flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-surface-muted bg-[rgba(255,255,255,0.03)] text-muted-300 transition-colors hover:text-accent-blue hover:border-accent-blue"
                >
                  {social.icon}
                </a>
              ))}
            </div>
            <p className="mt-3 text-xs text-muted-400 leading-5">Response target: within 24 hours for scoped technical requests.</p>
          </div>
        </div>

        <div className="mt-8 border-t border-surface-muted pt-5 text-sm text-muted-400 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          <p>© {currentYear} Sabih Haider. All rights reserved.</p>
          <p>Portfolio direction: product engineering, architecture clarity, and operational realism.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
