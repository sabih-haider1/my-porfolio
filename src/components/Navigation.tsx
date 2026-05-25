import React, { useEffect, useState, useRef } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { Menu, X } from 'lucide-react';

type NavItem = { label: string; href: string };

const navItems: NavItem[] = [
  { label: 'Home', href: '#home' },
  { label: 'Approach', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Exploration', href: '#building' },
  { label: 'Experience', href: '#experience' },
  { label: 'Stack', href: '#skills' },
  { label: 'Contact', href: '#contact' },
];

const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [active, setActive] = useState<string>('#home');
  const prefersReduced = useReducedMotion();
  const navRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const sections = navItems.map((i) => document.querySelector(i.href)).filter(Boolean) as Element[];
    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive('#' + entry.target.id);
          }
        });
      },
      { root: null, rootMargin: '0px 0px -40% 0px', threshold: 0.1 }
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  const scrollTo = (href: string) => {
    const id = href.replace('#', '');
    const el = document.getElementById(id);
    if (!el) return;
    el.scrollIntoView({ behavior: prefersReduced ? 'auto' : 'smooth', block: 'start' });
    setIsOpen(false);
  };

  return (
    <motion.nav
      ref={navRef}
      initial={{ y: prefersReduced ? 0 : -16, opacity: prefersReduced ? 1 : 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4 }}
      className="fixed top-0 left-0 right-0 z-50 bg-transparent backdrop-blur border-b border-surface-muted"
      role="navigation"
      aria-label="Primary Navigation"
    >
      <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-16 flex items-center justify-between">
          <button
            onClick={() => scrollTo('#home')}
            className="text-2xl sm:text-display-md font-bold gradient-text bg-clip-text focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-blue"
            aria-label="Go to home"
          >
            Sabih Haider
          </button>

          {/* Desktop menu */}
          <div className="hidden lg:flex flex-1 justify-center gap-4 xl:gap-6 px-6">
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => scrollTo(item.href)}
                className={`px-3 py-1 rounded-md text-sm font-medium focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-blue ${active === item.href ? 'text-accent-blue bg-surface-muted' : 'text-gray-300 hover:text-accent-blue'}`}
                aria-current={active === item.href ? 'page' : undefined}
              >
                {item.label}
              </button>
            ))}
          </div>

          <div className="hidden lg:block w-8" />

          {/* Mobile toggle */}
          <div className="lg:hidden">
            <button
              aria-label="Toggle menu"
              aria-expanded={isOpen}
              onClick={() => setIsOpen((v) => !v)}
              className="p-2 rounded-md text-gray-300 hover:text-accent-blue focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-blue"
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu panel */}
      {isOpen && (
        <div className="lg:hidden border-t border-surface-muted bg-[rgba(17,24,39,0.95)] backdrop-blur">
          <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8 py-3 flex flex-col gap-2">
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => scrollTo(item.href)}
                className={`w-full text-left px-3 py-2 rounded-md text-sm font-medium focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-blue ${active === item.href ? 'text-accent-blue bg-surface-muted' : 'text-gray-300 hover:text-accent-blue'}`}
                aria-current={active === item.href ? 'page' : undefined}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </motion.nav>
  );
};

export default Navigation;
