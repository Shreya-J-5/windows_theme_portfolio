// ─── Centralized Portfolio Data — Single Source of Truth ─────────────────────
// All UI components and AI retrieval consume this data.
// Sourced from Shreya Jolapara's resume and GitHub profile

export interface Profile {
  name: string;
  headline: string;
  summary: string;
  education: {
    degree: string;
    institution: string;
    affiliation: string;
    cgpa: string;
    graduation: string;
  };
  email: string;
  linkedin: string;
  github: string;
  location: string;
}

export interface Experience {
  role: string;
  organization: string;
  period: string;
  duration?: string;
  mode: string;
  points: string[];
  project?: string;
  projectStatus?: string;
  team?: string;
  logo: string;
  certificate?: string;
}

export interface Project {
  id: string;
  name: string;
  status: string;
  category: string;
  purpose: string;
  github?: string;
  demo?: string;
  stack: string[];
  facts: string[];
  limitations?: string;
  screenshots: { label: string; src: string }[];
}

export interface Skill {
  category: string;
  icon: string;
  items: string[];
}

export interface Achievement {
  title: string;
  organization?: string;
  track?: string;
  location?: string;
  team?: string;
  scale?: string;
  type?: string;
  image?: string;
}

export interface Certification {
  title: string;
  issuer: string;
  issued: string;
  credentialId?: string;
  image?: string;
}

export interface CommunityEvent {
  name: string;
  location: string;
  themes: string[];
  team?: string;
  image?: string;
}

// ─── PROFILE ────────────────────────────────────────────────────────────────

export const profile: Profile = {
  name: "Shreya Jolapara",
  headline:
    "AI/ML Student | Full-Stack Developer | Python | React | Machine Learning | TypeScript | Java | Creative Designer",
  summary:
    "AI/ML student focused on building intelligent, scalable, and practical software solutions through machine learning and full-stack development. Portfolio spans AI-powered security tools, Discord music bots, color analysis platforms, employment analytics, and Minecraft plugins. Passionate about UI/UX design with expertise in Adobe Creative Suite, Figma, and Blender.",
  education: {
    degree: "B.Tech in Artificial Intelligence & Machine Learning",
    institution: "LJ University",
    affiliation: "Ahmedabad, India",
    cgpa: "Currently Pursuing",
    graduation: "2024 – Present",
  },
  email: "jolaparashreya@gmail.com",
  linkedin: "https://www.linkedin.com/in/shreya-jolapara-4b2358354/",
  github: "https://github.com/Shreya-J-5",
  location: "Ahmedabad, Gujarat, India",
};

// ─── EXPERIENCE ─────────────────────────────────────────────────────────────

export const experience: Experience[] = [
  {
    role: "Content Head - Lead Graphic Designer",
    organization: "Cocomo Media",
    period: "2025 – Present",
    mode: "Ahmedabad, India",
    points: [
      "Led digital projects involving UI design, responsive layouts, and platform-specific content",
      "Collaborated with cross-functional teams to deliver digital solutions within requirements and deadlines",
      "Applied UI/UX and digital platform knowledge to improve user-focused experiences",
    ],
    logo: "/assets/experience/logos/cocomo.png",
  },
  {
    role: "Freelance Graphic Designer and Video Editor",
    organization: "Freelance",
    period: "2023 – Present",
    mode: "Remote",
    points: [
      "Developed digital interfaces, dashboards, application graphics, and responsive layouts for online projects",
      "Translated client requirements into structured digital solutions with a focus on usability",
    ],
    logo: "/assets/experience/logos/freelance.png",
  },
  {
    role: "Creative Media Projects",
    organization: "Self-Directed",
    period: "2019 – Present",
    mode: "Remote",
    points: [
      "Developed digital assets and platform-specific content for YouTube, Discord, Twitch, and online platforms",
      "Worked with creators to deliver customized solutions based on technical platform requirements",
    ],
    logo: "/assets/experience/logos/creative.png",
  },
];

// ─── PROJECTS ───────────────────────────────────────────────────────────────

