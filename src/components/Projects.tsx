import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import SectionWrapper from './SectionWrapper';
import Heading from './primitives/Heading';
import Card from './primitives/Card';

type ProjectCaseStudy = {
  id: string;
  title: string;
  status: 'Production';
  summary: string;
  impact: string[];
  stack: string[];
  timeline: string[];
  architecture: string[];
  workflowMap: string[];
  decisions: string[];
  constraints: string[];
  deployment: string[];
  observability: string[];
  notes: string[];
  links?: {
    type: 'github' | 'live' | 'case-study';
    label: string;
    url: string;
  }[];
};

type DeliveryWork = {
  id: string;
  title: string;
  summary: string;
  systems: string[];
  boundaries: string[];
  productionNotes: string[];
};

type ArchitectureTrack = {
  id: string;
  title: string;
  state: 'Active';
  objective: string;
  systemBoundaries: string[];
  explorationNow: string[];
  deploymentThinking: string[];
  notes: string[];
};

const featuredProjects: ProjectCaseStudy[] = [
  {
    id: 'finmile-website-platform',
    title: 'Finmile.ai Website Platform',
    status: 'Production',
    summary: 'Led delivery of the live Finmile.ai website with MST Developers, including admin publishing, auth-gated access, and Supabase-backed content operations.',
    impact: ['Live in production (UK market)', 'Admin publishing flow for non-technical users', 'Project lead across frontend and backend coordination'],
    stack: ['React', 'Node.js', 'Supabase Auth', 'Supabase Storage Buckets', 'PostgreSQL', 'JSON editor'],
    timeline: ['Content model + delivery scope', 'Frontend and backend implementation', 'Admin UX, auth, and publishing rollout'],
    architecture: [
      'React frontend for public pages and admin screens',
      'Node.js integration layer for workflow actions',
      'Supabase auth with role-gated admin routes',
      'PostgreSQL content entities plus storage bucket assets',
    ],
    workflowMap: ['Admin sign-in', 'Role check', 'Content edit', 'Media attach', 'Publish to live site'],
    decisions: [
      'Used Supabase to keep auth, storage, and relational data in one operational surface.',
      'Built a structured JSON editor so content updates did not require code deployments.',
      'Separated public rendering from admin publishing to keep permissions explicit.',
    ],
    constraints: [
      'Admin UX had to work for non-technical users without reducing access control.',
      'Content model needed to support blogs, whitepapers, and resources with shared tooling.',
      'Publishing flow required safe defaults to avoid accidental live content changes.',
    ],
    deployment: ['Live endpoint: finmile.ai', 'Supabase bucket-backed media/document publishing', 'Role-gated admin access with session validation'],
    observability: ['Auth checks at protected routes', 'Pre-publish validation for required fields and media links'],
    notes: [
      'Delivered with MST Developers.',
      'A key tradeoff was editor flexibility vs. guardrails; I favored constrained templates to keep data consistent.',
      'Admin workflows were tuned for speed, but still kept explicit permission boundaries and publish confirmations.',
    ],
    links: [{ type: 'live', label: 'Live Site', url: 'https://finmile.ai/' }],
  },
  {
    id: 'spam-message-classifier',
    title: 'Spam Message Classifier',
    status: 'Production',
    summary: 'Spam-classification pipeline built for repeatable training runs and lightweight inference.',
    impact: ['96% reported test accuracy', 'Repeatable preprocessing and training flow', 'Clear path to API packaging'],
    stack: ['Python', 'scikit-learn', 'TF-IDF', 'Logistic Regression'],
    timeline: ['Data cleanup', 'Vectorization + training', 'Evaluation + threshold tuning'],
    architecture: ['Input text cleanup', 'TF-IDF vectorization', 'Logistic regression classifier', 'Evaluation output'],
    workflowMap: ['Message input', 'Cleanup', 'Vectorize', 'Classify', 'Log result'],
    decisions: [
      'Used logistic regression for transparent behavior and fast inference.',
      'Kept sparse-feature pipeline to simplify retraining and auditing.',
      'Prioritized deterministic preprocessing over model complexity.',
    ],
    constraints: [
      'Data volume limits confidence on long-tail language patterns.',
      'Feature drift control is required once traffic diversity increases.',
    ],
    deployment: ['Repository packaging completed', 'API wrapper and queue integration planned next'],
    observability: ['Prediction logging per run', 'Confusion matrix checks during validation snapshots'],
    notes: ['Not presented as a live SaaS deployment. Public code is available.'],
    links: [{ type: 'github', label: 'Code', url: 'https://github.com/sabih-haider1/SMS-Spam-Detector' }],
  },
  {
    id: 'pure-eats',
    title: 'Pure Eats Food Delivery App',
    status: 'Production',
    summary: 'Food-delivery workflow with auth, preference filters, and persistent meal tracking.',
    impact: ['Auth-gated product flow', 'Tracked meal history with stored events', 'Built for iterative feature additions'],
    stack: ['React', 'Tailwind CSS', 'Firebase Auth', 'Cloud datastore'],
    timeline: ['User flow and entities', 'Auth and state sync', 'Tracking and filtering improvements'],
    architecture: ['Client state boundary', 'Auth token lifecycle', 'Preference and event store', 'History rendering'],
    workflowMap: ['Sign in', 'Validate session', 'Set filters', 'Write event', 'Render history'],
    decisions: [
      'Firebase selected to ship auth plus data workflows without backend boilerplate.',
      'Filter logic implemented in explicit state paths for predictable UX behavior.',
      'Tracking model designed for repeat usage, not one-off demo screens.',
    ],
    constraints: [
      'State transitions must stay stable across auth refresh boundaries.',
      'Schema balance needed between velocity and future analytics depth.',
    ],
    deployment: ['Managed backend services in place', 'Hardening path: role controls and better monitoring'],
    observability: ['Session checks at route boundaries', 'Event write/read consistency checks'],
    notes: ['No live URL is shown until deployment is public.'],
  },
];

