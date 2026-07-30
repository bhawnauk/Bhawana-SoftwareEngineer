import EngagementImage1 from "./assets/engagement.jpg";

export const profile = {
  name: "Bhawana Yadav",
  initials: "BY",
  role: "Frontend Engineer",
  subline: "Software engineering background, product operations fluency.",
  location: "London, UK",
  email: "bhawnayadav.uk@gmail.com",
  linkedin: "https://www.linkedin.com/in/bhawnayadavuk",
  github:"https://github.com/bhawnauk",
  availability: "Open to Software Engineer or Product roles",
};

export type PublicEngagementItem = {
  period: string;
  company: string;
  role: string;
  location: string;
  highlights: string[];
  image?:string;
};
export const publicEngagement:PublicEngagementItem[] = [
{
  period: "Oct 2021 - Jun 2023",
    company: "Microsoft",
    role: "Microsoft Student Ambassador",
    location: "Kathmandu, Nepal",
    highlights: [
      "Delivered technical workshops on Azure, GitHub and Power Platform",
      "Built demo projects that turned abstract concepts into hands-on tutorials",
      "Organised and ran hackathons end-to-end, coordinating multiple stakeholders",
    ],
    image: EngagementImage1,
},
{
  period: "Jun 2018 - Nov 2019",
    company: "DWIT News",
    role: "News Anchor and Public Speaker",
    location: "Kathmandu, Nepal",
    highlights: [
      "Presented campus, local and international tech news with confident on-screen delivery",
      "Translated complex information into clear stories for a broad audience",
    ],
},
{
  period: "Apr 2018 - Feb 2020",
    company: "DWIT News",
    role: "Article Editor and Proofreader",
    location: "Kathmandu, Nepal",
    highlights: [
      "Reviewed and refined writer submissions for clarity and accuracy",
      "Streamlined editorial workflow, improving turnaround across platforms",
    ],
  },
];




export const heroCopy = {
  eyebrow: "PRODUCT FOCUSED FRONTEND ENGINEER - LONDON",
  headline:
    "I ship the interface, then build the system that keeps it running.",
  body: "4+ years across SaaS engineering and product operations. I've shipped production React/TypeScript features end to end, and built the reporting and process systems that let teams of 10+ run on the data those features produce.",
};

export const currentFocus =
  "Actively working on freelance projects, and exploring new tools and techniques to keep pace with market demand.";

export type Project = {
  slug: string;
  tag: string;
  name: string;
  tagline: string;
  summary: string;
  problem: string;
  approach: string;
  metrics: { label: string; value: string }[];
  stack: string[];
  iconBg: string;
  iconColor: string;
  icon:
    | "code"
    | "chart"
    | "components"
    | "users"
    | "cart"
    | "book"
    | "briefcase"
    | "stethoscope";
    LiveDemo?: string;
    github?: string;
    isPrivateClient?: boolean;
};

