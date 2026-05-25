import React from 'react';
import SectionWrapper from './SectionWrapper';
import Heading from './primitives/Heading';
import Card from './primitives/Card';

const Experience: React.FC = () => {
  return (
    <SectionWrapper id="experience">
      <div className="mb-6">
        <Heading level={3}>Experience</Heading>
        <p className="text-muted-400 text-sm mt-2 max-w-3xl">
          Live client work across platforms, APIs, and product delivery.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-[1.25fr_0.75fr] gap-5">
        <Card className="space-y-4">
          <div>
            <div className="text-sm text-accent-blue font-semibold uppercase tracking-[0.18em]">Freelance + Part-Time</div>
            <div className="font-semibold mt-1 text-gray-100">2023 - Present</div>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <div className="text-xs uppercase tracking-[0.16em] text-muted-300 font-semibold">Work shipped</div>
              <ul className="text-sm text-muted-400 list-disc pl-4 mt-2 space-y-1.5 leading-6">
                <li>Led delivery of Finmile.ai with MST Developers collaboration.</li>
                <li>WordPress and WooCommerce customization.</li>
                <li>OpenCart module implementation.</li>
                <li>SuiteCRM integrations.</li>
                <li>React UI with API-connected state.</li>
              </ul>
            </div>

            <div>
              <div className="text-xs uppercase tracking-[0.16em] text-muted-300 font-semibold">Engineering signals</div>
              <ul className="text-sm text-muted-400 list-disc pl-4 mt-2 space-y-1.5 leading-6">
                <li>Backend-adjacent logic in PHP, Python, and MySQL.</li>
                <li>Supabase auth, storage, and PostgreSQL content workflows for Finmile.ai.</li>
                <li>API contract wiring across platform boundaries.</li>
                <li>Incremental delivery under live-system constraints.</li>
                <li>Performance and maintainability focused changes.</li>
              </ul>
            </div>
          </div>

          <div className="grid gap-3 sm:grid-cols-3">
            <div className="rounded-md border border-surface-muted bg-[rgba(255,255,255,0.02)] px-3 py-2 text-sm text-muted-200">25% reported performance gain</div>
            <div className="rounded-md border border-surface-muted bg-[rgba(255,255,255,0.02)] px-3 py-2 text-sm text-muted-200">Cross-platform delivery role</div>
            <div className="rounded-md border border-surface-muted bg-[rgba(255,255,255,0.02)] px-3 py-2 text-sm text-muted-200">Production support orientation</div>
          </div>
        </Card>

        <div className="space-y-5">
          <Card>
            <div className="text-sm text-accent-blue font-semibold uppercase tracking-[0.18em]">Academic base</div>
            <div className="font-semibold mt-1 text-gray-100">BS Software Engineering — University of Central Punjab</div>
            <p className="text-muted-400 text-sm mt-2 leading-6">Expected 2026. Core work: OS, requirements engineering, DSA, and OOP.</p>
          </Card>

          <Card>
            <div className="text-sm text-accent-blue font-semibold uppercase tracking-[0.18em]">Applied training</div>
            <ul className="mt-2 text-sm text-muted-400 list-disc pl-4 space-y-1.5 leading-6">
              <li>WordPress Plugin Development</li>
              <li>Programming for Everybody (Python) — Coursera</li>
            </ul>
          </Card>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default Experience;