const additionalWork: DeliveryWork[] = [
  {
    id: 'client-delivery-systems',
    title: 'Client Delivery Systems: CMS + Commerce + CRM',
    summary: 'Live client delivery across WordPress, OpenCart, and SuiteCRM with API and data-path integrations.',
    systems: ['WordPress', 'WooCommerce', 'OpenCart', 'SuiteCRM', 'REST APIs', 'MySQL', 'PHP'],
    boundaries: ['Platform extension over rewrite', 'Compatibility with existing plugins', 'Incremental rollout under live constraints'],
    productionNotes: ['Reported result: up to 25% performance improvement across customization projects.'],
  },
];

const architectureTracks: ArchitectureTrack[] = [
  {
    id: 'enterprise-platform-track',
    title: 'Admin and Workflow Systems',
    state: 'Active',
    objective: 'Build stronger internal tooling patterns: permissions, publishing flows, and data ownership boundaries.',
    systemBoundaries: ['Role-aware admin routes', 'Publishing workflow states', 'Content model versioning', 'Audit-friendly change history'],
    explorationNow: ['Route guards + role policies', 'Draft -> review -> publish transitions', 'Schema changes with migration safety'],
    deploymentThinking: ['Staging parity before release', 'Rollback-safe migrations', 'Basic monitoring around publish paths'],
    notes: ['This is an active learning direction grounded in current delivery work.'],
  },
  {
    id: 'distributed-ai-track',
    title: 'AI Workflow Reliability',
    state: 'Active',
    objective: 'Improve orchestration reliability for multi-step AI workflows without overcomplicating early implementations.',
    systemBoundaries: ['Request intake', 'Orchestration layer', 'Provider adapters', 'Validation and logging'],
    explorationNow: ['Retry policies for failed calls', 'Fallback path planning', 'Traceable workflow logs'],
    deploymentThinking: ['Queue-backed burst handling', 'Timeout and retry guardrails', 'Clear error surfacing for operators'],
    notes: ['No inflated claims. This is current technical exploration.'],
  },
  {
    id: 'commerce-infra-track',
    title: 'Commerce Data and Operations',
    state: 'Active',
    objective: 'Improve reliability across order data, integrations, and operational visibility in commerce-style systems.',
    systemBoundaries: ['Catalog and inventory', 'Checkout and payment states', 'CRM/fulfillment integrations', 'Operational telemetry'],
    explorationNow: ['Idempotent event handling', 'Replay-safe integration flows', 'Compatibility-first migration strategy'],
    deploymentThinking: ['Config separation per environment', 'Operational runbooks for failure cases', 'Performance checks on high-traffic paths'],
    notes: ['Built as an implementation roadmap, not speculative architecture theater.'],
  },
];

