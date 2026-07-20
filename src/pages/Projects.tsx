import { motion } from 'framer-motion';
import { Link } from '../router';
import { projects, type Project } from '../data';
import {
  IconCode, IconChart, IconComponents, IconUsers,
  IconCart, IconBook, IconBriefcase, IconStethoscope,
} from '../components/Icons';
import { fadeUp, staggerContainer } from '../lib/motion';

const iconMap: Record<Project['icon'], React.ComponentType<{ className?: string; style?: React.CSSProperties }>> = {
  code: IconCode, chart: IconChart, components: IconComponents, users: IconUsers,
  cart: IconCart, book: IconBook, briefcase: IconBriefcase, stethoscope: IconStethoscope,
};

function ProjectCard({ project, wide }: { project: Project; wide?: boolean }) {
  const Icon = iconMap[project.icon];
  return (
    <Link
      to={`/projects/${project.slug}`}
      className={`h-full bg-panel rounded-xl p-6 flex flex-col gap-4 border border-transparent hover:border-ember/30 hover:shadow-panel transition-all duration-200 ${
        wide ? 'lg:p-7' : ''
      }`}
    >
      <div className="flex items-start justify-between">
        <div className="h-10 w-10 rounded-xl flex items-center justify-center shrink-0 shadow-panel" style={{ backgroundColor: project.iconBg }}>
          <Icon className="h-4 w-4" style={{ color: project.iconColor }} />
        </div>
        <span className="inline-flex items-start gap-1.5 text-[10px] tracking-wide text-faint text-right max-w-[130px] bg-ink px-2 py-1 rounded-md">
          <span className="h-1 w-1 rounded-full bg-faint shrink-0 mt-1" />
          {project.tag}
        </span>
      </div>
      <div>
        <h3 className="text-[15px] font-medium text-paper leading-snug mb-2">{project.name}</h3>
        <p className="text-[13px] leading-6 text-muted">{project.tagline}</p>
        {wide && (
          <p className="text-[13px] leading-6 text-muted mt-2 hidden lg:block">{project.summary}</p>
        )}
      </div>
      <div className="flex flex-wrap gap-1.5 pt-3 border-t border-line mt-auto">
        {project.stack.slice(0, 4).map((s) => (
          <span key={s} className="font-mono text-[11px] px-2 py-0.5 rounded-full bg-ink text-muted">{s}</span>
        ))}
      </div>
    </Link>
  );
}

export default function Projects() {
  return (
    <div className="py-16">
      <p className="text-xs tracking-wide text-ember mb-2">PROJECTS</p>
      <h1 className="font-display text-2xl md:text-[28px] text-paper mb-8 max-w-[480px]">
        Five builds, five different problems worth solving.
      </h1>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: '-80px' }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
      >
        {projects.map((project, i) => (
          <motion.div key={project.slug} variants={fadeUp} className={i === 0 ? 'lg:col-span-2' : ''}>
            <ProjectCard project={project} wide={i === 0} />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
