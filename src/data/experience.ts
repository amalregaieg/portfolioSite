export interface ExperienceItem {
  id: string;
  position: string;
  company: string;
  location?: string;
  startDate: string;
  endDate: string; // e.g. "Present" or "2024"
  isCurrent?: boolean;
  description: string;
  responsibilities: string[];
  technologies: string[];
  achievements?: string[];
}

export const experienceData: ExperienceItem[] = [
  {
    id: "tech-lead-symfony",
    position: "Tech Lead Symfony / PHP",
    company: "Senior Backend Engineering & Consultancy",
    location: "Remote / Hybrid",
    startDate: "2022",
    endDate: "Present",
    isCurrent: true,
    description: "Leading technical architecture and backend development for mission-critical enterprise web applications, high-performance REST APIs, and business platforms built on PHP and Symfony.",
    responsibilities: [
      "Designed robust backend architecture for complex business domains using Symfony 6/7, API Platform, and Clean Code principles.",
      "Mentored development teams, conducted rigorous code reviews, and enforced SOLID architectural standards across codebases.",
      "Engineered secure REST APIs with fine-grained authentication/authorization (JWT, OAuth2, Symfony Security voters).",
      "Designed relational database schemas in MySQL, optimizing queries, indexes, and execution plans for high data volume.",
      "Implemented asynchronous processing pipelines using Symfony Messenger for background tasks, webhooks, and third-party integrations.",
      "Integrated payment gateways including Stripe API and webhook listener systems with strict idempotency and transaction handling.",
      "Containerized development and production environments using Docker and Docker Compose, establishing automated CI/CD pipelines."
    ],
    technologies: [
      "PHP 8.3",
      "Symfony 7",
      "API Platform",
      "MySQL",
      "REST API",
      "JWT",
      "Symfony Messenger",
      "Stripe API",
      "Docker",
      "CI/CD",
      "Git",
      "SOLID"
    ],
    achievements: [
      "Reduced API query latency by optimizing database execution plans and implementing Doctrine caching strategies.",
      "Architected event-driven asynchronous processing, eliminating blocking HTTP calls during payment processing and external webhooks."
    ]
  },
  {
    id: "senior-php-developer",
    position: "Senior PHP Backend Developer",
    company: "Enterprise Software & Web Solutions",
    location: "Remote",
    startDate: "2019",
    endDate: "2022",
    isCurrent: false,
    description: "Spearheaded the development and evolution of core backend modules, microservices, and API integrations for domain-specific SaaS platforms.",
    responsibilities: [
      "Developed custom Symfony bundles and REST API services powering multi-tenant business platforms.",
      "Refactored legacy backend components into decoupled, testable services adhering to Domain-Oriented Design concepts.",
      "Optimized complex SQL queries, entity mappings, and database indexes in MySQL for improved database throughput.",
      "Configured Cloudflare Turnstile and API security filters to protect public-facing endpoints against automated abuse.",
      "Wrote comprehensive technical documentation, API specifications (OpenAPI/Swagger), and architecture decision records."
    ],
    technologies: [
      "PHP 7.4/8.0",
      "Symfony 5/6",
      "API Platform",
      "MySQL",
      "Doctrine ORM",
      "REST APIs",
      "Docker",
      "PHPUnit",
      "Git"
    ],
    achievements: [
      "Streamlined API development velocity by adopting API Platform for standardized OpenAPI documentation and JSON:API formatting.",
      "Led refactoring of core authentication & authorization modules to eliminate technical debt and enforce RBAC rules."
    ]
  }
];
