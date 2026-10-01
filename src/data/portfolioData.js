/**
 * Youssef Hussien Ahmed - Portfolio Data Configuration
 * 
 * Customize links, contact details, and project URLs easily here.
 */

export const personalInfo = {
  name: "Youssef Hussien Ahmed",
  role: "Back-End Developer",
  specialization: "Node.js & Express.js",
  location: "Cairo, Egypt",
  headline: "Building Secure & Scalable Backend Systems.",
  subheadline: "Back-End Developer specializing in Node.js, Express.js, REST APIs, authentication, databases, and scalable server-side applications.",
  positioning: "Back-End Developer specializing in Node.js and Express.js, focused on building secure, scalable RESTful APIs, authentication systems, and database-driven applications.",
  
  // Contact & Social Links (Easily customizable placeholders)
  email: "youssef.hussien.backend@gmail.com",
  phone: "+20 11 5863 8306",
  displayPhone: "011 5863 8306",
  github: "https://github.com/youssefhussien",
  linkedin: "https://linkedin.com/in/youssef-hussien-ahmed",
  cvUrl: "./Youssef Hussien Ahmed CV.pdf",
  
  // Status indicator
  availableForHire: true,
  statusText: "Available for Backend Roles",
  preferredRoles: ["Node.js Backend Developer", "Backend Software Engineer", "API & Server-side Developer"],
};

export const aboutContent = {
  paragraphs: [
    "I’m Youssef Hussien Ahmed, a Back-End Developer focused on building reliable and scalable server-side applications using Node.js and modern backend technologies.",
    "I have hands-on experience developing RESTful APIs, authentication and authorization systems, database-driven applications, payment integrations, and real-time features.",
    "I enjoy solving backend problems, improving application performance, and writing clean, maintainable code."
  ],
  corePillars: [
    {
      title: "API Architecture & Design",
      description: "Designing RESTful endpoints with consistent schema contracts, pagination, and robust error handling.",
      icon: "Network"
    },
    {
      title: "Authentication & RBAC",
      description: "Implementing stateless JWT authentication, session stores, and granular role-based authorization middleware.",
      icon: "ShieldCheck"
    },
    {
      title: "Databases & ORM",
      description: "Structuring scalable MongoDB collections and SQL relations via Mongoose and Sequelize with optimized queries.",
      icon: "Database"
    },
    {
      title: "Real-time & Integrations",
      description: "Integrating Stripe payment webhooks, Socket.io event-driven streaming, and third-party services.",
      icon: "Zap"
    }
  ]
};

export const skillCategories = [
  {
    name: "Backend",
    description: "Core server-side frameworks and runtime environments",
    skills: ["Node.js", "Express.js", "NestJS"]
  },
  {
    name: "Programming",
    description: "Modern languages powering server logic and APIs",
    skills: ["JavaScript ES6+", "TypeScript"]
  },
  {
    name: "Databases",
    description: "Document stores, relational databases, and ORM/ODMs",
    skills: ["MongoDB", "Mongoose", "MySQL", "SQL", "Sequelize"]
  },
  {
    name: "APIs & Security",
    description: "Secure communication protocols, tokens, and defense mechanisms",
    skills: ["RESTful APIs", "GraphQL", "JWT", "Role-Based Authorization", "Input Validation", "Error Handling"]
  },
  {
    name: "Tools & DevOps",
    description: "Version control, containerization, and deployment infrastructure",
    skills: ["Git", "GitHub", "Docker", "Vercel", "Render"]
  },
  {
    name: "Additional",
    description: "Payment gateways, sockets, architectures, and services",
    skills: ["Socket.io", "Stripe", "File Upload Systems", "Email Services", "MVC Architecture"]
  }
];

