import { motion } from 'framer-motion';
import { profile } from '../data';
import { IconMail, IconLinkedin, IconArrow,IconGithub } from './Icons';
import { fadeUp } from '../lib/motion';

export default function Contact() {
  return (
    <motion.section
      variants={fadeUp}
      initial="hidden"
      animate="show"
      className="lg:grid lg:grid-cols-[1fr_auto] lg:items-end lg:gap-12"
    >
      <div>
        <p className="text-md tracking-wide text-ember mb-2">CONTACT</p>
        <h2 className="font-display text-xl md:text-[28px] text-paper max-w-[440px] mb-8 lg:mb-0 leading-[1.35]">
          Contact me via email or linkedIn.
        </h2>
      </div>

      <div className="bg-panel rounded-xl p-6 shadow-panel lg:w-[280px] flex flex-col gap-3">
        <a
          href={`mailto:${profile.email}`}
          className="group inline-flex items-center justify-center gap-2 bg-ember text-ember-deep text-sm font-medium px-4 py-2.5 rounded-lg hover:bg-ember-soft transition-colors"
        >
          <IconMail className="h-4 w-4" />
          Email me
          <IconArrow className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
        </a>

        <a
          href={profile.linkedin}
          target="_blank"
          rel="noreferrer"
          className="text-xs px-3 py-2 rounded-lg bg-ink text-muted flex items-center justify-center gap-1.5 hover:text-paper transition-colors"
        >
          <IconLinkedin className="h-3.5 w-3.5" />
          Connect on LinkedIn
        </a>

        <a
          href={profile.github}
          target="_blank"
          rel="noreferrer"
          className="text-xs px-3 py-2 rounded-lg bg-ink text-muted flex items-center justify-center gap-1.5 hover:text-paper transition-colors"
        >
          <IconGithub className="h-3.5 w-3.5" />
          Connect on GitHub
        </a>

        <p className="text-xs text-faint mt-4 text-center lg:col-span-2 pt-2 border-t border-line">
          {profile.name} · {profile.location}
        </p>
      </div>
    </motion.section>
  );
}
