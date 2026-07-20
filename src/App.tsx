import { AnimatePresence, motion, MotionConfig } from 'framer-motion';
import type { ReactNode } from 'react';
import { RouterProvider, useRoute, matchPath } from './router';
import { pageVariants } from './lib/motion';
import Sidebar from './components/Sidebar';
import MobileNav from './components/MobileNav';
import Home from './pages/Home';
import Projects from './pages/Projects';
import ProjectDetail from './pages/ProjectDetail';
import ExperiencePage from './pages/ExperiencePage';
import ContactPage from './pages/ContactPage';
import PublicEngagementPage from './pages/PublicEngagement';

function Routes() {
  const path = useRoute();

  let content: ReactNode;
  if (path === '/' || path === '') content = <Home />;
  else if (path === '/projects') content = <Projects />;
  else if (path === '/experience') content = <ExperiencePage />;
  else if (path === '/contact') content = <ContactPage />;
  else if (path === '/publicEngagement') content = <PublicEngagementPage />;
  else {
    const projectMatch = matchPath('/projects/:slug', path);
    content = projectMatch ? <ProjectDetail slug={projectMatch.slug} /> : <Home />;
  }

  return (
    <AnimatePresence mode="wait" initial={false}>
      <motion.div key={path} variants={pageVariants} initial="initial" animate="animate" exit="exit">
        {content}
      </motion.div>
    </AnimatePresence>
  );
}

export default function App() {
  return (
    <MotionConfig reducedMotion="user">
      <RouterProvider>
        <div className="min-h-screen bg-ink">
          <Sidebar />
          <main className="md:pl-44 lg:pl-52 xl:pl-56 px-6 sm:px-10 md:px-16 lg:px-20 xl:px-24 pb-20 md:pb-0 max-w-content lg:max-w-[1040px] xl:max-w-[1120px] mx-auto">
            <Routes />
          </main>
          <MobileNav />
        </div>
      </RouterProvider>
    </MotionConfig>
  );
}