export const projects: Project[] = [
  {
    slug: "text-summariser",
    tag: "AI TEXT SUMMARISATION",
    name: "Text Summariser",
    tagline: "Turns long text into a focused summary — fully offline.",
    summary:
      "A full-stack AI text summariser that turns articles, reports, and transcripts into focused summaries, powered entirely by a local LLM via Ollama — no API key or external service required.",
    problem:
      "Long articles, reports, and transcripts take too long to read in full, and most summarisation tools either require sending your text to a third-party API or can't handle documents longer than a single model call.",
    approach:
      "Three independent services split the work by what each language is best at: a FastAPI (Python) processor cleans and chunks incoming text — using spaCy and tiktoken — so documents aren't limited to what fits in one model call; an Express/TypeScript API builds prompts from those chunks and talks to a locally running Ollama model (qwen2.5:1.5b), summarising each chunk individually and combining multi-chunk results into one final pass; and a React/Vite/Tailwind client handles length, tone, and format controls plus drag-and-drop file upload (.txt/.pdf/.docx). Since Ollama needs a persistent process and can't run on serverless platforms, only the client is deployed to Vercel — the API, processor, and Ollama run locally and are exposed via a Cloudflare Tunnel.",
    metrics: [
      { label: "Runs on", value: "Local LLM (Ollama)" },
      { label: "Input limit", value: "2,000 words / ~1,500-token chunks" },
    ],
    stack: ["React", "TypeScript", "Tailwind CSS", "Express", "FastAPI", "Python", "Ollama"],
    iconBg: "#3c3489",
    iconColor: "#AFA9EC",
    icon: "code",
    LiveDemo:"https://text-summarisation.vercel.app/",
    github: "https://github.com/bhawnauk/Text-Summarisation_Project",
  },
  {
    slug: "tech-job-portal",
    tag: "AGGREGATOR",
    name: "Tech Job Portal",
    tagline: "One feed. Every tech role. Zero noise.",
    summary:
      "A job board built for one purpose: strip out everything that isn’t a tech role. It scrapes multiple job sites, normalises wildly different formats into one schema, and serves a single clean, comparable feed, no more tab-hopping between five sites to find the same ten jobs.",
    problem:
      "General job boards bury a handful of relevant tech roles under thousands of unrelated listings, and every site formats things differently, making it slow and mentally taxing to compare roles at all.",
    approach:
      "Python scraping scripts (BeautifulSoup) run on a schedule against each source site, since Python’s parsing libraries handle messy, inconsistent HTML far better than doing the same in JavaScript. Each script normalises its site’s listings into one shared schema and writes them to PostgreSQL. A Node.js API then serves that clean, de-duplicated data to the React front end, the scraping and serving layers stay fully decoupled, so adding a new source site never touches the front end.",
    metrics: [
      { label: "Sources scraped", value: "5+ sites" },
      { label: "Refresh", value: "Scheduled jobs" },
    ],
    stack: [
      "React",
      "TypeScript",
      "Node.js",
      "Python",
      "Web scraping",
      "PostgreSQL",
    ],
    iconBg: "#1a2e40",
    iconColor: "#85B7EB",
    icon: "briefcase",
    github: "https://github.com/bhawnauk/Tech-Job_scraping_portal",
    LiveDemo:"https://tech-job-scraping-portal.vercel.app"
  },
  {
    slug: "book-recommender",
    tag: "RECOMMENDATION ENGINE",
    name: "Book Recommender",
    tagline: "Recommendations that actually get your taste.",
    summary:
      "A recommendation tool that goes beyond star ratings — tell it a book you loved, or a genre and mood, and it surfaces titles that share what actually made that book work, not just ones tagged with the same category.",
    problem:
      "Star ratings and genre tags flatten everything into the same bucket. Two five-star thrillers can have nothing in common tonally, so browsing by rating alone rarely finds you the right next read.",
    approach:
      "The recommendation logic runs as a Python/FastAPI service — computing weighted tag-similarity scores across genre and mood is the kind of numerical, data-shaping work Python's ecosystem is built for. A React/TypeScript frontend (Vite, hand-written CSS) calls this API for a ranked shortlist, with each pick paired to a craft-specific one-line reason. Tag-similarity scoring is deterministic and always runs; when a local LLM (via Ollama) is configured, it optionally re-ranks and re-explains the shortlist for a sharper fit. Kept the UI deliberately fast and low-friction — browse, get a shortlist, save it — since the value is in the quality of the suggestion, not a feature-heavy interface around it.",
    metrics: [
      { label: "Match logic", value: "Weighted tag similarity" },
      { label: "Catalog", value: "30 hand-checked books" },
    ],
    stack: ["React", "TypeScript", "Vite", "FastAPI", "Python"],
    iconBg: "#3c3489",
    iconColor: "#AFA9EC",
    icon: "book",
    LiveDemo:"https://book-recommender-mu-sage.vercel.app",
    github: "https://github.com/bhawnauk/Book-Recommendation-Project",
  }
,  {
    slug: "pickle-co-ecommerce",
    tag: "E-COMMERCE · PAYMENTS",
    name: "Pickle Co. Storefront",
    tagline: "From product page to paid order, no drop-off.",
    summary:
      "A complete online storefront for a small Australian pickle producer, built to take them from zero online presence to accepting real payments, product catalog, cart, and a secure Stripe checkout that customers actually complete.",
    problem:
      "The business needed to sell online but had no infrastructure for it. No catalog, no cart, no way to safely take a customer’s card details, and no confirmation flow once an order was placed.",
    approach:
      "Built the full purchase path in React/TypeScript: browsing, cart state that persists as customers shop, and a Stripe-integrated checkout handling real payment processing. The front end talks to a GraphQL API rather than REST, so a product card, the cart, and the checkout summary each request exactly the fields they need in one round trip, no over-fetching a full product record just to show a thumbnail and price. Order confirmation fires on successful payment, not on form submission, so the business only sees orders that were actually paid for.",
    metrics: [
      { label: "Payments", value: "Stripe integration" },
      { label: "Flow", value: "Catalog → cart → checkout" },
    ],
    stack: ["React", "TypeScript", "Tailwind", "GraphQL", "Stripe", "Node.js"],
    iconBg: "#253d1f",
    iconColor: "#97C459",
    icon: "cart",
    LiveDemo:"https://full-stack-ecommerce-shop-with-stri.vercel.app",
    github:"https://github.com/bhawnauk/Full-Stack-Ecommerce-shop-with-Stripe-payment"
  },
  {
    slug: "patient-management-system",
    tag: "HEALTHCARE · INTERNAL TOOL",
    name: "Patient Management System",
    tagline: "Replaced spreadsheets with a system the clinic can trust.",
    summary:
      "An internal system for a small Australian medical practice that replaced scattered spreadsheets and paper records with one shared, searchable source of truth for patient records, appointments, and clinical notes.",
    problem:
      "Reception and clinicians were working from disconnected spreadsheets and paper files with no shared record, no reliable way to see a patient’s history at a glance, and real risk of information falling through the cracks.",
    approach:
      "Designed role-based access so reception and clinicians see exactly what their role needs like patient records, appointment scheduling, and note-taking which is backed by a structured PostgreSQL database. Used GraphQL for the API layer specifically because access here is role-sensitive: a single schema lets reception’s queries resolve only booking and contact fields, while clinicians’ queries resolve clinical notes and history, without maintaining separate REST endpoints per role. Prioritised data integrity and access control from the start, since this is healthcare data, not a toy dataset.",
    metrics: [
      { label: "Access", value: "Role-based" },
      { label: "Core flows", value: "Records, scheduling, notes" },
    ],
    stack: [
      "React",
      "TypeScript",
      "Tailwind",
      "GraphQL",
      "Node.js",
      "PostgreSQL",
    ],
    iconBg: "#4A1B0C",
    iconColor: "#F0997B",
    icon: "stethoscope",
    isPrivateClient: true,
  },
];