export const projects: Project[] = [
  {
    id: "scamshield",
    name: "ScamShield",
    status: "Live",
    category: "AI / Security",
    purpose:
      "AI-powered Chrome extension for phishing detection and webpage risk analysis using Python, FastAPI, React, VirusTotal, and Google Safe Browsing.",
    github: "https://github.com/Shreya-J-5/scamshield",
    stack: [
      "Python",
      "FastAPI",
      "React",
      "VirusTotal API",
      "Google Safe Browsing",
      "Chrome Extension",
    ],
    facts: [
      "Real-time phishing detection engine",
      "AI-powered webpage risk analysis",
      "Chrome extension with browser integration",
      "VirusTotal and Google Safe Browsing API integration",
      "FastAPI backend for threat intelligence",
    ],
    screenshots: [],
  },
  {
    id: "brickchain",
    name: "BrickChain",
    status: "Live",
    category: "Java / Minecraft",
    purpose:
      "Minecraft authentication and property management plugin using Java for Paper/Spigot 1.20+ servers.",
    github: "https://github.com/Shreya-J-5/Syro",
    stack: [
      "Java",
      "Paper/Spigot API",
      "Maven",
      "Minecraft Plugin Development",
    ],
    facts: [
      "Player authentication system for Minecraft",
      "Property management within Minecraft worlds",
      "Compatible with Paper/Spigot 1.20+ servers",
      "Built with Maven build system",
    ],
    screenshots: [],
  },
  {
    id: "fyro",
    name: "Fyro",
    status: "Live",
    category: "Discord Bot",
    purpose:
      "Discord music bot using TypeScript, discord.js, Spotify API, PostgreSQL, and Redis with playback, queues, radio, and slash commands.",
    github: "https://github.com/Shreya-J-5/Fyro",
    stack: [
      "TypeScript",
      "discord.js",
      "Spotify API",
      "PostgreSQL",
      "Redis",
      "Node.js",
    ],
    facts: [
      "Full music playback with queue management",
      "Spotify API integration for track resolution",
      "PostgreSQL database for persistent storage",
      "Redis caching for performance",
      "Slash commands and interactive embeds",
      "Multi-guild support with radio functionality",
    ],
    screenshots: [],
  },
  {
    id: "palettelens",
    name: "PaletteLens",
    status: "Live",
    category: "Full-Stack / Color Analysis",
    purpose:
      "Full-stack color analysis platform using React, TypeScript, Vite, FastAPI, and Python with CIE L*a*b* clustering and multi-format processing.",
    github: "https://github.com/Shreya-J-5/PaletteLens",
    stack: [
      "React",
      "TypeScript",
      "Vite",
      "FastAPI",
      "Python",
      "CIE L*a*b*",
    ],
    facts: [
      "Color analysis with CIE L*a*b* color space clustering",
      "Multi-format image processing support",
      "React + TypeScript frontend with Vite",
      "FastAPI backend for image processing pipeline",
      "Real-time color palette extraction",
    ],
    screenshots: [],
  },
  {
    id: "job-market-forecaster",
    name: "National Job Market Demand Forecaster",
    status: "Live",
    category: "AI / Analytics",
    purpose:
      "AI-powered employment analytics platform combining React, Django, and machine learning models for job market trend forecasting.",
    github: "https://github.com/Shreya-J-5",
    stack: [
      "React",
      "Django",
      "Machine Learning",
      "Python",
      "Chart.js",
      "REST API",
    ],
    facts: [
      "AI-powered employment demand forecasting",
      "Machine learning models for trend analysis",
      "React frontend with interactive charts",
      "Django backend with REST API",
      "Data visualization with Chart.js",
    ],
    screenshots: [],
  },
];

// ─── SKILLS ─────────────────────────────────────────────────────────────────

export const skills: Skill[] = [
  {
    category: "Programming",
    icon: "code",
    items: ["Python", "C", "C++", "Java", "JavaScript", "TypeScript"],
  },
  {
    category: "AI & Machine Learning",
    icon: "brain",
    items: ["Machine Learning", "Scikit-learn", "NumPy", "Pandas", "Matplotlib"],
  },
  {
    category: "Frontend",
    icon: "layout",
    items: ["HTML5", "CSS3", "React", "Next.js", "Vite", "Bootstrap", "Chart.js"],
  },
  {
    category: "Backend",
    icon: "server",
    items: ["Django", "Express.js", "FastAPI", "Node.js", "REST", "EJS"],
  },
  {
    category: "Databases",
    icon: "database",
    items: ["PostgreSQL", "MySQL", "MongoDB", "SQLite", "Redis"],
  },
  {
    category: "APIs & Integration",
    icon: "plug",
    items: ["Spotify API", "Google Gemini API", "VirusTotal API"],
  },
  {
    category: "DevOps & Tools",
    icon: "wrench",
    items: ["GitHub", "Docker", "npm", "Maven", "Jira", "Notion", "SQLAlchemy"],
  },
  {
    category: "Design & Other",
    icon: "palette",
    items: [
      "Figma",
      "Framer",
      "Canva",
      "Adobe Photoshop",
      "Adobe Premiere Pro",
      "After Effects",
      "Blender",
      "Unreal Engine",
    ],
  },
];

// ─── ACHIEVEMENTS ───────────────────────────────────────────────────────────

export const achievements: Achievement[] = [
  {
    title: "Active in technical hackathons",
    organization: "Various",
    scale: "Multiple events",
  },
  {
    title: "Creative coding challenges participant",
    organization: "Various",
    scale: "Multiple platforms",
  },
  {
    title: "Design events and competitions",
    organization: "Various",
    scale: "Multiple events",
  },
];

