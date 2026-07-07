import { createContext, useContext, useEffect, useState, type ReactNode, type AnchorHTMLAttributes } from 'react';

function getPath(): string {
  const hash = window.location.hash.replace(/^#/, '');
  return hash || '/';
}

const RouteContext = createContext<string>('/');

export function RouterProvider({ children }: { children: ReactNode }) {
  const [path, setPath] = useState(getPath());

  useEffect(() => {
    const onHashChange = () => setPath(getPath());
    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, []);

  return <RouteContext.Provider value={path}>{children}</RouteContext.Provider>;
}

export function useRoute(): string {
  return useContext(RouteContext);
}

type LinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & { to: string };

export function Link({ to, children, ...rest }: LinkProps) {
  return (
    <a href={`#${to}`} {...rest}>
      {children}
    </a>
  );
}

export function isActivePath(current: string, target: string, exact = false): boolean {
  if (exact) return current === target;
  return current === target || current.startsWith(`${target}/`);
}

// Matches "/projects/:slug" style patterns against the current path.
export function matchPath(pattern: string, path: string): Record<string, string> | null {
  const patternParts = pattern.split('/').filter(Boolean);
  const pathParts = path.split('/').filter(Boolean);
  if (patternParts.length !== pathParts.length) return null;

  const params: Record<string, string> = {};
  for (let i = 0; i < patternParts.length; i++) {
    const p = patternParts[i];
    const v = pathParts[i];
    if (p.startsWith(':')) {
      params[p.slice(1)] = decodeURIComponent(v);
    } else if (p !== v) {
      return null;
    }
  }
  return params;
}