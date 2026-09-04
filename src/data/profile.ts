export interface ProfileData {
  name: string;
  title: string;
  subtitle: string;
  heroDescription: string;
  aboutText: string[];
  email: string;
  github: string;
  linkedin: string;
  location: string;
  availability: string;
  highlights: {
    title: string;
    description: string;
    icon: string;
  }[];
  stats: {
    label: string;
    value: string;
    subtext: string;
  }[];
}

export const profileData: ProfileData = {
  name: "Amal Regaieg",
  title: "Tech Lead Symfony",
  subtitle: "Senior PHP Backend Developer",
  heroDescription: "I design and build robust, scalable and maintainable backend applications and APIs with PHP, Symfony and API Platform.",
  aboutText: [
    "I am a Senior PHP Backend Developer and Tech Lead specialized in Symfony and API Platform.",
    "I work on the design, development and evolution of backend applications, REST APIs and business platforms.",
    "My responsibilities include technical architecture, code review, refactoring, database design, API design, security, integrations, performance optimization and technical support for development teams."
  ],
  email: "contact@amal-regaieg.dev",
  github: "https://github.com/amal-regaieg",
  linkedin: "https://linkedin.com/in/amal-regaieg",
  location: "Sfax / Remote",
  availability: "Open to Freelance & Tech Lead Opportunities",
  highlights: [
    {
      title: "Backend Development",
      description: "Robust PHP 8.x development focusing on domain logic, clean OOP patterns, and zero-downtime scalability.",
      icon: "Server"
    },
    {
      title: "Symfony Expertise",
      description: "Mastery of Symfony components, Symfony Messenger async queues, Security bundle, Dependency Injection, and Doctrine ORM.",
      icon: "Cpu"
    },
    {
      title: "API Architecture",
      description: "Expert-level API Platform & custom RESTful service design, JSON:API / HAL specifications, OAuth2, and JWT auth.",
      icon: "Network"
    },
    {
      title: "Technical Leadership",
      description: "Architecture decision records (ADR), code reviews, technical debt reduction, SOLID coaching, and Agile practices.",
      icon: "Users"
    }
  ],
  stats: [
    { label: "Core Stack Focus", value: "PHP / Symfony", subtext: "Strict Backend Specialization" },
    { label: "API Framework", value: "API Platform", subtext: "REST, GraphQL & OpenAPI" },
    { label: "Database Engine", value: "MySQL / Doctrine", subtext: "Query & Index Optimization" },
    { label: "Methodology", value: "SOLID & DDD", subtext: "Clean Architecture Principles" }
  ]
};
