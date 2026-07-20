import { motion } from 'framer-motion';
import { publicEngagement } from '../data';
import { fadeUp, staggerContainer } from '../lib/motion';

export default function PublicEngagement() {
  return (
    <section>
      <p className="text-xs tracking-wide text-ember mb-2">LEADERSHIP AND PUBLIC ENGAGEMENT</p>
      <h2 className="font-display text-xl md:text-2xl text-paper mb-8 max-w-[520px]">
        From on-camera to in-code leadership, either way, is translating complexity.
      </h2>

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: '-100px' }}
        className="flex flex-col gap-4"
      >
        {publicEngagement.map((item) => (
          <motion.div
            key={`${item.company}-${item.period}`}
            variants={fadeUp}
            className={`bg-panel rounded-xl p-6 border border-transparent hover:border-ember/30 hover:shadow-panel transition-all duration-200 ${item.image ? 'sm:grid sm:grid-cols-[1fr_140px] sm:gap-5' : ''}`}
          >
            <div className='cursor-pointer'>
              <span className="inline-flex font-mono text-xs text-faint bg-ink px-2 py-1 rounded-full mb-3">{item.period}</span>
              <div className="flex items-baseline gap-2 flex-wrap mb-2">
                <h3 className="text-sm font-medium text-paper">{item.role}</h3>
                <span className="text-xs text-muted"> @ {item.company}</span>
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
            {item.image && (
              <img
                src={item.image}
                alt={`${item.role} at ${item.company}`}
                className="hidden sm:block w-full h-full rounded-lg object-cover"
              />
            )}
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
