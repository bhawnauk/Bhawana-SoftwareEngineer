import { Link } from '../router';
import { projects, type Project } from '../data';
import {
  IconCode, IconChart, IconComponents, IconUsers,
  IconCart, IconBook, IconBriefcase, IconStethoscope,
} from '../components/Icons';

const iconMap: Record<Project['icon'], React.ComponentType<{ className?: string; style?: React.CSSProperties }>> = {
  code: IconCode, chart: IconChart, components: IconComponents, users: IconUsers,
  cart: IconCart, book: IconBook, briefcase: IconBriefcase, stethoscope: IconStethoscope,
};

function ProjectCard({ project }: { project: Project }) {
  const Icon = iconMap[project.icon];
  return (
    <Link
      to={`/projects/${project.slug}`}
      className="bg-panel rounded-xl p-6 flex flex-col gap-4 border border-transparent hover:border-line transition-colors"
    >
      <div className="flex items-start justify-between">
        <div className="h-9 w-9 rounded-lg flex items-center justify-center shrink-0" style={{ backgroundColor: project.iconBg }}>
          <Icon className="h-4 w-4" style={{ color: project.iconColor }} />
        </div>
        <span className="text-[10px] tracking-wide text-faint text-right max-w-[130px]">{project.tag}</span>
      </div>
      <div>
        <h3 className="text-[15px] font-medium text-paper leading-snug mb-2">{project.name}</h3>
        <p className="text-[13px] leading-6 text-muted">{project.tagline}</p>
      </div>
      <div className="flex flex-wrap gap-1.5 pt-3 border-t border-line mt-auto">
        {project.stack.slice(0, 4).map((s) => (
          <span key={s} className="text-[11px] px-2 py-0.5 rounded-full bg-ink text-muted">{s}</span>
        ))}
      </div>
    </Link>
  );
}

export default function Projects() {
  return (
    <div className="py-16">
      <p className="text-xs tracking-wide text-ember mb-2">PROJECTS</p>
      <h1 className="font-display text-2xl text-paper mb-8 max-w-[480px]">
        Five builds, five different problems worth solving.
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {projects.map((project) => <ProjectCard key={project.slug} project={project} />)}
      </div>
    </div>
  );
}