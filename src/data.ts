import EngagementImage1 from "./assets/engagement.jpg";

/* =========================================================
   PROFILE
========================================================= */

export const profile = {
  name: "Bhawana Yadav",
  initials: "BY",
  role: "Full-Stack Software Engineer",
  subline:
    "Software engineering background with data, analytics and operations experience.",
  location: "London, UK",
  email: "bhawnayadav.uk@gmail.com",
  linkedin: "https://www.linkedin.com/in/bhawnayadavuk",
  github: "https://github.com/bhawnauk",
  availability:
    "Open to Software Engineering, Data/BI and Technical Systems roles",
};


/* =========================================================
   PUBLIC ENGAGEMENT
========================================================= */

export type PublicEngagementItem = {
  period: string;
  company: string;
  role: string;
  location: string;
  highlights: string[];
  image?: string;
};

export const publicEngagement: PublicEngagementItem[] = [
  {
    period: "Oct 2021 - Jun 2023",
    company: "Microsoft",
    role: "Microsoft Learn Student Ambassador",
    location: "Kathmandu, Nepal",
    highlights: [
      "Delivered technical workshops and webinars covering Azure, GitHub and Power Platform",
      "Built practical demonstrations and tutorials for technical and non-technical audiences",
      "Organised hackathons end to end, coordinating participants and stakeholders",
      "Recognised at Alpha Level within the Microsoft Learn Student Ambassador programme",
    ],
    image: EngagementImage1,
  },
  {
    period: "Apr 2018 - Feb 2020",
    company: "DWIT News",
    role: "Editor, Writer and News Anchor",
    location: "Kathmandu, Nepal",
    highlights: [
      "Presented campus, local and technology news to a broad audience",
      "Translated complex topics into clear and accessible stories",
      "Edited and reviewed articles for accuracy, clarity and editorial quality",
      "Supported improvements to editorial workflows and content turnaround",
    ],
  },
];


/* =========================================================
   HERO
========================================================= */

export const heroCopy = {
  eyebrow: "FULL-STACK SOFTWARE ENGINEER · DATA & AUTOMATION · LONDON",

  headline:
    "I build software, data systems and automation that solve real business problems.",

  body:
    "4+ years across SaaS engineering, full-stack development and data-driven operations. I have shipped React and TypeScript applications end to end, built Node.js and Python services, worked with PostgreSQL and APIs, and created reporting and automation systems used in day-to-day business decisions.",
};

export const currentFocus =
  "Currently building full-stack, data and AI projects while deepening my experience in scalable backend systems, automation and applied AI.";


/* =========================================================
   PROJECT TYPES
========================================================= */

