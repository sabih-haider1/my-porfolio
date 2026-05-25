import React from 'react';
import SectionWrapper from './SectionWrapper';
import Heading from './primitives/Heading';
import Card from './primitives/Card';

const About: React.FC = () => {
  const authorityBlocks = [
    {
      title: 'What I Optimize For',
      points: ['Clarity in code and APIs.', 'Small releases over big risky drops.'],
    },
    {
      title: 'Delivery Notes',
      points: ['Improve existing systems before proposing rebuilds.', 'Protect compatibility with staged rollouts.'],
    },
    {
      title: 'Implementation Decisions',
      points: ['Choose tools that reduce operational overhead.', 'Keep state and data ownership explicit.'],
    },
    {
      title: 'Production Constraints',
      points: ['Work within client timelines and legacy stacks.', 'Prefer rollback-safe changes over fragile optimizations.'],
    },
    {
      title: 'Systems Worked Inside',
      points: ['WordPress, WooCommerce, OpenCart, and SuiteCRM.', 'React frontends connected to live APIs and data stores.'],
    },
    {
      title: 'Current Focus',
      points: ['Admin workflows and internal tooling UX.', 'Auth, publishing, and data model reliability.'],
    },
  ];

  return (
    <SectionWrapper id="about" className="bg-[rgba(31,41,55,0.5)]">
      <div className="mb-8">
        <Heading level={2}>Working <span className="gradient-text">Style</span></Heading>
        <p className="mt-3 text-sm text-muted-400 max-w-3xl">
          Practical decision-making across product UI, integrations, and shipping constraints.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3 items-start">
        {authorityBlocks.map((block) => (
          <Card key={block.title} className="h-full">
            <div className="text-accent-blue text-[11px] font-semibold uppercase tracking-[0.18em]">{block.title}</div>
            <ul className="mt-3 text-sm text-muted-400 list-disc pl-4 space-y-2 leading-6">
              {block.points.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          </Card>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default About;
