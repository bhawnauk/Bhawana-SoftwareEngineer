import { motion } from 'framer-motion';
import { Link, useRoute, isActivePath } from '../router';
import { IconHome, IconBriefcase, IconComponents, IconUsers, IconMail } from './Icons';

const pages = [
  { to: '/', label: 'Home', icon: IconHome },
  { to: '/experience', label: 'Experience', icon: IconBriefcase },
  { to: '/projects', label: 'Projects', icon: IconComponents },
  { to: '/publicEngagement', label: 'Beyond', icon: IconUsers },
  { to: '/contact', label: 'Contact', icon: IconMail },
];

export default function MobileNav() {
  const path = useRoute();

  return (
    <nav
      aria-label="Page navigation"
      className="md:hidden fixed bottom-0 left-0 right-0 border-t border-line bg-ink z-20 flex py-1.5"
    >
      {pages.map(({ to, label, icon: Icon }) => {
        const active = isActivePath(path, to, to === '/');
        return (
          <Link
            key={to}
            to={to}
            className="relative flex-1 flex flex-col items-center justify-center gap-1 py-1.5 min-w-0"
          >
            {active && (
              <motion.span
                layoutId="mobile-active-dot"
                className="absolute -top-0.5 left-1/2 -translate-x-1/2 h-1 w-1 rounded-full bg-ember"
                transition={{ type: 'spring', stiffness: 500, damping: 35 }}
              />
            )}
            <Icon className={`h-[18px] w-[18px] shrink-0 ${active ? 'text-ember-soft' : 'text-faint'}`} />
            <span className={`text-[10px] leading-none truncate max-w-full ${active ? 'text-ember-soft' : 'text-faint'}`}>
              {label}
            </span>
          </Link>
        );
      })}
    </nav>
  );
}