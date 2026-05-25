import React from 'react';
import SectionWrapper from './SectionWrapper';
import Heading from './primitives/Heading';
import Card from './primitives/Card';

const TechStack: React.FC = () => {
  const stackGroups = [
    {
      title: 'UI Delivery',
      items: ['React', 'Tailwind CSS', 'JavaScript', 'Responsive architecture'],
    },
    {
      title: 'Backend + API',
      items: ['PHP', 'Python', 'REST API integration'],
    },
    {
      title: 'Data Layer',
      items: ['MySQL', 'Firebase / Firestore'],
    },
    {
      title: 'Platform Systems',
      items: ['WordPress', 'WooCommerce', 'OpenCart', 'SuiteCRM'],
    },
    {
      title: 'Delivery Tooling',
      items: ['Git', 'GitHub', 'Cross-device QA', 'Production support'],
    },
  ];

  return (
    <SectionWrapper id="skills">
      <div className="mb-8 text-center">
        <Heading level={3}>Capability Matrix</Heading>
        <p className="text-muted-400 text-sm mt-2">Core technologies grouped by delivery responsibility.</p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
        {stackGroups.map((group) => (
          <Card key={group.title} className="h-full">
            <div className="text-sm font-semibold uppercase tracking-[0.18em] text-accent-blue">{group.title}</div>
            <div className="mt-4 flex flex-wrap gap-2">
              {group.items.map((item) => (
                <span key={item} className="inline-flex items-center rounded-pill border border-surface-muted bg-[rgba(255,255,255,0.03)] px-3 py-1 text-sm text-muted-200">
                  {item}
                </span>
              ))}
            </div>
          </Card>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default TechStack;
