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
      { name: "PHP", isPrimary: true, description: "Modern PHP 8.x, Strict Typing, Enums, Attributes" },
      { name: "Symfony", isPrimary: true, description: "Symfony 6/7, Dependency Injection, Services" },
      { name: "API Platform", isPrimary: true, description: "Resources, State Providers, Filters, OpenAPI" },
      { name: "Symfony Messenger", isPrimary: true, description: "Asynchronous Queues & Message Bus" },
      { name: "REST API", isPrimary: true, description: "RESTful Standards, Serialization, DTOs" },
      { name: "JWT", description: "LexikJWTAuthenticationBundle, Token lifecycle" },
      { name: "Authentication / Authorization", description: "Security voters, RBAC, Access Control" },
      { name: "Webhooks", description: "Idempotent listeners, payload validation, retry queues" }
    ]
  },
  {
    id: "database",
    title: "Database & Data Modeling",
    description: "Relational schema architecture, query performance, and ORM mapping.",
    iconName: "Database",
    skills: [
      { name: "MySQL", isPrimary: true, description: "InnoDB engine, transaction isolation, replication" },
      { name: "SQL", isPrimary: true, description: "Complex joins, subqueries, execution plans" },
      { name: "Database Design", isPrimary: true, description: "Normalization, ERD modeling, FK constraints" },
      { name: "Query Optimization", isPrimary: true, description: "EXPLAIN analysis, N+1 query elimination" },
      { name: "Indexes", description: "Composite indexes, B-Tree, FULLTEXT indexing" },
      { name: "Data Modeling", description: "Doctrine ORM mappings, Entities, Repositories" }
    ]
  },
  {
    id: "architecture",
    title: "Architecture & Design",
    description: "Architectural patterns for scalable, testable, and maintainable software.",
    iconName: "Layers",
    skills: [
      { name: "Clean Architecture", isPrimary: true, description: "Decoupled domain logic from framework" },
      { name: "SOLID", isPrimary: true, description: "Object-oriented design principles" },
      { name: "Design Patterns", isPrimary: true, description: "Factory, Strategy, Command, Repository, Observer" },
      { name: "Clean Code", description: "Self-documenting, maintainable code standards" },
      { name: "Domain-Oriented Design", description: "Domain events, Value Objects, Aggregates" },
      { name: "API Design", description: "OpenAPI specs, Versioning, Error formats (RFC 7807)" },
      { name: "Scalable Backend Architecture", description: "Stateless services, Caching, Queue decoupling" }
    ]
  },
  {
    id: "security",
    title: "Security & Access Control",
    description: "Protecting data integrity and securing API endpoints.",
    iconName: "ShieldCheck",
    skills: [
      { name: "JWT Authentication", isPrimary: true, description: "Secure token generation & verification" },
      { name: "Access Control", isPrimary: true, description: "Role-based Voters & Granular Permissions" },
      { name: "API Security", description: "Rate limiting, CORS, Input validation, Sanitization" },
      { name: "Cloudflare Turnstile", description: "Bot prevention & CAPTCHA integration" },
      { name: "Secure API Design", description: "OWASP API Security Top 10 compliance" }
    ]
  },
  {
    id: "integrations",
    title: "Integrations & Third-Party APIs",
    description: "Seamless connection with payment processors and external services.",
    iconName: "Workflow",
    skills: [
      { name: "Stripe", isPrimary: true, description: "Payments, Subscriptions, Invoicing API" },
      { name: "Payment APIs", isPrimary: true, description: "PSP integration, Payment intents, Verification" },
      { name: "Webhooks Handling", description: "Signature validation & async worker processing" },
      { name: "Third-Party APIs", description: "REST/SOAP client integrations, HttpClient, Resilience" }
    ]
  },
  {
    id: "devops",
    title: "DevOps & Infrastructure",
    description: "Containerization, environment configuration, and automated pipelines.",
    iconName: "Box",
    skills: [
      { name: "Docker", isPrimary: true, description: "Multi-stage builds, Docker Compose, PHP-FPM containers" },
      { name: "Git", isPrimary: true, description: "Branching strategies, Gitflow, interactive rebase" },
      { name: "CI/CD", isPrimary: true, description: "GitHub Actions, automated test runs, static analysis" },
      { name: "Linux", description: "Shell scripting, server management, permissions" },
      { name: "Deployment", description: "Automated deployment scripts, zero-downtime releases" }
    ]
  },
  {
    id: "engineering",
    title: "Engineering & Leadership",
    description: "Team guidance, code quality standards, and development workflows.",
    iconName: "GitPullRequest",
    skills: [
      { name: "Code Review", isPrimary: true, description: "Rigorous code quality & architecture checks" },
      { name: "Technical Documentation", isPrimary: true, description: "OpenAPI, ADRs, Setup guides, Architecture diagrams" },
      { name: "Refactoring", description: "Legacy codebase modernization without regressions" },
      { name: "Technical Debt Reduction", description: "Incremental cleanup strategies & refactoring plans" },
      { name: "Debugging", description: "Xdebug, Blackfire, Symfony Profiler, Log analysis" },
      { name: "Performance Optimization", description: "Cache strategies, OPCache, DB query tuning" },
      { name: "Agile / Scrum", description: "Sprint planning, story estimation, Scrum ceremonies" }
    ]
  }
];
