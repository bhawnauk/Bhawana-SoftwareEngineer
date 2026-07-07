import { Link } from '../router';
import { projects, type Project } from '../data';
import {
  IconCode, IconChart, IconComponents, IconUsers,
  IconCart, IconBook, IconBriefcase, IconStethoscope, IconArrow,
} from '../components/Icons';

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

  return (
    <div className="py-16 max-w-[620px]">
      <Link to="/projects" className="text-xs text-faint hover:text-muted flex items-center gap-1 mb-8">
        <span className="rotate-180 inline-block"><IconArrow className="h-3 w-3" /></span>
        All projects
      </Link>

      <div className="h-10 w-10 rounded-lg flex items-center justify-center mb-6" style={{ backgroundColor: project.iconBg }}>
        <Icon className="h-5 w-5" style={{ color: project.iconColor }} />
      </div>

      <p className="text-xs tracking-wide text-ember mb-2">{project.tag}</p>
      <h1 className="font-display text-2xl md:text-[28px] text-paper mb-3 leading-tight">{project.name}</h1>
      <p className="text-sm text-muted leading-7 mb-10">{project.summary}</p>

      <div className="grid grid-cols-2 gap-3 mb-10">
        {project.metrics.map((m) => (
          <div key={m.label} className="bg-panel rounded-lg p-4">
            <p className="text-[11px] text-faint mb-1">{m.label}</p>
            <p className="text-base font-medium text-paper">{m.value}</p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
        <div>
          <p className="text-xs text-faint tracking-wide mb-2">THE PROBLEM</p>
          <p className="text-[13px] leading-6 text-muted">{project.problem}</p>
        </div>
        <div>
          <p className="text-xs text-faint tracking-wide mb-2">THE APPROACH</p>
          <p className="text-[13px] leading-6 text-muted">{project.approach}</p>
        </div>
      </div>

      <div className="pt-6 border-t border-line">
        <p className="text-xs text-faint tracking-wide mb-3">BUILT WITH</p>
        <div className="flex flex-wrap gap-1.5">
          {project.stack.map((s) => (
            <span key={s} className="text-[11px] px-2.5 py-1 rounded-full bg-panel text-muted">{s}</span>
          ))}
        </div>
      </div>

      <Link to={`/projects/${next.slug}`} className="mt-14 flex items-center justify-between border-t border-line pt-6 group">
        <div>
          <p className="text-xs text-faint mb-1">Next project</p>
          <p className="text-sm text-paper">{next.name}</p>
        </div>
        <IconArrow className="h-4 w-4 text-ember-soft transition-transform group-hover:translate-x-1" />
      </Link>
    </div>
  );
}