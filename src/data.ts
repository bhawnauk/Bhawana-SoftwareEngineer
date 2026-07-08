import EngagementImage1 from "./assets/engagement.jpg";

export const profile = {
  name: "Bhawana Yadav",
  initials: "BY",
  role: "Frontend Engineer",
  subline: "Software engineering background, product operations fluency.",
  location: "London, UK",
  email: "bhawnayadav.uk@gmail.com",
  linkedin: "https://www.linkedin.com/in/bhawnayadavuk",
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
};

export const projects: Project[] = [
  {
    slug: "text-summariser",
    tag: "AI TOOL",
    name: "Text Summariser",
    tagline: "Cut a 10-minute read down to 30 seconds.",
    summary:
      "An AI-powered summarisation tool that takes any article, report or transcript and returns a tight, accurate summary in seconds with full control over length and tone, so you get the gist without losing what matters.",
    problem:
      "Reading everything in full doesn’t scale. People end up either skimming and missing key points, or reading the whole thing and losing an hour they didn’t have.",
    approach:
      "Built a React/TypeScript front end backed by a Node API that orchestrates requests to an LLM for summarisation. A Python service sits in front of that call to clean and chunk long input by splitting oversized documents into sentence-safe segments so nothing gets cut mid-sentence or exceeds the model’s context window. Designed the UX around trust: adjustable summary length, clear loading and error states, and no silent failures on slow or malformed input, the details that separate a working demo from something people would actually rely on.",
    metrics: [
      { label: "Summary length", value: "Adjustable" },
      { label: "Avg response", value: "~3s" },
    ],
    stack: ["React", "TypeScript", "Tailwind", "Node.js", "Python", "LLM API"],
    iconBg: "#4A1B0C",
    iconColor: "#F0997B",
    icon: "code",
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
  },
  {
    slug: "book-recommender",
    tag: "RECOMMENDATION ENGINE",
    name: "Book Recommender",
    tagline: "Recommendations that actually get your taste.",
    summary:
      "A recommendation tool that goes beyond star ratings and tells you a book you loved, or a genre and mood, and it surfaces titles that actually share what made that book work, not just ones tagged with the same category.",
    problem:
      "Star ratings and genre tags flatten everything into the same bucket. Two five-star thrillers can have nothing in common tonally, so browsing by rating alone rarely finds you the right next read.",
    approach:
      "The recommendation logic itself is a Python service - computing similarity scores across genre, mood tags, and comparable titles is the kind of numerical, data-shaping work Python’s ecosystem is built for. It exposes a small API that the React/TypeScript front end calls for a ranked shortlist, paired with the Open Library API for book metadata and covers. Kept the UI deliberately fast and low-friction-browse, get a shortlist, save it. Since the value is in the quality of the suggestion, not a feature-heavy interface around it.",
    metrics: [
      { label: "Match logic", value: "Genre + similarity" },
      { label: "Data source", value: "Open Library API" },
    ],
    stack: ["React", "TypeScript", "Tailwind", "Python", "Open Library API"],
    iconBg: "#3c3489",
    iconColor: "#AFA9EC",
    icon: "book",
  },
  {
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

export const skills = {
  engineering: [
    "React",
    "TypeScript",
    "Tailwind CSS",
    "Jest",
    "React Testing Library",
    "REST APIs",
    "GitHub Actions",
    "Jenkins",
    "Atomic design",
  ],
  operations: [
    "Product Operations",
    "Stakeholder Management",
    "Agile Methodologies",
    "KPI Dashboards",
    "Process Design",
  ],
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