export type ExperienceItem = {
  period: string;
  company: string;
  role: string;
  location: string;
  highlights: string[];
};

export const experience: ExperienceItem[] = [
  {
    period: "Oct 2024 - Present",
    company: "The Bull Group",
    role: "Operations Coordinator",
    location: "Greater London",
    highlights: [
      "Led data, process and people operations across 10+ hospitality venues",
      "Built Excel automation cutting manual reporting time by 60%",
      "Designed KPI dashboards for staffing, procurement and strategy decisions",
    ],
  },
  {
    period: "Apr 2024 - Sep 2024",
    company: "TGP International",
    role: "Strategy and Planning Intern",
    location: "Greater London",
    highlights: [
      "Shipped user-facing features on a React/TypeScript SaaS product",
      "Built reusable UI components following atomic design principles",
      "Wrote unit tests with Jest and React Testing Library",
    ],
  },
  {
    period: "Mar 2020 - Aug 2023",
    company: "Try Catch IT Services Pvt Ltd",
    role: "Software Engineer & Technical Lead",
    location: "Kathmandu, Nepal",
    highlights: [
      "Led end-to-end delivery of React/TypeScript SaaS products",
      "Architected reusable component systems, improving development velocity",
      "Strengthened CI/CD pipelines and mentored junior engineers",
    ],
  },
  {
    period: "Apr 2019 - Mar 2020",
    company: "Deerhold Ltd.",
    role: "Software Developer Fellow",
    location: "Kathmandu, Nepal",
    highlights: [
      "Developed React SPA features with modern JavaScript (ES6+)",
      "Built accessible, responsive UI components following WCAG guidelines",
    ],
  },
];

