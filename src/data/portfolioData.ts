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
    id: "windows-theme-portfolio",
    name: "Windows Theme Portfolio",
    status: "Live",
    category: "Full-Stack / Web",
    purpose:
      "Interactive Windows 11 desktop-themed web portfolio application showcasing projects, experience, technical skills, and an AI assistant.",
    github: "https://github.com/Shreya-J-5/windows_theme_portfolio",
    stack: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion",
      "Zustand",
    ],
    facts: [
      "Interactive Windows 11 desktop UI with window management",
      "Custom state management powered by Zustand",
      "Integrated Ask Shreya AI Assistant",
      "Responsive design with mobile and desktop mode support",
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
    id: "weather-app",
    name: "Weather App",
    status: "Live",
    category: "Frontend / Web",
    purpose:
      "Real-time weather dashboard featuring geolocation detection, detailed atmospheric metrics, and interactive forecasts.",
    github: "https://github.com/Shreya-J-5/weather-app",
    stack: ["JavaScript", "HTML5", "CSS3", "Weather API", "Fetch API"],
    facts: [
      "Real-time location weather forecasts",
      "Clean, responsive Dark Studio UI layout",
      "Interactive metrics for humidity, wind, and temperature",
    ],
    screenshots: [],
  },
  {
    id: "syro",
    name: "Syro",
    status: "Live",
    category: "Java / Minecraft",
    purpose:
      "Minecraft authentication and property management plugin built using Java for Paper/Spigot 1.20+ servers.",
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
    id: "cocomo-media-workspace",
    name: "Cocomo Media Workspace",
    status: "Live",
    category: "Full-Stack / Workspace",
    purpose:
      "Collaborative digital media management and creative project workflow workspace developed for Cocomo Media.",
    github: "https://github.com/Shreya-J-5/cocomo_media-s_workspace",
    stack: ["TypeScript", "React", "Node.js", "Tailwind CSS", "REST API"],
    facts: [
      "Centralized workspace for graphic and media projects",
      "Interactive project workflow tracking",
      "Asset management interface for creative deliverables",
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
    id: "house-of-seven-website",
    name: "House of Seven Website",
    status: "Live",
    category: "Frontend / Web",
    purpose:
      "Modern web application and promotional brand platform engineered with TypeScript, React, and modular styling.",
    github: "https://github.com/Shreya-J-5/house_of_seven_website",
    stack: ["TypeScript", "React", "CSS Modules", "Vite"],
    facts: [
      "High performance digital interface",
      "Custom design component architecture",
      "Responsive layout tailored for all display sizes",
    ],
    screenshots: [],
  },
  {
    id: "qr-code-generator-api",
    name: "QR Code Generator API",
    status: "Live",
    category: "Backend / DevOps",
    purpose:
      "Containerized Python REST API and web UI for generating customized, downloadable QR codes deployed with Docker.",
    github:
      "https://github.com/Shreya-J-5/QR-Code-Generator-API-using-Python-and-Docker",
    stack: ["Python", "Docker", "Flask", "HTML5", "CSS3", "qrcode library"],
    facts: [
      "Dockerized microservice for instant deployment",
      "RESTful endpoint for programmatically generating QR codes",
      "Web dashboard interface for quick generation",
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
    github:
      "https://github.com/Shreya-J-5/National_Job_Market_Demand_Forecaster",
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
  {
    id: "cocomo-media-website",
    name: "Cocomo Media Website",
    status: "Live",
    category: "Frontend / Web",
    purpose:
      "Corporate branding and agency website showcasing digital design services, graphic design portfolios, and client media work.",
    github: "https://github.com/Shreya-J-5/Cocomo-Media-Website",
    stack: ["HTML5", "CSS3", "JavaScript", "Responsive Design"],
    facts: [
      "Designed for agency media portfolio",
      "Modern animations and interactive brand showcases",
      "Fully optimized across desktop and mobile devices",
    ],
    screenshots: [],
  },
  {
    id: "spendly-expense-tracker",
    name: "Spendly Expense Tracker",
    status: "Live",
    category: "Frontend / Web App",
    purpose:
      "Web-based financial management application to track income, daily expenses, category budgets, and visual spending summaries.",
    github: "https://github.com/Shreya-J-5/Spendly-Expense-Tracker",
    stack: ["HTML5", "CSS3", "JavaScript", "LocalStorage API"],
    facts: [
      "Interactive budget calculation and spending graphs",
      "Local storage persistence for offline use",
      "Categorized expense tagging and reporting",
    ],
    screenshots: [],
  },
  {
    id: "integrated-todo-app",
    name: "Integrated To-Do App",
    status: "Live",
    category: "Full-Stack / Python",
    purpose:
      "Full-stack task management web application built with Python Flask, SQLite database, and clean HTML/CSS frontend.",
    github:
      "https://github.com/Shreya-J-5/integerated-todo-app-using-python-Flask-DBSqlit-html",
    stack: ["Python", "Flask", "SQLite", "HTML5", "CSS3"],
    facts: [
      "Complete CRUD task operations",
      "Relational SQLite database persistence",
      "Clean, lightweight Flask backend architecture",
    ],
    screenshots: [],
  },
  {
    id: "classic-portfolio",
    name: "Classic Developer Portfolio",
    status: "Live",
    category: "Frontend / Portfolio",
    purpose:
      "Personal developer portfolio website presenting background, skills, project showcases, and contact options.",
    github: "https://github.com/Shreya-J-5/portfolio",
    stack: ["HTML5", "CSS3", "JavaScript"],
    facts: [
      "Classic responsive personal website",
      "Interactive project card overlays",
      "Clean CSS animations and custom layout",
    ],
    screenshots: [],
  },
  {
    id: "cat-animation-css",
    name: "Cat Animation (CSS Only)",
    status: "Live",
    category: "Frontend / Creative Design",
    purpose:
      "Pure HTML and CSS keyframe animation demonstration creating an animated cartoon cat character without JavaScript.",
    github: "https://github.com/Shreya-J-5/cat-animation-with-html-css-only",
    stack: ["HTML5", "CSS3", "CSS Keyframes", "Vector Art"],
    facts: [
      "100% pure CSS keyframe animations",
      "Zero JavaScript dependencies",
      "Creative UI illustration and vector styling",
    ],
    screenshots: [],
  },
  {
    id: "capstone-task-manager",
    name: "CLI Task Manager (Capstone)",
    status: "Live",
    category: "Python / CLI",
    purpose:
      "Command-line task management and productivity application engineered in Python for structured data tracking.",
    github: "https://github.com/Shreya-J-5/Capstone-Project",
    stack: ["Python", "CLI", "File I/O", "Data Structures"],
    facts: [
      "Interactive command-line interface",
      "Persistent file storage for task logs",
      "Task categorization, prioritization, and completion tracking",
    ],
    screenshots: [],
  },
  {
    id: "cattle-ai",
    name: "Cattle.ai",
    status: "Live",
    category: "AI / ML / Agriculture",
    purpose:
      "AI/ML-based platform for predicting cattle milk yield and monitoring livestock welfare metrics.",
    github: "https://github.com/Shreya-J-5/Cattle.ai",
    stack: [
      "TypeScript",
      "Machine Learning",
      "Python",
      "React",
      "Data Analytics",
    ],
    facts: [
      "Predictive machine learning models for milk yield",
      "Livestock health and welfare monitoring",
      "Interactive web dashboard built with React and TypeScript",
    ],
    screenshots: [],
  },
  {
    id: "green-hydrogen-optimization",
    name: "Green Hydrogen Infrastructure Optimization",
    status: "Live",
    category: "AI / Optimization",
    purpose:
      "Spatial mapping and algorithmic optimization system for green hydrogen supply chain and production infrastructure.",
    github:
      "https://github.com/Shreya-J-5/Green-Hydrogen-Infrastructure-Mapping---Optimization",
    stack: [
      "Python",
      "Optimization Algorithms",
      "Data Science",
      "GIS / Mapping",
    ],
    facts: [
      "Geospatial infrastructure mapping",
      "Optimization algorithms for supply chain efficiency",
      "Environmental data integration and modeling",
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
    title: "Google Crash Course on Python",
    organization: "Google",
    track: "IT Automation & Python Specialization",
    scale: "Verified Professional Certificate",
    image: "/assets/certifications/google-python-certificate.jpg",
  },
  {
    title: "IBM Python for Data Science, AI & Development",
    organization: "IBM",
    track: "Data Science & AI Engineering",
    scale: "Professional Certificate",
    image: "/assets/certifications/ibm-python-ds-ai-certificate.jpg",
  },
  {
    title: "Coursera Python Programming Specialization",
    organization: "Coursera / University of Michigan",
    track: "Programming & Data Structures",
    scale: "Verified Certificate",
    image: "/assets/certifications/coursera-python-certificate.jpg",
  },
  {
    title: "Inheritance & Data Structures in Java",
    organization: "Coursera / University of Pennsylvania",
    track: "Object-Oriented Programming in Java",
    scale: "Verified Academic Certificate",
    image: "/assets/certifications/inheritance-ds-java-certificate.jpg",
  },
  {
    title: "Solution Challenge 2026: Build with AI",
    organization: "Hack2skill / Google Developer Student Clubs",
    track: "Build with AI Global Challenge",
    scale: "Prototype Submission & Certificate",
    image: "/assets/certifications/hack2skill-certificate.png",
  },
  {
    title: "B.Tech Artificial Intelligence & Machine Learning",
    organization: "LJ University",
    track: "AI & ML Academic Program",
    scale: "Enrollment & Academic Verification",
    image: "/assets/certifications/aiml-university-certificate.jpg",
  },
];

// ─── CERTIFICATIONS ─────────────────────────────────────────────────────────

export const certifications: Certification[] = [
  {
    title: "Google Crash Course on Python",
    issuer: "Google",
    issued: "2024",
    credentialId: "Google IT Automation",
    image: "/assets/certifications/google-python-certificate.jpg",
  },
  {
    title: "IBM Python for Data Science, AI & Development",
    issuer: "IBM",
    issued: "2024",
    credentialId: "IBM Professional Certificate",
    image: "/assets/certifications/ibm-python-ds-ai-certificate.jpg",
  },
  {
    title: "Coursera Python Programming Specialization",
    issuer: "Coursera",
    issued: "2024",
    credentialId: "Python Basics & Data Structures",
    image: "/assets/certifications/coursera-python-certificate.jpg",
  },
  {
    title: "Inheritance and Data Structures in Java",
    issuer: "Coursera / UPenn",
    issued: "2024",
    credentialId: "Java OOP & Data Structures",
    image: "/assets/certifications/inheritance-ds-java-certificate.jpg",
  },
  {
    title: "Solution Challenge 2026: Build with AI",
    issuer: "Hack2skill / Google",
    issued: "2026",
    credentialId: "Solution Challenge Prototype Certificate",
    image: "/assets/certifications/hack2skill-certificate.png",
  },
  {
    title: "B.Tech Artificial Intelligence & Machine Learning",
    issuer: "LJ University",
    issued: "2024 – Present",
    credentialId: "Enrollment & Academic Verification",
    image: "/assets/certifications/aiml-university-certificate.jpg",
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