// ─── CERTIFICATIONS ─────────────────────────────────────────────────────────

export const certifications: Certification[] = [
  {
    title: "Higher Secondary Education (Class XII)",
    issuer: "Gujarat State Board",
    issued: "2024",
    credentialId: "65% score",
  },
  {
    title: "Secondary Education (Class X)",
    issuer: "Gujarat State Board",
    issued: "2022",
    credentialId: "73% score",
  },
];

// ─── COMMUNITY EVENTS ───────────────────────────────────────────────────────

export const events: CommunityEvent[] = [
  {
    name: "Technical Hackathons",
    location: "Various, India",
    themes: ["AI", "Machine Learning", "Full-Stack", "Problem Solving"],
  },
  {
    name: "Creative Coding Challenges",
    location: "Online",
    themes: ["Design", "Frontend", "Animation", "Innovation"],
  },
];

// ─── ALL GALLERY IMAGES ─────────────────────────────────────────────────────

export const galleryImages: { src: string; label: string }[] = [];

// ─── AI GROUNDING ───────────────────────────────────────────────────────────

export const aiGrounding = {
  allowedScope: "Questions about Shreya and her verified portfolio.",
  unknownResponse: "I don't have verified information about that.",
  unrelatedResponse:
    "I'm Ask Shreya, so I only answer questions about Shreya and her work.",
  futureRule:
    "Never state an unverified future event as a fact. Distinguish goals/plans from guaranteed outcomes.",
  privateRule:
    "Do not expose private repository URLs or private project details as public resources.",
};

// ─── SEARCH INDEX ───────────────────────────────────────────────────────────

export interface SearchItem {
  title: string;
  category: string;
  appId: string;
  subRoute?: string;
  keywords: string[];
}

export const searchIndex: SearchItem[] = [
  ...projects.map((p) => ({
    title: p.name,
    category: "Project",
    appId: "projects",
    subRoute: p.id,
    keywords: [p.name, p.category, ...p.stack, ...p.facts].map((k) =>
      k.toLowerCase()
    ),
  })),
  ...experience.map((e) => ({
    title: `${e.role} — ${e.organization}`,
    category: "Experience",
    appId: "experience",
    keywords: [e.role, e.organization, ...e.points].map((k) =>
      k.toLowerCase()
    ),
  })),
  ...skills.flatMap((s) =>
    s.items.map((item) => ({
      title: item,
      category: `Skill — ${s.category}`,
      appId: "skills",
      keywords: [item.toLowerCase(), s.category.toLowerCase()],
    }))
  ),
  ...achievements.map((a) => ({
    title: a.title,
    category: "Achievement",
    appId: "achievements",
    keywords: [
      a.title,
      a.organization || "",
      a.track || "",
      a.team || "",
    ].map((k) => k.toLowerCase()),
  })),
  ...certifications.map((c) => ({
    title: c.title,
    category: "Certification",
    appId: "certifications",
    keywords: [c.title, c.issuer, c.issued].map((k) => k.toLowerCase()),
  })),
  ...events.map((e) => ({
    title: e.name,
    category: "Event",
    appId: "community",
    keywords: [e.name, e.location, ...e.themes].map((k) => k.toLowerCase()),
  })),
  {
    title: "Shreya Jolapara",
    category: "Profile",
    appId: "about",
    keywords: ["shreya", "jolapara", "about", "profile", "education", "ai", "ml"],
  },
  {
    title: "Resume",
    category: "Document",
    appId: "resume",
    keywords: ["resume", "cv", "pdf", "download"],
  },
  {
    title: "Contact",
    category: "Contact",
    appId: "contact",
    keywords: ["contact", "email", "linkedin", "github"],
  },
];

// ─── COMPATIBILITY EXPORT ───────────────────────────────────────────────────

export const portfolioData = {
  profile: {
    name: profile.name,
    headline: profile.headline,
    summary: profile.summary,
    bio: profile.summary,
    email: profile.email,
    linkedin: profile.linkedin,
    github: profile.github,
    location: profile.location,
  },
  education: [
    {
      institution: profile.education.institution,
      degree: profile.education.degree,
      affiliation: profile.education.affiliation,
      cgpa: profile.education.cgpa,
      duration: profile.education.graduation,
    },
  ],
  links: {
    linkedin: profile.linkedin,
    github: profile.github,
    email: profile.email,
  },
  experience: experience.map((e) => ({
    ...e,
    company: e.organization,
    title: e.role,
  })),
  projects: projects.map((p) => ({
    ...p,
    title: p.name,
  })),
  skills,
  achievements,
  certifications,
  community: events,
  events,
  galleryImages,
};
