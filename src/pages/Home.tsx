import { Link } from '../router';
import { heroCopy, profile, projects } from '../data';
import { IconArrow } from '../components/Icons';

export default function Home() {
  const featured = projects.slice(0, 3);

  return (
    <div className="py-16 md:py-24">
      <div className="flex items-start justify-between gap-8">
        <div className="max-w-[480px]">
          <p className="text-xs tracking-wide text-ember mb-4">{heroCopy.eyebrow}</p>
          <h1 className="font-display text-[34px] md:text-[40px] leading-[1.2] text-paper mb-5">
            {heroCopy.headline}
          </h1>
          <p className="text-sm leading-7 text-muted max-w-[420px]">{heroCopy.body}</p>
        </div>
        <img
  src="/profile.jpg"
  alt={profile.name}
  className="hidden md:block h-46 w-40 shrink-0 rounded-full object-cover border border-line"
/>
      </div>

      <div className="mt-6 flex items-center justify-between">
        <span className="text-xs text-faint">{profile.location}</span>
        <span className="text-xs text-ember-soft">{profile.availability}</span>
      </div>

      <div className="mt-10 flex flex-wrap items-center gap-2">
        {['React', 'TypeScript', 'Tailwind CSS', 'Product Operations'].map((tag) => (
          <span key={tag} className="text-[11px] px-3 py-1 rounded-full bg-panel text-muted border border-line">
            {tag}
          </span>
        ))}
      </div>

      <div className="mt-16 pt-12 border-t border-line">
        <div className="flex items-baseline justify-between mb-6">
          <p className="text-xs tracking-wide text-ember">FEATURED PROJECTS</p>
          <Link to="/projects" className="text-xs text-ember-soft flex items-center gap-1 group">
            View all
            <IconArrow className="h-3 w-3 transition-transform group-hover:translate-x-0.5" />
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          {featured.map((p) => (
            <Link
              key={p.slug}
              to={`/projects/${p.slug}`}
              className="bg-panel rounded-xl p-5 border border-transparent hover:border-line transition-colors"
            >
              <div
                className="h-8 w-8 rounded-lg flex items-center justify-center mb-4"
                style={{ backgroundColor: p.iconBg }}
              >
                <span className="text-[11px] font-medium" style={{ color: p.iconColor }}>
                  {p.name.charAt(0)}
                </span>
              </div>
              <p className="text-[13px] font-medium text-paper mb-1">{p.name}</p>
              <p className="text-[12px] text-muted leading-5">{p.tagline}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}