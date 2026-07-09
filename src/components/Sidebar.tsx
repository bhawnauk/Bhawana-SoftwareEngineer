import { Link, useRoute, isActivePath } from '../router';
import { profile } from '../data';
import {  IconLinkedin } from './Icons';

const pages = [
  { to: '/', label: 'Home' },
  { to: '/experience', label: 'Skills & Experiences' },
  { to: '/projects', label: 'Projects' },
  { to: '/publicEngagement', label: 'Beyond the Code' },
  { to: '/contact', label: 'Contact' },
];

export default function Sidebar() {
  const path = useRoute();

  return (
    <nav
      aria-label="Page navigation"
      className="hidden md:flex fixed left-0 top-0 h-full max-w-content flex-col justify-between border-r border-line py-6 px-5 z-20"
    >
      <Link
        to="/"
        className="flex items-center gap-2.5"
        aria-label={`${profile.name}, home`}
      >
        <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-ember text-[11px] font-medium text-ember-deep">
          {profile.initials}
        </span>
        <span className="text-[13px] font-medium text-paper truncate">{profile.name}</span>
      </Link>

      <ul className="flex flex-col gap-1">
        {pages.map(({ to, label }) => {
          const active = isActivePath(path, to, to === '/');
          return (
            <li key={to}>
              <Link
                to={to}
                className="group flex items-center gap-2.5 rounded-md px-2 py-1.5 -mx-2 transition-colors hover:bg-panel"
              >
                <span
                  className={`block h-1.5 w-1.5 shrink-0 rounded-full transition-colors ${
                    active ? 'bg-ember' : 'bg-line group-hover:bg-faint'
                  }`}
                />
                <span
                  className={`text-[13px] transition-colors ${
                    active ? 'text-paper' : 'text-faint group-hover:text-muted'
                  }`}
                >
                  {label}
                </span>
              </Link>
            </li>
          );
        })}
      </ul>

      <div className="flex items-center gap-4">
        {/* <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub">
          <IconGithub className="h-4 w-4 text-muted hover:text-paper transition-colors" />
        </a> */}
        <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
          <IconLinkedin className="h-8 w-8  hover:text-sky-950 transition-colors" />
        </a>
      </div>
    </nav>
  );
}