export type SkillCategory = {
  label: string;
  items: string[];
  icon: "components" | "server" | "link" | "database" | "layers" | "sparkles" | "creditcard" | "shield" | "tool" | "briefcase";
  iconBg: string;
  iconColor: string;
};

export const topSkills = ["React", "TypeScript", "Node.js", "GraphQL", "PostgreSQL"];

export const skillCategories: SkillCategory[] = [
  {
    label: "Frontend",
    items: ["React", "TypeScript", "Vite", "Tailwind CSS", "React Router", "React Hook Form", "Framer Motion"],
    icon: "components",
    iconBg: "#3c3489",
    iconColor: "#AFA9EC",
  },
  {
    label: "Backend",
    items: ["Node.js", "Express", "Python", "FastAPI", "Pydantic"],
    icon: "server",
    iconBg: "#1a2e40",
    iconColor: "#85B7EB",
  },
  {
    label: "API design",
    items: ["REST API design", "GraphQL"],
    icon: "link",
    iconBg: "#3c3489",
    iconColor: "#AFA9EC",
  },
  {
    label: "Databases",
    items: ["PostgreSQL"],
    icon: "database",
    iconBg: "#1a2e40",
    iconColor: "#85B7EB",
  },
  {
    label: "Data engineering / scraping",
    items: ["BeautifulSoup", "Web scraping", "ETL / data normalisation", "Scheduled jobs"],
    icon: "layers",
    iconBg: "#253d1f",
    iconColor: "#97C459",
  },
  {
    label: "AI / LLM",
    items: ["Local LLM integration (Ollama)", "spaCy", "tiktoken", "Prompt engineering"],
    icon: "sparkles",
    iconBg: "#4A1B0C",
    iconColor: "#F0997B",
  },
  {
    label: "Payments & third-party integration",
    items: ["Stripe API"],
    icon: "creditcard",
    iconBg: "#253d1f",
    iconColor: "#97C459",
  },
  {
    label: "Security / access control",
    items: ["Role-based access control (RBAC)", "Zod (schema validation)", "Helmet", "Rate limiting"],
    icon: "shield",
    iconBg: "#4A1B0C",
    iconColor: "#F0997B",
  },
  {
    label: "Other",
    items: ["Git", "Cloudflare Tunnel", "httpx"],
    icon: "tool",
    iconBg: "#1a2e40",
    iconColor: "#85B7EB",
  },
];

export const skills = {
  operations: [
    "Product Operations",
    "Stakeholder Management",
    "Agile Methodologies",
    "KPI Dashboards",
    "Process Design",
  ],
};

export const operationsCategory: SkillCategory = {
  label: "Operations",
  items: skills.operations,
  icon: "briefcase",
  iconBg: "#3c3489",
  iconColor: "#AFA9EC",
};

export const certifications = [
  "Agile Scrum Master (ASM®)",
  "Google Project Management Certificate",
  "Alpha-level Microsoft Student Partner",
];

export const education = [
  {
    school: "University of Greenwich",
    degree: "Master's degree, Computing and Information Systems",
    period: "Sep 2023 - Oct 2024",
  },
  {
    school: "Deerwalk Institute of Technology",
    degree: "Bachelor's degree, Computer Science and Information Technology",
    period: "2017 - 2021",
  },
];
