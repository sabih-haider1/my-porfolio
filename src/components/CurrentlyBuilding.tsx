import React from 'react';
import { motion } from 'framer-motion';
import SectionWrapper from './SectionWrapper';
import Heading from './primitives/Heading';
import Card from './primitives/Card';

type BuildTrack = {
  id: string;
  title: string;
  domain: string;
  direction: string;
  currentFocus: string[];
  nextSteps: string[];
};

const buildTracks: BuildTrack[] = [
  {
    id: 'ai-systems',
    title: 'AI Workflow Integration',
    domain: 'AI systems',
    direction: 'Practical orchestration patterns for model-enabled workflows.',
    currentFocus: [
      'Request/response boundaries for multi-step calls',
      'Fallback handling for external provider failures',
      'Traceable logs for debugging execution paths',
    ],
    nextSteps: [
      'Queue-backed processing for burst traffic',
      'Workflow-level retry and timeout policies',
      'Operator-facing failure summaries',
    ],
  },
  {
    id: 'automation-platform',
    title: 'Operations Automation',
    domain: 'Automation platforms',
    direction: 'Backend automation for repeatable operations work.',
    currentFocus: [
      'Workflow state design for multi-step jobs',
      'CRM and commerce integration points',
      'Auditable execution history',
    ],
    nextSteps: [
      'Task retries and idempotency checks',
      'Role-aware controls for operators',
      'Reliable background job deployment',
    ],
  },
  {
    id: 'mern-platform',
    title: 'MERN Product Scaling',
    domain: 'MERN platforms',
    direction: 'Growing dashboard + API systems with cleaner module boundaries.',
    currentFocus: [
      'Domain split between API modules and client features',
      'Performance-aware data access paths',
      'Integration contracts between services',
    ],
    nextSteps: [
      'Better staging and production parity',
      'Latency and error instrumentation',
      'Service split based on load bottlenecks',
    ],
  },
  {
    id: 'distributed-exploration',
    title: 'Distributed Systems Basics',
    domain: 'Distributed systems',
    direction: 'Reliability patterns for async and event-driven workflows.',
    currentFocus: [
      'Message-driven workflow sequencing',
      'Idempotent processing design for repeat events',
      'Tradeoff mapping between consistency and throughput',
    ],
    nextSteps: [
      'Dead-letter recovery handling',
      'Contract versioning between services',
      'Failure-injection tests for reliability checks',
    ],
  },
];

const CurrentlyBuilding: React.FC = () => {
  return (
    <SectionWrapper id="building" className="bg-[linear-gradient(160deg,rgba(15,23,42,0.65)_0%,rgba(17,24,39,0.92)_50%,rgba(2,6,23,0.9)_100%)]">
      <div className="w-full">
        <header className="mb-7">
          <Heading level={2}>
            Current Technical <span className="gradient-text">Exploration</span>
          </Heading>
          <p className="mt-3 text-sm text-muted-400 max-w-3xl">
            Active learning directions tied to real implementation work.
          </p>
        </header>

        <div className="grid gap-4 md:grid-cols-2">
          {buildTracks.map((track, index) => (
            <motion.article
              key={track.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.45, delay: index * 0.06 }}
            >
              <Card as="article" className="h-full space-y-3 p-4">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <div className="text-[11px] uppercase tracking-[0.16em] font-semibold text-accent-blue">{track.domain}</div>
                    <h3 className="text-h3 font-semibold text-gray-100 mt-1">{track.title}</h3>
                  </div>
                </div>

                <p className="text-sm text-muted-300 leading-6">{track.direction}</p>

                <div className="grid gap-3 sm:grid-cols-2">
                  <div>
                    <div className="text-xs uppercase tracking-[0.16em] text-muted-300 font-semibold">Current focus</div>
                    <ul className="mt-2 text-sm text-muted-400 list-disc pl-4 space-y-1.5 leading-6">
                      {track.currentFocus.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <div className="text-xs uppercase tracking-[0.16em] text-muted-300 font-semibold">Next steps</div>
                    <ul className="mt-2 text-sm text-muted-400 list-disc pl-4 space-y-1.5 leading-6">
                      {track.nextSteps.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Card>
            </motion.article>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
};

export default CurrentlyBuilding;
