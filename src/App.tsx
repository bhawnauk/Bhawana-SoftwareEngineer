import { RouterProvider, useRoute, matchPath } from './router';
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

  if (path === '/' || path === '') return <Home />;
  if (path === '/projects') return <Projects />;
  const projectMatch = matchPath('/projects/:slug', path);
  if (projectMatch) return <ProjectDetail slug={projectMatch.slug} />;
  if (path === '/experience') return <ExperiencePage />;
  if (path === '/contact') return <ContactPage />;
  if(path=='/publicEngagement') return <PublicEngagementPage />;

  return <Home />;
}

export default function App() {
  return (
    <RouterProvider>
      <div className="min-h-screen bg-ink">
        <Sidebar />
        <main className="md:pl-44 px-6 sm:px-10 md:px-16 pb-20 md:pb-0 max-w-content mx-auto">
          <Routes />
        </main>
        <MobileNav />
      </div>
    </RouterProvider>
  );
}