const FlowRail: React.FC<{ nodes: string[] }> = ({ nodes }) => {
  return (
    <div className="rounded-md border border-surface-muted bg-[rgba(255,255,255,0.02)] p-3">
      <div className="flex flex-wrap items-center gap-2 text-xs text-muted-300">
        {nodes.map((node, index) => (
          <React.Fragment key={node}>
            <span className="rounded-sm border border-surface-muted bg-[rgba(255,255,255,0.02)] px-2 py-1">{node}</span>
            {index < nodes.length - 1 ? <span className="text-accent-blue">-&gt;</span> : null}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

const Projects: React.FC = () => {
  return (
    <SectionWrapper id="projects">
      <div className="w-full">
        <header className="mb-8">
          <Heading level={2}>
            Featured <span className="gradient-text">Projects</span>
          </Heading>
          <p className="mt-3 text-sm text-muted-400 max-w-3xl">
            Concise case studies focused on implementation decisions, constraints, and delivery outcomes.
          </p>
        </header>

        <div className="sticky top-20 z-20 mb-5 rounded-lg border border-surface-muted bg-[rgba(17,24,39,0.84)] p-3 backdrop-blur">
          <div className="text-[11px] uppercase tracking-[0.16em] text-muted-300 font-semibold">Jump to case study</div>
          <div className="mt-2 flex flex-wrap gap-2">
            {featuredProjects.map((project) => (
              <a
                key={project.id}
                href={`#${project.id}`}
                className="inline-flex items-center rounded-pill border border-surface-muted px-3 py-1 text-xs text-muted-200 hover:text-accent-blue"
              >
                {project.title}
              </a>
            ))}
          </div>
        </div>

        <section className="space-y-5">
          {featuredProjects.map((project, index) => (
            <motion.article
              key={project.id}
              id={project.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.45, delay: index * 0.06 }}
            >
              <Card as="article" className="p-0 overflow-hidden">
                <div className="grid xl:grid-cols-[1.35fr_0.65fr]">
                  <div className="p-5 sm:p-6 space-y-4 border-b border-surface-muted xl:border-b-0 xl:border-r">
                    <div className="flex items-start justify-between gap-3 flex-wrap">
                      <div>
                        <div className="text-[11px] uppercase tracking-[0.16em] font-semibold text-accent-blue">{project.status}</div>
                        <h3 className="mt-1 text-[1.3rem] leading-tight font-bold text-gray-100">{project.title}</h3>
                      </div>
                    </div>

                    <p className="text-sm text-muted-300 leading-6">{project.summary}</p>

                    <div className="grid gap-3 sm:grid-cols-3">
                      {project.impact.map((item) => (
                        <div key={item} className="rounded-md border border-surface-muted bg-[rgba(255,255,255,0.02)] px-3 py-2 text-sm text-muted-200">
                          {item}
                        </div>
                      ))}
                    </div>

                    <div className="grid gap-3 lg:grid-cols-2">
                      <div>
                        <div className="text-[11px] uppercase tracking-[0.16em] text-muted-300 font-semibold">Implementation</div>
                        <ul className="mt-2 space-y-1.5 text-sm text-muted-400 list-disc pl-4 leading-6">
                          {project.architecture.map((item) => (
                            <li key={item}>{item}</li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <div className="text-[11px] uppercase tracking-[0.16em] text-muted-300 font-semibold">Workflow</div>
                        <div className="mt-2">
                          <FlowRail nodes={project.workflowMap} />
                        </div>
                      </div>
                    </div>

                    <details className="rounded-md border border-surface-muted bg-[rgba(255,255,255,0.02)] p-3" open>
                      <summary className="cursor-pointer text-sm font-semibold text-muted-200">Implementation decisions</summary>
                      <ul className="mt-3 space-y-1.5 text-sm text-muted-400 list-disc pl-4 leading-6">
                        {project.decisions.map((item) => (
                          <li key={item}>{item}</li>
                        ))}
                      </ul>
                    </details>

                    <details className="rounded-md border border-surface-muted bg-[rgba(255,255,255,0.02)] p-3">
                      <summary className="cursor-pointer text-sm font-semibold text-muted-200">Production constraints</summary>
                      <ul className="mt-3 space-y-1.5 text-sm text-muted-400 list-disc pl-4 leading-6">
                        {project.constraints.map((item) => (
                          <li key={item}>{item}</li>
                        ))}
                      </ul>
                    </details>

                    <details className="rounded-md border border-surface-muted bg-[rgba(255,255,255,0.02)] p-3">
                      <summary className="cursor-pointer text-sm font-semibold text-muted-200">Selected delivery notes</summary>
                      <ul className="mt-3 space-y-1.5 text-sm text-muted-400 list-disc pl-4 leading-6">
                        {project.notes.map((item) => (
                          <li key={item}>{item}</li>
                        ))}
                      </ul>
                    </details>
                  </div>

                  <aside className="p-5 sm:p-6 space-y-5 bg-[rgba(255,255,255,0.015)] xl:sticky xl:top-24 xl:self-start">
                    <div>
                      <div className="text-[11px] uppercase tracking-[0.16em] text-muted-300 font-semibold">Implementation timeline</div>
                      <ol className="mt-2 space-y-2 text-sm text-muted-400">
                        {project.timeline.map((item, timelineIndex) => (
                          <li key={item} className="flex gap-2 leading-6">
                            <span className="text-accent-blue font-semibold">{String(timelineIndex + 1).padStart(2, '0')}</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ol>
                    </div>

                    <div>
                      <div className="text-[11px] uppercase tracking-[0.16em] text-muted-300 font-semibold">Deployment realities</div>
                      <ul className="mt-2 space-y-1.5 text-sm text-muted-400 list-disc pl-4 leading-6">
                        {project.deployment.map((item) => (
                          <li key={item}>{item}</li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <div className="text-[11px] uppercase tracking-[0.16em] text-muted-300 font-semibold">Observability</div>
                      <ul className="mt-2 space-y-1.5 text-sm text-muted-400 list-disc pl-4 leading-6">
                        {project.observability.map((item) => (
                          <li key={item}>{item}</li>
                        ))}
                      </ul>
                    </div>

                    <div className="pt-4 border-t border-surface-muted">
                      <div className="text-[11px] uppercase tracking-[0.16em] text-muted-300 font-semibold mb-2">Stack</div>
                      <div className="flex flex-wrap gap-2">
                        {project.stack.map((tech) => (
                          <span
                            key={tech}
                            className="inline-flex items-center rounded-pill bg-[rgba(34,211,238,0.12)] px-3 py-1 text-[11px] font-semibold text-accent-blue border border-[rgba(34,211,238,0.2)]"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {project.links?.length ? (
                      <div className="pt-3 border-t border-surface-muted flex flex-wrap gap-2">
                        {project.links.map((link) => (
                          <a
                            key={link.url}
                            href={link.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 rounded-pill bg-white px-4 py-2 text-sm font-bold text-gray-900 shadow-elev-1"
                          >
                            {link.type === 'github' ? <Github size={15} /> : <ExternalLink size={15} />}
                            {link.label}
                          </a>
                        ))}
                      </div>
                    ) : null}
                  </aside>
                </div>
              </Card>
            </motion.article>
          ))}
        </section>

        <section className="mt-10">
          <div className="mb-4">
            <h3 className="text-h3 font-bold text-gray-100">Additional Production Work</h3>
          </div>
          <div className="grid gap-4">
            {additionalWork.map((item) => (
              <Card key={item.id} as="article" className="space-y-4">
                <div className="flex items-center justify-between gap-3 flex-wrap">
                  <h4 className="text-h3 font-semibold text-gray-100">{item.title}</h4>
                  <span className="text-[11px] uppercase tracking-[0.16em] font-semibold text-accent-blue">Production delivery</span>
                </div>
                <p className="text-sm text-muted-300 leading-6">{item.summary}</p>

                <div className="grid gap-3 lg:grid-cols-3">
                  <div>
                    <div className="text-[11px] uppercase tracking-[0.16em] text-muted-300 font-semibold">Systems</div>
                    <div className="mt-2 flex flex-wrap gap-2">
                      {item.systems.map((tech) => (
                        <span
                          key={tech}
                          className="inline-flex items-center rounded-pill border border-surface-muted bg-[rgba(255,255,255,0.02)] px-3 py-1 text-[11px] text-muted-200"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <div className="text-[11px] uppercase tracking-[0.16em] text-muted-300 font-semibold">Implementation boundaries</div>
                    <ul className="mt-2 space-y-1.5 text-sm text-muted-400 list-disc pl-4 leading-6">
                      {item.boundaries.map((line) => (
                        <li key={line}>{line}</li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <div className="text-[11px] uppercase tracking-[0.16em] text-muted-300 font-semibold">Production notes</div>
                    <ul className="mt-2 space-y-1.5 text-sm text-muted-400 list-disc pl-4 leading-6">
                      {item.productionNotes.map((line) => (
                        <li key={line}>{line}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </section>

        <section className="mt-10">
          <div className="mb-4">
            <h3 className="text-h3 font-bold text-gray-100">Engineering Directions</h3>
            <p className="mt-2 text-sm text-muted-400 max-w-3xl">
              Current technical exploration based on real delivery work.
            </p>
          </div>

          <div className="grid gap-4 lg:grid-cols-3">
            {architectureTracks.map((track) => (
              <Card key={track.id} as="article" className="space-y-4">
                <div className="flex items-center justify-between gap-2">
                  <h4 className="text-h3 font-semibold text-gray-100">{track.title}</h4>
                  <span className="text-[11px] uppercase tracking-[0.16em] font-semibold text-accent-blue">{track.state}</span>
                </div>

                <p className="text-sm text-muted-300 leading-6">{track.objective}</p>

                <div>
                  <div className="text-[11px] uppercase tracking-[0.16em] text-muted-300 font-semibold">Current boundaries</div>
                  <ul className="mt-2 space-y-1.5 text-sm text-muted-400 list-disc pl-4 leading-6">
                    {track.systemBoundaries.map((line) => (
                      <li key={line}>{line}</li>
                    ))}
                  </ul>
                </div>

                <div>
                  <div className="text-[11px] uppercase tracking-[0.16em] text-muted-300 font-semibold">Exploring now</div>
                  <ul className="mt-2 space-y-1.5 text-sm text-muted-400 list-disc pl-4 leading-6">
                    {track.explorationNow.map((line) => (
                      <li key={line}>{line}</li>
                    ))}
                  </ul>
                </div>

                <details className="rounded-md border border-surface-muted bg-[rgba(255,255,255,0.02)] p-3">
                  <summary className="cursor-pointer text-sm font-semibold text-muted-200">Implementation notes</summary>
                  <ul className="mt-3 space-y-1.5 text-sm text-muted-400 list-disc pl-4 leading-6">
                    {track.deploymentThinking.map((line) => (
                      <li key={line}>{line}</li>
                    ))}
                  </ul>
                </details>

                <div className="rounded-md border border-surface-muted bg-[rgba(255,255,255,0.02)] px-3 py-2 text-sm text-muted-400">
                  {track.notes[0]}
                </div>
              </Card>
            ))}
          </div>
        </section>

        <div className="mt-8 rounded-xl border border-surface-muted bg-[rgba(255,255,255,0.03)] p-4">
          <div className="text-xs uppercase tracking-[0.16em] text-accent-blue font-semibold">Link rule</div>
          <p className="mt-2 text-sm text-muted-400">
            Links appear only when a public destination exists. Otherwise the case study stays implementation-first.
          </p>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default Projects;