export type Project = {
  slug: string;
  tag: string;
  name: string;
  tagline: string;
  summary: string;
  problem: string;
  approach: string;

  metrics: {
    label: string;
    value: string;
  }[];

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


/* =========================================================
   PROJECTS
========================================================= */

export const projects: Project[] = [

  /* -------------------------------------------------------
     PATIENT MANAGEMENT SYSTEM
  ------------------------------------------------------- */

  {
    slug: "patient-management-system",

    tag: "HEALTHCARE · FULL-STACK SYSTEM",

    name: "Patient Management System",

    tagline:
      "A role-based clinical system for managing patient records, appointments and notes.",

    summary:
      "A full-stack patient management system built for a small Australian medical practice to centralise patient information, appointment scheduling and clinical records in one structured application.",

    problem:
      "Patient information was spread across disconnected spreadsheets and paper-based processes, making it difficult for reception and clinical staff to access consistent records and understand a patient's history in one place.",

    approach:
      "Designed a role-based application using React and TypeScript on the frontend, Node.js and GraphQL for the API layer, and PostgreSQL for structured data storage. Role-based access separates reception workflows such as bookings and contact information from clinician access to clinical notes and patient history. The system was designed around data integrity, controlled access and clear workflows for different user groups.",

    metrics: [
      {
        label: "Access model",
        value: "Role-based permissions",
      },
      {
        label: "Core workflows",
        value: "Records · Appointments · Clinical notes",
      },
    ],

    stack: [
      "React",
      "TypeScript",
      "Node.js",
      "GraphQL",
      "PostgreSQL",
      "RBAC",
    ],

    iconBg: "#4A1B0C",
    iconColor: "#F0997B",
    icon: "stethoscope",

    isPrivateClient: true,
  },


  /* -------------------------------------------------------
     TECH JOB AGGREGATOR
  ------------------------------------------------------- */

  {
    slug: "tech-job-portal",

    tag: "DATA PIPELINE · FULL-STACK APPLICATION",

    name: "Tech Job Aggregation Platform",

    tagline:
      "A scheduled data pipeline that turns listings from multiple sources into one structured feed.",

    summary:
      "A full-stack job aggregation platform that collects technology vacancies from multiple sources, normalises inconsistent listing formats and serves the resulting data through a searchable web application.",

    problem:
      "Technology vacancies are distributed across multiple job boards with inconsistent structures, duplicated listings and different field formats, making relevant roles difficult to collect and compare efficiently.",

    approach:
      "Built Python scraping pipelines using BeautifulSoup to extract listings from multiple sources and transform them into a shared schema. Normalised data is stored in PostgreSQL and refreshed through scheduled jobs. A Node.js API exposes the structured dataset to a React and TypeScript frontend. Keeping ingestion, storage, API and presentation layers separate allows additional data sources to be introduced without changing the frontend architecture.",

    metrics: [
      {
        label: "Data sources",
        value: "5+ job sites",
      },
      {
        label: "Pipeline",
        value: "Scheduled ingestion & normalisation",
      },
    ],

    stack: [
      "React",
      "TypeScript",
      "Node.js",
      "Python",
      "BeautifulSoup",
      "PostgreSQL",
    ],

    iconBg: "#1a2e40",
    iconColor: "#85B7EB",
    icon: "briefcase",

    github:
      "https://github.com/bhawnauk/Tech-Job_scraping_portal",

    LiveDemo:
      "https://tech-job-scraping-portal.vercel.app",
  },


  /* -------------------------------------------------------
     AI TEXT SUMMARISER
  ------------------------------------------------------- */

  {
    slug: "text-summariser",

    tag: "GENERATIVE AI · FULL-STACK",

    name: "Local AI Text Summariser",

    tagline:
      "A multi-service summarisation application powered by a locally hosted LLM.",

    summary:
      "A full-stack AI application for summarising articles, reports and documents using a locally hosted language model, allowing text processing without relying on an external LLM API.",

    problem:
      "Long documents can exceed the amount of text that can be handled effectively in a single model request, while cloud-based summarisation tools require content to be sent to third-party services.",

    approach:
      "Designed the application as three separate services. A Python and FastAPI processor cleans and chunks incoming text using spaCy and tiktoken. An Express and TypeScript API manages prompts, sends chunks to a locally hosted Ollama model and combines intermediate summaries into a final result. A React and TypeScript client provides file upload and controls for summary length, tone and output format. The frontend is deployed separately while the model and processing services run locally.",

    metrics: [
      {
        label: "Architecture",
        value: "3 independent services",
      },
      {
        label: "Inference",
        value: "Local LLM via Ollama",
      },
    ],

    stack: [
      "React",
      "TypeScript",
      "Express",
      "FastAPI",
      "Python",
      "Ollama",
      "spaCy",
      "tiktoken",
    ],

    iconBg: "#3c3489",
    iconColor: "#AFA9EC",
    icon: "code",

    LiveDemo:
      "https://text-summarisation.vercel.app/",

    github:
      "https://github.com/bhawnauk/Text-Summarisation_Project",
  },


  /* -------------------------------------------------------
     E-COMMERCE
  ------------------------------------------------------- */

  {
    slug: "pickle-co-ecommerce",

    tag: "E-COMMERCE · PAYMENTS",

    name: "Pickle Co. E-commerce Storefront",

    tagline:
      "A full-stack storefront with product, cart and payment workflows.",

    summary:
      "An e-commerce application created for a small Australian food business, covering product browsing, persistent cart state, checkout and Stripe payment processing.",

    problem:
      "The business needed an online sales channel but did not have a product catalogue, shopping-cart workflow or secure mechanism for accepting online payments.",

    approach:
      "Built the customer journey using React and TypeScript, including product browsing, persistent cart state and checkout. Integrated Stripe for payment processing and used a GraphQL API so different parts of the interface can request only the product and order fields they require. Order confirmation is triggered after successful payment rather than form submission, keeping the application state aligned with completed transactions.",

    metrics: [
      {
        label: "Payments",
        value: "Stripe integration",
      },
      {
        label: "Customer flow",
        value: "Catalogue → Cart → Checkout",
      },
    ],

    stack: [
      "React",
      "TypeScript",
      "Node.js",
      "GraphQL",
      "Stripe",
    ],

    iconBg: "#253d1f",
    iconColor: "#97C459",
    icon: "cart",

    LiveDemo:
      "https://full-stack-ecommerce-shop-with-stri.vercel.app",

    github:
      "https://github.com/bhawnauk/Full-Stack-Ecommerce-shop-with-Stripe-payment",
  },


  /* -------------------------------------------------------
     BOOK RECOMMENDER
  ------------------------------------------------------- */

  {
    slug: "book-recommender",

    tag: "RECOMMENDATION SYSTEM · AI",

    name: "Book Recommendation Engine",

    tagline:
      "A recommendation prototype combining deterministic similarity scoring with optional LLM reranking.",

    summary:
      "A recommendation-system prototype that ranks books using weighted similarity across genre and mood attributes, with optional local-LLM reranking and explanation generation.",

    problem:
      "Simple rating- or genre-based recommendation approaches can treat books with very different styles as equivalent. The project explores whether multiple content attributes can produce more relevant and explainable recommendations.",

    approach:
      "Implemented the recommendation logic as a Python and FastAPI service that calculates weighted similarity scores across structured genre and mood attributes. A React and TypeScript frontend sends user preferences to the API and presents a ranked shortlist with an explanation for each recommendation. The deterministic ranking works independently, while a locally hosted Ollama model can optionally rerank results and refine the explanations.",

    metrics: [
      {
        label: "Ranking method",
        value: "Weighted content similarity",
      },
      {
        label: "Prototype dataset",
        value: "30 curated books",
      },
    ],

    stack: [
      "React",
      "TypeScript",
      "FastAPI",
      "Python",
      "Ollama",
    ],

    iconBg: "#3c3489",
    iconColor: "#AFA9EC",
    icon: "book",

    LiveDemo:
      "https://book-recommender-mu-sage.vercel.app",

    github:
      "https://github.com/bhawnauk/Book-Recommendation-Project",
  },
];


/* =========================================================
   EXPERIENCE TYPES
========================================================= */

export type ExperienceItem = {
  period: string;
  company: string;
  role: string;
  location: string;
  highlights: string[];
};


/* =========================================================
   EXPERIENCE
========================================================= */

export const experience: ExperienceItem[] = [

  /* -------------------------------------------------------
     THE BULL GROUP
  ------------------------------------------------------- */

  {
    period: "Oct 2024 - Present",

    company: "The Bull Group",

    role: "Operations Analyst (Data & Reporting)",

    location: "Greater London",

    highlights: [
      "Own end-to-end reporting and operational analytics across 6+ business locations",
      "Built Power Query and advanced Excel automation reducing recurring manual reporting time by 60%",
      "Design Power BI dashboards, DAX measures and reporting models used for staffing, procurement, stock and performance decisions",
      "Improved report load time from approximately 50 seconds to 10 seconds through data-model and DAX optimisation",
      "Built a self-hosted LLM assistant for invoice classification, sales analysis and operational Q&A",
    ],
  },


  /* -------------------------------------------------------
     FREELANCE SOFTWARE ENGINEERING
  ------------------------------------------------------- */

  {
    period: "Oct 2024 - Present",

    company: "Independent / Freelance",

    role: "Freelance Software Engineer — Selected Projects",

    location: "London, UK",

    highlights: [
      "Design and build full-stack applications using React, TypeScript, Node.js, Python and PostgreSQL",
      "Built a role-based patient management application with structured clinical data and access controls",
      "Developed AI, data aggregation and e-commerce applications using FastAPI, GraphQL, Stripe and local LLMs",
      "Work across requirements, frontend and backend architecture, integrations, deployment and ongoing maintenance",
    ],
  },


  /* -------------------------------------------------------
     TGP INTERNATIONAL
  ------------------------------------------------------- */

  {
    period: "Apr 2024 - Sep 2024",

    company: "TGP International",

    role: "Strategy and Planning Intern",

    location: "Greater London",

    highlights: [
      "Supported strategic planning projects through research, analysis and structured problem solving",
      "Conducted market and competitor research and synthesised findings for senior leadership",
      "Coordinated stakeholders across planning workstreams to keep projects aligned with deadlines",
      "Prepared presentations and decision-support documentation for leadership discussions",
    ],
  },


  /* -------------------------------------------------------
     TRY CATCH IT SERVICES
  ------------------------------------------------------- */

  {
    period: "Mar 2020 - Aug 2023",

    company: "Try Catch IT Services Pvt Ltd",

    role: "Software Engineer & Technical Lead",

    location: "Kathmandu, Nepal",

    highlights: [
      "Led end-to-end delivery of React and TypeScript SaaS products from architecture through release and handover",
      "Used SQL extensively to extract, join, validate and work with application data",
      "Architected reusable component systems and strengthened CI/CD workflows",
      "Mentored junior engineers and supported technical decisions across the development team",
    ],
  },


  /* -------------------------------------------------------
     DEERHOLD
  ------------------------------------------------------- */

  {
    period: "Apr 2019 - Mar 2020",

    company: "Deerhold Ltd.",

    role: "Software Developer",

    location: "Kathmandu, Nepal",

    highlights: [
      "Developed features for React single-page applications using modern JavaScript",
      "Built responsive and accessible UI components following WCAG standards",
    ],
  },
];


/* =========================================================
   SKILLS
========================================================= */

export type SkillCategory = {
  label: string;
  items: string[];

  icon:
    | "components"
    | "server"
    | "link"
    | "database"
    | "layers"
    | "sparkles"
    | "creditcard"
    | "shield"
    | "tool"
    | "briefcase";

  iconBg: string;
  iconColor: string;
};


/* =========================================================
   TOP SKILLS
========================================================= */

export const topSkills = [
  "React",
  "TypeScript",
  "Node.js",
  "Python",
  "PostgreSQL",
];


/* =========================================================
   SKILL CATEGORIES
========================================================= */

export const skillCategories: SkillCategory[] = [

  {
    label: "Frontend",

    items: [
      "React",
      "TypeScript",
      "JavaScript",
      "Vite",
      "Tailwind CSS",
      "React Router",
      "React Hook Form",
      "Framer Motion",
    ],

    icon: "components",
    iconBg: "#3c3489",
    iconColor: "#AFA9EC",
  },


  {
    label: "Backend",

    items: [
      "Node.js",
      "Express",
      "Python",
      "FastAPI",
      "Pydantic",
    ],

    icon: "server",
    iconBg: "#1a2e40",
    iconColor: "#85B7EB",
  },


  {
    label: "API Design & Integration",

    items: [
      "REST APIs",
      "GraphQL",
      "Third-party API Integration",
    ],

    icon: "link",
    iconBg: "#3c3489",
    iconColor: "#AFA9EC",
  },


  {
    label: "Databases & SQL",

    items: [
      "PostgreSQL",
      "SQL",
      "Relational Data Modelling",
      "Data Validation",
    ],

    icon: "database",
    iconBg: "#1a2e40",
    iconColor: "#85B7EB",
  },


  {
    label: "Data & Business Intelligence",

    items: [
      "Power BI",
      "DAX",
      "Power Query",
      "Excel",
      "Semantic Modelling",
      "KPI Dashboards",
      "Reporting Automation",
    ],

    icon: "layers",
    iconBg: "#253d1f",
    iconColor: "#97C459",
  },


  {
    label: "Data Engineering & Automation",

    items: [
      "ETL / Data Normalisation",
      "Web Scraping",
      "BeautifulSoup",
      "Scheduled Jobs",
      "Python Automation",
    ],

    icon: "layers",
    iconBg: "#1a2e40",
    iconColor: "#85B7EB",
  },


  {
    label: "AI / LLM",

    items: [
      "Local LLM Integration",
      "Ollama",
      "Prompt Engineering",
      "spaCy",
      "tiktoken",
      "LLM-enabled Applications",
    ],

    icon: "sparkles",
    iconBg: "#4A1B0C",
    iconColor: "#F0997B",
  },


  {
    label: "Payments & Integrations",

    items: [
      "Stripe API",
      "GraphQL Integration",
      "External API Integration",
    ],

    icon: "creditcard",
    iconBg: "#253d1f",
    iconColor: "#97C459",
  },


  {
    label: "Security & Access Control",

    items: [
      "Role-Based Access Control",
      "Schema Validation",
      "Zod",
      "Helmet",
      "Rate Limiting",
    ],

    icon: "shield",
    iconBg: "#4A1B0C",
    iconColor: "#F0997B",
  },


  {
    label: "Engineering & Delivery",

    items: [
      "Git",
      "CI/CD",
      "Agile Delivery",
      "Technical Documentation",
      "WCAG Accessibility",
      "Cloudflare Tunnel",
    ],

    icon: "tool",
    iconBg: "#1a2e40",
    iconColor: "#85B7EB",
  },
];


/* =========================================================
   OPERATIONS / BUSINESS SKILLS
========================================================= */

export const skills = {
  operations: [
    "Stakeholder Management",
    "Data & Reporting",
    "Process Automation",
    "KPI Dashboards",
    "Agile Delivery",
    "Requirements Gathering",
    "Operational Analytics",
    "Process Improvement",
  ],
};

export const operationsCategory: SkillCategory = {
  label: "Business & Operations",
  items: skills.operations,
  icon: "briefcase",
  iconBg: "#3c3489",
  iconColor: "#AFA9EC",
};


/* =========================================================
   CERTIFICATIONS
========================================================= */

export const certifications = [
  "Agile Scrum Master (ASM®)",
  "Google Project Management Certificate",
  "Alpha-level Microsoft Learn Student Ambassador",
];


/* =========================================================
   EDUCATION
========================================================= */

export const education = [
  {
    school: "University of Greenwich",
    degree:
      "MSc Computing and Information Systems — Distinction",
    period: "Sep 2023 - Oct 2024",
  },
  {
    school: "Deerwalk Institute of Technology",
    degree:
      "BSc Computer Science and Information Technology",
    period: "2017 - 2021",
  },
];