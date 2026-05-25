import React from 'react';
import { ExternalLink, Github, Linkedin } from 'lucide-react';
import Heading from './primitives/Heading';
import resumePdf from '../assets/Sabih-Haider-Software Engineer _ Full-Stack-Web-Developer.pdf';

const Hero: React.FC = () => {
  const focusMatrix = [
    { label: 'UI Delivery', value: 'React product pages, admin screens, and dashboard flows.' },
    { label: 'Platform Work', value: 'WordPress, OpenCart, and SuiteCRM customization.' },
    { label: 'Integrations', value: 'REST API wiring between frontend, backend, and third-party tools.' },
    { label: 'Backend', value: 'PHP, Python, MySQL, and practical data-flow logic.' },
  ];

  const authoritySignals = [
    { label: 'Delivery window', value: '2023 - present' },
    { label: 'Reported performance gain', value: '25% across custom client builds' },
    { label: 'ML case-study result', value: '96% reported test accuracy' },
  ];

  return (
    <section id="home" className="py-rhythm-6">
      <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl border border-surface-muted bg-[linear-gradient(130deg,rgba(15,23,42,0.86),rgba(17,24,39,0.9))] p-5 sm:p-7 lg:p-8 shadow-elev-2">
          <div className="grid gap-8 xl:grid-cols-[1.2fr_0.8fr] items-start">
            <div className="space-y-6">
              <div className="space-y-4">
                <div className="inline-flex items-center rounded-pill border border-[rgba(34,211,238,0.35)] bg-[rgba(34,211,238,0.08)] px-3 py-1 text-[11px] uppercase tracking-[0.2em] text-accent-blue font-semibold">
                  Full-Stack Engineer
                </div>
                <Heading level={1} className="mb-0 max-w-4xl">
                  I build web products that work in real constraints.
                </Heading>
                <p className="text-body-lg text-muted-300 max-w-3xl leading-7">
                  Frontend delivery, backend integration, and platform customization with clear tradeoffs and reliable execution.
                </p>
              </div>

              <div className="grid gap-3 md:grid-cols-2">
                {focusMatrix.map((item) => (
                  <div key={item.label} className="rounded-lg border border-surface-muted bg-[rgba(255,255,255,0.025)] p-4">
                    <div className="text-[11px] uppercase tracking-[0.16em] text-accent-blue font-semibold">{item.label}</div>
                    <div className="mt-2 text-sm text-muted-300 leading-6">{item.value}</div>
                  </div>
                ))}
              </div>

              <div className="grid gap-3 md:grid-cols-3">
                {authoritySignals.map((signal) => (
                  <div key={signal.label} className="rounded-md border border-surface-muted bg-[rgba(255,255,255,0.02)] px-4 py-3">
                    <div className="text-[11px] uppercase tracking-[0.16em] text-muted-400">{signal.label}</div>
                    <div className="mt-1 text-sm font-semibold text-muted-200 leading-6">{signal.value}</div>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-3 pt-1">
                <a
                  href="#projects"
                  className="inline-flex items-center px-5 py-3 rounded-md bg-accent-blue text-gray-900 font-semibold"
                >
                  View Case Studies
                </a>
                <a
                  href="#contact"
                  className="inline-flex items-center px-5 py-3 rounded-md border border-surface-muted text-muted-200"
                >
                  Start a Conversation
                </a>
                <a
                  href="#building"
                  className="inline-flex items-center px-5 py-3 rounded-md border border-surface-muted text-muted-200"
                >
                  Current Exploration
                </a>
              </div>
            </div>

            <div className="rounded-xl border border-surface-muted bg-[rgba(255,255,255,0.03)] p-5 space-y-5">
              <div>
                <div className="text-xs uppercase tracking-[0.18em] text-accent-blue font-semibold">Current focus</div>
                <ul className="mt-3 text-sm text-muted-300 space-y-2 leading-6 list-disc pl-4">
                  <li>Shipping product features that stay stable after launch.</li>
                  <li>Making existing systems faster without risky rewrites.</li>
                  <li>Growing toward backend-heavy SaaS and operations tooling.</li>
                </ul>
              </div>

              <div className="pt-4 border-t border-surface-muted">
                <div className="text-xs uppercase tracking-[0.18em] text-accent-blue font-semibold">Links</div>
                <div className="mt-3 flex flex-wrap gap-2">
                  <a
                    href="https://github.com/sabih-haider1"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-pill border border-surface-muted px-3 py-2 text-sm text-muted-200 hover:text-accent-blue"
                  >
                    <Github size={15} /> GitHub
                  </a>
                  <a
                    href="https://www.linkedin.com/in/sabih-h-581113274/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-pill border border-surface-muted px-3 py-2 text-sm text-muted-200 hover:text-accent-blue"
                  >
                    <Linkedin size={15} /> LinkedIn
                  </a>
                  <a
                    href={resumePdf}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-pill border border-surface-muted px-3 py-2 text-sm text-muted-200 hover:text-accent-blue"
                  >
                    <ExternalLink size={15} /> Resume
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