export const projects = [
  {
    id: "ecommerce-dashboard",
    title: "E-Commerce Dashboard",
    featured: true,
    badge: "Primary Featured Project",
    category: "Full Backend Architecture",
    description: "Scalable e-commerce backend supporting authentication, authorization, CRUD operations, secure payments, and database-driven product management.",
    technologies: ["Node.js", "Express.js", "MongoDB", "Mongoose", "JWT", "Stripe"],
    features: [
      "RESTful APIs",
      "JWT Authentication",
      "Role-Based Access Control",
      "CRUD Operations",
      "Stripe Payment Integration",
      "MongoDB",
      "Mongoose",
      "Query and database optimization"
    ],
    architectureHighlights: {
      type: "Layered Controller-Service Architecture",
      auth: "JWT with Refresh Token rotation & Role-based middleware (Admin / Customer)",
      payments: "Stripe Webhooks with idempotency keys for secure checkout",
      database: "MongoDB with indexing on frequently queried fields and lean queries"
    },
    sampleEndpoints: [
      { method: "POST", path: "/api/v1/auth/login", desc: "JWT issuance with role payload" },
      { method: "POST", path: "/api/v1/payments/create-checkout-session", desc: "Stripe secure intent" },
      { method: "GET", path: "/api/v1/products?limit=20&page=1", desc: "Indexed pagination & filtering" },
      { method: "PATCH", path: "/api/v1/orders/:id/status", desc: "Admin RBAC restricted updates" }
    ],
    githubUrl: "https://github.com/youssefhussien/ecommerce-backend-dashboard",
    liveDemoUrl: "https://ecommerce-backend-api.demo.com"
  },
  {
    id: "job-search-app",
    title: "Job Search App",
    featured: false,
    badge: "Recruitment & Workflow API",
    category: "Job Management & RBAC",
    description: "Backend job management platform supporting job posting, application tracking, authentication, and role-based permissions.",
    technologies: ["Node.js", "Express.js", "MongoDB", "JWT"],
    features: [
      "Job posting",
      "Application tracking",
      "JWT authentication",
      "Middleware-based authorization",
      "Role-based permissions",
      "MongoDB schema design"
    ],
    architectureHighlights: {
      type: "RESTful Service Pattern",
      auth: "Middleware-based authorization separating Employers from Applicants",
      database: "Normalized schemas for job listings, candidate submissions, and status logs"
    },
    sampleEndpoints: [
      { method: "POST", path: "/api/v1/jobs", desc: "Recruiter only: Post open requisitions" },
      { method: "POST", path: "/api/v1/applications/:jobId", desc: "Applicant: Submit application" },
      { method: "GET", path: "/api/v1/applications/status", desc: "Live application tracking pipeline" }
    ],
    githubUrl: "https://github.com/youssefhussien/job-search-api",
    liveDemoUrl: null
  },
  {
    id: "facebook-clone-backend",
    title: "Facebook Clone Backend",
    featured: false,
    badge: "Social Graph & Real-Time API",
    category: "Relational DB & WebSockets",
    description: "Backend services for a social media platform with user management, posts, authentication, and real-time messaging.",
    technologies: ["Node.js", "Express.js", "SQL", "Sequelize", "JWT", "Socket.io"],
    features: [
      "User management",
      "Posts",
      "Real-time messaging",
      "JWT authentication",
      "Authorization",
      "SQL database",
      "Sequelize ORM"
    ],
    architectureHighlights: {
      type: "Relational Architecture with Socket.io Daemon",
      realtime: "Bi-directional WebSocket rooms for instantaneous direct messaging",
      orm: "Sequelize models with associations (HasMany, BelongsTo) and transactional integrity"
    },
    sampleEndpoints: [
      { method: "POST", path: "/api/v1/posts", desc: "Create feed post with media reference" },
      { method: "GET", path: "/api/v1/users/:id/friends", desc: "Relational graph query with Sequelize" },
      { method: "WS", path: "socket.emit('sendMessage')", desc: "Real-time chat dispatch" }
    ],
    githubUrl: "https://github.com/youssefhussien/facebook-clone-backend",
    liveDemoUrl: null
  },
  {
    id: "sara7a-app",
    title: "Sara7a App",
    featured: false,
    badge: "Anonymous Feedback Engine",
    category: "MVC Architecture & SSR",
    description: "Anonymous messaging platform built using MVC architecture with authentication, validation, server-side rendering, and MongoDB.",
    technologies: ["Node.js", "Express.js", "MongoDB", "EJS", "MVC"],
    features: [
      "Anonymous messaging",
      "Session-based authentication",
      "Input validation",
      "Server-side rendering",
      "MVC architecture",
      "MongoDB",
      "EJS",
      "Vercel deployment"
    ],
    architectureHighlights: {
      type: "Classic Model-View-Controller (MVC) Pattern",
      validation: "Strict sanitized inputs preventing XSS and injection attacks",
      deployment: "Serverless Node.js configuration tuned for Vercel edge deployment"
    },
    sampleEndpoints: [
      { method: "POST", path: "/message/send/:receiverId", desc: "Sanitized anonymous delivery" },
      { method: "GET", path: "/dashboard", desc: "Session-authenticated inbox rendering" }
    ],
    githubUrl: "https://github.com/youssefhussien/sara7a-mvc-app",
    liveDemoUrl: "https://sara7a-anonymous.vercel.app"
  }
];

export const experience = [
  {
    role: "Back-End Intern",
    company: "IT Gates",
    period: "June 2023 – September 2023",
    type: "Internship",
    isPrimary: true, // Visually more prominent
    highlightBadge: "Core Backend Internship",
    responsibilities: [
      "Assisted in developing and testing backend APIs using Node.js and Express.js.",
      "Collaborated with developers to debug and improve backend functionality."
    ],
    technologies: ["Node.js", "Express.js", "REST APIs", "API Testing", "Debugging"]
  },
  {
    role: "React.js & Next.js Intern",
    company: "Dev Academy",
    period: "June 2024 – September 2024",
    type: "Internship",
    isPrimary: false,
    highlightBadge: "Full-Stack Integration Workflows",
    responsibilities: [
      "Participated in building responsive interfaces using React.js and Next.js.",
      "Gained experience working with frontend and backend integration workflows."
    ],
    technologies: ["React.js", "Next.js", "Frontend-Backend Integration", "Responsive UI"]
  }
];

export const education = [
  {
    degree: "Bachelor of Management Information Systems",
    institution: "Modern Academy for Management",
    department: "Information System",
    period: "2021 – 2025",
    location: "Cairo, Egypt",
    badge: "Academic Degree",
    focus: "Systems analysis, database concepts, software lifecycle, and enterprise information systems."
  },
  {
    degree: "Full-Stack Diploma — MERN Stack",
    institution: "Route Academy",
    period: "2023 – 2024",
    location: "Cairo, Egypt",
    badge: "Professional Diploma",
    focus: "Comprehensive training in modern JavaScript, Node.js backend systems, MongoDB data modeling, and API engineering."
  }
];
