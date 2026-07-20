import { motion } from 'framer-motion';
import { Link } from '../router';
import { projects, type Project } from '../data';
import {
  IconCode, IconChart, IconComponents, IconUsers,
  IconCart, IconBook, IconBriefcase, IconStethoscope, IconArrow, IconGithub,
} from '../components/Icons';
import { fadeUp, staggerContainer } from '../lib/motion';

const iconMap: Record<Project['icon'], React.ComponentType<{ className?: string; style?: React.CSSProperties }>> = {
  code: IconCode, chart: IconChart, components: IconComponents, users: IconUsers,
  cart: IconCart, book: IconBook, briefcase: IconBriefcase, stethoscope: IconStethoscope,
};

export default function ProjectDetail({ slug }: { slug: string }) {
  const project = projects.find((p) => p.slug === slug);


   
  if (!project) {
    return (
      <div className="py-16">
        <p className="text-sm text-muted mb-4">That project doesn't exist.</p>
        <Link to="/projects" className="text-xs text-ember-soft">Back to projects</Link>
      </div>
    );
  }

  const Icon = iconMap[project.icon];
  const index = projects.findIndex((p) => p.slug === slug);
  const next = projects[(index + 1) % projects.length];
  const NextIcon = iconMap[next.icon];

  const sections = [
    { label: 'THE PROBLEM', body: project.problem },
    { label: 'THE APPROACH', body: project.approach },
  ];

  return (
    <div className="py-16 xl:py-20 max-w-[620px] lg:max-w-none xl:max-w-none">
      <Link to="/projects" className="text-xs text-faint hover:text-muted flex items-center gap-1 mb-10">
        <span className="rotate-180 inline-block"><IconArrow className="h-3 w-3" /></span>
        All projects
      </Link>

      <div className="flex flex-col lg:grid lg:grid-cols-[1fr_280px] lg:gap-14 xl:gap-16 lg:items-start">
        <aside className="order-2 lg:sticky lg:top-10 flex flex-col gap-6 mt-10 lg:mt-0">
          {project.LiveDemo && (
            <a
              href={project.LiveDemo}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-ember text-ember-deep text-sm font-medium px-4 py-2.5 rounded-lg shadow-panel hover:bg-ember-soft transition-colors"
            >
              View live demo
              <IconArrow className="h-3.5 w-3.5 -rotate-45" />
            </a>
          )}
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-panel text-paper text-sm font-medium px-4 py-2.5 rounded-lg border border-line hover:border-faint transition-colors"
            >
              <IconGithub className="h-4 w-4" />
              View on GitHub
            </a>
          )}

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-60px' }}
            className="grid grid-cols-2 gap-3"
          >
            {project.metrics.map((m) => (
              <motion.div key={m.label} variants={fadeUp} className="bg-panel rounded-lg p-4">
                <p className="text-[11px] text-faint mb-1">{m.label}</p>
                <p className="font-mono text-base font-medium text-paper">{m.value}</p>
              </motion.div>
            ))}
          </motion.div>

          <div>
            <p className="text-xs text-faint tracking-wide mb-3">BUILT WITH</p>
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: '-60px' }}
              className="flex flex-wrap gap-1.5"
            >
              {project.stack.map((s) => (
                <motion.span key={s} variants={fadeUp} className="font-mono text-[11px] px-2.5 py-1 rounded-full bg-panel text-muted">{s}</motion.span>
              ))}
            </motion.div>
          </div>
        </aside>

        <div className="order-1 min-w-0">
          <div
            className="h-12 w-12 rounded-2xl flex items-center justify-center mb-6 shadow-panel"
            style={{ backgroundColor: project.iconBg }}
          >
            <Icon className="h-5 w-5" style={{ color: project.iconColor }} />
          </div>

          <span className="inline-flex items-center gap-1.5 text-xs tracking-wide text-ember bg-ember/10 px-2.5 py-1 rounded-full mb-4">
            <span className="h-1 w-1 rounded-full bg-ember" />
            {project.tag}
          </span>
          <h1 className="font-display text-[32px] md:text-4xl text-paper mb-4 leading-[1.15]">{project.name}</h1>
          <p className="text-sm text-muted leading-7 max-w-[520px]">{project.summary}</p>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-80px' }}
            className="flex flex-col gap-8 mt-10 max-w-[520px]"
          >
            {sections.map((s, i) => (
              <motion.div key={s.label} variants={fadeUp} className="border-l-2 border-ember/30 pl-5">
                <div className="flex items-center gap-2 mb-2">
                  <span className="font-mono text-[11px] text-ember">0{i + 1}</span>
                  <p className="text-xs text-faint tracking-wide">{s.label}</p>
                </div>
                <p className="text-[13px] leading-6 text-muted">{s.body}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      <Link
        to={`/projects/${next.slug}`}
        className="group mt-16 pt-8 border-t border-line flex items-center justify-between gap-4 hover:border-ember/30 transition-colors"
      >
        <div className="flex items-center gap-4">
          <div className="h-10 w-10 rounded-lg flex items-center justify-center shrink-0" style={{ backgroundColor: next.iconBg }}>
            <NextIcon className="h-4 w-4" style={{ color: next.iconColor }} />
          </div>
          <div>
            <p className="text-xs text-faint mb-1">Next project</p>
            <p className="text-sm font-medium text-paper">{next.name}</p>
          </div>
        </div>
        <IconArrow className="h-4 w-4 text-ember-soft transition-transform group-hover:translate-x-1 shrink-0" />
      </Link>
    </div>
  );
}
