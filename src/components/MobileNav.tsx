import { motion } from 'framer-motion';
import { Link, useRoute, isActivePath } from '../router';

const pages = [
    { to: '/', label: 'Home' },
  { to: '/experience', label: 'Skills & Experiences' },
  { to: '/projects', label: 'Projects' },
  { to: '/publicEngagement', label: 'Beyond the Code' },
  { to: '/contact', label: 'Contact' },
];

export default function MobileNav() {
  const path = useRoute();

  return (
    <nav
      aria-label="Page navigation"
      className="md:hidden fixed bottom-0 left-0 right-0 border-t border-line bg-ink z-20 flex justify-around py-3"
    >
      {pages.map(({ to, label }) => {
        const active = isActivePath(path, to, to === '/');
        return (
          <Link key={to} to={to} className="relative text-xs px-2 py-1">
            {active && (
              <motion.span
                layoutId="mobile-active-dot"
                className="absolute -top-1 left-1/2 -translate-x-1/2 h-1 w-1 rounded-full bg-ember"
                transition={{ type: 'spring', stiffness: 500, damping: 35 }}
              />
            )}
            <span className={active ? 'text-ember-soft' : 'text-faint'}>{label}</span>
          </Link>
        );
      })}
    </nav>
  );
}