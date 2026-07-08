import { profile } from '../data';
import { IconMail, IconLinkedin, IconArrow } from './Icons';

export default function Contact() {
  return (
    <section>
      <p className="text-xs tracking-wide text-ember mb-2">CONTACT</p>
      <h2 className="font-display text-2xl text-paper max-w-[440px] mb-8 leading-[1.35]">
        Please contact me via email or linkedIn.
      </h2>

      <a
        href={`mailto:${profile.email}`}
        className="group inline-flex items-center gap-3 text-base text-paper mb-6"
      >
        <IconMail className="h-4 w-4 text-ember-soft" />
        {profile.email}
        <IconArrow className="h-4 w-4 text-ember-soft opacity-0 -translate-x-1 transition-all group-hover:opacity-100 group-hover:translate-x-0" />
      </a>

      <div className="flex gap-3">
        {/* <a
          href={profile.github}
          target="_blank"
          rel="noreferrer"
          className="text-xs px-3 py-1.5 rounded-full bg-panel text-muted flex items-center gap-1.5 hover:text-paper transition-colors"
        >
          <IconGithub className="h-3.5 w-3.5" />
          GitHub
        </a> */}
        <a
          href={profile.linkedin}
          target="_blank"
          rel="noreferrer"
          className="text-xs px-3 py-1.5 rounded-full bg-panel text-muted flex items-center gap-1.5 hover:text-paper transition-colors"
        >
          <IconLinkedin className="h-3.5 w-3.5" />
          LinkedIn
        </a>
      </div>

      <p className="text-xs text-faint mt-16 pt-6 border-t border-line">
        {profile.name} · {profile.location}
      </p>
    </section>
  );
}