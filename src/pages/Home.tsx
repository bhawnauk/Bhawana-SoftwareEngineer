import { motion } from 'framer-motion';
import { Link } from '../router';
import { heroCopy, profile, projects } from '../data';
import { IconArrow } from '../components/Icons';
import { fadeUp, staggerContainer } from '../lib/motion';

export default function Home() {
  const featured = projects.slice(0, 3);

  return (
    <div className="py-16 md:py-24">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="show"
        className="flex flex-col lg:grid lg:grid-cols-[1.3fr_1fr] lg:gap-12 lg:items-center gap-8"
      >
        <motion.div variants={fadeUp} className="max-w-[480px]">
          <p className="text-xs tracking-wide text-ember mb-4">{heroCopy.eyebrow}</p>
          <h1 className="font-display text-[34px] md:text-[40px] leading-[1.2] text-paper mb-5">
            {heroCopy.headline}
          </h1>
          <p className="text-sm leading-7 text-muted max-w-[420px] mb-8">{heroCopy.body}</p>
          <div className="flex flex-wrap items-center gap-3">
            <Link
              to="/projects"
              className="inline-flex items-center gap-2 bg-ember text-ember-deep text-sm font-medium px-4 py-2.5 rounded-lg shadow-panel hover:bg-ember-soft transition-colors"
            >
              View my work
              <IconArrow className="h-3.5 w-3.5" />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 text-sm text-paper px-4 py-2.5 rounded-lg border border-line hover:border-faint transition-colors"
            >
              Get in touch
            </Link>
          </div>
        </motion.div>
        <motion.div variants={fadeUp} className="relative hidden lg:flex lg:justify-end">
          
          <img
            src="/Profile.png"
            alt={profile.name}
            className="relative shrink-0 object-cover border border-line rounded-xl shadow-panel w-[100px] h-[100px] lg:w-[300px] lg:h-[300px] "
          />
        </motion.div>
      </motion.div>

      <motion.div variants={fadeUp} initial="hidden" animate="show" className="mt-10 flex items-center justify-between">
        <span className="text-xs text-faint">{profile.location}</span>
        <span className="inline-flex items-center gap-1.5 text-xs text-ember-soft bg-ember/10 px-2.5 py-1 rounded-full">
          <span className="h-1 w-1 rounded-full bg-ember-soft" />
          {profile.availability}
        </span>
      </motion.div>

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="show"
        className="mt-10 flex flex-wrap items-center gap-2"
      >
        {['React', 'TypeScript', 'Tailwind CSS', 'Product Operations'].map((tag) => (
          <motion.span
            key={tag}
            variants={fadeUp}
            className="text-[11px] px-3 py-1 rounded-full bg-panel text-muted border border-line"
          >
            {tag}
          </motion.span>
        ))}
      </motion.div>

      <div className="mt-16 pt-12 border-t border-line">
        <div className="flex items-baseline justify-between mb-6">
          <p className="text-xs tracking-wide text-ember">FEATURED PROJECTS</p>
          <Link to="/projects" className="text-xs text-ember-soft flex items-center gap-1 group">
            View all
            <IconArrow className="h-3 w-3 transition-transform group-hover:translate-x-0.5" />
          </Link>
        </div>
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-80px' }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-3 lg:gap-5"
        >
          {featured.map((p, i) => (
            <motion.div key={p.slug} variants={fadeUp}>
              <Link
                to={`/projects/${p.slug}`}
                className={`block h-full bg-panel rounded-xl p-5 lg:p-6 border border-transparent hover:border-ember/30 hover:shadow-panel transition-all duration-200 ${
                  i === 0 ? 'lg:p-7' : ''
                }`}
              >
                <div
                  className="h-9 w-9 rounded-xl flex items-center justify-center mb-4 shadow-panel"
                  style={{ backgroundColor: p.iconBg }}
                >
                  <span className="text-[11px] font-medium" style={{ color: p.iconColor }}>
                    {p.name.charAt(0)}
                  </span>
                </div>
                <p className="text-[13px] font-medium text-paper mb-1">{p.name}</p>
                <p className="text-[12px] text-muted leading-5">{p.tagline}</p>
                {i === 0 && (
                  <p className="text-[10px] tracking-wide text-faint mt-3 pt-3 border-t border-line">
                    {p.tag}
                  </p>
                )}
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
