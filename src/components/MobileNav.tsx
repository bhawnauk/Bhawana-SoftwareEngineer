import { Link, useRoute, isActivePath } from '../router';

const pages = [
  { to: '/', label: 'Home' },
  { to: '/projects', label: 'Projects' },
  { to: '/experience', label: 'Experience' },
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
          <Link key={to} to={to} className={`text-xs px-2 py-1 ${active ? 'text-ember-soft' : 'text-faint'}`}>
            {label}
          </Link>
        );
      })}
    </nav>
  );
}