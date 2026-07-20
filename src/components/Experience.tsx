import { motion } from 'framer-motion';
import { experience, skills, certifications, education } from '../data';
import { fadeUp, staggerContainer } from '../lib/motion';

export default function Experience() {
  return (
    <section>
      <p className="text-xs tracking-wide text-ember mb-2">EXPERIENCE</p>
      <h2 className="font-display text-2xl md:text-[28px] text-paper mb-8">Six years, five roles, one throughline.</h2>

      <motion.ol
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: '-100px' }}
        className="relative flex flex-col border-l border-line pl-6"
      >
        {experience.map((item) => {
          const isCurrent = item.period.includes('Present');
          return (
          <motion.li
            key={item.company}
            variants={fadeUp}
            className="relative grid grid-cols-[100px_1fr] lg:grid-cols-[140px_1fr] gap-6 lg:gap-10 py-5 first:pt-0"
          >
            <span
              className={`absolute -left-[29px] top-6 h-2 w-2 rounded-full bg-ember ${isCurrent ? 'ring-4 ring-ember/20' : ''}`}
            />
            <p className="font-mono text-xs text-faint pt-0.5">{item.period}</p>
            <div>
              <div className="flex items-baseline gap-2 flex-wrap mb-2">
                <h3 className="text-sm font-medium text-paper">{item.role}</h3>
                <span className="text-xs text-muted"> @ {item.company}</span>
                {isCurrent && (
                  <span className="text-[10px] tracking-wide text-ember bg-ember/10 px-2 py-0.5 rounded-full">CURRENT</span>
                )}
              </div>
              <ul className="flex flex-col gap-1.5">
                {item.highlights.map((h) => (
                  <li key={h} className="text-[13px] leading-6 text-muted flex gap-2">
                    <span className="mt-2 h-1 w-1 rounded-full bg-ember-soft shrink-0" />
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.li>
          );
        })}
      </motion.ol>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-14 mt-12 pt-10 border-t border-line">
        <div>
          <p className="text-xs text-ember  mb-3">ENGINEERING</p>
          <div className="flex flex-wrap gap-1.5">
            {skills.engineering.map((s) => (
              <span key={s} className="text-[11px] px-2.5 py-1 rounded-full bg-panel text-muted">
                {s}
              </span>
            ))}
          </div>
        </div>
        <div>
          <p className="text-xs text-ember  mb-3">OPERATIONS</p>
          <div className="flex flex-wrap gap-1.5">
            {skills.operations.map((s) => (
              <span key={s} className="text-[11px] px-2.5 py-1 rounded-full bg-panel text-muted">
                {s}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-14 mt-10">
        <div>
          <p className="text-xs text-ember  mb-3">CERTIFICATIONS</p>
          <ul className="flex flex-col gap-1.5">
            {certifications.map((c) => (
              <li key={c} className="text-[13px] text-muted">{c}</li>
            ))}
          </ul>
        </div>
        <div>
          <p className="text-xs text-ember  mb-3">EDUCATION</p>
          <ul className="flex flex-col gap-2">
            {education.map((e) => (
              <li key={e.school} className="text-[13px] text-muted">
                <span className="text-paper">{e.school}</span> — {e.degree}
                <br />
                <span className="font-mono text-faint text-xs">{e.period}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
