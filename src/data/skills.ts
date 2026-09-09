export interface SkillCategory {
  id: string;
  title: string;
  description: string;
  iconName: string;
  skills: {
    name: string;
    isPrimary?: boolean;
    description?: string;
  }[];
}

export const skillCategories: SkillCategory[] = [
  {
    id: "backend",
    title: "Backend & Frameworks",
    description: "Core language mastery and enterprise web frameworks.",
    iconName: "Server",
    skills: [
      { name: "PHP 8", isPrimary: true, description: "Modern PHP 8.x development" },
      { name: "Symfony", isPrimary: true, description: "Symfony components, Dependency Injection, Security" },
      { name: "API Platform", isPrimary: true, description: "REST API resources, filters, OpenAPI" },
      { name: "REST API", isPrimary: true, description: "RESTful API design and development" },
      { name: "Laravel", description: "Web application development" },
      { name: "MVC Architecture", description: "Model-View-Controller design pattern" },
      { name: "JWT", description: "Token-based authentication" },
      { name: "Python", description: "Scripting and general-purpose programming" }
    ]
  },
  {
    id: "frontend",
    title: "Frontend Development",
    description: "Client-side technologies for building web interfaces.",
    iconName: "Code2",
    skills: [
      { name: "JavaScript", isPrimary: true, description: "Client-side scripting and DOM interaction" },
      { name: "HTML5", isPrimary: true, description: "Semantic markup" },
      { name: "CSS3", isPrimary: true, description: "Styling and responsive layouts" },
      { name: "Bootstrap", description: "Responsive UI components" }
    ]
  },
  {
    id: "database",
    title: "Database & Data Modeling",
    description: "Relational schema design, query performance and optimization.",
    iconName: "Database",
    skills: [
      { name: "MySQL", isPrimary: true, description: "Primary relational database engine" },
      { name: "PostgreSQL", isPrimary: true, description: "Relational database management" },
      { name: "Oracle", description: "Enterprise database systems" },
      { name: "Database Design", isPrimary: true, description: "Modeling and schema design" },
      { name: "Query Optimization", description: "Database performance tuning" }
    ]
  },
  {
    id: "architecture",
    title: "Architecture & Design",
    description: "Architectural patterns for scalable, maintainable software.",
    iconName: "Layers",
    skills: [
      { name: "SOLID", isPrimary: true, description: "Object-oriented design principles" },
      { name: "REST API Design", isPrimary: true, description: "Resource modeling and API contracts" },
      { name: "MVC", isPrimary: true, description: "Model-View-Controller architecture" },
      { name: "Clean Code", description: "Readable, maintainable code standards" }
    ]
  },
  {
    id: "security",
    title: "Security & Access Control",
    description: "Protecting data integrity and securing API endpoints.",
    iconName: "ShieldCheck",
    skills: [
      { name: "JWT Authentication", isPrimary: true, description: "Secure token generation & verification" },
      { name: "Roles & Permissions", isPrimary: true, description: "Access control management" },
      { name: "Security Best Practices", description: "Secure coding and API hardening" }
    ]
  },
  {
    id: "integrations",
    title: "Integrations & Third-Party Services",
    description: "Connecting applications with payment, messaging and notification services.",
    iconName: "Workflow",
    skills: [
      { name: "Stripe", isPrimary: true, description: "Payments API integration" },
      { name: "Mercure", isPrimary: true, description: "Real-time updates via server push" },
      { name: "Mailjet", description: "Transactional email service" },
      { name: "Twilio", description: "SMS & communication API" }
    ]
  },
  {
    id: "devops",
    title: "Tools & Environments",
    description: "Version control, containerization and development environments.",
    iconName: "Box",
    skills: [
      { name: "Git", isPrimary: true, description: "Version control" },
      { name: "GitLab", isPrimary: true, description: "Repository management & CI" },
      { name: "Docker", description: "Basic containerization" },
      { name: "Linux", description: "Environments & basic system administration" },
      { name: "VS Code", description: "Development environment" },
      { name: "PhpStorm", description: "PHP IDE" }
    ]
  },
  {
    id: "business-intelligence",
    title: "Business Intelligence",
    description: "Data analysis and visualization for business decision-making.",
    iconName: "BarChart3",
    skills: [
      { name: "Data Analysis", isPrimary: true, description: "Extracting insight from business data" },
      { name: "Data Visualization", isPrimary: true, description: "Presenting data for decision-making" }
    ]
  },
  {
    id: "engineering",
    title: "Engineering & Leadership",
    description: "Team guidance, code quality standards and Agile methodologies.",
    iconName: "GitPullRequest",
    skills: [
      { name: "Technical Leadership", isPrimary: true, description: "Guiding development teams" },
      { name: "Code Review", isPrimary: true, description: "Code quality & architecture checks" },
      { name: "Mentoring", isPrimary: true, description: "Coaching developers" },
      { name: "Agile / Scrum", isPrimary: true, description: "Sprint planning, Scrum ceremonies" },
      { name: "Technical Support", description: "Supporting development teams" },
      { name: "Code Quality Improvement", description: "Raising standards across codebases" }
    ]
  }
];
